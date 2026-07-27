// American Homes — front-end logic.
// Four views: Learn (browse styles), Elements (component glossary),
// Style Quiz (image → style), Element Quiz (feature → style, or
// diagram → component name). Vanilla JS, no build step.

var App = {
  STYLES: window.STYLES || [],
  ELEMENTS: window.ELEMENTS || [],
  currentStyleId: null,
  currentExampleIdx: 0,
  glossaryRendered: false,
  styleQuiz: { current: null, score: 0, total: 0, streak: 0, round: { correct: 0, total: 0 } },
  elementQuiz: { current: null, score: 0, total: 0, streak: 0, round: { correct: 0, total: 0 } }
};

// Round-summary tiers, best first. Every 10 answers the player gets a grade.
App.ROUND_TIERS = [
  { min: 10, title: 'Master Builder', note: 'A perfect round. You could lead the walking tour.' },
  { min: 8, title: 'Architecture Buff', note: 'Sharp eye — the tricky lookalikes barely slow you down.' },
  { min: 6, title: 'House Spotter', note: 'Solid! Check the “Don’t confuse with” notes to go further.' },
  { min: 4, title: 'Getting There', note: 'Keep at it — roof shape first, then symmetry, then details.' },
  { min: 0, title: 'Keep Looking Up', note: 'Every expert started here. A lap through Learn will pay off.' }
];

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

// ---- progress store (localStorage) --------------------------------------
// Per-id {seen, correct} for styles and glossary elements, so quizzes can
// adapt and mastery survives between visits. All access is try/catch-guarded
// (private browsing modes throw on setItem).

App.PROGRESS_KEY = 'americanhomes-progress';

App.loadProgress = function () {
  try {
    var raw = localStorage.getItem(App.PROGRESS_KEY);
    if (raw) {
      var p = JSON.parse(raw);
      if (p && p.styles && p.elements) return p;
    }
  } catch (e) { /* storage unavailable */ }
  return { styles: {}, elements: {} };
};

App.progress = App.loadProgress();

App.saveProgress = function () {
  try { localStorage.setItem(App.PROGRESS_KEY, JSON.stringify(App.progress)); }
  catch (e) { /* storage unavailable */ }
};

App.recordStat = function (kind, id, correct) {
  var s = App.progress[kind][id] || { seen: 0, correct: 0 };
  s.seen += 1;
  if (correct) s.correct += 1;
  App.progress[kind][id] = s;
  App.saveProgress();
  App.refreshProgressUI();
};

App.isMastered = function (id) {
  var s = App.progress.styles[id];
  return !!s && s.seen >= 5 && s.correct / s.seen >= 0.8;
};

App.masteredCount = function () {
  return App.STYLES.filter(function (s) { return App.isMastered(s.id); }).length;
};

// Weighted answer pick: unseen and often-missed ids come up more.
// weight = 1 + 2 * missRate + 1 if never seen.
App.pickWeighted = function (arr, kind) {
  var weights = arr.map(function (item) {
    var s = App.progress[kind][item.id];
    if (!s || !s.seen) return 2;
    return 1 + 2 * (1 - s.correct / s.seen);
  });
  var total = weights.reduce(function (a, b) { return a + b; }, 0);
  var r = Math.random() * total;
  for (var i = 0; i < arr.length; i++) {
    r -= weights[i];
    if (r <= 0) return arr[i];
  }
  return arr[arr.length - 1];
};

App.resetProgress = function () {
  App.progress = { styles: {}, elements: {} };
  App.saveProgress();
  App.refreshProgressUI();
  App.renderStyleIndex();
};

App.refreshProgressUI = function () {
  var n = App.masteredCount();
  var answered = Object.keys(App.progress.styles).length > 0 ||
                 Object.keys(App.progress.elements).length > 0;
  var text = 'Mastered ' + n + ' / ' + App.STYLES.length + ' styles';
  ['sq-mastery', 'eq-mastery'].forEach(function (id) {
    var el = App.el(id);
    if (el) el.textContent = answered ? text : '';
  });
  var box = App.el('progress-box');
  if (box) {
    box.hidden = !answered;
    if (answered) {
      box.innerHTML = '<strong>' + App.escape(text) + '</strong>' +
        '<span>Get a style right 5+ times (80%+) in the quizzes to master it.</span>' +
        '<button type="button" class="ghost-btn" id="progress-reset">Reset progress</button>';
      var btn = App.el('progress-reset');
      if (btn) btn.addEventListener('click', App.resetProgress);
    }
  }
  // refresh mastery checkmarks on the Learn list in place
  document.querySelectorAll('#style-index li button').forEach(function (b) {
    var has = b.querySelector('.master-badge');
    if (App.isMastered(b.dataset.id) && !has) {
      var span = document.createElement('span');
      span.className = 'master-badge';
      span.title = 'Mastered';
      span.textContent = ' ✓';
      b.firstChild.appendChild(span);
    } else if (!App.isMastered(b.dataset.id) && has) {
      has.remove();
    }
  });
};

App.escape = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};

// Update streak + 10-question round state for a quiz and refresh the streak
// flame. Returns round-summary HTML when this answer completes a round.
App.recordAnswer = function (quiz, correct, streakElId) {
  quiz.streak = correct ? quiz.streak + 1 : 0;
  var streakEl = App.el(streakElId);
  if (quiz.streak >= 2) {
    streakEl.textContent = '🔥 ' + quiz.streak;
    streakEl.hidden = false;
  } else {
    streakEl.hidden = true;
  }
  quiz.round.total += 1;
  if (correct) quiz.round.correct += 1;
  if (quiz.round.total < 10) return '';
  var c = quiz.round.correct;
  var tier = App.ROUND_TIERS.filter(function (t) { return c >= t.min; })[0];
  quiz.round = { correct: 0, total: 0 };
  return '<div class="round-card">' +
         '<div class="round-score">Round complete &middot; ' + c + ' / 10</div>' +
         '<div class="round-title">' + App.escape(tier.title) + '</div>' +
         '<div class="round-note">' + App.escape(tier.note) + '</div>' +
         '</div>';
};

// Distractors that are actually confusable with the answer: lookalikes first,
// then shared tags, topped up with random picks for variety.
App.similarStyles = function (answer, n) {
  var lookalikeIds = (answer.lookalikes || []).map(function (l) { return l.id; });
  var scored = App.STYLES
    .filter(function (s) { return s.id !== answer.id; })
    .map(function (s) {
      var score = Math.random(); // jitter so ties vary between rounds
      if (lookalikeIds.indexOf(s.id) >= 0) score += 4;
      (s.lookalikes || []).forEach(function (l) { if (l.id === answer.id) score += 4; });
      s.tags.forEach(function (t) { if (answer.tags.indexOf(t) >= 0) score += 1.5; });
      return { s: s, score: score };
    });
  scored.sort(function (a, b) { return b.score - a.score; });
  var pool = scored.slice(0, Math.max(n * 2, 6)).map(function (x) { return x.s; });
  return App.shuffle(pool).slice(0, n);
};

// ---- Wikipedia lead-image resolution -------------------------------------
// kind:'wiki' examples name an article; the REST summary endpoint (CORS
// enabled) gives us its lead image. Failures mark the slot so the UI can
// degrade gracefully — no photo is ever load-bearing.

App.wikiCache = {};

App.resolveWiki = function (article) {
  if (!App.wikiCache[article]) {
    App.wikiCache[article] = fetch(
      'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(article)
    )
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (j) {
        var target = 960;
        var src = null;
        if (j.originalimage && j.originalimage.width && j.originalimage.width <= target) {
          src = j.originalimage.source;
        } else if (j.thumbnail && j.thumbnail.source) {
          src = j.thumbnail.source.replace(/\/(\d+)px-(?=[^\/]*$)/, '/' + target + 'px-');
        }
        if (!src) throw new Error('no lead image');
        var page = (j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page) ||
                   'https://en.wikipedia.org/wiki/' + article;
        return { src: src, page: page };
      });
  }
  return App.wikiCache[article];
};

// Fill every pending wiki slot inside `scope`. onFail (optional) is called
// once per slot that could not be resolved or whose image failed to load.
App.hydrateWikiSlots = function (scope, onFail) {
  scope.querySelectorAll('.wiki-slot[data-article]').forEach(function (slot) {
    var article = slot.dataset.article;
    var alt = slot.dataset.alt || '';
    App.resolveWiki(article).then(function (info) {
      var img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = alt;
      img.onload = function () { img.classList.add('loaded'); };
      img.onerror = function () {
        slot.classList.add('wiki-failed');
        slot.innerHTML = '<span class="wiki-msg">Photo unavailable</span>';
        if (onFail) onFail(slot);
      };
      img.src = info.src;
      if (img.complete) img.classList.add('loaded');
      slot.innerHTML = '';
      slot.appendChild(img);
    }).catch(function () {
      slot.classList.add('wiki-failed');
      slot.innerHTML = '<span class="wiki-msg">Photo unavailable</span>';
      if (onFail) onFail(slot);
    });
  });
  // Thumbnail strip images: hide the broken-image glyph rather than swap content.
  scope.querySelectorAll('.thumb > img').forEach(function (img) {
    img.onerror = function () { img.style.visibility = 'hidden'; };
    if (img.complete && !img.naturalWidth) img.style.visibility = 'hidden';
  });
  // Plain photo examples get the same graceful failure and fade-in.
  scope.querySelectorAll('.photo-wrap img[data-fallback]').forEach(function (img) {
    img.onload = function () { img.classList.add('loaded'); };
    if (img.complete && img.naturalWidth) img.classList.add('loaded');
    img.onerror = function () {
      var wrap = img.parentElement;
      wrap.classList.add('wiki-failed');
      wrap.innerHTML = '<span class="wiki-msg">Photo unavailable</span>';
      if (onFail) onFail(wrap);
    };
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
  if (mode === 'elements' && !App.glossaryRendered) App.renderGlossary();
  if (mode === 'identify' && !App.el('id-body').innerHTML) App.startIdentify();
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
    btn.innerHTML = '<span>' + App.escape(s.name) +
                    (App.isMastered(s.id) ? ' <span class="master-badge" title="Mastered">✓</span>' : '') +
                    '</span>' +
                    '<span class="meta">' + App.escape(s.period) + '</span>';
    btn.addEventListener('click', function () { App.selectStyle(s.id, true); });
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

App.renderExampleInline = function (example) {
  if (example.kind === 'svg') {
    return example.src + '<span class="kind-badge">Drawing</span>';
  }
  if (example.kind === 'wiki') {
    return '<div class="photo-wrap wiki-slot" data-article="' + App.escape(example.article) +
           '" data-alt="' + App.escape(example.alt) + '"><span class="wiki-msg">Loading photo…</span></div>' +
           '<span class="kind-badge">Photo</span>';
  }
  return '<div class="photo-wrap"><img src="' + App.escape(example.src) +
         '" alt="' + App.escape(example.alt) + '" loading="lazy" data-fallback="1" /></div>' +
         '<span class="kind-badge">Photo</span>';
};

App.renderCaption = function (example) {
  if (example.kind === 'wiki') {
    var note = example.note ? ' &mdash; ' + App.escape(example.note) : '';
    return '<p class="caption"><strong>' + App.escape(example.alt) + '</strong>' + note +
           ' &middot; <a href="https://en.wikipedia.org/wiki/' + App.escape(example.article) +
           '" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>';
  }
  if (!example.credit) {
    return '<p class="caption"><em>' + App.escape(example.alt) + '</em></p>';
  }
  var c = example.credit;
  return '<p class="caption">' + App.escape(example.alt) + ' &mdash; ' +
         '<a href="' + App.escape(c.page) + '" target="_blank" rel="noopener noreferrer">' +
         App.escape(c.source) + '</a></p>';
};

App.selectStyle = function (id, scrollToDetail) {
  if (!window.STYLE_BY_ID(id)) return;
  App.currentStyleId = id;
  App.currentExampleIdx = 0;
  App.renderStyleDetail();
  // On phones the list stacks above the detail, so a tap must visibly respond.
  if (scrollToDetail && window.matchMedia('(max-width: 820px)').matches) {
    App.el('style-detail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Glossary entries that name this style — the style's visual vocabulary.
App.elementsForStyle = function (styleId) {
  return App.ELEMENTS.filter(function (e) { return e.styleIds.indexOf(styleId) >= 0; });
};

App.renderStyleDetail = function () {
  var s = window.STYLE_BY_ID(App.currentStyleId);
  if (!s) return;
  var examples = window.STYLE_EXAMPLES(s);
  if (App.currentExampleIdx >= examples.length) App.currentExampleIdx = 0;
  var active = examples[App.currentExampleIdx];

  var html = '';
  html += '<h1>' + App.escape(s.name) + '</h1>';
  html += '<div class="period">' + App.escape(s.period) + ' &middot; ' + App.escape(s.region) + '</div>';
  html += '<div class="detail-grid">';
  html +=   '<div>';
  html +=     '<div class="illustration-frame">' + App.renderExampleInline(active) + '</div>';
  html +=     App.renderCaption(active);
  if (examples.length > 1) {
    html += '<div class="thumbnails">';
    examples.forEach(function (ex, i) {
      var thumbInner;
      if (ex.kind === 'svg') {
        thumbInner = ex.src;
      } else if (ex.kind === 'wiki') {
        thumbInner = '<span class="wiki-slot thumb-slot" data-article="' + App.escape(ex.article) +
                     '" data-alt=""></span>';
      } else {
        thumbInner = '<img src="' + App.escape(ex.src) + '" alt="" loading="lazy" data-fallback="1" />';
      }
      html += '<button type="button" class="thumb' + (i === App.currentExampleIdx ? ' active' : '') +
              '" data-idx="' + i + '" aria-label="Example ' + (i + 1) + ' of ' + examples.length + '">' +
              thumbInner +
              '<span class="thumb-dot ' + (ex.kind === 'svg' ? 'svg' : 'photo') + '"></span>' +
              '</button>';
    });
    html += '</div>';
  }
  html +=   '</div>';
  html +=   '<div class="detail-text">';
  html +=     '<h3>Overview</h3><p>' + App.escape(s.summary) + '</p>';
  html +=     '<h3>Key features</h3><ul>';
  s.keyFeatures.forEach(function (f) { html += '<li>' + App.escape(f) + '</li>'; });
  html +=     '</ul>';
  var vocab = App.elementsForStyle(s.id);
  if (vocab.length) {
    html += '<h3>Vocabulary</h3><div class="vocab-chips">';
    vocab.forEach(function (e) {
      html += '<button type="button" class="chip vocab-chip" data-element="' + e.id + '">' +
              App.escape(e.name) + '</button>';
    });
    html += '</div>';
  }
  if (s.lookalikes && s.lookalikes.length) {
    html += '<h3>Don’t confuse with</h3><ul class="lookalikes">';
    s.lookalikes.forEach(function (l) {
      var other = window.STYLE_BY_ID(l.id);
      if (!other) return;
      html += '<li><button type="button" class="chip style-chip" data-style="' + other.id + '">' +
              App.escape(other.name) + '</button> <span>' + App.escape(l.tell) + '</span> ' +
              '<button type="button" class="chip compare-btn" data-a="' + s.id + '" data-b="' + other.id + '">Compare side-by-side</button></li>';
    });
    html += '</ul>';
  }
  html +=     '<div class="tags">';
  s.tags.forEach(function (t) { html += '<span class="tag">' + App.escape(t) + '</span>'; });
  html +=     '</div>';
  html +=   '</div>';
  html += '</div>';
  var detail = App.el('style-detail');
  detail.innerHTML = html;
  App.hydrateWikiSlots(detail);

  detail.querySelectorAll('.thumb').forEach(function (btn) {
    btn.addEventListener('click', function () {
      App.currentExampleIdx = parseInt(btn.dataset.idx, 10) || 0;
      App.renderStyleDetail();
    });
  });
  detail.querySelectorAll('.style-chip').forEach(function (btn) {
    btn.addEventListener('click', function () { App.selectStyle(btn.dataset.style, true); });
  });
  detail.querySelectorAll('.vocab-chip').forEach(function (btn) {
    btn.addEventListener('click', function () { App.showElement(btn.dataset.element); });
  });
  detail.querySelectorAll('.compare-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var a = window.STYLE_BY_ID(btn.dataset.a);
      var tell = ((a && a.lookalikes) || []).filter(function (l) { return l.id === btn.dataset.b; })[0];
      App.showCompare(btn.dataset.a, btn.dataset.b, tell ? tell.tell : '');
    });
  });

  document.querySelectorAll('#style-index button').forEach(function (b) {
    b.classList.toggle('active', b.dataset.id === App.currentStyleId);
  });
};

App.el('style-search').addEventListener('input', App.renderStyleIndex);

// ---- ELEMENTS view (component glossary) ---------------------------------

App.renderGlossary = function () {
  var root = App.el('element-glossary');
  var html = '';
  (window.ELEMENT_CATEGORIES || []).forEach(function (cat) {
    var entries = App.ELEMENTS.filter(function (e) { return e.category === cat; });
    if (!entries.length) return;
    html += '<h2 class="el-category">' + App.escape(cat) + '</h2>';
    html += '<div class="el-grid">';
    entries.forEach(function (e) {
      html += '<article class="el-card" id="el-' + e.id + '">';
      html +=   '<div class="el-diagram">' + e.svg + '</div>';
      html +=   '<h4>' + App.escape(e.name) + '</h4>';
      html +=   '<p>' + App.escape(e.definition) + '</p>';
      html +=   '<p class="el-tip">' + App.escape(e.tip) + '</p>';
      html +=   '<div class="el-styles">';
      e.styleIds.forEach(function (sid) {
        var s = window.STYLE_BY_ID(sid);
        if (!s) return;
        html += '<button type="button" class="chip style-chip" data-style="' + sid + '">' +
                App.escape(s.name) + '</button>';
      });
      html +=   '</div>';
      html += '</article>';
    });
    html += '</div>';
  });
  root.innerHTML = html;
  App.glossaryRendered = true;

  root.querySelectorAll('.style-chip').forEach(function (btn) {
    btn.addEventListener('click', function () {
      App.switchMode('learn');
      if (window.matchMedia('(max-width: 820px)').matches) {
        App.selectStyle(btn.dataset.style, true);
      } else {
        App.selectStyle(btn.dataset.style);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
};

// Jump from a Learn vocabulary chip to the glossary card.
App.showElement = function (elementId) {
  App.switchMode('elements');
  var card = App.el('el-' + elementId);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('flash');
    setTimeout(function () { card.classList.remove('flash'); }, 1600);
  }
};

// ---- IDENTIFY (field-guide wizard) --------------------------------------
// Walks the expert's checklist: roof → stories → symmetry → material →
// standout features, then ranks styles against STYLE_FACETS.

App.identify = { step: 0, answers: {} };

App.startIdentify = function () {
  App.identify = { step: 0, answers: {} };
  App.renderIdentifyStep();
};

App.renderIdentifyStep = function () {
  var qs = window.ID_QUESTIONS || [];
  var body = App.el('id-body');
  var step = App.identify.step;
  if (step >= qs.length) { App.renderIdentifyResults(); return; }
  var q = qs[step];
  var picked = App.identify.answers[q.key] || (q.multi ? [] : null);

  var html = '<div class="id-progress">';
  qs.forEach(function (_, i) {
    html += '<span class="id-dot' + (i < step ? ' done' : i === step ? ' now' : '') + '"></span>';
  });
  html += '</div>';
  html += '<h3 class="id-title">' + App.escape(q.title) + '</h3>';
  html += '<p class="id-hint">' + App.escape(q.hint) + '</p>';
  html += '<div class="choices id-options">';
  q.options.forEach(function (o) {
    var sel = q.multi ? picked.indexOf(o.value) >= 0 : picked === o.value;
    html += '<button type="button" class="choice id-option' + (sel ? ' selected' : '') +
            '" data-value="' + App.escape(o.value) + '">' + App.escape(o.label) + '</button>';
  });
  html += '</div>';
  html += '<div class="id-nav">';
  if (step > 0) html += '<button type="button" class="ghost-btn" id="id-back">&larr; Back</button>';
  html += '<span class="id-spacer"></span>';
  html += '<button type="button" class="ghost-btn" id="id-skip">' + (q.multi ? 'None of these' : 'Not sure — skip') + '</button>';
  if (q.multi) html += '<button type="button" class="primary-btn" id="id-done">Show matches &rarr;</button>';
  html += '</div>';
  body.innerHTML = html;

  body.querySelectorAll('.id-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (q.multi) {
        var list = App.identify.answers[q.key] || [];
        var i = list.indexOf(btn.dataset.value);
        if (i >= 0) list.splice(i, 1); else list.push(btn.dataset.value);
        App.identify.answers[q.key] = list;
        btn.classList.toggle('selected');
      } else {
        App.identify.answers[q.key] = btn.dataset.value;
        App.identify.step += 1;
        App.renderIdentifyStep();
      }
    });
  });
  var back = App.el('id-back');
  if (back) back.addEventListener('click', function () {
    App.identify.step -= 1;
    App.renderIdentifyStep();
  });
  App.el('id-skip').addEventListener('click', function () {
    delete App.identify.answers[q.key];
    App.identify.step += 1;
    App.renderIdentifyStep();
  });
  var done = App.el('id-done');
  if (done) done.addEventListener('click', function () {
    App.identify.step += 1;
    App.renderIdentifyStep();
  });
};

App.scoreIdentify = function (answers) {
  var qs = window.ID_QUESTIONS || [];
  var scores = {};
  App.STYLES.forEach(function (s) { scores[s.id] = 0; });
  qs.forEach(function (q) {
    var a = answers[q.key];
    if (a === undefined || a === null || (q.multi && !a.length)) return;
    if (q.multi) {
      a.forEach(function (v) {
        var opt = q.options.filter(function (o) { return o.value === v; })[0];
        if (!opt || !opt.points) return;
        Object.keys(opt.points).forEach(function (sid) {
          if (sid in scores) scores[sid] += opt.points[sid];
        });
      });
      return;
    }
    App.STYLES.forEach(function (s) {
      var f = window.STYLE_FACETS[s.id];
      if (!f) return;
      if (q.key === 'symmetry') {
        if (f.symmetry === 'either') scores[s.id] += 1;
        else scores[s.id] += (f.symmetry === a) ? 2 : -1;
      } else {
        var vals = f[q.key === 'stories' ? 'stories' : q.key] || [];
        scores[s.id] += (vals.indexOf(a) >= 0) ? 2 : -1;
      }
    });
  });
  return scores;
};

App.renderIdentifyResults = function () {
  var body = App.el('id-body');
  var answers = App.identify.answers;
  var answeredAny = Object.keys(answers).some(function (k) {
    var a = answers[k];
    return Array.isArray(a) ? a.length > 0 : a !== undefined;
  });
  if (!answeredAny) {
    body.innerHTML = '<p class="id-hint">You skipped everything — answer at least one question and the matches will narrow fast.</p>' +
      '<div class="id-nav"><span class="id-spacer"></span><button type="button" class="primary-btn" id="id-again">Try again</button></div>';
    App.el('id-again').addEventListener('click', App.startIdentify);
    return;
  }
  var scores = App.scoreIdentify(answers);
  var ranked = App.STYLES
    .map(function (s) { return { s: s, score: scores[s.id] }; })
    .filter(function (r) { return r.score > 0; })
    .sort(function (a, b) { return b.score - a.score; })
    .slice(0, 5);

  var html = '<h3 class="id-title">Best matches</h3>';
  if (!ranked.length) {
    html += '<p class="id-hint">Nothing matched that combination — real houses mix styles! Try fewer answers, or browse Learn.</p>';
  }
  ranked.forEach(function (r, i) {
    var tier = r.score >= 6 ? 'Strong match' : r.score >= 3 ? 'Good match' : 'Possible';
    var example = window.STYLE_EXAMPLES(r.s)[0];
    html += '<div class="id-result' + (i === 0 ? ' top' : '') + '">';
    html +=   '<div class="id-result-thumb">' + (example && example.kind === 'svg' ? example.src : '') + '</div>';
    html +=   '<div class="id-result-info">';
    html +=     '<div class="id-tier">' + tier + '</div>';
    html +=     '<h4>' + App.escape(r.s.name) + '</h4>';
    html +=     '<div class="meta">' + App.escape(r.s.period) + '</div>';
    html +=     '<button type="button" class="chip style-chip" data-style="' + r.s.id + '">Read about it &rarr;</button>';
    html +=   '</div>';
    html += '</div>';
  });
  html += '<div class="id-nav"><span class="id-spacer"></span><button type="button" class="primary-btn" id="id-again">Identify another &rarr;</button></div>';
  body.innerHTML = html;

  body.querySelectorAll('.style-chip').forEach(function (btn) {
    btn.addEventListener('click', function () {
      App.switchMode('learn');
      App.selectStyle(btn.dataset.style, true);
      if (!window.matchMedia('(max-width: 820px)').matches) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
  App.el('id-again').addEventListener('click', App.startIdentify);
};

App.el('id-restart').addEventListener('click', App.startIdentify);

// ---- COMPARE overlay ----------------------------------------------------
// Side-by-side of a style and one of its lookalikes, opened from the
// "Don't confuse with" rows in Learn.

App.showCompare = function (aId, bId, tell) {
  var a = window.STYLE_BY_ID(aId), b = window.STYLE_BY_ID(bId);
  if (!a || !b) return;
  var old = App.el('compare-overlay');
  if (old) old.remove();

  function panel(s) {
    var ex = window.STYLE_EXAMPLES(s)[0];
    return '<div class="compare-col">' +
           '<div class="compare-thumb">' + (ex && ex.kind === 'svg' ? ex.src : '') + '</div>' +
           '<h4>' + App.escape(s.name) + '</h4>' +
           '<div class="meta">' + App.escape(s.period) + '</div>' +
           '<ul>' + s.keyFeatures.slice(0, 4).map(function (f) {
             return '<li>' + App.escape(f) + '</li>';
           }).join('') + '</ul>' +
           '</div>';
  }

  var overlay = document.createElement('div');
  overlay.id = 'compare-overlay';
  overlay.innerHTML =
    '<div class="compare-panel" role="dialog" aria-label="Compare styles">' +
    '<button type="button" class="compare-close" aria-label="Close">&times;</button>' +
    '<p class="compare-tell">' + App.escape(tell) + '</p>' +
    '<div class="compare-grid">' + panel(a) + panel(b) + '</div>' +
    '</div>';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.remove();
  });
  overlay.querySelector('.compare-close').addEventListener('click', function () {
    overlay.remove();
  });
};

// ---- STYLE QUIZ --------------------------------------------------------

App.nextStyleQuiz = function () {
  var answer = App.pickWeighted(App.STYLES, 'styles');
  var examples = window.STYLE_EXAMPLES(answer);
  var example = App.pickRandom(examples);
  var distractors = App.similarStyles(answer, 3);
  var options = App.shuffle([answer].concat(distractors));
  App.styleQuiz.current = answer;
  var stage = App.el('sq-illustration');
  stage.innerHTML = App.renderExampleInline(example);
  // If the photo can't load, quietly fall back to the teaching drawing so
  // there is always something to identify.
  App.hydrateWikiSlots(stage, function () {
    var svgExample = examples.filter(function (e) { return e.kind === 'svg'; })[0];
    if (svgExample) stage.innerHTML = App.renderExampleInline(svgExample);
  });
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
  var html = '<h4>' + (correct ? 'Correct.' : 'Not quite.') +
             ' This is ' + App.escape(answer.name) +
             ' (' + App.escape(answer.period) + ').</h4>' +
             '<p>' + App.escape(answer.summary) + '</p>';
  if (!correct) {
    var tell = (answer.lookalikes || []).filter(function (l) { return l.id === chosenId; })[0];
    if (tell) html += '<p><strong>Telling them apart:</strong> ' + App.escape(tell.tell) + '</p>';
  }
  html += App.recordAnswer(App.styleQuiz, correct, 'sq-streak');
  App.recordStat('styles', answer.id, correct);
  fb.innerHTML = html;
  App.el('sq-score').textContent = 'Score: ' + App.styleQuiz.score + ' / ' + App.styleQuiz.total;
  App.el('sq-next').hidden = false;
};

App.el('sq-next').addEventListener('click', App.nextStyleQuiz);
App.el('sq-reset').addEventListener('click', function () {
  App.styleQuiz.score = 0;
  App.styleQuiz.total = 0;
  App.styleQuiz.streak = 0;
  App.styleQuiz.round = { correct: 0, total: 0 };
  App.el('sq-streak').hidden = true;
  App.el('sq-score').textContent = 'Score: 0 / 0';
  App.nextStyleQuiz();
});

// ---- ELEMENT QUIZ ------------------------------------------------------
// Two question types, alternating at random:
//  'style'     — a feature description; pick the style it points to.
//  'component' — a glossary diagram; pick the component's name.

App.nextElementQuiz = function () {
  var askComponent = App.ELEMENTS.length >= 4 && Math.random() < 0.5;
  if (askComponent) App.nextComponentQuestion();
  else App.nextStyleElementQuestion();
  App.el('eq-feedback').hidden = true;
  App.el('eq-feedback').innerHTML = '';
  App.el('eq-next').hidden = true;
};

App.nextStyleElementQuestion = function () {
  var pool = App.STYLES.filter(function (s) { return s.elements && s.elements.length; });
  var answer = App.pickWeighted(pool, 'styles');
  var element = App.pickRandom(answer.elements);
  var distractors = App.similarStyles(answer, 3);
  var options = App.shuffle([answer].concat(distractors));
  App.elementQuiz.current = { type: 'style', style: answer, element: element };
  App.el('eq-label').textContent = 'This feature is most characteristic of...';
  App.el('eq-element').textContent = element;
  App.renderElementChoices(options.map(function (s) {
    return { id: s.id, label: s.name };
  }));
};

App.nextComponentQuestion = function () {
  var answer = App.pickWeighted(App.ELEMENTS, 'elements');
  var sameCategory = App.ELEMENTS.filter(function (e) {
    return e.id !== answer.id && e.category === answer.category;
  });
  var others = App.ELEMENTS.filter(function (e) {
    return e.id !== answer.id && e.category !== answer.category;
  });
  var distractors = App.shuffle(sameCategory).slice(0, 3);
  if (distractors.length < 3) {
    distractors = distractors.concat(App.shuffle(others).slice(0, 3 - distractors.length));
  }
  var options = App.shuffle([answer].concat(distractors));
  App.elementQuiz.current = { type: 'component', element: answer };
  App.el('eq-label').textContent = 'What is this component called?';
  App.el('eq-element').innerHTML = '<div class="eq-diagram">' + answer.svg + '</div>';
  App.renderElementChoices(options.map(function (e) {
    return { id: e.id, label: e.name };
  }));
};

App.renderElementChoices = function (options) {
  var choices = App.el('eq-choices');
  choices.innerHTML = '';
  options.forEach(function (o) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice';
    btn.dataset.id = o.id;
    btn.textContent = o.label;
    btn.addEventListener('click', function () { App.handleElementQuizAnswer(o.id); });
    choices.appendChild(btn);
  });
};

App.handleElementQuizAnswer = function (chosenId) {
  var q = App.elementQuiz.current;
  var answerId = q.type === 'style' ? q.style.id : q.element.id;
  var correct = chosenId === answerId;
  App.elementQuiz.total += 1;
  if (correct) App.elementQuiz.score += 1;
  document.querySelectorAll('#eq-choices button').forEach(function (btn) {
    btn.disabled = true;
    if (btn.dataset.id === answerId) btn.classList.add(correct ? 'correct' : 'reveal');
    else if (btn.dataset.id === chosenId) btn.classList.add('wrong');
  });
  var fb = App.el('eq-feedback');
  fb.classList.remove('good', 'bad');
  fb.classList.add(correct ? 'good' : 'bad');
  fb.hidden = false;
  if (q.type === 'style') {
    fb.innerHTML = '<h4>' + (correct ? 'Correct.' : 'Not quite.') +
                   ' That feature points to ' + App.escape(q.style.name) + '.</h4>' +
                   '<p>' + App.escape(q.style.summary) + '</p>';
  } else {
    var e = q.element;
    var styleNames = e.styleIds.map(function (sid) {
      var s = window.STYLE_BY_ID(sid);
      return s ? s.name : null;
    }).filter(Boolean).join(', ');
    fb.innerHTML = '<h4>' + (correct ? 'Correct.' : 'Not quite.') +
                   ' This is a ' + App.escape(e.name.toLowerCase()) + '.</h4>' +
                   '<p>' + App.escape(e.definition) + '</p>' +
                   (styleNames ? '<p><strong>Seen on:</strong> ' + App.escape(styleNames) + '</p>' : '');
  }
  fb.innerHTML += App.recordAnswer(App.elementQuiz, correct, 'eq-streak');
  if (q.type === 'style') App.recordStat('styles', q.style.id, correct);
  else App.recordStat('elements', q.element.id, correct);
  App.el('eq-score').textContent = 'Score: ' + App.elementQuiz.score + ' / ' + App.elementQuiz.total;
  App.el('eq-next').hidden = false;
};

App.el('eq-next').addEventListener('click', App.nextElementQuiz);
App.el('eq-reset').addEventListener('click', function () {
  App.elementQuiz.score = 0;
  App.elementQuiz.total = 0;
  App.elementQuiz.streak = 0;
  App.elementQuiz.round = { correct: 0, total: 0 };
  App.el('eq-streak').hidden = true;
  App.el('eq-score').textContent = 'Score: 0 / 0';
  App.nextElementQuiz();
});

// ---- bootstrap ---------------------------------------------------------

App.renderStyleIndex();
if (App.STYLES.length) App.selectStyle(App.STYLES[0].id);
App.refreshProgressUI();
(function () {
  var photoCount = 0;
  App.STYLES.forEach(function (s) {
    photoCount += window.STYLE_EXAMPLES(s).filter(function (e) { return e.kind !== 'svg'; }).length;
  });
  var stats = App.STYLES.length + ' styles · ' + App.ELEMENTS.length + ' elements · ' +
              photoCount + ' photos · spans the 1600s to today';
  var footer = App.el('footer-stats');
  if (footer) footer.textContent = stats;
})();
