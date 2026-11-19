/* Python Programming practicals — extracted from Python_Practical_Journal_Kashif_Sayyad_Digital.pdf
   The source is a typed transcription of a 33-page handwritten journal. Wording, program logic and
   uncertainty flags are preserved verbatim; nothing has been invented or silently corrected. */
window.PECL = window.PECL || {};
window.PECL.python = [
  {
    id: "python-1",
    n: 1,
    subject: "python",
    title: "Print today's date and current time",
    date: "29/7/26",
    pdfPages: "PDF p. 3",
    src: "Journal pp. 4–5",
    aim: "Write a Python program to print date & time for today & now.",
    definition: "The datetime module in Python is a built-in module that provides classes and functions for working with dates, times & date-time combinations.",
    algorithm: [
      "Start.",
      "Import the current datetime module.",
      "Get the current date and time using `datetime.datetime.now()`.",
      "Store the date and time in a variable `now`.",
      "Display the date using `now.date()`.",
      "Display the current time using `now.time()`.",
      "End."
    ],
    code: [
      {
        file: "experiment1.py",
        lang: "python",
        src: String.raw`import datetime
# Get current date & time
now = datetime.datetime.now()
# Print today's Date
print("Today's Date:", now.date())
# print current time
print("Current time:", now.time())`
      }
    ],
    output: "Today's date: 2026-07-29 Current time: 03:48:00.102224",
    notes: []
  },
  {
    id: "python-2",
    n: 2,
    subject: "python",
    title: "Double a number and add two numbers using lambda",
    date: "5/8/26",
    pdfPages: "PDF pp. 3–4",
    src: "Journal pp. 6–8",
    aim: "Write a program to double a number and add two numbers using lambda().",
    definition: "A lambda function is a small, anonymous function that is defined without a name, restricted to a single expression. Unlike a standard function declared using the def keyword, a lambda function is written inline.",
    algorithm: [
      "Start the program.",
      "Create a lambda function double to multiply number by 2.",
      "Create a lambda function add to do addition of 2 numbers.",
      "Take integer input from user (num, num1, num2).",
      "Display results using print for multiplication by 2 and addition of 2 numbers.",
      "End the program."
    ],
    code: [
      {
        file: "experiment2.py",
        lang: "python",
        src: String.raw`# lambda function to double a number
double = lambda x: x*2
# lambda function to add two numbers
add = lambda a,b: a+b
# input from user
num = int(input("Enter a number:"))
num1 = int(input("Enter a first number:"))
num2 = int(input("Enter a second number"))
# display result
print("Double of", num, "=", double(num))
print("Addition of", num, "=", add(num1,num2))`
      }
    ],
    output: "Enter a number: 5 Enter a first number: 2 Enter a second number: 2 Double of 5 = 10 addition is 4",
    notes: []
  },
  {
    id: "python-3",
    n: 3,
    subject: "python",
    title: "Menu-driven arithmetic program using functions and arguments",
    date: "13/8/26",
    pdfPages: "PDF pp. 4–5",
    src: "Journal pp. 9–12",
    aim: "Write a program to create a menu with the following options: 1. Addition, 2. Subtraction, 3. Multiplication, 4. Division. Accepts user input, perform the operation accordingly. Use functions and arguments.",
    definition: "A function is defined using the def keyword. A function call is used to execute the function. A function is a block of code that performs a particular task. Functions help to reduce repetition and make program easy. An argument is the actual value passed to a function when it is called.",
    algorithm: [
      "Start the program.",
      "Define arithmetic functions: addition, subtraction, multiplication, division.",
      "Pass parameters to functions.",
      "Return parameters.",
      "Display choices.",
      "Take user input to choose arithmetic operations.",
      "Take user input number 1.",
      "Take user input number 2.",
      "Based on the choice of user, perform the arithmetic operation from if-else ladders.",
      "Display results."
    ],
    code: [
      {
        file: "experiment3.py",
        lang: "python",
        src: String.raw`def addition(a,b):
    return a+b
def subtraction(a,b):
    return a-b
def multiplication(a,b):
    return a*b
def division(a,b):
    return a/b

print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")
Choice = int(input("Enter your choice:"))
a = float(input("Enter first number:"))
b = float(input("Enter second number:"))
if choice == 1:
    print("Result =", addition(a,b))
elif choice == 2:
    print("Result =", subtraction(a,b))
elif choice == 3:
    print("Result =", multiplication(a,b))
elif choice == 4:
    if b != 0:
        print("Result =", division(a,b))
    else:
        print("Division by zero is not possible")
else:
    print("Invalid choice")`
      }
    ],
    output: "1. Addition 2. Subtraction 3. Multiplication 4. Division Enter your choice: 3 Enter first number: 15 Enter second number: 10 Result = 150.0",
    notes: [
      "The handwritten variable is written as `Choice` at input and `choice` in the conditional statements. The case difference is preserved as a source-level discrepancy; Python variable names are case-sensitive."
    ]
  },
  {
    id: "python-4",
    n: 4,
    subject: "python",
    title: "List methods: insert, remove, append, len, pop, clear",
    date: "19/8/26",
    pdfPages: "PDF pp. 5–6",
    src: "Journal pp. 13–15",
    aim: "Create a list and perform the following methods: 1) insert(), 2) remove(), 3) append(), 4) len(), 5) pop(), 6) clear().",
    definition: "List is set of items that start with index 0 and then goes on and on and there are operations that can be performed on it. insert() – to insert a value with index; remove() – to remove value from list; append() – to append value at end; len() – to show length; pop() – to pop last value element; clear() – clear list.",
    algorithm: [
      "Start a program.",
      "Create a list with values in it.",
      "Display original list.",
      "Insert a value with index, then display.",
      "Remove a value, then display.",
      "Append a value, then display.",
      "Display length of a list.",
      "Pop the list so last value will be removed and display.",
      "Clear the list and display the result.",
      "End the program."
    ],
    code: [
      {
        file: "experiment4.py",
        lang: "python",
        src: String.raw`# Create a list
Students = ["Amit", "Raj", "Neha"]
print("Original list:", Students)
# 1. insert()
Students.insert(1, "om")
print("\nAfter insert():", Students)
# 2. remove()
Students.remove("Raj")
print("After remove():", Students)
# 3. append()
Students.append("priya")
print("\nAfter append():", Students)
# 4. len()
print("Length of list:", len(Students))
# 5. pop()
Students.pop()
print("After pop():", Students)
# 6. clear()
Students.clear()
print("After clear():", Students)`
      }
    ],
    output: "Original list: ['Amit', 'Raj', 'Neha'] After insert(): ['Amit', 'om', 'Raj', 'Neha'] After remove(): ['Amit', 'om', 'Neha'] After append(): ['Amit', 'om', 'Neha', 'priya'] Length of list: 4 After pop(): ['Amit', 'om', 'Neha'] After clear(): []",
    notes: [
      "The index on source pages 2–3 also lists sort(), but the Experiment 4 AIM, explanation, algorithm and program pages do not include sort(). It is not added to the experiment."
    ]
  },
  {
    id: "python-5",
    n: 5,
    subject: "python",
    title: "Dictionary methods: items, access, get, change values, len",
    date: "20/8/26",
    pdfPages: "PDF pp. 6–7",
    src: "Journal pp. 16–18",
    aim: "Create a dictionary and apply the following methods: 1) print the dictionary items, 2) access items, 3) use get(), 4) change values, 5) use len().",
    definition: "A built-in data collection dictionary that is mutable and can contain any type of data. Several actions can be performed on it. Values can be changed because it is mutable. get is used for showing a value of key while key name is used for show key.",
    algorithm: [
      "Start a program.",
      "Create a dictionary and add values into dictionary.",
      "Display the dictionary.",
      "Access the items in dictionary.",
      "Display a value of key using get.",
      "Change values of key.",
      "Display length of dictionary key-pairs.",
      "End program."
    ],
    code: [
      {
        file: "experiment5.py",
        lang: "python",
        src: String.raw`# Practical No 5 Dictionary method
Student = {
    "name": "Rahul",
    "age": 20,
    "course": "B.sc IT"
}
# 1. Print dictionary items
print("Dictionary items:")
print(Student)
# 2. Access items
print("\nAccessing Items:")
print("Name:", Student["name"])
print("Course:", Student["course"])
# 3. Use get()
print("\nUsing get():")
print("Age:", Student.get("age"))
# 4. Change values
Student["age"] = 21
print("\nAfter changing Age:")
print(Student)
# 5. Use len()
print("\nLength of dictionary:")
print(len(Student))`
      }
    ],
    output: "Dictionary items: {'course': 'B.sc IT', 'age': 20, 'name': 'Rahul'} Accessing items: Name: Rahul Course: B.sc IT Using get(): Age: 20 After changing Age: {'course': 'B.sc IT', 'age': 21, 'name': 'Rahul'} Length of dictionary: 3",
    notes: []
  },
  {
    id: "python-6",
    n: 6,
    subject: "python",
    title: "Tuple methods: add items, len, check item, access items",
    date: "27/8/26",
    pdfPages: "PDF pp. 7–8",
    src: "Journal pp. 19–21",
    aim: "Create a tuple and perform the following methods: 1) Add items, 2) len(), 3) check for item in tuple, 4) access items.",
    definition: "A tuple is immutable data collection module that cannot be mutable or its value removed or changed. Only a new item can be added into it and these operations can be performed: adding items, length, items check and accessing items.",
    algorithm: [
      "Start a program.",
      "Create a tuple and add attributes.",
      "Add item to tuple and display tuple after it.",
      "Find length of tuple.",
      "Check for item in tuple.",
      "With condition of found or not found.",
      "Access tuple attributes by index number.",
      "End program."
    ],
    code: [
      {
        file: "experiment6.py",
        lang: "python",
        src: String.raw`# create a tuple
student_details = ("Rahul", 21, "Computer Science", [UNCLEAR: value clipped at right edge])

# 1. Add item to tuple
student_details = student_details + ("Male",)
print("Tuple after adding item:", student_details)
# 2. Find length of tuple
print("Length of tuple:", len(student_details))
# 3. Check for item in tuple
if "Computer Science" in student_details:
    print("Computer Science is present in the tuple")
else:
    print("Computer Science is not present in the tuple")
# 4. Access items
print("Student Name:", student_details[0])
print("Course:", student_details[2])`
      }
    ],
    output: "Tuple after adding item: [initial tuple text is faint/partly unclear] Length of tuple: 5 Computer Science is present in the tuple Student Name: Rahul Course: Computer Science",
    notes: [
      "The initial tuple declaration on source page 21 is clipped by the right edge of the photograph. Its visible beginning is `(\"Rahul\", 21, \"Computer Science\", ...`. The missing value is not guessed. The source output indicates a resulting tuple length of 5."
    ]
  },
  {
    id: "python-7",
    n: 7,
    subject: "python",
    title: "Display list elements in reverse order",
    date: "03/9/26",
    pdfPages: "PDF p. 8",
    src: "Journal pp. 22–24",
    aim: "To implement a python script to display the elements of list in reverse order.",
    definition: "Reverse order means arranging the elements of a sequence from the last elements to first element.",
    algorithm: [
      "Start.",
      "Create/initialize a list with some elements.",
      "Store the list elements.",
      "Reverse the list using slicing [::-1] OR another reversing method.",
      "Display the elements of a list in reverse order.",
      "End."
    ],
    code: [
      {
        file: "experiment7.py",
        lang: "python",
        src: String.raw`# program to display the elements of a list in reverse order
numbers = [25, 10, 45, 5, 30, 20, 15]
# print original list
print("Original list:", numbers)
# reverse order list
rev_list = numbers[::-1]
print("Reverse list:", rev_list)`
      }
    ],
    output: "Original list: [25, 10, 45, 5, 30, 20, 15] Reverse list: [15, 20, 30, 5, 45, 10, 25]",
    notes: []
  },
  {
    id: "python-8",
    n: 8,
    subject: "python",
    title: "Find minimum and maximum list elements without built-in operations",
    date: "10/9/26",
    pdfPages: "PDF p. 9",
    src: "Journal pp. 25–27",
    aim: "Implement python script to find minimum and maximum elements without using built-in operations in the list.",
    definition: "A list is a collection of items (numbers, words, etc.) that are stored together in one place, written inside square brackets [] and separated by commas. Minimum finds minimum or smallest value in list. Maximum finds largest/biggest value in list.",
    algorithm: [
      "Start a program.",
      "Take a list of numbers, e.g. [20, 10, 45, 5, 30, 60, 15].",
      "Assume the first number in the list is both min and max.",
      "Look at every number in the list one by one.",
      "For each number, if it is smaller than the current minimum, update minimum; if it is bigger than current maximum, update maximum.",
      "Display the original list after these operations and display maximum and minimum.",
      "End program."
    ],
    code: [
      {
        file: "experiment8.py",
        lang: "python",
        src: String.raw`# program to find minimum and maximum elements from list
numbers = [20, 10, 45, 5, 30, 60, 15]
minimum = numbers[0]
maximum = numbers[0]
for num in numbers:
    if num < minimum:
        minimum = num
    if num > maximum:
        maximum = num
print("List:", numbers)
print("Minimum element:", minimum)
print("Maximum element:", maximum)`
      }
    ],
    output: "List: [20, 10, 45, 5, 30, 60, 15] Minimum element: 5 Maximum element: 60",
    notes: []
  },
  {
    id: "python-9",
    n: 9,
    subject: "python",
    title: "Remove duplicates from a list",
    date: "16/9/26",
    pdfPages: "PDF pp. 9–10",
    src: "Journal pp. 28–31",
    aim: "Implement Python script to remove duplicates from list.",
    definition: "A list is value container and this program is based on to remove duplicate values in list that appears 2 or more times. And we remove by making a new variable unique list and using loops to check if number is unique or not.",
    algorithm: [
      "Start program.",
      "Display a list with duplicate elements in it.",
      "Display a new variable named unique_list.",
      "Check each element in list.",
      "Check if element is unique or not.",
      "Display original list and unique list.",
      "End program."
    ],
    code: [
      {
        file: "experiment9.py",
        lang: "python",
        src: String.raw`# Remove duplicates from a list
numbers = [10, 20, 10, 30, 20, 40, 30, 50]
unique_list = []  # empty list for unique elements
for num in numbers:  # check each element
    if num not in unique_list:  # check if already present
        unique_list.append(num)  # add only unique elements
print("Original list:", numbers)
print("List after removing duplicates:", unique_list)`
      }
    ],
    output: "Original list: [10, 20, 10, 30, 20, 40, 30, 50] Unique list: [10, 20, 30, 40, 50]",
    notes: [
      "Pages 28–30 show repeated/near-identical output pages for this experiment. The output is transcribed once here; the pages are all accounted for in the coverage report."
    ]
  },
  {
    id: "python-10",
    n: 10,
    subject: "python",
    title: "Check whether two sets are equal",
    date: "—",
    pdfPages: "PDF pp. 10–11",
    src: "Journal pp. 32–33",
    aim: "Implement the Python script to check whether every element in S is in T & every element T is in S.",
    definition: "Membership operator: A membership operator checks whether a value exists in a sequence or collection using operators like in and not in. List operations: an action performed on a list such as adding, removing, updating or accessing element.",
    algorithm: [
      "Start Python IDE and open a new file using File.",
      "Write the program to check whether two sets are equal.",
      "Define two sets S and T with their elements.",
      "Use the if statement and == operator to compare both sets.",
      "Display the appropriate message if the two sets are equal or not equal.",
      "Save the program with a suitable file name.",
      "Run the program by clicking Run Module or pressing F5.",
      "Observe the output in the Python shell."
    ],
    code: [
      {
        file: "experiment10.py",
        lang: "python",
        src: String.raw`# check whether two sets are equal
S = {1, 2, 3, 4}
T = {1, 2, 3, 4}
if S == T:
    # check both sets are equal
    print("Every element of S is in T and every element of T is in S")
else:
    print("The sets are not equal")`
      }
    ],
    output: null,
    notes: [
      "No output page for Experiment 10 is present in the uploaded PDF. No output has been invented."
    ]
  }
];
