function toggleMenu() {
    const menu = document.getElementById("menu-active");
    const header = document.querySelector("header");
    const menuIcon = document.querySelector(".menu-icon img");
    if (menu.style.display === "none") {
        menuIcon.src = "assets/close.svg"; // Change to close icon
        header.style.height = "100%";
        menu.style.display = "flex";
    } else {
        menuIcon.src = "assets/burger.svg"; // Change to menu icon
        menu.style.display = "none";
        header.style.height = "auto";
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