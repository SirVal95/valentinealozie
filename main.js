const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

// to initialize on-scroll animations

new WOW().init();