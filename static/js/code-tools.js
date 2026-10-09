/* =========================================================
   AI CODE COMMENTOR
   CODE TOOLS JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const toolButtons = document.querySelectorAll(".tool-button");
    const codeInput = document.getElementById("codeInput");
    const codeOutput = document.getElementById("codeOutput");
    const languageSelect = document.getElementById("languageSelect");
    const generateButton = document.getElementById("generateButton");
    const generateButtonText = document.getElementById("generateButtonText");
    const clearButton = document.getElementById("clearCodeButton");
    const copyButton = document.getElementById("copyCodeButton");
    const copyOutputButton = document.getElementById("copyOutputButton");
    const fileInput = document.getElementById("codeFileInput");
    const lineCount = document.getElementById("lineCount");
    const statusMessage = document.getElementById("statusMessage");

    const toolTitle = document.getElementById("toolTitle");
    const toolDescription = document.getElementById("toolDescription");
    const outputTitle = document.getElementById("outputTitle");

    if (!codeInput || !generateButton) {
        return;
    }


    /* -----------------------------------------------------
       TOOL CONFIGURATION
       ----------------------------------------------------- */

    const toolConfig = {

        comment: {
            title: "Add Meaningful Comments",
            description:
                "Let AI add useful comments to your code without changing its logic.",
            button:
                "Generate Comments",
            output:
                "Commented Code",
            endpoint:
                "/comment"
        },

        analyze: {
            title: "Analyze Your Code",
            description:
                "Check code quality, readability, performance, security, and possible improvements.",
            button:
                "Analyze Code",
            output:
                "Code Analysis",
            endpoint:
                "/analyze"
        },

        explain: {
            title: "Explain Your Code",
            description:
                "Get a simple, step-by-step explanation of how your code works.",
            button:
                "Explain Code",
            output:
                "Code Explanation",
            endpoint:
                "/explain"
        },

        fix: {
            title: "Find & Fix Bugs",
            description:
                "Let AI identify possible bugs and provide corrected code with an explanation.",
            button:
                "Fix Bugs",
            output:
                "Bug Fix Result",
            endpoint:
                "/fix-bug"
        }

    };


    let currentTool = "comment";


    /* -----------------------------------------------------
       SELECT TOOL
       ----------------------------------------------------- */

    toolButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedTool =
                button.getAttribute("data-tool");

            if (!toolConfig[selectedTool]) {
                return;
            }

            currentTool = selectedTool;

            toolButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            updateToolInterface();

        });

    });


    function updateToolInterface() {

        const config = toolConfig[currentTool];

        if (toolTitle) {
            toolTitle.textContent = config.title;
        }

        if (toolDescription) {
            toolDescription.textContent =
                config.description;
        }

        if (generateButtonText) {
            generateButtonText.textContent =
                config.button;
        }

        if (outputTitle) {
            outputTitle.textContent =
                config.output;
        }

        clearStatus();

    }


    /* -----------------------------------------------------
       UPDATE LINE COUNT
       ----------------------------------------------------- */

    function updateLineCount() {

        if (!lineCount) {
            return;
        }

        const value = codeInput.value;

        if (!value.trim()) {
            lineCount.textContent = "0 lines";
            return;
        }

        const lines = value.split("\n").length;

        lineCount.textContent =
            lines + (lines === 1 ? " line" : " lines");

    }


    codeInput.addEventListener(
        "input",
        updateLineCount
    );


    /* -----------------------------------------------------
       STATUS MESSAGE
       ----------------------------------------------------- */

    function setStatus(message, type) {

        if (!statusMessage) {
            return;
        }

        statusMessage.textContent = message;

        statusMessage.classList.remove(
            "success",
            "error",
            "loading"
        );

        if (type) {
            statusMessage.classList.add(type);
        }

    }


    function clearStatus() {

        if (!statusMessage) {
            return;
        }

        statusMessage.textContent = "";

        statusMessage.classList.remove(
            "success",
            "error",
            "loading"
        );

    }


    /* -----------------------------------------------------
       CLEAR CODE
       ----------------------------------------------------- */

    clearButton?.addEventListener(
        "click",
        function () {

            codeInput.value = "";

            codeOutput.textContent =
                "Your AI result will appear here.";

            updateLineCount();
            clearStatus();

        }
    );


    /* -----------------------------------------------------
       COPY INPUT CODE
       ----------------------------------------------------- */

    copyButton?.addEventListener(
        "click",
        async function () {

            if (!codeInput.value.trim()) {
                setStatus(
                    "There is no code to copy.",
                    "error"
                );
                return;
            }

            const copied =
                await copyText(codeInput.value);

            if (copied) {
                setStatus(
                    "Code copied successfully.",
                    "success"
                );
            } else {
                setStatus(
                    "Unable to copy the code.",
                    "error"
                );
            }

        }
    );


    /* -----------------------------------------------------
       COPY OUTPUT
       ----------------------------------------------------- */

    copyOutputButton?.addEventListener(
        "click",
        async function () {

            const output =
                codeOutput.textContent.trim();

            if (
                !output ||
                output === "Your AI result will appear here."
            ) {
                setStatus(
                    "There is no AI result to copy.",
                    "error"
                );
                return;
            }

            const copied =
                await copyText(output);

            if (copied) {
                setStatus(
                    "AI result copied successfully.",
                    "success"
                );
            } else {
                setStatus(
                    "Unable to copy the result.",
                    "error"
                );
            }

        }
    );


    /* -----------------------------------------------------
       GENERATE / ANALYZE / EXPLAIN / FIX
       ----------------------------------------------------- */

    generateButton.addEventListener(
        "click",
        async function () {

            const code =
                codeInput.value.trim();

            if (!code) {

                setStatus(
                    "Please enter some code first.",
                    "error"
                );

                codeInput.focus();

                return;
            }

            const config =
                toolConfig[currentTool];

            setLoading(true);

            try {

                const response =
                    await fetch(config.endpoint, {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            code: code,
                            language:
                                languageSelect
                                    ? languageSelect.value
                                    : "Python"
                        })

                    });


                const data =
                    await response.json();


                if (!response.ok || !data.success) {

                    throw new Error(
                        data.error ||
                        "Something went wrong."
                    );

                }


                displayResult(
                    data,
                    currentTool
                );

                setStatus(
                    "AI result generated successfully.",
                    "success"
                );

            } catch (error) {

                console.error(
                    "Code tool error:",
                    error
                );

                codeOutput.textContent =
                    "Unable to generate the result.";

                setStatus(
                    error.message ||
                    "Something went wrong. Please try again.",
                    "error"
                );

            } finally {

                setLoading(false);

            }

        }
    );


    /* -----------------------------------------------------
       DISPLAY AI RESULT
       ----------------------------------------------------- */

    function displayResult(data, tool) {

        let result = "";

        if (tool === "comment") {

            result =
                data.commented_code || "";

        } else if (tool === "analyze") {

            result =
                data.analysis || "";

        } else if (tool === "explain") {

            result =
                data.explanation || "";

        } else if (tool === "fix") {

            result =
                data.result || "";

        }

        if (!result) {
            result =
                "The AI returned an empty result.";
        }

        codeOutput.textContent = result;

    }


    /* -----------------------------------------------------
       LOADING STATE
       ----------------------------------------------------- */

    function setLoading(isLoading) {

        generateButton.disabled =
            isLoading;

        if (isLoading) {

            generateButton.classList.add(
                "loading"
            );

            if (generateButtonText) {
                generateButtonText.textContent =
                    "Working...";
            }

            setStatus(
                "AI is processing your code...",
                "loading"
            );

        } else {

            generateButton.classList.remove(
                "loading"
            );

            const config =
                toolConfig[currentTool];

            if (generateButtonText) {
                generateButtonText.textContent =
                    config.button;
            }

        }

    }


    /* -----------------------------------------------------
       FILE UPLOAD
       ----------------------------------------------------- */

    fileInput?.addEventListener(
        "change",
        function () {

            const file =
                fileInput.files[0];

            if (!file) {
                return;
            }

            const reader =
                new FileReader();

            reader.onload = function (event) {

                codeInput.value =
                    event.target.result || "";

                updateLineCount();

                detectLanguage(file.name);

                setStatus(
                    file.name +
                    " loaded successfully.",
                    "success"
                );

            };

            reader.onerror = function () {

                setStatus(
                    "Unable to read this file.",
                    "error"
                );

            };

            reader.readAsText(file);

        }
    );


    /* -----------------------------------------------------
       DETECT LANGUAGE FROM FILE EXTENSION
       ----------------------------------------------------- */

    function detectLanguage(filename) {

        if (!languageSelect) {
            return;
        }

        const extension =
            filename
                .split(".")
                .pop()
                .toLowerCase();

        const languageMap = {

            py: "Python",
            js: "JavaScript",
            java: "Java",
            c: "C",
            cpp: "C++",
            h: "C",
            html: "HTML",
            css: "CSS"

        };

        const detected =
            languageMap[extension];

        if (detected) {
            languageSelect.value =
                detected;
        }

    }


    /* -----------------------------------------------------
       CLIPBOARD HELPER
       ----------------------------------------------------- */

    async function copyText(text) {

        if (!text) {
            return false;
        }

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


    /* -----------------------------------------------------
       INITIAL STATE
       ----------------------------------------------------- */

    updateLineCount();
    updateToolInterface();

});