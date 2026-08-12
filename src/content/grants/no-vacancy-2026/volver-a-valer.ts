/**
 * Volver a Valer: The Value We Carry
 * Official No Vacancy Miami Beach 2026 proposal content — practical canon.
 */
import type { GrantBudgetLine, GrantRelatedWork } from '@/components/grant/shared/GrantProposalUi';
import type { VolverIconId } from '@/components/grant/no-vacancy/VolverIcons';
import {
  toGrantMedia,
  volverMedia,
  type VolverHotelId,
  type VolverMediaAsset,
} from '@/content/grants/no-vacancy-2026/volver-a-valer-media';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type NvBudgetLine = GrantBudgetLine;

export type VolverChapterAccent =
  | 'arrival'
  | 'recognition'
  | 'embodiment'
  | 'exchange'
  | 'operations';

export type VolverChapter = {
  id: string;
  number: string;
  label: string;
  accent: VolverChapterAccent;
};

export type NvHotelAdaptation = {
  id: VolverHotelId;
  hotelName: string;
  strategicRole: string;
  locationType: string;
  configuration: 'compact' | 'intimate' | 'full';
  panorama: VolverMediaAsset;
  poster: VolverMediaAsset;
  proposedRender: VolverMediaAsset;
  installationElements: string[];
  siteAdvantages: string[];
  constraints: string[];
  adaptationNotes: string[];
  dimensionsNote: string;
  whyThisLocation: string;
};

export type VolverSculpture = {
  id: string;
  title: string;
  role: string;
  workingTitle?: boolean;
  conceptualRole: string[];
  materials: string[];
  dimensions: string;
  construction: string[];
  siteVariation: string;
  riskNote: string;
  /** Always-visible scan sentence */
  summary: string;
  body: string;
  overview: VolverMediaAsset;
  detail?: VolverMediaAsset;
  reveal: {
    iconId: VolverIconId;
    caption: string;
    media: VolverMediaAsset;
  };
};

export const volverAValer = {
  title: 'Volver a Valer',
  subtitle: 'The Value We Carry',
  route: '/grant/no-vacancy-2026/volver-a-valer',
  status: 'Proposed site-specific installation · No Vacancy Miami Beach 2026',
  oneSentenceForm:
    'Volver a Valer is a site-specific hotel installation composed of a printed floor drawn from selected Latin American currencies and migration documents, together with two or three life-size sculptures that stage humor, cultural memory, hospitality, and systems of exchange.',
  physicalFormParagraph:
    'A removable laminated currency floor (Common Tender) transforms part of a hotel lobby, waiting area, or check-in zone. Two or three life-size sculptures — El Cuentachiste, Harina de Otro Costal, and Casa de Cambio — adapt to circulation and the assigned property across a five-week temporary installation.',
  thesis: 'Currencies can be devalued. People cannot.',
  criticalDistinction:
    'The installation does not restore value to migrants. It exposes the economic, political, and cultural systems — from remittance corridors to redenomination — that repeatedly fail to recognize the value they already carry.',
  emotionalSequence: 'beautiful → abundant → familiar → strange → unresolved but hopeful',
} as const;

/** Sticky nav + per-section accents — one accent per chapter */
export const volverChapters: readonly VolverChapter[] = [
  { id: 'form', number: '01', label: 'Form', accent: 'arrival' },
  { id: 'journey', number: '02', label: 'Experience', accent: 'recognition' },
  { id: 'common-tender', number: '03', label: 'Common Tender', accent: 'arrival' },
  { id: 'el-cuentachiste', number: '04', label: 'El Cuentachiste', accent: 'embodiment' },
  { id: 'harina-de-otro-costal', number: '05', label: 'Harina de Otro Costal', accent: 'embodiment' },
  { id: 'casa-de-cambio', number: '06', label: 'Casa de Cambio', accent: 'exchange' },
  { id: 'hotels', number: '07', label: 'Hotels', accent: 'operations' },
  { id: 'archive', number: '08', label: 'Archive', accent: 'recognition' },
  { id: 'feasibility', number: '09', label: 'Feasibility', accent: 'operations' },
  { id: 'prototypes', number: '10', label: 'Prototypes', accent: 'operations' },
  { id: 'budget', number: '11', label: 'Budget', accent: 'operations' },
  { id: 'lineage', number: '12', label: 'Lineage', accent: 'exchange' },
] as const;

export const volverChapterAccentClass: Record<VolverChapterAccent, string> = {
  arrival: 'border-l-[#C4A574] dark:border-l-[#D4B896]',
  recognition: 'border-l-[#1F6B5A] dark:border-l-[#7EB8A8]',
  embodiment: 'border-l-[#8B6B3D] dark:border-l-[#C4A574]',
  exchange: 'border-l-stone-900 dark:border-l-stone-100',
  operations: 'border-l-[#5C6670] dark:border-l-stone-400',
};

/** Glossary for VolverKeywordText hover/focus tooltips */
export const volverGlossary = [
  {
    term: 'bolívar',
    definition: 'Venezuelan currency; the material and historical point of entry for the artist’s practice.',
  },
  {
    term: 'remittance',
    definition: 'Money and care transferred across distance — a shared migration document, not a national symbol.',
  },
  {
    term: 'chinchorro',
    definition: 'A woven hammock form; here nonfunctional, freestanding, and restrained as cultural structure.',
  },
  {
    term: 'redenomination',
    definition: 'Official replacement of a currency’s nominal value — history written into the floor archive.',
  },
  {
    term: 'casa de cambio',
    definition: 'Currency-exchange house; the kiosk sculpture that stages institutional calculation of value.',
  },
] as const;

export const volverFloor = {
  id: 'common-tender',
  title: 'Common Tender',
  role: 'Primary environmental field — printed currency floor',
  summary:
    'A removable laminated floor of selected Latin American currencies and remittance documents that reads as a luxury carpet from a distance.',
  body: `A removable, laminated, non-slip modular floor system transforms part of the hotel lobby, waiting area, bar transition, or check-in zone into a continuous field of selected Latin American currencies and migration documents.

From a distance the surface resembles a luxury hotel carpet. At close range it resolves into historical, obsolete, demonetized, or materially transformed currency imagery together with remittance slips, exchange receipts, hotel invoices, shipping labels, serial numbers, and security patterns.

Maximum planning footprint is approximately 12 × 24 feet, adapted downward to the assigned site. Notes appear at believable scale where appropriate and permitted. Current or restricted banknotes are cropped, overlapped, transformed, rescaled, or abstracted. The final floor is built from a real master texture — photographed or scanned source material under legal review — then perspective-mapped into hotel photography. No permanent alteration to the hotel floor.`,
  publicMaterialTerm: 'removable laminated non-slip modular floor graphics',
  dimensions: 'Maximum planning footprint ≈ 12 × 24 ft (under ≈ 300 sq ft); site-adapted downward',
  materials: [
    'Selected historical / obsolete / demonetized Latin American and Caribbean currency imagery',
    'Remittance slips, exchange receipts, hotel invoices, shipping labels',
    'Serial numbers and transformed security patterns',
    'Laminated non-slip modular panels (PVC-free preferred after survey)',
  ],
  construction: [
    'Modular panels mechanically placed — no adhesive lock to hotel finish',
    'Real master texture (not AI-generated banknotes as final art)',
    'Banknote-image and brand-review checklist during prototype phase',
  ],
  siteVariation: 'Largest field at Cadillac; reduced footprints at Betsy and Casa Faena.',
  overview: volverMedia.currencyFloorOverview,
  detail: volverMedia.currencyFloorDetail,
  reveal: {
    iconId: 'floor' as const,
    caption:
      'Alternate pattern or note-scale still for Common Tender. Replace this slot with your floor icon or detail photograph.',
    media: volverMedia.revealFloorPattern,
  },
} as const;

export const volverSculptures: VolverSculpture[] = [
  {
    id: 'el-cuentachiste',
    title: 'El Cuentachiste',
    role: 'Life-size figure — humor as survival intelligence',
    conceptualRole: [
      'Humor as survival intelligence',
      'Informal conversation and everyday social value',
      'The body exceeding monetary measurement',
      'A cheap plastic chair inside a luxury hotel',
    ],
    materials: [
      'Commercial flexible mannequin',
      'White molded-plastic chair',
      'Removable textile currency skin',
      'Permanently secured coffee cup and domino',
      'Concealed weighted base',
    ],
    dimensions: 'Life-size seated figure on standard molded-plastic chair',
    construction: [
      'Mannequin mechanically secured to the chair',
      'Paper material attached to a removable textile skin',
      'Simplified articulated hands; no loose bills',
      'Props permanently secured',
    ],
    siteVariation: 'Preferred in Compact and Full configurations; prioritized at The Betsy.',
    riskNote:
      'Avoid caricature: no facial expression, no exaggerated posture, no costume, no national flag treatment. Quiet, self-possessed body language. Humor comes from scene and material contradiction, not from mocking the figure.',
    summary:
      'A faceless currency-covered figure on a white plastic chair, holding a cup and domino — humor as survival intelligence.',
    body: `A faceless figure covered with currency, seated on a white molded-plastic chair, holding a small coffee cup and domino. The sculpture stages informal social exchange and the body as something that exceeds exchange rates — without implying that the person is literally made valuable by money.`,
    overview: volverMedia.cuentachisteOverview,
    detail: volverMedia.cuentachisteDetail,
    reveal: {
      iconId: 'chair',
      caption: 'Chair / cup / domino icon or prop still for El Cuentachiste. Replace when ready.',
      media: volverMedia.revealCuentachisteIcon,
    },
  },
  {
    id: 'harina-de-otro-costal',
    title: 'Harina de Otro Costal',
    role: 'Life-size figure — Venezuelan material anchor',
    workingTitle: true,
    conceptualRole: [
      'Explicitly Venezuelan anchor',
      'Home and food memory',
      'Music, rest, domestic knowledge',
      'Identity surviving economic rupture',
    ],
    materials: [
      'Commercial flexible mannequin',
      'Commercial cotton hammock (chinchorro)',
      'Commercial freestanding steel hammock stand',
      'Used, borrowed, or entry-level cuatro',
      'Empty cleaned yellow corn-flour packaging stitched to fabric skin',
    ],
    dimensions: 'Life-size seated figure in freestanding hammock stand; nonfunctional seating',
    construction: [
      'Figure, instrument, and hammock mechanically tethered',
      'No ceiling or wall suspension',
      'Packaging stitched to removable fabric skin',
      'Not available for seating',
    ],
    siteVariation: 'Preferred in Intimate and Full configurations; prioritized at Casa Faena.',
    riskNote:
      'Avoid folklore costume: one brand/material system, one instrument, no tropical decoration, no flags. Minimal black or ivory hammock frame; dignified pose. This is the one clearly Venezuelan sculpture.',
    summary:
      'A faceless figure in corn-flour packaging, seated in a chinchorro with a cuatro — the project’s explicit Venezuelan material anchor.',
    body: `A faceless figure covered with clean yellow corn-flour packaging, seated in a chinchorro and holding a cuatro. The phrase harina de otro costal — “another matter entirely,” literally flour from another sack — is funny, materially exact, and recognizable across Spanish-speaking cultures while remaining the project’s explicit Venezuelan material entry.`,
    overview: volverMedia.harinaOverview,
    detail: volverMedia.harinaDetail,
    reveal: {
      iconId: 'hammock',
      caption: 'Chinchorro / packaging / cuatro still for Harina de Otro Costal. Replace when ready.',
      media: volverMedia.revealHarinaIcon,
    },
  },
  {
    id: 'casa-de-cambio',
    title: 'Casa de Cambio',
    role: 'Institutional counterweight — airport-style exchange kiosk',
    conceptualRole: [
      'Systems attempting to calculate cultural value',
      'Hospitality and border infrastructure',
      'Architectural counterweight to the two figures',
    ],
    materials: [
      'Black plywood or MDF body',
      'One 32-inch commercial display',
      'Clear acrylic transaction window',
      'Brass or stainless service ledge',
      'Small secured bell',
      'Locking casters and leveling feet',
    ],
    dimensions: 'Approximately 42 in. W × 24 in. D × 78 in. H; one standard electrical connection',
    construction: [
      'Offline locally stored webpage or video loop — no internet, no live API',
      'No touchscreen, cash drawer, or live transactions',
      'Precise autonomous sculpture finish (not movie-set prop)',
      'Ventilation and service access for the display',
    ],
    siteVariation: 'Persists across Compact, Intimate, and Full configurations.',
    riskNote:
      'Most of the display must remain visually credible as airport signage. Interruptions (HOME, MEMORY, LABOR, FAMILY, FUTURE → NOT CONVERTIBLE / N/A / NO FIXED RATE) happen sparingly.',
    summary:
      'A compact airport-style casa de cambio on the money floor — institutional calculation facing values that resist conversion.',
    body: `A compact airport-style currency-exchange kiosk installed on the money floor. The digital board resembles actual airport exchange signage — currency code, buy, sell, timestamp, minimal sans-serif typography, blue-white or amber-white display, subtle movement. At restrained intervals, one or two rows may show HOME, MEMORY, LABOR, FAMILY, or FUTURE with values such as NOT CONVERTIBLE, N/A, or NO FIXED RATE. Content is stored locally.`,
    overview: volverMedia.casaDeCambioFront,
    detail: volverMedia.casaDeCambioScreen,
    reveal: {
      iconId: 'kiosk',
      caption: 'Kiosk silhouette or rate-board still for Casa de Cambio. Replace when ready.',
      media: volverMedia.revealCasaIcon,
    },
  },
];

export const volverAdaptationRules = [
  {
    scale: 'Compact site',
    elements: ['Common Tender', 'El Cuentachiste', 'Casa de Cambio'],
  },
  {
    scale: 'Intimate or culturally atmospheric site',
    elements: ['Common Tender', 'Harina de Otro Costal', 'Casa de Cambio'],
  },
  {
    scale: 'Full installation',
    elements: ['Common Tender', 'El Cuentachiste', 'Harina de Otro Costal', 'Casa de Cambio'],
  },
] as const;

export const volverVisitorJourney = [
  {
    number: '01',
    title: 'Arrival',
    body: 'The floor appears as an extravagant luxury carpet — abundance before recognition.',
  },
  {
    number: '02',
    title: 'Recognition',
    body: 'The viewer identifies different currencies and migration documents with unequal histories and present-day values.',
  },
  {
    number: '03',
    title: 'Embodiment',
    body: 'The figures materialize humor, food, music, rest, and memory — cultural value made bodily.',
  },
  {
    number: '04',
    title: 'Exchange',
    body: 'Casa de Cambio attempts to assign rates to values that resist conversion.',
  },
] as const;

export const volverHotelStudies: NvHotelAdaptation[] = [
  {
    id: 'cadillac',
    hotelName: 'Cadillac Hotel & Beach Club',
    strategicRole: 'Full installation — bright, expansive, social',
    locationType: 'Bright resort lobby / lounge circulation',
    configuration: 'full',
    panorama: volverMedia.cadillacPanorama,
    poster: volverMedia.cadillacRender,
    proposedRender: volverMedia.cadillacRender,
    installationElements: [
      'Largest Common Tender floor field',
      'El Cuentachiste',
      'Harina de Otro Costal',
      'Casa de Cambio',
    ],
    siteAdvantages: [
      'Long sight lines and resort brightness',
      'Space for full sculpture roster',
      'Strong photography of abundance → recognition',
    ],
    constraints: [
      'Must not obstruct bar/lounge operations',
      'Evacuation path and sprinkler clearances required',
    ],
    adaptationNotes: [
      'Prefer freestanding modules and mechanically placed floor panels',
      'Full configuration when circulation permits',
    ],
    dimensionsNote: 'Floor adapted within ≈ 12 × 24 ft maximum; final dimensions after site survey.',
    whyThisLocation:
      'Resort brightness and circulation make the currency field and full sculpture set photographable while staging the double take between leisure and unstable value.',
  },
  {
    id: 'betsy',
    hotelName: 'The Betsy Hotel',
    strategicRole: 'Restrained architectural version',
    locationType: 'Refined check-in / waiting architecture',
    configuration: 'compact',
    panorama: volverMedia.betsyPanorama,
    poster: volverMedia.betsyRender,
    proposedRender: volverMedia.betsyRender,
    installationElements: [
      'Reduced Common Tender floor field',
      'El Cuentachiste',
      'Casa de Cambio',
    ],
    siteAdvantages: [
      'Quieter conceptual atmosphere',
      'Architecture supports precise kiosk finish',
      'Strong intellectual application image',
    ],
    constraints: [
      'Finish must meet luxury hospitality standards',
      'Limited footprint — Harina deferred unless survey allows Full',
    ],
    adaptationNotes: [
      'Prioritize El Cuentachiste + Casa de Cambio',
      'Clean silhouette over maximal floor coverage',
    ],
    dimensionsNote: 'Compact adaptation — floor footprint sized to waiting/check-in edge.',
    whyThisLocation:
      'Refined architecture makes exchange and informal humor feel credible rather than spectacular alone.',
  },
  {
    id: 'casa-faena',
    hotelName: 'Casa Faena',
    strategicRole: 'Intimate and culturally embodied version',
    locationType: 'Intimate theatrical interior',
    configuration: 'intimate',
    panorama: volverMedia.casaFaenaPanorama,
    poster: volverMedia.casaFaenaRender,
    proposedRender: volverMedia.casaFaenaRender,
    installationElements: [
      'Smaller Common Tender floor field',
      'Harina de Otro Costal',
      'Casa de Cambio',
    ],
    siteAdvantages: [
      'Intimate scale favors Harina as hero silhouette',
      'Theatrical interior without needing expansive floor',
    ],
    constraints: [
      'Smaller footprint — avoid overcrowding circulation',
      'Attachment and floor clearances TBD with property',
    ],
    adaptationNotes: [
      'Prioritize Harina de Otro Costal + Casa de Cambio',
      'Heritage forms remain structured, not costume',
    ],
    dimensionsNote: 'Intimate field — Harina prioritized in the frame.',
    whyThisLocation:
      'Allows the Venezuelan material anchor to carry cultural memory inside a theatrical hospitality interior without casino excess.',
  },
];

export const volverCurrencyArchive = {
  heading: 'Currency archive methodology',
  intro:
    'The floor uses selected currencies across countries and periods — not every Latin American bill. The bolívar and redenomination histories remain foundational without flattening distinct countries into decorative multiculturalism.',
  principles: [
    'Selected historical, obsolete, demonetized, or materially transformed notes preferred when feasible',
    'Currencies carried by Miami diasporas and remittance corridors — not a comprehensive map',
    'Currencies with major redenominations and inflation histories',
    'Documents of exchange, remittance, hotel hospitality, labor, and shipping as equal material to notes',
    'No flags, maps, national ranking, or country-by-country grid',
    'Accurate note dimensions verified; banknote-image and brand/image-rights review during prototype production',
    'Current or restricted notes cropped, overlapped, transformed, or abstracted',
  ],
  walkingPathNote:
    'Central walking paths prefer abstraction (guilloche, serials, fragments) where trampling portraits would be disrespectful. Full readable notes concentrate at edges and approach zones when permitted. The proposal acknowledges that walking on currency remains a charged tension.',
} as const;

export const volverFeasibility = [
  'Floor stays under approximately 300 square feet and adapts downward to site',
  'Modular, removable laminated panels — no permanent hotel floor alteration',
  'One standard electrical connection for Casa de Cambio; offline media only',
  'Clear egress and bypass routes; no blocking required circulation',
  'No ceiling or wall attachments; freestanding hammock stand and weighted bases',
  'No visitor interaction required for the work to remain complete',
  'Maintenance: daily visual check of props/tethers; weekly screen content verification',
] as const;

export const volverPrototypes = [
  '24 × 36-inch printed floor sample for scale, color, glare, slip, and removal testing',
  'One mannequin forearm/hand currency-skin attachment test',
  'One packaging-to-textile attachment test (corn-flour skin)',
  'Full-scale cardboard Casa de Cambio kiosk mockup',
  'Screen typography and motion test (offline rate board)',
  'Hotel floor, egress, and electrical survey',
  'Banknote-image and brand-review checklist',
] as const;

export const volverBudget: NvBudgetLine[] = [
  { category: 'Common Tender — floor printing, proofing, waste, install/removal', amount: 2425 },
  { category: 'El Cuentachiste — mannequin, chair, materials and modifications', amount: 700 },
  { category: 'Harina de Otro Costal — mannequin, hammock, stand, cuatro and materials', amount: 1050 },
  { category: 'Casa de Cambio — screen, media player, structure, acrylic and hardware', amount: 1100 },
  { category: 'Artist fabrication labor', amount: 2000 },
  { category: 'Fabrication / install assistant', amount: 500 },
  { category: 'Local transport, installation and removal', amount: 600 },
  { category: 'Safety treatment, mounting and insurance reserve', amount: 400 },
  { category: 'Documentation', amount: 250 },
  { category: 'Contingency', amount: 975 },
];

export const volverBudgetTotal = volverBudget.reduce((sum, line) => sum + line.amount, 0);

export const volverBudgetAssumptions = [
  'Floor remains under approximately 300 square feet',
  'Fabrication is primarily artist-led',
  'Both figures use commercial flexible mannequins',
  'Hammock uses a commercial freestanding stand',
  'Casa de Cambio uses one 32-inch screen with offline media',
  'No ceiling rigging and no custom welded structure',
  'Hotel or union labor is not assumed mandatory',
  'Installation and removal each fit within one working day',
] as const;

export const volverBudgetNote =
  'Draft within the $10,000 all-inclusive stipend. The budget is viable only under the assumptions listed beside the table — otherwise allocations shift before procurement.';

export const volverRelatedWorks: GrantRelatedWork[] = [
  {
    slug: 'price_of_existence',
    title: 'Price of Existence',
    year: 2024,
    image: `${CDN}/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg`,
    blurb:
      'Price of Existence addressed monetary collapse through mortality. Volver a Valer moves that material history into migration, hospitality, humor, cultural continuity, and unresolved renewal.',
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
];

export const volverClosingQuestion = 'What survives when exchange rates do not?';

export const volverLineageParagraph =
  'Price of Existence addressed monetary collapse through mortality. Volver a Valer moves that material history into migration, hospitality, humor, cultural continuity, and unresolved renewal — floor and life-size sculptures, not a body wrap.';

export const volverSeo = {
  title: 'Volver a Valer: The Value We Carry — No Vacancy 2026 | Moises Sanabria',
  description:
    'Proposed hotel installation for No Vacancy Miami Beach 2026: a printed floor of selected Latin American currencies with El Cuentachiste, Harina de Otro Costal, and Casa de Cambio.',
} as const;

export const volverHeroMedia = toGrantMedia(volverMedia.hero);
export const volverClosingMedia = toGrantMedia(volverMedia.closing);

export const volverProjectStatement = {
  interestAndApproach: `No Vacancy offers a rare context: Miami Beach hotels as temporary public galleries during Art Week, when hospitality architecture becomes a stage for contemporary art. I am drawn to this program because it places work inside spaces of transit, leisure, and spectacle — where visitors already negotiate desire, consumption, and image — while keeping the work free and accessible to the public.

I propose Volver a Valer: The Value We Carry. A removable printed floor drawn from selected Latin American currencies and migration documents transforms part of a lobby, waiting area, or check-in zone. Life-size sculptures — El Cuentachiste, a currency-covered figure of informal humor; Harina de Otro Costal, a Venezuelan material anchor of food, music, and rest; and Casa de Cambio, an airport-style exchange kiosk — adapt to the assigned hotel. Currencies can be devalued. People cannot. Full proposal: https://moises.tech/grant/no-vacancy-2026/volver-a-valer`,
  idealSiteConditions: `Ideal placement is a publicly accessible lobby edge, waiting alcove, or check-in adjacent zone where a modular printed floor can read as an environment and freestanding sculptures can stand without blocking required circulation. Compact sites receive floor + El Cuentachiste + Casa de Cambio. Intimate sites may prioritize Harina de Otro Costal with Casa de Cambio. Full sites include all three sculptures. Final layout will be determined collaboratively with Cultural Affairs staff and the assigned property after site survey.`,
} as const;
