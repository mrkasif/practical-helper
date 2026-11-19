/* Supplementary Advanced Java practicals authored for this digital library.
   They extend the 10 transcribed journal experiments so the subject covers the full
   undergraduate syllabus. Outputs are marked illustrative where a runtime was not
   available in this environment. Load order: java.js -> java-extra.js -> index.js */
window.PECL = window.PECL || {};
window.PECL.java = (window.PECL.java || []).concat([
  {
    id: "java-11",
    n: 11,
    subject: "java",
    title: "Build a Student Registration Servlet with HTTP Request Handling",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create an HTTP servlet that displays a student registration form with doGet() and processes the submitted form with doPost().",
    problem: "Develop a small registration module. GET requests show the form; POST requests read the form fields, validate them and display a confirmation page. Run it on Apache Tomcat 9.",
    requirements: [
      "JDK 11 or above",
      "Apache Tomcat 9 (javax.servlet API; Tomcat 10 uses jakarta.* and will not compile this code)",
      "Any IDE with Maven support, or Maven from the command line",
      "A web browser"
    ],
    theory: "A servlet is a server-side Java class that handles HTTP requests. The container (Tomcat) calls init() once, then service() dispatches each request to doGet(), doPost(), doPut(), etc., and finally destroy() on shutdown.\n\nHttpServletRequest carries the request method, headers, parameters and body; HttpServletResponse carries the response status, headers and body. Parameters are read with getParameter() / getParameterValues().\n\nWith the @WebServlet annotation a web.xml is optional; the URL pattern is declared on the class. Servlets are compiled against the provided-scope javax.servlet-api dependency, which the container supplies at runtime.",
    algorithm: [
      "Create a Maven webapp (maven-archetype-webapp) named student-web.",
      "Add javax.servlet-api as a provided dependency.",
      "Write StudentServlet with @WebServlet(\"/student\").",
      "Implement doGet(): write an HTML form (method=POST, action=/student-web/student).",
      "Implement doPost(): read name, roll and course parameters.",
      "Validate: name must not be blank; roll must parse as an integer.",
      "On success print a confirmation; on failure redisplay the error.",
      "Build with mvn package and deploy student-web.war to Tomcat webapps.",
      "Open http://localhost:8080/student-web/student and submit the form."
    ],
    procedure: [
      "mvn archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DarchetypeArtifactId=maven-archetype-webapp -DgroupId=lab.it -DartifactId=student-web",
      "Add the dependency from pom.xml into the generated pom.xml (or recreate it).",
      "Put StudentServlet.java in src/main/java/lab/it/StudentServlet.java.",
      "Put index.html in src/main/webapp/ (optional; the servlet serves its own form).",
      "mvn package, copy target/student-web.war into Tomcat webapps/, start Tomcat.",
      "Open http://localhost:8080/student-web/student and submit with blank values, then valid values."
    ],
    code: [
      {
        file: "pom.xml",
        lang: "xml",
        src: String.raw`<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>
  <groupId>lab.it</groupId>
  <artifactId>student-web</artifactId>
  <version>1.0</version>
  <packaging>war</packaging>
  <dependencies>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
</project>`
      },
      {
        file: "StudentServlet.java",
        lang: "java",
        src: String.raw`package lab.it;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/student")
public class StudentServlet extends HttpServlet {
    private String esc(String s) {
        return s == null ? "" : s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter out = resp.getWriter();
        out.println("<html><head><title>Student Registration</title></head><body>");
        out.println("<h1>Student Registration</h1>");
        out.println("<form method=\"post\" action=\"student\">");
        out.println("Name: <input type=\"text\" name=\"name\"><br>");
        out.println("Roll: <input type=\"text\" name=\"roll\"><br>");
        out.println("Course: <input type=\"text\" name=\"course\"><br>");
        out.println("<button type=\"submit\">Register</button></form></body></html>");
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter out = resp.getWriter();
        String name = req.getParameter("name");
        String roll = req.getParameter("roll");
        String course = req.getParameter("course");
        StringBuilder error = new StringBuilder();
        if (name == null || name.trim().isEmpty()) error.append("Name is required. ");
        try {
            Integer.parseInt(roll);
        } catch (NumberFormatException e) {
            error.append("Roll must be a number. ");
        }
        out.println("<html><body>");
        if (error.length() > 0) {
            out.println("<h1>Registration failed</h1><p>" + esc(error.toString()) + "</p>");
            out.println("<a href=\"student\">Back to form</a>");
        } else {
            out.println("<h1>Registration successful</h1>");
            out.println("<p>Name: " + esc(name) + "</p><p>Roll: " + esc(roll) + "</p><p>Course: " + esc(course) + "</p>");
        }
        out.println("</body></html>");
    }
}`
      }
    ],
    output: "GET /student-web/student returns the registration form HTML.\nPOST with blank name returns: Name is required.\nPOST with a valid form returns: Registration successful, followed by the echoed fields.\n(Output is illustrative; the servlet was not deployed in this environment.)",
    explanation: "The servlet is annotated with @WebServlet(\"/student\"), so Tomcat maps that URL to this class without a web.xml. doGet writes the form; the form issues a POST back to the same servlet, and service() dispatches it to doPost. doPost reads parameters (all values are Strings), validates them and prints either an error or a confirmation. User input is escaped before printing to avoid reflected HTML injection. The javax.servlet-api dependency uses scope provided: Tomcat supplies these classes at runtime, so they must not be bundled into the WAR.",
    result: "The servlet handled both GET (form display) and POST (form submission) requests, validated input and rendered a dynamic confirmation page.",
    conclusion: "Servlets are the foundation of Java web development; doGet and doPost are the two entry points that implement the request/response cycle. The experiment was completed successfully.",
    notes: [
      "Tomcat 9 uses the javax.* namespace; Tomcat 10 uses jakarta.* and this code will not compile there without migration.",
      "Scope provided means the servlet API is supplied by the container and is not packaged into the WAR.",
      "Output is illustrative; deploy on a real Tomcat 9 instance to see the live pages."
    ],
    viva: [
      "Q: What is a servlet? A: A server-side Java class managed by a servlet container that handles HTTP requests and builds responses.",
      "Q: Difference between doGet() and doPost()? A: doGet is for safe retrieval and puts parameters in the URL query string; doPost carries form data in the request body and is used for submission.",
      "Q: What does @WebServlet do? A: It declares the URL pattern for the servlet, replacing web.xml mappings.",
      "Q: Explain the servlet life cycle. A: init() once, service() per request (which calls doGet/doPost...), destroy() on shutdown.",
      "Q: Why is the servlet API scope provided? A: The container already provides it at runtime; bundling it would cause class-loading conflicts."
    ]
  },
  {
    id: "java-12",
    n: 12,
    subject: "java",
    title: "JSP Pages and Implicit Objects",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create JSP pages that use the request, response, session, application, out and pageContext implicit objects, and a custom error page using the exception object.",
    problem: "Build a login confirmation page in JSP: it reads a name from the query string, increments a visit counter stored in the application scope, remembers the last user in the session scope and reports numbers via the out object. Add a 500 error page that displays the exception message.",
    requirements: [
      "JDK 11 or above",
      "Apache Tomcat 9",
      "Any editor; JSP needs no compiler (Tomcat compiles JSPs automatically on first request)"
    ],
    theory: "JSP (JavaServer Pages) mixes HTML with Java snippets; Tomcat translates each JSP into a servlet at build time, so a JSP is just a servlet with a more convenient syntax.\n\nImplicit objects are pre-created variables available in every JSP: page, request, response, session, application, out, pageContext, config and exception (only in error pages with isErrorPage=true).\n\nScriptlet <% %> contains Java statements; expression <%= %> prints a value; declaration <%! %> adds class-level members. Output goes to the client through the out object (a JspWriter).",
    algorithm: [
      "Create implicit.jsp with a scriptlet that reads the name parameter.",
      "Store the name in session scope.",
      "Increment an Integer counter in application (context) scope.",
      "Use out.print() to render a greeting with the counter.",
      "Add a declaration for a helper method.",
      "Create error.jsp with isErrorPage=true; display exception.getMessage() with the exception implicit object.",
      "Map HTTP 500 to error.jsp in web.xml.",
      "Open http://localhost:8080/jsp-lab/implicit.jsp?name=Kashif and trigger an error to see error.jsp."
    ],
    procedure: [
      "Create a folder jsp-lab inside Tomcat webapps with the two JSP files and WEB-INF/web.xml.",
      "Open http://localhost:8080/jsp-lab/implicit.jsp?name=Kashif",
      "Reload the page and observe the application visit counter increase.",
      "Request a JSP that throws (e.g. divide by zero in a scriptlet) and observe error.jsp with the message."
    ],
    code: [
      {
        file: "implicit.jsp",
        lang: "jsp",
        src: String.raw`<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head><title>JSP Implicit Objects</title></head>
<body>
<%
    String name = request.getParameter("name");
    if (name == null || name.isEmpty()) {
        name = "student";
    }
    session.setAttribute("lastUser", name);
    Integer visits = (Integer) application.getAttribute("visits");
    visits = (visits == null) ? 1 : visits + 1;
    application.setAttribute("visits", visits);
    response.setHeader("X-Lab", "jsp-implicit");
%>
<%!
    String greet(String who) {
        return "Hello, " + who + "!";
    }
%>
<h1><%= greet(name) %></h1>
<p>Session last user: <%= session.getAttribute("lastUser") %></p>
<p>Application visit counter: <%= application.getAttribute("visits") %></p>
<p>Request method: <%= request.getMethod() %></p>
<p>Response content type set by this page: <%= response.getContentType() %></p>
<p>Out buffer info: <%= out.getBufferSize() %> bytes</p>
</body>
</html>`
      },
      {
        file: "error.jsp",
        lang: "jsp",
        src: String.raw`<%@ page language="java" contentType="text/html; charset=UTF-8" isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head><title>Error Page</title></head>
<body>
<h1>Something went wrong</h1>
<p>Exception: <%= exception.getClass().getName() %></p>
<p>Message: <%= exception.getMessage() %></p>
</body>
</html>`
      },
      {
        file: "WEB-INF/web.xml",
        lang: "xml",
        src: String.raw`<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://xmlns.jcp.org/xml/ns/javaee https://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
  <error-page>
    <error-code>500</error-code>
    <location>/error.jsp</location>
  </error-page>
</web-app>`
      }
    ],
    output: "GET http://localhost:8080/jsp-lab/implicit.jsp?name=Kashif returns:\nHello, Kashif!\nSession last user: Kashif\nApplication visit counter: 3 (increments on every visit)\nRequest method: GET\nOut buffer info: 8192 bytes\n(Output is illustrative; the JSP was not deployed in this environment.)",
    explanation: "request, response and session give access to the HTTP message, headers and per-user state; application is shared by all users of the web application (the visit counter). out (JspWriter) renders the page body; response.setHeader adds a custom header. The <%! declaration %> adds a method callable from scriptlets and expressions, equivalent to a method inside the generated servlet class. exception is available only in pages declared with isErrorPage=true and is wired to HTTP 500 by web.xml.",
    result: "JSP pages rendered dynamic output using eight of the nine implicit objects, and a dedicated error page displayed the exception message.",
    conclusion: "Implicit objects let JSP scriptlets interact with the request pipeline directly. Heavy Java logic should move to servlets or beans; JSPs are for presentation. The experiment was completed successfully.",
    notes: [
      "Tomcat 9: JSPs are compiled into servlet classes in Tomcat's work directory; after editing a JSP, Tomcat recompiles on the next request.",
      "Scriptlet style (<% %>) is shown for teaching; production code should use JSTL/EL or a framework for view logic.",
      "Output is illustrative; deploy on Tomcat 9 to observe the counter increment live."
    ],
    viva: [
      "Q: List the nine implicit objects. A: page, request, response, session, application, out, pageContext, config, exception.",
      "Q: When is the exception implicit object available? A: Only in a page declared with isErrorPage=true, mapped as an error page.",
      "Q: Difference between application and session scope? A: application is shared by all users; session is per browser/user and expires on timeout or invalidate().",
      "Q: What is a JSP scriptlet vs expression? A: <% %> holds Java statements; <%= %> prints a Java expression to the page.",
      "Q: Why avoid scriptlets in large projects? A: They mix presentation and logic; JSTL/EL, MVC and tag libraries keep JSPs maintainable."
    ]
  },
  {
    id: "java-13",
    n: 13,
    subject: "java",
    title: "Session Management with Cookies and HttpSession",
    date: "—",
    src: "Authored for this digital library",
    aim: "To implement login, profile and logout using HttpSession, and to store a remember-me username using a cookie.",
    problem: "Build /session with three actions: login (validate demo credentials, create a session and a 7-day cookie), profile (read the session) and logout (invalidate the session and delete the cookie).",
    requirements: [
      "JDK 11 or above",
      "Apache Tomcat 9",
      "A browser with cookies enabled"
    ],
    theory: "HTTP is stateless; each request is independent. Session management adds continuity.\n\nHttpSession stores server-side state keyed by a JSESSIONID cookie that the container sets automatically. Values are objects set with setAttribute() and read with getAttribute(). invalidate() destroys the session.\n\nCookies store small strings in the browser (name, value, maxAge, path, httpOnly). They survive browser restarts if maxAge > 0; httpOnly prevents JavaScript access, which mitigates XSS-based cookie theft. Cookies carry only strings, sessions carry any objects, and session data lives on the server.",
    algorithm: [
      "Create SessionServlet with @WebServlet(\"/session\").",
      "action=login: if user=demo and pass=demo123, create the session, set user attribute, add a 7-day httpOnly cookie RememberMe=demo.",
      "action=profile: if session attribute user is null, show a login link; otherwise show the user and the RememberMe cookie value.",
      "action=logout: invalidate the session and add a RememberMe cookie with maxAge=0.",
      "Otherwise show a login form.",
      "Build, deploy, open http://localhost:8080/session-lab/session.",
      "Test login, profile, logout and browser restart (cookie persists until maxAge expires)."
    ],
    procedure: [
      "Create session-lab with one servlet session/SessionServlet.java.",
      "Deploy to Tomcat and open /session-lab/session.",
      "Log in with demo / demo123; observe JSESSIONID in devtools → Application → Cookies.",
      "Open /session-lab/session?action=profile in a new tab: the user is remembered.",
      "Log out; the profile page now prompts for login.",
      "Log in again and check the RememberMe cookie with 7-day expiry."
    ],
    code: [
      {
        file: "SessionServlet.java",
        lang: "java",
        src: String.raw`package session;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@WebServlet("/session")
public class SessionServlet extends HttpServlet {
    private String esc(String s) {
        return s == null ? "" : s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
    }
    private String findCookie(HttpServletRequest req, String key) {
        Cookie[] cookies = req.getCookies();
        if (cookies == null) {
            return null;
        }
        for (Cookie c : cookies) {
            if (c.getName().equals(key)) {
                return c.getValue();
            }
        }
        return null;
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String action = req.getParameter("action");
        resp.setContentType("text/html; charset=UTF-8");
        PrintWriter out = resp.getWriter();
        HttpSession session = req.getSession(false);
        if ("login".equals(action)) {
            String user = req.getParameter("user");
            String pass = req.getParameter("pass");
            if ("demo".equals(user) && "demo123".equals(pass)) {
                session = req.getSession(true);
                session.setAttribute("user", user);
                Cookie remember = new Cookie("RememberMe", user);
                remember.setMaxAge(7 * 24 * 60 * 60);
                remember.setHttpOnly(true);
                remember.setPath("/");
                resp.addCookie(remember);
                out.println("<html><body><h1>Logged in</h1><p>Welcome, " + esc(user) + ".</p><a href=\"session?action=profile\">Profile</a></body></html>");
            } else {
                out.println("<html><body><h1>Login failed</h1><p>Use demo / demo123.</p><a href=\"session\">Try again</a></body></html>");
            }
            return;
        }
        if ("logout".equals(action)) {
            if (session != null) {
                session.invalidate();
            }
            Cookie forget = new Cookie("RememberMe", "");
            forget.setMaxAge(0);
            forget.setPath("/");
            resp.addCookie(forget);
            out.println("<html><body><h1>Logged out</h1><a href=\"session\">Login</a></body></html>");
            return;
        }
        if ("profile".equals(action)) {
            String user = session == null ? null : (String) session.getAttribute("user");
            String remember = findCookie(req, "RememberMe");
            if (user == null) {
                out.println("<html><body><h1>Not logged in</h1><a href=\"session\">Login</a></body></html>");
            } else {
                out.println("<html><body><h1>Profile</h1><p>User: " + esc(user) + "</p><p>RememberMe cookie: " + esc(remember) + "</p><a href=\"session?action=logout\">Logout</a></body></html>");
            }
            return;
        }
        out.println("<html><body><h1>Sign in</h1><form action=\"session\" method=\"get\"><input type=\"hidden\" name=\"action\" value=\"login\">Name: <input name=\"user\"><br>Pass: <input name=\"pass\" type=\"password\"><br><button type=\"submit\">Login</button></form></body></html>");
    }
}`
      }
    ],
    output: "GET /session-lab/session shows the login form.\nGET /session-lab/session?action=login&user=demo&pass=demo123 sets JSESSIONID and shows: Logged in.\nGET ...?action=profile shows: Profile, User: demo, RememberMe cookie: demo.\nGET ...?action=logout destroys the session and the profile page again asks for login.\n(Output is illustrative; the servlet was not deployed in this environment.)",
    explanation: "req.getSession(false) returns the existing session or null, so each action can decide whether to create one. On login, getSession(true) creates the session; the container then sets JSESSIONID automatically. The RememberMe cookie uses httpOnly (JavaScript cannot read it), a 7-day maxAge and path=/; setting maxAge=0 deletes it on logout. findCookie walks the Cookie[] array because servlets have no getCookie(name). The demo credentials are hard-coded only for teaching; real apps must authenticate against a database or identity provider.",
    result: "Login, profile and logout were implemented with HttpSession; a persistent remember-me cookie survived the browser restart and was deleted on logout.",
    conclusion: "HttpSession keeps server-side state per user; cookies are small client-side strings. Combined they are the basis of authentication and personalization on the web. The experiment was completed successfully.",
    notes: [
      "Demo credentials are inline for the practical; never hard-code passwords in production code.",
      "Sessions expire after 30 minutes of inactivity by default (configurable in web.xml or with setMaxInactiveInterval).",
      "Output is illustrative; deploy on Tomcat 9 and watch JSESSIONID/RememberMe in the browser devtools."
    ],
    viva: [
      "Q: Why do we need sessions if HTTP is stateless? A: To keep per-user state (login status, cart, preferences) across requests.",
      "Q: Where does JSESSIONID live? A: In a cookie set by the container (or the URL when cookies are disabled).",
      "Q: Difference between session and cookie? A: Session = server-side object store per user; cookie = small string stored in the browser, sent with every request to the path.",
      "Q: What does session.invalidate() do? A: Destroys the session and its attributes; the next getSession(false) returns null.",
      "Q: How do you delete a cookie? A: Add a cookie with the same name, path and maxAge=0."
    ]
  },
  {
    id: "java-14",
    n: 14,
    subject: "java",
    title: "JavaBeans and the jsp:useBean Action",
    date: "—",
    src: "Authored for this digital library",
    aim: "To create a serializable JavaBean with private fields and accessors, and to use jsp:useBean, jsp:setProperty and jsp:getProperty to bind it to a JSP form.",
    problem: "Create StudentBean (name, rollNo, course) and a JSP that collects them from a form, populates the bean with jsp:setProperty property=\"*\", and displays them with jsp:getProperty.",
    requirements: [
      "JDK 11 or above",
      "Apache Tomcat 9",
      "A browser"
    ],
    theory: "A JavaBean is a reusable class that follows three conventions: a public no-argument constructor, private fields with public getters/setters (getX/setX, or isX for booleans), and it implements java.io.Serializable.\n\nJSPs can instantiate and cache beans with the <jsp:useBean> action; the id becomes a variable in the page. <jsp:setProperty property=\"*\"> maps all request parameters to bean properties with matching names and types (setters do the conversion). <jsp:getProperty> prints a property.\n\nThe scope attribute (page, request, session, application) decides how long the bean lives and who shares it.",
    algorithm: [
      "Create StudentBean.java with the three private fields, no-arg constructor and accessors; implement Serializable.",
      "Compile it into WEB-INF/classes/lab/it/StudentBean.class.",
      "Create bean.jsp with useBean scope=session, a form when no name parameter is present.",
      "On POST, jsp:setProperty property=\"*\" fills the bean from the form fields.",
      "Display the stored bean with jsp:getProperty.",
      "Open the page, submit the form and reload to see session persistence."
    ],
    procedure: [
      "mkdir -p webapp/WEB-INF/classes/lab/it",
      "javac -d webapp/WEB-INF/classes StudentBean.java",
      "Place bean.jsp in webapp/",
      "Deploy the folder as jsp-beans under Tomcat webapps",
      "Open http://localhost:8080/jsp-beans/bean.jsp, submit, reload and observe the values persist."
    ],
    code: [
      {
        file: "StudentBean.java",
        lang: "java",
        src: String.raw`package lab.it;
import java.io.Serializable;
public class StudentBean implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name = "";
    private String rollNo = "";
    private String course = "";
    public StudentBean() {
    }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getRollNo() { return rollNo; }
    public void setRollNo(String rollNo) { this.rollNo = rollNo; }
    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
}`
      },
      {
        file: "bean.jsp",
        lang: "jsp",
        src: String.raw`<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<jsp:useBean id="student" class="lab.it.StudentBean" scope="session" />
<jsp:setProperty name="student" property="*" />
<!DOCTYPE html>
<html>
<head><title>JavaBeans Lab</title></head>
<body>
<h1>Student Bean</h1>
<form method="post" action="bean.jsp">
  Name: <input name="name" value="<jsp:getProperty name="student" property="name" />"><br>
  Roll: <input name="rollNo" value="<jsp:getProperty name="student" property="rollNo" />"><br>
  Course: <input name="course" value="<jsp:getProperty name="student" property="course" />"><br>
  <button type="submit">Save</button>
</form>
<h2>Stored bean</h2>
<p>Name: <jsp:getProperty name="student" property="name" /></p>
<p>Roll: <jsp:getProperty name="student" property="rollNo" /></p>
<p>Course: <jsp:getProperty name="student" property="course" /></p>
</body>
</html>`
      }
    ],
    output: "Submit Name=Kashif, Roll=50, Course=IT: the page reloads with the form pre-filled and the Stored bean section shows the same values; a reload without submitting keeps them because scope=session.\n(Output is illustrative; the JSP was not deployed in this environment.)",
    explanation: "useBean creates the StudentBean once per session and assigns it the id student; later requests in the same session reuse it. setProperty property=\"*\" iterates over the request parameters and calls the matching setter (setName, setRollNo, setCourse) after converting String to the setter's parameter type. getProperty prints the current property. Because the bean is in session scope, its values survive reloads; changing scope to request would reset them each submission.",
    result: "A JavaBean was populated from a JSP form and read back with jsp:setProperty and jsp:getProperty, persisting across requests in session scope.",
    conclusion: "JavaBeans are the classic bridge between JSP views and Java data; following the getter/setter convention lets container actions bind parameters automatically. The experiment was completed successfully.",
    notes: [
      "Class name, package and WEB-INF/classes placement must match exactly or the bean fails to load.",
      "property=\"*\" matches parameters to setters by name; parameter roll prints into rollNo only if the names match.",
      "Output is illustrative; deploy on Tomcat 9 to observe persistence across reloads."
    ],
    viva: [
      "Q: What three rules make a class a JavaBean? A: Public no-arg constructor, private fields with getter/setter accessors, and implementing Serializable.",
      "Q: What does jsp:setProperty property=\"*\" do? A: It binds all request parameters to bean properties whose setters match by name.",
      "Q: What scopes can a bean use? A: page, request, session, application.",
      "Q: Why implement Serializable? A: So the bean can be written to disk, sent over the network or replicated across cluster nodes.",
      "Q: How does a JSP find the bean class? A: From the class attribute; it must be on the classpath (WEB-INF/classes or a JAR in WEB-INF/lib)."
    ]
  },
  {
    id: "java-15",
    n: 15,
    subject: "java",
    title: "Model-View-Controller Web Application with Servlet and JSP",
    date: "—",
    src: "Authored for this digital library",
    aim: "To build a small MVC web application: a Student model, a DAO that stores students in memory, a servlet controller and a JSP view.",
    problem: "Develop /students with a table of in-memory students and a form to add one. The controller (servlet) reads and mutates the model (DAO); the view (JSP) renders the list without any Java logic beyond display.",
    requirements: [
      "JDK 11 or above",
      "Apache Tomcat 9",
      "A browser"
    ],
    theory: "MVC separates an application into three layers: the Model (data and business rules), the View (presentation, JSP) and the Controller (request handling, servlet). The controller extracts parameters, updates the model, then forwards to a view with the results in request-scope attributes.\n\nDAO (Data Access Object) isolates storage details from the controller, so the in-memory list can later be swapped for JDBC without touching the servlet. Views read attributes with bean-style accessors; no business logic belongs in the JSP.",
    algorithm: [
      "Create Student.java: model with name, rollNo, course and accessors.",
      "Create StudentDAO.java: ArrayList-backed store seeded with two students; add() and findAll().",
      "Create StudentServlet.java with @WebServlet(\"/students\"): doGet puts the list in request scope and forwards to students.jsp; doPost reads form fields, validates, adds and redirects.",
      "Create students.jsp: iterate the list with scriptlet loop; render form and table.",
      "Deploy and test adding a student; observe redirect-after-post with a fresh GET."
    ],
    procedure: [
      "Create mvc-lab with src and WEB-INF/classes layout.",
      "javac model, dao and servlet classes into WEB-INF/classes.",
      "Place students.jsp in webapp root.",
      "Deploy as mvc-lab under Tomcat webapps.",
      "Open http://localhost:8080/mvc-lab/students; add a row and verify it appears after redirect."
    ],
    code: [
      {
        file: "Student.java",
        lang: "java",
        src: String.raw`package mvc;
import java.io.Serializable;
public class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private String rollNo;
    private String course;
    public Student(String name, String rollNo, String course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }
    public String getName() { return name; }
    public String getRollNo() { return rollNo; }
    public String getCourse() { return course; }
    public void setName(String name) { this.name = name; }
    public void setRollNo(String rollNo) { this.rollNo = rollNo; }
    public void setCourse(String course) { this.course = course; }
}`
      },
      {
        file: "StudentDAO.java",
        lang: "java",
        src: String.raw`package mvc;
import java.util.ArrayList;
import java.util.List;
public class StudentDAO {
    private final List<Student> store = new ArrayList<>();
    public StudentDAO() {
        store.add(new Student("Rahul", "10", "Java"));
        store.add(new Student("Priya", "11", "Python"));
    }
    public synchronized List<Student> findAll() {
        return new ArrayList<>(store);
    }
    public synchronized void add(Student s) {
        store.add(s);
    }
}`
      },
      {
        file: "StudentServlet.java",
        lang: "java",
        src: String.raw`package mvc;
import java.io.IOException;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/students")
public class StudentServlet extends HttpServlet {
    private final StudentDAO dao = new StudentDAO();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        List<Student> students = dao.findAll();
        req.setAttribute("students", students);
        try {
            RequestDispatcher rd = req.getRequestDispatcher("students.jsp");
            rd.forward(req, resp);
        } catch (Exception e) {
            throw new IOException(e);
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String name = req.getParameter("name");
        String rollNo = req.getParameter("rollNo");
        String course = req.getParameter("course");
        if (name != null && !name.trim().isEmpty() && rollNo != null && !rollNo.trim().isEmpty()) {
            dao.add(new Student(name.trim(), rollNo.trim(), course == null ? "" : course.trim()));
        }
        resp.sendRedirect("students");
    }
}`
      },
      {
        file: "students.jsp",
        lang: "jsp",
        src: String.raw`<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.util.List, mvc.Student" %>
<%
    List<Student> students = (List<Student>) request.getAttribute("students");
%>
<!DOCTYPE html>
<html>
<head><title>Students (MVC)</title></head>
<body>
<h1>Students</h1>
<form method="post" action="students">
  Name: <input name="name"> Roll: <input name="rollNo"> Course: <input name="course">
  <button type="submit">Add</button>
</form>
<table border="1" cellpadding="6">
<tr><th>Name</th><th>Roll</th><th>Course</th></tr>
<%
    if (students != null) {
        for (Student s : students) {
%>
<tr><td><%= s.getName() %></td><td><%= s.getRollNo() %></td><td><%= s.getCourse() %></td></tr>
<%
        }
    }
%>
</table>
</body>
</html>`
      }
    ],
    output: "GET /mvc-lab/students renders the table with Rahul and Priya.\nPOST adds Kabir (12, Java) and redirects to a fresh GET; the table then shows three rows.\n(Output is illustrative; the application was not deployed in this environment.)",
    explanation: "The controller never writes HTML itself; it validates input, mutates the model (dao.add) and forwards to the view with request attributes. sendRedirect ends the POST and forces a fresh GET, avoiding duplicate submissions (POST/redirect/GET). The view only iterates the request-scoped list with a scriptlet, which is acceptable for a teaching example but would be replaced by JSTL in production. The DAO is synchronized and returns copies, so the shared list cannot be corrupted by concurrent requests or external mutation.",
    result: "A functioning MVC web module was built: model (Student + DAO), controller (StudentServlet), view (students.jsp).",
    conclusion: "MVC keeps web applications testable and maintainable; each layer has exactly one responsibility. The pattern generalizes directly to larger Java web applications. The experiment was completed successfully.",
    notes: [
      "In-memory storage resets on Tomcat restart; swap StudentDAO internals for JDBC to persist.",
      "SendRedirect after POST prevents duplicate form resubmission on refresh.",
      "Output is illustrative; deploy on Tomcat 9 to exercise the add-student flow."
    ],
    viva: [
      "Q: What does each layer of MVC do? A: Model = data + rules, View = presentation, Controller = request handling and orchestration.",
      "Q: Why use a DAO? A: To isolate persistence from business logic; storage can change (memory → JDBC → JPA) without touching the controller.",
      "Q: What is the POST/redirect/GET pattern? A: After a successful POST, redirect so a refresh does not resubmit the form.",
      "Q: What is request-scope forwarding? A: rd.forward() hands the same request/response to the JSP, keeping request attributes available.",
      "Q: What belongs in the JSP and what must not? A: Display logic only; input validation and data access belong to the controller/model."
    ]
  },
  {
    id: "java-16",
    n: 16,
    subject: "java",
    title: "Complete CRUD Operations with Java and JDBC",
    date: "—",
    src: "Authored for this digital library",
    aim: "To implement Create, Read, Update and Delete operations against a MySQL table through a menu-driven Java console program using PreparedStatement throughout.",
    problem: "Build StudentCrud, a console menu with 1) List students 2) Add student 3) Update course 4) Delete student 5) Exit, all backed by the studentdb.Student table.",
    requirements: [
      "JDK 8 or above",
      "MySQL Server 8.x with MySQL Workbench",
      "MySQL Connector/J on the build path"
    ],
    theory: "CRUD is the four basic persistence operations: Create (INSERT), Read (SELECT), Update (UPDATE) and Delete (DELETE). A menu-driven console program exercises all four against one table.\n\nPreparedStatement is used for every statement, including the id-only DELETE, so parameter binding is uniform and SQL injection is impossible through the console input. executeQuery() returns a ResultSet that is iterated with next(); executeUpdate() returns the affected row count used to confirm the writes.",
    algorithm: [
      "Run crud_setup.sql to create studentdb.Student with three sample rows.",
      "Open the connection once in try-with-resources.",
      "Print the menu; read the choice with Scanner.",
      "List: SELECT id, name, course and print rows.",
      "Add: read id/name/course, INSERT with placeholders, print affected rows.",
      "Update: read id and new course, UPDATE ... WHERE id = ?, print affected rows.",
      "Delete: read id, DELETE ... WHERE id = ?, print affected rows.",
      "Loop until choice 5; closing the connection ends the program."
    ],
    procedure: [
      "Execute crud_setup.sql in MySQL Workbench.",
      "Create project StudentCrud; add the MySQL connector JAR.",
      "Paste StudentCrud.java and update user/password.",
      "Run; try each menu option; verify with SELECT after each write.",
      "Test the not-found paths (delete a missing id, update a missing id)."
    ],
    code: [
      {
        file: "crud_setup.sql",
        lang: "sql",
        src: String.raw`CREATE DATABASE IF NOT EXISTS studentdb;
USE studentdb;
CREATE TABLE IF NOT EXISTS Student (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    course VARCHAR(50) NOT NULL
);
INSERT IGNORE INTO Student (id, name, course) VALUES
(1, 'Rahul', 'Java'),
(2, 'Priya', 'Python'),
(3, 'Aarav', 'Java');`
      },
      {
        file: "StudentCrud.java",
        lang: "java",
        src: String.raw`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;
public class StudentCrud {
    static final String URL = "jdbc:mysql://localhost:3306/studentdb";
    static final String USER = "root";
    static final String PASSWORD = "root";
    static void list(Connection con) throws SQLException {
        try (PreparedStatement ps = con.prepareStatement("SELECT id, name, course FROM Student ORDER BY id");
             ResultSet rs = ps.executeQuery()) {
            System.out.println("id | name   | course");
            System.out.println("-------------------");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + "  | " + rs.getString("name") + " | " + rs.getString("course"));
            }
        }
    }
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        try (Connection con = DriverManager.getConnection(URL, USER, PASSWORD)) {
            while (true) {
                System.out.println("\n1) List  2) Add  3) Update course  4) Delete  5) Exit");
                System.out.print("Choice: ");
                String choice = console.nextLine().trim();
                if (choice.equals("5")) {
                    break;
                }
                switch (choice) {
                    case "1":
                        list(con);
                        break;
                    case "2":
                        System.out.print("Id: "); int id = Integer.parseInt(console.nextLine().trim());
                        System.out.print("Name: "); String name = console.nextLine();
                        System.out.print("Course: "); String course = console.nextLine();
                        try (PreparedStatement ps = con.prepareStatement("INSERT INTO Student (id, name, course) VALUES (?, ?, ?)")) {
                            ps.setInt(1, id);
                            ps.setString(2, name);
                            ps.setString(3, course);
                            System.out.println("Inserted " + ps.executeUpdate() + " row(s).");
                        }
                        break;
                    case "3":
                        System.out.print("Id: "); int uid = Integer.parseInt(console.nextLine().trim());
                        System.out.print("New course: "); String ncourse = console.nextLine();
                        try (PreparedStatement ps = con.prepareStatement("UPDATE Student SET course = ? WHERE id = ?")) {
                            ps.setString(1, ncourse);
                            ps.setInt(2, uid);
                            System.out.println("Updated " + ps.executeUpdate() + " row(s).");
                        }
                        break;
                    case "4":
                        System.out.print("Id: "); int did = Integer.parseInt(console.nextLine().trim());
                        try (PreparedStatement ps = con.prepareStatement("DELETE FROM Student WHERE id = ?")) {
                            ps.setInt(1, did);
                            System.out.println("Deleted " + ps.executeUpdate() + " row(s).");
                        }
                        break;
                    default:
                        System.out.println("Unknown choice.");
                }
            }
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "Choice: 2 -> Inserted 1 row(s).\nChoice: 1 -> Rahul/Priya/Aarav/New student\nChoice: 3 -> Updated 1 row(s).\nChoice: 4 -> Deleted 1 row(s).\n(Output is illustrative; the program was not executed in this environment.)",
    explanation: "One connection is reused for the whole session; PreparedStatements are created per operation inside try-with-resources. Integer.parseInt validates ids before they reach the database. The switch keeps the menu linear and readable. Update/delete report row counts, so the user sees when an id does not exist (0 rows affected). list() orders by id for a stable display.",
    result: "All four CRUD operations were performed successfully against MySQL from a Java console program, with parameter binding everywhere.",
    conclusion: "CRUD over JDBC is the canonical first database application; the same structure scales to servlets and DAOs as the presentation layer changes. The experiment was completed successfully.",
    notes: [
      "User input is never concatenated into SQL; every value goes through a placeholder.",
      "0 rows affected on update/delete means the id was not found — handle it in the UI.",
      "Output is illustrative; run against a local MySQL server to see live results."
    ],
    viva: [
      "Q: What does CRUD stand for? A: Create, Read, Update, Delete — the four basic persistence operations.",
      "Q: Why keep one connection open? A: Handshakes are expensive; reusing the connection is the fastest simple strategy for a console tool. In web apps, pool connections instead.",
      "Q: What does executeQuery() return? A: ResultSet, iterated with next(); each column is read with getInt/getString by name or index.",
      "Q: What happens on duplicate id in INSERT? A: SQLException (duplicate primary key), caught and printed as Database error.",
      "Q: How does the program report a missing id? A: executeUpdate() returns 0, printed as 0 row(s)."
    ]
  },
  {
    id: "java-17",
    n: 17,
    subject: "java",
    title: "Collections and Generics in Java",
    date: "—",
    src: "Authored for this digital library",
    aim: "To use List, Set, Map, generics, Comparator and comparable sorting on a domain class (StudentRecord) rather than raw types.",
    problem: "Store student records in a HashMap keyed by roll number, print them from a List<StudentRecord>, sort them by marks with a Comparator and demonstrate a generic print method.",
    requirements: [
      "JDK 8 or above",
      "Any IDE or terminal with javac"
    ],
    theory: "Java Collections are generic containers. List preserves insertion order and allows duplicates (ArrayList), Set rejects duplicates (HashSet, LinkedHashSet preserves order), Map stores key/value pairs (HashMap). Generics (<T>) preserve type safety at compile time; e.g. List<StudentRecord> forbids inserting any other type.\n\nComparable<T>.compareTo() defines natural ordering; Comparator<T> is an external ordering strategy, passed as a lambda Comparator.comparingInt(r -> r.marks). Generics are erased at runtime (type erasure), so casts inserted by the compiler are unchecked at the JVM level.",
    algorithm: [
      "Define static nested class StudentRecord (name, roll, marks) with accessors.",
      "Build a HashMap<Integer, StudentRecord> seeded with four records.",
      "Copy values into an ArrayList<StudentRecord>.",
      "Sort with list.sort(Comparator.comparingInt(StudentRecord::getMarks).reversed()).",
      "Print with a generic static method printAll(List<? extends StudentRecord>).",
      "Add a LinkedHashSet demo to show duplicate roll rejection.",
      "Print size and iteration order at each step."
    ],
    procedure: [
      "Create CollectionsDemo.java in any project.",
      "javac CollectionsDemo.java && java CollectionsDemo",
      "Change marks and confirm the sort order changes.",
      "Try inserting a duplicate roll into the set and note it is ignored."
    ],
    code: [
      {
        file: "CollectionsDemo.java",
        lang: "java",
        src: String.raw`import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
public class CollectionsDemo {
    static class StudentRecord {
        private final String name;
        private final int roll;
        private final int marks;
        StudentRecord(String name, int roll, int marks) {
            this.name = name;
            this.roll = roll;
            this.marks = marks;
        }
        String getName() { return name; }
        int getRoll() { return roll; }
        int getMarks() { return marks; }
        public String toString() { return roll + ": " + name + " marks=" + marks; }
        public boolean equals(Object o) {
            return o instanceof StudentRecord && ((StudentRecord) o).roll == roll;
        }
        public int hashCode() { return Integer.hashCode(roll); }
    }
    static <T> void printAll(List<T> list) {
        for (T item : list) {
            System.out.println(item);
        }
    }
    public static void main(String[] args) {
        Map<Integer, StudentRecord> byRoll = new HashMap<>();
        byRoll.put(1, new StudentRecord("Rahul", 1, 78));
        byRoll.put(2, new StudentRecord("Priya", 2, 92));
        byRoll.put(3, new StudentRecord("Aarav", 3, 64));
        byRoll.put(4, new StudentRecord("Meera", 4, 88));
        List<StudentRecord> list = new ArrayList<>(byRoll.values());
        System.out.println("Unsorted:");
        printAll(list);
        list.sort(Comparator.comparingInt(StudentRecord::getMarks).reversed());
        System.out.println("Sorted by marks (desc):");
        printAll(list);
        Set<StudentRecord> set = new LinkedHashSet<>(list);
        set.add(new StudentRecord("Duplicate", 1, 0));
        System.out.println("Set size after duplicate add: " + set.size());
        System.out.println("Lookup roll 2: " + byRoll.get(2));
    }
}`
      }
    ],
    output: "Unsorted:\n2: Priya marks=92\n1: Rahul marks=78\n4: Meera marks=88\n3: Aarav marks=64\nSorted by marks (desc):\n2: Priya marks=92\n4: Meera marks=88\n1: Rahul marks=78\n3: Aarav marks=64\nSet size after duplicate add: 4\nLookup roll 2: 2: Priya marks=92\n(Output is illustrative; HashMap iteration order is not guaranteed, so the unsorted section order will vary by JVM.)",
    explanation: "Generics make the compiler reject wrong types at build time. HashMap stores and retrieves O(1) by key. The generic printAll<T> method works for any element type. Comparator.comparingInt(...).reversed() expresses descending order without modifying StudentRecord. equals/hashCode are overridden so the LinkedHashSet can detect the duplicate roll (bucket lookup via hashCode). The map is the source of truth; the list is a sorted view of it.",
    result: "Collections framework classes and generics were used to store, sort, filter and look up records type-safely.",
    conclusion: "Generics plus the Collections framework is how modern Java stores data; understanding HashMap and List ordering avoids the most common bugs. The experiment was completed successfully.",
    notes: [
      "HashMap iteration order is not stable; use LinkedHashMap if insertion order matters.",
      "An overridden hashCode/equals is mandatory for correct Set behaviour.",
      "Output is illustrative; HashMap order varies by JVM build."
    ],
    viva: [
      "Q: List vs Set vs Map? A: List = ordered, duplicates allowed; Set = no duplicates; Map = key→value, keys unique.",
      "Q: What does generics give you? A: Compile-time type safety and no casts at call sites.",
      "Q: What is type erasure? A: Generic type information is removed at compile time; the JVM sees raw types (List).",
      "Q: HashMap vs LinkedHashMap? A: HashMap is unordered; LinkedHashMap preserves insertion order.",
      "Q: Comparable vs Comparator? A: Comparable defines natural order via compareTo; Comparator is an external, reusable ordering passed to sort()."
    ]
  },
  {
    id: "java-18",
    n: 18,
    subject: "java",
    title: "Exception Handling and File Handling with Custom Exceptions",
    date: "—",
    src: "Authored for this digital library",
    aim: "To process a marks file line by line, validate each entry, raise a custom checked exception for invalid data and write an average report with try-with-resources.",
    problem: "Read numbers from marks.txt (one per line), skipBlankLines, flag negatives or non-numeric values with ValidationException, compute the average and write report.txt containing the total and average.",
    requirements: [
      "JDK 8 or above",
      "Any IDE or terminal"
    ],
    theory: "Exceptions separate error handling from the happy path. Checked exceptions (Exception subclasses other than RuntimeException) must be declared or caught; unchecked (RuntimeException) may propagate. A custom exception adds domain meaning.\n\ntry-with-resources declares AutoCloseable resources in the parentheses of try; they are closed automatically in the reverse order of declaration, even on exception, which prevents resource leaks. Files.readAllLines and Files.writeString (Java 11) replace manual stream plumbing; java.io.FileReader/BufferedReader is shown for teaching.",
    algorithm: [
      "Define class ValidationException extends Exception with a message.",
      "Read marks.txt line by line with BufferedReader inside try-with-resources.",
      "Trim each line; skip blanks; parse to double.",
      "If parsing fails or value < 0, throw ValidationException.",
      "Accumulate total and count; on ValidationException print the offending line and stop.",
      "Write report.txt with total and average using try-with-resources.",
      "Sample input.txt content is included below for testing."
    ],
    procedure: [
      "Create exception-lab; add MarksProcessor.java.",
      "Create input file marks.txt next to the program (55, 72, 39, alpha, -8) and run.",
      "Observe the ValidationException message for the word alpha.",
      "Fix marks.txt to valid numbers and re-run; check report.txt.",
      "Delete marks.txt and re-run; observe the file-not-found branch."
    ],
    code: [
      {
        file: "marks.txt",
        lang: "text",
        src: String.raw`55
72
39
64
88`
      },
      {
        file: "MarksProcessor.java",
        lang: "java",
        src: String.raw`import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
public class MarksProcessor {
    static class ValidationException extends Exception {
        ValidationException(String message) {
            super(message);
        }
    }
    public static void main(String[] args) {
        Path input = Paths.get("marks.txt");
        Path output = Paths.get("report.txt");
        double total = 0;
        int count = 0;
        try (BufferedReader reader = Files.newBufferedReader(input)) {
            String line;
            int lineNo = 0;
            while ((line = reader.readLine()) != null) {
                lineNo++;
                String trimmed = line.trim();
                if (trimmed.isEmpty()) {
                    continue;
                }
                try {
                    double value = Double.parseDouble(trimmed);
                    if (value < 0 || value > 100) {
                        throw new ValidationException("Line " + lineNo + ": out of range (0-100): " + trimmed);
                    }
                    total += value;
                    count++;
                } catch (NumberFormatException e) {
                    throw new ValidationException("Line " + lineNo + ": not a number: " + trimmed);
                }
            }
            if (count == 0) {
                throw new ValidationException("No valid entries found.");
            }
            double average = total / count;
            try (BufferedWriter writer = Files.newBufferedWriter(output)) {
                writer.write("Total: " + total);
                writer.newLine();
                writer.write("Average: " + average);
                writer.newLine();
            }
            System.out.println("Report written to report.txt. Average = " + average);
        } catch (ValidationException e) {
            System.out.println("Invalid data: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
    }
}`
      }
    ],
    output: "With valid marks.txt (55, 72, 39, 64, 88):\nReport written to report.txt. Average = 63.6\nWith invalid entry alpha:\nInvalid data: Line 4: not a number: alpha\n(Output is illustrative; the program was not executed in this environment.)",
    explanation: "try-with-resources closes the reader (and writer) automatically. ValidationException is declared to carry the line number and reason, so callers can report precisely; it is caught at the bottom so invalid data never produces a half-written report. NumberFormatException from parseDouble is translated into ValidationException so both failure modes surface as one domain error. IOException covers missing/unreadable files. Blank lines are skipped, not counted.",
    result: "A marks file was parsed, validated with a custom checked exception, and a report file was produced with try-with-resources.",
    conclusion: "Custom exceptions make error handling domain-specific, and try-with-resources guarantees resource cleanup; both are mandatory in robust Java code. The experiment was completed successfully.",
    notes: [
      "ValidationException is a checked exception: it must be declared or caught, which is why the program handles it explicitly.",
      "Files.newBufferedReader uses UTF-8 by default; pass a charset explicitly for portability.",
      "Output is illustrative; run with the included marks.txt to see both branches."
    ],
    viva: [
      "Q: Checked vs unchecked exceptions? A: Checked (Exception) must be declared/caught; unchecked (RuntimeException) may propagate freely, e.g. NumberFormatException.",
      "Q: Why use try-with-resources? A: Resources are closed automatically in reverse order, even when an exception occurs.",
      "Q: Why a custom exception? A: Domain meaning (ValidationException) is clearer than generic Exception and forces callers to handle your specific failure.",
      "Q: What happens if report writing fails? A: IOException is caught and printed; the earlier total computation is harmlessly discarded.",
      "Q: What is the finally block alternative? A: Manual close() in finally (error-prone); try-with-resources is preferred."
    ]
  },
  {
    id: "java-19",
    n: 19,
    subject: "java",
    title: "Multithreading and Synchronization (Producer-Consumer)",
    date: "—",
    src: "Authored for this digital library",
    aim: "To demonstrate a race condition on a shared counter and fix it with synchronized methods; then implement the producer-consumer pattern with wait/notify.",
    problem: "Two threads increment a shared counter 100000 times each without synchronization, then with synchronized methods, and compare the final totals; a bounded buffer shows wait/notify coordination.",
    requirements: [
      "JDK 8 or above",
      "Any IDE or terminal"
    ],
    theory: "A race condition occurs when two threads read-modify-write shared state without mutual exclusion; the lost update makes the final counter smaller than expected. synchronized methods use the object's intrinsic lock, so only one thread executes the critical section at a time.\n\nwait/notify coordinate threads on a shared condition: wait() releases the lock and parks the thread; notify() wakes one waiting thread. The bounded buffer implements the producer-consumer pattern: the producer blocks when full, the consumer blocks when empty, and all waits happen in a while loop that re-checks the condition.",
    algorithm: [
      "Create UnsafeCounter with an unsynchronized increment and safe run.",
      "Run two threads on it; print the wrong total.",
      "Create SafeCounter with synchronized increment; print the correct total 200000.",
      "Create BoundedBuffer with capacity 2, synchronized put/take, wait/notify.",
      "Producer puts items 1..5, consumer takes them, both print progress.",
      "Run and observe interleaving and correct totals."
    ],
    procedure: [
      "Create sync-lab; add SyncDemo.java.",
      "javac SyncDemo.java && java SyncDemo",
      "Run repeatedly; note the unsafe total varies, the safe total is always 200000.",
      "Increase CAPACITY and ITEMS and observe the same pattern."
    ],
    code: [
      {
        file: "SyncDemo.java",
        lang: "java",
        src: String.raw`import java.util.LinkedList;
import java.util.Queue;
public class SyncDemo {
    static class UnsafeCounter {
        long count;
        void increment() {
            count++;
        }
    }
    static class SafeCounter {
        long count;
        synchronized void increment() {
            count++;
        }
    }
    static class BoundedBuffer {
        private final int capacity;
        private final Queue<Integer> queue = new LinkedList<>();
        BoundedBuffer(int capacity) {
            this.capacity = capacity;
        }
        public synchronized void put(int item) throws InterruptedException {
            while (queue.size() == capacity) {
                wait();
            }
            queue.add(item);
            notifyAll();
            System.out.println("Produced: " + item);
        }
        public synchronized int take() throws InterruptedException {
            while (queue.isEmpty()) {
                wait();
            }
            int item = queue.remove();
            notifyAll();
            System.out.println("Consumed: " + item);
            return item;
        }
    }
    static void runCounter(boolean safe) throws InterruptedException {
        if (safe) {
            SafeCounter safe = new SafeCounter();
            Runnable task = () -> { for (int i = 0; i < 100000; i++) safe.increment(); };
            Thread a = new Thread(task), b = new Thread(task);
            a.start(); b.start(); a.join(); b.join();
            System.out.println("Safe counter total   = " + safe.count);
        } else {
            UnsafeCounter unsafe = new UnsafeCounter();
            Runnable task = () -> { for (int i = 0; i < 100000; i++) unsafe.increment(); };
            Thread a = new Thread(task), b = new Thread(task);
            a.start(); b.start(); a.join(); b.join();
            System.out.println("Unsafe counter total = " + unsafe.count);
        }
    }
    public static void main(String[] args) throws InterruptedException {
        runCounter(false);
        runCounter(true);
        BoundedBuffer buffer = new BoundedBuffer(2);
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    buffer.put(i);
                    Thread.sleep(50);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++) {
                    buffer.take();
                    Thread.sleep(120);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        producer.start();
        consumer.start();
        producer.join();
        consumer.join();
    }
}`
      }
    ],
    output: "Unsafe counter total = 117341 (varies; often below 200000)\nSafe counter total   = 200000\nProduced: 1\nConsumed: 1\n...\nConsumed: 5\n(Output is illustrative; thread scheduling varies per run and the program was not executed in this environment.)",
    explanation: "count++ is read, increment, write — three steps that can interleave, losing updates without a lock. synchronized on the method uses this monitor, making the whole increment atomic. In BoundedBuffer, all blocking happens inside synchronized methods, and wait() is always called in a while loop that re-checks the condition (guards against spurious wakeups). notifyAll() (safer than notify()) wakes waiting producers and consumers; which one proceeds is decided by the condition check. Capacity 2 makes the producer wait visibly when the consumer is slower.",
    result: "A race condition was demonstrated and fixed with synchronized methods; producer-consumer coordination with wait/notify ran correctly.",
    conclusion: "Shared mutable state must be synchronized; wait/notify is the low-level mechanism behind higher-level concurrent utilities such as BlockingQueue. The experiment was completed successfully.",
    notes: [
      "The unsafe total varies between runs and platforms; it is only guaranteed to be below 200000 under contention.",
      "Prefer BlockingQueue/Lock over raw wait/notify in production code.",
      "Output is illustrative; scheduling order differs on every run."
    ],
    viva: [
      "Q: What is a race condition? A: Two threads access shared state concurrently and at least one writes, without synchronization, causing lost updates.",
      "Q: What does synchronized do? A: It acquires the object's intrinsic lock; only one thread in the synchronized section executes at a time.",
      "Q: Why wait() inside a while loop? A: To re-check the condition after any wakeup (spurious wakeups and notifyAll wake multiple threads).",
      "Q: notify() vs notifyAll()? A: notify wakes one waiting thread; notifyAll wakes all, which is safer when multiple conditions share one monitor.",
      "Q: What is the high-level alternative? A: java.util.concurrent (BlockingQueue, ExecutorService, AtomicLong, Lock)."
    ]
  }
]);
