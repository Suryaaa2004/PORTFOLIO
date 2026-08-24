```javascript
console.log("🔐 Surya Abhiram Cybersecurity Portfolio Loaded");

// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Reveal elements when they enter the viewport
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
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

const animatedElements = document.querySelectorAll(
    ".project-card, .service-card, .method-step, .skill-category, .experience-item, .edu-item, .case-study-card"
);

animatedElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);
});

// Apply the visible animation
const style = document.createElement("style");

style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);

// Add shadow to navbar while scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 4px 20px rgba(0, 255, 204, 0.12)";
    } else {
        navbar.style.boxShadow = "none";
    }
});
```
