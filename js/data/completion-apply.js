/* Merge authored completion records into the transcribed practicals.
   Loaded after all subject files and *-completion.js files, before index.js.
   Only empty/missing fields are filled; transcribed source content is preserved. */
(function () {
  window.PECL = window.PECL || {};
  const completion = window.PECL.completion || {};
  const fillable = [
    "problem", "requirements", "theory", "algorithm", "procedure",
    "code", "output", "explanation", "result", "conclusion", "notes", "viva"
  ];
  const isEmpty = (value) =>
    value === undefined || value === null ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "string" && value.trim() === "");

  Object.keys(completion).forEach((id) => {
    const patch = completion[id] || {};
    const practical = Object.keys(window.PECL)
      .filter((key) => Array.isArray(window.PECL[key]))
      .reduce((found, key) => found || window.PECL[key].find((p) => p.id === id), null);
    if (!practical) return;
    fillable.forEach((field) => {
      const hasPatch = Object.prototype.hasOwnProperty.call(patch, field);
      const own = Object.prototype.hasOwnProperty.call(practical, field);
      if (hasPatch && (!own || isEmpty(practical[field]))) {
        practical[field] = patch[field];
      }
    });
  });
})();
