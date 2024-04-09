const smoothie = document.querySelector(".smoothieCount");
let counter = parseInt(localStorage.getItem('formSubmissions')) || 0;

if (counter == 0) {
    smoothie.textContent = "It looks like it's your first time buying here! Buy a smoothie by clicking the smoothie picture, or by going to hit order in the menu!";
} else {
    smoothie.textContent = "You have made " + counter + " orders! You should make another one!";
}