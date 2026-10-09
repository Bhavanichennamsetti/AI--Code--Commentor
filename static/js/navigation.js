/* =========================================================
   AI CODE COMMENTOR
   NAVIGATION JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobileMenuButton");
    const mobileNavigation = document.getElementById("mobileNavigation");

    if (!menuButton || !mobileNavigation) {
        return;
    }

    menuButton.addEventListener("click", function () {

        mobileNavigation.classList.toggle("open");

        const isOpen =
            mobileNavigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });


    /*
     * Close the mobile menu after selecting a page.
     */

    const mobileLinks =
        mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        });

    });


    /*
     * Close the mobile menu when clicking outside it.
     */

    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            mobileNavigation.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            mobileNavigation.classList.contains("open")
        ) {

            mobileNavigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        }

    });


    /*
     * Close the mobile menu when the screen becomes
     * large enough to show the desktop navigation.
     */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 780) {

            mobileNavigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";

        }

    });

});