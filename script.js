// Remove all Firebase imports
// import { initializeApp, getAuth, signInAnonymously, onAuthStateChanged, getFirestore, collection, onSnapshot, doc, writeBatch, deleteDoc, setDoc } from "firebase/xxx.js";

// --- GLOBAL SETUP (Local Storage Focused) ---
const LOCAL_STORAGE_KEY = 'sparePartsCatalogData';

window.allPartsData = [];
window.filteredPartsData = [];
window.PARTS_KEYS = ['zoren_no', 'oem_no', 'car_maker', 'applications']; 
window.currentPartToEdit = null;

// Load persistent settings
window.sortColumn = localStorage.getItem('sortColumn') || 'zoren_no';
window.sortDirection = localStorage.getItem('sortDirection') || 'asc';

// --- LOCAL STORAGE DATA OPERATIONS ---

/** Loads data from localStorage or initializes if empty. */
const loadDataFromLocal = () => {
    try {
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        window.allPartsData = storedData ? JSON.parse(storedData) : [];
    } catch (e) {
        console.error("Error reading from local storage:", e);
        window.allPartsData = [];
    }
    // Update summary counts and render immediately
    updateHeaderSummary();
    searchAndRender();
};

/** Saves current data array to localStorage. */
const saveToLocal = () => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(window.allPartsData));
    } catch (e) {
        console.error("Error writing to local storage:", e);
        window.showToast("Warning: Failed to save data locally.", 'warning');
    }
    updateHeaderSummary();
};

/** Generates a unique, high-entropy ID for new parts. */
const generateUniqueId = () => {
    return 'LID_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
};

// --- INITIALIZATION ---

const updateHeaderSummary = () => {
    const carMakers = new Set();
    window.allPartsData.forEach(p => {
        if (p.car_maker && p.car_maker.trim()) {
            carMakers.add(p.car_maker.trim().toLowerCase());
        }
    });
    document.getElementById('total-parts-count').textContent = window.allPartsData.length;
    document.getElementById('unique-makers-count').textContent = carMakers.size;
};

const loadInitialData = () => {
    // Buttons are enabled by default as there is no auth needed
    // document.getElementById('status-message').innerText is handled by HTML
    loadDataFromLocal(); 
};

window.onload = loadInitialData;


// --- UTILITY FUNCTIONS (TOAST & UI CONTROL) ---

/** Shows a custom toast notification. */
window.showToast = (message, type = 'info') => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    let bgColor = 'bg-blue-600';
    if (type === 'success') bgColor = 'bg-green-600';
    if (type === 'error') bgColor = 'bg-red-600';
    if (type === 'warning') bgColor = 'bg-yellow-600';

    // Fix: Ensure template literal uses backticks (`)
    toast.className = `toast p-4 mb-3 text-white rounded-lg shadow-xl ${bgColor}`;
    toast.innerHTML = `<div class="font-semibold">${type.toUpperCase()}</div><p class="text-sm">${message}</p>`;

    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

// --- CRUD Operations (Local Only) ---

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
            oem_no: oem_no_str.split(/\s+|,/g).map(oem => oem.trim()).filter(oem => oem.length > 0),
            car_maker: car_maker,
            applications: applications
        };

        if (isNew) {
            updatedPart.id = generateUniqueId();
            window.allPartsData.push(updatedPart);
        } else {
            const index = window.allPartsData.findIndex(p => p.id === partId);
            if (index !== -1) {
                window.allPartsData[index] = { ...updatedPart, id: partId };
            }
        }
        
        saveToLocal(); // Save data to local storage

        const successMsg = `Part ${zoren_no} successfully ${isNew ? 'created' : 'updated'}!`;
        statusBox.textContent = successMsg;
        statusBox.classList.remove('text-blue-600');
        statusBox.classList.add('text-green-600');
        window.showToast(successMsg, 'success');
        searchAndRender();
        setTimeout(window.closeEditModal, 1500);

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

    if (!partId) return;

    try {
        const initialLength = window.allPartsData.length;
        window.allPartsData = window.allPartsData.filter(p => p.id !== partId);
        
        if (window.allPartsData.length < initialLength) {
            saveToLocal(); // Save updated array
            window.showToast(`Part ${zorenNo} deleted successfully.`, 'success');
            searchAndRender();
        } else {
            throw new Error("Part not found in data.");
        }
    } catch (error) {
        console.error("Delete Error:", error);
        window.showToast(`Deletion of ${zorenNo} failed: ${error.message}`, 'error');
    }
};


// --- JSON Import Logic ---

window.savePastedData = async () => {
    const jsonTextarea = document.getElementById('json-input');
    const statusBox = document.getElementById('json-import-status');
    const pasteButton = document.getElementById('import-btn');

    statusBox.textContent = 'Processing...';
    pasteButton.disabled = true;
    statusBox.classList.remove('text-red-500', 'text-green-600');
    statusBox.classList.add('text-blue-600');
    statusBox.className = 'text-sm font-medium mt-1 text-blue-600 min-h-4';

    let rawDataString = jsonTextarea.value.trim();

    try {
        if (!rawDataString) {
            throw new Error("No data found in JSON text area to import.");
        }

        statusBox.textContent = 'Parsing and cleaning data...';

        let pastedData = JSON.parse(rawDataString);
        if (!Array.isArray(pastedData)) {
            if (typeof pastedData === 'object' && pastedData !== null) {
                pastedData = [pastedData];
            } else {
                throw new Error("Content must be a valid JSON array or object.");
            }
        }
        
        const existingZorenNos = new Set(window.allPartsData.map(p => p.zoren_no));
        const newParts = [];
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
                    const oemInput = Array.isArray(value) ? value.join(' ') : String(value || '');
                    cleanPart[key] = oemInput
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

            if (isValid && cleanPart.zoren_no && cleanPart.zoren_no.length > 0) {
                if (existingZorenNos.has(cleanPart.zoren_no)) {
                    duplicatesFound++;
                } else {
                    cleanPart.id = generateUniqueId(); // Assign local ID
                    newParts.push(cleanPart);
                    existingZorenNos.add(cleanPart.zoren_no);
                }
            }
        }); 

        if (newParts.length === 0) {
            const msg = duplicatesFound > 0 ? 
                `All ${duplicatesFound} parts were already in the catalog (Duplicate Zoren No. skipped).` :
                'Import failed. No new valid spare parts found.';
            statusBox.textContent = msg;
            statusBox.className = 'text-sm font-medium mt-1 text-red-500 min-h-4';
            if (duplicatesFound === 0) throw new Error("No valid data found.");
            return;
        }

        // Append new parts to the main array and save
        window.allPartsData.push(...newParts);
        saveToLocal();
        searchAndRender();

        const finalMessage = `Successfully imported ${newParts.length} new parts! ${duplicatesFound > 0 ? `(${duplicatesFound} duplicates were skipped).` : ''}`;
        statusBox.textContent = finalMessage;
        statusBox.className = 'text-sm font-medium mt-1 text-green-600 min-h-4';
        window.showToast(finalMessage, 'success');
        jsonTextarea.value = ''; // Clear input on success
        document.getElementById('json-prettify-status').textContent = '';


    } catch (error) {
        console.error("Import Error:", error);
        const msg = 'Import failed: ' + error.message;
        statusBox.textContent = msg;
        statusBox.classList.remove('text-blue-600');
        statusBox.classList.add('text-red-500');
        window.showToast(msg, 'error');
    } finally {
        pasteButton.disabled = false;
    }
};


// --- UI & RENDERING LOGIC (Remains largely the same) ---

window.toggleImportPanel = (show) => {
    const modal = document.getElementById('import-modal-backdrop');
    if (show) {
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
        document.getElementById('json-import-status').textContent = '';
        document.getElementById('json-prettify-status').textContent = '';
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

    // 1. Filter Data 
    let currentData = window.allPartsData;
    if (searchTerm.trim()) {
        currentData = window.allPartsData.filter(part => 
            window.PARTS_KEYS.some(key => {
                const value = part[key];
                if (Array.isArray(value)) {
                    return value.some(item => String(item).toLowerCase().includes(searchTerm));
                }
                return value && String(value).toLowerCase().includes(searchTerm);
            })
        );
    }

    // 2. Sort Data 
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
        const oemChipsHtml = (Array.isArray(part.oem_no) && part.oem_no.length > 0) ? part.oem_no.map(oem => 
            `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1.5 mb-1.5 shadow-sm">
                ${oem}
            </span>`
        ).join('') : '<span class="text-gray-400 italic">None</span>';
        
        const safeZorenNo = part.zoren_no ? part.zoren_no.replace(/'/g, "\\'") : 'N/A';

        // --- DESKTOP TABLE ROW ---
        const row = tableBody.insertRow();
        row.className = 'border-t border-gray-100 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out';
        
        let cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap min-w-[120px]';
        cell.textContent = part.zoren_no || '';

        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-700 min-w-[150px] max-w-sm';
        cell.innerHTML = oemChipsHtml;

        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-600 whitespace-nowrap min-w-[100px]';
        cell.textContent = part.car_maker || '';

        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis';
        cell.textContent = part.applications || ''; 

        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm font-medium text-center whitespace-nowrap min-w-[80px]';
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

window.exportJson = () => {
    if (window.filteredPartsData.length === 0) {
        window.showToast("No data currently filtered to export!", 'warning');
        return;
    }

    const exportableData = window.filteredPartsData.map(part => {
        const { id, ...rest } = part; // Exclude the temporary 'id'
        return {
            ...rest,
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
