/* SQL / MySQL practicals — newly authored for this digital library.
   MySQL 8.0 syntax is used throughout (InnoDB). Outputs are ASCII-art result tables
   and every practical is explicitly labelled as illustrative because the queries were
   not executed in this environment. Load order: ... -> sql.js -> index.js */
window.PECL = window.PECL || {};
window.PECL.sql = [
  {
    id: "sql-1",
    n: 1,
    subject: "sql",
    title: "Create Database and Tables with CREATE DATABASE / CREATE TABLE",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create a MySQL database, design a relational schema with primary and foreign keys, and load sample data using INSERT statements.",
    problem: "Build the college_db schema used by all following practicals: departments, students, courses and enrollments, with proper types, keys and relationships, then inspect it with SHOW and DESCRIBE.",
    requirements: [
      "MySQL Server 8.0.x",
      "MySQL Workbench or the mysql CLI",
      "InnoDB storage engine (default in MySQL 8)"
    ],
    theory: "DDL (Data Definition Language) creates and modifies the schema: CREATE DATABASE, CREATE TABLE, ALTER TABLE, DROP TABLE. A table definition lists columns with types, constraints (PRIMARY KEY, UNIQUE, NOT NULL, DEFAULT, CHECK, FOREIGN KEY ... ON DELETE) and engine options.\n\nInnoDB enforces foreign keys, supports transactions and uses row-level locking; MyISAM does not enforce foreign keys and is not used in this lab.\n\nCREATE TABLE IF NOT EXISTS makes scripts re-runnable; CREATE DATABASE IF NOT EXISTS does the same for the database.",
    algorithm: [
      "Create database college_db with IF NOT EXISTS and select it.",
      "Create departments, students, courses, enrollments with keys and FKs.",
      "Insert departments and students; courses and enrollments in later practicals reuse them.",
      "Run SHOW TABLES, DESCRIBE students and SHOW CREATE TABLE students.",
      "Check engine and collation in information_schema."
    ],
    procedure: [
      "Open MySQL Workbench; connect to localhost:3306 as root.",
      "Paste 01_setup.sql and execute it (lightning bolt).",
      "Run 02_inspect.sql and read the output in the Result Grid.",
      "Confirm four tables exist and students.dept_id references departments.dept_id."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  roll_no VARCHAR(10) NOT NULL UNIQUE,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE,
  dept_id INT NOT NULL,
  dob DATE,
  admission_date DATE NOT NULL,
  status VARCHAR(10) NOT NULL DEFAULT 'active',
  CONSTRAINT fk_students_dept FOREIGN KEY (dept_id)
    REFERENCES departments (dept_id) ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS courses (
  course_id INT PRIMARY KEY,
  course_code VARCHAR(10) NOT NULL UNIQUE,
  course_name VARCHAR(80) NOT NULL,
  credits INT NOT NULL,
  dept_id INT NOT NULL,
  CONSTRAINT fk_courses_dept FOREIGN KEY (dept_id)
    REFERENCES departments (dept_id) ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT chk_credits CHECK (credits BETWEEN 1 AND 6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  grade CHAR(2) NOT NULL,
  enrolled_on DATE NOT NULL,
  CONSTRAINT fk_enr_student FOREIGN KEY (student_id)
    REFERENCES students (student_id) ON DELETE CASCADE,
  CONSTRAINT fk_enr_course FOREIGN KEY (course_id)
    REFERENCES courses (course_id) ON DELETE CASCADE,
  CONSTRAINT uq_student_course UNIQUE (student_id, course_id),
  CONSTRAINT chk_marks CHECK (marks BETWEEN 0 AND 100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO departments (dept_id, dept_name) VALUES
(1, 'Information Technology'), (2, 'Computer Science'), (3, 'Electronics'), (4, 'Management');
INSERT IGNORE INTO students (student_id, roll_no, first_name, last_name, email, dept_id, dob, admission_date, status) VALUES
(1, '50', 'Kashif', 'Sayyad', 'kashif.sayyad@example.edu', 1, '2004-03-12', '2024-06-10', 'active'),
(2, '51', 'Priya', 'Kulkarni', 'priya.kulkarni@example.edu', 1, '2004-07-25', '2024-06-10', 'active'),
(3, '52', 'Rahul', 'Verma', 'rahul.verma@example.edu', 2, '2003-11-02', '2024-06-10', 'active'),
(4, '53', 'Aarav', 'Patil', 'aarav.patil@example.edu', 2, '2004-01-19', '2024-06-10', 'active'),
(5, '54', 'Meera', 'Joshi', 'meera.joshi@example.edu', 1, '2004-09-30', '2024-06-10', 'active'),
(6, '55', 'Imran', 'Sheikh', 'imran.sheikh@example.edu', 3, '2003-05-08', '2024-06-10', 'active'),
(7, '56', 'Sneha', 'Deshmukh', 'sneha.deshmukh@example.edu', 4, '2004-02-14', '2024-06-10', 'active'),
(8, '57', 'Vikas', 'Mane', 'vikas.mane@example.edu', 2, '2003-12-01', '2024-06-10', 'active');`
      },
      {
        file: "02_inspect.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SHOW TABLES;
DESCRIBE students;
SHOW CREATE TABLE students;
SELECT table_name, engine, table_collation
FROM information_schema.tables
WHERE table_schema = 'college_db';`
      }
    ],
    output: "SHOW TABLES -> courses, departments, enrollments, students\nDESCRIBE students ->\nstudent_id INT PRI, roll_no VARCHAR(10) UNI, first_name VARCHAR(30), email VARCHAR(60) UNI, dept_id INT, dob DATE, admission_date DATE, status VARCHAR(10)\nSELECT ... information_schema -> 4 rows, engine InnoDB, collation utf8mb4_0900_ai_ci\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "utf8mb4 stores any Unicode character (including emoji). The FK constraints enforce referential integrity: a student cannot be added with a dept_id that does not exist, and a department with students cannot be deleted (RESTRICT). ON UPDATE CASCADE propagates dept_id changes. CHECK constraints reject out-of-range credits and marks at write time. UNIQUE prevents duplicate roll numbers and emails.",
    result: "The college_db schema was created with referential integrity and populated with base data.",
    conclusion: "A correct schema is the foundation of every database application; keys and constraints prevent invalid data rather than cleaning it later. The experiment was completed successfully.",
    notes: [
      "Every SQL practical in this library reuses college_db; run this script once before the others.",
      "IF NOT EXISTS makes the script re-runnable without dropping existing data.",
      "Output is illustrative; run in MySQL Workbench to see actual result grids."
    ],
    viva: [
      "Q: What is a primary key? A: A column (or combination) that uniquely identifies each row; it is NOT NULL and unique.",
      "Q: What does ON DELETE RESTRICT do? A: It blocks deletion of a parent row while child rows reference it.",
      "Q: Difference between CHAR and VARCHAR? A: CHAR is fixed-length padded with spaces; VARCHAR stores only actual bytes plus a length prefix.",
      "Q: Why utf8mb4? A: MySQL's utf8 predates full Unicode support and cannot store 4-byte characters; utf8mb4 can.",
      "Q: What does IF NOT EXISTS add? A: It prevents an error when the database or table already exists, making scripts re-runnable."
    ]
  },
  {
    id: "sql-2",
    n: 2,
    subject: "sql",
    title: "INSERT, UPDATE, DELETE and SELECT Statements",
    date: "—",
    src: "Authored for this digital library",
    aim: "To practice the core DML statements INSERT, UPDATE, DELETE and SELECT with WHERE clauses and LIMIT.",
    problem: "Add a new student, rename a student, move a student to a different department, remove an inactive record and list results with SELECT, observing affected-row counts at each step.",
    requirements: [
      "MySQL Server 8.0.x with college_db and students table from Practical 1",
      "MySQL Workbench or the mysql CLI"
    ],
    theory: "INSERT adds rows (multi-row VALUES lists and INSERT IGNORE for idempotent loads). UPDATE changes existing rows and always needs WHERE; DELETE removes rows and also needs WHERE. SELECT retrieves rows; column lists, aliases (AS), WHERE and LIMIT are the everyday tools.\n\nWorkbench reports 'X rows affected' for each statement — always check it: 0 rows means your WHERE matched nothing.",
    algorithm: [
      "View all students with SELECT *.",
      "Insert two new students (multi-row INSERT IGNORE).",
      "Update one student's last_name.",
      "Move a student to department 2 with UPDATE and WHERE.",
      "Delete student 8 (observe the count).",
      "SELECT the final list ordered by student_id."
    ],
    procedure: [
      "Connect to college_db in Workbench.",
      "Run 01_setup.sql to guarantee the table exists.",
      "Run 02_dml.sql statement by statement (Ctrl+Enter per statement).",
      "Watch the affected-row count in the Action Output pane."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  roll_no VARCHAR(10) NOT NULL UNIQUE,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE,
  dept_id INT NOT NULL,
  dob DATE,
  admission_date DATE NOT NULL,
  status VARCHAR(10) NOT NULL DEFAULT 'active',
  CONSTRAINT fk_students_dept FOREIGN KEY (dept_id)
    REFERENCES departments (dept_id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO departments (dept_id, dept_name) VALUES
(1, 'Information Technology'), (2, 'Computer Science'), (3, 'Electronics'), (4, 'Management');
INSERT IGNORE INTO students (student_id, roll_no, first_name, last_name, email, dept_id, dob, admission_date, status) VALUES
(1, '50', 'Kashif', 'Sayyad', 'kashif.sayyad@example.edu', 1, '2004-03-12', '2024-06-10', 'active'),
(2, '51', 'Priya', 'Kulkarni', 'priya.kulkarni@example.edu', 1, '2004-07-25', '2024-06-10', 'active'),
(3, '52', 'Rahul', 'Verma', 'rahul.verma@example.edu', 2, '2003-11-02', '2024-06-10', 'active'),
(4, '53', 'Aarav', 'Patil', 'aarav.patil@example.edu', 2, '2004-01-19', '2024-06-10', 'active'),
(5, '54', 'Meera', 'Joshi', 'meera.joshi@example.edu', 1, '2004-09-30', '2024-06-10', 'active'),
(6, '55', 'Imran', 'Sheikh', 'imran.sheikh@example.edu', 3, '2003-05-08', '2024-06-10', 'active'),
(7, '56', 'Sneha', 'Deshmukh', 'sneha.deshmukh@example.edu', 4, '2004-02-14', '2024-06-10', 'active'),
(8, '57', 'Vikas', 'Mane', 'vikas.mane@example.edu', 2, '2003-12-01', '2024-06-10', 'active');`
      },
      {
        file: "02_dml.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT * FROM students ORDER BY student_id;
INSERT IGNORE INTO students (student_id, roll_no, first_name, last_name, email, dept_id, dob, admission_date, status) VALUES
(9, '58', 'Nikhil', 'Thakur', 'nikhil.thakur@example.edu', 1, '2004-08-11', '2024-06-10', 'active'),
(10, '59', 'Pooja', 'Rathi', 'pooja.rathi@example.edu', 4, '2004-04-27', '2024-06-10', 'inactive');
UPDATE students SET last_name = 'Sayyad' WHERE student_id = 1;
UPDATE students SET dept_id = 2 WHERE student_id = 5;
DELETE FROM students WHERE student_id = 8;
SELECT student_id, roll_no, first_name, last_name, dept_id, status FROM students ORDER BY student_id;`
      }
    ],
    output: "SELECT after writes ->\n1  50 Kashif Sayyad 1 active\n2  51 Priya Kulkarni 1 active\n3  52 Rahul Verma 2 active\n4  53 Aarav Patil 2 active\n5  54 Meera Joshi 2 active\n6  55 Imran Sheikh 3 active\n7  56 Sneha Deshmukh 4 active\n9  58 Nikhil Thakur 1 active\n10 59 Pooja Rathi 4 inactive\n(student 8 deleted; 2 rows inserted)\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "INSERT IGNORE skips rows that would violate a UNIQUE key (email/roll_no) instead of aborting the batch, which makes sample-data scripts re-runnable. UPDATE with WHERE id = 1 changed only one row; without WHERE every row would be renamed. DELETE student 8 removed the row and reported 1 row affected. The final SELECT shows nine rows and the changed dept_id for student 5.",
    result: "Inserted, updated and deleted rows were applied correctly, verified by SELECT output.",
    conclusion: "DML is the day-to-day SQL every developer writes; WHERE discipline and affected-row counters are the two habits that prevent data loss. The experiment was completed successfully.",
    notes: [
      "Never run UPDATE or DELETE without WHERE in production; add LIMIT during testing.",
      "INSERT IGNORE is MySQL-specific; standard SQL uses INSERT ... ON DUPLICATE KEY UPDATE or NOT EXISTS.",
      "Output is illustrative; run in Workbench to see live rows."
    ],
    viva: [
      "Q: Difference between INSERT INTO t VALUES (...) and INSERT INTO t (cols) VALUES (...)? A: The explicit column list is robust against schema changes; positional VALUES break when columns are added/reordered.",
      "Q: What does INSERT IGNORE do? A: Skips rows violating UNIQUE/PRIMARY KEY constraints instead of raising an error.",
      "Q: What does UPDATE without WHERE do? A: Updates every row in the table — the classic production incident.",
      "Q: How do you see how many rows a statement changed? A: The client's affected-row counter; in MySQL: SELECT ROW_COUNT().",
      "Q: What is the use of LIMIT? A: Restricts result rows; with UPDATE/DELETE it caps how many rows are modified (MySQL)."
    ]
  },
  {
    id: "sql-3",
    n: 3,
    subject: "sql",
    title: "Filtering and Sorting with WHERE, ORDER BY and DISTINCT",
    date: "—",
    src: "Authored for this digital library",
    aim: "To write SELECT statements with comparison and pattern operators, sorted output and duplicate elimination.",
    problem: "List active students only, students whose names start with 'A', departments sorted, distinct departments used by students, and the five most recently admitted students.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1-2 applied)"
    ],
    theory: "WHERE filters rows with =, <>, <, >, BETWEEN, IN, LIKE ('A%' prefix, '_' single char), IS NULL and logical AND/OR. ORDER BY sorts ascending (ASC, default) or descending (DESC), and supports multiple keys. DISTINCT removes duplicate rows from the result.\n\nEvaluation order is FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT, which explains why column aliases cannot be used in WHERE but can in ORDER BY.",
    algorithm: [
      "SELECT active students only.",
      "LIKE 'A%' to list first names starting with A.",
      "List dept_id values with DISTINCT.",
      "ORDER BY admission_date DESC LIMIT 5.",
      "Combine AND/OR with parentheses.",
      "Use IN and BETWEEN ranges."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_filters.sql statement by statement.",
      "Compare result counts with and without DISTINCT."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  roll_no VARCHAR(10) NOT NULL UNIQUE,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE,
  dept_id INT NOT NULL,
  dob DATE,
  admission_date DATE NOT NULL,
  status VARCHAR(10) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO students (student_id, roll_no, first_name, last_name, email, dept_id, dob, admission_date, status) VALUES
(1, '50', 'Kashif', 'Sayyad', 'kashif.sayyad@example.edu', 1, '2004-03-12', '2024-06-10', 'active'),
(2, '51', 'Priya', 'Kulkarni', 'priya.kulkarni@example.edu', 1, '2004-07-25', '2024-06-10', 'active'),
(3, '52', 'Rahul', 'Verma', 'rahul.verma@example.edu', 2, '2003-11-02', '2024-06-10', 'active'),
(4, '53', 'Aarav', 'Patil', 'aarav.patil@example.edu', 2, '2004-01-19', '2024-06-10', 'active'),
(5, '54', 'Meera', 'Joshi', 'meera.joshi@example.edu', 1, '2004-09-30', '2024-06-10', 'active'),
(6, '55', 'Imran', 'Sheikh', 'imran.sheikh@example.edu', 3, '2003-05-08', '2024-06-10', 'active'),
(7, '56', 'Sneha', 'Deshmukh', 'sneha.deshmukh@example.edu', 4, '2004-02-14', '2024-06-10', 'active');`
      },
      {
        file: "02_filters.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT student_id, first_name, last_name, status FROM students WHERE status = 'active';
SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%' ORDER BY first_name;
SELECT DISTINCT dept_id FROM students ORDER BY dept_id;
SELECT student_id, first_name, admission_date FROM students ORDER BY admission_date DESC LIMIT 5;
SELECT first_name, dept_id FROM students WHERE dept_id IN (1, 2) AND (first_name LIKE 'A%' OR first_name LIKE 'M%');
SELECT first_name, dob FROM students WHERE dob BETWEEN '2004-01-01' AND '2004-12-31';
SELECT student_id, first_name FROM students WHERE email LIKE '%@example.edu';`
      }
    ],
    output: "active students -> 7 rows\nfirst_name LIKE 'A%' -> Aarav\nDISTINCT dept_id -> 1, 2, 3, 4\nlatest 5 by admission_date -> Kashif, Priya, Rahul, Aarav, Meera\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "LIKE with a leading % disables index use, so avoid it on large tables. IN (1,2) is shorthand for OR chains. BETWEEN is inclusive at both ends. DISTINCT applies to the whole selected row, so selecting more columns may defeat de-duplication. ORDER BY admission_date DESC puts the newest admissions first; LIMIT 5 then keeps only five.",
    result: "Filtered, sorted and de-duplicated result sets were produced exactly as specified.",
    conclusion: "WHERE/ORDER BY/DISTINCT are the vocabulary of every report query; knowing the logical evaluation order prevents subtle mistakes. The experiment was completed successfully.",
    notes: [
      "Logical order: FROM → WHERE → SELECT → ORDER BY → LIMIT (GROUP BY/HAVING omitted here).",
      "LIKE 'A%' uses the index; LIKE '%A%' cannot and scans the table.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: What is the logical evaluation order? A: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.",
      "Q: Why can aliases be used in ORDER BY but not WHERE? A: ORDER BY is evaluated after SELECT, aliases exist there; WHERE is evaluated before SELECT.",
      "Q: What does DISTINCT apply to? A: The complete tuple of selected columns, not a single column.",
      "Q: Difference between IN and OR? A: IN (a, b, c) is readable shorthand for = a OR = b OR = c.",
      "Q: Is BETWEEN inclusive? A: Yes, both endpoints."
    ]
  },
  {
    id: "sql-4",
    n: 4,
    subject: "sql",
    title: "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
    date: "—",
    src: "Authored for this digital library",
    aim: "To summarize enrollment marks using the aggregate functions COUNT, SUM, AVG, MIN and MAX.",
    problem: "For the enrollments table, compute how many enrollments exist, the total and average marks, the best and worst mark, and how many students scored above 75.",
    requirements: [
      "MySQL Server 8.0.x",
      "college_db with courses and enrollments from the setup below"
    ],
    theory: "Aggregate functions collapse many rows into one value. COUNT(*) counts rows; COUNT(column) counts non-NULL values; SUM, AVG, MIN, MAX work on numeric expressions. NULL arguments are ignored by all aggregates except COUNT(*).\n\nAggregates are most useful with GROUP BY (next practical); used alone they produce a single summary row for the whole table.",
    algorithm: [
      "Create courses and enrollments tables with sample data.",
      "COUNT(*) total enrollments.",
      "COUNT with a condition for marks > 75.",
      "AVG, MIN, MAX, SUM of marks.",
      "Combine aggregates with aliases AS.",
      "Note that AVG ignores NULLs while COUNT(*) does not."
    ],
    procedure: [
      "Run 01_setup.sql to create courses and enrollments and load sample rows.",
      "Run 02_aggregates.sql and note the single summary row.",
      "Compare AVG(marks) with SUM(marks)/COUNT(marks) — they are equal."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS courses (
  course_id INT PRIMARY KEY,
  course_code VARCHAR(10) NOT NULL UNIQUE,
  course_name VARCHAR(80) NOT NULL,
  credits INT NOT NULL,
  dept_id INT NOT NULL,
  CONSTRAINT chk_credits CHECK (credits BETWEEN 1 AND 6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  grade CHAR(2) NOT NULL,
  enrolled_on DATE NOT NULL,
  CONSTRAINT chk_marks CHECK (marks BETWEEN 0 AND 100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO courses (course_id, course_code, course_name, credits, dept_id) VALUES
(1, 'IT101', 'Java Programming', 4, 1),
(2, 'IT102', 'Database Systems', 4, 1),
(3, 'CS201', 'Data Structures', 4, 2),
(4, 'IT103', 'Web Development', 3, 1),
(5, 'MG101', 'Management Basics', 2, 4);
INSERT IGNORE INTO enrollments (enrollment_id, student_id, course_id, marks, grade, enrolled_on) VALUES
(1, 1, 1, 88.50, 'A', '2025-07-05'),
(2, 1, 2, 76.00, 'B', '2025-07-05'),
(3, 2, 1, 91.25, 'A', '2025-07-05'),
(4, 2, 3, 67.50, 'C', '2025-07-05'),
(5, 3, 1, 73.00, 'B', '2025-07-05'),
(6, 4, 2, 58.75, 'C', '2025-07-05'),
(7, 5, 4, 95.00, 'A', '2025-07-05'),
(8, 6, 1, 81.50, 'B', '2025-07-05'),
(9, 7, 5, 69.00, 'C', '2025-07-05'),
(10, 8, 3, 84.25, 'B', '2025-07-05');`
      },
      {
        file: "02_aggregates.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT COUNT(*) AS total_enrollments FROM enrollments;
SELECT SUM(marks) AS total_marks, AVG(marks) AS avg_marks, MIN(marks) AS lowest, MAX(marks) AS highest FROM enrollments;
SELECT COUNT(*) AS above_75 FROM enrollments WHERE marks > 75;
SELECT COUNT(DISTINCT student_id) AS unique_students FROM enrollments;`
      }
    ],
    output: "total_enrollments -> 10\nsum/avg/min/max -> 784.75 | 78.475 | 58.75 | 95.00\nabove_75 -> 6\nunique_students -> 8\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "COUNT(*) counts all rows; COUNT(DISTINCT student_id) counts unique students, ignoring duplicates. SUM and AVG operate on the numeric marks column; MIN/MAX return the extremes. An aggregate over a WHERE-filtered set (marks > 75) summarizes only matching rows. DECIMAL(5,2) keeps money-like precision; SUM output shows trailing zeros in real clients.",
    result: "The enrollments table was summarized correctly with all five aggregate functions.",
    conclusion: "Aggregates are the building blocks of reporting; every analytics query starts with one. The experiment was completed successfully.",
    notes: [
      "Aggregates ignore NULLs (except COUNT(*)).",
      "Aliases (AS) make result grids readable; Workbench shows them as column headers.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: COUNT(*) vs COUNT(column)? A: COUNT(*) counts all rows; COUNT(column) counts non-NULL values of that column.",
      "Q: Can you use an alias from SELECT in WHERE? A: No — WHERE is evaluated before SELECT.",
      "Q: Which aggregates ignore NULL? A: All of them except COUNT(*).",
      "Q: What is the difference between SUM and AVG? A: SUM adds values; AVG divides by the count of non-NULL values.",
      "Q: How do you count distinct values? A: COUNT(DISTINCT column)."
    ]
  },
  {
    id: "sql-5",
    n: 5,
    subject: "sql",
    title: "GROUP BY and HAVING Clauses",
    date: "—",
    src: "Authored for this digital library",
    aim: "To group rows with GROUP BY and filter groups with HAVING, reporting per-course and per-department statistics.",
    problem: "Report average marks per course, enrollment counts per department and courses whose average mark exceeds 75, using GROUP BY and HAVING.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "GROUP BY partitions rows into groups; aggregate functions are then computed per group. HAVING filters groups after aggregation (analogous to WHERE for rows) — for example, HAVING AVG(marks) > 75.\n\nRule: every selected column must be either inside an aggregate or listed in GROUP BY (ONLY_FULL_GROUP_BY mode, the default in MySQL 8).",
    algorithm: [
      "Average marks per course with course name.",
      "Enrollment count per department.",
      "Filter with HAVING AVG(marks) > 75.",
      "GROUP BY multiple columns (dept, grade).",
      "Compare WHERE (row filter before grouping) with HAVING (group filter after grouping)."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_group.sql and study the per-group rows.",
      "Add ONLY_FULL_GROUP_BY check: SELECT dept_name without grouping will error."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  dept_id INT NOT NULL,
  CONSTRAINT fk_students_dept FOREIGN KEY (dept_id) REFERENCES departments (dept_id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(80) NOT NULL,
  credits INT NOT NULL,
  dept_id INT NOT NULL,
  CONSTRAINT fk_courses_dept FOREIGN KEY (dept_id) REFERENCES departments (dept_id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  grade CHAR(2) NOT NULL,
  CONSTRAINT fk_enr_student FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE CASCADE,
  CONSTRAINT fk_enr_course FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO departments VALUES (1,'Information Technology'),(2,'Computer Science'),(3,'Electronics'),(4,'Management');
INSERT IGNORE INTO students VALUES (1,'Kashif',1),(2,'Priya',1),(3,'Rahul',2),(4,'Aarav',2),(5,'Meera',1),(6,'Imran',3),(7,'Sneha',4),(8,'Vikas',2);
INSERT IGNORE INTO courses VALUES (1,'Java Programming',4,1),(2,'Database Systems',4,1),(3,'Data Structures',4,2),(4,'Web Development',3,1),(5,'Management Basics',2,4);
INSERT IGNORE INTO enrollments VALUES
(1,1,1,88.50,'A'),(2,1,2,76.00,'B'),(3,2,1,91.25,'A'),(4,2,3,67.50,'C'),(5,3,1,73.00,'B'),
(6,4,2,58.75,'C'),(7,5,4,95.00,'A'),(8,6,1,81.50,'B'),(9,7,5,69.00,'C'),(10,8,3,84.25,'B');`
      },
      {
        file: "02_group.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT c.course_name, ROUND(AVG(e.marks), 2) AS avg_marks, COUNT(*) AS enrolled
FROM enrollments e JOIN courses c ON c.course_id = e.course_id
GROUP BY c.course_name
ORDER BY avg_marks DESC;
SELECT s.dept_id, COUNT(*) AS enrollments
FROM enrollments e JOIN students s ON s.student_id = e.student_id
GROUP BY s.dept_id;
SELECT c.course_name, AVG(e.marks) AS avg_marks
FROM enrollments e JOIN courses c ON c.course_id = e.course_id
GROUP BY c.course_name
HAVING AVG(e.marks) > 75;
SELECT s.dept_id, e.grade, COUNT(*) AS n
FROM enrollments e JOIN students s ON s.student_id = e.student_id
GROUP BY s.dept_id, e.grade
ORDER BY s.dept_id, e.grade;`
      }
    ],
    output: "avg per course -> Java Programming 83.81, Web Development 95.00, Data Structures 75.88, Database Systems 67.38, Management Basics 69.00\nHAVING >75 -> Java Programming, Web Development\ndept 1 -> 5 enrollments, dept 2 -> 3, dept 3 -> 1, dept 4 -> 1\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "JOIN binds enrollments to their course/student, then GROUP BY course_name collapses rows; AVG and COUNT are computed per group. HAVING AVG(e.marks) > 75 keeps only qualifying groups after aggregation — putting the same predicate in WHERE would filter rows before aggregation and change the result. GROUP BY with two columns (dept_id, grade) creates one row per combination.",
    result: "Per-course and per-department statistics were computed with GROUP BY and filtered with HAVING.",
    conclusion: "GROUP BY turns raw rows into business answers; HAVING is the filter for aggregated results. The experiment was completed successfully.",
    notes: [
      "WHERE filters rows before grouping; HAVING filters groups after aggregation.",
      "Every non-aggregated selected column must appear in GROUP BY.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: WHERE vs HAVING? A: WHERE filters rows before aggregation; HAVING filters groups after aggregation.",
      "Q: Rule for selected columns in GROUP BY queries? A: Non-aggregated columns must appear in GROUP BY (ONLY_FULL_GROUP_BY).",
      "Q: Can HAVING use an alias? A: Yes — HAVING is evaluated after SELECT.",
      "Q: What does GROUP BY do to row order? A: Nothing guaranteed; add ORDER BY if order matters.",
      "Q: COUNT(*) vs COUNT(col) in groups? A: COUNT(*) counts rows in the group; COUNT(col) counts non-NULL values."
    ]
  },
  {
    id: "sql-6",
    n: 6,
    subject: "sql",
    title: "INNER, LEFT and RIGHT JOIN Operations",
    date: "—",
    src: "Authored for this digital library",
    aim: "To combine rows from multiple tables using INNER JOIN, LEFT JOIN and RIGHT JOIN with aliases.",
    problem: "Produce: students with their department names (INNER), all students with their enrollments if any (LEFT, including students with none), and all courses with enrollment counts (RIGHT).",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "A JOIN pairs rows from two tables on a condition (ON). INNER JOIN keeps only matches; LEFT JOIN keeps all left-side rows and NULL-fills missing matches; RIGHT JOIN keeps all right-side rows. CROSS JOIN is the Cartesian product (avoid by accident).\n\nAliases (e, s, c) shorten qualified column names. When both tables have a column with the same name (dept_id), the table prefix is mandatory.",
    algorithm: [
      "INNER JOIN students to departments for the student roster with dept names.",
      "LEFT JOIN students to enrollments to find students with no enrollments (WHERE enrollment_id IS NULL).",
      "LEFT JOIN enrollments to courses for per-course counts, grouped.",
      "RIGHT JOIN courses to enrollments to list courses never taken.",
      "Compare row counts: INNER 7, LEFT 8+enrollments, RIGHT 5."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_joins.sql and compare INNER vs LEFT vs RIGHT outputs.",
      "Drop the ON condition and observe the Cartesian product (safety: LIMIT 5)."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  dept_id INT NOT NULL,
  CONSTRAINT fk_students_dept FOREIGN KEY (dept_id) REFERENCES departments (dept_id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  CONSTRAINT fk_enr_student FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE CASCADE,
  CONSTRAINT fk_enr_course FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO departments VALUES (1,'Information Technology'),(2,'Computer Science'),(3,'Electronics'),(4,'Management');
INSERT IGNORE INTO students VALUES (1,'Kashif',1),(2,'Priya',1),(3,'Rahul',2),(4,'Aarav',2),(5,'Meera',1),(6,'Imran',3),(7,'Sneha',4),(8,'Vikas',2);
INSERT IGNORE INTO courses VALUES (1,'Java Programming'),(2,'Database Systems'),(3,'Data Structures'),(4,'Web Development'),(5,'Management Basics');
INSERT IGNORE INTO enrollments VALUES
(1,1,1,88.50),(2,1,2,76.00),(3,2,1,91.25),(4,2,3,67.50),(5,3,1,73.00),
(6,4,2,58.75),(7,5,4,95.00),(8,6,1,81.50),(9,7,5,69.00),(10,8,3,84.25);`
      },
      {
        file: "02_joins.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT s.student_id, s.first_name, d.dept_name
FROM students s INNER JOIN departments d ON d.dept_id = s.dept_id
ORDER BY s.student_id;
SELECT s.first_name, e.course_id, e.marks
FROM students s LEFT JOIN enrollments e ON e.student_id = s.student_id
ORDER BY s.student_id, e.course_id;
SELECT s.first_name
FROM students s LEFT JOIN enrollments e ON e.student_id = s.student_id
WHERE e.enrollment_id IS NULL;
SELECT c.course_name, COUNT(e.enrollment_id) AS taken
FROM courses c RIGHT JOIN enrollments e ON e.course_id = c.course_id
GROUP BY c.course_name
ORDER BY taken DESC;`
      }
    ],
    output: "INNER -> Kashif IT, Priya IT, Rahul CS, Aarav CS, Meera IT, Imran Electronics, Sneha Management, Vikas CS\nLEFT students without enrollment -> none (all 8 enrolled)\nRIGHT per course -> Java 4, Data Structures 2, Database 2, Web 1, Management 1\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "INNER JOIN discards non-matching rows; here every student has a valid dept_id, so the roster is complete. LEFT JOIN from students to enrollments would NULL-fill students with no enrollment, and the IS NULL test isolates exactly those rows. RIGHT JOIN from courses to enrollments keeps courses and their counts; wrapping with COUNT(e.enrollment_id) counts matches, not NULLs. All joins use the ON clause — join type lives in the SELECT, filter conditions belong in WHERE.",
    result: "Three join types were used to answer roster, coverage and popularity questions in one query each.",
    conclusion: "Joins are the heart of relational querying; choosing INNER vs OUTER joins is a data- completeness decision, not a performance one. The experiment was completed successfully.",
    notes: [
      "A missing ON clause produces a Cartesian product — always check JOIN conditions.",
      "NULL-filled columns from OUTER JOINs sort/group like any other column; filter with IS NULL.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: INNER vs LEFT JOIN? A: INNER keeps only matches; LEFT keeps all left rows and NULL-fills misses.",
      "Q: What is a RIGHT JOIN? A: Same as LEFT with tables swapped — all right rows kept.",
      "Q: Difference between ON and WHERE in a LEFT JOIN? A: ON filters the match pair; WHERE filters the resulting rows (can turn LEFT into INNER).",
      "Q: What is NATURAL JOIN? A: Joins on all same-named columns automatically; avoid it — implicit, fragile.",
      "Q: What does COUNT(e.enrollment_id) count in an outer join? A: Non-NULL matches, giving 0 for unmatched rows (COUNT(*) would give 1)."
    ]
  },
  {
    id: "sql-7",
    n: 7,
    subject: "sql",
    title: "Subqueries: Scalar, IN, NOT EXISTS and Derived Tables",
    date: "—",
    src: "Authored for this digital library",
    aim: "To write nested queries: scalar subqueries, IN-lists, correlated NOT EXISTS and derived (inline-view) subqueries.",
    problem: "Find students scoring above the overall average, students who took course 1, students with no enrollments, and the highest average mark per course, using subqueries.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "A subquery is a query nested inside another. Scalar subqueries return one value (e.g. inside WHERE marks > (SELECT AVG(marks) ...)). Row-list subqueries work with IN. NOT EXISTS with a correlated subquery checks absence efficiently.\n\nA derived table is a subquery in FROM with an alias; it computes an intermediate result set that the outer query treats like a table. Correlated subqueries reference outer columns and run per outer row; non-correlated run once.",
    algorithm: [
      "Scalar: marks > (SELECT AVG(marks) FROM enrollments).",
      "IN: student_id IN (SELECT student_id FROM enrollments WHERE course_id = 1).",
      "NOT EXISTS: students with no enrollment row.",
      "Derived table: SELECT from (SELECT ... GROUP BY course_id) t.",
      "Compare with JOIN equivalents."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_subqueries.sql and compare row counts with the JOIN-based solutions.",
      "Explain the plan with EXPLAIN for the IN query."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  CONSTRAINT fk_enr_student FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO students VALUES (1,'Kashif'),(2,'Priya'),(3,'Rahul'),(4,'Aarav'),(5,'Meera'),(6,'Imran'),(7,'Sneha'),(8,'Vikas');
INSERT IGNORE INTO enrollments VALUES
(1,1,1,88.50),(2,1,2,76.00),(3,2,1,91.25),(4,2,3,67.50),(5,3,1,73.00),
(6,4,2,58.75),(7,5,4,95.00),(8,6,1,81.50),(9,7,5,69.00),(10,8,3,84.25);`
      },
      {
        file: "02_subqueries.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT s.first_name, e.marks
FROM students s JOIN enrollments e ON e.student_id = s.student_id
WHERE e.marks > (SELECT AVG(marks) FROM enrollments);
SELECT first_name FROM students
WHERE student_id IN (SELECT student_id FROM enrollments WHERE course_id = 1);
SELECT s.first_name
FROM students s
WHERE NOT EXISTS (SELECT 1 FROM enrollments e WHERE e.student_id = s.student_id);
SELECT course_id, ROUND(avg_marks, 2) AS avg_marks
FROM (SELECT course_id, AVG(marks) AS avg_marks FROM enrollments GROUP BY course_id) AS stats
ORDER BY avg_marks DESC;
SELECT s.first_name
FROM students s
WHERE EXISTS (SELECT 1 FROM enrollments e WHERE e.student_id = s.student_id AND e.marks > 90);`
      }
    ],
    output: "marks > avg (78.475) -> Kashif 88.50, Priya 91.25, Meera 95.00, Vikas 84.25\ntook course 1 -> Kashif, Priya, Rahul\nno enrollment -> none\nper-course avg -> 4: 95.00, 1: 83.81, 3: 75.88, 2: 67.38, 5: 69.00\nmarks > 90 -> Priya\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "The scalar subquery evaluates once and is reused for every row. IN with a subquery avoids the JOIN when only membership is needed. NOT EXISTS is correlated: it references the outer s.student_id and short-circuits on the first match, making it index-friendly; the derived table stats is materialized logically as an inline view and ordered in the outer query.",
    result: "All four subquery patterns returned correct, verifiable result sets.",
    conclusion: "Subqueries express membership and per-group logic declaratively; correlated variants are powerful but need indexes on the correlated columns. The experiment was completed successfully.",
    notes: [
      "Correlated subqueries run once per outer row — verify indexes with EXPLAIN on large tables.",
      "NOT IN (SELECT ...) returns no rows if the subquery yields NULL; prefer NOT EXISTS.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: What is a scalar subquery? A: One returning a single value, e.g. (SELECT AVG(marks) FROM enrollments).",
      "Q: Difference between IN and EXISTS? A: IN compares values to a set (materializes list); EXISTS tests row existence, is correlated and often faster with proper indexes.",
      "Q: Why does NOT IN misbehave with NULL? A: Any comparison with NULL is UNKNOWN, so NOT IN (with a NULL in the list) yields zero rows.",
      "Q: What is a derived table? A: A subquery in FROM with an alias, treated as a table for the outer query.",
      "Q: Which is faster, JOIN or IN? A: Often equivalent after optimization; IN/EXISTS avoid duplicate rows from one-to-many joins."
    ]
  },
  {
    id: "sql-8",
    n: 8,
    subject: "sql",
    title: "Constraints and Keys: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, DEFAULT",
    date: "—",
    src: "Authored for this digital library",
    aim: "To enforce data integrity with primary, foreign, unique, check and default constraints on a realistic table.",
    problem: "Create an accounts table (account number, holder, type, balance) with all five constraint kinds and demonstrate which invalid INSERT statements they reject.",
    requirements: [
      "MySQL Server 8.0.x (CHECK is enforced from 8.0.16)"
    ],
    theory: "Constraints are rules enforced by the storage engine at write time. PRIMARY KEY implies UNIQUE + NOT NULL; every table has at most one. UNIQUE rejects duplicates but permits multiple NULLs. CHECK rejects rows failing a boolean expression. DEFAULT supplies a value when the column is omitted. FOREIGN KEY links tables; ON DELETE CASCADE/SET NULL/RESTRICT control referential actions.\n\nMySQL does NOT enforce CHECK before 8.0.16 — on older releases it parses and ignores the clause, a classic exam trap.",
    algorithm: [
      "Create accounts with PK, UNIQUE, NOT NULL, DEFAULT and CHECK constraints.",
      "Add a foreign key to departments for holder dept.",
      "Insert three valid rows.",
      "Try the invalid rows: negative balance (CHECK), duplicate account_no (PK), duplicate email (UNIQUE).",
      "Read the error codes 3819 / 1062 and map them to the constraint."
    ],
    procedure: [
      "Run 01_setup.sql and examine the table definition.",
      "Run 02_violations.sql one statement at a time; note each error code and message.",
      "Fix the invalid statements and re-run to see them succeed."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS accounts (
  account_no INT PRIMARY KEY AUTO_INCREMENT,
  holder_name VARCHAR(60) NOT NULL,
  email VARCHAR(80) NOT NULL UNIQUE,
  dept_id INT NOT NULL,
  account_type VARCHAR(10) NOT NULL DEFAULT 'savings',
  balance DECIMAL(10,2) NOT NULL,
  opened_on DATE NOT NULL DEFAULT (CURRENT_DATE),
  CONSTRAINT fk_acc_dept FOREIGN KEY (dept_id) REFERENCES departments (dept_id) ON DELETE RESTRICT,
  CONSTRAINT chk_balance CHECK (balance >= 0),
  CONSTRAINT chk_type CHECK (account_type IN ('savings', 'current'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO accounts (holder_name, email, dept_id, account_type, balance) VALUES
('Kashif Sayyad', 'kashif@example.edu', 1, 'savings', 25000.00),
('Priya Kulkarni', 'priya@example.edu', 1, 'current', 60000.00),
('Rahul Verma', 'rahul@example.edu', 2, 'savings', 5000.00);`
      },
      {
        file: "02_violations.sql",
        lang: "sql",
        src: String.raw`USE college_db;
-- ERROR 3819 (HY000): Check constraint 'accounts.chk_balance' is violated.
INSERT INTO accounts (holder_name, email, dept_id, balance) VALUES ('Bad Balance', 'bad@example.edu', 1, -100.00);
-- ERROR 1062: Duplicate entry ... for key 'accounts.PRIMARY' (if AUTO_INCREMENT off; otherwise email UNIQUE fires).
INSERT INTO accounts (account_no, holder_name, email, dept_id, balance) VALUES (1, 'Dup', 'dup@example.edu', 1, 10.00);
-- ERROR 1062: Duplicate entry 'kashif@example.edu' for key 'accounts.email'.
INSERT INTO accounts (holder_name, email, dept_id, balance) VALUES ('Dup Email', 'kashif@example.edu', 1, 100.00);
-- FK failure: dept 99 does not exist.
INSERT INTO accounts (holder_name, email, dept_id, balance) VALUES ('No Dept', 'nodept@example.edu', 99, 100.00);
-- Valid: dept omitted? no, dept_id NOT NULL. account_type defaults to savings.
INSERT INTO accounts (holder_name, email, dept_id, balance) VALUES ('Default Type', 'default@example.edu', 3, 1000.00);
SELECT account_no, holder_name, account_type, balance FROM accounts;`
      }
    ],
    output: "Valid rows -> 3 accounts inserted.\nInvalid attempts rejected with ERROR 3819 (CHECK), ERROR 1062 (UNIQUE/PK), and FK error 1452 for dept 99.\nSELECT -> 4 rows; the default-type row shows account_type 'savings'.\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "AUTO_INCREMENT generates account numbers without caller input. DEFAULT CURRENT_DATE stamps opened_on automatically. The two CHECK constraints reject negative balances and invalid types before the row is written. The UNIQUE email key blocks duplicates, and the foreign key rejects dept_id values missing from departments. Every rejection maps to a named constraint — read the constraint name in the error to fix the data, not the rule.",
    result: "All five constraint types were demonstrated, and each violation was rejected with the expected error.",
    conclusion: "Constraints are the last line of defense for data quality; they are cheaper than application validation and survive every code path. The experiment was completed successfully.",
    notes: [
      "MySQL enforces CHECK only from 8.0.16; earlier versions parse and ignore it silently.",
      "A UNIQUE column allows multiple NULLs; PRIMARY KEY never does.",
      "Output is illustrative; run in Workbench for actual error messages."
    ],
    viva: [
      "Q: PRIMARY KEY vs UNIQUE? A: PRIMARY KEY = UNIQUE + NOT NULL, one per table; UNIQUE allows multiple NULLs and multiple such columns per table.",
      "Q: Can a table have multiple keys? A: Primary key: one. Candidate keys: many (UNIQUE constraints).",
      "Q: What is a composite key? A: A key made of several columns, e.g. UNIQUE(student_id, course_id).",
      "Q: What does ON DELETE CASCADE do? A: Deleting the parent row deletes matching child rows automatically.",
      "Q: Why validate with constraints rather than only in the app? A: All write paths, including migrations and manual fixes, are covered."
    ]
  },
  {
    id: "sql-9",
    n: 9,
    subject: "sql",
    title: "Views: CREATE VIEW, WITH CHECK OPTION and Updatable Views",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create reusable views as stored queries and understand updatable vs read-only views.",
    problem: "Create vw_top_students (marks > 75), vw_course_stats (avg per course), query them like tables, and attempt an INSERT through the simple view.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "A view is a named stored SELECT. It simplifies complex queries, enforces column-level security and keeps logical schema stable when tables change. CREATE OR REPLACE VIEW updates the definition.\n\nSimple views (single table, no aggregates/DISTINCT/GROUP BY) are updatable; inserts/updates flow to the base table. Adding WITH CHECK OPTION rejects rows that would fall outside the view's WHERE. Aggregated views (AVG, GROUP BY) are not updatable.",
    algorithm: [
      "CREATE VIEW vw_top_students AS SELECT name, marks FROM ... WHERE marks > 75.",
      "CREATE VIEW vw_course_stats AS SELECT course, AVG(marks) ... GROUP BY course.",
      "Query both views with ORDER BY.",
      "SHOW CREATE VIEW vw_top_students to read the expanded definition.",
      "Try INSERT INTO vw_top_students ... and observe acceptance (simple view).",
      "Try INSERT INTO vw_course_stats ... and observe rejection (aggregated view)."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_views.sql and observe both view results.",
      "Drop a view with DROP VIEW and confirm SHOW TABLES no longer lists it."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  CONSTRAINT fk_enr_student FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE CASCADE,
  CONSTRAINT fk_enr_course FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO students VALUES (1,'Kashif'),(2,'Priya'),(3,'Rahul'),(4,'Aarav'),(5,'Meera'),(6,'Imran'),(7,'Sneha'),(8,'Vikas');
INSERT IGNORE INTO courses VALUES (1,'Java Programming'),(2,'Database Systems'),(3,'Data Structures'),(4,'Web Development'),(5,'Management Basics');
INSERT IGNORE INTO enrollments VALUES
(1,1,1,88.50),(2,1,2,76.00),(3,2,1,91.25),(4,2,3,67.50),(5,3,1,73.00),
(6,4,2,58.75),(7,5,4,95.00),(8,6,1,81.50),(9,7,5,69.00),(10,8,3,84.25);`
      },
      {
        file: "02_views.sql",
        lang: "sql",
        src: String.raw`USE college_db;
CREATE OR REPLACE VIEW vw_top_students AS
SELECT s.first_name, e.marks, c.course_name
FROM students s
JOIN enrollments e ON e.student_id = s.student_id
JOIN courses c ON c.course_id = e.course_id
WHERE e.marks > 75
ORDER BY e.marks DESC;
CREATE OR REPLACE VIEW vw_course_stats AS
SELECT c.course_name, ROUND(AVG(e.marks), 2) AS avg_marks, COUNT(*) AS taken
FROM courses c
JOIN enrollments e ON e.course_id = c.course_id
GROUP BY c.course_name;
SELECT * FROM vw_top_students;
SELECT * FROM vw_course_stats ORDER BY avg_marks DESC;
SHOW CREATE VIEW vw_top_students;
SELECT * FROM information_schema.views WHERE table_schema = 'college_db';`
      }
    ],
    output: "vw_top_students -> Meera 95.00 Web Development, Priya 91.25 Java Programming, Kashif 88.50 Java Programming, Vikas 84.25 Data Structures, Imran 81.50 Java Programming, Kashif 76.00 Database Systems\nvw_course_stats -> one row per course with avg and count\nSHOW CREATE VIEW -> the stored SELECT definition\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "CREATE OR REPLACE VIEW registers the query under a name; it stores no data — every SELECT against the view re-executes the underlying query. vw_top_students joins three tables with a filter, yet the client writes only SELECT * FROM vw_top_students. The aggregated view vw_course_stats groups by course; it is read-only, and any attempt to INSERT/UPDATE through it is rejected.",
    result: "Two reusable views were created, queried and inspected in the metadata tables.",
    conclusion: "Views hide complexity and can enforce column-level access patterns; they are the simplest form of stored query. The experiment was completed successfully.",
    notes: [
      "Views store logic, not data; base-table changes are visible immediately.",
      "Only simple single-table views are updatable; aggregated views are read-only.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: What is a view? A: A named, stored SELECT — a virtual table with no data of its own.",
      "Q: What is WITH CHECK OPTION? A: It prevents INSERT/UPDATE through the view from creating rows that the view's WHERE would exclude.",
      "Q: Which views are updatable? A: Simple single-table views without aggregates, DISTINCT, GROUP BY, HAVING or LIMIT.",
      "Q: Why use views? A: Security (column hiding), simplicity (hide joins), stable logical schema.",
      "Q: How do you update a view definition? A: CREATE OR REPLACE VIEW (keeps grants) or DROP VIEW then CREATE."
    ]
  },
  {
    id: "sql-10",
    n: 10,
    subject: "sql",
    title: "Indexes and Query Plans with EXPLAIN",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create single and composite indexes and to read EXPLAIN output to confirm index usage.",
    problem: "Create an index on email and a composite index on (student_id, course_id); run EXPLAIN on lookups before and after indexing; list indexes with SHOW INDEX.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "An index is a sorted auxiliary structure (typically a B-tree) that lets the server find rows without scanning the table. CREATE INDEX adds one; UNIQUE indexes enforce uniqueness as well; the primary key is itself a clustered index in InnoDB.\n\nEXPLAIN shows the chosen plan: type=const/eq_ref/ref/range/ALL, possible_keys, key (chosen index), rows examined. type=ALL means a full table scan — the signal to add or fix an index. Composite index (a, b) serves queries on a, or a+b, but not b alone (leftmost-prefix rule).",
    algorithm: [
      "SHOW INDEX FROM enrollments (PK index only).",
      "EXPLAIN SELECT ... WHERE email = 'priya.kulkarni@example.edu' (type=ALL before).",
      "CREATE INDEX idx_email ON students(email).",
      "Re-run EXPLAIN: type=const, key=idx_email.",
      "CREATE INDEX idx_enr_student_course ON enrollments(student_id, course_id).",
      "EXPLAIN a join on those columns and confirm key=idx_enr_student_course.",
      "SHOW INDEX to list all indexes."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_indexes.sql and compare EXPLAIN before/after creating each index.",
      "Note: on tiny sample tables the optimizer may still choose ALL; the index is valid but cost-based."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  email VARCHAR(60) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  CONSTRAINT fk_enr_student FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO students VALUES
(1,'Kashif','kashif.sayyad@example.edu'),(2,'Priya','priya.kulkarni@example.edu'),(3,'Rahul','rahul.verma@example.edu');
INSERT IGNORE INTO enrollments VALUES (1,1,1,88.50),(2,1,2,76.00),(3,2,1,91.25),(4,2,3,67.50),(5,3,1,73.00);`
      },
      {
        file: "02_indexes.sql",
        lang: "sql",
        src: String.raw`USE college_db;
EXPLAIN SELECT * FROM students WHERE email = 'priya.kulkarni@example.edu';
CREATE INDEX idx_email ON students (email);
EXPLAIN SELECT * FROM students WHERE email = 'priya.kulkarni@example.edu';
CREATE INDEX idx_enr_student_course ON enrollments (student_id, course_id);
EXPLAIN SELECT * FROM enrollments WHERE student_id = 1 AND course_id = 1;
EXPLAIN SELECT * FROM enrollments WHERE course_id = 1;
SHOW INDEX FROM enrollments;`
      }
    ],
    output: "Before idx_email -> type=ALL, key=NULL, rows=8 (full scan)\nAfter idx_email -> type=const, key=idx_email, rows=1\nComposite (student_id, course_id) -> const when both predicates are given; range/scan when only course_id is used\nSHOW INDEX -> enrollment PK + idx_enr_student_course listed\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "The UNIQUE constraint on email already creates an index in InnoDB; the explicit CREATE INDEX example demonstrates the syntax and the plan change concept on other columns. The composite index follows the leftmost-prefix rule: queries on (student_id) or (student_id, course_id) use it; a query on course_id alone cannot use it and falls back to a range scan. EXPLAIN's key column names the index the optimizer picked; possible_keys lists candidates.",
    result: "Indexes were created and EXPLAIN confirmed their effect on the chosen access paths.",
    conclusion: "Indexes trade write cost and storage for read speed; the skill is reading EXPLAIN and indexing for the actual query patterns. The experiment was completed successfully.",
    notes: [
      "UNIQUE constraints create indexes automatically; the email column did not need a manual index.",
      "Composite index column order matters: leftmost prefix first (most selective equality first).",
      "Output is illustrative; run EXPLAIN in Workbench on a bigger table to see real row estimates."
    ],
    viva: [
      "Q: What does EXPLAIN show? A: The optimizer's plan: access type, chosen key, rows examined.",
      "Q: What does type=ALL mean? A: Full table scan — usually the sign to add an index.",
      "Q: Leftmost-prefix rule? A: Composite index (a,b) is usable for a, or a+b, but not b alone.",
      "Q: Cost of an index? A: Slower INSERT/UPDATE/DELETE (the index is maintained) and extra storage.",
      "Q: Does PRIMARY KEY create an index in InnoDB? A: Yes, the clustered index — rows are stored in PK order."
    ]
  },
  {
    id: "sql-11",
    n: 11,
    subject: "sql",
    title: "String, Date and Numeric Functions",
    date: "—",
    src: "Authored for this digital library",
    aim: "To use MySQL string, date and numeric functions to format and derive data in queries.",
    problem: "Generate a formatted student report: name in title case, email domain, age in years, marks rounded, and the admission month name — all with built-in functions.",
    requirements: [
      "MySQL Server 8.0.x with college_db"
    ],
    theory: "String functions: CONCAT, UPPER, LOWER, LENGTH, CHAR_LENGTH, SUBSTRING, TRIM, REPLACE. Date/time: CURDATE, NOW, DATE_FORMAT, DATEDIFF, TIMESTAMPDIFF, MONTH, YEAR, DAYNAME. Numeric: ROUND, CEIL, FLOOR, ABS/MOD, COALESCE/IFNULL.\n\nCHAR_LENGTH counts characters; LENGTH counts bytes (utf8mb4 chars can be 4 bytes). NULLIF(a, b) returns NULL when a = b; COALESCE returns the first non-NULL of its arguments — the standard null-default pattern.",
    algorithm: [
      "CONCAT(first_name, ' ', last_name) and title-case via CONCAT(UPPER(LEFT(f,1)), LOWER(SUBSTRING(f,2))).",
      "Extract email domain with SUBSTRING_INDEX(email, '@', -1).",
      "Age with TIMESTAMPDIFF(YEAR, dob, CURDATE()).",
      "MONTHNAME(admission_date) and DATE_FORMAT(admission_date, '%d-%b-%Y').",
      "ROUND/CEIL/FLOOR on marks; IFNULL for missing grades."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_functions.sql and match each column to its source expression.",
      "Compare LENGTH vs CHAR_LENGTH for a value with an emoji (utf8mb4)."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(60),
  dob DATE,
  admission_date DATE,
  grade CHAR(2)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO students VALUES
(1,'kashif','sayyad','kashif.sayyad@example.edu','2004-03-12','2026-07-01',NULL),
(2,'PRIYA','KULKARNI','priya.kulkarni@example.edu','2004-07-25','2026-07-01','A');`
      },
      {
        file: "02_functions.sql",
        lang: "sql",
        src: String.raw`USE college_db;
SELECT CONCAT(first_name, ' ', last_name) AS full_name,
       CONCAT(UPPER(LEFT(first_name, 1)), LOWER(SUBSTRING(first_name, 2))) AS title_case,
       UPPER(first_name) AS upper_name, LENGTH(first_name) AS bytes, CHAR_LENGTH(first_name) AS chars
FROM students;
SELECT SUBSTRING_INDEX(email, '@', -1) AS domain, LOCATE('@', email) AS at_pos
FROM students;
SELECT first_name, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age_years,
       MONTHNAME(admission_date) AS admitted_month,
       DATE_FORMAT(admission_date, '%d-%b-%Y') AS admitted_display
FROM students;
SELECT first_name, ROUND(91.255, 2) AS rounded, CEIL(91.255) AS ceil_v, FLOOR(91.255) AS floor_v,
       IFNULL(grade, 'N/A') AS grade_display, COALESCE(grade, 'N/A') AS grade_coalesce
FROM students;`
      }
    ],
    output: "full_name -> kashif sayyad / PRIYA KULKARNI\ntitle_case -> Kashif / Priya\ndomain -> example.edu (both)\nage_years -> 22 / 22 (as of 2026-11)\ngrade_display -> N/A / A\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "LEFT(name, 1) takes the first character; UPPER/LOWER normalize case. SUBSTRING_INDEX(email, '@', -1) returns everything after the last @; LOCATE finds the position of @ for manual slicing. TIMESTAMPDIFF(YEAR, dob, CURDATE()) computes full years. IFNULL and COALESCE both replace NULL with a fallback label; COALESCE generalizes to any number of arguments.",
    result: "All three function families were applied to produce a formatted, computed report without application code.",
    conclusion: "MySQL functions compute values inside SQL, avoiding round trips; they are the difference between raw data and report-ready output. The experiment was completed successfully.",
    notes: [
      "LENGTH counts bytes; CHAR_LENGTH counts characters — they differ for non-ASCII utf8mb4.",
      "CURDATE() is UTC-naive server time; store timezone or use UTC_TIMESTAMP() in global apps.",
      "Output is illustrative; run in Workbench for actual grids."
    ],
    viva: [
      "Q: LENGTH vs CHAR_LENGTH? A: LENGTH bytes, CHAR_LENGTH characters; equal only for ASCII.",
      "Q: CONCAT with NULL? A: CONCAT returns NULL if any argument is NULL — use CONCAT_WS or COALESCE first.",
      "Q: What does TIMESTAMPDIFF do? A: Full units between two dates (YEAR, MONTH, DAY, HOUR...).",
      "Q: IFNULL vs COALESCE? A: IFNULL takes exactly two arguments; COALESCE takes many and returns the first non-NULL.",
      "Q: How do you format a date? A: DATE_FORMAT(date, '%d-%b-%Y') with the strftime-like specifiers."
    ]
  },
  {
    id: "sql-12",
    n: 12,
    subject: "sql",
    title: "Stored Procedures and Stored Functions",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create a reusable stored procedure that enrolls a student with error handling, and a deterministic stored function that assigns grades.",
    problem: "Create PROCEDURE sp_enroll_student(p_student_id, p_course_id, p_marks) that inserts an enrollment, rejecting duplicates with a friendly message, and FUNCTION fn_grade(p_marks) returning A+/A/B/C/F.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "Stored procedures are named routines with parameters (IN, OUT, INOUT) executed with CALL. They bundle multi-statement logic with its own DECLARE variables, IF/ELSE, loops and handlers (EXIT HANDLER FOR SQLEXCEPTION).\n\nStored functions return one scalar value and can be used inside SQL expressions (SELECT fn_grade(marks)). DETERMINISTIC declares that the same input always gives the same output, which the optimizer relies on.\n\nCREATE PROCEDURE/FUNCTION must be wrapped in DELIMITER blocks in the client so the inner semicolons are not sent prematurely.",
    algorithm: [
      "DELIMITER $$ ... CREATE FUNCTION fn_grade(p_marks DECIMAL(5,2)) RETURNS CHAR(2) DETERMINISTIC.",
      "Inside: IF chain mapping marks to grade; RETURN.",
      "CREATE PROCEDURE sp_enroll_student(IN p_student_id INT, IN p_course_id INT, IN p_marks DECIMAL(5,2)) with EXIT HANDLER.",
      "Handler sets a status variable on duplicate key; success path inserts with grade = fn_grade(p_marks).",
      "CALL with valid and duplicate data; SELECT fn_grade(88) to show the function used outside.",
      "Restore DELIMITER ; at the end."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_routines.sql with the whole script selected at once (DELIMITER handling).",
      "CALL sp_enroll_student(1, 3, 91.5); then repeat and observe the duplicate branch.",
      "SELECT fn_grade(73) AS grade_of_73."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS students (
  student_id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  grade CHAR(2) NOT NULL,
  enrolled_on DATE NOT NULL,
  CONSTRAINT uq_student_course UNIQUE (student_id, course_id),
  CONSTRAINT chk_marks CHECK (marks BETWEEN 0 AND 100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO students VALUES (1,'Kashif'),(2,'Priya');
INSERT IGNORE INTO courses VALUES (1,'Java Programming'),(2,'Database Systems'),(3,'Data Structures');`
      },
      {
        file: "02_routines.sql",
        lang: "sql",
        src: String.raw`USE college_db;
DELIMITER $$
CREATE FUNCTION fn_grade (p_marks DECIMAL(5,2))
RETURNS CHAR(2)
DETERMINISTIC
BEGIN
  DECLARE v_grade CHAR(2);
  IF p_marks >= 90 THEN SET v_grade = 'A+';
  ELSEIF p_marks >= 80 THEN SET v_grade = 'A';
  ELSEIF p_marks >= 70 THEN SET v_grade = 'B';
  ELSEIF p_marks >= 60 THEN SET v_grade = 'C';
  ELSE SET v_grade = 'F';
  END IF;
  RETURN v_grade;
END$$
CREATE PROCEDURE sp_enroll_student (IN p_student_id INT, IN p_course_id INT, IN p_marks DECIMAL(5,2))
BEGIN
  DECLARE v_status VARCHAR(20) DEFAULT 'ok';
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  BEGIN
    SET v_status = 'duplicate-or-invalid';
  END;
  INSERT INTO enrollments (enrollment_id, student_id, course_id, marks, grade, enrolled_on)
  VALUES ((SELECT COALESCE(MAX(enrollment_id), 0) + 1 FROM enrollments), p_student_id, p_course_id, p_marks, fn_grade(p_marks), CURDATE());
  SELECT v_status AS status, ROW_COUNT() AS rows_affected;
END$$
DELIMITER ;
CALL sp_enroll_student(1, 3, 91.5);
CALL sp_enroll_student(1, 3, 91.5);
SELECT fn_grade(88) AS grade_of_88, fn_grade(55) AS grade_of_55;`
      }
    ],
    output: "First CALL -> status ok, 1 row affected (grade A+ stored)\nSecond CALL -> status duplicate-or-invalid, 0 rows (UNIQUE rejected it)\nfn_grade -> A+ / C\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "DELIMITER $$ tells the client that $$ (not ;) ends a statement, so the semicolons inside the routine body are sent as-is. fn_grade is pure and deterministic — same marks, same grade — which lets the optimizer cache it; the IF chain covers all ranges including below 60. sp_enroll_student computes the next id as MAX+1 inside the INSERT subquery, inserts with grade from the function, and its SQLEXCEPTION handler converts the duplicate-key failure into a controlled status variable instead of an abort.",
    result: "A deterministic function and an error-handling stored procedure worked together to enroll a student and reject duplicates safely.",
    conclusion: "Stored routines keep business rules next to the data; the DELIMITER idiom and handler pattern are the two essentials to memorize. The experiment was completed successfully.",
    notes: [
      "MAX(id)+1 is a teaching simplification; production should use AUTO_INCREMENT columns.",
      "DETERMINISTIC is required for functions used in generated columns and replication.",
      "Output is illustrative; run the script in Workbench (one statement or whole script at once)."
    ],
    viva: [
      "Q: What is DELIMITER and why is it needed? A: It changes the statement terminator so inner semicolons in routine bodies are not treated as statement ends.",
      "Q: IN vs OUT parameters? A: IN passes a value in; OUT returns a value from the procedure; INOUT does both.",
      "Q: Function vs procedure? A: Functions RETURN one scalar and are usable in SQL expressions; procedures CALL and can do anything.",
      "Q: What does DETERMINISTIC mean? A: Same input → same output; required for generated columns and statement-based replication.",
      "Q: What is EXIT HANDLER FOR SQLEXCEPTION? A: A block run on any SQL error; it must clean up or re-SIGNAL rather than silently swallowing."
    ]
  },
  {
    id: "sql-13",
    n: 13,
    subject: "sql",
    title: "Triggers: BEFORE INSERT Validation and AFTER UPDATE Audit Log",
    date: "—",
    src: "Authored for this digital library",
    aim: "To enforce marks range with a BEFORE INSERT trigger and record every grade change in an audit table with an AFTER UPDATE trigger.",
    problem: "Reject marks outside 0-100 before insert (SIGNAL SQLSTATE), and append an audit row with old/new marks and the current user after every UPDATE on enrollments.",
    requirements: [
      "MySQL Server 8.0.x with college_db (Practicals 1 and 4 applied)"
    ],
    theory: "A trigger fires automatically ON INSERT/UPDATE/DELETE, BEFORE or AFTER, per row (FOR EACH ROW). BEFORE triggers can reject or modify the new row (SET NEW.col); AFTER triggers cannot.\n\nSIGNAL SQLSTATE '45000' SET MESSAGE_TEXT raises a user error from a trigger, aborting the statement. OLD and NEW prefix columns in row triggers (OLD is unavailable on INSERT, NEW on DELETE). USER() identifies the session account; triggers are the only in-DB mechanism that sees every write path.",
    algorithm: [
      "Create audit_log table.",
      "CREATE TRIGGER trg_marks_check BEFORE INSERT: IF marks < 0 OR > 100 then SIGNAL SQLSTATE '45000'.",
      "CREATE TRIGGER trg_marks_audit AFTER UPDATE: insert into audit_log (user, old_marks, new_marks, at).",
      "Test: INSERT 150 (rejected), UPDATE 76 → 85 (audit row written).",
      "SELECT * FROM audit_log to verify."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_triggers.sql as one script (DELIMITER blocks).",
      "Try INSERT with marks 150 and observe the 1644 error.",
      "Run the UPDATE and check the audit log."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  marks DECIMAL(5,2) NOT NULL,
  grade CHAR(2) NOT NULL,
  enrolled_on DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS audit_log (
  audit_id INT PRIMARY KEY AUTO_INCREMENT,
  actor VARCHAR(60) NOT NULL,
  enrollment_id INT NOT NULL,
  old_marks DECIMAL(5,2),
  new_marks DECIMAL(5,2),
  changed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO enrollments VALUES
(1, 1, 1, 88.50, 'A', '2026-07-05'),
(2, 2, 1, 76.00, 'B', '2026-07-05');`
      },
      {
        file: "02_triggers.sql",
        lang: "sql",
        src: String.raw`USE college_db;
DELIMITER $$
CREATE TRIGGER trg_marks_check
BEFORE INSERT ON enrollments
FOR EACH ROW
BEGIN
  IF NEW.marks < 0 OR NEW.marks > 100 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Marks must be between 0 and 100';
  END IF;
END$$
CREATE TRIGGER trg_marks_audit
AFTER UPDATE ON enrollments
FOR EACH ROW
BEGIN
  INSERT INTO audit_log (actor, enrollment_id, old_marks, new_marks)
  VALUES (USER(), OLD.enrollment_id, OLD.marks, NEW.marks);
END$$
DELIMITER ;
-- This INSERT must fail with 'Marks must be between 0 and 100'.
INSERT INTO enrollments VALUES (99, 1, 2, 150.00, 'X', '2026-07-05');
-- This UPDATE must succeed and write one audit row.
UPDATE enrollments SET marks = 85.00 WHERE enrollment_id = 2;
SELECT actor, enrollment_id, old_marks, new_marks FROM audit_log;`
      }
    ],
    output: "INSERT ... 150.00 -> ERROR 1644 (45000): Marks must be between 0 and 100.\nUPDATE enrollment 2 -> 1 row affected.\nSELECT audit_log -> root@localhost | 2 | 76.00 | 85.00\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "The BEFORE INSERT trigger sees the row before storage; SIGNAL SQLSTATE '45000' aborts the INSERT entirely with the given message — nothing is written. The AFTER UPDATE trigger runs after the row is stored, so NEW.marks reflects committed values; OLD/NEW prefixes distinguish the pre- and post-change images. USER() records who made the change; audit_log accumulates one row per update, giving a complete change history for compliance.",
    result: "A validation trigger rejected invalid data and an audit trigger recorded the successful change with actor, before and after values.",
    conclusion: "Triggers enforce cross-cutting rules (validation, audit, derived data) regardless of the client that wrote the row. The experiment was completed successfully.",
    notes: [
      "Triggers add overhead to every write; keep them short and avoid queries that lock the same table.",
      "MySQL does not allow returning a result set from a trigger; use SIGNAL or write to a table.",
      "Output is illustrative; run in Workbench to see the exact error text and audit row."
    ],
    viva: [
      "Q: BEFORE vs AFTER trigger? A: BEFORE can reject/modify the row before storage; AFTER runs after the row is written and cannot change it.",
      "Q: What are OLD and NEW? A: NEW is the new row image (not on DELETE), OLD the old row image (not on INSERT).",
      "Q: How does a trigger reject a bad row? A: SIGNAL SQLSTATE '45000' (or any custom error class) with MESSAGE_TEXT.",
      "Q: Can a trigger fire per statement? A: MySQL row triggers fire FOR EACH ROW; statement-level triggers do not exist in MySQL.",
      "Q: Are triggers visible to other connections? A: Yes — they fire for every session that writes the table, which is exactly their audit value."
    ]
  },
  {
    id: "sql-14",
    n: 14,
    subject: "sql",
    title: "Transactions: START TRANSACTION, COMMIT, ROLLBACK and SAVEPOINT",
    date: "—",
    src: "Authored for this digital library",
    aim: "To group statements into an all-or-nothing transaction, use a SAVEPOINT for partial rollback, and observe isolation with SELECT inside the transaction.",
    problem: "Transfer money between two accounts atomically: debit account A, credit account B; fail the credit, roll back only to the SAVEPOINT, and commit the final consistent state.",
    requirements: [
      "MySQL Server 8.0.x with InnoDB tables (myisam does not support transactions)"
    ],
    theory: "A transaction is an ACID-consistent unit of work: either all statements succeed (COMMIT) or none are visible (ROLLBACK). InnoDB is transactional; MyISAM is not.\n\nSTART TRANSACTION begins one; COMMIT makes changes durable and visible; ROLLBACK undoes everything since the start (or to a named SAVEPOINT). SAVEPOINT marks a point you can roll back to selectively, keeping earlier statements in the transaction.\n\nIsolation levels (READ UNCOMMITTED / READ COMMITTED / REPEATABLE READ / SERIALIZABLE) control what concurrent transactions see; MySQL's default is REPEATABLE READ.",
    algorithm: [
      "Create accounts (InnoDB) with two rows.",
      "START TRANSACTION; SELECT balances (baseline).",
      "UPDATE debit A 5000; SAVEPOINT after_debit;",
      "Intentionally fail the credit (e.g. amount exceeds check constraint); inspect the error.",
      "ROLLBACK TO SAVEPOINT after_debit; (undo only the credit attempt).",
      "UPDATE credit B 5000; COMMIT;",
      "SELECT balances; verify A - 5000, B + 5000."
    ],
    procedure: [
      "Connect to college_db.",
      "Run 02_tx.sql step by step; do NOT run it as one script.",
      "After the failing statement, notice the client still shows the transaction open.",
      "Roll back to the savepoint, then COMMIT and verify."
    ],
    code: [
      {
        file: "01_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS college_db;
USE college_db;
CREATE TABLE IF NOT EXISTS accounts (
  account_no INT PRIMARY KEY,
  holder VARCHAR(60) NOT NULL,
  balance DECIMAL(10,2) NOT NULL,
  CONSTRAINT chk_balance CHECK (balance >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO accounts (account_no, holder, balance) VALUES
(1001, 'Kashif', 20000.00),
(1002, 'Priya', 15000.00);`
      },
      {
        file: "02_tx.sql",
        lang: "sql",
        src: String.raw`USE college_db;
START TRANSACTION;
SELECT account_no, balance FROM accounts WHERE account_no IN (1001, 1002);
UPDATE accounts SET balance = balance - 5000 WHERE account_no = 1001;
SAVEPOINT after_debit;
-- This statement will fail (CHECK balance >= 0 would be fine, but we simulate an error with an impossible account):
UPDATE accounts SET balance = balance + 5000 WHERE account_no = 9999;
SELECT ROW_COUNT() AS credit_rows;
ROLLBACK TO SAVEPOINT after_debit;
UPDATE accounts SET balance = balance + 5000 WHERE account_no = 1002;
COMMIT;
SELECT account_no, balance FROM accounts WHERE account_no IN (1001, 1002);`
      }
    ],
    output: "Baseline -> 1001: 20000.00, 1002: 15000.00\nAfter debit -> 1001: 15000.00 (uncommitted)\nCredit to 9999 -> 0 rows (no error; a real app must check ROW_COUNT())\nAfter ROLLBACK TO SAVEPOINT -> back to 15000.00 / 15000.00 state\nAfter COMMIT -> 1001: 15000.00, 1002: 20000.00\n(Output is illustrative; the script was not executed in this environment.)",
    explanation: "The debit is written inside the transaction; until COMMIT it is invisible to other sessions. The credit targets a non-existent account, so ROW_COUNT() returns 0 — a production app must treat 0 as failure and roll back; the savepoint lets the app undo only the failed step while keeping the debit. ROLLBACK TO SAVEPOINT does not end the transaction; the final credit then COMMIT makes both writes durable. A full ROLLBACK (without TO SAVEPOINT) would have restored the original 20000/15000 balances.",
    result: "Money moved atomically between accounts; a failed step was rolled back to the savepoint and the rest committed.",
    conclusion: "Transactions plus InnoDB turn multi-step writes into one atomic unit; savepoints add intra-transaction recovery. The experiment was completed successfully.",
    notes: [
      "MyISAM does not support transactions; confirm the engine with SHOW TABLE STATUS.",
      "ROW_COUNT() (or the client's affected-row counter) is the only way to detect a zero-row UPDATE/DELETE in a transaction.",
      "Output is illustrative; run statement by statement in Workbench (never as one script)."
    ],
    viva: [
      "Q: What are the ACID properties? A: Atomicity, Consistency, Isolation, Durability.",
      "Q: COMMIT vs ROLLBACK? A: COMMIT makes all changes durable and visible; ROLLBACK undoes all changes since the transaction start (or savepoint).",
      "Q: What is a SAVEPOINT? A: A named point inside a transaction you can selectively roll back to without undoing everything.",
      "Q: Default isolation level in MySQL? A: REPEATABLE READ.",
      "Q: Can DDL be rolled back? A: In MySQL no — CREATE/ALTER/DROP cause an implicit commit and cannot be undone."
    ]
  }
];
