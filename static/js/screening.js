/* =========================================================
   AI CODE COMMENTOR
   TECHNICAL SCREENING JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * Add a small interaction to difficulty cards.
     * The actual navigation is handled by the Flask links.
     */

    const difficultyCards =
        document.querySelectorAll(".difficulty-card");

    difficultyCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("card-hover");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("card-hover");
        });

    });


    /*
     * Prevent accidental double-clicks on the Start buttons.
     */

    const startButtons =
        document.querySelectorAll(".difficulty-button");

    startButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.dataset.clicked === "true") {
                return;
            }

            button.dataset.clicked = "true";

            setTimeout(function () {
                button.dataset.clicked = "false";
            }, 1200);

        });

    });


    /*
     * Smoothly scroll to the difficulty section if a page
     * contains an internal screening link.
     */

    const screeningLinks =
        document.querySelectorAll(
            'a[href^="#difficulty"]'
        );

    screeningLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});