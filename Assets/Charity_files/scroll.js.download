gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "main",
        start:"bottom 300 top",
         endTrigger:".message",
        ease: Power1.easeIn,
        toggleActions: 'play pause resume reverse',
    }
})

tl.from('.no1',
 {
    y:79,
    opacity:0,
    duration:0.3,
     

}, "0.2").from('.no4', {
    y:70,
    opacity:0,
    duration:0.3,
}).from('.no3', {
    y:70,
    opacity:0,
    duration:0.3,
})


let autoShow = gsap.timeline({
        scrollTrigger:{
            trigger:'.columns',
            endTrigger:'.section-3',
            start:"200 bottom",
            ease: Power1.easeIn,
            toggleActions: 'play play resume reverse',
        }
    });
    autoShow.from('.row', {
        y:200,
        opacity:0,
})

   
   
 
    
let scrollIn= gsap.timeline({
        scrollTrigger:{
            trigger:'.section-3',
            // endTrigger:'',
            start:"top center ",
            ease: Power1.easeIn,
            toggleActions: 'play play resume reverse',
        }
    });
    scrollIn.from('.section-3 div img', {
        opacity:0,
        x: -400,
        duration:1,
    })
    scrollIn.from('.table .box', {
        y:30,
        opacity:0,
        stagger:0.3,
    })


    var autoGrid = gsap.timeline({
        scrollTrigger:{
            trigger:'.message2',
            start:"bottom center ",
            ease: Power1.easeIn,
            toggleActions: 'play play resume reverse',
        }
    })
    autoGrid.from('.knowledge .class', {
        y:30,
        opacity:0,
        stagger:0.2,
    })




