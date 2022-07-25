const header = document.querySelector("header");
const menutoggle = document.querySelector('.toggle');

window.addEventListener("scroll", function(){
  header.classList.toggle("scroll-header", window.scrollY>0);
})

menutoggle.onclick = ()=>{
    menutoggle.classList.toggle('active');
}