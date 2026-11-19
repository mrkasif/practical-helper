/* Subject registry and source-extraction notes. Loaded last so every subject array exists. */
window.PECL = window.PECL || {};
window.PECL.subjects = [
  {
    id: "python",
    name: "Python Programming",
    short: "Python",
    icon: "terminal",
    color: "#3f6b5a",
    pdf: "Python_Practical_Journal_Kashif_Sayyad_Digital.pdf",
    pdfPages: 13,
    journalPages: 33,
    year: "2026–2027",
    description: "10 experiments covering datetime, lambda, functions, list/dictionary/tuple methods, slicing and sets."
  },
  {
    id: "java",
    name: "Advanced Java",
    short: "Java",
    icon: "layers",
    color: "#a9502e",
    pdf: "Advanced_Java_Practical_Journal_Kashif_Sayyad_Roll50.pdf",
    pdfPages: 11,
    journalPages: 49,
    year: "2026–2027",
    description: "10 experiments: multithreading, Runnable, priorities/sleep, JDBC, sockets, URL/InetAddress and UDP chat."
  },
  {
    id: "php",
    name: "PHP",
    short: "PHP",
    icon: "server",
    color: "#7a5772",
    pdf: "PHP_Practical_Journal_Kashif_Sayyad_Digital.pdf",
    pdfPages: 15,
    journalPages: 38,
    year: "2026–2027",
    description: "10 experiments: forms (GET/POST), arrays, MySQL CRUD, file upload, sessions and a mini record system."
  },
  {
    id: "cyber",
    name: "Cyber Forensics",
    short: "Cyber",
    icon: "shield",
    color: "#4a6b85",
    pdf: "Cyber_Forensics_Practical_Journal_Kashif_Sayyad_Roll50.pdf",
    pdfPages: 19,
    journalPages: 67,
    year: "2026–2027",
    description: "8 experiments: evidence collection, FTK Imager, Autopsy, findstr, file carving, supertimeline, browser artifacts and email forensics."
  },
  {
    id: "powerbi",
    name: "Power BI",
    short: "Power BI",
    icon: "chart",
    color: "#94661d",
    pdf: "PowerBI_Practical_Journal_Kashif_Sayyad_Roll50.pdf",
    pdfPages: 11,
    journalPages: 51,
    year: "2026–2027",
    description: "10 experiments: interface, Power Query, data types, relationships, charts, DAX and dashboards."
  }
];

/* Caveats preserved from the source PDFs. These are shown on the Settings / About panel so that
   uncertain source material is never presented as verified fact. */
window.PECL.sourceNotes = [
  { subject: "Python Programming", text: "The source is a typed transcription of a 33-page handwritten journal. Experiment 6's initial tuple value is clipped at the right edge and is marked [UNCLEAR]. Experiment 10 has no output page in the source. Experiment 3 writes `Choice` at input but `choice` in the conditions (case-sensitive discrepancy preserved)." },
  { subject: "Advanced Java", text: "Experiments 1–4 are fully transcribed. For Experiments 5–10 the source states that the handwritten Java source and outputs could not be recovered with high confidence via OCR; only the authentic index AIMs and the source's caution notes are retained. Experiments 5–6 keep the source's brief PreparedStatement/executeUpdate transcription note; Experiments 7–10 keep only the AIM. No code was invented." },
  { subject: "PHP", text: "The source is a typed transcription of a 38-page handwritten journal. Experiment 3's calculator source is too faint to transcribe: its numeric variable assignments, arithmetic operators and conditional output statements are missing, and only the recorded results are legible. The HTML in Experiment 2 opens a second form before closing the first (preserved). Experiment 9's dashboard guard condition is inconsistent in the source. SQL in Experiments 6 and 10 concatenates user input directly (preserved and flagged)." },
  { subject: "Cyber Forensics", text: "All 8 experiments are fully transcribed from the 67-page journal. Experiments 1, 2, 3, 5 and 6 are theory- or procedure-based and contain no program code in the source. Hand-drawn UI mock-ups are represented by the source's descriptive text; faint output screenshots were transcribed only where clearly legible." },
  { subject: "Power BI", text: "Experiment 1 is fully transcribed. Experiments 2–6 have index AIMs plus OCR-recovered supporting text; Experiment 6's DAX is the transcription's example structure, not a verified copy of the handwritten formula, so exact field names may differ. Experiments 1–5 and 7–10 are procedure- or design-based and contain no program code in the source. Experiments 7–10 have only their authentic index AIMs and the source's caution notes. No formulas or screenshots were invented." }
];

window.PECL.student = {
  name: "Kashif Sayyad",
  roll: "50",
  class: "B.Sc. Information Technology (Third Year)",
  institution: "M.S.P. Mandal's Deogiri College, Chhatrapati Sambhajinagar",
  department: "Department of Computer Science, IT & Animation",
  year: "2026–2027"
};
