@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
body { 
    font-family: 'Inter', sans-serif; 
}

/* Floating action button (FAB) */
#import-toggle-btn, #add-part-btn {
    position: fixed;
    bottom: 2rem;
    z-index: 50;
}
#import-toggle-btn { 
    right: 2rem; 
}
/* Adjusted for smaller screen visibility */
#add-part-btn { 
    right: 10rem; 
} 
@media (min-width: 768px) { 
    #add-part-btn { 
        right: 15rem; 
    } 
}

/* Custom modal backdrop */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 40;
    display: none;
    justify-content: center;
    align-items: center;
}
.modal-backdrop.active {
    display: flex;
}

/* Toast Container */
#toast-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
    pointer-events: none;
}
.toast {
    animation: slideIn 0.3s ease-out, fadeOut 0.5s 4.5s forwards;
    min-width: 300px;
}
@keyframes slideIn {
    from { 
        transform: translateX(100%); 
        opacity: 0; 
    }
    to { 
        transform: translateX(0); 
        opacity: 1; 
    }
}
@keyframes fadeOut {
    to { 
        opacity: 0; 
        transform: translateY(-20px); 
    }
}

/* Table header style for sortable columns */
.sortable {
    cursor: pointer;
    user-select: none;
    transition: color 0.2s;
}
.sortable:hover {
    color: #E0E7FF; /* lighter indigo on hover */
}
/* Style for text truncation in mobile cards */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
