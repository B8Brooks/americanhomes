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

// ---- STYLE QUIZ --------------------------------------------------------

App.nextStyleQuiz = function () {
  var answer = App.pickRandom(App.STYLES);
  var distractors = App.shuffle(App.STYLES.filter(function (s) { return s.id !== answer.id; })).slice(0, 3);
  var options = App.shuffle([answer].concat(distractors));
  App.styleQuiz.current = answer;
  App.el('sq-illustration').innerHTML = answer.svg;
  var choices = App.el('sq-choices');
  choices.innerHTML = '';
  options.forEach(function (s) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice';
    btn.dataset.id = s.id;
    btn.textContent = s.name;
    btn.addEventListener('click', function () { App.handleStyleQuizAnswer(s.id); });
    choices.appendChild(btn);
  });
  App.el('sq-feedback').hidden = true;
  App.el('sq-feedback').innerHTML = '';
  App.el('sq-next').hidden = true;
};

App.handleStyleQuizAnswer = function (chosenId) {
  var answer = App.styleQuiz.current;
  var correct = chosenId === answer.id;
  App.styleQuiz.total += 1;
  if (correct) App.styleQuiz.score += 1;
  document.querySelectorAll('#sq-choices button').forEach(function (btn) {
    btn.disabled = true;
    if (btn.dataset.id === answer.id) btn.classList.add(correct ? 'correct' : 'reveal');
    else if (btn.dataset.id === chosenId) btn.classList.add('wrong');
  });
  var fb = App.el('sq-feedback');
  fb.classList.remove('good', 'bad');
  fb.classList.add(correct ? 'good' : 'bad');
  fb.hidden = false;
  fb.innerHTML = '<h4>' + (correct ? 'Correct.' : 'Not quite.') +
                 ' This is ' + App.escape(answer.name) +
                 ' (' + App.escape(answer.period) + ').</h4>' +
                 '<p>' + App.escape(answer.summary) + '</p>';
  App.el('sq-score').textContent = 'Score: ' + App.styleQuiz.score + ' / ' + App.styleQuiz.total;
  App.el('sq-next').hidden = false;
};

App.el('sq-next').addEventListener('click', App.nextStyleQuiz);
App.el('sq-reset').addEventListener('click', function () {
  App.styleQuiz.score = 0;
  App.styleQuiz.total = 0;
  App.el('sq-score').textContent = 'Score: 0 / 0';
  App.nextStyleQuiz();
});

// ---- ELEMENT QUIZ ------------------------------------------------------

App.nextElementQuiz = function () {
  var pool = App.STYLES.filter(function (s) { return s.elements && s.elements.length; });
  var answer = App.pickRandom(pool);
  var element = App.pickRandom(answer.elements);
  var distractors = App.shuffle(App.STYLES.filter(function (s) { return s.id !== answer.id; })).slice(0, 3);
  var options = App.shuffle([answer].concat(distractors));
  App.elementQuiz.current = { style: answer, element: element };
  App.el('eq-element').textContent = element;
  var choices = App.el('eq-choices');
  choices.innerHTML = '';
  options.forEach(function (s) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice';
    btn.dataset.id = s.id;
    btn.textContent = s.name;
    btn.addEventListener('click', function () { App.handleElementQuizAnswer(s.id); });
    choices.appendChild(btn);
  });
  App.el('eq-feedback').hidden = true;
  App.el('eq-feedback').innerHTML = '';
  App.el('eq-next').hidden = true;
};

App.handleElementQuizAnswer = function (chosenId) {
  var answer = App.elementQuiz.current.style;
  var correct = chosenId === answer.id;
  App.elementQuiz.total += 1;
  if (correct) App.elementQuiz.score += 1;
  document.querySelectorAll('#eq-choices button').forEach(function (btn) {
    btn.disabled = true;
    if (btn.dataset.id === answer.id) btn.classList.add(correct ? 'correct' : 'reveal');
    else if (btn.dataset.id === chosenId) btn.classList.add('wrong');
  });
  var fb = App.el('eq-feedback');
  fb.classList.remove('good', 'bad');
  fb.classList.add(correct ? 'good' : 'bad');
  fb.hidden = false;
  fb.innerHTML = '<h4>' + (correct ? 'Correct.' : 'Not quite.') +
                 ' That feature points to ' + App.escape(answer.name) + '.</h4>' +
                 '<p>' + App.escape(answer.summary) + '</p>';
  App.el('eq-score').textContent = 'Score: ' + App.elementQuiz.score + ' / ' + App.elementQuiz.total;
  App.el('eq-next').hidden = false;
};

App.el('eq-next').addEventListener('click', App.nextElementQuiz);
App.el('eq-reset').addEventListener('click', function () {
  App.elementQuiz.score = 0;
  App.elementQuiz.total = 0;
  App.el('eq-score').textContent = 'Score: 0 / 0';
  App.nextElementQuiz();
});

// ---- bootstrap ---------------------------------------------------------

App.renderStyleIndex();
if (App.STYLES.length) App.selectStyle(App.STYLES[0].id);
