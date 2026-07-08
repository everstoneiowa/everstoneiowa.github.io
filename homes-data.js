// ═══════════════════════════════════════════════════════════════
//  EVERSTONE HOMES - MASTER HOME LISTINGS
//  ─────────────────────────────────────────────────────────────
//  EASIEST WAY TO ADD A HOME:
//    Paste the home's Zillow listing link into Claude and say
//    "add this home." Claude pulls the address, price, beds, baths,
//    sq ft, and map location from the listing, grabs the first
//    exterior photo, and hands back an updated copy of this file
//    plus the image file to drop into the repo.
//
//  TO ADD ONE BY HAND:
//    Copy an entry below and fill in the fields. It automatically
//    appears on the Available Homes page, the home-page map, and
//    the community detail pages.
//
//  STATUS OPTIONS:  "available" | "under-construction" | "coming-soon"
//  zillowUrl:  paste the listing link to turn the home's button into
//              "View on Zillow." Leave "" and the button opens the
//              on-site details popup instead.
//  image:      leave "" if you don't have a photo yet (placeholder shows).
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
    sqft: "2,861",
    garage: 3,
    price: "$565,000",                  // or "" to show "Contact for Pricing"
    image: "deer-creek-home.png",       // filename in same folder, or "" for placeholder
    note: "Select customization options available",
    communityPage: "crossings-at-deer-creek.html",
    zillowUrl: "",                      // paste Zillow link → button becomes "View on Zillow"
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
  //   image: "photo-filename.jpg",     // or "" for placeholder
  //   note: "Short description line",
  //   communityPage: "community-page.html",
  //   zillowUrl: "https://www.zillow.com/homedetails/...",  // or "" to use the on-site popup
  //   lat: 41.000000,                  // GPS latitude
  //   lng: -93.000000                  // GPS longitude - omit both to skip the map
  // },

];
