// ═══════════════════════════════════════════════════════════════
//  EVERSTONE HOMES - GALLERY PHOTOS
//  ─────────────────────────────────────────────────────────────
//  Add photos here and they will automatically appear on:
//    • The Gallery page (gallery.html)
//    • The Gallery section on the Home page (index.html)
//
//  The home page shows up to 9 photos at a time.
//  Every 30 days a new random selection is shown automatically.
//
//  CATEGORY OPTIONS:
//    "exterior"     – Outside shots of homes
//    "interior"     – Inside shots, finishes, rooms
//    "construction" – Build progress photos
//    "community"    – Neighborhood, lots, surroundings
//    "detail"       – Close-ups of finishes, materials
//
//  HOW TO ADD A PHOTO:
//    1. Upload the image file to your GitHub repo
//    2. Copy an entry below and fill in the fields
//    3. Save - photo appears on both pages automatically
// ═══════════════════════════════════════════════════════════════

const EVERSTONE_GALLERY = [

  {
    id: "gallery-001",
    src: "deer-creek-home.png",
    width: 1448,
    height: 1086,
    caption: "1203 NE Meadow Crossing Drive · 3D Rendering",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: true
  },

  {
    id: "gallery-002",
    src: "community-deer-creek.jpg",
    width: 1400,
    height: 787,
    caption: "1203 NE Meadow Crossing Drive · Lot",
    community: "The Crossings at Deer Creek",
    category: "construction",
    featured: true
  },

  {
    id: "gallery-003",
    src: "hero-aerial.jpg",
    width: 1920,
    height: 1080,
    caption: "Aerial View of the Community",
    community: "The Crossings at Deer Creek",
    category: "community",
    featured: true
  },

  {
    id: "gallery-004",
    src: "community-pine-lake.jpg",
    width: 1400,
    height: 787,
    caption: "Aerial View of the Community",
    community: "Pine Lake Estates",
    category: "community",
    featured: false
  },

  // ── HOW TO ADD MORE PHOTOS ────────────────────────────────────
  // {
  //   id: "gallery-002",          // unique id, no spaces
  //   src: "your-photo.jpg",      // filename in same folder as this file
  //   width: 1600,                // pixel width  (prevents layout shift while loading)
  //   height: 1067,               // pixel height (right-click the file → Get Info / Properties)
  //   caption: "Photo caption",   // short description shown in gallery
  //   community: "Community Name",
  //   category: "exterior",       // exterior | interior | construction | community | detail
  //   featured: false             // true = shown first in home page rotation
  // },

];
