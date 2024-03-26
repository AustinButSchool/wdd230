/** document.getElementById('calculate').onclick = function windChill() {
    var temperatureValue = document.getElementById('temp').value;
    var windSpeedValue = document.getElementById('wind').value;

    if (isNaN(temperatureValue) || isNaN(windSpeedValue)) {
        alert("Please enter only digits.");
        return;
    }
    else {
        if (!(temperatureValue <= 50 && windSpeedValue > 3)) {
            alert("Please enter a Temperature <= 50ºF and Wind Speed > 3.0 MPH.");
            return;
        }
    }

    var windChillValue = 35.74 + .6215 * temperatureValue - 35.75 * windSpeedValue ^ .16 + .4275 * temperatureValue * windSpeedValue ^ .16
    document.getElementById('print').innerText = windChillValue;
};

**/

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=34.05&lon=-84.07&appid=74d0cbee2f5731b7094c2387146d7191&units=imperial&cnt=24";

var testnow = document.getElementById('print');

async function ThreeDayApiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    ThreeDayElement(data);

}

ThreeDayApiFetch();

const fillWeather = document.querySelector(".weather");


function ThreeDayElement(data) {

    for (let i = 0; i < data.list.length; i += 8) {
        let day = document.createElement('div');
        let temp = document.createElement('p');
        let desc = document.createElement('p');
        let dayName = document.createElement('h2');
        let img = document.createElement('img');
        let icon = data.list[i].weather[0].icon;

        desc.innerHTML = "Weather:" + "<br>" + data.list[i].weather[0].main + "<br>" + "<br>" + " Description:" + "<br>" + data.list[i].weather[0].description;
        temp.textContent = data.list[i].main.temp + "°F";
        img.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
        img.setAttribute('alt', "Photo of " + data.list[i].weather[0].description);
        img.setAttribute('style', "align-self: right");


        day.appendChild(img);
        day.appendChild(dayName);

        day.appendChild(desc);
        day.appendChild(temp);

        if (i < 8) {
            dayName.textContent = "Today";
        }
        else if (i < 16) {
            dayName.textContent = "Tommorow";
        }
        else {
            dayName.textContent = "Day After Tommorow";

        }
        fillWeather.appendChild(day);

    }
}