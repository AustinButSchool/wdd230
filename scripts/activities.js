const linksUrl = "data/links.json";

const fillActivities = document.querySelector("#activities");


async function getData() {
    const response = await fetch(linksUrl);

    const data = await response.json();

    displayActivity(data.activities);
}


const displayActivity = (activities) => {
    activities.forEach((activity) => {
        let list = document.createElement('li');
        let link = document.createElement('a');

        link.textContent = activity.name;
        link.setAttribute('href', activity.website);
        link.style.textDecoration = "underline";

        list.appendChild(link);
        fillActivities.appendChild(list);


    })

};

getData();