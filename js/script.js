const header = document.querySelector("header");
const menutoggle = document.querySelector(".nav-menu");
const burger = document.querySelector("burger")

window.addEventListener("scroll", ()=>{
  header.classList.toggle("scroll-header", window.scrollY>100);
})


burger.addEventListener("onclick", ()=>{
    menutoggle.classList.toggle("active");
})
