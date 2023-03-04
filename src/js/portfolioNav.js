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
addNew(react, 'search', 'react app');
addNew(javascript, 'player', 'javascript');
addNew(javascript, 'tictactoe', 'javascript app');
addNew(landing, 'wine', 'landing');
addNew(react, 'todo', 'react app');
addNew(react, 'quiz', 'react app');

function portfolioClick(type) {
    resetNavStyles();
    addNavStyle(type);

    switch (type) {
        case 'landing': type = landing; break;
        case 'react': type = react; break;
        case 'featured': type = featured; break;
        case 'fullstack': type = fullstack; break;
        case 'javascript': type = javascript; break;
    }

    showElements(type);
}

window.portfolioClick = portfolioClick;



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

window.showLink = e => {
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