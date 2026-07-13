// Architectural component glossary for the Elements view and Element Quiz.
// Each entry: { id, name, category, definition, tip, svg, styleIds }
//   - category groups entries in the Elements view (rendered in CATEGORY order)
//   - definition: what the component is; tip: how it helps identify styles
//   - svg: small schematic diagram, viewBox 0 0 200 140; the component is
//     drawn in the warm accent color, context in muted tones
//   - styleIds: styles (data.js ids) where this component is a signature

window.ELEMENT_CATEGORIES = [
  'Roof forms',
  'Roof features',
  'Windows',
  'Entries',
  'Porches & columns',
  'Walls & cladding',
  'Trim & ornament'
];

window.ELEMENTS = [
  // ---- Roof forms --------------------------------------------------------
  {
    id: 'side-gable',
    name: 'Side-gable roof',
    category: 'Roof forms',
    definition: 'A roof with two slopes meeting at a ridge that runs parallel to the street, so the triangular gable ends face sideways.',
    tip: 'The quiet default of colonial and revival houses — if you see a plain horizontal eave from the street, think Cape Cod, Georgian, or Colonial Revival.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="44" y="82" width="72" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="116,82 146,70 146,106 116,118" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><polygon points="40,82 59,58 131,58 120,82" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="120,82 150,70 131,58" fill="#e8dfc8" stroke="#3e3120" stroke-width="1.5"/><text x="100" y="134" font-size="10" text-anchor="middle" fill="#5b4a3a">street side</text></svg>',
    styleIds: ['cape-cod', 'georgian', 'colonial-revival', 'minimal-traditional']
  },
  {
    id: 'front-gable',
    name: 'Front-gable roof',
    category: 'Roof forms',
    definition: 'A gable roof turned so the ridge runs perpendicular to the street — the triangular gable end faces you.',
    tip: 'Greek Revival turned the gable to the street to make a temple front; Craftsman bungalows and folk houses use it too.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="44" y="82" width="72" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="116,82 146,70 146,106 116,118" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><polygon points="44,82 80,56 116,82" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="80,56 110,44 146,70 116,82" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/><text x="100" y="134" font-size="10" text-anchor="middle" fill="#5b4a3a">street side</text></svg>',
    styleIds: ['greek-revival', 'craftsman', 'folk-victorian']
  },
  {
    id: 'cross-gable',
    name: 'Cross gable',
    category: 'Roof forms',
    definition: 'Two gable roofs intersecting at right angles, usually a front-facing gable breaking through a side-gable main roof.',
    tip: 'A steep front cross gable is the heart of Gothic Revival and Tudor; Queen Anne piles up several.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="44" y="82" width="72" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="116,82 146,70 146,106 116,118" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><polygon points="40,82 59,58 131,58 120,82" fill="#c9b791" stroke="#8f8163" stroke-width="1.2"/><polygon points="120,82 150,70 131,58" fill="#e8dfc8" stroke="#8f8163" stroke-width="1.2"/><polygon points="58,82 80,50 102,82" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><rect x="62" y="82" width="36" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1"/><text x="100" y="134" font-size="10" text-anchor="middle" fill="#5b4a3a">street side</text></svg>',
    styleIds: ['gothic-revival', 'tudor-revival', 'queen-anne', 'folk-victorian']
  },
  {
    id: 'hipped-roof',
    name: 'Hipped roof',
    category: 'Roof forms',
    definition: 'A roof that slopes back on all four sides, with no vertical gable ends — the planes meet at sloping "hip" edges.',
    tip: 'Foursquares, Prairie houses, many Ranches, and formal Georgians are hipped. No triangle = hip.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="44" y="82" width="72" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="116,82 146,70 146,106 116,118" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><polygon points="40,82 72,58 104,58 120,82" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="120,82 150,70 104,58" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/></svg>',
    styleIds: ['foursquare', 'prairie', 'ranch', 'georgian', 'italianate']
  },
  {
    id: 'pyramidal-roof',
    name: 'Pyramidal roof',
    category: 'Roof forms',
    definition: 'A hipped roof on a square plan whose four slopes rise to a single point instead of a ridge.',
    tip: 'The classic cap of the American Foursquare.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="48" y="82" width="64" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="112,82 142,70 142,106 112,118" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><polygon points="44,82 94,48 116,82" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="116,82 146,70 94,48" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/></svg>',
    styleIds: ['foursquare']
  },
  {
    id: 'gambrel-roof',
    name: 'Gambrel roof',
    category: 'Roof forms',
    definition: 'A gable roof with two pitches on each side — shallow on top, breaking to a steep lower slope. The classic barn roof.',
    tip: 'On a house, a gambrel almost always means Dutch Colonial; Shingle Style borrows it for seaside cottages.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="58" y="92" width="84" height="26" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="52,92 68,58 100,44 132,58 148,92" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><line x1="68" y1="58" x2="132" y2="58" stroke="#3e3120" stroke-width="0.8"/></svg>',
    styleIds: ['dutch-colonial-revival', 'shingle', 'cape-cod']
  },
  {
    id: 'mansard-roof',
    name: 'Mansard roof',
    category: 'Roof forms',
    definition: 'A roof with steep, nearly vertical slopes on all four sides and a flat or barely sloped deck on top — effectively an extra story wearing slate.',
    tip: 'One feature, one verdict: a mansard means Second Empire.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="58" y="92" width="84" height="26" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="52,92 66,50 134,50 148,92" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><line x1="66" y1="50" x2="134" y2="50" stroke="#3e3120" stroke-width="2"/><rect x="90" y="62" width="20" height="18" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/><polygon points="87,62 100,53 113,62" fill="#8a7a5c" stroke="#3e3120" stroke-width="0.8"/></svg>',
    styleIds: ['second-empire']
  },
  {
    id: 'saltbox-roof',
    name: 'Saltbox roof',
    category: 'Roof forms',
    definition: 'An asymmetric gable: two stories in front, with the rear roof slope sweeping down low over a one-story addition.',
    tip: 'A colonial New England profile — original Capes and colonial-era houses; Shingle Style revives the long sweep.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><polygon points="60,118 60,78 88,78 88,118" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="88,78 88,118 148,118 148,98" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="54,78 82,50 154,96 148,102 82,58 60,80" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/></svg>',
    styleIds: ['cape-cod', 'shingle']
  },
  {
    id: 'flat-roof',
    name: 'Flat / low-slope roof',
    category: 'Roof forms',
    definition: 'A roof that reads as level from the street, often hidden behind a slight parapet or extended as a thin overhanging plane.',
    tip: 'Flat planes with deep overhangs say Mid-Century Modern; a nearly flat roof under bracketed eaves says Italianate.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="58" y="72" width="84" height="46" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><rect x="44" y="64" width="112" height="8" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/></svg>',
    styleIds: ['mid-century-modern', 'italianate']
  },
  {
    id: 'shed-roof',
    name: 'Shed roof',
    category: 'Roof forms',
    definition: 'A single roof plane sloping in one direction across the whole building or wing.',
    tip: 'On a main house it signals modernism; as a small roof over a dormer or porch it appears everywhere.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><polygon points="58,118 58,84 142,68 142,118" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="50,88 150,68 150,60 50,80" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/></svg>',
    styleIds: ['mid-century-modern']
  },
  {
    id: 'butterfly-roof',
    name: 'Butterfly roof',
    category: 'Roof forms',
    definition: 'Two roof planes sloping downward toward a central valley, like wings — the inverse of a gable.',
    tip: 'A pure Mid-Century Modern signature, common in Palm Springs modernism.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="118" x2="180" y2="118" stroke="#b8ab90" stroke-width="2"/><rect x="58" y="82" width="84" height="36" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="46,56 100,82 154,52 154,60 100,90 46,64" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/></svg>',
    styleIds: ['mid-century-modern']
  },

  // ---- Roof features -----------------------------------------------------
  {
    id: 'gabled-dormer',
    name: 'Gabled dormer',
    category: 'Roof features',
    definition: 'A window structure projecting from a roof slope under its own little gable roof.',
    tip: 'Pairs of gabled dormers are the face of the revival Cape Cod; formal versions dot Georgian and Colonial Revival roofs.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="20,110 100,40 180,110" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><rect x="82" y="74" width="36" height="32" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="78,74 100,56 122,74" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/><rect x="90" y="80" width="20" height="22" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/><line x1="100" y1="80" x2="100" y2="102" stroke="#3e3120" stroke-width="0.8"/></svg>',
    styleIds: ['cape-cod', 'colonial-revival', 'georgian', 'tudor-revival']
  },
  {
    id: 'hipped-dormer',
    name: 'Hipped dormer',
    category: 'Roof features',
    definition: 'A dormer whose own roof slopes back on three sides instead of ending in a gable triangle.',
    tip: 'The single broad hipped dormer centered on the roof is a Foursquare hallmark.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="20,110 100,40 180,110" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><rect x="76" y="76" width="48" height="30" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="72,76 86,62 114,62 128,76" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/><rect x="84" y="82" width="14" height="20" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/><rect x="102" y="82" width="14" height="20" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/></svg>',
    styleIds: ['foursquare', 'prairie']
  },
  {
    id: 'shed-dormer',
    name: 'Shed dormer',
    category: 'Roof features',
    definition: 'A long dormer with a single-slope roof, often stretching across most of the roof to add a full upstairs.',
    tip: 'A full-width shed dormer in a gambrel roof = Dutch Colonial; in a low gable = Craftsman bungalow.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="20,110 100,40 180,110" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><rect x="58" y="72" width="84" height="34" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="54,72 146,72 150,64 50,64" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1"><rect x="66" y="80" width="18" height="20"/><rect x="91" y="80" width="18" height="20"/><rect x="116" y="80" width="18" height="20"/></g></svg>',
    styleIds: ['dutch-colonial-revival', 'craftsman', 'shingle', 'cape-cod']
  },
  {
    id: 'eyebrow-dormer',
    name: 'Eyebrow dormer',
    category: 'Roof features',
    definition: 'A low, curved dormer with no sides — the roofing simply lifts in a wave over a sliver of window.',
    tip: 'A romantic Shingle Style touch, also seen on Richardsonian and storybook houses.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="20,110 100,40 180,110" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><path d="M62,96 Q100,62 138,96 Z" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><path d="M74,96 Q100,74 126,96 Z" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/></svg>',
    styleIds: ['shingle']
  },
  {
    id: 'cupola',
    name: 'Cupola / belvedere',
    category: 'Roof features',
    definition: 'A small windowed structure perched on the roof ridge or deck, originally for light and lookout.',
    tip: 'A square cupola on a low roof is textbook Italianate.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="30,110 100,86 170,110" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><rect x="40" y="110" width="120" height="20" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><rect x="78" y="58" width="44" height="30" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="72,58 100,42 128,58" fill="#b8703f" stroke="#3e3120" stroke-width="1.5"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1"><rect x="84" y="64" width="10" height="18"/><rect x="106" y="64" width="10" height="18"/></g></svg>',
    styleIds: ['italianate']
  },
  {
    id: 'turret',
    name: 'Turret / tower',
    category: 'Roof features',
    definition: 'A round or polygonal corner tower, usually rising through several stories and capped with a cone or bell roof.',
    tip: 'The corner turret with a conical "witch\'s hat" is Queen Anne\'s most famous flourish.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="96" y="70" width="80" height="60" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="90,70 136,50 182,70" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><path d="M40,130 L40,68 Q40,48 66,48 Q92,48 92,68 L92,130 Z" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="32,56 66,18 100,56" fill="#8a4b2a" stroke="#3e3120" stroke-width="1.5"/><line x1="66" y1="18" x2="66" y2="8" stroke="#3e3120" stroke-width="1.5"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1"><rect x="50" y="74" width="12" height="22"/><rect x="70" y="74" width="12" height="22"/></g></svg>',
    styleIds: ['queen-anne']
  },
  {
    id: 'cresting',
    name: 'Iron cresting',
    category: 'Roof features',
    definition: 'A lacy row of decorative wrought or cast iron running along the flat top or ridge of a roof.',
    tip: 'Crowning the flat deck of a mansard, it\'s a Second Empire finishing touch; Queen Anne uses it on towers.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="40,120 54,70 146,70 160,120" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><line x1="54" y1="70" x2="146" y2="70" stroke="#8f8163" stroke-width="2"/><g stroke="#3e3120" stroke-width="2" fill="none"><line x1="60" y1="70" x2="60" y2="54"/><line x1="74" y1="70" x2="74" y2="58"/><line x1="88" y1="70" x2="88" y2="54"/><line x1="100" y1="70" x2="100" y2="48"/><line x1="112" y1="70" x2="112" y2="54"/><line x1="126" y1="70" x2="126" y2="58"/><line x1="140" y1="70" x2="140" y2="54"/></g><g fill="#3e3120"><circle cx="60" cy="52" r="2.5"/><circle cx="88" cy="52" r="2.5"/><circle cx="100" cy="46" r="3"/><circle cx="112" cy="52" r="2.5"/><circle cx="140" cy="52" r="2.5"/></g></svg>',
    styleIds: ['second-empire', 'queen-anne']
  },

  // ---- Windows -----------------------------------------------------------
  {
    id: 'double-hung',
    name: 'Double-hung sash window',
    category: 'Windows',
    definition: 'A window of two sliding sashes, described by pane count: "6-over-6" means six panes in each sash.',
    tip: 'Small panes (9/9, 12/12) suggest colonial-era or early styles; large single panes came later. The workhorse window of most traditional styles.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="18" width="60" height="104" fill="#f4efe0" stroke="#3e3120" stroke-width="2"/><rect x="76" y="24" width="48" height="46" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><rect x="76" y="72" width="48" height="44" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="1"><line x1="92" y1="24" x2="92" y2="70"/><line x1="108" y1="24" x2="108" y2="70"/><line x1="76" y1="39" x2="124" y2="39"/><line x1="76" y1="54" x2="124" y2="54"/><line x1="92" y1="72" x2="92" y2="116"/><line x1="108" y1="72" x2="108" y2="116"/><line x1="76" y1="87" x2="124" y2="87"/><line x1="76" y1="102" x2="124" y2="102"/></g></svg>',
    styleIds: ['georgian', 'federal', 'colonial-revival', 'cape-cod', 'foursquare']
  },
  {
    id: 'casement-window',
    name: 'Casement window',
    category: 'Windows',
    definition: 'A window hinged at the side that swings outward like a door, often tall, narrow, and grouped in bands.',
    tip: 'Groups of casements with small leaded panes say Tudor; long bands of them say Prairie or Mid-Century Modern.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="52" y="24" width="96" height="92" fill="#f4efe0" stroke="#3e3120" stroke-width="2"/><rect x="58" y="30" width="40" height="80" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><rect x="102" y="30" width="40" height="80" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.8"><line x1="58" y1="50" x2="98" y2="50"/><line x1="58" y1="70" x2="98" y2="70"/><line x1="58" y1="90" x2="98" y2="90"/><line x1="102" y1="50" x2="142" y2="50"/><line x1="102" y1="70" x2="142" y2="70"/><line x1="102" y1="90" x2="142" y2="90"/></g><path d="M98,30 L74,70 L98,110" fill="none" stroke="#8a4b2a" stroke-width="1.2" stroke-dasharray="3,3"/></svg>',
    styleIds: ['tudor-revival', 'prairie', 'mid-century-modern']
  },
  {
    id: 'bay-window',
    name: 'Bay window',
    category: 'Windows',
    definition: 'A set of windows projecting out from the wall in a polygonal bump, adding light and floor space.',
    tip: 'Victorian favorites — Italianate row houses and Queen Annes bristle with bays.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="100" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="70,120 70,50 84,36 116,36 130,50 130,120" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><polygon points="70,50 84,36 116,36 130,50 116,50 84,50" fill="#b8703f" stroke="#3e3120" stroke-width="1"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1"><rect x="76" y="58" width="12" height="46"/><rect x="92" y="58" width="16" height="46"/><rect x="112" y="58" width="12" height="46"/></g></svg>',
    styleIds: ['queen-anne', 'italianate']
  },
  {
    id: 'oriel-window',
    name: 'Oriel window',
    category: 'Windows',
    definition: 'A bay window on an upper floor that doesn\'t reach the ground, carried on brackets or corbels.',
    tip: 'A Tudor and Gothic Revival touch borrowed from medieval houses.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="10" width="140" height="120" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="72,86 72,40 86,28 114,28 128,40 128,86" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1"><rect x="78" y="44" width="12" height="34"/><rect x="94" y="44" width="12" height="34"/><rect x="110" y="44" width="12" height="34"/></g><polygon points="72,86 128,86 100,104" fill="#b8703f" stroke="#3e3120" stroke-width="1.2"/></svg>',
    styleIds: ['tudor-revival', 'gothic-revival']
  },
  {
    id: 'palladian-window',
    name: 'Palladian window',
    category: 'Windows',
    definition: 'A three-part window: a tall arched center flanked by two shorter flat-topped windows.',
    tip: 'Formal classical pedigree — Federal and Colonial Revival gables; a puffed-up version marks Neo-eclectic entries.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="46" width="30" height="60" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><rect x="130" y="46" width="30" height="60" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><path d="M78,106 L78,52 Q100,24 122,52 L122,106 Z" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.9"><line x1="100" y1="30" x2="100" y2="106"/><line x1="78" y1="70" x2="122" y2="70"/><line x1="40" y1="70" x2="70" y2="70"/><line x1="130" y1="70" x2="160" y2="70"/><line x1="55" y1="46" x2="55" y2="106"/><line x1="145" y1="46" x2="145" y2="106"/></g><rect x="36" y="42" width="128" height="4" fill="#a0522d" stroke="#3e3120" stroke-width="0.8"/></svg>',
    styleIds: ['federal', 'colonial-revival', 'neo-eclectic']
  },
  {
    id: 'lancet-window',
    name: 'Lancet (pointed-arch) window',
    category: 'Windows',
    definition: 'A narrow window ending in a sharply pointed Gothic arch.',
    tip: 'The defining window of Gothic Revival — look for one centered in the steep front gable.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><path d="M78,120 L78,52 Q78,30 100,16 Q122,30 122,52 L122,120 Z" fill="#cfd9e3" stroke="#3e3120" stroke-width="2"/><g stroke="#3e3120" stroke-width="1"><line x1="100" y1="16" x2="100" y2="120"/><line x1="78" y1="66" x2="122" y2="66"/><line x1="78" y1="94" x2="122" y2="94"/></g></svg>',
    styleIds: ['gothic-revival']
  },
  {
    id: 'picture-window',
    name: 'Picture window',
    category: 'Windows',
    definition: 'A large fixed pane of glass that doesn\'t open, framing the front yard like a picture.',
    tip: 'The postwar suburb\'s window — Ranch, Minimal Traditional, and Split-Level living rooms all face the street through one.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="100" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><rect x="48" y="38" width="104" height="64" fill="#cfd9e3" stroke="#3e3120" stroke-width="2"/><path d="M56,60 Q76,46 96,58 Q116,70 144,52" fill="none" stroke="#eef4f8" stroke-width="3"/></svg>',
    styleIds: ['ranch', 'minimal-traditional', 'mid-century-modern', 'split-level']
  },
  {
    id: 'ribbon-windows',
    name: 'Ribbon windows',
    category: 'Windows',
    definition: 'A continuous horizontal band of identical windows set side by side, reading as one long strip.',
    tip: 'Tucked under deep eaves they\'re Prairie; floor-to-ceiling versions become the glass walls of Mid-Century Modern.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="160" height="80" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><rect x="28" y="52" width="144" height="36" fill="#6b5a45" stroke="#3e3120" stroke-width="1"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1"><rect x="32" y="56" width="24" height="28"/><rect x="60" y="56" width="24" height="28"/><rect x="88" y="56" width="24" height="28"/><rect x="116" y="56" width="24" height="28"/><rect x="144" y="56" width="24" height="28"/></g></svg>',
    styleIds: ['prairie', 'mid-century-modern']
  },

  // ---- Entries -----------------------------------------------------------
  {
    id: 'pediment',
    name: 'Pediment',
    category: 'Entries',
    definition: 'A triangular gable-shaped crown, used over doors, windows, or across an entire temple-front portico.',
    tip: 'Full-facade pediment on columns = Greek Revival; a small one over the door = Georgian or Colonial Revival.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="40,64 100,24 160,64" fill="#a0522d" stroke="#3e3120" stroke-width="2"/><polygon points="58,60 100,34 142,60" fill="#f4efe0" stroke="#3e3120" stroke-width="1"/><rect x="36" y="64" width="128" height="8" fill="#e8dfc8" stroke="#3e3120" stroke-width="1.5"/><rect x="56" y="72" width="10" height="48" fill="#e8dfc8" stroke="#3e3120" stroke-width="1.2"/><rect x="134" y="72" width="10" height="48" fill="#e8dfc8" stroke="#3e3120" stroke-width="1.2"/><rect x="84" y="76" width="32" height="44" fill="#5b3a22" stroke="#3e3120" stroke-width="1.2"/></svg>',
    styleIds: ['greek-revival', 'georgian', 'colonial-revival']
  },
  {
    id: 'fanlight',
    name: 'Fanlight',
    category: 'Entries',
    definition: 'A semicircular or elliptical window above a door, with radiating muntins like a folding fan.',
    tip: 'An elliptical fanlight spreading over door and sidelights is the Federal signature; simpler half-rounds appear in Georgian and Colonial Revival.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><path d="M52,64 A48,34 0 0 1 148,64 Z" fill="#cfd9e3" stroke="#3e3120" stroke-width="2"/><g stroke="#3e3120" stroke-width="1"><line x1="100" y1="30" x2="100" y2="64"/><line x1="68" y1="42" x2="100" y2="64"/><line x1="132" y1="42" x2="100" y2="64"/><line x1="56" y1="54" x2="100" y2="64"/><line x1="144" y1="54" x2="100" y2="64"/></g><rect x="74" y="64" width="52" height="56" fill="#5b3a22" stroke="#3e3120" stroke-width="1.5"/><rect x="60" y="64" width="14" height="56" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/><rect x="126" y="64" width="14" height="56" fill="#cfd9e3" stroke="#3e3120" stroke-width="1"/></svg>',
    styleIds: ['federal', 'georgian', 'colonial-revival']
  },
  {
    id: 'sidelights',
    name: 'Sidelights',
    category: 'Entries',
    definition: 'Narrow vertical windows flanking a front door on one or both sides.',
    tip: 'With a rectangular transom line above, sidelights frame the Greek Revival entry; with a fanlight, the Federal one.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="20" width="108" height="100" fill="#f4efe0" stroke="#3e3120" stroke-width="1.5"/><rect x="78" y="32" width="44" height="88" fill="#5b3a22" stroke="#3e3120" stroke-width="1.5"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="1.2"><rect x="58" y="32" width="14" height="88"/><rect x="128" y="32" width="14" height="88"/></g><g stroke="#3e3120" stroke-width="0.8"><line x1="58" y1="54" x2="72" y2="54"/><line x1="58" y1="76" x2="72" y2="76"/><line x1="58" y1="98" x2="72" y2="98"/><line x1="128" y1="54" x2="142" y2="54"/><line x1="128" y1="76" x2="142" y2="76"/><line x1="128" y1="98" x2="142" y2="98"/></g></svg>',
    styleIds: ['greek-revival', 'federal', 'colonial-revival']
  },
  {
    id: 'transom',
    name: 'Transom light',
    category: 'Entries',
    definition: 'A horizontal window directly above a door, named for the crossbar (transom) it sits on.',
    tip: 'A plain rectangular transom over the door is common from Greek Revival through Craftsman.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="20" width="108" height="100" fill="#f4efe0" stroke="#3e3120" stroke-width="1.5"/><rect x="64" y="30" width="72" height="18" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.9"><line x1="88" y1="30" x2="88" y2="48"/><line x1="112" y1="30" x2="112" y2="48"/></g><rect x="64" y="48" width="72" height="72" fill="#5b3a22" stroke="#3e3120" stroke-width="1.5"/><line x1="100" y1="48" x2="100" y2="120" stroke="#3e2a18" stroke-width="1"/></svg>',
    styleIds: ['greek-revival', 'craftsman', 'foursquare']
  },
  {
    id: 'portico',
    name: 'Portico',
    category: 'Entries',
    definition: 'A porch supported by columns marking the entrance — from a small door hood on two columns to a monumental two-story version.',
    tip: 'A modest columned portico is Colonial Revival\'s calling card; a giant one belongs to Greek Revival and Neoclassical mansions.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="30" width="152" height="90" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="58,56 100,32 142,56" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><rect x="54" y="56" width="92" height="6" fill="#b8703f" stroke="#3e3120" stroke-width="1"/><rect x="64" y="62" width="9" height="58" fill="#f4efe0" stroke="#3e3120" stroke-width="1.2"/><rect x="127" y="62" width="9" height="58" fill="#f4efe0" stroke="#3e3120" stroke-width="1.2"/><rect x="86" y="66" width="28" height="54" fill="#5b3a22" stroke="#3e3120" stroke-width="1.2"/></svg>',
    styleIds: ['colonial-revival', 'greek-revival', 'federal']
  },

  // ---- Porches & columns -------------------------------------------------
  {
    id: 'doric-column',
    name: 'Classical column (Doric)',
    category: 'Porches & columns',
    definition: 'A round, usually fluted shaft with a plain cushion capital — the simplest of the Greek orders (Ionic scrolls and leafy Corinthian are its fancier siblings).',
    tip: 'Full-height round columns almost always mean Greek Revival or a classical revival; count the flutes and check the capital.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="14" width="80" height="10" fill="#e8dfc8" stroke="#3e3120" stroke-width="1.2"/><rect x="82" y="24" width="36" height="8" fill="#f4efe0" stroke="#3e3120" stroke-width="1.2"/><polygon points="86,32 114,32 111,120 89,120" fill="#f4efe0" stroke="#3e3120" stroke-width="1.5"/><g stroke="#cdbfa3" stroke-width="1.2"><line x1="94" y1="34" x2="95" y2="118"/><line x1="100" y1="34" x2="100" y2="118"/><line x1="106" y1="34" x2="105" y2="118"/></g><rect x="80" y="120" width="40" height="8" fill="#e8dfc8" stroke="#3e3120" stroke-width="1.2"/></svg>',
    styleIds: ['greek-revival', 'colonial-revival']
  },
  {
    id: 'tapered-post',
    name: 'Tapered porch column on pier',
    category: 'Porches & columns',
    definition: 'A short, square wooden column that widens toward the bottom ("battered"), resting on a heavy pier of stone, brick, or stucco.',
    tip: 'The single most reliable Craftsman identifier.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="16" width="100" height="10" fill="#6b5138" stroke="#3e3120" stroke-width="1.2"/><polygon points="88,26 112,26 118,78 82,78" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><rect x="76" y="78" width="48" height="46" fill="#8f8570" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.8"><line x1="76" y1="94" x2="124" y2="94"/><line x1="76" y1="110" x2="124" y2="110"/><line x1="96" y1="78" x2="96" y2="94"/><line x1="110" y1="94" x2="110" y2="110"/><line x1="90" y1="110" x2="90" y2="124"/></g></svg>',
    styleIds: ['craftsman']
  },
  {
    id: 'turned-spindles',
    name: 'Turned posts & spindlework',
    category: 'Porches & columns',
    definition: 'Lathe-turned porch posts with knobby profiles, plus rows of small spindles in friezes and balustrades — "gingerbread" millwork.',
    tip: 'Queen Anne porches drip with it; on a plain farmhouse it makes Folk Victorian.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="16" width="140" height="10" fill="#6b5138" stroke="#3e3120" stroke-width="1.2"/><g stroke="#3e3120" stroke-width="1.5"><line x1="52" y1="26" x2="52" y2="40"/><line x1="66" y1="26" x2="66" y2="40"/><line x1="80" y1="26" x2="80" y2="40"/><line x1="94" y1="26" x2="94" y2="40"/><line x1="108" y1="26" x2="108" y2="40"/><line x1="122" y1="26" x2="122" y2="40"/><line x1="136" y1="26" x2="136" y2="40"/><line x1="150" y1="26" x2="150" y2="40"/></g><line x1="40" y1="42" x2="160" y2="42" stroke="#3e3120" stroke-width="2"/><path d="M96,42 L104,42 L102,52 Q108,58 102,66 L104,74 Q97,80 104,88 L102,98 Q108,106 102,112 L104,124 L96,124 L98,112 Q92,106 98,98 L96,88 Q103,80 96,74 L98,66 Q92,58 98,52 Z" fill="#a0522d" stroke="#3e3120" stroke-width="1.2"/><polygon points="104,44 128,44 104,62" fill="#b8703f" stroke="#3e3120" stroke-width="1"/><polygon points="96,44 72,44 96,62" fill="#b8703f" stroke="#3e3120" stroke-width="1"/></svg>',
    styleIds: ['queen-anne', 'folk-victorian']
  },
  {
    id: 'wraparound-porch',
    name: 'Wraparound porch',
    category: 'Porches & columns',
    definition: 'A deep porch that turns the corner and continues along two or more sides of the house.',
    tip: 'A Queen Anne essential, kept by Shingle Style and many Foursquares.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="30" width="80" height="60" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="64,30 110,12 156,30" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><polygon points="40,90 40,74 70,60 176,60 176,74 70,104" fill="none" stroke="#3e3120" stroke-width="0"/><polygon points="36,78 70,62 180,62 180,70 70,86 36,86" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="1.5"><line x1="44" y1="84" x2="44" y2="118"/><line x1="70" y1="86" x2="70" y2="120"/><line x1="106" y1="80" x2="106" y2="118"/><line x1="142" y1="74" x2="142" y2="114"/><line x1="176" y1="70" x2="176" y2="110"/></g><polygon points="36,118 70,120 180,110 180,116 70,126 36,124" fill="#b8703f" stroke="#3e3120" stroke-width="1"/></svg>',
    styleIds: ['queen-anne', 'shingle', 'foursquare', 'folk-victorian']
  },
  {
    id: 'porte-cochere',
    name: 'Porte-cochère',
    category: 'Porches & columns',
    definition: 'A covered structure extending over a driveway at a side entrance, letting passengers arrive under shelter.',
    tip: 'Common on Prairie houses and grand Tudor and revival mansions of the motoring age.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="34" width="90" height="86" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><polygon points="18,34 69,16 120,34" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><rect x="114" y="52" width="70" height="10" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><rect x="166" y="62" width="10" height="58" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><rect x="120" y="62" width="8" height="58" fill="#b8703f" stroke="#3e3120" stroke-width="1.2"/><circle cx="140" cy="112" r="8" fill="none" stroke="#5b4a3a" stroke-width="1.5"/><circle cx="160" cy="112" r="8" fill="none" stroke="#5b4a3a" stroke-width="1.5"/><path d="M130,112 L130,102 Q140,94 152,98 L166,98 L168,112" fill="none" stroke="#5b4a3a" stroke-width="1.5"/></svg>',
    styleIds: ['prairie', 'tudor-revival']
  },

  // ---- Walls & cladding ----------------------------------------------------
  {
    id: 'clapboard',
    name: 'Clapboard siding',
    category: 'Walls & cladding',
    definition: 'Long horizontal boards, each overlapping the one below — the default wood siding of American houses.',
    tip: 'Universal, so it rules little out — but crisp white clapboard leans colonial and revival; narrow boards suggest older work.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="120" height="100" fill="#f4efe0" stroke="#3e3120" stroke-width="1.5"/><g stroke="#a0522d" stroke-width="1.5"><line x1="40" y1="34" x2="160" y2="34"/><line x1="40" y1="48" x2="160" y2="48"/><line x1="40" y1="62" x2="160" y2="62"/><line x1="40" y1="76" x2="160" y2="76"/><line x1="40" y1="90" x2="160" y2="90"/><line x1="40" y1="104" x2="160" y2="104"/></g><g stroke="#d9cdb8" stroke-width="1"><line x1="40" y1="37" x2="160" y2="37"/><line x1="40" y1="51" x2="160" y2="51"/><line x1="40" y1="65" x2="160" y2="65"/><line x1="40" y1="79" x2="160" y2="79"/><line x1="40" y1="93" x2="160" y2="93"/><line x1="40" y1="107" x2="160" y2="107"/></g></svg>',
    styleIds: ['cape-cod', 'colonial-revival', 'folk-victorian', 'queen-anne']
  },
  {
    id: 'board-and-batten',
    name: 'Board-and-batten siding',
    category: 'Walls & cladding',
    definition: 'Vertical siding of wide boards with narrow strips (battens) covering the seams.',
    tip: 'Its verticality was praised by Gothic Revival pattern books; today it flags the "modern farmhouse" flavor of Neo-eclectic.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="120" height="100" fill="#f4efe0" stroke="#3e3120" stroke-width="1.5"/><g stroke="#a0522d" stroke-width="4"><line x1="58" y1="20" x2="58" y2="120"/><line x1="79" y1="20" x2="79" y2="120"/><line x1="100" y1="20" x2="100" y2="120"/><line x1="121" y1="20" x2="121" y2="120"/><line x1="142" y1="20" x2="142" y2="120"/></g></svg>',
    styleIds: ['gothic-revival', 'neo-eclectic']
  },
  {
    id: 'shingle-siding',
    name: 'Wood shingle siding',
    category: 'Walls & cladding',
    definition: 'Walls clad in small overlapping wood shingles, sometimes cut into scallops, diamonds, or waves for pattern.',
    tip: 'Patterned shingles in a gable = Queen Anne; a whole house in plain shingles = Shingle Style; weathered gray = coastal Cape.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="120" height="100" fill="#e8d5b0" stroke="#3e3120" stroke-width="1.5"/><g fill="none" stroke="#a0522d" stroke-width="1.5"><path d="M40,36 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0"/><path d="M40,54 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0"/><path d="M40,72 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0"/><path d="M40,90 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0"/><path d="M40,108 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0 q7.5,-8 15,0"/></g></svg>',
    styleIds: ['shingle', 'queen-anne', 'cape-cod']
  },
  {
    id: 'half-timbering',
    name: 'Half-timbering',
    category: 'Walls & cladding',
    definition: 'Dark wood beams exposed against light stucco panels. Structural in medieval England; decorative on American houses.',
    tip: 'In a steep gable over brick, it\'s the Tudor Revival signature.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="120" height="100" fill="#f2e9d0" stroke="#3e3120" stroke-width="1.5"/><g stroke="#4a2f1a" stroke-width="6"><line x1="40" y1="70" x2="160" y2="70"/><line x1="70" y1="20" x2="70" y2="120"/><line x1="130" y1="20" x2="130" y2="120"/><line x1="70" y1="70" x2="100" y2="20"/><line x1="130" y1="70" x2="100" y2="20"/><line x1="70" y1="70" x2="100" y2="120"/><line x1="130" y1="70" x2="100" y2="120"/></g></svg>',
    styleIds: ['tudor-revival']
  },
  {
    id: 'stucco',
    name: 'Stucco',
    category: 'Walls & cladding',
    definition: 'A troweled cement or lime plaster finish giving walls a smooth or lightly textured monolithic look.',
    tip: 'Smooth white stucco under a tile roof = Spanish Colonial Revival; as panels between timbers = Tudor; banded = Prairie.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="20" width="120" height="100" fill="#f7f1de" stroke="#3e3120" stroke-width="1.5"/><g stroke="#e0d4b4" stroke-width="1.2" fill="none"><path d="M52,36 q10,6 20,0 q10,-6 20,0"/><path d="M96,58 q10,6 20,0 q10,-6 20,0"/><path d="M56,84 q10,6 20,0 q10,-6 20,0"/><path d="M92,104 q10,6 20,0"/><path d="M120,34 q8,5 16,0"/><path d="M48,60 q8,5 16,0"/><path d="M128,82 q8,5 16,0"/></g></svg>',
    styleIds: ['spanish-colonial-revival', 'tudor-revival', 'prairie']
  },
  {
    id: 'barrel-tile',
    name: 'Barrel tile roof',
    category: 'Walls & cladding',
    definition: 'Half-cylinder clay tiles laid in overlapping rows, glowing orange-red in the sun.',
    tip: 'The unmistakable roof of Spanish Colonial Revival and its Mediterranean cousins.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="76" width="120" height="44" fill="#f7f1de" stroke="#3e3120" stroke-width="1.5"/><rect x="32" y="40" width="136" height="36" fill="#b8471f" stroke="#3e3120" stroke-width="1.5"/><g fill="none" stroke="#7a2a12" stroke-width="1.5"><path d="M36,52 q6,-8 12,0"/><path d="M52,52 q6,-8 12,0"/><path d="M68,52 q6,-8 12,0"/><path d="M84,52 q6,-8 12,0"/><path d="M100,52 q6,-8 12,0"/><path d="M116,52 q6,-8 12,0"/><path d="M132,52 q6,-8 12,0"/><path d="M148,52 q6,-8 12,0"/><path d="M36,66 q6,-8 12,0"/><path d="M52,66 q6,-8 12,0"/><path d="M68,66 q6,-8 12,0"/><path d="M84,66 q6,-8 12,0"/><path d="M100,66 q6,-8 12,0"/><path d="M116,66 q6,-8 12,0"/><path d="M132,66 q6,-8 12,0"/><path d="M148,66 q6,-8 12,0"/></g></svg>',
    styleIds: ['spanish-colonial-revival']
  },

  // ---- Trim & ornament -----------------------------------------------------
  {
    id: 'bracket',
    name: 'Eave brackets',
    category: 'Trim & ornament',
    definition: 'Ornamental supports — often scrolled, often paired — carrying a deep roof overhang.',
    tip: 'Chunky paired brackets under wide eaves are the Italianate badge; Second Empire and Folk Victorian borrow them.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="14" fill="#8a7a5c" stroke="#3e3120" stroke-width="1.5"/><rect x="46" y="52" width="108" height="68" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><g fill="#a0522d" stroke="#3e3120" stroke-width="1.2"><path d="M56,34 L56,58 Q68,52 68,34 Z"/><path d="M76,34 L76,58 Q88,52 88,34 Z"/><path d="M112,34 L112,58 Q124,52 124,34 Z"/><path d="M132,34 L132,58 Q144,52 144,34 Z"/></g></svg>',
    styleIds: ['italianate', 'second-empire', 'folk-victorian']
  },
  {
    id: 'dentil-molding',
    name: 'Dentil molding',
    category: 'Trim & ornament',
    definition: 'A row of small, closely spaced rectangular blocks — "little teeth" — running under a cornice.',
    tip: 'A classical touch on Georgian, Federal, and Colonial Revival cornices.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="140" height="16" fill="#f4efe0" stroke="#3e3120" stroke-width="1.5"/><g fill="#a0522d" stroke="#3e3120" stroke-width="1"><rect x="40" y="46" width="10" height="10"/><rect x="58" y="46" width="10" height="10"/><rect x="76" y="46" width="10" height="10"/><rect x="94" y="46" width="10" height="10"/><rect x="112" y="46" width="10" height="10"/><rect x="130" y="46" width="10" height="10"/><rect x="148" y="46" width="10" height="10"/></g><rect x="34" y="56" width="132" height="60" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/></svg>',
    styleIds: ['georgian', 'federal', 'colonial-revival']
  },
  {
    id: 'vergeboard',
    name: 'Vergeboard (bargeboard)',
    category: 'Trim & ornament',
    definition: 'A decoratively carved board following the sloping edge of a gable — the original "gingerbread."',
    tip: 'Lacy vergeboards on a steep gable are pure Gothic Revival.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="40,110 100,30 160,110" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><g fill="#a0522d" stroke="#3e3120" stroke-width="1"><path d="M44,108 L100,34 L108,44 Q96,44 98,56 Q84,54 86,68 Q74,66 76,80 Q64,78 66,92 Q54,90 56,104 L52,108 Z" transform="translate(-4,0)"/><path d="M156,108 L100,34 L92,44 Q104,44 102,56 Q116,54 114,68 Q126,66 124,80 Q136,78 134,92 Q146,90 144,104 L148,108 Z" transform="translate(4,0)"/></g><line x1="100" y1="30" x2="100" y2="16" stroke="#3e3120" stroke-width="1.5"/><circle cx="100" cy="14" r="2.5" fill="#3e3120"/></svg>',
    styleIds: ['gothic-revival']
  },
  {
    id: 'quoins',
    name: 'Quoins',
    category: 'Trim & ornament',
    definition: 'Accentuated blocks of stone (or imitation) stacked up the corners of a building in an alternating pattern.',
    tip: 'A mark of formality on Georgian, Italianate, and Second Empire houses.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="100" height="100" fill="#d9a06a" stroke="#3e3120" stroke-width="1.5"/><g fill="#f4efe0" stroke="#3e3120" stroke-width="1.2"><rect x="42" y="20" width="24" height="14"/><rect x="50" y="34" width="16" height="14"/><rect x="42" y="48" width="24" height="14"/><rect x="50" y="62" width="16" height="14"/><rect x="42" y="76" width="24" height="14"/><rect x="50" y="90" width="16" height="14"/><rect x="42" y="104" width="24" height="14"/><rect x="134" y="20" width="24" height="14"/><rect x="134" y="34" width="16" height="14"/><rect x="134" y="48" width="24" height="14"/><rect x="134" y="62" width="16" height="14"/><rect x="134" y="76" width="24" height="14"/><rect x="134" y="90" width="16" height="14"/><rect x="134" y="104" width="24" height="14"/></g></svg>',
    styleIds: ['georgian', 'italianate', 'second-empire']
  },
  {
    id: 'rafter-tails',
    name: 'Exposed rafter tails',
    category: 'Trim & ornament',
    definition: 'The ends of the roof rafters left visible, poking out beneath the eaves instead of being boxed in.',
    tip: 'Honest structure on display — a Craftsman fundamental.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="20,60 100,24 180,60" fill="#8a7a5c" stroke="#3e3120" stroke-width="1.5"/><rect x="56" y="60" width="88" height="60" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><g fill="#a0522d" stroke="#3e3120" stroke-width="1"><rect x="24" y="58" width="8" height="10"/><rect x="42" y="58" width="8" height="10"/><rect x="60" y="58" width="8" height="10"/><rect x="78" y="58" width="8" height="10"/><rect x="96" y="58" width="8" height="10"/><rect x="114" y="58" width="8" height="10"/><rect x="132" y="58" width="8" height="10"/><rect x="150" y="58" width="8" height="10"/><rect x="168" y="58" width="8" height="10"/></g></svg>',
    styleIds: ['craftsman']
  },
  {
    id: 'knee-brace',
    name: 'Knee braces',
    category: 'Trim & ornament',
    definition: 'Sturdy triangular wooden braces set under the gable overhang, real or decorative.',
    tip: 'With rafter tails and tapered posts, part of the Craftsman trio.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="24,72 100,32 176,72" fill="#8a7a5c" stroke="#3e3120" stroke-width="1.5"/><rect x="52" y="72" width="96" height="48" fill="#e8dfc8" stroke="#b8ab90" stroke-width="1.5"/><g fill="#a0522d" stroke="#3e3120" stroke-width="1.2"><polygon points="60,72 60,94 76,72"/><polygon points="140,72 140,94 124,72"/><polygon points="96,56 96,78 112,56 112,50 96,50"/></g></svg>',
    styleIds: ['craftsman']
  },
  {
    id: 'frieze-band',
    name: 'Frieze / entablature band',
    category: 'Trim & ornament',
    definition: 'A wide, plain horizontal band of trim running just below the roofline, echoing the entablature of a Greek temple.',
    tip: 'On an otherwise simple farmhouse, a wide frieze band with tiny "eyebrow" windows is a Greek Revival tell.',
    svg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><polygon points="24,48 100,18 176,48" fill="#ded2b4" stroke="#b8ab90" stroke-width="1.5"/><rect x="30" y="48" width="140" height="20" fill="#a0522d" stroke="#3e3120" stroke-width="1.5"/><g fill="#cfd9e3" stroke="#3e3120" stroke-width="0.8"><rect x="52" y="53" width="16" height="10"/><rect x="92" y="53" width="16" height="10"/><rect x="132" y="53" width="16" height="10"/></g><rect x="38" y="68" width="124" height="52" fill="#f4efe0" stroke="#b8ab90" stroke-width="1.5"/></svg>',
    styleIds: ['greek-revival']
  }
];

// Helper: look up a glossary element by id.
window.ELEMENT_BY_ID = function (id) {
  return window.ELEMENTS.find(function (e) { return e.id === id; });
};
