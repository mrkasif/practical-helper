/* PHP practicals — extracted from PHP_Practical_Journal_Kashif_Sayyad_Digital.pdf
   The source is a typed transcription of a 38-page handwritten journal. Wording and visible code
   structure are retained; source-level inconsistencies and unreadable portions are flagged, not
   silently corrected. Experiment 3's calculator source is too faint to transcribe in the source. */
window.PECL = window.PECL || {};
window.PECL.php = [
  {
    id: "php-1",
    n: 1,
    subject: "php",
    title: "Display name, date/time and server information",
    date: "24-07-26",
    pdfPages: "PDF p. 3",
    src: "Journal pp. 4–5",
    aim: "Create a PHP script to display: (1) your name, (2) current date and time, and (3) server information using $_SERVER.",
    code: [
      {
        file: "index.php",
        lang: "php",
        src: String.raw`<?php
echo "<h2>PHP Practical 1</h2>";
echo "<br>";
echo "Name: Kashif";
echo "<br>";
echo "Current Date:";
echo date("d-m-y");
echo "<br>";
echo "Current Time:";
echo date("h:i:s A");
echo "<br>";
echo "<h2>Server Information</h2>";
echo "Server Name: ".$_SERVER['SERVER_NAME'];
echo "<br>";
echo "Server Software: ".$_SERVER['SERVER_SOFTWARE'];
echo "<br>";
echo "Current php file: ".$_SERVER['PHP_SELF'];
echo "<br>";
?>`
      }
    ],
    output: "The output shows the name as Kashif, server name as localhost, and server software beginning with Apache. The handwritten date appears to be 24-07-26. The time and full server-software version are faint; the PHP file path appears as /Kashif/index.php but is not fully certain.",
    notes: [
      "Recorded output is descriptive in the source because the time and full server-software version are faint."
    ]
  },
  {
    id: "php-2",
    n: 2,
    subject: "php",
    title: "HTML form using GET and POST",
    date: "—",
    pdfPages: "PDF p. 4",
    src: "Journal pp. 6–9",
    aim: "Write a PHP script to handle an HTML form and perform the following methods: (1) read input values using GET, (2) read input values using POST, and (3) display the submitted data on the screen.",
    code: [
      {
        file: "form.html",
        lang: "markup",
        src: String.raw`<html>
<head>
<title>GET and Post method</title>
</head>
<body>
<h2>GET Method form</h2>
<form action="get.php" method="get">
Name:
<input type="text" name="name"><br><br>
Age:
<input type="number" name="age"><br><br>
<input type="submit" value="get method"><br><br>
<h2>POST Method form</h2>
<form action="post.php" method="post">
Name:
<input type="text" name="name"><br><br>
Age:
<input type="number" name="age"><br><br>
<input type="submit" value="post method"><br><br>
</body>
</html>`
      },
      {
        file: "get.php",
        lang: "php",
        src: String.raw`<?php
echo "<h2>Submit Data Using Get method</h2>";
$name = $_GET["name"];
$age = $_GET["age"];
echo "Name: ".$name;
echo "<br><br>";
echo "Age: ".$age;
?>`
      },
      {
        file: "post.php",
        lang: "php",
        src: String.raw`<?php
echo "<h2>Submit Data Using Post method</h2>";
$name = $_POST["name"];
$age = $_POST["age"];
echo "Name: ".$name;
echo "<br><br>";
echo "Age: ".$age;
?>`
      }
    ],
    output: "Both output pages show Name: Kashif and Age: 20. One is labelled GET method and the other POST method.",
    notes: [
      "Source/legibility note: The handwritten HTML appears to open a second form before explicitly closing the first form. This has been preserved as written; it has not been silently corrected."
    ]
  },
  {
    id: "php-3",
    n: 3,
    subject: "php",
    title: "Simple calculator",
    date: "—",
    pdfPages: "PDF p. 5",
    src: "Journal pp. 10–11 (output appears on p. 12)",
    aim: "Write a PHP program to create a simple calculator with the following options: (1) addition, (2) subtraction, (3) multiplication, and (4) division.",
    code: [],
    output: "Operation\tRecorded result\nAddition\t30\nSubtraction\t8\nMultiplication\t75\nDivision\t4.666\nModulus\t6",
    notes: [
      "The output page also includes a Modulus result, although Modulus is not listed in the written AIM.",
      "Missing from the source: the calculator's numeric variable assignments, arithmetic operators, and conditional output statements for addition, subtraction, multiplication and division. Only the recorded results are legible; no code has been reconstructed.",
      "Source/legibility note: The calculator code on page 11 is too faint for a reliable character-by-character transcription. The results above are legible. Page 12 is headed as an output page but displays a fruit array table, suggesting the scanned source pages are out of sequence or mislabelled."
    ]
  },
  {
    id: "php-4",
    n: 4,
    subject: "php",
    title: "PHP array operations and table display",
    date: "—",
    pdfPages: "PDF p. 6",
    src: "Journal pp. 12–13",
    aim: "Create a PHP program to work with an array: (1) add elements to an array, (2) remove elements, (3) count the elements, and (4) display the array in table format.",
    code: [
      {
        file: "array_table.php",
        lang: "php",
        src: String.raw`<?php
$fruits = array("Apple", "Banna", "Mango");
$fruits[] = "Orange";
$fruits[] = "grapes";
unset($fruits[1]);
$total = count($fruits);
echo "<h2>total elements = $total</h2>";
echo "<table border='1'>";
echo "<tr>";
echo "<th>Fruit Name</th>";
echo "<tr>";
foreach($fruits as $index => $value)
{
    echo "<tr>";
    echo "<td>$index</td>";
    echo "<td>$value</td>";
    echo "</tr>";
}
echo "</table>";
?>`
      }
    ],
    output: "total elements = 4\n\nIndex\tFruit Name\n0\tApple\n2\tMango\n3\tOrange\n4\tGrapes",
    notes: [
      "The original handwritten spelling of the second initial fruit appears to be “Banna”; that element is removed with unset().",
      "Source/legibility note: The output page appears immediately before the experiment's AIM/program page in the scan. The source code's table-header markup is reproduced as legibly written, including the apparent row-tag issue."
    ]
  },
  {
    id: "php-5",
    n: 5,
    subject: "php",
    title: "MySQL connection, table creation, insertion and display",
    date: "—",
    pdfPages: "PDF p. 7",
    src: "Journal pp. 14–18",
    aim: "To write a PHP program to connect to a MySQL database and perform the following operations: (1) create a table, (2) insert a record, and (3) display all records.",
    procedure: [
      "Start XAMPP and start Apache and MySQL.",
      "Open phpMyAdmin at http://localhost/phpmyadmin.",
      "Create the database named college.",
      "Select the college database and create the students table.",
      "Create a PHP file in the php_practicals folder and run it in the browser."
    ],
    code: [
      {
        file: "table_definition.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE college;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    course VARCHAR(50)
);`
      },
      {
        file: "practical5.php",
        lang: "php",
        src: String.raw`<?php
$conn = mysqli_connect("localhost", "root", "", "college");
if (!$conn) {
    die("connection failed: ".mysqli_connect_error());
}
echo "Database Connected Successfully<br><br>";
// Insert Record
$sql = "INSERT INTO students (name, age, course)
        VALUES ('Kashif', 20, 'BSc IT')";
if (mysqli_query($conn, $sql)) {
    echo "Record inserted successfully<br><br>";
} else {
    echo "Error: ".mysqli_error($conn);
}
// Display All Records
$result = mysqli_query($conn, "SELECT * FROM students");
echo "<h3>All students</h3>";
while ($row = mysqli_fetch_assoc($result)) {
    echo "ID: ".$row['id']."<br>";
    echo "Name: ".$row['name']."<br>";
    echo "Age: ".$row['age']."<br>";
    echo "Course: ".$row['course']."<br><br>";
}
mysqli_close($conn);
?>`
      }
    ],
    output: "The source output page shows a student record with the name Kashif, age 20, course BSc IT, and an ID that appears to be 1.",
    notes: [
      "Source/legibility note: The handwritten code uses mysqli_connect/mysqli_query/mysqli_fetch_assoc. Capitalisation and punctuation have been normalised only where the handwritten intent is unambiguous."
    ]
  },
  {
    id: "php-6",
    n: 6,
    subject: "php",
    title: "Search a student record by ID using GET",
    date: "—",
    pdfPages: "PDF p. 8",
    src: "Journal pp. 19–21",
    aim: "To write a PHP script to search and display a specific record from the database using an ID passed through the URL using the GET method.",
    procedure: [
      "Start Apache and MySQL from XAMPP, open phpMyAdmin, select the college database, and confirm that students contains records.",
      "Save the file as practical6.php in C:\\xampp\\htdocs\\php_practicals\\, then open the URL with an ID parameter. The handwritten example URL ends with practical6.php?id=1."
    ],
    code: [
      {
        file: "practical6.php",
        lang: "php",
        src: String.raw`<?php
$conn = mysqli_connect("localhost", "root", "", "college");
if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM students WHERE id = $id";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo "ID: ".$row['id']."<br>";
        echo "Name: ".$row['name']."<br>";
        echo "Age: ".$row['age']."<br>";
        echo "Course: ".$row['course']."<br>";
    } else {
        echo "Record not found.";
    }
} else {
    echo "Please provide an ID.";
}
mysqli_close($conn);
?>`
      }
    ],
    output: "The source describes reading the ID through $_GET['id'], searching the students table, and displaying the matching record.",
    notes: [
      "Source/legibility note: The handwritten SQL concatenates the GET value directly into the query. This is transcribed as the source's approach, not presented as a secure production pattern."
    ]
  },
  {
    id: "php-7",
    n: 7,
    subject: "php",
    title: "Update and delete MySQL records using HTML forms",
    date: "—",
    pdfPages: "PDF pp. 9–10",
    src: "Journal pp. 22–26",
    aim: "To write a PHP script to update and delete records from a MySQL table using simple HTML forms.",
    code: [
      {
        file: "practical7.php",
        lang: "php",
        src: String.raw`<?php
$conn = mysqli_connect("localhost", "root", "", "college");
if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}
// Update Record
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $course = $_POST['course'];
    $sql = "UPDATE students
            SET name='$name', age='$age', course='$course'
            WHERE id='$id'";
    if (mysqli_query($conn, $sql)) {
        echo "Record updated successfully.<br><br>";
    } else {
        echo "Error: ".mysqli_error($conn);
    }
}
// Delete Record
if (isset($_POST['delete'])) {
    $id = $_POST['delete_id'];
    $sql = "DELETE FROM students WHERE id=$id";
    if (mysqli_query($conn, $sql)) {
        echo "Record deleted successfully.<br><br>";
    } else {
        echo "Error: ".mysqli_error($conn);
    }
}
?>
<h2>Update Student</h2>
<form method="post">
ID:
<input type="number" name="id" required><br><br>
Name:
<input type="text" name="name" required><br><br>
Age:
<input type="number" name="age" required><br><br>
Course:
<input type="text" name="course" required><br><br>
<input type="submit" name="update" value="Update">
</form>
<h2>Delete Student</h2>
<form method="post">
ID:
<input type="number" name="delete_id" required>
<input type="submit" name="delete" value="Delete">
</form>`
      }
    ],
    output: "The output sketch shows an update form populated with ID 1, Name Kashif, Age 21 and Course BSc IT, followed by the message “Record updated successfully”. A separate delete example shows ID 1 and a successful deletion message.",
    notes: [
      "Source/legibility note: The source's PHP update/delete code and forms are split across pages. Minor indentation/line breaks were added for readability; the SQL logic follows the handwritten source."
    ]
  },
  {
    id: "php-8",
    n: 8,
    subject: "php",
    title: "Upload an image/PDF and display its name and location",
    date: "—",
    pdfPages: "PDF p. 11",
    src: "Journal pp. 27–29",
    aim: "To write a PHP script to upload a file such as an image or PDF and display the uploaded file name and location on the screen.",
    procedure: [
      "Start Apache from the XAMPP Control Panel.",
      "Create a folder named uploads inside the php_practicals folder.",
      "Create practical8.php and save it inside C:\\xampp\\htdocs\\php_practicals\\.",
      "Open http://localhost/php_practicals/practical8.php.",
      "Select an image or PDF using Choose File and click Upload."
    ],
    code: [
      {
        file: "practical8.php",
        lang: "php",
        src: String.raw`<?php
if (isset($_POST['upload'])) {
    $filename = $_FILES['file']['name'];
    $fileTmp = $_FILES['file']['tmp_name'];
    $location = "uploads/".$filename;
    if (move_uploaded_file($fileTmp, $location)) {
        echo "File uploaded successfully.<br><br>";
        echo "File Name: ".$filename."<br>";
        echo "Location: ".$location;
    } else {
        echo "File upload failed.";
    }
}
?>
<h2>File upload</h2>
<form method="post" enctype="multipart/form-data">
    Select File:
    <input type="file" name="file" required>
    <br><br>
    <input type="submit" name="upload" value="Upload">
</form>`
      }
    ],
    output: "The output sketch shows a file selected, an Upload button, and a successful-upload message. The example filename appears to be an image file, but the exact filename is faint.",
    notes: [
      "Source/legibility note: The source code does not show file-size/type validation or collision-safe naming. Those safeguards were not added to the transcription."
    ]
  },
  {
    id: "php-9",
    n: 9,
    subject: "php",
    title: "Login system using PHP sessions",
    date: "—",
    pdfPages: "PDF p. 12",
    src: "Journal pp. 30–33",
    aim: "To implement a PHP login system using sessions with the following pages: (1) Login Page, (2) Dashboard Page, and (3) Logout Page.",
    procedure: [
      "Create login.php, dashboard.php and logout.php in C:\\xampp\\htdocs\\php_practicals\\.",
      "The source's example credentials are username admin and password 1234."
    ],
    code: [
      {
        file: "login.php",
        lang: "php",
        src: String.raw`<?php
session_start();
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if ($username == "admin" && $password == "1234") {
        $_SESSION['username'] = $username;
        header("location: dashboard.php");
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
?>
<h2>Login Page</h2>
<form method="post">
    Username:
    <input type="text" name="username" required>
    <br><br>
    Password:
    <input type="password" name="password" required>
    <br><br>
    <input type="submit" name="login" value="Login">
</form>`
      },
      {
        file: "dashboard.php",
        lang: "php",
        src: String.raw`<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("location: login.php");
    exit();
}
?>
<h2>Dashboard Page</h2>
Welcome <?php echo $_SESSION['username']; ?>
<br><br>
<a href="logout.php">Logout</a>`
      },
      {
        file: "logout.php",
        lang: "php",
        src: String.raw`<?php
session_start();
session_destroy();
header("location: login.php");
exit();
?>`
      }
    ],
    output: "The output sketch shows a successful login, a dashboard welcome message, a logout link, and a logged-out confirmation.",
    notes: [
      "Source/legibility note: The handwritten dashboard guard appears to redirect when the session username is set, which conflicts with the stated intended behaviour. The transcription above follows the intended flow described in the procedure and output; the exact handwritten condition is flagged as inconsistent."
    ]
  },
  {
    id: "php-10",
    n: 10,
    subject: "php",
    title: "Mini student record system",
    date: "—",
    pdfPages: "PDF pp. 13–14",
    src: "Journal pp. 34–38",
    aim: "To write a PHP program to create a mini student record system with the following operations: (1) add student details, (2) display all students, and (3) search student by roll number.",
    procedure: [
      "Start Apache and MySQL from XAMPP, open phpMyAdmin and select the college database, and ensure the students table is available.",
      "Create practical10.php in C:\\xampp\\htdocs\\php_practicals\\ and open it in the browser.",
      "Enter student details and click Add Student, then use the roll-number field and Search button."
    ],
    code: [
      {
        file: "practical10.php",
        lang: "php",
        src: String.raw`<?php
$conn = mysqli_connect("localhost", "root", "", "college");
if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}
// Add Student
if (isset($_POST['add'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    $course = $_POST['course'];
    $sql = "INSERT INTO students (name, age, course)
            VALUES ('$name', '$age', '$course')";
    if (mysqli_query($conn, $sql)) {
        echo "Student added successfully.<br><br>";
    } else {
        echo "Error: ".mysqli_error($conn);
    }
}
// Search Student
if (isset($_POST['search'])) {
    $id = $_POST['id'];
    $result = mysqli_query(
        $conn,
        "SELECT * FROM students WHERE id = $id"
    );
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo "<h3>Student Found</h3>";
        echo "Roll Number: ".$row['id']."<br>";
        echo "Name: ".$row['name']."<br>";
        echo "Age: ".$row['age']."<br>";
        echo "Course: ".$row['course']."<br><br>";
    } else {
        echo "Student not found.<br><br>";
    }
}
?>
<h2>Add Student</h2>
<form method="post">
    Name:
    <input type="text" name="name" required>
    <br><br>
    Age:
    <input type="number" name="age" required>
    <br><br>
    Course:
    <input type="text" name="course" required>
    <br><br>
    <input type="submit" name="add" value="Add Student">
</form>
<h2>All Students</h2>
<?php
$result = mysqli_query($conn, "SELECT * FROM students");
while ($row = mysqli_fetch_assoc($result)) {
    echo "Roll Number: ".$row['id']."<br>";
    echo "Name: ".$row['name']."<br>";
    echo "Age: ".$row['age']."<br>";
    echo "Course: ".$row['course']."<br>";
    echo "<hr>";
}
?>
<h2>Search Student</h2>
<form method="post">
    Roll Number:
    <input type="number" name="id" required>
    <input type="submit" name="search" value="Search">
</form>`
      }
    ],
    output: "The output sketch shows an Add Student form with Name, Age and Course fields; a Search Student form using Roll Number; and an All Students section. The sample record shown is Kashif, age 20, course BSc.",
    notes: [
      "Source/legibility note: The source AIM says search by roll number, while the code uses the students table's id field as the displayed roll number. The handwritten source pages are rotated; some code is faint. The code is a structured transcription of visible fragments, not a claim that the original file was a complete, tested program."
    ]
  }
];
