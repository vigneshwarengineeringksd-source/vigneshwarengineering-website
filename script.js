const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
