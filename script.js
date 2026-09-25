ocument.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

    // Open / close menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Close menu after selecting a link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    });

});
