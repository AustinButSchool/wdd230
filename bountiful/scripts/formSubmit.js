const url = new URL(window.location);
const formData = url.searchParams;
let todaysDate = new Date();

document.querySelector("#firstName").textContent = formData.get('firstName');
document.querySelector("#email").textContent = formData.get('email');
document.querySelector("#phone").textContent = formData.get('phone');
document.querySelector("#fruit").textContent = formData.get('fruit');
document.querySelector("#morefruit").textContent = formData.get('morefruit');
document.querySelector("#evenfruit").textContent = formData.get('evenfruit');
document.querySelector("#specialInstructions").textContent = formData.get('specialInstructions');
document.querySelector("#date").textContent = todaysDate.getMonth() + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();


const fruitUrl = "data/fruit.json"

async function fruitGet() {
    const response = await fetch(fruitUrl);
    const data = await response.json();
    nutrition(data)

}


function nutrition(data) {
    let foodData = [0, 0, 0, 0, 0];
    let foods = [formData.get('fruit'), formData.get('morefruit'), formData.get('evenfruit')]

    for (let i = 0; i < foods.length; i++) {
        let tempData = data.find(fruit => fruit.name === foods[i]);
        foodData[0] += tempData.nutritions.calories;
        foodData[1] += tempData.nutritions.fat;
        foodData[2] += tempData.nutritions.sugar;
        foodData[3] += tempData.nutritions.carbohydrates;
        foodData[4] += tempData.nutritions.protein;
    }
    document.querySelector("#calories").textContent = foodData[0];
    document.querySelector("#fat").textContent = foodData[1];
    document.querySelector("#sugar").textContent = foodData[2];
    document.querySelector("#carbohydrates").textContent = foodData[3];
    document.querySelector("#protein").textContent = foodData[4];
}

fruitGet()