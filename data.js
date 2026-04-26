// American residential architectural styles.
// Each entry: id, name, period, region, summary, keyFeatures, elements, tags, svg.
// `elements` are the prompts used by the Element Quiz; the strongest, most
// diagnostic features should be at the top.

window.STYLES = [
  {
    id: 'cape-cod',
    name: 'Cape Cod',
    period: '1690s–1850; revived 1930s–1950s',
    region: 'New England origin; nationwide in the 20th-century revival',
    summary: 'A modest, weather-hardy cottage built by English colonists on Cape Cod and copied across New England. The 20th-century revival made it the postwar suburban starter home of choice — a tidy 1½-story rectangle hugging the ground.',
    keyFeatures: [
      'One to one-and-a-half stories, low to the ground',
      'Steeply pitched side-gable roof to shed snow',
      'Symmetric facade with a central door, single window on each side',
      'Massive central chimney serving multiple fireplaces',
      'Shingle or clapboard siding, often weathered gray',
      'Dormer windows added in the revival era for upstairs light'
    ],
    elements: [
      'A symmetric 1½-story cottage with a steep side-gable roof and central chimney',
      'Weathered gray cedar shingle siding on a compact New England cottage'
    ],
    tags: ['symmetric', 'gabled', 'compact', 'colonial-era'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><polygon points="68,172 200,72 332,172" fill="#7a6147" stroke="#3e3120" stroke-width="1.5"/><rect x="80" y="172" width="240" height="80" fill="#ece4d3" stroke="#3e3120" stroke-width="1.5"/><rect x="192" y="42" width="20" height="38" fill="#9b4b35" stroke="#3e3120" stroke-width="1.5"/><polygon points="138,160 156,140 174,160" fill="#7a6147" stroke="#3e3120" stroke-width="1.5"/><rect x="143" y="160" width="26" height="20" fill="#cfd9e3" stroke="#3e3120"/><line x1="156" y1="160" x2="156" y2="180" stroke="#3e3120"/><polygon points="226,160 244,140 262,160" fill="#7a6147" stroke="#3e3120" stroke-width="1.5"/><rect x="231" y="160" width="26" height="20" fill="#cfd9e3" stroke="#3e3120"/><line x1="244" y1="160" x2="244" y2="180" stroke="#3e3120"/><rect x="188" y="208" width="24" height="44" fill="#5b3a22" stroke="#3e3120" stroke-width="1.5"/><rect x="108" y="200" width="34" height="32" fill="#cfd9e3" stroke="#3e3120"/><line x1="125" y1="200" x2="125" y2="232" stroke="#3e3120"/><line x1="108" y1="216" x2="142" y2="216" stroke="#3e3120"/><rect x="258" y="200" width="34" height="32" fill="#cfd9e3" stroke="#3e3120"/><line x1="275" y1="200" x2="275" y2="232" stroke="#3e3120"/><line x1="258" y1="216" x2="292" y2="216" stroke="#3e3120"/></svg>'
  },
  {
    id: 'georgian',
    name: 'Georgian Colonial',
    period: '1700–1780',
    region: 'Original Thirteen Colonies, especially the eastern seaboard',
    summary: 'The dominant style of the colonial elite — a strict, classically proportioned brick or wood box. Borrowed from the Renaissance via England, Georgian houses are about order: matching halves, a central door, and rows of identical windows.',
    keyFeatures: [
      'Two stories, rigidly symmetric facade — usually 5 windows wide',
      'Hipped or side-gable roof of moderate pitch',
      'Paired chimneys flanking the roof',
      'Paneled door centered, often topped with a triangular pediment or crown',
      'Multi-pane double-hung sash windows (12-over-12 or 9-over-9)',
      'Brick or clapboard, sometimes with stone quoins at the corners'
    ],
    elements: [
      'A rigidly symmetric 5-bay brick facade with paired end chimneys',
      'A paneled front door centered under a small triangular pediment'
    ],
    tags: ['symmetric', 'classical', 'colonial-era', 'two-story'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="65" y="92" width="270" height="160" fill="#a26a4a" stroke="#3e3120" stroke-width="1.5"/><polygon points="55,92 145,55 255,55 345,92" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="80" y="35" width="16" height="36" fill="#7a4a35" stroke="#3e3120"/><rect x="304" y="35" width="16" height="36" fill="#7a4a35" stroke="#3e3120"/><line x1="65" y1="170" x2="335" y2="170" stroke="#3e3120" stroke-width="2"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="82" y="110" width="28" height="42"/><rect x="138" y="110" width="28" height="42"/><rect x="186" y="110" width="28" height="42"/><rect x="234" y="110" width="28" height="42"/><rect x="290" y="110" width="28" height="42"/></g><g stroke="#3e3120"><line x1="96" y1="110" x2="96" y2="152"/><line x1="82" y1="131" x2="110" y2="131"/><line x1="152" y1="110" x2="152" y2="152"/><line x1="138" y1="131" x2="166" y2="131"/><line x1="200" y1="110" x2="200" y2="152"/><line x1="186" y1="131" x2="214" y2="131"/><line x1="248" y1="110" x2="248" y2="152"/><line x1="234" y1="131" x2="262" y2="131"/><line x1="304" y1="110" x2="304" y2="152"/><line x1="290" y1="131" x2="318" y2="131"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="82" y="190" width="28" height="44"/><rect x="138" y="190" width="28" height="44"/><rect x="234" y="190" width="28" height="44"/><rect x="290" y="190" width="28" height="44"/></g><g stroke="#3e3120"><line x1="96" y1="190" x2="96" y2="234"/><line x1="82" y1="212" x2="110" y2="212"/><line x1="152" y1="190" x2="152" y2="234"/><line x1="138" y1="212" x2="166" y2="212"/><line x1="248" y1="190" x2="248" y2="234"/><line x1="234" y1="212" x2="262" y2="212"/><line x1="304" y1="190" x2="304" y2="234"/><line x1="290" y1="212" x2="318" y2="212"/></g><polygon points="182,178 200,162 218,178" fill="#efe6d4" stroke="#3e3120"/><rect x="182" y="178" width="36" height="6" fill="#efe6d4" stroke="#3e3120"/><rect x="188" y="184" width="24" height="50" fill="#3e2a18" stroke="#3e3120"/><line x1="200" y1="184" x2="200" y2="234" stroke="#5b3a22"/></svg>'
  }
];

// Helper: look up a style by id.
window.STYLE_BY_ID = function (id) {
  return window.STYLES.find(function (s) { return s.id === id; });
};
