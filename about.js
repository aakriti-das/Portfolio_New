// Smooth fade-in animation for About Me section
document.addEventListener("DOMContentLoaded", () => {
    const bio = document.querySelector("#bio");
    const elements = bio.querySelectorAll(".leftbio img, .rightbio, .info div, #follow");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-bio");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
