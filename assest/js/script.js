//select the element
var header=document.querySelector(".header");
var navItem=document.querySelector(".navItem");
var headeIcon=document.querySelector(".headeIcon");


//change the backround of header when the scroll height is geather then 130px
window.addEventListener("scroll",()=>{
    var scrollY=window.scrollY;

    //check the condition
    if( scrollY >130){
        header.classList.add("headerBg");
        headeIcon.style.color="red";
        navItem.style.color="red";
    }
    if( scrollY < 130){
        header.classList.remove("headerBg");
        headeIcon.style.color="#fff";
        navItem.style.color="#fff";
    }
})