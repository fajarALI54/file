document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('#download-list li');
    items.forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 0.2}s`);
        item.style.animationDelay = `${index * 0.2}s`;
    });

    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Toggle Light Mode';
        } else {
            toggleButton.textContent = 'Toggle Dark Mode';
        }
    });
});
