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
    portfolio: ["Portfolio-layout", "portfolio", "portfolio.shodon.ru", "github.com/shodon2007/portfolio-layout"],
    tennis: ["Tennis-layout", "tennis", "tennis.shodon.ru", "github.com/shodon2007/portfolio-layout"],
}

for (item of Object.values(landings)) {
    document.querySelector(".portfolio__bottom").innerHTML += `
    <div class="portfolio__project" style="background: url(img/${item[1]})">
        <div class="project__body">
            <div class="project"></div>
        </div>
    </div>
    `
}