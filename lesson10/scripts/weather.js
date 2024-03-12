const cuurentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "API KEY HERE";

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

apiFetch();