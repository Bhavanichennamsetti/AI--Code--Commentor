from data.easy_questions import EASY_QUESTIONS
from data.medium_questions import MEDIUM_QUESTIONS
from data.hard_questions import HARD_QUESTIONS


QUESTIONS = {
    "easy": EASY_QUESTIONS,
    "medium": MEDIUM_QUESTIONS,
    "hard": HARD_QUESTIONS
}


def get_questions(difficulty):
    difficulty = difficulty.lower()
    return QUESTIONS.get(difficulty, [])


def get_question(difficulty, question_id):
    difficulty = difficulty.lower()

    questions = QUESTIONS.get(difficulty, [])

    for question in questions:
        if question["id"] == question_id:
            return question

    return None


def get_question_count(difficulty):
    difficulty = difficulty.lower()

    return len(QUESTIONS.get(difficulty, []))


def get_all_questions():
    all_questions = []

    for difficulty_questions in QUESTIONS.values():
        all_questions.extend(difficulty_questions)

    return all_questions