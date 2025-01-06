document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items and panels
        document.querySelectorAll('.menu-item').forEach(menuItem => {
            menuItem.classList.remove('active');
        });
        document.querySelectorAll('.content-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Add active class to clicked menu item and corresponding panel
        item.classList.add('active');
        const topicNumber = item.getAttribute('data-topic');
        document.getElementById(`topic${topicNumber}`).classList.add('active');
    });
});