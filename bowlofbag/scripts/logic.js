const dataUrl = "data/data.json"



let playerArea = document.querySelector(".player");
let playerCount = 3;
let winPoints = 10;
let playerScore = [];
let playerAdd = [];
let finalists = [];


async function dataGet() {
    const response = await fetch(dataUrl);
    const data = await response.json();
    useData(data)

}
function useData(data) {

    let players = document.querySelectorAll(".player");
    let rotate1 = 0;
    let rotate2 = 0;

    document.getElementById("button").onclick = function buttonFunction() {


        let first = document.querySelector(".first");
        let middle = document.querySelector(".middle");
        let second = document.querySelector(".second");

        let choiceLightUp = document.querySelectorAll(".choice");

        let number1 = Math.floor(Math.random() * (5 - 0) + 0);
        let number2 = Math.floor(Math.random() * (5 - 0) + 0);

        let minute = document.querySelector(".minute");
        let hour = document.querySelector(".hour");


        rotate1 = rotate1 + (360 - rotate1) + (72 * (number1 + 1)) + 3600 + 32;
        rotate2 = rotate2 + (360 - rotate2) + (72 * (number2 + 1)) + 3600 + 32 + 720;



        minute.style.transitionDuration = "5s";
        minute.style.transform = "rotate(" + rotate1 + "deg)";

        hour.style.transitionDuration = "7s";
        hour.style.transform = "rotate(" + rotate2 + "deg)";

        setTimeout(function () {

            minute.style.transitionDuration = "0s";
            rotate1 = rotate1 - 3960 - 720;
            minute.style.transform = "rotate(" + rotate1 + "deg)";

            first.textContent = data[number1].class.charAt(0).toUpperCase() + data[number1].class.slice(1);
            textStyle(number1, first);



            choiceLightUp[number1].style.filter = "contrast(500%) brightness(150%) saturate(150%)";
            choiceLightUp[number1].style.color = "white";

            switch (number1) {
                case number1 = 0:
                    choiceLightUp[number1].style.boxShadow = "0px 0px 10px red";
                    choiceLightUp[4].children[0].style.boxShadow = "0px 0px 10px red";
                    choiceLightUp[4].children[0].style.color = "white";


                    break;
                case number1 = 1:
                    choiceLightUp[number1].style.boxShadow = "0px 0px 10px orange";


                    break;
                case number1 = 2:
                    choiceLightUp[number1].style.boxShadow = "0px 0px 10px yellow";


                    break;
                case number1 = 3:
                    choiceLightUp[number1].style.boxShadow = "0px 0px 10px green";

                    break;
                case number1 = 4:
                    choiceLightUp[number1].style.boxShadow = "10px 0px 10px dodgerblue";

                    choiceLightUp[4].children[0].style.color = "black";

                    break;
                default:
                    choiceLightUp[number1].style.boxShadow = "0px 0px 20px red";

            }



        }, 5000);


        setTimeout(function () {
            middle.textContent = data[number1].middle[data[number2].class];
        }, 6000);

        setTimeout(function () {


            hour.style.transitionDuration = "0s";
            rotate2 = rotate2 - 3960;
            hour.style.transform = "rotate(" + rotate2 + "deg)";



            second.textContent = data[number2].class.charAt(0).toUpperCase() + data[number2].class.slice(1);
            textStyle(number2, second);

            choiceLightUp[number2].style.filter = "contrast(500%) brightness(150%) saturate(150%)";
            choiceLightUp[number2].style.color = "white";

            switch (number2) {
                case number2 = 0:
                    choiceLightUp[number2].style.boxShadow = "0px 0px 10px red";
                    choiceLightUp[4].children[0].style.boxShadow = "0px 0px 10px red";
                    choiceLightUp[4].children[0].style.color = "white";


                    break;
                case number2 = 1:
                    choiceLightUp[number2].style.boxShadow = "0px 0px 10px orange";


                    break;
                case number2 = 2:
                    choiceLightUp[number2].style.boxShadow = "0px 0px 10px yellow";


                    break;
                case number2 = 3:
                    choiceLightUp[number2].style.boxShadow = "0px 0px 10px green";

                    break;
                case number2 = 4:
                    choiceLightUp[number2].style.boxShadow = "10px 0px 10px dodgerblue";

                    choiceLightUp[4].children[0].style.color = "black";

                    break;
                default:
                    choiceLightUp[number2].style.boxShadow = "0px 0px 20px red";

            }

        }, 7000);

        setTimeout(function () {

            for (let i = 0; i < players.length; i++) {


                let player = players[i];

                specificWords(number1, number2, player, data);

            }
            choiceLightUp[number2].style.filter = "";
            choiceLightUp[number2].style.color = "";
            choiceLightUp[number2].style.boxShadow = "";
            choiceLightUp[number1].style.boxShadow = "";
            choiceLightUp[number1].style.filter = "";
            choiceLightUp[number1].style.color = "";
            choiceLightUp[4].children[0].style.boxShadow = "";
            choiceLightUp[4].children[0].style.color = "";
        }, 8000);

        document.querySelectorAll(".refreshButton").forEach(function (refreshButton) {
            refreshButton.onclick = function () {
                let playerIndex = parseInt(this.getAttribute("data-player-index"));
                specificWords(number1, number2, players[playerIndex], data);
            };
        });

    }
}

function specificWords(number1, number2, player, data) {
    let word1 = player.querySelector(".word1");
    let combiner = player.querySelector(".combiner");
    let word2 = player.querySelector(".word2");






    let data1Length = data[number1].data;
    let data2Length = data[number2].data;

    let number3 = Math.floor(Math.random() * (data1Length.length - 0) + 0);
    let number4 = Math.floor(Math.random() * (data2Length.length - 0) + 0);

    if (number1 == number2) {
        while (number3 == number4) {
            number4 = Math.floor(Math.random() * (data2Length.length - 0) + 0);

        }
    }


    word1.textContent = data[number1].data[number3].charAt(0).toUpperCase()
        + data[number1].data[number3].slice(1);

    textStyle(number1, word1);

    combiner.textContent = " / ";
    word2.textContent = data[number2].data[number4] + ".";
    textStyle(number2, word2);

}
function textStyle(number, word) {
    switch (number) {
        case number = 0:
            word.style.textDecoration = "underline solid transparent 2px";

            word.style.border = "solid red 2px";
            break;
        case number = 1:
            word.style.textDecoration = "underline wavy orange 2px";
            word.style.border = "solid transparent 2px";

            break;
        case number = 2:
            word.style.textDecoration = "underline solid yellow 2px";
            word.style.border = "solid transparent 2px";

            break;
        case number = 3:
            word.style.textDecoration = "underline double lime 2px";
            word.style.border = "solid transparent 2px";

            break;
        case number = 4:
            word.style.textDecoration = "underline dotted dodgerblue 4px";
            word.style.border = "solid transparent 2px";

            break;
        default:
            word.style.textDecoration = "underline wavy transparent 2px";
            word.style.border = "solid transparent 2px";

    }
}

function players(value) {
    let players = document.querySelector(".players");

    let player = document.querySelectorAll(".player");

    let calcForm = document.querySelector(".groupCalc");
    let totalCalc = document.querySelector(".totalCalc");


    let general = document.getElementById("general");
    let totalPoints = document.getElementById("totalPoints");


    while (player.length < value) {

        let playerText = document.createElement("p");
        let firstSpan = document.createElement("span");
        let middleSpan = document.createElement("span");
        let lastSpan = document.createElement("span");
        let containingDiv = document.createElement("div");
        let refreshBut = document.createElement("button");
        let boolRefresh = document.createElement("input");

        let playerTextContent = document.createTextNode(" Player " + (player.length + 1) + ": ");


        playerText.appendChild(refreshBut);
        playerText.appendChild(boolRefresh);
        playerText.appendChild(playerTextContent);

        playerText.setAttribute("class", "player");
        firstSpan.setAttribute("class", "word1");
        middleSpan.setAttribute("class", "combiner");
        lastSpan.setAttribute("class", "word2");
        refreshBut.setAttribute("class", "refreshButton");
        refreshBut.setAttribute("data-player-index", player.length);
        refreshBut.textContent = "⟳";
        boolRefresh.setAttribute("type", "checkbox");


        playerText.appendChild(firstSpan);
        playerText.appendChild(document.createTextNode(" "));
        playerText.appendChild(middleSpan);
        playerText.appendChild(document.createTextNode(" "));
        playerText.appendChild(lastSpan);

        containingDiv.appendChild(playerText);

        players.appendChild(containingDiv);

        player = document.querySelectorAll(".player");


        let playerGeneralVoteLabel = document.createElement("label");
        let playerGeneralVote = document.createElement("select");
        let vote1 = document.createElement("option");
        let vote2 = document.createElement("option");
        let vote3 = document.createElement("option");
        let vote4 = document.createElement("option");
        let vote5 = document.createElement("option");
        let qBreak = document.createElement("br");


        vote1.textContent = "KNEW IT";
        vote2.textContent = "I can see it";
        vote3.textContent = "I need more facts";
        vote4.textContent = "I don’t think so";
        vote5.textContent = "NO SHOT";

        vote1.setAttribute("value", "2");
        vote2.setAttribute("value", "1");
        vote3.setAttribute("value", "0");
        vote4.setAttribute("value", "-1");
        vote5.setAttribute("value", "-2");

        playerGeneralVoteLabel.setAttribute("for", "vote" + player.length);
        playerGeneralVoteLabel.textContent = "Player " + (player.length) + ": ";
        playerGeneralVote.setAttribute("id", "vote" + player.length);
        playerGeneralVote.setAttribute("name", "vote" + player.length);


        playerGeneralVote.appendChild(vote1);
        playerGeneralVote.appendChild(vote2);
        playerGeneralVote.appendChild(vote3);
        playerGeneralVote.appendChild(vote4);
        playerGeneralVote.appendChild(vote5);


        calcForm.insertBefore(playerGeneralVoteLabel.cloneNode(true), general);
        calcForm.insertBefore(playerGeneralVote.cloneNode(true), general);
        calcForm.insertBefore(qBreak, general);


        totalCalc.insertBefore(playerGeneralVoteLabel, totalPoints);
        totalCalc.insertBefore(playerGeneralVote, totalPoints);


    }

    while (player.length > value) {
        let removePlayer = player[player.length - 1];
        if (removePlayer && removePlayer.parentNode) {
            let containingDiv = removePlayer.parentNode;
            containingDiv.remove();
        }

        let calcFormLastLabel = calcForm.querySelector("label:last-of-type");
        let calcFormLastSelect = calcForm.querySelector("select:last-of-type");
        let lastLabel = totalCalc.querySelector("label:last-of-type");
        let lastSelect = totalCalc.querySelector("select:last-of-type");

        calcFormLastLabel.remove();
        calcFormLastSelect.remove();
        lastLabel.remove();
        lastSelect.remove();

        player = document.querySelectorAll(".player");
    }

    document.querySelector('.groupCalc').addEventListener('submit', function (event) {
        event.preventDefault();
        let selectInputs = this.querySelectorAll('select');
        let totalPoints = 0;
        let totalTimes = 0;
        let finalAnswer = "";

        selectInputs.forEach(function (selectInput) {
            let selectedValue = parseInt(selectInput.value);
            totalPoints += selectedValue;
            totalTimes += 1;
        });

        totalPoints = totalPoints / totalTimes;
        totalPoints = Math.round(totalPoints);

        switch (totalPoints) {
            case -2:
                finalAnswer = "NO SHOT";
                break;
            case -1:
                finalAnswer = "I don’t think so";
                break;
            case 0:
                finalAnswer = "I need more facts";
                break;
            case 1:
                finalAnswer = "I can see it";
                break;
            case 2:
                finalAnswer = "KNEW IT";
                break;
            default:
                finalAnswer = "";
        }

        let groupAnswer = document.getElementById("groupAnswer");
        groupAnswer.textContent = finalAnswer;

    });


    document.querySelector('.totalCalc').addEventListener('submit', function (event) {
        event.preventDefault();
        let selectInputs = this.querySelectorAll('select');


        let i = 0;
        selectInputs.forEach(function (selectInput) {
            let selectedValue = parseInt(selectInput.value);
            playerAdd[i] = selectedValue;

            i++;
        });

        if (playerScore.length < playerAdd.length) {
            for (let i = 0; i < playerAdd.length; i++) {
                playerScore[i] = 0;
            }
        }
        for (let j = 0; j < playerAdd.length; j++) {
            playerScore[j] += playerAdd[j];
        }

        for (let j = 0; j < playerScore.length; j++) {
            console.log(playerScore[j]);

            if (playerScore[j] >= 10) {
                finalists.push("Player " + (j + 1) + " with " + playerScore[j] + " points!");
            }
        }

        if (finalists.length > 1) {
            let finalAnswer = document.getElementById("finalAnswer");
            finalAnswer.textContent = finalists;
        }




    });

    dataGet();

}

players(3);



document.getElementById("slider").oninput = function () {
    players(this.value);
};

document.getElementById("button").style.cursor = "pointer";



