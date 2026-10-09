/* =========================================================
   AI CODE COMMENTOR
   THEME TOGGLE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (!themeToggle || !themeIcon) {
        return;
    }

    const savedTheme = localStorage.getItem("ai-code-commentor-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "☀";
    } else {
        themeIcon.textContent = "☾";
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        const isDark =
            document.body.classList.contains("dark-theme");

        if (isDark) {
            themeIcon.textContent = "☀";
            localStorage.setItem(
                "ai-code-commentor-theme",
                "dark"
            );
        } else {
            themeIcon.textContent = "☾";
            localStorage.setItem(
                "ai-code-commentor-theme",
                "light"
            );
        }

    });

});