#!/usr/bin/env node
// Verifies every photo reference resolves:
//  - each photos.js entry: the Wikipedia article exists and has a lead image
//  - each static kind:'photo' example in data.js: the URL answers 200
// Run from anywhere with plain Node 18+ (uses global fetch), no dependencies:
//   node tools/check_photos.js
// Note: needs open internet access to en.wikipedia.org / commons.wikimedia.org.

const path = require('path');

global.window = {};
require(path.join(__dirname, '..', 'data.js'));
require(path.join(__dirname, '..', 'photos.js'));

const CONCURRENCY = 6;
const tasks = [];

for (const [styleId, photos] of Object.entries(window.STYLE_PHOTOS)) {
  for (const p of photos) {
    tasks.push({
      label: `${styleId} :: wiki:${p.article}`,
      run: async () => {
        const r = await fetch(
          'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(p.article),
          { headers: { 'accept': 'application/json' } }
        );
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        if (!(j.thumbnail && j.thumbnail.source) && !(j.originalimage && j.originalimage.source)) {
          throw new Error('article has no lead image');
        }
      }
    });
  }
}

for (const s of window.STYLES) {
  for (const ex of s.examples || []) {
    if (ex.kind !== 'photo') continue;
    tasks.push({
      label: `${s.id} :: photo:${ex.src.slice(0, 80)}`,
      run: async () => {
        const r = await fetch(ex.src, { method: 'HEAD', redirect: 'follow' });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
      }
    });
  }
}

(async () => {
  let ok = 0;
  const failures = [];
  let i = 0;
  async function worker() {
    while (i < tasks.length) {
      const t = tasks[i++];
      try {
        await t.run();
        ok++;
      } catch (e) {
        failures.push(`${t.label} -> ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`${ok}/${tasks.length} photo references OK`);
  if (failures.length) {
    console.log('\nFailures (remove or fix these entries):');
    for (const f of failures) console.log('  ' + f);
    process.exit(1);
  }
})();
