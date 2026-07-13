// Real-world photo examples for each style, resolved at runtime from the
// lead image of the named English Wikipedia article (see App.resolveWikiExample
// in app.js). Generated from research notes; regenerate rather than hand-edit
// URLs. Entries that fail to resolve are hidden by the app, so a renamed or
// image-less article degrades gracefully.
// Each item: { article, title, note? } — article is the exact Wikipedia title.

window.STYLE_PHOTOS = {
  'cape-cod': [
    { article: 'Cape_Cod_(house)', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'John_Newcomb_House', title: 'John Newcomb House, Wellfleet, Massachusetts', note: 'classic 1½-story full Cape immortalized as the \'Wellfleet Oysterman\'s\' house in Thoreau\'s Cape Cod' },
    { article: 'Atwood_House_Museum', title: 'Atwood House Museum, Chatham, Massachusetts', note: 'c. 1752 gambrel-roofed Cape, one of Chatham\'s oldest houses' },
    { article: 'Harlow_Old_Fort_House', title: 'Harlow Old Fort House, Plymouth, Massachusetts', note: 'example of the rarer gambrel-roofed Cape' },
    { article: 'Hoxie_House', title: 'Hoxie House, Sandwich, Massachusetts', note: 'c. 1675 steep-roofed saltbox cottage, often called the oldest house on Cape Cod' },
    { article: 'Collen_C._Campbell_House', title: 'Collen C. Campbell House, Barnstable, Massachusetts', note: 'c. 1920 NRHP-listed Cape representing the 20th-century revival' }
  ],
  'georgian': [
    { article: 'Hammond–Harwood_House', title: 'Hammond–Harwood House, Annapolis, Maryland', note: '1774 masterpiece, often called the finest surviving colonial Georgian house in America' },
    { article: 'Westover_Plantation', title: 'Westover Plantation, Charles City County, Virginia', note: 'c. 1750 National Historic Landmark famed for its early Georgian mansion' },
    { article: 'Cliveden_(Benjamin_Chew_House)', title: 'Cliveden (Benjamin Chew House), Philadelphia, Pennsylvania', note: '1763–67 stone mansion, an outstanding example of Philadelphia Georgian' },
    { article: 'Drayton_Hall', title: 'Drayton Hall, Charleston, South Carolina', note: '1738 plantation house, a preeminent Georgian-Palladian landmark' },
    { article: 'Royall_House_and_Slave_Quarters', title: 'Isaac Royall House, Medford, Massachusetts', note: '1730s–50s Georgian mansion, among the grandest colonial houses in New England' },
    { article: 'Mount_Pleasant_(mansion)', title: 'Mount Pleasant, Philadelphia, Pennsylvania', note: '1761–62 Georgian villa John Adams called \'the most elegant seat in Pennsylvania\'' }
  ],
  'federal': [
    { article: 'Gardner–Pingree_House', title: 'Gardner–Pingree House, Salem, Massachusetts', note: '1804 Samuel McIntire brick townhouse judged a masterpiece of Federal architecture' },
    { article: 'Nathaniel_Russell_House', title: 'Nathaniel Russell House, Charleston, South Carolina', note: '1808 townhouse, one of America\'s most important Federal houses' },
    { article: 'First_Harrison_Gray_Otis_House', title: 'First Harrison Gray Otis House, Boston, Massachusetts', note: '1796 Charles Bulfinch design that defined the Boston Federal style' },
    { article: 'Homewood_Museum', title: 'Homewood, Baltimore, Maryland', note: '1801–08 refined Federal villa in red brick and white marble' },
    { article: 'Rundlet-May_House', title: 'Rundlet–May House, Portsmouth, New Hampshire', note: '1807 merchant\'s mansion, an exceptionally well-preserved high-style Federal house' }
  ],
  'greek-revival': [
    { article: 'Millford_Plantation', title: 'Millford Plantation, Pinewood, South Carolina', note: '1839–41 mansion regarded as one of the finest Greek Revival residences in the country' },
    { article: 'Oak_Alley_Plantation', title: 'Oak Alley Plantation, Vacherie, Louisiana', note: 'peripteral Greek Revival mansion ringed by 28 Doric columns' },
    { article: 'Gaineswood', title: 'Gaineswood, Demopolis, Alabama', note: '1843–61 mansion using all three Greek orders' },
    { article: 'Stanton_Hall', title: 'Stanton Hall, Natchez, Mississippi', note: '1850s mansion, one of the most opulent surviving antebellum Greek Revival houses' },
    { article: 'Andalusia_(estate)', title: 'Andalusia (Nicholas Biddle Estate), Bensalem Township, Pennsylvania', note: 'one of the earliest and most pristine Greek Revival examples in America' },
    { article: 'Rose_Hill_Mansion', title: 'Rose Hill Mansion, Fayette, New York', note: '1837 Ionic-porticoed landmark of monumental residential Greek Revival' }
  ],
  'gothic-revival': [
    { article: 'Lyndhurst_(estate)', title: 'Lyndhurst (Jay Gould Estate), Tarrytown, New York', note: 'A. J. Davis\'s 1838 marble country house, the archetypal American Gothic Revival mansion' },
    { article: 'American_Gothic_House', title: 'American Gothic House, Eldon, Iowa', note: 'the Carpenter Gothic cottage made famous by Grant Wood\'s painting' },
    { article: 'Roseland_Cottage', title: 'Roseland Cottage, Woodstock, Connecticut', note: '1846 pink board-and-batten Gothic Revival summer house' },
    { article: 'William_J._Rotch_Gothic_Cottage', title: 'William J. Rotch Gothic Cottage, New Bedford, Massachusetts', note: '1845 A. J. Davis cottage ornée, a National Historic Landmark' },
    { article: 'Henry_Delamater_House', title: 'Henry Delamater House, Rhinebeck, New York', note: '1844 A. J. Davis design, a fine example of residential Carpenter Gothic' },
    { article: 'Green–Meldrim_House', title: 'Green–Meldrim House, Savannah, Georgia', note: '1853 mansion, among the South\'s finest Gothic Revival residences' },
    { article: 'Kingscote_(mansion)', title: 'Kingscote, Newport, Rhode Island', note: '1839 Richard Upjohn Gothic Revival \'cottage,\' one of Newport\'s first summer houses' }
  ],
  'italianate': [
    { article: 'Victoria_Mansion', title: 'Victoria Mansion (Morse–Libby House), Portland, Maine', note: '1860 villa with belvedere tower, the finest preserved Italianate house in America' },
    { article: 'Blandwood_Mansion_and_Gardens', title: 'Blandwood Mansion, Greensboro, North Carolina', note: 'A. J. Davis\'s 1844 tower villa, the oldest surviving Italianate house in the US' },
    { article: 'Litchfield_Villa', title: 'Litchfield Villa, Brooklyn, New York', note: '1854–57 Prospect Park mansion, A. J. Davis\'s greatest Italianate villa' },
    { article: 'Asa_Packer_Mansion', title: 'Asa Packer Mansion, Jim Thorpe, Pennsylvania', note: '1861 railroad magnate\'s home, one of the best-preserved Italianate villas' },
    { article: 'Camron-Stanford_House', title: 'Camron–Stanford House, Oakland, California', note: '1876 bracketed Italianate mansion on Lake Merritt' },
    { article: 'Bidwell_Mansion_State_Historic_Park', title: 'Bidwell Mansion, Chico, California', note: '1865–68 three-story romantic Italianate villa' }
  ],
  'second-empire': [
    { article: 'Terrace_Hill', title: 'Terrace Hill, Des Moines, Iowa', note: 'National Historic Landmark with steep mansard roof and 90-foot tower' },
    { article: 'Heck-Andrews_House', title: 'Heck-Andrews House, Raleigh, North Carolina', note: '1870 frame dwelling with concave patterned-slate mansard roof' },
    { article: 'Vaile_Mansion', title: 'Vaile Mansion, Independence, Missouri', note: '31-room 1881 showpiece of Second Empire ornament' },
    { article: 'Culbertson_Mansion_State_Historic_Site', title: 'Culbertson Mansion, New Albany, Indiana', note: '25-room 1869 Second Empire mansion' },
    { article: 'Hegeler_Carus_Mansion', title: 'Hegeler Carus Mansion, La Salle, Illinois', note: 'National Historic Landmark, one of the Midwest\'s great Second Empire houses' },
    { article: 'Alexander_Ramsey_House', title: 'Alexander Ramsey House, Saint Paul, Minnesota', note: '1872 mansard-roofed home, one of the nation\'s best-preserved Victorian houses' }
  ],
  'queen-anne': [
    { article: 'Haas–Lilienthal_House', title: 'Haas-Lilienthal House, San Francisco, California', note: '1886 redwood Queen Anne, San Francisco\'s only intact Victorian house museum' },
    { article: 'Wilderstein', title: 'Wilderstein, Rhinebeck, New York', note: 'Hudson River country house remodeled in 1888 into a towered Queen Anne landmark' },
    { article: 'Hale_House_(Los_Angeles,_California)', title: 'Hale House, Los Angeles, California', note: '1887 Queen Anne called the most photographed house in the city' },
    { article: 'Rosson_House', title: 'Rosson House, Phoenix, Arizona', note: '1895 Queen Anne with corner turret, centerpiece of Heritage Square' },
    { article: 'W._H._Stark_House', title: 'W. H. Stark House, Orange, Texas', note: '14,000-square-foot 1894 Queen Anne with verandas, gables, and towers' }
  ],
  'folk-victorian': [
    { article: 'Folk_Victorian', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Mitchell–Ward_House_(Gentry,_Arkansas)', title: 'Mitchell-Ward House, Gentry, Arkansas', note: '1897 house with jigsawn Folk Victorian trim on a simple frame form' },
    { article: 'James_B._Carden_House', title: 'James B. Carden House, Summersville, West Virginia', note: '1885 T-plan farmhouse with full-width two-story porch, a textbook Folk Victorian' },
    { article: 'Walrond_and_Elizabeth_Snell_House', title: 'Walrond and Elizabeth Snell House, Miles City, Montana', note: '1882–83 plain brick form dressed with Victorian trim' },
    { article: 'Ephriam_M._Baynard_House', title: 'Ephriam M. Baynard House, Auburndale, Florida', note: 'Folk Victorian home, now a house museum' },
    { article: 'Albert_Spencer_Wilcox_Beach_House', title: 'Albert Spencer Wilcox Beach House, Hanalei, Hawaii', note: 'Folk Victorian beach house with roofed lanai' }
  ],
  'shingle': [
    { article: 'Isaac_Bell_House', title: 'Isaac Bell House, Newport, Rhode Island', note: 'McKim, Mead & White landmark, one of the country\'s outstanding Shingle Style houses' },
    { article: 'William_Watts_Sherman_House', title: 'William Watts Sherman House, Newport, Rhode Island', note: 'H. H. Richardson\'s 1875–76 prototype of the Shingle Style' },
    { article: 'Mary_Fiske_Stoughton_House', title: 'Mary Fiske Stoughton House, Cambridge, Massachusetts', note: 'Richardson\'s 1882 design with shingles stretched like a skin' },
    { article: 'Naumkeag', title: 'Naumkeag, Stockbridge, Massachusetts', note: '44-room Stanford White shingle-clad country house of 1885–86' },
    { article: 'William_G._Low_House', title: 'William G. Low House, Bristol, Rhode Island', note: 'McKim, Mead & White\'s iconic single-gable shingle composition' },
    { article: 'Redwood_(Bar_Harbor,_Maine)', title: 'Redwood, Bar Harbor, Maine', note: 'William Ralph Emerson coastal cottage, an early canonical Shingle Style summer house' }
  ],
  'foursquare': [
    { article: 'American_Foursquare', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Hancock_House_(Bluefield,_West_Virginia)', title: 'Hancock House, Bluefield, West Virginia', note: '1907 frame Foursquare with hipped roof, dormer, and wraparound porch' },
    { article: 'O._K._Palmer_House', title: 'O. K. Palmer House, Chehalis, Washington', note: 'two-and-a-half-story Foursquare with low hipped roof and dormers' },
    { article: 'David_L._King_House', title: 'David L. King House, Hardy, Arkansas', note: '1919 hip-roofed Foursquare built of locally made concrete blocks' },
    { article: 'Dr._John_H._Adair_House', title: 'Dr. John H. Adair House, Owatonna, Minnesota', note: '1913 Purcell & Elmslie design applying Prairie detail to Foursquare massing' }
  ],
  'craftsman': [
    { article: 'Gamble_House_(Pasadena,_California)', title: 'Gamble House, Pasadena, California', note: 'Greene and Greene\'s 1908–09 masterpiece, the definitive \'ultimate bungalow\'' },
    { article: 'Robert_R._Blacker_House', title: 'Robert R. Blacker House, Pasadena, California', note: 'the largest of Greene and Greene\'s ultimate bungalows, built 1907' },
    { article: 'Thorsen_House', title: 'William R. Thorsen House, Berkeley, California', note: 'Greene and Greene bungalow with signature clinker brick and timberwork' },
    { article: 'Craftsman_Farms', title: 'Craftsman Farms (Gustav Stickley House), Parsippany-Troy Hills, New Jersey', note: '1911 log house of Gustav Stickley, founder of the Craftsman movement' },
    { article: 'Lanterman_House', title: 'Lanterman House, La Cañada Flintridge, California', note: '1915 Craftsman bungalow in reinforced concrete' },
    { article: 'Riordan_Mansion_State_Historic_Park', title: 'Riordan Mansion, Flagstaff, Arizona', note: '1904 Arts-and-Crafts mansion of log-slab and stone' }
  ],
  'prairie': [
    { article: 'Robie_House', title: 'Frederick C. Robie House, Chicago, Illinois', note: 'Frank Lloyd Wright\'s 1910 icon, widely considered the greatest Prairie style house' },
    { article: 'Darwin_D._Martin_House', title: 'Darwin D. Martin House, Buffalo, New York', note: 'Wright\'s sprawling 1903–07 Prairie estate complex' },
    { article: 'Coonley_House', title: 'Avery Coonley House, Riverside, Illinois', note: 'Wright\'s largest and most elaborate Prairie estate' },
    { article: 'Dana–Thomas_House', title: 'Dana–Thomas House, Springfield, Illinois', note: '35-room 1902–04 Wright house with famous art glass' },
    { article: 'Westcott_House_(Springfield,_Ohio)', title: 'Westcott House, Springfield, Ohio', note: 'Wright\'s only Prairie style house in Ohio' },
    { article: 'Meyer_May_House', title: 'Meyer May House, Grand Rapids, Michigan', note: '\'Michigan\'s Prairie masterpiece,\' a fully restored Wright Prairie home' },
    { article: 'Edna_S._Purcell_House', title: 'Purcell–Cutts House, Minneapolis, Minnesota', note: '1913 Purcell and Elmslie home showing Prairie School beyond Wright' }
  ],
  'tudor-revival': [
    { article: 'Stan_Hywet_Hall_and_Gardens', title: 'Stan Hywet Hall, Akron, Ohio', note: '64,500-square-foot half-timbered Tudor Revival manor' },
    { article: 'Meadow_Brook_Hall', title: 'Meadow Brook Hall, Rochester Hills, Michigan', note: '110-room Tudor Revival mansion (1926–29), a National Historic Landmark' },
    { article: 'Edsel_and_Eleanor_Ford_House', title: 'Edsel and Eleanor Ford House, Grosse Pointe Shores, Michigan', note: 'Albert Kahn\'s 1928 Cotswold-cottage-style estate' },
    { article: 'Salisbury_House_(Des_Moines,_Iowa)', title: 'Salisbury House, Des Moines, Iowa', note: '42-room 1920s Tudor manor with genuine 16th-century timbers' },
    { article: 'Greystone_Mansion', title: 'Greystone Mansion (Doheny Mansion), Beverly Hills, California', note: 'grand 1928 Tudor Revival mansion, a famous film location' },
    { article: 'Agecroft_Hall', title: 'Agecroft Hall, Richmond, Virginia', note: 'genuine Tudor manor re-erected in 1928 in Tudor Revival Windsor Farms' }
  ],
  'colonial-revival': [
    { article: 'Hill–Stead_Museum', title: 'Hill-Stead (Pope-Riddle House), Farmington, Connecticut', note: 'National Historic Landmark, a nationally significant Colonial Revival' },
    { article: 'Graceland', title: 'Graceland, Memphis, Tennessee', note: '1939 Colonial Revival mansion with pedimented portico, Elvis Presley\'s home' },
    { article: 'George_Eastman_Museum', title: 'George Eastman House, Rochester, New York', note: '50-room Colonial Revival mansion built 1902–05 for the Kodak founder' },
    { article: 'Boone_Hall', title: 'Boone Hall plantation house, Mount Pleasant, South Carolina', note: '1936 Colonial Revival with columned portico and live-oak allee' },
    { article: 'Woodrow_Wilson_House_(Washington,_D.C.)', title: 'Woodrow Wilson House, Washington, D.C.', note: '1915 Colonial Revival townhouse, President Wilson\'s retirement home' }
  ],
  'dutch-colonial-revival': [
    { article: 'Dutch_Colonial_Revival_architecture', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Dyckman_House', title: 'Dyckman Farmhouse, Manhattan, New York', note: 'c. 1785 gambrel-roofed farmhouse, the last remaining farmhouse on Manhattan' },
    { article: 'Wyckoff_House', title: 'Pieter Claesen Wyckoff House, Brooklyn, New York', note: 'oldest surviving Dutch frame house in America' },
    { article: 'Steuben_House', title: 'Steuben House, River Edge, New Jersey', note: '1752 Bergen Dutch sandstone house with gambrel roof' },
    { article: 'Hendrick_I._Lott_House', title: 'Hendrick I. Lott House, Brooklyn, New York', note: '1800 farmhouse with the style\'s signature gambrel roof and spring eaves' },
    { article: 'Vander_Ende–Onderdonk_House', title: 'Vander Ende-Onderdonk House, Ridgewood, Queens, New York', note: '1709 Dutch Colonial stone farmhouse' },
    { article: 'T._Harlan_and_Helen_Montgomery_House', title: 'T. Harlan and Helen Montgomery House, Seymour, Indiana', note: 'NRHP-listed early 20th-century Dutch Colonial Revival defined by its gambrel roof' }
  ],
  'spanish-colonial-revival': [
    { article: 'Adamson_House', title: 'Adamson House, Malibu, California', note: '1930 beach house dubbed the \'Taj Mahal of Tile\'' },
    { article: 'Casa_del_Herrero', title: 'Casa del Herrero, Montecito, California', note: '1925 George Washington Smith estate, a National Historic Landmark of the style' },
    { article: 'Scotty\'s_Castle', title: 'Scotty\'s Castle, Death Valley, California', note: '1920s Spanish Colonial Revival villa with tiled roofs, turrets, and patios' },
    { article: 'Casa_Romantica', title: 'Casa Romantica, San Clemente, California', note: '1928 clifftop centerpiece of a Spanish-village-by-the-sea town plan' },
    { article: 'Robert_Bruce_Barbour_House', title: 'Casa Feliz (Robert Bruce Barbour House), Winter Park, Florida', note: '1933 Andalusian-style Spanish Revival farmhouse' },
    { article: 'Wrigley_Mansion', title: 'Wrigley Mansion, Phoenix, Arizona', note: '1929–31 Wrigley winter home blending Spanish Colonial Revival and Monterey themes' }
  ],
  'minimal-traditional': [
    { article: 'Minimal_Traditional', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Michael_Jackson_Childhood_Home', title: 'Michael Jackson Childhood Home, Gary, Indiana', note: '672-square-foot 1949 house, a textbook Minimal Traditional postwar dwelling' },
    { article: 'Levittown,_New_York', title: 'Levittown, Long Island, New York', note: 'archetypal 1947–51 mass-produced suburb of small tract houses' }
  ],
  'ranch': [
    { article: 'Ranch-style_house', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Cliff_May_Experimental_House', title: 'Cliff May Experimental House, Los Angeles, California', note: 'personal experimental home of Cliff May, creator of the California ranch house' },
    { article: 'Fish-Baughman_House', title: 'Fish-Baughman House, Millcreek, Utah', note: '1955 NRHP-listed California Ranch house from the Cliff May Homes prefab program' },
    { article: 'Elvis_Presley_House', title: 'Elvis Presley House, 1034 Audubon Drive, Memphis, Tennessee', note: 'one-story 1950s ranch house where Elvis lived before Graceland' },
    { article: 'X-100_(house)', title: 'Eichler X-100, San Mateo Highlands, California', note: '1956 experimental steel \'house of tomorrow\' in an Eichler ranch tract' },
    { article: 'Rancho_del_Cielo', title: 'Rancho del Cielo (Reagan Ranch), Santa Ynez Mountains, California', note: 'Ronald Reagan\'s rustic adobe ranch house' }
  ],
  'split-level': [
    { article: 'Split-level_home', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Brady_House', title: 'The Brady Bunch House, Studio City, Los Angeles, California', note: '1959 side-split made America\'s most recognizable split-level by The Brady Bunch' }
  ],
  'mid-century-modern': [
    { article: 'Stahl_House', title: 'Stahl House (Case Study House #22), Los Angeles, California', note: 'Pierre Koenig\'s glass-and-steel hillside icon' },
    { article: 'Eames_House', title: 'Eames House (Case Study House #8), Pacific Palisades, California', note: 'Charles and Ray Eames\' 1949 steel-and-glass home, a National Historic Landmark' },
    { article: 'Farnsworth_House', title: 'Edith Farnsworth House, Plano, Illinois', note: 'Mies van der Rohe\'s 1951 glass pavilion' },
    { article: 'Kaufmann_Desert_House', title: 'Kaufmann Desert House, Palm Springs, California', note: 'Richard Neutra\'s 1946 desert modern landmark' },
    { article: 'Glass_House_(New_Canaan,_Connecticut)', title: 'The Glass House, New Canaan, Connecticut', note: 'Philip Johnson\'s 1949 all-glass weekend house' },
    { article: 'Miller_House_(Columbus,_Indiana)', title: 'Miller House, Columbus, Indiana', note: 'Eero Saarinen\'s 1957 flat-roofed residence, a National Historic Landmark' },
    { article: 'Neutra_VDL_Studio_and_Residences', title: 'Neutra VDL Studio and Residences, Los Angeles, California', note: 'Richard Neutra\'s own experimental research house' }
  ],
  'neo-eclectic': [
    { article: 'Neo-eclectic_architecture', title: 'A representative example (style overview)', note: 'lead image of the Wikipedia article on the style itself' },
    { article: 'Versailles_(house)', title: 'Versailles, Windermere, Florida', note: '90,000-square-foot mega-mansion, the McMansion era\'s most famous excess' },
    { article: 'Fleur_de_Lys_(Los_Angeles,_California)', title: 'Fleur de Lys, Holmby Hills, Los Angeles, California', note: '45,000-square-foot French-chateau-style residence completed in 2002' },
    { article: 'Pensmore', title: 'Pensmore, Highlandville, Missouri', note: '72,000-square-foot chateauesque concrete mansion built 2008–2016' }
  ]
};
