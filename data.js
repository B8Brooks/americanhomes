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
  },
  {
    id: 'greek-revival',
    name: 'Greek Revival',
    period: '1825–1860',
    region: 'Northeast and the antebellum South; spread west with settlement',
    summary: 'America\'s first national style. Houses dressed up as Greek temples — full triangular pediments, white columns, severe symmetry — to align the young republic with Athenian democracy. Ranged from grand plantation mansions to vernacular farmhouses with pilasters.',
    keyFeatures: [
      'Front-gabled facade reading as a temple front',
      'Heavy triangular pediment at the gable end',
      'Tall full-height columns, usually Doric, supporting a portico',
      'Wide entablature band wrapping the cornice',
      'Centered door framed by transoms and sidelights',
      'White or pale paint over wood imitating marble'
    ],
    elements: [
      'A full triangular pediment supported by tall white Doric columns',
      'A wide unornamented frieze board wrapping the entire cornice line'
    ],
    tags: ['classical', 'symmetric', 'temple-front', 'columns'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="60" y="135" width="280" height="120" fill="#f5efde" stroke="#3e3120" stroke-width="1.5"/><polygon points="50,135 200,55 350,135" fill="#f5efde" stroke="#3e3120" stroke-width="1.5"/><rect x="50" y="125" width="300" height="14" fill="#efe6d4" stroke="#3e3120"/><circle cx="200" cy="105" r="8" fill="#cdbfa3" stroke="#3e3120"/><g fill="#fdf6e8" stroke="#3e3120"><rect x="90" y="140" width="20" height="115"/><rect x="160" y="140" width="20" height="115"/><rect x="220" y="140" width="20" height="115"/><rect x="290" y="140" width="20" height="115"/></g><g fill="#efe6d4" stroke="#3e3120"><rect x="86" y="135" width="28" height="6"/><rect x="156" y="135" width="28" height="6"/><rect x="216" y="135" width="28" height="6"/><rect x="286" y="135" width="28" height="6"/></g><g stroke="#cdbfa3"><line x1="95" y1="145" x2="95" y2="248"/><line x1="100" y1="145" x2="100" y2="248"/><line x1="105" y1="145" x2="105" y2="248"/><line x1="165" y1="145" x2="165" y2="248"/><line x1="170" y1="145" x2="170" y2="248"/><line x1="175" y1="145" x2="175" y2="248"/><line x1="225" y1="145" x2="225" y2="248"/><line x1="230" y1="145" x2="230" y2="248"/><line x1="235" y1="145" x2="235" y2="248"/><line x1="295" y1="145" x2="295" y2="248"/><line x1="300" y1="145" x2="300" y2="248"/><line x1="305" y1="145" x2="305" y2="248"/></g><rect x="186" y="180" width="28" height="75" fill="#3e2a18" stroke="#3e3120"/><rect x="124" y="170" width="28" height="40" fill="#cfd9e3" stroke="#3e3120"/><rect x="248" y="170" width="28" height="40" fill="#cfd9e3" stroke="#3e3120"/></svg>'
  },
  {
    id: 'gothic-revival',
    name: 'Gothic Revival',
    period: '1840–1880',
    region: 'Hudson Valley and rural Northeast; pattern-book copies nationwide',
    summary: 'Romantic, picturesque, deliberately un-classical. Promoted by pattern-book authors like Andrew Jackson Downing as morally superior to the Greek temple — country cottages with steep gables, pointed windows, and wood lace clinging to the eaves.',
    keyFeatures: [
      'Steeply pitched roof with prominent front-facing cross gable',
      'Decorative wood vergeboards (gingerbread) along the gable edges',
      'Pointed-arch (lancet) windows, especially in the center gable',
      'Vertical board-and-batten siding',
      'One-story porch sheltering the entrance',
      'Often asymmetric, picturesque massing'
    ],
    elements: [
      'A steep central cross-gable trimmed with carved wood gingerbread',
      'A pointed-arch lancet window centered in the front gable',
      'Vertical board-and-batten wood siding'
    ],
    tags: ['picturesque', 'romantic', 'asymmetric', 'pointed-arch'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="60" y="170" width="280" height="82" fill="#f0e6c5" stroke="#3e3120" stroke-width="1.5"/><polygon points="60,170 200,130 340,170" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><polygon points="155,180 200,40 245,180" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><polygon points="160,170 200,55 240,170" fill="#f0e6c5" stroke="#3e3120" stroke-width="1.5"/><g fill="#f0e6c5" stroke="#3e3120" stroke-width="0.8"><polygon points="160,170 165,162 170,170"/><polygon points="170,170 175,162 180,170"/><polygon points="180,170 185,162 190,170"/><polygon points="190,170 193,164 196,170"/><polygon points="204,170 207,164 210,170"/><polygon points="210,170 215,162 220,170"/><polygon points="220,170 225,162 230,170"/><polygon points="230,170 235,162 240,170"/></g><path d="M188,148 L188,108 Q200,90 212,108 L212,148 Z" fill="#cfd9e3" stroke="#3e3120"/><line x1="200" y1="100" x2="200" y2="148" stroke="#3e3120"/><line x1="188" y1="128" x2="212" y2="128" stroke="#3e3120"/><g stroke="#c8b896" stroke-width="1"><line x1="80" y1="170" x2="80" y2="252"/><line x1="100" y1="170" x2="100" y2="252"/><line x1="120" y1="170" x2="120" y2="252"/><line x1="140" y1="170" x2="140" y2="252"/><line x1="260" y1="170" x2="260" y2="252"/><line x1="280" y1="170" x2="280" y2="252"/><line x1="300" y1="170" x2="300" y2="252"/><line x1="320" y1="170" x2="320" y2="252"/></g><path d="M85,242 L85,212 Q100,195 115,212 L115,242 Z" fill="#cfd9e3" stroke="#3e3120"/><path d="M285,242 L285,212 Q300,195 315,212 L315,242 Z" fill="#cfd9e3" stroke="#3e3120"/><path d="M180,252 L180,205 Q200,188 220,205 L220,252 Z" fill="#5b3a22" stroke="#3e3120"/></svg>'
  },
  {
    id: 'italianate',
    name: 'Italianate',
    period: '1840–1885',
    region: 'Northeast and Midwest cities; California gold-rush towns',
    summary: 'A loose riff on the Italian villa, popular in growing Victorian-era cities. Tall and boxy with a low-pitched roof, deep eaves carried on chunky decorative brackets, tall narrow windows, and often a small cupola perched on top.',
    keyFeatures: [
      'Two or three stories, boxy and tall',
      'Low-pitched or nearly flat roof',
      'Wide overhanging eaves carried by paired decorative brackets',
      'Tall narrow windows, often with rounded or segmental arched tops',
      'Elaborate hood moldings or pediments over the windows',
      'Square cupola or belvedere centered on the roof'
    ],
    elements: [
      'A low-pitched roof with widely overhanging eaves carried on paired wooden brackets',
      'A small square cupola or belvedere centered on a low roof',
      'Tall narrow round-arched windows with carved hood moldings'
    ],
    tags: ['italian-villa', 'bracketed-eaves', 'cupola', 'tall-windows'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="80" y="100" width="240" height="155" fill="#d4b88e" stroke="#3e3120" stroke-width="1.5"/><polygon points="80,100 200,82 320,100" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="60" y="92" width="280" height="14" fill="#c89a64" stroke="#3e3120" stroke-width="1.5"/><g fill="#c89a64" stroke="#3e3120"><polygon points="76,106 76,118 84,118"/><polygon points="116,106 116,118 124,118"/><polygon points="156,106 156,118 164,118"/><polygon points="196,106 196,118 204,118"/><polygon points="236,106 236,118 244,118"/><polygon points="276,106 276,118 284,118"/><polygon points="316,106 316,118 324,118"/></g><rect x="180" y="60" width="40" height="22" fill="#d4b88e" stroke="#3e3120"/><polygon points="176,60 200,42 224,60" fill="#5a4530" stroke="#3e3120"/><rect x="190" y="66" width="6" height="14" fill="#cfd9e3" stroke="#3e3120"/><rect x="204" y="66" width="6" height="14" fill="#cfd9e3" stroke="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><path d="M100,170 L100,135 Q113,118 126,135 L126,170 Z"/><path d="M180,170 L180,135 Q193,118 206,135 L206,170 Z"/><path d="M260,170 L260,135 Q273,118 286,135 L286,170 Z"/></g><g fill="none" stroke="#3e3120" stroke-width="1.2"><path d="M96,135 Q113,114 130,135"/><path d="M176,135 Q193,114 210,135"/><path d="M256,135 Q273,114 290,135"/></g><g fill="#cfd9e3" stroke="#3e3120"><path d="M100,240 L100,200 Q113,188 126,200 L126,240 Z"/><path d="M260,240 L260,200 Q273,188 286,200 L286,240 Z"/></g><path d="M180,255 L180,200 Q200,182 220,200 L220,255 Z" fill="#5b3a22" stroke="#3e3120"/></svg>'
  },
  {
    id: 'second-empire',
    name: 'Second Empire',
    period: '1855–1885',
    region: 'Northeast and Midwest cities; East Coast resort towns',
    summary: 'A French import named for Napoleon III\'s reign. Defined entirely by one feature: the mansard roof — steep slanted sides that effectively make the attic a full extra floor, often punctuated by hooded dormers and crowned with iron cresting.',
    keyFeatures: [
      'Mansard roof: steep, near-vertical lower slope with a flat or shallow upper deck',
      'Dormer windows piercing the mansard, often with hood moldings',
      'Iron cresting along the flat top of the roof',
      'Decorative bracketed cornice at the base of the mansard',
      'Tall, elaborate first-story windows',
      'Often a central tower projecting above the mansard line'
    ],
    elements: [
      'A mansard roof — steep slanted sides covered in patterned slate, flat on top',
      'Hooded dormer windows projecting from a steep mansard slope',
      'Iron cresting running along the flat ridge of the roof'
    ],
    tags: ['mansard', 'french', 'victorian-era', 'dormered'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="80" y="135" width="240" height="120" fill="#c98e6e" stroke="#3e3120" stroke-width="1.5"/><polygon points="70,135 100,75 300,75 330,135" fill="#3a2c1f" stroke="#3e3120" stroke-width="1.5"/><line x1="73" y1="115" x2="327" y2="115" stroke="#5a4530"/><line x1="76" y1="95" x2="324" y2="95" stroke="#5a4530"/><rect x="100" y="73" width="200" height="4" fill="#2a2014"/><g stroke="#3e3120"><line x1="110" y1="73" x2="110" y2="65"/><line x1="125" y1="73" x2="125" y2="65"/><line x1="140" y1="73" x2="140" y2="65"/><line x1="155" y1="73" x2="155" y2="65"/><line x1="170" y1="73" x2="170" y2="65"/><line x1="185" y1="73" x2="185" y2="65"/><line x1="200" y1="73" x2="200" y2="63"/><line x1="215" y1="73" x2="215" y2="65"/><line x1="230" y1="73" x2="230" y2="65"/><line x1="245" y1="73" x2="245" y2="65"/><line x1="260" y1="73" x2="260" y2="65"/><line x1="275" y1="73" x2="275" y2="65"/><line x1="290" y1="73" x2="290" y2="65"/></g><rect x="118" y="100" width="38" height="35" fill="#c98e6e" stroke="#3e3120"/><polygon points="113,100 137,82 161,100" fill="#5a4530" stroke="#3e3120"/><rect x="124" y="108" width="26" height="22" fill="#cfd9e3" stroke="#3e3120"/><rect x="181" y="100" width="38" height="35" fill="#c98e6e" stroke="#3e3120"/><polygon points="176,100 200,82 224,100" fill="#5a4530" stroke="#3e3120"/><rect x="187" y="108" width="26" height="22" fill="#cfd9e3" stroke="#3e3120"/><rect x="244" y="100" width="38" height="35" fill="#c98e6e" stroke="#3e3120"/><polygon points="239,100 263,82 287,100" fill="#5a4530" stroke="#3e3120"/><rect x="250" y="108" width="26" height="22" fill="#cfd9e3" stroke="#3e3120"/><rect x="65" y="130" width="270" height="10" fill="#e8c4a8" stroke="#3e3120"/><g fill="#e8c4a8" stroke="#3e3120"><polygon points="80,140 80,150 88,150"/><polygon points="130,140 130,150 138,150"/><polygon points="180,140 180,150 188,150"/><polygon points="230,140 230,150 238,150"/><polygon points="280,140 280,150 288,150"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="105" y="160" width="32" height="42"/><rect x="263" y="160" width="32" height="42"/><rect x="105" y="215" width="32" height="38"/><rect x="263" y="215" width="32" height="38"/><rect x="184" y="160" width="32" height="42"/></g><rect x="184" y="210" width="32" height="45" fill="#3e2a18" stroke="#3e3120"/></svg>'
  },
  {
    id: 'queen-anne',
    name: 'Queen Anne',
    period: '1880–1910',
    region: 'Nationwide; the dominant Victorian-era house',
    summary: 'The most exuberant Victorian style — a deliberate rejection of symmetry. Asymmetric massing, a corner turret, a deep wraparound porch, and a riot of textures: clapboard, scalloped shingles, spindlework, and gables piling on top of each other.',
    keyFeatures: [
      'Asymmetric facade and irregular roofline',
      'Round or octagonal corner tower / turret with a conical roof',
      'Deep wraparound porch with turned spindles and decorative brackets',
      'Multiple wall textures: clapboard below, patterned shingles in the gables',
      'Dominant front-facing gable with decorative trim',
      'Bay windows and projecting bays'
    ],
    elements: [
      'A round corner turret topped with a conical roof and finial spike',
      'A deep wraparound porch with turned spindlework posts and trim',
      'Patterned scalloped shingles filling the front-facing gable'
    ],
    tags: ['victorian', 'asymmetric', 'turret', 'wraparound-porch'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="150" y="120" width="190" height="135" fill="#e6c2a6" stroke="#3e3120" stroke-width="1.5"/><polygon points="148,120 195,90 242,120" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><polygon points="240,120 295,55 350,120" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><polygon points="248,120 295,75 342,120" fill="#d4b08c" stroke="#3e3120" stroke-width="1.5"/><g fill="none" stroke="#3e3120" stroke-width="0.7"><path d="M260,100 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0"/><path d="M260,108 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0"/></g><path d="M55 255 L55 145 Q55 100 100 100 Q145 100 145 145 L145 255 Z" fill="#e6c2a6" stroke="#3e3120" stroke-width="1.5"/><polygon points="47,100 100,30 153,100" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><line x1="100" y1="30" x2="100" y2="14" stroke="#3e3120" stroke-width="2"/><circle cx="100" cy="13" r="3" fill="#3e3120"/><rect x="76" y="155" width="16" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="108" y="155" width="16" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="50" y="220" width="295" height="35" fill="#d4b08c" stroke="#3e3120" stroke-width="1.5"/><g fill="#a37a55" stroke="#3e3120"><rect x="62" y="222" width="5" height="33"/><rect x="148" y="222" width="5" height="33"/><rect x="204" y="222" width="5" height="33"/><rect x="260" y="222" width="5" height="33"/><rect x="316" y="222" width="5" height="33"/></g><line x1="55" y1="232" x2="345" y2="232" stroke="#a37a55"/><rect x="170" y="135" width="32" height="38" fill="#cfd9e3" stroke="#3e3120"/><rect x="225" y="135" width="32" height="38" fill="#cfd9e3" stroke="#3e3120"/><rect x="170" y="190" width="32" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="240" y="190" width="32" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="296" y="190" width="32" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="208" y="225" width="22" height="30" fill="#3e2a18" stroke="#3e3120"/></svg>'
  },
  {
    id: 'foursquare',
    name: 'American Foursquare',
    period: '1895–1930',
    region: 'Nationwide; especially Midwestern streetcar suburbs',
    summary: 'A reaction to Victorian fussiness — boxy, plain, and economical to build. Two-and-a-half stories, square in plan, sold by the thousands through Sears and other mail-order catalogs. The plan literally has four roughly equal rooms per floor.',
    keyFeatures: [
      'Boxy, nearly cubic two-and-a-half-story massing',
      'Hipped (pyramid-shaped) roof rising to a single point',
      'Single large hipped or gabled dormer centered on the front roof slope',
      'Full-width front porch with simple square columns',
      'Symmetric or near-symmetric facade',
      'Four roughly equal-sized rooms on each floor (the namesake plan)'
    ],
    elements: [
      'A boxy, nearly cubic 2½-story house with a pyramidal hipped roof',
      'A single large dormer centered on the front roof slope',
      'A full-width front porch with simple square columns'
    ],
    tags: ['boxy', 'symmetric', 'hipped-roof', 'mail-order'],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="80" y="115" width="240" height="140" fill="#dcc89c" stroke="#3e3120" stroke-width="1.5"/><polygon points="70,115 200,55 330,115" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><rect x="170" y="80" width="60" height="35" fill="#dcc89c" stroke="#3e3120" stroke-width="1.5"/><polygon points="165,80 200,60 235,80" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="180" y="88" width="40" height="22" fill="#cfd9e3" stroke="#3e3120"/><line x1="200" y1="88" x2="200" y2="110" stroke="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="105" y="135" width="38" height="48"/><rect x="257" y="135" width="38" height="48"/></g><g stroke="#3e3120"><line x1="105" y1="160" x2="143" y2="160"/><line x1="124" y1="135" x2="124" y2="183"/><line x1="257" y1="160" x2="295" y2="160"/><line x1="276" y1="135" x2="276" y2="183"/></g><rect x="60" y="200" width="280" height="55" fill="#c4a878" stroke="#3e3120" stroke-width="1.5"/><rect x="58" y="195" width="284" height="8" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><g fill="#dcc89c" stroke="#3e3120"><rect x="68" y="203" width="14" height="52"/><rect x="156" y="203" width="14" height="52"/><rect x="230" y="203" width="14" height="52"/><rect x="318" y="203" width="14" height="52"/></g><rect x="184" y="218" width="32" height="37" fill="#3e2a18" stroke="#3e3120"/><rect x="100" y="220" width="40" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="260" y="220" width="40" height="32" fill="#cfd9e3" stroke="#3e3120"/></svg>'
  }
];

// Helper: look up a style by id.
window.STYLE_BY_ID = function (id) {
  return window.STYLES.find(function (s) { return s.id === id; });
};
