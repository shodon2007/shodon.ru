let isBurger = false;
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__body');
let burgerClick = () => {
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