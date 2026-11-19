/* Advanced Java practicals — extracted from Advanced_Java_Practical_Journal_Kashif_Sayyad_Roll50.pdf
   Experiments 1–4 are fully transcribed in the source. For Experiments 5–10 the source explicitly
   states that the handwritten code could not be recovered with confidence; only the authentic AIMs
   (from the index) and the source's own caution notes are retained. No code has been invented. */
window.PECL = window.PECL || {};
window.PECL.java = [
  {
    id: "java-1",
    n: 1,
    subject: "java",
    title: "Create and Execute Multiple Threads Using the Thread class",
    date: "21/7/26",
    pdfPages: "PDF pp. 4–5",
    src: "Journal pp. 4–8",
    aim: "To create & execute multiple threads using the Thread class in Java",
    problem: "Create three threads by extending the Thread class and make each print its task and iteration count five times with a delay in between, so that the executions interleave on the console.",
    requirements: [
      "Eclipse IDE or any terminal",
      "JDK 8 or above"
    ],
    objectives: [
      "To understand multithreading in Java",
      "To create threads by extending the Thread class.",
      "To execute multiple threads simultaneously.",
      "To observe Concurrent execution of threads."
    ],
    theory: "Multithreading is a feature of Java that allows multiple threads (small units of execution) to run concurrently within a program. Each thread performs a separate task independently.\n\nThe Thread class is available in the java.lang package. To create a thread:\n1. Extend the Thread class.\n2. Override the run() method.\n3. Create an object of class.\n4. Call the start() method.\n\nImportant Methods\n• start() — Starts a new thread.\n• run() — Contains the code executed by the thread.\n• sleep() — Pauses a thread for a specified time.\n• getName() — Returns the thread name.\n• setPriority() — Sets thread priority.",
    procedure: [
      "Create a class MyThread1 that extends Thread.",
      "Store the task name in a field set from the constructor.",
      "Override run() with a loop of five iterations printing the name and count.",
      "Sleep 500 ms between iterations.",
      "Create three MyThread1 objects in main.",
      "Call start() on each and observe the interleaved console output."
    ],
    algorithm: [
      "Start the program",
      "Create a class that extends Thread",
      "Override the run() method.",
      "Print the thread name and iteration number.",
      "Create multiple thread objects.",
      "Call the start() method for each thread.",
      "Execute all threads simultaneously.",
      "Stop the program."
    ],
    code: [
      {
        file: "multiplethread.java",
        lang: "java",
        src: String.raw`package Firstjava;
class MyThread1 extends Thread {
    private String task;
    MyThread1(String task) {
        this.task = task;
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task " + i + " is executed by "
                + Thread.currentThread().getName() + " - count: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}
public class multiplethread {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1("Task 1");
        MyThread1 t2 = new MyThread1("Task 2");
        MyThread1 t3 = new MyThread1("Task 3");
        t1.start();
        t2.start();
        t3.start();
    }
}`
      }
    ],
    output: "Task 1 is executed by Thread-0 - count: 1\nTask 2 is executed by Thread-1 - count: 1\nTask 3 is executed by Thread-2 - count: 1\nTask 1 is executed by Thread-0 - count: 2\nTask 2 is executed by Thread-1 - count: 2\n... (threads interleave; exact order may vary)\nTask 3 is executed by Thread-2 - count: 5",
    explanation: "Each MyThread1 instance overrides run(); calling start() creates a new thread that executes run() concurrently with the main thread and the other two threads. Thread.sleep(500) pauses the current thread, which makes the interleaving visible on the console. Thread names default to Thread-0, Thread-1, ... and can be changed with setName() or the Thread(String) constructor.",
    result: "Multiple threads were successfully created by extending the Thread class and executed concurrently.",
    conclusion: "Extending Thread is the simplest way to define a new execution unit in Java. Overriding run() defines the work; start() both creates and schedules the thread. The experiment was completed successfully.",
    viva: [
      "Q: What is the difference between start() and run()? A: start() creates a new thread and calls run() on it; calling run() directly executes on the current thread, with no new thread created.",
      "Q: Why is the output interleaved? A: The operating system scheduler switches between threads; the order of execution is not deterministic.",
      "Q: What is the thread life cycle? A: New -> Runnable -> Running -> Blocked/Waiting (e.g. sleep) -> Terminated.",
      "Q: What does Thread.sleep() do? A: It pauses the current thread for the given milliseconds and may throw InterruptedException.",
      "Q: What is multithreading? A: Multiple threads executing concurrently within one program, sharing memory and CPU."
    ],
    notes: []
  },
  {
    id: "java-2",
    n: 2,
    subject: "java",
    title: "To implement multithreading using Runnable interface",
    date: "27-7-26",
    pdfPages: "PDF p. 6",
    src: "Journal pp. 9–10",
    aim: "To implement multi-threading using Runnable interface.",
    problem: "Implement the same multithreaded behaviour using the Runnable interface: one thread prints hello and the other prints hi, five times each with a sleep delay.",
    theory: "The Runnable interface declares a single method, run(). Any class implementing Runnable can be wrapped in a Thread and executed concurrently, without the class itself being a thread.\n\nImplementing Runnable is preferred when the worker class must remain focused on the task it performs rather than on thread mechanics; it also allows the same Runnable instance to be passed to different Thread objects.\n\nThread t = new Thread(runnable); t.start() — the Thread creates a new execution context and schedules run() on it, which is why calling start() and not run() matters.",
    procedure: [
      "Create class hello2 implementing Runnable; print hello five times with sleep(1000).",
      "Create class hi2 implementing Runnable the same way for hi.",
      "In main, create one object of each Runnable.",
      "Create two Thread objects wrapping the two Runnables.",
      "Call start() on both threads and observe the interleaved output."
    ],
    requirements: [
      "Eclipse IDE or any terminal",
      "JDK 8 or above"
    ],
    algorithm: [
      "Start the program",
      "Create a class implementing Runnable",
      "Override the run() method.",
      "Create two Runnable objects.",
      "Create two threads objects using the Runnable object",
      "Start both threads using start().",
      "Display the output.",
      "Stop the program."
    ],
    code: [
      {
        file: "runnable.java",
        lang: "java",
        src: String.raw`package firstjava;
class hello2 implements Runnable {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("hello");
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
            }
        }
    }
}
class hi2 implements Runnable {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println("hi");
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
            }
        }
    }
}
public class runnable {
    public static void main(String[] args) {
        hello2 obj1 = new hello2();
        hi2 obj2 = new hi2();
        Thread t1 = new Thread(obj1);
        Thread t2 = new Thread(obj2);
        t1.start();
        t2.start();
    }
}`
      }
    ],
    output: "hello / hi print in an interleaved, non-deterministic order (illustrative).\nNote: the exact source order from the handwritten page is not preserved; the Runnable implementation is assembled from the usage pattern visible on the following page of the journal.",
    explanation: "The two classes implement Runnable and put their loop inside run(). They are not threads themselves; they are passed to the Thread constructor, and Thread(start()) is what actually creates and schedules the new thread. This separates the task definition (Runnable) from the thread machinery (Thread), which is the recommended design when the class already extends something else.",
    result: "Multithreading successfully implemented using the Runnable interface.",
    conclusion: "Runnable is the preferred way to define thread work in Java because it decouples the job from the Thread instance. The experiment was completed successfully.",
    viva: [
      "Q: Why prefer Runnable over extending Thread? A: A class can implement Runnable and still extend another class; it also reuses the Runnable object across threads and keeps task separate from thread.",
      "Q: How do you create a thread from a Runnable? A: Pass the Runnable to new Thread(runnable), then call start() on that Thread.",
      "Q: Which interface does Thread implement? A: Thread itself implements Runnable, and its default run() does nothing unless overridden.",
      "Q: Can two threads share one Runnable instance? A: Yes; both threads would execute the same run() code, so shared state would race unless synchronized.",
      "Q: What is the difference between a thread and a Runnable? A: Runnable defines the task; Thread is the worker object responsible for scheduling it."
    ],
    result: "Multithreading successfully implemented using the Runnable interface.",
    notes: [
      "hi2 class body completed from usage pattern on subsequent page; original handwriting spans page break."
    ]
  },
  {
    id: "java-3",
    n: 3,
    subject: "java",
    title: "Demonstrate thread priority and use of sleep() in Java in Eclipse IDE",
    date: "3-8-26",
    pdfPages: "PDF p. 7",
    src: "Journal pp. 11–14",
    aim: "Demonstrate Thread Priority and use of sleep() in Java in Eclipse IDE.",
    problem: "Create three threads, assign them MIN, NORM and MAX priority, and print each thread's name, priority and iteration count with a one-second sleep between iterations.",
    theory: "Every Java thread has a priority between Thread.MIN_PRIORITY (1) and Thread.MAX_PRIORITY (10); new threads inherit the priority of the thread that created them, defaulting to Thread.NORM_PRIORITY (5).\n\nPriority is a hint to the thread scheduler: the JVM and OS prefer to run higher-priority threads first, but Java makes no ordering guarantee. MIN_PRIORITY, NORM_PRIORITY and MAX_PRIORITY are aliases for 1, 5 and 10.\n\nThread.sleep(long millis) pauses the current thread, freeing the CPU for other threads; it throws InterruptedException, a checked exception.",
    procedure: [
      "Create class MyThread extending Thread with a name constructor calling super(name).",
      "Override run() with a loop of five iterations printing name, priority and count.",
      "Sleep 1000 ms between iterations.",
      "In main, create t1, t2, t3 with names Thread-1..3.",
      "Assign MIN, NORM and MAX priorities.",
      "Start all three threads and observe the console mix of lines."
    ],
    objectives: [
      "Understand thread Priorities",
      "Learn how Thread.sleep() Pauses thread execution.",
      "Observe Concurrent execution of multiple threads."
    ],
    requirements: ["Eclipse IDE", "JDK 8 or Above."],
    algorithm: [
      "Create a class that extends thread.",
      "Override the run() method.",
      "Display thread name and Priority.",
      "Use Thread.sleep(1000) after each iteration.",
      "Create three thread objects.",
      "Assign different Priorities.",
      "Start all threads.",
      "Observe the output."
    ],
    code: [
      {
        file: "sleep_P.java",
        lang: "java",
        src: String.raw`package firstjava;
class MyThread extends Thread {
    MyThread(String name) {
        super(name);
    }
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + " priority = " + getPriority() + " count = " + i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}
public class sleep_P {
    public static void main(String args[]) {
        MyThread t1 = new MyThread("Thread-1");
        MyThread t2 = new MyThread("Thread-2");
        MyThread t3 = new MyThread("Thread-3");
        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.NORM_PRIORITY);
        t3.setPriority(Thread.MAX_PRIORITY);
        t1.start();
        t2.start();
        t3.start();
    }
}`
      }
    ],
    output: "Thread-2 priority 5 count = 1\nThread-3 priority 10 count = 1\nThread-1 priority 1 count = 1\nThread-2 priority 5 count = 2\nThread-3 priority 10 count = 2\nThread-1 priority 1 count = 2\n... (continues to count = 5 for each)",
    explanation: "setPriority() is called before start(); it stores the requested priority and the JVM passes it to the operating system scheduler as a hint. sleep(1000) makes each thread yield the CPU, so the three prints interleave. Priorities in Java range from Thread.MIN_PRIORITY (1) to Thread.MAX_PRIORITY (10) with Thread.NORM_PRIORITY = 5; MIN/NORM/MAX are aliases for 1/5/10. The exact interleaving depends on the OS scheduler and is not guaranteed by the spec.",
    result: "Thread priorities and sleep() method successfully demonstrated.",
    conclusion: "Thread priority is only a hint to the scheduler; it does not guarantee execution order. sleep() controls pacing, which makes concurrent behaviour observable in the console. The experiment was completed successfully.",
    viva: [
      "Q: What are the three constant priorities? A: Thread.MIN_PRIORITY = 1, Thread.NORM_PRIORITY = 5 (default), Thread.MAX_PRIORITY = 10.",
      "Q: Does a higher priority guarantee execution first? A: No, priority is a scheduling hint; actual order depends on the JVM and OS scheduler.",
      "Q: What does Thread.sleep() throw? A: InterruptedException, which is a checked exception and must be caught or declared.",
      "Q: How do you read the current thread's priority? A: getPriority() on the thread object.",
      "Q: Where should setPriority() be called? A: Before start(); changing it after start() is allowed but has no effect on threads already running."
    ],
    notes: []
  },
  {
    id: "java-4",
    n: 4,
    subject: "java",
    title: "To establish a connection between a Java Program and a MySQL database using JDBC in Eclipse IDE",
    date: "04/8/26",
    pdfPages: "PDF pp. 8–9",
    src: "Journal pp. 15–18",
    aim: "To Establish a connection between a Java program and a MySQL database using JDBC in Eclipse IDE.",
    problem: "Establish a JDBC connection from a Java program to a MySQL database named studentdb, using the MySQL Connector/J driver, and print a confirmation message.",
    theory: "JDBC steps: (1) load the driver, (2) open a Connection with DriverManager, (3) create a Statement/PreparedStatement, (4) execute SQL, (5) process the ResultSet, (6) close resources.\n\nClass.forName(\"com.mysql.cj.jdbc.Driver\") loads the driver class; Connector/J 8 auto-registers it, making the call optional. DriverManager.getConnection(url, user, password) performs the TCP handshake and authentication; failure throws SQLException with a vendor error code.\n\nThe URL format jdbc:mysql://host:3306/database tells the driver which protocol, host, port and database to use.",
    algorithm: [
      "Open MySQL Workbench and create the studentdb database and Student table.",
      "Add the MySQL Connector/J JAR to the Eclipse build path.",
      "Write connectmysql.java with imports java.sql.*.",
      "Load the driver class with Class.forName.",
      "Open the connection with DriverManager.getConnection(url, user, password).",
      "Print Connection created on success.",
      "Close the connection in a finally/try-with-resources."
    ],
    requirements: [
      "Eclipse IDE",
      "JDK 5 or above",
      "MySQL Server",
      "MySQL Workbench",
      "MySQL Connector/J (JDBC Driver)"
    ],
    procedure: [
      "Open MySQL Workbench and execute the SQL statements shown below.",
      "Open Eclipse and create a Java Project.",
      "Right-click the project → Build Path → Configure Build Path.",
      "Select Libraries, click Add External JARs, then select the downloaded mysql-connector-j.jar file.",
      "Click Apply and close."
    ],
    code: [
      {
        file: "database_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE studentdb;
USE studentdb;
CREATE TABLE Student(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    Course VARCHAR(50)
);
INSERT INTO student VALUES
(1, 'Rahul', 'Java'),
(2, 'Priya', 'Python');`
      },
      {
        file: "connectmysql.java",
        lang: "java",
        src: String.raw`package firstjava;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class connectmysql {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        // Register the driver
        Class.forName("com.mysql.cj.jdbc.Driver");
        // Establish the Connection
        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/studentdb", "root", "root");
        System.out.println("Connection created");
        con.close();
    }
}`
      }
    ],
    output: "Connection created",
    explanation: "Class.forName(\"com.mysql.cj.jdbc.Driver\") loads the driver class (Connector/J 8 does this automatically, so it is optional). DriverManager.getConnection(url, user, password) opens the TCP connection to the MySQL server on port 3306; if credentials or the URL are wrong it throws SQLException. The catch order shows that ClassNotFoundException and SQLException are separate concerns: driver missing vs. server/database problem. con.close() releases the connection back to the server.",
    result: "Successfully established connection between Java program and MySQL database using JDBC.",
    conclusion: "JDBC is the standard Java API for relational databases; a connection is the foundation for every query. Knowing how to load the driver and build the URL is the first step of any database program. The experiment was completed successfully.",
    viva: [
      "Q: What is the role of DriverManager? A: It manages JDBC drivers and returns a Connection when given a URL, user and password.",
      "Q: What is the format of the MySQL JDBC URL? A: jdbc:mysql://host:3306/databaseName (example: jdbc:mysql://localhost:3306/studentdb).",
      "Q: Is Class.forName required with Connector/J 8? A: No; the driver auto-registers via the service loader, though it is still taught for clarity.",
      "Q: What is the name of the modern driver class? A: com.mysql.cj.jdbc.Driver (the old com.mysql.jdbc.Driver is deprecated).",
      "Q: What exceptions can this code throw? A: ClassNotFoundException (driver) and SQLException (connection/query)."
    ],
    notes: [
      "Exact JDBC URL / credentials may vary slightly in original handwriting; core structure and message preserved."
    ]
  },
  {
    id: "java-5",
    n: 5,
    subject: "java",
    title: "To insert data into MySQL database table using Prepared statement and JDBC in Eclipse IDE",
    date: "10/8/26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 18–49",
    aim: "To insert data into MySQL database table using Prepared statement and JDBC in Eclipse IDE.",
    problem: "Insert a new student record into the Student table of the studentdb MySQL database created in the previous experiment. Use a PreparedStatement with placeholders instead of concatenating the values into the SQL string.",
    requirements: [
      "Eclipse IDE",
      "JDK 8 or above",
      "MySQL Server 8.x with MySQL Workbench",
      "MySQL Connector/J (mysql-connector-j) on the build path"
    ],
    theory: "JDBC (Java Database Connectivity) is the standard API for connecting Java programs to relational databases. A typical JDBC program performs five steps: load the driver, create a connection, prepare a statement, execute the statement, and close the resources.\n\nA PreparedStatement is a precompiled SQL statement with ? placeholders. Values are supplied with setInt(), setString() and similar methods. This prevents SQL injection, escapes values automatically and allows the driver to reuse the parsed statement.\n\nKey differences from Statement:\n• Statement — SQL string is concatenated and parsed on every call.\n• PreparedStatement — placeholders are bound once, then executed; values cannot change the query structure.",
    algorithm: [
      "Verify that studentdb.Student exists in MySQL (run the setup script).",
      "Open Eclipse and create a Java project; add the MySQL connector JAR to the build path.",
      "Import java.sql.Connection, DriverManager and PreparedStatement.",
      "Define the JDBC URL, user and password.",
      "Write the INSERT statement with ? placeholders.",
      "Obtain the connection and PreparedStatement in a try-with-resources block.",
      "Bind parameters with setInt() and setString() (indexes start at 1).",
      "Call executeUpdate() and print the number of affected rows.",
      "Verify the inserted row with SELECT in Workbench."
    ],
    procedure: [
      "Open MySQL Workbench and execute the database_insert_setup.sql script.",
      "Create a Java project named JDBCInsert in Eclipse.",
      "Right-click the project → Build Path → Configure Build Path → Libraries → Add External JARs → select mysql-connector-j-8.x.jar.",
      "Paste insertstudent.java into the default package.",
      "Update the user and password to your MySQL root credentials.",
      "Run the program and confirm the row count printed in the console.",
      "Run SELECT * FROM Student; in Workbench to verify the record."
    ],
    code: [
      {
        file: "database_insert_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS studentdb;
USE studentdb;
CREATE TABLE IF NOT EXISTS Student (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    course VARCHAR(50) NOT NULL
);`
      },
      {
        file: "insertstudent.java",
        lang: "java",
        src: String.raw`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class insertstudent {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "root";
        String sql = "INSERT INTO Student (id, name, course) VALUES (?, ?, ?)";
        try (Connection con = DriverManager.getConnection(url, user, password);
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, 3);
            ps.setString(2, "Aarav");
            ps.setString(3, "Java");
            int rows = ps.executeUpdate();
            System.out.println(rows + " row(s) inserted into Student table.");
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "1 row(s) inserted into Student table.\nVerify with: SELECT * FROM Student;\n(Output is illustrative; the queries were not executed in this environment.)",
    explanation: "The SQL string uses three ? placeholders. Parameter indexes are 1-based, so setInt(1, 3) binds the id, setString(2, ...) binds the name and setString(3, ...) binds the course. executeUpdate() returns the number of affected rows, which is 1 for a single inserted record. DriverManager.getConnection throws SQLException on failure, so the whole block is wrapped in try-with-resources, which closes the PreparedStatement and Connection automatically even on error. Connector/J 8 registers the com.mysql.cj.jdbc.Driver automatically via the service loader, so Class.forName is no longer required.",
    result: "One new row was inserted into the Student table using a PreparedStatement, and the operation was verified with a SELECT query.",
    conclusion: "PreparedStatement is the preferred way to insert data in JDBC because it is safe from SQL injection and clearer to maintain than string-concatenated SQL. The experiment was completed successfully.",
    notes: [
      "A runnable reference implementation has been added for study. The original handwritten source for this experiment was not legible in the scanned journal, so this code is not the original classroom source.",
      "MySQL Connector/J 8 auto-loads the driver; Class.forName(\"com.mysql.cj.jdbc.Driver\") is optional and kept only for teaching.",
      "Change the root password to match your own MySQL installation. Do not commit real credentials to shared code."
    ],
    viva: [
      "Q: Why use PreparedStatement instead of Statement? A: PreparedStatement precompiles the SQL, prevents SQL injection, escapes values safely and is faster for repeated executions.",
      "Q: What do the ? marks mean? A: They are parameter placeholders that are bound at run time with setInt/setString/etc., always using 1-based indexes.",
      "Q: What does executeUpdate() return? A: An int, the number of rows affected (inserted, updated or deleted). For INSERT of one row it returns 1.",
      "Q: What is JDBC URL for MySQL? A: jdbc:mysql://host:3306/database. Example: jdbc:mysql://localhost:3306/studentdb.",
      "Q: What is try-with-resources? A: A statement that closes AutoCloseable resources (Connection, PreparedStatement) automatically, even when an exception occurs."
    ]
  },
  {
    id: "java-6",
    n: 6,
    subject: "java",
    title: "Perform UPDATE and DELETE operation on a MySQL database Using JDBC in Eclipse",
    date: "17/8/26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 18–49",
    aim: "Perform UPDATE and DELETE operation on a MySQL database Using JDBC in Eclipse.",
    problem: "Update the course of an existing Student row and then delete a second Student row from the studentdb database, using Java and JDBC with PreparedStatement for both operations.",
    requirements: [
      "Eclipse IDE",
      "JDK 8 or above",
      "MySQL Server 8.x with MySQL Workbench",
      "MySQL Connector/J on the build path"
    ],
    theory: "DML statements INSERT, UPDATE and DELETE modify data at row level and are executed in JDBC with the executeUpdate() method, which returns the number of affected rows.\n\nUPDATE ... SET ... WHERE is used to change existing rows; DELETE FROM ... WHERE removes rows. Omitting the WHERE clause updates or deletes every row, which is a common and dangerous mistake, so the WHERE clause is mandatory in this experiment.\n\nUsing PreparedStatement binds the new values as parameters and keeps the query structure fixed; the id is bound with ? too, so the same code path works for any record.",
    algorithm: [
      "Ensure the Student table contains the example rows (run the setup script).",
      "Open Eclipse and add the MySQL connector JAR to the build path.",
      "Import java.sql.*.",
      "Define the JDBC URL, user and password.",
      "Open the connection in try-with-resources.",
      "Build UPDATE Student SET course = ? WHERE id = ? and bind values (Advanced Java, 3).",
      "Execute the update and print affected rows.",
      "Build DELETE FROM Student WHERE id = ? and bind value 4.",
      "Execute the delete and print affected rows.",
      "Verify with SELECT * FROM Student;"
    ],
    procedure: [
      "Execute the update_delete_setup.sql script in MySQL Workbench.",
      "Create a Java project UpdateDeleteJDBC; add the MySQL connector JAR.",
      "Paste update_delete.java and update the credentials.",
      "Run the program; note the number of rows affected by each statement.",
      "Verify in Workbench that id 3 now has course Advanced Java and id 4 is removed."
    ],
    code: [
      {
        file: "update_delete_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS studentdb;
USE studentdb;
CREATE TABLE IF NOT EXISTS Student (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    course VARCHAR(50) NOT NULL
);
INSERT IGNORE INTO Student (id, name, course) VALUES
(3, 'Aarav', 'Java'),
(4, 'Meera', 'Python');`
      },
      {
        file: "update_delete.java",
        lang: "java",
        src: String.raw`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class update_delete {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "root";
        String updateSql = "UPDATE Student SET course = ? WHERE id = ?";
        String deleteSql = "DELETE FROM Student WHERE id = ?";
        try (Connection con = DriverManager.getConnection(url, user, password)) {
            try (PreparedStatement ps = con.prepareStatement(updateSql)) {
                ps.setString(1, "Advanced Java");
                ps.setInt(2, 3);
                System.out.println("UPDATE affected " + ps.executeUpdate() + " row(s).");
            }
            try (PreparedStatement ps = con.prepareStatement(deleteSql)) {
                ps.setInt(1, 4);
                System.out.println("DELETE affected " + ps.executeUpdate() + " row(s).");
            }
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "UPDATE affected 1 row(s).\nDELETE affected 1 row(s).\nVerify with: SELECT * FROM Student;\n(Output is illustrative; the queries were not executed in this environment.)",
    explanation: "Two independent PreparedStatements are used so each operation can be measured separately. The UPDATE binds the new course first and the id second, matching the left-to-right order of the ? placeholders. Both use executeUpdate(), which returns the number of rows changed. Each statement is executed inside its own try-with-resources block so the PreparedStatement is closed before the outer Connection block exits. The WHERE clause is present in both statements, protecting the rest of the table.",
    result: "The course of the target record was updated and the second record was deleted successfully using JDBC.",
    conclusion: "UPDATE and DELETE in JDBC are executed with executeUpdate() and always require a WHERE clause to avoid affecting every row. Using PreparedStatement for both operations keeps the code safe and simple. The experiment was completed successfully.",
    notes: [
      "A runnable reference implementation has been added for study. The original handwritten source for this experiment was not legible in the scanned journal, so this code is not the original classroom source.",
      "Omitting WHERE from UPDATE or DELETE modifies every row; always double-check the clause before running.",
      "Row counts are printed so the effect of each statement can be confirmed without opening Workbench."
    ],
    viva: [
      "Q: What method executes UPDATE and DELETE in JDBC? A: executeUpdate(), which returns the number of affected rows.",
      "Q: Why is WHERE important in UPDATE and DELETE? A: Without it, every row in the table is updated or deleted.",
      "Q: What is the difference between executeQuery() and executeUpdate()? A: executeQuery() runs SELECT and returns a ResultSet; executeUpdate() runs INSERT/UPDATE/DELETE (or DDL) and returns an int row count.",
      "Q: How do you bind a value to the second placeholder? A: With the 1-based index, e.g. setInt(2, 3) binds the second ?.",
      "Q: How can you confirm the changes after running the program? A: Run SELECT * FROM Student; in MySQL Workbench."
    ]
  },
  {
    id: "java-7",
    n: 7,
    subject: "java",
    title: "To establish communication between client and server Using Java Socket Programming in Eclipse",
    date: "18/8/26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 18–49",
    aim: "To establish communication between client and server Using Java Socket Programming in Eclipse",
    problem: "Write a Java TCP client and server pair. The server listens on port 5000, accepts one client, reads a single line and replies with a greeting; the client sends a message typed on the console and prints the reply.",
    requirements: [
      "Eclipse IDE",
      "JDK 8 or above",
      "Two console views or two terminal windows"
    ],
    theory: "Sockets are endpoints of a two-way communication link between two programs running on a network. In Java, the server side uses ServerSocket to listen for incoming connections; each accepted connection is represented by a Socket. The client side connects directly with new Socket(host, port).\n\nFor text-based exchange, readers and writers are convenient: BufferedReader wraps InputStreamReader for the binary-to-character decoding of the socket stream, and PrintWriter wraps the OutputStream with automatic line flushing.\n\nTCP guarantees ordered, reliable delivery, so every byte written by one side is received by the other in order or not at all.",
    algorithm: [
      "Create textserver.java: open a ServerSocket on port 5000.",
      "Server prints a waiting message, then blocks on accept().",
      "On connection, server reads one line from the client.",
      "Server replies with a greeting and prints the session to its console.",
      "Create textclient.java: connect to localhost:5000.",
      "Client reads a line from standard input, sends it, waits for the reply and prints it.",
      "Run the server first, then the client."
    ],
    procedure: [
      "Create a Java project SocketLab and add both files to the src folder.",
      "Run textserver.java first; it prints a waiting message.",
      "Run textclient.java in a second console; type a message and press Enter.",
      "Observe the reply in the client console and the logged message in the server console.",
      "Close both programs with Ctrl+C."
    ],
    code: [
      {
        file: "textserver.java",
        lang: "java",
        src: String.raw`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
public class textserver {
    public static void main(String[] args) {
        try (ServerSocket server = new ServerSocket(5000)) {
            System.out.println("Server listening on port 5000...");
            try (Socket socket = server.accept();
                 BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                 PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {
                System.out.println("Client connected: " + socket.getInetAddress().getHostAddress());
                String line = in.readLine();
                System.out.println("Client says: " + line);
                out.println("Hello from server!");
            }
        } catch (IOException e) {
            System.out.println("Server error: " + e.getMessage());
        }
    }
}`
      },
      {
        file: "textclient.java",
        lang: "java",
        src: String.raw`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;
public class textclient {
    public static void main(String[] args) {
        String host = "localhost";
        int port = 5000;
        try (Socket socket = new Socket(host, port);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             Scanner console = new Scanner(System.in)) {
            System.out.print("Enter message: ");
            String message = console.nextLine();
            out.println(message);
            System.out.println("Server says: " + in.readLine());
        } catch (IOException e) {
            System.out.println("Client error: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "Server console:\nServer listening on port 5000...\nClient connected: 127.0.0.1\nClient says: Hello server\n\nClient console:\nEnter message: Hello server\nServer says: Hello from server!\n(Output is illustrative; the programs were not executed in this environment.)",
    explanation: "The server opens ServerSocket(5000) and blocks on accept() until a client connects. Each side wraps the socket streams in a BufferedReader/PrintWriter pair for text lines. try-with-resources closes the socket and streams automatically. The client reads from System.in with Scanner, sends one line with out.println (autflush is on because of the true argument), then waits for the single-line server reply with in.readLine().",
    result: "A message was successfully sent from the client to the server, and the server responded with a greeting over a TCP socket connection.",
    conclusion: "TCP sockets provide a reliable, ordered byte stream between two programs. The ServerSocket/Socket pair completely abstracts the network layer, leaving only ordinary stream I/O to the programmer. The experiment was completed successfully.",
    notes: [
      "A runnable reference implementation has been added for study. The original handwritten source for this experiment was not legible in the scanned journal, so this code is not the original classroom source.",
      "Run the server before the client; otherwise the client gets Connection refused.",
      "Port 5000 must be free on the machine; change it in both programs if another application uses it."
    ],
    viva: [
      "Q: What is the difference between ServerSocket and Socket? A: ServerSocket listens and accepts connections; Socket represents one established connection used for I/O.",
      "Q: Why does the client need the port number? A: The server listens on a fixed port, and the client must connect to the same port to reach that service.",
      "Q: What does accept() do? A: It blocks until a client connects and returns a Socket for that connection.",
      "Q: What happens if the server is not running when the client starts? A: The client throws ConnectException: Connection refused.",
      "Q: Why PrintWriter with true? A: The boolean enables auto-flush, so each println() is sent immediately without calling flush() manually."
    ]
  },
  {
    id: "java-8",
    n: 8,
    subject: "java",
    title: "To demonstrate the use of Java's URL and InetAddress classes to obtain website and IP address information Using Eclipse IDE",
    date: "31/8/26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 18–49",
    aim: "To demonstrate the use of Java's URL and InetAddress classes to obtain website and IP address information Using Eclipse IDE.",
    problem: "Write a Java program that parses a URL into its components (protocol, host, port, path, file, query) and prints the IP address(es) for the host plus the local machine's host name and addresses, using java.net.URL and java.net.InetAddress.",
    requirements: [
      "Eclipse IDE",
      "JDK 8 or above",
      "Internet connectivity for name resolution (example.com is used as a neutral, public test host)"
    ],
    theory: "java.net.URL represents a Uniform Resource Locator. Parsing a URL string exposes its parts through getProtocol(), getHost(), getPort(), getPath(), getFile(), getQuery() and getAuthority(). The URL class never contacts the network during parsing; it only splits the string according to RFC 3986 syntax.\n\njava.net.InetAddress represents an IP address (or host name). It is created by name lookup: InetAddress.getByName(host) performs DNS resolution and returns one address; InetAddress.getAllByName(host) returns every address (IPv4 and IPv6). getLocalHost() describes the local machine. The address is printed as a quad such as 93.184.215.14.\n\nThese two classes are the foundation for HTTP clients, remote diagnostics and simple network tools.",
    algorithm: [
      "Create urlinfo.java.",
      "Create a URL for https://example.com/index.html?course=java.",
      "Print protocol, host, port, path, file, query and authority.",
      "Call InetAddress.getAllByName(\"example.com\") and print every address.",
      "Call InetAddress.getLocalHost() and print the local host name and address.",
      "Wrap network calls in try/catch (MalformedURLException, UnknownHostException).",
      "Check the printed values against a browser or the nslookup command."
    ],
    procedure: [
      "Create project UrlInfo in Eclipse; add urlinfo.java.",
      "Run the program and note the parsed URL parts.",
      "Run nslookup example.com in a terminal and compare the IP address(es).",
      "Disconnect the network and re-run; observe the UnknownHostException message."
    ],
    code: [
      {
        file: "urlinfo.java",
        lang: "java",
        src: String.raw`import java.net.InetAddress;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.UnknownHostException;
public class urlinfo {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://example.com/index.html?course=java");
            System.out.println("Protocol  : " + url.getProtocol());
            System.out.println("Host      : " + url.getHost());
            System.out.println("Port      : " + url.getPort());
            System.out.println("Authority : " + url.getAuthority());
            System.out.println("Path      : " + url.getPath());
            System.out.println("File      : " + url.getFile());
            System.out.println("Query     : " + url.getQuery());
        } catch (MalformedURLException e) {
            System.out.println("Invalid URL: " + e.getMessage());
        }
        try {
            InetAddress[] addresses = InetAddress.getAllByName("example.com");
            for (InetAddress address : addresses) {
                System.out.println("example.com -> " + address.getHostAddress());
            }
            InetAddress local = InetAddress.getLocalHost();
            System.out.println("Local host: " + local.getHostName() + " -> " + local.getHostAddress());
        } catch (UnknownHostException e) {
            System.out.println("Name resolution failed: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "Protocol  : https\nHost      : example.com\nPort      : -1\nAuthority : example.com\nPath      : /index.html\nFile      : /index.html?course=java\nQuery     : course=java\nexample.com -> 93.184.215.14\nLocal host: <machine-name> -> 192.168.x.x\n(Output is illustrative; DNS results vary by network and were not executed in this environment.)",
    explanation: "getPort() returns -1 when the URL uses the default port for the protocol (https implies 443). getFile() includes the query string, while getPath() and getQuery() split it. getAllByName performs DNS lookup and may return several addresses; iterating prints every one. The local host is resolved separately with getLocalHost(). MalformedURLException is checked and must be caught when the URL is created; UnknownHostException wraps DNS failures.",
    result: "The URL components and the IP address of a remote host plus the local machine were obtained programmatically using java.net.URL and java.net.InetAddress.",
    conclusion: "URL parsing and DNS resolution are built into the Java platform; both are essential building blocks for any networked application. The experiment was completed successfully.",
    notes: [
      "A runnable reference implementation has been added for study. The original handwritten source for this experiment was not legible in the scanned journal, so this code is not the original classroom source.",
      "Port -1 means the default port is in use (443 for HTTPS, 80 for HTTP), not that there is no port.",
      "DNS responses change over time and across networks; the printed IP address will differ on each machine."
    ],
    viva: [
      "Q: What is the difference between URL and URI? A: A URL is a URI that also locates the resource (scheme + host + path); every URL is a URI, but not every URI is a URL.",
      "Q: What does getPort() return for https://example.com/page? A: -1, meaning the default port for the protocol (443) is used.",
      "Q: Difference between getPath() and getFile()? A: getFile() = path + query string; getPath() returns only the path.",
      "Q: What does InetAddress.getByName() throw? A: UnknownHostException if the host name cannot be resolved, and it is a checked exception.",
      "Q: How is DNS resolution exposed in Java? A: Through InetAddress; getByName returns one address and getAllByName returns all (IPv4/IPv6) addresses."
    ]
  },
  {
    id: "java-9",
    n: 9,
    subject: "java",
    title: "To transfer a text file between client and server",
    date: "08-9-26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 18–49",
    aim: "To transfer a text file between client and server",
    problem: "Write a Java program that sends a text file from a client to a server over a TCP socket. The server writes the received bytes to received_text.txt and acknowledges the client.",
    requirements: [
      "Eclipse IDE",
      "JDK 8 or above",
      "A sample text file (e.g. sample.txt) in the client project",
      "Two console views or two terminal windows"
    ],
    theory: "A TCP socket is a reliable, ordered byte stream. To transfer a file, the sender streams the raw bytes of the file into the socket's OutputStream, and the receiver reads those same bytes from its InputStream and writes them into a new file.\n\nFiles are transferred in chunks (a byte buffer) rather than all at once, because files can be larger than available memory. After the client finishes writing it calls shutdownOutput(), which sends an end-of-stream marker so the server knows the file is complete; without it the server would wait forever for more bytes.\n\nFileOutputStream/FileInputStream (or java.nio.file.Files) handle the byte-level copy; buffered reading/writing in 8 KB blocks is the standard, efficient pattern.",
    algorithm: [
      "Create fileserver.java: open a ServerSocket on port 5001.",
      "Server accepts the connection and opens received_text.txt for writing.",
      "Server reads bytes in 8192-byte chunks until the client closes its side, writing each chunk to the file.",
      "Server counts total bytes received and sends a one-line acknowledgement.",
      "Create fileclient.java: connect to localhost:5001.",
      "Client reads sample.txt and streams all bytes into the socket.",
      "Client calls shutdownOutput(), then waits for and prints the server acknowledgement.",
      "Compare sample.txt and received_text.txt (fc file1 file2 / diff)."
    ],
    procedure: [
      "Create project FileTransfer; add both files to the src folder.",
      "Place a sample.txt next to the client code with a few lines of text.",
      "Run fileserver.java first; it waits for a connection.",
      "Run fileclient.java; it sends the file and prints the acknowledgement.",
      "Check that received_text.txt was created on the server side and matches sample.txt."
    ],
    code: [
      {
        file: "fileserver.java",
        lang: "java",
        src: String.raw`import java.io.InputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class fileserver {
    public static void main(String[] args) {
        Path target = Paths.get("received_text.txt");
        try (ServerSocket server = new ServerSocket(5001)) {
            System.out.println("File server listening on port 5001...");
            try (Socket socket = server.accept();
                 InputStream in = socket.getInputStream();
                 PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {
                byte[] buffer = new byte[8192];
                long total = 0;
                int read;
                try (java.io.OutputStream fileOut = Files.newOutputStream(target)) {
                    while ((read = in.read(buffer)) != -1) {
                        fileOut.write(buffer, 0, read);
                        total += read;
                    }
                }
                System.out.println("Received " + total + " bytes; saved to " + target.toAbsolutePath());
                out.println("File received (" + total + " bytes).");
            }
        } catch (IOException e) {
            System.out.println("Server error: " + e.getMessage());
        }
    }
}`
      },
      {
        file: "fileclient.java",
        lang: "java",
        src: String.raw`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class fileclient {
    public static void main(String[] args) {
        Path source = Paths.get("sample.txt");
        try (Socket socket = new Socket("localhost", 5001);
             OutputStream out = socket.getOutputStream();
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
            byte[] data = Files.readAllBytes(source);
            out.write(data);
            socket.shutdownOutput();
            String ack = in.readLine();
            System.out.println("Server response: " + ack);
        } catch (IOException e) {
            System.out.println("Client error: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "Server console:\nFile server listening on port 5001...\nReceived 128 bytes; saved to received_text.txt\n\nClient console:\nServer response: File received (128 bytes).\n(Output is illustrative; the programs were not executed in this environment.)",
    explanation: "The client loads sample.txt with Files.readAllBytes (fine for small text files) and writes it to the socket. shutdownOutput() signals the end of the stream so the server's read loop can terminate with -1. The server copies incoming bytes to received_text.txt in 8192-byte blocks and counts them. After the copy loop ends (stream closed by the client), the server sends one line of acknowledgement, which the client reads with readLine().",
    result: "The text file sample.txt was transferred completely from the client to the server and stored as received_text.txt without corruption.",
    conclusion: "TCP sockets stream raw bytes; by copying the file in blocks and using shutdownOutput() to mark the end of the data, any file type can be transferred reliably. The experiment was completed successfully.",
    notes: [
      "A runnable reference implementation has been added for study. The original handwritten source for this experiment was not legible in the scanned journal, so this code is not the original classroom source.",
      "For very large files prefer streaming chunks on both sides instead of Files.readAllBytes on the client.",
      "Compare the two files with fc sample.txt received_text.txt (Windows) or diff (Linux/macOS) to confirm an identical transfer."
    ],
    viva: [
      "Q: Why call shutdownOutput() after writing the file? A: It sends an end-of-stream signal so the server's read loop finishes; otherwise the server waits for more bytes forever.",
      "Q: What is the difference between TCP and UDP for file transfer? A: TCP guarantees ordered, error-free delivery, which a file needs; UDP can lose or reorder packets.",
      "Q: Why read/write in 8192-byte blocks? A: Fixed-size buffers keep memory use constant regardless of file size and are efficient for disk and network I/O.",
      "Q: What happens if the file does not exist? A: Files.readAllBytes throws NoSuchFileException, the client prints the error and the server keeps waiting; fix by verifying the path.",
      "Q: Which classes are used for byte transfer? A: OutputStream/InputStream with Files (NIO) or FileInputStream/FileOutputStream."
    ]
  },
  {
    id: "java-10",
    n: 10,
    subject: "java",
    title: "To implement simple chat using UDP Socket",
    date: "22-9-26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 18–49",
    aim: "To implement simple chat using UDP Socket",
    problem: "Build a two-way chat program using UDP datagrams. The same program is launched twice in two terminals with different ports; messages typed in one window appear in the other.",
    requirements: [
      "Eclipse IDE or any terminal with JDK 8+",
      "Two console views or two terminal windows"
    ],
    theory: "UDP (User Datagram Protocol) is a connectionless transport. Each message is wrapped in a DatagramPacket and sent with DatagramSocket.send(); the receiver blocks on DatagramSocket.receive() and reads the packet.\n\nUDP does not guarantee delivery, order or duplication protection, so chat users may see lost or reordered messages; this is the teaching point of this experiment. UDP is suitable for low-latency, loss-tolerant traffic such as chat demos, voice and game state.\n\nThe example uses one program in two instances: each instance owns one port, sends to the other instance's port, and prints incoming packets from a receiver thread so sending and receiving happen at the same time.",
    algorithm: [
      "Create udpchat.java taking three arguments: localPort, peerPort, name.",
      "Open a DatagramSocket on localPort.",
      "Start a daemon receiver thread that loops on receive() and prints messages.",
      "The main thread loops: read a line from standard input.",
      "Prefix the line with the sender name, convert to bytes and send a DatagramPacket to peerPort.",
      "Type bye to exit; close the socket.",
      "Launch in terminal 1: java udpchat 6001 6002 Alice",
      "Launch in terminal 2: java udpchat 6002 6001 Bob"
    ],
    procedure: [
      "Create project UdpChat; add udpchat.java.",
      "Open two terminals in the project directory.",
      "Terminal 1: java udpchat 6001 6002 Alice",
      "Terminal 2: java udpchat 6002 6001 Bob",
      "Type messages in both terminals and observe the peer console.",
      "Type bye to close each instance."
    ],
    code: [
      {
        file: "udpchat.java",
        lang: "java",
        src: String.raw`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
public class udpchat {
    public static void main(String[] args) throws Exception {
        if (args.length != 3) {
            System.out.println("Usage: java udpchat <localPort> <peerPort> <name>");
            return;
        }
        int localPort = Integer.parseInt(args[0]);
        int peerPort = Integer.parseInt(args[1]);
        String name = args[2];
        DatagramSocket socket = new DatagramSocket(localPort);
        InetAddress peer = InetAddress.getByName("localhost");
        Thread receiver = new Thread(() -> {
            byte[] buf = new byte[512];
            while (true) {
                try {
                    DatagramPacket packet = new DatagramPacket(buf, buf.length);
                    socket.receive(packet);
                    System.out.println("\n" + new String(packet.getData(), 0, packet.getLength()));
                } catch (Exception e) {
                    break;
                }
            }
        });
        receiver.setDaemon(true);
        receiver.start();
        BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in));
        System.out.println(name + " is online. Type 'bye' to quit.");
        String line;
        while ((line = stdin.readLine()) != null) {
            String out = name + ": " + line;
            byte[] data = out.getBytes();
            socket.send(new DatagramPacket(data, data.length, peer, peerPort));
            if (line.equalsIgnoreCase("bye")) {
                break;
            }
        }
        socket.close();
    }
}`
      }
    ],
    output: "Terminal 1 (Alice):\nAlice is online. Type 'bye' to quit.\nHello Bob\nBob: Hi Alice\n\nTerminal 2 (Bob):\nBob is online. Type 'bye' to quit.\nAlice: Hello Bob\nHi Alice\n(Output is illustrative; only localhost traffic was considered and the program was not executed in this environment.)",
    explanation: "Each instance owns one port via new DatagramSocket(localPort). The receiver thread blocks on receive() and prints whatever arrives, so it never blocks the typing loop. The main thread reads stdin, prefixes the sender name, converts the message to bytes and wraps it in a DatagramPacket addressed to (localhost, peerPort). UDP has no delivery guarantee or order; the daemon receiver thread keeps the program responsive and exits automatically when the main thread closes the socket.",
    result: "Two instances of the program exchanged chat messages bidirectionally over UDP on the local machine.",
    conclusion: "UDP trades reliability for low latency and simplicity. DatagramSocket and DatagramPacket are enough to build real-time, message-oriented applications such as chat demos, at the cost of possible message loss. The experiment was completed successfully.",
    notes: [
      "A runnable reference implementation has been added for study. The original handwritten source for this experiment was not legible in the scanned journal, so this code is not the original classroom source.",
      "UDP may drop or reorder packets; this is expected and is the reason TCP is preferred for file transfer (Experiment 9).",
      "Use ports 6001 and 6002 (or any two free ports above 1024); both instances must run on the same machine for localhost communication."
    ],
    viva: [
      "Q: What is the difference between TCP and UDP? A: TCP is connection-oriented, reliable and ordered; UDP is connectionless, unreliable and unordered but faster and simpler.",
      "Q: What classes implement UDP in Java? A: DatagramSocket (send/receive) and DatagramPacket (the message plus addressing).",
      "Q: Why a separate receiver thread? A: receive() blocks; without a thread the main loop could not read keyboard input while waiting for a packet.",
      "Q: Are chat messages guaranteed to arrive? A: No. UDP can drop packets; for guaranteed delivery use TCP.",
      "Q: What is the maximum UDP datagram size? A: 65507 bytes of payload over IPv4 (65535 minus IP and UDP headers)."
    ]
  }
];
