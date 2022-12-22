const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader", {
    duration: 1,
    width: "0%"
});
tll.to("path.title", {
    opacity: 1,
    animation: 'draw 5s ease forwards',
    duration: 1,
    width: "0%"
});
tll.to('.title__text', {
    animation: 'titleText 3s ease forwards'
});
tll.to('header', {
    opacity: 1,
})
tll.to('all', { overflow: 'scroll' })
let width = 0;
const bar = document.getElementById("barconfrm");
let id;
function move() {
    id = setInterval(frame, 10);

}
function frame() {
    if (width >= 100) {
        setTimeout(() => {
            document.querySelector('*').style.overflow = 'scroll';
        }, 2000);
        clearInterval(id);
        tll.play();
    }
    else {
        window.scrollTo(0, 0);
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}