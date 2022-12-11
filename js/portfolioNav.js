const thisItem = 'featured';
const landing = {
    portfolio: {
        name: "Portfolio",
        imgURL: "portfolio",
        type: 'landing',
        url: "portfolio.shodon.ru",
        github: "github.com/shodon2007/portfolio-layout",
    },
    tennis: {
        name: "Tennis",
        imgURL: "tennis",
        type: 'landing',
        url: "tennis.shodon.ru",
        github: "github.com/shodon2007/tennis",
        technologies: "HTML, CSS, SCSS, JS, SWIPER",
    }
    // portfolio: ["Portfolio-layout", "portfolio", "portfolio.shodon.ru", "github.com/shodon2007/portfolio-layout"],
    // tennis: ["Tennis-layout", "tennis", "tennis.shodon.ru", "github.com/shodon2007/portfolio-layout"],
}

const frontend = {
    test: {
        name: 'testName',
        imgURL: "burger-exit",
        type: 'test',
        url: 'google.com',
        github: 'github.com/shodon2007'
    }
}

showElements(featured);

function portfolioClick(type) {
    resetNavStyles();
    document.querySelector(`.portfolio__${type}`).classList.add('selected')


    if (type == 'landing') {
        type = landing;
    } else if (type == 'frontend') {
        type = frontend
    } else if (type == 'featured') {
        type = featured
    } else if (type == 'fullstack') {
        type = fullstack
    } else if (type == 'backend') {
        type = backend
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

function resetNavStyles() {
    document.querySelectorAll('.portfolio__el').forEach((el) => {
        el.classList.remove('selected');
    })
}


function resetElements() {
    document.querySelector('.portfolio__bottom').innerHTML = '';
}