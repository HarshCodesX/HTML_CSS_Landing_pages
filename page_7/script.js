var tl = timeline()

tl.from("#img1", {
    delay: 0.4,
    opacity:0,
    duration: 0.8,
    y:60
})

tl.from("#img2", {
    delay: 0.4,
    opacity:0,
    duration: 0.8,
    x:60
}, "-=0.8")

tl.from("#img3", {
    delay: 0.4,
    opacity:0,
    duration: 1,
    y:-60
}, "-=0.8")

tl.from("#main h1", {
    delay: 0.4,
    opacity:0,
    duration: 0.8,
}, "-=0.8")

gsap.from("#page2 h5, #page2 h1, #page2 about-us",{
    opacity: 0,
    stagger: 0.7,
    scrollTrigger:{
        trigger: "#page2 h5",
        scroller: "body",
        markers: true,
    }
})