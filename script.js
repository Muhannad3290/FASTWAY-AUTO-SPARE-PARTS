// --- GLOBAL SETUP & LOCAL STORAGE KEY ---
const LOCAL_STORAGE_KEY = 'sparePartsCatalog';

window.allPartsData = [];
window.filteredPartsData = [];
window.PARTS_KEYS = ['zoren_no', 'oem_no', 'car_maker', 'applications'];
window.currentPartToEdit = null;

// Load persistent settings
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

    toast.className = toast p-4 mb-3 text-white rounded-lg shadow-xl ${bgColor};
    toast.innerHTML = <div class="font-semibold">${type.toUpperCase()}</div><p class="text-sm">${message}</p>;

    container.appendChild(toast);
    
    // Auto-remove the toast after 5 seconds
    setTimeout(() => {
        toast.remove();
    }, 5000);
};

// --- LOCAL DATA PERSISTENCE ---

const saveLocalData = () => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(window.allPartsData));
    } catch (e) {
        console.error("Error saving data to localStorage:", e);
        window.showToast("Local data storage failed!", 'error');
    }
};

const loadLocalData = () => {
    try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Error parsing data from localStorage:", e);
        window.showToast("Failed to load local data. Starting fresh.", 'warning');
        return [];
    }
};

// --- APP INITIALIZATION ---

const initApp = () => {
    window.allPartsData = loadLocalData();
    
    // Load saved search term
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    document.getElementById('search-input').value = savedSearchTerm;
    
    // Set initial UI status
    document.getElementById('status-message').textContent = 'Local Storage Mode';
    
    loadAndRender();
};

window.onload = initApp;

// --- UI DATA OPERATIONS ---

// Function to load data from local storage, calculate summary, and render the UI
window.loadAndRender = () => {
    // Recalculate summary data
    const carMakers = new Set();
    window.allPartsData.forEach(data => {
        if (data.car_maker && data.car_maker.trim()) {
            carMakers.add(data.car_maker.trim().toLowerCase());
        }
    });
    
    // Update Header Summary
    document.getElementById('total-parts-count').textContent = window.allPartsData.length;
    document.getElementById('unique-makers-count').textContent = carMakers.size;

    searchAndRender();
};

// Function to clean and save pasted JSON data with DUPLICATE CHECK
window.savePastedData = async () => {
    const jsonTextarea = document.getElementById('json-input');
    const statusBox = document.getElementById('json-import-status');
    const pasteButton = document.getElementById('import-btn');

    statusBox.textContent = 'Parsing and cleaning data...';
    pasteButton.disabled = true;
    statusBox.classList.remove('text-red-500', 'text-green-600');
    statusBox.classList.add('text-blue-600');

    try {
        let pastedData = JSON.parse(jsonTextarea.value);
        if (!Array.isArray(pastedData)) {
            if (typeof pastedData === 'object' && pastedData !== null) {
                pastedData = [pastedData];
            } else {
                throw new Error("Pasted content must be a valid JSON array or object.");
            }
        }
        
        // Clean, Filter, and Check for Duplicates
        const existingZorenNos = new Set(window.allPartsData.map(p => p.zoren_no));
        const recordsToImport = [];
        let skippedCount = 0;
        
        pastedData.forEach((part, index) => {
            const cleanPart = {};
            let zorenNoValue = '';

            // 1. Clean and Normalize all required fields
            window.PARTS_KEYS.forEach(key => {
                const normalizedKey = key.toLowerCase();
                let value = null;
                
                // Find value regardless of key case
                const foundKey = Object.keys(part).find(k => k.toLowerCase() === normalizedKey);
                if (foundKey) {
                    value = part[foundKey];
                }

                if (key === 'oem_no') {
                    cleanPart[key] = (typeof value === 'string' ? value.trim() : String(value || ''))
                        .split(/\s+|,/g) // Split by space or comma
                        .map(oem => oem.trim())
                        .filter(oem => oem.length > 0);
                } else {
                    const cleanedVal = (typeof value === 'string' ? value.trim() : String(value || '')).trim();
                    cleanPart[key] = cleanedVal;
                    if (key === 'zoren_no') {
                        zorenNoValue = cleanedVal;
                    }
                }
            });

            // 2. Mandatory Zoren No. check
            if (zorenNoValue.length === 0) {
                console.warn(Skipped record ${index + 1}: Missing mandatory Zoren No. Original data:, part);
                skippedCount++;
                return;
            }

            // 3. Duplicate check (against existing data)
            if (existingZorenNos.has(zorenNoValue)) {
                console.warn(Skipped record ${index + 1}: Duplicate Zoren No. (${zorenNoValue}) already exists in catalog.);
                skippedCount++;
                return;
            }

            // 4. Duplicate check (against the current batch)
            if (recordsToImport.some(p => p.zoren_no === zorenNoValue)) {
                console.warn(Skipped record ${index + 1}: Duplicate Zoren No. (${zorenNoValue}) within the current import batch.);
                skippedCount++;
                return;
            }
            
            // Assign a unique temporary ID for local storage mode
            cleanPart.id = crypto.randomUUID(); 

            // If all checks pass
            recordsToImport.push(cleanPart);
        }); 
        
        const addedCount = recordsToImport.length;
        
        if (addedCount === 0) {
            const msg = skippedCount > 0 ? 
                All ${skippedCount} parts were skipped. Check your console (F12) for detailed reasons (likely missing Zoren No. or duplicates). :
                'Import failed. No valid spare parts found after cleaning.';
            statusBox.textContent = msg;
            statusBox.classList.remove('text-blue-600');
            statusBox.classList.add('text-red-500');
            if (skippedCount === 0) throw new Error("No valid data found in paste.");
            return;
        }

        statusBox.textContent = `Cleaning complete. Found ${addedCount} new parts. ${skippedCount > 0 ? (${skippedCount} skipped). : ''} Saving to local storage...`;

        // 5. Commit to Global Data and Local Storage
        window.allPartsData.push(...recordsToImport);
        saveLocalData();
        loadAndRender(); // Re-render the whole catalog

        const finalMessage = `Successfully imported ${addedCount} new parts! ${skippedCount > 0 ? (${skippedCount} skipped). : ''}`;
        statusBox.textContent = finalMessage;
        statusBox.classList.remove('text-blue-600');
        statusBox.classList.add('text-green-600');
        window.showToast(finalMessage, 'success');
        jsonTextarea.value = ''; // Clear input on success

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
        
        // Duplicate check logic
        const isDuplicate = window.allPartsData.some(p => 
            p.zoren_no === zoren_no && p.id !== partId
        );
        if (isDuplicate) {
            throw new Error(Zoren No. "${zoren_no}" already exists in the catalog.);
        }

        // Prepare data object
        const updatedPart = {
            zoren_no: zoren_no,
            oem_no: oem_no_str.split(/\s+|,/g).map(oem => oem.trim()).filter(oem => oem.length > 0),
            car_maker: car_maker,
            applications: applications
        };

        if (isNew) {
            updatedPart.id = crypto.randomUUID(); // Assign unique ID for new local record
            window.allPartsData.push(updatedPart);
        } else {
            // Find and update the existing record
            const index = window.allPartsData.findIndex(p => p.id === partId);
            if (index !== -1) {
                window.allPartsData[index] = { ...updatedPart, id: partId };
            }
        }
        
        saveLocalData(); // Save changes to localStorage
        loadAndRender(); // Update UI

        const successMsg = Part ${zoren_no} successfully ${isNew ? 'created' : 'updated'}!;
        statusBox.textContent = successMsg;
        statusBox.classList.add('text-green-600');
        window.showToast(successMsg, 'success');
        setTimeout(window.closeEditModal, 1500);

    } catch (error) {
        console.error(${action} Error:, error);
        const msg = `${action} failed: ` + error.message;
        statusBox.textContent = msg;
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
        // Remove the part from the global array
        window.allPartsData = window.allPartsData.filter(p => p.id !== partId);
        saveLocalData(); // Update localStorage
        loadAndRender(); // Update UI
        
        window.showToast(Part ${zorenNo} deleted successfully., 'success');
    } catch (error) {
        console.error("Delete Error:", error);
        window.showToast(Deletion of ${zorenNo} failed: ${error.message}, 'error');
    }
};


// --- UI & RENDERING LOGIC ---

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

    // 1. Filter Data (client-side search across all keys)
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
        const emptyMessage = searchTerm ? No results found for "${searchTerm}". : "The catalog is empty. Start by adding a part manually or importing JSON data.";
        
        // For Desktop Table
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = window.PARTS_KEYS.length + 1; 
        cell.className = 'py-8 text-center text-gray-400 italic bg-white';
        cell.textContent = emptyMessage;
        
        // For Mobile Cards
        mobileContainer.innerHTML = <div class="p-8 text-center text-gray-400 italic bg-white rounded-xl">${emptyMessage}</div>;

        document.getElementById('result-count').textContent = Showing 0 / ${window.allPartsData.length} parts;
        return;
    }

    window.filteredPartsData.forEach(part => {
        const oemChipsHtml = (Array.isArray(part.oem_no) && part.oem_no.length > 0) ? part.oem_no.map(oem => 
            `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1.5 mb-1.5 shadow-sm">
                ${oem}
            </span>`
        ).join('') : '<span class="text-gray-400 italic">None</span>';


        // --- DESKTOP TABLE ROW ---
        const row = tableBody.insertRow();
        row.className = 'border-t border-gray-100 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out';
        
        // ZOREN NO.
        let cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm font-semibold text-gray-900 whitespace-nowrap min-w-[120px]';
        cell.textContent = part.zoren_no || '';

        // OEM NO. (Rendered as chips)
        cell = row.insertCell();
        cell.className = 'px-4 py-3 text-sm text-gray-700 min-w-[150px]';
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
                class="text-indigo-600 hover:text-indigo-900 transition mr-3 transform hover:scale-110 focus:outline-none">
                <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-7-7l4 4m-4-4l-9 9m9-9l9 9"></path></svg>
            </button>
            <button onclick="showConfirmDelete('${part.id}', '${part.zoren_no}')" title="Delete Part"
                class="text-red-600 hover:text-red-900 transition transform hover:scale-110 focus:outline-none">
                <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
        `;
        
        // --- MOBILE CARD ---
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded-xl shadow-md border border-gray-100 space-y-2';
        card.innerHTML = `
            <div class="flex justify-between items-center border-b pb-2">
                <span class="text-lg font-bold text-indigo-700">${part.zoren_no || 'N/A'}</span>
                <div class="flex space-x-2">
                    <button onclick="openEditModal('${part.id}')" title="Edit Part" class="text-indigo-600 hover:text-indigo-900 transition transform hover:scale-110 focus:outline-none">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-7-7l4 4m-4-4l-9 9m9-9l9 9"></path></svg>
                    </button>
                    <button onclick="showConfirmDelete('${part.id}', '${part.zoren_no}')" title="Delete Part" class="text-red-600 hover:text-red-900 transition transform hover:scale-110 focus:outline-none">
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
                <div class="mt-1">${oemChipsHtml}</div>
            </div>
            <div class="text-sm">
                <p class="text-gray-500 font-medium">Applications:</p>
                <p class="text-gray-600 line-clamp-2">${part.applications || 'N/A'}</p>
            </div>
        `;
        mobileContainer.appendChild(card);
    });

    document.getElementById('result-count').textContent = 
        Showing ${window.filteredPartsData.length} / ${window.allPartsData.length} parts;
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
