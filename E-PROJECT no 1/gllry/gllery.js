// sroll AOS
AOS.init();

AOS.init({
    disable: window.innerWidth < 1024
});

// pre loder
let preloader = document.getElementById("preloader");

  window.addEventListener("load",function(){
    preloader.style.display = "none"
  })