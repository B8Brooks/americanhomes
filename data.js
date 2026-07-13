// American residential architectural styles.
// Each entry: id, name, period, region, summary, keyFeatures, elements, tags,
// lookalikes, svg (a single fallback illustration), and optional examples[].
// `elements` are the prompts used by the Element Quiz; the strongest, most
// diagnostic features should be at the top.
// `lookalikes` items: { id, tell } — styles this one is commonly confused
//   with, and the quickest way to tell them apart.
// `examples[]` items: { kind: 'svg' | 'photo' | 'wiki', ... }
//   - kind 'svg': src is an inline SVG string.
//   - kind 'photo': src is a URL (rendered into <img>); credit is
//     { source: 'Wikimedia Commons', filename, page } for attribution.
//   - kind 'wiki': article is an English Wikipedia article title; the app
//     resolves the article's lead image at runtime via the CORS-enabled
//     REST summary API and hides the example if it can't be loaded.

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
    lookalikes: [
      { id: 'minimal-traditional', tell: 'Both are small cottages — but a Cape has a steep roof, a big central chimney, and (in revivals) dormers; Minimal Traditional has a shallower roof and almost no eaves.' },
      { id: 'colonial-revival', tell: 'A full two-story symmetric facade means Colonial Revival; the Cape stays at 1½ stories with upstairs windows tucked into the roof.' }
    ],
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
    lookalikes: [
      { id: 'federal', tell: 'Federal is Georgian gone delicate: an elliptical fanlight over the door, thinner muntins, flatter trim. Georgian favors a bold pedimented entrance and heavier detail.' },
      { id: 'colonial-revival', tell: 'Colonial Revival copies have machine-cut precision, larger panes, and added porticos or wings; true Georgians predate 1780 and feel smaller and heavier-handed.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="65" y="92" width="270" height="160" fill="#a26a4a" stroke="#3e3120" stroke-width="1.5"/><polygon points="55,92 145,55 255,55 345,92" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="80" y="35" width="16" height="36" fill="#7a4a35" stroke="#3e3120"/><rect x="304" y="35" width="16" height="36" fill="#7a4a35" stroke="#3e3120"/><line x1="65" y1="170" x2="335" y2="170" stroke="#3e3120" stroke-width="2"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="82" y="110" width="28" height="42"/><rect x="138" y="110" width="28" height="42"/><rect x="186" y="110" width="28" height="42"/><rect x="234" y="110" width="28" height="42"/><rect x="290" y="110" width="28" height="42"/></g><g stroke="#3e3120"><line x1="96" y1="110" x2="96" y2="152"/><line x1="82" y1="131" x2="110" y2="131"/><line x1="152" y1="110" x2="152" y2="152"/><line x1="138" y1="131" x2="166" y2="131"/><line x1="200" y1="110" x2="200" y2="152"/><line x1="186" y1="131" x2="214" y2="131"/><line x1="248" y1="110" x2="248" y2="152"/><line x1="234" y1="131" x2="262" y2="131"/><line x1="304" y1="110" x2="304" y2="152"/><line x1="290" y1="131" x2="318" y2="131"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="82" y="190" width="28" height="44"/><rect x="138" y="190" width="28" height="44"/><rect x="234" y="190" width="28" height="44"/><rect x="290" y="190" width="28" height="44"/></g><g stroke="#3e3120"><line x1="96" y1="190" x2="96" y2="234"/><line x1="82" y1="212" x2="110" y2="212"/><line x1="152" y1="190" x2="152" y2="234"/><line x1="138" y1="212" x2="166" y2="212"/><line x1="248" y1="190" x2="248" y2="234"/><line x1="234" y1="212" x2="262" y2="212"/><line x1="304" y1="190" x2="304" y2="234"/><line x1="290" y1="212" x2="318" y2="212"/></g><polygon points="182,178 200,162 218,178" fill="#efe6d4" stroke="#3e3120"/><rect x="182" y="178" width="36" height="6" fill="#efe6d4" stroke="#3e3120"/><rect x="188" y="184" width="24" height="50" fill="#3e2a18" stroke="#3e3120"/><line x1="200" y1="184" x2="200" y2="234" stroke="#5b3a22"/></svg>'
  },
  {
    id: 'federal',
    name: 'Federal',
    period: '1780–1820',
    region: 'Eastern seaboard port cities — Boston, Salem, Philadelphia, Charleston',
    summary: 'The refined successor to Georgian, favored by the merchant elite of the new republic. The box stays, but everything lightens: delicate ornament, slender proportions, and the giveaway feature — an elliptical fanlight spreading over the front door, often with flanking sidelights.',
    keyFeatures: [
      'Two or three stories, symmetric box like Georgian but lighter in feel',
      'Semicircular or elliptical fanlight over the front door',
      'Sidelights flanking the door, often within an arched surround',
      'Low-pitched hip or side-gable roof, sometimes with a balustrade',
      'Delicate thin muntins in tall double-hung windows',
      'Flat stone lintels or splayed keystones over windows; restrained trim'
    ],
    elements: [
      'An elliptical fanlight spreading over the front door and its sidelights',
      'Tall double-hung windows with delicate thin muntins under flat stone lintels',
      'A roofline balustrade crowning a low hipped roof'
    ],
    tags: ['symmetric', 'classical', 'fanlight', 'brick', 'colonial-era'],
    lookalikes: [
      { id: 'georgian', tell: 'Georgian is heavier — bold pediments and thick trim. Federal is delicate: an elliptical fanlight, slimmer muntins, and flatter, more restrained ornament.' },
      { id: 'colonial-revival', tell: 'Colonial Revival copies Federal details but at larger scale with machine-perfect trim, and usually adds a projecting portico or porch.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><polygon points="58,96 112,60 288,60 342,96" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="92" y="36" width="14" height="34" fill="#7a4a35" stroke="#3e3120"/><rect x="294" y="36" width="14" height="34" fill="#7a4a35" stroke="#3e3120"/><g stroke="#3e3120"><line x1="120" y1="60" x2="130" y2="52"/><line x1="150" y1="60" x2="160" y2="52"/><line x1="180" y1="60" x2="190" y2="52"/><line x1="210" y1="60" x2="220" y2="52"/><line x1="240" y1="60" x2="250" y2="52"/><line x1="270" y1="60" x2="280" y2="52"/></g><rect x="62" y="92" width="276" height="8" fill="#f2ead8" stroke="#3e3120"/><rect x="70" y="100" width="260" height="152" fill="#b5714e" stroke="#3e3120" stroke-width="1.5"/><line x1="70" y1="178" x2="330" y2="178" stroke="#3e3120" stroke-width="1.5"/><g fill="#f2ead8" stroke="#3e3120"><rect x="80" y="110" width="30" height="5"/><rect x="134" y="110" width="30" height="5"/><rect x="185" y="110" width="30" height="5"/><rect x="236" y="110" width="30" height="5"/><rect x="290" y="110" width="30" height="5"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="82" y="115" width="26" height="42"/><rect x="136" y="115" width="26" height="42"/><rect x="187" y="115" width="26" height="42"/><rect x="238" y="115" width="26" height="42"/><rect x="292" y="115" width="26" height="42"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="95" y1="115" x2="95" y2="157"/><line x1="82" y1="136" x2="108" y2="136"/><line x1="149" y1="115" x2="149" y2="157"/><line x1="136" y1="136" x2="162" y2="136"/><line x1="200" y1="115" x2="200" y2="157"/><line x1="187" y1="136" x2="213" y2="136"/><line x1="251" y1="115" x2="251" y2="157"/><line x1="238" y1="136" x2="264" y2="136"/><line x1="305" y1="115" x2="305" y2="157"/><line x1="292" y1="136" x2="318" y2="136"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="82" y="192" width="26" height="46"/><rect x="136" y="192" width="26" height="46"/><rect x="238" y="192" width="26" height="46"/><rect x="292" y="192" width="26" height="46"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="95" y1="192" x2="95" y2="238"/><line x1="82" y1="215" x2="108" y2="215"/><line x1="149" y1="192" x2="149" y2="238"/><line x1="136" y1="215" x2="162" y2="215"/><line x1="251" y1="192" x2="251" y2="238"/><line x1="238" y1="215" x2="264" y2="215"/><line x1="305" y1="192" x2="305" y2="238"/><line x1="292" y1="215" x2="318" y2="215"/></g><path d="M178,192 A22,16 0 0 1 222,192 Z" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.8"><line x1="200" y1="176" x2="200" y2="192"/><line x1="187" y1="181" x2="200" y2="192"/><line x1="213" y1="181" x2="200" y2="192"/></g><rect x="178" y="192" width="6" height="60" fill="#cfd9e3" stroke="#3e3120"/><rect x="216" y="192" width="6" height="60" fill="#cfd9e3" stroke="#3e3120"/><rect x="186" y="192" width="28" height="60" fill="#3e2a18" stroke="#3e3120"/><line x1="200" y1="192" x2="200" y2="252" stroke="#5b3a22"/></svg>'
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
    lookalikes: [
      { id: 'colonial-revival', tell: 'A Colonial Revival portico is an accent on a colonial box; Greek Revival makes the whole house the temple — full-height columns, heavy entablature, gable turned to the street.' },
      { id: 'federal', tell: 'Federal ornament is flat and delicate with fanlights; Greek Revival goes monumental — full pediments, chunky columns, and a wide plain frieze band.' }
    ],
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
    lookalikes: [
      { id: 'tudor-revival', tell: 'Tudor is later (1890s–1930s) and heavier: half-timbering and brick with casement windows. Gothic Revival is a wood cottage with pointed-arch windows and lacy vergeboards.' },
      { id: 'folk-victorian', tell: 'Folk Victorian ornament clusters on the porch of a plain house; Gothic Revival\'s drama is in the steep gables and pointed windows themselves.' }
    ],
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
    lookalikes: [
      { id: 'second-empire', tell: 'Same bracketed cornices and window hoods — check the roof: a mansard means Second Empire; a low-pitched roof (often with a cupola) means Italianate.' },
      { id: 'queen-anne', tell: 'Queen Anne is asymmetric with turrets and mixed textures; Italianate is a tall, mostly symmetric box under bracketed eaves.' }
    ],
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
    lookalikes: [
      { id: 'italianate', tell: 'Below the roofline they can be twins — but only Second Empire wears the mansard, turning the attic into a full slate-clad story.' },
      { id: 'queen-anne', tell: 'Queen Anne towers wear conical or pyramidal caps on an asymmetric body; Second Empire is boxier, with the mansard itself as the defining feature.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="80" y="135" width="240" height="120" fill="#c98e6e" stroke="#3e3120" stroke-width="1.5"/><polygon points="70,135 100,75 300,75 330,135" fill="#3a2c1f" stroke="#3e3120" stroke-width="1.5"/><line x1="73" y1="115" x2="327" y2="115" stroke="#5a4530"/><line x1="76" y1="95" x2="324" y2="95" stroke="#5a4530"/><rect x="100" y="73" width="200" height="4" fill="#2a2014"/><g stroke="#3e3120"><line x1="110" y1="73" x2="110" y2="65"/><line x1="125" y1="73" x2="125" y2="65"/><line x1="140" y1="73" x2="140" y2="65"/><line x1="155" y1="73" x2="155" y2="65"/><line x1="170" y1="73" x2="170" y2="65"/><line x1="185" y1="73" x2="185" y2="65"/><line x1="200" y1="73" x2="200" y2="63"/><line x1="215" y1="73" x2="215" y2="65"/><line x1="230" y1="73" x2="230" y2="65"/><line x1="245" y1="73" x2="245" y2="65"/><line x1="260" y1="73" x2="260" y2="65"/><line x1="275" y1="73" x2="275" y2="65"/><line x1="290" y1="73" x2="290" y2="65"/></g><rect x="118" y="100" width="38" height="35" fill="#c98e6e" stroke="#3e3120"/><polygon points="113,100 137,82 161,100" fill="#5a4530" stroke="#3e3120"/><rect x="124" y="108" width="26" height="22" fill="#cfd9e3" stroke="#3e3120"/><rect x="181" y="100" width="38" height="35" fill="#c98e6e" stroke="#3e3120"/><polygon points="176,100 200,82 224,100" fill="#5a4530" stroke="#3e3120"/><rect x="187" y="108" width="26" height="22" fill="#cfd9e3" stroke="#3e3120"/><rect x="244" y="100" width="38" height="35" fill="#c98e6e" stroke="#3e3120"/><polygon points="239,100 263,82 287,100" fill="#5a4530" stroke="#3e3120"/><rect x="250" y="108" width="26" height="22" fill="#cfd9e3" stroke="#3e3120"/><rect x="65" y="130" width="270" height="10" fill="#e8c4a8" stroke="#3e3120"/><g fill="#e8c4a8" stroke="#3e3120"><polygon points="80,140 80,150 88,150"/><polygon points="130,140 130,150 138,150"/><polygon points="180,140 180,150 188,150"/><polygon points="230,140 230,150 238,150"/><polygon points="280,140 280,150 288,150"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="105" y="160" width="32" height="42"/><rect x="263" y="160" width="32" height="42"/><rect x="105" y="215" width="32" height="38"/><rect x="263" y="215" width="32" height="38"/><rect x="184" y="160" width="32" height="42"/></g><rect x="184" y="210" width="32" height="45" fill="#3e2a18" stroke="#3e3120"/></svg>'
  },
  {
    id: 'folk-victorian',
    name: 'Folk Victorian',
    period: '1870–1910',
    region: 'Small towns and farms nationwide, wherever the railroad delivered trim',
    summary: 'An ordinary folk farmhouse dressed up in store-bought Victorian lace. Railroads made machine-cut spindles and brackets cheap, so plain gable-front-and-wing houses got fancy porches. Underneath the trim, the house itself is simple and symmetrically boxy — that\'s the tell.',
    keyFeatures: [
      'Simple folk house form: L-shaped gable-front-and-wing, or plain box',
      'Porch with turned spindlework posts and lacy flat-cut brackets',
      'Ornamental trim applied to an otherwise plain house',
      'Cornice-line brackets in imitation of Italianate',
      'Symmetric window placement, unlike true Queen Anne',
      'Clapboard siding with one wall texture, not many'
    ],
    elements: [
      'A plain L-shaped farmhouse wearing a spindlework porch',
      'Machine-cut lacy brackets on the porch of a simple gable-and-wing house'
    ],
    tags: ['porch', 'spindlework', 'farmhouse', 'victorian', 'gabled'],
    lookalikes: [
      { id: 'queen-anne', tell: 'Queen Anne has complex massing — turrets, bays, mixed shingle textures. Folk Victorian is a simple box or L-shape wearing applied trim; strip the porch lace and a plain farmhouse remains.' },
      { id: 'gothic-revival', tell: 'Gothic Revival has steep gables, pointed-arch windows, and vergeboards along the roof edge. Folk Victorian keeps ordinary windows and concentrates its ornament on the porch.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="66" y="118" width="112" height="134" fill="#f7f2e0" stroke="#3e3120" stroke-width="1.5"/><polygon points="56,118 122,52 188,118" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><line x1="122" y1="52" x2="122" y2="42" stroke="#3e3120" stroke-width="1.5"/><circle cx="122" cy="40" r="2.5" fill="#3e3120"/><g fill="#f7f2e0" stroke="#3e3120" stroke-width="0.8"><polygon points="74,118 80,109 86,118"/><polygon points="88,118 94,109 100,118"/><polygon points="102,118 108,109 114,118"/><polygon points="130,118 136,109 142,118"/><polygon points="144,118 150,109 156,118"/><polygon points="158,118 164,109 170,118"/></g><rect x="106" y="78" width="30" height="38" fill="#cfd9e3" stroke="#3e3120"/><line x1="121" y1="78" x2="121" y2="116" stroke="#3e3120" stroke-width="0.8"/><line x1="106" y1="97" x2="136" y2="97" stroke="#3e3120" stroke-width="0.8"/><rect x="88" y="140" width="32" height="44" fill="#cfd9e3" stroke="#3e3120"/><line x1="104" y1="140" x2="104" y2="184" stroke="#3e3120" stroke-width="0.8"/><line x1="88" y1="162" x2="120" y2="162" stroke="#3e3120" stroke-width="0.8"/><rect x="178" y="148" width="156" height="104" fill="#f7f2e0" stroke="#3e3120" stroke-width="1.5"/><polygon points="172,148 202,120 318,120 340,148" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="174" y="182" width="164" height="9" fill="#5a4530" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.9"><line x1="188" y1="191" x2="188" y2="198"/><line x1="196" y1="191" x2="196" y2="198"/><line x1="204" y1="191" x2="204" y2="198"/><line x1="212" y1="191" x2="212" y2="198"/><line x1="228" y1="191" x2="228" y2="198"/><line x1="236" y1="191" x2="236" y2="198"/><line x1="244" y1="191" x2="244" y2="198"/><line x1="252" y1="191" x2="252" y2="198"/><line x1="268" y1="191" x2="268" y2="198"/><line x1="276" y1="191" x2="276" y2="198"/><line x1="284" y1="191" x2="284" y2="198"/><line x1="292" y1="191" x2="292" y2="198"/><line x1="308" y1="191" x2="308" y2="198"/><line x1="316" y1="191" x2="316" y2="198"/><line x1="324" y1="191" x2="324" y2="198"/></g><g fill="#fdf8ec" stroke="#3e3120"><rect x="180" y="191" width="5" height="55"/><rect x="220" y="191" width="5" height="55"/><rect x="260" y="191" width="5" height="55"/><rect x="300" y="191" width="5" height="55"/><rect x="330" y="191" width="5" height="55"/></g><g fill="#fdf8ec" stroke="#3e3120" stroke-width="0.8"><circle cx="182.5" cy="212" r="3"/><circle cx="222.5" cy="212" r="3"/><circle cx="262.5" cy="212" r="3"/><circle cx="302.5" cy="212" r="3"/><circle cx="332.5" cy="212" r="3"/></g><g fill="#fdf8ec" stroke="#3e3120" stroke-width="0.8"><polygon points="185,191 185,199 193,191"/><polygon points="220,191 220,199 212,191"/><polygon points="225,191 225,199 233,191"/><polygon points="260,191 260,199 252,191"/><polygon points="265,191 265,199 273,191"/><polygon points="300,191 300,199 292,191"/></g><rect x="174" y="243" width="164" height="9" fill="#c4a878" stroke="#3e3120"/><rect x="240" y="200" width="26" height="43" fill="#5b3a22" stroke="#3e3120"/><rect x="196" y="202" width="30" height="38" fill="#cfd9e3" stroke="#3e3120"/><line x1="211" y1="202" x2="211" y2="240" stroke="#3e3120" stroke-width="0.8"/><rect x="288" y="202" width="30" height="38" fill="#cfd9e3" stroke="#3e3120"/><line x1="303" y1="202" x2="303" y2="240" stroke="#3e3120" stroke-width="0.8"/></svg>'
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
    lookalikes: [
      { id: 'folk-victorian', tell: 'Folk Victorian is a simple farmhouse wearing store-bought trim; real Queen Anne has irregular massing — turrets, bays, and several wall textures at once.' },
      { id: 'shingle', tell: 'Shingle Style trades Queen Anne\'s riot of ornament for one continuous shingle skin and long sweeping rooflines.' },
      { id: 'second-empire', tell: 'If the roof is a slate-sided mansard box, it\'s Second Empire; Queen Anne rooflines are a jumble of steep gables and a turret cone.' }
    ],
    examples: [
      {
        kind: 'svg',
        alt: 'Illustration of a Queen Anne house with corner turret, wraparound porch, and patterned shingles',
        src: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="150" y="120" width="190" height="135" fill="#e6c2a6" stroke="#3e3120" stroke-width="1.5"/><polygon points="148,120 195,90 242,120" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><polygon points="240,120 295,55 350,120" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><polygon points="248,120 295,75 342,120" fill="#d4b08c" stroke="#3e3120" stroke-width="1.5"/><g fill="none" stroke="#3e3120" stroke-width="0.7"><path d="M260,100 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0"/><path d="M260,108 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0 q5 -5 10 0"/></g><path d="M55 255 L55 145 Q55 100 100 100 Q145 100 145 145 L145 255 Z" fill="#e6c2a6" stroke="#3e3120" stroke-width="1.5"/><polygon points="47,100 100,30 153,100" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><line x1="100" y1="30" x2="100" y2="14" stroke="#3e3120" stroke-width="2"/><circle cx="100" cy="13" r="3" fill="#3e3120"/><rect x="76" y="155" width="16" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="108" y="155" width="16" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="50" y="220" width="295" height="35" fill="#d4b08c" stroke="#3e3120" stroke-width="1.5"/><g fill="#a37a55" stroke="#3e3120"><rect x="62" y="222" width="5" height="33"/><rect x="148" y="222" width="5" height="33"/><rect x="204" y="222" width="5" height="33"/><rect x="260" y="222" width="5" height="33"/><rect x="316" y="222" width="5" height="33"/></g><line x1="55" y1="232" x2="345" y2="232" stroke="#a37a55"/><rect x="170" y="135" width="32" height="38" fill="#cfd9e3" stroke="#3e3120"/><rect x="225" y="135" width="32" height="38" fill="#cfd9e3" stroke="#3e3120"/><rect x="170" y="190" width="32" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="240" y="190" width="32" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="296" y="190" width="32" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="208" y="225" width="22" height="30" fill="#3e2a18" stroke="#3e3120"/></svg>'
      },
      {
        kind: 'svg',
        alt: 'Vernacular Queen Anne with cross gable, projecting bay window, and full-width porch',
        src: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="90" y="115" width="220" height="140" fill="#f0d878" stroke="#3e3120" stroke-width="1.5"/><polygon points="80,115 160,80 320,80 310,115" fill="#3a5a3a" stroke="#3e3120" stroke-width="1.5"/><polygon points="150,125 200,55 250,125" fill="#3a5a3a" stroke="#3e3120" stroke-width="1.5"/><polygon points="160,115 200,68 240,115" fill="#f0d878" stroke="#3e3120" stroke-width="1.5"/><g fill="none" stroke="#a18540" stroke-width="0.7"><path d="M165,98 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0"/><path d="M168,90 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0 q5 -4 10 0"/></g><rect x="190" y="100" width="20" height="20" fill="#cfd9e3" stroke="#3e3120"/><rect x="115" y="130" width="35" height="42" fill="#cfd9e3" stroke="#3e3120"/><rect x="250" y="130" width="35" height="42" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120"><line x1="132" y1="130" x2="132" y2="172"/><line x1="115" y1="151" x2="150" y2="151"/><line x1="267" y1="130" x2="267" y2="172"/><line x1="250" y1="151" x2="285" y2="151"/></g><polygon points="135,180 135,220 145,230 175,230 185,220 185,180" fill="#f0d878" stroke="#3e3120" stroke-width="1.5"/><polygon points="135,180 145,170 175,170 185,180" fill="#3a5a3a" stroke="#3e3120" stroke-width="1.5"/><rect x="145" y="190" width="35" height="32" fill="#cfd9e3" stroke="#3e3120"/><line x1="158" y1="190" x2="158" y2="222" stroke="#3e3120"/><line x1="172" y1="190" x2="172" y2="222" stroke="#3e3120"/><rect x="70" y="220" width="260" height="35" fill="#e6c2a6" stroke="#3e3120" stroke-width="1.5"/><line x1="70" y1="220" x2="330" y2="220" stroke="#3e3120" stroke-width="2"/><g fill="#a37a55" stroke="#3e3120"><rect x="78" y="222" width="5" height="33"/><rect x="218" y="222" width="5" height="33"/><rect x="262" y="222" width="5" height="33"/><rect x="318" y="222" width="5" height="33"/></g><rect x="240" y="225" width="22" height="30" fill="#3e2a18" stroke="#3e3120"/><rect x="288" y="225" width="22" height="30" fill="#cfd9e3" stroke="#3e3120"/></svg>'
      },
      {
        kind: 'photo',
        alt: 'Carson Mansion, Eureka, California — one of the most famous Queen Anne houses in the United States',
        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carson_Mansion_Eureka_California.jpg?width=900',
        credit: {
          source: 'Wikimedia Commons',
          filename: 'Carson Mansion Eureka California.jpg',
          page: 'https://commons.wikimedia.org/wiki/File:Carson_Mansion_Eureka_California.jpg'
        }
      },
      {
        kind: 'photo',
        alt: 'Queen Anne House, Los Angeles — listed on the National Register of Historic Places',
        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Queen_Anne_House_Los_Angeles.JPG?width=900',
        credit: {
          source: 'Wikimedia Commons',
          filename: 'Queen Anne House Los Angeles.JPG',
          page: 'https://commons.wikimedia.org/wiki/File:Queen_Anne_House_Los_Angeles.JPG'
        }
      },
      {
        kind: 'photo',
        alt: 'The Painted Ladies — a row of Queen Anne Victorian houses on Steiner Street facing Alamo Square, San Francisco',
        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Painted_Ladies%2C_Alamo_Square.jpg?width=900',
        credit: {
          source: 'Wikimedia Commons',
          filename: 'Painted Ladies, Alamo Square.jpg',
          page: 'https://commons.wikimedia.org/wiki/File:Painted_Ladies,_Alamo_Square.jpg'
        }
      }
    ]
  },
  {
    id: 'shingle',
    name: 'Shingle Style',
    period: '1880–1900',
    region: 'New England coast — Newport, the Hamptons, coastal Maine',
    summary: 'The seaside cousin of Queen Anne, favored for grand "cottages" of the resort era. Instead of piling on trim, it strips it away: the whole house — walls, gables, sometimes even porch posts — wears one continuous skin of wood shingles over a rambling, ground-hugging form.',
    keyFeatures: [
      'Uniform wood shingle cladding wrapping walls and roof surfaces',
      'Complex rambling form under long, sweeping rooflines',
      'Minimal applied ornament — the shingle skin is the decoration',
      'Roof slopes that flow down over porches without a break',
      'Eyebrow dormers and small multi-pane windows',
      'Heavy stone foundation, piers, or lower story'
    ],
    elements: [
      'An entire house — walls, gables, and all — wrapped in one continuous shingle skin',
      'A long roofline sweeping down over the porch without a break',
      'A low eyebrow dormer arching through the roof surface'
    ],
    tags: ['shingled', 'sweeping-roof', 'coastal', 'asymmetric', 'victorian'],
    lookalikes: [
      { id: 'queen-anne', tell: 'Queen Anne mixes many textures and loads on spindlework and trim; Shingle Style uses one uniform shingle skin and almost no applied ornament.' },
      { id: 'craftsman', tell: 'Craftsman houses are smaller and lower, with exposed rafter tails and tapered porch columns; Shingle Style is a big, rambling mass with sweeping roofs and stone foundations.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="52" y="236" width="296" height="16" fill="#9a927e" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.6"><line x1="80" y1="236" x2="80" y2="252"/><line x1="120" y1="236" x2="120" y2="252"/><line x1="160" y1="236" x2="160" y2="252"/><line x1="200" y1="236" x2="200" y2="252"/><line x1="240" y1="236" x2="240" y2="252"/><line x1="280" y1="236" x2="280" y2="252"/><line x1="320" y1="236" x2="320" y2="252"/></g><rect x="55" y="140" width="290" height="96" fill="#8a6b4a" stroke="#3e3120" stroke-width="1.5"/><g stroke="#5f4a33" stroke-width="0.6"><line x1="55" y1="152" x2="345" y2="152"/><line x1="55" y1="164" x2="345" y2="164"/><line x1="55" y1="176" x2="345" y2="176"/><line x1="55" y1="188" x2="345" y2="188"/><line x1="55" y1="200" x2="345" y2="200"/><line x1="55" y1="212" x2="345" y2="212"/><line x1="55" y1="224" x2="345" y2="224"/></g><polygon points="40,140 140,60 260,60 360,140" fill="#6b5138" stroke="#3e3120" stroke-width="1.5"/><g stroke="#5a452f" stroke-width="0.6"><line x1="72" y1="115" x2="328" y2="115"/><line x1="90" y1="100" x2="310" y2="100"/><line x1="110" y1="85" x2="290" y2="85"/><line x1="128" y1="70" x2="272" y2="70"/></g><rect x="150" y="92" width="100" height="32" fill="#8a6b4a" stroke="#3e3120" stroke-width="1.2"/><rect x="146" y="86" width="108" height="8" fill="#5a452f" stroke="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="158" y="98" width="24" height="20"/><rect x="188" y="98" width="24" height="20"/><rect x="218" y="98" width="24" height="20"/></g><path d="M78,126 Q104,104 130,126 Z" fill="#6b5138" stroke="#3e3120" stroke-width="1.2"/><path d="M88,126 Q104,112 120,126 Z" fill="#cfd9e3" stroke="#3e3120" stroke-width="0.8"/><rect x="80" y="168" width="30" height="40" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.6"><line x1="95" y1="168" x2="95" y2="208"/><line x1="80" y1="188" x2="110" y2="188"/></g><rect x="120" y="168" width="30" height="40" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.6"><line x1="135" y1="168" x2="135" y2="208"/><line x1="120" y1="188" x2="150" y2="188"/></g><rect x="180" y="168" width="30" height="40" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.6"><line x1="195" y1="168" x2="195" y2="208"/><line x1="180" y1="188" x2="210" y2="188"/></g><rect x="256" y="166" width="76" height="70" fill="#3a3128" stroke="#3e3120" stroke-width="1.2"/><rect x="252" y="166" width="12" height="70" fill="#9a927e" stroke="#3e3120"/><rect x="324" y="166" width="12" height="70" fill="#9a927e" stroke="#3e3120"/><rect x="284" y="192" width="22" height="44" fill="#2a2014" stroke="#3e3120"/></svg>'
  },
  {
    id: 'colonial-revival',
    name: 'Colonial Revival',
    period: '1880–1955',
    region: 'Nationwide — the most common revival style in American suburbs',
    summary: 'America\'s longest-running favorite: a nostalgic, scaled-up return to Georgian and Federal forms sparked by the 1876 Centennial. Crisp symmetric facades, shutters, columned entry porticos, and machine-perfect classical details — dignified, familiar, and everywhere.',
    keyFeatures: [
      'Symmetric two-story facade, usually three or five bays wide',
      'Accentuated front entry: portico or pediment on slender columns',
      'Fanlight or sidelights around the paneled front door',
      'Double-hung multi-pane windows flanked by louvered shutters',
      'Side-gable or hipped roof, often with dormers',
      'Details bigger and more "perfect" than true colonial originals'
    ],
    elements: [
      'A small entry portico on slender columns fronting a symmetric clapboard facade',
      'Double-hung windows with louvered shutters marching in symmetric rows',
      'A paneled front door framed by sidelights beneath a fanlight or pediment'
    ],
    tags: ['symmetric', 'classical', 'portico', 'shutters', 'revival'],
    lookalikes: [
      { id: 'georgian', tell: 'True Georgians (1700s) have small window panes, heavier hand-made trim, and no porches; Colonial Revival is bigger, crisper, machine-made, and loves an entry portico.' },
      { id: 'federal', tell: 'Federal originals are delicate and urban with elliptical fanlights; Colonial Revival borrows those motifs but scales them up and mixes them freely.' },
      { id: 'neo-eclectic', tell: 'Neo-eclectic builder houses quote colonial details but break symmetry, pile up complex rooflines, and put a big garage out front.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><polygon points="58,100 120,58 280,58 342,100" fill="#565660" stroke="#3e3120" stroke-width="1.5"/><rect x="192" y="32" width="16" height="30" fill="#9b4b35" stroke="#3e3120"/><rect x="64" y="100" width="272" height="152" fill="#f8f4e8" stroke="#3e3120" stroke-width="1.5"/><g stroke="#ddd2bc" stroke-width="0.7"><line x1="70" y1="112" x2="330" y2="112"/><line x1="70" y1="124" x2="330" y2="124"/><line x1="70" y1="136" x2="330" y2="136"/><line x1="70" y1="148" x2="330" y2="148"/><line x1="70" y1="160" x2="330" y2="160"/><line x1="70" y1="172" x2="330" y2="172"/><line x1="70" y1="184" x2="330" y2="184"/><line x1="70" y1="196" x2="330" y2="196"/><line x1="70" y1="208" x2="330" y2="208"/><line x1="70" y1="220" x2="330" y2="220"/><line x1="70" y1="232" x2="330" y2="232"/><line x1="70" y1="244" x2="330" y2="244"/></g><g fill="#2f4a3a" stroke="#3e3120"><rect x="76" y="115" width="8" height="40"/><rect x="112" y="115" width="8" height="40"/><rect x="130" y="115" width="8" height="40"/><rect x="166" y="115" width="8" height="40"/><rect x="184" y="115" width="8" height="40"/><rect x="220" y="115" width="8" height="40"/><rect x="238" y="115" width="8" height="40"/><rect x="274" y="115" width="8" height="40"/><rect x="292" y="115" width="8" height="40"/><rect x="328" y="115" width="8" height="40"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="86" y="115" width="24" height="40"/><rect x="140" y="115" width="24" height="40"/><rect x="194" y="115" width="24" height="40"/><rect x="248" y="115" width="24" height="40"/><rect x="302" y="115" width="24" height="40"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="98" y1="115" x2="98" y2="155"/><line x1="86" y1="135" x2="110" y2="135"/><line x1="152" y1="115" x2="152" y2="155"/><line x1="140" y1="135" x2="164" y2="135"/><line x1="206" y1="115" x2="206" y2="155"/><line x1="194" y1="135" x2="218" y2="135"/><line x1="260" y1="115" x2="260" y2="155"/><line x1="248" y1="135" x2="272" y2="135"/><line x1="314" y1="115" x2="314" y2="155"/><line x1="302" y1="135" x2="326" y2="135"/></g><g fill="#2f4a3a" stroke="#3e3120"><rect x="76" y="190" width="8" height="46"/><rect x="112" y="190" width="8" height="46"/><rect x="130" y="190" width="8" height="46"/><rect x="166" y="190" width="8" height="46"/><rect x="232" y="190" width="8" height="46"/><rect x="268" y="190" width="8" height="46"/><rect x="286" y="190" width="8" height="46"/><rect x="322" y="190" width="8" height="46"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="86" y="190" width="24" height="46"/><rect x="140" y="190" width="24" height="46"/><rect x="242" y="190" width="24" height="46"/><rect x="296" y="190" width="24" height="46"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="98" y1="190" x2="98" y2="236"/><line x1="86" y1="213" x2="110" y2="213"/><line x1="152" y1="190" x2="152" y2="236"/><line x1="140" y1="213" x2="164" y2="213"/><line x1="254" y1="190" x2="254" y2="236"/><line x1="242" y1="213" x2="266" y2="213"/><line x1="308" y1="190" x2="308" y2="236"/><line x1="296" y1="213" x2="320" y2="213"/></g><polygon points="168,180 200,158 232,180" fill="#fdf8ec" stroke="#3e3120" stroke-width="1.2"/><rect x="170" y="180" width="60" height="5" fill="#fdf8ec" stroke="#3e3120"/><rect x="176" y="185" width="6" height="67" fill="#fdf8ec" stroke="#3e3120"/><rect x="218" y="185" width="6" height="67" fill="#fdf8ec" stroke="#3e3120"/><path d="M188,196 A12,9 0 0 1 212,196 Z" fill="#cfd9e3" stroke="#3e3120"/><rect x="188" y="196" width="24" height="56" fill="#24313f" stroke="#3e3120"/><line x1="200" y1="196" x2="200" y2="252" stroke="#46586a"/></svg>'
  },
  {
    id: 'tudor-revival',
    name: 'Tudor Revival',
    period: '1890–1940',
    region: 'Streetcar suburbs nationwide, especially the Northeast and Midwest',
    summary: 'A storybook style loosely based on late-medieval English cottages. The classic 1920s suburban "fairytale" house — steep cross gables, decorative half-timbering, tall casement windows, and a chimney big enough for Santa.',
    keyFeatures: [
      'Steeply pitched roof with prominent front-facing cross gable',
      'Decorative half-timbering: dark wood beams set into stucco panels',
      'Tall narrow casement windows grouped in twos, threes, or fours',
      'Massive prominent chimney — often on the front facade',
      'Mixed materials: brick, stone, and stucco',
      'Round-arched front door, often with a heavy plank look'
    ],
    elements: [
      'Decorative half-timbering: dark wood beams set into a stucco gable panel',
      'A steep front-facing cross gable rising over a brick lower story',
      'A massive prominent chimney featured on the front of the house'
    ],
    tags: ['storybook', 'half-timber', 'steep-gable', 'medieval'],
    lookalikes: [
      { id: 'gothic-revival', tell: 'Gothic Revival (1840s–70s) has pointed-arch windows and lacy vergeboards on a wood cottage; Tudor (1890s–1930s) has half-timbering, casement windows, and brick or stone below.' },
      { id: 'neo-eclectic', tell: 'Neo-eclectic houses may quote a steep Tudor gable, but the half-timbering is thin vinyl-era trim, windows are standard sashes, and a big garage dominates the front.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="60" y="170" width="180" height="85" fill="#b07050" stroke="#3e3120" stroke-width="1.5"/><polygon points="50,170 100,135 250,135 240,170" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="220" y="140" width="120" height="115" fill="#b07050" stroke="#3e3120" stroke-width="1.5"/><polygon points="210,140 280,55 350,140" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><polygon points="220,140 280,70 340,140" fill="#efe3c8" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e2010" stroke-width="2.5" fill="none"><line x1="245" y1="140" x2="245" y2="100"/><line x1="280" y1="140" x2="280" y2="76"/><line x1="315" y1="140" x2="315" y2="100"/><line x1="234" y1="115" x2="326" y2="115"/><line x1="225" y1="125" x2="244" y2="100"/><line x1="335" y1="125" x2="316" y2="100"/></g><g stroke="#7a3a25" stroke-width="0.6"><line x1="60" y1="180" x2="240" y2="180"/><line x1="60" y1="195" x2="240" y2="195"/><line x1="60" y1="210" x2="240" y2="210"/><line x1="60" y1="225" x2="240" y2="225"/><line x1="60" y1="240" x2="240" y2="240"/><line x1="220" y1="170" x2="220" y2="252"/><line x1="120" y1="170" x2="120" y2="252"/><line x1="180" y1="170" x2="180" y2="252"/></g><rect x="150" y="100" width="22" height="55" fill="#9b4b35" stroke="#3e3120" stroke-width="1.5"/><rect x="146" y="98" width="30" height="6" fill="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="240" y="160" width="14" height="46"/><rect x="256" y="160" width="14" height="46"/><rect x="272" y="160" width="14" height="46"/></g><g stroke="#3e3120" stroke-width="0.5"><line x1="240" y1="175" x2="286" y2="175"/><line x1="240" y1="190" x2="286" y2="190"/></g><path d="M85,255 L85,225 Q105,205 125,225 L125,255 Z" fill="#5b3a22" stroke="#3e3120"/><line x1="105" y1="208" x2="105" y2="255" stroke="#3e2010"/><rect x="155" y="200" width="40" height="40" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.5"><line x1="155" y1="220" x2="195" y2="220"/><line x1="175" y1="200" x2="175" y2="240"/></g><rect x="296" y="175" width="20" height="30" fill="#cfd9e3" stroke="#3e3120"/></svg>'
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
    lookalikes: [
      { id: 'prairie', tell: 'The Foursquare "Prairie Box" is upright and plain; true Prairie stretches horizontal with deeper eaves, banded trim, and ribbons of casements.' },
      { id: 'colonial-revival', tell: 'Many Foursquares wear Colonial Revival trim — but the near-perfect cube, pyramidal hipped roof, and single big front dormer say Foursquare.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="80" y="115" width="240" height="140" fill="#dcc89c" stroke="#3e3120" stroke-width="1.5"/><polygon points="70,115 200,55 330,115" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><rect x="170" y="80" width="60" height="35" fill="#dcc89c" stroke="#3e3120" stroke-width="1.5"/><polygon points="165,80 200,60 235,80" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><rect x="180" y="88" width="40" height="22" fill="#cfd9e3" stroke="#3e3120"/><line x1="200" y1="88" x2="200" y2="110" stroke="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="105" y="135" width="38" height="48"/><rect x="257" y="135" width="38" height="48"/></g><g stroke="#3e3120"><line x1="105" y1="160" x2="143" y2="160"/><line x1="124" y1="135" x2="124" y2="183"/><line x1="257" y1="160" x2="295" y2="160"/><line x1="276" y1="135" x2="276" y2="183"/></g><rect x="60" y="200" width="280" height="55" fill="#c4a878" stroke="#3e3120" stroke-width="1.5"/><rect x="58" y="195" width="284" height="8" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><g fill="#dcc89c" stroke="#3e3120"><rect x="68" y="203" width="14" height="52"/><rect x="156" y="203" width="14" height="52"/><rect x="230" y="203" width="14" height="52"/><rect x="318" y="203" width="14" height="52"/></g><rect x="184" y="218" width="32" height="37" fill="#3e2a18" stroke="#3e3120"/><rect x="100" y="220" width="40" height="32" fill="#cfd9e3" stroke="#3e3120"/><rect x="260" y="220" width="40" height="32" fill="#cfd9e3" stroke="#3e3120"/></svg>'
  },
  {
    id: 'dutch-colonial-revival',
    name: 'Dutch Colonial Revival',
    period: '1895–1935',
    region: 'Suburbs nationwide; original Dutch houses in NY and NJ',
    summary: 'Instantly recognizable by one roof: the gambrel, with two slopes on each side like a barn. The revival version packs a full second story into that roof behind a long shed dormer, giving the "barn house" its friendly, storybook profile.',
    keyFeatures: [
      'Gambrel roof — a shallow upper slope breaking to a steep lower slope',
      'Full-width shed dormer set into the roof, holding the second story',
      'Flared eaves kicking out at the roof edge ("Dutch kick")',
      'Symmetric facade with a centered entry, often hooded or porticoed',
      'Clapboard or shingle siding with multi-pane double-hung windows',
      'End chimneys; sometimes a gambrel end faces the street'
    ],
    elements: [
      'A barn-like gambrel roof with two slopes on each side',
      'A full-width shed dormer stretched across a gambrel roof',
      'Flared eaves kicking outward at the base of the roof'
    ],
    tags: ['gambrel', 'dormered', 'symmetric', 'revival', 'storybook'],
    lookalikes: [
      { id: 'colonial-revival', tell: 'Both are symmetric revival boxes — but Dutch Colonial has the double-sloped gambrel roof; Colonial Revival has a straight gable or hip.' },
      { id: 'cape-cod', tell: 'A Cape is one-and-a-half stories under a straight steep gable; the Dutch Colonial\'s gambrel-plus-shed-dormer packs in a full second floor.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="75" y="172" width="250" height="80" fill="#f0e8d0" stroke="#3e3120" stroke-width="1.5"/><polygon points="52,172 92,88 308,88 348,172" fill="#7a6147" stroke="#3e3120" stroke-width="1.5"/><polygon points="92,88 122,68 278,68 308,88" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><polygon points="52,172 44,178 62,178" fill="#7a6147" stroke="#3e3120"/><polygon points="348,172 338,178 356,178" fill="#7a6147" stroke="#3e3120"/><rect x="112" y="106" width="176" height="42" fill="#f0e8d0" stroke="#3e3120" stroke-width="1.5"/><rect x="107" y="98" width="186" height="10" fill="#5a4530" stroke="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="124" y="114" width="28" height="28"/><rect x="186" y="114" width="28" height="28"/><rect x="248" y="114" width="28" height="28"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="138" y1="114" x2="138" y2="142"/><line x1="124" y1="128" x2="152" y2="128"/><line x1="200" y1="114" x2="200" y2="142"/><line x1="186" y1="128" x2="214" y2="128"/><line x1="262" y1="114" x2="262" y2="142"/><line x1="248" y1="128" x2="276" y2="128"/></g><rect x="86" y="34" width="16" height="40" fill="#9b4b35" stroke="#3e3120"/><g fill="#4a5a3a" stroke="#3e3120"><rect x="90" y="188" width="8" height="46"/><rect x="132" y="188" width="8" height="46"/><rect x="260" y="188" width="8" height="46"/><rect x="302" y="188" width="8" height="46"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="100" y="188" width="30" height="46"/><rect x="270" y="188" width="30" height="46"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="115" y1="188" x2="115" y2="234"/><line x1="100" y1="211" x2="130" y2="211"/><line x1="285" y1="188" x2="285" y2="234"/><line x1="270" y1="211" x2="300" y2="211"/></g><polygon points="176,186 200,168 224,186" fill="#5a4530" stroke="#3e3120" stroke-width="1.2"/><rect x="180" y="186" width="6" height="66" fill="#fdf8ec" stroke="#3e3120"/><rect x="214" y="186" width="6" height="66" fill="#fdf8ec" stroke="#3e3120"/><rect x="188" y="192" width="24" height="60" fill="#5b3a22" stroke="#3e3120"/><line x1="200" y1="192" x2="200" y2="252" stroke="#3e2a18"/></svg>'
  },
  {
    id: 'prairie',
    name: 'Prairie',
    period: '1900–1920',
    region: 'Chicago suburbs and the Midwest; scattered nationally',
    summary: 'America\'s homegrown modernism, led by Frank Lloyd Wright. Everything stretches horizontal to echo the Midwestern prairie: broad hipped roofs floating on deep eaves, ribbons of casement windows, and a massive low chimney pinning the composition to the ground.',
    keyFeatures: [
      'Emphatic horizontal lines in every element',
      'Broad, low-pitched hipped roof with dramatically deep eaves',
      'Ribbons of casement windows grouped in continuous bands',
      'Massive, low, wide chimney at the heart of the house',
      'Stucco, brick, or wood banding contrasting light walls with dark trim',
      'One-story porches or porte-cochères extending the house into the yard'
    ],
    elements: [
      'Broad hipped roofs with dramatically deep eaves stressing the horizontal',
      'A continuous ribbon of casement windows tucked under wide eaves',
      'A massive low central chimney anchoring a horizontally banded facade'
    ],
    tags: ['horizontal', 'hipped-roof', 'deep-eaves', 'ribbon-windows', 'modernist'],
    lookalikes: [
      { id: 'foursquare', tell: 'The Foursquare is a plain vertical cube with a hipped roof; Prairie is emphatically horizontal, with deeper eaves, window ribbons, and banded trim. (Builders did sell "Prairie Box" hybrids.)' },
      { id: 'craftsman', tell: 'Same era, same "honest materials" spirit — but Craftsman is gabled with exposed rafters and tapered porch posts; Prairie is hipped, stuccoed, and horizontal.' },
      { id: 'mid-century-modern', tell: 'MCM inherits Prairie\'s horizontality but flattens the roof entirely and swaps window ribbons for full glass walls.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="182" y="54" width="36" height="30" fill="#b5714e" stroke="#3e3120" stroke-width="1.5"/><polygon points="58,110 150,82 250,82 342,110" fill="#4a3b28" stroke="#3e3120" stroke-width="1.5"/><rect x="92" y="110" width="216" height="52" fill="#e3d6b2" stroke="#3e3120" stroke-width="1.5"/><rect x="104" y="118" width="192" height="36" fill="#6b5a45" stroke="#3e3120"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="110" y="122" width="22" height="28"/><rect x="140" y="122" width="22" height="28"/><rect x="170" y="122" width="22" height="28"/><rect x="200" y="122" width="22" height="28"/><rect x="230" y="122" width="22" height="28"/><rect x="260" y="122" width="22" height="28"/></g><g stroke="#3e3120" stroke-width="0.6"><line x1="121" y1="122" x2="121" y2="150"/><line x1="151" y1="122" x2="151" y2="150"/><line x1="181" y1="122" x2="181" y2="150"/><line x1="211" y1="122" x2="211" y2="150"/><line x1="241" y1="122" x2="241" y2="150"/><line x1="271" y1="122" x2="271" y2="150"/></g><polygon points="48,178 110,158 290,158 352,178" fill="#4a3b28" stroke="#3e3120" stroke-width="1.5"/><rect x="76" y="178" width="248" height="74" fill="#e3d6b2" stroke="#3e3120" stroke-width="1.5"/><line x1="76" y1="240" x2="324" y2="240" stroke="#6b5a45" stroke-width="3"/><g fill="#cfd9e3" stroke="#3e3120"><rect x="90" y="192" width="26" height="40"/><rect x="122" y="192" width="26" height="40"/><rect x="254" y="192" width="26" height="40"/><rect x="286" y="192" width="26" height="40"/></g><g stroke="#3e3120" stroke-width="0.6"><line x1="103" y1="192" x2="103" y2="232"/><line x1="135" y1="192" x2="135" y2="232"/><line x1="267" y1="192" x2="267" y2="232"/><line x1="299" y1="192" x2="299" y2="232"/></g><rect x="188" y="198" width="26" height="54" fill="#3e2a18" stroke="#3e3120"/><rect x="160" y="192" width="20" height="40" fill="#cfd9e3" stroke="#3e3120"/><rect x="222" y="192" width="20" height="40" fill="#cfd9e3" stroke="#3e3120"/><rect x="305" y="186" width="72" height="8" fill="#4a3b28" stroke="#3e3120"/><rect x="352" y="194" width="14" height="58" fill="#b5714e" stroke="#3e3120"/><rect x="316" y="194" width="8" height="58" fill="#b5714e" stroke="#3e3120"/></svg>'
  },
  {
    id: 'craftsman',
    name: 'Craftsman / Bungalow',
    period: '1905–1930',
    region: 'Originated in California; spread nationwide via pattern books and Sears',
    summary: 'The American Arts & Crafts house — a deliberate retreat from Victorian ornament toward "honest" hand-built materials. Low to the ground, generous porches, exposed wood, and a kit-of-parts aesthetic that homeowners and catalogs both embraced.',
    keyFeatures: [
      'Low-pitched gabled roof, often front-gabled',
      'Wide overhanging eaves with exposed rafter tails',
      'Decorative knee braces or triangular brackets under the gables',
      'Full or partial-width front porch deeply recessed under the main roof',
      'Tapered (battered) square porch columns set on heavy stone piers',
      'Mixed materials: wood shingle, clapboard, river stone'
    ],
    elements: [
      'Tapered square porch columns sitting on heavy stone or brick piers',
      'Exposed rafter tails poking out beneath wide overhanging eaves',
      'Decorative wooden knee braces under a low front gable'
    ],
    tags: ['arts-and-crafts', 'low-pitch', 'porch', 'handcrafted'],
    lookalikes: [
      { id: 'prairie', tell: 'Both prize natural materials — but Prairie is hipped, horizontal, and often stucco; Craftsman is gabled, with exposed rafter tails, knee braces, and tapered porch posts.' },
      { id: 'foursquare', tell: 'A Craftsman bungalow hugs the ground under low gables; the Foursquare stands two full stories under a hipped roof, even when it borrows Craftsman porch details.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="60" y="135" width="280" height="120" fill="#a87a4a" stroke="#3e3120" stroke-width="1.5"/><polygon points="40,135 200,75 360,135" fill="#5a4530" stroke="#3e3120" stroke-width="1.5"/><g fill="#5a4530" stroke="#3e3120"><rect x="44" y="135" width="6" height="6"/><rect x="62" y="135" width="6" height="6"/><rect x="80" y="135" width="6" height="6"/><rect x="98" y="135" width="6" height="6"/><rect x="296" y="135" width="6" height="6"/><rect x="314" y="135" width="6" height="6"/><rect x="332" y="135" width="6" height="6"/><rect x="350" y="135" width="6" height="6"/></g><polygon points="130,135 145,118 145,135" fill="#3e3120"/><polygon points="270,135 255,118 255,135" fill="#3e3120"/><rect x="190" y="100" width="20" height="14" fill="#3e3120"/><line x1="195" y1="100" x2="195" y2="114" stroke="#a87a4a"/><line x1="200" y1="100" x2="200" y2="114" stroke="#a87a4a"/><line x1="205" y1="100" x2="205" y2="114" stroke="#a87a4a"/><rect x="170" y="120" width="60" height="14" fill="#cfd9e3" stroke="#3e3120"/><line x1="190" y1="120" x2="190" y2="134" stroke="#3e3120"/><line x1="210" y1="120" x2="210" y2="134" stroke="#3e3120"/><rect x="100" y="155" width="55" height="55" fill="#cfd9e3" stroke="#3e3120"/><rect x="245" y="155" width="55" height="55" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120"><line x1="100" y1="170" x2="155" y2="170"/><line x1="127" y1="155" x2="127" y2="210"/><line x1="245" y1="170" x2="300" y2="170"/><line x1="272" y1="155" x2="272" y2="210"/></g><rect x="160" y="180" width="80" height="75" fill="#7a5236" stroke="#3e3120" stroke-width="1.5"/><rect x="155" y="175" width="90" height="8" fill="#5a4530" stroke="#3e3120"/><polygon points="162,183 173,183 175,225 160,225" fill="#a87a4a" stroke="#3e3120"/><polygon points="227,183 238,183 240,225 225,225" fill="#a87a4a" stroke="#3e3120"/><rect x="155" y="225" width="25" height="32" fill="#7a8a7a" stroke="#3e3120"/><rect x="220" y="225" width="25" height="32" fill="#7a8a7a" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.7"><line x1="155" y1="240" x2="180" y2="240"/><line x1="167" y1="225" x2="167" y2="240"/><line x1="220" y1="240" x2="245" y2="240"/><line x1="232" y1="225" x2="232" y2="240"/></g><rect x="186" y="190" width="28" height="50" fill="#3e2a18" stroke="#3e3120"/></svg>'
  },
  {
    id: 'spanish-colonial-revival',
    name: 'Spanish Colonial Revival',
    period: '1915–1940',
    region: 'California, Florida, the Southwest',
    summary: 'A romantic interpretation of Mexican mission and Andalusian farmhouse traditions, made fashionable by the 1915 Panama-California Exposition in San Diego. Whitewashed stucco, red barrel-tile roofs, and arched openings — built for sun.',
    keyFeatures: [
      'Low-pitched roof covered in red clay barrel tiles',
      'Smooth white or cream stucco walls',
      'Arched front entry, often deeply recessed',
      'Arched windows; smaller windows protected by wrought-iron grilles',
      'Asymmetric facade, sometimes with a small tower or parapet',
      'Heavy carved wood doors and decorative tile accents'
    ],
    elements: [
      'Red clay barrel tiles forming a low-pitched roof',
      'Smooth white stucco walls under a deeply recessed arched entry',
      'Wrought-iron grilles covering arched ground-floor windows'
    ],
    tags: ['stucco', 'tile-roof', 'arches', 'mediterranean'],
    lookalikes: [
      { id: 'ranch', tell: 'The California Ranch inherited the low tile roof and stucco — but it\'s a plain one-story sprawl; Spanish Colonial Revival is romantic, with arches, iron grilles, and towers.' },
      { id: 'neo-eclectic', tell: 'Sunbelt "Tuscan" builder houses echo the tile and stucco at bigger scale, with garage-forward plans and details mixed from several styles.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#a89568"/><rect x="60" y="135" width="280" height="120" fill="#f4ecd8" stroke="#3e3120" stroke-width="1.5"/><rect x="50" y="115" width="300" height="22" fill="#a83a25" stroke="#3e3120"/><g fill="#7a2a18" stroke="#3e3120" stroke-width="0.6"><path d="M55,115 q5 -8 10 0"/><path d="M70,115 q5 -8 10 0"/><path d="M85,115 q5 -8 10 0"/><path d="M100,115 q5 -8 10 0"/><path d="M115,115 q5 -8 10 0"/><path d="M130,115 q5 -8 10 0"/><path d="M145,115 q5 -8 10 0"/><path d="M160,115 q5 -8 10 0"/><path d="M175,115 q5 -8 10 0"/><path d="M190,115 q5 -8 10 0"/><path d="M205,115 q5 -8 10 0"/><path d="M220,115 q5 -8 10 0"/><path d="M235,115 q5 -8 10 0"/><path d="M250,115 q5 -8 10 0"/><path d="M265,115 q5 -8 10 0"/><path d="M280,115 q5 -8 10 0"/><path d="M295,115 q5 -8 10 0"/><path d="M310,115 q5 -8 10 0"/><path d="M325,115 q5 -8 10 0"/></g><rect x="280" y="80" width="60" height="55" fill="#f4ecd8" stroke="#3e3120" stroke-width="1.5"/><rect x="276" y="74" width="68" height="10" fill="#a83a25" stroke="#3e3120"/><path d="M298,115 L298,98 Q310,86 322,98 L322,115 Z" fill="#3e3120"/><path d="M180,255 L180,200 Q200,180 220,200 L220,255 Z" fill="#5b3a22" stroke="#3e3120"/><path d="M174,255 L174,198 Q200,170 226,198 L226,255" fill="none" stroke="#3e3120"/><path d="M90,225 L90,170 Q120,148 150,170 L150,225 Z" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#1a1a1a" stroke-width="1.5" fill="none"><line x1="100" y1="170" x2="100" y2="225"/><line x1="115" y1="160" x2="115" y2="225"/><line x1="120" y1="158" x2="120" y2="225"/><line x1="125" y1="160" x2="125" y2="225"/><line x1="140" y1="170" x2="140" y2="225"/><line x1="90" y1="190" x2="150" y2="190"/><line x1="90" y1="210" x2="150" y2="210"/></g><rect x="240" y="160" width="22" height="22" fill="#cfd9e3" stroke="#3e3120"/></svg>'
  },
  {
    id: 'minimal-traditional',
    name: 'Minimal Traditional',
    period: '1935–1950',
    region: 'Depression-era and WWII-era tracts nationwide — Levittown\'s ancestor',
    summary: 'The house that austerity built. Take a traditional cottage, then strip away nearly everything: eaves shrink to nothing, ornament vanishes, the roof flattens toward practicality. Small, honest starter homes built by the hundreds of thousands around the war years.',
    keyFeatures: [
      'Small one-story (or story-and-a-half) footprint',
      'Low or medium-pitched gable roof with little to no eave overhang',
      'A front-facing gable over the entry or living room, echoing Tudor massing',
      'Minimal detailing — plain window casings, no brackets or columns',
      'Large single picture window facing the street',
      'Small chimney; siding of clapboard, brick veneer, or asbestos shingle'
    ],
    elements: [
      'A small gabled cottage with eaves cut nearly flush to the wall',
      'A plain front-facing gable and picture window with all ornament stripped away'
    ],
    tags: ['compact', 'plain', 'low-pitch', 'postwar', 'gabled'],
    lookalikes: [
      { id: 'cape-cod', tell: 'The revival Cape has a steeper roof, a central chimney, and often dormers; Minimal Traditional flattens the pitch, shrinks the eaves, and skips the dormers.' },
      { id: 'ranch', tell: 'The Ranch that followed is longer and lower with wider eaves and an attached garage; Minimal Traditional is a compact upright cottage.' },
      { id: 'tudor-revival', tell: 'Its front-gable massing is inherited from Tudor cottages — but without half-timbering, casements, or the big chimney.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="90" y="150" width="220" height="102" fill="#e7ddc4" stroke="#3e3120" stroke-width="1.5"/><polygon points="86,150 200,112 314,150" fill="#6b5a45" stroke="#3e3120" stroke-width="1.5"/><rect x="138" y="122" width="14" height="26" fill="#9b4b35" stroke="#3e3120"/><rect x="212" y="158" width="86" height="94" fill="#e7ddc4" stroke="#3e3120" stroke-width="1.5"/><polygon points="208,158 255,124 302,158" fill="#6b5a45" stroke="#3e3120" stroke-width="1.5"/><rect x="240" y="200" width="28" height="52" fill="#5b3a22" stroke="#3e3120"/><rect x="244" y="166" width="22" height="22" fill="#cfd9e3" stroke="#3e3120"/><line x1="255" y1="166" x2="255" y2="188" stroke="#3e3120" stroke-width="0.7"/><rect x="108" y="176" width="66" height="46" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.2"/><g stroke="#3e3120" stroke-width="0.8"><line x1="130" y1="176" x2="130" y2="222"/><line x1="152" y1="176" x2="152" y2="222"/></g><rect x="104" y="222" width="74" height="5" fill="#c9bda0" stroke="#3e3120" stroke-width="0.8"/><g stroke="#8f8570" stroke-width="0.6"><line x1="90" y1="164" x2="310" y2="164"/><line x1="90" y1="178" x2="212" y2="178"/><line x1="90" y1="192" x2="212" y2="192"/><line x1="90" y1="206" x2="212" y2="206"/><line x1="90" y1="220" x2="212" y2="220"/><line x1="90" y1="234" x2="212" y2="234"/><line x1="90" y1="248" x2="212" y2="248"/></g></svg>'
  },
  {
    id: 'ranch',
    name: 'Ranch',
    period: '1935–1975',
    region: 'Born in California; the default postwar suburban house nationwide',
    summary: 'The most common house in America. One story stretched long and low across a wide suburban lot, born from Spanish haciendas and Western ranch houses. Living spread sideways instead of up — with a picture window facing the street and the car garaged under the same roof.',
    keyFeatures: [
      'Single story, long, low, and ground-hugging',
      'Low-pitched hipped or gabled roof with moderate to wide eaves',
      'Attached garage or carport folded into the main roofline',
      'Large picture window or sliding glass doors',
      'Asymmetric but quiet facade with minimal decoration',
      'Rambling L- or U-shaped plans oriented to the backyard'
    ],
    elements: [
      'A single-story house stretched long and low under one continuous roofline',
      'An attached garage absorbed into the main body of the house',
      'A big picture window looking onto the front lawn'
    ],
    tags: ['one-story', 'horizontal', 'low-pitch', 'postwar', 'garage'],
    lookalikes: [
      { id: 'mid-century-modern', tell: 'A Ranch goes modern when the roof flattens and walls turn to glass; the everyday Ranch keeps a pitched roof, conventional windows, and traditional siding.' },
      { id: 'minimal-traditional', tell: 'Minimal Traditional is smaller, more upright, with tight eaves and rarely a garage; the Ranch sprawls sideways under wider eaves.' },
      { id: 'split-level', tell: 'If part of the house steps a half-floor up or down — bedrooms over a garage — it\'s a Split-Level, not a true single-story Ranch.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="30" y="176" width="340" height="76" fill="#d9c49a" stroke="#3e3120" stroke-width="1.5"/><polygon points="18,176 82,142 318,142 382,176" fill="#6b5138" stroke="#3e3120" stroke-width="1.5"/><rect x="140" y="118" width="28" height="26" fill="#9b6a45" stroke="#3e3120"/><rect x="292" y="194" width="72" height="58" fill="#efe6d0" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.7"><line x1="292" y1="208" x2="364" y2="208"/><line x1="292" y1="222" x2="364" y2="222"/><line x1="292" y1="236" x2="364" y2="236"/></g><rect x="52" y="194" width="74" height="42" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.2"/><g stroke="#3e3120" stroke-width="0.8"><line x1="76" y1="194" x2="76" y2="236"/><line x1="102" y1="194" x2="102" y2="236"/></g><rect x="146" y="196" width="30" height="38" fill="#cfd9e3" stroke="#3e3120"/><line x1="161" y1="196" x2="161" y2="234" stroke="#3e3120" stroke-width="0.7"/><rect x="186" y="196" width="30" height="38" fill="#cfd9e3" stroke="#3e3120"/><line x1="201" y1="196" x2="201" y2="234" stroke="#3e3120" stroke-width="0.7"/><rect x="240" y="198" width="26" height="54" fill="#5b3a22" stroke="#3e3120"/><g stroke="#b5a276" stroke-width="0.6"><line x1="30" y1="190" x2="370" y2="190"/><line x1="30" y1="204" x2="292" y2="204"/><line x1="30" y1="218" x2="292" y2="218"/><line x1="30" y1="232" x2="292" y2="232"/><line x1="30" y1="246" x2="292" y2="246"/></g><rect x="40" y="240" width="90" height="12" fill="#7a8a6a" stroke="#3e3120" stroke-width="0.8"/></svg>'
  },
  {
    id: 'mid-century-modern',
    name: 'Mid-Century Modern',
    period: '1945–1970',
    region: 'Postwar suburbs nationwide; especially California and the Southwest',
    summary: 'Postwar modernism for the middle class. Inspired by Bauhaus and Frank Lloyd Wright, popularized by builders like Joseph Eichler. Houses dissolve the line between inside and outside through glass walls, low horizontal forms, and integration with the landscape.',
    keyFeatures: [
      'Flat, low-slope shed, or butterfly roofs',
      'Long, low, asymmetric horizontal massing',
      'Floor-to-ceiling glass walls and large picture windows',
      'Exposed structural posts and beams',
      'Mixed natural materials: stone, wood, glass',
      'Open floor plan integrated with patios and landscape'
    ],
    elements: [
      'Floor-to-ceiling glass walls broken only by slim vertical posts',
      'A flat or low-slope roof extending well past the walls in a deep overhang',
      'Long horizontal massing emphasized by a continuous flat roofline'
    ],
    tags: ['modernist', 'flat-roof', 'glass', 'horizontal'],
    lookalikes: [
      { id: 'ranch', tell: 'Most Ranches are conventional — pitched roofs, regular windows. It reads Mid-Century Modern when the roof goes flat or butterfly and the walls dissolve into glass.' },
      { id: 'prairie', tell: 'Prairie is MCM\'s ancestor: horizontal and ground-hugging, but with hipped roofs, massive chimneys, and ribbons of small casements instead of glass walls.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><polygon points="40,170 370,130 370,140 40,180" fill="#3e3120" stroke="#3e3120"/><rect x="60" y="170" width="80" height="85" fill="#7a8a7a" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="0.6"><line x1="60" y1="185" x2="140" y2="185"/><line x1="60" y1="200" x2="140" y2="200"/><line x1="60" y1="215" x2="140" y2="215"/><line x1="60" y1="230" x2="140" y2="230"/><line x1="60" y1="245" x2="140" y2="245"/><line x1="80" y1="170" x2="80" y2="185"/><line x1="105" y1="170" x2="105" y2="185"/><line x1="125" y1="170" x2="125" y2="185"/><line x1="70" y1="185" x2="70" y2="200"/><line x1="95" y1="185" x2="95" y2="200"/><line x1="115" y1="185" x2="115" y2="200"/><line x1="75" y1="200" x2="75" y2="215"/><line x1="100" y1="200" x2="100" y2="215"/><line x1="125" y1="200" x2="125" y2="215"/></g><rect x="140" y="160" width="160" height="95" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.5"/><g stroke="#3e3120" stroke-width="2"><line x1="180" y1="160" x2="180" y2="255"/><line x1="220" y1="160" x2="220" y2="255"/><line x1="260" y1="160" x2="260" y2="255"/></g><rect x="138" y="158" width="164" height="6" fill="#3e3120"/><rect x="300" y="148" width="60" height="107" fill="#a87a4a" stroke="#3e3120" stroke-width="1.5"/><g stroke="#7a5236" stroke-width="0.6"><line x1="300" y1="160" x2="360" y2="160"/><line x1="300" y1="172" x2="360" y2="172"/><line x1="300" y1="184" x2="360" y2="184"/><line x1="300" y1="196" x2="360" y2="196"/><line x1="300" y1="208" x2="360" y2="208"/><line x1="300" y1="220" x2="360" y2="220"/><line x1="300" y1="232" x2="360" y2="232"/><line x1="300" y1="244" x2="360" y2="244"/></g><rect x="312" y="166" width="36" height="14" fill="#cfd9e3" stroke="#3e3120"/><rect x="226" y="195" width="28" height="60" fill="#3e2a18" stroke="#3e3120"/></svg>'
  },
  {
    id: 'split-level',
    name: 'Split-Level',
    period: '1955–1975',
    region: 'Postwar suburbs nationwide, especially on sloped lots',
    summary: 'The Ranch bent into three half-stories. A living wing sits at grade while bedrooms perch a half-flight up, over a garage or family room a half-flight down. From the street the giveaway is offset rooflines: one-story on one side, two-story on the other, joined at the split.',
    keyFeatures: [
      'Staggered floor levels — sections offset by half a story',
      'A two-story-looking wing butted against a one-story wing',
      'Offset rooflines meeting at the entry level',
      'Garage or family room tucked under the raised bedroom wing',
      'Entry at mid-level with short stair runs going up and down inside',
      'Mixed cladding — brick below, siding above, marking the levels'
    ],
    elements: [
      'Floor levels staggered by half a story under offset rooflines',
      'A bedroom wing raised half a level over the garage',
      'A mid-level front entry with stairs running both up and down inside'
    ],
    tags: ['staggered', 'postwar', 'suburban', 'asymmetric', 'garage'],
    lookalikes: [
      { id: 'ranch', tell: 'A Ranch keeps every room on one level; the moment part of the house steps a half-flight up over the garage, it\'s a Split-Level.' },
      { id: 'minimal-traditional', tell: 'Minimal Traditional is a small compact cottage from the 1940s; the Split-Level is bigger, later, and defined by its offset levels.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="38" y="186" width="165" height="66" fill="#e2d3ae" stroke="#3e3120" stroke-width="1.5"/><polygon points="28,186 120,150 213,186" fill="#6b5a45" stroke="#3e3120" stroke-width="1.5"/><rect x="56" y="202" width="64" height="50" fill="#efe6d0" stroke="#3e3120" stroke-width="1.2"/><g stroke="#3e3120" stroke-width="0.7"><line x1="56" y1="214" x2="120" y2="214"/><line x1="56" y1="226" x2="120" y2="226"/><line x1="56" y1="238" x2="120" y2="238"/></g><rect x="136" y="200" width="30" height="38" fill="#cfd9e3" stroke="#3e3120"/><line x1="151" y1="200" x2="151" y2="238" stroke="#3e3120" stroke-width="0.7"/><rect x="203" y="112" width="140" height="140" fill="#dcc89c" stroke="#3e3120" stroke-width="1.5"/><polygon points="193,112 273,80 353,112" fill="#6b5a45" stroke="#3e3120" stroke-width="1.5"/><line x1="203" y1="178" x2="343" y2="178" stroke="#3e3120" stroke-width="1.5"/><g stroke="#a88d63" stroke-width="0.6"><line x1="203" y1="124" x2="343" y2="124"/><line x1="203" y1="136" x2="343" y2="136"/><line x1="203" y1="148" x2="343" y2="148"/><line x1="203" y1="160" x2="343" y2="160"/><line x1="203" y1="172" x2="343" y2="172"/></g><g fill="#cfd9e3" stroke="#3e3120"><rect x="216" y="126" width="28" height="36"/><rect x="258" y="126" width="28" height="36"/><rect x="300" y="126" width="28" height="36"/></g><g stroke="#3e3120" stroke-width="0.7"><line x1="230" y1="126" x2="230" y2="162"/><line x1="272" y1="126" x2="272" y2="162"/><line x1="314" y1="126" x2="314" y2="162"/></g><rect x="214" y="198" width="26" height="54" fill="#5b3a22" stroke="#3e3120"/><rect x="208" y="244" width="38" height="8" fill="#c9bda0" stroke="#3e3120" stroke-width="0.8"/><rect x="256" y="200" width="30" height="40" fill="#cfd9e3" stroke="#3e3120"/><line x1="271" y1="200" x2="271" y2="240" stroke="#3e3120" stroke-width="0.7"/><rect x="298" y="200" width="30" height="40" fill="#cfd9e3" stroke="#3e3120"/><line x1="313" y1="200" x2="313" y2="240" stroke="#3e3120" stroke-width="0.7"/></svg>'
  },
  {
    id: 'neo-eclectic',
    name: 'Neo-eclectic',
    period: '1965–present',
    region: 'New subdivisions nationwide — the default contemporary builder house',
    summary: 'The modern builder house that borrows from everything at once: a Tudor gable here, a Palladian window there, colonial shutters, a French-ish roofline — rendered in brick veneer and vinyl at inflated scale. Complex tall roofs and a garage-forward face are the signature; "McMansion" is the insult.',
    keyFeatures: [
      'Mix-and-match historical details with no single consistent style',
      'Tall, complex roof with multiple steep gables or hips',
      'Two-story entry, often with an arched or Palladian-style window above the door',
      'Prominent front-facing garage, often two or three bays',
      'Brick or stone veneer on the front, vinyl or fiber cement on the sides',
      'Great-room massing: big volumes, few small-paned windows'
    ],
    elements: [
      'A tall complex roofline stacking several steep front-facing gables',
      'A two-story arched window lighting the entry hall above the front door',
      'A wide front-facing multi-car garage dominating the facade'
    ],
    tags: ['complex-roof', 'mixed-styles', 'garage', 'contemporary'],
    lookalikes: [
      { id: 'colonial-revival', tell: 'Colonial Revival commits to one vocabulary with a symmetric facade; Neo-eclectic mixes several styles asymmetrically and leads with the garage.' },
      { id: 'tudor-revival', tell: 'A real Tudor has deep half-timbering, casements, and handmade-feeling materials; the Neo-eclectic version applies thin trim boards to a standard frame at twice the size.' }
    ],
    svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="252" width="400" height="28" fill="#9caa86"/><rect x="52" y="152" width="296" height="100" fill="#b5714e" stroke="#3e3120" stroke-width="1.5"/><g stroke="#7a3a25" stroke-width="0.5"><line x1="52" y1="168" x2="348" y2="168"/><line x1="52" y1="184" x2="348" y2="184"/><line x1="52" y1="200" x2="348" y2="200"/><line x1="52" y1="216" x2="348" y2="216"/><line x1="52" y1="232" x2="348" y2="232"/></g><polygon points="48,152 122,92 196,152" fill="#55483d" stroke="#3e3120" stroke-width="1.5"/><polygon points="58,152 122,100 186,152" fill="#ece4d3" stroke="#3e3120" stroke-width="1"/><rect x="108" y="116" width="28" height="30" fill="#cfd9e3" stroke="#3e3120"/><line x1="122" y1="116" x2="122" y2="146" stroke="#3e3120" stroke-width="0.7"/><polygon points="150,152 232,60 314,152" fill="#55483d" stroke="#3e3120" stroke-width="1.5"/><polygon points="160,152 232,72 304,152" fill="#ece4d3" stroke="#3e3120" stroke-width="1"/><path d="M212,152 L212,112 Q232,90 252,112 L252,152 Z" fill="#cfd9e3" stroke="#3e3120" stroke-width="1.2"/><g stroke="#3e3120" stroke-width="0.7"><line x1="232" y1="94" x2="232" y2="152"/><line x1="222" y1="104" x2="222" y2="152"/><line x1="242" y1="104" x2="242" y2="152"/><line x1="212" y1="128" x2="252" y2="128"/></g><rect x="64" y="192" width="110" height="60" fill="#efe6d0" stroke="#3e3120" stroke-width="1.5"/><rect x="70" y="198" width="46" height="54" fill="#e0d6bc" stroke="#3e3120" stroke-width="0.8"/><rect x="122" y="198" width="46" height="54" fill="#e0d6bc" stroke="#3e3120" stroke-width="0.8"/><g stroke="#3e3120" stroke-width="0.5"><line x1="70" y1="212" x2="116" y2="212"/><line x1="70" y1="226" x2="116" y2="226"/><line x1="70" y1="240" x2="116" y2="240"/><line x1="122" y1="212" x2="168" y2="212"/><line x1="122" y1="226" x2="168" y2="226"/><line x1="122" y1="240" x2="168" y2="240"/></g><path d="M206,196 A26,20 0 0 1 258,196" fill="#e8dcc4" stroke="#3e3120"/><rect x="218" y="196" width="28" height="56" fill="#3e2a18" stroke="#3e3120"/><rect x="206" y="196" width="12" height="56" fill="#cfd9e3" stroke="#3e3120"/><rect x="246" y="196" width="12" height="56" fill="#cfd9e3" stroke="#3e3120"/><g fill="#2f4a3a" stroke="#3e3120"><rect x="284" y="192" width="7" height="42"/><rect x="323" y="192" width="7" height="42"/></g><rect x="291" y="192" width="32" height="42" fill="#cfd9e3" stroke="#3e3120"/><g stroke="#3e3120" stroke-width="0.7"><line x1="307" y1="192" x2="307" y2="234"/><line x1="291" y1="213" x2="323" y2="213"/></g></svg>'
  }
];

// Helper: look up a style by id.
window.STYLE_BY_ID = function (id) {
  return window.STYLES.find(function (s) { return s.id === id; });
};

// Helper: full ordered example list for a style — the teaching illustration
// (top-level `svg`) first, then any inline `examples`, then the real-world
// photos contributed by photos.js (kind 'wiki', resolved lazily by app.js).
window.STYLE_EXAMPLES = function (style) {
  var list = [];
  if (style.svg) {
    list.push({
      kind: 'svg',
      src: style.svg,
      alt: 'Illustration of a ' + style.name + ' house',
      credit: null
    });
  }
  if (style.examples && style.examples.length) list = list.concat(style.examples);
  var photos = (window.STYLE_PHOTOS && window.STYLE_PHOTOS[style.id]) || [];
  photos.forEach(function (p) {
    list.push({ kind: 'wiki', article: p.article, alt: p.title, note: p.note });
  });
  return list;
};
