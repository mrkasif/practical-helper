/* Cyber Forensics practicals — extracted from Cyber_Forensics_Practical_Journal_Kashif_Sayyad_Roll50.pdf
   All 8 experiments are fully transcribed in the source (AIM, procedure/theory, commands, sample
   outputs, conclusions). Hand-drawn UI mock-ups are represented by the source's descriptive text. */
window.PECL = window.PECL || {};
window.PECL.cyber = [
  {
    id: "cyber-1",
    n: 1,
    subject: "cyber",
    title: "Digital Evidence Collection & Preservation: Handling & Documentation of Digital Evidence",
    date: "30-7-26",
    pdfPages: "PDF pp. 4–6",
    src: "Journal pp. 4–15",
    aim: "Digital Evidence Collection & Preservation: Handling & Documentation of digital Evidence.",
    definition: "Digital evidence is information of probative value that is stored or transmitted in an electronic format which can be used in a court of law. It includes data from electronic devices like computers, smartphones and social media and can be used to prosecute all types of crimes, not just cybercrime. Examples include emails, text messages, photos, videos and browsing histories.",
    theory: "Key Characteristics of Digital Evidence\n• Digital Format: Information exists in a binary form of 0s and 1s.\n• Broad range of sources: It can be found on a vast array of devices and platforms from personal computers and phones to cloud services, social media and even smart home appliances.\n• Differentiated from Physical Evidence: Unlike traditional evidence, digital evidence can be easily copied, modified, or deleted, making proper handling and chain of custody critical for admissibility in court.\n\nDigital Footprint\nIt often includes both active data (like posts) and passive data (like browsing history) that users leave behind.\n\nExamples of Digital Evidence\n• Communication: Emails, text messages, instant messages, social media posts and chat logs.\n• Files: Documents, Spreadsheets, and Presentations.\n• Multimedia: Digital photos and videos.\n• Metadata: Data about data, such as the time a file was created or modified.\n• Logs: Phone call logs, website access logs (IP logs) and transaction logs.\n• Location data: GPS tracks and location data from mobile devices.\n• Surveillance footage: Digital video and audio recordings from sources like CCTV.\n\nProcess Involved in Digital Evidence Collection\n• Data collection: In this process, data is identified and collected for investigation.\n• Examination: In the second step, the collected data is examined carefully.\n• Analysis: In this process, different tools and techniques are used and the collected evidence is analysed to reach some conclusion.\n• Reporting: In this final step all the documentation and reports are compiled so that they can be submitted in court.\n\nFig: Process of Digital Evidence Collection\nData Collection → Examination → Analysis → Reporting\nMedia → Data → Information → Evidence\n\nTypes of Collectible Data\n• Persistent data: It is the data that is stored on a non-volatile memory type storage device such as a local hard drive, external storage devices like SSDs, HDDs, Pen drives, CDs. The data on these devices is preserved even when the computer is turned off.\n• Volatile data: It is the data that is stored on a volatile memory type storage such as memory registers, cache, RAM, or it exists in transit, that will be lost once the Computer is turned off or if it loses Power. Since volatile data is evanescent, an investigator must know how to reliably capture it.\n\nTypes of Evidence\n• Real Evidence: These pieces of evidence involve physical or tangible evidence such as flash drives, hard drives, and documents; an eyewitness can also be considered as a shred of tangible evidence.\n• Hearsay Evidence: These pieces of evidence are referred to as out-of-court statements. These are made in courts to prove the truth of the matter.\n• Original Evidence: These are the pieces of evidence of a statement that is made by a person who is not a testifying witness. It is to prove that the statement was made rather than to prove its truth.\n• Testimony: Testimony is when a witness takes oath in a court of law and gives their statement in court. The shreds of evidence presented should be authentic, accurate, reliable and admissible as they can be challenged in court.\n\nAdvantages of Digital Evidence Forensics in Cyber Security\n• It is vital to keep computer systems and other digital evidence devices safe.\n• Evidence can be produced when needed in a court of law for the authorities to pass judgement.\n• In case the systems & networks are compromised in all parts of the world quickly.\n• Take out, analyse, and explain the evidence in law court to show one is criminal behaviour.\n\nChallenges Faced During Digital Evidence Collection\n• Evidence should be handled with utmost care as data is stored in electronic media and it can get damaged easily.\n• Collecting data from volatile storage.\n• Recovering lost data.\n• Ensuring the integrity of collected data.\n\nDigital Evidence Preservation\nDigital evidence preservation involves capturing data without alteration using methods like forensic imaging (bit-for-bit copies) and write blockers, maintaining a strict chain of custody through detailed logging, ensuring data integrity via hashing (checksums), and storing media securely in controlled environments while documenting all steps meticulously. Key is not altering the original device, capturing volatile data quickly, and working with forensic experts for proper collection, analysis, and Court admissibility.\n\nCore Preservation Techniques\n• Forensic Imaging: Creating an exact bit-for-bit replica (image) of the original storage device, allowing analysis on the copy, not the original.\n• Write Blockers: Hardware or software tools that prevent any changes (writes) to the original evidence during data acquisition, ensuring integrity.\n• Hashing (Checksums): Generating unique digital fingerprints (hashes) of data at collection and verifying them later to confirm no tampering occurred.\n• Chain of Custody: Meticulously documenting who handled the evidence, when, where, and why, from collection to court.\n• Data Preservation (Volatile vs Persistent): Capturing ephemeral data (RAM, cache) quickly before it's lost while preserving persistent data (hard drives).\n\nBest Practices during Collection & Handling\n• Document Everything: Note the device's physical condition, location, and power status (if on, leave it on).\n• Isolate & Secure: Use Faraday bags or network isolation (airplane mode) to prevent remote access.\n• Secure Storage: Keep devices in secure, climate-controlled environments (evidence lockers/servers).\n• Authorization: Ensure proper legal authority (warrants, consent) before seizing devices.\n• Specialized Tools: Use dedicated forensic workstations and software for analysis.\n\nAdvanced / Complementary Methods\n• Digital Signatures & Time-Stamps: Add authority and traceability.\n• Blockchain / Steganography: Can secure integrity and confidentiality in complex cases.\n\nKey Principle\n• Non-Alteration: The fundamental goal is to preserve the original evidence's state, ensuring its authenticity and admissibility in legal proceedings.",
    output: "Evidence Collected (Practical Observation)\n#\tType\tStatus\tDistance\tNotes\n1\tCamera\tActive\t175 inches from site\tFaced opposite\n2\tMobile\tActive\t76 inches\t\n3\tMobile\tOff\t66 inches\t\n4\tSmart watch\tActive\t18 inches\t\n5\tStorage device (Pendrive)\tActive\t4 inches\t\n6\tEar phones\tActive\t3 inches\t\n7\tSmart watch\tOff\t16 inches\t\n8\tPendrive (Storage device)\tOff\t14 inches\t",
    conclusion: "Digital evidence collection is crucial in cyber security. It serves as the backbone for investigating Cybercrimes and breaches. This process involves the accurate gathering, preservation, and analysis of data from various digital sources, including computers, networks, and mobile devices. Effective evidence collection requires conformance to legal and procedural standards to ensure that the evidence remains intact and admissible in court. Advanced tools and techniques such as forensic imaging and live memory analysis are employed to capture volatile data and trace cyber threats accurately. Ultimately, the ability to collect and analyze digital evidence not only aids in solving crimes but also strengthens overall cyber security defenses by identifying vulnerabilities and preventing future incidents.",
    notes: [
      "This practical is theory-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "cyber-2",
    n: 2,
    subject: "cyber",
    title: "Acquire a Forensically Sound Image of drive using FTK Imager and verify integrity using hash value",
    date: "20-8-26",
    pdfPages: "PDF p. 7",
    src: "Journal pp. 16–21",
    aim: "Acquire a forensically sound image of drive using FTK Imager and verify integrity of the drive.",
    requirements: [
      "FTK Imager Software",
      "Smart drive / Pendrive or memory card and HDD also"
    ],
    procedure: [
      "Download FTK Imager from extera.com (AccessData website).",
      "Install FTK Imager by following the installation wizard steps.",
      "After successful installation, launch FTK Imager. The following window will open.",
      "Attach the drive to the system and click on 'Create Disk Image' button available in the toolbar.",
      "Select source by clicking on the appropriate drive as shown in the figure and click Next.",
      "Select the source drive from the shown available drives.",
      "Click on Next. After selecting a source drive, choose the correct image type by clicking on the Add button.",
      "After clicking on Add, select / choose an Image type and click on Next button.",
      "Enter information about the evidence (Case Number, Evidence Number, Unique Description, Examiner, Notes).",
      "After entering the details, click Next. Choose a destination folder, give a file name for the image, and click Finish.",
      "As soon as you click Finish, you return to the previous window.",
      "Click on the Start button.",
      "As soon as you click Start, FTK Imager will start imaging your drive.",
      "After successful imaging, the resultant file and the report are saved in the specified folder.",
      "Steps to verify: After successful imaging of the resultant file and the report.",
      "If you want to manually verify the image, click on File menu and select Verify Image and follow the step wizard.",
      "MD5 and SHA verify the integrity and produce the result if both algorithms match.",
      "If both algorithms match the hash value, then it proves the integrity of the data.",
      "End."
    ],
    conclusion: "Hence we created and examined the image of a physical drive using FTK Imager.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "cyber-3",
    n: 3,
    subject: "cyber",
    title: "Setup a case file in Autopsy and add disk image & navigate the interface to view basic file structure",
    date: "27-8-26 / 2-9-26",
    pdfPages: "PDF p. 8",
    src: "Journal pp. 22–28",
    aim: "Setup a case file in Autopsy and add disk image & navigate the interface to view the basic file structure.",
    procedure: [
      "Install Autopsy Software (latest version).",
      "Open Autopsy and click on New Case.",
      "In the New Case Information window, enter the case details like Case Name, Base Directory. Select Single-user and click Next.",
      "Click Next and enter optional details such as Case Number, Name, Phone, Email, Notes and click Next / Finish.",
      "After clicking Finish, the database for the selected case is created and initialized in the background.",
      "After creating the database, Autopsy will show the Add Data Source window. Click on Generate new host name based on Data Source name and click Next.",
      "Select Data Source Type – choose Disk Image or VM File or Local Disk and click Next.",
      "To select the file, click Browse or Select Disk. Select Time Zone and click Next.",
      "Configure Ingest Modules. Ingest modules analyze the evidence image automatically in the background to extract metadata, deleted files and web history. Select the modules to run (for example: Recent Activity, File Type Identification, Hash Lookup and Keyword Search).",
      "Click Next and wait for the data source to process, then click Finish.",
      "Navigate the Autopsy main interface. The Autopsy workspace is split into three core panes: (1) Left Pane – Tree Viewer – used to explore the file system volume, extracted artifacts and deleted files; (2) Result Viewer – displays the content of a file selected in the tree view; (3) Content Viewer – shows raw data of the selected file (Hex, Text, Application and Metadata).",
      "Viewing file structure: (1) Under Data Sources in the Tree Viewer, expand the disk image to view system partitions. (2) Browse directory paths like standard folders to view directory structure. (3) Expand Views → File Types to locate target data organized by extension without needing exact directory paths. (4) Highlight any file in the Result Viewer to view its Hex Headers or Metadata in the Content Viewer.",
      "Hence by following the above steps we can analyze Digital Evidence using Autopsy.",
      "End."
    ],
    conclusion: "With the help of Disk Image and using Autopsy, Digital Evidence is analyzed and Report generated.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "cyber-4",
    n: 4,
    subject: "cyber",
    title: "Conduct targeted searches / multi-keyword searches in Windows Command Prompt (Cmd), use the built-in findstr command",
    date: "23/9/26",
    pdfPages: "PDF p. 9",
    src: "Journal pp. 29–34",
    aim: "To perform basic multi-keyword searches in Windows Command Prompt (Cmd). Use the built-in findstr command.",
    procedure: [
      "Basic Single Keyword Search – search for a specific word in a single file, make it case-insensitive, search across all .txt files, and search recursively (commands below).",
      "Multi-keyword Search (OR logic) – to find lines containing either keyword1 OR keyword2, separate the terms with a space inside the quotes. To search for keywords that contain spaces, use the /c: flag for each term.",
      "Multi-keyword Search (AND logic) – to find lines containing both keyword1 AND keyword2 on the same line, pipe two findstr commands together.",
      "Useful Options & Modifiers – see the flag table in the output section.",
      "Exporting Search Results – save the search results directly into a new text file."
    ],
    code: [
      {
        file: "1_single_keyword.cmd",
        lang: "bash",
        src: String.raw`findstr "keyword" filename.txt
findstr /i "keyword" filename.txt
findstr /i "keyword" *.txt
findstr /s /i "keyword" *.txt`
      },
      {
        file: "2_multi_keyword_or.cmd",
        lang: "bash",
        src: String.raw`findstr /i "keyword1 keyword2" filename.txt
findstr /i /c:"first keyword" /c:"second keyword" filename.txt`
      },
      {
        file: "3_multi_keyword_and.cmd",
        lang: "bash",
        src: String.raw`findstr /i "keyword1" filename.txt | findstr /i "keyword2"`
      },
      {
        file: "4_useful_options.cmd",
        lang: "bash",
        src: String.raw`findstr /n /i "error" log.txt
findstr /m /i "fail" *.log
findstr /v /i "debug" log.txt
findstr /b /i "Start" log.txt
findstr /e /i "Done" log.txt`
      },
      {
        file: "5_export_results.cmd",
        lang: "bash",
        src: String.raw`findstr /s /n /i "error warning" *.log > search_results.txt`
      }
    ],
    output: "Flag\tFunction\tExample\n/n\tDisplay the line number before each matching line\tfindstr /n /i \"error\" log.txt\n/m\tPrints only the file names that contain a match\tfindstr /m /i \"fail\" *.log\n/v\tInverts the match (prints lines that do not contain the keyword)\tfindstr /v /i \"debug\" log.txt\n/b\tMatches the keyword only if it occurs at the beginning of a line\tfindstr /b /i \"Start\" log.txt\n/e\tMatches the keyword only if it occurs at the end of a line\tfindstr /e /i \"Done\" log.txt\n\nSample Output (Single-keyword search)\nC:\\Users\\Public\\Documents> dir\n Directory of C:\\Users\\Public\\Documents\n 21/09/26  10:02 AM    <DIR>          Java.txt\n 20/09/26   2:11 PM    <DIR>          Kashif.html\n 10/09/26   3:12 PM    <DIR>          Practical.html\n                3 File(s)      1,537 bytes\n                3 Dir(s)  44,232,132,216 bytes free\nC:\\Users\\Public\\Documents> findstr /s /i \"Hello\" *.txt\nC:\\Users\\Public\\Documents\\Java.txt:Hello",
    notes: []
  },
  {
    id: "cyber-5",
    n: 5,
    subject: "cyber",
    title: "Recover various file types (doc, image) from a simulated deleted partition or formatted USB drive using Autopsy file recovery module",
    date: "23/9/26",
    pdfPages: "PDF pp. 10–11",
    src: "Journal pp. 35–41",
    aim: "Recover various file types (doc, image) from a simulated deleted partition or formatted USB drive using Autopsy file recovery module.",
    definition: "Autopsy operates non-destructively by reading from an image file or physical disk without modifying the evidence source.",
    requirements: [
      "Autopsy installed on a Windows workstation.",
      "Targeted USB drive connected (or a raw/E01 image of the USB/partition).",
      "A secondary drive/location on your computer with enough free space to save recovered files."
    ],
    procedure: [
      "Create a New Case in Autopsy: Open Autopsy → New Case → fill in the Case Name (e.g., USB Recovery) and specify the Base Directory where Autopsy will store case data → click Next → enter an optional Case Number and Examiner Name, then click Finish.",
      "Add the Source Data (USB Drive or Partition Image): In the Add Data Source wizard, choose the Source type — select Local Disk if analyzing the physical formatted USB directly, or select Unallocated Space Image File / Disk Image / VM File if analyzing a raw image file (.img, .raw, .dd, .E01). Click Next, select the target drive letter or browse to the image file, set the Time Zone matching your local system, and click Next.",
      "Configure Ingest Modules for File Carving: Autopsy uses PhotoRec as its primary file carving module. On the Configure Ingest Modules screen, ensure PhotoRec Carver (extracts deleted files based on file headers/signatures across unallocated space), File Extension Mismatch Detector, and Recent Activity / Extension Analysis are checked. Highlight PhotoRec Carver to review the global settings, then click Next and Finish.",
      "Analyze and Recover Discovered Files: monitor the progress bar; in the Tree Viewer expand Views → File Types → By Extension (Images for .jpg/.png, Documents for .pdf/.docx), Views → File Types → Deleted Files, and Data Sources → [Your Drive/Image] → $Unallocated; click a file to preview it in the Result Viewer / Content Viewer.",
      "Export Recovered Files to Your Computer: select the file(s) or an entire category folder, right-click and choose Extract File(s), choose a destination directory on your local disk (outside the target USB drive), click Save, then verify that the extracted documents and images open correctly."
    ],
    conclusion: "Recovered files can be extracted from the deleted/formatted source and verified in a separate destination folder.",
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "cyber-6",
    n: 6,
    subject: "cyber",
    title: "Generate a Supertimeline using the Autopsy timeline module and analyze MACE timestamps",
    date: "24/9/26",
    pdfPages: "PDF pp. 12–13",
    src: "Journal pp. 42–49",
    aim: "To generate a Supertimeline (a unified, chronologically sorted list of every timestamped event recoverable from a piece of digital evidence) using the timeline module of Autopsy, and to analyze the modified, accessed, created and entry-changed (MACE) timestamps of files together with OS/application artifacts in order to reconstruct a sequence of user activity on the system.",
    objectives: [
      "Understand the significance of MACE timestamps in system forensics.",
      "Create a forensic case in Autopsy and add a disk image / logical evidence source.",
      "Run ingest modules – particularly the Timeline (Recent Activity) module – to extract time-stamped artifacts.",
      "Generate a Super Timeline that merges file-system events with registry, browser, log and application events.",
      "Use the timeline Counts, Details and List views to filter, zoom and drill down into a period of interest.",
      "Correlate related events to reconstruct a chronological narrative of user activity.",
      "Export the findings as a Case Report for documentation."
    ],
    theory: "MACE Timestamps\nEvery file on an NTFS/FAT file system carries a set of timestamps, commonly referred to by the acronym MACE:\n• M – Modified: the last time the file's content was changed.\n• A – Accessed: the last time the file was opened/read (NTFS records this coarsely by default).\n• C – Created: the time the file was first created at its current location.\n• E – (MFT) Entry Modified/Changed: the last time the file's metadata (permissions, name, etc.) in the Master File Table entry changed.\nBecause file operations such as copying, moving, renaming or malware execution alter these timestamps in predictable ways, a trained examiner can use MACE analysis to infer what actions occurred and when.\n\nSuper Timeline\nA single artifact's timestamp tells us very little in isolation. A super timeline aggregates MACE timestamps from every file, together with timestamped events from registry hives, browser history, event logs, LNK files, prefetch files, USB connection records, and more – into one chronologically ordered view. Analyzing this combined timeline lets an examiner reconstruct a story of user activity (e.g., a document was created, opened, copied to a USB device and then deleted) rather than looking at isolated facts.\n\nAutopsy Timeline Module\nAutopsy's built-in timeline feature automatically builds a super timeline from all ingested data sources once the Timeline/Recent Activity ingest modules have completed. It offers three coordinated views:\n• Counts (histogram) view – event volume per time unit, useful for spotting spikes of activity.\n• Details view – a swim-lane style visualization by event type/description.\n• List view – a flat sortable, filterable chronological table of individual events (the closest equivalent to a classic 'body file' timeline).",
    procedure: [
      "Launch Autopsy and start a new case. On the welcome screen click 'Create New Case' to begin the case-creation wizard.",
      "Enter Case Information: provide a unique Case Name (e.g., Cyber Lab01 Timeline Analysis), choose a Base Directory where all case data will be stored, and select the case type as Single-user. Click Next.",
      "Enter Optional Case details: fill the optional case number, examiner name and notes for documentation and audit purposes, then click Finish to create the case.",
      "Add a Data Source: select the data source type – Disk Image or VM File for an E01/dd image, or Logical Files for a folder-based collection – browse to the evidence path, set the correct time zone for the evidence system, and click Next.",
      "Configure Ingest Modules: at minimum enable Recent Activity, Hash Lookup, File Type Identification, EXIF Parser, and – critically – the Timeline module, which collects MACE timestamps and OS artifact timestamps. Click Finish to start ingest.",
      "Monitor Ingest Progress: ingest runs in the background. Wait until all modules complete.",
      "Inspect Individual File MACE timestamps: browse the Data Sources tree to a folder of interest. The file listing table displays the Modified, Accessed, Created and Changed columns for every file.",
      "Open the Timeline tool: click the Timeline button on the main toolbar. Autopsy compiles all timestamped events into the Super Timeline and opens the timeline window.",
      "Analyze the Counts (histogram) view: look for spikes or unusual clusters of activity. These are candidate periods for deeper investigation.",
      "Drill down using the List view: double-click the period of interest (or switch to List view and apply a date filter) to see every individual event in that window, sorted chronologically.",
      "Generate the Case Report: click Generate Report on the toolbar, select the report modules required (e.g., HTML Report, TSK Body File) and click Finish. The report is written to the Case's Reports folder."
    ],
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ]
  },
  {
    id: "cyber-7",
    n: 7,
    subject: "cyber",
    title: "Extracting browser history, cache, cookies and download history from Chrome and Firefox in a disk evidence image",
    date: "14/10/26",
    pdfPages: "PDF pp. 14–15",
    src: "Journal pp. 50–61",
    aim: "Extracting browser history, cache, cookies and download history from Chrome and Firefox in a disk evidence image.",
    objectives: [
      "Create an Autopsy case and ingest a forensic disk image (E01/dd/raw).",
      "Run the Recent Activity ingest module to parse Chrome and Firefox artifacts.",
      "Review Web History, Web Downloads, Web Cookies, Web Cache in the Data Artifacts tree.",
      "Manually locate and export the underlying SQLite databases and cache folders.",
      "Verify results independently, convert timestamps, and generate a report."
    ],
    theory: "Evidence Integrity Checklist\n• Never work on the original; keep it read-only (hardware write blocker if it is a physical drive) and analyse a verified copy.\n• Record the acquisition hash (MD5/SHA-1/SHA-256) from the imaging tool, then confirm it matches. Autopsy also shows the stored hash in the image's details.\n• Note the suspect system's time zone. Autopsy will ask for it when adding the image, and it affects every displayed timestamp.\n• Close other programs; ingest on large images can run for hours.\n\nTypical Browser Artifact Locations (Windows 10/11)\nArtifact\tPath\tFile / Format\nChrome History + Downloads\tLocal\\Google\\Chrome\\User Data\\Default\\\tHistory (SQLite: urls, visits, downloads tables)\nChrome Cookies\tLocal\\Google\\Chrome\\User Data\\Default\\Network\tCookies (SQLite; values encrypted)\nChrome Cache\tLocal\\Google\\Chrome\\User Data\\Default\\Cache\\Cache_Data\tdata_*, f_* cache blocks and files\nFirefox History, Bookmarks, Downloads\tRoaming\\Mozilla\\Firefox\\Profiles\\.default-release\tplaces.sqlite (moz_places, moz_historyvisits, moz_annos)\nFirefox Cookies\tRoaming\\Mozilla\\Firefox\\Profiles\\.default-release\tcookies.sqlite",
    procedure: [
      "Create a New Case: launch Autopsy and click New Case; enter a Case Name (for example, BrowserForensics_Case01) and choose a Base Directory, such as C:\\cases\\; select Single-user and click Next; fill in optional details (case number, examiner name and contact) and click Finish.",
      "Add the Evidence Image as a Data Source: select Disk Image or VM File and click Next; click Browse and pick your image file (for a split E01, select only the first segment — the rest are found automatically); set the time zone of the suspect system.",
      "Configure Ingest Modules (this is what extracts the browser data): tick Recent Activity (required — parses Chrome/Chromium and Firefox history, cookies, downloads, bookmarks, searches, autofill and cache), Hash Lookup, File Type Identification, Extension Mismatch Detector, Embedded File Extractor, and optionally Keyword Search.",
      "Review Parsed Browser History: in the left tree expand Data Artifacts; click Web History (the table lists URL, date accessed, title, referrer and Program); click a row to see details including the Source File path; sort by date or use Search/Filter to find domains.",
      "Review Downloads, Cookies and Cache: Web Downloads shows saved path, Source URL, time and Program; Web Cookies shows cookie name, value, domain, creation/expiry and Program; Web Cache shows cached content (images, HTML, scripts).",
      "Tag Findings and Generate a Report: tag important rows (right-click → Add Tag → Notable Item) with a comment; click Generate Report and choose HTML Report, Excel/CSV, or Portable Case; select the result types you need and click Finish. Reports are written into the Case's Reports folder."
    ],
    code: [
      {
        file: "independent_verification.sql",
        lang: "sql",
        src: String.raw`-- Chrome – History (visited URLs):
SELECT urls.url, urls.title, urls.visit_count,
       datetime(visits.visit_time/1000000 - 11644473600, 'unixepoch') AS visit_utc
FROM urls JOIN visits ON urls.id = visits.url
ORDER BY visits.visit_time DESC;

-- Chrome – Downloads:
SELECT target_path, tab_url, total_bytes,
       datetime(start_time/1000000, 'unixepoch') AS start_utc
FROM downloads ORDER BY start_time DESC;

-- Firefox – places.sqlite (History):
SELECT p.url, p.title, p.visit_count,
       datetime(v.visit_date/1000000, 'unixepoch') AS visit_utc
FROM moz_places p JOIN moz_historyvisits v ON p.id = v.place_id
ORDER BY v.visit_date DESC;

-- Firefox – cookies.sqlite:
SELECT host, name,
       datetime(creationTime/1000000, 'unixepoch') AS created_utc,
       datetime(lastAccessed/1000000, 'unixepoch') AS last_access_utc
FROM moz_cookies;`
      }
    ],
    notes: []
  },
  {
    id: "cyber-8",
    n: 8,
    subject: "cyber",
    title: "Part A: Trace the sender's IP and location from email headers. Part B: Recover deleted emails from a mail data file",
    date: "15/10/26",
    pdfPages: "PDF pp. 16–17",
    src: "Journal pp. 62–67",
    aim: "Part A: Trace the sender's IP and location from email headers. Part B: Recover deleted emails from a mail data file.",
    procedure: [
      "Part A – Get the full header: Gmail — open mail → menu (three dots) → Show Original; Outlook — File → Properties → Internet headers; Thunderbird — View → Headers → All / Full. Copy all of it.",
      "Part A – Paste it into the Messageheader / MXToolbox analyzer (or keep it in a text editor). It lists hops with delays.",
      "Part A – Read the Received lines bottom to top. The lowest line that still shows a public IP in [brackets] is the best lead for the sender's connection. Ignore private ranges (10.x, 172.16–31.x, 192.168.x).",
      "Part A – Check authenticity: SPF, DKIM and DMARC should pass. A fail or a From domain different from Return-Path suggests spoofing.",
      "Part A – Note extra clues: X-Originating-IP, Message-ID domain, and the Date time zone.",
      "Part A – Look up the IP: paste it into the lookup site. Record ISP, ASN, city, country, and the time of lookup. Run whois or nslookup for the owner and reverse DNS.",
      "Part A – Record findings with the header text, the lookup screenshot and the date. For a real case, the ISP's subscriber details can only be obtained through legal process.",
      "Part B – Copy and hash: close Outlook/Thunderbird, copy the PST/OST (or mbox) to a working folder and note its hash with sha256sum suspect.pst. Work only on the copy.",
      "Part B – Check the visible mail first: open the copy and look in Deleted Items / Trash. Deleted mail not yet emptied is recoverable by simply moving it out.",
      "Part B – Recover deleted and orphaned items from the file (PST/OST) using readpst -D -r -o out_readpst suspect.pst and pffexport -m all -t out_pff suspect.pst, or use Autopsy's Email Parser module (messages appear under Data Artifacts → Email Messages).",
      "Part B – Thunderbird / mbox: deleted messages stay in the file until the folder is compacted. Search the mbox for X-Mozilla-Status: 0009 or 0008 (deleted flags) and copy the matching 'From ' blocks into new .eml files.",
      "Part B – Review output: the export folder holds normal folders; the recovered folder holds items that no longer appear in the mailbox. Open each .eml message and run Part A on its header.",
      "Part B – Hash and document: hash every exported item, record the tool names and versions, the commands used and the count of recovered messages."
    ],
    code: [
      {
        file: "part_a_sample_output.txt",
        lang: "bash",
        src: String.raw`# Received line (public IP)
Received: from [203.0.113.45] by mail.isp-a.example.com
         with ESMTPSA id ... ; ...

# Reverse DNS
Server: 127.0.0.53
Address: 127.0.0.53#53
Non-authoritative answer:
45.113.0.203.in-addr.arpa  name = host-45.isp-a.example.

# Ownership (whois)
inetnum: 203.0.113.0 - 203.0.113.255
netname: ISP-A-BROADBAND
descr: ISP-A Broadband Ltd
country: IN
origin: AS64500
source: APNIC

# Geolocation (ipinfo.io)
{
  "ip": "203.0.113.45",
  "hostname": "host-45.isp-a.example",
  "city": "Pune",
  "region": "Maharashtra",
  "country": "IN",
  "loc": "18.52,73.86",
  "org": "AS64500 ISP-A Broadband Ltd"
}`
      },
      {
        file: "part_b_commands_and_output.txt",
        lang: "bash",
        src: String.raw`$ sha256sum suspect.pst
a1b2c3d4...  suspect.pst
$ readpst -D -r -o out_readpst suspect.pst
Opening PST file and indexes...
Processing Folder "Inbox"
Processing Folder "Sent Items"
Processing Folder "Deleted Items"
"Deleted Items" - 2 items done, 0 items skipped
$ pffexport -m all -t out_pff suspect.pst
Opening file.
Exporting items.
Exporting recovered items.
Export completed.
$ ls out_pff_recovered/
Message00001  Message00002  OrphanFolder
$ grep -n "X-Mozilla-Status: 000[89]" Inbox
412:X-Mozilla-Status: 0009
1087:X-Mozilla-Status: 0008`
      }
    ],
    conclusion: "By carefully examining email headers (Received lines, authentication results, X-Originating-IP) and looking up the originating public IP, the approximate geographic location and ISP of the sender can be determined. Using tools such as readpst / pffexport (or Autopsy Email Parser), deleted and orphaned messages can be recovered from PST/OST or mbox files for further analysis.",
    notes: []
  }
];
