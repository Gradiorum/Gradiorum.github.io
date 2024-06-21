import { showModalWithImage } from './modal.js';

export function setupImageGallery() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            showModalWithImage(image.getAttribute('src'));
        });
    });
}
