// -----------------------------------------------------------------------------
// Promento Custom Trophy & Awards — product catalogue data
// Edit / add items here; layouts read from this file so no component code needs
// to change when the catalogue grows.
// -----------------------------------------------------------------------------

export const categories = [
  {
    id: 'excellence',
    name: 'Award of Excellence Series',
    short: 'Excellence Series',
    tagline: 'Signature acrylic & metal recognition awards',
    description:
      'Plaque-style awards in acrylic and metal — circular gold-ring designs, tower and star silhouettes, dual-tone black & gold, and vivid red / blue gradient variants. Personalised with name, signature and performance text.',
    accent: '#F5C518',
  },
  {
    id: 'location',
    name: 'Location & Theme Awards',
    short: 'Location & Theme',
    tagline: 'Regional trophies celebrating landmarks & culture',
    description:
      'Custom regional-themed trophies featuring iconic landmarks and culture — a distinctive way to honour teams, destinations and milestones with a sense of place.',
    accent: '#FFCC29',
  },
  {
    id: 'corporate',
    name: 'Corporate & Custom Trophies',
    short: 'Corporate & Custom',
    tagline: 'Bespoke branded commissions, built to brief',
    description:
      'Fully bespoke branded corporate award commissions — designed around your identity, values and occasion, from concept sketch to finished piece.',
    accent: '#F5C518',
  },
]

// Small palette helper so each mock trophy renders with its own metallic look.
export const products = [
  // ---------------------------------------------------------------- Excellence
  {
    id: 'exc-ring-gold',
    category: 'excellence',
    name: 'Circular Gold-Ring Award',
    form: 'ring',
    palette: ['#FDE68A', '#F5C518', '#C99A0E'],
    material: 'Acrylic + Gold Metal Ring',
    tags: ['Circular', 'Gold', 'Metal'],
    blurb: 'A haloed gold ring framing a crystal-clear acrylic centre.',
  },
  {
    id: 'exc-tower-blackgold',
    category: 'excellence',
    name: 'Dual-Tone Tower Award',
    form: 'tower',
    palette: ['#F5C518', '#242424', '#0A0A0A'],
    material: 'Black Acrylic + Gold Inlay',
    tags: ['Tower', 'Black & Gold'],
    blurb: 'A soaring tower silhouette in confident black and gold.',
  },
  {
    id: 'exc-star-gold',
    category: 'excellence',
    name: 'Star Pinnacle Award',
    form: 'star',
    palette: ['#FFF6D6', '#F5C518', '#C99A0E'],
    material: 'Faceted Acrylic Star',
    tags: ['Star', 'Gold'],
    blurb: 'A faceted star that catches light from every angle.',
  },
  {
    id: 'exc-shield-red',
    category: 'excellence',
    name: 'Crimson Gradient Shield',
    form: 'shield',
    palette: ['#FF7A7A', '#E23744', '#7A0E17'],
    material: 'Gradient Acrylic',
    tags: ['Shield', 'Red Gradient'],
    blurb: 'A warm crimson gradient for standout achievement.',
  },
  {
    id: 'exc-wave-blue',
    category: 'excellence',
    name: 'Azure Gradient Wave',
    form: 'wave',
    palette: ['#7FD4FF', '#2A7DE1', '#0E2C7A'],
    material: 'Gradient Acrylic',
    tags: ['Wave', 'Blue Gradient'],
    blurb: 'A cool blue wave for milestones worth remembering.',
  },
  {
    id: 'exc-ring-dual',
    category: 'excellence',
    name: 'Eclipse Ring — Black Edition',
    form: 'ring',
    palette: ['#F5C518', '#1A1A1A', '#0A0A0A'],
    material: 'Metal Ring + Black Base',
    tags: ['Circular', 'Black & Gold', 'Metal'],
    blurb: 'The signature ring, reimagined in a moody black finish.',
  },

  // ----------------------------------------------------------------- Location
  {
    id: 'loc-goa',
    category: 'location',
    name: 'Goa — Lighthouse & Palm',
    form: 'theme',
    place: 'Goa',
    palette: ['#FFD8A8', '#F5A623', '#B4611A'],
    material: 'Layered Acrylic',
    tags: ['Goa', 'Coastal'],
    blurb: 'Sun, sand and a lighthouse standing over swaying palms.',
    motifs: ['Lighthouse', 'Palm', 'Waves'],
  },
  {
    id: 'loc-jaipur',
    category: 'location',
    name: 'Jaipur — Hawa Mahal & Peacock',
    form: 'theme',
    place: 'Jaipur',
    palette: ['#FFB4A2', '#E5677E', '#8A1E3F'],
    material: 'Layered Acrylic',
    tags: ['Jaipur', 'Heritage'],
    blurb: 'The Palace of Winds crowned by a regal peacock.',
    motifs: ['Hawa Mahal', 'Peacock'],
  },
  {
    id: 'loc-malaysia',
    category: 'location',
    name: 'Malaysia — Petronas Towers',
    form: 'theme',
    place: 'Malaysia',
    palette: ['#A5F3E0', '#22B8A6', '#0E6B5E'],
    material: 'Layered Acrylic',
    tags: ['Malaysia', 'Skyline'],
    blurb: 'Twin towers rising in sleek modern silhouette.',
    motifs: ['Petronas Towers', 'Skyline'],
  },
  {
    id: 'loc-kochi',
    category: 'location',
    name: 'Kochi — Kathakali & Houseboat',
    form: 'theme',
    place: 'Kochi',
    palette: ['#B7F0A8', '#4CAF50', '#1B5E20'],
    material: 'Layered Acrylic',
    tags: ['Kochi', 'Backwaters'],
    blurb: 'Kathakali colour drifting over serene backwaters.',
    motifs: ['Kathakali', 'Houseboat'],
  },
  {
    id: 'loc-mumbai',
    category: 'location',
    name: 'Mumbai — Taj & Sea Link',
    form: 'theme',
    place: 'Mumbai',
    palette: ['#FFE08A', '#F5C518', '#B4611A'],
    material: 'Layered Acrylic',
    tags: ['Mumbai', 'Cityscape'],
    blurb: 'The Taj and the Bandra-Worli Sea Link, city of dreams.',
    motifs: ['Taj Hotel', 'Sea Link'],
  },
  {
    id: 'loc-srilanka',
    category: 'location',
    name: 'Sri Lanka — Mask & Elephants',
    form: 'theme',
    place: 'Sri Lanka',
    palette: ['#FFC9A3', '#E07A3F', '#7A3410'],
    material: 'Layered Acrylic',
    tags: ['Sri Lanka', 'Culture'],
    blurb: 'A traditional mask flanked by gentle elephants.',
    motifs: ['Mask', 'Elephants'],
  },
  {
    id: 'loc-delhi',
    category: 'location',
    name: 'Delhi — India Gate & Dancer',
    form: 'theme',
    place: 'Delhi',
    palette: ['#FFDDA1', '#E8A13C', '#8A4B10'],
    material: 'Layered Acrylic',
    tags: ['Delhi', 'Heritage'],
    blurb: 'India Gate paired with a classical dancer in motion.',
    motifs: ['India Gate', 'Classical Dancer'],
  },

  // ---------------------------------------------------------------- Corporate
  {
    id: 'corp-monolith',
    category: 'corporate',
    name: 'Brand Monolith',
    form: 'tower',
    palette: ['#EDEDED', '#B8B8B8', '#6B6B6B'],
    material: 'Brushed Metal + Acrylic',
    tags: ['Corporate', 'Metal'],
    blurb: 'A minimal monolith for logo-forward corporate awards.',
  },
  {
    id: 'corp-crystal-cube',
    category: 'corporate',
    name: 'Crystal Signature Cube',
    form: 'shield',
    palette: ['#DFF3FF', '#9CC9E8', '#3E6E9C'],
    material: 'Optical Crystal',
    tags: ['Corporate', 'Crystal'],
    blurb: 'An optical crystal cube for engraved recognition.',
  },
  {
    id: 'corp-emblem',
    category: 'corporate',
    name: 'Custom Emblem Award',
    form: 'ring',
    palette: ['#FDE68A', '#F5C518', '#8A6A0E'],
    material: 'Laser-cut Metal + Acrylic',
    tags: ['Corporate', 'Bespoke'],
    blurb: 'Your emblem, laser-cut and set into a gold ring.',
  },
]

export const getByCategory = (categoryId) =>
  products.filter((p) => p.category === categoryId)

export const allTags = [...new Set(products.flatMap((p) => p.tags))]
