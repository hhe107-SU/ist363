//console.log("js has been loaded");
const menuBtn=document.getElementById("menuBtn");

const mobileMenu=document.getElementById("mobileMenu")
const closeBtn=document.getElementById("closeBtn")


//"event name","callback function"
menuBtn.addEventListener("click",function(){
    mobileMenu.classList.add("active");
   // console.log("clickkkkkked")  
}) //end of menuBtn click


closeBtn.addEventListener("click",function(){
    mobileMenu.classList.remove("active");
   // console.log("clickkkkkked")  
}) //end of menuBtn click
