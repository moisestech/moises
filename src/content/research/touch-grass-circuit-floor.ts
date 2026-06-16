export type ResearchMediaLabel =
  | 'Concept rendering'
  | 'Prototype photograph'
  | 'Material study'
  | 'Technical diagram'
  | 'Video';

export type ResearchMedia = {
  src: string;
  alt: string;
  caption?: string;
  label?: ResearchMediaLabel;
  orientation?: 'landscape' | 'portrait' | 'square';
  layout?: 'full' | 'half';
  isPlaceholder?: boolean;
};

export type PrototypeEntry = {
  date?: string;
  prototype: string;
  title: string;
  description: string;
  findings?: string[];
  nextSteps?: string[];
  media?: ResearchMedia[];
};

export type LayoutDiagram = {
  id: string;
  title: string;
  description: string;
  media: ResearchMedia;
};

export type RelatedWork = {
  slug: string;
  title: string;
  year: number;
  image: string;
  blurb: string;
};

export type TechnicalSpec = {
  label: string;
  value: string;
};

export const touchGrassCircuitFloor = {
  title: 'Touch Grass: Circuit Floor',
  subtitle: 'The Ground Is Online',
  year: 2026,
  status: 'In development',
  metadata:
    'Interactive floor installation · Reclaimed electronics, illuminated modular tiles, responsive lighting · In development',
  lede:
    'The digital world is no longer somewhere else. It has become the environment. This modular walkable installation gives obsolete electronic infrastructure a physical presence as luminous ground.',
  introduction: [
    'Touch Grass: Circuit Floor is a modular walkable installation built from reclaimed circuit boards sealed beneath illuminated transparent tiles. As visitors move across the sculpture, the electronic landscape beneath their feet is intended to glow with shifting green light.',
    'Online, “touch grass” is a command to leave the screen and return to reality. The phrase assumes that the physical and digital worlds remain separate: that it is still possible to step away from the network and return to something untouched by it.',
    'This installation begins from a different premise. Obsolete motherboards, processors, copper traces, and fragmented electronic components are arranged beneath the floor like geological strata. The surface resembles a luminous artificial landscape: part circuit board, part mineral deposit, part architectural flooring system. Visitors do not merely look at the sculpture. They step onto it.',
  ],
  proposedExperience: [
    'The installation is composed of modular illuminated tiles that can be configured in response to a specific site. A visitor initially encounters what appears to be a polished architectural intervention. At closer range, each block reveals layers of discarded electronic infrastructure beneath the transparent surface.',
    'The intended lighting system is subtle but responsive. As visitors approach or walk across the floor, light is designed to travel through the circuit-board terrain, briefly awakening the obsolete electronics beneath their weight. Responsive lighting remains part of the intended experience, but the interaction system is being developed incrementally. The sculpture is designed to remain visually complete as a softly illuminated floor even when no visitor is actively crossing it.',
    'The work is designed to function in a publicly accessible interior space such as a lobby, corridor, lounge, or transitional area. Its modular structure allows the footprint to adapt to the existing architecture without permanently altering the site. For a temporary public installation, the final configuration will prioritize a stable, slip-resistant walking surface, a safe transition edge, concealed low-voltage wiring, and an unobstructed circulation path around the work.',
  ],
  materialLogic: [
    'Digital life is often described through the language of clouds, platforms, streams, and virtual spaces. The metaphor hides the physical systems beneath the interface: metals, circuits, servers, power, extraction, and waste.',
    'Touch Grass: Circuit Floor gives this hidden material layer a physical presence. Reclaimed circuit boards are not treated as disposable debris or nostalgic artifacts. They become the ground itself.',
    'The project is being developed as a reusable modular system. Individual tiles can be removed, repaired, transported, and rearranged for future exhibitions. Materials are selected with Miami Beach sustainability initiatives in mind: no single-use plastic, expanded polystyrene, or polystyrene products.',
  ],
  technicalDevelopment: [
    'The installation is being developed as a reusable modular floor system composed of illuminated blocks containing reclaimed circuit boards and electronic components. The initial configuration is conceived as an adaptable field of approximately 20 square feet, with individual modules that can be rearranged in response to the architecture of an assigned site.',
    'The current prototype phase focuses on the structural and visual performance of a single walkable tile: its transparent top surface, low-profile frame, edge lighting, reclaimed electronic material, and relationship to the existing floor.',
    'Future tests will compare proximity-based activation, cluster-based response, and pressure-sensitive approaches. The final walking-surface material, thickness, edge condition, and structural assembly remain subject to fabrication review.',
  ],
  projectStatus:
    'The first full-scale prototype will test the relationship between bodily weight, illuminated circuitry, and architectural scale. Future iterations will expand the system into an adaptable walkable field of approximately 20 square feet.',
} as const;

export const touchGrassTechnicalSpecs: TechnicalSpec[] = [
  { label: 'Current phase', value: 'Full-scale tile prototyping' },
  { label: 'Proposed footprint', value: 'Approximately 20 sq. ft.' },
  { label: 'Module dimensions', value: '12 × 12 in.' },
  { label: 'Proposed layout', value: 'Adaptable modular grid (default 4 × 5 ft.)' },
  {
    label: 'Materials',
    value:
      'Reclaimed circuit boards, electronic components, transparent walkable surface, structural frame, low-voltage LED lighting',
  },
  { label: 'Lighting', value: 'Internally illuminated — low-voltage edge lighting (primary)' },
  { label: 'Activation method', value: 'Responsive lighting system under development' },
  { label: 'Power', value: 'Low-voltage concealed wiring' },
  { label: 'Installation type', value: 'Temporary freestanding modular floor' },
  {
    label: 'Accessibility approach',
    value: 'Low-profile transition edge with an unobstructed bypass route',
  },
  { label: 'Status', value: 'In development' },
];

/** Replace `isPlaceholder` entries after uploading to Cloudinary `research/touch-grass-circuit-floor/`. */
export const touchGrassGalleryMedia: ResearchMedia[] = [
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
    alt: 'Concept study — visitor stepping across a luminous motherboard floor in a boutique hotel lobby (placeholder until final concept rendering)',
    caption:
      'Lobby activation concept — modular walkable field with clear bypass route. Final render pending.',
    label: 'Concept rendering',
    orientation: 'landscape',
    layout: 'full',
    isPlaceholder: true,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg',
    alt: 'Concept study — wide lobby view of modular illuminated floor installation (placeholder)',
    caption: 'Wide lobby view — temporary freestanding platform, not flush-mounted.',
    label: 'Concept rendering',
    orientation: 'landscape',
    layout: 'full',
    isPlaceholder: true,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831898/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-4_qjc5w3.jpg',
    alt: 'Concept study — overhead modular grid layout (placeholder)',
    caption: 'Overhead grid — 4 × 5 ft. default configuration with circulation path.',
    label: 'Concept rendering',
    orientation: 'square',
    layout: 'half',
    isPlaceholder: true,
  },
  {
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831896/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-5_rji3st.jpg',
    alt: 'Concept study — workshop material sorting and circuit-board collage (placeholder)',
    caption: 'Studio process — reclaimed boards and component sorting.',
    label: 'Material study',
    orientation: 'landscape',
    layout: 'half',
    isPlaceholder: true,
  },
];

export const touchGrassHeroMedia: ResearchMedia = {
  src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
  alt: 'Touch Grass: Circuit Floor — concept rendering of walkable illuminated modular floor in hotel lobby (placeholder until final hero render)',
  caption:
    'Concept rendering — lobby activation study. Replace with hero-lobby-concept-01 after final render pass.',
  label: 'Concept rendering',
  orientation: 'landscape',
  isPlaceholder: true,
};

export const touchGrassPrototypeLog: PrototypeEntry[] = [
  {
    date: '2026',
    prototype: 'Prototype 01',
    title: 'Passive Walkable Light Tile',
    description:
      'Prove that a full-scale 12 × 12 in. tile can safely hold a person, look visually rich under edge illumination, and read as a believable architectural unit with reclaimed circuitry visible beneath a transparent walkable surface.',
    findings: [
      'Pending — first full-scale tile under construction.',
    ],
    nextSteps: [
      'Fabricate single tile with dark recessed frame and low-voltage edge lighting.',
      'Test transparent load-bearing surface with fabricator guidance.',
      'Document illumination, material collage, and structural depth.',
    ],
    media: [],
  },
  {
    date: '2026',
    prototype: 'Prototype 02',
    title: 'Three-Tile Activation Sequence',
    description:
      'Test whether a small sequence of three modules begins to feel like terrain rather than a single illuminated object. Add basic cable routing and one simple activation method.',
    findings: ['Pending — follows Prototype 01.'],
    nextSteps: [
      'Compare proximity-based vs. cluster-based activation.',
      'Produce short walking test video across three tiles.',
    ],
    media: [],
  },
  {
    date: '2026',
    prototype: 'Prototype 03',
    title: 'Layout and Installation Study',
    description:
      'Before fabricating all 20 modules, produce overhead floor plans, sectional diagrams, and alternate hotel-layout visualizations with clear circulation paths.',
    findings: ['Pending — follows Prototype 02.'],
    nextSteps: [
      'Diagram 4 × 5 grid, 2 × 10 strip, and staggered configurations.',
      'Document bypass route and transition edge for hotel partners.',
    ],
    media: [],
  },
];

export const touchGrassLayoutDiagrams: LayoutDiagram[] = [
  {
    id: 'grid-4x5',
    title: '4 × 5 grid',
    description: 'Default configuration — approximately 4 × 5 ft. lobby nook or freestanding field.',
    media: {
      src: '',
      alt: 'Diagram — 4 × 5 modular grid layout (pending)',
      caption: 'Technical diagram pending — diagram-layout-grid-4x5.svg',
      label: 'Technical diagram',
      orientation: 'landscape',
      isPlaceholder: true,
    },
  },
  {
    id: 'strip-2x10',
    title: '2 × 10 strip',
    description: 'Corridor edge or passage — approximately 2 × 10 ft. linear configuration.',
    media: {
      src: '',
      alt: 'Diagram — 2 × 10 strip layout (pending)',
      caption: 'Technical diagram pending — diagram-layout-strip-2x10.svg',
      label: 'Technical diagram',
      orientation: 'landscape',
      isPlaceholder: true,
    },
  },
  {
    id: 'staggered',
    title: 'Staggered modular field',
    description: 'Less architectural, more landscape-like — adaptable to site constraints.',
    media: {
      src: '',
      alt: 'Diagram — staggered modular field layout (pending)',
      caption: 'Technical diagram pending — diagram-layout-staggered.svg',
      label: 'Technical diagram',
      orientation: 'landscape',
      isPlaceholder: true,
    },
  },
];

export const touchGrassRelatedWorks: RelatedWork[] = [
  {
    slug: 'touchgrass_station',
    title: 'Touch Grass Station',
    year: 2024,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
    blurb:
      'Conceptual precedent — the internet-native command to “touch grass” staged as tactile counterpoint to digital immersion.',
  },
  {
    slug: 'smart_shoppers',
    title: 'Smart Shoppers',
    year: 2024,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg',
    blurb:
      'Consumer form meets cognition as commodity — recognizable materials and accessible humor in installation scale.',
  },
  {
    slug: 'price_of_existence',
    title: 'Price of Existence',
    year: 2024,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg',
    blurb:
      'Material transformation at institutional scale — value, circulation, and mortality made legible in public space.',
  },
  {
    slug: 'privacy_is_a_luxury',
    title: 'Privacy Is a Luxury',
    year: 2025,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg',
    blurb:
      'Familiar electronics transformed into polished, symbolically dense sculpture — networked life as physical object.',
  },
];

/** Index card image for /research grid — update when hero-lobby-concept-01 is uploaded. */
export const touchGrassIndexImage = {
  url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831899/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-3_ugyjht.jpg',
  caption: 'Touch Grass: Circuit Floor — in development (concept study placeholder)',
};
