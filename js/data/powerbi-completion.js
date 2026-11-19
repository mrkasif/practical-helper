window.PECL = window.PECL || {};
window.PECL.completion = window.PECL.completion || {};
Object.assign(window.PECL.completion, {
  "powerbi-1": {
    problem: "A student new to business intelligence needs a working Power BI Desktop installation and a basic familiarity with its main views before attempting any report-building work. This practical sets up the tool and explores its interface.",
    requirements: [
      "A Windows PC with internet access to download the installer",
      "Power BI Desktop, available as a free download from the Microsoft Power BI site or Microsoft Store",
      "A sample Excel or CSV file to explore once the application is running"
    ],
    theory: "Power BI Desktop is a Windows application for connecting to data, shaping it and building interactive reports. It exposes three main views: Report View for designing visuals, Data View (Table View) for inspecting loaded tables and Model View for managing relationships between tables. The Ribbon, the Fields pane and the Visualizations pane are the main tools used while a report is being built. Familiarity with these areas makes all later practicals easier to carry out.",
    algorithm: [
      "Visit the official Power BI website and navigate to the product download page.",
      "Download the Power BI Desktop installer appropriate for the Windows machine.",
      "Run the installer and accept the licence agreement.",
      "Complete the installation and launch Power BI Desktop.",
      "Open Report View and identify the Ribbon, Fields pane and Visualizations pane.",
      "Switch to Data View and Model View to observe their purpose.",
      "Close the application after exploring the interface."
    ],
    procedure: [
      "Open a browser, go to the Power BI product page and choose the download or Microsoft Store option.",
      "Save the installer to a suitable folder and double-click it to start setup.",
      "Accept the licence agreement and follow the installation prompts to completion.",
      "Launch Power BI Desktop from the Start menu or the desktop shortcut.",
      "In Report View, locate the Ribbon tabs, the Fields pane and the Visualizations pane.",
      "Click the Data View and Model View icons on the left to see how each view differs.",
      "Explore the layout briefly and then close the application."
    ],
    explanation: "Installing Power BI Desktop provides the authoring environment needed for all the later practicals. Report View is where visuals are arranged on the canvas, Data View shows the underlying table rows and Model View displays the relationships between tables. The Ribbon groups commands by task, while the Fields and Visualizations panes supply the data and the chart types used to assemble a report.",
    result: "Power BI Desktop was installed successfully and its Report, Data and Model views were explored.",
    conclusion: "Exploring the interface first builds the confidence needed to create reports and models in later practicals.",
    viva: [
      "Q: What is Power BI Desktop used for? A: It is a Windows application for connecting to data, shaping it and building interactive reports.",
      "Q: Which three main views does Power BI Desktop provide? A: Report View, Data View and Model View.",
      "Q: Where do you find the available fields for a visual? A: In the Fields pane.",
      "Q: Is Power BI Desktop free? A: Yes, it can be downloaded free from Microsoft for Windows."
    ],
    output: "No output screenshot was recorded in the source journal; the installed application and the explored interface demonstrate completion of this practical.",
    code: []
  },
  "powerbi-2": {
    problem: "Raw data in an Excel workbook often contains extra columns, blank rows and inconsistent formats that must be cleaned before it can be used for reporting. This practical imports such data into Power BI Desktop and applies basic transformations in Power Query.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A sample Excel workbook, for example a sales data file",
      "Basic familiarity with the Home ribbon and the Get Data command"
    ],
    theory: "Power Query is the data connection and transformation engine built into Power BI Desktop. It records each cleaning action as an applied step, so the transformation can be refreshed and reused on updated source files. Common basic transformations include removing blank rows, renaming columns, setting data types and filtering or removing duplicate rows. Once the steps are applied, the cleaned table is loaded into the data model ready for visualization.",
    algorithm: [
      "Open Power BI Desktop and start a new blank report.",
      "On the Home tab choose Get Data and select Excel Workbook.",
      "Browse to the sample workbook and select the required sheet in the Navigator.",
      "Click Transform Data to open the Power Query Editor.",
      "Remove blank rows and rename columns as needed.",
      "Set the correct data type for each column and remove duplicate or unwanted rows.",
      "Click Close and Apply to load the cleaned table into the model."
    ],
    procedure: [
      "Open Power BI Desktop and create a blank report.",
      "Click Home, then Get Data, then Excel Workbook.",
      "Select the workbook file in the file dialog and click Open.",
      "In the Navigator window choose the required sheet or table and click Transform Data.",
      "In Power Query Editor choose Home, Remove Rows, Remove Blank Rows.",
      "Rename columns and set each column data type with the Data Type dropdown.",
      "Apply any row filters, remove duplicate rows and click Close and Apply."
    ],
    explanation: "Get Data establishes a connection to the Excel workbook, while Transform Data opens the Power Query Editor where the cleaning steps are recorded. Removing blank rows, renaming columns and setting data types make the table consistent and ready for analysis. Because the steps are saved as a query, refreshing the report re-applies them automatically to the source data.",
    result: "Data was imported from Excel and basic transformations were applied, leaving a cleaned table available in the Fields pane.",
    conclusion: "Power Query provides a repeatable way to clean and prepare Excel data before analysis in Power BI.",
    viva: [
      "Q: What does Get Data do? A: It connects Power BI to an external data source such as an Excel workbook.",
      "Q: What is the Power Query Editor used for? A: It is used to clean and transform data before it is loaded into the model.",
      "Q: Why set column data types correctly? A: Correct types ensure calculations and visuals work with the right kind of values.",
      "Q: What does Close and Apply do? A: It saves the transformation steps and loads the cleaned data into the model."
    ],
    output: "No output screenshot was recorded in the source journal; the loaded, cleaned table in the Fields pane demonstrates completion of this practical.",
    code: []
  },
  "powerbi-3": {
    problem: "Datasets frequently contain blank or null cells and columns whose data types are recorded incorrectly. This practical identifies and handles those missing values and then sets appropriate data types in Power Query so the data is reliable for analysis.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A sample Excel or CSV file containing some blank or null values",
      "An understanding of the Power Query Editor interface"
    ],
    theory: "Missing values appear as empty cells or the word null and can distort counts, averages and visuals if they are left untreated. Power Query offers several ways to handle them, including replacing nulls with a default value, removing the affected rows and filling down or up from a neighbouring cell. A column's data type determines which operations and calculations are valid, so setting it correctly as a whole number, decimal, date, text or true/false value is essential. Once applied, these cleaning steps are saved in the query and repeat on refresh.",
    algorithm: [
      "Load a sample file into Power BI Desktop using Transform Data.",
      "Scan each column in Power Query Editor for blank or null entries.",
      "Replace nulls with a sensible default value where appropriate.",
      "Remove rows or fill down where replacement is not suitable.",
      "Select each column and set the correct data type.",
      "Review the applied steps and then click Close and Apply."
    ],
    procedure: [
      "Open Power BI Desktop and load the data through Home, Get Data.",
      "In Power Query Editor, visually scan the columns for blank or null cells.",
      "Right-click a column and choose Replace Values to substitute nulls with a default.",
      "Use Home, Remove Rows to drop rows with missing values where needed.",
      "Use Fill Down or Fill Up for repeated values in a column.",
      "Select each column and choose the correct type from the Data Type dropdown.",
      "Click Close and Apply to save the changes to the model."
    ],
    explanation: "The practical first locates missing values, then chooses a treatment suited to each column: replacing with a default, removing rows or filling from a neighbouring cell. Setting the right data type after cleaning ensures that numbers, dates and text behave correctly in measures and visuals. Because every action is recorded as an applied step, the whole cleaning process repeats automatically when the data is refreshed.",
    result: "Missing values were handled and column data types were corrected, leaving the data ready for modelling and visualization.",
    conclusion: "Cleaning missing values and correcting data types is a necessary foundation for trustworthy Power BI analysis.",
    viva: [
      "Q: How do missing values appear in Power Query? A: As empty cells or the word null.",
      "Q: Name two ways to handle a missing value. A: Replace it with a default value or remove the row that contains it.",
      "Q: Why does data type matter? A: It determines which calculations and operations are valid for a column.",
      "Q: What is Fill Down used for? A: To copy the value above a cell into the empty cells below it."
    ],
    output: "No output screenshot was recorded in the source journal; the cleaned, correctly typed table in the model demonstrates completion of this practical.",
    code: []
  },
  "powerbi-4": {
    problem: "When a report draws on several tables such as Sales, Products and Customers, those tables must be linked so that one visual can combine fields from more than one of them. This practical builds those links in the Power BI data model.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A sample workbook containing several related tables",
      "A basic understanding of primary keys and foreign keys"
    ],
    theory: "A relationship connects a key column in one table to a matching key column in another, allowing filters and measures to flow between them. In a star schema, a fact table such as Sales is surrounded by dimension tables such as Products, Customers and Date. Relationships have a cardinality, commonly one-to-many, and a cross-filter direction that controls how filtering propagates. A well-formed model avoids ambiguous or circular filter paths.",
    algorithm: [
      "Load all related tables into Power BI Desktop.",
      "Switch to Model View to see the table diagrams.",
      "Locate the key column in each table that links to another table.",
      "Drag the primary key onto the matching foreign key to create a relationship.",
      "Check that the cardinality and cross-filter direction are correct.",
      "Arrange the tables into a star schema where possible.",
      "Save the report with the relationships in place."
    ],
    procedure: [
      "Load the Sales, Products, Customers and Date tables into the model.",
      "Click the Model View icon on the left side of Power BI Desktop.",
      "Find the key columns, such as a product identifier, in the relevant tables.",
      "Drag the key from the dimension table onto the matching column in the fact table.",
      "Double-click the relationship line to verify cardinality and cross-filter direction.",
      "Arrange the tables so the dimension tables surround the central fact table.",
      "Save the report to keep the relationships."
    ],
    explanation: "Dragging one key column onto another tells Power BI how the tables are related, so a filter on a dimension such as Product flows to the related sales rows. The cardinality, usually one-to-many, records that one product can appear in many sales, and the cross-filter direction decides which way the filter travels. Organising the tables as a star schema keeps the model simple and avoids conflicting filter paths.",
    result: "Relationships between the loaded tables were created successfully in the Data Model, enabling combined analysis.",
    conclusion: "Correct relationships turn separate tables into a single, coherent model that supports cross-table analysis.",
    viva: [
      "Q: What is a relationship in the data model? A: A link between matching key columns in two tables that lets filters flow between them.",
      "Q: What is a star schema? A: A layout where a central fact table is surrounded by dimension tables.",
      "Q: What does one-to-many cardinality mean? A: One row in one table relates to many rows in the other table.",
      "Q: Which view is used to create relationships? A: Model View."
    ],
    output: "No output screenshot was recorded in the source journal; the linked tables in the saved data model demonstrate completion of this practical.",
    code: []
  },
  "powerbi-5": {
    problem: "A table of numbers alone does not reveal comparisons or trends clearly, so a report needs visuals that present the data graphically. This practical creates bar and line charts in Power BI Report View.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A loaded sample dataset with a category, a date and a numeric measure",
      "Familiarity with the Fields and Visualizations panes"
    ],
    theory: "Bar and column charts compare values across categories by drawing bars whose lengths represent the measure, which makes ranking and comparison easy. A line chart connects data points in order, usually across a date axis, so it is well suited to showing trends over time. In Power BI a visual is created by selecting a chart type and dragging fields into wells such as Axis and Values. Formatting options then control the titles, colours, legends and data labels.",
    algorithm: [
      "Open Report View in Power BI Desktop.",
      "Select a Clustered Bar or Clustered Column chart from the Visualizations pane.",
      "Drag a category field to the Axis well and a numeric measure to Values.",
      "Select a Line chart and place a date field on its Axis.",
      "Assign the numeric measure to the Values well of the line chart.",
      "Format titles, colours, legends and data labels.",
      "Resize and position both visuals on the report canvas."
    ],
    procedure: [
      "Open Report View and select a blank area of the canvas.",
      "In the Visualizations pane click the Clustered Bar Chart icon.",
      "Drag a category such as Product to the Axis well.",
      "Drag a numeric field such as Sales to the Values well.",
      "Add a Line chart visual and set a date field as its Axis.",
      "Place the measure in the Values well of the line chart.",
      "Format the titles, colours and labels, then resize and arrange the visuals."
    ],
    explanation: "Assigning a category to the Axis and a measure to Values tells the bar chart what to compare and by how much. The line chart uses an ordered date axis, so connecting the points highlights how a value changes over time. Formatting improves readability, and resizing positions the two visuals so that the comparison and the trend can be viewed together.",
    result: "Bar and line charts were created successfully, displaying category comparisons and trends in the data.",
    conclusion: "Choosing the right chart type makes comparisons and trends in the data immediately visible.",
    viva: [
      "Q: Which chart is best for comparing categories? A: A bar or column chart.",
      "Q: Which chart is best for showing a trend over time? A: A line chart.",
      "Q: What does the Values well contain? A: The numeric field or measure that determines the size or height of the marks.",
      "Q: Where do you choose a visual type? A: In the Visualizations pane."
    ],
    output: "No output screenshot was recorded in the source journal; the saved charts in the report demonstrate completion of this practical.",
    code: []
  },
  "powerbi-6": {
    problem: "Business reports need aggregated figures such as total sales and the average sales per product, which are not stored directly in the source table. This practical creates DAX measures to calculate them for use in visuals.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A loaded sample sales table and a products table",
      "A basic understanding of measures and the DAX formula bar"
    ],
    theory: "DAX, or Data Analysis Expressions, is the formula language used to create measures and calculated columns in Power BI. A measure such as Total Sales uses an aggregation like SUM over a column in a fact table. A more advanced measure can use an iterator such as AVERAGEX together with VALUES to evaluate an expression for each product and then average the results. Measures are dynamic, which means they respond to the filters applied by a visual or slicer.",
    algorithm: [
      "Load the sales and products tables into the model.",
      "Right-click a table and choose New measure.",
      "Write a Total Sales measure that sums the sales amount column.",
      "Create an Average Sales Per Product measure using an iterator over product names.",
      "Format the measures as currency or decimal numbers.",
      "Place the measures in cards or charts to display the results."
    ],
    procedure: [
      "Open Report View or Data View in Power BI Desktop.",
      "Right-click the table that will hold the measures and choose New measure.",
      "Type the Total Sales formula in the formula bar and confirm it.",
      "Create a second measure for Average Sales Per Product.",
      "Set an appropriate number format for each measure.",
      "Drag the measures into a card or chart to see their values.",
      "Check that the values respond correctly to slicers or filters."
    ],
    explanation: "The Total Sales measure sums the sales amount column, while the Average Sales Per Product measure iterates over the product names and averages the total sales for each. Storing these calculations as measures means they recalculate whenever the filter context changes, so a slicer on year or region updates them automatically. Note that the DAX shown in the source is an example structure, not a verified copy of the student's handwriting; the exact table and column names may differ and should be checked against the original notebook.",
    result: "DAX measures for Total Sales and Average Sales Per Product were created and used in visualizations.",
    conclusion: "DAX measures provide reusable, filter-aware calculations that turn raw columns into meaningful business figures.",
    viva: [
      "Q: What does DAX stand for? A: Data Analysis Expressions, the formula language of Power BI.",
      "Q: Which function sums a column of values? A: SUM, for example SUM over a sales amount column.",
      "Q: What does AVERAGEX do? A: It evaluates an expression row by row over a table and averages the results.",
      "Q: Why use a measure instead of a calculated column? A: A measure responds dynamically to filters and slicers in the report."
    ],
    output: "No output screenshot was recorded in the source journal; the DAX measures saved in the model demonstrate completion of this practical.",
    notes: [
      "The DAX in js/data/powerbi.js is the source transcription's example structure, not a verified copy of the student's handwritten formula; exact column and table names may differ."
    ]
  },
  "powerbi-7": {
    problem: "A static report cannot answer questions for every viewer, so a dashboard needs slicers and filters that let users explore the data interactively. This practical designs such an interactive dashboard in Power BI Desktop.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A sample Excel or CSV dataset loaded into the report",
      "Basic familiarity with Report View and the Visualizations pane"
    ],
    theory: "Slicers are visuals that let a viewer filter the whole report or selected visuals by clicking values such as year, category or region. Filters can also be applied at the visual, page or report level, and slicers can be synchronised across pages so that a choice carries over. Interactivity makes a dashboard useful to a wider audience because each viewer can explore the figures that matter to them.",
    algorithm: [
      "Open an existing report in Report View.",
      "Add a slicer visual from the Visualizations pane.",
      "Assign a field such as Year, Category or Region to the slicer.",
      "Add page-level and visual-level filters where needed.",
      "Format the slicer to a suitable style and size.",
      "Synchronise the slicer across pages if the report has several pages.",
      "Test the dashboard by selecting different slicer values."
    ],
    procedure: [
      "Open the report in Report View and choose a blank area for the slicer.",
      "In the Visualizations pane select the Slicer visual.",
      "Drag a suitable field into the slicer's field well.",
      "Use the Filters pane to set page-level or visual-level filters.",
      "Format the slicer with an appropriate style, orientation and size.",
      "If the report has multiple pages, use Sync slicers to share the selection.",
      "Click different slicer values and confirm the visuals update, then save the report."
    ],
    explanation: "A slicer is a visual that applies a filter based on the value the viewer selects, so every connected visual updates instantly. Page-level and visual-level filters narrow the data further without adding more controls to the canvas. Synchronising slicers keeps a consistent selection across pages, which makes the dashboard feel like one connected tool.",
    result: "An interactive dashboard with slicers and filters was designed in Power BI Desktop.",
    conclusion: "Slicers and filters turn a static report into an interactive dashboard that viewers can explore.",
    viva: [
      "Q: What is a slicer? A: A visual that lets the viewer filter a report by selecting values from a field.",
      "Q: Where can filters be applied in Power BI? A: At the visual, page or report level using the Filters pane.",
      "Q: What does syncing a slicer do? A: It carries the same selection across multiple report pages.",
      "Q: How does a slicer affect other visuals? A: Selecting a value filters the connected visuals so they show only the matching data."
    ],
    output: "No output screenshot was recorded in the source journal; completion is represented by the saved interactive Power BI report.",
    code: [],
    notes: [
      "Only the index AIM was legible in the source journal; no step-by-step page or screenshot was recovered."
    ]
  },
  "powerbi-8": {
    problem: "A dashboard must combine several well-chosen visuals into one attractive, readable screen that answers key business questions at a glance. This practical builds an interactive and visually appealing dashboard from a provided dataset.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "The provided sample dataset in Excel or CSV form",
      "Familiarity with visuals, themes and the Format pane"
    ],
    theory: "An effective dashboard selects a small set of visuals that together tell a clear story, such as KPI cards, charts and a table. Visual consistency is achieved through a common theme, a coherent colour palette and an aligned layout. Interactivity comes from slicers and cross-highlighting, which let the audience explore the figures. Cards are often placed prominently to show headline key performance indicators.",
    algorithm: [
      "Load the provided dataset into Power BI Desktop.",
      "Create a new report page and choose a consistent theme.",
      "Add KPI cards for the headline figures.",
      "Add several supporting charts such as bars, lines and a table.",
      "Include slicers so the viewer can filter the dashboard.",
      "Apply consistent titles, colours and formatting across visuals.",
      "Align and resize the visuals into a balanced layout.",
      "Save the report after testing the interactions."
    ],
    procedure: [
      "Load the provided dataset and open a blank report page.",
      "Choose a theme from the View ribbon to set consistent colours and fonts.",
      "Add card visuals for the key figures and place them at the top.",
      "Insert bar, line and table visuals for supporting detail.",
      "Add slicers for the main filter fields.",
      "Use the Format pane to set titles, colours and data labels consistently.",
      "Align and resize the visuals, then save and test the dashboard."
    ],
    explanation: "Starting with a theme gives every visual a common look, which makes the dashboard easier to read. Cards surface the most important numbers first, while charts and a table provide the supporting detail behind them. Slicers and cross-highlighting keep the page interactive so that viewers can change the filter and immediately see the effect.",
    result: "An interactive and visually appealing dashboard was created in Power BI Desktop from the provided dataset.",
    conclusion: "A clear theme, well-chosen visuals and interactivity together produce an effective dashboard.",
    viva: [
      "Q: Why use a consistent theme? A: It makes all visuals share the same look and improves readability.",
      "Q: What are KPI cards used for? A: To display headline figures prominently on the dashboard.",
      "Q: How do you keep a dashboard interactive? A: By adding slicers and enabling cross-highlighting between visuals.",
      "Q: What makes a dashboard visually appealing? A: Consistent colours, clear titles, an aligned layout and a sensible mix of visuals."
    ],
    output: "No output screenshot was recorded in the source journal; the saved dashboard report demonstrates completion of this practical.",
    code: [],
    notes: [
      "Only the index AIM was legible in the source journal; no step-by-step page or screenshot was recovered."
    ]
  },
  "powerbi-9": {
    problem: "Sales performance needs to be monitored through an online dashboard that combines charts, filters and published access. This practical creates a sales dashboard in Power BI Desktop and shares it online through the Power BI Service.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A sample sales dataset in Excel or CSV form",
      "A Power BI account for publishing the report online"
    ],
    theory: "A sales dashboard typically tracks figures such as revenue by product, sales over time and performance by region using charts and cards. Once the report is designed in Power BI Desktop, it can be published to the Power BI Service, where it becomes accessible through a browser. Visuals in a published report remain interactive, so viewers can use slicers to explore the data online.",
    algorithm: [
      "Load a sales dataset into Power BI Desktop.",
      "Create visuals such as cards, bar charts and a trend line.",
      "Add slicers for fields like date, product or region.",
      "Format the report page for clarity.",
      "Publish the report to a Power BI workspace.",
      "Open the published report in the Power BI Service and test its visuals."
    ],
    procedure: [
      "Load the sales dataset and open Report View.",
      "Add card visuals for total sales and other headline figures.",
      "Insert a bar chart for sales by product or region and a line chart for sales over time.",
      "Add slicers for the main filter fields.",
      "Format the visuals and arrange them neatly on the page.",
      "Click Publish on the Home ribbon and choose a destination workspace.",
      "Open the report in the Power BI Service and test the interactions."
    ],
    explanation: "The desktop report is where the sales visuals are built, using cards for headline numbers and charts for comparisons and trends. Publishing sends the report and its model to the Power BI Service so it can be viewed in a browser without Power BI Desktop. Because the slicers are part of the report, the online version stays interactive for remote viewers.",
    result: "An online sales dashboard with visualizations was created and published through the Power BI Service.",
    conclusion: "Publishing a sales dashboard online makes the visualizations available to viewers beyond the authoring machine.",
    viva: [
      "Q: What is the Power BI Service? A: The online platform where published reports and dashboards are hosted and viewed.",
      "Q: Which visuals suit a sales dashboard? A: Cards for totals, bar charts for comparisons and line charts for trends.",
      "Q: How is a report published? A: By clicking Publish in Power BI Desktop and selecting a workspace.",
      "Q: Do slicers still work online? A: Yes, the published report keeps its interactivity."
    ],
    output: "No output screenshot was recorded in the source journal; the published sales report demonstrates completion of this practical.",
    code: [],
    notes: [
      "Only the index AIM was legible in the source journal; no step-by-step page or screenshot was recovered."
    ]
  },
  "powerbi-10": {
    problem: "Technical sales data contains several dimensions and measures that must be examined together, so a dashboard should make full use of suitable visuals and filters. This practical builds such a dashboard in Power BI Desktop.",
    requirements: [
      "Power BI Desktop installed on Windows",
      "A sample technical sales dataset in Excel or CSV form",
      "Familiarity with visuals, slicers and the Filters pane"
    ],
    theory: "A dashboard that uses a range of visuals can present the same data in complementary ways: cards for totals, bar or column charts for comparisons, line charts for trends and tables or matrices for detail. Filters and slicers narrow the data so each viewer can focus on a product, region or time period. Using several appropriate visual types helps reveal patterns that a single chart might hide.",
    algorithm: [
      "Load the technical sales dataset into Power BI Desktop.",
      "Plan which measures will be shown as cards and charts.",
      "Add cards for headline sales figures.",
      "Create bar, line and table visuals for comparisons, trends and detail.",
      "Add slicers and page-level filters for the main dimensions.",
      "Format the visuals consistently and arrange them on the page.",
      "Test the filters and save the completed dashboard."
    ],
    procedure: [
      "Load the technical sales data and open Report View.",
      "Add card visuals for the main sales totals.",
      "Insert a bar chart for product or category comparisons.",
      "Insert a line chart to show sales over time.",
      "Add a table or matrix for detailed figures.",
      "Place slicers on the page and set page-level filters in the Filters pane.",
      "Format the visuals, arrange the layout, test the filters and save."
    ],
    explanation: "Each visual answers a different question: cards give totals at a glance, bars compare categories, lines show change over time and a table supplies precise detail. Slicers and filters connect the visuals so that one selection updates the whole dashboard. Combining several visual types gives a fuller picture of the technical sales data than any single chart.",
    result: "A technical sales dashboard using a variety of visualizations and filters was created in Power BI Desktop.",
    conclusion: "Combining suitable visuals with filters produces a dashboard that supports a thorough analysis of technical sales data.",
    viva: [
      "Q: Why use several visual types in one dashboard? A: Different visuals reveal different patterns in the same data.",
      "Q: Which visual shows precise row-level figures? A: A table or matrix.",
      "Q: What is the role of a filter? A: It limits the data shown in a visual or on a page.",
      "Q: How do slicers help the viewer? A: They let the viewer choose values and update all connected visuals."
    ],
    output: "No output screenshot was recorded in the source journal; the saved dashboard report demonstrates completion of this practical.",
    code: [],
    notes: [
      "Only the index AIM was legible in the source journal; no step-by-step page or screenshot was recovered."
    ]
  }
});
