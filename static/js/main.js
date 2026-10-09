/* =========================================================
   AI CODE COMMENTOR
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /*
     * Add a small visual effect when buttons/links are clicked.
     * This keeps the interface responsive without changing
     * the actual navigation behaviour.
     */

    const clickableElements = document.querySelectorAll(
        "button, .primary-button, .secondary-button, .difficulty-button, " +
        ".practice-button, .next-question, .previous-question"
    );

    clickableElements.forEach(function (element) {

        element.addEventListener("click", function () {

            element.classList.add("is-clicked");

            setTimeout(function () {
                element.classList.remove("is-clicked");
            }, 180);

        });

    });


    /*
     * Automatically remove the loading class if a page
     * contains one.
     */

    window.addEventListener("load", function () {

        document.body.classList.add("page-loaded");

    });


    /*
     * Utility function used by other JavaScript files.
     *
     * Example:
     * showMessage("Code copied successfully.");
     */

    window.showMessage = function (message, type) {

        const messageElement = document.getElementById("statusMessage");

        if (!messageElement) {
            return;
        }

        messageElement.textContent = message;

        messageElement.classList.remove(
            "success",
            "error",
            "info"
        );

        if (type) {
            messageElement.classList.add(type);
        }

        clearTimeout(window.messageTimeout);

        window.messageTimeout = setTimeout(function () {

            messageElement.textContent = "";

            messageElement.classList.remove(
                "success",
                "error",
                "info"
            );

        }, 3500);

    };


    /*
     * Copy text to clipboard.
     *
     * Other pages can use:
     *
     * copyToClipboard("Hello world");
     */

    window.copyToClipboard = async function (text) {

        if (!text) {
            return false;
        }

        try {

            await navigator.clipboard.writeText(text);

            return true;

        } catch (error) {

            /*
             * Fallback for browsers where Clipboard API
             * is unavailable.
             */

            const temporaryTextArea =
                document.createElement("textarea");

            temporaryTextArea.value = text;

            temporaryTextArea.style.position = "fixed";
            temporaryTextArea.style.left = "-9999px";

            document.body.appendChild(temporaryTextArea);

            temporaryTextArea.select();

            let copied = false;

            try {
                copied = document.execCommand("copy");
            } catch (copyError) {
                copied = false;
            }

            temporaryTextArea.remove();

            return copied;

        }

    };


    /*
     * Smooth scrolling for internal page links.
     */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

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