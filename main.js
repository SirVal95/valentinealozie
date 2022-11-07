//Function to toggle the bar
function menuBarList() {
    var x = document.getElementById("menu-bar");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

//Function to toggle the menu icon to cancel icon
function myFunction(x) {
    x.classList.toggle("fa-xmark")
}




const menu_btn = document.querySelector(".hamburger-menu");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})



// to initialize on-scroll animations

new WOW().init();