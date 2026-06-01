// ═══════════════════════════════════════════════════════════════
//  EVERSTONE HOMES — MASTER HOME LISTINGS
//  ─────────────────────────────────────────────────────────────
//  To add a new home: copy one entry below and fill in the fields.
//  It will automatically appear in:
//    • The Available Homes page (available-homes.html)
//    • The community detail pages
//    • Any other page that loads this file
//
//  STATUS OPTIONS:  "available" | "under-construction" | "coming-soon"
//  Leave image: "" if you don't have a photo yet — a placeholder shows instead.
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
    sqft: "1,663",
    garage: 3,
    price: "$549,900",                  // e.g. "$389,000" — leave "" to show "Contact for Pricing"
    image: "deer-creek-home.png",       // filename in same folder, or "" for placeholder
    note: "Select customization options available",
    communityPage: "crossings-at-deer-creek.html",
    lat: 41.741743,                     // GPS coordinates — home appears on map automatically
    lng: -93.551448                     // find via Google Maps: right-click the lot → "What's here?"
  },

  // ── PINE LAKE ESTATES ─────────────────────────────────────────
  // (No homes yet — add entries here when lots are secured)

  // ── HOW TO ADD A NEW HOME ─────────────────────────────────────
  // {
  //   id: "unique-id",                 // no spaces, e.g. "pine-lake-lot1"
  //   name: "Home Name",               // e.g. "The Maple Plan"
  //   community: "Community Name",     // must match exactly
  //   city: "City, Iowa",
  //   status: "available",
  //   beds: 4,
  //   baths: 3,
  //   sqft: "2,200",
  //   garage: 2,
  //   price: "$420,000",               // or "" for contact pricing
  //   image: "photo-filename.jpg",     // or "" for placeholder
  //   note: "Short description line",
  //   communityPage: "community-page.html",
  //   lat: 41.000000,                  // GPS latitude  — right-click lot in Google Maps → "What's here?"
  //   lng: -93.000000                  // GPS longitude — home auto-appears on map, omit to skip map
  // },

];
