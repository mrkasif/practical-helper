window.PECL = window.PECL || {};
window.PECL.completion = window.PECL.completion || {};
Object.assign(window.PECL.completion, {
  "python-1": {
    problem: "Write a Python program that prints today's date and the current time using the datetime module.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "The built-in datetime module (no separate installation required)"
    ],
    theory: "The datetime module is part of the Python standard library and provides classes for working with dates, times and combined date-time values. Calling datetime.datetime.now() returns a datetime object holding the current local date and time. The date() and time() methods of that object extract only the calendar date and the clock time, which can then be printed.",
    procedure: [
      "Open IDLE and create a new file named experiment1.py.",
      "Write import datetime at the top to load the module.",
      "Create a variable now and assign datetime.datetime.now() to it.",
      "Print a label together with now.date() to show today's date.",
      "Print a label together with now.time() to show the current time.",
      "Save the file and run it with Run Module (F5).",
      "Observe the date and time printed in the Python shell."
    ],
    explanation: "The program first imports the datetime module so its classes are available. The statement now = datetime.datetime.now() captures the current date and time once, so both printed lines come from the same instant. Calling now.date() and now.time() separates the year-month-day part from the hours-minutes-seconds part for display.",
    result: "The program prints today's date followed by the current time, for example a date of 2026-07-29 and a time value.",
    conclusion: "The datetime module makes it straightforward to retrieve and display the current date and time in Python.",
    viva: [
      "Q: Which module is used to work with dates and times? A: The datetime module from the Python standard library.",
      "Q: What does datetime.datetime.now() return? A: A datetime object containing the current local date and time.",
      "Q: How do you print only the date part? A: Call the date() method on the datetime object.",
      "Q: Is any third-party package needed? A: No, datetime is built in and needs no installation."
    ]
  },
  "python-2": {
    problem: "Write a Python program that uses lambda functions to double a given number and to add two numbers entered by the user.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Basic understanding of input() and type conversion with int()"
    ],
    theory: "A lambda function is a small anonymous function defined with the lambda keyword instead of def. It is restricted to a single expression, whose value is returned automatically, and it can be assigned to a variable and called like any normal function. Lambdas are convenient for short operations such as multiplying a number by two or adding two values.",
    procedure: [
      "Open IDLE and start a new file named experiment2.py.",
      "Define double = lambda x: x*2 to double one value.",
      "Define add = lambda a,b: a+b to add two values.",
      "Prompt for a number and convert the input to int, storing it in num.",
      "Prompt for two more numbers and convert them to int, storing them in num1 and num2.",
      "Print the result of double(num) with a suitable label.",
      "Print the result of add(num1, num2) with a suitable label.",
      "Save and run the program, then check the displayed values."
    ],
    explanation: "The two lambdas are one-line functions: double returns its argument multiplied by two, and add returns the sum of its two parameters. Because input() returns text, int() is used to convert each entry into a number before it is passed to a lambda. The print statements call the lambdas and display the returned values directly.",
    result: "For the sample input the program prints Double of 5 = 10 and reports the addition result 4.",
    conclusion: "Lambda functions provide a compact way to define simple, single-expression operations in Python.",
    viva: [
      "Q: What is a lambda function? A: An anonymous function defined with the lambda keyword that contains one expression.",
      "Q: Does a lambda need a return statement? A: No, the single expression is returned automatically.",
      "Q: Why use int() around input()? A: input() returns a string, and arithmetic needs numeric values.",
      "Q: Can a lambda take more than one argument? A: Yes, for example lambda a,b: a+b takes two arguments."
    ]
  },
  "python-3": {
    problem: "Create a menu-driven Python program that offers addition, subtraction, multiplication and division, using functions that accept arguments.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of def, function arguments and return values"
    ],
    theory: "A function is a named, reusable block of code defined with def that can accept parameters and return a value using return. Defining one function per operation keeps the program organized and avoids repeating code. An if/elif ladder then selects the appropriate function based on the user's menu choice, and arguments are the actual values passed into that function when it is called.",
    procedure: [
      "Open IDLE and create a new file named experiment3.py.",
      "Define addition(a,b), subtraction(a,b), multiplication(a,b) and division(a,b), each returning the result of its operation.",
      "Print the four menu lines so the user can see the available choices.",
      "Read the user's choice with input() and convert it to int.",
      "Read the two operands with input() and convert them to float so decimal values are accepted.",
      "Use an if/elif ladder to call the function matching the chosen operation.",
      "For division, guard against a zero divisor and print an error message if needed.",
      "Save and run the program, then test each menu option including an invalid choice."
    ],
    explanation: "Each arithmetic function takes two parameters and returns a single computed value, which the caller prints. The if/elif ladder maps menu choices 1 through 4 to the matching function and handles an invalid choice with an else branch. The division branch checks that the second number is not zero before dividing. Note that the source writes Choice at input but choice in the conditions; since Python names are case-sensitive, both must use the same spelling for the program to work.",
    result: "For the sample run with choice 3 and operands 15 and 10, the program prints Result = 150.0.",
    conclusion: "Using functions with arguments makes a menu-driven program clearer, modular and easier to maintain.",
    viva: [
      "Q: What keyword defines a function in Python? A: The def keyword.",
      "Q: What is the difference between a parameter and an argument? A: A parameter is named in the definition; an argument is the value passed at the call.",
      "Q: Why convert inputs to float? A: So the program can accept and compute with decimal numbers.",
      "Q: Are Python variable names case-sensitive? A: Yes, so Choice and choice are different names."
    ]
  },
  "python-4": {
    problem: "Create a list in Python and perform the methods insert(), remove(), append(), len(), pop() and clear() on it.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Basic knowledge of lists and zero-based indexing"
    ],
    theory: "A list is an ordered, mutable collection of items indexed from 0. Because it is mutable, its contents can be changed after creation using built-in methods. insert() places a value at a chosen index, remove() deletes the first matching value, append() adds an item at the end, len() reports the number of items, pop() removes and returns the last item, and clear() empties the list.",
    procedure: [
      "Open IDLE and create a new file named experiment4.py.",
      "Create a list named Students with a few string values and print the original list.",
      "Call Students.insert(1, 'om') and print the list to see the inserted value.",
      "Call Students.remove('Raj') and print the list again.",
      "Call Students.append('priya') and print the updated list.",
      "Print len(Students) to display the current length.",
      "Call Students.pop() and print the list to confirm the last item was removed.",
      "Call Students.clear() and print the list to confirm it is empty, then save and run."
    ],
    explanation: "Each method changes the same Students list in place, so every print shows the cumulative state after the previous operation. insert() uses index 1 to place a value near the front, while append() places one at the end. remove() finds an item by value, pop() removes the last item by position, len() returns the count, and clear() removes every remaining item giving an empty list.",
    result: "The program shows the list changing through each method and ends with After clear(): [] after starting from three names.",
    conclusion: "List methods provide simple, direct ways to add, remove, count and clear elements in a mutable list.",
    viva: [
      "Q: What does insert(1, 'om') do? A: It places 'om' at index 1, shifting later items right.",
      "Q: How does remove() differ from pop()? A: remove() deletes by value, while pop() removes by position, the last item by default.",
      "Q: What does len() return? A: The number of items currently in the list.",
      "Q: What is the result of clear()? A: The list becomes empty, shown as []."
    ]
  },
  "python-5": {
    problem: "Create a dictionary in Python and print its items, access values, use get(), change values and find its length.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of key-value pairs"
    ],
    theory: "A dictionary is an unordered, mutable collection that stores data as key-value pairs. Values are retrieved by referencing their key inside square brackets, while the get() method returns a value for a key without raising an error if the key is missing. Because dictionaries are mutable, the value stored at an existing key can be reassigned, and len() returns the number of key-value pairs.",
    procedure: [
      "Open IDLE and create a new file named experiment5.py.",
      "Create a dictionary named Student with keys such as name, age and course.",
      "Print the whole dictionary to show all key-value pairs.",
      "Access and print individual items using Student['name'] and Student['course'].",
      "Use Student.get('age') with a label to demonstrate get().",
      "Change the age by assigning Student['age'] = 21 and print the dictionary again.",
      "Print len(Student) to show the number of pairs, then save and run the program."
    ],
    explanation: "The dictionary is built from key-value pairs enclosed in braces. Items are read either by indexing with a key, such as Student['name'], or more safely with get(). Assigning to an existing key updates its value in place, which is why age changes from 20 to 21, and len(Student) counts the three key-value pairs.",
    result: "The program displays the dictionary, prints Rahul and B.sc IT by key access, shows Age: 20 via get(), then shows the dictionary with age 21 and Length of dictionary: 3.",
    conclusion: "Dictionaries store labelled data as key-value pairs that can be accessed, updated and counted efficiently.",
    viva: [
      "Q: How is a dictionary written? A: As key-value pairs inside curly braces, for example {'name': 'Rahul'}.",
      "Q: What does get() do? A: It returns the value for a key, without an error if the key is absent.",
      "Q: Is a dictionary mutable? A: Yes, existing values can be changed by assigning to their key.",
      "Q: What does len() return for a dictionary? A: The number of key-value pairs."
    ]
  },
  "python-6": {
    problem: "Create a tuple and demonstrate adding items, finding its length, checking for an item and accessing items by index.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of tuples and zero-based indexing"
    ],
    theory: "A tuple is an ordered collection similar to a list but immutable, meaning its items cannot be changed or removed in place. To 'add' an item you concatenate the tuple with another tuple, producing a new tuple rather than modifying the original. The len() function returns the item count, the in operator tests membership, and individual items are read using their numeric index.",
    procedure: [
      "Open IDLE and create a new file named experiment6.py.",
      "Create a tuple named student_details with values for a name, age and course.",
      "Add an item by concatenating with a one-element tuple, for example student_details + ('Male',), and store the result back.",
      "Print the tuple after adding the item.",
      "Print len(student_details) to show its length.",
      "Use an if statement with 'Computer Science' in student_details to check membership and print the appropriate message.",
      "Print student_details[0] for the name and student_details[2] for the course.",
      "Save and run the program, then inspect the printed results."
    ],
    explanation: "Because tuples are immutable, the program uses student_details = student_details + ('Male',) to build a new tuple; the trailing comma is required so ('Male',) is treated as a tuple rather than a plain string in parentheses. len() reports the number of elements, the in operator drives the found or not-found message, and square-bracket indexes read the first and third items. In the source journal the initial tuple value is faint and partly unclear at the right edge, so its exact original text is not reproduced here; only the visible beginning and the reported final length of 5 are relied upon.",
    result: "The program prints the enlarged tuple whose initial text is faint/partly unclear in the source, reports Length of tuple: 5, confirms Computer Science is present, and prints Student Name: Rahul and Course: Computer Science.",
    conclusion: "Tuples are immutable, so adding items creates a new tuple, while len(), in and indexing let you inspect its contents.",
    viva: [
      "Q: What makes a tuple different from a list? A: A tuple is immutable, so its items cannot be changed in place.",
      "Q: How do you add an item to a tuple? A: Concatenate with a one-element tuple using +, creating a new tuple.",
      "Q: Why is the trailing comma needed in ('Male',)? A: Without it the parentheses do not create a single-item tuple.",
      "Q: Which operator tests whether an item is in a tuple? A: The in membership operator."
    ]
  },
  "python-7": {
    problem: "Write a Python script that displays the elements of a list in reverse order.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of list indexing and slicing"
    ],
    theory: "Reverse order means arranging the elements of a sequence from the last element back to the first. In Python a list can be reversed without changing the original by using the slicing syntax [::-1], which steps through the sequence with a stride of minus one. The result is a new list containing the same items in reverse order.",
    procedure: [
      "Open IDLE and create a new file named experiment7.py.",
      "Initialize a list named numbers with several numeric values.",
      "Print the original list with a suitable label.",
      "Create rev_list by slicing numbers[::-1].",
      "Print rev_list with a label showing the reversed order.",
      "Save the file and run it with Run Module (F5).",
      "Compare the two printed lists to confirm the order is reversed."
    ],
    explanation: "The slice numbers[::-1] has start and stop omitted, so it covers the whole list, and a step of -1 walks from the end towards the beginning. This produces a new list, leaving numbers unchanged, which is why both the original and reverse lists can be printed. Slicing is a concise alternative to reversing a list with a loop or the reverse() method.",
    result: "The program prints Original list: [25, 10, 45, 5, 30, 20, 15] and Reverse list: [15, 20, 30, 5, 45, 10, 25].",
    conclusion: "The [::-1] slice is a simple and readable way to display a list in reverse order.",
    viva: [
      "Q: What does the slice [::-1] mean? A: It returns the whole sequence with a step of minus one, reversing it.",
      "Q: Does [::-1] modify the original list? A: No, it creates a new reversed list.",
      "Q: Name another way to reverse a list. A: The reverse() method reverses a list in place.",
      "Q: What does a negative step do in slicing? A: It moves through the sequence backwards."
    ]
  },
  "python-8": {
    problem: "Write a Python script that finds the minimum and maximum elements of a list without using built-in min() or max() operations.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of lists, loops and comparison operators"
    ],
    theory: "Finding a minimum and maximum means scanning a list and keeping track of the smallest and largest values seen so far. A common approach initialises both trackers to the first element, then visits each item in turn and updates a tracker whenever a strictly smaller or larger value is found. This linear scan works for any non-empty list and does not rely on the built-in min() and max() functions.",
    procedure: [
      "Open IDLE and create a new file named experiment8.py.",
      "Create a list named numbers with several numeric values.",
      "Set minimum and maximum both to numbers[0], the first element.",
      "Write a for loop that visits every num in the list.",
      "Inside the loop, update minimum when num < minimum.",
      "Inside the same loop, update maximum when num > maximum.",
      "Print the original list, then print the final minimum and maximum.",
      "Save and run the program, then verify the two values by inspection."
    ],
    explanation: "Starting minimum and maximum at the first element guarantees the trackers hold real list values before any comparison. The loop compares each num against both trackers, replacing minimum on a smaller value and maximum on a larger one. After the full pass, the trackers hold the smallest and largest values; the program never calls min() or max().",
    result: "For the list [20, 10, 45, 5, 30, 60, 15] the program prints Minimum element: 5 and Maximum element: 60.",
    conclusion: "A single loop with two comparisons can find both extremes of a list without built-in helper functions.",
    viva: [
      "Q: Why initialise both trackers to the first element? A: It guarantees they start with values that are actually in the list.",
      "Q: How many times does the loop compare each item? A: Twice, once against the minimum and once against the maximum.",
      "Q: Which built-ins does this program avoid? A: It avoids using min() and max().",
      "Q: What is the time complexity of the scan? A: Linear time, proportional to the number of elements."
    ]
  },
  "python-9": {
    problem: "Write a Python script that removes duplicate values from a list, keeping only one occurrence of each item.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of lists, loops and the in membership test"
    ],
    theory: "Removing duplicates means producing a collection in which each value appears only once. One straightforward method is to build a new empty list and visit the original items in order, appending an item only when it is not already in the new list. The in operator performs the membership test, so the first occurrence of each value is kept and later repeats are skipped, preserving the original order.",
    procedure: [
      "Open IDLE and create a new file named experiment9.py.",
      "Create a list named numbers that contains several repeated values.",
      "Create an empty list named unique_list to hold the result.",
      "Write a for loop over every num in numbers.",
      "Inside the loop, use 'if num not in unique_list' to test for a previous occurrence.",
      "Append num to unique_list only when the test succeeds.",
      "Print the original list and then unique_list.",
      "Save and run the program, then confirm no value is repeated."
    ],
    explanation: "The loop examines each number in its original order, and unique_list acts as a record of values already accepted. The condition 'num not in unique_list' allows only the first occurrence of a value to be appended, so later duplicates are ignored. Because items are added as they are encountered, the relative order of the first occurrences is preserved in the result.",
    result: "The program prints Original list: [10, 20, 10, 30, 20, 40, 30, 50] and the resulting unique list [10, 20, 30, 40, 50].",
    conclusion: "A new list combined with a membership check removes duplicates while preserving the order of first occurrences.",
    viva: [
      "Q: Which operator checks for an existing value here? A: The in operator, used as 'num not in unique_list'.",
      "Q: Does this method keep the original order? A: Yes, first occurrences are appended in the order they appear.",
      "Q: What would an empty unique_list at the start mean? A: It is the accumulator that collects accepted, non-duplicate values.",
      "Q: Name a one-line alternative using a built-in type. A: Converting the list to a set, though that does not preserve order."
    ]
  },
  "python-10": {
    problem: "Write a Python script to check whether every element of set S is in set T and every element of T is in S, that is, whether the two sets are equal.",
    requirements: [
      "Python 3.x installed",
      "IDLE or any Python code editor",
      "Understanding of sets, membership and the == comparison operator"
    ],
    theory: "A set is an unordered collection of unique values. The membership operator in tests whether a value belongs to a collection, while the equality operator == compares two sets by their contents and is true when each contains exactly the same elements, regardless of order. Therefore S == T is a compact way to confirm that every element of S is in T and every element of T is in S.",
    procedure: [
      "Start the Python IDE and open a new file using File.",
      "Write a program that defines two sets S and T with their elements.",
      "Use an if statement with the == operator to compare the two sets.",
      "Print a message stating that every element of S is in T and every element of T is in S when they are equal.",
      "Add an else branch that prints the sets are not equal.",
      "Save the program with a suitable file name.",
      "Run it with Run Module or F5 and observe the shell.",
      "Repeat with different set values to test both branches."
    ],
    explanation: "The program stores two collections as sets using braces and compares them directly with S == T. Set equality checks that both collections contain exactly the same members, which is equivalent to testing mutual membership in both directions, and it ignores the order of elements. The if/else branch prints a suitable confirmation or rejection message. The source journal contains no output page for this experiment, so no specific printed result is transcribed.",
    result: "For two identical sets the comparison would print the message that every element of S is in T and every element of T is in S, but no output page is present in the source journal for this experiment.",
    conclusion: "The == operator on sets cleanly verifies that two sets contain exactly the same elements.",
    viva: [
      "Q: What does the in operator test? A: Whether a value is a member of a sequence or collection.",
      "Q: Does set equality depend on element order? A: No, two sets are equal when they contain the same elements.",
      "Q: What does S == T return? A: True when the sets have exactly the same members, otherwise False.",
      "Q: Can a set contain duplicate values? A: No, sets automatically keep only unique elements."
    ],
    output: "No output page is present in the source journal for this experiment."
  }
});
