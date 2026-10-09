EASY_QUESTIONS = [

    {
        "id": 1,
        "title": "Find the Largest of Two Numbers",
        "description": "Write a program to find the larger of two given numbers using if/else.",
        "topic": "If / Else",
        "logic": [
            "Read two numbers.",
            "Compare the first number with the second number.",
            "If the first number is greater, display the first number.",
            "Otherwise, display the second number."
        ],
        "pseudocode": [
            "START",
            "Read A and B",
            "IF A > B",
            "    Print A",
            "ELSE",
            "    Print B",
            "END IF",
            "END"
        ],
        "example_input": "A = 25\nB = 18",
        "example_output": "25 is the largest number.",
        "solution": """a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if a > b:
    print(a, "is the largest number.")
else:
    print(b, "is the largest number.")""",
        "practice": [
            {
                "id": 1,
                "title": "Find the Smaller of Two Numbers",
                "description": "Write a program to find the smaller of two numbers using if/else."
            },
            {
                "id": 2,
                "title": "Compare Two Numbers",
                "description": "Write a program to determine whether two numbers are equal or which one is greater."
            }
        ]
    },

    {
        "id": 2,
        "title": "Check Even or Odd",
        "description": "Write a program to check whether a given number is even or odd.",
        "topic": "If / Else",
        "logic": [
            "Read a number.",
            "Divide the number by 2 and check the remainder.",
            "If the remainder is zero, the number is even.",
            "Otherwise, the number is odd."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "IF N % 2 == 0",
            "    Print Even",
            "ELSE",
            "    Print Odd",
            "END IF",
            "END"
        ],
        "example_input": "N = 14",
        "example_output": "14 is even.",
        "solution": """number = int(input("Enter a number: "))

if number % 2 == 0:
    print(number, "is even.")
else:
    print(number, "is odd.")""",
        "practice": [
            {
                "id": 1,
                "title": "Check Divisibility by 5",
                "description": "Write a program to check whether a number is divisible by 5."
            },
            {
                "id": 2,
                "title": "Check Multiple of 10",
                "description": "Write a program to check whether a number is a multiple of 10."
            }
        ]
    },

    {
        "id": 3,
        "title": "Check Positive, Negative or Zero",
        "description": "Write a program to determine whether a number is positive, negative, or zero.",
        "topic": "If / Else",
        "logic": [
            "Read a number.",
            "If the number is greater than zero, it is positive.",
            "If the number is less than zero, it is negative.",
            "Otherwise, it is zero."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "IF N > 0",
            "    Print Positive",
            "ELSE IF N < 0",
            "    Print Negative",
            "ELSE",
            "    Print Zero",
            "END IF",
            "END"
        ],
        "example_input": "N = -7",
        "example_output": "-7 is negative.",
        "solution": """number = int(input("Enter a number: "))

if number > 0:
    print(number, "is positive.")
elif number < 0:
    print(number, "is negative.")
else:
    print("The number is zero.")""",
        "practice": [
            {
                "id": 1,
                "title": "Check Temperature",
                "description": "Write a program to determine whether a temperature is below zero, above zero, or exactly zero."
            },
            {
                "id": 2,
                "title": "Check Number Sign",
                "description": "Write a program to display whether a number is positive or non-positive."
            }
        ]
    },

    {
        "id": 4,
        "title": "Check Voting Eligibility",
        "description": "Write a program to check whether a person is eligible to vote based on age.",
        "topic": "If / Else",
        "logic": [
            "Read the person's age.",
            "Check whether the age is 18 or greater.",
            "If it is 18 or greater, the person is eligible.",
            "Otherwise, the person is not eligible."
        ],
        "pseudocode": [
            "START",
            "Read AGE",
            "IF AGE >= 18",
            "    Print Eligible to vote",
            "ELSE",
            "    Print Not eligible to vote",
            "END IF",
            "END"
        ],
        "example_input": "Age = 21",
        "example_output": "Eligible to vote.",
        "solution": """age = int(input("Enter your age: "))

if age >= 18:
    print("Eligible to vote.")
else:
    print("Not eligible to vote.")""",
        "practice": [
            {
                "id": 1,
                "title": "Check Driving Eligibility",
                "description": "Write a program to check whether a person is old enough to apply for a driving license."
            },
            {
                "id": 2,
                "title": "Check School Admission",
                "description": "Write a program to check whether a student meets a minimum age requirement for admission."
            }
        ]
    },

    {
        "id": 5,
        "title": "Calculate Grade",
        "description": "Write a program to calculate a student's grade based on marks using if/elif/else.",
        "topic": "If / Else",
        "logic": [
            "Read the student's marks.",
            "Check the marks against the grade ranges.",
            "Assign a grade based on the matching range.",
            "Display the grade."
        ],
        "pseudocode": [
            "START",
            "Read MARKS",
            "IF MARKS >= 90",
            "    Print A",
            "ELSE IF MARKS >= 75",
            "    Print B",
            "ELSE IF MARKS >= 60",
            "    Print C",
            "ELSE IF MARKS >= 40",
            "    Print D",
            "ELSE",
            "    Print F",
            "END IF",
            "END"
        ],
        "example_input": "Marks = 82",
        "example_output": "Grade B",
        "solution": """marks = int(input("Enter marks: "))

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 60:
    grade = "C"
elif marks >= 40:
    grade = "D"
else:
    grade = "F"

print("Grade:", grade)""",
        "practice": [
            {
                "id": 1,
                "title": "Check Pass or Fail",
                "description": "Write a program to determine whether a student has passed or failed based on marks."
            },
            {
                "id": 2,
                "title": "Calculate Performance Level",
                "description": "Write a program to classify a student's performance as Excellent, Good, Average, or Poor."
            }
        ]
    }

]