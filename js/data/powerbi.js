/* Power BI practicals — extracted from PowerBI_Practical_Journal_Kashif_Sayyad_Roll50.pdf
   Experiment 1 is fully transcribed in the source; Experiments 2–6 have AIMs from the index plus
   supporting text recovered via OCR; Experiments 7–10 have only their authentic index AIMs and the
   source's own caution notes. No formulas or screenshots were invented. */
window.PECL = window.PECL || {};
window.PECL.powerbi = [
  {
    id: "powerbi-1",
    n: 1,
    subject: "powerbi",
    title: "Install Power BI Desktop and Explore the Interface",
    date: "21-7-26",
    pdfPages: "PDF p. 4",
    src: "Journal pp. 4–5",
    aim: "Install Power BI Desktop and explore the Interface components such as Report View, Data View and Model View.",
    definition: "Power BI is a powerful business analytics tool developed by Microsoft. It enables users to connect to various data sources, transform raw data into meaningful insights, and create interactive dashboards and reports. Power BI offers robust data modeling capabilities and a wide range of visualizations to help users make data-driven decisions. It is part of the Microsoft Power Platform and is widely used in industries for business intelligence (BI) and data analytics.",
    objectives: [
      "Understand the Installation Process of Power BI Desktop.",
      "Learn the Layout and components of the Power BI Desktop interface.",
      "Explore different views available in Power BI: Report, Data, and Model.",
      "Identify the usage of the Ribbon, Fields Pane, and Visualizations Pane.",
      "Gain initial hands-on experience with Power BI Desktop."
    ],
    procedure: [
      "Download Power BI Desktop: visit the official Power BI website; navigate to Products → Power BI; click on the Download free / Microsoft Store option; choose the appropriate version and begin downloading.",
      "Install Power BI Desktop: locate the downloaded setup file; double-click to launch the installer; accept the licence agreement and proceed through the installation steps; after installation, launch Power BI Desktop."
    ],
    theory: "Power BI Interface Overview\n• Ribbon — located at the top; provides tabs such as Home, Insert, Modeling, View, Optimize, Help.\n• Report View — default canvas used for creating visual reports. Add data to your report and build visualizations.\n• Data View (Table View) — allows you to see and work with the loaded data tables.\n• Model View — used to manage relationships between tables in the data model.\n• Fields Pane — displays all available tables and columns/fields that can be used in visualizations.\n• Visualizations Pane — contains chart types and formatting options for building visuals.",
    result: "Successfully installed Power BI Desktop and explored its user interface. Identified different views such as Report, Data and Model. This practical lays the foundation for creating data visualizations and performing data analytics using Power BI.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "powerbi-2",
    n: 2,
    subject: "powerbi",
    title: "Import Data from Excel and Perform basic Transformations Using Power Query",
    date: "28-7-26",
    pdfPages: "PDF p. 5",
    src: "Journal pp. 5–6",
    aim: "Import Data from Excel and Perform basic Transformations Using Power Query",
    procedure: [
      "Get Data from Excel: open Power BI Desktop; on the Home tab click Get Data → Excel Workbook (or Excel); browse and select the Excel file (e.g., Sales Data.xlsx); in the Navigator window, select the required sheet/table and click Transform Data (or Load).",
      "Basic Transformations in Power Query Editor: remove blank rows (Home → Remove Rows → Remove Blank Rows); change data types of columns (select column → Data Type dropdown: Whole Number, Decimal, Date, Text, etc.); rename columns as required; filter rows if needed; remove duplicate rows if present; after changes, click Close & Apply to load the cleaned data into Power BI."
    ],
    result: "Data successfully imported from Excel and basic transformations performed in Power Query. Cleaned data is available in the Fields pane for visualization.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected.",
      "Source verification status: AIM from index; steps reconstructed from OCR."
    ]
  },
  {
    id: "powerbi-3",
    n: 3,
    subject: "powerbi",
    title: "Handle Missing Values and Change Data types in Power BI",
    date: "10/8/26",
    pdfPages: "PDF p. 6",
    src: "Journal pp. 6–7",
    aim: "Handle Missing Values and Change Data types in Power BI",
    objectives: [
      "To understand what missing values are in datasets.",
      "To learn how to identify and handle missing values in Power BI using Power Query.",
      "To understand the importance of correct data types.",
      "To learn how to change and manage data types in Power BI."
    ],
    procedure: [
      "Open Power BI and load data: open Power BI Desktop → Home → Get Data → choose data source (e.g. Excel) → select file and load / transform.",
      "Identify Missing Values: in Power Query Editor look for blanks or null values. Null values usually appear as the word null or empty cells.",
      "Handle Missing Values: replace values / replace nulls with a default (e.g. 0, \"Unknown\"); remove rows that contain missing values (Home → Remove Rows); fill down / fill up where appropriate.",
      "Change Data Types: select column → Data Type (Whole Number, Decimal Number, Date, Text, True/False, etc.). Apply changes and Close & Apply."
    ],
    result: "Missing values handled and data types correctly set. Data is ready for modeling and visualization.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected.",
      "Source verification status: AIM + objectives from OCR of source pages."
    ]
  },
  {
    id: "powerbi-4",
    n: 4,
    subject: "powerbi",
    title: "Create Relationships between multiple tables in Power BI using the Data Model",
    date: "18/8/26",
    pdfPages: "PDF p. 7",
    src: "Journal pp. 7–8",
    aim: "Create Relationships between multiple tables in Power BI using the Data Model",
    procedure: [
      "Load multiple related tables into Power BI (e.g., Sales, Products, Customers, Date).",
      "Go to Model View.",
      "Drag the primary key from one table to the foreign key in another table to create a relationship.",
      "Verify cardinality (One-to-Many, Many-to-One, etc.) and cross-filter direction.",
      "Ensure the model follows a star schema where possible.",
      "Save the relationships."
    ],
    result: "Relationships between multiple tables successfully created in the Data Model. Tables are now linked for analysis and visualization.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "powerbi-5",
    n: 5,
    subject: "powerbi",
    title: "Create Bar and Line charts to visualize Data in Power BI",
    date: "1/9/26",
    pdfPages: "PDF p. 8",
    src: "Journal pp. 8–9",
    aim: "Create Bar and Line charts to visualize Data in Power BI",
    procedure: [
      "Open Report View.",
      "From Visualizations pane select Clustered Bar Chart / Clustered Column Chart.",
      "Drag appropriate fields to Axis and Values (e.g., Product to Axis, Sales to Values).",
      "Create a Line Chart: select Line chart visual, assign Date/Category to Axis and measure to Values.",
      "Format titles, data labels, colors, and legends as required.",
      "Resize and position the visuals on the canvas."
    ],
    result: "Bar and Line charts successfully created to visualize the data. Charts display meaningful comparisons and trends.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "powerbi-6",
    n: 6,
    subject: "powerbi",
    title: "Calculate Total Sales and Average Sales Per Product using DAX in Power BI",
    date: "07/9/26",
    pdfPages: "PDF p. 9",
    src: "Journal pp. 9–10",
    aim: "Calculate Total Sales and Average Sales Per Product using DAX in Power BI",
    code: [
      {
        file: "measures.dax",
        lang: "sql",
        src: String.raw`Total Sales = SUM( Sales[SalesAmount] )

Average Sales Per Product =
AVERAGEX(
    VALUES( Products[ProductName] ),
    [Total Sales]
)

-- Alternative simple form often used:
Avg Sales = AVERAGE( Sales[SalesAmount] )`
      }
    ],
    procedure: [
      "In Report View or Data View, right-click the table → New measure.",
      "Enter the DAX formula for Total Sales.",
      "Create another measure for Average Sales Per Product.",
      "Use the measures in visuals (cards, charts)."
    ],
    result: "DAX measures for Total Sales and Average Sales Per Product created and used in visualizations.",
    notes: [
      "The DAX above is the source transcription's example structure, not a verified copy of the student's handwritten formula; exact column and table names may differ. Verify against the original notebook for the precise field names."
    ]
  },
  {
    id: "powerbi-7",
    n: 7,
    subject: "powerbi",
    title: "Design interactive dashboards with slicers and filters in Power BI",
    date: "15-9-26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 10–20",
    aim: "Design interactive dashboards with slicers and filters in Power BI",
    code: [],
    notes: [
      "This is a dashboard-design practical; the source journal contains no program code for it, so a code block is not expected.",
      "Content note: Add slicers (e.g., Year, Category, Region), page-level and visual-level filters, sync slicers across pages, and format interactive elements.",
      "Full detailed step-by-step procedures, exact dataset field names, DAX (if any), and screenshots of the final dashboard visuals from the handwritten pages could not be recovered at high confidence via OCR of the scanned notebook. The AIM is taken from the original index. No content has been invented."
    ]
  },
  {
    id: "powerbi-8",
    n: 8,
    subject: "powerbi",
    title: "Create an interactive and visually appealing dashboard in Power BI using the data set provided",
    date: "21-9-26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 10–20",
    aim: "Create an interactive and visually appealing dashboard in Power BI using the data set provided. The dashboard should include at least...",
    code: [],
    notes: [
      "This is a dashboard-design practical; the source journal contains no program code for it, so a code block is not expected.",
      "Content note: Comprehensive dashboard with multiple visuals, consistent theme, titles, cards for KPIs, and interactivity.",
      "Full detailed step-by-step procedures, exact dataset field names, DAX (if any), and screenshots of the final dashboard visuals from the handwritten pages could not be recovered at high confidence via OCR of the scanned notebook. The AIM is taken from the original index. No content has been invented."
    ]
  },
  {
    id: "powerbi-9",
    n: 9,
    subject: "powerbi",
    title: "Create an online Sales dashboard and use visualizations",
    date: "28-9-26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 10–20",
    aim: "Create an online Sales dashboard and use visualizations",
    code: [],
    notes: [
      "This is a dashboard-design practical; the source journal contains no program code for it, so a code block is not expected.",
      "Content note: Sales-focused dashboard published/shared online (Power BI Service) with relevant charts and filters.",
      "Full detailed step-by-step procedures, exact dataset field names, DAX (if any), and screenshots of the final dashboard visuals from the handwritten pages could not be recovered at high confidence via OCR of the scanned notebook. The AIM is taken from the original index. No content has been invented."
    ]
  },
  {
    id: "powerbi-10",
    n: 10,
    subject: "powerbi",
    title: "Create a dashboard for technical sales data use all useful visualizations and filters",
    date: "29-9-26",
    pdfPages: "PDF p. 10",
    src: "Journal pp. 10–20",
    aim: "Create a dashboard for technical sales data use all useful visualizations and filters",
    code: [],
    notes: [
      "This is a dashboard-design practical; the source journal contains no program code for it, so a code block is not expected.",
      "Content note: Technical sales data dashboard employing a wide range of visuals and filters for analysis.",
      "Full detailed step-by-step procedures, exact dataset field names, DAX (if any), and screenshots of the final dashboard visuals from the handwritten pages could not be recovered at high confidence via OCR of the scanned notebook. The AIM is taken from the original index. No content has been invented."
    ]
  }
];
