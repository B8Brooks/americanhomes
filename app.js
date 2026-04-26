// American Homes — front-end logic.
// Three views: Learn (browse styles), Style Quiz (illustration → style),
// Element Quiz (feature description → style). Vanilla JS, no build step.

var App = {
  STYLES: window.STYLES || [],
  currentStyleId: null,
  styleQuiz: { current: null, score: 0, total: 0 },
  elementQuiz: { current: null, score: 0, total: 0 }
};

// ---- helpers ------------------------------------------------------------

App.el = function (id) { return document.getElementById(id); };

App.shuffle = function (arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
};

App.pickRandom = function (arr, exceptId) {
  var pool = exceptId ? arr.filter(function (s) { return s.id !== exceptId; }) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
};

App.escape = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};

// ---- mode switching ----------------------------------------------------

App.switchMode = function (mode) {
  document.querySelectorAll('.mode-btn').forEach(function (b) {
    var active = b.dataset.mode === mode;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  document.querySelectorAll('main .view').forEach(function (v) {
    v.classList.toggle('active', v.id === mode);
  });
  if (mode === 'style-quiz' && !App.styleQuiz.current) App.nextStyleQuiz();
  if (mode === 'element-quiz' && !App.elementQuiz.current) App.nextElementQuiz();
};

document.querySelectorAll('.mode-btn').forEach(function (btn) {
  btn.addEventListener('click', function () { App.switchMode(btn.dataset.mode); });
});

// ---- LEARN view --------------------------------------------------------

App.renderStyleIndex = function () {
  var search = App.el('style-search');
  var index = App.el('style-index');
  var query = (search.value || '').trim().toLowerCase();
  var filtered = App.STYLES.filter(function (s) {
    if (!query) return true;
    var hay = (s.name + ' ' + s.tags.join(' ') + ' ' + s.period + ' ' + s.summary).toLowerCase();
    return hay.indexOf(query) >= 0;
  });
  index.innerHTML = '';
  filtered.forEach(function (s) {
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.id = s.id;
    if (s.id === App.currentStyleId) btn.classList.add('active');
    btn.innerHTML = '<span>' + App.escape(s.name) + '</span>' +
                    '<span class="meta">' + App.escape(s.period) + '</span>';
    btn.addEventListener('click', function () { App.selectStyle(s.id); });
    li.appendChild(btn);
    index.appendChild(li);
  });
  if (filtered.length === 0) {
    var empty = document.createElement('li');
    empty.style.padding = '10px';
    empty.style.color = 'var(--ink-soft)';
    empty.textContent = 'No styles match.';
    index.appendChild(empty);
  }
};

App.selectStyle = function (id) {
  var s = window.STYLE_BY_ID(id);
  if (!s) return;
  App.currentStyleId = id;
  var html = '';
  html += '<h1>' + App.escape(s.name) + '</h1>';
  html += '<div class="period">' + App.escape(s.period) + ' &middot; ' + App.escape(s.region) + '</div>';
  html += '<div class="detail-grid">';
  html +=   '<div class="illustration-frame">' + s.svg + '</div>';
  html +=   '<div class="detail-text">';
  html +=     '<h3>Overview</h3><p>' + App.escape(s.summary) + '</p>';
  html +=     '<h3>Key features</h3><ul>';
  s.keyFeatures.forEach(function (f) { html += '<li>' + App.escape(f) + '</li>'; });
  html +=     '</ul>';
  html +=     '<div class="tags">';
  s.tags.forEach(function (t) { html += '<span class="tag">' + App.escape(t) + '</span>'; });
  html +=     '</div>';
  html +=   '</div>';
  html += '</div>';
  App.el('style-detail').innerHTML = html;
  document.querySelectorAll('#style-index button').forEach(function (b) {
    b.classList.toggle('active', b.dataset.id === id);
  });
};

App.el('style-search').addEventListener('input', App.renderStyleIndex);

// quiz functions defined in the next section of this file.
App.nextStyleQuiz = function () {};
App.nextElementQuiz = function () {};

// ---- bootstrap ---------------------------------------------------------

App.renderStyleIndex();
if (App.STYLES.length) App.selectStyle(App.STYLES[0].id);
