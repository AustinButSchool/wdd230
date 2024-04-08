const url = new URL(window.location);
const formData = url.searchParams;


document.querySelector("#Username").textContent = formData.get('username');
