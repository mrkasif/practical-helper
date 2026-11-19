/* Practical Exam Code Library — application shell, routing, views and interactions.
   Vanilla JS only. State persists in localStorage through js/store.js. */
(function () {
  "use strict";

  const DATA = window.PECL;
  const SUBJECTS = DATA.subjects || [];
  const SUBJECT_BY_ID = {};
  SUBJECTS.forEach((s) => { SUBJECT_BY_ID[s.id] = s; });

  const PRACTICALS = [];
  SUBJECTS.forEach((s) => {
    (DATA[s.id] || []).forEach((p) => PRACTICALS.push(p));
  });
  const PRACTICAL_BY_ID = {};
  PRACTICALS.forEach((p) => { PRACTICAL_BY_ID[p.id] = p; });

  const SETTINGS = window.Store.settings();

  /* ------------------------------------------------------------------ helpers */
  function esc(s) {
    return window.Highlight.escape(s == null ? "" : s);
  }
  function subjectOf(p) {
    return SUBJECT_BY_ID[p.subject] || { name: p.subject, color: "#a3e635", short: p.subject, icon: "folder" };
  }
  function codesOf(p) {
    return p.code && p.code.length ? p.code : [];
  }
  function hasCode(p) {
    return codesOf(p).length > 0;
  }
  function timeAgo(t) {
    const s = Math.floor((Date.now() - t) / 1000);
    if (s < 60) return "just now";
    const m = Math.floor(s / 60);
    if (m < 60) return m + "m ago";
    const h = Math.floor(m / 60);
    if (h < 24) return h + "h ago";
    const d = Math.floor(h / 24);
    if (d < 30) return d + "d ago";
    return new Date(t).toLocaleDateString();
  }
  function debounce(fn, ms) {
    let timer;
    return function () {
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(null, args), ms);
    };
  }
  function navigate(url) {
    if (location.hash === url) render();
    else location.hash = url;
  }
  function parseHash() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const qi = raw.indexOf("?");
    const path = qi === -1 ? raw : raw.slice(0, qi);
    const query = qi === -1 ? "" : raw.slice(qi + 1);
    return { segs: path.split("/").filter(Boolean), params: new URLSearchParams(query) };
  }

  /* ------------------------------------------------------------------ toast */
  function toast(message, type) {
    let box = document.getElementById("toastBox");
    if (!box) {
      box = document.createElement("div");
      box.id = "toastBox";
      box.className = "toast-box";
      document.body.appendChild(box);
    }
    const item = document.createElement("div");
    item.className = "toast" + (type ? " toast-" + type : "");
    item.innerHTML = (type === "error" ? window.Icons.get("alert", 16) : window.Icons.get("check", 16)) + "<span>" + esc(message) + "</span>";
    box.appendChild(item);
    while (box.children.length > 3) box.firstElementChild.remove();
    requestAnimationFrame(() => item.classList.add("show"));
    setTimeout(() => {
      item.classList.remove("show");
      setTimeout(() => item.remove(), 250);
    }, 2200);
  }

  /* ------------------------------------------------------------------ clipboard */
  function copyText(text, okMessage) {
    const done = () => toast(okMessage || "Copied to clipboard");
    let settled = false;
    const viaFallback = () => {
      if (settled) return;
      settled = true;
      fallbackCopy(text, done);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      const timer = setTimeout(viaFallback, 900);
      navigator.clipboard.writeText(text).then(
        () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          done();
        },
        () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          fallbackCopy(text, done);
        }
      );
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      done();
    } catch (e) {
      toast("Copy failed — select and copy manually", "error");
    }
    document.body.removeChild(ta);
  }

  /* ------------------------------------------------------------------ shared UI */
  function bookmarkButton(p, extra) {
    const on = window.Store.isBookmarked(p.id);
    return (
      '<button type="button" class="icon-btn' + (on ? " active" : "") + (extra || "") + '" data-action="bookmark" data-id="' + p.id + '" title="' + (on ? "Remove bookmark" : "Bookmark") + '" aria-pressed="' + on + '">' +
      (on ? window.Icons.solid("bookmark", 17) : window.Icons.get("bookmark", 17)) +
      "</button>"
    );
  }
  function completeButton(p) {
    const on = window.Store.isCompleted(p.id);
    return (
      '<button type="button" class="icon-btn' + (on ? " active" : "") + '" data-action="complete" data-id="' + p.id + '" title="' + (on ? "Mark as not completed" : "Mark as completed") + '" aria-pressed="' + on + '">' +
      window.Icons.get("check", 17) +
      "</button>"
    );
  }
  function subjectChip(p) {
    const s = subjectOf(p);
    return '<span class="chip" style="--chip:' + s.color + '">' + esc(s.short) + "</span>";
  }
  function metaLine(p) {
    const bits = [];
    if (p.date && p.date !== "—") bits.push(esc(p.date));
    if (p.pdfPages) bits.push(esc(p.pdfPages));
    bits.push(hasCode(p) ? codesOf(p).length + (codesOf(p).length > 1 ? " code blocks" : " code block") : "no source code");
    return bits.join('<span class="dot">•</span>');
  }
  function card(p) {
    const done = window.Store.isCompleted(p.id);
    const bm = window.Store.isBookmarked(p.id);
    return (
      '<article class="card' + (done ? " is-done" : "") + '">' +
      '<div class="card-top">' +
      '<span class="card-num">' + esc(String(p.n).padStart(2, "0")) + "</span>" +
      '<div class="card-body">' +
      '<h3 class="card-title"><a href="#/practical/' + p.id + '" data-action="nav" data-url="#/practical/' + p.id + '">' + esc(p.title) + "</a></h3>" +
      '<div class="card-meta">' + subjectChip(p) + '<span class="meta-text">' + metaLine(p) + "</span></div>" +
      (p.aim ? '<p class="card-aim">' + esc(p.aim) + "</p>" : "") +
      "</div>" +
      '<div class="card-actions">' +
      bookmarkButton(p) +
      completeButton(p) +
      '<a class="icon-btn" href="#/practical/' + p.id + '" data-action="nav" data-url="#/practical/' + p.id + '" title="Open practical">' + window.Icons.get("arrowRight", 17) + "</a>" +
      "</div>" +
      "</div>" +
      (bm || done ? '<div class="card-flags">' + (bm ? '<span class="flag flag-bm">' + window.Icons.solid("bookmark", 11) + "Bookmark</span>" : "") + (done ? '<span class="flag flag-done">' + window.Icons.get("check", 11) + "Done</span>" : "") + "</div>" : "") +
      "</article>"
    );
  }
  function emptyState(icon, title, text, action) {
    return (
      '<div class="empty">' +
      '<div class="empty-icon">' + window.Icons.get(icon, 26) + "</div>" +
      "<h3>" + esc(title) + "</h3>" +
      "<p>" + esc(text) + "</p>" +
      (action || "") +
      "</div>"
    );
  }
  function notice(text, icon) {
    return '<div class="notice">' + window.Icons.get(icon || "info", 16) + "<span>" + esc(text) + "</span></div>";
  }
  function progressBar(done, total, label) {
    const pct = total ? Math.round((done / total) * 100) : 0;
    return (
      '<div class="progress">' +
      '<div class="progress-head"><span>' + esc(label || "Progress") + "</span><span>" + done + " / " + total + " · " + pct + "%</span></div>" +
      '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      "</div>"
    );
  }

  /* ------------------------------------------------------------------ views */
  function viewDashboard() {
    const counts = window.Store.counts();
    const total = PRACTICALS.length;
    const recent = window.Store.recent();
    const recentItems = recent.map((r) => PRACTICAL_BY_ID[r.id]).filter(Boolean).slice(0, 6);

    let html = "";
    html += '<header class="page-head"><div>' +
      '<p class="eyebrow">Practical Exam Code Library</p>' +
      "<h1>Dashboard</h1>" +
      '<p class="page-sub">' + esc(DATA.student.name) + " · Roll " + esc(DATA.student.roll) + " · " + esc(DATA.student.class) + "</p>" +
      "</div>" +
      '<div class="page-actions"><a class="btn" href="#/library" data-action="nav" data-url="#/library">' + window.Icons.get("library", 16) + " Browse all practicals</a></div>" +
      "</header>";

    html += '<section class="stats">' +
      statCard("Practicals", total, "library", "#a3e635") +
      statCard("Subjects", SUBJECTS.length, "folder", "#60a5fa") +
      statCard("Completed", counts.completed, "check", "#4ade80") +
      statCard("Bookmarked", counts.bookmarks, "bookmark", "#facc15") +
      "</section>";

    html += '<div class="grid-2">' +
      '<section class="panel">' +
      '<div class="panel-head"><h2>Preparation progress</h2></div>' +
      progressBar(counts.completed, total, "All practicals") +
      '<div class="subject-progress-list">' +
      SUBJECTS.map((s) => {
        const list = DATA[s.id] || [];
        const done = list.filter((p) => window.Store.isCompleted(p.id)).length;
        return (
          '<a class="subject-progress" href="#/subject/' + s.id + '" data-action="nav" data-url="#/subject/' + s.id + '">' +
          '<span class="sp-left"><span class="sp-dot" style="--chip:' + s.color + '"></span>' + esc(s.name) + "</span>" +
          "<span class=\"sp-right\">" + done + "/" + list.length + "</span>" +
          '<span class="sp-track"><span class="sp-fill" style="width:' + (list.length ? (done / list.length) * 100 : 0) + "%;background:" + s.color + '"></span></span>' +
          "</a>"
        );
      }).join("") +
      "</div></section>";

    html += '<section class="panel">' +
      '<div class="panel-head"><h2>Recently opened</h2>' +
      (recentItems.length ? '<a class="link" href="#/recent" data-action="nav" data-url="#/recent">View all</a>' : "") +
      "</div>" +
      (recentItems.length
        ? '<div class="recent-list">' + recentItems.map((p) => recentRow(p)).join("") + "</div>"
        : emptyState("clock", "Nothing opened yet", "Practicals you open will appear here for quick revisits.", "")) +
      "</section>" +
      "</div>";

    html += '<section class="panel">' +
      '<div class="panel-head"><h2>Subjects</h2><a class="link" href="#/library" data-action="nav" data-url="#/library">All practicals</a></div>' +
      '<div class="subject-grid">' +
      SUBJECTS.map((s) => {
        const list = DATA[s.id] || [];
        const done = list.filter((p) => window.Store.isCompleted(p.id)).length;
        return (
          '<a class="subject-card" href="#/subject/' + s.id + '" data-action="nav" data-url="#/subject/' + s.id + '" style="--chip:' + s.color + '">' +
          '<div class="subject-icon">' + window.Icons.get(s.icon, 20) + "</div>" +
          '<div class="subject-info"><h3>' + esc(s.name) + "</h3><p>" + list.length + " practicals · " + done + " done</p></div>" +
          '<div class="subject-go">' + window.Icons.get("arrowRight", 18) + "</div>" +
          "</a>"
        );
      }).join("") +
      "</div></section>";

    html += '<section class="panel">' +
      '<div class="panel-head"><h2>Quick jump to any practical</h2></div>' +
      '<div class="quickjump">' +
      PRACTICALS.map((p) =>
        '<a href="#/practical/' + p.id + '" data-action="nav" data-url="#/practical/' + p.id + '" class="qj-row' + (window.Store.isCompleted(p.id) ? " is-done" : "") + '">' +
        '<span class="qj-num">' + esc(String(p.n).padStart(2, "0")) + "</span>" +
        '<span class="qj-title">' + esc(p.title) + "</span>" +
        '<span class="qj-sub">' + esc(subjectOf(p).short) + "</span>" +
        (window.Store.isBookmarked(p.id) ? '<span class="qj-bm">' + window.Icons.solid("bookmark", 11) + "</span>" : "") +
        "</a>"
      ).join("") +
      "</div></section>";

    return html;
  }

  function statCard(label, value, icon, color) {
    return (
      '<div class="stat">' +
      '<div class="stat-icon" style="color:' + color + '">' + window.Icons.get(icon, 19) + "</div>" +
      '<div><div class="stat-value">' + value + '</div><div class="stat-label">' + esc(label) + "</div></div>" +
      "</div>"
    );
  }

  function recentRow(p) {
    const r = window.Store.recent().find((x) => x.id === p.id);
    return (
      '<a class="recent-row" href="#/practical/' + p.id + '" data-action="nav" data-url="#/practical/' + p.id + '">' +
      '<span class="rr-num">' + esc(String(p.n).padStart(2, "0")) + "</span>" +
      '<span class="rr-body"><span class="rr-title">' + esc(p.title) + "</span><span class=\"rr-sub\">" + esc(subjectOf(p).name) + "</span></span>" +
      '<span class="rr-time">' + (r ? timeAgo(r.t) : "") + "</span>" +
      "</a>"
    );
  }

  function libraryFilters(params) {
    return {
      q: params.get("q") || "",
      subject: params.get("subject") || "",
      num: params.get("num") || "",
      bookmarked: params.get("bookmarked") === "1",
      completed: params.get("completed") === "1",
      sort: params.get("sort") || "num-asc"
    };
  }

  function filterPracticals(f) {
    const terms = f.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const range = parseNumFilter(f.num);
    let list = PRACTICALS.filter((p) => {
      if (f.subject && p.subject !== f.subject) return false;
      if (f.bookmarked && !window.Store.isBookmarked(p.id)) return false;
      if (f.completed && !window.Store.isCompleted(p.id)) return false;
      if (range && (p.n < range.min || p.n > range.max)) return false;
      if (terms.length) {
        const hay = [
          p.title, p.aim, p.definition, p.theory, p.output, p.result, p.conclusion,
          subjectOf(p).name, subjectOf(p).short,
          (p.notes || []).join(" "),
          codesOf(p).map((c) => c.src).join(" "),
          codesOf(p).map((c) => c.file).join(" "),
          p.n
        ].join(" ").toLowerCase();
        for (const t of terms) {
          if (hay.indexOf(t) === -1) return false;
        }
      }
      return true;
    });
    list.sort((a, b) => {
      switch (f.sort) {
        case "num-desc": return b.n - a.n;
        case "title": return a.title.localeCompare(b.title);
        case "subject": return a.subject.localeCompare(b.subject) || a.n - b.n;
        default: return a.subject.localeCompare(b.subject) || a.n - b.n;
      }
    });
    return list;
  }

  function parseNumFilter(v) {
    v = (v || "").trim();
    if (!v) return null;
    const m = v.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) return { min: +m[1], max: +m[2] };
    if (/^\d+$/.test(v)) return { min: +v, max: +v };
    return null;
  }

  function libraryControls(f) {
    const subjectOpts = ['<option value="">All subjects</option>'].concat(
      SUBJECTS.map((s) => '<option value="' + s.id + '"' + (f.subject === s.id ? " selected" : "") + ">" + esc(s.name) + "</option>")
    ).join("");
    return (
      '<div class="controls">' +
      '<div class="control-search">' + window.Icons.get("search", 16) +
      '<input id="libSearch" type="search" placeholder="Search number, title, keyword or code…" value="' + esc(f.q) + '" autocomplete="off">' +
      (f.q ? '<button type="button" class="control-clear" data-action="clear-search" title="Clear search">' + window.Icons.get("x", 14) + "</button>" : "") +
      "</div>" +
      '<select id="fSubject" class="select" aria-label="Subject filter">' + subjectOpts + "</select>" +
      '<input id="fNum" class="input num-input" type="text" inputmode="numeric" placeholder="No. e.g. 1-5" value="' + esc(f.num) + '" aria-label="Practical number filter">' +
      '<select id="fSort" class="select" aria-label="Sort">' +
      '<option value="num-asc"' + (f.sort === "num-asc" ? " selected" : "") + ">Number ↑</option>" +
      '<option value="num-desc"' + (f.sort === "num-desc" ? " selected" : "") + ">Number ↓</option>" +
      '<option value="title"' + (f.sort === "title" ? " selected" : "") + ">Title A–Z</option>" +
      '<option value="subject"' + (f.sort === "subject" ? " selected" : "") + ">Subject</option>" +
      "</select>" +
      '<label class="toggle"><input id="fBookmarked" type="checkbox"' + (f.bookmarked ? " checked" : "") + '><span class="toggle-track"></span><span class="toggle-label">' + window.Icons.get("bookmark", 14) + " Bookmarked</span></label>" +
      '<label class="toggle"><input id="fCompleted" type="checkbox"' + (f.completed ? " checked" : "") + '><span class="toggle-track"></span><span class="toggle-label">' + window.Icons.get("check", 14) + " Completed</span></label>" +
      '<button type="button" class="btn btn-ghost" data-action="clear-filters">' + window.Icons.get("refresh", 15) + " Reset</button>" +
      "</div>"
    );
  }

  function libraryResultsHTML(f) {
    const list = filterPracticals(f);
    if (!list.length) {
      return emptyState("search", "No practicals match", "Try a different search term or clear the filters.", '<button type="button" class="btn" data-action="clear-filters">Clear filters</button>');
    }
    let groups;
    if (f.subject) groups = [{ subject: SUBJECT_BY_ID[f.subject], items: list }];
    else {
      groups = SUBJECTS.map((s) => ({ subject: s, items: list.filter((p) => p.subject === s.id) })).filter((g) => g.items.length);
    }
    let html = '<div class="library-groups">';
    groups.forEach((g) => {
      html += '<section class="library-group">' +
        '<div class="group-head" style="--chip:' + g.subject.color + '">' +
        '<span class="group-dot"></span><h2>' + esc(g.subject.name) + "</h2>" +
        '<span class="group-count">' + g.items.length + " practical" + (g.items.length > 1 ? "s" : "") + "</span>" +
        "</div>" +
        '<div class="card-list">' + g.items.map(card).join("") + "</div>" +
        "</section>";
    });
    html += "</div>";
    return html;
  }

  function refreshLibraryResults() {
    const { params } = parseHash();
    const f = libraryFilters(params);
    const box = document.getElementById("libResults");
    if (box) box.innerHTML = libraryResultsHTML(f);
    const count = document.getElementById("libCount");
    if (count) count.textContent = filterPracticals(f).length + " of " + PRACTICALS.length + " practicals";
  }

  function viewLibrary(params) {
    const f = libraryFilters(params);
    let html = '<header class="page-head"><div>' +
      '<p class="eyebrow">Library</p><h1>All Practicals</h1>' +
      '<p class="page-sub" id="libCount"></p></div></header>';
    html += '<div id="libControls">' + libraryControls(f) + "</div>";
    html += '<div id="libResults">' + libraryResultsHTML(f) + "</div>";
    return html;
  }

  function viewSubject(id) {
    const s = SUBJECT_BY_ID[id];
    if (!s) return emptyState("folder", "Subject not found", "This subject does not exist.", '<a class="btn" href="#/library" data-action="nav" data-url="#/library">Back to library</a>');
    const list = DATA[id] || [];
    const done = list.filter((p) => window.Store.isCompleted(p.id)).length;
    const sn = (DATA.sourceNotes || []).find((n) => n.subject === s.name);
    let html = '<header class="page-head"><div>' +
      '<p class="eyebrow">Academic year ' + esc(s.year) + " · " + list.length + " practicals</p>" +
      "<h1>" + esc(s.name) + "</h1>" +
      '<p class="page-sub">' + esc(s.description) + "</p>" +
      '<p class="file-sub">' + window.Icons.get("fileText", 12) + "<span>" + esc(s.pdf) + "</span></p></div>" +
      '<div class="page-actions"><a class="btn btn-ghost" href="#/library" data-action="nav" data-url="#/library">' + window.Icons.get("arrowLeft", 16) + " Library</a></div>" +
      "</header>";
    html += '<div class="grid-2"><section class="panel">' + progressBar(done, list.length, "Completed in this subject") + "</section>";
    html += '<section class="panel"><div class="panel-head"><h2>Source</h2></div><div class="kv">' +
      "<div><span>PDF pages</span><strong>" + s.pdfPages + "</strong></div>" +
      "<div><span>Journal pages</span><strong>" + s.journalPages + "</strong></div>" +
      "<div><span>Practicals</span><strong>" + list.length + "</strong></div>" +
      "<div><span>With source code</span><strong>" + list.filter(hasCode).length + "</strong></div>" +
      "</div></section></div>";
    if (sn) html += notice(sn.text, "alert");
    html += '<div class="card-list">' + list.map(card).join("") + "</div>";
    return html;
  }

  function sectionHTML(title, inner, cls) {
    if (!inner) return "";
    return '<section class="detail-section ' + (cls || "") + '">' +
      '<h2 class="section-title"><span class="section-bar"></span>' + esc(title) + "</h2>" +
      '<div class="section-body">' + inner + "</div></section>";
  }

  function prose(text) {
    if (!text) return "";
    return '<div class="prose">' + esc(text) + "</div>";
  }
  function listHTML(arr) {
    if (!arr || !arr.length) return "";
    return '<ol class="steps">' + arr.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ol>";
  }
  function bullets(arr) {
    if (!arr || !arr.length) return "";
    return '<ul class="bullets">' + arr.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>";
  }

  function viewPractical(id) {
    const p = PRACTICAL_BY_ID[id];
    if (!p) return emptyState("fileText", "Practical not found", "This practical does not exist.", '<a class="btn" href="#/library" data-action="nav" data-url="#/library">Back to library</a>');
    const s = subjectOf(p);
    const codes = codesOf(p);
    const idx = PRACTICALS.indexOf(p);
    const prev = idx > 0 ? PRACTICALS[idx - 1] : null;
    const next = idx < PRACTICALS.length - 1 ? PRACTICALS[idx + 1] : null;
    const done = window.Store.isCompleted(p.id);
    const bm = window.Store.isBookmarked(p.id);

    window.Store.pushRecent(p.id);

    let html = '<nav class="breadcrumb">' +
      '<a href="#/" data-action="nav" data-url="#/">Dashboard</a><span>/</span>' +
      '<a href="#/subject/' + p.subject + '" data-action="nav" data-url="#/subject/' + p.subject + '">' + esc(s.name) + "</a><span>/</span>" +
      '<span class="crumb-current">Practical ' + p.n + "</span></nav>";

    html += '<header class="detail-head">' +
      '<div class="detail-head-main">' +
      '<div class="detail-badges">' +
      '<span class="badge-num" style="--chip:' + s.color + '">Practical ' + p.n + "</span>" +
      subjectChip(p) +
      (p.date && p.date !== "—" ? '<span class="badge muted">' + esc(p.date) + "</span>" : "") +
      (p.pdfPages ? '<span class="badge muted">' + esc(p.pdfPages) + "</span>" : "") +
      (p.src ? '<span class="badge muted">' + esc(p.src) + "</span>" : "") +
      "</div>" +
      "<h1>" + esc(p.title) + "</h1>" +
      '<div class="detail-actions">' +
      '<button type="button" class="btn' + (bm ? " btn-active" : "") + '" data-action="bookmark" data-id="' + p.id + '">' +
      (bm ? window.Icons.solid("bookmark", 16) : window.Icons.get("bookmark", 16)) + (bm ? " Bookmarked" : " Bookmark") + "</button>" +
      '<button type="button" class="btn' + (done ? " btn-active" : "") + '" data-action="complete" data-id="' + p.id + '">' +
      window.Icons.get("check", 16) + (done ? " Completed" : " Mark complete") + "</button>" +
      (codes.length > 1 ? '<button type="button" class="btn btn-accent" data-action="copy-all">' + window.Icons.get("copy", 16) + " Copy all code</button>" : "") +
      "</div>" +
      "</div></header>";

    if (!hasCode(p)) {
      html += notice("No source code is included for this practical in the provided PDF. The source notes below explain why.", "alert");
    }

    html += sectionHTML("Aim", prose(p.aim));
    html += sectionHTML("Objectives", bullets(p.objectives));
    html += sectionHTML("Requirements", bullets(p.requirements));
    html += sectionHTML("Definition", prose(p.definition));
    html += sectionHTML("Theory", prose(p.theory));
    html += sectionHTML("Algorithm", listHTML(p.algorithm));
    html += sectionHTML("Procedure", listHTML(p.procedure));
    if (codes.length) {
      html += '<section class="detail-section">' +
        '<h2 class="section-title"><span class="section-bar"></span>Program' + (codes.length > 1 ? " (" + codes.length + " blocks)" : "") + "</h2>" +
        '<div class="section-body code-list">' +
        codes.map((c, i) => window.Highlight.figure(c, i, window.Store.settings().lineNumbers)).join("") +
        "</div></section>";
    }
    html += sectionHTML("Output", p.output ? '<pre class="output">' + esc(p.output) + "</pre>" : "");
    html += sectionHTML("Explanation", prose(p.explanation));
    html += sectionHTML("Result", prose(p.result));
    html += sectionHTML("Conclusion", prose(p.conclusion));
    html += sectionHTML("Important notes", bullets(p.notes), "notes");

    html += '<nav class="prevnext">' +
      (prev
        ? '<a class="pn prev" href="#/practical/' + prev.id + '" data-action="nav" data-url="#/practical/' + prev.id + '">' + window.Icons.get("chevronLeft", 18) + '<span><span class="pn-label">Previous</span><span class="pn-title">' + esc(prev.title) + "</span></span></a>"
        : '<span class="pn disabled">' + window.Icons.get("chevronLeft", 18) + '<span><span class="pn-label">Previous</span><span class="pn-title">Start of journal</span></span></span>') +
      (next
        ? '<a class="pn next" href="#/practical/' + next.id + '" data-action="nav" data-url="#/practical/' + next.id + '">' + '<span><span class="pn-label">Next</span><span class="pn-title">' + esc(next.title) + "</span></span>" + window.Icons.get("chevronRight", 18) + "</a>"
        : '<span class="pn disabled">' + '<span><span class="pn-label">Next</span><span class="pn-title">End of journal</span></span>' + window.Icons.get("chevronRight", 18) + "</span>") +
      "</nav>";

    return html;
  }

  function viewBookmarks() {
    const ids = window.Store.bookmarks();
    const list = ids.map((id) => PRACTICAL_BY_ID[id]).filter(Boolean);
    let html = '<header class="page-head"><div>' +
      '<p class="eyebrow">Saved</p><h1>Bookmarks</h1>' +
      '<p class="page-sub">' + list.length + " bookmarked practical" + (list.length === 1 ? "" : "s") + "</p></div>" +
      '<div class="page-actions"><a class="btn" href="#/library" data-action="nav" data-url="#/library">Browse library</a></div></header>';
    if (!list.length) {
      html += emptyState("bookmark", "No bookmarks yet", "Open any practical and press the bookmark button to save it here.", '<a class="btn" href="#/library" data-action="nav" data-url="#/library">Open library</a>');
    } else {
      html += '<div class="card-list">' + list.map(card).join("") + "</div>";
    }
    return html;
  }

  function viewRecent() {
    const recent = window.Store.recent();
    let html = '<header class="page-head"><div>' +
      '<p class="eyebrow">History</p><h1>Recently Viewed</h1>' +
      '<p class="page-sub">' + recent.length + " recently opened</p></div>" +
      '<div class="page-actions">' +
      (recent.length ? '<button type="button" class="btn btn-ghost" data-action="clear-recent">' + window.Icons.get("trash", 16) + " Clear history</button>" : "") +
      '<a class="btn" href="#/library" data-action="nav" data-url="#/library">Browse library</a></div></header>';
    if (!recent.length) {
      html += emptyState("clock", "No history yet", "Practicals you open will be listed here.", "");
    } else {
      html += '<div class="recent-list">' + recent.map((r) => {
        const p = PRACTICAL_BY_ID[r.id];
        if (!p) return "";
        return (
          '<div class="recent-row-wrap">' + recentRow(p) +
          '<button type="button" class="icon-btn rr-remove" data-action="remove-recent" data-id="' + p.id + '" title="Remove from history">' + window.Icons.get("x", 15) + "</button></div>"
        );
      }).join("") + "</div>";
    }
    return html;
  }

  function viewSettings() {
    const st = window.Store.settings();
    const counts = window.Store.counts();
    let html = '<header class="page-head"><div>' +
      '<p class="eyebrow">Preferences & source</p><h1>Settings</h1>' +
      '<p class="page-sub">Preferences are stored in your browser (localStorage). No account or server is used.</p></div></header>';

    html += '<div class="grid-2"><section class="panel"><div class="panel-head"><h2>Appearance & viewer</h2></div>' +
      '<div class="settings-list">' +
      settingToggle("lineNumbers", "Code line numbers", "Show numbered gutters in every code block", st.lineNumbers) +
      settingToggle("reduceMotion", "Reduce motion", "Disable non-essential animations", st.reduceMotion) +
      settingToggle("sidebarCollapsed", "Collapsed sidebar", "Start with the sidebar collapsed", st.sidebarCollapsed) +
      "</div></section>";

    html += '<section class="panel"><div class="panel-head"><h2>Progress data</h2></div>' +
      '<div class="kv">' +
      "<div><span>Bookmarked</span><strong>" + counts.bookmarks + "</strong></div>" +
      "<div><span>Completed</span><strong>" + counts.completed + "</strong></div>" +
      "<div><span>Recently viewed</span><strong>" + counts.recent + "</strong></div>" +
      "</div>" +
      '<div class="panel-actions"><button type="button" class="btn btn-danger" data-action="reset-progress">' + window.Icons.get("trash", 16) + " Reset all progress</button></div>" +
      "<p class=\"hint\">Resetting clears bookmarks, completion marks and history from this browser.</p>" +
      "</section></div>";

    html += '<section class="panel"><div class="panel-head"><h2>Student & source files</h2></div>' +
      '<div class="kv kv-3">' +
      "<div><span>Name</span><strong>" + esc(DATA.student.name) + "</strong></div>" +
      "<div><span>Roll no.</span><strong>" + esc(DATA.student.roll) + "</strong></div>" +
      "<div><span>Class</span><strong>" + esc(DATA.student.class) + "</strong></div>" +
      "<div><span>Institution</span><strong>" + esc(DATA.student.institution) + "</strong></div>" +
      "<div><span>Department</span><strong>" + esc(DATA.student.department) + "</strong></div>" +
      "<div><span>Academic year</span><strong>" + esc(DATA.student.year) + "</strong></div>" +
      "</div>" +
      '<div class="file-list">' +
      SUBJECTS.map((s) =>
        '<div class="file-row"><span class="file-ic" style="color:' + s.color + '">' + window.Icons.get("fileText", 16) + "</span>" +
        '<span class="file-name">' + esc(s.pdf) + "</span>" +
        '<span class="file-meta">' + s.pdfPages + " PDF pages · " + s.journalPages + " journal pages · " + (DATA[s.id] || []).length + " practicals</span></div>"
      ).join("") +
      "</div>" +
      "<p class=\"hint\">The original PDF files are kept in the project folder and are never modified.</p>" +
      "</section>";

    html += '<section class="panel"><div class="panel-head"><h2>Data verification</h2></div>' +
      '<div class="kv">' +
      "<div><span>Subjects</span><strong>" + SUBJECTS.length + "</strong></div>" +
      "<div><span>Practicals</span><strong>" + PRACTICALS.length + "</strong></div>" +
      "<div><span>With source code</span><strong>" + PRACTICALS.filter(hasCode).length + "</strong></div>" +
      "<div><span>Code blocks</span><strong>" + PRACTICALS.reduce((a, p) => a + codesOf(p).length, 0) + "</strong></div>" +
      "</div>" +
      '<div class="file-list">' +
      SUBJECTS.map((s) => {
        const list = DATA[s.id] || [];
        return '<div class="file-row"><span class="file-ic" style="color:' + s.color + '">' + window.Icons.get(s.icon, 16) + "</span>" +
          '<span class="file-name">' + esc(s.name) + "</span>" +
          '<span class="file-meta">' + list.length + " practicals · " + list.filter(hasCode).length + " with code</span></div>";
      }).join("") +
      "</div></section>";

    html += '<section class="panel"><div class="panel-head"><h2>Extraction caveats & source notes</h2></div>' +
      '<div class="notes-list">' +
      (DATA.sourceNotes || []).map((n) =>
        '<div class="note-item"><div class="note-sub">' + esc(n.subject) + "</div><p>" + esc(n.text) + "</p></div>"
      ).join("") +
      "</div></section>";

    return html;
  }

  function settingToggle(key, title, desc, value) {
    return (
      '<label class="setting-row" for="set_' + key + '">' +
      '<span class="setting-text"><span class="setting-title">' + esc(title) + "</span><span class=\"setting-desc\">" + esc(desc) + "</span></span>" +
      '<input id="set_' + key + '" type="checkbox" data-setting="' + key + '"' + (value ? " checked" : "") + '><span class="toggle-track"></span>' +
      "</label>"
    );
  }

  /* ------------------------------------------------------------------ sidebar */
  function sidebarHTML() {
    const counts = window.Store.counts();
    const subj = SUBJECTS.map((s) => {
      const list = DATA[s.id] || [];
      return (
        '<a class="nav-item nav-sub" href="#/subject/' + s.id + '" data-action="nav" data-url="#/subject/' + s.id + '" data-route="subject" data-id="' + s.id + '">' +
        '<span class="nav-ic" style="color:' + s.color + '">' + window.Icons.get(s.icon, 17) + "</span>" +
        '<span class="nav-label">' + esc(s.name) + "</span>" +
        '<span class="nav-count">' + list.length + "</span></a>"
      );
    }).join("");

    return (
      '<div class="brand">' +
      '<div class="brand-mark">' + window.Icons.get("code", 18) + "</div>" +
      '<div class="brand-text"><span class="brand-name">Practical Library</span><span class="brand-sub">' + esc(DATA.student.roll ? "Roll " + DATA.student.roll : "") + "</span></div>" +
      '<button type="button" class="icon-btn sidebar-close" data-action="close-sidebar">' + window.Icons.get("x", 18) + "</button>" +
      "</div>" +
      '<nav class="nav">' +
      '<a class="nav-item" href="#/" data-action="nav" data-url="#/" data-route="dashboard">' + window.Icons.get("dashboard", 18) + '<span class="nav-label">Dashboard</span></a>' +
      '<a class="nav-item" href="#/library" data-action="nav" data-url="#/library" data-route="library">' + window.Icons.get("library", 18) + '<span class="nav-label">All Practicals</span></a>' +
      '<button type="button" class="nav-item nav-group" data-action="toggle-subjects">' + window.Icons.get("folder", 18) + '<span class="nav-label">Subject Categories</span>' + window.Icons.get("chevronDown", 16) + "</button>" +
      '<div class="nav-subjects" id="navSubjects">' + subj + "</div>" +
      '<a class="nav-item" href="#/bookmarks" data-action="nav" data-url="#/bookmarks" data-route="bookmarks">' + window.Icons.get("bookmark", 18) + '<span class="nav-label">Bookmarks</span><span class="nav-count">' + counts.bookmarks + "</span></a>" +
      '<a class="nav-item" href="#/recent" data-action="nav" data-url="#/recent" data-route="recent">' + window.Icons.get("clock", 18) + '<span class="nav-label">Recently Viewed</span><span class="nav-count">' + counts.recent + "</span></a>" +
      '<a class="nav-item" href="#/settings" data-action="nav" data-url="#/settings" data-route="settings">' + window.Icons.get("settings", 18) + '<span class="nav-label">Settings</span></a>' +
      "</nav>" +
      '<div class="sidebar-foot">' + progressBar(counts.completed, PRACTICALS.length, "Prepared") + "</div>"
    );
  }

  function updateSidebarActive(segs) {
    const route = segs[0] || "dashboard";
    document.querySelectorAll("[data-route]").forEach((el) => {
      const r = el.getAttribute("data-route");
      let active = r === route;
      if (r === "dashboard" && route === "") active = true;
      el.classList.toggle("active", active);
    });
    document.querySelectorAll(".nav-sub").forEach((el) => {
      el.classList.toggle("active", route === "subject" && el.getAttribute("data-id") === segs[1]);
    });
  }

  /* ------------------------------------------------------------------ render */
  function render() {
    const { segs, params } = parseHash();
    const view = document.getElementById("view");
    let html = "";
    const route = segs[0] || "dashboard";
    if (route === "library") html = viewLibrary(params);
    else if (route === "subject") html = viewSubject(segs[1]);
    else if (route === "practical") html = viewPractical(segs[1]);
    else if (route === "bookmarks") html = viewBookmarks();
    else if (route === "recent") html = viewRecent();
    else if (route === "settings") html = viewSettings();
    else html = viewDashboard();

    view.innerHTML = html;
    applySettingsClasses();
    const sb = document.getElementById("sidebar");
    if (sb) sb.innerHTML = sidebarHTML();
    updateSidebarActive(segs);
    const count = document.getElementById("libCount");
    if (count) {
      const f = libraryFilters(params);
      const n = filterPracticals(f).length;
      count.textContent = n + " of " + PRACTICALS.length + " practicals";
    }
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.classList.remove("show");
    document.body.classList.remove("sidebar-open");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function applySettingsClasses() {
    const st = window.Store.settings();
    document.body.classList.toggle("sidebar-collapsed", !!st.sidebarCollapsed);
    document.body.classList.toggle("reduce-motion", !!st.reduceMotion);
  }

  /* ------------------------------------------------------------------ events */
  function bindEvents() {
    document.addEventListener("click", (e) => {
      const nav = e.target.closest("[data-action='nav']");
      if (nav) {
        const url = nav.getAttribute("data-url");
        if (url) {
          if (location.hash === url) render();
          else location.hash = url;
        }
        return;
      }
      const el = e.target.closest("[data-action]");
      if (!el) return;
      const action = el.getAttribute("data-action");
      const id = el.getAttribute("data-id");

      if (action === "bookmark" || action === "complete") {
        const y = window.scrollY;
        const on = action === "bookmark"
          ? window.Store.toggleBookmark(id)
          : window.Store.toggleCompleted(id);
        toast(action === "bookmark"
          ? (on ? "Bookmarked" : "Bookmark removed")
          : (on ? "Marked as completed" : "Marked as not completed"));
        render();
        window.scrollTo(0, y);
      } else if (action === "copy") {
        const idx = +el.getAttribute("data-copy-idx");
        const p = currentPractical();
        if (p && p.code && p.code[idx]) {
          copyText(p.code[idx].src, "Code copied to clipboard");
          el.classList.add("copied");
          const label = el.querySelector("span");
          if (label) label.textContent = "Copied";
          setTimeout(() => {
            el.classList.remove("copied");
            if (label) label.textContent = "Copy";
          }, 1700);
        }
      } else if (action === "copy-all") {
        const p = currentPractical();
        if (p && p.code && p.code.length) {
          copyText(p.code.map((c) => c.src).join("\n\n"), "All code blocks copied");
        }
      } else if (action === "toggle-sidebar") {
        toggleSidebar();
      } else if (action === "close-sidebar") {
        document.body.classList.remove("sidebar-open");
        const ov = document.getElementById("overlay");
        if (ov) ov.classList.remove("show");
      } else if (action === "open-sidebar") {
        document.body.classList.add("sidebar-open");
        const ov = document.getElementById("overlay");
        if (ov) ov.classList.add("show");
      } else if (action === "toggle-subjects") {
        const box = document.getElementById("navSubjects");
        const open = box.style.display !== "none";
        box.style.display = open ? "none" : "block";
        el.classList.toggle("open", !open);
      } else if (action === "clear-recent") {
        window.Store.clearRecent();
        toast("History cleared");
        render();
      } else if (action === "remove-recent") {
        window.Store.removeRecent(id);
        render();
      } else if (action === "clear-filters") {
        location.hash = "#/library";
      } else if (action === "clear-search") {
        const input = document.getElementById("libSearch");
        if (input) {
          input.value = "";
          const btn = input.parentElement.querySelector(".control-clear");
          if (btn) btn.remove();
          updateLibraryQuery({ q: "" });
        }
      } else if (action === "reset-progress") {
        if (confirm("Clear all bookmarks, completion marks and history?")) {
          window.Store.resetProgress();
          toast("Progress reset");
          render();
        }
      }
    });

    document.addEventListener("input", (e) => {
      if (e.target.id === "libSearch") {
        updateLibraryQuery({ q: e.target.value }, true);
      } else if (e.target.id === "fNum") {
        updateLibraryQuery({ num: e.target.value }, true);
      }
    });
    document.addEventListener("change", (e) => {
      const t = e.target;
      if (t.id === "fSubject") updateLibraryQuery({ subject: t.value });
      else if (t.id === "fSort") updateLibraryQuery({ sort: t.value });
      else if (t.id === "fBookmarked") updateLibraryQuery({ bookmarked: t.checked ? "1" : "" });
      else if (t.id === "fCompleted") updateLibraryQuery({ completed: t.checked ? "1" : "" });
      else if (t.hasAttribute("data-setting")) {
        const key = t.getAttribute("data-setting");
        window.Store.setSetting(key, t.checked);
        applySettingsClasses();
        if (key === "lineNumbers") render();
      }
    });

    const topSearch = document.getElementById("topSearch");
    if (topSearch) {
      topSearch.addEventListener("input", debounce(() => {
        const v = topSearch.value.trim();
        if (!v) return;
        navigate("#/library?q=" + encodeURIComponent(v));
      }, 350));
      topSearch.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const v = topSearch.value.trim();
          if (v) navigate("#/library?q=" + encodeURIComponent(v));
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) {
        e.preventDefault();
        if (location.hash.indexOf("#/library") !== 0) navigate("#/library");
        requestAnimationFrame(() => {
          const s = document.getElementById("libSearch") || document.getElementById("topSearch");
          if (s) { s.focus(); if (s.select) s.select(); }
        });
      }
      if (e.key === "Escape") {
        document.body.classList.remove("sidebar-open");
        const ov = document.getElementById("overlay");
        if (ov) ov.classList.remove("show");
      }
    });

    window.addEventListener("hashchange", render);
  }

  function currentPractical() {
    const { segs } = parseHash();
    if (segs[0] !== "practical") return null;
    return PRACTICAL_BY_ID[segs[1]] || null;
  }

  function updateLibraryQuery(changes, soft) {
    const { params } = parseHash();
    const next = {
      q: params.get("q") || "",
      subject: params.get("subject") || "",
      num: params.get("num") || "",
      bookmarked: params.get("bookmarked") || "",
      completed: params.get("completed") || "",
      sort: params.get("sort") || "num-asc"
    };
    Object.keys(changes).forEach((k) => {
      next[k] = changes[k] === undefined || changes[k] === null ? "" : changes[k];
    });
    const p = new URLSearchParams();
    Object.keys(next).forEach((k) => {
      if (next[k] !== "" && next[k] !== "num-asc") p.set(k, next[k]);
    });
    const qs = p.toString();
    const url = "#/library" + (qs ? "?" + qs : "");
    if (soft) {
      history.replaceState(null, "", url);
      refreshLibraryResults();
    } else {
      location.hash = url;
    }
  }

  function toggleSidebar() {
    const current = window.Store.settings().sidebarCollapsed;
    window.Store.setSetting("sidebarCollapsed", !current);
    applySettingsClasses();
  }

  /* ------------------------------------------------------------------ boot */
  function boot() {
    document.body.classList.toggle("sidebar-collapsed", !!SETTINGS.sidebarCollapsed);
    document.body.classList.toggle("reduce-motion", !!SETTINGS.reduceMotion);
    const sb = document.getElementById("sidebar");
    if (sb) sb.innerHTML = sidebarHTML();
    bindEvents();
    if (!location.hash) location.hash = "#/";
    render();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
