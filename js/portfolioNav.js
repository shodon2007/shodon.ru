const thisItem = 'featured';

const landing = {};
const featured = {};
const react = {};
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
addNew(landing, "clothes-store", 'landing');
addNew(javascript, "keyboard-stamina", 'javascript');
addNew(landing, "regna", 'landing');
addNew(landing, "stamina", 'landing');
addNew(javascript, "calculator", 'javascript');
addNew(javascript, "movie", 'javascript');
addNew(react, "counter", 'react app');
addNew(javascript, 'search', 'javascript')

function portfolioClick(type) {
    resetNavStyles();
    addNavStyle(type);


    if (type == 'landing') {
        type = landing;
    } else if (type == 'react') {
        type = react;
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
    <div class="portfolio__project" onclick="window.innerWidth <= 900 ? showLink(this) : deletePointerEvents()" style="background-image: url(img/${item.imgURL}.png)">
        <div class="project__body">
            <div class="project__top">
                <div class="project__title">${item.name}</div>
                <div class="project__subtitle">${item.type}</div>
            </div>

            <div class="project__links">
                <a class="project__online" target="_blank" href="https://${item.url}">visit online</a>
                <a class="project__github" target="_blank" href="https://${item.github}">visit github</a>
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

function showLink(e) {
    document.querySelectorAll('.project__links a').forEach((el) => {
        el.style.pointerEvents = 'none';
    })
    setTimeout(() => {
        e.querySelectorAll('.project__links a').forEach((el) => el.style.pointerEvents = 'visible');
    }, 10);
}

function deletePointerEvents() {
    document.querySelectorAll('.project__links a').forEach((el) => {
        el.style.pointerEvents = 'visible';
    })
}

setInterval(() => {
    window.innerWidth > 900 ? deletePointerEvents() : false;
}, 1000);