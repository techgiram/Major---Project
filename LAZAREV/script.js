function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

function loadingAnimation(){
    var tl = gsap.timeline()
tl.from("#page1",{
    //  transform:"scaleX(0.7) scaleY(0)"
    opacity:0,
    duration:0.1,
    delay:0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRedius:"200px",
    duratoion:2,
    ease:"expo.out"
})
tl.from("nav",{
    opacity:0,
    delay:-0.2
})
tl.from("#page1 h1, #page1 p, #page1 div",{
    opacity:0,
    duration:2,
    stagger:0.2
})
}

function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    // console.log("hello")
    let tl =gsap.timeline()

   tl.to("#nav-bottom",{
    height:"21vh"
   })
   tl.to(".nav-part2 h5",{
    display:"block"
   })
   tl.to(".nav-part2 h5 span",{
    y:0,
    // duration:0.3,
    stagger:{
        amount:0.6
    }
   })
})
nav.addEventListener("mouseleave",function(){
    // console.log("hello")
    let tl =gsap.timeline()

//    tl.to("#nav-bottom",{
//     height:"21vh"
//    })
//    tl.to(".nav-part2 h5",{
//     display:"block"
//    })
   tl.to(".nav-part2 h5 span",{
    y:25,
    // duration:0.3,
    stagger:{
        amount:0.2
    }
   })
   tl.to(".nav-part2 h5",{
    dislplay:"none",
    duration:0.1
   })
   tl.to("#nav-bottom",{
    height:0,
    duration:0.2,

   })
})
}

function page2Animation(){

    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    gsap.to(  elem.childNodes[3],{
        opacity:1,
        scale :1
    })

   })
   elem.addEventListener("mouseleave",function(){
    // console.log("hello")
    gsap.to(elem.childNodes[3],{
        opacity : 0,
        scale : 0
      })
    })
   elem.addEventListener("mousemove",function(dets){
     gsap.to( elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-30,
      y:dets.y - elem.getBoundingClientRect().y-70
    })
   })
 })
}

function page3VideoAnimation(){
    var page3center = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRedius:0
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRedius:"30px"
    })
})

var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    // elem.childNodes[3].pause()
  elem.addEventListener("mouseenter",function(){
     elem.childNodes[3].style.opacity = 1
     elem.childNodes[3].play()
  })
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity = 0
    elem.childNodes[3].load()
 })
})
}

function page6Animation(){
    gsap.from("#bottom6-part2 h4",{
        x:0,
        duration:2,
        scrollTrigger:{
            trigger:"#bottom6-part2",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
    
        }
    })
}

locomotiveAnimation()

loadingAnimation()

page3VideoAnimation()

navAnimation()

page2Animation()

page6Animation()









// gsap.to("#bottom6-part2 h4",{
//     x:150,
//     duration:1,
//     stagger:{
//         amount:-0.3,
//     },
//     scrollTrigger:{
//         trigger:"#bottom6-part2",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top -80%",
//         scrub:true

//     }
// })












