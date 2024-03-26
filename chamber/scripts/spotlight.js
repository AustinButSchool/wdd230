const path = "data/people.json";
const displayMembers = document.querySelector(".members");

async function getData() {
    const response = await fetch(path);

    const data = await response.json();

    displaySpotlight(data);
}

function displaySpotlight(data) {
    let person = 0;

    for (let i = 0; i < 3; i++) {
        let chance = Math.random() * 100;
        if (chance > 25) {
            person = data.gold[Math.floor(Math.random() * data.gold.length)];
        }
        else {
            person = data.silver[Math.floor(Math.random() * data.silver.length)];
        }

        let parentDiv = document.createElement("div");
        let memberName = document.createElement("h2");
        memberName.textContent = person.name;
        let memberDesc = document.createElement("p");
        memberDesc.textContent = person.desc;
        let memberNumber = document.createElement("p");
        memberNumber.textContent = "Contect Number: " + person.num;
        let memberEmail = document.createElement("p");
        memberEmail.textContent = "Contect Email: " + person.email;

        parentDiv.appendChild(memberName);
        parentDiv.appendChild(memberDesc);
        parentDiv.appendChild(memberNumber);
        parentDiv.appendChild(memberEmail);
        displayMembers.appendChild(parentDiv);
    }
}

getData();