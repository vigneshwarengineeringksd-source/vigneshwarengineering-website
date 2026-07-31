// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Future features can be added here
console.log("Vigneshwar Engineering Industrial website loaded successfully.");
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}
