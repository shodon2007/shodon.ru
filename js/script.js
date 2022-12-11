let isBurger = false;
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__body');
const body = document.querySelector('body');

const burgerClick = () => {
    isBurger = isBurger == false ? true : false;

    if (isBurger == true) {
        burger.style.pointerEvents = "auto";
        burger.style.zIndex = 3;
        burger.style.opacity = 1;
        burgerMenu.style.right = "0px";
    } else {
        burger.style.opacity = 0;
        burgerMenu.style.right = "300px";
        burger.style.pointerEvents = "none";
        setTimeout(() => {
            burger.style.zIndex = -3;
        }, 500);
    }
}


const topic = () => {
    body.classList.toggle("black");
    body.classList.toggle("white");
    console.log(body)
}


const landings = {
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

for (item of Object.values(landings)) {
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