console.log("🚀 Portfolio Loaded");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        // Ignore empty links
        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// Scroll animation for portfolio elements
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


// Elements to animate
const animatedElements = document.querySelectorAll(
    ".project-card, .service-card, .skill-category, .experience-item, .experience-case-study"
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// Navbar shadow while scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 20px rgba(0, 255, 204, 0.12)";

    } else {

        navbar.style.boxShadow = "none";

    }

});