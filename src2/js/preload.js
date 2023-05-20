let width = 0;
import { gsap } from "gsap";
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
        if (document.readyState == 'loading' & width <= 30) {
            width++;
        } else if (document.readyState == 'interactive' & width <= 70) {
            width++;
        } else if (document.readyState == 'complete') {
            width++;
        }
        window.scrollTo(0, 0);
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}

// Animation
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

move();