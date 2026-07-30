// Initialize AOS animation
AOS.init({
    duration:1000,
    once:true
});

// Hide Loader
window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";
document.getElementById("loader").style.visibility="hidden";

},1800);

});

// Sticky Header
window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,0.9)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.5)";

}else{

header.style.background="rgba(0,0,0,.55)";
header.style.boxShadow="none";

}

});

// Smooth Button Animation
document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});
