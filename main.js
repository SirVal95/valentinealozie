const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

// scroll reveal

ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 400,
    duration: 2500
});

ScrollReveal().reveal('.about-me, .connect-box1', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.my-photo, .connect-box2', { delay: 600, origin: 'right', interval: 200 });
ScrollReveal().reveal(' h1, .portfolio-set, .portfolio-box-container', { delay: 500, origin: 'top', interval: 200 });
ScrollReveal().reveal('.social-connect a', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.service-box, .tool-box, .exp-box, .footer', { delay: 500, origin: 'bottom', interval: 200 });