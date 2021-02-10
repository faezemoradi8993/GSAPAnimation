const navbuton = document.querySelector('.nav-button');
const navopen = document.querySelector('.nav-open');
// const tween =TweenLite.to(Object,time,{animate})
const tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.cover', 1, {
        width: "60%",
        ease: Power2.easeOut


    }).to('nav', 1, {
        height: "100%",
        ease: Power2.easeOut
    }, "-=0.5")
    .fromTo(".nav-open", 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function() {
            navopen.getElementsByClassName.pointerEvents = "auto";
            console.log("done  ");
        }
    })
navbuton.addEventListener('click', (e) => {
    if (tl.isActive()) {

        e.preventDefault();
        e.stopImmidatePropagation();
        return false;
    }
    toggleTween(tl);

});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}