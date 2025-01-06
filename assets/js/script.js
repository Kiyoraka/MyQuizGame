// assets/js/script.js
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
        const targetPanel = document.getElementById(`topic${topicNumber}`);
        targetPanel.classList.add('active');

        // Initialize the appropriate quiz after panel switch
        switch(topicNumber) {
            case '1':
                new Quiz('html');
                break;
            case '2':
                new Quiz('css');
                break;
            case '3':
                new Quiz('js');
                break;
            case '4':
                new Quiz('erd');
                break;
            case '5':
                new Quiz('dfd');
                break;
            case '6':
                new Quiz('php');
                break;
            case '7':
                new Quiz('sql');
                break;
            default:
                new Quiz('html');
        }
    });
});