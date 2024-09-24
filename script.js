let menu=document.querySelector("#menu");
let cross=document.querySelector("#cross")
var tl=gsap.timeline();

 tl.to("#full",{
right:0,
delay:0.1,
duration:0.4
 })
 tl.from("#full h4",{
    x:150,
    duration:0.4,
    stagger:0.3,
    opacity:0
 })
 tl.from("#full i",{
    duration:0,
    opacity:0
 })

 tl.pause()
 
 menu.addEventListener("click",function(){
    tl.play()
 })
 cross.addEventListener("click",function(){
    tl.reverse()
 })
  
