document.addEventListener('DOMContentLoaded', () => {

    let counter = parseInt(localStorage.getItem('formSubmissions')) || 0;
    counter++;
    localStorage.setItem('formSubmissions', counter);
});
