import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, onSnapshot, doc, writeBatch, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// --- GLOBAL SETUP ---
// NOTE: Replace these with actual values when deploying
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
const API_MODEL = 'gemini-2.5-flash-preview-09-2025';
const API_KEY = ""; // Managed by environment
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${API_MODEL}:generateContent?key=${API_KEY}`;


let db, auth;
let userId = null;
let isAuthReady = false;

window.allPartsData = [];
window.filteredPartsData = [];
// Define the standard keys for parts
window.PARTS_KEYS = ['zoren_no', 'oem_no', 'car_maker', 'applications']; 
window.currentPartToEdit = null;

// Load persistent settings (important for user experience)
window.sortColumn = localStorage.getItem('sortColumn') || 'zoren_no';
window.sortDirection = localStorage.getItem('sortDirection') || 'asc';

// --- UTILITY FUNCTIONS (TOAST) ---

/** Shows a custom toast notification. */
window.showToast = (message, type = 'info') => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    let bgColor = 'bg-blue-600';
    if (type === 'success') bgColor = 'bg-green-600';
    if (type === 'error') bgColor = 'bg-red-600';
    if (type === 'warning') bgColor = 'bg-yellow-600';

    toast.className = `toast toast p-4 mb-3 text-white rounded-lg shadow-xl ${bgColor}`;
    toast.innerHTML = `<div class="font-semibold">${type.toUpperCase()}</div><p class="text-sm">${message}</p>`;

    container.appendChild(toast);
    
    // Auto-remove the toast after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

// --- FILE UTILITIES ---
/** Converts a File object to a Base64 string. */
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Extract Base64 part after the comma
            const base64String = e.target.result.split(',')[1];
            resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

// --- FIREBASE INITIALIZATION AND AUTH ---

const initFirebase = async () => {
    if (!firebaseConfig) {
        console.error("Firebase configuration is missing.");
        document.getElementById('status-message').innerText = "ERROR: Firebase config missing. Cannot persist data.";
        window.showToast("Firebase config missing. Data cannot be saved.", 'error');
        return;
    }

    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);

    // Authentication logic
    try {
        if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
        } else {
            await signInAnonymously(auth);
        }
    } catch (e) {
        console.error("Authentication failed:", e);
        // Fallback attempt
        await signInAnonymously(auth); 
    }

    onAuthStateChanged(auth, (user) => {
        isAuthReady = true;
        if (user) {
            userId = user.uid;
            console.log("Firebase Auth Ready. User ID:", userId);
            document.getElementById('status-message').innerText = `Authenticated`;
            document.getElementById('user-id-display').textContent = userId;
            
            // Load saved search term and render initial view
            const savedSearchTerm = localStorage.getItem('searchTerm') || '';
            document.getElementById('search-input').value = savedSearchTerm;
            
            listenForPartsData();
        } else {
            console.log("No user signed in.");
            document.getElementById('status-message').innerText = "Not Authenticated";
            document.getElementById('user-id-display').textContent = 'N/A';
            window.showToast("Authentication failed. Using anonymous mode.", 'warning');
        }
    });
};

window.onload = initFirebase;

// --- FIRESTORE DATA OPERATIONS ---

const getCollectionRef = () => {
    if (!userId) {
        throw new Error("User ID not available for database operation."); 
    }
    // Private data path: /artifacts/{appId}/users/{userId}/spare_parts
    return collection(db, 'artifacts', appId, 'users', userId, 'spare_parts');
};

// Real-time listener for spare parts data
const listenForPartsData = () => {
    if (!isAuthReady || !userId) return;

    const partsCollection = getCollectionRef();
    // Attach real-time listener
    onSnapshot(partsCollection, (snapshot) => {
        const parts = [];
        const carMakers = new Set();
        snapshot.forEach((doc) => {
            const data = doc.data();
            parts.push({ id: doc.id, ...data });
            if (data.car_maker && data.car_maker.trim()) {
                carMakers.add(data.car_maker.trim().toLowerCase());
            }
        });
        console.log("Data fetched/updated:", parts.length, "parts.");
        window.allPartsData = parts;
        
        // Update Header Summary
        document.getElementById('total-parts-count').textContent = parts.length;
        document.getElementById('unique-makers-count').textContent = carMakers.size;

        searchAndRender(); // Re-render the UI with new data
    }, (error) => {
        console.error("Error listening to Firestore:", error);
        window.showToast("Error loading data: " + error.message, 'error');
    });
};

// --- LLM API CALLER SCHEMAS ---

const JSON_SCHEMA = {
    type: "ARRAY",
    description: "A list of structured spare parts objects.",
    items: {
        type: "OBJECT",
        properties: {
            zoren_no: { type: "STRING", description: "The unique part number, often called Zoren No. or internal part ID. Must be present." },
            oem_no: { type: "STRING", description: "All OEM part numbers associated with this part, separated by space or comma." },
            car_maker: { type: "STRING", description: "The name of the car manufacturer (e.g., Toyota, Ford, BMW). Must be present." },
            applications: { type: "STRING", description: "A brief description of the vehicle models or engine types this part is used for." }
        },
        required: ["zoren_no", "car_maker"],
        propertyOrdering: ["zoren_no", "oem_no", "car_maker", "applications"]
    }
};

// --- AI CONVERSION LOGIC (IMAGE) ---

window.handleImageConversion = async () => {
    const imageInput = document.getElementById('image-file-input');
    const files = imageInput.files;
    const statusBox = document.getElementById('conversion-status-image');
    const convertButton = document.getElementById('convert-image-btn');
    const maxFiles = 10;
    const spinner = document.getElementById('image-conversion-spinner');

    if (files.length === 0) {
        statusBox.textContent = 'Please select at least one image file to convert.';
        statusBox.className = 'text-sm font-medium mt-1 text-yellow-600 min-h-4';
        return;
    }

    if (files.length > maxFiles) {
        statusBox.textContent = `Error: Please select a maximum of ${maxFiles} images at once.`;
        statusBox.className = 'text-sm font-medium mt-1 text-red-500 min-h-4';
        return;
    }
    
    // Clear the main JSON paste area before starting conversion
    document.getElementById('json-input').value = '';

    statusBox.textContent = `Preparing ${files.length} images for AI analysis...`;
    convertButton.disabled = true;
    spinner.classList.remove('hidden');
    statusBox.className = 'text-sm font-medium mt-1 text-blue-600 min-h-4';

    try {
        const imageParts = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            statusBox.textContent = `Step 1/2: Converting image ${i + 1} of ${files.length} to Base64...`;
            const base64ImageData = await fileToBase64(file);
            imageParts.push({
                inlineData: {
                    mimeType: file.type || 'image/jpeg',
                    data: base64ImageData
                }
            });
        }
        
        statusBox.textContent = `Step 2/2: Processing ${files.length} image(s) with AI Vision (Deep Analysis)...`;

        const userQuery = "You are a specialized data extraction AI. Analyze the image(s) content and strictly extract all tabular spare parts data from ALL images provided. Aggregate the results into a single JSON array structure, identifying the unique Zoren No, OEM part numbers, Car Maker, and vehicle Applications. If a value is missing, use an empty string. The output must be one single JSON array.";

        const payload = {
            contents: [
                { 
                    role: "user",
                    parts: [
                        { text: userQuery },
                        ...imageParts // Spread all image parts here
                    ]
                }
            ],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: JSON_SCHEMA
            }
        };
        
        const jsonText = await fetchAiStructuredData(payload);

        // 1. Prettify the received JSON and put it in the main paste field
        const parsedJson = JSON.parse(jsonText);
        const mainJsonTextarea = document.getElementById('json-input');
        mainJsonTextarea.value = JSON.stringify(parsedJson, null, 2);
        
        statusBox.textContent = 'Image conversion successful. Data is ready for final import.';
        statusBox.className = 'text-sm font-medium mt-1 text-green-600 min-h-4';
        imageInput.value = ''; // Clear file input
        document.getElementById('json-prettify-status').textContent = 'Converted data placed below.';

        // 2. Automatically initiate the final database save step
        window.showToast("AI image conversion complete. Starting database import...", 'info');
        await window.savePastedData();


    } catch (error) {
        console.error("AI Image Conversion Error:", error);
        statusBox.textContent = `Conversion failed: ${error.message}`;
        statusBox.className = 'text-sm font-medium mt-1 text-red-500 min-h-4';
        window.showToast("AI image conversion failed.", 'error');
    } finally {
        convertButton.disabled = false;
        spinner.classList.add('hidden');
    }
};

/** Handles fetching structured JSON data from Gemini, including retry logic. */
const fetchAiStructuredData = async (payload) => {
    let response = null;
    let finalError = null;
    
    // Implement exponential backoff for API call
    for (let i = 0; i < 3; i++) {
        try {
            response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) break;
        } catch (e) {
            finalError = e;
        }
        // If not ok, wait (1s, 2s, 4s) before retrying
        if (i < 2) await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i))); 
    }
    
    if (!response || !response.ok) {
        // Read response body if available to include more detail in error message
        let errorDetails = response ? `Status: ${response.status}` : finalError.message;
        try {
            const errorJson = await response.json();
            errorDetails += ` - ${JSON.stringify(errorJson)}`;
        } catch {}
        
        throw new Error(`AI API call failed: ${errorDetails}`);
    }

    const result = await response.json();
    const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!jsonText) {
        throw new Error("AI failed to return structured JSON content.");
    }
    return jsonText;
};


// Function to clean and save pasted JSON data
window.savePastedData = async () => {
    const jsonTextarea = document.getElementById('json-input');
    const statusBox = document.getElementById('json-import-status');
    const pasteButton = document.getElementById('import-btn');

    statusBox.textContent = 'Processing...';
    pasteButton.disabled = true;
    statusBox.className = 'text-sm font-medium mt-1 text-blue-600 min-h-4';

    if (!isAuthReady || !userId) {
        statusBox.textContent = 'Error: Authentication not ready. Please wait a moment.';
        statusBox.className = 'text-sm font-medium mt-1 text-red-500 min-h-4';
        pasteButton.disabled = false;
        return;
    }

    let rawDataString = jsonTextarea.value.trim();

    try {
        if (!rawDataString) {
            throw new Error("No data found in JSON text area to import.");
        }

        // --- CORE PARSING AND CLEANING ---
        statusBox.textContent = 'Parsing and cleaning data...';

        let pastedData = JSON.parse(rawDataString);
        if (!Array.isArray(pastedData)) {
            if (typeof pastedData === 'object' && pastedData !== null) {
                pastedData = [pastedData];
            } else {
                throw new Error("Content must be a valid JSON array or object.");
            }
        }
        
        // Clean, Filter, and Check for Duplicates
        const existingZorenNos = new Set(window.allPartsData.map(p => p.zoren_no));
        const cleanedData = [];
        let duplicatesFound = 0;
        
        pastedData.forEach(part => {
            const cleanPart = {};
            let isValid = false;
            
            window.PARTS_KEYS.forEach(key => {
                const normalizedKey = key.toLowerCase();
                let value = null;
                
                const foundKey = Object.keys(part).find(k => k.toLowerCase() === normalizedKey);
                if (foundKey) {
                    value = part[foundKey];
                }

                if (key === 'oem_no') {
                    cleanPart[key] = (typeof value === 'string' ? value.trim() : String(value || ''))
                        .split(/\s+|,/g) 
                        .map(oem => oem.trim())
                        .filter(oem => oem.length > 0);
                } else {
                    cleanPart[key] = (typeof value === 'string' ? value.trim() : String(value || '')).trim();
                }

                if (cleanPart[key] && (Array.isArray(cleanPart[key]) ? cleanPart[key].length > 0 : cleanPart[key].length > 0)) {
                    isValid = true;
                }
            });

            if (isValid && cleanPart.zoren_no.length > 0) {
                if (existingZorenNos.has(cleanPart.zoren_no)) {
                    duplicatesFound++;
                } else {
                    cleanedData.push(cleanPart);
                    existingZorenNos.add(cleanPart.zoren_no);
                }
            }
        }); 

        if (cleanedData.length === 0) {
            const msg = duplicatesFound > 0 ? 
                `All ${duplicatesFound} parts were already in the catalog (Duplicate Zoren No. skipped).` :
                'Import failed. No valid spare parts found after cleaning.';
            statusBox.textContent = msg;
            statusBox.className = 'text-sm font-medium mt-1 text-red-500 min-h-4';
            if (duplicatesFound === 0) throw new Error("No valid data found.");
            return;
        }

        statusBox.textContent = `Cleaning complete. Found ${cleanedData.length} new parts. ${duplicatesFound > 0 ? `(${duplicatesFound} duplicates skipped).` : ''} Saving to database...`;

        // Save Data to Firestore (using batched writes)
        const partsCollection = getCollectionRef();
        let batch = writeBatch(db);
        const batchLimit = 499;
        let addedCount = 0;

        for (let i = 0; i < cleanedData.length; i++) {
            const part = cleanedData[i];
            const newDocRef = doc(partsCollection); 
            batch.set(newDocRef, part);
            addedCount++;

            if ((i + 1) % batchLimit === 0 || i === cleanedData.length - 1) {
                await batch.commit();
                if (i < cleanedData.length - 1) {
                   batch = writeBatch(db);
                }
            }
        }

        const finalMessage = `Successfully imported ${addedCount} new parts! ${duplicatesFound > 0 ? `(${duplicatesFound} duplicates were skipped).` : ''}`;
        statusBox.textContent = finalMessage;
        statusBox.className = 'text-sm font-medium mt-1 text-green-600 min-h-4';
        window.showToast(finalMessage, 'success');
        jsonTextarea.value = ''; // Clear input on success
        document.getElementById('json-prettify-status').textContent = '';


    } catch (error) {
        console.error("Import Error:", error);
        const msg = 'Import failed: ' + error.message;
        statusBox.textContent = msg;
        statusBox.className = 'text-sm font-medium mt-1 text-red-500 min-h-4';
        window.showToast(msg, 'error');
    } finally {
        pasteButton.disabled = false;
    }
};

// --- CRUD OPERATIONS (ADD/EDIT/DELETE) ---

const resetEditForm = () => {
    document.getElementById('edit-zoren_no').value = '';
    document.getElementById('edit-oem_no').value = '';
    document.getElementById('edit-car_maker').value = '';
    document.getElementById('edit-applications').value = '';
    document.getElementById('edit-modal-title').textContent = 'Add New Spare Part';
    document.getElementById('edit-status').textContent = '';
};

window.openAddModal = () => {
    window.currentPartToEdit = null;
    resetEditForm();
    document.getElementById('edit-modal-title').textContent = 'Add New Spare Part';
    document.getElementById('save-edit-btn').textContent = 'Create Part';
    document.getElementById('edit-modal-backdrop').classList.add('active');
}

window.openEditModal = (partId) => {
    const part = window.allPartsData.find(p => p.id === partId);
    if (!part) return;

    window.currentPartToEdit = part;
    
    document.getElementById('edit-modal-title').textContent = 'Edit Spare Part';
    document.getElementById('save-edit-btn').textContent = 'Save Changes';
    document.getElementById('edit-zoren_no').value = part.zoren_no || '';
    // Display OEM array as a comma-separated string
    document.getElementById('edit-oem_no').value = Array.isArray(part.oem_no) ? part.oem_no.join(', ') : (part.oem_no || '');
    document.getElementById('edit-car_maker').value = part.car_maker || '';
    document.getElementById('edit-applications').value = part.applications || '';

    document.getElementById('edit-status').textContent = '';
    document.getElementById('edit-modal-backdrop').classList.add('active');
};

window.closeEditModal = () => {
    window.currentPartToEdit = null;
    document.getElementById('edit-modal-backdrop').classList.remove('active');
    document.getElementById('edit-status').textContent = '';
};

window.savePart = async () => {
    if (!isAuthReady || !userId) return;

    const statusBox = document.getElementById('edit-status');
    const saveButton = document.getElementById('save-edit-btn');
    statusBox.textContent = 'Processing...';
    saveButton.disabled = true;
    statusBox.classList.remove('text-red-500', 'text-green-600');
    statusBox.classList.add('text-blue-600');

    const partId = window.currentPartToEdit ? window.currentPartToEdit.id : null;
    const isNew = !partId;
    const action = isNew ? "creation" : "update";

    try {
        const zoren_no = document.getElementById('edit-zoren_no').value.trim();
        if (!zoren_no) throw new Error("Zoren No. is mandatory.");

        // Field Validation: Alphanumeric, spaces, and hyphens only
        const zorenRegex = /^[a-zA-Z0-9\s-]+$/;
        if (!zorenRegex.test(zoren_no)) {
            throw new Error("Zoren No. must be alphanumeric and can only contain spaces or hyphens.");
        }

        const oem_no_str = document.getElementById('edit-oem_no').value.trim();
        const car_maker = document.getElementById('edit-car_maker').value.trim();
        const applications = document.getElementById('edit-applications').value.trim();
        
        // Duplicate check logic: Check if another part has the same Zoren No.
        const isDuplicate = window.allPartsData.some(p => 
            p.zoren_no === zoren_no && p.id !== partId
        );
        if (isDuplicate) {
            throw new Error(`Zoren No. "${zoren_no}" already exists in the catalog.`);
        }

        // Prepare data object, splitting OEM string into an array
        const updatedPart = {
            zoren_no: zoren_no,
            oem_no: oem_no_str.split(/\s+|,/g).map(oem => oem.trim()).filter(oem => oem.length > 0), // Convert to array
            car_maker: car_maker,
            applications: applications
        };

        const partsCollection = getCollectionRef();
        let docRef;

        if (isNew) {
            // Create a new document reference with an auto-generated ID
            docRef = doc(partsCollection); 
        } else {
            // Get the reference for the existing document
            docRef = doc(partsCollection, partId);
        }

        // Use setDoc for both creation and update
        await setDoc(docRef, updatedPart);

        const successMsg = `Part ${zoren_no} successfully ${isNew ? 'created' : 'updated'}!`;
        statusBox.textContent = successMsg;
        statusBox.classList.remove('text-blue-600');
        statusBox.classList.add('text-green-600');
        window.showToast(successMsg, 'success');
        setTimeout(window.closeEditModal, 1500); // Close modal after delay

    } catch (error) {
        console.error(`${action} Error:`, error);
        const msg = `${action} failed: ` + error.message;
        statusBox.textContent = msg;
        statusBox.classList.remove('text-blue-600');
        statusBox.classList.add('text-red-500');
        window.showToast(msg, 'error');
    } finally {
        saveButton.disabled = false;
    }
};

window.showConfirmDelete = (partId, zorenNo) => {
    document.getElementById('delete-part-id').value = partId;
    document.getElementById('delete-zoren-no').textContent = zorenNo;
    document.getElementById('delete-modal-backdrop').classList.add('active');
};

window.closeDeleteModal = () => {
    document.getElementById('delete-modal-backdrop').classList.remove('active');
};

window.deletePart = async () => {
    const partId = document.getElementById('delete-part-id').value;
    const zorenNo = document.getElementById('delete-zoren-no').textContent;
    window.closeDeleteModal(); 

    if (!partId || !isAuthReady || !userId) return;

    try {
        // Construct the correct document path using the collection path and partId
        const partDocRef = doc(db, getCollectionRef().path, partId);
        await deleteDoc(partDocRef);
        window.showToast(`Part ${zorenNo} deleted successfully.`, 'success');
    } catch (error) {
        console.error("Delete Error:", error);
        window.showToast(`Deletion of ${zorenNo} failed: ${error.message}`, 'error');
    }
};


// --- UI & RENDERING LOGIC ---

window.toggleImportPanel = (show) => {
    const modal = document.getElementById('import-modal-backdrop');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
        // Clear all statuses and inputs on close
        document.getElementById('json-import-status').textContent = '';
        document.getElementById('json-prettify-status').textContent = '';
        document.getElementById('conversion-status-image').textContent = '';
        document.getElementById('image-file-input').value = ''; 
        document.getElementById('json-input').value = ''; // Clear main paste area on close
        document.getElementById('image-conversion-spinner').classList.add('hidden'); // Hide spinner
    }
};

window.handleSort = (column) => {
    if (window.sortColumn === column) {
        window.sortDirection = window.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        window.sortColumn = column;
        window.sortDirection = 'asc';
    }
    searchAndRender();
}

window.searchAndRender = () => {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    
    // Save search term and sort settings to localStorage (Persistence)
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('sortColumn', window.sortColumn);
    localStorage.setItem('sortDirection', window.sortDirection);

    const tableBody = document.getElementById('parts-table-body');
    const mobileContainer = document.getElementById('mobile-cards-view');

    // 1. Filter Data (client-side search across all keys)
    let currentData = window.allPartsData;
    if (searchTerm.trim()) {
        currentData = window.allPartsData.filter(part => 
            window.PARTS_KEYS.some(key => {
                const value = part[key];
                // Check if value is an array (like oem_no)
                if (Array.isArray(value)) {
                    return value.some(item => String(item).toLowerCase().includes(searchTerm));
                }
                // Check other string values
                return value && String(value).toLowerCase().includes(searchTerm);
            })
        );
    }

    // 2. Sort Data (client-side sorting)
    currentData.sort((a, b) => {
        const aVal = String(a[window.sortColumn] || '').toLowerCase();
        const bVal = String(b[window.sortColumn] || '').toLowerCase();

        if (aVal < bVal) return window.sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return window.sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
    window.filteredPartsData = currentData;


    // 3. Render Table (Desktop View)
    tableBody.innerHTML = ''; 
    mobileContainer.innerHTML = ''; // Clear mobile cards

    // Update sorting indicators
    document.querySelectorAll('[data-sort-col]').forEach(th => {
        const col = th.getAttribute('data-sort-col');
        const icon = th.querySelector('.sort-icon');
        if (icon) {
            icon.innerHTML = '';
            if (col === window.sortColumn) {
                icon.innerHTML = window.sortDirection === 'asc' ? '&#9650;' : '&#9660;';
            }
        }
    });
    
    if (window.filteredPartsData.length === 0) {
        const emptyMessage = searchTerm ? `No results found for "${searchTerm}".` : "The catalog is empty. Start by adding a part manually or importing JSON data.";
        
        // For Desktop Table
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = window.PARTS_KEYS.length + 1; 
        cell.className = 'py-8 text-center text-gray-400 italic bg-white';
        cell.textContent = emptyMessage;
        
        // For Mobile Cards
        mobileContainer.innerHTML = `<div class="p-8 text-center text-gray-400 italic bg-white rounded-xl shadow-md">${emptyMessage}</div>`;

        document.getElementById('result-count').textContent = `Showing 0 / ${window.allPartsData.length} parts`;
        return;
    }

    window.filteredPartsData.forEach(part => {
        // Function to generate the OEM chips HTML
        const oemChipsHtml = (Array.isArray(part.oem_no) && part.oem_no.length > 0) ? part.oem_no.map(oem => 
            `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1.5 mb-1.5 shadow-sm">
                ${oem}
            </span>`
        ).join('') : '<span class="text-gray-400 italic">None</span>';
        
        // Safely escape Zoren No. for use in the onclick string
        const safeZorenNo = part.zoren_no ? part.zoren_no.replace(/'/g, "\\'") : 'N/A';


        // --- DESKTOP TABLE ROW ---
        const row = tableBody.insertRow();
        row.className = 'border-t border-gray-100 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out';
        
        // ZOREN NO.
        let cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap min-w-[120px]';
        cell.textContent = part.zoren_no || '';

        // OEM NO. (Rendered as chips)
        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-700 min-w-[150px] max-w-sm';
        cell.innerHTML = oemChipsHtml;

        // CAR MAKER
        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-600 whitespace-nowrap min-w-[100px]';
        cell.textContent = part.car_maker || '';

        // APPLICATIONS
        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis';
        cell.textContent = part.applications || ''; 

        // ACTIONS
        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm font-medium text-right whitespace-nowrap min-w-[80px]';
        cell.innerHTML = `
            <button onclick="openEditModal('${part.id}')" title="Edit Part"
                class="text-indigo-600 hover:text-indigo-800 transition mr-3 transform hover:scale-110 focus:outline-none">
                <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-7-7l4 4m-4-4l-9 9m9-9l9 9"></path></svg>
            </button>
            <button onclick="showConfirmDelete('${part.id}', '${safeZorenNo}')" title="Delete Part"
                class="text-red-600 hover:text-red-800 transition transform hover:scale-110 focus:outline-none">
                <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        `;
        
        // --- MOBILE CARD ---
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-xl shadow-md border border-gray-200 space-y-2';
        card.innerHTML = `
            <div class="flex justify-between items-start border-b pb-2">
                <span class="text-xl font-bold text-indigo-700 break-words">${part.zoren_no || 'N/A'}</span>
                <div class="flex space-x-2 flex-shrink-0 mt-0.5">
                    <button onclick="openEditModal('${part.id}')" title="Edit Part" class="text-indigo-600 hover:text-indigo-800 transition transform hover:scale-110 focus:outline-none">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-7-7l4 4m-4-4l-9 9m9-9l9 9"></path></svg>
                    </button>
                    <button onclick="showConfirmDelete('${part.id}', '${safeZorenNo}')" title="Delete Part" class="text-red-600 hover:text-red-800 transition transform hover:scale-110 focus:outline-none">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            </div>
            <div class="text-sm">
                <p class="text-gray-500 font-medium">Car Maker:</p>
                <p class="font-semibold text-gray-800">${part.car_maker || 'N/A'}</p>
            </div>
            <div class="text-sm">
                <p class="text-gray-500 font-medium">OEM No.:</p>
                <div class="mt-1 flex flex-wrap">${oemChipsHtml}</div>
            </div>
            <div class="text-sm">
                <p class="text-gray-500 font-medium">Applications:</p>
                <p class="text-gray-600 line-clamp-2">${part.applications || 'N/A'}</p>
            </div>
        `;
        mobileContainer.appendChild(card);
    });

    document.getElementById('result-count').textContent = 
        `Showing ${window.filteredPartsData.length} / ${window.allPartsData.length} parts`;
};

// --- EXPORT & PRETTIFY (as before) ---

window.exportJson = () => {
    if (window.filteredPartsData.length === 0) {
        window.showToast("No data currently filtered to export!", 'warning');
        return;
    }

    const exportableData = window.filteredPartsData.map(part => {
        const { id, ...rest } = part;
        return {
            ...rest,
            // Join OEM array back into a space-separated string for export
            oem_no: Array.isArray(rest.oem_no) ? rest.oem_no.join(' ') : rest.oem_no 
        };
    });

    const jsonString = JSON.stringify(exportableData, null, 2); 
    
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spare_parts_catalog_export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    window.showToast("Export initiated successfully.", 'success');
};

window.prettifyJson = () => {
    const jsonTextarea = document.getElementById('json-input');
    const statusBox = document.getElementById('json-prettify-status');
    try {
        const parsed = JSON.parse(jsonTextarea.value);
        jsonTextarea.value = JSON.stringify(parsed, null, 2);
        statusBox.textContent = 'JSON formatted neatly.';
        statusBox.classList.remove('text-red-500');
        statusBox.classList.add('text-green-500');
    } catch (e) {
        statusBox.textContent = 'Invalid JSON: Cannot format.';
        statusBox.classList.remove('text-green-500');
        statusBox.classList.add('text-red-500');
    }
};
