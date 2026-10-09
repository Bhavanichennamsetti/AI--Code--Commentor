/* =========================================================
   AI CODE COMMENTOR
   CODE DOWNLOADER JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const codeInput = document.getElementById("codeInput");
    const codeOutput = document.getElementById("codeOutput");
    const languageSelect = document.getElementById("languageSelect");

    if (!codeInput || !codeOutput || !languageSelect) {
        return;
    }


    /* -----------------------------------------------------
       DOWNLOAD BUTTON
       ----------------------------------------------------- */

    const workspaceFooter =
        document.querySelector(".workspace-footer");

    if (!workspaceFooter) {
        return;
    }

    const downloadButton =
        document.createElement("button");

    downloadButton.type = "button";
    downloadButton.className = "small-button download-button";
    downloadButton.textContent = "Download";

    workspaceFooter.insertBefore(
        downloadButton,
        workspaceFooter.querySelector(".generate-button")
    );


    /* -----------------------------------------------------
       FILE EXTENSIONS
       ----------------------------------------------------- */

    const extensions = {

        Python: ".py",

        JavaScript: ".js",

        Java: ".java",

        C: ".c",

        "C++": ".cpp",

        HTML: ".html",

        CSS: ".css"

    };


    /* -----------------------------------------------------
       DOWNLOAD CODE
       ----------------------------------------------------- */

    downloadButton.addEventListener(
        "click",
        function () {

            const language =
                languageSelect.value;

            let content =
                codeOutput.textContent.trim();

            /*
             * If there is no generated output,
             * download the code entered by the user.
             */

            if (
                !content ||
                content ===
                "Your AI result will appear here."
            ) {

                content =
                    codeInput.value.trim();

            }

            if (!content) {

                if (typeof window.showMessage === "function") {

                    window.showMessage(
                        "There is no code to download.",
                        "error"
                    );

                } else {

                    alert(
                        "There is no code to download."
                    );

                }

                return;
            }


            const extension =
                extensions[language] || ".txt";


            const filename =
                getFilename(language, extension);


            const blob =
                new Blob(
                    [content],
                    {
                        type:
                            getMimeType(language)
                    }
                );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");

            link.href = url;
            link.download = filename;

            document.body.appendChild(link);

            link.click();

            link.remove();

            URL.revokeObjectURL(url);


            if (typeof window.showMessage === "function") {

                window.showMessage(
                    "Code downloaded as " + filename,
                    "success"
                );

            }

        }
    );


    /* -----------------------------------------------------
       CREATE FILE NAME
       ----------------------------------------------------- */

    function getFilename(
        language,
        extension
    ) {

        const names = {

            Python: "commented_code",

            JavaScript: "commented_code",

            Java: "CommentedCode",

            C: "commented_code",

            "C++": "commented_code",

            HTML: "commented_code",

            CSS: "commented_code"

        };

        const name =
            names[language] ||
            "code";

        return name + extension;

    }


    /* -----------------------------------------------------
       MIME TYPES
       ----------------------------------------------------- */

    function getMimeType(language) {

        const mimeTypes = {

            Python:
                "text/x-python",

            JavaScript:
                "text/javascript",

            Java:
                "text/x-java-source",

            C:
                "text/x-c",

            "C++":
                "text/x-c++",

            HTML:
                "text/html",

            CSS:
                "text/css"

        };

        return (
            mimeTypes[language] ||
            "text/plain"
        );

    }

});