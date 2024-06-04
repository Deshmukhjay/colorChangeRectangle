var rect=document.querySelector('#center')
rect.addEventListener("mousemove",function(det){
var recloc=rect.getBoundingClientRect();
var insidebox=det.clientX-recloc.left;

if(insidebox<recloc.width/2){
var redcolor=gsap.utils.mapRange(0,recloc.width/2,255,0,insidebox)
gsap.to(rect,{
    backgroundColor:`rgb(${redcolor},0,0)`,
    ease:Power4,
})
}
else{
    var bluecolor=gsap.utils.mapRange(recloc.width/2,recloc.width,0,255,insidebox)
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease:Power4,
    })
}
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})
