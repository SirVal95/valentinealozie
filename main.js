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
