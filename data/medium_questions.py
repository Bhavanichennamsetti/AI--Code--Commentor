MEDIUM_QUESTIONS = [

    {
        "id": 1,
        "title": "Print Numbers from 1 to N",
        "description": "Write a program to print all numbers from 1 to N using a loop.",
        "topic": "Loops",
        "logic": [
            "Read the value of N.",
            "Start the loop from 1.",
            "Continue the loop until N is reached.",
            "Print each number."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "FOR i = 1 TO N",
            "    Print i",
            "END FOR",
            "END"
        ],
        "example_input": "N = 5",
        "example_output": "1 2 3 4 5",
        "solution": """n = int(input("Enter N: "))

for i in range(1, n + 1):
    print(i, end=" ")""",
        "practice": [
            {
                "id": 1,
                "title": "Print Even Numbers",
                "description": "Write a program to print all even numbers from 1 to N using a loop."
            },
            {
                "id": 2,
                "title": "Print Odd Numbers",
                "description": "Write a program to print all odd numbers from 1 to N using a loop."
            }
        ]
    },

    {
        "id": 2,
        "title": "Calculate Sum of N Numbers",
        "description": "Write a program to calculate the sum of all numbers from 1 to N using a loop.",
        "topic": "Loops",
        "logic": [
            "Read the value of N.",
            "Create a variable to store the sum.",
            "Loop from 1 to N.",
            "Add each number to the sum.",
            "Display the final sum."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "Set SUM = 0",
            "FOR i = 1 TO N",
            "    SUM = SUM + i",
            "END FOR",
            "Print SUM",
            "END"
        ],
        "example_input": "N = 5",
        "example_output": "Sum = 15",
        "solution": """n = int(input("Enter N: "))

total = 0

for i in range(1, n + 1):
    total = total + i

print("Sum =", total)""",
        "practice": [
            {
                "id": 1,
                "title": "Sum of Even Numbers",
                "description": "Write a program to find the sum of all even numbers from 1 to N."
            },
            {
                "id": 2,
                "title": "Sum of Odd Numbers",
                "description": "Write a program to find the sum of all odd numbers from 1 to N."
            }
        ]
    },

    {
        "id": 3,
        "title": "Find the Factorial of a Number",
        "description": "Write a program to calculate the factorial of a given number using a loop.",
        "topic": "Loops",
        "logic": [
            "Read the number N.",
            "Initialize factorial to 1.",
            "Loop from 1 to N.",
            "Multiply factorial by the current number.",
            "Display the factorial."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "Set FACTORIAL = 1",
            "FOR i = 1 TO N",
            "    FACTORIAL = FACTORIAL * i",
            "END FOR",
            "Print FACTORIAL",
            "END"
        ],
        "example_input": "N = 5",
        "example_output": "Factorial = 120",
        "solution": """n = int(input("Enter a number: "))

factorial = 1

for i in range(1, n + 1):
    factorial = factorial * i

print("Factorial =", factorial)""",
        "practice": [
            {
                "id": 1,
                "title": "Calculate Power Using a Loop",
                "description": "Write a program to calculate the power of a number using repeated multiplication."
            },
            {
                "id": 2,
                "title": "Product of Numbers",
                "description": "Write a program to calculate the product of all numbers from 1 to N."
            }
        ]
    },

    {
        "id": 4,
        "title": "Reverse a Number",
        "description": "Write a program to reverse the digits of a given number using a loop.",
        "topic": "Loops",
        "logic": [
            "Read the number.",
            "Extract the last digit using the remainder operator.",
            "Add the digit to the reversed number.",
            "Remove the last digit from the original number.",
            "Repeat until no digits remain."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "Set REVERSE = 0",
            "WHILE N > 0",
            "    DIGIT = N % 10",
            "    REVERSE = REVERSE * 10 + DIGIT",
            "    N = N // 10",
            "END WHILE",
            "Print REVERSE",
            "END"
        ],
        "example_input": "N = 12345",
        "example_output": "Reverse = 54321",
        "solution": """number = int(input("Enter a number: "))

reverse = 0

while number > 0:
    digit = number % 10
    reverse = reverse * 10 + digit
    number = number // 10

print("Reverse =", reverse)""",
        "practice": [
            {
                "id": 1,
                "title": "Count Digits",
                "description": "Write a program to count the number of digits in a given number using a loop."
            },
            {
                "id": 2,
                "title": "Find Digit Sum",
                "description": "Write a program to find the sum of all digits of a given number."
            }
        ]
    },

    {
        "id": 5,
        "title": "Check Prime Number",
        "description": "Write a program to check whether a given number is prime using a loop.",
        "topic": "Loops",
        "logic": [
            "Read the number N.",
            "A prime number must be greater than 1.",
            "Check whether N is divisible by any number from 2 to N - 1.",
            "If it is divisible, it is not prime.",
            "Otherwise, it is prime."
        ],
        "pseudocode": [
            "START",
            "Read N",
            "Set IS_PRIME = True",
            "IF N < 2",
            "    Set IS_PRIME = False",
            "ELSE",
            "    FOR i = 2 TO N - 1",
            "        IF N % i == 0",
            "            Set IS_PRIME = False",
            "            BREAK",
            "        END IF",
            "    END FOR",
            "END IF",
            "IF IS_PRIME",
            "    Print Prime",
            "ELSE",
            "    Print Not Prime",
            "END IF",
            "END"
        ],
        "example_input": "N = 17",
        "example_output": "17 is a prime number.",
        "solution": """number = int(input("Enter a number: "))

is_prime = True

if number < 2:
    is_prime = False
else:
    for i in range(2, number):
        if number % i == 0:
            is_prime = False
            break

if is_prime:
    print(number, "is a prime number.")
else:
    print(number, "is not a prime number.")""",
        "practice": [
            {
                "id": 1,
                "title": "Print Prime Numbers",
                "description": "Write a program to print all prime numbers between 1 and N."
            },
            {
                "id": 2,
                "title": "Count Prime Numbers",
                "description": "Write a program to count how many prime numbers exist between 1 and N."
            }
        ]
    }

]