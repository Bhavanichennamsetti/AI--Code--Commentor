HARD_QUESTIONS = [

    {
        "id": 1,
        "title": "Find the Largest Element Using a Function",
        "description": "Write a function that accepts a list of numbers and returns the largest element.",
        "topic": "Functions",
        "logic": [
            "Create a function that accepts a list of numbers.",
            "Assume the first element is the largest.",
            "Compare each remaining element with the current largest value.",
            "Update the largest value when a bigger element is found.",
            "Return the largest value."
        ],
        "pseudocode": [
            "START",
            "DEFINE find_largest(numbers)",
            "    Set largest = first element",
            "    FOR each number in numbers",
            "        IF number > largest",
            "            Set largest = number",
            "        END IF",
            "    END FOR",
            "    RETURN largest",
            "END FUNCTION",
            "Read numbers",
            "Call find_largest(numbers)",
            "Print result",
            "END"
        ],
        "example_input": "Numbers = [12, 45, 7, 31, 28]",
        "example_output": "Largest = 45",
        "solution": """def find_largest(numbers):
    largest = numbers[0]

    for number in numbers:
        if number > largest:
            largest = number

    return largest


numbers = [12, 45, 7, 31, 28]

result = find_largest(numbers)

print("Largest =", result)""",
        "practice": [
            {
                "id": 1,
                "title": "Find the Smallest Element",
                "description": "Write a function that accepts a list of numbers and returns the smallest element."
            },
            {
                "id": 2,
                "title": "Find the Second Largest Element",
                "description": "Write a function that accepts a list of numbers and returns the second largest element."
            }
        ]
    },

    {
        "id": 2,
        "title": "Check Whether a Number Is Prime Using a Function",
        "description": "Write a function that accepts a number and returns whether the number is prime.",
        "topic": "Functions",
        "logic": [
            "Create a function that accepts a number.",
            "Numbers less than 2 are not prime.",
            "Check divisibility from 2 up to the square root of the number.",
            "If any value divides the number exactly, it is not prime.",
            "Otherwise, return that the number is prime."
        ],
        "pseudocode": [
            "START",
            "DEFINE is_prime(N)",
            "    IF N < 2",
            "        RETURN False",
            "    END IF",
            "    FOR i = 2 TO square root of N",
            "        IF N % i == 0",
            "            RETURN False",
            "        END IF",
            "    END FOR",
            "    RETURN True",
            "END FUNCTION",
            "Read N",
            "Call is_prime(N)",
            "IF result is True",
            "    Print Prime",
            "ELSE",
            "    Print Not Prime",
            "END IF",
            "END"
        ],
        "example_input": "N = 29",
        "example_output": "29 is a prime number.",
        "solution": """def is_prime(number):
    if number < 2:
        return False

    i = 2

    while i * i <= number:
        if number % i == 0:
            return False
        i += 1

    return True


number = int(input("Enter a number: "))

if is_prime(number):
    print(number, "is a prime number.")
else:
    print(number, "is not a prime number.")""",
        "practice": [
            {
                "id": 1,
                "title": "Find the Next Prime Number",
                "description": "Write a function that accepts a number and returns the next prime number greater than it."
            },
            {
                "id": 2,
                "title": "Count Prime Numbers in a List",
                "description": "Write a function that accepts a list of numbers and returns how many of them are prime."
            }
        ]
    },

    {
        "id": 3,
        "title": "Calculate Fibonacci Number Using a Function",
        "description": "Write a function that returns the nth Fibonacci number.",
        "topic": "Functions",
        "logic": [
            "Create a function that accepts n.",
            "Handle the first two Fibonacci values.",
            "Start with the first two values.",
            "Repeatedly calculate the next value as the sum of the previous two.",
            "Return the nth value."
        ],
        "pseudocode": [
            "START",
            "DEFINE fibonacci(N)",
            "    IF N <= 0",
            "        RETURN 0",
            "    END IF",
            "    IF N == 1",
            "        RETURN 1",
            "    END IF",
            "    Set A = 0",
            "    Set B = 1",
            "    FOR i = 2 TO N",
            "        Set C = A + B",
            "        Set A = B",
            "        Set B = C",
            "    END FOR",
            "    RETURN B",
            "END FUNCTION",
            "Read N",
            "Print fibonacci(N)",
            "END"
        ],
        "example_input": "N = 7",
        "example_output": "Fibonacci number = 13",
        "solution": """def fibonacci(n):
    if n <= 0:
        return 0

    if n == 1:
        return 1

    a = 0
    b = 1

    for i in range(2, n + 1):
        c = a + b
        a = b
        b = c

    return b


n = int(input("Enter N: "))

print("Fibonacci number =", fibonacci(n))""",
        "practice": [
            {
                "id": 1,
                "title": "Print Fibonacci Series",
                "description": "Write a function that prints the first N numbers of the Fibonacci series."
            },
            {
                "id": 2,
                "title": "Find Fibonacci Sum",
                "description": "Write a function that calculates the sum of the first N Fibonacci numbers."
            }
        ]
    },

    {
        "id": 4,
        "title": "Check Palindrome Using a Function",
        "description": "Write a function that checks whether a given string is a palindrome.",
        "topic": "Functions",
        "logic": [
            "Create a function that accepts a string.",
            "Reverse the string.",
            "Compare the original string with the reversed string.",
            "If both are the same, it is a palindrome.",
            "Otherwise, it is not a palindrome."
        ],
        "pseudocode": [
            "START",
            "DEFINE is_palindrome(TEXT)",
            "    Set REVERSED = reverse TEXT",
            "    IF TEXT == REVERSED",
            "        RETURN True",
            "    ELSE",
            "        RETURN False",
            "    END IF",
            "END FUNCTION",
            "Read TEXT",
            "Call is_palindrome(TEXT)",
            "IF result is True",
            "    Print Palindrome",
            "ELSE",
            "    Print Not Palindrome",
            "END IF",
            "END"
        ],
        "example_input": "TEXT = level",
        "example_output": "level is a palindrome.",
        "solution": """def is_palindrome(text):
    return text == text[::-1]


text = input("Enter a word: ")

if is_palindrome(text):
    print(text, "is a palindrome.")
else:
    print(text, "is not a palindrome.")""",
        "practice": [
            {
                "id": 1,
                "title": "Check Number Palindrome",
                "description": "Write a function that checks whether a given number is a palindrome."
            },
            {
                "id": 2,
                "title": "Ignore Case While Checking Palindrome",
                "description": "Write a function that checks whether a word is a palindrome without considering uppercase and lowercase differences."
            }
        ]
    },

    {
        "id": 5,
        "title": "Calculate GCD Using a Function",
        "description": "Write a function that accepts two numbers and returns their greatest common divisor.",
        "topic": "Functions",
        "logic": [
            "Create a function that accepts two numbers.",
            "Use the Euclidean algorithm.",
            "Repeatedly replace the larger problem with the remainder.",
            "Continue until the remainder becomes zero.",
            "Return the remaining non-zero value as the GCD."
        ],
        "pseudocode": [
            "START",
            "DEFINE gcd(A, B)",
            "    WHILE B != 0",
            "        Set TEMP = B",
            "        Set B = A % B",
            "        Set A = TEMP",
            "    END WHILE",
            "    RETURN A",
            "END FUNCTION",
            "Read A and B",
            "Print gcd(A, B)",
            "END"
        ],
        "example_input": "A = 48\nB = 18",
        "example_output": "GCD = 6",
        "solution": """def gcd(a, b):
    while b != 0:
        a, b = b, a % b

    return a


a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("GCD =", gcd(a, b))""",
        "practice": [
            {
                "id": 1,
                "title": "Calculate LCM Using a Function",
                "description": "Write a function that accepts two numbers and returns their least common multiple."
            },
            {
                "id": 2,
                "title": "Find GCD of Three Numbers",
                "description": "Write a function that accepts three numbers and returns their greatest common divisor."
            }
        ]
    }

]