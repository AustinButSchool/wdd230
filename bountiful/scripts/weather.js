const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.12&lon=-117.38&appid=74d0cbee2f5731b7094c2387146d7191&units=imperial";

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
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

}


const ThreeDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.12&lon=-117.38&appid=74d0cbee2f5731b7094c2387146d7191&units=imperial&cnt=32";

var testnow = document.getElementById('print');

async function ThreeDayApiFetch() {
    const response = await fetch(ThreeDayUrl);
    const data = await response.json();
    ThreeDayElement(data);

}

ThreeDayApiFetch();

const fillWeather = document.querySelector(".board");

function ThreeDayElement(data) {
    const currentDay = new Date().getDay();
    let dayArray = [];
    for (let i = 0; i < data.list.length; i += 1) {
        let thatDay = new Date(data.list[i].dt * 1000);
        if (thatDay.getDay() != currentDay) {
            if (thatDay.getHours() == 3) {
                dayArray.push(i)
            }
        }
    }
    for (let i = 0; i < 3; i += 1) {
        let day = document.createElement('div');
        let temp = document.createElement('p');
        let desc = document.createElement('p');
        let dayName = document.createElement('h2');
        let img = document.createElement('img');
        let icon = data.list[dayArray[i]].weather[0].icon;

        desc.innerHTML = "Weather:" + "<br>" + data.list[dayArray[i]].weather[0].main + "<br>" + "<br>" + " Description:" + "<br>" + data.list[i].weather[0].description;
        temp.textContent = data.list[dayArray[i]].main.temp + "°F";
        img.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
        img.setAttribute('alt', "Photo of " + data.list[dayArray[i]].weather[0].description);
        img.setAttribute('style', "align-self: right");
        day.setAttribute('id', "sticky");


        day.appendChild(img);
        day.appendChild(dayName);

        day.appendChild(desc);
        day.appendChild(temp);

        if (i == 0) {
            dayName.textContent = "Tommorow";
        }
        else if (i == 1) {
            dayName.textContent = "The Day After";
        }
        else {
            dayName.textContent = "And The Day After That";

        }
        fillWeather.appendChild(day);
    }
}