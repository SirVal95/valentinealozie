const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.onclick = function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove("is-active");
    mobile_menu.classList.remove("is-active");
}))


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};



// scroll reveal

ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 50,
    duration: 1500
});

ScrollReveal().reveal('.about-me, .connect-box1', { delay: 50, origin: 'left' });
ScrollReveal().reveal('.my-photo, .connect-box2', { delay: 50, origin: 'right', interval: 100 });
ScrollReveal().reveal(' h1, .portfolio-set, .portfolio-box-container', { delay: 50, origin: 'top', interval: 100 });
ScrollReveal().reveal('.social-connect a', { delay: 50, origin: 'left', interval: 100 });
ScrollReveal().reveal('.service-box, .tool-box, .exp-box, .footer', { delay: 50, origin: 'bottom', interval: 100 });