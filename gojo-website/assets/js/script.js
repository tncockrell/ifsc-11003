const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
// DARK MODE TOGGLE
const toggleBtn = document.getElementById("toggleDark");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the user's preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load preference on page load
window.onload = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
};
