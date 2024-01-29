document.getElementById("clickMe").onclick = function myFunction() {
    var x = document.getElementById("navBar");
    if (x.style.display === "block") {
        document.getElementById("clickMe").innerHTML = "≡";
        x.style.display = "none";
    } else {
        x.style.display = "block";
        document.getElementById("clickMe").innerHTML = "X";

    }
    if (window.matchMedia("(min-width: 640px)").matches) { x.style.display = "block"; }
}
