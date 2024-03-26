const getDocument = document.body;


function createBanner() {
    let newDiv = document.createElement("div");
    let closeDiv = document.createElement("div");
    let closeLink = document.createElement("a");

    newDiv.innerText = " Visitors and users to attend the chamber of commerce meet and greet on Wednesday at 7:00 p.m.";
    newDiv.setAttribute("class", "bannerMain");
    closeDiv.setAttribute("class", "bannerClosePosition");
    closeLink.setAttribute("id", "hideBanner");
    closeLink.setAttribute("class", "bannerClose");


    closeDiv.innerText = "❌";
    closeLink.style.textDecoration = "none";


    let referenceElement = getDocument.querySelector("nav");

    referenceElement.parentNode.insertBefore(newDiv, referenceElement.nextSibling);

    closeLink.appendChild(closeDiv);
    newDiv.appendChild(closeLink);

}
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
    createBanner();
}


document.getElementById("hideBanner").onclick = function hideBanner() {
    let button = document.querySelector(".bannerMain");;
    button.remove();


}

