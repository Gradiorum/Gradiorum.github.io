export function showModalWithImage(src) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;';
    const img = new Image();
    img.src = src;
    img.style.cssText = 'max-height: 90%; max-width: 90%;';
    modal.appendChild(img);
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    document.body.appendChild(modal);
}
