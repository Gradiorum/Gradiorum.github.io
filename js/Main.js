document.addEventListener('DOMContentLoaded', function() {
    setupThemeToggle();
    setupResponsiveNav();
    setupFormHandlers();
    setupLazyLoading();
    setupImageGallery();
});

function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
        });
    }
}

function setupResponsiveNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}

function setupFormHandlers() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting traditionally
            // Implement AJAX form submission here if needed
            alert('Form submitted! Check console for data.');
            console.log(new FormData(form));
        });
    });
}

function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(image => {
        imageObserver.observe(image);
    });
}

function setupImageGallery() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const expandedImgSrc = image.getAttribute('src');
            showModalWithImage(expandedImgSrc);
        });
    });
}

function showModalWithImage(src) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const img = new Image();
    img.src = src;
    img.style.maxHeight = '90%';
    img.style.maxWidth = '90%';
    modal.appendChild(img);

    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
}
