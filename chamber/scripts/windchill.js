document.getElementById('calculate').onclick = function windChill() {
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