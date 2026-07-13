/**
 * Volver a Valer — No Vacancy 2026 primary proposal content.
 */

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type NvPlaceholderMedia = {
  label: string;
  caption: string;
  /** Real image when available; omit for labeled placeholder frame */
  src?: string;
  alt: string;
};

export type NvHotelStudy = {
  id: string;
  hotelName: string;
  strategicRole: string;
  locationType: string;
  beforeImage: NvPlaceholderMedia;
  establishingView: NvPlaceholderMedia;
  visitorExperience: NvPlaceholderMedia;
  materialDetail: NvPlaceholderMedia;
  installationElements: string[];
  siteAdvantages: string[];
  constraints: string[];
  adaptationNotes: string[];
  whyThisLocation: string;
};

export type NvBudgetLine = { category: string; amount: number };

export const volverAValer = {
  title: 'Volver a Valer',
  subtitle: 'A Study in Migrating Value',
  route: '/grant/no-vacancy-2026/volver-a-valer',
  status: 'Proposed site-specific installation · No Vacancy Miami Beach 2026',
  metadata: [
    'Temporary hotel installation',
    'Miami Beach',
    'Five-week duration',
    'Modular and locally fabricated',
  ],
  thesis:
    'Currency can collapse without collapsing the value of the people who carried it.',
  lede:
    'A hotel waiting or check-in environment is transformed into a field of money, receipts, reflective surfaces, and objects associated with movement and exchange. Venezuelan bolívares form the installation’s primary material, while remittance receipts, U.S. currency fragments, hotel pricing, shipping labels, and other records broaden the work toward Latin American migration.',
  hookParagraphs: [
    'From a distance, the installation looks abundant and luxurious. At closer range, that abundance destabilizes: currencies do not hold equal value, receipts describe care and labor, and the hotel’s own prices become part of the artwork. In the final moment, visitors encounter themselves reflected inside the material system.',
    'The central question: When people migrate, what loses value, what gains value, and who decides?',
  ],
  spatialGesture: {
    primary: 'Partially wrapped waiting / check-in environment',
    secondary: 'Woven money and remittance textile',
    endpoint: 'Oil-black reflective plane or mirror',
  },
  experienceBeats: [
    {
      number: '01',
      title: 'Abundance',
      body: 'A hotel environment appears saturated with wealth — currency, receipts, and reflective surfaces reading as luxury before they resolve as documents.',
    },
    {
      number: '02',
      title: 'Recognition',
      body: 'The viewer realizes the material contains collapsed currencies, remittance records, labor, and migration — value systems made visible.',
    },
    {
      number: '03',
      title: 'Revaluation',
      body: 'The work asks how value returns through beauty, labor, memory, art, and collective belief — without claiming that art repairs economic collapse.',
    },
  ],
  conceptStatement: `Volver a Valer begins with Venezuelan currency and the artist’s own migration history as the material and emotional point of entry. The bolívar anchors the proposal in lived history: it creates visual abundance, makes the double take possible, and distinguishes the work from generic migration art.

The installation expands through systems shared across many diasporic communities — remittances, exchange, labor receipts, shipping labels, hotel pricing, and the reconstruction of value after arrival — rather than as a collage of national symbols. Venezuela remains the core without requiring the entire work to be exclusively Venezuelan. The environment is Venezuelan in authorship and entry point, Latin American in resonance, and universal in its question of what determines value.

No Vacancy places art inside Miami Beach hotels during Art Week: spaces of transit, leisure, and spectacle where visitors already negotiate desire, consumption, and image. A waiting or check-in alcove is an ideal site — public, temporary, and already structured around belonging and price. The work is designed to photograph clearly: a strong spatial gesture, a clean silhouette, human scale, and memorable material close-ups.`,
  projectStatementSubmittable: {
    interestAndApproach: `No Vacancy offers a rare context: Miami Beach hotels as temporary public galleries during Art Week, when hospitality architecture becomes a stage for contemporary art. I am drawn to this program because it places work inside spaces of transit, leisure, and spectacle — where visitors already negotiate desire, consumption, and image — while keeping the work free and accessible to the public.

For this application I propose Volver a Valer: A Study in Migrating Value. A hotel waiting or check-in environment is transformed into a field of money, receipts, reflective surfaces, and objects associated with movement and exchange. Venezuelan bolívares form the primary material; remittance receipts, U.S. currency fragments, hotel pricing, and shipping labels broaden the work toward Latin American migration experienced as systems — not as a pan-Latin collage of national symbols.

From a distance the installation reads as abundance. At closer range that abundance destabilizes: currencies do not hold equal value, receipts describe care and labor, and the hotel’s own prices become part of the artwork. Visitors encounter themselves reflected in an oil-black surface. The hopeful layer: currency can collapse without collapsing the value of the people who carried it.`,
    idealSiteConditions: `Ideal placement is a publicly accessible waiting alcove, check-in adjacent wall, or lounge edge where a partial wrap or long currency field can occupy enough architecture to read as an environment — not a tabletop object — without blocking required circulation. The work includes a clear bypass route and mechanically fastened modular panels designed for temporary installation. Final layout will be determined collaboratively with Cultural Affairs staff and the assigned property.`,
  },
} as const;

export const volverHero: NvPlaceholderMedia = {
  label: '[PLACEHOLDER] Hero — wrapped check-in / waiting alcove',
  caption:
    'Full-viewport establishing render: partially wrapped waiting environment, strong spatial gesture, human scale, clean silhouette. Replace with final hotel-accurate mockup.',
  alt: 'Placeholder for Volver a Valer hero — hotel waiting alcove wrapped in currency and reflective surfaces',
  src: `${CDN}/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg`,
};

export const volverMaterials: {
  title: string;
  role: string;
  media: NvPlaceholderMedia;
}[] = [
  {
    title: 'Venezuelan bolívares',
    role: 'Collapse, memory, personal origin — primary visual abundance.',
    media: {
      label: '[PLACEHOLDER] Material — bolívar field close-up',
      caption: 'Macro of stacked / woven bolívar notes.',
      alt: 'Close-up of Venezuelan bolívar notes as installation material',
      src: `${CDN}/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg`,
    },
  },
  {
    title: 'U.S. dollars',
    role: 'Destination currency, power, and comparison.',
    media: {
      label: '[PLACEHOLDER] Material — bolívar beside dollar',
      caption: 'Detail pairing collapsed and destination currencies.',
      alt: 'Placeholder pairing Venezuelan bolívares and U.S. dollar fragments',
    },
  },
  {
    title: 'Remittance receipts',
    role: 'Care transferred across distance.',
    media: {
      label: '[PLACEHOLDER] Material — remittance weaving',
      caption: 'Receipts woven into currency textile.',
      alt: 'Placeholder remittance receipts woven into currency',
    },
  },
  {
    title: 'Hotel invoices & pricing',
    role: 'Luxury and temporary belonging — the site’s own prices enter the work.',
    media: {
      label: '[PLACEHOLDER] Material — hotel rate placard',
      caption: 'Hotel room rates translated into unstable currency equivalents.',
      alt: 'Placeholder hotel pricing placard within the installation',
    },
  },
  {
    title: 'Labor receipts / timecards',
    role: 'Migrant value translated into hourly work.',
    media: {
      label: '[PLACEHOLDER] Material — labor receipt detail',
      caption: 'Work invoices and timecards as material layer.',
      alt: 'Placeholder labor receipts in the material field',
    },
  },
  {
    title: 'Shipping & luggage labels',
    role: 'Migration as logistics.',
    media: {
      label: '[PLACEHOLDER] Material — shipping labels',
      caption: 'Luggage tags and shipping labels in the field.',
      alt: 'Placeholder shipping and luggage labels',
    },
  },
  {
    title: 'Woven forms',
    role: 'Cultural knowledge becoming structure — secondary heritage gesture.',
    media: {
      label: '[PLACEHOLDER] Material — woven money textile',
      caption: 'Woven money / remittance textile sample.',
      alt: 'Placeholder woven currency and remittance textile',
    },
  },
  {
    title: 'Reflective black panels',
    role: 'Viewers implicated in assigning value — final encounter.',
    media: {
      label: '[PLACEHOLDER] Material — oil-black reflective plane',
      caption: 'Viewer reflection in black surface.',
      alt: 'Placeholder oil-black reflective panel with visitor reflection',
    },
  },
];

export const volverHotelStudies: NvHotelStudy[] = [
  {
    id: 'cadillac',
    hotelName: 'Cadillac Hotel & Beach Club',
    strategicRole: 'Most visually impressive mockup',
    locationType: 'Bright resort lobby / bar-lounge circulation',
    beforeImage: {
      label: '[PLACEHOLDER] Cadillac — unmodified lobby 360 / photo',
      caption: 'Scout capture: center of proposed installation area before intervention.',
      alt: 'Placeholder unmodified Cadillac Hotel lobby',
    },
    establishingView: {
      label: '[PLACEHOLDER] Cadillac — Image A Establishing View',
      caption: 'Wrapped waiting alcove or long currency runner; resort light; human scale; bypass clear.',
      alt: 'Placeholder establishing render for Cadillac Hotel installation',
    },
    visitorExperience: {
      label: '[PLACEHOLDER] Cadillac — Image B Visitor Experience',
      caption: 'Person pausing at abundance → recognition; circulation path visible.',
      alt: 'Placeholder visitor experience at Cadillac Hotel',
    },
    materialDetail: {
      label: '[PLACEHOLDER] Cadillac — Image C Material Detail',
      caption: 'Bolívares, receipts, stitching; reflective end surface.',
      alt: 'Placeholder material detail for Cadillac Hotel study',
    },
    installationElements: [
      'Long currency runner or partial waiting-area wrap',
      'Dry money cascade (optional secondary)',
      'Reflective end surface',
    ],
    siteAdvantages: [
      'Bright resort abundance and long sight lines',
      'Strong contrast between leisure and unstable value',
      'Likely best hero photography conditions',
    ],
    constraints: [
      'Must not obstruct bar/lounge operations',
      'Evacuation path and sprinkler clearances required',
    ],
    adaptationNotes: [
      'Dimensions TBD after scout measurements',
      'Prefer freestanding / mechanically fastened modules',
      'Works without interaction; soft lighting only',
    ],
    whyThisLocation:
      'Resort brightness and circulation make abundance photographable while staging the double take between leisure and devalued currency.',
  },
  {
    id: 'betsy',
    hotelName: 'The Betsy Hotel',
    strategicRole: 'Most intellectually credible mockup',
    locationType: 'Refined check-in / waiting architecture',
    beforeImage: {
      label: '[PLACEHOLDER] Betsy — unmodified check-in / waiting',
      caption: 'Scout capture: arches, reflective surfaces, quieter atmosphere.',
      alt: 'Placeholder unmodified The Betsy Hotel interior',
    },
    establishingView: {
      label: '[PLACEHOLDER] Betsy — Image A Establishing View',
      caption: 'Wrapped waiting/check-in wall; black reflective desk; subtler woven element.',
      alt: 'Placeholder establishing render for The Betsy Hotel',
    },
    visitorExperience: {
      label: '[PLACEHOLDER] Betsy — Image B Visitor Experience',
      caption: 'Quiet pause; revaluation language supported by refined architecture.',
      alt: 'Placeholder visitor experience at The Betsy',
    },
    materialDetail: {
      label: '[PLACEHOLDER] Betsy — Image C Material Detail',
      caption: 'Hotel price translations; remittance weave; reflective desk surface.',
      alt: 'Placeholder material detail for The Betsy study',
    },
    installationElements: [
      'Wrapped waiting / check-in wall',
      'Black reflective desk or threshold',
      'Hotel price translation placards',
      'Subtler woven remittance element',
    ],
    siteAdvantages: [
      'Cultural and literary association',
      'Refined architecture supports sophisticated application image',
      'Existing reflective surfaces and arches',
    ],
    constraints: [
      'Finish must meet luxury hospitality standards',
      'Limited wall treatment may be required by property',
    ],
    adaptationNotes: [
      'Prioritize clean silhouette over maximal coverage',
      'Price placards integrate hotel’s own rate language',
    ],
    whyThisLocation:
      'Quieter conceptual atmosphere and refined architecture make revaluation feel credible rather than spectacular alone.',
  },
  {
    id: 'casa-faena',
    hotelName: 'Casa Faena',
    strategicRole: 'Most culturally embodied mockup',
    locationType: 'Intimate theatrical interior',
    beforeImage: {
      label: '[PLACEHOLDER] Casa Faena — unmodified interior',
      caption: 'Scout capture: richer material atmosphere, intimate scale.',
      alt: 'Placeholder unmodified Casa Faena interior',
    },
    establishingView: {
      label: '[PLACEHOLDER] Casa Faena — Image A Establishing View',
      caption: 'Money-woven textile as structural heritage form; partial bolívar wall.',
      alt: 'Placeholder establishing render for Casa Faena',
    },
    visitorExperience: {
      label: '[PLACEHOLDER] Casa Faena — Image B Visitor Experience',
      caption: 'Intimate encounter with woven form and reflective platform.',
      alt: 'Placeholder visitor experience at Casa Faena',
    },
    materialDetail: {
      label: '[PLACEHOLDER] Casa Faena — Image C Material Detail',
      caption: 'Chinchorro-adjacent weave; remittance integration; oil-black platform.',
      alt: 'Placeholder material detail for Casa Faena study',
    },
    installationElements: [
      'Money-woven textile (chinchorro-adjacent, not literal hammock)',
      'Partial bolívar wall',
      'Remittance receipt integration',
      'Oil-black reflective platform',
    ],
    siteAdvantages: [
      'Intimate and theatrical — heritage can feel structural',
      'Richer material atmosphere for woven forms',
    ],
    constraints: [
      'Smaller footprint — avoid overcrowding circulation',
      'Attachment points TBD with property',
    ],
    adaptationNotes: [
      'Heritage form must remain structural, not illustrative costume',
      'Scale for intimacy without blocking egress',
    ],
    whyThisLocation:
      'Allows woven heritage and remittance material to read as structure inside a theatrical hospitality interior.',
  },
];

export const volverVisitorJourney = [
  'ENTRY',
  'VISUAL ABUNDANCE',
  'CURRENCY RECOGNITION',
  'HOTEL PRICE COMPARISON',
  'MATERIAL / MIGRATION DETAILS',
  'REFLECTIVE ENCOUNTER',
] as const;

export const volverValueTransformations = [
  {
    mechanism: 'Labor',
    transformation: 'Notes become woven, sealed, arranged, and supported.',
  },
  {
    mechanism: 'Context',
    transformation: 'Currency enters a luxury hotel.',
  },
  {
    mechanism: 'Authorship',
    transformation: 'Material becomes a contemporary artwork.',
  },
  {
    mechanism: 'Memory',
    transformation: 'Notes retain histories that exceed exchange value.',
  },
  {
    mechanism: 'Collective belief',
    transformation: 'Viewers and institutions participate in revaluation.',
  },
] as const;

export const volverLatinResonance = {
  heading: 'Latin American resonance',
  body: `Beginning with Venezuelan currency and the artist’s own migration history, the installation expands through material systems shared across many diasporic communities: remittances, exchange, labor, shipping, translation, adaptation, and the reconstruction of value after arrival. The work does not treat “the Latin American experience” as one story. It organizes broader material through systems — not national symbols — so Venezuela remains the core without flattening distinct histories into texture.`,
  flows: [
    { stage: 'HOME', items: 'currency / memory / family' },
    { stage: 'TRANSFER', items: 'remittance / shipping / phone / receipt' },
    { stage: 'ARRIVAL', items: 'labor / hotel / rent / reinvention' },
  ],
} as const;

export const volverFabrication = [
  'Reclaimed or obsolete paper currency',
  'Recovered receipts and paper records',
  'Reusable modular backing panels',
  'Mechanically fastened rather than permanently glued to hotel surfaces',
  'Reusable acrylic protection',
  'Low-energy integrated lighting',
  'Components designed for disassembly',
  'No single-use scenic construction',
  'Post-exhibition edition or archive strategy',
] as const;

export const volverPrototypes = [
  '2 × 2-foot currency panel',
  'Receipt-to-currency weaving sample',
  'Non-slip acrylic floor module (if floor element used)',
  'Reflective black finish test',
  'Fire-retardant paper treatment',
  'Mock hotel pricing placard',
  'UV and humidity test',
  'Mounting / mechanical fastener test',
] as const;

export const volverBudget: NvBudgetLine[] = [
  { category: 'Currency and paper-material acquisition', amount: 800 },
  { category: 'Modular panels / armatures', amount: 1800 },
  { category: 'Acrylic protection / floor modules', amount: 1500 },
  { category: 'Woven or suspended feature', amount: 1100 },
  { category: 'Reflective surfaces and signage', amount: 750 },
  { category: 'Fabrication labor / assistance', amount: 1600 },
  { category: 'Transportation and installation', amount: 900 },
  { category: 'Lighting / electrical', amount: 400 },
  { category: 'Safety treatment and insurance', amount: 500 },
  { category: 'Documentation', amount: 350 },
  { category: 'Contingency', amount: 300 },
];

export const volverBudgetTotal = volverBudget.reduce((sum, line) => sum + line.amount, 0);

export const volverRelatedWorks = [
  {
    slug: 'price_of_existence',
    title: 'Price of Existence',
    year: 2024,
    image: `${CDN}/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg`,
    blurb:
      'Precedent: death and monetary collapse through the body. Volver a Valer moves into hospitality, migration, collective value, and possible renewal.',
  },
  {
    slug: 'privacy_is_a_luxury',
    title: 'Privacy Is a Luxury',
    year: 2025,
    image: `${CDN}/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg`,
    blurb: 'Privacy transformed from right into purchasable product — systems made material.',
  },
  {
    slug: 'doomscrolling_treadmill',
    title: 'Doom Scrolling Treadmill',
    year: 2024,
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    blurb: 'Durational public installation staging the body inside attention economies.',
  },
] as const;

export const volverClosing: NvPlaceholderMedia = {
  label: '[PLACEHOLDER] Closing — emotionally complete render',
  caption: 'Final image: wrapped environment + reflective encounter. What survives when value does not?',
  alt: 'Placeholder closing render for Volver a Valer',
  src: `${CDN}/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg`,
};

export const volverSeo = {
  title: 'Volver a Valer — No Vacancy Miami Beach 2026 | Moises Sanabria',
  description:
    'Proposed site-specific hotel installation for No Vacancy Miami Beach 2026: Volver a Valer — A Study in Migrating Value. Venezuelan currency as entry point; Latin American migration as systems of exchange.',
} as const;
