// Data for the Identify wizard: observable facets per style, and the ordered
// questions the wizard asks. Scoring lives in app.js (App.scoreIdentify):
//   facet questions — style's facet array contains the chosen value: +2;
//   doesn't contain it: -1 ("soft" contradiction, real houses vary);
//   symmetry 'either' matches both answers at +1.
//   The standout-features question uses explicit per-style point maps (max +3).

window.STYLE_FACETS = {
  'cape-cod':                 { roof: ['side-gable'], stories: ['1.5'], symmetry: 'symmetric', cladding: ['clapboard', 'shingle'] },
  'georgian':                 { roof: ['side-gable', 'hip'], stories: ['2'], symmetry: 'symmetric', cladding: ['brick', 'clapboard'] },
  'federal':                  { roof: ['side-gable', 'hip'], stories: ['2', '3'], symmetry: 'symmetric', cladding: ['brick'] },
  'greek-revival':            { roof: ['front-gable', 'hip'], stories: ['2'], symmetry: 'symmetric', cladding: ['clapboard'] },
  'gothic-revival':           { roof: ['cross-gable'], stories: ['1.5', '2'], symmetry: 'either', cladding: ['clapboard'] },
  'italianate':               { roof: ['hip', 'flat'], stories: ['2', '3'], symmetry: 'either', cladding: ['clapboard', 'brick'] },
  'second-empire':            { roof: ['mansard'], stories: ['2', '3'], symmetry: 'either', cladding: ['clapboard', 'brick'] },
  'folk-victorian':           { roof: ['front-gable', 'cross-gable'], stories: ['1.5', '2'], symmetry: 'either', cladding: ['clapboard'] },
  'queen-anne':               { roof: ['cross-gable', 'complex'], stories: ['2', '3'], symmetry: 'asymmetric', cladding: ['mixed', 'clapboard', 'shingle'] },
  'shingle':                  { roof: ['complex', 'gambrel', 'cross-gable'], stories: ['2', '3'], symmetry: 'asymmetric', cladding: ['shingle'] },
  'colonial-revival':         { roof: ['side-gable', 'hip'], stories: ['2'], symmetry: 'symmetric', cladding: ['clapboard', 'brick'] },
  'tudor-revival':            { roof: ['cross-gable'], stories: ['2'], symmetry: 'asymmetric', cladding: ['brick', 'stucco', 'stone', 'mixed'] },
  'foursquare':               { roof: ['hip'], stories: ['2'], symmetry: 'symmetric', cladding: ['clapboard', 'brick', 'shingle'] },
  'dutch-colonial-revival':   { roof: ['gambrel'], stories: ['2'], symmetry: 'symmetric', cladding: ['clapboard', 'shingle'] },
  'prairie':                  { roof: ['hip'], stories: ['2'], symmetry: 'either', cladding: ['stucco', 'brick'] },
  'craftsman':                { roof: ['front-gable', 'side-gable'], stories: ['1', '1.5'], symmetry: 'either', cladding: ['clapboard', 'shingle', 'mixed'] },
  'spanish-colonial-revival': { roof: ['hip', 'flat'], stories: ['1', '2'], symmetry: 'asymmetric', cladding: ['stucco'] },
  'minimal-traditional':      { roof: ['side-gable', 'cross-gable'], stories: ['1', '1.5'], symmetry: 'either', cladding: ['clapboard', 'brick'] },
  'ranch':                    { roof: ['hip', 'side-gable'], stories: ['1'], symmetry: 'either', cladding: ['clapboard', 'brick', 'mixed'] },
  'mid-century-modern':       { roof: ['flat'], stories: ['1', '2'], symmetry: 'asymmetric', cladding: ['modern', 'mixed'] },
  'split-level':              { roof: ['side-gable', 'hip'], stories: ['split'], symmetry: 'asymmetric', cladding: ['clapboard', 'brick', 'mixed'] },
  'neo-eclectic':             { roof: ['complex', 'cross-gable'], stories: ['2', '3'], symmetry: 'asymmetric', cladding: ['brick', 'vinyl', 'mixed'] }
};

window.ID_QUESTIONS = [
  {
    key: 'roof',
    title: 'Start with the roof — what shape is it?',
    hint: 'The roof is the single most telling feature. Squint past additions and porches.',
    options: [
      { value: 'side-gable', label: 'Simple peak, ridge runs along the street' },
      { value: 'front-gable', label: 'A triangle faces the street' },
      { value: 'cross-gable', label: 'Gables crossing, or a big gable breaking the roof' },
      { value: 'hip', label: 'Slopes on all four sides — no triangles' },
      { value: 'gambrel', label: 'Barn-style: two slopes on each side' },
      { value: 'mansard', label: 'Steep, nearly vertical sides with a flat top' },
      { value: 'flat', label: 'Flat or very low slope' },
      { value: 'complex', label: 'A tall, busy mix of steep rooflines' }
    ]
  },
  {
    key: 'stories',
    title: 'How many stories?',
    hint: 'Count from the street. Windows poking out of the roof count as a half story.',
    options: [
      { value: '1', label: 'One story' },
      { value: '1.5', label: 'One and a half — upstairs windows in the roof' },
      { value: '2', label: 'Two full stories' },
      { value: '3', label: 'Two and a half or three' },
      { value: 'split', label: 'Levels offset by half a story' }
    ]
  },
  {
    key: 'symmetry',
    title: 'Is the front symmetric?',
    hint: 'Imagine folding the facade down the middle at the front door.',
    options: [
      { value: 'symmetric', label: 'Yes — matching halves, centered door' },
      { value: 'asymmetric', label: 'No — off-center door, uneven massing' }
    ]
  },
  {
    key: 'cladding',
    title: 'What are the walls mostly made of?',
    hint: 'Go with the dominant material on the front.',
    options: [
      { value: 'clapboard', label: 'Horizontal wood boards (clapboard)' },
      { value: 'shingle', label: 'Wood shingles' },
      { value: 'brick', label: 'Brick' },
      { value: 'stucco', label: 'Stucco / smooth plaster' },
      { value: 'stone', label: 'Stone' },
      { value: 'mixed', label: 'Several textures mixed together' },
      { value: 'modern', label: 'Glass walls / modern panels' },
      { value: 'vinyl', label: 'Vinyl or fiber-cement (newer build)' }
    ]
  },
  {
    key: 'features',
    multi: true,
    title: 'Any of these standouts? Pick all you see.',
    hint: 'These are the strongest single clues — one can settle it.',
    options: [
      { value: 'columns', label: 'Tall white columns', points: { 'greek-revival': 3, 'colonial-revival': 2, 'georgian': 1, 'federal': 1, 'neo-eclectic': 1 } },
      { value: 'turret', label: 'A round corner tower / turret', points: { 'queen-anne': 3 } },
      { value: 'half-timbering', label: 'Dark beams in stucco (half-timbering)', points: { 'tudor-revival': 3, 'neo-eclectic': 1 } },
      { value: 'garage-forward', label: 'A big garage facing the street', points: { 'neo-eclectic': 3, 'split-level': 2, 'ranch': 2 } },
      { value: 'wraparound-porch', label: 'A porch wrapping the corner', points: { 'queen-anne': 2, 'folk-victorian': 2, 'shingle': 1, 'foursquare': 1 } },
      { value: 'tile-arches', label: 'Red tile roof and arched openings', points: { 'spanish-colonial-revival': 3 } },
      { value: 'picture-window', label: 'One big picture window', points: { 'ranch': 2, 'minimal-traditional': 2, 'split-level': 1, 'mid-century-modern': 1 } },
      { value: 'gingerbread', label: 'Lacy “gingerbread” wood trim', points: { 'gothic-revival': 2, 'folk-victorian': 2, 'queen-anne': 1 } },
      { value: 'fanlight', label: 'A fan-shaped window over the door', points: { 'federal': 3, 'colonial-revival': 1, 'georgian': 1 } },
      { value: 'horizontal-eaves', label: 'Very deep eaves, strong horizontal lines', points: { 'prairie': 3, 'craftsman': 1, 'ranch': 1, 'mid-century-modern': 1 } },
      { value: 'eave-brackets', label: 'Ornate brackets under the eaves', points: { 'italianate': 3, 'second-empire': 2, 'folk-victorian': 1 } },
      { value: 'craftsman-details', label: 'Tapered porch posts on stone piers, exposed rafters', points: { 'craftsman': 3 } },
      { value: 'glass-walls', label: 'Whole walls of glass', points: { 'mid-century-modern': 3 } },
      { value: 'pointed-arch', label: 'Pointed-arch (church-like) windows', points: { 'gothic-revival': 3 } },
      { value: 'central-chimney', label: 'One big chimney dead center', points: { 'cape-cod': 2 } },
      { value: 'cupola', label: 'A little windowed box on the rooftop', points: { 'italianate': 2 } }
    ]
  }
];
