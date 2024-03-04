const visitsDisplay = document.querySelector(".visits");
const theDateToday = new Date();
const today = Date.now() / 84600000;


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

let daysGone = Math.round(today - window.localStorage.getItem("timeOfLastVisit"));

if (numVisits !== 0) {
    if (window.localStorage.getItem("timeOfLastVisit") < today + 1)
        visitsDisplay.textContent = "Back so soon! Awesome!";
    else {
        if (daysGone == 1) {
            visitsDisplay.textContent = 'It has been ' + daysGone + ' day since your last visit.';
        }
        else {
            visitsDisplay.textContent = 'It has been ' + daysGone + ' days since your last visit.';
        }
    }

    localStorage.setItem("timeOfLastVisit", today);

} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);