const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");
const placeDesc = document.querySelector("#place");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=34.05&lon=-84.07&appid=74d0cbee2f5731b7094c2387146d7191&units=imperial";

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayComp(data);
}

apiFetch();


const displayComp = (data) => {
    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;
    const capatalDesc = desc.charAt(0).toUpperCase() + desc.slice(1);

    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute('height', `50px`);
    weatherIcon.setAttribute('alt', capatalDesc);

    currentTemp.textContent = data.main.temp;

    captionDesc.textContent = capatalDesc;
    placeDesc.textContent = data.name;

}

