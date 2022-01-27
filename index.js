

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
})

tl.from(".hero-container ", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
}, 1)


tl.from(".anim1", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )
tl.from(".anim2", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )
tl.from(".anim3", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )
tl.from(".anim4", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )


// Body fade in animations 


gsap.from(".box", {
    scrollTrigger:".box",
    y:25,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

gsap.from(".box1", {
    scrollTrigger:".box1",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

gsap.from(".box2", {
    scrollTrigger:".box2",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

gsap.from(".box3", {
    scrollTrigger:".box3",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box4", {
    scrollTrigger:".box4",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box5", {
    scrollTrigger:".box5",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box6", {
    scrollTrigger:".box6",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box7", {
    scrollTrigger:".box7",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box8", {
    scrollTrigger:".box8",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box9", {
    scrollTrigger:".box9",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box10", {
    scrollTrigger:".box10",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})