const papers = document.querySelectorAll("#paper");

for (const paper of papers) {
    const randomNumber = Math.random();
    console.log(randomNumber);
    const numberInRange = Math.min(Math.max((randomNumber * 6) - 3, -1.5), 1.5);
    const colorShift = (randomNumber + Math.random() - Math.random()) * 1000;
    const tackShift = Math.min(Math.max((colorShift * 20) - 10, -10), 10);

    paper.style.transform = "rotate(" + numberInRange + "deg)";

    let tack = document.createElement("img");
    tack.setAttribute("src", "images/thumbtack.png");
    tack.setAttribute("alt", "tack");
    tack.setAttribute("class", "pin");
    tack.style.filter = "hue-rotate(" + colorShift + "deg)";
    tack.style.transformOrigin = "bottom left";
    tack.style.transform = "rotate(" + tackShift + "deg)";


    paper.appendChild(tack);



    paper.addEventListener('mouseenter', function () {
        paper.style.transform = "rotate(" + 0 + "deg)";
        tack.style.transform = "rotate(" + (tackShift + numberInRange) + "deg) translate(4px, -4px)";
    });

    paper.addEventListener('mouseleave', function () {
        paper.style.transform = "rotate(" + numberInRange + "deg)";
        tack.style.transform = "rotate(" + tackShift + "deg)";
    });

}