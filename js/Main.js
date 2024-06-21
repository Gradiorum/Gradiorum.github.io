import { setupThemeToggle } from './modules/themeToggle.js';
import { setupResponsiveNav } from './modules/responsiveNav.js';
import { setupFormHandlers } from './modules/formHandlers.js';
import { setupLazyLoading } from './modules/lazyLoading.js';
import { setupImageGallery } from './modules/imageGallery.js';

document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupResponsiveNav();
    setupFormHandlers();
    setupLazyLoading();
    setupImageGallery();
});
