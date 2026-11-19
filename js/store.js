/* localStorage persistence: bookmarks, completed practicals, recently viewed and settings. */
(function () {
  const KEYS = {
    bookmarks: "pecl.bookmarks",
    completed: "pecl.completed",
    recent: "pecl.recent",
    settings: "pecl.settings"
  };

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage full or unavailable — the app keeps working in-memory */
    }
  }

  const defaults = {
    bookmarks: [],
    completed: [],
    recent: [],
    settings: { sidebarCollapsed: false, lineNumbers: true, reduceMotion: false }
  };

  const state = {
    bookmarks: read(KEYS.bookmarks, defaults.bookmarks),
    completed: read(KEYS.completed, defaults.completed),
    recent: read(KEYS.recent, defaults.recent),
    settings: Object.assign({}, defaults.settings, read(KEYS.settings, {}))
  };

  function persist() {
    write(KEYS.bookmarks, state.bookmarks);
    write(KEYS.completed, state.completed);
    write(KEYS.recent, state.recent);
    write(KEYS.settings, state.settings);
  }

  window.Store = {
    all() {
      return state;
    },
    settings() {
      return state.settings;
    },
    setSetting(key, value) {
      state.settings[key] = value;
      write(KEYS.settings, state.settings);
    },
    isBookmarked(id) {
      return state.bookmarks.indexOf(id) !== -1;
    },
    toggleBookmark(id) {
      const i = state.bookmarks.indexOf(id);
      if (i === -1) state.bookmarks.push(id);
      else state.bookmarks.splice(i, 1);
      write(KEYS.bookmarks, state.bookmarks);
      return i === -1;
    },
    isCompleted(id) {
      return state.completed.indexOf(id) !== -1;
    },
    toggleCompleted(id) {
      const i = state.completed.indexOf(id);
      if (i === -1) state.completed.push(id);
      else state.completed.splice(i, 1);
      write(KEYS.completed, state.completed);
      return i === -1;
    },
    bookmarks() {
      return state.bookmarks.slice();
    },
    completed() {
      return state.completed.slice();
    },
    recent() {
      return state.recent.slice();
    },
    pushRecent(id) {
      state.recent = state.recent.filter((r) => r.id !== id);
      state.recent.unshift({ id, t: Date.now() });
      state.recent = state.recent.slice(0, 12);
      write(KEYS.recent, state.recent);
    },
    removeRecent(id) {
      state.recent = state.recent.filter((r) => r.id !== id);
      write(KEYS.recent, state.recent);
    },
    clearRecent() {
      state.recent = [];
      write(KEYS.recent, state.recent);
    },
    resetProgress() {
      state.bookmarks = [];
      state.completed = [];
      state.recent = [];
      persist();
    },
    counts() {
      return {
        bookmarks: state.bookmarks.length,
        completed: state.completed.length,
        recent: state.recent.length
      };
    }
  };
})();
