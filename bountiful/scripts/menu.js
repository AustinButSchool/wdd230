document.getElementById("clickMe").onclick = function myFunction() {
    var x = document.getElementById("navBar");
    var liElements = x.getElementsByTagName("li");
    var ulElements = x.getElementsByTagName("ul");

    if (liElements[2].style.display === "block") {
        document.getElementById("clickMe").innerHTML = "≡";
        for (var i = 1; i < liElements.length; i++) {
            liElements[i].style.display = "none";
        }
        ulElements[0].style.display = "flex";
    } else {
        document.getElementById("clickMe").innerHTML = "X";
        for (var i = 1; i < liElements.length; i++) {
            liElements[i].style.display = "block";
        }
        ulElements[0].style.display = "block";

    }

}
