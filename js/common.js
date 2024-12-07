async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    for (const el of elements) {
        const file = el.getAttribute('data-include');
        const response = await fetch(file);
        if (response.ok) {
            el.innerHTML = await response.text();
            if (file.includes('header.html')) {
                setupResponsiveNav();
                setupThemeToggle();
            }
        } else {
            console.error(`Failed to load ${file}: ${response.statusText}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', includeHTML);

function setupResponsiveNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('hidden');
        });
    }
}

function setupThemeToggle() {
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
