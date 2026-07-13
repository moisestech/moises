/**
 * Touch Grass: Circuit Floor — No Vacancy–specific proposal (hotel commission framing).
 * Research dossier remains at /research/touch-grass-circuit-floor.
 */

import type { NvBudgetLine, NvHotelStudy, NvPlaceholderMedia } from './volver-a-valer';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const touchGrassNv = {
  title: 'Touch Grass: Circuit Floor',
  subtitle: 'The Ground Is Online',
  route: '/grant/no-vacancy-2026/touch-grass',
  researchRoute: '/research/touch-grass-circuit-floor',
  status: 'Proposed site-specific installation · No Vacancy Miami Beach 2026',
  metadata: [
    'Temporary hotel installation',
    'Miami Beach',
    'Five-week duration',
    'Modular walkable floor · ~20 sq. ft.',
  ],
  thesis:
    'Even the attempt to “touch grass” happens inside the machine.',
  lede:
    'A modular walkable installation built from reclaimed circuit boards sealed beneath illuminated transparent tiles. Conceived for hotel lobby, lounge, or corridor conditions — obsolete electronics as luminous ground beneath the visitor’s feet.',
  experienceBeats: [
    {
      number: '01',
      title: 'Encounter',
      body: 'A polished architectural intervention appears on the hotel floor — familiar hospitality materiality.',
    },
    {
      number: '02',
      title: 'Recognition',
      body: 'At closer range, each tile reveals layers of discarded electronic infrastructure beneath the transparent surface.',
    },
    {
      number: '03',
      title: 'Ground',
      body: 'Walking becomes a double take: the command to leave the screen returns the body to computational waste as landscape.',
    },
  ],
  conceptStatement: `Online, “touch grass” assumes the physical and digital remain separate. Touch Grass: Circuit Floor begins from a different premise: obsolete motherboards, processors, and copper traces become literal ground. For No Vacancy, the work is sized for hotel interiors — approximately 20 square feet of reconfigurable 12-inch modules (default 4 × 5 grid, or a 2 × 10 strip) with a low-profile transition edge and an unobstructed bypass route.

Responsive lighting is part of the intended experience but develops incrementally; the sculpture remains visually complete as a softly illuminated floor without sensors. Materials align with Miami Beach sustainability requirements: no single-use plastic, expanded polystyrene, or polystyrene products. The piece photographs as a clean horizontal field with human scale and material close-ups of circuitry under glass.`,
  projectStatementSubmittable: {
    interestAndApproach: `No Vacancy offers a rare context: Miami Beach hotels as temporary public galleries during Art Week. For this application I propose Touch Grass: Circuit Floor, a modular walkable installation of reclaimed circuit boards sealed beneath illuminated transparent tiles. The title carries an internet-native command to leave the screen and return to reality. The sculpture inverts that premise: obsolete electronics become literal ground. Even the attempt to “touch grass” happens inside the machine.

The installation is conceived as approximately 20 square feet of reconfigurable modules that adapt to lobby, lounge, or corridor conditions once a hotel site is assigned. Responsive lighting is intended but incremental; the work remains complete as a softly illuminated floor. Materials meet Miami Beach sustainability requirements.`,
    idealSiteConditions: `Ideal placement is a publicly accessible interior with warm indirect lighting — lobby nook, lounge edge, or transitional corridor — where the modular field sits as a temporary freestanding platform without blocking circulation. A default 4 × 5 ft. configuration or a 2 × 10 ft. strip both work. Low-profile transition edge and bypass route are required. Final layout collaborative with Cultural Affairs and the assigned property.`,
  },
} as const;

export const touchGrassNvHero: NvPlaceholderMedia = {
  label: '[PLACEHOLDER] Hero — modular floor in hotel lobby',
  caption:
    'Establishing view: ~20 sq. ft. illuminated circuit floor in lobby nook; bypass clear; human scale.',
  alt: 'Placeholder hero for Touch Grass Circuit Floor in a hotel lobby',
  src: `${CDN}/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg`,
};

export const touchGrassNvSpecs = [
  { label: 'Current phase', value: 'Full-scale tile prototyping' },
  { label: 'Proposed footprint', value: 'Approximately 20 sq. ft.' },
  { label: 'Module dimensions', value: '12 × 12 in.' },
  { label: 'Proposed layout', value: 'Adaptable grid (default 4 × 5 ft. or 2 × 10 strip)' },
  {
    label: 'Materials',
    value:
      'Reclaimed circuit boards, electronic components, transparent walkable surface, structural frame, low-voltage LED lighting',
  },
  { label: 'Lighting', value: 'Internally illuminated — low-voltage edge lighting' },
  { label: 'Power', value: 'Low-voltage concealed wiring' },
  { label: 'Installation type', value: 'Temporary freestanding modular floor' },
  {
    label: 'Accessibility',
    value: 'Low-profile transition edge with unobstructed bypass route',
  },
] as const;

export const touchGrassNvHotels: NvHotelStudy[] = [
  {
    id: 'cadillac',
    hotelName: 'Cadillac Hotel & Beach Club',
    strategicRole: 'Bright lobby floor field',
    locationType: 'Lobby nook / lounge edge',
    beforeImage: {
      label: '[PLACEHOLDER] Cadillac — floor area before',
      caption: 'Unmodified floor zone for modular field.',
      alt: 'Placeholder Cadillac floor area before installation',
    },
    establishingView: {
      label: '[PLACEHOLDER] Cadillac — Image A Establishing View',
      caption: '4 × 5 illuminated floor field; resort light; bypass clear.',
      alt: 'Placeholder Touch Grass establishing view at Cadillac',
    },
    visitorExperience: {
      label: '[PLACEHOLDER] Cadillac — Image B Visitor Experience',
      caption: 'Visitor stepping onto / around luminous circuitry.',
      alt: 'Placeholder visitor on circuit floor at Cadillac',
    },
    materialDetail: {
      label: '[PLACEHOLDER] Cadillac — Image C Material Detail',
      caption: 'Circuit boards under transparent tile; edge lighting.',
      alt: 'Placeholder circuit tile detail',
    },
    installationElements: ['4 × 5 modular grid', 'Edge lighting', 'Transition ramp'],
    siteAdvantages: ['Long sight lines', 'Strong photo contrast'],
    constraints: ['Slip resistance required', 'No blocking bar circulation'],
    adaptationNotes: ['Concealed low-voltage run to nearest outlet', 'Freestanding platform'],
    whyThisLocation: 'Resort brightness makes the illuminated floor photograph as a clear horizontal gesture.',
  },
  {
    id: 'betsy',
    hotelName: 'The Betsy Hotel',
    strategicRole: 'Quieter lounge strip',
    locationType: 'Transitional corridor / lounge',
    beforeImage: {
      label: '[PLACEHOLDER] Betsy — corridor / lounge before',
      caption: 'Unmodified transitional floor.',
      alt: 'Placeholder Betsy floor before installation',
    },
    establishingView: {
      label: '[PLACEHOLDER] Betsy — Image A Establishing View',
      caption: '2 × 10 strip along wall; refined interior.',
      alt: 'Placeholder Touch Grass strip at The Betsy',
    },
    visitorExperience: {
      label: '[PLACEHOLDER] Betsy — Image B Visitor Experience',
      caption: 'Pause and recognition in quieter atmosphere.',
      alt: 'Placeholder visitor experience at The Betsy',
    },
    materialDetail: {
      label: '[PLACEHOLDER] Betsy — Image C Material Detail',
      caption: 'Motherboard strata under glass.',
      alt: 'Placeholder material detail at The Betsy',
    },
    installationElements: ['2 × 10 strip', 'Low-profile frame', 'Soft edge light'],
    siteAdvantages: ['Refined architecture', 'Controlled light'],
    constraints: ['Narrower footprint', 'Finish quality must match property'],
    adaptationNotes: ['Strip layout preferred over square field'],
    whyThisLocation: 'A quieter interior lets the circuit landscape read as architectural rather than spectacle.',
  },
  {
    id: 'casa-faena',
    hotelName: 'Casa Faena',
    strategicRole: 'Intimate floor alcove',
    locationType: 'Intimate lobby alcove',
    beforeImage: {
      label: '[PLACEHOLDER] Casa Faena — alcove before',
      caption: 'Unmodified alcove floor.',
      alt: 'Placeholder Casa Faena alcove before',
    },
    establishingView: {
      label: '[PLACEHOLDER] Casa Faena — Image A Establishing View',
      caption: 'Compact modular field in theatrical interior.',
      alt: 'Placeholder Touch Grass at Casa Faena',
    },
    visitorExperience: {
      label: '[PLACEHOLDER] Casa Faena — Image B Visitor Experience',
      caption: 'Close encounter with luminous electronic ground.',
      alt: 'Placeholder visitor experience at Casa Faena',
    },
    materialDetail: {
      label: '[PLACEHOLDER] Casa Faena — Image C Material Detail',
      caption: 'Reclaimed boards as mineral strata.',
      alt: 'Placeholder material detail Casa Faena',
    },
    installationElements: ['Compact grid', 'Concealed wiring', 'Bypass route'],
    siteAdvantages: ['Intimate scale', 'Strong material atmosphere'],
    constraints: ['Smaller area — fewer tiles', 'Egress clearances'],
    adaptationNotes: ['Prioritize material density over footprint size'],
    whyThisLocation: 'Intimate scale intensifies the double take between hospitality finish and e-waste ground.',
  },
];

export const touchGrassNvFabrication = [
  'Reclaimed circuit boards and electronic components',
  'Reusable modular tile frames',
  'Transparent walkable surface (material TBD after safety review)',
  'Low-voltage LED edge lighting',
  'Mechanically fastened, freestanding platform — no permanent hotel alteration',
  'Designed for disassembly, transport, and reconfiguration',
  'No single-use plastic, EPS, or polystyrene',
] as const;

export const touchGrassNvPrototypes = [
  'Single full-scale walkable tile (structure + transparency + lighting)',
  'Edge / transition ramp sample',
  'Slip-resistance test',
  'Proximity vs cluster lighting response (later phase)',
  'Load and deflection test',
] as const;

export const touchGrassNvBudget: NvBudgetLine[] = [
  { category: 'Reclaimed electronics acquisition / sorting', amount: 600 },
  { category: 'Tile frames and structural modules', amount: 2200 },
  { category: 'Transparent walking surfaces', amount: 1800 },
  { category: 'LED lighting and drivers', amount: 900 },
  { category: 'Fabrication labor / assistance', amount: 1800 },
  { category: 'Transition edges and safety finishing', amount: 700 },
  { category: 'Transportation and installation', amount: 900 },
  { category: 'Electrical / cabling', amount: 400 },
  { category: 'Safety treatment and insurance', amount: 500 },
  { category: 'Documentation', amount: 200 },
  { category: 'Contingency', amount: 1000 },
];

export const touchGrassNvBudgetTotal = touchGrassNvBudget.reduce((s, l) => s + l.amount, 0);

export const touchGrassNvRelated = [
  {
    slug: 'doomscrolling_treadmill',
    title: 'Doom Scrolling Treadmill',
    year: 2024,
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    blurb: 'Durational staging of the body in the feed — conceptual pair with Touch Grass Station.',
  },
  {
    slug: 'touchgrass_station',
    title: 'Touch Grass Station',
    year: 2024,
    image: `${CDN}/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg`,
    blurb: 'Direct precedent: “touch grass” as tactile counterpoint — now expanded into Circuit Floor.',
  },
  {
    slug: 'smart_shoppers',
    title: 'Smart Shoppers',
    year: 2024,
    image: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`,
    blurb: 'Cognition staged as consumer product — systems made sculptural.',
  },
] as const;

export const touchGrassNvClosing: NvPlaceholderMedia = {
  label: '[PLACEHOLDER] Closing — illuminated floor field',
  caption: 'Final image: luminous circuit landscape underfoot in hotel light.',
  alt: 'Placeholder closing image for Touch Grass No Vacancy proposal',
  src: `${CDN}/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-4_qjc5w3.jpg`,
};

export const touchGrassNvSeo = {
  title: 'Touch Grass: Circuit Floor — No Vacancy Miami Beach 2026 | Moises Sanabria',
  description:
    'Proposed modular walkable installation of reclaimed circuit boards for No Vacancy Miami Beach 2026 hotels. The ground is online.',
} as const;
