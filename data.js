/* NOLA Guide data. Restaurants get merged from research; sights/districts verified. */
window.DATA = {
  districts: [
    { id:"fq", name:"French Quarter & Marigny", short:"French Qtr", emoji:"🏛️",
      center_lat:29.9584, center_lng:-90.0644, zoom:15,
      blurb:"The 300-year-old heart of the city: iron-lace balconies, hidden courtyards, cathedral bells, and live music spilling out of every other door.",
      history_short:"Founded in 1718 by the French as the original city, the Vieux Carré is the oldest neighborhood in New Orleans. Almost none of what you see is French, though: two catastrophic fires in 1788 and 1794 leveled the original town during the Spanish colonial period, so the Quarter was rebuilt in brick, stucco, and courtyards under Spanish building codes. Just downriver, Faubourg Marigny became one of the city's first suburbs in 1805.",
      history_more:"The Quarter was the whole of New Orleans for its first century, packed with Creole families, free people of color, and a busy river port. After the 1803 Louisiana Purchase, incoming Americans built their own district upriver, and the Quarter slowly slid into a bohemian, semi-derelict quarter of artists and cheap rents through the early 1900s—which is precisely what saved its architecture from demolition. A 1920s preservation movement and the 1936 creation of the Vieux Carré Commission locked in its look. Faubourg Marigny, subdivided by the flamboyant Creole Bernard de Marigny, is now the locals' nightlife alternative to Bourbon Street, centered on Frenchmen Street.",
      secrets:[
        "The 'French' Quarter is mostly Spanish colonial in style—two great fires (1788 and 1794) destroyed the original French town, and the Spanish rebuilt it with brick, stucco, courtyards and arches.",
        "Those lacy cast-iron balconies are mostly Victorian-era add-ons from the 1850s onward; the earlier Spanish buildings had simpler wrought-iron railings.",
        "Look for tile plaques at some corners showing the streets' old Spanish colonial names (Royal was 'Calle Real').",
        "Bernard de Marigny, who subdivided the Marigny, is credited with popularizing the dice game craps in America—and reportedly named a street 'Rue de Craps.'",
        "St. Louis Cathedral is the oldest continuously active Catholic cathedral in the United States."
      ],
      walk:{ title:"French Quarter to Frenchmen loop (~2 hrs)",
        summary:"River-edge squares and Creole townhouses down to the Marigny's music street.",
        stops:[
          "Jackson Square — start at the old Place d'Armes parade ground facing the cathedral",
          "St. Louis Cathedral — step inside the oldest continuously active cathedral in the U.S.",
          "New Orleans Pharmacy Museum — a 19th-century apothecary with leech jars and 'voodoo' remedies",
          "Royal Street — antique shops, galleries and the best iron galleries; often car-free midday",
          "Historic New Orleans Collection — free galleries in a preserved 18th-century complex",
          "Preservation Hall — note the line for the no-frills, no-AC trad-jazz shrine (evenings)",
          "French Market — browse the open-air stalls back toward Esplanade",
          "Frenchmen Street — cross into the Marigny for the locals' live-music strip"
        ] } },
    { id:"wh", name:"Warehouse & Arts District", short:"Warehouse", emoji:"🎖️",
      center_lat:29.9445, center_lng:-90.0690, zoom:15,
      blurb:"Repurposed cotton and coffee warehouses now house world-class museums and contemporary-art galleries a few blocks off the river.",
      history_short:"In the 1800s this was the city's industrial waterfront—block after block of brick warehouses storing cotton, coffee, and goods moving through the port. The district emptied out and decayed in the 20th century, then was reborn after the 1984 Louisiana World Exposition brought investment to the riverfront. Today it's branded the Arts District, anchored by the National WWII Museum and a cluster of galleries on Julia Street.",
      history_more:"The neighborhood's showpiece survivor is Julia Row, a block of 13 elegant 1830s Greek Revival townhouses (the 'Thirteen Sisters') built for wealthy Americans. The area's second act began with the World's Fair, whose site sat just here; artists took cheap warehouse space and the Contemporary Arts Center opened in 1976. The National WWII Museum—founded in 2000 as the National D-Day Museum—landed here deliberately: the Higgins landing craft that carried troops ashore at Normandy were designed and built in New Orleans by Andrew Higgins, whom Eisenhower called 'the man who won the war for us.'",
      secrets:[
        "The National WWII Museum is here because the Higgins boats used in every WWII amphibious landing were built in New Orleans—Eisenhower called Andrew Higgins 'the man who won the war for us.'",
        "Julia Street's 'Thirteen Sisters' (Julia Row) is a rare intact block of 1830s American townhouses from when this was a fashionable address.",
        "The whole district was dying warehouse land until the 1984 World's Fair on the riverfront sparked its revival.",
        "Many gallery buildings still show cast-iron columns and freight doors from their warehouse days."
      ],
      walk:{ title:"Arts District museum mile (~2–3 hrs)",
        summary:"A compact walk linking free galleries and major museums.",
        stops:[
          "Sazerac House — free three-floor cocktail museum at the river end of Magazine",
          "Julia Street galleries — stroll the contemporary-art row and Julia Row townhouses",
          "Contemporary Arts Center — rotating modern exhibitions in a converted warehouse",
          "Ogden Museum of Southern Art — the South's art under one soaring atrium",
          "Museum of the Southern Jewish Experience — small, sharp museum of Jewish life across the South",
          "National WWII Museum — end at the sprawling flagship (allow half a day if you go in)"
        ] } },
    { id:"gd", name:"Garden District & Uptown", short:"Garden Dist", emoji:"🚋",
      center_lat:29.9280, center_lng:-90.0850, zoom:14,
      blurb:"Antebellum mansions under ancient oaks, a streetcar older than any other on Earth, and Magazine Street's miles of shops—the American New Orleans.",
      history_short:"When Americans poured in after the 1803 Louisiana Purchase, the Creole French Quarter didn't welcome them, so the newcomers built their own uptown district on former plantation land. They spaced grand houses apart with lush gardens—hence 'Garden District'—and showed off their cotton and sugar fortunes in Greek Revival and Italianate mansions. The St. Charles Avenue streetcar has run through it since 1835.",
      history_more:"The district rose on the subdivided Livaudais plantation in the 1830s–50s, and its Lafayette Cemetery No. 1 dates to 1833. Further upriver, Uptown grew around the 1884 World's Cotton Centennial Exposition, held in what became Audubon Park; the Olmsted firm later shaped the park's lagoons and oak-lined paths. The St. Charles line is the oldest continuously operating street railway in the world, its olive-green 1920s Perley Thomas cars now a National Historic Landmark. Author Anne Rice set her vampire novels among these blocks and once lived here.",
      secrets:[
        "It's called the Garden District because Americans, shut out of the Creole Quarter, spaced their mansions apart with big gardens to flaunt their wealth.",
        "The St. Charles streetcar is the oldest continuously operating street railway in the world, running since 1835.",
        "The whole district was carved out of the Livaudais sugar plantation in the 1830s–50s.",
        "Anne Rice set her vampire novels here and lived in the neighborhood; the film 'Interview with the Vampire' used Lafayette Cemetery No. 1.",
        "Magazine Street runs roughly six miles—one of the longest shopping strips in the South."
      ],
      walk:{ title:"Garden District mansions & Magazine (~1.5–2 hrs)",
        summary:"Ride the streetcar in, wander the mansion blocks, shop back down Magazine.",
        stops:[
          "St. Charles Streetcar — ride the 1920s cars out to Washington Ave and hop off",
          "Garden District mansions — wander Prytania, First and Third Streets past the grandest homes",
          "Lafayette Cemetery No. 1 — peer through the walls at the 1833 above-ground tombs (interior access restricted—see note)",
          "Magazine Street — browse the boutiques, antiques and coffee shops heading back",
          "Audubon Park — optional streetcar ride further uptown to the oak-lined lagoon and 1884 fairgrounds"
        ] } },
    { id:"by", name:"Bywater", short:"Bywater", emoji:"🎨",
      center_lat:29.9640, center_lng:-90.0510, zoom:15,
      blurb:"Candy-colored shotgun houses, warehouse murals, and a reclaimed riverfront park make this downriver neighborhood the city's arts-and-cool frontier.",
      history_short:"Bywater is a downriver, historically working-class neighborhood of 19th-century shotgun and Creole cottages built for the port's laborers, dockworkers, and immigrants. Long overlooked, it has become one of the city's most creative enclaves, its wooden cottages painted in bold colors and its old industrial buildings turned into studios and galleries. In 2014 the derelict wharves along the river reopened as Crescent Park.",
      history_more:"The name supposedly comes from a 1940s telephone exchange; the area sits on the 'sliver by the river,' the higher ground that stayed dry during Hurricane Katrina, which helped fuel its post-2005 revival. Its shotgun houses—one room wide, rooms lined up front to back—are a New Orleans signature, and Bywater has some of the best-preserved and most colorfully painted examples. Artist Brandan 'BMike' Odums turned a 35,000-square-foot warehouse into Studio Be, a monumental space of murals celebrating Black culture and history.",
      secrets:[
        "Bywater sits on the 'sliver by the river'—high ground that largely stayed dry in Katrina, which spurred its revival.",
        "Its narrow 'shotgun' houses are one room wide with rooms in a line—legend says you could fire a shotgun straight through.",
        "Crescent Park's arching pedestrian bridge is nicknamed the 'Rusty Rainbow.'",
        "The neighborhood's name reportedly comes from a mid-20th-century telephone exchange."
      ],
      walk:{ title:"Bywater art & river walk (~1.5 hrs)",
        summary:"Riverfront park, giant murals, and streets of painted cottages.",
        stops:[
          "Crescent Park — enter over the 'Rusty Rainbow' bridge for skyline and river views",
          "Studio Be — BMike's warehouse of monumental murals (check days/hours)",
          "Royal & Dauphine Streets — wander blocks of vividly painted shotgun and Creole cottages",
          "Bywater murals — spot the ever-changing street art on warehouse walls",
          "Markey / Crescent Park north gate — loop back along the levee"
        ] } },
    { id:"cp", name:"City Park & Mid-City", short:"City Park", emoji:"🌳",
      center_lat:29.9870, center_lng:-90.0930, zoom:14,
      blurb:"One of America's great urban parks—ancient oaks, lagoons, a top art museum and a free sculpture garden—wrapped around the historic Bayou St. John.",
      history_short:"City Park, established in 1854, is one of the largest and oldest urban parks in the United States—bigger than New York's Central Park. It holds the world's largest stand of mature live oaks, some estimated at several hundred years old. At its edge sits the New Orleans Museum of Art, opened in 1911, and the free Besthoff Sculpture Garden. Bordering it all is Bayou St. John, the natural waterway that was the city's original back door.",
      history_more:"Bayou St. John was the crucial shortcut that led Bienville to found New Orleans in 1718: Native Americans had long used a portage from Lake Pontchartrain via the bayou to reach the Mississippi, avoiding the river's long mouth. The park grew on former plantation land and was heavily built out by WPA labor in the 1930s, which added its lagoons, bridges, fountains, and stadium. NOMA is the city's oldest fine-arts museum, and the 11-acre Besthoff Sculpture Garden, opened in 2003 and later expanded, threads more than 90 sculptures among the lagoons and Spanish-moss oaks.",
      secrets:[
        "City Park is larger than New York's Central Park and holds the world's largest collection of mature live oaks—some many centuries old.",
        "Bayou St. John was the reason New Orleans exists here: it was the Native American portage shortcut from Lake Pontchartrain that led Bienville to the site in 1718.",
        "Much of the park's bridges, lagoons and buildings were built by WPA workers in the 1930s.",
        "The Besthoff Sculpture Garden is free and packs 90-plus sculptures under 200-year-old oaks."
      ],
      walk:{ title:"City Park oaks & art (~2 hrs)",
        summary:"Museum, free sculpture garden, ancient oaks, and the historic bayou.",
        stops:[
          "New Orleans Museum of Art (NOMA) — start at the 1911 Beaux-Arts museum",
          "Besthoff Sculpture Garden — free walk among 90+ sculptures and lagoons next door",
          "City Park live oaks — find the giant centuries-old oaks near Big Lake",
          "Big Lake / Peristyle — stroll the lagoon paths and 1907 dance pavilion",
          "Bayou St. John & Magnolia (Cabrini) Bridge — end at the historic bayou and its iron footbridge"
        ] } }
  ],

  sights: [
    { id:"jackson-square", name:"Jackson Square", district:"fq", category:"landmark", lat:29.9574, lng:-90.0630,
      blurb:"The Quarter's iconic public square, framed by the cathedral and the Pontalba buildings, full of artists and street performers.",
      secret:"It was originally the Place d'Armes, a military parade ground and site of public executions, before being renamed for Andrew Jackson after the 1815 Battle of New Orleans.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Jackson_Square,_New_Orleans", hours_note:null },
    { id:"st-louis-cathedral", name:"St. Louis Cathedral", district:"fq", category:"landmark", lat:29.9580, lng:-90.0637,
      blurb:"The triple-spired cathedral over Jackson Square, the city's most photographed landmark.",
      secret:"It's the oldest continuously active Catholic cathedral in the United States; the current 1850 building is the third church on the site.",
      free:true, wiki:"https://en.wikipedia.org/wiki/St._Louis_Cathedral,_New_Orleans", hours_note:null },
    { id:"french-market", name:"French Market", district:"fq", category:"shop", lat:29.9600, lng:-90.0598,
      blurb:"A historic open-air market of stalls, crafts, produce and food stretching along the lower Quarter.",
      secret:"It traces its roots to a Native American trading post and claims to be one of the oldest public markets in the country.",
      free:true, wiki:"https://en.wikipedia.org/wiki/French_Market", hours_note:null },
    { id:"royal-street", name:"Royal Street", district:"fq", category:"see", lat:29.9568, lng:-90.0645,
      blurb:"The Quarter's most elegant street—antique shops, art galleries, iron balconies and buskers, often closed to cars midday.",
      secret:"In Spanish colonial days it was 'Calle Real,' the town's main street; some corner tile plaques still note the old name.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Royal_Street,_New_Orleans", hours_note:null },
    { id:"old-ursuline-convent", name:"Old Ursuline Convent", district:"fq", category:"museum", lat:29.9603, lng:-90.0603,
      blurb:"A 1750s convent widely regarded as the oldest building in the Mississippi Valley, now a museum.",
      secret:"It survived the great fire of 1788 that destroyed most of the French Quarter, which is why it's the oldest structure still standing.",
      free:false, wiki:"https://en.wikipedia.org/wiki/Old_Ursuline_Convent,_New_Orleans", hours_note:"Open roughly Tue–Fri; limited hours—check ahead" },
    { id:"frenchmen-street", name:"Frenchmen Street", district:"fq", category:"music", lat:29.9637, lng:-90.0567,
      blurb:"The Marigny's three-block strip of live-music clubs—the locals' answer to Bourbon Street.",
      secret:"It's named for a group of French rebels executed nearby in 1769 for revolting against the new Spanish colonial government.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Frenchmen_Street", hours_note:"Clubs mainly evenings/nights" },
    { id:"jazz-museum-old-mint", name:"New Orleans Jazz Museum (Old U.S. Mint)", district:"fq", category:"museum", lat:29.9615, lng:-90.0577,
      blurb:"Jazz history, instruments and exhibits housed in the historic 1835 Mint building — the Satchmo Fest grounds.",
      secret:"This is the only building in the U.S. to have served as both a United States Mint and a Confederate Mint.",
      free:false, wiki:"https://en.wikipedia.org/wiki/New_Orleans_Mint", hours_note:"Closed Mondays" },
    { id:"historic-new-orleans-collection", name:"The Historic New Orleans Collection", district:"fq", category:"museum", lat:29.9566, lng:-90.0648,
      blurb:"A free museum and archive of the city's history set in a preserved complex of Quarter buildings.",
      secret:"Its Royal Street campus includes the 1792 Merieult House, one of the few structures to survive the 1794 fire.",
      free:true, wiki:"https://en.wikipedia.org/wiki/The_Historic_New_Orleans_Collection", hours_note:"Closed Mondays" },
    { id:"sazerac-house", name:"Sazerac House", district:"fq", category:"museum", lat:29.9497, lng:-90.0668,
      blurb:"A free three-floor interactive museum on the Sazerac cocktail and New Orleans drinking history, with samples for guests 21+.",
      secret:"New Orleans claims the Sazerac as America's first branded cocktail; the city also lays claim to inventing the very word 'cocktail.'",
      free:true, wiki:null, hours_note:"Open daily, generally ~11am–6pm" },
    { id:"pharmacy-museum", name:"New Orleans Pharmacy Museum", district:"fq", category:"museum", lat:29.9570, lng:-90.0636,
      blurb:"A perfectly preserved 1820s apothecary shop packed with old remedies, surgical tools and a physic garden.",
      secret:"It was the shop of Louis Dufilho Jr., considered America's first licensed pharmacist (1816), and still displays leech jars and 'voodoo' remedies.",
      free:false, wiki:"https://en.wikipedia.org/wiki/New_Orleans_Pharmacy_Museum", hours_note:"Closed Sun–Mon (check)" },
    { id:"preservation-hall", name:"Preservation Hall", district:"fq", category:"music", lat:29.9585, lng:-90.0647,
      blurb:"The legendary, no-frills room dedicated to traditional New Orleans jazz since 1961.",
      secret:"There's no air conditioning, no drinks and almost no seating by design—the bare room keeps the focus entirely on the music.",
      free:false, wiki:"https://en.wikipedia.org/wiki/Preservation_Hall", hours_note:"Nightly shows; expect a line" },
    { id:"steamboat-natchez", name:"Steamboat Natchez", district:"fq", category:"see", lat:29.9541, lng:-90.0625,
      blurb:"The city's last authentic steam-powered sternwheeler, offering river cruises from the Toulouse Street wharf.",
      secret:"Its steam calliope (the whistle organ) can be heard across the Quarter, and its engines date to an earlier 1920s steamboat.",
      free:false, wiki:null, hours_note:"Scheduled daily cruises" },
    { id:"louisiana-music-factory", name:"Louisiana Music Factory", district:"fq", category:"shop", lat:29.9634, lng:-90.0574,
      blurb:"A beloved independent record store specializing in Louisiana music, with frequent free in-store live sets.",
      secret:"It regularly hosts free in-store performances by local and touring acts—check the schedule for a show while you browse the vinyl.",
      free:true, wiki:null, hours_note:null },
    { id:"national-wwii-museum", name:"The National WWII Museum", district:"wh", category:"museum", lat:29.9431, lng:-90.0702,
      blurb:"The country's official WWII museum—an immersive, multi-pavilion campus rated among the best museums in America.",
      secret:"It's located here because the Higgins landing craft used in every WWII amphibious invasion were built in New Orleans.",
      free:false, wiki:"https://en.wikipedia.org/wiki/The_National_WWII_Museum", hours_note:"Open daily" },
    { id:"ogden-museum", name:"Ogden Museum of Southern Art", district:"wh", category:"museum", lat:29.9436, lng:-90.0705,
      blurb:"The South's premier collection of Southern art, from folk to contemporary, under a dramatic atrium.",
      secret:"It grew from the private collection of businessman Roland Ogden and holds one of the largest collections of Southern art in the world.",
      free:false, wiki:"https://en.wikipedia.org/wiki/Ogden_Museum_of_Southern_Art", hours_note:"Closed some weekdays—check" },
    { id:"contemporary-arts-center", name:"Contemporary Arts Center", district:"wh", category:"museum", lat:29.9440, lng:-90.0703,
      blurb:"A multidisciplinary center for contemporary visual and performing arts in a converted warehouse.",
      secret:"Opened in 1976 in an old warehouse, it helped kick off the entire Arts District's revival.",
      free:false, wiki:"https://en.wikipedia.org/wiki/Contemporary_Arts_Center,_New_Orleans", hours_note:"Closed Tue (check)" },
    { id:"msje", name:"Museum of the Southern Jewish Experience", district:"wh", category:"museum", lat:29.9455, lng:-90.0693,
      blurb:"A modern museum telling the 300-year story of Jewish life across the American South.",
      secret:"It grew out of an effort to preserve artifacts from small, shuttered synagogues across the rural South.",
      free:false, wiki:"https://en.wikipedia.org/wiki/Museum_of_the_Southern_Jewish_Experience", hours_note:"Closed Tuesdays" },
    { id:"julia-street-galleries", name:"Julia Street Galleries", district:"wh", category:"see", lat:29.9448, lng:-90.0668,
      blurb:"The Arts District's gallery row, plus the historic 'Thirteen Sisters' townhouses of Julia Row.",
      secret:"Julia Row's 13 identical 1830s townhouses (the 'Thirteen Sisters') were once the city's most fashionable American address.",
      free:true, wiki:null, hours_note:"Galleries typically closed Sun–Mon; 'Art Walk' first Saturdays" },
    { id:"lafayette-cemetery-1", name:"Lafayette Cemetery No. 1", district:"gd", category:"landmark", lat:29.9285, lng:-90.0846,
      blurb:"The atmospheric 1833 'city of the dead' in the heart of the Garden District, famous from film and fiction.",
      secret:"Above-ground tombs here aren't only about flooding—they act like ovens in the heat, decomposing remains so vaults can be reused by families over generations.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Lafayette_Cemetery_No._1", hours_note:"Access limited for restoration—verify it's reopened before visiting" },
    { id:"st-charles-streetcar", name:"St. Charles Avenue Streetcar", district:"gd", category:"see", lat:29.9330, lng:-90.0838,
      blurb:"Ride the olive-green vintage cars beneath oak canopies past mansions from Downtown to Uptown.",
      secret:"It's the oldest continuously operating street railway in the world, running since 1835, in 1920s Perley Thomas cars that are a National Historic Landmark.",
      free:false, wiki:"https://en.wikipedia.org/wiki/St._Charles_Streetcar_Line", hours_note:"Runs daily; $1.25 exact fare or Le Pass" },
    { id:"magazine-street", name:"Magazine Street", district:"gd", category:"shop", lat:29.9280, lng:-90.0865,
      blurb:"Roughly six miles of independent boutiques, antique shops, galleries and cafés paralleling the river.",
      secret:"The name comes from the French 'magasin' (warehouse/store), reflecting its early commercial role near the port.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Magazine_Street", hours_note:null },
    { id:"audubon-park", name:"Audubon Park", district:"gd", category:"park", lat:29.9230, lng:-90.1245,
      blurb:"An Uptown park of lagoons, live oaks and a golf course, with the famous Tree of Life and the zoo nearby.",
      secret:"It was the site of the 1884 World's Cotton Centennial Exposition, and its landscape was later shaped by the Olmsted firm.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Audubon_Park_(New_Orleans)", hours_note:null },
    { id:"garden-district-mansions", name:"Garden District Mansions", district:"gd", category:"see", lat:29.9280, lng:-90.0840,
      blurb:"Blocks of opulent 1800s Greek Revival and Italianate mansions behind cast-iron fences and gardens.",
      secret:"Americans built lavishly here precisely because the Creole French Quarter wouldn't welcome them after the Louisiana Purchase.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Garden_District,_New_Orleans", hours_note:null },
    { id:"tipitinas", name:"Tipitina's", district:"gd", category:"music", lat:29.9199, lng:-90.1017,
      blurb:"A legendary Uptown music hall, a temple of New Orleans funk, brass and roots music.",
      secret:"It was founded in 1977 as a home for the pianist Professor Longhair in his final years, and is named after one of his songs.",
      free:false, wiki:"https://en.wikipedia.org/wiki/Tipitina's", hours_note:"Show nights only" },
    { id:"studio-be", name:"Studio Be", district:"by", category:"museum", lat:29.9645, lng:-90.0492,
      blurb:"A 35,000-sq-ft warehouse filled with artist Brandan 'BMike' Odums's monumental murals on Black culture and history.",
      secret:"Odums first drew notice painting murals in abandoned, flood-ruined housing projects after Katrina before creating this permanent space.",
      free:false, wiki:null, hours_note:"Closed Mon–Tue (check days/hours)" },
    { id:"crescent-park", name:"Crescent Park", district:"by", category:"park", lat:29.9660, lng:-90.0520,
      blurb:"A 1.4-mile riverfront park on former wharves with skyline views, a wildflower meadow and an arched pedestrian bridge.",
      secret:"Its landmark rust-steel arch over the railroad tracks is affectionately called the 'Rusty Rainbow.'",
      free:true, wiki:null, hours_note:"Daytime hours; gated" },
    { id:"noma", name:"New Orleans Museum of Art (NOMA)", district:"cp", category:"museum", lat:29.9866, lng:-90.0934,
      blurb:"The city's oldest fine-arts museum, a 1911 Beaux-Arts landmark in City Park with a wide-ranging global collection.",
      secret:"It opened in 1911 with a single donated collection and just nine paintings; the free sculpture garden now spreads across its grounds.",
      free:false, wiki:"https://en.wikipedia.org/wiki/New_Orleans_Museum_of_Art", hours_note:"Closed Mondays (check)" },
    { id:"besthoff-sculpture-garden", name:"Besthoff Sculpture Garden", district:"cp", category:"park", lat:29.9856, lng:-90.0922,
      blurb:"A free 11-acre garden with 90+ sculptures winding among lagoons and centuries-old moss-draped oaks.",
      secret:"Admission is free even though NOMA next door charges—the garden is one of the country's most important sculpture installations.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Sydney_and_Walda_Besthoff_Sculpture_Garden", hours_note:"Open daily; hours shorter Nov–Mar" },
    { id:"city-park", name:"City Park", district:"cp", category:"park", lat:29.9940, lng:-90.0970,
      blurb:"A 1,300-acre park of ancient oaks, lagoons, gardens, an amusement area and Café du Monde—bigger than Central Park.",
      secret:"It holds the world's largest stand of mature live oaks, including trees estimated to be several hundred years old.",
      free:true, wiki:"https://en.wikipedia.org/wiki/City_Park_(New_Orleans)", hours_note:null },
    { id:"bayou-st-john", name:"Bayou St. John", district:"cp", category:"see", lat:29.9760, lng:-90.0840,
      blurb:"A tranquil historic bayou lined with old homes and crossed by the iron Magnolia (Cabrini) footbridge.",
      secret:"This waterway is why New Orleans exists here—it was the Native American portage shortcut from Lake Pontchartrain that led Bienville to found the city in 1718.",
      free:true, wiki:"https://en.wikipedia.org/wiki/Bayou_St._John", hours_note:null }
  ],

  // Restaurants are merged in from research (see bottom). Seed kept minimal here.
  restaurants: [],

  schedule: [
    { when:"2026-07-31T09:25", title:"Land at MSY → French Quarter", where:"Beignets, Jackson Square, pool", nav:"#/d/fq", cta:"Friday plan" },
    { when:"2026-07-31T20:00", title:"Ghost tour", where:"French Quarter Phantoms · ~8pm", nav:"#/d/fq" },
    { when:"2026-08-01T09:30", title:"National WWII Museum", where:"Warehouse District · AM, fully AC", nav:"#/s/national-wwii-museum" },
    { when:"2026-08-01T18:00", title:"White Linen Night", where:"Julia St gallery block party · 6–9pm", nav:"#/d/wh" },
    { when:"2026-08-02T11:30", title:"Commander's Palace brunch", where:"Garden District · jazz brunch", nav:"#/d/gd" },
    { when:"2026-08-02T18:40", title:"Kermit Ruffins — Armstrong tribute", where:"Satchmo Fest closer · Old U.S. Mint", nav:"#/satchmo", cta:"See set times", star:true },
    { when:"2026-08-03T11:00", title:"Checkout → Sazerac House & gifts", where:"Then MSY for 6:59pm flight", nav:"#/d/fq" }
  ],

  days: [
    { day:"Fri", area:"French Quarter", district:"fq", plan:"Land 9:25a → beignets, Jackson Square, Royal St, pool. Dinner <b>Galatoire's</b>. ~8pm ghost tour." },
    { day:"Sat", area:"Warehouse + Satchmo", district:"wh", plan:"AM WWII Museum. Midday pool. Late-aft Satchmo Day 1. <b>6–9pm White Linen Night.</b> Later Frenchmen St." },
    { day:"Sun", area:"Garden + Satchmo", district:"gd", plan:"Commander's brunch → Garden District & Magazine St → pool → Satchmo Day 2. <b>⭐ 6:40pm Kermit Ruffins.</b>" },
    { day:"Mon", area:"FQ, then home", district:"fq", plan:"Checkout 11a → Sazerac House / Royal St gifts (or 11:30 harbor cruise) → MSY for 6:59pm." }
  ],

  bookings: [
    { id:"flights", title:"Flights — Delta", note:"Land 9:25a Fri · depart 6:59p Mon", done:true },
    { id:"hotel", title:"Hotel — Hampton Inn", note:"3 nights · in Fri 3pm / out Mon 11am", done:true },
    { id:"ghost", title:"Ghost tour", note:"Fri ~8pm · French Quarter Phantoms $21/pp", done:false },
    { id:"wwii", title:"WWII Museum", note:"Sat morning · $36/pp (free Aug 1 for BofA cardholders)", done:false },
    { id:"galatoires", title:"Galatoire's (Fri dinner)", note:"Reserve on Resy", done:false },
    { id:"commanders", title:"Commander's Palace (Sun brunch)", note:"Reserve on Resy", done:false },
    { id:"boat", title:"Steamboat cruise (optional)", note:"Mon 11:30am · Natchez $30.52", done:false }
  ],

  fixed: [
    "<b>Flights:</b> land MSY Fri 9:25am · depart Mon 6:59pm",
    "<b>Hotel:</b> check in Fri 3pm · check out Mon 11am",
    "Ghost tour — Fri ~8pm",
    "White Linen Night — Sat 6–9pm",
    "<b style='color:#8a2231'>⭐ Kermit Ruffins — Sun 6:40pm</b>",
    "<b>Reserve:</b> Galatoire's (Fri) · Commander's brunch (Sun) · Steamboat cruise (optional) Mon 11:30am"
  ],

  tobook: [
    "Ghost tour — French Quarter Phantoms $21/pp · Groupon",
    "WWII Museum $36/pp · nationalww2museum.org",
    "Boat — Steamboat Natchez $30.52 · Groupon &nbsp;or&nbsp; Creole Queen $45 · Groupon",
    "Galatoire's (Fri) · Shaya · Commander's brunch (Sun) — Resy"
  ],

  deals: [
    { t:"BofA “Museums on Us”", d:"WWII Museum FREE Sat Aug 1 for Bank of America / Merrill cardholders — show the card at the desk." },
    { t:"Delta Gold Amex", d:"Free 1st checked bag, Main Cabin 1 boarding, 20% back in-flight. Add the card to your SkyMiles profile." },
    { t:"Amex app → Offers", d:"Add Delta / hotel / dining / Lyft offers before you spend." },
    { t:"Already free", d:"Satchmo (both days), White Linen Night, Frenchmen St, Garden District walk, Historic NO Collection, Sazerac House, Crescent Park, NOMA sculpture garden." }
  ],

  budget: [
    { k:"Activities (deals applied)", v:"$175–205" },
    { k:"Food", v:"$400–520" },
    { k:"Transport", v:"$135–150" },
    { k:"Total for two", v:"$710–875", total:true }
  ],

  satchmo: {
    note:"Free both days · 11:30a–8p at the Old U.S. Mint (Jazz Museum). Theme: Lil Hardin Armstrong.",
    star:"Sun 6:40 · Kermit Ruffins — Armstrong tribute, festival closer.",
    sunday:["John Boutté ~12:20","Nayo Jones ~3:00","Don Vappie ~4:40","⭐ Kermit Ruffins ~6:40 (closer)"],
    saturday:["Charmaine Neville ~1:50","Joe Lastie ~3:00","Yusa ~5:00"],
    food:"Fried green tomatoes, veggie sides, sno-balls, beignets, or a grilled scaled-fish plate. Skip shrimp, crawfish, andouille, and catfish (no scales)."
  }
};


/* Restaurants (researched; prices/ratings approx — verify on the day) */
window.DATA.restaurants = [
 {
  "id": "cafe-du-monde",
  "name": "Café du Monde",
  "district": "fq",
  "area_label": "French Quarter",
  "cuisine": "Coffee & beignets",
  "vibe": "The 1862 open-air French Market stand where powdered-sugar beignets and chicory café au lait are a non-negotiable NOLA rite, open nearly around the clock.",
  "price": "$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9575,
  "lng": -90.0614,
  "reserveUrl": null,
  "website": "https://www.cafedumonde.com",
  "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Cafe_Du_Monde2.jpg",
  "menu": [
   {
    "item": "Beignets (order of 3)",
    "price": "$4",
    "note": "vegetarian, powdered-sugar classic"
   },
   {
    "item": "Café au Lait (coffee & chicory)",
    "price": "$4"
   },
   {
    "item": "Frozen Café au Lait",
    "price": "$5"
   },
   {
    "item": "Hot Chocolate",
    "price": "$4"
   },
   {
    "item": "Fresh-Squeezed Orange Juice",
    "price": "$4"
   }
  ],
  "avoid_note": "Nothing to avoid — the whole menu is vegetarian",
  "kosher_style_fit": "Effortless: coffee, beignets, milk, and juice only — 100% safe.",
  "reserve_priority": false,
  "tags": [
   "kosher",
   "veg"
  ]
 },
 {
  "id": "galatoires",
  "name": "Galatoire's",
  "district": "fq",
  "area_label": "French Quarter",
  "cuisine": "Grand Creole",
  "vibe": "A 1905 Bourbon Street institution of white tablecloths, tuxedoed waiters, and Friday-lunch pageantry — jackets required at dinner.",
  "price": "$$$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9557,
  "lng": -90.0678,
  "reserveUrl": "https://www.opentable.com/r/galatoires-restaurant",
  "website": "https://www.galatoires.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Trout Amandine",
    "price": "$40",
    "note": "the signature — speckled trout, brown butter, almonds"
   },
   {
    "item": "Trout Meunière",
    "price": "$38"
   },
   {
    "item": "Grilled Pompano",
    "price": "market",
    "note": "seasonal whole/filet finned fish"
   },
   {
    "item": "Grilled Redfish",
    "price": "$40"
   },
   {
    "item": "Soufflé Potatoes",
    "price": "$11"
   },
   {
    "item": "Fried Eggplant Sticks with Powdered Sugar",
    "price": "$10"
   }
  ],
  "avoid_note": "Shrimp rémoulade, crabmeat maison, oysters Rockefeller, crawfish étouffée",
  "kosher_style_fit": "Easy — trout, pompano, and redfish anchor the menu; just skip the shellfish starters.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "gw-fins",
  "name": "GW Fins",
  "district": "fq",
  "area_label": "French Quarter",
  "cuisine": "Upscale seafood",
  "vibe": "Polished modern seafood house with a menu printed fresh daily around whatever finned fish came off the boat that morning.",
  "price": "$$$$",
  "rating": 4.7,
  "rating_note": "Google/Yelp ~4.7",
  "lat": 29.9546,
  "lng": -90.0698,
  "reserveUrl": "https://www.gwfins.com/reservations",
  "website": "https://www.gwfins.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Wood-Grilled Yellowfin Tuna",
    "price": "$46"
   },
   {
    "item": "Parmesan-Crusted Sheepshead",
    "price": "$42",
    "note": "sheepshead is a scaled Gulf fish"
   },
   {
    "item": "Daily Whole/Filet Fresh Catch",
    "price": "market",
    "note": "ask for a scaled species (snapper, drum, pompano)"
   },
   {
    "item": "Scalibut (halibut)",
    "price": "market"
   },
   {
    "item": "Roasted Beet & Goat Cheese Salad",
    "price": "$14"
   }
  ],
  "avoid_note": "Lobster dumplings, shrimp, crab, oysters",
  "kosher_style_fit": "Very easy — the kitchen is fish-forward and happy to steer you to scaled catches.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "napoleon-house",
  "name": "Napoleon House",
  "district": "fq",
  "area_label": "French Quarter",
  "cuisine": "Creole cafe / bar",
  "vibe": "A crumbling-plaster 1797 landmark with a leafy courtyard, Pimm's Cups, and classical music — the most atmospheric casual perch in the Quarter.",
  "price": "$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9573,
  "lng": -90.0637,
  "reserveUrl": null,
  "website": "https://www.napoleonhouse.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Vegetarian Muffuletta",
    "price": "$16",
    "note": "grilled veg + olive salad on sesame bread"
   },
   {
    "item": "Caprese Salad",
    "price": "$12"
   },
   {
    "item": "House Salad",
    "price": "$9"
   },
   {
    "item": "Cheese Board",
    "price": "$14"
   },
   {
    "item": "Pimm's Cup",
    "price": "$10",
    "note": "the house drink"
   }
  ],
  "avoid_note": "Classic muffuletta (cured meats), seafood gumbo (shrimp), jambalaya (andouille), red beans with sausage",
  "kosher_style_fit": "Walk-in easy for a light veg lunch or a drink; ask for the vegetarian muffuletta.",
  "reserve_priority": false,
  "tags": [
   "veg"
  ]
 },
 {
  "id": "sylvain",
  "name": "Sylvain",
  "district": "fq",
  "area_label": "French Quarter",
  "cuisine": "Southern bistro",
  "vibe": "A candlelit 1790s carriage house a block off Jackson Square serving inventive Southern plates and craft cocktails to a mostly-local crowd.",
  "price": "$$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9582,
  "lng": -90.0641,
  "reserveUrl": "https://www.opentable.com/r/sylvain-new-orleans",
  "website": "https://www.sylvainnola.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Seared Striped Bass, leeks & asparagus",
    "price": "$32",
    "note": "ask for it without the crabmeat garnish"
   },
   {
    "item": "Fried Green Tomatoes with rémoulade",
    "price": "$12"
   },
   {
    "item": "Ricotta Gnocchi (vegetarian)",
    "price": "$22"
   },
   {
    "item": "Little Gem Salad",
    "price": "$12"
   },
   {
    "item": "Cheese & Bread plate",
    "price": "$16"
   }
  ],
  "avoid_note": "Chicken-liver toast, short-rib sandwich, oysters, shrimp",
  "kosher_style_fit": "Easy — a solid finned-fish entrée plus veg starters in a great room.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "st-roch-market",
  "name": "St. Roch Market",
  "district": "fq",
  "area_label": "French Quarter",
  "cuisine": "Food hall",
  "vibe": "A bright restored 1875 public market on the Marigny/St. Roch edge with a dozen local stalls and a central cocktail bar — everyone picks their own thing.",
  "price": "$$",
  "rating": 4.4,
  "rating_note": "Google ~4.4",
  "lat": 29.9648,
  "lng": -90.053,
  "reserveUrl": null,
  "website": "https://www.strochmarket.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Falafel plate (Dolma)",
    "price": "$12",
    "note": "Egyptian/Middle Eastern stall"
   },
   {
    "item": "Hummus & pita (Dolma)",
    "price": "$9"
   },
   {
    "item": "Salmon or Tuna Poke Bowl (Lin)",
    "price": "$16"
   },
   {
    "item": "Salmon / Tuna Handrolls (Lin)",
    "price": "$8"
   },
   {
    "item": "Fresh-Pressed Juice",
    "price": "$7"
   },
   {
    "item": "Coffee (CR Coffee)",
    "price": "$4"
   }
  ],
  "avoid_note": "Raw oysters, shrimp & crawfish grits, andouille gravy at the Southern stall",
  "kosher_style_fit": "Flexible — Middle Eastern veg and sushi-grade salmon/tuna stalls make it a safe pick-your-own.",
  "reserve_priority": false,
  "tags": [
   "veg",
   "fish"
  ]
 },
 {
  "id": "peche-seafood-grill",
  "name": "Pêche Seafood Grill",
  "district": "wh",
  "area_label": "Warehouse/Arts",
  "cuisine": "Live-fire Gulf seafood",
  "vibe": "Donald Link's buzzy, high-ceilinged Warehouse room built around a wood-coal hearth where whole fish are grilled and filleted tableside.",
  "price": "$$$",
  "rating": 4.5,
  "rating_note": "Google/Yelp ~4.5",
  "lat": 29.9448,
  "lng": -90.07,
  "reserveUrl": "https://www.pecherestaurant.com",
  "website": "https://www.pecherestaurant.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Whole Grilled Fish",
    "price": "market",
    "note": "ask for a scaled species — pompano, snapper, drum"
   },
   {
    "item": "Grilled Fish with salsa verde",
    "price": "$32"
   },
   {
    "item": "Smoked Tuna Dip",
    "price": "$15"
   },
   {
    "item": "Ground-Coal Roasted Beets",
    "price": "$10"
   },
   {
    "item": "Brussels Sprouts / Turnips side",
    "price": "$9"
   }
  ],
  "avoid_note": "Fried catfish (no scales — house signature), shrimp, oysters, crab claws, crawfish",
  "kosher_style_fit": "Easy if you steer to the whole/grilled finned fish — just skip the famous catfish and shellfish.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "compere-lapin",
  "name": "Compère Lapin",
  "district": "wh",
  "area_label": "Warehouse/Arts",
  "cuisine": "Caribbean-Creole",
  "vibe": "Top Chef's Nina Compton plates Caribbean-meets-Creole cooking in an exposed-brick former coffee warehouse inside the Old No. 77 hotel.",
  "price": "$$$",
  "rating": 4.6,
  "rating_note": "Google ~4.6",
  "lat": 29.9456,
  "lng": -90.0668,
  "reserveUrl": "https://www.opentable.com/r/compere-lapin",
  "website": "https://www.comperelapin.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Daily Fresh Catch Fish",
    "price": "market",
    "note": "ask species; usually a scaled Gulf fish"
   },
   {
    "item": "Cornmeal-Crusted Fish",
    "price": "$36"
   },
   {
    "item": "Jalapeño Hush Puppies",
    "price": "$11"
   },
   {
    "item": "Roasted Carrots & Beets",
    "price": "$12"
   },
   {
    "item": "Coconut Rice side",
    "price": "$8"
   }
  ],
  "avoid_note": "Conch croquettes, curried goat, spiced pig ears, shrimp",
  "kosher_style_fit": "Easy — a reliable daily finned-fish plate plus veg sides; avoid the conch and meat dishes.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "seaworthy",
  "name": "Seaworthy",
  "district": "wh",
  "area_label": "Warehouse/Arts",
  "cuisine": "Oyster bar & seafood",
  "vibe": "An 1832 Creole cottage turned candlelit oyster-and-fish bar in the CBD, all reclaimed wood and craft cocktails.",
  "price": "$$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9487,
  "lng": -90.0714,
  "reserveUrl": "https://www.opentable.com/r/seaworthy-new-orleans-2",
  "website": "https://seaworthynola.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Pecan-Crusted Flounder",
    "price": "$34",
    "note": "flounder is a scaled flatfish"
   },
   {
    "item": "Grilled Gulf Fish",
    "price": "market"
   },
   {
    "item": "Roasted Beet Salad",
    "price": "$14"
   },
   {
    "item": "Wedge Salad",
    "price": "$13"
   },
   {
    "item": "Charred Broccoli",
    "price": "$10"
   }
  ],
  "avoid_note": "Raw oysters, shrimp, Maine lobster roll, crab",
  "kosher_style_fit": "Easy for the fish and veg — it's an oyster bar, so simply skip the raw bar.",
  "reserve_priority": false,
  "tags": [
   "fish"
  ]
 },
 {
  "id": "commanders-palace",
  "name": "Commander's Palace",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "Haute Creole",
  "vibe": "The turquoise-and-white Garden District grande dame since 1893 — jazz brunches, 25-cent martinis, and white-glove Creole fine dining.",
  "price": "$$$$",
  "rating": 4.7,
  "rating_note": "Google ~4.7",
  "lat": 29.9285,
  "lng": -90.0842,
  "reserveUrl": "https://www.opentable.com/r/commanders-palace-new-orleans",
  "website": "https://www.commanderspalace.com",
  "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Commander%27s_Palace_-_New_Orleans_August_2022.jpg",
  "menu": [
   {
    "item": "Pecan-Crusted Gulf Fish",
    "price": "$42",
    "note": "the house classic"
   },
   {
    "item": "Cast-Iron Seared Gulf Fish",
    "price": "$44"
   },
   {
    "item": "Garden Salad",
    "price": "$14"
   },
   {
    "item": "Creole Bread Pudding Soufflé",
    "price": "$12",
    "note": "vegetarian, must-order dessert"
   }
  ],
  "avoid_note": "Turtle soup, shrimp & tasso Henican, crawfish gnocchi, oysters",
  "kosher_style_fit": "Easy and special — two marquee Gulf-fish entrées; just avoid the turtle soup and shellfish.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "la-petite-grocery",
  "name": "La Petite Grocery",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "French-Creole bistro",
  "vibe": "A charming Magazine Street bistro in a former 1900s grocery, Michelin-recommended, warm and buzzy without being stuffy.",
  "price": "$$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9224,
  "lng": -90.0975,
  "reserveUrl": "https://www.opentable.com/r/la-petite-grocery-new-orleans",
  "website": "https://www.lapetitegrocery.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Pan-Roasted Gulf Fish",
    "price": "$34"
   },
   {
    "item": "Grilled Fish of the Day",
    "price": "market"
   },
   {
    "item": "Ricotta Cavatelli (vegetarian)",
    "price": "$24"
   },
   {
    "item": "Butter Lettuce Salad",
    "price": "$12"
   },
   {
    "item": "Beignets (dessert)",
    "price": "$10"
   }
  ],
  "avoid_note": "Blue crab beignets, turtle Bolognese, paneed rabbit, shrimp",
  "kosher_style_fit": "Easy — dependable Gulf fish and a veg pasta; skip the famous crab beignets and turtle.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "shaya",
  "name": "Shaya",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "Israeli",
  "vibe": "James Beard-winning modern Israeli cooking on Magazine Street, built around wood-fired pita pulled from the oven steps from your table.",
  "price": "$$$",
  "rating": 4.6,
  "rating_note": "Google ~4.6",
  "lat": 29.9227,
  "lng": -90.0971,
  "reserveUrl": "https://www.opentable.com/r/shaya-new-orleans",
  "website": "https://www.shayarestaurant.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Hummus with wood-fired pita",
    "price": "$13"
   },
   {
    "item": "Falafel",
    "price": "$11"
   },
   {
    "item": "Whole Roasted Fish",
    "price": "market",
    "note": "ask for a scaled species"
   },
   {
    "item": "Salmon with couscous",
    "price": "$32"
   },
   {
    "item": "Wood-Roasted Cauliflower",
    "price": "$14"
   },
   {
    "item": "Labneh & salatim spreads",
    "price": "$12"
   }
  ],
  "avoid_note": "Lamb dishes, duck; their fried-chicken hummus (chicken)",
  "kosher_style_fit": "Ideal — a whole vegetarian mezze world plus salmon and whole fish; kosher-style heaven.",
  "reserve_priority": true,
  "tags": [
   "book",
   "veg",
   "fish"
  ]
 },
 {
  "id": "saba",
  "name": "Saba",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "Israeli",
  "vibe": "Chef Alon Shaya's sunlit uptown flagship — bright, bustling modern Israeli with pita, hummus, and hearth-cooked fish.",
  "price": "$$$",
  "rating": 4.6,
  "rating_note": "Google ~4.6",
  "lat": 29.9153,
  "lng": -90.1099,
  "reserveUrl": "https://www.opentable.com/r/saba-new-orleans",
  "website": "https://eatwithsaba.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Classic Hummus with wood-fired pita",
    "price": "$12"
   },
   {
    "item": "Falafel",
    "price": "$12"
   },
   {
    "item": "Whole Fried Fish",
    "price": "market",
    "note": "ask for a scaled species"
   },
   {
    "item": "Grilled Fish",
    "price": "$30"
   },
   {
    "item": "Roasted Cauliflower",
    "price": "$14"
   },
   {
    "item": "Shakshuka (vegetarian)",
    "price": "$16"
   }
  ],
  "avoid_note": "Blue crab hummus (house signature — has crab), chicken schnitzel, lamb, shrimp",
  "kosher_style_fit": "Ideal — huge veg mezze plus fish; only trap is the blue-crab hummus, so order the classic.",
  "reserve_priority": true,
  "tags": [
   "book",
   "veg",
   "fish"
  ]
 },
 {
  "id": "bearcat-cafe",
  "name": "Bearcat Cafe",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "Cafe / brunch",
  "vibe": "A sunny uptown all-day cafe with a playful 'Good Cat / Bad Cat' menu, local coffee, and lots of veg, vegan, and gluten-free options.",
  "price": "$$",
  "rating": 4.6,
  "rating_note": "Google ~4.6",
  "lat": 29.9356,
  "lng": -90.104,
  "reserveUrl": null,
  "website": "https://bearcatcafe.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Smoked Salmon Toast",
    "price": "$16"
   },
   {
    "item": "Avocado Toast",
    "price": "$13"
   },
   {
    "item": "Bananas Foster Pancakes",
    "price": "$14"
   },
   {
    "item": "Veggie Breakfast Bowl",
    "price": "$14"
   },
   {
    "item": "Green Cat Smoothie",
    "price": "$9"
   }
  ],
  "avoid_note": "Shrimp & grits, brisket hash, bacon/ham/andouille sides",
  "kosher_style_fit": "Easy breakfast/lunch — smoked-salmon and veg dishes abound; just skip the 'Bad Cat' meat plates.",
  "reserve_priority": false,
  "tags": [
   "veg",
   "fish"
  ]
 },
 {
  "id": "coquette",
  "name": "Coquette",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "Modern Southern",
  "vibe": "A romantic corner bistro on the Garden District edge with tin ceilings and a tasting-menu kitchen turning out inventive seasonal, local plates.",
  "price": "$$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9309,
  "lng": -90.086,
  "reserveUrl": "https://www.opentable.com/r/coquette",
  "website": "https://www.coquettenola.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Gulf Fish entrée",
    "price": "market",
    "note": "changes with the catch"
   },
   {
    "item": "Grilled Fish of the Day",
    "price": "$38"
   },
   {
    "item": "Seasonal Vegetable Plate",
    "price": "$26"
   },
   {
    "item": "Little Gem Salad",
    "price": "$14"
   },
   {
    "item": "Skillet Cornbread",
    "price": "$8"
   }
  ],
  "avoid_note": "Raw oysters, crab, shrimp, charcuterie/pork",
  "kosher_style_fit": "Easy — seasonal Gulf fish plus a strong vegetable program; tell them your no-shellfish rule.",
  "reserve_priority": true,
  "tags": [
   "book",
   "fish"
  ]
 },
 {
  "id": "mais-arepas",
  "name": "Maïs Arepas",
  "district": "gd",
  "area_label": "Garden District/Uptown",
  "cuisine": "Colombian",
  "vibe": "A warm, colorful Lower Garden District spot turning out griddled corn arepas, empanadas, and plantains with lots for vegetarians.",
  "price": "$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9377,
  "lng": -90.0793,
  "reserveUrl": "https://www.opentable.com/r/mais-arepas-new-orleans",
  "website": null,
  "photoUrl": null,
  "menu": [
   {
    "item": "Arepa de Queso (cheese)",
    "price": "$9"
   },
   {
    "item": "Grilled Vegetable & Mozzarella Arepa",
    "price": "$12"
   },
   {
    "item": "Patacón with mushrooms & avocado",
    "price": "$12"
   },
   {
    "item": "Pescado (pan-seared fish)",
    "price": "$26"
   },
   {
    "item": "Cheese Empanadas",
    "price": "$8"
   },
   {
    "item": "Tostones",
    "price": "$7"
   }
  ],
  "avoid_note": "Chicharrón, pork/carne dishes, shrimp ceviche",
  "kosher_style_fit": "Easy and fun — cheese/veg arepas galore plus a pan-seared fish plate.",
  "reserve_priority": false,
  "tags": [
   "veg",
   "fish"
  ]
 },
 {
  "id": "bacchanal-wine",
  "name": "Bacchanal Wine",
  "district": "by",
  "area_label": "Bywater",
  "cuisine": "Wine bar / Mediterranean",
  "vibe": "A magical Bywater backyard of string lights, live jazz nightly, and build-your-own cheese boards with Mediterranean small plates.",
  "price": "$$$",
  "rating": 4.6,
  "rating_note": "Google ~4.6",
  "lat": 29.9607,
  "lng": -90.0487,
  "reserveUrl": "https://www.opentable.com/r/bacchanal-wine-new-orleans",
  "website": "https://www.bacchanalwine.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Cheese Board (order cheese-only)",
    "price": "$22"
   },
   {
    "item": "Grilled Sardines",
    "price": "$14",
    "note": "scaled fish"
   },
   {
    "item": "Salt Cod Fritters (brandade)",
    "price": "$12"
   },
   {
    "item": "Tomato & Tzatziki with pita",
    "price": "$9"
   },
   {
    "item": "Beet Salad",
    "price": "$12"
   }
  ],
  "avoid_note": "Mussels, clams, shrimp; the charcuterie/cured meats (build a cheese-only board)",
  "kosher_style_fit": "Easy — cheeses, veg, and finned fish like sardines and cod; skip the mussels and meats.",
  "reserve_priority": false,
  "tags": [
   "veg",
   "fish"
  ]
 },
 {
  "id": "satsuma-cafe",
  "name": "Satsuma Café",
  "district": "by",
  "area_label": "Bywater",
  "cuisine": "Cafe / juice bar",
  "vibe": "An artsy, laid-back Bywater corner cafe known for fresh-pressed juices, hearty sandwiches, and a big vegetarian/vegan spread.",
  "price": "$",
  "rating": 4.4,
  "rating_note": "Google ~4.4",
  "lat": 29.9641,
  "lng": -90.0554,
  "reserveUrl": null,
  "website": "https://satsumacafe.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Salmon Melt",
    "price": "$14"
   },
   {
    "item": "Avocado Toast",
    "price": "$11"
   },
   {
    "item": "Veggie Breakfast Burrito",
    "price": "$12"
   },
   {
    "item": "Kale Caesar Salad",
    "price": "$12"
   },
   {
    "item": "Fresh-Pressed Juice (Popeye / watermelon)",
    "price": "$7"
   }
  ],
  "avoid_note": "Green Eggs & Ham sandwich, bacon/ham breakfast items, turkey",
  "kosher_style_fit": "Easy breakfast/lunch — salmon melt plus loads of veg and juices.",
  "reserve_priority": false,
  "tags": [
   "veg",
   "fish"
  ]
 },
 {
  "id": "pizza-delicious",
  "name": "Pizza Delicious",
  "district": "by",
  "area_label": "Bywater",
  "cuisine": "NY pizza",
  "vibe": "A beloved, casual Bywater pizzeria doing 18-inch New York-style pies, house pastas, and salads in a picnic-table warehouse space.",
  "price": "$$",
  "rating": 4.6,
  "rating_note": "Google ~4.6",
  "lat": 29.9626,
  "lng": -90.0516,
  "reserveUrl": null,
  "website": "https://pizzadelicious.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Margherita Pizza (18\")",
    "price": "$22"
   },
   {
    "item": "Cheese Slice",
    "price": "$4"
   },
   {
    "item": "Vodka Sauce Pasta",
    "price": "$14"
   },
   {
    "item": "Caesar Salad",
    "price": "$9"
   },
   {
    "item": "Garlic Knots",
    "price": "$6"
   }
  ],
  "avoid_note": "Pepperoni/sausage pizzas, meatball specials",
  "kosher_style_fit": "Very easy — cheese and veg pizzas plus pasta and salad; a reliable casual dinner.",
  "reserve_priority": false,
  "tags": [
   "veg"
  ]
 },
 {
  "id": "morning-call",
  "name": "Morning Call Coffee Stand",
  "district": "cp",
  "area_label": "Mid-City/City Park",
  "cuisine": "Coffee & beignets",
  "vibe": "The old-school beignet rival to Café du Monde, now on a breezy Canal Boulevard porch near City Park — cash-only, self-sugared beignets.",
  "price": "$",
  "rating": 4.3,
  "rating_note": "Google ~4.3",
  "lat": 29.9825,
  "lng": -90.1103,
  "reserveUrl": null,
  "website": "https://morningcallnola.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Beignets (order of 3)",
    "price": "$3.50",
    "note": "you sugar them yourself"
   },
   {
    "item": "Café au Lait",
    "price": "$3"
   },
   {
    "item": "Chicory Coffee",
    "price": "$3"
   },
   {
    "item": "Hot Chocolate",
    "price": "$3"
   }
  ],
  "avoid_note": "Mini muffuletta (meat), red beans with sausage, jambalaya (andouille)",
  "kosher_style_fit": "Effortless for the beignets and coffee; just skip the savory meat plates. Bring cash.",
  "reserve_priority": false,
  "tags": [
   "veg"
  ]
 },
 {
  "id": "ralphs-on-the-park",
  "name": "Ralph's on the Park",
  "district": "cp",
  "area_label": "Mid-City/City Park",
  "cuisine": "Creole",
  "vibe": "A gracious 1860 clapboard house facing the live oaks of City Park, a Brennan-family Creole room made for a leisurely lunch with a view.",
  "price": "$$$",
  "rating": 4.5,
  "rating_note": "Google ~4.5",
  "lat": 29.9834,
  "lng": -90.0981,
  "reserveUrl": "https://www.opentable.com/ralphs-on-the-park",
  "website": "https://www.ralphsonthepark.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Blackened Gulf Fish",
    "price": "$36"
   },
   {
    "item": "Grilled Gulf Fish",
    "price": "market"
   },
   {
    "item": "Garden Salad",
    "price": "$12"
   },
   {
    "item": "Mirliton & seasonal veg side",
    "price": "$9"
   },
   {
    "item": "Bananas Foster (dessert)",
    "price": "$12"
   }
  ],
  "avoid_note": "Crab frittata, shrimp & grits, turtle soup",
  "kosher_style_fit": "Easy — Gulf fish and veg with a City Park view; avoid the crab and shrimp plates.",
  "reserve_priority": false,
  "tags": [
   "fish"
  ]
 },
 {
  "id": "monas-cafe",
  "name": "Mona's Café",
  "district": "cp",
  "area_label": "Mid-City/City Park",
  "cuisine": "Lebanese",
  "vibe": "A no-frills, longtime Mid-City Lebanese mainstay (freshly renovated) with generous mezze and one of the city's best cheap vegetarian spreads.",
  "price": "$",
  "rating": 4.4,
  "rating_note": "Google ~4.4",
  "lat": 29.9583,
  "lng": -90.0928,
  "reserveUrl": null,
  "website": "https://monascafeanddeli.com",
  "photoUrl": null,
  "menu": [
   {
    "item": "Hummus",
    "price": "$7"
   },
   {
    "item": "Baba Ganuj",
    "price": "$7"
   },
   {
    "item": "Falafel plate",
    "price": "$12"
   },
   {
    "item": "Vegetarian Grape Leaves",
    "price": "$8"
   },
   {
    "item": "Fattoush Salad",
    "price": "$9"
   },
   {
    "item": "Spinach Pie",
    "price": "$6"
   }
  ],
  "avoid_note": "Beef/lamb lula kebab, gyro meat, shawarma",
  "kosher_style_fit": "Ideal for cheap veg — the whole vegetarian mezze section is fair game.",
  "reserve_priority": false,
  "tags": [
   "veg"
  ]
 }
];
