document.getElementById("darkClick").onclick = function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem('darkWasPressed', 'true');
    localStorage.getItem('darkWasPressed');



}