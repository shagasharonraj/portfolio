// Mobile navigation menu
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    document.getElementById("contactForm").reset();
});
