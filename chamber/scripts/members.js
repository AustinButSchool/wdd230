const path = "data/members.json"

const cards = document.querySelector(".cards");

async function getData() {
    const response = await fetch(path);

    const data = await response.json();

    displayComp(data.companies);
}


getData();

const displayComp = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h1');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let desc = document.createElement('p');
        let link = document.createElement('a');




        fullName.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        desc.textContent = company.description;
        link.textContent = company.website;


        link.setAttribute('href', company.website)

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Logo of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');


        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(desc);
        card.appendChild(link);

        cards.appendChild(card);

    });
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});