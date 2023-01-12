let isBurger = false;
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__body');
const body = document.querySelector('body');

window.burgerClick = () => {
    isBurger = isBurger == false ? true : false;

    if (isBurger == true) {
        burger.style.pointerEvents = "auto";
        burger.style.zIndex = 6;
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


window.topic = () => {
    body.classList.toggle("black");
    body.classList.toggle("white");
}