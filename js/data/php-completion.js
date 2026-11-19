window.PECL = window.PECL || {};
window.PECL.completion = window.PECL.completion || {};
Object.assign(window.PECL.completion, {
  "php-1": {
    problem: "Create a PHP script that displays your name, the current date and time, and server information using the $_SERVER superglobal.",
    requirements: [
      "XAMPP or WAMP with Apache and PHP 7+ or 8+",
      "A browser such as Chrome or Firefox",
      "A text editor to create index.php",
      "The $_SERVER superglobal is built in and needs no extra setup"
    ],
    theory: "$_SERVER is a PHP superglobal array that holds server and execution-environment information such as SERVER_NAME, SERVER_SOFTWARE and PHP_SELF. Superglobals are available in every scope without a global declaration. The date() function formats the current timestamp using format characters, for example d-m-y for the date and h:i:s A for a 12-hour clock with AM/PM. The echo statement writes the resulting text to the browser as part of the HTML page.",
    algorithm: [
      "1. Start the PHP block and print a heading for the practical.",
      "2. Echo the name label and the name value with a line break.",
      "3. Echo the current date using date(\"d-m-y\").",
      "4. Echo the current time using date(\"h:i:s A\").",
      "5. Print a heading for the server-information section.",
      "6. Echo $_SERVER['SERVER_NAME'] and $_SERVER['SERVER_SOFTWARE'].",
      "7. Echo $_SERVER['PHP_SELF'] to show the current file path.",
      "8. Close the PHP block and view the page in the browser."
    ],
    procedure: [
      "1. Start Apache from the XAMPP or WAMP control panel.",
      "2. Create index.php inside the php_practicals folder under htdocs.",
      "3. Write the PHP code that echoes the name, date, time and $_SERVER values.",
      "4. Save the file and place it where the web server can serve it.",
      "5. Open http://localhost/php_practicals/index.php in a browser.",
      "6. Observe the displayed name, date, time and server details.",
      "7. Compare the server values with the local environment."
    ],
    explanation: "The script uses a series of echo statements, joining fixed labels to values with the string-concatenation operator. Two date() calls format the same timestamp differently, one for the date and one for the time. The three $_SERVER entries supply the host name, the web-server software string and the current script path, while <br> tags place each item on its own line. In the source the recorded output is descriptive because the time and the full server-software version are faint, so only the name Kashif, localhost, an Apache server string and an approximate file path are noted.",
    result: "The page displays the name Kashif, the date 24-07-26, the current time, and server details including localhost, an Apache server string and the current PHP file path.",
    conclusion: "PHP can easily emit dynamic text, formatted date and time, and server details through echo, date() and $_SERVER.",
    viva: [
      "Q: What is $_SERVER? A: A PHP superglobal array containing server and execution-environment information.",
      "Q: How do you format a date in PHP? A: With date(), using format characters such as d-m-y.",
      "Q: What does $_SERVER['PHP_SELF'] give? A: The path of the currently executing PHP file.",
      "Q: What does echo do? A: It outputs text to the browser as part of the response."
    ]
  },
  "php-2": {
    problem: "Write a PHP script that handles an HTML form and reads submitted values using both the GET and POST methods, then displays the data on screen.",
    requirements: [
      "XAMPP or WAMP with Apache and PHP 7+ or 8+",
      "MySQL is not required for this experiment",
      "A browser to submit the form",
      "A text editor to create form.html, get.php and post.php"
    ],
    theory: "GET and POST are two HTTP request methods for sending form data to a server. GET appends the values to the URL as a query string and is read in PHP through the $_GET superglobal, while POST sends the values inside the request body and is read through $_POST. GET values are visible in the address bar and are length-limited; POST keeps them out of the URL and allows larger payloads. Both superglobals are associative arrays indexed by the form control's name attribute.",
    algorithm: [
      "1. Build form.html with a GET form pointing to get.php.",
      "2. Add name and age inputs to the GET form and a submit button.",
      "3. Add a second form pointing to post.php with method set to post.",
      "4. Add name and age inputs and a submit button to the POST form.",
      "5. In get.php, read $_GET[\"name\"] and $_GET[\"age\"].",
      "6. In post.php, read $_POST[\"name\"] and $_POST[\"age\"].",
      "7. Echo the collected values with suitable labels in each file.",
      "8. Submit each form and observe the displayed data."
    ],
    procedure: [
      "1. Start Apache from the XAMPP or WAMP control panel.",
      "2. Save form.html, get.php and post.php in the php_practicals folder under htdocs.",
      "3. Open http://localhost/php_practicals/form.html in a browser.",
      "4. Fill in a name and age in the GET form and click its submit button.",
      "5. Read the values echoed on the get.php output page.",
      "6. Return to the form and submit the same values through the POST form.",
      "7. Compare the two output pages, noting the URL of each."
    ],
    explanation: "The HTML file defines two forms whose method attributes select GET or POST and whose action attributes name the receiving script. get.php indexes $_GET and post.php indexes $_POST with the keys name and age, then echoes each value. A source caveat is preserved: the handwritten HTML appears to open the second form before explicitly closing the first, and this nested form has not been silently corrected. The recorded output shows the same data rendered by both pages, labelled by method.",
    result: "Both output pages show Name: Kashif and Age: 20, with one page labelled GET method and the other POST method.",
    conclusion: "GET and POST both deliver form data to PHP, with values read through $_GET and $_POST respectively.",
    viva: [
      "Q: Which superglobal reads GET form data? A: $_GET, indexed by the input's name.",
      "Q: How does POST differ from GET? A: POST sends data in the request body, so values are not shown in the URL.",
      "Q: What does the action attribute specify? A: The PHP script that receives the submitted form data.",
      "Q: Which key fetches the age value? A: The key age, matching the input name=\"age\"."
    ]
  },
  "php-3": {
    problem: "Write a PHP program to create a simple calculator that performs addition, subtraction, multiplication and division on given numbers.",
    requirements: [
      "XAMPP or WAMP with Apache and PHP 7+ or 8+",
      "MySQL is not required for this experiment",
      "A browser to view the results",
      "A text editor to create the calculator script"
    ],
    theory: "A calculator program stores operands in variables and applies PHP arithmetic operators: plus for addition, minus for subtraction, asterisk for multiplication and slash for division, with percent giving the remainder. Conditional statements such as if and elseif choose which operation to display. Results can be computed from fixed numbers or from values submitted through a form, then echoed to the page. Division needs care because dividing by zero is undefined.",
    code: [],
    notes: [
      "The handwritten calculator source for this experiment is illegible in the provided PDF; only the recorded numeric results are preserved. No PHP source has been invented."
    ],
    algorithm: [
      "1. Define numeric variables to hold the two operands.",
      "2. Compute the sum with the addition operator.",
      "3. Compute the difference with the subtraction operator.",
      "4. Compute the product with the multiplication operator.",
      "5. Compute the quotient with the division operator, avoiding a zero divisor.",
      "6. Optionally compute the remainder with the modulus operator.",
      "7. Use conditional statements to echo each labelled result.",
      "8. Run the script and compare the values with the recorded results."
    ],
    procedure: [
      "1. Start Apache from the XAMPP or WAMP control panel.",
      "2. Create a PHP file for the calculator in the php_practicals folder under htdocs.",
      "3. Add variables for the operands and the arithmetic operations.",
      "4. Add conditional output statements for each labelled result.",
      "5. Save the file and open it through http://localhost in a browser.",
      "6. Read the displayed results and compare them with the recorded table.",
      "7. Note that the recorded output also lists a modulus result not mentioned in the aim."
    ],
    explanation: "The source journal contains no legible calculator code: the numeric variable assignments, arithmetic operators and conditional output statements are missing, so no PHP source is reproduced here. Only the recorded results are preserved, namely addition 30, subtraction 8, multiplication 75, division 4.666 and modulus 6. The output page also includes modulus even though the written aim lists only four operations, and the scanned output page appears out of sequence with a fruit-array table. These gaps are flagged rather than filled with invented code.",
    result: "The recorded output lists addition 30, subtraction 8, multiplication 75, division 4.666 and modulus 6.",
    conclusion: "The calculator experiment demonstrates the four basic arithmetic operations in PHP, though its source code is not recoverable from the provided PDF.",
    viva: [
      "Q: Which operator performs division in PHP? A: The forward slash operator.",
      "Q: What does the modulus operator return? A: The remainder after integer division.",
      "Q: Why must the divisor not be zero? A: Division by zero is undefined and raises an error.",
      "Q: Why is no code shown for this experiment? A: The handwritten source is illegible, so only recorded results are preserved."
    ]
  },
  "php-4": {
    problem: "Create a PHP program that works with an array by adding elements, removing an element, counting the elements and displaying the array in a table.",
    requirements: [
      "XAMPP or WAMP with Apache and PHP 7+ or 8+",
      "MySQL is not required for this experiment",
      "A browser to view the generated table",
      "A text editor to create array_table.php"
    ],
    theory: "A PHP array is an ordered collection addressed by numeric indexes starting at zero. The short array append syntax adds an item at the next available index, unset() removes an item by index, and count() returns the number of elements. A foreach loop walks through an array as index-value pairs, which makes it convenient for rendering rows in an HTML table. Removing an element leaves a gap in the numeric indexes rather than renumbering the remaining items.",
    algorithm: [
      "1. Create an array $fruits with the initial fruit names.",
      "2. Append Orange and grapes using the array append syntax.",
      "3. Remove the element at index 1 with unset().",
      "4. Store count($fruits) in a variable and print the total.",
      "5. Open an HTML table and write a Fruit Name header.",
      "6. Loop over the array with foreach as index and value.",
      "7. Echo each index and value as a row of two cells.",
      "8. Close the table and view the page in the browser."
    ],
    procedure: [
      "1. Start Apache from the XAMPP or WAMP control panel.",
      "2. Save array_table.php in the php_practicals folder under htdocs.",
      "3. Write the array creation, append, unset and count statements.",
      "4. Add the table markup and the foreach loop that prints the rows.",
      "5. Open http://localhost/php_practicals/array_table.php in a browser.",
      "6. Observe the reported total and the list of index-value pairs.",
      "7. Confirm that the index of the removed item is absent from the table."
    ],
    explanation: "The script initialises $fruits with three names, appends two more with the bracket append syntax, then removes index 1 with unset(). count() is used for the printed total, and foreach walks the remaining keys and values to build table rows. Because unset() leaves the keys intact, the displayed indexes skip 1. Source caveats are preserved: the second initial fruit is spelled Banna as handwritten, the table-header markup has an apparent row-tag issue, and the output page appears before the aim page in the scan.",
    result: "The page shows total elements = 4 and a table with indexes 0, 2, 3 and 4 listing Apple, Mango, Orange and Grapes.",
    conclusion: "PHP arrays can be appended to, trimmed and counted, then rendered as an HTML table with a foreach loop.",
    viva: [
      "Q: How do you append an item to a PHP array? A: Use the bracket append syntax, for example fruits[] = value.",
      "Q: What does unset($fruits[1]) do? A: It removes the element at index 1 without renumbering later indexes.",
      "Q: What does count() return? A: The number of elements currently in the array.",
      "Q: What does foreach do here? A: It iterates over the array, giving each index and value for the table rows."
    ]
  },
  "php-5": {
    problem: "Write a PHP program that connects to a MySQL database, creates a table, inserts a record and displays all stored records.",
    requirements: [
      "XAMPP or WAMP with Apache, PHP 7+ or 8+ and MySQL",
      "phpMyAdmin to create the college database",
      "A browser to run practical5.php",
      "A text editor for the PHP and SQL files"
    ],
    theory: "The procedural MySQLi extension connects PHP to MySQL with mysqli_connect() and runs SQL through mysqli_query(). A failed connection is detected with a die() call using mysqli_connect_error(). INSERT adds a row, SELECT * retrieves every row, and mysqli_fetch_assoc() returns each row as an associative array indexed by column name until no rows remain. The connection is released with mysqli_close().",
    algorithm: [
      "1. Create the college database and a students table with id, name, age and course columns.",
      "2. Connect to localhost as root with mysqli_connect() using the college database.",
      "3. Stop with die() and mysqli_connect_error() if the connection fails.",
      "4. Print a success message for the established connection.",
      "5. Run an INSERT statement for a sample student and report success or error.",
      "6. Run SELECT * FROM students to fetch all records.",
      "7. Loop with mysqli_fetch_assoc() and echo each column of every row.",
      "8. Close the connection with mysqli_close()."
    ],
    procedure: [
      "1. Start Apache and MySQL from the XAMPP or WAMP control panel.",
      "2. Open http://localhost/phpmyadmin and create the college database.",
      "3. Select college and create the students table with the four columns.",
      "4. Create practical5.php in the php_practicals folder under htdocs.",
      "5. Write the connection, insert and display code in the file.",
      "6. Open http://localhost/php_practicals/practical5.php in a browser.",
      "7. Read the connection, insertion and all-student messages on the page."
    ],
    explanation: "The script first establishes a MySQLi connection and aborts with die() when it fails, which prevents later queries from running against a broken link. An INSERT query adds the sample student and mysqli_query() decides which confirmation message to print. A SELECT query is then walked with mysqli_fetch_assoc() to echo each field, and the connection is closed at the end. Source capitalisation and punctuation were normalised only where the handwritten intent is unambiguous, and the procedural MySQLi style is retained.",
    result: "The source output page shows a student record with name Kashif, age 20, course BSc IT and an ID that appears to be 1, together with connection and insertion messages.",
    conclusion: "PHP and MySQLi can connect to MySQL, create and populate a table, and list its records.",
    viva: [
      "Q: Which function opens a procedural MySQLi connection? A: mysqli_connect().",
      "Q: How is a failed connection handled? A: With die() and mysqli_connect_error().",
      "Q: What does mysqli_fetch_assoc() return? A: One row as an associative array, or null when rows are exhausted.",
      "Q: Why call mysqli_close()? A: To release the database connection after work is finished."
    ]
  },
  "php-6": {
    problem: "Write a PHP script that searches for and displays a specific student record using an ID passed through the URL with the GET method.",
    requirements: [
      "XAMPP or WAMP with Apache, PHP 7+ or 8+ and MySQL",
      "The college database and students table with existing records",
      "A browser to open the script with an id parameter",
      "phpMyAdmin to confirm the available record IDs"
    ],
    theory: "The GET method sends values in the URL query string, which PHP exposes through the $_GET superglobal. A WHERE clause in a SELECT statement limits results to rows matching a condition, here the student id. mysqli_query() runs the statement, mysqli_num_rows() reports how many rows came back, and mysqli_fetch_assoc() retrieves the matching row as an associative array. The isset() test guards against a missing id parameter.",
    algorithm: [
      "1. Connect to the college database with mysqli_connect().",
      "2. Check that $_GET['id'] is set before searching.",
      "3. Read the id value from $_GET['id'].",
      "4. Build a SELECT * FROM students WHERE id = value query.",
      "5. Run the query and count rows with mysqli_num_rows().",
      "6. If a row exists, fetch it and echo id, name, age and course.",
      "7. Otherwise echo Record not found; if no id was given, prompt for one.",
      "8. Close the connection with mysqli_close()."
    ],
    procedure: [
      "1. Start Apache and MySQL from XAMPP or WAMP.",
      "2. Open phpMyAdmin, select college and confirm students has records.",
      "3. Save practical6.php in the php_practicals folder under htdocs.",
      "4. Add the connection, GET guard and conditional SELECT logic.",
      "5. Open the script in a browser with an id parameter in the URL.",
      "6. Read the matching record, then try an id that does not exist.",
      "7. Observe the not-found message and the missing-id prompt."
    ],
    explanation: "The script guards on isset($_GET['id']), then builds a SELECT statement that filters students by that id. mysqli_num_rows() decides between displaying the fetched row and printing Record not found, while a separate else branch asks for an id when none is supplied. Two caveats are preserved: the recorded output is descriptive of the flow rather than a literal screenshot, and the handwritten SQL concatenates the GET value directly into the query, which is transcribed as the source approach rather than a secure production pattern.",
    result: "The source describes reading the ID through $_GET['id'], searching the students table and displaying the matching record; no literal output screenshot is preserved.",
    conclusion: "A GET parameter can be used to fetch and display a single database record selected by id.",
    viva: [
      "Q: How is the id received in this script? A: Through $_GET['id'] from the URL query string.",
      "Q: Why use mysqli_num_rows()? A: To check whether the SELECT returned a matching row.",
      "Q: What does a WHERE clause do? A: It restricts results to rows satisfying the given condition.",
      "Q: Is direct concatenation of GET into SQL safe? A: No, it risks SQL injection; prepared statements are preferred in production."
    ]
  },
  "php-7": {
    problem: "Write a PHP script that updates and deletes records in a MySQL table using simple HTML forms.",
    requirements: [
      "XAMPP or WAMP with Apache, PHP 7+ or 8+ and MySQL",
      "The college database and students table with existing records",
      "A browser to submit the update and delete forms",
      "A text editor to create practical7.php"
    ],
    theory: "HTML forms with method post send values in the request body, read in PHP through $_POST. An UPDATE statement changes existing columns for rows matching a WHERE condition, and DELETE removes rows that match its WHERE condition. The isset() test on a submit button's name detects which form was submitted. mysqli_query() executes each statement and reports success or failure.",
    algorithm: [
      "1. Connect to the college database with mysqli_connect().",
      "2. Test isset($_POST['update']) to detect an update submission.",
      "3. Read id, name, age and course and run an UPDATE with WHERE id.",
      "4. Print a success message or mysqli_error() for the update.",
      "5. Test isset($_POST['delete']) to detect a delete submission.",
      "6. Read delete_id and run DELETE FROM students WHERE id = value.",
      "7. Print a success message or mysqli_error() for the delete.",
      "8. Render two HTML forms, one for update and one for delete."
    ],
    procedure: [
      "1. Start Apache and MySQL from XAMPP or WAMP.",
      "2. Open phpMyAdmin, select college and ensure students has records.",
      "3. Save practical7.php in the php_practicals folder under htdocs.",
      "4. Add the POST guards, UPDATE and DELETE queries and the two forms.",
      "5. Open http://localhost/php_practicals/practical7.php in a browser.",
      "6. Fill in an existing ID with new values and click Update.",
      "7. Enter an ID in the delete form and click Delete, then verify in phpMyAdmin."
    ],
    explanation: "Two independent blocks run only when their submit button is present in $_POST: one issues an UPDATE that sets name, age and course for a given id, and the other issues a DELETE for the supplied delete_id. Each echoes a confirmation or the mysqli_error() text. The inline HTML supplies an update form and a separate delete form. Source caveats are preserved: the PHP and forms are split across pages in the journal and minor indentation and line breaks were added for readability while the SQL logic follows the source.",
    result: "The output sketch shows an update form populated with ID 1, Name Kashif, Age 21 and Course BSc IT and a Record updated successfully message, plus a separate delete example with a success message.",
    conclusion: "PHP forms and SQL UPDATE and DELETE statements provide a simple way to modify and remove MySQL records.",
    viva: [
      "Q: How does the script know which form was submitted? A: It checks isset() on the update or delete submit button.",
      "Q: What does UPDATE ... WHERE id do? A: It changes the listed columns only for the row with that id.",
      "Q: What happens without a WHERE clause in DELETE? A: Every row in the table would be deleted.",
      "Q: How are SQL errors reported? A: With mysqli_error() when mysqli_query() fails."
    ]
  },
  "php-8": {
    problem: "Write a PHP script that uploads a file such as an image or PDF and displays the uploaded file name and its location on screen.",
    requirements: [
      "XAMPP or WAMP with Apache and PHP 7+ or 8+",
      "MySQL is not required for this experiment",
      "A writable uploads folder inside the project",
      "A browser to select and submit a file"
    ],
    theory: "File uploads are delivered through the $_FILES superglobal, which holds the original name in name and the temporary server-side path in tmp_name. The form must use method post and enctype multipart/form-data so the browser encodes the file bytes. move_uploaded_file() transfers the temporary file to a permanent location and returns true on success, after which the name and destination can be echoed. The isset() test on the upload button confirms a submission.",
    algorithm: [
      "1. Create an uploads folder inside the php_practicals project.",
      "2. Build a POST form with enctype multipart/form-data and a file input.",
      "3. Add a submit button named upload.",
      "4. On submission, read $_FILES['file']['name'] and ['tmp_name'].",
      "5. Set the destination to uploads/ followed by the file name.",
      "6. Move the temporary file with move_uploaded_file().",
      "7. On success echo the file name and location, otherwise a failure message.",
      "8. Select a file in the browser and submit it to test the upload."
    ],
    procedure: [
      "1. Start Apache from the XAMPP or WAMP control panel.",
      "2. Create an uploads folder inside the php_practicals folder.",
      "3. Save practical8.php in C:\\xampp\\htdocs\\php_practicals\\.",
      "4. Write the file form and the move_uploaded_file() handling code.",
      "5. Open http://localhost/php_practicals/practical8.php in a browser.",
      "6. Choose an image or PDF with Choose File and click Upload.",
      "7. Read the success message, file name and storage location."
    ],
    explanation: "When the upload button is pressed, the script reads the original name and temporary path from $_FILES, builds a destination under uploads/ and calls move_uploaded_file(). A true result prints the file name and location; a false result prints a failure message. The form uses enctype multipart/form-data so the file is transmitted correctly. A source caveat is preserved: no file-size or type validation and no collision-safe naming are shown, and these safeguards were not added to the transcription.",
    result: "The output sketch shows a file selected, an Upload button and a successful-upload message with the file name and uploads location; the exact filename is faint.",
    conclusion: "PHP can receive an uploaded file through $_FILES and move it to a permanent folder with move_uploaded_file().",
    viva: [
      "Q: Which superglobal holds uploaded file data? A: $_FILES.",
      "Q: Why is enctype multipart/form-data required? A: It tells the browser to encode the file bytes for upload.",
      "Q: What does move_uploaded_file() return? A: True on a successful move, false otherwise.",
      "Q: Which key gives the temporary file path? A: $_FILES['file']['tmp_name']."
    ]
  },
  "php-9": {
    problem: "Implement a PHP login system using sessions with a login page, a protected dashboard page and a logout page.",
    requirements: [
      "XAMPP or WAMP with Apache and PHP 7+ or 8+",
      "MySQL is not required because credentials are hard-coded",
      "A browser with cookies enabled for sessions",
      "A text editor to create the three PHP pages"
    ],
    theory: "A PHP session stores user-specific data on the server across requests, identified by a session cookie. session_start() begins or resumes a session, and values are kept in the $_SESSION superglobal. A successful login can store the username there and use header() to redirect the browser to a protected page. That page checks for the session value and redirects back to login when it is absent, while session_destroy() ends the session on logout.",
    algorithm: [
      "1. Call session_start() at the top of each of the three pages.",
      "2. In login.php, test isset($_POST['login']) for a submission.",
      "3. Compare the posted username and password with admin and 1234.",
      "4. On a match set $_SESSION['username'] and redirect to dashboard.php.",
      "5. On a mismatch echo Invalid username or password.",
      "6. In dashboard.php, redirect to login.php when $_SESSION['username'] is not set.",
      "7. Otherwise welcome the stored user and show a logout link.",
      "8. In logout.php, call session_destroy() and redirect to login.php."
    ],
    procedure: [
      "1. Start Apache from the XAMPP or WAMP control panel.",
      "2. Create login.php, dashboard.php and logout.php in php_practicals under htdocs.",
      "3. Add the session handling, credential check and redirects to each file.",
      "4. Open http://localhost/php_practicals/login.php in a browser.",
      "5. Log in with username admin and password 1234.",
      "6. Read the dashboard welcome message and click the logout link.",
      "7. Confirm the logged-out state and try opening dashboard.php directly."
    ],
    explanation: "login.php validates the posted credentials, stores the username in $_SESSION and redirects to the dashboard with header() followed by exit(). dashboard.php relies on the session value to decide whether to show the welcome message, and logout.php calls session_destroy() before redirecting back to login. A source caveat is preserved: the handwritten dashboard guard appears to redirect when the session username is set, which conflicts with the intended behaviour, so the transcription follows the intended flow while flagging that condition as inconsistent.",
    result: "The output sketch shows a successful login, a dashboard welcome message, a logout link and a logged-out confirmation.",
    conclusion: "PHP sessions can protect a page by remembering a logged-in user across requests and clearing that state on logout.",
    viva: [
      "Q: What does session_start() do? A: It begins or resumes a PHP session for the current request.",
      "Q: Where is the logged-in user stored? A: In the $_SESSION superglobal on the server.",
      "Q: How is the browser sent to another page? A: With header() and a Location value, followed by exit().",
      "Q: What does session_destroy() do? A: It ends the current session and removes its stored data."
    ]
  },
  "php-10": {
    problem: "Write a PHP program for a mini student record system that adds student details, displays all students and searches for a student by roll number.",
    requirements: [
      "XAMPP or WAMP with Apache, PHP 7+ or 8+ and MySQL",
      "The college database with a students table",
      "A browser to add, list and search records",
      "A text editor to create practical10.php"
    ],
    theory: "A single PHP file can handle several operations by testing which submit button is present in $_POST. An INSERT statement adds a new student, SELECT * WITH no filter lists everyone, and SELECT with a WHERE clause finds one record by its id. mysqli_query() runs each statement and mysqli_fetch_assoc() walks the result rows as associative arrays. In this program the students table id is displayed as the roll number, linking the search field to that column.",
    algorithm: [
      "1. Connect to the college database with mysqli_connect().",
      "2. On the add button, read name, age and course from $_POST.",
      "3. Insert the new student and echo success or an error.",
      "4. On the search button, read the posted roll number id.",
      "5. Query students with WHERE id = value and check mysqli_num_rows().",
      "6. Echo the found student's fields or a not-found message.",
      "7. Run SELECT * FROM students and loop through every row to list all students.",
      "8. Render the add, all-students and search sections with their forms."
    ],
    procedure: [
      "1. Start Apache and MySQL from XAMPP or WAMP.",
      "2. Open phpMyAdmin, select college and ensure the students table exists.",
      "3. Create practical10.php in C:\\xampp\\htdocs\\php_practicals\\.",
      "4. Add the connection, add, list and search code plus the three sections.",
      "5. Open http://localhost/php_practicals/practical10.php in a browser.",
      "6. Enter a name, age and course and click Add Student.",
      "7. Use the Roll Number field and Search button to find the record."
    ],
    explanation: "The file is organised into add, display-all and search sections. The add block inserts the posted fields, the search block uses a WHERE clause on id and prints either Student Found details or Student not found, and an unfiltered SELECT lists every row on the page. Source caveats are preserved: the output is a sketched illustration rather than a captured run, the aim says search by roll number while the code uses the students id field as that number, and the rotated handwritten pages give only a structured transcription of visible fragments rather than a verified complete program. Direct concatenation of user input into SQL is also left as written.",
    result: "The output sketch shows an Add Student form, a Search Student form using Roll Number and an All Students section with the sample record Kashif, age 20, course BSc.",
    conclusion: "A single PHP script can provide a small student record system combining insert, list and search operations over MySQL.",
    viva: [
      "Q: How does one file handle several operations? A: By testing which submit button is present in $_POST.",
      "Q: Which column is used as the roll number? A: The students table id field is displayed and searched as the roll number.",
      "Q: How is a single student found? A: With a SELECT query using WHERE id = value and mysqli_num_rows().",
      "Q: Is the shown output a captured run? A: No, it is a sketched illustration from the source, not a verified execution result."
    ]
  }
});
