// ... (Your existing partsData and search logic is above here) ...

/* ---------------------------------------------------------------
   BACKGROUND TOOLS ANIMATION SYSTEM
   This generates floating gears and wrenches in the background
--------------------------------------------------------------- */
function createBackgroundTools() {
    const container = document.getElementById('background-tools');
    const toolIcons = [
        'fa-gear', 
        'fa-wrench', 
        'fa-screwdriver', 
        'fa-car-battery', 
        'fa-hammer', 
        'fa-oil-can', 
        'fa-gears'
    ];
    
    const toolCount = 25; // Number of floating tools

    for (let i = 0; i < toolCount; i++) {
        const tool = document.createElement('i');
        
        // Randomly select an icon
        const randomIcon = toolIcons[Math.floor(Math.random() * toolIcons.length)];
        tool.classList.add('fa-solid', randomIcon, 'floating-tool');
        
        // Randomize Position (0% to 100% width)
        tool.style.left = Math.random() * 100 + 'vw';
        
        // Randomize Size (20px to 80px)
        const size = Math.random() * 60 + 20;
        tool.style.fontSize = size + 'px';
        
        // Randomize Animation Duration (10s to 25s) - slower is classier
        const duration = Math.random() * 15 + 10;
        tool.style.animationDuration = duration + 's';
        
        // Randomize Delay so they don't all start at once
        tool.style.animationDelay = Math.random() * 20 + 's';
        
        container.appendChild(tool);
    }
}

// Initialize the background animation
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundTools();
    // Ensure table renders on load (if not already called)
    if(typeof renderTable === 'function') {
        renderTable(partsData);
    }
});
