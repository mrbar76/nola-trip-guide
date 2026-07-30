/* NOLA Guide data. Curated hour-by-hour schedule (editable in-app, per device). Menus re-extracted from each restaurant's own current menu where machine-readable and flagged verified/approximate. Weather is a live NWS fetch with a baked snapshot as offline fallback. Prices & 2026 event dates approximate — verify on the day. */
window.DATA = {
 "districts": [
  {
   "id": "fq",
   "name": "French Quarter & Marigny",
   "short": "French Qtr",
   "emoji": "🏛️",
   "center_lat": 29.9584,
   "center_lng": -90.0644,
   "zoom": 15,
   "blurb": "The 300-year-old heart of the city: iron-lace balconies, hidden courtyards, cathedral bells, and live music spilling out of every other door.",
   "history_short": "Founded in 1718 by the French as the original city, the Vieux Carré is the oldest neighborhood in New Orleans. Almost none of what you see is French, though: two catastrophic fires in 1788 and 1794 leveled the original town during the Spanish colonial period, so the Quarter was rebuilt in brick, stucco, and courtyards under Spanish building codes. Just downriver, Faubourg Marigny became one of the city's first suburbs in 1805.",
   "history_more": "The Quarter was the whole of New Orleans for its first century, packed with Creole families, free people of color, and a busy river port. After the 1803 Louisiana Purchase, incoming Americans built their own district upriver, and the Quarter slowly slid into a bohemian, semi-derelict quarter of artists and cheap rents through the early 1900s—which is precisely what saved its architecture from demolition. A 1920s preservation movement and the 1936 creation of the Vieux Carré Commission locked in its look. Faubourg Marigny, subdivided by the flamboyant Creole Bernard de Marigny, is now the locals' nightlife alternative to Bourbon Street, centered on Frenchmen Street.",
   "secrets": [
    "The 'French' Quarter is mostly Spanish colonial in style—two great fires (1788 and 1794) destroyed the original French town, and the Spanish rebuilt it with brick, stucco, courtyards and arches.",
    "Those lacy cast-iron balconies are mostly Victorian-era add-ons from the 1850s onward; the earlier Spanish buildings had simpler wrought-iron railings.",
    "Look for tile plaques at some corners showing the streets' old Spanish colonial names (Royal was 'Calle Real').",
    "Bernard de Marigny, who subdivided the Marigny, is credited with popularizing the dice game craps in America—and reportedly named a street 'Rue de Craps.'",
    "St. Louis Cathedral is the oldest continuously active Catholic cathedral in the United States."
   ],
   "walk": {
    "title": "French Quarter to Frenchmen loop (~2 hrs)",
    "summary": "River-edge squares and Creole townhouses down to the Marigny's music street.",
    "stops": [
     "Jackson Square — start at the old Place d'Armes parade ground facing the cathedral",
     "St. Louis Cathedral — step inside the oldest continuously active cathedral in the U.S.",
     "New Orleans Pharmacy Museum — a 19th-century apothecary with leech jars and 'voodoo' remedies",
     "Royal Street — antique shops, galleries and the best iron galleries; often car-free midday",
     "Historic New Orleans Collection — free galleries in a preserved 18th-century complex",
     "Preservation Hall — note the line for the no-frills, no-AC trad-jazz shrine (evenings)",
     "French Market — browse the open-air stalls back toward Esplanade",
     "Frenchmen Street — cross into the Marigny for the locals' live-music strip"
    ]
   }
  },
  {
   "id": "wh",
   "name": "Warehouse & Arts District",
   "short": "Warehouse",
   "emoji": "🎖️",
   "center_lat": 29.9445,
   "center_lng": -90.069,
   "zoom": 15,
   "blurb": "Repurposed cotton and coffee warehouses now house world-class museums and contemporary-art galleries a few blocks off the river.",
   "history_short": "In the 1800s this was the city's industrial waterfront—block after block of brick warehouses storing cotton, coffee, and goods moving through the port. The district emptied out and decayed in the 20th century, then was reborn after the 1984 Louisiana World Exposition brought investment to the riverfront. Today it's branded the Arts District, anchored by the National WWII Museum and a cluster of galleries on Julia Street.",
   "history_more": "The neighborhood's showpiece survivor is Julia Row, a block of 13 elegant 1830s Greek Revival townhouses (the 'Thirteen Sisters') built for wealthy Americans. The area's second act began with the World's Fair, whose site sat just here; artists took cheap warehouse space and the Contemporary Arts Center opened in 1976. The National WWII Museum—founded in 2000 as the National D-Day Museum—landed here deliberately: the Higgins landing craft that carried troops ashore at Normandy were designed and built in New Orleans by Andrew Higgins, whom Eisenhower called 'the man who won the war for us.'",
   "secrets": [
    "The National WWII Museum is here because the Higgins boats used in every WWII amphibious landing were built in New Orleans—Eisenhower called Andrew Higgins 'the man who won the war for us.'",
    "Julia Street's 'Thirteen Sisters' (Julia Row) is a rare intact block of 1830s American townhouses from when this was a fashionable address.",
    "The whole district was dying warehouse land until the 1984 World's Fair on the riverfront sparked its revival.",
    "Many gallery buildings still show cast-iron columns and freight doors from their warehouse days."
   ],
   "walk": {
    "title": "Arts District museum mile (~2–3 hrs)",
    "summary": "A compact walk linking free galleries and major museums.",
    "stops": [
     "Sazerac House — free three-floor cocktail museum at the river end of Magazine",
     "Julia Street galleries — stroll the contemporary-art row and Julia Row townhouses",
     "Contemporary Arts Center — rotating modern exhibitions in a converted warehouse",
     "Ogden Museum of Southern Art — the South's art under one soaring atrium",
     "Museum of the Southern Jewish Experience — small, sharp museum of Jewish life across the South",
     "National WWII Museum — end at the sprawling flagship (allow half a day if you go in)"
    ]
   }
  },
  {
   "id": "gd",
   "name": "Garden District & Uptown",
   "short": "Garden Dist",
   "emoji": "🚋",
   "center_lat": 29.928,
   "center_lng": -90.085,
   "zoom": 14,
   "blurb": "Antebellum mansions under ancient oaks, a streetcar older than any other on Earth, and Magazine Street's miles of shops—the American New Orleans.",
   "history_short": "When Americans poured in after the 1803 Louisiana Purchase, the Creole French Quarter didn't welcome them, so the newcomers built their own uptown district on former plantation land. They spaced grand houses apart with lush gardens—hence 'Garden District'—and showed off their cotton and sugar fortunes in Greek Revival and Italianate mansions. The St. Charles Avenue streetcar has run through it since 1835.",
   "history_more": "The district rose on the subdivided Livaudais plantation in the 1830s–50s, and its Lafayette Cemetery No. 1 dates to 1833. Further upriver, Uptown grew around the 1884 World's Cotton Centennial Exposition, held in what became Audubon Park; the Olmsted firm later shaped the park's lagoons and oak-lined paths. The St. Charles line is the oldest continuously operating street railway in the world, its olive-green 1920s Perley Thomas cars now a National Historic Landmark. Author Anne Rice set her vampire novels among these blocks and once lived here.",
   "secrets": [
    "It's called the Garden District because Americans, shut out of the Creole Quarter, spaced their mansions apart with big gardens to flaunt their wealth.",
    "The St. Charles streetcar is the oldest continuously operating street railway in the world, running since 1835.",
    "The whole district was carved out of the Livaudais sugar plantation in the 1830s–50s.",
    "Anne Rice set her vampire novels here and lived in the neighborhood; the film 'Interview with the Vampire' used Lafayette Cemetery No. 1.",
    "Magazine Street runs roughly six miles—one of the longest shopping strips in the South."
   ],
   "walk": {
    "title": "Garden District mansions & Magazine (~1.5–2 hrs)",
    "summary": "Ride the streetcar in, wander the mansion blocks, shop back down Magazine.",
    "stops": [
     "St. Charles Streetcar — ride the 1920s cars out to Washington Ave and hop off",
     "Garden District mansions — wander Prytania, First and Third Streets past the grandest homes",
     "Lafayette Cemetery No. 1 — peer through the walls at the 1833 above-ground tombs (interior access restricted—see note)",
     "Magazine Street — browse the boutiques, antiques and coffee shops heading back",
     "Audubon Park — optional streetcar ride further uptown to the oak-lined lagoon and 1884 fairgrounds"
    ]
   }
  },
  {
   "id": "by",
   "name": "Bywater",
   "short": "Bywater",
   "emoji": "🎨",
   "center_lat": 29.964,
   "center_lng": -90.051,
   "zoom": 15,
   "blurb": "Candy-colored shotgun houses, warehouse murals, and a reclaimed riverfront park make this downriver neighborhood the city's arts-and-cool frontier.",
   "history_short": "Bywater is a downriver, historically working-class neighborhood of 19th-century shotgun and Creole cottages built for the port's laborers, dockworkers, and immigrants. Long overlooked, it has become one of the city's most creative enclaves, its wooden cottages painted in bold colors and its old industrial buildings turned into studios and galleries. In 2014 the derelict wharves along the river reopened as Crescent Park.",
   "history_more": "The name supposedly comes from a 1940s telephone exchange; the area sits on the 'sliver by the river,' the higher ground that stayed dry during Hurricane Katrina, which helped fuel its post-2005 revival. Its shotgun houses—one room wide, rooms lined up front to back—are a New Orleans signature, and Bywater has some of the best-preserved and most colorfully painted examples. Artist Brandan 'BMike' Odums turned a 35,000-square-foot warehouse into Studio Be, a monumental space of murals celebrating Black culture and history.",
   "secrets": [
    "Bywater sits on the 'sliver by the river'—high ground that largely stayed dry in Katrina, which spurred its revival.",
    "Its narrow 'shotgun' houses are one room wide with rooms in a line—legend says you could fire a shotgun straight through.",
    "Crescent Park's arching pedestrian bridge is nicknamed the 'Rusty Rainbow.'",
    "The neighborhood's name reportedly comes from a mid-20th-century telephone exchange."
   ],
   "walk": {
    "title": "Bywater art & river walk (~1.5 hrs)",
    "summary": "Riverfront park, giant murals, and streets of painted cottages.",
    "stops": [
     "Crescent Park — enter over the 'Rusty Rainbow' bridge for skyline and river views",
     "Studio Be — BMike's warehouse of monumental murals (check days/hours)",
     "Royal & Dauphine Streets — wander blocks of vividly painted shotgun and Creole cottages",
     "Bywater murals — spot the ever-changing street art on warehouse walls",
     "Markey / Crescent Park north gate — loop back along the levee"
    ]
   }
  },
  {
   "id": "cp",
   "name": "City Park & Mid-City",
   "short": "City Park",
   "emoji": "🌳",
   "center_lat": 29.987,
   "center_lng": -90.093,
   "zoom": 14,
   "blurb": "One of America's great urban parks—ancient oaks, lagoons, a top art museum and a free sculpture garden—wrapped around the historic Bayou St. John.",
   "history_short": "City Park, established in 1854, is one of the largest and oldest urban parks in the United States—bigger than New York's Central Park. It holds the world's largest stand of mature live oaks, some estimated at several hundred years old. At its edge sits the New Orleans Museum of Art, opened in 1911, and the free Besthoff Sculpture Garden. Bordering it all is Bayou St. John, the natural waterway that was the city's original back door.",
   "history_more": "Bayou St. John was the crucial shortcut that led Bienville to found New Orleans in 1718: Native Americans had long used a portage from Lake Pontchartrain via the bayou to reach the Mississippi, avoiding the river's long mouth. The park grew on former plantation land and was heavily built out by WPA labor in the 1930s, which added its lagoons, bridges, fountains, and stadium. NOMA is the city's oldest fine-arts museum, and the 11-acre Besthoff Sculpture Garden, opened in 2003 and later expanded, threads more than 90 sculptures among the lagoons and Spanish-moss oaks.",
   "secrets": [
    "City Park is larger than New York's Central Park and holds the world's largest collection of mature live oaks—some many centuries old.",
    "Bayou St. John was the reason New Orleans exists here: it was the Native American portage shortcut from Lake Pontchartrain that led Bienville to the site in 1718.",
    "Much of the park's bridges, lagoons and buildings were built by WPA workers in the 1930s.",
    "The Besthoff Sculpture Garden is free and packs 90-plus sculptures under 200-year-old oaks."
   ],
   "walk": {
    "title": "City Park oaks & art (~2 hrs)",
    "summary": "Museum, free sculpture garden, ancient oaks, and the historic bayou.",
    "stops": [
     "New Orleans Museum of Art (NOMA) — start at the 1911 Beaux-Arts museum",
     "Besthoff Sculpture Garden — free walk among 90+ sculptures and lagoons next door",
     "City Park live oaks — find the giant centuries-old oaks near Big Lake",
     "Big Lake / Peristyle — stroll the lagoon paths and 1907 dance pavilion",
     "Bayou St. John & Magnolia (Cabrini) Bridge — end at the historic bayou and its iron footbridge"
    ]
   }
  }
 ],
 "sights": [
  {
   "id": "jackson-square",
   "name": "Jackson Square",
   "district": "fq",
   "category": "landmark",
   "lat": 29.9574,
   "lng": -90.0629,
   "blurb": "A pedestrianized park at the heart of the French Quarter, ringed by the Pontalba Buildings and framed by the triple spires of St. Louis Cathedral. Portrait artists, tarot readers, and brass bands fill the flagstone perimeter while the equestrian statue of Andrew Jackson rears at its center.",
   "secret": "Laid out in 1721 as the Place d'Armes, the square was redesigned in 1850 after the Place des Vosges in Paris. Look at Jackson's hat on the bronze statue: it tips its brim toward the cathedral, a nod supposedly ordered so the general would always greet the church. The inscription on the base, 'The Union Must and Shall Be Preserved,' was carved on orders of Union General Benjamin 'Beast' Butler during the Civil War occupation, to the enduring annoyance of locals.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Jackson_Square,_New_Orleans",
   "hours_note": "Gates open daily ~8am, closing 6-7pm (seasonal); pedestrian mall always accessible",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jackson_Square%2C_French_Quarter.jpg/250px-Jackson_Square%2C_French_Quarter.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jackson_Square%2C_French_Quarter.jpg/500px-Jackson_Square%2C_French_Quarter.jpg"
  },
  {
   "id": "st-louis-cathedral",
   "name": "St. Louis Cathedral",
   "district": "fq",
   "category": "landmark",
   "lat": 29.9579,
   "lng": -90.0632,
   "blurb": "The oldest continuously operating Catholic cathedral in the United States, its three slate steeples rising over Jackson Square as the postcard silhouette of New Orleans. The airy interior glows with restored 19th-century murals, stained glass, and a painted ceiling above the nave.",
   "secret": "The current 1850 structure is the third church on this spot; the first burned in the Good Friday fire of 1788. Step into St. Anthony's Garden behind the cathedral at night to see the towering white marble Sacred Heart statue floodlit against the wall, casting a dramatic 'shadow of Christ' onto the building, an unofficial local landmark. Free self-guided visits are welcome between Masses; a $1 brochure funds upkeep.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/St._Louis_Cathedral,_New_Orleans",
   "hours_note": "Open to visitors daily ~9:30am-4pm (last entry 3:45pm); closed during Mass/weddings",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cathedral_new_orleans.jpg/120px-Cathedral_new_orleans.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cathedral_new_orleans.jpg/500px-Cathedral_new_orleans.jpg"
  },
  {
   "id": "french-market",
   "name": "French Market",
   "district": "fq",
   "category": "shop",
   "lat": 29.9607,
   "lng": -90.0601,
   "blurb": "A six-block open-air market stretching along the river edge of the Quarter, blending a covered flea market, produce stalls, craft vendors, and food counters under historic colonnades. It's the place to grab beignets or a muffuletta and browse everything from hot sauce to hand-carved masks.",
   "secret": "Billed as the oldest public market in the country, the site was a Native American trading post before European settlement and has operated continuously since the 1790s. The colonnaded Halle des Boucheries (butchers' market) building dates to 1813. Cafe du Monde at the upriver end has served the same three-item menu of beignets and chicory cafe au lait since 1862 and never closes except Christmas.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/French_Market",
   "hours_note": "Shops & farmers/flea market daily ~10am-6pm (flea vendors wind down by 5pm)",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/French_Market%2C_New_Orleans.JPG/120px-French_Market%2C_New_Orleans.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/French_Market%2C_New_Orleans.JPG/500px-French_Market%2C_New_Orleans.JPG"
  },
  {
   "id": "royal-street",
   "name": "Royal Street",
   "district": "fq",
   "category": "see",
   "lat": 29.956,
   "lng": -90.0655,
   "blurb": "The refined, gallery-lined counterpoint to raucous Bourbon Street one block over, Royal Street is a corridor of fine-art galleries, generations-old antique houses, and lacy cast-iron balconies. Street musicians and jazz combos set up on the pedestrianized blocks by day.",
   "secret": "Antique dealers here go back over a century: Royal Antiques has traded since 1899, and M.S. Rau, founded 1912, fills a 40,000-square-foot showroom with museum-grade pieces. The central blocks between Bienville and St. Ann close to cars midday, turning the street into an impromptu stage, so time a stroll for early afternoon to catch the best buskers. Peek up: the ornate ironwork galleries are among the most photographed in the city.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Royal_Street,_New_Orleans",
   "hours_note": "Street always open; pedestrian mall 11am-4pm weekdays, 11am-7pm weekends; shops ~10am-5pm",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Royal_Street%2C_New_Orleans_during_French_Quarter_Festival.JPG/120px-Royal_Street%2C_New_Orleans_during_French_Quarter_Festival.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Royal_Street%2C_New_Orleans_during_French_Quarter_Festival.JPG/500px-Royal_Street%2C_New_Orleans_during_French_Quarter_Festival.JPG"
  },
  {
   "id": "old-ursuline-convent",
   "name": "Old Ursuline Convent",
   "district": "fq",
   "category": "museum",
   "lat": 29.96028,
   "lng": -90.06047,
   "blurb": "The oldest surviving building in the Mississippi Valley, this 1752 French colonial convent shrugged off fires and floods that leveled the rest of the early Quarter. Its serene walled garden and dark-cypress staircase feel like stepping straight into 18th-century New Orleans.",
   "secret": "The steep cypress staircase is the sole surviving element of the original 1734 convent, salvaged and reused when the current building went up in 1752 — the oldest wooden structure of its kind in the country. Look up at the second-floor windows tied to the enduring 'Casket Girls' legend, named for the coffin-shaped chests the young French brides supposedly carried.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Old_Ursuline_Convent",
   "hours_note": "Tue–Sat 10am–3pm; closed Sun–Mon. Adults $10",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG/120px-UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG/500px-UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG"
  },
  {
   "id": "frenchmen-street",
   "name": "Frenchmen Street",
   "district": "fq",
   "category": "music",
   "lat": 29.9638,
   "lng": -90.0573,
   "blurb": "Three blocks in the Marigny packed with the densest cluster of live-music clubs in the city — Snug Harbor, the Spotted Cat, d.b.a., Blue Nile and the Maison, with brass, trad-jazz and funk spilling out every open door. This is where locals go when tourists take over Bourbon Street.",
   "secret": "Nearly every club has no cover — the musicians play for tips, so drop cash in the bucket and don't camp on a barstool without buying a drink. After dark, duck into the Frenchmen Art Market in the lot mid-block: an open-air night bazaar of local artists that most first-timers walk right past.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Frenchmen_Street",
   "hours_note": "Public street, always open; clubs mostly nightly from evening",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Frenchman_Street_%2855148394755%29.jpg/120px-Frenchman_Street_%2855148394755%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Frenchman_Street_%2855148394755%29.jpg/500px-Frenchman_Street_%2855148394755%29.jpg"
  },
  {
   "id": "jazz-museum-old-mint",
   "name": "New Orleans Jazz Museum (Old U.S. Mint)",
   "district": "fq",
   "category": "museum",
   "lat": 29.96222,
   "lng": -90.05833,
   "blurb": "Housed in the only building to have served as both a U.S. and Confederate mint, this museum celebrates the birthplace of jazz with instruments once owned by Louis Armstrong, Fats Domino and Sidney Bechet. The 1835 Greek Revival building at the edge of the Quarter is a landmark in its own right.",
   "secret": "Time your visit for the free 2pm live concerts held most open days in the third-floor performance hall — an intimate set from working New Orleans musicians included with admission. The star artifact is the battered cornet Louis Armstrong learned to play as a boy in the Colored Waif's Home.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/New_Orleans_Mint",
   "hours_note": "Tue–Sun 10am–4:30pm; closed Mon. Adults ~$11",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/1907_NOMintpostcard.jpg/120px-1907_NOMintpostcard.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/1907_NOMintpostcard.jpg/500px-1907_NOMintpostcard.jpg"
  },
  {
   "id": "historic-new-orleans-collection",
   "name": "The Historic New Orleans Collection",
   "district": "fq",
   "category": "museum",
   "lat": 29.9575,
   "lng": -90.06472,
   "blurb": "A free museum and research center spread across restored Royal Street townhouses, holding an unrivaled trove of maps, art and documents tracing three centuries of the city's history. The rotating exhibitions are sharp, deeply researched and refreshingly uncrowded.",
   "secret": "Admission is free but timed tickets are required — grab one at the front desk or reserve online. Don't skip the hidden courtyard of the 1792 Merieult House, one of the few Quarter buildings to survive the great fire of 1794, and ask about the free docent-led architecture tours.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/The_Historic_New_Orleans_Collection",
   "hours_note": "Tue–Sat 9:30am–4:30pm, Sun 10:30am–4:30pm; closed Mon",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/MerieultHouse.jpg/120px-MerieultHouse.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/MerieultHouse.jpg/500px-MerieultHouse.jpg"
  },
  {
   "id": "sazerac-house",
   "name": "The Sazerac House",
   "district": "wh",
   "category": "see",
   "lat": 29.949,
   "lng": -90.0668,
   "blurb": "Three floors of interactive exhibits trace the history of the Sazerac — America's first branded cocktail — and New Orleans' outsized role in cocktail culture. The free self-guided tour even includes complimentary tastings of Sazerac Rye, Peychaud's, and a finished cocktail.",
   "secret": "It's completely free but you must be 21+ with valid ID, and reservations are strongly recommended to guarantee entry. Watch the working micro-distillery on-site actually producing rye whiskey and Peychaud's Bitters through glass walls.",
   "free": true,
   "wiki": null,
   "hours_note": "Daily 11–6, 21+ only",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/CardTheGrunewaldNewOr.jpg/120px-CardTheGrunewaldNewOr.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/CardTheGrunewaldNewOr.jpg/500px-CardTheGrunewaldNewOr.jpg"
  },
  {
   "id": "pharmacy-museum",
   "name": "New Orleans Pharmacy Museum",
   "district": "fq",
   "category": "museum",
   "lat": 29.9569,
   "lng": -90.0648,
   "blurb": "An eerie, beautifully preserved 1823 apothecary housing leech jars, voodoo potions, hand-blown medicine bottles and antique surgical tools. It sits in the shop of Louis Dufilho Jr., America's first licensed pharmacist.",
   "secret": "The building belonged to Louis Dufilho Jr., who became the country's first licensed pharmacist in 1816; ask about the cast-iron 'poison ring' cases and the lush hidden courtyard out back.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/New_Orleans_Pharmacy_Museum",
   "hours_note": "Tue-Sat 11-4",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_Orleans_Pharmacy_Museum.jpg/120px-New_Orleans_Pharmacy_Museum.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_Orleans_Pharmacy_Museum.jpg/500px-New_Orleans_Pharmacy_Museum.jpg"
  },
  {
   "id": "preservation-hall",
   "name": "Preservation Hall",
   "district": "fq",
   "category": "music",
   "lat": 29.9585,
   "lng": -90.0651,
   "blurb": "A gloriously worn-in, cushion-and-bench room where the Preservation Hall Jazz Band has kept traditional New Orleans jazz alive since 1961. No drinks, no air conditioning, no amplification, just brass and clarinet inches from your face in candle-dim intimacy.",
   "secret": "There are no advance requirements to hear it well, but line up 30-45 minutes before a set for general admission, cash tips get requests played, and by tradition asking for 'The Saints' costs a $20 tip because they play it so often.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Preservation_Hall",
   "hours_note": "Shows nightly, sets around 5-10pm; doors ~30 min before each set",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/PreservationHall_2008.jpg/120px-PreservationHall_2008.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/PreservationHall_2008.jpg/500px-PreservationHall_2008.jpg"
  },
  {
   "id": "steamboat-natchez",
   "name": "Steamboat Natchez",
   "district": "fq",
   "category": "see",
   "lat": 29.955,
   "lng": -90.0628,
   "blurb": "The last authentic steam-powered sternwheeler still working the Mississippi at New Orleans, her calliope whistling over the French Quarter as she paddles upriver. Two-hour harbor cruises pair live Dixieland jazz with skyline and industry-lined river views.",
   "secret": "Skip the top deck for a few minutes and head below to the open engine room, where you can watch the original 1920s-era steam engines (salvaged from an earlier vessel) actually driving the paddlewheel while the engineer explains the works.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Natchez_(1975_steamboat)",
   "hours_note": "Daily harbor cruises, roughly 11:30am & 2:30pm plus evening dinner sailings; departs Toulouse St Wharf",
   "photoUrl": null
  },
  {
   "id": "louisiana-music-factory",
   "name": "Louisiana Music Factory",
   "district": "fq",
   "category": "shop",
   "lat": 29.9635,
   "lng": -90.0577,
   "blurb": "The world's deepest trove of Louisiana and New Orleans music on vinyl and CD, from brass bands to zydeco to bounce. Free in-store performances by local artists happen regularly, especially on weekends and during Jazz Fest.",
   "secret": "Stop by on a Saturday afternoon for a free live in-store set with complimentary beer; the shop moved from Decatur Street to its Frenchmen Street home in 2014, putting it in the heart of the music district.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Louisiana_Music_Factory",
   "hours_note": "Daily 11-6",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Louisiana_Music_Factory_%2855151878003%29.jpg/120px-Louisiana_Music_Factory_%2855151878003%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Louisiana_Music_Factory_%2855151878003%29.jpg/500px-Louisiana_Music_Factory_%2855151878003%29.jpg"
  },
  {
   "id": "national-wwii-museum",
   "name": "The National WWII Museum",
   "district": "wh",
   "category": "museum",
   "lat": 29.943,
   "lng": -90.0703,
   "blurb": "America's official WWII museum sprawls across several pavilions of immersive galleries, restored aircraft hung overhead, and the dog-tag-driven 'Road to Berlin' and 'Road to Tokyo' journeys. It sits in New Orleans because the Higgins boats that made D-Day possible were built right here.",
   "secret": "Your ticket comes with a personalized 'dog tag' you scan at kiosks to follow one real service member's story through the war, and the museum stands here specifically to honor Andrew Higgins, whose local boat works Eisenhower credited with winning the war.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/National_WWII_Museum",
   "hours_note": "Open daily 9am-5pm; closed Thanksgiving, Christmas Eve/Day, and Mardi Gras Day",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/B-17_at_the_National_World_War_II_Museum.JPG/120px-B-17_at_the_National_World_War_II_Museum.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/B-17_at_the_National_World_War_II_Museum.JPG/500px-B-17_at_the_National_World_War_II_Museum.JPG"
  },
  {
   "id": "ogden-museum",
   "name": "Ogden Museum of Southern Art",
   "district": "wh",
   "category": "museum",
   "lat": 29.9427,
   "lng": -90.0703,
   "blurb": "Home to the largest and most comprehensive collection of Southern art in the world, spanning self-taught visionaries to contemporary photographers across a striking spiral-galleried building. It's an immersion in the visual soul of the American South.",
   "secret": "Time your visit for 'Ogden After Hours' on Thursday evenings, when the atrium fills with live Louisiana music and the galleries stay open late — one of the best low-key live-music experiences in the Arts District.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Ogden_Museum_of_Southern_Art",
   "hours_note": "Daily 10–5, Thu until 8",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ogden_Museum_of_Southern_Art_%2855151866298%29.jpg/120px-Ogden_Museum_of_Southern_Art_%2855151866298%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ogden_Museum_of_Southern_Art_%2855151866298%29.jpg/500px-Ogden_Museum_of_Southern_Art_%2855151866298%29.jpg"
  },
  {
   "id": "contemporary-arts-center",
   "name": "Contemporary Arts Center",
   "district": "wh",
   "category": "see",
   "lat": 29.9433,
   "lng": -90.0708,
   "blurb": "A multidisciplinary hub in a converted 19th-century warehouse, the CAC showcases cutting-edge visual art, performance, dance, and film. Its raw industrial galleries anchor the Arts District's celebrated First Saturday gallery crawls.",
   "secret": "The building was once a Katz & Besthoff (K&B) drugstore warehouse — the exposed brick and heavy timber bones are original. Admission is free on the first Saturday of each month during the neighborhood art walk.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Contemporary_Arts_Center_(New_Orleans)",
   "hours_note": "Wed–Mon 11–5, closed Tue",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Contemporary_Arts_Center_New_Orleans.jpg/120px-Contemporary_Arts_Center_New_Orleans.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Contemporary_Arts_Center_New_Orleans.jpg/500px-Contemporary_Arts_Center_New_Orleans.jpg"
  },
  {
   "id": "msje",
   "name": "Museum of the Southern Jewish Experience",
   "district": "wh",
   "category": "museum",
   "lat": 29.9445,
   "lng": -90.0688,
   "blurb": "A sleek, story-rich museum tracing 300 years of Jewish life across 13 Southern states, from peddlers and small-town merchants to civil-rights struggles and thriving congregations. Artifacts from shuttered rural synagogues give it the feel of a rescued regional memory.",
   "secret": "Many objects here were salvaged from small-town Southern synagogues that closed as their Jewish communities dwindled, so pieces like the Torah ark and pews are actual survivors of vanished congregations rather than reproductions.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Museum_of_the_Southern_Jewish_Experience",
   "hours_note": "Open 10am-5pm, closed Tuesdays",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Museum_of_the_Southern_Jewish_Experience.jpg/120px-Museum_of_the_Southern_Jewish_Experience.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Museum_of_the_Southern_Jewish_Experience.jpg/500px-Museum_of_the_Southern_Jewish_Experience.jpg"
  },
  {
   "id": "julia-street-galleries",
   "name": "Julia Street Galleries",
   "district": "wh",
   "category": "see",
   "lat": 29.943,
   "lng": -90.0673,
   "blurb": "Nicknamed \"Gallery Row,\" the 300-to-600 blocks of Julia Street pack more than a dozen contemporary art galleries into handsomely restored 19th-century brick warehouses. Duck in and out of white-walled rooms of paintings, glass, and sculpture at your own pace, with no admission and no pressure to buy.",
   "secret": "Time your visit for the first Saturday in October, when the district throws 'Art for Arts' Sake' (running since 1980) and every gallery opens its doors for a free evening block party with wine, live music, and new shows. Otherwise, the first Saturday of any month brings smaller gallery openings.",
   "free": true,
   "wiki": null,
   "hours_note": "Most galleries Tue-Sat ~11am-5pm; hours vary by gallery, many closed Sun-Mon",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_Orleans_from_the_Air_September_2019_-_Central_Business_District_Skyline.jpg/120px-New_Orleans_from_the_Air_September_2019_-_Central_Business_District_Skyline.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_Orleans_from_the_Air_September_2019_-_Central_Business_District_Skyline.jpg/500px-New_Orleans_from_the_Air_September_2019_-_Central_Business_District_Skyline.jpg"
  },
  {
   "id": "lafayette-cemetery-1",
   "name": "Lafayette Cemetery No. 1",
   "district": "gd",
   "category": "landmark",
   "lat": 29.9281,
   "lng": -90.0847,
   "blurb": "Founded in 1833, this walled city of the dead in the heart of the Garden District is famous for its crumbling above-ground marble tombs, cast-iron gates, and moss-draped magnolias. It set the scene for Anne Rice's vampire novels and countless films, a hauntingly beautiful maze of family crypts.",
   "secret": "Because New Orleans sits below sea level, the dead are buried above ground in 'oven' vaults that act as natural crematories in the summer heat, letting a single family tomb hold dozens of generations. Note: after years of restoration the cemetery remains closed to casual walk-in visitors as of 2026, so check status before you go and view it through the iron fences if the gates are locked. A guided “Garden District & Lafayette Cemetery Walking Tour” can usually get you inside even while general walk-in access is closed — see Tours in Plan.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Lafayette_Cemetery",
   "hours_note": "Closed to the public for restoration as of 2026; call 504-658-3781 to confirm access",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Memorial_Marker_for_reinterred_remains_from_Lafayette_Cemetery.jpg/120px-Memorial_Marker_for_reinterred_remains_from_Lafayette_Cemetery.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Memorial_Marker_for_reinterred_remains_from_Lafayette_Cemetery.jpg/500px-Memorial_Marker_for_reinterred_remains_from_Lafayette_Cemetery.jpg"
  },
  {
   "id": "st-charles-streetcar",
   "name": "St. Charles Avenue Streetcar",
   "district": "gd",
   "category": "see",
   "lat": 29.9276,
   "lng": -90.0845,
   "blurb": "Rattling along its oak-shaded neutral ground since 1835, the St. Charles line is the oldest continuously operating streetcar in the world and a rolling National Historic Landmark. Climb aboard one of the olive-green 1920s Perley Thomas cars and glide past antebellum mansions, Loyola and Tulane, and Audubon Park.",
   "secret": "Sit by an open window on the lake (right) side heading uptown for the best mansion views, and bring exact change since the cars still don't make it. The wooden seat backs flip so riders can always face forward when the car reverses at the end of the line, a charming detail unchanged for a century.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/St._Charles_Streetcar_Line",
   "hours_note": "Runs 24 hours daily; $1.25 exact change per ride, or $3 all-day Jazzy Pass",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Streetcar_in_New_Orleans%2C_USA1.jpg/120px-Streetcar_in_New_Orleans%2C_USA1.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Streetcar_in_New_Orleans%2C_USA1.jpg/500px-Streetcar_in_New_Orleans%2C_USA1.jpg"
  },
  {
   "id": "magazine-street",
   "name": "Magazine Street",
   "district": "gd",
   "category": "shop",
   "lat": 29.9265,
   "lng": -90.0862,
   "blurb": "Six near-continuous miles of independent boutiques, antique shops, art galleries, and cafes fill the 19th-century shotgun cottages and storefronts running from Audubon Park down to the CBD. It's the city's best browse for local fashion, vintage finds, and Louisiana-made goods, far from the T-shirt shops of the Quarter.",
   "secret": "The street was named for the Spanish 'magazin' (warehouse) that once stored goods here, not a gunpowder magazine as legend claims. Locals shop the Garden District stretch between Jackson and Louisiana Avenues, where you can hop off the St. Charles streetcar a few blocks over and walk down for the densest run of boutiques.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Magazine_Street",
   "hours_note": "Public street, always open; most shops daily ~10am-6pm",
   "photoUrl": null
  },
  {
   "id": "audubon-park",
   "name": "Audubon Park",
   "district": "gd",
   "category": "park",
   "lat": 29.9226,
   "lng": -90.1264,
   "blurb": "A 350-acre Uptown oasis designed by the Olmsted firm, laced with allees of centuries-old live oaks dripping Spanish moss, a mirror-still lagoon, and a beloved 1.8-mile loop where joggers, cyclists, and stroller-pushing locals circle beneath the canopy. Stretching from the streetcar tracks on St. Charles down to the Mississippi, it's the leafy green heart of Uptown.",
   "secret": "Cross Magazine Street to the river side of the park and climb 'The Fly' (Riverview) — a grassy levee batture where locals bring coolers and grills to watch cargo ships slide past at sunset, one of the best free sunset spots in the city.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Audubon_Park_(New_Orleans)",
   "hours_note": "Daily 5am-10pm",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AudubonPark1.JPG/120px-AudubonPark1.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AudubonPark1.JPG/500px-AudubonPark1.JPG"
  },
  {
   "id": "garden-district-mansions",
   "name": "Garden District Mansions",
   "district": "gd",
   "category": "see",
   "lat": 29.928,
   "lng": -90.0842,
   "blurb": "A dreamlike grid of antebellum and Victorian mansions built by 19th-century American nouveau riche who wanted to outshine the Creoles downriver — think Greek Revival columns, cast-iron galleries, and lush gardens behind ornate fences. It's an open-air museum of Southern grandeur you tour simply by walking the oak-shaded sidewalks.",
   "secret": "Walk the 1400 block of First Street and Prytania to spot the homes of Anne Rice and (a private residence once owned by) actors and authors; the buckling brick sidewalks are heaved up by live oak roots, so wear flat shoes and look for the cast-iron 'cornstalk' motifs that mark the oldest fences.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Garden_District,_New_Orleans",
   "hours_note": "Streets accessible daily; daylight best",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG/120px-20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG/500px-20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG"
  },
  {
   "id": "tipitinas",
   "name": "Tipitina's",
   "district": "gd",
   "category": "music",
   "lat": 29.9199,
   "lng": -90.1051,
   "blurb": "The legendary Uptown music hall opened in 1977 as a home for Professor Longhair, and its banana-flag-draped stage has hosted the Neville Brothers, Dr. John, and every strain of New Orleans funk since. A pilgrimage venue where the dance floor still sweats.",
   "secret": "Look for the bronze bust of Professor Longhair by the door — regulars rub it for luck before shows. Sunday afternoon Cajun fais do-do dances are a beloved, family-friendly tradition.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Tipitina's",
   "hours_note": "Doors typically 8pm on show nights",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tip%27s_Building_2019.jpg/120px-Tip%27s_Building_2019.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tip%27s_Building_2019.jpg/500px-Tip%27s_Building_2019.jpg"
  },
  {
   "id": "studio-be",
   "name": "Studio Be",
   "district": "by",
   "category": "museum",
   "lat": 29.9634,
   "lng": -90.0545,
   "blurb": "A cavernous 35,000-square-foot warehouse gallery filled with monumental murals by Brandan 'BMike' Odums, exploring Black American history, resistance, and joy. The scale of the floor-to-ceiling portraits is overwhelming in the best way.",
   "secret": "Odums cut his teeth painting guerrilla murals in the abandoned, flood-gutted Florida housing projects after Katrina before turning this Bywater warehouse into a permanent home for the work.",
   "free": false,
   "wiki": null,
   "hours_note": "Wed-Sat 11-6, Sun 2-6 (booking advised)",
   "photoUrl": null
  },
  {
   "id": "crescent-park",
   "name": "Crescent Park",
   "district": "by",
   "category": "park",
   "lat": 29.9645,
   "lng": -90.049,
   "blurb": "A 1.4-mile linear riverfront park just downriver of the French Quarter, with unbroken skyline-and-river views, native plantings, and a wharf promenade. It's the best free vantage on the Mississippi in the Bywater.",
   "secret": "Enter over the 'Rusty Rainbow,' the arching weathered-steel pedestrian bridge at Piety Street, built to lift walkers over the active railroad tracks that separate Bywater from the levee.",
   "free": true,
   "wiki": null,
   "hours_note": "Daily 6am-7:30pm",
   "photoUrl": null
  },
  {
   "id": "noma",
   "name": "New Orleans Museum of Art (NOMA)",
   "district": "cp",
   "category": "museum",
   "lat": 29.9866,
   "lng": -90.0935,
   "blurb": "Louisiana's oldest fine arts museum, a stately 1911 Beaux-Arts temple at the entrance to City Park, holding a 40,000-piece collection strong in French and American painting, Japanese Edo-period works, African art, and one of the South's great decorative-arts holdings. Grand marble halls give way to intimate galleries you can absorb in an afternoon.",
   "secret": "Louisiana residents get in free every Wednesday, and admission is always free to the adjacent Besthoff Sculpture Garden — many visitors skip the ticket line entirely and do the free garden first, then decide whether to go inside.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/New_Orleans_Museum_of_Art",
   "hours_note": "Tue-Sun 10am-5pm (Wed to 7pm); closed Mon",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/New_Orleans_Museum_of_Art_%2855143750313%29.jpg/120px-New_Orleans_Museum_of_Art_%2855143750313%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/New_Orleans_Museum_of_Art_%2855143750313%29.jpg/500px-New_Orleans_Museum_of_Art_%2855143750313%29.jpg"
  },
  {
   "id": "besthoff-sculpture-garden",
   "name": "Besthoff Sculpture Garden",
   "district": "cp",
   "category": "park",
   "lat": 29.9878,
   "lng": -90.0922,
   "blurb": "A free 11-acre garden beside NOMA where more than 90 modern and contemporary sculptures — Henry Moore, Louise Bourgeois, Yayoi Kusama's mirrored pumpkin among them — stand among ancient live oaks, lagoons, and arched pedestrian bridges. It's one of the most magical art-in-nature strolls in America, and it costs nothing.",
   "secret": "Enter through the newer 2019 expansion side to find the outdoor amphitheater and the reflecting-pool works; NOMA offers free docent-led tours on weekends with no registration, and the low winter light through the moss-draped oaks makes it a photographer's favorite.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Sydney_and_Walda_Besthoff_Sculpture_Garden",
   "hours_note": "Daily 10am-6pm (Apr-Sep), 10am-5pm (Oct-Mar)",
   "photoUrl": null
  },
  {
   "id": "city-park",
   "name": "City Park",
   "district": "cp",
   "category": "park",
   "lat": 29.9938,
   "lng": -90.0967,
   "blurb": "At 1,300 acres, this is one of the largest urban parks in the country, draped in the world's largest stand of mature live oaks — some nearly 800 years old and dripping with Spanish moss. Rent a paddleboat, wander the free sculpture garden, or ride the antique wooden carousel beneath the canopy.",
   "secret": "Head to the far northern edge for the Singing Oak, a live oak hung with dozens of wind chimes tuned to a pentatonic scale so the whole tree hums in harmony when the breeze blows — most visitors never find it.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/City_Park_(New_Orleans)",
   "hours_note": "Daily, 30 min before sunrise to 30 min after sunset (park grounds free; individual attractions charge)",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/City_Park_Bayou_Bridge.JPG/120px-City_Park_Bayou_Bridge.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/City_Park_Bayou_Bridge.JPG/500px-City_Park_Bayou_Bridge.JPG"
  },
  {
   "id": "bayou-st-john",
   "name": "Bayou St. John",
   "district": "cp",
   "category": "see",
   "lat": 29.9862,
   "lng": -90.0855,
   "blurb": "This languid, tree-lined waterway was the original back-door route Native Americans and French settlers used to reach the Mississippi, making it the very reason New Orleans was founded here. Today its grassy banks are a favorite spot to picnic, paddle a canoe, or watch the sun set over the water.",
   "secret": "Voodoo Queen Marie Laveau is said to have led St. John's Eve rituals on these banks every June 23rd — a tradition modern practitioners still revive here each summer. Nearby stands the 1799 Pitot House, the last surviving Creole colonial plantation home on the bayou.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Bayou_St._John",
   "hours_note": "Open public waterway and banks, accessible year-round",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bayou_St_John_by_Spanish_Fort_2009.jpg/120px-Bayou_St_John_by_Spanish_Fort_2009.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bayou_St_John_by_Spanish_Fort_2009.jpg/500px-Bayou_St_John_by_Spanish_Fort_2009.jpg"
  },
  {
   "id": "faulkner-house-books",
   "name": "Faulkner House Books",
   "district": "fq",
   "category": "shop",
   "lat": 29.9580249,
   "lng": -90.0641874,
   "blurb": "A jewel-box independent bookshop tucked into Pirate's Alley beside St. Louis Cathedral, specializing in rare editions and Southern literature. It occupies the very building where William Faulkner lived and wrote his first novel.",
   "secret": "Faulkner rented rooms here in 1925 and wrote 'Soldiers' Pay' on the ground floor; the shop hosts the annual Words & Music literary festival and remains a working home for the owners upstairs.",
   "free": true,
   "wiki": null,
   "hours_note": "Daily 10-5",
   "photoUrl": null
  },
  {
   "id": "the-spotted-cat-music-club",
   "name": "The Spotted Cat Music Club",
   "district": "fq",
   "category": "music",
   "lat": 29.964,
   "lng": -90.0568,
   "blurb": "A tiny, sweaty, standing-room jazz club on Frenchmen Street where trad jazz and swing bands play three sets a day, seven days a week. Dancers spill onto the floor and the energy is pure old New Orleans.",
   "secret": "Cash only with a one-drink minimum and no reservations; arrive before the early set (around 2-4pm) to actually get inside, as the room is tiny and fills fast by evening.",
   "free": false,
   "wiki": null,
   "hours_note": "Daily from 2pm (from noon Sat-Sun), late",
   "photoUrl": null
  },
  {
   "id": "old-ursuline-convent-museum",
   "name": "Old Ursuline Convent Museum",
   "district": "fq",
   "category": "landmark",
   "lat": 29.9605,
   "lng": -90.0605,
   "blurb": "The oldest surviving building in the Mississippi Valley, this 1750s French colonial convent is a rare survivor of the great fires that leveled the early Quarter. Behind its shuttered facade lie hand-hewn cypress staircases, a restored chapel, and centuries of layered history.",
   "secret": "The cypress staircase inside predates the current 1750s building — it was salvaged from the original 1734 convent, making it one of the oldest architectural elements in Louisiana. Look for the dormer windows, said to be the oldest surviving example of French colonial architecture in the U.S.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Old_Ursuline_Convent",
   "hours_note": "Tue–Sat 10–3, closed Sun–Mon",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG/120px-UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG/500px-UrsulinesFQExtChartresSideFascadeMainDiagonal.JPG"
  },
  {
   "id": "arthur-roger-gallery",
   "name": "Arthur Roger Gallery",
   "district": "wh",
   "category": "shop",
   "lat": 29.9426,
   "lng": -90.0668,
   "blurb": "A cornerstone of the Julia Street 'Gallery Row,' this expansive contemporary space has championed Southern and internationally recognized artists for decades. Its rotating exhibitions of painting, sculpture, glass, and photography make it a must-browse anchor of the Warehouse Arts District.",
   "secret": "Time a visit for the first Saturday of the month, when the Arts District hosts its gallery Art Walk and Julia Street fills with openings, free wine, and artists you can actually chat with.",
   "free": true,
   "wiki": null,
   "hours_note": "Tue–Sat 10–5",
   "photoUrl": null
  },
  {
   "id": "maple-leaf-bar",
   "name": "Maple Leaf Bar",
   "district": "gd",
   "category": "music",
   "lat": 29.9455,
   "lng": -90.137,
   "blurb": "A narrow, tin-ceilinged Carrollton institution on Oak Street where the brass and funk pours out until the small hours. Home to the longest-running poetry reading in the South and the sweaty, unmissable Rebirth Brass Band Tuesdays.",
   "secret": "Rebirth Brass Band's Tuesday-night residency has run for over three decades — arrive early because the room is tiny and packs to the walls. There's a hidden brick courtyard out back to cool off.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Maple_Leaf_Bar",
   "hours_note": "Doors 7pm, shows 8pm",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/OakStreetParty16June2007B.jpg/120px-OakStreetParty16June2007B.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/OakStreetParty16June2007B.jpg/500px-OakStreetParty16June2007B.jpg"
  },
  {
   "id": "garden-district-book-shop",
   "name": "Garden District Book Shop",
   "district": "gd",
   "category": "shop",
   "lat": 29.9268,
   "lng": -90.0848,
   "blurb": "Tucked inside The Rink, an 1880s former roller-skating pavilion, this beloved independent bookstore is famous for its signed first editions and deep local-author shelves. A cozy, creaky-floored browse in the heart of the Garden District.",
   "secret": "This is Anne Rice's home shop — it hosted her legendary signings for decades, and you can still often find signed local editions. The Rink building sits across from Lafayette Cemetery No. 1, making it a perfect walking-tour pit stop.",
   "free": true,
   "wiki": null,
   "hours_note": "Mon–Sat 10–6, Sun 12–4",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG/120px-20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG/500px-20080622_St._Charles_St._Trolley_behind_tree_with_Mardi_Gras_beads.JPG"
  },
  {
   "id": "the-fly-riverview-park",
   "name": "The Fly (Riverview Park)",
   "district": "gd",
   "category": "park",
   "lat": 29.9209,
   "lng": -90.1348,
   "blurb": "The grassy Mississippi-riverfront edge of Audubon Park behind the zoo, where locals sprawl on wide lawns to grill, picnic, and watch tankers slide by at sunset. It's Uptown's beloved free backyard on the water.",
   "secret": "The name is a leftover from a butterfly-shaped 'fly' river-viewing shelter built in the 1960s and torn down in the 1980s; the moniker stuck even though the structure is long gone.",
   "free": true,
   "wiki": null,
   "hours_note": "Daily 5am-10pm",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AudubonPark1.JPG/120px-AudubonPark1.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AudubonPark1.JPG/500px-AudubonPark1.JPG"
  },
  {
   "id": "milton-h-latter-memorial-library",
   "name": "Milton H. Latter Memorial Library",
   "district": "gd",
   "category": "landmark",
   "lat": 29.9282,
   "lng": -90.1077,
   "blurb": "A grand 1907 neo-Italianate St. Charles Avenue mansion turned public library, with painted ceilings, chandeliers, and mahogany paneling you can wander for free. Reading in its parlors feels like borrowing someone's Gilded Age estate.",
   "secret": "Silent-film star Marguerite Clark once lived here; the house was later donated by Harry and Anna Latter in memory of their son Milton, a 22-year-old Army lieutenant killed at Okinawa in 1945.",
   "free": true,
   "wiki": null,
   "hours_note": "Mon-Tue & Thu 10-7, Wed 12-7, Fri 10-5",
   "photoUrl": null
  },
  {
   "id": "euclid-records",
   "name": "Euclid Records",
   "district": "by",
   "category": "shop",
   "lat": 29.9631,
   "lng": -90.0526,
   "blurb": "A two-story vinyl temple in a converted Bywater corner building, packed with new and used records, cassettes, and a deep local New Orleans music section. Crate-diggers can lose hours here between the jazz, funk, and 45s bins.",
   "secret": "Head upstairs — the second floor holds the used vinyl and cheaper crates that many first-timers miss, and it's where the real bargains hide.",
   "free": true,
   "wiki": null,
   "hours_note": "Daily 11am-6pm",
   "photoUrl": null
  },
  {
   "id": "music-box-village",
   "name": "Music Box Village",
   "district": "by",
   "category": "music",
   "lat": 29.9709,
   "lng": -90.0426,
   "blurb": "An immersive outdoor sculpture park of playable 'musical houses' where visitors bang, pluck, and strum the architecture itself. By night it transforms into an experimental live-music venue unlike anywhere else in the city.",
   "secret": "During open hours locals can pay what they wish and no one is turned away; go on a weekday afternoon to actually play every structure without a crowd.",
   "free": false,
   "wiki": null,
   "hours_note": "Open hours vary month to month; check calendar",
   "photoUrl": null
  },
  {
   "id": "new-orleans-botanical-garden",
   "name": "New Orleans Botanical Garden",
   "district": "cp",
   "category": "park",
   "lat": 29.9866,
   "lng": -90.0964,
   "blurb": "A ten-acre oasis inside City Park showcasing WPA-era Art Deco design, a train garden, roses, and lush conservatory collections. Winding paths, fountains, and sculpture make it one of the city's most serene green escapes.",
   "secret": "Louisiana residents get in free every Wednesday courtesy of the Helis Foundation — bring ID. The garden dates to the 1930s and is one of the few remaining public gardens from the WPA era.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/New_Orleans_Botanical_Garden",
   "hours_note": "Tue-Sun 10am-4:30pm",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/New_Orleans_Botanical_Garden_2011.jpg/120px-New_Orleans_Botanical_Garden_2011.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/New_Orleans_Botanical_Garden_2011.jpg/500px-New_Orleans_Botanical_Garden_2011.jpg"
  },
  {
   "id": "sydney-and-walda-besthoff-sculpture-garden",
   "name": "Sydney and Walda Besthoff Sculpture Garden",
   "district": "cp",
   "category": "park",
   "lat": 29.9857,
   "lng": -90.0928,
   "blurb": "A free, moss-draped sculpture garden beside the New Orleans Museum of Art, winding through ancient oaks, lagoons, and pedestrian bridges past works by Henry Moore, Louise Bourgeois, and dozens more. Art and Spanish-moss shade blend into one of the finest sculpture parks in the country.",
   "secret": "Admission is free to everyone — scan the QR code at the entrance for NOMA's free audio tour, and cross the new footbridge to the expansion section that most day-trippers skip.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Sydney_and_Walda_Besthoff_Sculpture_Garden",
   "hours_note": "Daily; Apr-Sep 10am-6pm, Oct-Mar 10am-5pm",
   "photoUrl": null
  },
  {
   "id": "pitot-house",
   "name": "Pitot House",
   "district": "cp",
   "category": "landmark",
   "lat": 29.9838,
   "lng": -90.0855,
   "blurb": "A whitewashed Creole colonial country house from 1799 standing on the banks of Bayou St. John, it's the only house of its kind open to the public in New Orleans. Wraparound galleries, period antiques, and a lush garden evoke plantation-era Louisiana just minutes from City Park.",
   "secret": "Its most famous resident, James Pitot, became the first mayor of the incorporated city of New Orleans; the house was actually moved about 200 feet from its original site in the 1960s to save it from demolition.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Pitot_House",
   "hours_note": "Wed–Fri 10–3, last tour 2pm; $5",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PitotHouseBayouStJohn.jpg/120px-PitotHouseBayouStJohn.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PitotHouseBayouStJohn.jpg/500px-PitotHouseBayouStJohn.jpg"
  },
  {
   "id": "chickie-wah-wah",
   "name": "Chickie Wah Wah",
   "district": "cp",
   "category": "music",
   "lat": 29.972,
   "lng": -90.0898,
   "blurb": "An unpretentious Mid-City music room on Canal Street where locals pack in for blues, jazz, and roots artists at close range. The intimate low stage and stellar Blue Oak BBQ make it a favorite for hearing serious musicians without a tourist crush.",
   "secret": "Take the Canal streetcar right to the door, and catch legendary local pianist Tom McDermott or Cajun accordion nights; the room seats only around 100, so arrive early for a good spot near the stage.",
   "free": false,
   "wiki": null,
   "hours_note": "Open daily, shows from ~5pm",
   "photoUrl": null
  },
  {
   "id": "fifi-mahonys",
   "name": "Fifi Mahony's",
   "district": "fq",
   "category": "shop",
   "lat": 29.9598,
   "lng": -90.0625,
   "blurb": "A riot of color on Royal Street, this legendary boutique hand-builds custom wigs in electric hues alongside glitter, cosmetics, and outrageous accessories. It's the go-to outfitter for drag performers, Mardi Gras revelers, and anyone chasing a bolder alter ego.",
   "secret": "Ask about a custom wig fitting in the back salon — their stylists have crafted pieces for burlesque stars and celebrities, and no two are alike. Even if you buy nothing, the glitter bar up front is a photo op in itself.",
   "free": true,
   "wiki": null,
   "hours_note": "Wed-Sun 11am-6pm; closed Mon-Tue (call to confirm)",
   "photoUrl": null
  },
  {
   "id": "beauregard-keyes-house",
   "name": "Beauregard-Keyes House Museum",
   "district": "fq",
   "category": "museum",
   "lat": 29.9603,
   "lng": -90.0619,
   "blurb": "This stately 1826 raised-center-hall mansion in the French Quarter takes its hyphenated name from two famous residents: Confederate General P.G.T. Beauregard and, decades later, novelist Frances Parkinson Keyes, who wrote many of her books here. Guided tours wind through period rooms and a walled formal garden restored to its 1865 design.",
   "secret": "Keyes set her mystery novel 'Dinner at Antoine's' partly in this very house, and her writing studio out back is preserved as she left it. The garden is one of the few French Quarter parterre gardens open to the public.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Beauregard-Keyes_House",
   "hours_note": "Tours Mon-Sat on the hour, 10am-3pm; adults $10",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/BK_Historic_House_and_Gardens_%2855151949439%29.jpg/120px-BK_Historic_House_and_Gardens_%2855151949439%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/BK_Historic_House_and_Gardens_%2855151949439%29.jpg/500px-BK_Historic_House_and_Gardens_%2855151949439%29.jpg"
  },
  {
   "id": "blaine-kerns-mardi-gras-world",
   "name": "Blaine Kern's Mardi Gras World",
   "district": "wh",
   "category": "see",
   "lat": 29.9384,
   "lng": -90.0656,
   "blurb": "A cavernous riverfront warehouse where the giant papier-mache floats, kings, and grinning figures of Carnival are actually built year-round. Wandering among the towering half-finished sculptures feels like stepping backstage into the surreal machinery of Mardi Gras itself.",
   "secret": "Founder Blaine Kern was nicknamed 'Mr. Mardi Gras' and apprenticed in Europe; the working artists are often on-site sculpting, and the tour includes a free slice of king cake and a chance to try on a costume.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Mardi_Gras_World",
   "hours_note": "Daily 9am-5:30pm; last tour 4:30pm",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Leviathan_float%2C_Orpheus%2C_Mardi_Gras.jpg/120px-Leviathan_float%2C_Orpheus%2C_Mardi_Gras.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Leviathan_float%2C_Orpheus%2C_Mardi_Gras.jpg/500px-Leviathan_float%2C_Orpheus%2C_Mardi_Gras.jpg"
  },
  {
   "id": "le-bon-temps-roule",
   "name": "Le Bon Temps Roule",
   "district": "gd",
   "category": "music",
   "lat": 29.9218,
   "lng": -90.0977,
   "blurb": "A gloriously divey Uptown neighborhood bar whose back room turns into one of the city's most beloved free live-music rooms after dark. Locals pack in shoulder-to-shoulder for sweaty brass, funk, and soul sets with no cover charge.",
   "secret": "The Soul Rebels brass band has held down a legendary free Thursday-night residency here for decades; get there early because the tiny back room fills fast and the party spills onto Magazine Street.",
   "free": true,
   "wiki": null,
   "hours_note": "Open daily, late afternoon until ~2am",
   "photoUrl": null
  },
  {
   "id": "prytania-theatre",
   "name": "Prytania Theatre",
   "district": "gd",
   "category": "landmark",
   "lat": 29.916,
   "lng": -90.0983,
   "blurb": "The oldest operating movie theater in New Orleans and the last single-screen neighborhood cinema in Louisiana, running since 1915. Its glowing marquee and intimate balcony mix current releases with lovingly programmed classics.",
   "secret": "The theater survived the multiplex era by pivoting to midnight and classic screenings; look for its beloved Sunday Classic Movies series and the vintage single-screen auditorium that film buffs travel across the state to experience.",
   "free": false,
   "wiki": "https://en.wikipedia.org/wiki/Prytania_Theatre",
   "hours_note": "Open daily per showtimes; box office opens ~30 min before first film",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Prytania_Theater%2C_Uptown_New_Orleans%2C_22_Feb_2022.jpg/120px-Prytania_Theater%2C_Uptown_New_Orleans%2C_22_Feb_2022.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Prytania_Theater%2C_Uptown_New_Orleans%2C_22_Feb_2022.jpg/500px-Prytania_Theater%2C_Uptown_New_Orleans%2C_22_Feb_2022.jpg"
  },
  {
   "id": "angelo-brocatos",
   "name": "Angelo Brocato's",
   "district": "cp",
   "category": "shop",
   "lat": 29.97656,
   "lng": -90.09772,
   "blurb": "A Sicilian ice cream parlor unchanged in spirit since 1905, all pressed-tin ceilings, marble counters, and bentwood chairs. Come for house-made spumoni, lemon ice, and cannoli filled to order.",
   "secret": "Order the torroncino gelato, cinnamon-almond, it is the shop's original 1905 recipe and rarely found anywhere else in America. The family rebuilt the whole parlor from the studs after Katrina's floodwaters gutted it in 2005.",
   "free": true,
   "wiki": "https://en.wikipedia.org/wiki/Angelo_Brocato's",
   "hours_note": "Tue–Sun 10am–10pm (Sun to 9pm), closed Mon",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/MidCityBrocatosOpen.jpg/120px-MidCityBrocatosOpen.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/MidCityBrocatosOpen.jpg/500px-MidCityBrocatosOpen.jpg"
  },
  {
   "id": "couturie-forest",
   "name": "Couturie Forest",
   "district": "cp",
   "category": "park",
   "lat": 30.00389,
   "lng": -90.0975,
   "blurb": "A 60-acre pocket of wild bottomland woods tucked inside City Park, laced with quiet dirt trails and an eight-ecosystem arboretum alive with herons, owls, and migrating songbirds. It feels a world away from the manicured lawns nearby.",
   "secret": "Climb Laborde Mountain, the highest natural-ish point in New Orleans at about 43 feet, built from rubble left over from the I-610 construction; a stone map at the summit charts the land around Lake Pontchartrain. Go at dawn for the best birding before the heat sets in.",
   "free": true,
   "wiki": null,
   "hours_note": "Daily sunrise–sunset",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/City_Park_Bayou_Bridge.JPG/120px-City_Park_Bayou_Bridge.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/City_Park_Bayou_Bridge.JPG/500px-City_Park_Bayou_Bridge.JPG"
  }
 ],
 "restaurants": [
  {
   "id": "cafe-du-monde",
   "name": "Café du Monde",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Coffee & beignets (Café)",
   "vibe": "The iconic open-air French Quarter coffee stand that has served beignets and chicory café au lait since 1862. Cash-friendly, always bustling, open nearly around the clock — no reservations, just powdered-sugar chaos.",
   "price": "$",
   "rating": 4.5,
   "rating_note": "Google 4.5 stars (~45,000+ reviews); Tripadvisor 4.2. Beloved as an essential NOLA ritual, though lines run long at peak.",
   "lat": 29.9575,
   "lng": -90.0614,
   "dinner_estimate": "About $9-12 per person (one order of beignets plus a café au lait); cash only",
   "menu": [
    {
     "item": "BEIGNETS",
     "price": "$4.53",
     "course": "dessert",
     "note": "3 pieces to an order with powdered sugar; vegetarian (mix contains milk)"
    },
    {
     "item": "Café au Lait (Coffee and Chicory served with Hot Milk)",
     "price": "REG $3.60 / MD $4.53 / LG $5.43",
     "course": "drink",
     "note": "HOT beverages section; the signature order"
    },
    {
     "item": "Black Coffee & Chicory",
     "price": "REG $3.60 / MD $4.53 / LG $5.43",
     "course": "drink",
     "note": "HOT beverages section"
    },
    {
     "item": "Decaf Café au Lait",
     "price": "REG $3.60 / MD $4.53 / LG $5.43",
     "course": "drink",
     "note": "HOT beverages section"
    },
    {
     "item": "Decaf Black Coffee",
     "price": "REG $3.60 / MD $4.53 / LG $5.43",
     "course": "drink",
     "note": "HOT beverages section"
    },
    {
     "item": "Café au Lait (Coffee and Chicory served with Milk) - ICED",
     "price": "REG $5.43 / LG $6.56",
     "course": "drink",
     "note": "ICED beverages section"
    },
    {
     "item": "Black Coffee & Chicory - ICED",
     "price": "REG $5.43 / LG $6.56",
     "course": "drink",
     "note": "ICED beverages section"
    },
    {
     "item": "Decaf Café au Lait - ICED",
     "price": "REG $5.43 / LG $6.56",
     "course": "drink",
     "note": "ICED beverages section"
    },
    {
     "item": "Decaf Black Coffee - ICED",
     "price": "REG $5.43 / LG $6.56",
     "course": "drink",
     "note": "ICED beverages section"
    },
    {
     "item": "Café au Lait (Coffee and Chicory served with Milk) - FROZEN",
     "price": "REG $6.56 / LG $7.70",
     "course": "drink",
     "note": "FROZEN section - the frozen café au lait"
    },
    {
     "item": "HOT CHOCOLATE",
     "price": "REG $3.60 / LG $5.43",
     "course": "drink"
    },
    {
     "item": "ORANGE JUICE",
     "price": "REG $3.60 / LG $5.43",
     "course": "drink",
     "note": "fresh squeezed"
    },
    {
     "item": "COKE, DIET COKE, SPRITE",
     "price": "REG $3.60 / LG $5.43",
     "course": "drink"
    },
    {
     "item": "COLD MILK (WHITE OR CHOCOLATE)",
     "price": "REG $3.60 / LG $4.53",
     "course": "drink"
    },
    {
     "item": "BOTTLED WATER",
     "price": "$3.60",
     "course": "drink"
    },
    {
     "item": "ARCHWAY MUG",
     "price": "$10.86",
     "course": "drink",
     "note": "Keepsake mug - price includes a fresh cup of coffee"
    },
    {
     "item": "SOUVENIR LOGO MUG",
     "price": "$9.95",
     "course": "drink",
     "note": "Keepsake mug - price includes a fresh cup of coffee"
    }
   ],
   "avoid_note": "Nothing to avoid here - the entire menu is beignets and drinks, with no shellfish, pork or other meat on it at all. Just note the stand is CASH ONLY and prices exclude sales tax.",
   "kosher_style_fit": "Excellent style fit: fully vegetarian/dairy menu with no meat, pork, or shellfish anywhere. Beignets are fried in vegetable oil. Not certified kosher, but nothing on the menu conflicts with the couple's rules.",
   "tags": [
    "veg"
   ],
   "filters": [
    "Cafe",
    "Bakery",
    "Casual",
    "Brunch"
   ],
   "price_band": "$",
   "reserveUrl": null,
   "reserve_priority": false,
   "website": "https://www.cafedumonde.com",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Caf%C3%A9_du_Monde_%2855151878663%29.jpg/120px-Caf%C3%A9_du_Monde_%2855151878663%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Caf%C3%A9_du_Monde_%2855151878663%29.jpg/500px-Caf%C3%A9_du_Monde_%2855151878663%29.jpg",
   "menu_source": "https://shop.cafedumonde.com/cafe/",
   "menu_confidence": "verified"
  },
  {
   "id": "galatoires",
   "name": "Galatoire's",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "French-Creole (Fine dining)",
   "vibe": "A 1905 Bourbon Street institution of white tablecloths, tuxedoed waiters, and old-line French-Creole cooking. The bright downstairs dining room is a jacket-preferred, see-and-be-seen Friday-lunch ritual.",
   "price": "$$$$",
   "rating": 4.3,
   "rating_note": "Google/Birdeye ~4.3 stars (3,000+ reviews); Tripadvisor 4.1. Praised for impeccable service and classic Creole fish dishes; some find it pricey and traditional.",
   "lat": 29.9557,
   "lng": -90.0678,
   "dinner_estimate": "About $60-80 per person: appetizer or salad $10-12 + the market-price fish (roughly $38-45) + a side $6-9. Menu prices are cash prices; a 3.5% fee is added to non-cash payments.",
   "menu": [
    {
     "item": "Soufflé Potatoes",
     "price": "$10",
     "course": "starter",
     "note": "crispy potato puffs, béarnaise sauce - vegetarian"
    },
    {
     "item": "Fried Eggplant",
     "price": "$10",
     "course": "starter",
     "note": "eggplant sticks, Italian breadcrumbs, béarnaise sauce, powdered sugar - vegetarian"
    },
    {
     "item": "Salad Maison",
     "price": "$10",
     "course": "starter",
     "note": "iceberg lettuce, spring lettuces, tomato, asparagus, egg, anchovy filet; ask without the anchovy if you prefer it meat-free"
    },
    {
     "item": "Green Salad with Garlic",
     "price": "$10",
     "course": "starter",
     "note": "spring lettuces, garlic puree, creole mustard vinaigrette"
    },
    {
     "item": "Bistro Romaine Salad",
     "price": "$12",
     "course": "starter",
     "note": "romaine lettuce, tomatoes, blue cheese, spiced pecans"
    },
    {
     "item": "Iceberg Wedge",
     "price": "$12",
     "course": "starter",
     "note": "iceberg, grape tomatoes, blue cheese dressing - ask without the apple smoked bacon"
    },
    {
     "item": "Asparagus and Hearts of Palm",
     "price": "$12",
     "course": "starter",
     "note": "asparagus, hearts of palm, avocado, tomatoes, bibb lettuce"
    },
    {
     "item": "Eggs Sardou",
     "price": "$24",
     "course": "main",
     "note": "poached eggs, artichoke hearts, creamed spinach, hollandaise - vegetarian as served"
    },
    {
     "item": "Eggs Benedict",
     "price": "$22",
     "course": "main",
     "note": "poached eggs, English muffin, hollandaise - ask without the smoked ham"
    },
    {
     "item": "Asparagus",
     "price": "$19",
     "course": "main",
     "note": "Omelettes section - three egg omelette with asparagus"
    },
    {
     "item": "Ham and Cheese",
     "price": "$19",
     "course": "main",
     "note": "Omelettes section - three egg omelette; ask without the ham (cheese only)"
    },
    {
     "item": "Bacon and Mushroom",
     "price": "$19",
     "course": "main",
     "note": "Omelettes section - three egg omelette; ask without the bacon (mushroom only)"
    },
    {
     "item": "Fish",
     "price": "Market Price",
     "course": "main",
     "note": "Fish section: \"see your server for today's offerings... seasonal selections of the freshest available fish.\" Preparations sautéed, broiled, fried or poached. Skip the crab/shrimp garnishes."
    },
    {
     "item": "Meunière Amandine",
     "price": "$3",
     "course": "side",
     "note": "Optional garnish for the fish - eligible"
    },
    {
     "item": "Lemon Caper Beurre Blanc",
     "price": "$3",
     "course": "side",
     "note": "Optional garnish for the fish - eligible"
    },
    {
     "item": "Asparagus Hollandaise",
     "price": "$9",
     "course": "side"
    },
    {
     "item": "Broccoli Hollandaise",
     "price": "$8",
     "course": "side"
    },
    {
     "item": "Brabant Potatoes",
     "price": "$7",
     "course": "side"
    },
    {
     "item": "Creamed Spinach",
     "price": "$6",
     "course": "side"
    },
    {
     "item": "Cauliflower",
     "price": "$8",
     "course": "side"
    },
    {
     "item": "Hashed Browns",
     "price": "$7",
     "course": "side"
    },
    {
     "item": "Sautéed Spinach",
     "price": "$8",
     "course": "side"
    },
    {
     "item": "Cauliflower au Gratin",
     "price": "$9",
     "course": "side"
    },
    {
     "item": "Lyonnaise Potatoes",
     "price": "$7",
     "course": "side"
    },
    {
     "item": "Spinach Rockefeller",
     "price": "$7",
     "course": "side",
     "note": "herbsaint-scented spinach side (no oysters); confirm no bacon"
    },
    {
     "item": "Fried Onion Rings",
     "price": "$7",
     "course": "side"
    },
    {
     "item": "Potatoes au Gratin",
     "price": "$8",
     "course": "side"
    },
    {
     "item": "Portobello Mushrooms",
     "price": "$8",
     "course": "side"
    },
    {
     "item": "Broiled Tomato",
     "price": "$7",
     "course": "side"
    },
    {
     "item": "Boiled Potato",
     "price": "$6",
     "course": "side"
    },
    {
     "item": "Caramel Cup Custard",
     "price": "$6",
     "course": "dessert"
    },
    {
     "item": "Bread Pudding",
     "price": "$9",
     "course": "dessert",
     "note": "banana praline sauce"
    },
    {
     "item": "French Silk Pie",
     "price": "$10",
     "course": "dessert",
     "note": "chocolate mousse, chocolate ganache, candied pecans, salted caramel, coco pearls"
    },
    {
     "item": "Seasonal Cheesecake",
     "price": "$10",
     "course": "dessert",
     "note": "printed on the menu as \"$1o\" (typo) - i.e. $10"
    },
    {
     "item": "Peach-Almond Trifle",
     "price": "$10",
     "course": "dessert",
     "note": "sponge cake, honey-roasted peaches, chantilly cream, toasted almonds"
    },
    {
     "item": "Raspberry Sorbet",
     "price": "$6",
     "course": "dessert"
    },
    {
     "item": "Vanilla or Coffee Ice Cream",
     "price": "$6",
     "course": "dessert"
    }
   ],
   "avoid_note": "Skip the house classics that are all shellfish or off-limits meat: Shrimp Remoulade, Crab Maison, Oysters Rockefeller, Oysters en Brochette, Escargot, Turtle Soup au Sherry, Seafood Okra Gumbo, Duck and Andouille Gumbo, Godchaux Salad, the whole Shellfish section (Crab Yvonne, Crabmeat Sardou, Stuffed Eggplant, Bouillabaisse, all the shrimp dishes) and the Meat section. Also decline the crab/shrimp garnishes offered on the fish.",
   "kosher_style_fit": "Workable with care: a solid vegetarian appetizer/salad/side selection plus market-price finned Gulf fish (redfish, trout, drum) that can be broiled or sautéed. Avoid the many shellfish and pork-based dishes; confirm fish is cooked separately from shellfish. Not kosher-certified.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Seafood",
    "Fine dining",
    "Southern"
   ],
   "price_band": "$$$$",
   "reserveUrl": "https://www.galatoires.com/reservations",
   "reserve_priority": true,
   "website": "https://www.galatoires.com",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2009-0228-NOLA-004-Galatoires.jpg/120px-2009-0228-NOLA-004-Galatoires.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2009-0228-NOLA-004-Galatoires.jpg/500px-2009-0228-NOLA-004-Galatoires.jpg",
   "menu_source": "https://www.galatoires.com/menus/dining-room (desserts from https://www.galatoires.com/menus/dessert)",
   "menu_confidence": "verified"
  },
  {
   "id": "gw-fins",
   "name": "GW Fins",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Upscale seafood",
   "vibe": "A polished, white-tablecloth seafood room in the heart of the Quarter where the menu is reprinted daily around whatever comes in fresh. Nationally ranked (Yelp Top 100 2026), it is the couple's best-fit fine-dining fish house in the city.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Yelp 4.5 (Tripadvisor 4.7)",
   "lat": 29.9547,
   "lng": -90.0683,
   "dinner_estimate": "About $55-70 per person: a chilled or hot starter $14-16 + a fish entrée $36-39 + dessert $11-13. The menu is printed daily, so exact fish change nightly.",
   "menu": [
    {
     "item": "Tempura Snapper Breast",
     "price": "$15",
     "course": "starter",
     "note": "Hot section - crispy noodle salad, Korean glaze"
    },
    {
     "item": "Sicilian Tuna Meatballs",
     "price": "$15",
     "course": "starter",
     "note": "Hot section - soft polenta, tomato ragu, Parmesan (tuna, not meat)"
    },
    {
     "item": "Smoked Tuna Dip",
     "price": "$14",
     "course": "starter",
     "note": "Chilled section - pickled peppers, fresh dill, house sesame crackers"
    },
    {
     "item": "Sashimi Grade Firecracker Tuna Tacos",
     "price": "$16",
     "course": "starter",
     "note": "Chilled section - ginger slaw, wasabi tobiko, avocado aioli"
    },
    {
     "item": "#1 Bluefin Tuna Tartare",
     "price": "$15",
     "course": "starter",
     "note": "Chilled section - mango, avocado mousse, radish, macadamia"
    },
    {
     "item": "Snapper Ceviche",
     "price": "$16",
     "course": "starter",
     "note": "Chilled section - aji chili, plantain chips, pico, habanero sorbet"
    },
    {
     "item": "Heirloom Tomato",
     "price": "$14",
     "course": "starter",
     "note": "Salads - wild arugula, sweet onions, fresh burrata, basil oil, balsamic reduction"
    },
    {
     "item": "Golden Beet",
     "price": "$13",
     "course": "starter",
     "note": "Salads - baby spinach, pecans, goat cheese, pickled red onions, sherry vinaigrette"
    },
    {
     "item": "Triple Iceberg Wedge",
     "price": "$15",
     "course": "starter",
     "note": "Salads - three wedges; ask without the bacon and without the shrimp topping"
    },
    {
     "item": "Parmesan Crusted Drum",
     "price": "$38",
     "course": "main",
     "note": "asparagus, truffled potatoes, crispy capers, Meyer lemon beurre blanc - ask without the jumbo lump crab"
    },
    {
     "item": "Yellowedge Grouper",
     "price": "$39",
     "course": "main",
     "note": "wood grilled, local melon salsa, crispy yucca, guava glaze - ask without the popcorn shrimp"
    },
    {
     "item": "Gulf Swordfish",
     "price": "$37",
     "course": "main",
     "note": "cast iron blackened, mashed potatoes, sautéed spinach, roasted corn butter, chili hollandaise - ask without the fried shrimp"
    },
    {
     "item": "Pecan Crusted Pomfret",
     "price": "$37",
     "course": "main",
     "note": "pan sauteed, gnocchi, summer squash, baby spinach, parsnip puree, sage brown butter - eligible as-is"
    },
    {
     "item": "#1 Yellowfin Tuna",
     "price": "$38",
     "course": "main",
     "note": "seared rare, fennel peppercorn crust, polenta, cremini mushrooms, wilted arugula, tomato ragu - eligible as-is"
    },
    {
     "item": "American Red Snapper",
     "price": "$38",
     "course": "main",
     "note": "pan sauteed, local long grain rice, crispy okra - ask without the Louisiana shrimp creole"
    },
    {
     "item": "Louisiana Tripletail",
     "price": "$36",
     "course": "main",
     "note": "wood grilled, sweet potato hash, chipotle butter, crispy plantains, pineapple basil glaze - eligible as-is"
    },
    {
     "item": "Sweet Corn Spoonbread",
     "price": "$9",
     "course": "side",
     "note": "black eyed pea succotash; confirm no pork in the succotash"
    },
    {
     "item": "Mushroom Risotto",
     "price": "$9",
     "course": "side",
     "note": "wild mushrooms, porcini butter"
    },
    {
     "item": "Compressed Watermelon & Feta",
     "price": "$7",
     "course": "side",
     "note": "balsamic pearls, mint"
    },
    {
     "item": "Cornmeal Fried Okra",
     "price": "$10",
     "course": "side",
     "note": "pepper jelly, chow chow"
    },
    {
     "item": "Salty Malty Ice Cream Pie",
     "price": "$12",
     "course": "dessert",
     "note": "pretzel crust, caramel whipped cream"
    },
    {
     "item": "Banana Foster Funnel Cake",
     "price": "$12",
     "course": "dessert",
     "note": "brûléed banana, dark rum caramel, vanilla ice cream"
    },
    {
     "item": "Coconut on the Half Shell",
     "price": "$12",
     "course": "dessert",
     "note": "coconut sorbet, chocolate shell, Forbidden coco crispies"
    },
    {
     "item": "Crème Brûlée",
     "price": "$13",
     "course": "dessert",
     "note": "fresh fruit"
    },
    {
     "item": "Chocolate Mousse Bombe",
     "price": "$12",
     "course": "dessert",
     "note": "raspberry coulis"
    },
    {
     "item": "House Made Sorbet",
     "price": "$11",
     "course": "dessert",
     "note": "ask your server for daily selections"
    }
   ],
   "avoid_note": "Skip Lobster Dumplings, Lobster Bisque, Barbeque Shrimp, Fried Oysters, Panko Crusted Calamari, Calamari \"Fettuccine\", Crispy Pork Belly, Gulf Shrimp Aguachile, the Scalibut (scallops + Royal Red shrimp risotto), the Sea Scallop Carbonara, and the chicken/pork chop/filet entrées. The Bluefin Tuna vs. Prime Ribeye ($75) is half beef, so it doesn't work either.",
   "kosher_style_fit": "Excellent fit — a dedicated fin-fish house, so nearly every entree is a scaled Gulf or wild fish; just steer around the shellfish and pork starters.",
   "tags": [
    "fish",
    "book"
   ],
   "filters": [
    "Seafood",
    "Fine dining",
    "Cajun/Creole"
   ],
   "reserveUrl": "https://www.opentable.com/gw-fins",
   "website": "https://www.gwfins.com",
   "reserve_priority": true,
   "photoUrl": null,
   "menu_source": "https://www.opentable.com/gw-fins",
   "menu_confidence": "verified"
  },
  {
   "id": "napoleon-house",
   "name": "Napoleon House",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Creole-Italian (Casual)",
   "vibe": "A landmark 1797 building with peeling-plaster walls, opera on the speakers, and a leafy courtyard — famous for the warm muffuletta and the Pimm's Cup. Atmospheric, unhurried, quintessentially old French Quarter.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Google/Sirved 4.5 stars; Yelp 2,100+ reviews. Loved for its historic ambiance and classic New Orleans fare more than any single dish.",
   "lat": 29.9573,
   "lng": -90.0637,
   "dinner_estimate": "$25-35 per person (starters + dessert + a spirit-free drink; there is no eligible entree)",
   "menu": [
    {
     "item": "Bruschetta",
     "price": "$12.00",
     "course": "starter",
     "note": "Melted mozzarella, pecan pesto drizzle, Parmesan and tomatoes on half of a toasted Italian loaf"
    },
    {
     "item": "Warm Spinach & Artichoke Dip",
     "price": "$13.00",
     "course": "starter",
     "note": "Served in a housemade sourdough bread bowl with pita bread for dipping"
    },
    {
     "item": "Wedge Salad",
     "price": "$12.00",
     "course": "starter",
     "note": "Iceberg, blue cheese, grape tomatoes, buttermilk dressing - ask without the bacon"
    },
    {
     "item": "Potato Salad",
     "price": "$5.00",
     "course": "side"
    },
    {
     "item": "Zapp's Potato Chips",
     "price": "$2.50",
     "course": "side"
    },
    {
     "item": "Classic Bread Pudding",
     "price": "$8.00",
     "course": "dessert",
     "note": "Studded with raisins, topped with warm whiskey sauce"
    },
    {
     "item": "Crème Brûlée",
     "price": "$8.00",
     "course": "dessert",
     "note": "French vanilla custard, caramelized sugar, Luxardo cherry"
    },
    {
     "item": "Chocolate Doberge Cake",
     "price": "$8.00",
     "course": "dessert",
     "note": "New Orleans multi-layer cake from the Ralph Brennan bakery"
    },
    {
     "item": "Fresh Fruit Plate",
     "price": "$6.00",
     "course": "dessert"
    },
    {
     "item": "Vir-Gin Pimm's",
     "price": "$9.00",
     "course": "drink",
     "note": "Spirit-free version of the house signature: Ritual Zero Proof gin, housemade lemonade, lemon-lime soda, cucumber (cocktails menu)"
    },
    {
     "item": "N/A-Perol Spritz",
     "price": "$11.00",
     "course": "drink",
     "note": "Ritual Zero Proof aperitif, soda, lemon juice + a twist (cocktails menu)"
    }
   ],
   "avoid_note": "Skip the house specialties: the Italian Muffuletta (ham, salami, pastrami), Chicken & Andouille Gumbo, Creole Jambalaya, Red Beans & Rice (served with smoked sausage), the Alligator Sausage / Hot Roast Beef / Hot Pastrami / Fried Gulf Shrimp / Fried Catfish po-boys, Boudin Sausage, Charcuterie Board, Muffuletta Salad, and the Shrimp Remoulade Stuffed Avocado.",
   "kosher_style_fit": "Weak fit for the fish-eater — the kitchen offers no eligible finned fish (the only fish item is catfish, which is out). Works only as vegetarian small plates and desserts. Heavy pork and shellfish presence throughout the menu; not kosher-certified.",
   "tags": [
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Southern",
    "Casual"
   ],
   "price_band": "$$",
   "reserveUrl": null,
   "reserve_priority": false,
   "website": "https://www.napoleonhouse.com",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/The_Napoleon_House_-_New_Orleans_February_2026.jpg/120px-The_Napoleon_House_-_New_Orleans_February_2026.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/The_Napoleon_House_-_New_Orleans_February_2026.jpg/500px-The_Napoleon_House_-_New_Orleans_February_2026.jpg",
   "menu_source": "https://www.napoleonhouse.com/menus/main-menu",
   "menu_confidence": "verified"
  },
  {
   "id": "sylvain",
   "name": "Sylvain",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "American gastropub",
   "vibe": "An intimate, candlelit gastropub in a late-1700s carriage house a block off Jackson Square, with a leafy courtyard for outdoor seating. Southern-leaning small plates and a strong cocktail list make it a romantic evening spot.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9573,
   "lng": -90.0637,
   "dinner_estimate": "$50-75 per person (starter $10-19 + Harrisa White Beans $24 or market-price Gulf Fish + dessert $11-13)",
   "menu": [
    {
     "item": "CAST IRON CORNBREAD",
     "price": "$10",
     "course": "starter",
     "note": "Spicy Steen's cane syrup butter"
    },
    {
     "item": "CRISPY ZUCCHINI",
     "price": "$14",
     "course": "starter",
     "note": "Fried zucchini fingers, tabasco mash aioli"
    },
    {
     "item": "TOMATO CARPACCIO",
     "price": "$19",
     "course": "starter",
     "note": "Caper berries, torn basil, redfish tonnato"
    },
    {
     "item": "SYLVAIN MARKET SALAD",
     "price": "$14",
     "course": "starter",
     "note": "Strawberry, celery, dried cranberries, pickled onions, sunflower seeds, strawberry vinaigrette"
    },
    {
     "item": "GREEN CABBAGE SALAD",
     "price": "$15",
     "course": "starter",
     "note": "Lime, peanut, cilantro, jalapeno"
    },
    {
     "item": "GULF FISH",
     "price": "MKT",
     "course": "main",
     "note": "Maque choux, white remoulade, trout roe - market price; ask whether the maque choux is made with bacon"
    },
    {
     "item": "HARRISA WHITE BEANS",
     "price": "$24",
     "course": "main",
     "note": "Mushroom conserva, okra, eggplant, heirloom tomato, cauliflower, pepitas"
    },
    {
     "item": "SHAKSHUKA",
     "price": "$21",
     "course": "main",
     "note": "Brunch (Fri-Sun 10:30am-3pm): roasted red peppers, tomato, poached eggs, salsa verde, baguette"
    },
    {
     "item": "FRIED GREEN TOMATO BLT",
     "price": "$18",
     "course": "main",
     "note": "Brunch: brioche bun, remoulade, iceberg, fried green tomatoes - ask without the bacon"
    },
    {
     "item": "BLUEBERRY BUTTERMILK PANCAKES",
     "price": "$19",
     "course": "main",
     "note": "Brunch: Steen's cane syrup, whipped maple walnut butter - ask without the bacon"
    },
    {
     "item": "EGGS BENEDICT",
     "price": "$18",
     "course": "main",
     "note": "Brunch: house-made biscuit, poached eggs, creamed kale, hollandaise - ask without the chisesi ham"
    },
    {
     "item": "FRENCH FRIES OR GRITS",
     "price": "8",
     "course": "side",
     "note": "Brunch sides list"
    },
    {
     "item": "HOUSE BUTTERMILK BISCUIT",
     "price": "5",
     "course": "side",
     "note": "Brunch sides list"
    },
    {
     "item": "EGGs (2)",
     "price": "2",
     "course": "side",
     "note": "Brunch sides list"
    },
    {
     "item": "STRAWBERRY SHORTCAKE",
     "price": "$13",
     "course": "dessert",
     "note": "Compote, mint-lime whip"
    },
    {
     "item": "NUTELLA CHOCOLATE TART",
     "price": "$11",
     "course": "dessert",
     "note": "Dark chocolate, orange, hazelnut, graham cracker, Nutella whip cream"
    },
    {
     "item": "COCONUT MILK CREME BRULEE",
     "price": "$13",
     "course": "dessert",
     "note": "Honey oat crisp (dessert menu)"
    },
    {
     "item": "NUTELLA CHOCOLATE PIE",
     "price": "$11",
     "course": "dessert",
     "note": "Nutella whip cream, toasted milk and hazelnut crumb (dessert menu)"
    },
    {
     "item": "VIRGIN MULE",
     "price": "$8",
     "course": "drink",
     "note": "Zero proof cocktails: lemon, lime, ginger"
    },
    {
     "item": "SEASONAL SHRUB & SODA",
     "price": "$8",
     "course": "drink",
     "note": "Zero proof: shrub made with seasonal fruit, lime, soda"
    },
    {
     "item": "ALL DAY SPRITZ",
     "price": "$9",
     "course": "drink",
     "note": "Zero proof: Lyre n/a aperitif, orange, sparkling water"
    },
    {
     "item": "SYLVAIN COLA",
     "price": "$6",
     "course": "drink",
     "note": "House cola, zero proof"
    },
    {
     "item": "FANCY SHIRLEY",
     "price": "$6",
     "course": "drink",
     "note": "Zero proof"
    }
   ],
   "avoid_note": "Skip the Shrimp Remoulade, Spicy Crawfish and Dumplings, Chicken Liver Paté, Pappardelle Bolognese, Slow Cooked Short Rib, Chicken Sandwich and Sylvain Burger. At brunch, skip the Eggs Benedict's chisesi ham and the bacon garnishes.",
   "kosher_style_fit": "Good fit — the market Gulf fish covers the finned-fish side and several vegetable starters, salads and the shakshuka/harissa beans cover the vegetarian side; just avoid the meat and shellfish plates.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Southern",
    "Casual",
    "Brunch",
    "Wine bar"
   ],
   "reserveUrl": null,
   "website": "https://www.sylvainnola.com",
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://www.sylvainnola.com/menu",
   "menu_confidence": "verified"
  },
  {
   "id": "st-roch-market",
   "name": "St. Roch Market",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Historic food hall with multiple independent vendors (poke/sushi, Middle Eastern, Italian, gulf seafood, juice)",
   "vibe": "A restored 1875 market building that now houses a dozen locally owned stalls under one airy roof, with a central bar. Order-at-the-counter and grab a communal table, so a fish-and-vegetarian couple can each pick a different vendor.",
   "price": "$$",
   "rating": 4.3,
   "rating_note": "Yelp ~4.0 across 699 reviews; Google ~4.4. Reviewers love the variety and historic space; some note it can be uneven vendor-to-vendor.",
   "lat": 29.9648,
   "lng": -90.053,
   "dinner_estimate": "$20-35 per person (one vendor plate $10-19 plus a juice, tea or dessert); a raw-fish poke bowl or sushirito runs $12-15",
   "menu": [
    {
     "item": "Chef Bowl",
     "price": "$14.99",
     "course": "main",
     "note": "Lin's Poke & Sushi - build-a-poke bowl; choose Tuna, Cooked Tuna or Salmon at $14.99 (Yellow Tail $19.99). Skip the shrimp, crab, octopus and eel options"
    },
    {
     "item": "Tofu Bowl",
     "price": "$11.99",
     "course": "main",
     "note": "Lin's Poke & Sushi - poke bowl with tofu"
    },
    {
     "item": "Veggie Bowl",
     "price": "$10.99",
     "course": "main",
     "note": "Lin's Poke & Sushi - all the vegetables on hand"
    },
    {
     "item": "Vegan Tuna Bowl",
     "price": "$12.99",
     "course": "main",
     "note": "Lin's Poke & Sushi - seasoned tomato 'vegan tuna'"
    },
    {
     "item": "Sushirrito",
     "price": "$14.99",
     "course": "main",
     "note": "Lin's Poke & Sushi - sushi burrito; Salmon or Tuna $14.99, Tofu $11.99, Veggies $9.99"
    },
    {
     "item": "Tuna Roll",
     "price": "$11.99",
     "course": "main",
     "note": "Lin's Poke & Sushi, 8-piece sushi roll (Salmon Roll, Spicy Tuna Roll and Spicy Salmon Roll are $9.99)"
    },
    {
     "item": "Hand Rolls",
     "price": "$13.99",
     "course": "starter",
     "note": "Lin's Poke & Sushi - 2 Tuna, 2 Salmon, or 1 of each at $13.99"
    },
    {
     "item": "Spring Roll",
     "price": "$14.99",
     "course": "starter",
     "note": "Lin's Poke & Sushi - rice paper, avocado, cucumber, lettuce; Tuna or Salmon $14.99, Tofu $10.99, Veggies $9.99"
    },
    {
     "item": "Spicy Tuna Nachos",
     "price": "$16",
     "course": "starter",
     "note": "Lin's Poke & Sushi, Tostitos dishes"
    },
    {
     "item": "Miso",
     "price": "$4.99",
     "course": "starter",
     "note": "Lin's Poke & Sushi - miso, seaweed, tofu, green onion"
    },
    {
     "item": "Seaweed Salad",
     "price": "$5",
     "course": "side",
     "note": "Lin's Poke & Sushi"
    },
    {
     "item": "6 Veggie Dumplings",
     "price": "$8.99",
     "course": "starter",
     "note": "Lin's Poke & Sushi"
    },
    {
     "item": "Green Tea Ice Cream",
     "price": "$5.99",
     "course": "dessert",
     "note": "Lin's Poke & Sushi"
    },
    {
     "item": "Herbs Salmon",
     "price": "$17.99",
     "course": "starter",
     "note": "Laksa appetizer - pan-fried salmon with avocado, cucumber, fresh herbs, soy sauce, green onion"
    },
    {
     "item": "Mohinga",
     "price": "$16.99",
     "course": "main",
     "note": "Laksa - rice noodles in salmon fish soup with lemongrass, ginger, rice-flour wonton chips"
    },
    {
     "item": "Tea Leaf Salad",
     "price": "$14.99",
     "course": "starter",
     "note": "Laksa (Lahpet Thoke) - fermented tea leaves, cabbage, peanuts, lime; ask for the vegan version so the dried tiny shrimp are left off"
    },
    {
     "item": "Burmese salad bowl",
     "price": "$13.99",
     "course": "starter",
     "note": "Laksa - romaine, cabbage, cucumber, chickpea, carrots, tomato, lime and sweet nutty house sauce"
    },
    {
     "item": "Rainbow Salad",
     "price": "$13.99",
     "course": "starter",
     "note": "Laksa - two noodles, green papaya, cabbage, carrot, bean sprouts, tamarind dressing; order with No Protein or Tofu"
    },
    {
     "item": "Shan Tofu",
     "price": "$11",
     "course": "starter",
     "note": "Laksa - Burmese chickpea tofu with tamarind dip"
    },
    {
     "item": "Veggie Tempura",
     "price": "$10.99",
     "course": "starter",
     "note": "Laksa - 4 pieces"
    },
    {
     "item": "Htamin Pound",
     "price": "$18.99",
     "course": "main",
     "note": "Laksa - herb veggie gravy with white rice and pickled cabbage, chili and onions"
    },
    {
     "item": "Burmese Coconut Soup",
     "price": "$14.99",
     "course": "main",
     "note": "Laksa (Tofu Nway) - coconut broth with rice or egg noodles; order the Vegan variation, No Protein or Tofu"
    },
    {
     "item": "Roti",
     "price": "$5.99",
     "course": "side",
     "note": "Laksa - flaky round flatbread"
    },
    {
     "item": "Rice Pudding",
     "price": "$6.99",
     "course": "dessert",
     "note": "Laksa - black sweet rice, peanuts, coconut milk, sesame"
    },
    {
     "item": "Sweet Burmese Tea",
     "price": "$6.99",
     "course": "drink",
     "note": "Laksa - black tea with star anise, tamarind seed, cardamom; half & half or almond milk"
    },
    {
     "item": "Hummus",
     "price": "$9",
     "course": "starter",
     "note": "Dolma - served with pita bread"
    },
    {
     "item": "Labna/Tzatziki",
     "price": "$9",
     "course": "starter",
     "note": "Dolma - strained yogurt, mint, olive oil, thyme"
    },
    {
     "item": "Loaded Dip",
     "price": "$13",
     "course": "starter",
     "note": "Dolma - hummus, baba ghanouche or tzatziki with tomato, cucumber, kalamata olives, feta"
    },
    {
     "item": "Falafel (4 Pieces)",
     "price": "$9",
     "course": "starter",
     "note": "Dolma"
    },
    {
     "item": "Grape Leaves 8 Pieces (Vegan)",
     "price": "$9",
     "course": "starter",
     "note": "Dolma - hand rolled with rice and fresh herbs"
    },
    {
     "item": "Red Lentil Soup (Vegan)",
     "price": "$9",
     "course": "starter",
     "note": "Dolma"
    },
    {
     "item": "Fancy Greek Salad",
     "price": "$12",
     "course": "starter",
     "note": "Dolma - tomato, cucumber, romaine, peppers, red onion, feta, kalamata, lemon vinaigrette"
    },
    {
     "item": "Fattoush Salad",
     "price": "$11",
     "course": "starter",
     "note": "Dolma - with crispy pita croutons"
    },
    {
     "item": "Roasted Cauliflower Salad",
     "price": "$13",
     "course": "starter",
     "note": "Dolma"
    },
    {
     "item": "Tabbouleh",
     "price": "$11",
     "course": "starter",
     "note": "Dolma - bulgur, tomato, parsley, onion, olive oil, lemon"
    },
    {
     "item": "Falafel Platter (Vegan)",
     "price": "$16.99",
     "course": "main",
     "note": "Dolma - pita bread and two sides of your choice"
    },
    {
     "item": "Roasted Cauliflower Platter (Vegan)",
     "price": "$16.99",
     "course": "main",
     "note": "Dolma - pita bread and two sides"
    },
    {
     "item": "Roasted Eggplant Platter (Vegan)",
     "price": "$17.99",
     "course": "main",
     "note": "Dolma - pita bread and two sides"
    },
    {
     "item": "Grape Leaves Platter (Vegan)",
     "price": "$16.99",
     "course": "main",
     "note": "Dolma - pita bread and two sides"
    },
    {
     "item": "Falafel Wrap (Vegan)",
     "price": "$10",
     "course": "main",
     "note": "Dolma - hummus, lettuce, tomato, cucumber, tahini"
    },
    {
     "item": "Roasted Eggplant Wrap (Vegan)",
     "price": "$11",
     "course": "main",
     "note": "Dolma"
    },
    {
     "item": "Fries",
     "price": "$6",
     "course": "side",
     "note": "Dolma"
    },
    {
     "item": "Rice",
     "price": "$6",
     "course": "side",
     "note": "Dolma - yellow basmati"
    },
    {
     "item": "Baklava",
     "price": "$9",
     "course": "dessert",
     "note": "Dolma"
    },
    {
     "item": "Dubai Chocolate",
     "price": "$9",
     "course": "dessert",
     "note": "Dolma"
    },
    {
     "item": "Pomodoro",
     "price": "$16",
     "course": "main",
     "note": "Padrona - spaghetti, classic tomato sauce, garlic, olive oil, fresh basil (order without meatballs or shrimp)"
    },
    {
     "item": "Kale Salad",
     "price": "$16",
     "course": "starter",
     "note": "Padrona - chopped kale, sliced apples, Parmesan, almonds, balsamic vinaigrette; ask without the pesto chicken"
    },
    {
     "item": "Veggie Grilled Cheese",
     "price": "$17",
     "course": "main",
     "note": "Olive & Co - colby jack with sauteed spinach, mushrooms and artichokes on brioche; served with chips or a side salad"
    },
    {
     "item": "Americana Grilled Cheese",
     "price": "$14",
     "course": "main",
     "note": "Olive & Co - classic American cheese on Texas toast; do not add the bacon or prosciutto"
    },
    {
     "item": "Caesar Salad",
     "price": "$14",
     "course": "starter",
     "note": "Olive & Co - traditional Caesar (the Roman, St Roch and St Claude salads all come with bacon)"
    },
    {
     "item": "Pasta Italiano Salad",
     "price": "$16",
     "course": "starter",
     "note": "Olive & Co - ditalini with chopped veggies, olive salad, feta and parmigiano reggiano"
    },
    {
     "item": "Tomato Basil Soup",
     "price": "$10",
     "course": "starter",
     "note": "Olive & Co"
    },
    {
     "item": "Broccoli Cheddar Soup",
     "price": "$10",
     "course": "starter",
     "note": "Olive & Co - creamy with sharp cheddar"
    },
    {
     "item": "Stuffed Mini Peppers",
     "price": "$13",
     "course": "starter",
     "note": "Olive & Co - sweet pepper halves with cream cheese and everything bagel seasoning"
    },
    {
     "item": "Caprese Skewers",
     "price": "$11",
     "course": "starter",
     "note": "Olive & Co"
    },
    {
     "item": "Side Pasta Salad",
     "price": "$9",
     "course": "side",
     "note": "Olive & Co"
    },
    {
     "item": "Side Caesar Salad",
     "price": "$7",
     "course": "side",
     "note": "Olive & Co"
    },
    {
     "item": "Dubai Brownie",
     "price": "$13",
     "course": "dessert",
     "note": "Olive & Co"
    },
    {
     "item": "Nutella Stuffed Snickerdoodle",
     "price": "$11",
     "course": "dessert",
     "note": "Olive & Co"
    },
    {
     "item": "Mini Cookie Trio",
     "price": "$6",
     "course": "dessert",
     "note": "Olive & Co"
    },
    {
     "item": "Chickpea Salad Wrap",
     "price": "$18",
     "course": "main",
     "note": "Frsh Juice - house chickpea salad, spring mix, heirloom tomatoes, pickles, vegan mayo; with chilli-cheese nachos or salad"
    },
    {
     "item": "Crunch Wrap",
     "price": "$18",
     "course": "main",
     "note": "Frsh Juice - spinach tortilla, 3-vegan-cheese blend, lettuce, tomato, ranch, crunchy tortilla layer"
    },
    {
     "item": "Stuffed Avocado Salad",
     "price": "$18",
     "course": "main",
     "note": "Frsh Juice - spring mix, avocado halves stuffed with plant-based eggplant 'sausage' crumble or BBQ jackfruit"
    },
    {
     "item": "Plant Based Entrées - Red Beans, Sausage & Quinoa",
     "price": "$19",
     "course": "main",
     "note": "Frsh Juice - creamy red beans with veggie sausage over white quinoa and a garden salad (fully plant-based)"
    },
    {
     "item": "Build Your Own Parfait",
     "price": "$10",
     "course": "dessert",
     "note": "Frsh Juice - up to 5 toppings"
    },
    {
     "item": "The Classic Oatmeal",
     "price": "$6",
     "course": "starter",
     "note": "Frsh Juice - up to 5 toppings"
    },
    {
     "item": "Parade Acai Bowl",
     "price": "$16",
     "course": "dessert",
     "note": "Frsh Juice"
    },
    {
     "item": "Yellow Juice",
     "price": "$13",
     "course": "drink",
     "note": "Frsh Juice - 12 oz cold pressed: orange, pineapple, ginger, honey, lemon"
    },
    {
     "item": "Red Juice",
     "price": "$12",
     "course": "drink",
     "note": "Frsh Juice - 12 oz cold pressed: beets, celery, carrots, orange"
    },
    {
     "item": "Purple Juice",
     "price": "$12",
     "course": "drink",
     "note": "Frsh Juice - beets, carrots, kale, spinach, ginger, red apples, orange"
    },
    {
     "item": "Pink Juice",
     "price": "$11.49",
     "course": "drink",
     "note": "Frsh Juice - watermelon, cucumber, ginger, lime, mint"
    },
    {
     "item": "Meca Smoothie",
     "price": "$11.49",
     "course": "drink",
     "note": "Frsh Juice - 16 oz spinach, pineapple, banana, almond milk"
    },
    {
     "item": "Mango Madness Smoothie",
     "price": "$12",
     "course": "drink",
     "note": "Frsh Juice - mango, pineapple, banana, coconut water"
    },
    {
     "item": "OG Shot",
     "price": "$5",
     "course": "drink",
     "note": "Frsh Juice - 2 oz ginger"
    }
   ],
   "avoid_note": "Skip Salted Pearl Oyster Bar entirely (raw/charbroiled/Rockefeller oysters, BBQ shrimp, crab mac and cheese, seafood pasta) and Not Ya Maw Kitchen and Chef Charles Bistreaux (fried catfish, pork chops, andouille gravy, shrimp and crawfish). At Padrona skip the Crawfish Tortellini, Crawfish Panini, Squid Ink Pasta with Shrimp and the Muffuletta; at Olive & Co skip the charcuterie boards, BLT, Frenchy and Breezy grilled cheeses (bacon/prosciutto) and the bacon-topped St. Roch/St. Claude/Roman salads; at Lin's skip anything with crab stick, crab meat, eel, octopus, tempura shrimp or the pork-broth ramen.",
   "kosher_style_fit": "Strong for a kosher-style finned-fish-plus-vegetarian couple: Lin's has clearly labeled tuna/salmon/tofu/veggie poke and Dolma is essentially all-vegetarian Middle Eastern. Not a kosher-certified kitchen and shared food-hall equipment, so avoid the shellfish, catfish and pork stalls.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Food hall",
    "Casual",
    "Middle Eastern",
    "Vegetarian",
    "Seafood",
    "Cafe"
   ],
   "website": "https://www.strochmarket.com",
   "reserveUrl": null,
   "reserve_priority": false,
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/MarignyAcrossFromSpigaJuly08.jpg/120px-MarignyAcrossFromSpigaJuly08.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/MarignyAcrossFromSpigaJuly08.jpg/250px-MarignyAcrossFromSpigaJuly08.jpg",
   "menu_source": "https://www.strochmarket.com/vendors.html",
   "menu_confidence": "verified"
  },
  {
   "id": "peche-seafood-grill",
   "name": "Pêche Seafood Grill",
   "district": "wh",
   "area_label": "Warehouse District",
   "cuisine": "Seafood, wood-fired",
   "vibe": "A buzzy, high-ceilinged Warehouse District room built around a live-fire hearth where whole Gulf fish roast over hardwood. James Beard-winning, rustic-but-polished coastal cooking.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9438,
   "lng": -90.0703,
   "dinner_estimate": "$55-75 per person (a snack or raw-bar plate plus a fish entrée and a side, before drinks)",
   "menu": [
    {
     "item": "smoked drum w/ olives",
     "price": "$13",
     "course": "starter",
     "note": "raw bar section; smoked Gulf drum"
    },
    {
     "item": "smoked tuna dip",
     "price": "$11",
     "course": "starter",
     "note": "snacks section; served with saltines"
    },
    {
     "item": "fried bread w/ sea salt",
     "price": "$8",
     "course": "starter",
     "note": "snacks section; vegetarian"
    },
    {
     "item": "hushpuppies",
     "price": "$9",
     "course": "starter",
     "note": "snacks section; vegetarian"
    },
    {
     "item": "crispy okra w/cilantro",
     "price": "$12",
     "course": "starter",
     "note": "snacks section; vegetarian"
    },
    {
     "item": "fish sticks w/ urban south beer batter",
     "price": "$15",
     "course": "starter",
     "note": "small plates section; confirm the day's fish is not catfish"
    },
    {
     "item": "cabbage salad w/ carrots, peanuts + soy",
     "price": "$10",
     "course": "starter",
     "note": "soup & salad section; vegetarian"
    },
    {
     "item": "baked drum w/ saffron, peas + artichoke",
     "price": "$34",
     "course": "main",
     "note": "entrées section"
    },
    {
     "item": "grilled tuna w/ okra, tomato + chili garlic",
     "price": "$36",
     "course": "main",
     "note": "entrées section"
    },
    {
     "item": "whole grilled fish",
     "price": "mp",
     "course": "main",
     "note": "for the table section; changes daily (redfish, snapper, etc.) - priced at market"
    },
    {
     "item": "brussels sprouts w/ chili vinegar",
     "price": "$8",
     "course": "side",
     "note": "vegetarian"
    },
    {
     "item": "brabant potatoes",
     "price": "$8",
     "course": "side",
     "note": "vegetarian"
    },
    {
     "item": "eggplant w/ almonds + basil",
     "price": "$9",
     "course": "side",
     "note": "vegetarian"
    },
    {
     "item": "creamed corn w/ miso + parsley",
     "price": "$9",
     "course": "side",
     "note": "vegetarian"
    },
    {
     "item": "grilled zucchini w/ caper, dill + sourdough",
     "price": "$9",
     "course": "side",
     "note": "vegetarian"
    },
    {
     "item": "heirloom tomatoes w/ cucumber + cured egg",
     "price": "$10",
     "course": "side",
     "note": "vegetarian; contains egg"
    },
    {
     "item": "carrot sticky toffee pudding",
     "price": "$13",
     "course": "dessert",
     "note": "cream cheese ice cream + candied pecan"
    },
    {
     "item": "salted peanut pie",
     "price": "$15",
     "course": "dessert",
     "note": "salted peanut ice cream + chocolate sauce"
    },
    {
     "item": "key lime pie",
     "price": "$13",
     "course": "dessert",
     "note": "buttermilk chantilly + creme anglaise"
    },
    {
     "item": "salted caramel cake",
     "price": "$12",
     "course": "dessert",
     "note": "caramel buttercream, milk chocolate ganache"
    },
    {
     "item": "crepe cake",
     "price": "$14",
     "course": "dessert",
     "note": "peaches + vanilla pudding"
    },
    {
     "item": "ice cream or sorbet",
     "price": "$9",
     "course": "dessert",
     "note": "daily selection"
    },
    {
     "item": "mockingbird",
     "price": "$12",
     "course": "drink",
     "note": "zero proof cocktail; alcohol-free jungle bird + ginger"
    },
    {
     "item": "phony negroni",
     "price": "$12",
     "course": "drink",
     "note": "zero proof cocktail; alcohol-free negroni from st. agrestis"
    }
   ],
   "avoid_note": "Skip the signature crawfish/crab capellini, shrimp toast, spicy ground shrimp + noodles, fried oysters, charbroiled-style raw bar shellfish, seafood gumbo, seafood platter, seafood salad, jumbo shrimp entrée, catfish small plate, steak tartare, hanger steak, ribeye and both grilled chicken dishes.",
   "kosher_style_fit": "Strong for finned fish: grilled tuna, baked drum and whole wood-fired Gulf fish are all eligible, plus solid veg sides and desserts, though shellfish and catfish dominate much of the menu.",
   "tags": [
    "fish",
    "book"
   ],
   "filters": [
    "Seafood",
    "Cajun/Creole",
    "Fine dining",
    "Casual"
   ],
   "reserve_priority": true,
   "website": "https://www.pecherestaurant.com",
   "reserveUrl": "https://resy.com/cities/new-orleans-la/venues/peche-seafood-grill",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/New_Orleans_CBD_1_Oct_2016_24.jpg/120px-New_Orleans_CBD_1_Oct_2016_24.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/New_Orleans_CBD_1_Oct_2016_24.jpg/500px-New_Orleans_CBD_1_Oct_2016_24.jpg",
   "menu_source": "https://www.pecherestaurant.com/",
   "menu_confidence": "verified"
  },
  {
   "id": "compere-lapin",
   "name": "Compère Lapin",
   "district": "wh",
   "area_label": "Warehouse District",
   "cuisine": "Caribbean-Creole",
   "vibe": "Chef Nina Compton's airy, exposed-brick dining room inside the Old No. 77 Hotel, blending St. Lucian island flavors with New Orleans soul. Buzzy and polished, equally right for a date or a celebratory dinner.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9438,
   "lng": -90.068,
   "dinner_estimate": "$60-80 per person (a First plus the Market Fish or Ital Stew, before drinks)",
   "menu": [
    {
     "item": "Buttermilk Biscuits/Honey Butter/Bacon Butter",
     "price": "8",
     "course": "starter",
     "note": "Small Bites, 2 per order; ask for the honey butter only, without the bacon butter"
    },
    {
     "item": "Jalapeño & Scallion Hushpuppies/Cilantro Crema",
     "price": "6",
     "course": "starter",
     "note": "Small Bites; vegetarian"
    },
    {
     "item": "Salmon Crudo/Mango/Dasheen Chips",
     "price": "17",
     "course": "starter",
     "note": "First course; raw salmon"
    },
    {
     "item": "Local Green Salad/Crispy Yams/Soft Herbs",
     "price": "13",
     "course": "starter",
     "note": "First course; gluten free and vegan on request"
    },
    {
     "item": "Smoked Fish Dip/Tostones/Pickles",
     "price": "15",
     "course": "starter",
     "note": "First course; confirm the smoked fish of the day"
    },
    {
     "item": "Ital Stew/Corn/Okra/Chive Roti",
     "price": "25",
     "course": "main",
     "note": "Second course; Rastafarian-style vegetable stew, vegan on request"
    },
    {
     "item": "Market Fish/Cou-Cou/Okra & Tomato Choka",
     "price": "37",
     "course": "main",
     "note": "Second course; ask which fish is running that night"
    },
    {
     "item": "Pineapple Rum Cake/Lemongrass Turmeric Ice Cream",
     "price": "12",
     "course": "dessert"
    },
    {
     "item": "Mango Crème Brulee/Coconut Snow",
     "price": "12",
     "course": "dessert"
    },
    {
     "item": "Bread Pudding/Cashew Croquant/Banana Ice Cream",
     "price": "14",
     "course": "dessert",
     "note": "contains nuts"
    },
    {
     "item": "Daily selection of Ice Cream or Sorbet",
     "price": "6",
     "course": "dessert"
    },
    {
     "item": "Sorrel Tea",
     "price": "8",
     "course": "drink",
     "note": "Non-Alc and Mocktails; house sorrel (spiced hibiscus tea)/ginger/lavender/lime"
    },
    {
     "item": "Tell Tale Heart",
     "price": "8",
     "course": "drink",
     "note": "Non-Alc and Mocktails; strawberry balsamic shrub/tonic water"
    },
    {
     "item": "Unified Ferments Kombucha Style Jasmine Green Tea",
     "price": "10/40",
     "course": "drink",
     "note": "Non-Alc list; by the glass / bottle"
    }
   ],
   "avoid_note": "Skip the blackened pig ears, jerk pork belly, octopus, semolina dumplings with shrimp, curried goat and fried chicken - and the $85 'Just Feed Me' tasting, which requires full-table participation and is built around those dishes.",
   "kosher_style_fit": "Good fit: two raw finned-fish starters (tuna, hamachi), a finned market fish main, plus a full vegetarian risotto and vegetable plates.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Latin",
    "Seafood",
    "Fine dining"
   ],
   "reserveUrl": "https://www.opentable.com/r/compere-lapin",
   "website": "http://comperelapin.com/",
   "reserve_priority": true,
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Biscuits_from_Comp%C3%A8re_Lapin_%28cropped%29.jpg/120px-Biscuits_from_Comp%C3%A8re_Lapin_%28cropped%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Biscuits_from_Comp%C3%A8re_Lapin_%28cropped%29.jpg/500px-Biscuits_from_Comp%C3%A8re_Lapin_%28cropped%29.jpg",
   "menu_source": "http://comperelapin.com/menus.html",
   "menu_confidence": "verified"
  },
  {
   "id": "seaworthy",
   "name": "Seaworthy",
   "district": "wh",
   "area_label": "Warehouse/Arts",
   "cuisine": "Coastal seafood & oyster bar",
   "vibe": "An intimate oyster-bar and cocktail den set in a restored 1830s Creole cottage in the CBD/Warehouse District, with a maritime feel and a serious raw bar. Refined, seasonal seafood plus a handful of vegetable dishes make it workable for a fish-and-veg couple.",
   "price": "$$$",
   "rating": 4.4,
   "rating_note": "Yelp ~4.2–4.4 across 620+ reviews; Google ~4.5. Praised for oysters, cocktails, gulf fish and attentive service.",
   "lat": 29.9487,
   "lng": -90.0714,
   "dinner_estimate": "$50-70 per person (a small plate plus the poached halibut or fish & chips, before drinks)",
   "menu": [
    {
     "item": "SERRANO HUSHPUPPIES",
     "price": "$14",
     "course": "starter",
     "note": "Small Plates; creamy maque choux, dill, green tomato chow chow - confirm the maque choux is made without pork"
    },
    {
     "item": "TUNA TARTARE",
     "price": "$17",
     "course": "starter",
     "note": "Small Plates; squid ink cracker, aioli, smoked beets"
    },
    {
     "item": "STEWED LOUISIANA OKRA",
     "price": "$14",
     "course": "starter",
     "note": "Small Plates; tomato alla norma, urfa pepper, heirloom sesame - vegetarian"
    },
    {
     "item": "CAPRESE SALAD",
     "price": "$17",
     "course": "starter",
     "note": "Small Plates; heirloom tomato, red onion, basil, buffalo mozzarella"
    },
    {
     "item": "PARKER HOUSE ROLLS",
     "price": "$12",
     "course": "starter",
     "note": "Small Plates; burnt leek and bonito butter"
    },
    {
     "item": "FRENCH FRIES",
     "price": "$12",
     "course": "starter",
     "note": "listed under Small Plates; parmesan, truffle aioli"
    },
    {
     "item": "BOWFIN",
     "price": "$30",
     "course": "starter",
     "note": "Caviar Service; wild-caught American roe served with beignets, crème fraîche & chives"
    },
    {
     "item": "PADDLEFISH",
     "price": "$45",
     "course": "starter",
     "note": "Caviar Service; served with beignets, crème fraîche & chives"
    },
    {
     "item": "HACKLEBACK",
     "price": "$60",
     "course": "starter",
     "note": "Caviar Service; served with beignets, crème fraîche & chives"
    },
    {
     "item": "POACHED HALIBUT",
     "price": "$32",
     "course": "main",
     "note": "Large Plates; tomato broth, sunflower, spring pea, basil, chive"
    },
    {
     "item": "FISH & CHIPS",
     "price": "$29",
     "course": "main",
     "note": "Large Plates; beer battered, sauce gribiche, seasoned fries - confirm the fish is not catfish"
    },
    {
     "item": "FROZEN KEY LIME PIE",
     "price": "$13",
     "course": "dessert",
     "note": "Sweets; graham butter, coconut mousse"
    },
    {
     "item": "CHOCOLATE HAZELNUT TART",
     "price": "$14",
     "course": "dessert",
     "note": "Sweets; chocolate cremeux, hazelnuts, strawberry gel"
    },
    {
     "item": "BUCK",
     "price": "$8",
     "course": "drink",
     "note": "Zero-Proof Cocktails; coconut water, almond, ginger, mint"
    },
    {
     "item": "VELVET HEAT",
     "price": "$8",
     "course": "drink",
     "note": "Zero-Proof Cocktails; strawberry-jalapeño syrup, lime, soda"
    }
   ],
   "avoid_note": "This is an oyster house - skip the raw and charbroiled oysters, oyster purloo, shrimp cocktail, shrimp boulettes, crab salad, shrimp & grits, the crawfish Seaworthy Roll, boudin and gravy, and the wagyu burger.",
   "kosher_style_fit": "Moderate: there is a clear set of finned-fish dishes (mahi, cobia, trout, redfish, swordfish, anchovy, trout roe) plus vegetarian salads, fries and desserts, but it is fundamentally an oyster bar with heavy shellfish and some pork, and it is not kosher-certified. Easy to eat well here if you order deliberately.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Seafood",
    "Fine dining",
    "Late night",
    "Brunch"
   ],
   "website": "https://seaworthynola.com",
   "reserveUrl": "https://www.opentable.com/r/seaworthy-new-orleans-2",
   "reserve_priority": true,
   "photoUrl": "https://seaworthynola.com/assets/2024/11/The-Barnett-New-Orleans-Seaworthy-Upstairs-2.jpg",
   "coverUrl": "https://seaworthynola.com/assets/2024/11/The-Barnett-New-Orleans-Seaworthy-Upstairs-2.jpg",
   "menu_source": "https://seaworthynola.com/assets/2024/11/Seaworthy-Menu-6.2.2026-1.pdf",
   "menu_confidence": "verified"
  },
  {
   "id": "commanders-palace",
   "name": "Commander's Palace",
   "district": "gd",
   "area_label": "Garden District/Uptown",
   "cuisine": "Haute Creole fine dining",
   "vibe": "The turquoise Victorian landmark of the Garden District, open since 1893 and a multiple James Beard winner, known for polished haute-Creole cooking, a jacket-preferred dining room and a famously festive Jazz Brunch. A special-occasion room where the kitchen readily tailors dishes.",
   "price": "$$$$",
   "rating": 4.7,
   "rating_note": "Yelp ~4.5 across 6,300+ reviews and Tripadvisor 4.5 (#79 of ~1,479); Google ~4.7. Consistently praised for service, ambiance and the bread pudding soufflé.",
   "lat": 29.9285,
   "lng": -90.0842,
   "dinner_estimate": "$75-95 per person for a starter, gulf fish entree and dessert, before drinks, tax and tip",
   "menu": [
    {
     "item": "Hickory Smoked Cauliflower",
     "price": "$14",
     "course": "starter",
     "note": "Cold smoked cauliflower florets, green tomato chow chow, crispy oyster mushrooms and Louisiana field pea hummus - vegetarian; on both lunch and dinner menus"
    },
    {
     "item": "Tomatoes & Watermelon",
     "price": "$14.50",
     "course": "starter",
     "note": "Lunch appetizer: olive oil marinated summer tomatoes, compressed watermelon, torched Robiola Bosina, kale chips, preserved lemon vinaigrette, pepita-chevre pistou"
    },
    {
     "item": "Commander's Crisp Romaine Salad",
     "price": "$12",
     "course": "starter",
     "note": "Romaine, Parmesan, pressed egg, croutons, shaved Gruyere, black pepper dressing - ask without the crumbled bacon"
    },
    {
     "item": "Sweet & Spicy Summer Salad",
     "price": "$13",
     "course": "starter",
     "note": "Shaved green apple and fennel, arugula, blackberry vinaigrette, almond-oat granola over lemon buttermilk chevre - vegetarian"
    },
    {
     "item": "Black Sesame & Sunflower Gulf Fish",
     "price": "$39",
     "course": "main",
     "note": "Dinner: cast iron seared Gulf fish over Creole tomato rouille with Louisiana red beans, spinach, sweet peas - ask without the andouille sausage in the red beans"
    },
    {
     "item": "Pecan Crusted Gulf Fish",
     "price": "$43",
     "course": "main",
     "note": "Dinner: pecan crusted fish with roasted corn, asparagus, grilled kale, melted leeks, whiskey crushed corn cream - ask without the prosecco poached jumbo lump crab on top"
    },
    {
     "item": "Creole Spiced Gulf Fish",
     "price": "$35",
     "course": "main",
     "note": "Lunch entree: cast iron seared Gulf fish with cremini mushrooms, grilled artichoke hearts, Brabant potatoes, sweet peas, absinthe frappe"
    },
    {
     "item": "Collard Green Spanokopita",
     "price": "$28",
     "course": "main",
     "note": "Vegetarian: phyllo stuffed with French feta creamed collard greens, spring onion aioli, red beans, chestnut mushrooms. Lunch price $28; $39 as a dinner three-course offering"
    },
    {
     "item": "Garlic Wilted Spinach",
     "price": "$9",
     "course": "side",
     "note": "Dinner side ($7 at lunch)"
    },
    {
     "item": "Saute of Sweet Corn, Grilled Kale, Asparagus & Leeks",
     "price": "$10",
     "course": "side",
     "note": "Dinner side"
    },
    {
     "item": "Creole Bread Pudding Souffle",
     "price": "$11",
     "course": "dessert",
     "note": "Finished tableside with warm whiskey cream - must be ordered 20 minutes in advance"
    },
    {
     "item": "Creole Cream Cheese Cheesecake",
     "price": "$10",
     "course": "dessert",
     "note": "Dinner price ($12 on the lunch menu); honey graham crust, chocolate lattice, caramel"
    },
    {
     "item": "Peach & Blueberry Buckle",
     "price": "$10",
     "course": "dessert",
     "note": "Dinner price; listed as Blueberry & Peach Buckle at $12 on the lunch menu"
    },
    {
     "item": "Pecan Pie a la Mode",
     "price": "$10",
     "course": "dessert",
     "note": "Lunch menu: southern style pecan pie, vanilla bean ice cream, chocolate, candied pecans, fleur de sel caramel"
    },
    {
     "item": "Piety & Desire Bushwacker Chocolate Tart",
     "price": "$12",
     "course": "dessert",
     "note": "Lunch menu: coconut rum and Kahlua spiked dark chocolate, toasted coconut crust, Chantilly cream"
    },
    {
     "item": "Ice Cream or Sorbet Du Jour",
     "price": "$10",
     "course": "dessert",
     "note": "Daily handspun ice cream or seasonal fruit sorbet"
    }
   ],
   "avoid_note": "Skip the house signatures: Turtle Soup au Sherry, Commander's Creole Gumbo, Shrimp & Tasso Henican, Wild White Shrimp Remoulade, Corn Fried Oysters, Crispy Pork Jowl, Cochon de Lait, Tournedos of Black Angus Beef and the Texas Quail. The prosecco poached jumbo lump crab side is also out.",
   "kosher_style_fit": "Workable for a special night if you order carefully: two finned gulf-fish mains plus a genuine vegetarian entree (collard-green spanakopita), vegetarian starters, sides and celebrated desserts. Not kosher-certified and the kitchen uses pork and shellfish throughout, but staff are gracious about substitutions.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Fine dining",
    "Southern",
    "Brunch"
   ],
   "website": "https://www.commanderspalace.com",
   "reserveUrl": "https://www.opentable.com/r/commanders-palace-new-orleans",
   "reserve_priority": true,
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/2009-0301-NOLA-001-CommandersPalace.jpg/120px-2009-0301-NOLA-001-CommandersPalace.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/2009-0301-NOLA-001-CommandersPalace.jpg/500px-2009-0301-NOLA-001-CommandersPalace.jpg",
   "menu_source": "https://www.commanderspalace.com/menus",
   "menu_confidence": "verified"
  },
  {
   "id": "la-petite-grocery",
   "name": "La Petite Grocery",
   "district": "gd",
   "area_label": "Uptown / Magazine St",
   "cuisine": "Contemporary Creole",
   "vibe": "A polished, white-tablecloth bistro in a converted 19th-century grocery on Magazine Street, warm and buzzy with tin ceilings and a marble bar. A special-occasion room from a James Beard-winning kitchen.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9218,
   "lng": -90.0975,
   "dinner_estimate": "$70-90 per person for an appetizer, the redfish and dessert, before drinks, tax and tip",
   "menu": [
    {
     "item": "Ricotta Dumplings",
     "price": "$15",
     "course": "starter",
     "note": "Hen of the woods & grana padano - vegetarian"
    },
    {
     "item": "Local Green Salad",
     "price": "$16",
     "course": "starter",
     "note": "Chilled roasted beets, creme fraiche dressing & breadcrumbs - vegetarian"
    },
    {
     "item": "White Bean Salad",
     "price": "$18",
     "course": "starter",
     "note": "Tomato conserva & preserved lemon - ask without the poached gulf shrimp"
    },
    {
     "item": "Heirloom Tomato Salad",
     "price": "$23",
     "course": "starter",
     "note": "Cucumbers & artichoke yogurt - ask without the blue crab"
    },
    {
     "item": "Pan Roasted Redfish",
     "price": "$43",
     "course": "main",
     "note": "Louisiana courtbouillon, haricots verts & popcorn rice"
    },
    {
     "item": "Hot Iron Buttermilk Waffle",
     "price": "$14",
     "course": "main",
     "note": "Brunch entree: chef's selection of accompaniments - confirm the accompaniments are meat-free"
    },
    {
     "item": "Brioche Pain Perdu",
     "price": "$18",
     "course": "main",
     "note": "Brunch entree: lemon mousse, brown butter streusel & Steen's cane syrup"
    },
    {
     "item": "Roasted Broccoli",
     "price": "$11",
     "course": "side",
     "note": "Chili flakes & bagna cauda (anchovy-garlic sauce)"
    },
    {
     "item": "Baked Macaroni",
     "price": "$13",
     "course": "side",
     "note": "Pecorino pepato & cornbread crumbs - vegetarian"
    },
    {
     "item": "Fried Green Tomatoes",
     "price": "$13",
     "course": "side",
     "note": "Burrata & oregano - ask without the country ham"
    },
    {
     "item": "Pickle Jar",
     "price": "$10",
     "course": "side",
     "note": "Daily assortment"
    },
    {
     "item": "Stone Ground Grits",
     "price": "$7",
     "course": "side",
     "note": "Butter, sea salt & chives"
    },
    {
     "item": "Marinated Cucumbers",
     "price": "$14",
     "course": "side",
     "note": "Whipped creme fraiche, arugula & bottarga (cured fish roe)"
    },
    {
     "item": "Hand Cut Fries",
     "price": "$7",
     "course": "side",
     "note": "Sea salt, chives & dijonnaise"
    },
    {
     "item": "Buttermilk Biscuit",
     "price": "$5",
     "course": "side",
     "note": "Brunch: honey & thyme butter"
    },
    {
     "item": "Potato Hash Brown",
     "price": "$14",
     "course": "side",
     "note": "Brunch: smoked redfish & dill"
    },
    {
     "item": "Carrot Cake",
     "price": "$12",
     "course": "dessert",
     "note": "Cream cheese ice cream, carrot caramel & pecan streusel"
    },
    {
     "item": "Chocolate Delice",
     "price": "$12",
     "course": "dessert",
     "note": "Coconut caramel & toasted peaches"
    },
    {
     "item": "Gateau Basque",
     "price": "$11",
     "course": "dessert",
     "note": "Lemon mousse & candied almonds"
    },
    {
     "item": "Butterscotch Pudding",
     "price": "$10",
     "course": "dessert",
     "note": "Vanilla bean cream & cookies"
    },
    {
     "item": "Abita Root Beer Float",
     "price": "$10",
     "course": "dessert",
     "note": "Housemade cardamom ice cream"
    },
    {
     "item": "Housemade Ice Cream",
     "price": "$10",
     "course": "dessert"
    },
    {
     "item": "Fentimans Rose Lemonade",
     "price": "$5",
     "course": "drink",
     "note": "9.3oz bottle, non-alcoholic beverage list"
    },
    {
     "item": "Abita Root Beer",
     "price": "$5",
     "course": "drink",
     "note": "12oz bottle"
    }
   ],
   "avoid_note": "The famous Blue Crab Beignets, Turtle Bolognese, Shrimp & Okra Gumbo, Shellfish Stew, Gulf Shrimp & Grits, Steak Tartare, Paneed Rabbit and the LPG Cheeseburger are all out. Pan Roasted Redfish is the only eligible dinner entree, so plan on filling in with appetizers and sides.",
   "kosher_style_fit": "One clean finned-fish entree (redfish) plus a deep bench of vegetarian salads, sides and desserts make it an easy fit for this diet.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Southern",
    "Fine dining",
    "Seafood"
   ],
   "reserveUrl": "https://www.opentable.com/r/la-petite-grocery-new-orleans",
   "website": "https://www.lapetitegrocery.com",
   "reserve_priority": true,
   "photoUrl": null,
   "menu_source": "https://www.lapetitegrocery.com/menus",
   "menu_confidence": "verified"
  },
  {
   "id": "shaya",
   "name": "Shaya",
   "district": "gd",
   "area_label": "Garden District / Magazine Street",
   "cuisine": "Israeli",
   "vibe": "The James Beard Best New Restaurant winner, centered on a wood-fired oven turning out puffy fresh pita and vegetable-driven mezze. Handsome, whitewashed and buzzy on Magazine Street.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9236,
   "lng": -90.093,
   "dinner_estimate": "$60-80 per person for a few mezze or a hummus, the salmon and a dessert, before drinks, tax and tip (a 3% administrative fee is added to all checks)",
   "menu": [
    {
     "item": "baba ganoush",
     "price": "$7",
     "course": "starter",
     "note": "Mezze, priced 1 for $7 / 3 for $18 / 5 for $29; creamy eggplant, charred green onion, olive oil"
    },
    {
     "item": "heirloom tomatoes",
     "price": "$7",
     "course": "starter",
     "note": "Mezze (1 for $7 / 3 for $18 / 5 for $29); toum, shishito pepper, sumac, dill"
    },
    {
     "item": "smoked labneh",
     "price": "$7",
     "course": "starter",
     "note": "Mezze (1 for $7 / 3 for $18 / 5 for $29); lima beans, charred chili vinaigrette"
    },
    {
     "item": "pickles",
     "price": "$7",
     "course": "starter",
     "note": "Mezze (1 for $7 / 3 for $18 / 5 for $29); market vegetables, vegan"
    },
    {
     "item": "ikra",
     "price": "$7",
     "course": "starter",
     "note": "Mezze (1 for $7 / 3 for $18 / 5 for $29); whipped cream cheese, anchovies, shallots, dill - contains anchovy (finned fish); add smoked trout roe +5"
    },
    {
     "item": "muhammara",
     "price": "$7",
     "course": "starter",
     "note": "Mezze (1 for $7 / 3 for $18 / 5 for $29); roasted red pepper, walnut, pomegranate molasses, vegan"
    },
    {
     "item": "cauliflower",
     "price": "$17",
     "course": "starter",
     "note": "Hummus: caramelized onions, cilantro - vegan"
    },
    {
     "item": "tahini",
     "price": "$14",
     "course": "starter",
     "note": "Hummus: extra virgin olive oil, harissa - vegan"
    },
    {
     "item": "wild mushroom",
     "price": "$17",
     "course": "starter",
     "note": "Hummus: sage-brown butter, za'atar-hazelnuts"
    },
    {
     "item": "crispy halloumi",
     "price": "$15",
     "course": "starter",
     "note": "Small plate: creole tomato jam, kalamata tapenade, pickled sweet pepper, arugula"
    },
    {
     "item": "falafel",
     "price": "$13",
     "course": "starter",
     "note": "Small plate: green tahini, pickled cabbage - vegan"
    },
    {
     "item": "brussels sprouts",
     "price": "$14",
     "course": "starter",
     "note": "Small plate: tahini, shallots, fresh herbs - vegan"
    },
    {
     "item": "mediterranean salad",
     "price": "$15",
     "course": "starter",
     "note": "Cherry tomatoes, cucumber, red onions, za'atar, preserved lemon vinaigrette, Bulgarian feta; salmon can be added +15"
    },
    {
     "item": "fattoush salad",
     "price": "$15",
     "course": "starter",
     "note": "Little gem, tomato, sweet peppers, shallots, sumac pomegranate vinaigrette, za'atar pita chips - vegan; salmon +15"
    },
    {
     "item": "bakkafrost salmon",
     "price": "$32",
     "course": "main",
     "note": "On both the lunch and dinner large plates: caramelized harissa, couscous \"risotto\", saffron lemon butter"
    },
    {
     "item": "wood-fired whole branzino*",
     "price": "$45",
     "course": "main",
     "note": "Lunch large plates, available on Fridays only; capers, parsley, spinach"
    },
    {
     "item": "falafel sandwich",
     "price": "$16",
     "course": "main",
     "note": "Lunch large plate: hummus, tomato, red onion, zhoug tahini"
    },
    {
     "item": "white chocolate malabi",
     "price": "$12",
     "course": "dessert",
     "note": "Passion fruit, pistachio crumble"
    },
    {
     "item": "chocolate tahini mousse",
     "price": "$13",
     "course": "dessert",
     "note": "Sesame brittle"
    },
    {
     "item": "knafeh cheesecake",
     "price": "$13",
     "course": "dessert",
     "note": "Pomegranate caramel, bastilla nuts, orange blossom gelato"
    },
    {
     "item": "piccola gelateria seasonal gelato or sorbet",
     "price": "$8",
     "course": "dessert"
    },
    {
     "item": "pomegranate lemon soda",
     "price": "$7",
     "course": "drink",
     "note": "Pomegranate, house-made lemon syrup, soda"
    },
    {
     "item": "matcha lemonade",
     "price": "$8",
     "course": "drink",
     "note": "Matcha tea, lemon juice, soda, orange flower"
    },
    {
     "item": "lebanese iced tea",
     "price": "$8",
     "course": "drink",
     "note": "Date, rose, iced tea, lemon, soda"
    },
    {
     "item": "mediterranean mint tea (hot or iced) (serves 2)",
     "price": "$12",
     "course": "drink",
     "note": "Green tea, peppermint, lemon"
    },
    {
     "item": "hibiscus mango tea (hot or iced) (serves 2)",
     "price": "$12",
     "course": "drink",
     "note": "Hibiscus flower, mango, sugar, fresh orange"
    }
   ],
   "avoid_note": "Skip the lamb kofta kebab, sujuk pide, arayes, lamb shank, hanger steak, chicken leg & thigh, fried chicken hummus, lamb ragu hummus, chicken schnitzel sandwich, lamb burger and the gulf shrimp kebab.",
   "kosher_style_fit": "Strong fit: the whole hummus and vegetable/salad lineup is vegetarian, and the Faroe Islands (Bakkafrost) salmon covers the finned-fish eater.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Middle Eastern",
    "Vegetarian",
    "Seafood"
   ],
   "reserveUrl": "https://www.opentable.com/r/shaya-new-orleans",
   "website": "https://www.shayarestaurant.com/",
   "reserve_priority": true,
   "photoUrl": null,
   "menu_source": "https://www.shayarestaurant.com/menu",
   "menu_confidence": "verified"
  },
  {
   "id": "saba",
   "name": "Saba",
   "district": "gd",
   "area_label": "Uptown / Magazine Street",
   "cuisine": "Israeli / Modern Mediterranean",
   "vibe": "Alon Shaya's bright, plant-filled Uptown room built around wood-fired pita and shareable salatim. Warm, lively, and vegetable-forward, ideal for grazing across many small plates.",
   "price": "$$$",
   "rating": 4.6,
   "rating_note": "Google 4.6",
   "lat": 29.9179,
   "lng": -90.1123,
   "dinner_estimate": "$60-75 per person (a salatim or hummus + a large plate + a side, before drinks/tax/5% benefits charge)",
   "menu": [
    {
     "item": "lutenitsa",
     "price": "10",
     "course": "starter",
     "note": "Salatim - Bulgarian spread of roasted peppers, eggplant and tomato"
    },
    {
     "item": "labneh",
     "price": "10",
     "course": "starter",
     "note": "Salatim - preserved peppers and radish"
    },
    {
     "item": "babaganoush",
     "price": "11",
     "course": "starter",
     "note": "Salatim - eggplant, sour cream and charred scallions"
    },
    {
     "item": "confit tomatoes",
     "price": "10",
     "course": "starter",
     "note": "Salatim - serrano and cumin"
    },
    {
     "item": "ikra",
     "price": "15",
     "course": "starter",
     "note": "Salatim - smoked trout roe and baby herbs (finned-fish roe)"
    },
    {
     "item": "pickles",
     "price": "10",
     "course": "starter",
     "note": "Salatim - turmeric cauliflower, cabbage, snap peas and Israeli cucumbers"
    },
    {
     "item": "crudite",
     "price": "11",
     "course": "starter",
     "note": "Salatim - local and seasonal selection of vegetables"
    },
    {
     "item": "classic tahini",
     "price": "15",
     "course": "starter",
     "note": "Hummus - aleppo pepper, parsley and olive oil"
    },
    {
     "item": "Brussels sprouts",
     "price": "19",
     "course": "starter",
     "note": "Hummus - shabazi onions, black garlic and pickled jalapenos"
    },
    {
     "item": "green salad",
     "price": "17",
     "course": "starter",
     "note": "Small plate - fresh local lettuce, feta, avocado and sunflower seed duqqa"
    },
    {
     "item": "watermelon salad",
     "price": "18",
     "course": "starter",
     "note": "Small plate - feta, harissa and toasted walnuts"
    },
    {
     "item": "Moroccan carrots",
     "price": "13",
     "course": "starter",
     "note": "Small plate - labneh, red chermoula and coriander"
    },
    {
     "item": "bright green falafel",
     "price": "16",
     "course": "main",
     "note": "Large plate - tahini and zhoug"
    },
    {
     "item": "grilled salmon",
     "price": "40",
     "course": "main",
     "note": "Large plate - tzatziki, confit tomatoes, dill and pink peppercorn"
    },
    {
     "item": "Israeli couscous",
     "price": "12",
     "course": "side",
     "note": "summer vegetables"
    },
    {
     "item": "smashed golden potatoes",
     "price": "11",
     "course": "side",
     "note": "extra virgin olive oil and sea salt"
    },
    {
     "item": "jeweled rice",
     "price": "11",
     "course": "side",
     "note": "pomegranate, pistachio and herbs"
    },
    {
     "item": "seasoned fries",
     "price": "8",
     "course": "side",
     "note": "harissa mayonnaise"
    },
    {
     "item": "English peas",
     "price": "11",
     "course": "side",
     "note": "feta and mint"
    },
    {
     "item": "seasonal ice cream or sorbet",
     "price": "11",
     "course": "dessert",
     "note": "from Sweet Handkraft"
    },
    {
     "item": "malabi",
     "price": "12",
     "course": "dessert",
     "note": "orchid root custard, rose, ginger and Louisiana strawberries"
    },
    {
     "item": "hazelnut chocolate pudding",
     "price": "13",
     "course": "dessert",
     "note": "Piety & Desire chocolate, urfa shortbread and toasted meringue"
    },
    {
     "item": "cookie tin",
     "price": "16",
     "course": "dessert",
     "note": "chef's selection of five seasonal cookies"
    },
    {
     "item": "coffee (serves 2)",
     "price": "8",
     "course": "drink",
     "note": "Coffee & Tea"
    },
    {
     "item": "cold brew",
     "price": "6",
     "course": "drink"
    },
    {
     "item": "iced halva latte",
     "price": "8",
     "course": "drink",
     "note": "house signature"
    },
    {
     "item": "Moroccan mint tea",
     "price": "10",
     "course": "drink"
    },
    {
     "item": "seasonal herbal tea",
     "price": "10",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the signature blue crab hummus (28), roasted Gulf oysters (30), lamb kofta (26), harissa roasted chicken (38), chicken schnitzel and the spicy lamb ragu hummus - Saba's most-ordered plates are lamb, chicken and shellfish.",
   "kosher_style_fit": "Excellent fit: a huge vegetarian spread of salatim, hummus, salads and sides, plus grilled salmon and smoked-trout-roe for the fish eater.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Middle Eastern",
    "Vegetarian",
    "Seafood",
    "Fine dining"
   ],
   "reserveUrl": "https://eatwithsaba.com/reservations",
   "website": "https://eatwithsaba.com/",
   "reserve_priority": true,
   "photoUrl": null,
   "menu_source": "https://eatwithsaba.com/menus",
   "menu_confidence": "verified"
  },
  {
   "id": "bearcat-cafe",
   "name": "Bearcat Cafe",
   "district": "gd",
   "area_label": "Garden District/Uptown",
   "cuisine": "Creative brunch / Californian-Southern cafe",
   "vibe": "Bright, buzzy Uptown counter-service cafe known for inventive, health-leaning brunch. Order at the counter and expect a weekend wait.",
   "price": "$$",
   "rating": 4.6,
   "rating_note": "4.6 on Google (~3,800 reviews); ~4.5 on Yelp (1,500 reviews at the 2521 Jena St location).",
   "lat": 29.9356,
   "lng": -90.104,
   "dinner_estimate": "$25-40 per person (one Good Cat plate or sandwich plus a coffee; two courses lands nearer $45)",
   "menu": [
    {
     "item": "Biscuits",
     "price": "$6.00",
     "course": "starter",
     "note": "Breakfast Start - 2 biscuits | pepper jelly | cultured butter"
    },
    {
     "item": "Breakfast Potatoes (G.F)(V.A.)",
     "price": "$11.00",
     "course": "starter",
     "note": "Breakfast Start - crisp potatoes | G.F. mornay | egg"
    },
    {
     "item": "Ricotta + Lavash (V.A)",
     "price": "$8.00",
     "course": "starter",
     "note": "Breakfast Start - house made ricotta | honey"
    },
    {
     "item": "House Made Yogurt or Chia Seed Pudding",
     "price": "$12.00",
     "course": "starter",
     "note": "Breakfast Start - house granola | seasonal fruit | coconut nectar"
    },
    {
     "item": "Smoked Salmon Toast",
     "price": "$16.00",
     "course": "starter",
     "note": "Breakfast Start - egg in a hole | avocado | everything spice | creme fraiche"
    },
    {
     "item": "Berries and Cream Pancakes",
     "price": "$18.00",
     "course": "main",
     "note": "Short Stack - blueberry pancakes | vanilla whip | strawberry & blueberry compote syrup"
    },
    {
     "item": "Vegan Bearcat (V/GF)",
     "price": "$16.00",
     "course": "main",
     "note": "Good Cat - tofu scramble | crispy potatoes | black bean (vegan) sausage"
    },
    {
     "item": "Mushroom Soft Scramble (G.F)",
     "price": "$20.00",
     "course": "main",
     "note": "Good Cat - mushroom medley | boursin"
    },
    {
     "item": "Vegan Ranchero",
     "price": "$14.00",
     "course": "main",
     "note": "Good Cat - black beans | house salsa | ranchero sauce | avocado | cashew crema | corn tortilla"
    },
    {
     "item": "Vegan Quesadilla",
     "price": "$14.00",
     "course": "main",
     "note": "Good Cat - tofu scramble | mushrooms | caramelized onion | cashew queso | avocado"
    },
    {
     "item": "Bearcat Breakfast",
     "price": "$16.00",
     "course": "main",
     "note": "Bad Cat - 2 eggs | crisp potatoes; ask without the bacon or bison sausage"
    },
    {
     "item": "Breakfast Club",
     "price": "$15.00",
     "course": "main",
     "note": "Bad Cat - sourdough | roasted tomato | 2 eggs | avocado | potatoes; ask without the bacon"
    },
    {
     "item": "Biscuit Sandwich",
     "price": "$7.00",
     "course": "main",
     "note": "Biscuits - egg | cheese; ask without the bison sausage or bacon"
    },
    {
     "item": "Vegan Biscuit Sandwich",
     "price": "$10.00",
     "course": "main",
     "note": "Biscuits - Just Egg | vegan cheese | vegan sausage | caramelized onions"
    },
    {
     "item": "Mushroom Toast",
     "price": "$16.00",
     "course": "main",
     "note": "Biscuits section - whipped tofu | mushroom medley | roasted tomatoes | artichokes | sunflower seeds | caramelized onion | arugula | sourdough"
    },
    {
     "item": "Grits (G.F)",
     "price": "$7.00",
     "course": "side",
     "note": "Breakfast Sides"
    },
    {
     "item": "Crisp Potatoes (V/G.F)",
     "price": "$7.00",
     "course": "side",
     "note": "Breakfast Sides"
    },
    {
     "item": "Egg In a Hole",
     "price": "$5.00",
     "course": "side",
     "note": "Breakfast Sides"
    },
    {
     "item": "Cauliflower Grits",
     "price": "$7.00",
     "course": "side",
     "note": "Breakfast Sides"
    },
    {
     "item": "Black Beans",
     "price": "$7.00",
     "course": "side",
     "note": "Breakfast Sides"
    },
    {
     "item": "Fruit (w/Cream)(G.F)",
     "price": "$7.00",
     "course": "side",
     "note": "Breakfast Sides"
    },
    {
     "item": "Buffalo Cauliflower (V/G.F)",
     "price": "$12.00",
     "course": "starter",
     "note": "Lunch Starters - vegan buffalo sauce | vegan ranch"
    },
    {
     "item": "Vegan Queso (G.F)",
     "price": "$10.00",
     "course": "starter",
     "note": "Lunch Starters - cashew | pico de gallo | corn chips"
    },
    {
     "item": "Broccolini (V/G.F)",
     "price": "$13.00",
     "course": "starter",
     "note": "Vegetables - black sesame hummus | tofu | sambal sweet chili"
    },
    {
     "item": "Vegetable Hash (V/GF)",
     "price": "$14.00",
     "course": "starter",
     "note": "Vegetables - cauliflower grits | lemon vin pesto | cashew crema | salbitxada"
    },
    {
     "item": "Farro Bowl (V)",
     "price": "$15.00",
     "course": "main",
     "note": "Good Cat - almonds | oyster mushroom | nori | fennel | carrot | black beans (oyster mushroom, not shellfish)"
    },
    {
     "item": "Trumpet Scallops (V/G.F)",
     "price": "$18.00",
     "course": "main",
     "note": "Good Cat - trumpet mushrooms | hummus | cauliflower | asparagus (vegan 'scallops', no shellfish)"
    },
    {
     "item": "Xiong Mao Noodle (V/G.F)",
     "price": "$16.00",
     "course": "main",
     "note": "Good Cat - purple sweet potato noodle | tomato | mushrooms | artichoke | preserved lemon pesto"
    },
    {
     "item": "Vegan Burger",
     "price": "$16.00",
     "course": "main",
     "note": "Vegan Sandwiches - Beyond patty | lettuce | tomato | vegan smoked provolone | caramelized onions | seeded bun | potatoes"
    },
    {
     "item": "Buffalo Jerry's Tacos (V/G.F.)",
     "price": "$13.00",
     "course": "main",
     "note": "Vegan Sandwiches - buffalo cauliflower | pico | cashew crema | jalapenos | avocado"
    },
    {
     "item": "Shrimp Pasta (G.F.A./V.A.)",
     "price": "$26.00",
     "course": "main",
     "note": "Bad Cat - almonds | basil | tomatoes | parmesan; ask for the vegan/veg version without the shrimp (menu marks it V.A.)"
    },
    {
     "item": "Creamed Spinach",
     "price": "$8.00",
     "course": "side",
     "note": "Smalls - cream | onion | garlic"
    },
    {
     "item": "Corn Maque Choux (V/GF)",
     "price": "$8.00",
     "course": "side",
     "note": "Smalls"
    },
    {
     "item": "Asparagus (V/G.F)",
     "price": "$12.00",
     "course": "side",
     "note": "Smalls - garlic | salt"
    },
    {
     "item": "Golden Latte",
     "price": "$6.50",
     "course": "drink",
     "note": "turmeric | ginger | honey | espresso"
    },
    {
     "item": "Lavender Honey Latte",
     "price": "$6.50",
     "course": "drink"
    },
    {
     "item": "Rose Water Latte",
     "price": "$6.50",
     "course": "drink"
    },
    {
     "item": "Almond Joy Cortado",
     "price": "$5.50",
     "course": "drink",
     "note": "coconut milk | chocolate"
    },
    {
     "item": "Iced Strawberry Matcha",
     "price": "$7.00",
     "course": "drink"
    },
    {
     "item": "Iced Coconut Mango Matcha",
     "price": "$8.50",
     "course": "drink"
    }
   ],
   "avoid_note": "The famous ones are all off-limits: Cat Daddy Biscuit (chicken + crawfish cream, $26), Couyon Daddy ($30), Crab Scramble ($28), Shrimp and Grits ($26), Crab Cake ($24), Creole Crab Dip, Boudin Egg Rolls, Devils on Horseback, Hot Chicken Sandwich and the Cave Breakfast pork chop. Note the 'Bad Cat' side of the menu is essentially all pork, chicken or shellfish.",
   "kosher_style_fit": "Not kosher and not supervised. Vegetarian and vegan plates are clearly marked and abundant, plus a smoked-salmon dish, so a fish-and-veg diner eats very well here — but fish/dairy plates share a kitchen with pork and shellfish.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Cafe",
    "Brunch",
    "Vegetarian",
    "Casual"
   ],
   "website": "https://bearcatcafe.com",
   "reserveUrl": null,
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://bearcatcafe.com/new-orleans-uptown-new-orleans-bearcat-cafe-food-menu",
   "menu_confidence": "verified"
  },
  {
   "id": "coquette",
   "name": "Coquette",
   "district": "gd",
   "area_label": "Garden District/Uptown",
   "cuisine": "New American / Southern fine dining (CLOSED)",
   "vibe": "Formerly a beloved fine-dining New American room on the Garden District/Irish Channel edge. Permanently closed June 2026 after 18 years.",
   "price": "$$$",
   "rating": 4.4,
   "rating_note": "Historical only: ~4.4 on Google and 4+ on Yelp (926 reviews). Restaurant is now permanently closed.",
   "lat": 29.9309,
   "lng": -90.086,
   "dinner_estimate": "$60-80 per person (a table snack or First course at 12-18 plus the pompano at 38 or carrot bolognese at 32, before drinks)",
   "menu": [
    {
     "item": "COQUETTE BREAD",
     "price": "12",
     "course": "starter",
     "note": "For the Table - salted butter; ask without the smoked beef marmalade"
    },
    {
     "item": "WHIPPED FETA",
     "price": "12",
     "course": "starter",
     "note": "For the Table - sesame | smoked eggplant | focaccia"
    },
    {
     "item": "SMOKED FISH DIP",
     "price": "14",
     "course": "starter",
     "note": "For the Table - pepper relish | basil | focaccia"
    },
    {
     "item": "BABY ICEBERG LETTUCES",
     "price": "15",
     "course": "starter",
     "note": "First - radish | herbes de provence | dill buttermilk"
    },
    {
     "item": "GAILA MELON GAZPACHO",
     "price": "16",
     "course": "starter",
     "note": "First - chili | avocado | almond; ask without the Higgin's crab"
    },
    {
     "item": "TUNA CRUDO",
     "price": "18",
     "course": "starter",
     "note": "First - smoked peas | green garlic | nasturtium | lemon"
    },
    {
     "item": "MARINATED CUCUMBERS",
     "price": "15",
     "course": "starter",
     "note": "First - fresno chili | spring onion | sunflower seed | yogurt"
    },
    {
     "item": "CARROT BOLOGNESE",
     "price": "32",
     "course": "main",
     "note": "Main - cavatelli | ricotta | basil | parmesan (vegetarian bolognese)"
    },
    {
     "item": "GRILLED POMPANO",
     "price": "38",
     "course": "main",
     "note": "Main - tomato | garlic | lemon (whole finned Gulf fish)"
    },
    {
     "item": "STRAWBERRY & FENNEL SODA",
     "price": "9",
     "course": "drink",
     "note": "No Proof - house non-alcoholic soda"
    },
    {
     "item": "NA MARGARITA",
     "price": "15",
     "course": "drink",
     "note": "No Proof - na tequila | agave | lime | orange shrub"
    },
    {
     "item": "NA BEE'S KNEES",
     "price": "15",
     "course": "drink",
     "note": "No Proof - na gin | blackberry | ginger | honey"
    },
    {
     "item": "PHONY NEGRONI",
     "price": "12",
     "course": "drink",
     "note": "No Proof"
    }
   ],
   "avoid_note": "Skip Higgin's Crab Dip (16), the melon gazpacho as served (built on Higgin's crab), Beef Tartare 'Muffuletta' (20), HTR Chicken Schnitzel (38), Smoked Beef Short Rib (45) and the Gulf Seafood Stew (41) - the shellfish content isn't separable.",
   "kosher_style_fit": "N/A — permanently closed.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Fine dining",
    "Southern"
   ],
   "website": "https://www.coquettenola.com",
   "reserveUrl": null,
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://media-cdn.getbento.com/accounts/e22adcd6a4f49535829068929214f8e0/media/V40G7A7rQISI7cERhEgh_6.25.26%20Thursday.pdf",
   "menu_confidence": "verified"
  },
  {
   "id": "mais-arepas",
   "name": "Maïs Arepas",
   "district": "gd",
   "area_label": "Garden District/Uptown",
   "cuisine": "Colombian / Latin American",
   "vibe": "Warm, colorful Colombian spot on the Central City edge of the Garden District — lively and casual, celebrated for its arepas and cocktails.",
   "price": "$$",
   "rating": 4.6,
   "rating_note": "4.6 on Google (~1,400 reviews); 4.5 on Yelp (~770 reviews); 4.7 on Tripadvisor.",
   "lat": 29.9377,
   "lng": -90.0793,
   "dinner_estimate": "$30-45 per person (one entrada plus the Veggie arepa; add ~$11 for dessert)",
   "menu": [
    {
     "item": "Ceviche De Pescado",
     "price": "$19.00",
     "course": "starter",
     "note": "Gulf fish, passion fruit leche de tigre, onions, cilantro, cherry tomatoes, avocado, choclo, plantain chips - eligible finned fish, raw"
    },
    {
     "item": "Maiz De La Rueda",
     "price": "$11.00",
     "course": "starter",
     "note": "Corn, cotija, butter, lime, salsa rosada - vegetarian"
    },
    {
     "item": "Pataconcitos",
     "price": "$12.00",
     "course": "starter",
     "note": "Smashed green plantains, local mushrooms, avocado, cilantro, scallions, lime - vegetarian"
    },
    {
     "item": "Ensalada",
     "price": "$13.00",
     "course": "starter",
     "note": "Local greens, cherry tomatoes, roasted corn, avocado, pickled red onions, cilantro lime vinaigrette - order plain, skip the chicken/steak/shrimp add-ons"
    },
    {
     "item": "Veggie",
     "price": "$16.00",
     "course": "main",
     "note": "Vegetarian arepa: grilled seasonal vegetables, mozzarella; comes with plantain chips and a housemade sauce"
    },
    {
     "item": "Tres Leches",
     "price": "$11.00",
     "course": "dessert",
     "note": "Only dessert listed on the current menu"
    }
   ],
   "avoid_note": "Almost everything else here is pork, wagyu skirt steak, chicken or shrimp - skip Bandeja Paisa, Costillas de Cerdo, Chuzos de Panza (pork belly), Empanadas Caleñas, the Sampler, Ajiaco (chicken), Ceviche de Camaron, Encocado de Camaron and every meat arepa (Cerda, Cubana, Mechada, Carnicera, Reina, Pollo Griliao, Choriarepa, Buenaventura, Marinera).",
   "kosher_style_fit": "Not kosher. The kitchen mixes meat and dairy and cooks pork and shellfish throughout. Vegetarian and fish options are limited but clearly identifiable — the veggie arepa, corn, plantains, salad, fish ceviche and tres leches are the safe picks.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Latin",
    "Casual"
   ],
   "website": "https://mas-arepas.placejoys.com",
   "reserveUrl": "https://www.opentable.com/r/mais-arepas-new-orleans",
   "reserve_priority": true,
   "photoUrl": "https://cdn.placejoys.com/16048-oy-photo-1.jpg",
   "coverUrl": "https://cdn.placejoys.com/16048-oy-photo-1.jpg",
   "menu_source": "https://mas-arepas.placejoys.com/menu",
   "menu_confidence": "approximate"
  },
  {
   "id": "bacchanal-wine",
   "name": "Bacchanal Wine",
   "district": "by",
   "area_label": "Bywater",
   "cuisine": "Wine bar / global small plates",
   "vibe": "A wine shop turned backyard party: pick a bottle from the cooler, grab a table under twinkle lights and live jazz on the lush back patio. Loud, festive, and deeply local.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Google 4.5 / Yelp 4.5",
   "lat": 29.96124,
   "lng": -90.04408,
   "dinner_estimate": "Roughly $40-55 per person for two or three plates plus a glass of wine - Bacchanal does not publish prices",
   "menu": [
    {
     "item": "Whole Grilled Fish",
     "price": "Not listed",
     "course": "main",
     "note": "Seafood section. Whole finned fish, herbs and lemon (recent versions served with sultana-caper chutney, fennel, hazelnuts). Bacchanal does not publish prices - their site says the menu changes too often to post"
    },
    {
     "item": "Escabeche of Sardine",
     "price": "Not listed",
     "course": "starter",
     "note": "Seafood section. Sardine with salsa verde and grilled bread - eligible finned fish"
    },
    {
     "item": "Build Your Own Cheese Plate",
     "price": "Not listed",
     "course": "starter",
     "note": "From bacchanalwine.com: pick your cheese from the cooler, plated with olives, pickles, toasted bread, chutney, mostarda and seeds - order it without the cured meats"
    },
    {
     "item": "Bread and Butter",
     "price": "Not listed",
     "course": "starter",
     "note": "Munchies. House-made bread, butter, radish, sea salt"
    },
    {
     "item": "Patatas Bravas",
     "price": "Not listed",
     "course": "starter",
     "note": "Munchies. Fried potatoes, tomato, espelette, chimichurri aioli - vegetarian"
    },
    {
     "item": "Marinated Olives",
     "price": "Not listed",
     "course": "starter",
     "note": "Munchies. Castelvetrano, cerignola and coquillo olives in mustard seed vinaigrette"
    },
    {
     "item": "Pickled Locally Grown Veggies",
     "price": "Not listed",
     "course": "starter",
     "note": "Munchies. Daily variety of house-made pickles"
    },
    {
     "item": "Country Greek Salad",
     "price": "Not listed",
     "course": "starter",
     "note": "Vegetable section - vegetarian"
    },
    {
     "item": "Watermelon Gazpacho",
     "price": "Not listed",
     "course": "starter",
     "note": "Vegetable section, chilled summer soup - vegetarian"
    },
    {
     "item": "Vegan Greek Goddess Salad",
     "price": "Not listed",
     "course": "starter",
     "note": "Vegetable section - vegan"
    },
    {
     "item": "Crudites",
     "price": "Not listed",
     "course": "starter",
     "note": "Vegetable section - raw vegetables with dip"
    },
    {
     "item": "Chanterelle Mushroom",
     "price": "Not listed",
     "course": "starter",
     "note": "Vegetable section - confirm no cured pork in the preparation"
    },
    {
     "item": "Handcut Pasta",
     "price": "Not listed",
     "course": "main",
     "note": "Listed under the Vegetable section; confirm the sauce has no guanciale or sausage"
    },
    {
     "item": "Grilled Tagine-Spiced Eggplant",
     "price": "Not listed",
     "course": "main",
     "note": "Lunch special sandwich (11am-4pm): eggplant, tomato and tzatziki in pita - vegetarian"
    },
    {
     "item": "Buttermilk Panna Cotta",
     "price": "Not listed",
     "course": "dessert",
     "note": "Sweet section"
    },
    {
     "item": "Chocolate Bark",
     "price": "Not listed",
     "course": "dessert",
     "note": "Sweet section - extra virgin olive oil, marcona almonds, sel gris"
    },
    {
     "item": "Bread Pudding",
     "price": "Not listed",
     "course": "dessert",
     "note": "Sweet section"
    }
   ],
   "avoid_note": "Skip the Meat section entirely (Bacon Wrapped Dates, Confit Chicken Leg, Braised Pork Shoulder, Grilled Bavette Steak) and the shellfish plates (Gulf Shrimp, Smoked Gulf Shrimp Dip, Insalata di Mare). The unspecified Ceviche is often shrimp - ask before ordering.",
   "kosher_style_fit": "Excellent fit: a long list of vegetable small plates plus sardine escabeche and whole grilled fish cover the finned-fish + vegetarian diet with plenty of choice.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Wine bar",
    "Seafood",
    "Vegetarian",
    "Casual",
    "Late night"
   ],
   "reserve_priority": false,
   "reserveUrl": "https://www.opentable.com/r/bacchanal-wine-new-orleans",
   "website": "https://www.bacchanalwine.com",
   "photoUrl": null,
   "menu_source": "https://www.opentable.com/r/bacchanal-wine-new-orleans",
   "menu_confidence": "approximate"
  },
  {
   "id": "satsuma-cafe",
   "name": "Satsuma Café",
   "district": "by",
   "area_label": "Bywater",
   "cuisine": "Healthy café — breakfast, brunch & lunch with cold-pressed juices",
   "vibe": "Bright, laid-back Bywater corner café known for fresh, local, produce-forward cooking and house-pressed juices. Order at the counter; sunny, casual, and popular for a mellow morning.",
   "price": "$",
   "rating": 4.4,
   "rating_note": "4.4 on Google (~1,180 reviews); ~4.0 on Yelp — praised for fresh ingredients, juices, avocado toast and friendly service.",
   "lat": 29.9641,
   "lng": -90.0554,
   "dinner_estimate": "$12-18 per person - breakfast and lunch only, kitchen closes at 3pm; prices shown are the delivery menu and run a little above in-store",
   "menu": [
    {
     "item": "Quinoa Salad",
     "price": "$13.20",
     "course": "starter",
     "note": "Quinoa, spinach, olives, chickpeas, cherry tomatoes, red onion, feta, lemon vinaigrette - vegetarian"
    },
    {
     "item": "The Kale Salad",
     "price": "$13.70",
     "course": "starter",
     "note": "Lacinato kale, spinach, hard boiled egg, cherry tomatoes, avocado, parmesan croutons, creamy garlic dressing - ask without the bacon"
    },
    {
     "item": "Avocado Toast",
     "price": "$12.05",
     "course": "main",
     "note": "One egg, avocado mash, arugula, cherry tomato, feta, lemon vinaigrette on toast"
    },
    {
     "item": "Green Sandwich",
     "price": "$12.05",
     "course": "main",
     "note": "One egg, baby arugula, tomato, avocado mash and swiss on croissant, toast or bagel"
    },
    {
     "item": "Breakfast Burrito",
     "price": "$16.35",
     "course": "main",
     "note": "Breakfast potatoes, roasted poblanos, creamy black beans, cheddar scrambled eggs, avocado mash, side of salsa - vegetarian as listed"
    },
    {
     "item": "Vegan Tofu Scramble",
     "price": "$14.30",
     "course": "main",
     "note": "Veggie co-op tofu, chipotle roasted sweet potatoes, poblanos, black beans, pickled red onions, spiced chickpeas, cilantro, sourdough toast"
    },
    {
     "item": "Bagel Plate",
     "price": "$11.00",
     "course": "main",
     "note": "Cucumbers, tomatoes, capers, red onion, sprouts and cream cheese - vegetarian"
    },
    {
     "item": "Bagel w/ Cream Cheese",
     "price": "$5.50",
     "course": "main",
     "note": "Toasted bagel with cream cheese"
    },
    {
     "item": "Grilled Cheese Sandwiches",
     "price": "$9.90",
     "course": "main",
     "note": "Cheddar or swiss on wheat or sourdough with chips or a side salad"
    },
    {
     "item": "Granola, Fruit, Yogurt",
     "price": "$9.90",
     "course": "main",
     "note": "Housemade granola, fresh fruit and organic yogurt topped with honey"
    },
    {
     "item": "Plain Pancake",
     "price": "$9.35",
     "course": "main",
     "note": "Pancake with maple syrup"
    },
    {
     "item": "Blueberry Pancake",
     "price": "$10.45",
     "course": "main",
     "note": "Blueberry pancake with maple syrup"
    },
    {
     "item": "Iced Latte",
     "price": "$5.80",
     "course": "drink",
     "note": "16 oz"
    },
    {
     "item": "Iced Chai",
     "price": "$5.50",
     "course": "drink",
     "note": "16 oz"
    }
   ],
   "avoid_note": "Everything else is pork or poultry: Bacon, Egg & Cheese, Special BLT (bacon), Cuban (house-roasted pork and ham), Turkey-Kale Spinach Wrap (turkey and bacon), Green Eggs & Ham (shaved ham), Turkey Sandwich.",
   "kosher_style_fit": "Not kosher and not certified; the kitchen handles bacon, ham and roasted pork and mixes meat with dairy. That said, there's a deep bench of vegetarian (dairy/egg) plates plus a salmon-lox bagel that fit a fish-and-veg diet cleanly.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Cafe",
    "Vegetarian",
    "Brunch",
    "Casual"
   ],
   "reserveUrl": null,
   "website": "https://satsumacafe.com",
   "photoUrl": null,
   "menu_source": "https://postmates.com/store/satsuma-cafe/RxIeibJeSgaTQyjPZnqZYA",
   "menu_confidence": "approximate"
  },
  {
   "id": "pizza-delicious",
   "name": "Pizza Delicious",
   "district": "by",
   "area_label": "Bywater",
   "cuisine": "NY-style pizza, housemade pasta & salads",
   "vibe": "Beloved Bywater counter-serve pizzeria turning out thin NY-style pies, fresh pasta and craft beer. Order at the window, grab a picnic table on the covered patio — casual, friendly and family-good.",
   "price": "$",
   "rating": 4.5,
   "rating_note": "4.5 on Google/Yelp (800+ Yelp reviews) — locals rave about the thin crust, fresh ingredients and garlic knots.",
   "lat": 29.9626,
   "lng": -90.0516,
   "dinner_estimate": "$20-30 per person (a few slices or a shared pie plus a salad)",
   "menu": [
    {
     "item": "Cheese",
     "price": "$21",
     "course": "main",
     "note": "18\" NY-style pie; slice $3.25"
    },
    {
     "item": "Margherita",
     "price": "$24",
     "course": "main",
     "note": "fresh mozzarella, marinara, olive oil, parmigiano, fresh basil; pie only, no slice"
    },
    {
     "item": "Grandma Pie",
     "price": "$25",
     "course": "main",
     "note": "square pan pizza with sliced mozzerella, tomato sauce, garlic, Sicilian oregano, pecorino romano; slice $4.25. Do not add pepperoni."
    },
    {
     "item": "Roasted Cauliflower & Balsamic Red Onion",
     "price": "$27",
     "course": "main",
     "note": "marinara, shredded mozzarella, roasted cauliflower, balsamic red onions; slice $4.25"
    },
    {
     "item": "Vegan Roasted Cauliflower",
     "price": "$19",
     "course": "main",
     "note": "marinara, roasted cauliflower, balsamic red onion (no cheese); slice $2.9. Vegan; add Violife cheese +4"
    },
    {
     "item": "Vegan Supreme Pie",
     "price": "$27",
     "course": "main",
     "note": "Before the Butcher plant-based pepperoni & sausage, mushroom, roasted red pepper, red onion; pie only. All plant-based, no real pork."
    },
    {
     "item": "Sweet Corn & Ricotta Agnolotti",
     "price": "18",
     "course": "main",
     "note": "brown butter, sweet corn, cherry tomato, basil; do not add the crispy prosciutto"
    },
    {
     "item": "Orecchiette w/ Basil & Arugula Pesto",
     "price": "14",
     "course": "main",
     "note": "haricot vert, oil-cured grape tomatoes, toasted almond, tomato mint vinaigrette; vegan, contains nuts"
    },
    {
     "item": "Spaghetti Carbonara",
     "price": "16.5",
     "course": "main",
     "note": "farm egg, house-cured pancetta, parmigiano, pecorino - ask without the pancetta"
    },
    {
     "item": "Kid's Pasta",
     "price": "7",
     "course": "main",
     "note": "house made fettuccine with marinara or butter"
    },
    {
     "item": "Caesar Salad",
     "price": "11.5",
     "course": "starter",
     "note": "romaine, red onion, housemade dressing, parmigiano, croutons; do not add grilled chicken or prosciutto"
    },
    {
     "item": "House Salad",
     "price": "10",
     "course": "starter",
     "note": "mixed greens, cherry tomato, roasted pepper, red onion, kalamata olive, shaved grana padano cheese, balsamic vinaigrette"
    },
    {
     "item": "Greek Salad",
     "price": "13",
     "course": "starter",
     "note": "tomatoes, cucumber, red onion, oil cured olives, marinated feta, red wine vinaigrette, pickled shishito pepper"
    },
    {
     "item": "Garlic Knots",
     "price": "5",
     "course": "side",
     "note": "listed under Sides & Salads"
    },
    {
     "item": "Side of Marinara (3oz)",
     "price": "1.50",
     "course": "side"
    },
    {
     "item": "Side of Ranch (3oz)",
     "price": "2",
     "course": "side"
    },
    {
     "item": "Sea Salted Chocolate Chip Cookie",
     "price": "3.25",
     "course": "dessert",
     "note": "PD Star; rotating special also available"
    },
    {
     "item": "Fountain Soda",
     "price": "2.75",
     "course": "drink",
     "note": "free refills"
    },
    {
     "item": "Iced Tea (unsweet)",
     "price": "2.75",
     "course": "drink",
     "note": "free refills"
    },
    {
     "item": "San Pellegrino (12 oz cans)",
     "price": "2.5",
     "course": "drink",
     "note": "Blood Orange or Limonata"
    },
    {
     "item": "Organic Apple Juice (6 oz juice box)",
     "price": "2",
     "course": "drink"
    },
    {
     "item": "Bottled Water",
     "price": "2",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the Pepperoni pie, Pizza D Supreme, Meat Combo, Greg & Mike's Homemade Meatballs pie, the Crispy Paneed Pork w/ Linguine, and the pork-topping add-ons (pancetta, prosciutto, hot coppa, Italian sausage).",
   "kosher_style_fit": "Not kosher; pork toppings (pepperoni, pancetta, sausage) and meat are prepared in the same kitchen. Strong vegetarian pizza and pasta selection makes it easy for a fish-and-veg diner, though there are no actual fish dishes here.",
   "tags": [
    "veg"
   ],
   "filters": [
    "Pizza",
    "Italian",
    "Vegetarian",
    "Casual"
   ],
   "reserveUrl": null,
   "website": "https://pizzadelicious.com",
   "photoUrl": null,
   "menu_source": "https://pizzadelicious.com/menu/",
   "menu_confidence": "verified"
  },
  {
   "id": "morning-call",
   "name": "Morning Call Coffee Stand",
   "district": "cp",
   "area_label": "Mid-City/City Park",
   "cuisine": "Historic beignet & café au lait coffee stand",
   "vibe": "A New Orleans institution since 1870 (second-oldest after Café du Monde), serving hand-cut beignets and chicory café au lait. Old-school, cash-only, casual and open late — a classic sugar-and-coffee stop near City Park.",
   "price": "$",
   "rating": 4.4,
   "rating_note": "4.4 on Google (1,300+ reviews); ~4.0 on Yelp — beloved for beignets, café au lait and old-time New Orleans service.",
   "lat": 29.9825,
   "lng": -90.1103,
   "dinner_estimate": "$10-15 per person (beignets and a cafe au lait, or a breakfast sandwich)",
   "menu": [
    {
     "item": "Beignets",
     "price": "$3.50",
     "course": "dessert",
     "note": "3 to an order; hand-rolled, add your own powdered sugar"
    },
    {
     "item": "Sausage, Egg & Cheese on a English Muffin",
     "price": "$8.00",
     "course": "main",
     "note": "ask without the sausage"
    },
    {
     "item": "Ham, Egg & Cheese on a Croissant",
     "price": "$8.00",
     "course": "main",
     "note": "ask without the ham"
    },
    {
     "item": "Sausage, Egg & Cheese on a Biscuit",
     "price": "$8.00",
     "course": "main",
     "note": "ask without the sausage"
    },
    {
     "item": "Cafe Au Lait - Small",
     "price": "$3.50",
     "course": "drink",
     "note": "reg or decaf; the house French-drip cafe au lait"
    },
    {
     "item": "Cafe Au Lait - Large",
     "price": "$6.25",
     "course": "drink",
     "note": "reg or decaf"
    },
    {
     "item": "Cafe Au Lait - Frozen",
     "price": "$6.50",
     "course": "drink"
    },
    {
     "item": "Cafe Au Lait - Iced",
     "price": "$6.50",
     "course": "drink"
    },
    {
     "item": "Hot Chocolate",
     "price": "$3.50/Small",
     "course": "drink",
     "note": "$6.25/Large"
    },
    {
     "item": "Mango Freeze",
     "price": "$5.50",
     "course": "drink"
    },
    {
     "item": "Soft Drinks",
     "price": "$3.50",
     "course": "drink"
    },
    {
     "item": "Juice",
     "price": "$3.50",
     "course": "drink"
    },
    {
     "item": "Milk",
     "price": "$3.50",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the Crawfish Etouffee, Gumbo, Jambalaya, Muffulettas and Red Beans (pork/shellfish based). Order the breakfast sandwiches without the sausage or ham.",
   "kosher_style_fit": "Not kosher; beignets fry in shared oil and the kitchen handles pork and shellfish. Beignets and café au lait are themselves vegetarian (dairy/egg) and a safe, iconic treat for a fish-and-veg diner.",
   "tags": [
    "veg"
   ],
   "filters": [
    "Cafe",
    "Southern",
    "Casual",
    "Late night"
   ],
   "reserveUrl": null,
   "website": "https://morningcallnola.com",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Morning_Call_NOLA_Interior_WPA.jpg/120px-Morning_Call_NOLA_Interior_WPA.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Morning_Call_NOLA_Interior_WPA.jpg/500px-Morning_Call_NOLA_Interior_WPA.jpg",
   "menu_source": "https://morningcallcoffeestandnola.com/new-orleans-morning-call-in-the-oaks-llc-food-menu",
   "menu_confidence": "verified"
  },
  {
   "id": "ralphs-on-the-park",
   "name": "Ralph's on the Park",
   "district": "cp",
   "area_label": "Mid-City/City Park",
   "cuisine": "Modern Louisiana / Creole",
   "vibe": "Elegant Brennan-family dining room with tall windows framing City Park's live oaks, white tablecloths and polished Creole service. A special-occasion Mid-City classic.",
   "price": "$$$",
   "rating": 4.4,
   "rating_note": "Google ~4.5; Yelp ~4.0 across 450+ reviews; long-standing NOLA.com Top 10 pick.",
   "lat": 29.9834,
   "lng": -90.0981,
   "dinner_estimate": "$60-80 per person (one appetizer, one entree, dessert, before drinks)",
   "menu": [
    {
     "item": "Blackened Gulf Tuna",
     "price": "32",
     "course": "main",
     "note": "corn and okra succotash, edamame, smoked Creole tomato and basil marble sauce"
    },
    {
     "item": "Pan-Roasted Redfish",
     "price": "33",
     "course": "main",
     "note": "charred eggplant puree, Summer squash, blistered tomatoes, lobster nage - ask without the lobster nage"
    },
    {
     "item": "Watermelon & Heirloom Cherry Tomato Salad",
     "price": "14",
     "course": "starter",
     "note": "Whipped feta, basil, mint, crispy quinoa, tarragon oil"
    },
    {
     "item": "City Park Salad",
     "price": "13",
     "course": "starter",
     "note": "Baby red oak, romaine, Louisiana blueberries, Stilton blue, applewood smoked bacon - ask without the bacon"
    },
    {
     "item": "Housemade Rosemary Focaccia",
     "price": "10",
     "course": "starter",
     "note": "Sun-dried tomato and olive tapenade"
    },
    {
     "item": "Sweet Corn & Black Truffle Cappuccino",
     "price": "12",
     "course": "starter",
     "note": "NOWFE Gold Medal award-winning sweet corn soup, black truffle foam"
    },
    {
     "item": "Golden Gazpacho & LA Crab",
     "price": "16",
     "course": "starter",
     "note": "Summer melon, basil-jalapeno gel, shaved radish - ask without the crab"
    },
    {
     "item": "Blue Crab & Summer Truffle Pasta",
     "price": "18",
     "course": "starter",
     "note": "Radiatori pasta, Summer truffle sauce, aged Parmesan, herbed breadcrumbs - ask without the blue crab; listed under appetizers"
    },
    {
     "item": "Caramelized Banana Creme Brulee",
     "price": "14",
     "course": "dessert",
     "note": "Silky custard with caramel crust, topped with slow-caramelized bananas, crisp tuile"
    },
    {
     "item": "Almond Ricotta Cake",
     "price": "14",
     "course": "dessert",
     "note": "almond-scented ricotta cake with a consomme of fresh Louisiana strawberries and Sumo citrus-aji amarillo gel"
    },
    {
     "item": "German Chocolate Bread Pudding",
     "price": "13",
     "course": "dessert",
     "note": "white chocolate foam, pecan caramel, toasted coconut"
    },
    {
     "item": "Ice Cream & Sorbets",
     "price": "10",
     "course": "dessert",
     "note": "Made by Ralph Brennan Bakery; ask about today's selections"
    },
    {
     "item": "Karma",
     "price": "12",
     "course": "drink",
     "note": "'un-sculpted' non-alcoholic: fresh cantaloupe puree, house ancho-serrano syrup, lemon"
    },
    {
     "item": "History of the Conquest",
     "price": "11",
     "course": "drink",
     "note": "'un-sculpted' non-alcoholic: blackberry shrub, lemon, soda water"
    },
    {
     "item": "The Sun",
     "price": "13",
     "course": "drink",
     "note": "'un-sculpted' non-alcoholic: Ritual Agave Alternative, peach puree, agave, lime, tajin rim"
    },
    {
     "item": "High Walk Blend",
     "price": "$5.50",
     "course": "drink",
     "note": "Congregation Coffee; walnut, pear, baker's chocolate - decaf available"
    },
    {
     "item": "Gallup Espresso",
     "price": "Single: $5.00 / Double: $7.00",
     "course": "drink",
     "note": "Congregation Coffee; red apple, s'mores, black cherry"
    },
    {
     "item": "Cappuccino",
     "price": "$7.00",
     "course": "drink"
    },
    {
     "item": "Latte",
     "price": "$7.00",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the Turtle Soup, Coffee-Rubbed Pork Belly, White Cornmeal Fried Oysters, Shrimp Skully, Steak Tartare, Foie Gras Toast, Pecan Crusted Soft-Shell Crab, Pan-Roasted Jerk Shrimp, Roasted Blue Crab Claws, Cast-Iron Seared Filet Mignon, Louisiana Shrimp & Unicorn Grits and Braised Lamb Shank. Also skip the Beet-Cured Swordfish and Swordfish Saltimbocca (swordfish is not a scaled fish), and the 'add seafood' oyster/shrimp/crabmeat toppers.",
   "kosher_style_fit": "Not kosher and shares a kitchen with shellfish and pork, but the blackened Gulf fish, trout and mahi (finned, scaled) plus salads and desserts can be tailored to a fish-and-vegetarian style with the noted omissions.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Southern",
    "Seafood",
    "Fine dining"
   ],
   "reserveUrl": "https://www.opentable.com/ralphs-on-the-park",
   "website": "https://www.ralphsonthepark.com",
   "reserve_priority": true,
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/New_Orleans_Museum_of_Art_%2855143750313%29.jpg/120px-New_Orleans_Museum_of_Art_%2855143750313%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/New_Orleans_Museum_of_Art_%2855143750313%29.jpg/500px-New_Orleans_Museum_of_Art_%2855143750313%29.jpg",
   "menu_source": "https://www.ralphsonthepark.com/food-drink",
   "menu_confidence": "verified"
  },
  {
   "id": "monas-cafe",
   "name": "Mona's Café",
   "district": "cp",
   "area_label": "Mid-City/City Park",
   "cuisine": "Lebanese / Middle Eastern",
   "vibe": "Bustling, no-frills Lebanese cafe and grocery in Mid-City, famous for its hummus and generous, affordable mezze. Casual and unpretentious.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Google ~4.5; Restaurant Guru 4.8 (2,000+ reviews); Tripadvisor 4.2.",
   "lat": 29.9583,
   "lng": -90.0928,
   "dinner_estimate": "$25-32 per person (a veggie platter at $17-19 plus a dip or salad; BYOB, no corkage)",
   "menu": [
    {
     "item": "Falafel (6)",
     "price": "$7.00",
     "course": "starter",
     "note": "Hot Appetizers - fried ground chick pea patties with spices, onions and parsley"
    },
    {
     "item": "Spinach Pie",
     "price": "$4.50",
     "course": "starter",
     "note": "Stuffed triangle pie with fresh spinach, onions, oregano and sumac spice"
    },
    {
     "item": "Zater Bread",
     "price": "$3.50",
     "course": "starter",
     "note": "Ground thyme, oregano, sesame seed and sumac with olive oil baked on a pita"
    },
    {
     "item": "Fried Cheese",
     "price": "$8.00",
     "course": "starter",
     "note": "Fried Halloumi cheese in olive oil, mint and garlic"
    },
    {
     "item": "Four Cheese Pizza",
     "price": "$4.50",
     "course": "starter",
     "note": "Kessarie, string, Feta and Arabic cheeses baked on a pita"
    },
    {
     "item": "Stuffed Grape Leaves (6 rolls)",
     "price": "$8.00",
     "course": "starter",
     "note": "Your choice of meat or veggies - ask for the veggie version"
    },
    {
     "item": "Basmati Rice with Saffron",
     "price": "$5.00",
     "course": "starter",
     "note": "Listed under Hot Appetizers"
    },
    {
     "item": "French Fries",
     "price": "$4.00",
     "course": "starter",
     "note": "Listed under Hot Appetizers"
    },
    {
     "item": "Hummus Dip with Peppers",
     "price": "$8.00",
     "course": "starter",
     "note": "Cold Appetizers"
    },
    {
     "item": "Baba Ganuj Dip",
     "price": "$8.00",
     "course": "starter",
     "note": "Cold Appetizers"
    },
    {
     "item": "Vegetable Eggplant Dip",
     "price": "$8.00",
     "course": "starter",
     "note": "Eggplant, sweet red pepper, garlic and spices"
    },
    {
     "item": "Muhammara",
     "price": "$9.00",
     "course": "starter",
     "note": "Cold Appetizers"
    },
    {
     "item": "Lebna",
     "price": "$8.00",
     "course": "starter",
     "note": "Thick yogurt with sumac and olive oil"
    },
    {
     "item": "Tasliya",
     "price": "$8.00",
     "course": "starter",
     "note": "Feta, tomatoes, pickles, olive and cucumbers"
    },
    {
     "item": "Mona's Special (enough for two)",
     "price": "$24.00",
     "course": "starter",
     "note": "Hummus, baba ganuj, grape leaves, tabouli, falafel, kibby and lebna - ask without the kibby and for veggie grape leaves"
    },
    {
     "item": "Red Lentil Soup",
     "price": "$5.50",
     "course": "starter",
     "note": "Soups & Salads"
    },
    {
     "item": "Greek Salad",
     "price": "$10.00",
     "course": "starter",
     "note": "Green salad with feta cheese and black olives"
    },
    {
     "item": "Arabic Salad",
     "price": "$10.00",
     "course": "starter",
     "note": "Fresh chopped tomatoes, lemons, cucumbers, green onions and parsley"
    },
    {
     "item": "Garden Salad",
     "price": "$8.50",
     "course": "starter",
     "note": "Romaine lettuce, tomatoes and cucumbers"
    },
    {
     "item": "Fatoush",
     "price": "$9.00",
     "course": "starter",
     "note": "Green salad with cucumbers, parsley and pita chips"
    },
    {
     "item": "Tabouli",
     "price": "$9.00",
     "course": "starter",
     "note": "Fresh chopped parsley, cracked wheat, tomatoes & lemons"
    },
    {
     "item": "Cucumber Yogurt Salad",
     "price": "$9.50",
     "course": "starter",
     "note": "Fresh yogurt, chopped cucumbers and crushed mint"
    },
    {
     "item": "Falafel Plate",
     "price": "$17.00",
     "course": "main",
     "note": "Veggie Platters - fried ground chick pea patties with spices, onions and parsley"
    },
    {
     "item": "Vegetarian Plate",
     "price": "$17.00",
     "course": "main",
     "note": "Hummus, baba ganuj, tabouli and falafel"
    },
    {
     "item": "Grape Leaves Plate",
     "price": "$17.50",
     "course": "main",
     "note": "Stuffed with carrots, parsley, dill, onions and rice"
    },
    {
     "item": "Sauteed Vegetables Plate",
     "price": "$19.00",
     "course": "main",
     "note": "Sauteed vegetables over basmati rice topped with feta"
    },
    {
     "item": "Kallaya",
     "price": "$17.00",
     "course": "main",
     "note": "Entrees - sauteed fresh tomatoes with garlic, mint and spices; order it plain, do not add the meat or chicken"
    },
    {
     "item": "Side of Veggies",
     "price": "$5.50",
     "course": "side",
     "note": "Listed under Extras"
    },
    {
     "item": "Baklava",
     "price": "$3.50",
     "course": "dessert",
     "note": "Layers of phyllo dough with walnuts and honey"
    },
    {
     "item": "Namoura",
     "price": "$3.50",
     "course": "dessert",
     "note": "Semolina, almond, rosewater and honey - shown out of stock on the ordering page"
    },
    {
     "item": "Pistachio Cheesecake",
     "price": "$12.00",
     "course": "dessert"
    },
    {
     "item": "Lotus Cheesecake",
     "price": "$12.00",
     "course": "dessert"
    }
   ],
   "avoid_note": "Skip the Catfish Plate and the Shrimp Plate, plus everything in the meat Entrees list - gyro, shawarma, kebabs, lamb chops, lamb shank, Fried Kibby, Hummus with Lamb, Meat Pie, Safeiha and Meat Grape Leaves Plate.",
   "kosher_style_fit": "Strong fit for a fish-and-vegetarian style: the menu is largely vegetarian mezze, salads and dips, uses no pork, and dairy/egg items are plentiful, though it is not certified kosher and grills meat on the same equipment.",
   "tags": [
    "veg"
   ],
   "filters": [
    "Middle Eastern",
    "Vegetarian",
    "Casual",
    "Cafe"
   ],
   "reserveUrl": null,
   "website": "https://monascafeanddeli.com",
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://www.toasttab.com/local/order/monas-cafe-banks-3901-banks-st",
   "menu_confidence": "verified"
  },
  {
   "id": "bennachin",
   "name": "Bennachin",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "West African",
   "vibe": "A tiny, homey BYOB spot on the quiet Marigny edge of the Quarter, serving Cameroonian and Gambian home cooking since 1992. Cash-friendly, unpretentious, and loaded with plant-forward and fish options.",
   "price": "$$",
   "rating": 4.4,
   "rating_note": "Google 4.4",
   "lat": 29.9635,
   "lng": -90.0606,
   "dinner_estimate": "$28-35 per person (a $17.95-18.95 entree plus an $8 appetizer or side)",
   "menu": [
    {
     "item": "Nyeo",
     "price": "$18.95",
     "course": "main",
     "note": "Nouka Malape seafood - steamed tilapia fillet in ginger and garlic sauce with fried ripe plantains, sauteed spinach and coconut rice"
    },
    {
     "item": "Chobi ni Malang(Fish Stew)",
     "price": "$18.95",
     "course": "main",
     "note": "Tilapia fillet, celery, onion in savory red sauce served with rice"
    },
    {
     "item": "Thiebujin",
     "price": "$18.95",
     "course": "main",
     "note": "African jambalaya cooked with tilapia fillet"
    },
    {
     "item": "Steamed Tilapia",
     "price": "$18.95",
     "course": "main",
     "note": "Tilapia served with vermeseh, zucchini, carrots and squash"
    },
    {
     "item": "Bikai ni Curry",
     "price": "$17.95",
     "course": "main",
     "note": "Ngi-Nouka vegetables - eggplant, mushrooms, bean sprouts in curry sauce with cous cous or rice"
    },
    {
     "item": "Jama Jama ni Makondo",
     "price": "$17.95",
     "course": "main",
     "note": "Sauteed spinach, fried ripe plantains and coconut rice"
    },
    {
     "item": "Kone ni Makondo",
     "price": "$17.95",
     "course": "main",
     "note": "Black-eyed peas in onion and tomato stew with coconut rice and fried ripe plantains"
    },
    {
     "item": "Nsouki Jakatu",
     "price": "$17.95",
     "course": "main",
     "note": "Stir fried eggplant and vegetables served with cous cous or rice"
    },
    {
     "item": "Baham",
     "price": "$17.95",
     "course": "main",
     "note": "Broccoli, cauliflower, carrots in light ginger sauce with cous cous or rice"
    },
    {
     "item": "Jambo",
     "price": "$17.95",
     "course": "main",
     "note": "Sauteed zucchini, squash in ginger sauce served with vermesh"
    },
    {
     "item": "MBURU AKARA",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - black-eyed pea fritters and tomato stew on french bread"
    },
    {
     "item": "YASA",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - cabbage, carrots in onion and garlic sauce served with rice or cous cous (meatless as listed at lunch)"
    },
    {
     "item": "JAMA JAMA NI MAKONDO",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - sauteed spinach, fried plantains and coconut rice"
    },
    {
     "item": "KONE NI MAKONDO",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - black-eyed peas in tomato and onion stew with fried plantains and coconut rice"
    },
    {
     "item": "BAHAM",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - sauteed vegetables in ginger, onion, garlic sauce with rice or cous cous"
    },
    {
     "item": "BENNACHIN",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - African jambalaya (jollof rice) with sauteed spinach; menu marks it ** so ask for it served without meat"
    },
    {
     "item": "DOMODA",
     "price": "$13.95",
     "course": "main",
     "note": "Daily lunch special - peanut stew served with rice; menu marks it ** so ask for it without the beef"
    },
    {
     "item": "Sorso Jambakero / Vegetables",
     "price": "$9.00",
     "course": "starter",
     "note": "Nsouki soups - vegetable soup"
    },
    {
     "item": "Cone / Kidney Bean",
     "price": "$9.00",
     "course": "starter",
     "note": "Nsouki soups"
    },
    {
     "item": "Sorso Nessing / Lentil",
     "price": "$9.00",
     "course": "starter",
     "note": "Nsouki soups"
    },
    {
     "item": "Doh Doh / Fried ripe plantains",
     "price": "$8.00",
     "course": "starter",
     "note": "Ndek Bijek appetizers"
    },
    {
     "item": "Akara / Black-eyed pea fritters",
     "price": "$8.00",
     "course": "starter",
     "note": "Ndek Bijek appetizers"
    },
    {
     "item": "Nyeaturing / Fish pie",
     "price": "$9.00",
     "course": "starter",
     "note": "Appetizer; kitchen uses tilapia - confirm it is finfish, not shellfish"
    },
    {
     "item": "Oleh-leh / Black-eyed peas, eggplant, and smoked fish",
     "price": "$9.00",
     "course": "starter",
     "note": "Appetizer with smoked finfish - confirm no shrimp is added"
    },
    {
     "item": "Jama-Jama / Sauteed spinach",
     "price": "$8.00",
     "course": "side",
     "note": "Domoro Ndigho side orders"
    },
    {
     "item": "Mandowa / Steamed broccoli",
     "price": "$8.00",
     "course": "side",
     "note": "Domoro Ndigho side orders"
    },
    {
     "item": "Fu-fu / Pounded Cassava",
     "price": "$8.00",
     "course": "side",
     "note": "Domoro Ndigho side orders"
    },
    {
     "item": "Monde Cone / Coconut rice",
     "price": "$8.00",
     "course": "side",
     "note": "Domoro Ndigho side orders"
    },
    {
     "item": "Makube(Banana Tropicana)",
     "price": "$8.00",
     "course": "dessert",
     "note": "Sliced bananas with yogurt sauce"
    },
    {
     "item": "Shakari",
     "price": "$8.00",
     "course": "dessert",
     "note": "Cous cous in yogurt sauce with pineapples, shredded coconut and raisins"
    },
    {
     "item": "Makondo Yogurt",
     "price": "$8.00",
     "course": "dessert",
     "note": "Fried plantains with yogurt sauce"
    },
    {
     "item": "Gingero/ Ginger",
     "price": "$3.50",
     "course": "drink",
     "note": "House ginger drink"
    },
    {
     "item": "Wonjo/ Red Zinger",
     "price": "$3.50",
     "course": "drink",
     "note": "Hibiscus (sorrel) drink"
    },
    {
     "item": "Barajambo/ African Herbal Tea",
     "price": "$3.50",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip every shrimp dish (Janga, Shipa-Shipa, Cope ni Cone, Sauci Majanga, Nsouki Alyse), all the chicken plates (Sisay Singho, Cope Mustard, Cope ni Makondo, Jamaican Chicken, Yasa with chicken), the beef and lamb section (Ndole, Sauci Marine, Soup-ah-Kanja, Kembel-Lappa, Apricot Lamb, Sorso Wolengho ni Mano) and the beef-sausage gumbo soup.",
   "kosher_style_fit": "Very good fit — a deep bench of vegetable and plantain mains plus four tilapia dishes, so both the finned-fish and vegetarian diner eat well; just avoid the shrimp, poultry and beef/lamb sections.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Vegetarian",
    "Casual"
   ],
   "reserveUrl": null,
   "website": "https://bennachinrestaurant.com",
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://bennachinrestaurant.com/menu",
   "menu_confidence": "verified"
  },
  {
   "id": "green-goddess",
   "name": "Green Goddess",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Eclectic global / vegetarian-forward",
   "vibe": "A tiny bohemian bistro tucked down pedestrian Exchange Alley with most seating in a charming courtyard. Globe-trotting, veg-heavy small plates that jump from Thai to Cajun to Mediterranean in a single sitting.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9557,
   "lng": -90.0684,
   "dinner_estimate": "$40/person",
   "menu": [
    {
     "item": "Mimosa Honey Biscuits",
     "price": "$6"
    },
    {
     "item": "Beet Hummus",
     "price": "$12"
    },
    {
     "item": "Patatas Bravas (with manchego)",
     "price": "$9"
    },
    {
     "item": "Pickle Plate",
     "price": "$7"
    },
    {
     "item": "Cheese Grits",
     "price": "$4"
    },
    {
     "item": "Pecan Orange Mushroom Pate",
     "price": "$12"
    },
    {
     "item": "Crimini 'Escargot'",
     "price": "$12"
    },
    {
     "item": "Vegan Queso Croquettas",
     "price": "$10"
    },
    {
     "item": "Green Goddess Wedge Salad (full)",
     "price": "$15",
     "note": "ask without bacon"
    },
    {
     "item": "Freekeh Salad",
     "price": "$15"
    },
    {
     "item": "Pressed Watermelon, Burrata & Kale Salad",
     "price": "$17"
    },
    {
     "item": "Citrus Salad",
     "price": "$7"
    },
    {
     "item": "Tofu Hash Especial (brunch)",
     "price": "$15"
    },
    {
     "item": "Mushroom Gravy and Biscuits (brunch)",
     "price": "$13"
    },
    {
     "item": "Rolled Uttapam (savory veg pancake)",
     "price": "$15"
    },
    {
     "item": "Mezze Plate",
     "price": "$19"
    },
    {
     "item": "Local Lemongrass Tofu Sandwich",
     "price": "$15"
    },
    {
     "item": "Falafel Sandwich",
     "price": "$14"
    },
    {
     "item": "Burrata Panini",
     "price": "$13"
    },
    {
     "item": "Thai Tofu",
     "price": "$18"
    },
    {
     "item": "Crispy Citrus Hongo (mushroom)",
     "price": "$18"
    },
    {
     "item": "Mango Kale Pasta",
     "price": "$16",
     "note": "add Romano for $3 if desired"
    }
   ],
   "avoid_note": "Skip the Local Sausage Plate, Boudin/Duck Sausage brunch plates, Drunken Duck Pasta, Italian Meatloaf, Eye of Round, Chaurice/Windmill sandwiches, and any shrimp add-on or Shrimp Mofongo.",
   "kosher_style_fit": "Excellent fit: a largely vegetarian/vegan kitchen where nearly the whole menu already works and the wedge just needs bacon left off; no finned fish but abundant veg options.",
   "tags": [
    "veg",
    "book"
   ],
   "filters": [
    "Vegetarian",
    "Middle Eastern",
    "Casual",
    "Brunch",
    "Wine bar"
   ],
   "reserve_priority": false,
   "website": null,
   "reserveUrl": null,
   "photoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Pirates_Alley%2C_New_Orleans_-2009.JPG/120px-Pirates_Alley%2C_New_Orleans_-2009.JPG",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Pirates_Alley%2C_New_Orleans_-2009.JPG/500px-Pirates_Alley%2C_New_Orleans_-2009.JPG",
   "menu_confidence": "approximate",
   "menu_source": null
  },
  {
   "id": "carmo",
   "name": "Carmo",
   "district": "wh",
   "area_label": "Warehouse District",
   "cuisine": "Tropical / Latin-Caribbean",
   "vibe": "A bright, plant-filled cafe-bar channeling the tropics of the Caribbean, South America, West Africa and Southeast Asia. Explicitly built for vegans, vegetarians and pescatarians, with a raw-fish bar of ceviche, tiradito and sashimi.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9437,
   "lng": -90.0672,
   "dinner_estimate": "$45/person",
   "menu": [
    {
     "item": "Plain Banquette Bread (large, shareable)",
     "price": "$13"
    },
    {
     "item": "Creole Banquette Bread (large)",
     "price": "$17"
    },
    {
     "item": "Quinoa Sweet Potato Fritters",
     "price": "$11"
    },
    {
     "item": "Smoked Fish Fritters",
     "price": "$12"
    },
    {
     "item": "Pão de Queijo",
     "price": "$5"
    },
    {
     "item": "Ceviche Vegan",
     "price": "$15"
    },
    {
     "item": "Creole Avocado",
     "price": "$12"
    },
    {
     "item": "Tiradito Avocado",
     "price": "$12"
    },
    {
     "item": "Ceviche Fish",
     "price": "$18"
    },
    {
     "item": "Creole Fish",
     "price": "$19"
    },
    {
     "item": "Tiradito Fish",
     "price": "$19"
    },
    {
     "item": "Shima Sashimi",
     "price": "$19"
    },
    {
     "item": "Poke (tuna)",
     "price": "$19"
    },
    {
     "item": "Carmo Salad",
     "price": "$14"
    },
    {
     "item": "Broken Noodle Salad",
     "price": "$9"
    },
    {
     "item": "Burmese Tea Leaf Salad",
     "price": "$18"
    },
    {
     "item": "Esmeralda Salad",
     "price": "$9"
    },
    {
     "item": "Gulf Tuna Salad",
     "price": "$18"
    },
    {
     "item": "Farmer's Market Salad",
     "price": "$9"
    },
    {
     "item": "Trifongo (side)",
     "price": "$8"
    },
    {
     "item": "Rice and Beans (side)",
     "price": "$8"
    },
    {
     "item": "Tostone",
     "price": "$5"
    },
    {
     "item": "Rico",
     "price": "$18"
    },
    {
     "item": "Daily Curry",
     "price": "$17"
    },
    {
     "item": "Daily Rice and Beans",
     "price": "$16"
    },
    {
     "item": "Peruano",
     "price": "$18"
    },
    {
     "item": "Trifongo Vegan Ceviche",
     "price": "$21"
    }
   ],
   "avoid_note": "Skip the Sausage side, the Meat Special, Trifongo Pork, and Trifongo Seafood (contains shellfish); confirm the daily fish is a scaled finned fish (typically tuna/gulf fish) and not shellfish.",
   "kosher_style_fit": "Ideal fit: the entire kitchen is vegetarian plus finned-fish, so the raw fish bar, veg plates and salads are all in-bounds with essentially nothing off-limits beyond a couple of pork/shellfish add-ons.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Latin",
    "Seafood",
    "Vegetarian",
    "Casual"
   ],
   "reserve_priority": false,
   "website": "https://www.carmonola.com",
   "reserveUrl": null,
   "photoUrl": null,
   "menu_confidence": "approximate",
   "menu_source": null
  },
  {
   "id": "1000-figs",
   "name": "1000 Figs",
   "district": "cp",
   "area_label": "Bayou St. John / Mid-City",
   "cuisine": "Eastern Mediterranean",
   "vibe": "A tiny, casual counter-service spot near Bayou St. John serving fresh falafel, dips and mezze. Bright, unfussy and vegetable-forward, with a short wine list and patio seats.",
   "price": "$$",
   "rating": 4.7,
   "rating_note": "Google 4.7",
   "lat": 29.977,
   "lng": -90.0782,
   "dinner_estimate": "$25-35 per person (e.g. falafel platter plus a dip and a salad); order at the counter, no table service",
   "menu": [
    {
     "item": "Hummus",
     "price": "$8.75",
     "course": "starter",
     "note": "Chickpea spread with lemon, tahini, and garlic, served with our fresh bread"
    },
    {
     "item": "Baba Ghanouj",
     "price": "$10.50",
     "course": "starter",
     "note": "Roasted eggplant dip with tahini and urfa pepper, served with our fresh bread"
    },
    {
     "item": "Tzatziki",
     "price": "$10.50",
     "course": "starter",
     "note": "Yogurt with cucumber and fresh herbs, served with our fresh bread"
    },
    {
     "item": "Whipped Feta",
     "price": "$11.50",
     "course": "starter",
     "note": "Whipped feta with charred scallions and black lime"
    },
    {
     "item": "ALL THE DIPS",
     "price": "$36.50",
     "course": "starter",
     "note": "Hummus, baba ghanouj, tzatziki and whipped feta, served with our fresh bread and crudites - fully vegetarian, good for a table"
    },
    {
     "item": "Crudites",
     "price": "$4.25",
     "course": "side",
     "note": "Fresh veggies for dipping"
    },
    {
     "item": "Panbread",
     "price": "$2.00",
     "course": "side",
     "note": "House fresh-baked bread"
    },
    {
     "item": "Pita Chips",
     "price": "$3.75",
     "course": "side",
     "note": "Pita chips tossed in za'atar"
    },
    {
     "item": "Falafel and Sauces",
     "price": "$6.10",
     "course": "starter",
     "note": "Four falafel with tahini, zhoug and toum (Meze)"
    },
    {
     "item": "Brussels Sprouts",
     "price": "$9.35",
     "course": "starter",
     "note": "Flash-fried and tossed in lemon vinaigrette (Meze) - no pork in this preparation"
    },
    {
     "item": "Olives",
     "price": "$9.10",
     "course": "starter",
     "note": "Mixed olives, marinated with citrus zest and coriander (Meze)"
    },
    {
     "item": "Pickled Veggies",
     "price": "$6.60",
     "course": "starter",
     "note": "House-pickled cabbage, carrot, and beet (Meze)"
    },
    {
     "item": "Harissa Soup",
     "price": "$9.00",
     "course": "starter",
     "note": "Coconut, spices and crostini (Meze) - vegetable based"
    },
    {
     "item": "Seasonal Vegetable",
     "price": "$10.00",
     "course": "starter",
     "note": "Roasted carrots with honey and preserved lemon glaze, herbed labneh, sunflower seeds (Meze)"
    },
    {
     "item": "French Fries",
     "price": "$7.10",
     "course": "starter",
     "note": "House-made french fries served with garlicky toum (listed under Meze)"
    },
    {
     "item": "Kale and Cabbage Salad",
     "price": "$7.60",
     "course": "starter",
     "note": "Kale, cabbage and celery with fig & ginger vinaigrette, pickled blueberries and toasted seeds"
    },
    {
     "item": "Market Salad",
     "price": "$14.00",
     "course": "starter",
     "note": "Louisiana-grown leafy greens, three radishes, pickled turnips, feta, dukka, fig vinaigrette (Specials)"
    },
    {
     "item": "Falafel Platter",
     "price": "$17.10",
     "course": "main",
     "note": "Four falafel, hummus, kale and cabbage salad, toum, tahini, zhoug, and our fresh bread"
    },
    {
     "item": "Vegan Falafel Feast",
     "price": "$58.50",
     "course": "main",
     "note": "Eight falafel, pint of hummus, baba ghanouj, pickled veggies, kale and cabbage salad, seasonal vegetable, tahini, zhoug, toum, fresh bread - serves 2-3"
    },
    {
     "item": "Falafel Feast",
     "price": "$60.00",
     "course": "main",
     "note": "Eight falafel, hummus, baba ghanouj, tzatziki, pickled veggies, kale and cabbage salad, seasonal vegetable, tahini, zhoug, toum, fresh bread - serves 2-3"
    },
    {
     "item": "Falafel Sandwich",
     "price": "$10.60",
     "course": "main",
     "note": "Four falafel, cucumber, pickled vegetables, tahini, zhoug and toum, in a pita"
    },
    {
     "item": "Pistachio Cake",
     "price": "$6.00",
     "course": "dessert",
     "note": "Pistachio cake with rose water, sumac, and lemon glaze (GF)"
    },
    {
     "item": "Tahini Chocolate Cookie",
     "price": "$3.00",
     "course": "dessert",
     "note": "Salted tahini chocolate chip cookie"
    },
    {
     "item": "Hibiscus Tea",
     "price": "$3.00",
     "course": "drink",
     "note": "House hibiscus iced tea"
    },
    {
     "item": "Lemonade",
     "price": "$4.60",
     "course": "drink",
     "note": "House lemonade"
    },
    {
     "item": "Half n' Half",
     "price": "$3.85",
     "course": "drink",
     "note": "Half lemonade / half hibiscus tea"
    },
    {
     "item": "Bottled Sparkling Water",
     "price": "$3.01",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the three chicken items - Chicken Platter ($18.60), Chicken Sandwich ($13.60) and Side of Chicken ($9.00). Everything else on the menu is vegetarian; there is no fish or shellfish on the menu at all, so this is a vegetarian-only stop rather than a fish stop.",
   "kosher_style_fit": "Almost entirely vegetarian and free of shellfish and pork; the falafel, dips and vegetable mezze are a near-perfect match for this diet.",
   "tags": [
    "veg"
   ],
   "filters": [
    "Middle Eastern",
    "Vegetarian",
    "Casual"
   ],
   "reserveUrl": null,
   "website": "https://www.1000figs.com",
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://sagemenu.com/new-orleans/1000-figs-new-orleans/",
   "menu_confidence": "approximate"
  },
  {
   "id": "cafe-degas",
   "name": "Cafe Degas",
   "district": "cp",
   "area_label": "Esplanade Ave / Mid-City",
   "cuisine": "French bistro",
   "vibe": "A romantic, longtime French bistro on leafy Esplanade Avenue, with a covered garden deck built around a live oak growing through the floor. Cozy, candlelit and quintessentially Parisian.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5",
   "lat": 29.9786,
   "lng": -90.0793,
   "dinner_estimate": "Roughly $45-60 per person a la carte. IMPORTANT: Cafe Degas does not print any prices on its published lunch, dinner or brunch menus, so no per-item price could be verified; aggregator prices for this restaurant are years out of date and were deliberately not used.",
   "menu": [
    {
     "item": "Le Plateau de Fromages",
     "price": "Not listed on menu",
     "course": "starter",
     "note": "Plate or Board. Selection of domestic and imported, hard and soft cheeses with toasted baguette, green apple, grapes, fresh berries, sun-dried plums and dates - vegetarian as served"
    },
    {
     "item": "La Salade Maison",
     "price": "Not listed on menu",
     "course": "starter",
     "note": "Bibb lettuce in Dijon vinaigrette, English cucumber, carrots, tomato, red onion, toasted almonds. Bacon is a paid add-on - just do not add it"
    },
    {
     "item": "La Salade de Betteraves",
     "price": "Not listed on menu",
     "course": "starter",
     "note": "Roasted red beets over baby greens, aged balsamic vinaigrette, green apples, toasted spiced pecans, garlic herb goat cheese"
    },
    {
     "item": "La Salade Nicoise au Thon Poele",
     "price": "Not listed on menu",
     "course": "main",
     "note": "Listed under Les Entrees. Fresh pepper-coated seared yellowfin tuna on Bibb lettuce, Dijon vinaigrette, tomatoes, Kalamata olives, white Boqueron anchovies, haricots verts, hard boiled egg, red potatoes - the one fish entree, and the strongest pick here"
    },
    {
     "item": "Assiette de Legumes",
     "price": "Not listed on menu",
     "course": "main",
     "note": "Assorted seasonal vegetables, orzo pasta, beurre blanc - the vegetarian entree"
    },
    {
     "item": "Haricots Verts Amandine",
     "price": "Not listed on menu",
     "course": "side",
     "note": "Green beans with almonds (A la Carte)"
    },
    {
     "item": "Seasonal Roasted Vegetables",
     "price": "Not listed on menu",
     "course": "side",
     "note": "A la Carte"
    },
    {
     "item": "Asparagus",
     "price": "Not listed on menu",
     "course": "side",
     "note": "A la Carte"
    },
    {
     "item": "Sweet chile glazed Brussels sprouts",
     "price": "Not listed on menu",
     "course": "side",
     "note": "A la Carte - glazed, no bacon in this preparation"
    },
    {
     "item": "Pommes Frites",
     "price": "Not listed on menu",
     "course": "side",
     "note": "House-made french fries (A la Carte)"
    },
    {
     "item": "Fingerling Potatoes",
     "price": "Not listed on menu",
     "course": "side",
     "note": "A la Carte"
    }
   ],
   "avoid_note": "Skip L'Assiette de Pates (pate, duck liver mousse, cured meats and sausages), Ravioles d'Ecrevisse (crawfish), Escargots a la Bourguignonne, Les Moules au Fenouil (mussels), La Salade de Crabe (jumbo lump crab), L'onglet de Boeuf (hanger steak) and the Carre d'agneau (rack of lamb). Also skip La Gratinee d'Oignon - the classic French onion soup is built on a meat stock and cannot be modified. Note the COOLinary prix-fixe running Aug 1-31, 2026 ($27 lunch / $39 brunch / $45 dinner) has NO eligible second course - it is filet of beef or pork tenderloin only, with a crab-and-mirliton soup first course, so order a la carte instead.",
   "kosher_style_fit": "The seared-tuna nicoise gives a strong finned-fish option, backed by a vegetable plate, cheese and several vegetable-forward salads and sides.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Wine bar",
    "Fine dining",
    "Brunch"
   ],
   "reserveUrl": "https://www.opentable.com/cafe-degas",
   "website": "https://cafedegas.com",
   "reserve_priority": true,
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/New_Orleans_Museum_of_Art_%2855143750313%29.jpg/120px-New_Orleans_Museum_of_Art_%2855143750313%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/New_Orleans_Museum_of_Art_%2855143750313%29.jpg/500px-New_Orleans_Museum_of_Art_%2855143750313%29.jpg",
   "menu_source": "https://cafedegas.com/cafe-degas-dinner-menu/",
   "menu_confidence": "verified"
  },
  {
   "id": "n7",
   "name": "N7",
   "district": "by",
   "area_label": "Bywater",
   "cuisine": "French-Japanese wine bar",
   "vibe": "A hidden, lantern-lit courtyard behind an unmarked fence in Bywater, part French bistro, part Japanese tinned-fish bar, and all romance. Natural wine flows and reservations are gold dust.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google 4.5 / Restaurant Guru 4.8",
   "lat": 29.96317,
   "lng": -90.04923,
   "dinner_estimate": "$55-75 per person before wine (one small plate + one large plate)",
   "menu": [
    {
     "item": "Roasted Napa Cabbage",
     "price": "$14",
     "course": "starter",
     "note": "black bean chili sauce (Small Plates)"
    },
    {
     "item": "Roasted Kabocha Squash",
     "price": "$14",
     "course": "starter",
     "note": "pepita chili crisp, cashew cream"
    },
    {
     "item": "Swiss Chard Gnocchi",
     "price": "$22",
     "course": "starter",
     "note": "perigord truffle, maitake mushroom, smoked tomato coulis"
    },
    {
     "item": "Seared Bluefish Tuna",
     "price": "$20",
     "course": "starter",
     "note": "satsuma, fennel, olive - eligible finned fish"
    },
    {
     "item": "Avocado Salad",
     "price": "$12",
     "course": "starter",
     "note": "wasabi dressing (Salads and Sides)"
    },
    {
     "item": "Roasted Beets and Citrus",
     "price": "$13",
     "course": "starter",
     "note": "pistachio, smoked yogurt"
    },
    {
     "item": "Frisee Lyonnaise",
     "price": "$17",
     "course": "starter",
     "note": "poached egg, dijon vinaigrette - ask without the bacon lardons"
    },
    {
     "item": "Cheese Plate",
     "price": "3 pieces - 21   4 pieces - 27   5 pieces - 33",
     "course": "starter",
     "note": "mixed nuts, fruit (House-Made Charcuterie section)"
    },
    {
     "item": "Matcha Granola",
     "price": "$13",
     "course": "starter",
     "note": "lunch/brunch menu only (Fri-Sun 11:30-2:30)"
    },
    {
     "item": "Olives",
     "price": "$6",
     "course": "side",
     "note": "Salads and Sides"
    },
    {
     "item": "Sourdough",
     "price": "$8",
     "course": "side",
     "note": "roasted ume garlic butter"
    },
    {
     "item": "Roasted Shishito Peppers",
     "price": "$12",
     "course": "side"
    },
    {
     "item": "Pommes Frites w/Aioli",
     "price": "$8",
     "course": "side"
    },
    {
     "item": "Boiled Egg",
     "price": "$1.75",
     "course": "side",
     "note": "dinner menu"
    },
    {
     "item": "Vegetarian",
     "price": "$21",
     "course": "main",
     "note": "Tartes Flambees section: smoked tomato, brie, fennel, olive"
    },
    {
     "item": "Fish of the Day",
     "price": "MKT",
     "course": "main",
     "note": "Large Plates - confirm the species is finned/scaled that night"
    },
    {
     "item": "French Omelette",
     "price": "$13.50",
     "course": "main",
     "note": "lunch menu (Les Oeufs & Tartes); add on cheese $1, add on mushrooms $1"
    },
    {
     "item": "Tomato Confit Croque Monsieur",
     "price": "$14",
     "course": "main",
     "note": "lunch menu; emmental, basil - the meatless croque"
    }
   ],
   "avoid_note": "Skip the house specialties that are off-limits: Steamed Mussels, Pan-Seared Scallops, Escargots, Chili Smoked Oysters, Bouillabaisse, Confit Pork Cheek, Steak Tartare, A5 Wagyu, Coq au Riesling, Beef Bourgignon, Steak au Poivre, Duck Liver Pate / Terrine de Foie Gras, Wild Boar Pate, and the pork Croque Monsieur / Croque Madame. Soup du Jour and French Onion Soup are unverified for stock, so ask.",
   "kosher_style_fit": "Workable but a la carte only: the tinned finned-fish (sardines, anchovies, salmon tartine) plus eggs, cheese, frites and salad fit the diet, so skip the meat-forward prix fixe and build from bar snacks.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Wine bar",
    "Seafood",
    "Fine dining",
    "Casual",
    "Late night"
   ],
   "reserve_priority": true,
   "reserveUrl": "https://www.opentable.com/r/n7-new-orleans",
   "website": "https://www.n7nola.com",
   "photoUrl": null,
   "menu_source": "https://images.squarespace-cdn.com/content/v1/5a45e06c1f318d37b499e5c6/31c7bed3-706d-4caf-957f-fc83a99566df/N7+Dinner+Menu+January+2026.png (dinner) and .../ad9e8718-189d-409d-8bdf-c94dff9433eb/N7+Lunch+Menu+January+2026.png (lunch), both linked from https://www.n7nola.com",
   "menu_confidence": "verified"
  },
  {
   "id": "marjies-grill",
   "name": "Marjie's Grill",
   "district": "cp",
   "area_label": "Mid-City / Broad Street",
   "cuisine": "Southeast Asian / Gulf Coast",
   "vibe": "Marcus Jacobs and Caitlin Carney's beloved Lao-Thai-Vietnamese-meets-Gulf grill on South Broad. Note: it closed permanently in Dec 2023 and the space now hosts 'Broad Street Ballers' supper-club events, verify before planning a visit.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Google 4.5 (permanently closed)",
   "lat": 29.9601,
   "lng": -90.0836,
   "dinner_estimate": "$40/person",
   "menu": [
    {
     "item": "Creole Tomato Som Tam",
     "price": "$14 approx",
     "note": "ask for it made without fish sauce & dried shrimp"
    },
    {
     "item": "Smashed Cucumber Salad",
     "price": "$10 approx"
    },
    {
     "item": "Wok-Fried Water Spinach (morning glory)",
     "price": "$12 approx"
    },
    {
     "item": "Charred Long Beans",
     "price": "$11 approx"
    },
    {
     "item": "Grilled Eggplant",
     "price": "$13 approx"
    },
    {
     "item": "Coconut Rice",
     "price": "$6 approx"
    },
    {
     "item": "Sticky Rice",
     "price": "$5 approx"
    },
    {
     "item": "Charcoal-Grilled Swordfish",
     "price": "$28 approx"
    },
    {
     "item": "Whole Grilled Gulf Fish",
     "price": "$32 approx"
    }
   ],
   "avoid_note": "Skip the honey-butter yardbird (chicken), crispy pork knuckles, habanero pork ribs, grilled prawns, soft-shell crab, and duck.",
   "kosher_style_fit": "Good fit when open: charcoal swordfish and whole Gulf fish for finned fish, plus veg-forward som tam, morning glory, long beans and eggplant, just ask for the som tam without fish sauce/dried shrimp.",
   "tags": [
    "fish",
    "veg"
   ],
   "filters": [
    "Seafood",
    "Casual"
   ],
   "reserve_priority": false,
   "reserveUrl": null,
   "website": "https://marjiesgrill.com",
   "photoUrl": null,
   "menu_confidence": "approximate",
   "menu_source": null
  },
  {
   "id": "sneaky-pickle",
   "name": "Sneaky Pickle & Bar Brine",
   "district": "by",
   "area_label": "Bywater",
   "cuisine": "Vegetarian / Vegan (New American)",
   "vibe": "A funky, veggie-forward corner spot in Bywater that runs as the casual, mostly-vegan Sneaky Pickle by day and transforms into the moodier, cocktail-driven Bar Brine at night. Local, seasonal, farm-sourced cooking in a laid-back neighborhood room.",
   "price": "$$",
   "rating": 4.5,
   "rating_note": "Yelp 4.5",
   "lat": 29.9636,
   "lng": -90.048,
   "dinner_estimate": "$35-50 per person at Bar Brine (one Start + one Main); ~$20-25 at lunch",
   "menu": [
    {
     "item": "Pickle Plate",
     "price": "$7.80",
     "course": "starter",
     "note": "house-pickled vegetables (v,wf) - Bar Brine dinner 'Start'"
    },
    {
     "item": "Knife-Cut Fries",
     "price": "$8.80",
     "course": "starter",
     "note": "crispy garlic, vegan ranch (v,wf)"
    },
    {
     "item": "Buffalo Tofu Wraps",
     "price": "$13.80",
     "course": "starter",
     "note": "cauliflower, pickled onion, ranch (v,wf,s)"
    },
    {
     "item": "Heirloom Tomato Salad",
     "price": "$13.80",
     "course": "starter",
     "note": "Armenian cucumber, onion, sunflower seeds, basil, lemon vinaigrette (v,wf)"
    },
    {
     "item": "Smoked Corn Ribs",
     "price": "$10.80",
     "course": "starter",
     "note": "puffed amaranth, sesame seeds, white barbecue sauce (v,wf)"
    },
    {
     "item": "Salad",
     "price": "$14.80",
     "course": "starter",
     "note": "arugula, Southern Maid goat feta, corn, yellow cucumber, yellow pepper onion, pepitas (wf)"
    },
    {
     "item": "Smoked Gulf Fish Dip",
     "price": "$11.80",
     "course": "starter",
     "note": "capers, shallot, dill, sesame lavash cracker - eligible gulf fish"
    },
    {
     "item": "Crudo",
     "price": "$15.80",
     "course": "starter",
     "note": "cobia, pan dan oil, horseradish, valencia orange (wf) - raw finned fish"
    },
    {
     "item": "Sneaky Pickle Mac N Cheese",
     "price": "$14.80",
     "course": "main",
     "note": "Pasta section: cashew sauce, broccoli, cashew chorizo (v,s) - the chorizo is cashew-based, not pork"
    },
    {
     "item": "Gnocchi",
     "price": "$15.80",
     "course": "main",
     "note": "Pasta section: goat cheese, beet balsamic shallot, pistachio-almond-pecan crumble"
    },
    {
     "item": "Grilled Squash",
     "price": "$22.80",
     "course": "main",
     "note": "salsa verde, cashew cream grits, roasted beech mushrooms, sunflower seeds (v,wf)"
    },
    {
     "item": "Vegan Reuben",
     "price": "$17.80",
     "course": "main",
     "note": "tempeh, caramelized onions, 1000 island, sauerkraut, fries (v,s)"
    },
    {
     "item": "Pan Seared Sheepshead",
     "price": "$25.80",
     "course": "main",
     "note": "Carolina Gold rice, jimmy nardello peppers, arugula-fennel salad (wf) - eligible gulf finned fish"
    },
    {
     "item": "Pickle Plate",
     "price": "$6.80",
     "course": "starter",
     "note": "lunch menu (served until 3:30pm): house made pickled vegetables, herbs (v,wf)"
    },
    {
     "item": "Egg Rolls",
     "price": "$10.80",
     "course": "starter",
     "note": "lunch: black rice, cabbage, mushrooms, seed spread, chili aioli, peanut (v,s)"
    },
    {
     "item": "Hand-Cut Fries",
     "price": "$7.80",
     "course": "starter",
     "note": "lunch: crispy garlic, chili flake (v,wf); add vegan ranch, vegan aioli or classic aioli +1.00"
    },
    {
     "item": "Bok Choy",
     "price": "$9.80",
     "course": "starter",
     "note": "lunch: ginger, garlic, cashews, soy sauce (v,wf,s)"
    },
    {
     "item": "Tofu Taco",
     "price": "$4.80",
     "course": "starter",
     "note": "lunch: chili, onion, cashew cheese, cilantro, corn tortilla (v,wf,s)"
    },
    {
     "item": "Brussel's Toast",
     "price": "$10.80",
     "course": "starter",
     "note": "lunch: cashew-tofu cheese, sunflower seeds, house made sourdough (v,s); add a fried egg +2.00"
    },
    {
     "item": "Buffalo Cauliflower Salad",
     "price": "$14.80",
     "course": "main",
     "note": "lunch 'Bigger': tofu, local greens, cherry tomatoes (v,wf,s)"
    },
    {
     "item": "Mac n Cheese",
     "price": "10.80 or 15.80",
     "course": "main",
     "note": "lunch: cashew chorizo, broccoli, butternut squash (v,s) - two sizes as printed"
    },
    {
     "item": "Daily Bowl of Food",
     "price": "$11.80",
     "course": "main",
     "note": "lunch: beans, rice, veggies - ask for the day's details (v,wf)"
    },
    {
     "item": "Gnocchi in Purgatory",
     "price": "$16.80",
     "course": "main",
     "note": "lunch: tomato-pepper sauce, potato gnocchi, one egg"
    },
    {
     "item": "Egg Sandwich",
     "price": "$10.80",
     "course": "main",
     "note": "lunch Sandwiches: sweet potato, kale, cheddar, aioli, Portuguese bun - skip the +4 bacon"
    },
    {
     "item": "Reuben",
     "price": "$13.80",
     "course": "main",
     "note": "lunch Sandwiches: smoked tempeh, caramelized onions, 1000 island, sauerkraut (v,s)"
    },
    {
     "item": "Multigrain Patty (our veggie burger)",
     "price": "$13.80",
     "course": "main",
     "note": "lunch Sandwiches: fried vegetable, pickles, smoked onion jam, aioli (v,s)"
    },
    {
     "item": "Hey Coffee Co. Drip",
     "price": "$4",
     "course": "drink",
     "note": "with refills (Hot Drinks)"
    },
    {
     "item": "Tea",
     "price": "$4",
     "course": "drink",
     "note": "chamomile, green, mint, breakfast"
    },
    {
     "item": "Hey Coffee Co. Cold Brew",
     "price": "$4.50",
     "course": "drink",
     "note": "Iced Drinks"
    },
    {
     "item": "Lavender Matcha Latte",
     "price": "$6.50",
     "course": "drink",
     "note": "Iced Drinks"
    },
    {
     "item": "Cardamom Spiced Cold Brew Latte",
     "price": "$6.50",
     "course": "drink",
     "note": "add white chocolate .50"
    },
    {
     "item": "Shrub and Soda",
     "price": "$6",
     "course": "drink",
     "note": "seasonal shrub, lime, soda - non-alcoholic"
    }
   ],
   "avoid_note": "Skip Hand Ripped Squid Ink Noodles (shrimp, crab), Rice Cakes (lamb ragu), Wagyu Burger, Wagyu Bavette Steak, and at lunch the Wagyu Beef Burger and Wagyu Steak and Eggs. Do not take the 'Add Bacon +4' on sandwiches. Note the 'cashew chorizo' in the mac n cheese is vegan, so that dish is fine.",
   "kosher_style_fit": "Excellent fit: a largely vegan/vegetarian kitchen plus finned-fish crudos (snapper, mackerel) — just steer clear of the few meat plates and any shellfish.",
   "tags": [
    "veg",
    "fish",
    "book"
   ],
   "filters": [
    "Vegetarian",
    "Seafood",
    "Casual",
    "Late night",
    "Wine bar"
   ],
   "reserveUrl": null,
   "website": "https://www.yousneakypickle.com",
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://spoton-prod-websites-user-assets.s3.amazonaws.com/static/tmp/IlkGJvdQvO4uwKwz9q0l_Online Menu(50).jpg (Bar Brine dinner) and https://spoton-prod-websites-user-assets.s3.amazonaws.com/static/tmp/zsImmfQkQRCfRZFO9cfe_LUNCH MENU-modified for online .png (Sneaky Pickle lunch), both linked from https://www.yousneakypickle.com/menus/",
   "menu_confidence": "verified"
  },
  {
   "id": "bayona",
   "name": "Bayona",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Contemporary Creole",
   "vibe": "Chef Susan Spicer's romantic 200-year-old French Quarter cottage with a lush courtyard and refined, globe-trotting Creole cooking. One of the city's enduring fine-dining icons.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "OpenTable 4.5 (3,500+ diners); Google ~4.5; Yelp 4.0 (940+ reviews); Tripadvisor 4.3.",
   "lat": 29.9573,
   "lng": -90.0678,
   "dinner_estimate": "$55-70 per person (starter + fish du jour, before drinks); the August COOLinary dinner is a flat $58.00",
   "menu": [
    {
     "item": "Goat Cheese Crouton",
     "price": "18",
     "course": "starter",
     "note": "Oyster and Shiitake Mushrooms, Madeira Cream - the 'oyster' here is the mushroom variety, so it is vegetarian"
    },
    {
     "item": "Eggplant Caviar",
     "price": "16",
     "course": "starter",
     "note": "Kalamata Tapenade, Feta, Crostini"
    },
    {
     "item": "Black Eyed Pea Beignets",
     "price": "16",
     "course": "starter",
     "note": "Black Garlic Aioli; marked (v, gf)"
    },
    {
     "item": "Garlic Soup",
     "price": "12",
     "course": "starter",
     "note": "Bayona's signature garlic soup; ask whether the day's batch is made on vegetable stock"
    },
    {
     "item": "Bayona Salad",
     "price": "12",
     "course": "starter",
     "note": "Farm Greens, Balsamic Vinaigrette, Shaved Parmesan; marked (gf). Substitute Blue Cheese for $2"
    },
    {
     "item": "Caesar Style Salad",
     "price": "14",
     "course": "starter",
     "note": "Arugula, Romaine, Preserved Lemon, Fried Capers"
    },
    {
     "item": "Roasted Beet & Creole Tomato Salad",
     "price": "18",
     "course": "starter",
     "note": "Raspberry Vinaigrette; marked (v, gf)"
    },
    {
     "item": "Fish du Jour",
     "price": "28",
     "course": "main",
     "note": "Chef's Daily Creation - confirm the day's fish is a finned variety"
    },
    {
     "item": "Chef's Creation of the Fish of the Day",
     "price": "$58.00",
     "course": "main",
     "note": "Second course of the COOLinary three-course dinner menu (Aug 1-31, 2026), $58.00 per person; pair with Frito Misto first course and Pavlova or Banana Cream Pie"
    }
   ],
   "avoid_note": "Skip the house signatures built on shellfish and game: Assiette de Fruits de Mer, Steamed Bangs Island Mussels, Grilled Gulf Shrimp, New Orleans Style BBQ Shrimp, Stracciatella Bruschetta (crawfish tails), Crispy Smoked Quail Salad, Duck Pate, Veal Sweetbreads, Smoked Duck PB&J and the Beef Tenderloin Bolognese Cannelloni.",
   "kosher_style_fit": "Not kosher; the kitchen works extensively with pork, shellfish and game. That said, the daily Gulf fish, salmon, redfish (finned/scaled) and a robust set of vegetarian and vegan dishes make it workable for a fish-and-vegetarian style with the noted requests.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Fine dining",
    "Seafood",
    "Vegetarian"
   ],
   "reserveUrl": "https://www.opentable.com/r/bayona",
   "website": "https://www.bayona.com",
   "reserve_priority": true,
   "photoUrl": "https://www.bayona.com/wp-content/uploads/2026/07/julia-child-ad-1024x1024.png",
   "coverUrl": "https://www.bayona.com/wp-content/uploads/2026/07/julia-child-ad-1024x1024.png",
   "menu_source": "https://www.bayona.com/wp-content/uploads/2026/07/lunch-menu-sample.png",
   "menu_confidence": "verified"
  },
  {
   "id": "brennans",
   "name": "Brennan's",
   "district": "fq",
   "area_label": "French Quarter",
   "cuisine": "Creole",
   "vibe": "The pink French Quarter landmark, open since 1946 and celebrating 80 years in 2026, all courtyard palms, jacket-optional polish and tableside flambé. Old-world Creole elegance with a modern seasonal kitchen under Chef Kris Padalino.",
   "price": "$$$$",
   "rating": 4.5,
   "rating_note": "4.5 on Tripadvisor (ranked ~#110 of 1,477 NOLA restaurants) and Google, across 2,500+ reviews",
   "lat": 29.9558,
   "lng": -90.0656,
   "dinner_estimate": "$70-95 per person (appetizer + fish entree + dessert, before drinks)",
   "menu": [
    {
     "item": "Creole Tomato Tostada",
     "price": "$18.00",
     "course": "starter",
     "note": "Louisiana Heirloom & Creole Tomatoes, Creamy Burrata, Housemade Okra Tostada, Smoked Tomato Water"
    },
    {
     "item": "Redfish Veronique",
     "price": "$36.00",
     "course": "main",
     "note": "Hibiscus-pickled Grapes, Braised Leeks, Fingerling Potatoes, Preserved Lemon Beurre Blanc"
    },
    {
     "item": "Gulf Fish en Papillote",
     "price": "$38.00",
     "course": "main",
     "note": "Banana Leaf-wrapped Gulf Fish, Sorghum, Marcona Almonds, Castelvetrano Olives, Tomato - ask without the Louisiana crab"
    },
    {
     "item": "Blackened Tofu",
     "price": "$25.00",
     "course": "main",
     "note": "New Orleans Tien Dat Tofu, Two Brooks Farm Rice Grits, Preserved Shiitake Mushrooms"
    },
    {
     "item": "Smoked Cauliflower",
     "price": "$12.00",
     "course": "side",
     "note": "Preserved Lemon & Harissa"
    },
    {
     "item": "Shells & Cheese",
     "price": "$12.00",
     "course": "side",
     "note": "Mimolette Fondue, Grana Padano, Abita Amber"
    },
    {
     "item": "Maggie's Mushrooms",
     "price": "$12.00",
     "course": "side"
    },
    {
     "item": "Succotash",
     "price": "$12.00",
     "course": "side",
     "note": "Glazed Summer Vegetables - ask without the Nueske's bacon"
    },
    {
     "item": "World Famous Bananas Foster",
     "price": "$14.00",
     "course": "dessert",
     "note": "Invented in 1951 at Brennan's; flambeed tableside, minimum 2 people per order"
    },
    {
     "item": "Cherries Jubilee",
     "price": "$14.00",
     "course": "dessert",
     "note": "Flambeed tableside. Fresh tart black cherries, vanilla ice cream, Luxardo sauce"
    },
    {
     "item": "New Orleans Bread Pudding",
     "price": "$14.00",
     "course": "dessert",
     "note": "Whiskey Caramel, Buttermilk Ice Cream, Pralines"
    },
    {
     "item": "The Snickers",
     "price": "$15.00",
     "course": "dessert",
     "note": "Bavarian Milk Chocolate, Caramel Custard, Nougat Ice Cream, Roasted Peanuts"
    },
    {
     "item": "Lemon Tart",
     "price": "$14.00",
     "course": "dessert",
     "note": "Yuzu Mousse, Lemon Jelly, Sweet Pastry Crumb, Toasted Meringue"
    },
    {
     "item": "Pineapple Tarte Tatin",
     "price": "$14.00",
     "course": "dessert",
     "note": "Charred Pineapple, Sweetened Condensed Anglaise, Puff Pastry, Whipped Vanilla Mousse"
    }
   ],
   "avoid_note": "Nearly the whole marquee list is off-limits: Turtle Soup, Seafood Gumbo, Louisiana Crab Claws, Grand Isle Jewel Oysters, Louisiana Oysters, Steak Tartare Cannoli, Torchon of Foie Gras, Crispy Louisiana Soft-Shell Crab, Creole Hanger Steak, Roasted Chateaubriand, Poussin a la Moutarde and Pork Milanese. Also skip the Creole Caesar - its dressing is smoked oyster.",
   "kosher_style_fit": "Not kosher and shellfish/pork are all over the menu, but there is a genuine finned-fish + vegetarian path: redfish, gulf fish (no crab), blackened tofu, tomato-burrata tostada, several veg sides, and every dessert works. Good for a kosher-style diner who orders carefully.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Southern",
    "Seafood",
    "Fine dining",
    "Brunch"
   ],
   "reserve_priority": true,
   "reserveUrl": "https://www.opentable.com/brennans",
   "website": "https://www.brennansneworleans.com",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Brennan%27s_-_New_Orleans_%2855150819532%29.jpg/120px-Brennan%27s_-_New_Orleans_%2855150819532%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Brennan%27s_-_New_Orleans_%2855150819532%29.jpg/500px-Brennan%27s_-_New_Orleans_%2855150819532%29.jpg",
   "menu_source": "https://www.brennansneworleans.com/menus/dinner/",
   "menu_confidence": "verified"
  },
  {
   "id": "herbsaint",
   "name": "Herbsaint",
   "district": "wh",
   "area_label": "Warehouse District / CBD",
   "cuisine": "French-Southern",
   "vibe": "Chef Donald Link's flagship on the St. Charles streetcar line since 2000, a James Beard-honored, white-tablecloth-casual room doing contemporary French-Southern cooking with rustic Italian touches. A perennial pick on the city's best-restaurants lists.",
   "price": "$$$",
   "rating": 4.6,
   "rating_note": "4.6 on Google across ~1,420 reviews; James Beard Award-winning chef, 1,100+ Yelp reviews",
   "lat": 29.9455,
   "lng": -90.0703,
   "dinner_estimate": "$60-85 per person (one small plate + main + dessert, before drinks); Fish of the Day is Market Price",
   "menu": [
    {
     "item": "KANPACHI CRUDO",
     "price": "19",
     "course": "starter",
     "note": "Chili Ponzu, Fennel Relish, Oranges and Shiso"
    },
    {
     "item": "BLUEFIN TUNA TARTARE",
     "price": "22",
     "course": "starter",
     "note": "Yuzu Aioli, Tare, Togarashi and Toasted Pain Blanc"
    },
    {
     "item": "HOUSEMADE SPAGHETTI",
     "price": "20",
     "course": "starter",
     "note": "Small plate with fried-poached farm egg - ask without the guanciale"
    },
    {
     "item": "FRIED GREEN TOMATOES",
     "price": "19",
     "course": "starter",
     "note": "Sauce Gribiche and Fines Herbes - ask without the chilled shrimp"
    },
    {
     "item": "WATERMELON GAZPACHO",
     "price": "26",
     "course": "starter",
     "note": "Jalapeno-Lime Mayo and Fried Bread - ask without the jumbo lump crab"
    },
    {
     "item": "FARM LETTUCES",
     "price": "16",
     "course": "starter",
     "note": "Radish, Toasted Bread Crumbs, Dill and Herb-Buttermilk Dressing"
    },
    {
     "item": "CHERMOULA MARINATED ZUCCHINI",
     "price": "15",
     "course": "starter",
     "note": "Artichoke Aioli, Valbreso Feta and Confit Tomato"
    },
    {
     "item": "FISH OF THE DAY",
     "price": "Market Price",
     "course": "main",
     "note": "Daily preparation; confirm the day's fish"
    },
    {
     "item": "GRILLED TUNA SANDWICH",
     "price": "28",
     "course": "main",
     "note": "Olive Bread with Lemon Pickle Aioli"
    },
    {
     "item": "French Fries with Pimenton Aioli",
     "price": "9",
     "course": "side"
    },
    {
     "item": "Charred Squash with Romesco and Hazelnuts",
     "price": "10",
     "course": "side"
    },
    {
     "item": "BANANA BROWN BUTTER TART",
     "price": "15",
     "course": "dessert",
     "note": "Fleur de Sel Caramel"
    },
    {
     "item": "VANILLA POT DE CREME",
     "price": "16",
     "course": "dessert",
     "note": "Red Wine Poached Pears, Molasses Spice Cookies"
    },
    {
     "item": "FRIED APPLE HAND PIES",
     "price": "17",
     "course": "dessert",
     "note": "Cookie Butter Ice Cream, Feuilletine Crumbs"
    },
    {
     "item": "FLOURLESS CHOCOLATE CAKE",
     "price": "12",
     "course": "dessert",
     "note": "Dulce de Leche Sauce, Whipped Cream, Spanish Peanut Brittle"
    },
    {
     "item": "SEASONAL ICE CREAM/SORBET",
     "price": "12",
     "course": "dessert"
    },
    {
     "item": "ARTISANAL CHEESES",
     "price": "18",
     "course": "dessert"
    },
    {
     "item": "Zero Proof Unified Ferments 'Jasmine Green'",
     "price": "12",
     "course": "drink",
     "note": "Non-alcoholic sparkling fermented tea, listed under Sparkling by the glass"
    },
    {
     "item": "Hugo Spritz",
     "price": "$12",
     "course": "drink",
     "note": "Zero-proof version available at $12 (elderflower, prosecco-style, mint); the alcoholic version is 16"
    }
   ],
   "avoid_note": "Skip the Cornmeal Fried Oysters, Louisiana Jumbo Shrimp, Muscovy Duck Leg Confit, Credo Farms Chicken, Rabbit Leg Schnitzel (crawfish americaine), Grilled Wagyu Bavette, Beef Short Rib, Grilled Lamb Kofta, the gumbo (chicken, tasso, andouille) and the Dirty Rice side.",
   "kosher_style_fit": "Not kosher; pork (guanciale, tasso, andouille) and shellfish feature heavily, but the tuna sandwich, daily fish, several veg salads/sides and all desserts give a solid finned-fish + vegetarian route for a kosher-style diner.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Seafood",
    "Southern",
    "Fine dining",
    "Wine bar"
   ],
   "reserve_priority": true,
   "reserveUrl": "https://www.opentable.com/herbsaint",
   "website": "https://herbsaint.com",
   "photoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Old_Absinthe_House_%2855151882008%29.jpg/120px-Old_Absinthe_House_%2855151882008%29.jpg",
   "coverUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Old_Absinthe_House_%2855151882008%29.jpg/500px-Old_Absinthe_House_%2855151882008%29.jpg",
   "menu_source": "https://herbsaint.com/wp-content/uploads/2026/06/2026-06-12-ALL-DAY-Menu-1.pdf",
   "menu_confidence": "verified"
  },
  {
   "id": "meril",
   "name": "Meril",
   "district": "wh",
   "area_label": "Warehouse District",
   "cuisine": "New American",
   "vibe": "Emeril Lagasse's loud, playful small-plates spot named for his daughter, an open-kitchen Warehouse District room built for sharing globally-inspired plates, flatbreads and famous desserts. Lively, buzzy, cocktail-forward.",
   "price": "$$$",
   "rating": 4.4,
   "rating_note": "4.6 on Restaurant Guru (16k reviews) and strong OpenTable (7k+ reviews); Google/Yelp cluster around 4.3-4.4",
   "lat": 29.944,
   "lng": -90.0679,
   "dinner_estimate": "$45-70/person (e.g. Gulf Yellowfin Tuna Bundles $16 + Market Fish $36; ~$45 if you take the Spicy Rigatoni instead), before drinks, 3% card fee",
   "menu": [
    {
     "item": "Pocket Bread",
     "price": "$6",
     "course": "starter",
     "note": "listed under SNACKS with no description; plain bread service"
    },
    {
     "item": "Pineapple Upside-Down Cornbread",
     "price": "$8",
     "course": "starter",
     "note": "comes with bacon marmalade - ask without the bacon marmalade"
    },
    {
     "item": "French Fries",
     "price": "$10",
     "course": "starter",
     "note": "cane vinegar aioli"
    },
    {
     "item": "Deviled Eggs",
     "price": "$12",
     "course": "starter",
     "note": "smoked trout roe, Zapp's - trout roe is finned fish, eligible"
    },
    {
     "item": "Gulf Yellowfin Tuna Bundles",
     "price": "$16",
     "course": "starter",
     "note": "jalapeno, truffle ponzu, wontons, tobiko"
    },
    {
     "item": "Crispy Brussels Sprouts",
     "price": "$18",
     "course": "starter",
     "note": "beer braised onions, bacon - ask without the bacon"
    },
    {
     "item": "Margherita",
     "price": "$15",
     "course": "starter",
     "note": "flatbread with basil; shareable"
    },
    {
     "item": "Vegetable",
     "price": "$19",
     "course": "starter",
     "note": "flatbread: zucchini, roasted garlic, red onion, sweet peppers, mushrooms"
    },
    {
     "item": "The Big Caesar",
     "price": "$16",
     "course": "starter",
     "note": "parmesan, toasted breadcrumbs"
    },
    {
     "item": "Spicy Rigatoni",
     "price": "$19",
     "course": "main",
     "note": "caramelized onions, parmesan; vegetarian"
    },
    {
     "item": "Market Fish",
     "price": "$36",
     "course": "main",
     "note": "corn maque choux, herb salad, creole butter sauce - confirm the maque choux is made without bacon/tasso"
    },
    {
     "item": "Banana Cream Pie",
     "price": "$14",
     "course": "dessert",
     "note": "caramel sauce, chocolate shavings"
    },
    {
     "item": "Rocky Road Bread Pudding",
     "price": "$14",
     "course": "dessert",
     "note": "pecans, meringue"
    },
    {
     "item": "Grand Marnier Tiramisu",
     "price": "$14",
     "course": "dessert"
    },
    {
     "item": "Daily Ice Cream Special",
     "price": "MP",
     "course": "dessert",
     "note": "priced at market on the dessert menu"
    },
    {
     "item": "Daily Sorbet",
     "price": "$10",
     "course": "dessert"
    },
    {
     "item": "Cotton Candy",
     "price": "$5",
     "course": "dessert"
    },
    {
     "item": "Basin Street Blues",
     "price": "$14",
     "course": "drink",
     "note": "zero-proof: Mockly Baron Van Blue, mint, soda"
    },
    {
     "item": "Storyville Strut",
     "price": "$14",
     "course": "drink",
     "note": "zero-proof: Mockly Eye Opener, ginger beer"
    },
    {
     "item": "Phony Negroni",
     "price": "$14",
     "course": "drink",
     "note": "listed under \"ZERO PROOF\""
    },
    {
     "item": "Athletic Brewing Co. Run Wild",
     "price": "$8",
     "course": "drink",
     "note": "non-alcoholic IPA"
    },
    {
     "item": "Athletic Brewing Co. Atletica",
     "price": "$8",
     "course": "drink",
     "note": "non-alcoholic Mexican-style copper"
    },
    {
     "item": "Americana",
     "price": "$5.50",
     "course": "drink",
     "note": "from the dessert menu coffee list"
    },
    {
     "item": "Cappuccino",
     "price": "$5.50",
     "course": "drink"
    },
    {
     "item": "Espresso",
     "price": "$5.50",
     "course": "drink"
    },
    {
     "item": "Latte",
     "price": "$5.50",
     "course": "drink"
    },
    {
     "item": "Macchiato",
     "price": "$5.50",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the House Boudin Balls, Crispy Gulf Shrimp Tacos, Sweet & Sour Chicken Wings, Barbequed Shrimp, Fried Turkey Necks, Gulf Shrimp & Pork Dumplings, House Meatballs, Candied Pork Ribs, Pepperoni and Wise Guy (Italian sausage) flatbreads, Gumbo (chicken/andouille), Fried Parmesan Chicken Salad, Shrimp Linguine and the Double Cheeseburger. Note the Pineapple Upside-Down Cornbread and Crispy Brussels Sprouts both arrive with pork unless you ask.",
   "kosher_style_fit": "Not kosher and the kitchen runs heavy on shellfish and pork, but Meril is actually one of the easier spots here for a finned-fish + vegetarian pair: gulf fish dip, tuna bundles, trout-roe deviled eggs, pan-seared drum, plus a deep bench of vegetarian snacks, two veg flatbreads and nearly every dessert.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Seafood",
    "Pizza",
    "Vegetarian",
    "Casual"
   ],
   "reserve_priority": true,
   "reserveUrl": "https://www.opentable.com/r/meril-new-orleans",
   "website": "https://bemeril.com",
   "photoUrl": "https://bemeril.com/wp-content/uploads/2024/03/Meril_Oct2023-192-1024x682.jpg",
   "coverUrl": "https://bemeril.com/wp-content/uploads/2024/03/Meril_Oct2023-192-1024x682.jpg",
   "menu_source": "https://bemeril.com/menus/",
   "menu_confidence": "verified"
  },
  {
   "id": "gautreaus",
   "name": "Gautreau's",
   "district": "gd",
   "area_label": "Uptown (Soniat St)",
   "cuisine": "French-American",
   "vibe": "An intimate, tucked-away Uptown cottage that has been a fine-dining landmark since 1982. Chef Rob Mistry (ex-Commander's Palace, staged at Alinea) plates refined, globally accented French-American fare in a hushed, special-occasion room.",
   "price": "$$$$",
   "rating": 4.5,
   "rating_note": "Google ~4.6 and Yelp ~4.3 (235 reviews); consistently ranked among Uptown's top fine-dining rooms.",
   "lat": 29.9251,
   "lng": -90.1157,
   "dinner_estimate": "$85-130/person; food prices are not published anywhere online, so confirm when booking",
   "menu": [
    {
     "item": "Redfish a la Maxime",
     "price": "Price not published",
     "course": "main",
     "note": "signature dish - potato-scaled redfish, vadouvan curry, cabbage blanquette, smoked trout roe; dish confirmed via press coverage of chef Rob Mistry's menu, price not published online"
    },
    {
     "item": "Caramelized Banana Split",
     "price": "Price not published",
     "course": "dessert",
     "note": "long-running house dessert (banana ice cream / warm banana bread, butterscotch and chocolate); price not published online"
    },
    {
     "item": "Cosmopolitan",
     "price": "$10",
     "course": "drink",
     "note": "from the \"Non-Alcoholic\" list in the restaurant's own May 2026 wine book PDF"
    },
    {
     "item": "No Mojito",
     "price": "$10",
     "course": "drink",
     "note": "non-alcoholic"
    },
    {
     "item": "Spicy Margarita",
     "price": "$10",
     "course": "drink",
     "note": "non-alcoholic version listed under Non-Alcoholic"
    },
    {
     "item": "Virgin Mule",
     "price": "$10",
     "course": "drink",
     "note": "non-alcoholic"
    },
    {
     "item": "No Paloma",
     "price": "$10",
     "course": "drink",
     "note": "non-alcoholic"
    },
    {
     "item": "Athletic Lite N/A",
     "price": "$8",
     "course": "drink",
     "note": "non-alcoholic beer"
    }
   ],
   "avoid_note": "The kitchen leans on shellfish, pork and poultry: skip the crab cigars (they carry the tuna tartare, so it cannot be ordered around), shrimp/oyster courses, porchetta and pork dishes, roast chicken and duck. Because the card changes nightly and the restaurant's own menu page is behind a Sucuri/Cloudflare block, call ahead to confirm the night's fish and vegetable courses and their prices.",
   "kosher_style_fit": "Not kosher, but workable kosher-style: usually 2-3 finned-fish mains (pompano, redfish, tuna) plus a vegetable course and dessert. Call ahead so the kitchen can steer you around the shellfish- and pork-heavy plates.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Fine dining",
    "Seafood",
    "Cajun/Creole"
   ],
   "reserve_priority": true,
   "website": "https://gautreausrestaurant.com",
   "reserveUrl": "https://resy.com/cities/new-orleans-la/venues/gautreaus-restaurant",
   "photoUrl": null,
   "menu_source": "https://gautreausrestaurant.com/wp-content/uploads/2026/05/WINE-BOOK-5.26.26.pdf",
   "menu_confidence": "approximate"
  },
  {
   "id": "brigtsens",
   "name": "Brigtsen's",
   "district": "gd",
   "area_label": "Riverbend / Uptown (Dante St)",
   "cuisine": "Contemporary Creole",
   "vibe": "A cozy Victorian cottage in Riverbend where James Beard winner Frank Brigtsen has cooked market-driven Creole since 1986. Warm, unhurried and quintessentially old-line New Orleans.",
   "price": "$$$",
   "rating": 4.6,
   "rating_note": "Yelp ~4.5 (494 reviews) and Google ~4.7; a perennial local favorite and James Beard 'Best Chef: Southeast' winner.",
   "lat": 29.9413,
   "lng": -90.1366,
   "dinner_estimate": "$60-80/person (House Salad $14 + Blackened Yellowfin Tuna $45 + dessert $15), before drinks; 3.75% card fee",
   "menu": [
    {
     "item": "House Salad",
     "price": "$14.00",
     "course": "starter",
     "note": "Salad Days lettuces, tomatoes, feta, spiced pecans, pickled red onion, croutons, Steen's cane vinegar dressing; vegetarian"
    },
    {
     "item": "Caesar Salad",
     "price": "$15.00",
     "course": "starter",
     "note": "Salad Days lettuces, croutons & marinated white anchovies - anchovy is finned fish, eligible"
    },
    {
     "item": "Blackened Yellowfin Tuna",
     "price": "$45.00",
     "course": "main",
     "note": "smoked corn sauce, chipotle black bean salsa, roasted red pepper sour cream"
    },
    {
     "item": "Pan-Fried Fish",
     "price": "$42.00",
     "course": "main",
     "note": "roasted pecans & Meuniere sauce; confirm the day's fish is a scaled Gulf fish (drum/trout), not catfish"
    },
    {
     "item": "Eggplant Parmesan",
     "price": "$28.00",
     "course": "main",
     "note": "marinara, mozzarella, spaghetti Bordelaise; vegetarian"
    },
    {
     "item": "Lemon Blueberry Brulee",
     "price": "$17.00",
     "course": "dessert"
    },
    {
     "item": "Rum Raisin Bread Pudding",
     "price": "$15.00",
     "course": "dessert",
     "note": "butterscotch sauce & whipped cream"
    },
    {
     "item": "Pecan Pie",
     "price": "$15.00",
     "course": "dessert",
     "note": "caramel sauce & whipped cream"
    },
    {
     "item": "Ponchatoula Strawberry Shortcake",
     "price": "$15.00",
     "course": "dessert",
     "note": "strawberry sauce & whipped cream"
    }
   ],
   "avoid_note": "Skip the File' Gumbo (chicken/andouille), Shrimp Remoulade with Guacamole & Deviled Eggs, New Orleans BBQ Shrimp, Butternut Shrimp Bisque, Veal Sweetbreads, Pan-Roasted Pork Chop, Roast Duck, Brigtsen's Seafood Platter, Sauteed Veal and New York Strip. Also skip the Broiled Gulf Fish - the crab crust and lemon crab sauce are the dish, not a garnish you can omit.",
   "kosher_style_fit": "Not kosher, but easy to eat kosher-style: two salads, three finned-fish mains, an eggplant parmesan and four vegetarian desserts all qualify. Flag no-shellfish/no-pork and the fish plates can be dressed simply.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Cajun/Creole",
    "Southern",
    "Seafood",
    "Fine dining"
   ],
   "reserve_priority": true,
   "website": "https://brigtsens.com",
   "reserveUrl": null,
   "photoUrl": null,
   "menu_source": "https://brigtsens.com/new-orleans-riverbend-brigtsen-s-food-menu",
   "menu_confidence": "verified"
  },
  {
   "id": "bywater-american-bistro",
   "name": "Bywater American Bistro",
   "district": "by",
   "area_label": "Bywater (Chartres St)",
   "cuisine": "Caribbean-Creole",
   "vibe": "Chef Nina Compton's design-forward Bywater room (sister to Compere Lapin), blending Caribbean, Creole and Italian on a nightly-changing menu with a natural-wine bent. Buzzy and stylish.",
   "price": "$$$",
   "rating": 4.6,
   "rating_note": "Historically ~4.6-4.7 on Google/Yelp. IMPORTANT: multiple listings (Yelp) now flag this location as permanently CLOSED (reported mid-2025) - verify it is operating before planning around it.",
   "lat": 29.9639,
   "lng": -90.0537,
   "dinner_estimate": "$50-70 per person for an appetizer plus an entree, before drinks",
   "menu": [
    {
     "item": "Chopped Salad",
     "price": "$15",
     "course": "starter",
     "note": "Buttermilk dressing, parmesan crisp"
    },
    {
     "item": "Warm Olives",
     "price": "$6",
     "course": "starter",
     "note": "Chili flake, rosemary"
    },
    {
     "item": "Fish Pate",
     "price": "$12",
     "course": "starter",
     "note": "Served with rosemary fry bread; confirm the fish used is finned (it is a finned-fish pate)"
    },
    {
     "item": "Burrata",
     "price": "$19",
     "course": "starter",
     "note": "Marinated beets, collard greens pesto, garlic bread"
    },
    {
     "item": "Ricotta Tart",
     "price": "$19",
     "course": "starter",
     "note": "Hazelnut honey, arugula salad"
    },
    {
     "item": "Spaghetti",
     "price": "$21",
     "course": "main",
     "note": "Tomato, basil - vegetarian as served"
    },
    {
     "item": "Semolina Gnocchi a la Nona",
     "price": "$24",
     "course": "main",
     "note": "Vegetarian pasta entree"
    },
    {
     "item": "Whole Branzino",
     "price": "$36",
     "course": "main",
     "note": "Fennel, cauliflower puree, caper salmoriglio"
    },
    {
     "item": "BABs Tiramisu",
     "price": "$11",
     "course": "dessert",
     "note": "From the dessert menu (Dessert-Menu-3.30.25)"
    },
    {
     "item": "Apple and Olive Oil Cake",
     "price": "$10",
     "course": "dessert",
     "note": "Apple ice cream, brown butter apples"
    },
    {
     "item": "Chocolate Cake",
     "price": "$11",
     "course": "dessert",
     "note": "Spiced ganache, satsuma ice cream"
    },
    {
     "item": "Daily Selection of Ice Cream and Sorbet",
     "price": "$7",
     "course": "dessert"
    },
    {
     "item": "Piedmont Soda",
     "price": "$9",
     "course": "drink",
     "note": "Spirit-free cocktail: Giffard aperitif, orange, lemon soda"
    },
    {
     "item": "Tuscan Garden",
     "price": "$9",
     "course": "drink",
     "note": "Spirit-free cocktail: mint, basil, grapefruit, lime, soda"
    },
    {
     "item": "Phony Negroni",
     "price": "$9",
     "course": "drink",
     "note": "Spirit-free (St. Agrestis Distillery); also $8 during Aperitivo Hour 5:30-7:00"
    }
   ],
   "avoid_note": "Skip the Blackened Octopus, Seafood Fritto Misto, Spicy Pork Meatballs, Cavatelli with shrimp, and Wagyu Beef Lasagna - all house favorites but off-limits",
   "kosher_style_fit": "Not kosher, but very friendly to a finned-fish + vegetarian diner: snapper and two tuna dishes plus a deep bench of vegetable starters, sides and desserts. Watch for pork in the antipasto/baked beans and shrimp/fish sauce in a few dishes.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Latin",
    "Cajun/Creole",
    "Seafood",
    "Brunch"
   ],
   "reserve_priority": false,
   "website": "http://bywateramericanbistro.com",
   "reserveUrl": null,
   "photoUrl": null,
   "menu_source": "https://babs-nola.com/wp-content/uploads/2025/05/BABs-New-Menu-5.3.25-WEB.pdf",
   "menu_confidence": "verified"
  },
  {
   "id": "paladar-511",
   "name": "Paladar 511",
   "district": "fq",
   "area_label": "Faubourg Marigny",
   "cuisine": "Italian (wood-fired, Latin-inflected)",
   "vibe": "Buzzy, art-filled Marigny bistro built around an open wood-fired oven, with a Latin-Italian bent. Tables sit close and the room hums—romantic but lively.",
   "price": "$$$",
   "rating": 4.5,
   "rating_note": "Google ~4.5 (1,000+ reviews); a Marigny favorite for wood-fired pizza and handmade pasta. Uses Resy, so OpenTable shows no reviews.",
   "lat": 29.9646,
   "lng": -90.0554,
   "dinner_estimate": "$45-60 per person for a small plate plus a pizza or large plate, before drinks",
   "menu": [
    {
     "item": "Hamachi Crudo",
     "price": "$18",
     "course": "starter",
     "note": "Tomatillo aguachile, summer peppers, avocado, crispy yucca - raw eligible fish"
    },
    {
     "item": "Ensalata Tre Colori",
     "price": "$14",
     "course": "starter",
     "note": "Lemon, anchovy, parmesan, olio verde (add white anchovy +4)"
    },
    {
     "item": "Local Lettuces",
     "price": "$15",
     "course": "starter",
     "note": "Fennel, cucumber, olives, feta, garlic-dill dressing, sunflower seed picada - marked vegetarian"
    },
    {
     "item": "Charred Okra",
     "price": "$15",
     "course": "starter",
     "note": "Blistered cherry tomatoes, calabrian chili, breadcrumbs, mint yogurt"
    },
    {
     "item": "Compressed Melons",
     "price": "$16",
     "course": "starter",
     "note": "Burrata, cherry tomatoes, red onion vinaigrette, pistachios, mint - marked vegetarian"
    },
    {
     "item": "Cacio E Pepe",
     "price": "$17",
     "course": "starter",
     "note": "Radiatore, pecorino, black pepper - listed under Small Plates, marked vegetarian"
    },
    {
     "item": "Cornmeal Zucchini Bread",
     "price": "$8",
     "course": "starter",
     "note": "Ricotta, salted butter - marked vegetarian"
    },
    {
     "item": "Margherita",
     "price": "$16",
     "course": "main",
     "note": "Pizza: tomato sauce, mozzarella, basil - order plain, skip the pepperoni/sausage add-ons"
    },
    {
     "item": "Spicy San Marzano Tomato Sauce",
     "price": "$18",
     "course": "main",
     "note": "Pizza: mascarpone, wild arugula"
    },
    {
     "item": "Roasted Mushroom",
     "price": "$21",
     "course": "main",
     "note": "Pizza: buttered leek, fontina, rosemary, lemon"
    },
    {
     "item": "Quattro Formaggio",
     "price": "$19",
     "course": "main",
     "note": "Pizza: parmesan, mozzarella, gorgonzola, mascarpone, chive oil - marked vegetarian"
    },
    {
     "item": "Spinach Cannelloni",
     "price": "$26",
     "course": "main",
     "note": "Ricotta, walnut pesto, red pepper emulsion - marked vegetarian"
    },
    {
     "item": "Seared Snapper",
     "price": "$33",
     "course": "main",
     "note": "Iacopi beans, blistered cherry tomatoes, zucchini, basil hollandaise, black garlic breadcrumbs"
    },
    {
     "item": "Mississippi Blueberry Pie",
     "price": "$13",
     "course": "dessert",
     "note": "Honey-lavender ice cream"
    },
    {
     "item": "Cocoa Loaf",
     "price": "$13",
     "course": "dessert",
     "note": "Chocolate granola, malt & blackberry swirl ice cream"
    },
    {
     "item": "Buttermilk Panna Cotta",
     "price": "$13",
     "course": "dessert",
     "note": "Plum curd, graham cookie"
    }
   ],
   "avoid_note": "Skip the Squid Ink Spaghetti with gulf shrimp, Arancini with short rib ragu, Wagyu Beef Tartare, Smoked Duck Toast, the Farm Egg pizza (bacon), Pappardelle with pork sausage ragu, and Pork Saltimbocca",
   "kosher_style_fit": "Good fit—clear finned fish (hamachi, snapper) plus many cheese and vegetable plates and pizzas. Shellfish and pork are cooked in the same kitchen, so expect cross-contact; not certified kosher.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Italian",
    "Pizza",
    "Wine bar"
   ],
   "website": "https://www.paladar511.com",
   "reserveUrl": "https://resy.com/cities/new-orleans-la/venues/paladar-511",
   "reserve_priority": true,
   "photoUrl": null,
   "menu_source": "https://www.paladar511.com/dinner-menu",
   "menu_confidence": "verified"
  },
  {
   "id": "namese",
   "name": "Namese",
   "district": "cp",
   "area_label": "Mid-City (Tulane Ave)",
   "cuisine": "Vietnamese",
   "vibe": "Bright, casual Mid-City Vietnamese spot mixing a pho-and-rice-plate menu with a cafe of Vietnamese coffee and bubble tea. Quick, inexpensive, and easygoing.",
   "price": "$$",
   "rating": 4.3,
   "rating_note": "Google ~4.3 / Yelp ~4.0; well-liked neighborhood Vietnamese known for pho, tofu plates, and bubble tea.",
   "lat": 29.9603,
   "lng": -90.0972,
   "dinner_estimate": "$20-30 per person for an appetizer plus an entree with a drink",
   "menu": [
    {
     "item": "Five Spice Fried Tofu",
     "price": "$8",
     "course": "starter",
     "note": "Crispy fried tofu cubes"
    },
    {
     "item": "Crepe Lettuce Wrap/Banh Xeo",
     "price": "$11",
     "course": "starter",
     "note": "Ask for the vegan crepe - the standard version has shrimp and pork"
    },
    {
     "item": "SPRING-ROLLS (2 ROLLS) - GRILLED SALMON",
     "price": "$10",
     "course": "starter",
     "note": "Rice paper, vermicelli, bean sprouts, herbs, peanut sauce"
    },
    {
     "item": "SPRING-ROLLS (2 ROLLS) - TOFU",
     "price": "$7",
     "course": "starter",
     "note": "Served with peanut sauce; ask to skip the fish sauce if you want it fully vegetarian"
    },
    {
     "item": "SPRING-ROLLS (2 ROLLS) - VEGAN",
     "price": "$6",
     "course": "starter"
    },
    {
     "item": "Papaya Salad",
     "price": "$10",
     "course": "starter",
     "note": "Ask without the pork belly and grilled shrimp - julienned papaya with house dressing"
    },
    {
     "item": "Asian Slaw",
     "price": "$10",
     "course": "starter",
     "note": "Ask without the pork belly and grilled shrimp - fresh herbs with house dressing"
    },
    {
     "item": "Vegan Phở",
     "price": "$10",
     "course": "main",
     "note": "Phở Ăn Chay - vegan broth with bok choy, cauliflower, broccoli, carrots, onions, mushroom (the other phos use beef or chicken bone broth)"
    },
    {
     "item": "ROASTED HERB SALMON",
     "price": "$16",
     "course": "main",
     "note": "Salmon rang thảo mộc - roasted with fresh Asian herbs, served with jasmine rice and pickled veggies; skip the house special soup"
    },
    {
     "item": "VEGGIE SOTCA",
     "price": "$11",
     "course": "main",
     "note": "Cà tím sotca - sauteed veggies in Vietnamese-style tomato sauce with fresh herbs"
    },
    {
     "item": "TOFU & MUSHROOMS",
     "price": "$11",
     "course": "main",
     "note": "Vermicelli noodle bowl with lettuce, herbs, bean sprouts, crushed peanuts"
    },
    {
     "item": "Jasmine Rice",
     "price": "$2",
     "course": "side"
    },
    {
     "item": "Fried Egg",
     "price": "$2",
     "course": "side"
    },
    {
     "item": "‘Namese’ Strawberry Limeade",
     "price": "$4",
     "course": "drink",
     "note": "Freshly squeezed limeade blended with house strawberry puree"
    },
    {
     "item": "Limade",
     "price": "$3.5",
     "course": "drink",
     "note": "Ðá Chanh"
    },
    {
     "item": "Vietnamese Iced Coffee",
     "price": "$4.5/6",
     "course": "drink",
     "note": "Chicory coffee drip filtered over condensed milk and ice"
    },
    {
     "item": "Iced Jasmine Tea",
     "price": "$3",
     "course": "drink"
    },
    {
     "item": "Hot Jasmine Tea",
     "price": "$3/4.5",
     "course": "drink"
    }
   ],
   "avoid_note": "Skip the signature Short Rib Pho, Seafood Pho, Fried Shrimp Banh Mi, Lamb Lollipops, Crab Rangoon, Mussels, and the Coconut Lemongrass Curry (shrimp-based broth even with tofu)",
   "kosher_style_fit": "Workable but tofu/vegetable-focused with no finned-fish entrée. Broths and woks are shared with pork and shellfish, so confirm the vegan pho and tofu prep; not certified kosher.",
   "tags": [
    "veg"
   ],
   "filters": [
    "Casual",
    "Vegetarian"
   ],
   "website": null,
   "reserveUrl": null,
   "reserve_priority": false,
   "photoUrl": null,
   "menu_source": "https://www.namese.net/menu/",
   "menu_confidence": "verified"
  },
  {
   "id": "lolas",
   "name": "Lola's",
   "district": "cp",
   "area_label": "Esplanade Ridge / Mid-City",
   "cuisine": "Spanish",
   "vibe": "Cozy, no-frills Esplanade institution for made-to-order paella and Spanish tapas; BYOB and cash-friendly. Warm, family-run, and frequently packed.",
   "price": "$$",
   "rating": 4.6,
   "rating_note": "OpenTable 4.6 (840+ reviews); Google ~4.4. Long-running Esplanade Spanish BYOB praised for its paella.",
   "lat": 29.9776,
   "lng": -90.0808,
   "dinner_estimate": "$45-60 per person for a tapa or soup plus a fish or vegetarian main, before drinks, tax and tip",
   "menu": [
    {
     "item": "Ceviche",
     "price": "$21.85",
     "course": "starter",
     "note": "Normally mahimahi and shrimp cured in citrus juice - the menu explicitly offers it mahi-mahi only, so order it that way"
    },
    {
     "item": "Garlic Mushrooms",
     "price": "$12.65",
     "course": "starter",
     "note": "Crimini mushrooms sauteed in garlic, olive oil and fresh basil - vegetarian"
    },
    {
     "item": "Veggie Tapa of the Day",
     "price": "MP",
     "course": "starter",
     "note": "Rotating vegetarian tapa; market price - ask what it is that night"
    },
    {
     "item": "Pistolette",
     "price": "$0.65",
     "course": "starter",
     "note": "House bread served with Lola's famous garlic alioli spread; priced per pistolette"
    },
    {
     "item": "Gazpacho",
     "price": "$10.35",
     "course": "starter",
     "note": "Traditional Andalusian blended vegetable soup, served chilled - vegetarian"
    },
    {
     "item": "Ajoblanco",
     "price": "$11.50",
     "course": "starter",
     "note": "Traditional Andalusian chilled almond soup - vegetarian"
    },
    {
     "item": "Lentil Soup",
     "price": "$9.20",
     "course": "starter",
     "note": "Vegetarian soup seasoned with garlic and ginger"
    },
    {
     "item": "House Green Salad",
     "price": "$13.80",
     "course": "starter",
     "note": "Red and green leaf lettuce, broccoli, peppers, cucumber, zucchini, green olives and feta with house vinaigrette - skip the add-chicken option; avocado add-on is fine"
    },
    {
     "item": "Caesar Salad",
     "price": "$11.50",
     "course": "starter",
     "note": "Romaine with croutons and creamy Caesar dressing - order plain, without the chicken or shrimp add-on"
    },
    {
     "item": "Tomato Basil",
     "price": "$11.50",
     "course": "starter",
     "note": "Tomato slices with fresh mozzarella, basil, olive oil and balsamic - vegetarian"
    },
    {
     "item": "Seasonal Salad",
     "price": "MP",
     "course": "starter",
     "note": "Market price seasonal salad - confirm the night's garnish is meat-free"
    },
    {
     "item": "Ruby Red Rainbow Trout",
     "price": "$29.90",
     "course": "main",
     "note": "Seared trout with lemon pepper sauce, served with basmati rice and fresh vegetables"
    },
    {
     "item": "Yellow Fin Tuna",
     "price": "$32.20",
     "course": "main",
     "note": "Seared tuna with spicy mojo sauce, served with mashed potatoes or rice and fresh vegetables"
    },
    {
     "item": "Atlantic Salmon",
     "price": "$27.60",
     "course": "main",
     "note": "Seared salmon with lemon pepper sauce, served with basmati rice and fresh vegetables"
    },
    {
     "item": "Pisto",
     "price": "$23.00",
     "course": "main",
     "note": "Portabella mushroom stuffed with Castilian vegetables, served with black beans, rice and asparagus - vegetarian"
    },
    {
     "item": "Spinach linguini",
     "price": "$25.30",
     "course": "main",
     "note": "Artichokes, kalamata olives, sun-dried tomatoes and house pesto - order plain, without the chicken or shrimp add-on"
    },
    {
     "item": "Vegetarian",
     "price": "$23.00",
     "course": "main",
     "note": "Vegetarian paella or fideua - seasonal vegetables with garlic, saffron and herbs; sizes S/M/L/XL price up per person and it takes up to 45 minutes to prepare"
    },
    {
     "item": "Pan Con Tomate",
     "price": "$10.00",
     "course": "starter",
     "note": "Brunch menu: tomato basil salsa, toasted house-made bread, Manchego cheese - vegetarian"
    },
    {
     "item": "Brunchy salada",
     "price": "$18.00",
     "course": "starter",
     "note": "Brunch menu: mixed aromatic greens, peaches, goat cheese, pecans, dried figs, citrus vinaigrette"
    },
    {
     "item": "Andalusia Omelette",
     "price": "$18.00",
     "course": "main",
     "note": "Brunch menu: artichokes, kalamata olives, goat cheese, marinated tomato, Mornay sauce, salad - vegetarian"
    },
    {
     "item": "Persian Love Cake Waffle",
     "price": "$18.00",
     "course": "main",
     "note": "Brunch menu: rose water cardamom waffle, pistachio whip, rose water saffron frosting - vegetarian"
    },
    {
     "item": "Flan",
     "price": "$9.20",
     "course": "dessert",
     "note": "Traditional Spanish caramel custard"
    },
    {
     "item": "Almond Nougat",
     "price": "$11.50",
     "course": "dessert",
     "note": "Homemade almond nougat ice cream"
    },
    {
     "item": "Chuflan",
     "price": "$10.35",
     "course": "dessert",
     "note": "Flourless chocolate delight"
    },
    {
     "item": "Espresso",
     "price": "$4.00",
     "course": "drink",
     "note": "From the beverages list on the drink menu"
    },
    {
     "item": "Capuccino",
     "price": "$5.00",
     "course": "drink",
     "note": "From the beverages list on the drink menu"
    },
    {
     "item": "Iced Tea",
     "price": "$3.00",
     "course": "drink",
     "note": "From the beverages list on the drink menu"
    },
    {
     "item": "Juice",
     "price": "$3.00",
     "course": "drink",
     "note": "From the beverages list on the drink menu"
    }
   ],
   "avoid_note": "Skip the house signatures built on shellfish and pork: Garlic Shrimp, Crabmeat Tropical, Mussels in Vinaigrette, Calamari Steak, Mariscos soup, Fabada (ham and sausage), Garlic Soup (chicken broth), Shrimp Pasta, and the Seafood, Meat and Combination paellas. On brunch, skip the Oyster Pan Con Tomate, Lola's Shrimp & Grits, Fabada Jerk Chicken Waffle, Basic Breakfast, Bocadillo, Lamb Burger, Short Rib & Grits and Steak & Eggs.",
   "kosher_style_fit": "Solid for finned fish (trout, tuna, salmon) and vegetarian tapas, soups, salads, and the vegetarian paella—but shellfish is heavily used (paella pans, garlic shrimp), so request a clean pan. Not certified kosher.",
   "tags": [
    "fish",
    "veg",
    "book"
   ],
   "filters": [
    "Latin",
    "Casual",
    "Vegetarian"
   ],
   "website": "https://lolasneworleans.com",
   "reserveUrl": "https://tables.toasttab.com/restaurants/d688ca43-a6b8-4715-a7b3-42439f49d602/findTime",
   "reserve_priority": true,
   "photoUrl": null,
   "menu_source": "https://lolasneworleans.com/new-orleans-lola-s-food-menu",
   "menu_confidence": "approximate"
  }
 ],
 "schedule": [
  {
   "day": "Fri",
   "when": "2026-07-31T09:25",
   "time": "09:25",
   "title": "Land at MSY",
   "where": "Louis Armstrong International",
   "kind": "travel",
   "booked": true
  },
  {
   "day": "Fri",
   "when": "2026-07-31T10:00",
   "time": "10:00",
   "title": "Taxi to the hotel",
   "where": "Flat rate, ~25 min",
   "kind": "travel",
   "cost": "$36 for the two of you"
  },
  {
   "day": "Fri",
   "when": "2026-07-31T10:30",
   "time": "10:30",
   "title": "Drop the bags",
   "where": "Hampton Inn — check-in is not until 3pm",
   "kind": "admin"
  },
  {
   "day": "Fri",
   "when": "2026-07-31T10:45",
   "time": "10:45",
   "title": "Beignets at Café du Monde",
   "where": "French Market · 8 min walk",
   "kind": "food",
   "nav": "#/r/cafe-du-monde"
  },
  {
   "day": "Fri",
   "when": "2026-07-31T11:30",
   "time": "11:30",
   "title": "Historic New Orleans Collection",
   "where": "Royal St · free, air-conditioned",
   "kind": "sight",
   "nav": "#/s/historic-new-orleans-collection",
   "ac": true
  },
  {
   "day": "Fri",
   "when": "2026-07-31T13:00",
   "time": "13:00",
   "title": "Lunch — Napoleon House courtyard",
   "where": "Chartres St · shaded courtyard",
   "kind": "food",
   "nav": "#/r/napoleon-house"
  },
  {
   "day": "Fri",
   "when": "2026-07-31T14:15",
   "time": "14:15",
   "title": "Pharmacy Museum",
   "where": "Chartres St · small and cool",
   "kind": "sight",
   "nav": "#/s/pharmacy-museum",
   "ac": true
  },
  {
   "day": "Fri",
   "when": "2026-07-31T15:00",
   "time": "15:00",
   "title": "Check in · pool and a lie-down",
   "where": "Peak heat and the likeliest storm window",
   "kind": "rest",
   "ac": true
  },
  {
   "day": "Fri",
   "when": "2026-07-31T17:30",
   "time": "17:30",
   "title": "Jackson Square & Royal St",
   "where": "Golden hour, once the sun drops",
   "kind": "sight",
   "nav": "#/s/jackson-square"
  },
  {
   "day": "Fri",
   "when": "2026-07-31T18:00",
   "time": "18:00",
   "title": "Dinner — Galatoire's",
   "where": "Bourbon St · 1 min from the hotel",
   "kind": "food",
   "nav": "#/r/galatoires",
   "reserve": true,
   "note": "Mention the 8pm tour when you sit down — you have about 1h40, which is enough here but not leisurely."
  },
  {
   "day": "Fri",
   "when": "2026-07-31T19:45",
   "time": "19:45",
   "kind": "travel",
   "title": "Walk to the Voodoo Lounge",
   "where": "718 N Rampart St, corner of Orleans · ~7 min from Galatoire's",
   "note": "Check in at the box office inside. Have the QR ticket open before you get there.",
   "cost": "Free"
  },
  {
   "day": "Fri",
   "when": "2026-07-31T20:00",
   "time": "20:00",
   "kind": "tour",
   "title": "Ghost & Vampire Combo tour",
   "where": "French Quarter Phantoms · departs the Voodoo Lounge",
   "note": "Runs 1 hour 45 min, so you are back out around 9:45pm. Booked for 2 adults under Avi Bar.",
   "booked": true,
   "cost": "Paid · 2× adult",
   "star": true
  },
  {
   "day": "Fri",
   "when": "2026-07-31T21:45",
   "time": "21:45",
   "kind": "rest",
   "title": "Tour ends — nightcap or straight back",
   "where": "You are 6 min from the hotel, or walk down to Frenchmen St",
   "cost": "Free"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T08:30",
   "time": "08:30",
   "title": "Coffee and something quick",
   "where": "Near the hotel",
   "kind": "food"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T09:15",
   "time": "09:15",
   "title": "Head to the Warehouse District",
   "where": "20-min walk, or streetcar / short Uber",
   "kind": "travel",
   "cost": "Walk free · streetcar $1.25 · Uber $8–10"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T09:30",
   "time": "09:30",
   "title": "The National WWII Museum",
   "where": "Magazine St · give it 3 hours, fully AC",
   "kind": "sight",
   "nav": "#/s/national-wwii-museum",
   "ac": true,
   "cost": "$36pp — free Aug 1 on a BofA card"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T13:00",
   "time": "13:00",
   "title": "Lunch — Pêche",
   "where": "1 min from the museum door",
   "kind": "food",
   "nav": "#/r/peche-seafood-grill"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T14:30",
   "time": "14:30",
   "title": "Ogden Museum of Southern Art",
   "where": "Literally across the street",
   "kind": "sight",
   "nav": "#/s/ogden-museum",
   "ac": true
  },
  {
   "day": "Sat",
   "when": "2026-08-01T16:00",
   "time": "16:00",
   "title": "Contemporary Arts Center",
   "where": "Camp St · or the Southern Jewish Experience next door",
   "kind": "sight",
   "nav": "#/s/contemporary-arts-center",
   "ac": true
  },
  {
   "day": "Sat",
   "when": "2026-08-01T17:30",
   "time": "17:30",
   "title": "Sit down, cold drink",
   "where": "You are already where the evening happens",
   "kind": "rest"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T18:00",
   "time": "18:00",
   "title": "White Linen Night",
   "where": "Julia St · free · 4-min walk from the museums",
   "kind": "event",
   "star": true,
   "warn": "61% chance of storms this evening — it runs anyway, locals just carry on"
  },
  {
   "day": "Sat",
   "when": "2026-08-01T21:00",
   "time": "21:00",
   "title": "Uber back to the hotel",
   "where": "Or walk it in 20 min",
   "kind": "travel",
   "cost": "$8–10"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T09:30",
   "time": "09:30",
   "title": "Slow start",
   "where": "Rain is likely before 1pm — no reason to rush out",
   "kind": "rest",
   "warn": "76% chance of rain, mostly before 1pm"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T10:45",
   "time": "10:45",
   "title": "St Charles streetcar out",
   "where": "Canal St → Washington Ave · 25 min, shaded",
   "kind": "travel",
   "nav": "#/s/st-charles-streetcar",
   "cost": "$1.25 · or a $3 all-day pass"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T11:30",
   "time": "11:30",
   "title": "Commander's Palace jazz brunch",
   "where": "Washington Ave · indoors whatever the weather",
   "kind": "food",
   "nav": "#/r/commanders-palace",
   "reserve": true,
   "star": true
  },
  {
   "day": "Sun",
   "when": "2026-08-02T13:15",
   "time": "13:15",
   "title": "Garden District mansions",
   "where": "Deep oak shade — rain should be easing by now",
   "kind": "sight",
   "nav": "#/s/garden-district-mansions"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T14:30",
   "time": "14:30",
   "title": "Magazine Street",
   "where": "4 min away · AC shops, your storm bolt-hole",
   "kind": "sight",
   "nav": "#/s/magazine-street",
   "ac": true
  },
  {
   "day": "Sun",
   "when": "2026-08-02T15:45",
   "time": "15:45",
   "title": "Back to the Quarter",
   "where": "Streetcar, or Uber if you are flagging",
   "kind": "travel",
   "cost": "Streetcar $1.25 · Uber $13–15"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T16:15",
   "time": "16:15",
   "title": "Rest and change",
   "where": "Long evening ahead",
   "kind": "rest"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T17:45",
   "time": "17:45",
   "title": "Satchmo SummerFest — Day 2",
   "where": "Old U.S. Mint · free · 16-min walk",
   "kind": "event",
   "nav": "#/satchmo"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T18:40",
   "time": "18:40",
   "title": "Kermit Ruffins — Armstrong tribute",
   "where": "Festival closer. This is the one.",
   "kind": "music",
   "nav": "#/satchmo",
   "star": true
  },
  {
   "day": "Sun",
   "when": "2026-08-02T20:00",
   "time": "20:00",
   "title": "Frenchmen Street",
   "where": "3-min walk from the Mint · clubs mostly no cover",
   "kind": "music",
   "nav": "#/s/frenchmen-street"
  },
  {
   "day": "Sun",
   "when": "2026-08-02T22:30",
   "time": "22:30",
   "title": "Walk or Uber home",
   "where": "0.9 mi",
   "kind": "travel",
   "cost": "Free · or $8–10"
  },
  {
   "day": "Mon",
   "when": "2026-08-03T09:30",
   "time": "09:30",
   "title": "Last breakfast",
   "where": "Café du Monde or Bearcat",
   "kind": "food",
   "nav": "#/r/cafe-du-monde"
  },
  {
   "day": "Mon",
   "when": "2026-08-03T11:00",
   "time": "11:00",
   "title": "Check out · bags to the front desk",
   "where": "They will hold them all day",
   "kind": "admin"
  },
  {
   "day": "Mon",
   "when": "2026-08-03T11:30",
   "time": "11:30",
   "title": "Steamboat Natchez harbour cruise",
   "where": "2 hrs · covered decks and AC · optional",
   "kind": "sight",
   "nav": "#/s/steamboat-natchez",
   "cost": "$30.52 on Groupon"
  },
  {
   "day": "Mon",
   "when": "2026-08-03T13:45",
   "time": "13:45",
   "title": "Lunch in the Quarter",
   "where": "Whatever you have not tried yet",
   "kind": "food"
  },
  {
   "day": "Mon",
   "when": "2026-08-03T15:00",
   "time": "15:00",
   "title": "Royal St gifts · Sazerac House",
   "where": "Free, air-conditioned, 11 min away",
   "kind": "sight",
   "nav": "#/s/sazerac-house",
   "ac": true
  },
  {
   "day": "Mon",
   "when": "2026-08-03T16:30",
   "time": "16:30",
   "title": "Collect bags, taxi to MSY",
   "where": "Leave 2h15 before the flight",
   "kind": "travel",
   "cost": "$36 flat"
  },
  {
   "day": "Mon",
   "when": "2026-08-03T18:59",
   "time": "18:59",
   "title": "Flight home",
   "where": "Delta · MSY → home",
   "kind": "travel",
   "booked": true
  }
 ],
 "days": [
  {
   "day": "Fri",
   "date": "Jul 31",
   "area": "French Quarter",
   "district": "fq",
   "headline": "Land, drop bags, Quarter on foot",
   "base": "One base all day: everything is within a 10-minute walk of the hotel.",
   "plan": "Land 9:25a → bags at the hotel → beignets → <b>AC museums through the worst heat</b> → check in 3p, pool → Jackson Sq &amp; Royal St at golden hour → Galatoire's → 8p ghost tour.",
   "ac_block": "11a–3p, indoors and cool: Historic New Orleans Collection (free) → Pharmacy Museum → Sazerac House (free). Check-in is not until 3p, so this is where the hot hours go.",
   "rain": "All three midday stops are indoors — a thunderstorm changes nothing.",
   "walk_total": "~1.5 mi total, in short hops. No transit needed after the airport.",
   "legs": [
    {
     "mode": "taxi",
     "label": "MSY → hotel",
     "detail": "Official flat rate, ~25 min. Uber is $25–45 and surges on arrivals.",
     "cost": "$36 flat (1–2 people)"
    },
    {
     "mode": "walk",
     "label": "Everything else",
     "detail": "Café du Monde 8 min · Historic NO Collection 5 min · Galatoire's 1 min · ghost tour meets in the Quarter",
     "cost": "Free"
    }
   ],
   "forecast_date": "2026-07-31"
  },
  {
   "day": "Sat",
   "date": "Aug 1",
   "area": "Warehouse & Arts District — all day",
   "district": "wh",
   "headline": "One neighbourhood, museums to gallery night",
   "base": "Park yourselves in the Warehouse District. Every stop today is within 0.2 mi of the next — the museums are literally across the street from each other, and White Linen Night happens right there.",
   "plan": "9:30a WWII Museum (3 hrs, AC) → lunch at Pêche <i>1 min away</i> → Ogden Museum <i>across the street</i> / CAC / Southern Jewish Experience → <b>6–9p White Linen Night on Julia St, a 4-min walk</b> → home.",
   "ac_block": "The whole midday is museums — WWII, Ogden, CAC and MSJE are all air-conditioned and all within a couple of blocks. This is the single best heat-and-rain day of the trip.",
   "rain": "Bulletproof: you can spend 11a–6p indoors without moving more than two blocks. White Linen Night runs rain or shine (it is a street party — locals just keep going).",
   "walk_total": "~0.4 mi between stops, plus one 20-min leg each way (or skip that on transit).",
   "legs": [
    {
     "mode": "transit",
     "label": "Hotel → Warehouse District",
     "detail": "20-min walk if you head out by 9a while it is still bearable; otherwise St Charles/Loyola streetcar or a short Uber.",
     "cost": "Walk free · streetcar $1.25 · Uber $8–10"
    },
    {
     "mode": "walk",
     "label": "Between every stop",
     "detail": "WWII ↔ Ogden 0.02 mi · WWII ↔ Pêche 0.06 mi · museums ↔ Julia St galleries 0.18 mi",
     "cost": "Free"
    },
    {
     "mode": "uber",
     "label": "Julia St → hotel (~9:30p)",
     "detail": "Worth it after a full day on your feet; 20-min walk if you would rather.",
     "cost": "$8–10"
    }
   ],
   "note": "Satchmo Day 1 is deliberately not here. It is free both days, and Day 2 has the Kermit Ruffins closer — chasing both days would add a 1.4-mi round trip across town in the worst heat for something you are already seeing. If you have energy to burn, catch an hour of it Sunday afternoon instead.",
   "forecast_date": "2026-08-01"
  },
  {
   "day": "Sun",
   "date": "Aug 2",
   "area": "Garden District, then Satchmo",
   "district": "gd",
   "headline": "One trip out, one trip back, then music all evening",
   "base": "Two clusters, one journey between them. Garden District in the morning (shaded), the Quarter's downriver edge all evening.",
   "plan": "10:45a St Charles streetcar out → 11:30a Commander's brunch → Garden District mansions + Magazine St <i>4 min away</i> → back for a rest → walk to the Old Mint → <b>⭐ 6:40p Kermit Ruffins</b> → <b>Frenchmen St, a 3-min walk</b>.",
   "ac_block": "Magazine St is your bolt-hole — a long run of air-conditioned shops and cafés right by Commander's. The Garden District walk itself is deep oak shade, which makes it one of the few outdoor things worth doing at midday.",
   "rain": "If it storms: Magazine St shops, or the streetcar back early and rest before Satchmo. Kermit is at 6:40p under the Mint's stage cover, and Frenchmen St is all indoors.",
   "walk_total": "~2 mi of walking, but split into two easy clusters — nothing over 0.2 mi between stops.",
   "legs": [
    {
     "mode": "streetcar",
     "label": "Canal St → Washington Ave",
     "detail": "St Charles line, ~25 min. Shaded, breezy, and a genuine sight in its own right — better than an Uber here.",
     "cost": "$1.25 each way · $3 all-day Jazzy Pass covers the whole day"
    },
    {
     "mode": "walk",
     "label": "Commander's → Magazine St",
     "detail": "0.18 mi, 4 min",
     "cost": "Free"
    },
    {
     "mode": "streetcar",
     "label": "Back to the Quarter (~3:30p)",
     "detail": "Or Uber if you are flagging — it is 2.1 mi.",
     "cost": "Streetcar $1.25 · Uber $13–15"
    },
    {
     "mode": "walk",
     "label": "Hotel → Old Mint → Frenchmen St",
     "detail": "Hotel → Mint 16 min; Mint → Frenchmen 0.13 mi, 3 min. Do this on foot in the evening cool.",
     "cost": "Free"
    },
    {
     "mode": "uber",
     "label": "Frenchmen St → hotel (late)",
     "detail": "0.9 mi — walkable, but easy to grab a car late at night.",
     "cost": "$8–10"
    }
   ],
   "forecast_date": "2026-08-02"
  },
  {
   "day": "Mon",
   "date": "Aug 3",
   "area": "French Quarter, then home",
   "district": "fq",
   "headline": "Cool, covered, and near the hotel",
   "base": "Checkout is 11a and the flight is 6:59p, so leave the bags at the hotel and stay inside the Quarter.",
   "plan": "11a checkout, bags with the front desk → 11:30a Steamboat Natchez harbour cruise (2 hrs, covered) → lunch → last Royal St gifts / Sazerac House → 4:30p taxi to MSY.",
   "ac_block": "The Natchez is the smart call for a hot, possibly wet afternoon: covered decks, AC saloon, a breeze on the river, and it kills two hours without you carrying anything.",
   "rain": "The cruise sails in the rain, and Royal St has deep balcony cover most of the way. Nothing today depends on clear skies.",
   "walk_total": "~1 mi, all short hops from the hotel.",
   "legs": [
    {
     "mode": "walk",
     "label": "Hotel → Natchez dock → Royal St",
     "detail": "Dock is 8 min from the hotel; Royal St is right there afterwards.",
     "cost": "Free"
    },
    {
     "mode": "taxi",
     "label": "Hotel → MSY (~4:30p)",
     "detail": "Leave 2h15 before the 6:59p flight. Flat rate again.",
     "cost": "$36 flat (1–2 people)"
    }
   ],
   "forecast_date": "2026-08-03"
  }
 ],
 "bookings": [
  {
   "id": "flights",
   "title": "Flights — Delta",
   "note": "Land 9:25a Fri · depart 6:59p Mon",
   "done": true
  },
  {
   "id": "hotel",
   "title": "Hotel — Hampton Inn",
   "note": "3 nights · in Fri 3pm / out Mon 11am",
   "done": true
  },
  {
   "id": "ghost",
   "title": "Ghost & Vampire Combo — French Quarter Phantoms",
   "note": "Fri 31 Jul 8:00pm · 2× adult · 1h45 · PAID · QR ticket in Wallet · check in at Voodoo Lounge, 718 N Rampart",
   "done": true
  },
  {
   "id": "wwii",
   "title": "WWII Museum",
   "note": "Sat morning · $36/pp (free Aug 1 for BofA cardholders)",
   "done": false
  },
  {
   "id": "galatoires",
   "title": "Galatoire's (Fri dinner)",
   "note": "Reserve on Resy",
   "done": false
  },
  {
   "id": "commanders",
   "title": "Commander's Palace (Sun brunch)",
   "note": "Reserve on Resy",
   "done": false
  },
  {
   "id": "boat",
   "title": "Steamboat cruise (optional)",
   "note": "Mon 11:30am · Natchez $30.52",
   "done": false
  }
 ],
 "fixed": [
  "<b>Flights:</b> land MSY Fri 9:25am · depart Mon 6:59pm",
  "<b>Hotel:</b> check in Fri 3pm · check out Mon 11am",
  "Ghost &amp; Vampire Combo — Fri 8:00pm, check in at Voodoo Lounge, 718 N Rampart <b>(paid, 2× adult)</b>",
  "White Linen Night — Sat 6–9pm",
  "<b style='color:#8a2231'>⭐ Kermit Ruffins — Sun 6:40pm</b>",
  "<b>Reserve:</b> Galatoire's (Fri) · Commander's brunch (Sun) · Steamboat cruise (optional) Mon 11:30am"
 ],
 "tobook": [
  "WWII Museum $36/pp · nationalww2museum.org",
  "Boat — Steamboat Natchez $30.52 · Groupon &nbsp;or&nbsp; Creole Queen $45 · Groupon",
  "Galatoire's (Fri) · Shaya · Commander's brunch (Sun) — Resy",
  "Nothing to book for Satchmo — free entry both days. Sunday 6:40p Kermit Ruffins is the one to be there for."
 ],
 "deals": [
  {
   "t": "BofA “Museums on Us”",
   "d": "WWII Museum FREE Sat Aug 1 for Bank of America / Merrill cardholders — show the card at the desk."
  },
  {
   "t": "Delta Gold Amex",
   "d": "Free 1st checked bag, Main Cabin 1 boarding, 20% back in-flight. Add the card to your SkyMiles profile."
  },
  {
   "t": "Amex app → Offers",
   "d": "Add Delta / hotel / dining / Lyft offers before you spend."
  },
  {
   "t": "Already free",
   "d": "Satchmo (both days), White Linen Night, Frenchmen St, Garden District walk, Historic NO Collection, Sazerac House, Crescent Park, NOMA sculpture garden."
  }
 ],
 "budget": [
  {
   "k": "Activities (deals applied)",
   "v": "$175–205"
  },
  {
   "k": "Food",
   "v": "$400–520"
  },
  {
   "k": "Transport",
   "v": "$135–150"
  },
  {
   "k": "Optional tours (if you add any)",
   "v": "$0–150"
  },
  {
   "k": "Total for two",
   "v": "$710–875",
   "total": true
  }
 ],
 "satchmo": {
  "note": "Free both days · 11:30a–8p at the Old U.S. Mint (Jazz Museum). Theme: Lil Hardin Armstrong.",
  "star": "Sun 6:40 · Kermit Ruffins — Armstrong tribute, festival closer.",
  "sunday": [
   "John Boutté ~12:20",
   "Nayo Jones ~3:00",
   "Don Vappie ~4:40",
   "⭐ Kermit Ruffins ~6:40 (closer)"
  ],
  "saturday": [
   "Charmaine Neville ~1:50",
   "Joe Lastie ~3:00",
   "Yusa ~5:00"
  ],
  "food": "Fried green tomatoes, veggie sides, sno-balls, beignets, or a grilled scaled-fish plate. Skip shrimp, crawfish, andouille, and catfish (no scales)."
 },
 "events": [
  {
   "id": "spotted-cat-friday-jul31",
   "title": "Live Jazz at the Spotted Cat",
   "when": "2026-07-31T18:00",
   "end": "2026-08-01T00:00",
   "where": "The Spotted Cat Music Club, 623 Frenchmen St",
   "category": "music",
   "blurb": "No-cover, tip-the-band trad-jazz and swing at the beloved Spotted Cat. Open 7 days with rotating Friday acts (afternoon, ~6pm and ~10pm sets) — date follows the weekly pattern; verify the day's bands on their calendar.",
   "free": true,
   "cost": null,
   "url": "https://www.spottedcatmusicclub.com/calendar",
   "district": "by",
   "lat": 29.964,
   "lng": -90.057,
   "star": false
  },
  {
   "id": "frenchmen-art-market-fri",
   "title": "Frenchmen Art Market",
   "when": "2026-07-31T18:00",
   "end": "2026-08-01T01:00",
   "where": "619 Frenchmen St (open-air lot), Marigny",
   "category": "market",
   "district": "by",
   "lat": 29.9636,
   "lng": -90.0569,
   "free": true,
   "cost": null,
   "star": false,
   "url": "https://www.frenchmenartmarket.com/",
   "blurb": "Nightly open-air market of local artists and makers in the heart of the Frenchmen Street music strip — jewelry, prints, and crafts under string lights. Open Thu-Sun evenings; hours follow the regular weekly pattern — verify."
  },
  {
   "id": "frenchmen-art-market-friday-jul31",
   "title": "Frenchmen Street Night Art Markets",
   "when": "2026-07-31T19:00",
   "end": "2026-08-01T01:00",
   "where": "Frenchmen Art Bazaar & Palace Market, 619 Frenchmen St",
   "category": "market",
   "blurb": "Open-air night markets of local art, jewelry and crafts amid the Frenchmen music strip. Frenchmen Art Bazaar runs Fri ~6pm-midnight and adjacent Palace Market ~7pm-1am — hours follow the weekly pattern; verify.",
   "free": true,
   "cost": null,
   "url": "https://frenchmenartbazaar.com/",
   "district": "by",
   "lat": 29.9639,
   "lng": -90.0573,
   "star": false
  },
  {
   "id": "bullets-pinettes-fri",
   "title": "Original Pinettes Brass Band at Bullet's",
   "when": "2026-07-31T19:00",
   "end": "2026-07-31T22:00",
   "where": "Bullet's Sports Bar, 2441 A.P. Tureaud Ave, 7th Ward",
   "category": "music",
   "district": null,
   "lat": 29.9819,
   "lng": -90.067,
   "free": true,
   "cost": null,
   "star": false,
   "url": "https://www.wwoz.org/organizations/bullets-sports-bar",
   "blurb": "The all-women Original Pinettes Brass Band holds down Friday nights at this beloved neighborhood 7th Ward bar — a deeply local scene with a BBQ truck out front. Friday residency follows the weekly pattern — verify time and cover."
  },
  {
   "id": "blue-nile-the-rozes-jul31",
   "title": "The Rozes (Caribbean Funk) at Blue Nile",
   "when": "2026-07-31T20:00",
   "end": "2026-07-31T22:00",
   "where": "Blue Nile, 532 Frenchmen St (Faubourg Marigny)",
   "category": "music",
   "blurb": "Caribbean-funk set at Frenchmen Street mainstay Blue Nile. Free admission with valid ID, 21+ (listed on Blue Nile's 2026 calendar for this date).",
   "free": true,
   "cost": null,
   "url": "https://www.bluenilelive.com/calendar-tickets-",
   "district": "by",
   "lat": 29.9637,
   "lng": -90.0577,
   "star": false
  },
  {
   "id": "preservation-hall-allstars-jul31",
   "title": "Preservation All-Stars — Traditional Jazz",
   "when": "2026-07-31T20:00",
   "end": "2026-07-31T21:00",
   "where": "Preservation Hall / Toulouse Theatre, French Quarter",
   "category": "music",
   "blurb": "Intimate traditional New Orleans jazz from the Preservation All-Stars, drawn from a 60+ member collective. Nightly sets at 5:00, 6:30 and 8:00pm — date follows the nightly pattern; verify exact lineup/times on the Preservation Hall calendar.",
   "free": false,
   "cost": "$30+",
   "url": "https://www.preservationhall.com/calendar/",
   "district": "fq",
   "lat": 29.9585,
   "lng": -90.0648,
   "star": true
  },
  {
   "id": "preservation-hall-fri",
   "title": "Preservation Hall Jazz — Nightly Sets",
   "when": "2026-07-31T20:00",
   "end": "2026-07-31T21:00",
   "where": "Preservation Hall, 726 St Peter St, French Quarter",
   "category": "music",
   "district": "fq",
   "lat": 29.9585,
   "lng": -90.0647,
   "free": false,
   "cost": "$35",
   "star": true,
   "url": "https://www.preservationhall.com/calendar/",
   "blurb": "Intimate 45-minute traditional-jazz sets in the candlelit 1961 hall (shows nightly at 5, 6:30 & 8 p.m.). Friday night picked here, but any night in the window works; buy timed tickets ahead. Price estimated — verify."
  },
  {
   "id": "tipitinas-free-friday-jul31",
   "title": "Free Friday: New Orleans Suspects + Brass Tyrannosaurus",
   "when": "2026-07-31T21:00",
   "end": "2026-08-01T01:00",
   "where": "Tipitina's, 501 Napoleon Ave (Uptown)",
   "category": "music",
   "blurb": "Tipitina's Free Friday Concert Series — funky New Orleans jam band the New Orleans Suspects with Brass Tyrannosaurus opening. Doors 8pm, show 9pm, 21+. Free admission (confirmed on Tipitina's 2026 calendar).",
   "free": true,
   "cost": null,
   "url": "https://tipitinas.com/calendar/",
   "district": null,
   "lat": 29.9247,
   "lng": -90.1027,
   "star": true
  },
  {
   "id": "dba-frenchmen-friday-jul31",
   "title": "Live Music at d.b.a.",
   "when": "2026-07-31T21:00",
   "end": "2026-08-01T01:00",
   "where": "d.b.a., 618 Frenchmen St",
   "category": "music",
   "blurb": "Frenchmen Street's premier live-music bar with brass, funk and roots acts nightly. Friday lineup follows the weekly pattern — verify the night's bands and any cover on d.b.a.'s shows page.",
   "free": false,
   "cost": "$10-15",
   "url": "https://www.dbaneworleans.com/shows/",
   "district": "by",
   "lat": 29.9636,
   "lng": -90.0574,
   "star": false
  },
  {
   "id": "blue-nile-kermit-ruffins-jul31",
   "title": "Kermit Ruffins \"We Partyin'!\" — Blue Nile Balcony",
   "when": "2026-07-31T22:00",
   "end": "2026-08-01T00:15",
   "where": "Blue Nile Balcony Room, 532 Frenchmen St",
   "category": "music",
   "blurb": "Trumpeter and NOLA icon Kermit Ruffins throws his late-night party in the Blue Nile Balcony Room, with DJ WestBankRed keeping it going. Doors 9pm (listed for this date on Blue Nile's calendar).",
   "free": false,
   "cost": "$20",
   "url": "https://www.bluenilelive.com/calendar-tickets-",
   "district": "by",
   "lat": 29.9637,
   "lng": -90.0577,
   "star": true
  },
  {
   "id": "spotted-cat-fri",
   "title": "Live Jazz at the Spotted Cat",
   "when": "2026-07-31T22:00",
   "end": "2026-08-01T01:00",
   "where": "The Spotted Cat Music Club, 623 Frenchmen St, Marigny",
   "category": "music",
   "district": "by",
   "lat": 29.9635,
   "lng": -90.0568,
   "free": true,
   "cost": null,
   "star": false,
   "url": "https://www.spottedcatmusicclub.com/calendar",
   "blurb": "Quintessential Frenchmen Street jazz-and-swing dive with live local trad-jazz every night, no cover (one-drink minimum). Friday night suggested; specific band follows the weekly rotation — verify the lineup closer to the date."
  },
  {
   "id": "blue-nile-frenchmen",
   "title": "Live Music at Blue Nile",
   "when": "2026-07-31T22:00",
   "end": "2026-08-01T02:00",
   "where": "Blue Nile, 532 Frenchmen St, Marigny",
   "category": "music",
   "district": "by",
   "free": false,
   "cost": "$15",
   "star": false,
   "lat": 29.9633,
   "lng": -90.0575,
   "url": "https://www.bluenilelive.com/calendar-tickets-",
   "blurb": "Funk, brass and jazz on Frenchmen St, with a lively upstairs balcony room. Open nightly; cover varies. 2026 dates for the trip window not yet posted — verify lineup and price."
  },
  {
   "id": "crescent-city-farmers-market-sat",
   "title": "Crescent City Farmers Market — Saturday Market",
   "when": "2026-08-01T08:00",
   "end": "2026-08-01T12:00",
   "where": "750 Carondelet St (at Julia St), CBD/Warehouse District",
   "category": "market",
   "district": "wh",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9445,
   "lng": -90.07,
   "url": "https://www.crescentcityfarmersmarket.org/our-markets",
   "blurb": "The city's flagship producers-only market — Louisiana produce, Gulf seafood, baked goods and prepared food, rain or shine, 8am-noon. Weekly Saturday event; the Aug 1 date follows the standing weekly pattern — verify. Two blocks from White Linen Night."
  },
  {
   "id": "crescent-city-saturday-market",
   "title": "Crescent City Farmers Market — Saturday",
   "when": "2026-08-01T08:00",
   "end": "2026-08-01T12:00",
   "where": "750 Carondelet St, CBD",
   "category": "market",
   "district": "wh",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.941,
   "lng": -90.0705,
   "url": "https://www.crescentcityfarmersmarket.org/",
   "blurb": "The city's flagship Saturday-morning farmers market — local produce, seafood, prepared food and live music, 8am-noon. Weekly pattern is reliable, but confirm the current location; the market has shuffled sites — verify."
  },
  {
   "id": "french-market-fq",
   "title": "French Market — Farmers & Flea Market",
   "when": "2026-08-01T09:00",
   "end": "2026-08-01T18:00",
   "where": "French Market, 1100 block N Peters St, French Quarter",
   "category": "market",
   "district": "fq",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.96,
   "lng": -90.0596,
   "url": "https://www.frenchmarket.org/",
   "blurb": "Historic open-air market at the downriver edge of the Quarter — produce stalls, crafts, and a flea market, a short walk from Satchmo SummerFest. Open daily; the Aug 1 date follows the standard daily pattern — verify hours."
  },
  {
   "id": "satchmo-summerfest-day1",
   "title": "Satchmo SummerFest 2026 — Day 1",
   "when": "2026-08-01T11:00",
   "end": "2026-08-01T20:00",
   "where": "New Orleans Jazz Museum / Old U.S. Mint, 400 Esplanade Ave",
   "category": "festival",
   "district": "fq",
   "free": true,
   "cost": null,
   "star": true,
   "lat": 29.9614,
   "lng": -90.0574,
   "url": "https://nolajazzmuseum.org/events/2026/8/1/satchmo-summerfest-2026",
   "blurb": "Free two-day festival honoring Louis Armstrong on the grounds of the Old U.S. Mint — two stages of traditional and brass-band jazz, local food, second-line parades and seminars. Day 1 runs 11am-8pm; dates officially confirmed for Aug 1-2, 2026."
  },
  {
   "id": "satchmo-summerfest-sat",
   "title": "Satchmo SummerFest (Day 1)",
   "when": "2026-08-01T11:30",
   "end": "2026-08-01T20:00",
   "where": "New Orleans Jazz Museum at the Old U.S. Mint, 400 Esplanade Ave",
   "category": "festival",
   "district": "fq",
   "lat": 29.9627,
   "lng": -90.0596,
   "free": true,
   "cost": null,
   "star": true,
   "url": "https://satchmosummerfest.org/",
   "blurb": "Free two-day festival honoring Louis Armstrong with 24+ acts across two stages, a lecture series, and local food. Saturday's lineup includes Charmaine Neville, Roots of Music, Preservation Brass, TBC Brass Band, and a Ma Rainey tribute. Dates are officially confirmed for Aug 1-2, 2026."
  },
  {
   "id": "spotted-cat-aug1",
   "title": "The Spotted Cat Music Club — trad-jazz & swing",
   "when": "2026-08-01T16:00",
   "end": "2026-08-01T20:00",
   "where": "The Spotted Cat, 623 Frenchmen St, Faubourg Marigny",
   "category": "music",
   "district": "by",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9636,
   "lng": -90.057,
   "url": "https://www.spottedcatmusicclub.com/calendar",
   "blurb": "Quintessential no-cover Frenchmen St jazz room, open noon-2am Saturdays with rotating trad-jazz, swing and gypsy-jazz combos across afternoon and evening sets. No cover (one-drink minimum, cash bar); the Saturday lineup follows the weekly pattern — verify the day's bands."
  },
  {
   "id": "white-linen-night",
   "title": "Fidelity Bank White Linen Night",
   "when": "2026-08-01T17:00",
   "end": "2026-08-01T22:00",
   "where": "300-600 blocks of Julia St, Warehouse Arts District",
   "category": "art",
   "district": "wh",
   "free": true,
   "cost": null,
   "star": true,
   "lat": 29.943,
   "lng": -90.068,
   "url": "https://www.artsdistrictneworleans.com/events/fidelity-bank-white-linen-night-2026",
   "blurb": "The Warehouse District's signature summer gallery crawl — galleries along Julia St throw open their doors with new shows, wine and street music while thousands stroll in all-white linen. Free to attend the street party and galleries; officially confirmed for Aug 1, 2026, 5-10pm."
  },
  {
   "id": "ogden-white-linen-experience",
   "title": "White Linen Experience at Ogden Museum",
   "when": "2026-08-01T18:00",
   "end": "2026-08-01T21:00",
   "where": "Ogden Museum of Southern Art, 925 Camp St",
   "category": "art",
   "district": "wh",
   "lat": 29.9424,
   "lng": -90.0703,
   "free": false,
   "cost": "$65",
   "star": false,
   "url": "https://ogdenmuseum.org/event/fidelity-bank-white-linen-night-3/",
   "blurb": "Ticketed indoor party at the Ogden during White Linen Night — art, cocktails, and music in the galleries. Confirmed Aug 1, 2026, 6-9 p.m.; price estimated from prior years — verify."
  },
  {
   "id": "spotted-cat-frenchmen",
   "title": "Live Jazz at The Spotted Cat",
   "when": "2026-08-01T18:00",
   "end": "2026-08-01T22:00",
   "where": "The Spotted Cat Music Club, 623 Frenchmen St, Marigny",
   "category": "music",
   "district": "by",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9637,
   "lng": -90.0567,
   "url": "https://www.spottedcatmusicclub.com/calendar",
   "blurb": "Quintessential Frenchmen St club — no cover (tip the band, one-drink minimum), trad-jazz and swing sets from early afternoon into the night, seven days a week. Open daily during the trip; specific 2026 lineups post close to the date — verify."
  },
  {
   "id": "frenchmen-art-market",
   "title": "Frenchmen Art Market (Palace Market)",
   "when": "2026-08-01T19:00",
   "end": "2026-08-02T01:00",
   "where": "619 Frenchmen St, Marigny",
   "category": "market",
   "district": "by",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9636,
   "lng": -90.0568,
   "url": "https://frenchmenartmarket.com/",
   "blurb": "Open-air night market of handmade art, jewelry and crafts by local makers, tucked just off the Frenchmen St music strip. Runs nightly (roughly 7pm-1am, from 7pm Sun); free to browse. Hours follow the standing pattern — verify."
  },
  {
   "id": "preservation-hall-aug1",
   "title": "Preservation Hall — Traditional Jazz (nightly sets)",
   "when": "2026-08-01T20:00",
   "end": "2026-08-01T21:00",
   "where": "Preservation Hall, 726 St Peter St, French Quarter",
   "category": "music",
   "district": "fq",
   "free": false,
   "cost": "$35",
   "star": true,
   "lat": 29.9585,
   "lng": -90.0653,
   "url": "https://www.preservationhall.com/",
   "blurb": "Intimate, acoustic New Orleans jazz from the Hall's collective, 360 nights a year. Saturdays offer 5, 6, 8, 9 and 10pm sets; the 8pm slot on Aug 1 follows the nightly pattern — verify the exact lineup and reserve ahead. General admission around $35+."
  },
  {
   "id": "preservation-hall-sat",
   "title": "Preservation Hall — Traditional Jazz Sets",
   "when": "2026-08-01T20:00",
   "end": "2026-08-01T21:00",
   "where": "Preservation Hall, 726 St Peter St, French Quarter",
   "category": "music",
   "district": "fq",
   "free": false,
   "cost": "$40",
   "star": false,
   "lat": 29.9585,
   "lng": -90.0648,
   "url": "https://www.preservationhall.com/calendar/",
   "blurb": "Same nightly acoustic jazz tradition on Saturday of the trip — three sets at 5, 6:30 and 8pm. Nightly pattern is reliable; confirm the exact ensemble and buy timed tickets — verify."
  },
  {
   "id": "tipitinas-aug1",
   "title": "Tipitina's — Saturday night show",
   "when": "2026-08-01T21:00",
   "end": "2026-08-02T00:00",
   "where": "Tipitina's, 501 Napoleon Ave, Uptown",
   "category": "music",
   "district": "gd",
   "free": false,
   "cost": "$25",
   "star": false,
   "lat": 29.9214,
   "lng": -90.0999,
   "url": "https://www.jambase.com/venue/tipitinas",
   "blurb": "Legendary Uptown music hall (funk, brass, jam and roots) at Napoleon & Tchoupitoulas. Venue has August 2026 shows on the books but no act was confirmed for Aug 1 as of research — a Saturday-night show is likely; verify lineup and ticket price before planning."
  },
  {
   "id": "dba-frenchmen",
   "title": "Live Music at d.b.a.",
   "when": "2026-08-01T21:00",
   "end": "2026-08-02T01:00",
   "where": "d.b.a., 618 Frenchmen St, Marigny",
   "category": "music",
   "district": "by",
   "free": false,
   "cost": "$15",
   "star": false,
   "lat": 29.9636,
   "lng": -90.0568,
   "url": "https://www.dbaneworleans.com/shows/",
   "blurb": "Frenchmen St mainstay long home to the Treme Brass Band's weekly residency and top local acts. Open nightly; cover varies by act. 2026 August calendar not yet posted — verify the specific night's show and price."
  },
  {
   "id": "dba-aug1",
   "title": "d.b.a. — live music on Frenchmen",
   "when": "2026-08-01T22:00",
   "end": "2026-08-02T01:00",
   "where": "d.b.a., 618 Frenchmen St, Faubourg Marigny",
   "category": "music",
   "district": "by",
   "free": false,
   "cost": "$10",
   "star": false,
   "lat": 29.9637,
   "lng": -90.0573,
   "url": "https://www.dbaneworleans.com/shows/",
   "blurb": "Beloved Frenchmen St club featuring local and regional acts nightly (funk, brass, blues, roots), open Saturdays 2pm-1am. Cover typically $10-15; the Aug 1 lineup was not yet posted — the late Saturday show follows the weekly pattern, verify act and cover."
  },
  {
   "id": "blue-nile-aug1",
   "title": "Blue Nile — funk & brass on Frenchmen",
   "when": "2026-08-01T22:00",
   "end": "2026-08-02T02:00",
   "where": "Blue Nile, 532 Frenchmen St, Faubourg Marigny",
   "category": "music",
   "district": "by",
   "free": false,
   "cost": "$15",
   "star": false,
   "lat": 29.964,
   "lng": -90.058,
   "url": "https://www.bluenilelive.com/calendar-tickets-",
   "blurb": "Two-room Frenchmen St venue known for brass bands, funk and dance parties late into the night. Cover varies (~$10-20); the Aug 1 lineup follows the club's regular weekend pattern — verify the specific act."
  },
  {
   "id": "white-linen-after-dark",
   "title": "White Linen Night: After Dark — Official After Party",
   "when": "2026-08-01T22:00",
   "end": "2026-08-02T02:00",
   "where": "Arts District / Julia St area (see event page)",
   "category": "music",
   "district": "wh",
   "free": false,
   "cost": "$25",
   "star": false,
   "lat": 29.943,
   "lng": -90.068,
   "url": "https://www.neworleanschamber.org/events/details/2026-white-linen-night-after-dark-official-after-party-23750",
   "blurb": "Ticketed late-night after-party that caps off White Linen Night with DJs/live music once the galleries close. Officially listed for the night of Aug 1, 2026; check the event page for exact venue, time and ticket price."
  },
  {
   "id": "crescent-city-sunday-market",
   "title": "Crescent City Farmers Market — Sunday (City Park)",
   "when": "2026-08-02T09:00",
   "end": "2026-08-02T13:00",
   "where": "City Putt lot, New Orleans City Park",
   "category": "market",
   "district": "cp",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9899,
   "lng": -90.0947,
   "url": "https://neworleanscitypark.org/series/crescent-city-farmers-market-2/",
   "blurb": "Sunday edition of the Crescent City market in City Park — farm stands, food vendors and family activities. Weekly pattern; confirm hours and that the Sunday market is running this date — verify."
  },
  {
   "id": "satchmo-jazz-mass-second-line",
   "title": "Satchmo Jazz Mass + Treme Brass Band Second Line",
   "when": "2026-08-02T10:00",
   "end": "2026-08-02T11:30",
   "where": "St. Augustine Church, 1210 Governor Nicholls St (Treme)",
   "category": "music",
   "blurb": "A New Orleans-only Sunday ritual: a 10am Jazz Mass at historic St. Augustine Church in Treme, backed by the Treme Brass Band, which then leads a second-line parade to the festival grounds. Free and deeply authentic. Date/time follows the annual Satchmo pattern — verify.",
   "free": true,
   "cost": null,
   "star": false,
   "district": null,
   "lat": 29.967,
   "lng": -90.067,
   "url": "https://frenchquarterfest.org/satchmo-music/"
  },
  {
   "id": "hob-gospel-brunch-sunday",
   "title": "House of Blues Sunday Gospel Brunch",
   "when": "2026-08-02T10:00",
   "end": "2026-08-02T13:00",
   "where": "House of Blues, 225 Decatur St, French Quarter",
   "category": "music",
   "blurb": "Decades-old NOLA tradition: soul-stirring live gospel with an all-you-can-eat brunch (chicken & waffles, carving stations) and bottomless mimosas. Sunday seatings; reserve ahead. Time/price follow the standard pattern — verify.",
   "free": false,
   "cost": "$54",
   "star": false,
   "district": "fq",
   "lat": 29.954,
   "lng": -90.0648,
   "url": "https://www.neworleans.com/things-to-do/music/history-and-traditions/gospel-brunch/"
  },
  {
   "id": "satchmo-jazz-mass",
   "title": "Satchmo Jazz Mass at St. Augustine Church",
   "when": "2026-08-02T10:00",
   "end": "2026-08-02T11:30",
   "where": "St. Augustine Catholic Church, 1210 Governor Nicholls St, Treme",
   "category": "music",
   "district": null,
   "lat": 29.9679,
   "lng": -90.0645,
   "free": true,
   "cost": null,
   "star": false,
   "url": "https://satchmosummerfest.org/home/special-events/",
   "blurb": "Traditional Sunday-morning Jazz Mass at the historic St. Augustine Church in Treme, a beloved Satchmo weekend ritual returning to the main sanctuary. Time follows the annual pattern (mid-morning) — verify the exact start."
  },
  {
   "id": "satchmo-summerfest-day2",
   "title": "Satchmo SummerFest — Day 2 (Louis Armstrong Celebration)",
   "when": "2026-08-02T11:30",
   "end": "2026-08-02T20:00",
   "where": "New Orleans Jazz Museum at the Old U.S. Mint, 400 Esplanade Ave",
   "category": "festival",
   "blurb": "The free two-day Louis Armstrong tribute wraps up on its second day. Two outdoor stages (Fidelity Bank & Delta Utility) plus intimate sets inside the museum, local jazz royalty, seminars, and Creole food. Dates are officially posted for 2026 (Aug 1-2); gates 11:30am-8pm follow the annual pattern — verify hours.",
   "free": true,
   "cost": null,
   "star": true,
   "district": "fq",
   "lat": 29.9628,
   "lng": -90.0578,
   "url": "https://frenchquarterfest.org/satchmo-music/"
  },
  {
   "id": "satchmo-summerfest-sun",
   "title": "Satchmo SummerFest (Day 2)",
   "when": "2026-08-02T11:30",
   "end": "2026-08-02T20:00",
   "where": "New Orleans Jazz Museum at the Old U.S. Mint, 400 Esplanade Ave",
   "category": "festival",
   "district": "fq",
   "lat": 29.9627,
   "lng": -90.0596,
   "free": true,
   "cost": null,
   "star": false,
   "url": "https://satchmosummerfest.org/",
   "blurb": "Sunday of the free Satchmo SummerFest, with returning favorites Kermit Ruffins, John Boutte, and The Original Pinettes Brass Band. Confirmed Aug 1-2, 2026; free museum admission all weekend."
  },
  {
   "id": "satchmo-salute-parade",
   "title": "Satchmo Salute Second-Line Parade",
   "when": "2026-08-02T12:00",
   "end": "2026-08-02T13:30",
   "where": "Steps off from St. Augustine Church through Treme & the French Quarter",
   "category": "festival",
   "district": "fq",
   "lat": 29.9679,
   "lng": -90.0645,
   "free": true,
   "cost": null,
   "star": true,
   "url": "https://satchmosummerfest.org/home/special-events/",
   "blurb": "Brass-band second line rolls from the Jazz Mass through Treme and the Quarter to the festival grounds — grab a handkerchief and join in. Time follows the annual pattern (just after Mass) — verify."
  },
  {
   "id": "satchmo-john-boutte",
   "title": "John Boutté at Satchmo SummerFest",
   "when": "2026-08-02T14:00",
   "end": "2026-08-02T15:00",
   "where": "Fidelity Bank Stage, Old U.S. Mint, 400 Esplanade Ave",
   "category": "music",
   "blurb": "The soulful voice behind the 'Treme' theme is a Sunday-lineup regular at Satchmo. Set time is estimated within the festival's Sunday slate — verify exact time on the 2026 grid.",
   "free": true,
   "cost": null,
   "star": false,
   "district": "fq",
   "lat": 29.9628,
   "lng": -90.0578,
   "url": "https://frenchquarterfest.org/satchmo-music/"
  },
  {
   "id": "preservation-hall-sunday",
   "title": "Preservation Hall — Sunday Trad Jazz Sets",
   "when": "2026-08-02T17:00",
   "end": "2026-08-02T22:00",
   "where": "Preservation Hall, 726 St Peter St, French Quarter",
   "category": "music",
   "blurb": "Sundays are when you're most likely to catch the actual Preservation Hall Jazz Band. Intimate ~45-min sets at 5, 6, 8, 9 and 10pm in the candlelit hall. Showtimes follow the venue's standard pattern — verify on their calendar.",
   "free": false,
   "cost": "$35",
   "star": true,
   "district": "fq",
   "lat": 29.9585,
   "lng": -90.0648,
   "url": "https://www.preservationhall.com/calendar/"
  },
  {
   "id": "spotted-cat-treme-brass-sunday",
   "title": "Treme Brass Band at The Spotted Cat",
   "when": "2026-08-02T18:00",
   "end": "2026-08-02T21:00",
   "where": "The Spotted Cat Music Club, 623 Frenchmen St, Marigny",
   "category": "music",
   "blurb": "A weekly Frenchmen Street institution — the Treme Brass Band plays the Spotted Cat every Sunday at 6pm. No cover, tip the band. Recurring weekly set — verify on the club calendar.",
   "free": true,
   "cost": null,
   "star": false,
   "district": "by",
   "lat": 29.9635,
   "lng": -90.057,
   "url": "https://www.spottedcatmusicclub.com/calendar"
  },
  {
   "id": "satchmo-kermit-ruffins-closer",
   "title": "Kermit Ruffins' Tribute to Louis Armstrong (Satchmo closer)",
   "when": "2026-08-02T18:40",
   "end": "2026-08-02T20:00",
   "where": "Satchmo SummerFest main stage, Old U.S. Mint, 400 Esplanade Ave",
   "category": "music",
   "blurb": "The trumpeter and NOLA icon closes out Satchmo SummerFest with his signature Armstrong homage — the festival's must-see finale. Set time (6:40-8pm) follows the 2025 pattern as the Sunday closer — verify once the 2026 grid posts.",
   "free": true,
   "cost": null,
   "star": true,
   "district": "fq",
   "lat": 29.9628,
   "lng": -90.0578,
   "url": "https://frenchquarterfest.org/satchmo-music/"
  },
  {
   "id": "frenchmen-art-market-sunday",
   "title": "Frenchmen Art Market (Night Market)",
   "when": "2026-08-02T19:00",
   "end": "2026-08-03T00:00",
   "where": "Frenchmen Art Market, 619 Frenchmen St, Marigny",
   "category": "market",
   "blurb": "Open-air night market of local artists and makers steps from the Frenchmen Street clubs — jewelry, prints, and crafts under string lights. Sunday hours roughly 7pm-midnight; free to browse. Hours follow the usual pattern — verify.",
   "free": true,
   "cost": null,
   "star": false,
   "district": "by",
   "lat": 29.9636,
   "lng": -90.0572,
   "url": "https://frenchmenartmarket.com/"
  },
  {
   "id": "spotted-cat-pat-casey-sunday",
   "title": "Pat Casey & the New Sound at The Spotted Cat",
   "when": "2026-08-02T21:00",
   "end": "2026-08-03T00:00",
   "where": "The Spotted Cat Music Club, 623 Frenchmen St, Marigny",
   "category": "music",
   "blurb": "Pat Casey plays his regular late Sunday set at 9pm at the Spotted Cat — a low-key, no-cover way to close out a Frenchmen Street night. Recurring weekly set — verify.",
   "free": true,
   "cost": null,
   "star": false,
   "district": "by",
   "lat": 29.9635,
   "lng": -90.057,
   "url": "https://www.spottedcatmusicclub.com/calendar"
  },
  {
   "id": "blue-nile-street-legends-sun",
   "title": "Street Legends Brass Band at Blue Nile",
   "when": "2026-08-02T21:30",
   "end": "2026-08-03T00:30",
   "where": "Blue Nile, 532 Frenchmen St, Marigny",
   "category": "music",
   "district": "by",
   "lat": 29.9639,
   "lng": -90.0577,
   "free": true,
   "cost": null,
   "star": false,
   "url": "https://www.bluenilelive.com/calendar-tickets-",
   "blurb": "High-energy brass-band party that owns Sunday nights at Blue Nile, closing out the weekend on Frenchmen. Free with valid ID (21+). Sunday 9:30 p.m. residency follows the weekly pattern — verify."
  },
  {
   "id": "french-market-daily-monday",
   "title": "French Market Farmers & Flea Market",
   "when": "2026-08-03T09:00",
   "end": "2026-08-03T18:00",
   "where": "French Market, Decatur St between St Ann & Dumaine (1008 N Peters St)",
   "category": "market",
   "district": "fq",
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9605,
   "lng": -90.0616,
   "url": "https://www.frenchmarket.org/",
   "blurb": "Open-air farmers and flea market running daily 365 days a year, including Mondays (farmers/flea 9AM-6PM, retail 10AM-6PM). An easy departure-day daytime stroll for produce, praline, local crafts and a last muffuletta or beignet. Daily operation -- verify hours.",
   "published": true
  },
  {
   "id": "spotted-cat-monday-trad-jazz",
   "title": "Trad Jazz & Swing at the Spotted Cat",
   "when": "2026-08-03T14:00",
   "end": "2026-08-03T18:00",
   "where": "The Spotted Cat Music Club, 623 Frenchmen St",
   "category": "music",
   "district": null,
   "free": true,
   "cost": null,
   "star": false,
   "lat": 29.9637,
   "lng": -90.0573,
   "url": "https://www.spottedcatmusicclub.com/calendar",
   "blurb": "The Spotted Cat runs live traditional jazz and swing seven days a week starting in the early afternoon on Mondays (open ~2PM), no cover, cash only, two-drink minimum. Great low-key daytime/early-evening music stop before heading out. Weekly pattern -- check the club's calendar for the specific Monday lineup.",
   "published": true
  },
  {
   "id": "kermit-ruffins-mother-in-law-monday",
   "title": "Kermit Ruffins & the Barbecue Swingers",
   "when": "2026-08-03T18:00",
   "end": "2026-08-03T20:00",
   "where": "Kermit's Treme Mother-in-Law Lounge, 1500 N Claiborne Ave",
   "category": "music",
   "district": null,
   "free": true,
   "cost": null,
   "star": true,
   "lat": 29.9705,
   "lng": -90.0684,
   "url": "https://www.kermitslounge.com/",
   "blurb": "The quintessential New Orleans Monday: trumpeter Kermit Ruffins holds a weekly Monday-night residency (approx. 6-8PM) with the BBQ Swingers at his own Treme lounge, usually with red beans or BBQ chicken on the pot. No cover; tip the band and buy a drink. Date/time follow the weekly pattern -- verify on the venue's page before departure since Kermit's schedule shifts.",
   "published": true
  },
  {
   "id": "preservation-hall-monday",
   "title": "Preservation Hall Nightly Jazz Sets",
   "when": "2026-08-03T20:00",
   "end": "2026-08-03T22:45",
   "where": "Preservation Hall, 726 St Peter St",
   "category": "music",
   "district": "fq",
   "free": false,
   "cost": "$35-50",
   "star": false,
   "lat": 29.9585,
   "lng": -90.0649,
   "url": "https://www.preservationhall.com/calendar/",
   "blurb": "The landmark French Quarter jazz room runs intimate 45-minute sets nightly, including Mondays at 8, 9 and 10PM (no 5/6PM shows Mon-Wed). Book ahead; a fitting final-night dose of pure New Orleans trad jazz. Nightly pattern -- verify times and ticketing.",
   "published": true
  },
  {
   "id": "dba-corey-henry-treme-funktet-monday",
   "title": "Corey Henry & the Treme Funktet",
   "when": "2026-08-03T21:30",
   "end": "2026-08-04T01:00",
   "where": "d.b.a., 618 Frenchmen St",
   "category": "music",
   "district": null,
   "free": false,
   "cost": "$10-15",
   "star": false,
   "lat": 29.9636,
   "lng": -90.0575,
   "url": "https://www.dbaneworleans.com/shows/",
   "blurb": "A classic New Orleans Monday tradition: red beans and brass-heavy funk, with Corey Henry & the Treme Funktet's weekly Monday-night residency at d.b.a. on Frenchmen. Late-night only, so a fit if your departure is Tuesday. Weekly residency at ~9:30PM -- date follows the annual/weekly pattern, verify.",
   "published": true
  },
  {
   "id": "dba-corey-henry-mon",
   "title": "Corey Henry & the Treme Funktet at d.b.a.",
   "when": "2026-08-03T21:30",
   "end": "2026-08-04T00:30",
   "where": "d.b.a., 618 Frenchmen St, Marigny",
   "category": "music",
   "district": "by",
   "lat": 29.9636,
   "lng": -90.0571,
   "free": false,
   "cost": "$15",
   "star": false,
   "url": "https://www.dbaneworleans.com/shows/",
   "blurb": "Trombonist Corey Henry's funk-and-brass Treme Funktet plays its long-running Monday-night residency at d.b.a. — a great low-key end to the trip. Monday 9:30 p.m. residency follows the weekly pattern; cover estimated — verify."
  }
 ],
 "tours": [
  {
   "id": "garden-district-cemetery-tour",
   "name": "Garden District & Lafayette Cemetery Walking Tour",
   "district": "gd",
   "category": "history",
   "duration": "~2 hours",
   "price": "~$25–30/person",
   "blurb": "Right now this is the real way to see inside Lafayette Cemetery No. 1 — a small-group guided walk through the Garden District's oak-lined streets and mansions, ending at the cemetery with a guide who can get you past the closed gates.",
   "discount_note": "Multiple operators (Viator/Historic New Orleans Tours) list this on Groupon at a discount — search “Garden District Lafayette Cemetery tour” on Groupon before booking direct.",
   "url": "https://www.viator.com/tours/New-Orleans/Garden-District-Lafayette-Cemetery-1-Tour/d675-289336P3",
   "diet_note": "No food/drink stops — fully compatible."
  },
  {
   "id": "fq-history-walking-tour",
   "name": "French Quarter History Walking Tour",
   "district": "fq",
   "category": "history",
   "duration": "90 min",
   "price": "From $19 for 2 (Groupon) / ~$20–25pp direct",
   "blurb": "A budget-friendly 90-minute walk through Quarter architecture, history and culture with a local guide.",
   "discount_note": "La Vie Orleans Tours on Groupon: $19 for two people (normally $40) — one of the best-value tours in the city.",
   "url": "https://www.groupon.com/deals/la-vie-orleans-tours-llc-1",
   "diet_note": "No food/drink stops — fully compatible."
  },
  {
   "id": "fq-cocktail-history-tour",
   "name": "French Quarter Cocktail History Tour",
   "district": "fq",
   "category": "cocktail",
   "duration": "~3 hours",
   "price": "~$59–79/person",
   "blurb": "An evening walk covering the origins of the Sazerac, the Daiquiri and absinthe, with a tasting at each of four historic bars.",
   "discount_note": "Check Groupon/Viator for “New Orleans Cocktail History Walking Tour” — pricing varies by season.",
   "url": "https://www.viator.com/tours/New-Orleans/New-Orleans-Cocktail-History-Walking-Tour-in-the-French-Quarter/d675-6484FRQCK",
   "diet_note": "Drink-only stops, no food included — easy to keep to your diet. 21+, evening/optional."
  },
  {
   "id": "voodoo-museum-tour",
   "name": "New Orleans Historic Voodoo Museum",
   "district": "fq",
   "category": "museum",
   "duration": "~30–45 min self-guided (guided add-on ~1hr)",
   "price": "$10 general admission; guided walking add-on ~$36",
   "blurb": "A small, atmospheric museum on the real history of New Orleans Voodoo as a folk religion — an easy add-on near Bourbon St.",
   "discount_note": "Occasionally listed on Groupon via Viator; that listing doesn't accept extra promo codes, so compare to the door price first.",
   "url": "https://voodoomuseum.com/",
   "diet_note": "No food involved."
  },
  {
   "id": "mardi-gras-world-tour",
   "name": "Mardi Gras World Float Den Tour",
   "district": "wh",
   "category": "tour",
   "duration": "1 hour, departs every 30 min, 9:30a–4:30p",
   "price": "~$25 adult",
   "blurb": "Guided walk through the working warehouse where Mardi Gras parade floats are built — giant sculpted figures up close, with a king cake sample (vegetarian) included.",
   "discount_note": "Up to 18–35% off via Groupon and coupon sites (NewOrleansCoupons.com, WorthEPenny) — worth a quick check before buying at the door.",
   "url": "https://www.mardigrasworld.com/",
   "diet_note": "King cake sample is vegetarian; safe as-is."
  },
  {
   "id": "swamp-tour-day-trip",
   "name": "Jean Lafitte Swamp & Airboat Tour",
   "district": null,
   "category": "outdoors",
   "duration": "~2–3 hrs + ~30–40 min transit each way",
   "price": "From ~$20.70–$70/person",
   "blurb": "Gators, cypress swamp and Cajun wildlife just outside the city on a covered pontoon or airboat. Most operators include hotel pickup.",
   "discount_note": "Jean Lafitte Swamp Tours from $20.70 (46% off); Bayou Swamp Tours and Ultimate Swamp Adventures also currently discounted on Groupon.",
   "url": "https://www.groupon.com/deals/jean-lafitte-tours-4",
   "diet_note": "No food included on most tours — fine as-is.",
   "note": "Time-tight on a 4-day trip — best fit for a quiet Monday morning before your evening flight, or skip if you'd rather stay in the city."
  }
 ],
 "tips": [
  {
   "t": "🚋 Getting around",
   "d": "RTA Jazzy Pass — $3 unlimited day pass covers every streetcar, bus & ferry (single ride $1.25). Buy in the free “Le Pass” app, or exact change at streetcar fareboxes."
  },
  {
   "t": "🥵 Heat & weather",
   "d": "Early August in New Orleans runs hot and humid (90s°F). Drink water often, save outdoor walks for morning/evening, and expect a daily pop-up thunderstorm — a light rain layer earns its space in the bag."
  },
  {
   "t": "💵 Tipping",
   "d": "18–20% at sit-down restaurants; $1–2/drink at bars; tip walking-tour guides and street musicians in cash."
  },
  {
   "t": "🚕 Night moves",
   "d": "The French Quarter/Marigny is very walkable by day. For Garden District ↔ Quarter at night, Uber/Lyft is easy and cheap (~$10–15)."
  }
 ],
 "updated": "2026-07-30",
 "data_version": 8,
 "logistics": {
  "heat": "Highs near 92°F but a heat index of 110–115°F — that is the number that matters. Anything outdoors belongs before 11a or after 5p; 11a–4p is for air conditioning. Carry water, and expect to want a shower and a lie-down mid-afternoon. That is why every day here has a cool block built into the middle rather than a \"power through it\" schedule.",
  "rain": "Rain falls on 14–18 days in an average August, almost always as a hard, short afternoon thunderstorm rather than all-day drizzle. You do not need to plan around it — you need an indoor option within a block or two at all times, which each day above has. Pack one light rain layer, skip the umbrella in a crowd.",
  "strategy": "The plan is built around one base per day so you are not crossing town twice. Saturday in particular stays entirely in the Warehouse District (museums to gallery night, all within 0.2 mi), and Frenchmen St is paired with Satchmo on Sunday because the Old Mint is a 3-minute walk from it.",
  "transit": [
   {
    "mode": "🚶 Walking",
    "cost": "Free",
    "note": "The Quarter and the Warehouse District are both flat and compact. Almost everything is under a 20-min walk — but in this heat, a 20-min walk is a real 20 minutes, so bank it for mornings and evenings."
   },
   {
    "mode": "🚋 Streetcar & bus (RTA)",
    "cost": "$1.25 a ride · $3 all-day Jazzy Pass",
    "note": "Best for the Garden District run on St Charles. Buy in the RTA \"Le Pass\" app or exact change at the farebox. The $3 pass pays off the moment you take three rides in a day."
   },
   {
    "mode": "🚕 Airport taxi",
    "cost": "$36 flat, 1–2 people ($15/person for 3+)",
    "note": "Official flat rate to the Quarter, traffic-proof. Usually the better call than Uber on arrival, when rideshare surges with the flights."
   },
   {
    "mode": "🚗 Uber / Lyft",
    "cost": "Quarter ↔ Warehouse $8–10 · Quarter ↔ Garden District $13–15 · MSY $25–45",
    "note": "Worth it late at night, in a downpour, or when you are simply done walking. Short hops in the Quarter are rarely worth the wait."
   }
  ],
  "budget_note": "Planned transit for the two of you: $36 in + $36 out + roughly $20 on Saturday and $3–28 on Sunday ≈ $95–120 total, which sits inside the transport line in the budget."
 },
 "forecast": {
  "source": "National Weather Service (api.weather.gov)",
  "gridpoint": "LIX/68,89",
  "url": "https://api.weather.gov/gridpoints/LIX/68,89/forecast",
  "fetched": "2026-07-30",
  "days": [
   {
    "date": "2026-07-31",
    "name": "Friday",
    "hi": 93,
    "lo": 79,
    "precip": 49,
    "precip_night": 49,
    "heat_index": 106,
    "short": "Chance Showers And Thunderstorms",
    "detail": "A chance of showers and thunderstorms. Mostly sunny, with a high near 93. Heat index values as high as 106. West wind 5 to 10 mph. Chance of precipitation is 50%.",
    "night_short": "Chance Showers And Thunderstorms then Mostly Cloudy",
    "night_detail": "A chance of showers and thunderstorms before 7pm. Mostly cloudy, with a low around 79. Southwest wind 5 to 10 mph. Chance of precipitation is 50%."
   },
   {
    "date": "2026-08-01",
    "name": "Saturday",
    "hi": 93,
    "lo": 78,
    "precip": 39,
    "precip_night": 61,
    "heat_index": null,
    "short": "Partly Sunny then Chance Showers And Thunderstorms",
    "detail": "A chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 93. West wind 5 to 10 mph. Chance of precipitation is 40%.",
    "night_short": "Chance Showers And Thunderstorms",
    "night_detail": "A chance of showers and thunderstorms before 1am, then showers and thunderstorms likely. Mostly cloudy, with a low around 78. Southwest wind 5 to 10 mph. Chance of precipitation is 60%."
   },
   {
    "date": "2026-08-02",
    "name": "Sunday",
    "hi": 89,
    "lo": 76,
    "precip": 76,
    "precip_night": 53,
    "heat_index": null,
    "short": "Showers And Thunderstorms",
    "detail": "Showers and thunderstorms before 1pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 89. West wind around 10 mph.",
    "night_short": "Chance Showers And Thunderstorms",
    "night_detail": "A chance of showers and thunderstorms before 1am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 76. West wind 5 to 10 mph."
   },
   {
    "date": "2026-08-03",
    "name": "Monday",
    "hi": 90,
    "lo": 78,
    "precip": 41,
    "precip_night": 41,
    "heat_index": null,
    "short": "Chance Showers And Thunderstorms",
    "detail": "A chance of showers and thunderstorms before 7am, then a chance of showers and thunderstorms. Mostly sunny, with a high near 90. West wind around 5 mph.",
    "night_short": "Chance Showers And Thunderstorms",
    "night_detail": "A chance of showers and thunderstorms. Partly cloudy, with a low around 78. Southwest wind around 5 mph."
   }
  ]
 }
};
