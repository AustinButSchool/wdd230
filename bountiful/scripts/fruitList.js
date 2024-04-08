const fruitUrl = "data/fruit.json"

async function fruitGet() {
    const response = await fetch(fruitUrl);
    const data = await response.json();
    populate(data)

}

function populate(data) {
    let options = document.querySelectorAll(".fruit");

    options.forEach(option => {
        for (let i = 0; i < data.length; i += 1) {
            console.log(data[i].name);
            let fruitName = document.createElement("option");
            fruitName.textContent = data[i].name;
            option.appendChild(fruitName);
        }

    }
    )



}

fruitGet()