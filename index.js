const nav = document.getElementById("nav"),
    menuBtn = document.getElementById("menu-btn"),
    closeBtn = document.getElementById("close-btn"),
    body = document.querySelector("body"),
    navLinks = document.querySelectorAll("#nav a");

menuBtn.addEventListener("click", () => {
    nav.style.display = "flex";
    menuBtn.style.display = "none";
    body.style.overflow = "hidden";

    // Add bounce-in animation
    nav.classList.add("bounce-in");
    setTimeout(() => {
        nav.classList.remove("bounce-in");
    }, 200); // Remove bounce-in class after animation completes
});

closeBtn.addEventListener("click", () => {
    // Add bounce-out animation before hiding nav
    nav.classList.add("bounce-out");

    setTimeout(() => {
        nav.style.display = "none";
        menuBtn.style.display = "flex";
        body.style.overflow = "auto";

        // Remove bounce-out class after animation completes
        nav.classList.remove("bounce-out");
    }, 200); // Wait for the bounce-out animation to complete
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Add bounce-out animation before hiding nav
        nav.classList.add("bounce-out");

        setTimeout(() => {
            nav.style.display = "none";
            menuBtn.style.display = "flex";
            body.style.overflow = "auto";

            // Remove bounce-out class after animation completes
            nav.classList.remove("bounce-out");
        }, 200); // Wait for the bounce-out animation to complete
    });
});

function checkScreenWidth() {
    if (window.innerWidth > 650) {
        // If width is greater than 650px, hide #nav and #menu-btn
        menuBtn.style.display = "none";
        nav.style.display = "none";
    } else {
        // If width is less than or equal to 650px, show #nav and #menu-btn
        menuBtn.style.display = "flex"; // Or whatever display type you prefer
    }
}

// Event listener for window resize
window.addEventListener("resize", checkScreenWidth);

// Call the function once on load to check the initial screen size
window.addEventListener("load", checkScreenWidth);
