// ═══════════════════════════════════════════════════════════════
//  EVERSTONE HOMES - MASTER HOME LISTINGS
//  ─────────────────────────────────────────────────────────────
//  EASIEST WAY TO ADD A HOME (same method as the DS Solid site):
//    1. Open the home on Zillow.
//    2. Right-click the main exterior photo → "Copy image address."
//       It looks like https://photos.zillowstatic.com/fp/....jpg
//    3. Give Claude the Zillow listing link, that photo address, and
//       the price / beds / baths / sq ft / garage (or paste the
//       listing text). Claude fills in the entry and the map location.
//    Paste the photo address straight into "image" — no download
//    needed. Visitors' browsers load it from Zillow, exactly like
//    the DS Solid Available Homes page does.
//
//  NOTE: Zillow sometimes removes photos after a home sells. If that
//  happens the card just shows the dark background (no broken icon).
//  For homes you'll keep up long-term, a self-hosted photo
//  (e.g. "1203-meadow-crossing.jpg" in this folder) is the safest.
//
//  TO ADD ONE BY HAND:
//    Copy an entry below and fill in the fields. It automatically
//    appears on the Available Homes page and the home-page map.
//
//  STATUS OPTIONS:  "available" | "under-construction" | "coming-soon"
//  zillowUrl:  paste the listing link to turn the home's button into
//              "View on Zillow." Leave "" and the button opens the
//              on-site details popup instead.
//  image:      a file in this folder ("my-home.jpg"), a Zillow photo
//              address (https://photos.zillowstatic.com/...), or ""
//              if you don't have a photo yet (placeholder shows).
// ═══════════════════════════════════════════════════════════════

const EVERSTONE_HOMES = [

  // ── THE CROSSINGS AT DEER CREEK ──────────────────────────────
  {
    id: "deer-creek-lot1",
    name: "1203 NE Meadow Crossing Drive",
    community: "The Crossings at Deer Creek",
    city: "Ankeny, Iowa",
    status: "under-construction",       // "available" | "under-construction" | "coming-soon"
    beds: 5,
    baths: 3,
    sqft: "1,661",
    garage: 3,
    price: "$569,900",                  // or "" to show "Contact for Pricing"
    image: "1203-meadow-crossing.jpg",  // actual construction photo
    note: "Wet bar, finished basement, and tons of natural light",
    zillowUrl: "https://www.zillow.com/homedetails/1203-NE-Meadow-Crossing-Dr-Ankeny-IA-50021/464852141_zpid/",
    lat: 41.741743,                     // GPS coordinates - home appears on map automatically
    lng: -93.551448                     // find via Google Maps: right-click the lot → "What's here?"
  },

  // ── PINE LAKE ESTATES ─────────────────────────────────────────
  // (No homes yet - add entries here when lots are secured)

  // ── HOW TO ADD A NEW HOME BY HAND ─────────────────────────────
  // {
  //   id: "unique-id",                 // no spaces, e.g. "pine-lake-lot1"
  //   name: "Home Name or Address",
  //   community: "Community Name",     // must match exactly
  //   city: "City, Iowa",
  //   status: "available",
  //   beds: 4,
  //   baths: 3,
  //   sqft: "2,200",
  //   garage: 2,
  //   price: "$420,000",               // or "" for contact pricing
  //   image: "photo-filename.jpg",     // or a Zillow photo URL, or "" for placeholder
  //   note: "Short description line",
  //   zillowUrl: "https://www.zillow.com/homedetails/...",  // or "" to use the on-site popup
  //   lat: 41.000000,                  // GPS latitude
  //   lng: -93.000000                  // GPS longitude - omit both to skip the map
  // },

];
