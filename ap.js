function init() {
  console.log("done");
  var select = (e) =>document.querySelector(e);
  var lod = select(".loaderSvg");
  var mob = select(".v2image");
  co = {left:mob.getBoundingClientRect().left,top:mob.getBoundingClientRect().top};
  loco = {left:lod.getBoundingClientRect().left,top:lod.getBoundingClientRect().top};
  coL=co.left-loco.left
  coT=co.top-loco.top
  console.log(coL);
    // gsap.set(paths, {strokeDasharray:l});
    // gsap.set('#mockup', {opacity:0});
    var myobj = document.querySelector(".appstor .buttonconten");
    
    var t = function (){
     gsap.set('.loader',{display:'none'})
     gsap.set('.v2image',{opacity:1})
    }
    gsap.set('#top-left',{xPercent:-100,rotate:150,opacity:0.5,strokeWidth:1})
    gsap.set('#center-top',{yPercent:-200,rotate:100,opacity:0.5,strokeWidth:1})
    gsap.set('#head-left',{yPercent:-150,rotate:80,opacity:0.5,strokeWidth:1})
    gsap.set('#head-right',{xPercent:150,rotate:30,opacity:0.5,strokeWidth:1})
    gsap.set('#bottom-left',{yPercent:100,opacity:0.5,strokeWidth:1})
    gsap.set('#bottom-right',{xPercent:150,rotate:10,opacity:0.5,strokeWidth:1})

    gsap.set('.buttonconten',{width:'0px',height:'0px',paddingLeft:0,opacity:0,display:'none'})
var test=gsap.timeline()
    test.to('#top-left,#center-top,#head-left,#head-right,#head-right,#bottom-left,#bottom-right',{xPercent:0,yPercent:0,opacity:1,strokeWidth:4,duration:1,rotate:0,ease:'easeIn'})
    
   var tl=gsap.timeline({duration:1,ease:'easeOut',paused:false})
     
    tl.fromTo('.free path', {y:10,opacity:0}, {y:0,opacity:1,stagger:0.1,duration:1})
      .fromTo('.rec1,.rec2', {width:0,opacity:0}, {width:50,opacity:1},'<1')
      .fromTo('#subheading', {y:10,opacity:0}, {y:0,opacity:1},'<')
      .set('.v2image',{opacity:0},0)
     
  var button=gsap.timeline({duration:0.5})
      .to('.buttonconten',{display:'block'})
      .to('.buttonconten',{width:'auto',paddingLeft:10})
      .to('.buttonconten',{height:'auto',opacity:1,duration:0.2})

  var tl1=gsap.timeline({duration:1,ease:'easeIn',paused:false})
    tl1.fromTo('.svgLogo', {scale:1.5}, {scale:1})
       .fromTo('.mockup', {opacity:0,scale:1.3}, {opacity:1,scale:1},'-=0.3')
       .from('.kk,.heroheading',{rotate:3,y:50,opacity:0,stagger:0.1})
       .to('.loaderSvg',{left:coL,top:coT},'<')
       .from('.hero-right',{opacity:0},'<')
       .from('.nav-links,.logo',{rotate:3,y:-50,opacity:0,stagger:0.1},'<')
       .from('.appstore,.playstore',{rotate:3,y:50,opacity:0,stagger:0.1},'<')
       .add(button,'-=1.5')
       .set('.v2image',{opacity:0,duration:0.5})

  var main=gsap.timeline({paused:false,onComplete:t})
          .add(test)
          .add(tl,'-=2')
          .add(tl1,'<2')
      // main.timeScale(0.5)
    // clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
  
      
    
   
  }
  
  window.addEventListener("load", init());
  
  // var main=gsap.timeline({paused:false,
  //   onStart:function(){
  //     console.log(lod)
  //   }
  // })
  
   // var tl=gsap.timeline({pause:true,duration:1})
    //     tl.to('.mainbg',{
    //         width:'100vw'
    //     },0)
    //     tl.to('.hero-left',{
    //         xPercent:-103,
    //         opacity:0,
    //         duration:0.1
    //     },0)
    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: ".herov-2",
    //   start: "top top",
    //   end: "bottom top",
    //   pin:".mainbg ",
    //   toggleActions: "play none none reverse",
    //   scrub:true
    // });

  // card.addEventListener('click', () => {
  //   toggle = !toggle;
  //   if (toggle ? tl.play() : tl.reverse());
  // })