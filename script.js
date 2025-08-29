function toggleMenu() {
    // Toggle the menu visibility without double click bug
    const menu = document.getElementById("menu-active");
    const header = document.querySelector("header");
    const menuIcon = document.querySelector(".menu-icon img");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        header.style.height = "auto";
        menuIcon.src = "assets/burger.svg"; // Change to menu icon
    } else {
        menu.style.display = "flex";
        header.style.height = "100vh"; // Full viewport height
        menuIcon.src = "assets/close.svg"; // Change to close icon
    }
}

function menuLinkClicked() {
    const menu = document.getElementById("menu-active");
    const header = document.querySelector("header");
    const menuIcon = document.querySelector(".menu-icon img");
    menuIcon.src = "assets/burger.svg"; // Change to menu icon
    menu.style.display = "none";
    header.style.height = "auto";
}

// reset url when reloading the page after clicking a menu link
window.onload = function() {
    if (window.location.href.indexOf('#') > -1) {
        window.location.href = window.location.href.split('#')[0];
    }
};