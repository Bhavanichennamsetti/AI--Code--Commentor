/* =========================================================
   AI CODE COMMENTOR
   TECHNICAL SCREENING QUESTIONS JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".question-tab");
    const tabContents =
        document.querySelectorAll(".question-tab-content");

    /*
     * Switch between:
     * Problem & Logic
     * Pseudo Code
     * Code + Output
     * Examples
     * AI Practice
     */

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const targetId =
                tab.getAttribute("data-tab");

            if (!targetId) {
                return;
            }

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tabContents.forEach(function (content) {
                content.classList.remove("active");
            });

            tab.classList.add("active");

            const target =
                document.getElementById(targetId);

            if (target) {
                target.classList.add("active");
            }

        });

    });


    /*
     * Copy reference solution code.
     */

    const copyButtons =
        document.querySelectorAll(".copy-question-code");

    copyButtons.forEach(function (button) {

        button.addEventListener("click", async function () {

            const targetId =
                button.getAttribute("data-code-target");

            const target =
                document.getElementById(targetId);

            if (!target) {
                return;
            }

            const code =
                target.textContent.trim();

            if (!code) {
                return;
            }

            const copied =
                await copyText(code);

            if (copied) {

                const originalText =
                    button.textContent;

                button.textContent =
                    "Copied!";

                button.classList.add("copied");

                setTimeout(function () {

                    button.textContent =
                        originalText;

                    button.classList.remove(
                        "copied"
                    );

                }, 1500);

            }

        });

    });


    /*
     * Keyboard shortcuts.
     *
     * Ctrl + 1 → Problem & Logic
     * Ctrl + 2 → Pseudo Code
     * Ctrl + 3 → Code + Output
     * Ctrl + 4 → Examples
     * Ctrl + 5 → AI Practice
     */

    document.addEventListener(
        "keydown",
        function (event) {

            if (!event.ctrlKey) {
                return;
            }

            const key =
                event.key;

            const tabNumber =
                parseInt(key, 10);

            if (
                Number.isNaN(tabNumber) ||
                tabNumber < 1 ||
                tabNumber > tabs.length
            ) {
                return;
            }

            event.preventDefault();

            const targetTab =
                tabs[tabNumber - 1];

            if (targetTab) {
                targetTab.click();
            }

        }
    );


    /*
     * Copy helper.
     */

    async function copyText(text) {

        try {

            await navigator.clipboard.writeText(
                text
            );

            return true;

        } catch (error) {

            const textarea =
                document.createElement("textarea");

            textarea.value = text;

            textarea.style.position =
                "fixed";

            textarea.style.left =
                "-9999px";

            document.body.appendChild(
                textarea
            );

            textarea.select();

            let copied = false;

            try {

                copied =
                    document.execCommand(
                        "copy"
                    );

            } catch (copyError) {

                copied = false;

            }

            textarea.remove();

            return copied;

        }

    }

});