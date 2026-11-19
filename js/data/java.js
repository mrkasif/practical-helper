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
    objectives: [
      "To understand multithreading in Java",
      "To create threads by extending the Thread class.",
      "To execute multiple threads simultaneously.",
      "To observe Concurrent execution of threads."
    ],
    theory: "Multithreading is a feature of Java that allows multiple threads (small units of execution) to run concurrently within a program. Each thread performs a separate task independently.\n\nThe Thread class is available in the java.lang package. To create a thread:\n1. Extend the Thread class.\n2. Override the run() method.\n3. Create an object of class.\n4. Call the start() method.\n\nImportant Methods\n• start() — Starts a new thread.\n• run() — Contains the code executed by the thread.\n• sleep() — Pauses a thread for a specified time.\n• getName() — Returns the thread name.\n• setPriority() — Sets thread priority.",
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
    result: "Multiple threads were successfully created by extending the Thread class and executed concurrently.",
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
    output: null,
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
    result: "Thread priorities and sleep() method successfully demonstrated.",
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
    result: "Successfully established connection between Java program and MySQL database using JDBC.",
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
    code: [],
    notes: [
      "Transcription Note: Uses PreparedStatement, setString parameters, executeUpdate for INSERT. Partial OCR available from pages 19-23.",
      "Full line-by-line Java source, complete algorithm, and exact console output from the handwritten pages of this experiment could not be recovered with high confidence via automatic OCR of the scanned images. The AIM is taken verbatim from the original index. No code has been invented."
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
    code: [],
    notes: [
      "Transcription Note: PreparedStatement for DELETE / UPDATE on register table. Partial code visible in OCR of later pages.",
      "Full line-by-line Java source, complete algorithm, and exact console output from the handwritten pages of this experiment could not be recovered with high confidence via automatic OCR of the scanned images. The AIM is taken verbatim from the original index. No code has been invented."
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
    code: [],
    notes: [
      "Transcription Note: ServerSocket / Socket based client-server communication.",
      "Full line-by-line Java source, complete algorithm, and exact console output from the handwritten pages of this experiment could not be recovered with high confidence via automatic OCR of the scanned images. The AIM is taken verbatim from the original index. No code has been invented."
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
    code: [],
    notes: [
      "Transcription Note: java.net.URL and java.net.InetAddress usage.",
      "Full line-by-line Java source, complete algorithm, and exact console output from the handwritten pages of this experiment could not be recovered with high confidence via automatic OCR of the scanned images. The AIM is taken verbatim from the original index. No code has been invented."
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
    code: [],
    notes: [
      "Transcription Note: File transfer over sockets.",
      "Full line-by-line Java source, complete algorithm, and exact console output from the handwritten pages of this experiment could not be recovered with high confidence via automatic OCR of the scanned images. The AIM is taken verbatim from the original index. No code has been invented."
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
    code: [],
    notes: [
      "Transcription Note: DatagramSocket / DatagramPacket based simple chat.",
      "Full line-by-line Java source, complete algorithm, and exact console output from the handwritten pages of this experiment could not be recovered with high confidence via automatic OCR of the scanned images. The AIM is taken verbatim from the original index. No code has been invented."
    ]
  }
];
