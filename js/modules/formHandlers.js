export function setupFormHandlers() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Form submitted! Check console for data.');
            console.log(Object.fromEntries(new FormData(form)));
        });
    });
}
setupFormHandlers();
