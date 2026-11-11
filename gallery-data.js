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

  // ── 1203 NE MEADOW CROSSING DRIVE · MOVE-IN READY ────────────

  {
    id: "gallery-001",
    src: "exterior-front.jpg",
    width: 2000,
    height: 1333,
    caption: "Front Exterior",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: true
  },

  {
    id: "gallery-002",
    src: "exterior-rear-sunset.jpg",
    width: 2000,
    height: 1333,
    caption: "Covered Deck at Sunset",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: true
  },

  {
    id: "gallery-003",
    src: "kitchen.jpg",
    width: 2000,
    height: 1334,
    caption: "Kitchen with Oversized Island",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: true
  },

  {
    id: "gallery-004",
    src: "living-room.jpg",
    width: 2000,
    height: 1333,
    caption: "Living Room with Stone Fireplace",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: true
  },

  {
    id: "gallery-005",
    src: "primary-bedroom.jpg",
    width: 2000,
    height: 1333,
    caption: "Primary Suite",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: true
  },

  {
    id: "gallery-006",
    src: "primary-bath.jpg",
    width: 2000,
    height: 1333,
    caption: "Primary Bath",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: true
  },

  {
    id: "gallery-007",
    src: "basement-wet-bar.jpg",
    width: 2000,
    height: 1333,
    caption: "Finished Basement Wet Bar",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: true
  },

  {
    id: "gallery-008",
    src: "exterior-dusk-aerial.jpg",
    width: 2000,
    height: 1333,
    caption: "Aerial View at Dusk",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: true
  },

  {
    id: "gallery-009",
    src: "detail-fireplace.jpg",
    width: 2000,
    height: 1326,
    caption: "Stacked Stone Fireplace",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: true
  },

  {
    id: "gallery-010",
    src: "exterior-front-angle.jpg",
    width: 2000,
    height: 1342,
    caption: "Board and Batten with Stone Facade",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-011",
    src: "exterior-front-sunset.jpg",
    width: 2000,
    height: 1333,
    caption: "Front Elevation at Sunset",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-012",
    src: "exterior-driveway.jpg",
    width: 2000,
    height: 1333,
    caption: "Three-Car Garage",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-013",
    src: "exterior-street.jpg",
    width: 2000,
    height: 1342,
    caption: "Street View",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-014",
    src: "exterior-rear-deck.jpg",
    width: 2000,
    height: 1333,
    caption: "Rear Elevation",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-015",
    src: "exterior-rear-patio.jpg",
    width: 2000,
    height: 1493,
    caption: "Covered Deck and Patio",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-016",
    src: "exterior-sunset-aerial.jpg",
    width: 2000,
    height: 1333,
    caption: "Sunset Over the Neighborhood",
    community: "The Crossings at Deer Creek",
    category: "exterior",
    featured: false
  },

  {
    id: "gallery-017",
    src: "kitchen-island.jpg",
    width: 2000,
    height: 1333,
    caption: "Kitchen Island and Dining",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-018",
    src: "kitchen-wide.jpg",
    width: 2000,
    height: 1333,
    caption: "Open Kitchen",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-019",
    src: "kitchen-sink.jpg",
    width: 2000,
    height: 1333,
    caption: "Quartz Counters and Gas Range",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-020",
    src: "great-room.jpg",
    width: 2000,
    height: 1333,
    caption: "Open Great Room",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-021",
    src: "great-room-stairs.jpg",
    width: 2000,
    height: 1333,
    caption: "Great Room and Kitchen",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-022",
    src: "living-fireplace.jpg",
    width: 2000,
    height: 1333,
    caption: "Living Room",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-023",
    src: "dining.jpg",
    width: 2000,
    height: 1333,
    caption: "Dining Area and Deck Access",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-024",
    src: "dining-window.jpg",
    width: 2000,
    height: 1333,
    caption: "Dining Nook",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-025",
    src: "entry.jpg",
    width: 2000,
    height: 1333,
    caption: "Entry and Staircase",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-026",
    src: "mudroom.jpg",
    width: 2000,
    height: 1333,
    caption: "Mudroom Drop Zone",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-027",
    src: "primary-shower.jpg",
    width: 2000,
    height: 1333,
    caption: "Tiled Walk-In Shower",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-028",
    src: "bathroom.jpg",
    width: 2000,
    height: 1333,
    caption: "Guest Bath",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-029",
    src: "basement-family-room.jpg",
    width: 2000,
    height: 1333,
    caption: "Basement Family Room",
    community: "The Crossings at Deer Creek",
    category: "interior",
    featured: false
  },

  {
    id: "gallery-030",
    src: "detail-chandelier.jpg",
    width: 2000,
    height: 1333,
    caption: "Dining Chandelier",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: false
  },

  {
    id: "gallery-031",
    src: "detail-range.jpg",
    width: 2000,
    height: 1333,
    caption: "Stainless Gas Range",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: false
  },

  {
    id: "gallery-032",
    src: "detail-cabinetry.jpg",
    width: 2000,
    height: 1332,
    caption: "Stained Cabinetry",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: false
  },

  {
    id: "gallery-033",
    src: "detail-shower.jpg",
    width: 2000,
    height: 1334,
    caption: "Matte Black Fixtures",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: false
  },

  {
    id: "gallery-034",
    src: "detail-stair.jpg",
    width: 2000,
    height: 1334,
    caption: "Stair Railing",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: false
  },

  {
    id: "gallery-035",
    src: "detail-pendant.jpg",
    width: 1333,
    height: 2000,
    caption: "Entry Pendant Light",
    community: "The Crossings at Deer Creek",
    category: "detail",
    featured: false
  },

  {
    id: "gallery-036",
    src: "community-sunset.jpg",
    width: 2000,
    height: 1333,
    caption: "Sunset Over Deer Creek",
    community: "The Crossings at Deer Creek",
    category: "community",
    featured: false
  },

  {
    id: "gallery-037",
    src: "community-aerial.jpg",
    width: 2000,
    height: 1333,
    caption: "The Crossings at Deer Creek",
    community: "The Crossings at Deer Creek",
    category: "community",
    featured: false
  },

  {
    id: "gallery-038",
    src: "community-lot-aerial.jpg",
    width: 2000,
    height: 1333,
    caption: "Neighborhood Aerial",
    community: "The Crossings at Deer Creek",
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
