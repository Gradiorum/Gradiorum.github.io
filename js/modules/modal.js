export function showModalWithImage(src) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
    const img = new Image();
    img.src = src;
    img.className = 'max-h-90% max-w-90%';
    modal.appendChild(img);
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    document.body.appendChild(modal);
}
