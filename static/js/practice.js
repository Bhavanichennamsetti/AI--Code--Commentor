/* =========================================================
   AI CODE COMMENTOR
   AI PRACTICE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const practiceButtons =
        document.querySelectorAll(".start-practice-button");

    const workspace =
        document.getElementById("practiceWorkspace");

    const practiceTitle =
        document.getElementById("practiceTitle");

    const practiceDescription =
        document.getElementById("practiceDescription");

    const practiceCode =
        document.getElementById("practiceCode");

    const practiceLanguage =
        document.getElementById("practiceLanguage");

    const closeButton =
        document.getElementById("closePracticeButton");

    const submitButton =
        document.getElementById("submitPracticeButton");

    const practiceMessage =
        document.getElementById("practiceMessage");

    const practiceResult =
        document.getElementById("practiceResult");

    const resultIcon =
        document.getElementById("resultIcon");

    const resultTitle =
        document.getElementById("resultTitle");

    const resultContent =
        document.getElementById("resultContent");


    if (!workspace) {
        return;
    }


    let currentQuestion = "";


    /* -----------------------------------------------------
       START PRACTICE
       ----------------------------------------------------- */

    practiceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            currentQuestion =
                button.dataset.question || "";

            const description =
                button.dataset.description || "";

            if (practiceTitle) {
                practiceTitle.textContent =
                    currentQuestion ||
                    "Practice Question";
            }

            if (practiceDescription) {
                practiceDescription.textContent =
                    description;
            }

            if (practiceCode) {
                practiceCode.value = "";
            }

            if (practiceResult) {
                practiceResult.hidden = true;
            }

            if (practiceMessage) {
                practiceMessage.textContent = "";
            }

            workspace.hidden = false;

            workspace.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* -----------------------------------------------------
       CLOSE PRACTICE
       ----------------------------------------------------- */

    closeButton?.addEventListener(
        "click",
        function () {

            workspace.hidden = true;

            if (practiceResult) {
                practiceResult.hidden = true;
            }

            if (practiceMessage) {
                practiceMessage.textContent = "";
            }

        }
    );


    /* -----------------------------------------------------
       SUBMIT PRACTICE
       ----------------------------------------------------- */

    submitButton?.addEventListener(
        "click",
        async function () {

            const code =
                practiceCode
                    ? practiceCode.value.trim()
                    : "";

            if (!currentQuestion) {

                showMessage(
                    "Please select a practice question first.",
                    "error"
                );

                return;
            }

            if (!code) {

                showMessage(
                    "Please write your solution before submitting.",
                    "error"
                );

                if (practiceCode) {
                    practiceCode.focus();
                }

                return;
            }


            setLoading(true);

            try {

                const response =
                    await fetch("/evaluate", {

                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            question:
                                currentQuestion,

                            expected_solution:
                                "",

                            code:
                                code,

                            language:
                                practiceLanguage
                                    ? practiceLanguage.value
                                    : "Python"

                        })

                    });


                const data =
                    await response.json();


                if (!response.ok || !data.success) {

                    throw new Error(
                        data.error ||
                        "Unable to evaluate the code."
                    );

                }


                displayEvaluation(
                    data.evaluation
                );


                showMessage(
                    "Your code has been evaluated.",
                    "success"
                );


            } catch (error) {

                console.error(
                    "Practice evaluation error:",
                    error
                );

                showMessage(
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
       DISPLAY EVALUATION
       ----------------------------------------------------- */

    function displayEvaluation(evaluation) {

        if (!practiceResult) {
            return;
        }

        const result =
            evaluation ||
            "No evaluation was returned.";

        const normalized =
            result.toLowerCase();

        const isIncorrect =
            normalized.includes("result: incorrect") ||
            normalized.includes("incorrect");

        const isCorrect =
            normalized.includes("result: correct") ||
            normalized.includes("correct");


        if (resultIcon) {

            if (isIncorrect && !isCorrect) {

                resultIcon.textContent = "✕";

                resultIcon.classList.add(
                    "incorrect"
                );

                resultIcon.classList.remove(
                    "correct"
                );

            } else {

                resultIcon.textContent = "✓";

                resultIcon.classList.add(
                    "correct"
                );

                resultIcon.classList.remove(
                    "incorrect"
                );

            }

        }


        if (resultTitle) {

            if (isIncorrect && !isCorrect) {

                resultTitle.textContent =
                    "Needs Improvement";

            } else if (isCorrect) {

                resultTitle.textContent =
                    "Correct Solution";

            } else {

                resultTitle.textContent =
                    "Evaluation Result";

            }

        }


        if (resultContent) {
            resultContent.textContent =
                result;
        }


        practiceResult.hidden = false;

        practiceResult.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    /* -----------------------------------------------------
       LOADING STATE
       ----------------------------------------------------- */

    function setLoading(isLoading) {

        if (!submitButton) {
            return;
        }

        submitButton.disabled =
            isLoading;


        if (isLoading) {

            submitButton.dataset.originalText =
                submitButton.innerHTML;

            submitButton.innerHTML =
                "Evaluating...";

            showMessage(
                "AI is evaluating your solution...",
                "loading"
            );

        } else {

            submitButton.innerHTML =
                submitButton.dataset.originalText ||
                "Submit for Evaluation";

        }

    }


    /* -----------------------------------------------------
       MESSAGE
       ----------------------------------------------------- */

    function showMessage(message, type) {

        if (!practiceMessage) {
            return;
        }

        practiceMessage.textContent =
            message;

        practiceMessage.classList.remove(
            "success",
            "error",
            "loading"
        );

        if (type) {
            practiceMessage.classList.add(
                type
            );
        }

    }

});