const thisItem = 'featured';

const landing = {};
const featured = {};
const frontend = {};
const fullstack = {};
const javascript = {};


function addNew(type, name, sort) {
    type[name] = {
        name: `${name[0].toUpperCase() + name.slice(1)}`,
        imgURL: name,
        type: sort,
        url: `${name}.shodon.ru`,
        github: 'github.com/shodon2007/' + name,
    }
}

addNew(javascript, "notation", 'javascript');
addNew(landing, "tennis", 'landing');
addNew(landing, "portfolio", 'landing');
addNew(landing, "clothes_store", 'landing');
addNew(javascript, "keyboard-stamina", 'javascript');
addNew(landing, "regna", 'landing');
addNew(landing, "stamina", 'landing');
addNew(javascript, "calculator", 'javascript');

function portfolioClick(type) {
    resetNavStyles();
    addNavStyle(type);


    if (type == 'landing') {
        type = landing;
    } else if (type == 'frontend') {
        type = frontend
    } else if (type == 'featured') {
        type = featured;
    } else if (type == 'fullstack') {
        type = fullstack;
    } else if (type == 'javascript') {
        type = javascript;
    }
    showElements(type);
}



function showElements(type) {
    resetElements();
    for (item of Object.values(type)) {
        document.querySelector(".portfolio__bottom").innerHTML += `
    <div class="portfolio__project" style="background-image: url(img/${item.imgURL}.png)">
        <div class="project__body">
            <div class="project__top">
                <div class="project__title">${item.name}</div>
                <div class="project__subtitle">${item.type}</div>
            </div>

            <div class="project__links">
                <a class="project__online" href="https://${item.url}">visit online</a>
                <a class="project__github" href="https://${item.github}">visit github</a>
            </div>
        </div>
    </div>
    `
    }
}

showElements(featured);

function addNavStyle(type) {
    document.querySelector(`.portfolio__${type}`).classList.add('selected');
}

function resetNavStyles() {
    document.querySelectorAll('.portfolio__el').forEach((el) => {
        el.classList.remove('selected');
    })
}

function resetElements() {
    document.querySelector('.portfolio__bottom').innerHTML = '';
}