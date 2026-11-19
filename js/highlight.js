/* Code viewer: Prism syntax highlighting (vendored locally), line numbers, copy button.
   Falls back to plain escaped code if Prism is unavailable, so the viewer never breaks. */
(function () {
  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlight(src, lang) {
    const prism = window.Prism;
    if (prism && lang && prism.languages[lang]) {
      try {
        return prism.highlight(src, prism.languages[lang], lang);
      } catch (e) {
        /* fall through to escaped text */
      }
    }
    return escapeHTML(src);
  }

  function lineCount(src) {
    const text = String(src == null ? "" : src).replace(/\n$/, "");
    return Math.max(1, text.split("\n").length);
  }

  function renderLines(src, lang, showNumbers) {
    const html = highlight(src, lang).replace(/\n$/, "");
    let gutter = "";
    if (showNumbers) {
      const nums = [];
      const total = lineCount(src);
      for (let i = 1; i <= total; i++) nums.push(i);
      gutter = '<pre class="gutter" aria-hidden="true">' + nums.join("\n") + "</pre>";
    }
    return gutter + '<pre class="code"><code>' + html + "</code></pre>";
  }

  function figure(block, idx, showNumbers) {
    const lang = block.lang || "text";
    const file = block.file || "source";
    const label = escapeHTML(file);
    const langLabel = escapeHTML(lang === "markup" ? "html" : lang);
    return (
      '<figure class="code-figure" data-idx="' + idx + '">' +
      '<figcaption class="code-head">' +
      '<span class="code-file">' + window.Icons.get("fileText", 14) + "<span>" + label + "</span></span>" +
      '<span class="code-meta">' +
      '<span class="code-lang">' + langLabel + "</span>" +
      '<button type="button" class="btn-copy" data-action="copy" data-copy-idx="' + idx + '" title="Copy this code block">' +
      window.Icons.get("copy", 14) + "<span>Copy</span>" +
      "</button>" +
      "</span>" +
      "</figcaption>" +
      '<div class="code-body">' +
      renderLines(block.src || "", lang, showNumbers) +
      "</div>" +
      "</figure>"
    );
  }

  window.Highlight = {
    escape: escapeHTML,
    renderLines: renderLines,
    figure: figure,
    highlight: highlight
  };
})();
