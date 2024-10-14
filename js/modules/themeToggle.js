export function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'default';
    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = document.body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            setTheme('light');
        } else if (currentTheme === 'light') {
            setTheme('default');
        } else {
            setTheme('dark');
        }
    });

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeToggle.textContent = 'Light Mode';
        } else if (theme === 'light') {
            themeToggle.textContent = 'High Contrast Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
    }
}
