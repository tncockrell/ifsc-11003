document.addEventListener("DOMContentLoaded", () => {
    // === Dark / Light Mode Toggle ===
    const toggleBtn = document.getElementById("toggleDark");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleBtn.textContent = document.body.classList.contains("dark-mode")
            ? "Toggle Light Mode"
            : "Toggle Dark Mode";

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark" : "light"
        );
    });

    // Load theme preference
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Toggle Light Mode";
    }

    // === Back to Top Button ===
    const backToTopBtn = document.getElementById("backToTop");

    // Show button after scrolling down 300px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 1900) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
