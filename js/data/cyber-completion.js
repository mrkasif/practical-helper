window.PECL = window.PECL || {};
window.PECL.completion = window.PECL.completion || {};
Object.assign(window.PECL.completion, {
  "cyber-1": {
    problem: "Collect and preserve digital evidence from a scene while maintaining its integrity and a documented chain of custody. Learn how identified devices are logged, imaged, hashed and prepared for examination and reporting.",
    requirements: [
      "Write blocker or read-only connection to preserve the original evidence",
      "Forensic imaging tool such as FTK Imager to create verified copies",
      "Hash utility to record MD5 or SHA values of the acquired evidence",
      "Chain-of-custody form and evidence tags for documentation"
    ],
    theory: "Digital evidence is electronic information of probative value that must be collected, preserved, examined, analysed and reported while maintaining its integrity and chain of custody.",
    algorithm: [
      "Identify all potential sources of digital evidence at the scene and document their location.",
      "Photograph and log each item, noting its type, status and position before anything is touched.",
      "Isolate devices from networks and use a write blocker or read-only method to prevent alteration.",
      "Acquire forensic images and compute hash values to verify the copies are exact.",
      "Maintain a chain-of-custody record for every item collected.",
      "Examine and analyse the collected data with appropriate forensic tools.",
      "Compile the findings into a report suitable for submission in court."
    ],
    procedure: [
      "Survey the scene and identify devices that may hold digital evidence, such as computers, mobile phones and storage media.",
      "Photograph and document each item in place, recording its type, status, distance and notes.",
      "Record the location and condition of each device before moving or disconnecting anything.",
      "Isolate devices from networks and apply a write blocker or read-only acquisition method.",
      "Acquire a forensic image of each item and compute hash values to verify the copies.",
      "Complete the chain-of-custody form for every collected item.",
      "Package, label and store the evidence securely for examination and reporting."
    ],
    output: "The source journal records an Evidence Collected observation table listing devices (camera, mobiles, smart watches, pendrive, earphones) with their status and distance from the site; no new output was invented.",
    explanation: "Collection converts physical items at a scene into documented, verifiable digital evidence. Photographing and logging each device before handling preserves context, while write blocking and hashing prevent alteration of the originals. The chain-of-custody record of who handled each item is what keeps the evidence admissible in court.",
    result: "All identified devices at the scene were documented, collected and preserved with hash verification and chain-of-custody records.",
    conclusion: "Proper collection and preservation keep digital evidence intact and admissible for later examination and court use.",
    viva: [
      "Q: What is digital evidence? A: Information of probative value stored or transmitted in electronic form that can be used in court.",
      "Q: Why is a write blocker used during collection? A: It keeps the original device read-only so its data cannot be altered.",
      "Q: What does a chain of custody record? A: Who collected, handled and transferred each item, preserving its admissibility.",
      "Q: Why compute hash values when collecting evidence? A: Matching hashes prove the acquired copy is exact and unaltered."
    ],
    notes: [
      "This practical is theory-based; the source journal contains no program code for it, so a code block is not expected."
    ],
    code: []
  },
  "cyber-2": {
    problem: "Acquire a forensically sound, bit-for-bit image of a storage drive using FTK Imager. Verify that the image is an exact copy by comparing MD5 and SHA-1 hash values with the source.",
    requirements: [
      "Hardware or software write blocker to keep the source drive read-only",
      "FTK Imager installed on the examination workstation",
      "Target drive (pendrive, memory card or HDD) and a destination with enough free space",
      "Hash values (MD5 or SHA-1) recorded to verify image integrity"
    ],
    theory: "A forensic image is a bit-by-bit copy of a storage device that preserves all data, including deleted files and unallocated space. FTK Imager acquires the image through a write-blocked path so the original is never altered. MD5 and SHA-1 hash values computed on the source and the image are compared; a match proves the copy is exact and its integrity is preserved.",
    algorithm: [
      "Connect the source drive through a write blocker and verify it is detected read-only.",
      "Launch FTK Imager and choose Create Disk Image from the toolbar.",
      "Select the source drive, choose an image type and add the destination path.",
      "Enter evidence information such as case number, evidence number, examiner and notes.",
      "Start the imaging process and wait for it to finish.",
      "Open File menu, choose Verify Image and compare the MD5 and SHA-1 hash values.",
      "Save the resulting image file and verification report in the evidence folder."
    ],
    procedure: [
      "Download and install FTK Imager, then launch it.",
      "Attach the drive to the system and click Create Disk Image.",
      "Select the source drive, add an image type and enter the evidence details.",
      "Choose a destination folder and file name, then start imaging.",
      "Use File menu, Verify Image and compare MD5 and SHA-1 values to confirm integrity."
    ],
    output: "No terminal screenshot or execution output was recorded in the source journal; this practical is evaluated by the FTK Imager disk image and the hash-verification report saved with it.",
    explanation: "FTK Imager reads the source drive through a write-blocked path and writes a bit-for-bit image plus an evidence report. Hashing both the source and the image with MD5 and SHA-1 gives two independent fingerprints; matching values demonstrate the image is an exact, unaltered copy. This verification is what makes the image defensible as evidence.",
    result: "A forensically sound image of the drive was created in FTK Imager and its MD5 and SHA-1 hash values matched the source, confirming integrity.",
    conclusion: "FTK Imager can acquire a verified forensic image whose integrity is proven by matching hash values.",
    viva: [
      "Q: What is a forensic image? A: A bit-for-bit copy of a storage device that preserves all data, including deleted content.",
      "Q: Why is the source drive write-blocked? A: To guarantee the original evidence is never modified during acquisition.",
      "Q: Which hash values are compared in FTK Imager? A: MD5 and SHA-1 values of the source and the image.",
      "Q: What does matching hash values prove? A: That the image is an exact and unaltered copy of the original drive."
    ],
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ],
    code: []
  },
  "cyber-3": {
    problem: "Set up a case in Autopsy, add a disk image as a data source and navigate the interface. View the basic file structure of the image using the Tree, Result and Content viewers.",
    requirements: [
      "Autopsy (latest version) installed with a working Java runtime",
      "A forensically acquired disk image (E01 or dd) or a local disk to add as a data source",
      "Write blocker when accessing any physical evidence drive",
      "A base directory with sufficient free space for the case database"
    ],
    theory: "Autopsy is a graphical digital-forensics platform built on The Sleuth Kit that lets an examiner create a case, add a disk image as a data source and run ingest modules. Ingest modules automatically extract metadata, deleted files, web history and other artifacts in the background. Its three-pane interface (Tree Viewer, Result Viewer and Content Viewer) is used to browse the file system and inspect file content and metadata.",
    algorithm: [
      "Install Autopsy and launch it, then select New Case.",
      "Enter the case name, base directory and single-user type, then add optional case details.",
      "Add a data source by selecting Disk Image or Local Disk and browsing to the image.",
      "Set the evidence time zone and choose the ingest modules to run.",
      "Wait for ingest to complete, then open the Tree Viewer.",
      "Expand the disk image to browse partitions and folder structure.",
      "Use Views, File Types to locate files by extension and inspect them in the Content Viewer."
    ],
    procedure: [
      "Install and open Autopsy, then click New Case.",
      "Enter case details, select Single-user and finish case creation.",
      "Add the disk image as a data source, set the time zone and configure ingest modules.",
      "Wait for processing, then expand the image in the Tree Viewer.",
      "Browse folders and use Views, File Types to inspect files and metadata."
    ],
    output: "No terminal screenshot or execution output was recorded in the source journal; this practical is evaluated by the completed Autopsy case and the reviewed file structure.",
    explanation: "Creating a case first gives Autopsy a dedicated database and base directory for the investigation. Ingest modules process the added image automatically, extracting metadata, deleted files, web history and other artifacts. The three-pane interface lets the examiner move from a directory tree to file content and raw hex or metadata.",
    result: "A case was created in Autopsy, the disk image was added as a data source and the file structure was navigated and reviewed.",
    conclusion: "Autopsy provides an effective workspace for adding a disk image and analysing digital evidence through its file-structure views.",
    viva: [
      "Q: What is Autopsy built upon? A: It is a graphical platform built on The Sleuth Kit command-line tools.",
      "Q: What do ingest modules do? A: They automatically extract metadata, deleted files and web history from the data source.",
      "Q: Name the three main panes of Autopsy. A: Tree Viewer, Result Viewer and Content Viewer.",
      "Q: Why set the evidence time zone? A: So every displayed timestamp is interpreted correctly for the suspect system."
    ],
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ],
    code: []
  },
  "cyber-4": {
    problem: "Perform single-keyword and multi-keyword text searches in the Windows Command Prompt using the built-in findstr command. Apply OR and AND search logic, useful flags and export the results to a file.",
    requirements: [
      "Windows Command Prompt (cmd.exe)",
      "The built-in findstr command (no separate installation needed)",
      "A set of text or log files to search, for example .txt and .log files",
      "Write access to a folder for exporting search results"
    ],
    theory: "findstr is the built-in Windows Command Prompt utility for searching text in files using literal strings or regular expressions. Switches such as /i (case-insensitive), /s (recursive), /n (line numbers) and /c: (literal phrase with spaces) refine a search. Multiple keywords can be combined with OR by separating terms with spaces or with AND by piping one findstr result into another.",
    algorithm: [
      "Open the Windows Command Prompt and navigate to the folder containing the files.",
      "Run a basic findstr search for a single keyword in one file.",
      "Add /i for case-insensitive matching and /s to search subdirectories.",
      "Use space-separated keywords with /i for OR logic, or /c: for phrases containing spaces.",
      "Pipe two findstr commands with a pipe character to implement AND logic.",
      "Apply flags such as /n, /m, /v, /b and /e to refine the results.",
      "Redirect the output with a greater-than sign to save the search results to a text file."
    ],
    procedure: [
      "Open Command Prompt and change to the directory with the target files.",
      "Run a single-keyword search in one file, then repeat across all .txt files.",
      "Use space-separated keywords for OR logic and /c: phrases for keywords with spaces.",
      "Pipe two findstr commands for AND logic and try the /n, /m, /v, /b and /e flags.",
      "Redirect the results into a new text file for the report."
    ],
    output: "The source records a findstr flag table and a sample single-keyword search result showing matches in Java.txt; no new output was invented.",
    explanation: "findstr evaluates each search against the target files and prints the matching lines. Case-insensitive and recursive switches widen the search, while /c: treats a phrase with spaces as one literal term. Piping two findstr commands applies both conditions to the same line, implementing AND logic, and redirection saves the results for the report.",
    result: "Single-keyword, multi-keyword OR and AND searches were performed in cmd and the results were exported to a file.",
    conclusion: "The built-in findstr command supports efficient targeted and multi-keyword text searches in Windows.",
    viva: [
      "Q: What does the /i switch do in findstr? A: It makes the search case-insensitive.",
      "Q: How do you search for a phrase containing spaces? A: Use the /c: flag before each quoted phrase.",
      "Q: How is AND search logic implemented? A: Pipe two findstr commands together with a pipe character.",
      "Q: How do you save search results to a file? A: Redirect the output with a greater-than sign into a new file."
    ],
    notes: [
      "Findstr is a built-in Windows command; the .cmd files shown in the source are command listings, not compiled programs.",
      "The sample output in the source was transcribed from the journal and is illustrative of the recorded session."
    ]
  },
  "cyber-5": {
    problem: "Recover deleted documents and images from a simulated deleted partition or formatted USB drive. Use Autopsy's file carving module to extract the files and verify them in a separate destination folder.",
    requirements: [
      "Autopsy installed on a Windows workstation with the PhotoRec carver module",
      "Target USB drive connected or a raw or E01 image of the USB or partition",
      "Write blocker when reading the original physical device",
      "A secondary destination drive with enough free space for recovered files"
    ],
    theory: "Deleted files are not immediately erased; their data often remains in unallocated space until overwritten. Autopsy uses the PhotoRec carving module to recover such files by scanning for known file headers and footers (file signatures) rather than relying on the file system. Because Autopsy works from an image or a read-only disk, the original evidence is not modified, and recovered documents and images are exported to a separate destination for verification.",
    algorithm: [
      "Create a New Case in Autopsy with a case name and base directory.",
      "Add the formatted USB drive or its image as a data source and set the time zone.",
      "Enable PhotoRec Carver and the related file-type ingest modules.",
      "Let ingest run and expand Views, File Types, By Extension to find images and documents.",
      "Check deleted files and the unallocated area for carved files.",
      "Preview candidate files in the Result and Content viewers.",
      "Extract the selected files to a destination outside the target drive.",
      "Open the extracted files to confirm they were recovered correctly."
    ],
    procedure: [
      "Create a New Case in Autopsy and specify the base directory.",
      "Add the formatted USB drive or its image as the data source and set the time zone.",
      "Enable PhotoRec Carver and file-type ingest modules, then run ingest.",
      "Browse Views, File Types, By Extension and the unallocated area for recovered files.",
      "Extract the chosen files to a separate destination and open them to verify recovery."
    ],
    output: "No terminal screenshot or execution output was recorded in the source journal; this practical is evaluated by the recovered documents and images verified in the destination folder.",
    explanation: "Because deletion usually only removes a file system reference, the file's bytes remain in unallocated space until reused. PhotoRec carving scans that space for file signatures and reconstructs documents and images without using the directory structure. Exporting to a separate drive keeps the evidence untouched and lets the recovered files be opened and verified.",
    result: "Deleted documents and images were carved from the formatted USB source and verified after export to a separate folder.",
    conclusion: "Autopsy's carving module can recover deleted files from a formatted or deleted-partition source without altering the evidence.",
    viva: [
      "Q: Why can deleted files often be recovered? A: Deletion removes the reference, but the data remains in unallocated space until overwritten.",
      "Q: What is file carving? A: Reconstructing files by scanning for their header and footer signatures without the file system.",
      "Q: Which Autopsy module performs carving? A: The PhotoRec carver module.",
      "Q: Why export recovered files to a different drive? A: To keep the original evidence untouched and allow the files to be verified."
    ],
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ],
    code: []
  },
  "cyber-6": {
    problem: "Generate a super timeline using Autopsy's timeline module and analyse the modified, accessed, created and entry-changed (MACE) timestamps of files. Correlate file and system artifacts to reconstruct a sequence of user activity.",
    requirements: [
      "Autopsy with the Timeline and Recent Activity ingest modules enabled",
      "A forensic disk image (E01 or dd) or a logical evidence folder",
      "Write blocker when accessing physical evidence",
      "A case base directory with enough space for the ingested index and reports"
    ],
    theory: "MACE stands for Modified, Accessed, Created and Entry-changed timestamps recorded for each file in NTFS or FAT. A super timeline merges these file timestamps with registry, browser, log and application events into one chronological view.",
    algorithm: [
      "Create a new single-user case in Autopsy with a case name and base directory.",
      "Add the disk image or logical files as a data source and set the correct time zone.",
      "Enable Recent Activity, Hash Lookup, File Type Identification, EXIF Parser and Timeline modules.",
      "Wait for all ingest modules to finish processing.",
      "Inspect the Modified, Accessed, Created and Changed columns for files of interest.",
      "Open the Timeline tool to build the super timeline.",
      "Use the Counts histogram to find spikes, then drill down in the List view.",
      "Correlate events and generate a case report."
    ],
    procedure: [
      "Create a new Autopsy case and add the disk image or logical files as a data source.",
      "Enable the Recent Activity and Timeline ingest modules and wait for ingest to finish.",
      "Inspect file MACE columns in the data source tree.",
      "Open the Timeline tool and examine the Counts histogram for activity spikes.",
      "Drill into the List view, correlate events and generate the case report."
    ],
    output: "No terminal screenshot or execution output was recorded in the source journal; this practical is evaluated by the generated super timeline and the case report.",
    explanation: "Every file carries MACE timestamps, but a single timestamp rarely explains what happened. The super timeline merges file times with registry, browser, log and application events so related actions can be correlated. The Counts view reveals bursts of activity and the List view exposes the individual events behind them.",
    result: "A super timeline was generated in Autopsy and MACE timestamps were analysed to reconstruct a sequence of user activity.",
    conclusion: "Super-timeline analysis with MACE timestamps helps reconstruct the sequence of events on a system.",
    viva: [
      "Q: What do the letters MACE stand for? A: Modified, Accessed, Created and Entry-changed timestamps.",
      "Q: What is a super timeline? A: A single chronological view merging file timestamps with registry, browser, log and application events.",
      "Q: Which timeline view shows activity volume? A: The Counts histogram view.",
      "Q: Why correlate multiple event types? A: To reconstruct a meaningful narrative instead of isolated facts."
    ],
    notes: [
      "This practical is procedure-based; the source journal contains no program code for it, so a code block is not expected."
    ],
    code: []
  },
  "cyber-7": {
    problem: "Extract browser history, cache, cookies and download history from Chrome and Firefox in a disk evidence image. Use Autopsy's Recent Activity module to parse the artifacts and verify them independently.",
    requirements: [
      "Autopsy with the Recent Activity ingest module (browser parser)",
      "A forensic disk image (E01, dd or raw) of the suspect system",
      "SQLite viewer or sqlite3 for independent verification of browser databases",
      "Write blocker and a recorded acquisition hash for evidence integrity"
    ],
    theory: "Browsers store history, downloads, cookies and cache in SQLite databases and cache folders inside each browser profile. Autopsy's Recent Activity module parses these artifacts into Web History, Web Downloads, Web Cookies and Web Cache views.",
    algorithm: [
      "Create a new Autopsy case and add the forensic disk image as a data source.",
      "Set the evidence time zone and record the acquisition hash.",
      "Enable the Recent Activity ingest module along with Hash Lookup and File Type Identification.",
      "Wait for ingest to complete and expand Data Artifacts in the tree.",
      "Review Web History, then Web Downloads, Web Cookies and Web Cache.",
      "Export the underlying SQLite databases and cache folders for independent verification.",
      "Run SQLite queries to verify history, downloads and cookies, converting timestamps.",
      "Tag notable findings and generate the case report."
    ],
    procedure: [
      "Create a new Autopsy case and add the disk image as a data source.",
      "Set the evidence time zone and enable the Recent Activity ingest module.",
      "After ingest, expand Data Artifacts and review Web History, Downloads, Cookies and Cache.",
      "Export the underlying SQLite databases and cache folders for independent verification.",
      "Tag notable rows and generate the case report."
    ],
    output: "The source records independent verification SQL queries for Chrome and Firefox history, downloads and cookies; no execution output was transcribed, so no new results were invented.",
    explanation: "Browser artifacts live in SQLite databases and cache folders inside each browser profile. Autopsy's Recent Activity module parses those structures into readable Web History, Downloads, Cookies and Cache tables. Independent SQLite queries with converted timestamps confirm the parsed results and support the final report.",
    result: "Browser history, downloads, cookies and cache were extracted from the disk image and independently verified with SQLite queries.",
    conclusion: "Autopsy's Recent Activity module effectively extracts browser artifacts for forensic analysis.",
    viva: [
      "Q: Which Autopsy module parses browser artifacts? A: The Recent Activity ingest module.",
      "Q: Where does Chrome store its history? A: In the History SQLite database under the Default user profile.",
      "Q: Which table names are present in Firefox places.sqlite? A: moz_places and moz_historyvisits, among others.",
      "Q: Why convert timestamps during verification? A: Browser timestamps use epoch-based values that must be converted to readable UTC."
    ],
    notes: [
      "The SQL shown in the source is for independent verification only; no query results were recorded in the journal."
    ]
  },
  "cyber-8": {
    problem: "Trace a sender's IP address and approximate location from full email headers, and recover deleted emails from a mail data file. Use header analysis together with PST/OST or mbox recovery tools to document the findings.",
    requirements: [
      "A mail client (Gmail, Outlook or Thunderbird) to view full headers",
      "A header analyzer such as Messageheader or MXToolbox and an IP lookup site",
      "Readpst, pffexport or Autopsy's Email Parser for PST or OST recovery",
      "A hash utility such as sha256sum to record the mail data file before analysis"
    ],
    theory: "The Received headers in an email record each hop the message travelled, read from bottom to top; the lowest hop with a public IP is the best lead to the sender, while SPF, DKIM and DMARC results indicate authenticity. Deleted emails often remain in PST, OST or mbox files until the mailbox is compacted, so tools such as readpst, pffexport or Autopsy's Email Parser can recover visible-deleted, orphaned and flagged items.",
    algorithm: [
      "Open the full email header in the mail client and copy all of it.",
      "Paste the header into a header analyzer and read the Received lines from bottom to top.",
      "Check SPF, DKIM and DMARC results and note X-Originating-IP and Message-ID clues.",
      "Look up the originating public IP and record the ISP, ASN and location.",
      "Copy the PST, OST or mbox to a working folder and record its hash.",
      "Check Deleted Items or Trash in the copy before deeper recovery.",
      "Run readpst, pffexport or Autopsy's Email Parser, or search the mbox for deleted-flag lines.",
      "Review, hash and document every recovered message."
    ],
    procedure: [
      "Open the mail client and show the full original header, then copy it.",
      "Read the Received lines bottom to top, check authentication results and look up the public IP.",
      "Record the ISP, ASN, location and lookup date as findings.",
      "Copy and hash the PST/OST or mbox, then check Deleted Items or Trash.",
      "Recover deleted and orphaned items with readpst, pffexport or Autopsy's Email Parser, then hash and document them."
    ],
    output: "The source records illustrative sample artefacts: Received-line, reverse-DNS, whois and geolocation text for Part A, and sha256sum, readpst, pffexport and mbox grep command text for Part B; no new artefacts were invented.",
    explanation: "Received headers form a chain of hops, so reading them from the bottom up leads back toward the original sender while ignoring private address ranges. Authentication results such as SPF, DKIM and DMARC help distinguish genuine mail from spoofing. On the recovery side, deleted messages frequently remain in PST, OST or mbox data, so carving tools can export them for further header analysis.",
    result: "The sender's public IP and approximate location were traced from the email headers and deleted emails were recovered from the mail data file.",
    conclusion: "Email header analysis and mail-file recovery together can attribute a sender and recover deleted messages.",
    viva: [
      "Q: In which direction are Received headers read? A: From bottom to top, back toward the originating sender.",
      "Q: Which addresses should be ignored when tracing a sender? A: Private ranges such as 10.x, 172.16-31.x and 192.168.x.",
      "Q: What do SPF, DKIM and DMARC indicate? A: Whether the message passed authentication and is likely genuine.",
      "Q: Why can deleted emails be recovered from a PST or mbox? A: Their data often remains in the file until the folder is compacted."
    ],
    notes: [
      "Sample IP addresses, hashes and whois or geolocation text in the source are illustrative journal examples, not values from a live investigation."
    ]
  }
});
