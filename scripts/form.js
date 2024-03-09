const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}



const kp1 = document.getElementById("password");
const kp2 = document.getElementById("confirmPassword");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "Passwords do not match!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp1.style.backgroundColor = "#fff0f3";
        kp2.value = "";
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "";
        kp1.style.backgroundColor = "";

    }
}
