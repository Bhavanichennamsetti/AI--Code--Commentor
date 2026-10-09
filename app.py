
from flask import Flask, render_template, request, jsonify
from google import genai
from dotenv import load_dotenv
import os

from data.question_data import get_question, get_questions

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv("GEMINI_API_KEY")
MODEL = os.getenv("GEMINI_MODEL", "gemini-3.8-flash")

client = genai.Client(api_key=API_KEY) if API_KEY else None


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/code-tools")
def code_tools():
    return render_template("code-tools.html")


@app.route("/technical-screening")
def technical_screening():
    return render_template("technical-screening.html")


@app.route("/question/<difficulty>/<int:question_id>")
def question(difficulty, question_id):
    question_data = get_question(difficulty, question_id)

    if question_data is None:
        return "Question not found", 404

    return render_template(
        "question.html",
        question=question_data,
        questions=get_questions(difficulty),
        difficulty=difficulty,
        question_id=question_id
    )


@app.route("/practice/<difficulty>/<int:question_id>")
def practice(difficulty, question_id):
    question_data = get_question(difficulty, question_id)

    if question_data is None:
        return "Question not found", 404

    return render_template(
        "practice.html",
        question=question_data,
        difficulty=difficulty,
        question_id=question_id
    )


@app.route("/about")
def about():
    return render_template("about.html")


def ask_ai(prompt):
    if client is None:
        return None, "Gemini API key is missing. Check your .env file."

    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt
        )

        if not response.text:
            return None, "Gemini returned an empty response."

        return response.text, None

    except Exception as error:
        print("Gemini API Error:", error)
        return None, str(error)


def get_code_input():
    data = request.get_json(silent=True) or {}
    return (
        data.get("code", "").strip(),
        data.get("language", "Python")
    )


def run_ai_tool(prompt, result_name):
    result, error = ask_ai(prompt)

    if error:
        return jsonify({
            "success": False,
            "error": error
        }), 500

    return jsonify({
        "success": True,
        result_name: result
    })


@app.route("/comment", methods=["POST"])
def comment_code():
    code, language = get_code_input()

    if not code:
        return jsonify({
            "success": False,
            "error": "Please enter some code first."
        }), 400

    prompt = f"""
You are an expert software developer.

Language: {language}

Add meaningful comments to this code.
Keep the original logic unchanged.
Use correct comment syntax.
Return only the commented code without Markdown fences.

Code:
{code}
"""

    return run_ai_tool(prompt, "commented_code")


@app.route("/analyze", methods=["POST"])
def analyze_code():
    code, language = get_code_input()

    if not code:
        return jsonify({
            "success": False,
            "error": "Please enter some code first."
        }), 400

    prompt = f"""
Analyze this {language} code for a beginner.

Explain:
1. Code quality
2. Readability
3. Performance
4. Security
5. Potential bugs
6. Suggested improvements
7. Overall rating

Code:
{code}
"""

    return run_ai_tool(prompt, "analysis")


@app.route("/explain", methods=["POST"])
def explain_code():
    code, language = get_code_input()

    if not code:
        return jsonify({
            "success": False,
            "error": "Please enter some code first."
        }), 400

    prompt = f"""
Explain this {language} code to a beginner.

Include:
1. What it does
2. Step-by-step explanation
3. Important variables and functions
4. Logic used
5. Example execution
6. Summary

Code:
{code}
"""

    return run_ai_tool(prompt, "explanation")


@app.route("/fix-bug", methods=["POST"])
def fix_bug():
    code, language = get_code_input()

    if not code:
        return jsonify({
            "success": False,
            "error": "Please enter some code first."
        }), 400

    prompt = f"""
Debug this {language} code.

Explain:
1. Problems found
2. Why they happen
3. Corrected code
4. Explanation of the fixes

Preserve the intended purpose.

Code:
{code}
"""

    return run_ai_tool(prompt, "result")


@app.route("/evaluate", methods=["POST"])
def evaluate_code():
    data = request.get_json(silent=True) or {}

    question_text = data.get("question", "").strip()
    expected_solution = data.get("expected_solution", "").strip()
    candidate_code = data.get("code", "").strip()
    language = data.get("language", "Python")

    if not question_text:
        return jsonify({
            "success": False,
            "error": "Question is missing."
        }), 400

    if not candidate_code:
        return jsonify({
            "success": False,
            "error": "Please submit your code."
        }), 400

    prompt = f"""
Evaluate a candidate's technical screening answer.

Language: {language}

Question:
{question_text}

Reference solution, if provided:
{expected_solution or "No reference solution was provided."}

Candidate code:
{candidate_code}

Provide:
1. Result: Correct, Partially Correct, or Incorrect
2. Score out of 10
3. Explanation
4. What was done well
5. What needs improvement
6. Correct approach
7. Corrected code if needed

Consider logic, correctness, edge cases, readability and efficiency.
Do not claim the code was executed unless it actually was.
"""

    return run_ai_tool(prompt, "evaluation")


@app.errorhandler(404)
def page_not_found(error):
    return "Page not found", 404


@app.errorhandler(500)
def internal_server_error(error):
    return "Internal server error", 500


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
