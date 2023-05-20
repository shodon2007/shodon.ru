window.burgerClick = () => {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('opened');
}



window.topic = () => {
    const body = document.querySelector('body');

    body.classList.toggle("black");
    body.classList.toggle("white");
}