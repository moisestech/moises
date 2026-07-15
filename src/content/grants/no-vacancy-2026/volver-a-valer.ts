/**
 * Volver a Valer: The Value We Carry
 * Official No Vacancy Miami Beach 2026 proposal content.
 */
import type { GrantBudgetLine, GrantPlaceholderMedia, GrantRelatedWork } from '@/components/grant/shared/GrantProposalUi';
import {
  toGrantMedia,
  volverMedia,
  type VolverHotelId,
  type VolverMediaAsset,
} from '@/content/grants/no-vacancy-2026/volver-a-valer-media';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type NvBudgetLine = GrantBudgetLine;
export type NvPlaceholderMedia = GrantPlaceholderMedia;

/** @deprecated Touch Grass hotel studies — legacy shape for archived alternate */
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

export type NvHotelAdaptation = {
  id: VolverHotelId;
  hotelName: string;
  strategicRole: string;
  locationType: string;
  configuration: 'compact' | 'large';
  panorama: VolverMediaAsset;
  poster: VolverMediaAsset;
  proposedRender: VolverMediaAsset;
  floorDetail: VolverMediaAsset;
  sculptureDetail: VolverMediaAsset;
  installationElements: string[];
  siteAdvantages: string[];
  constraints: string[];
  adaptationNotes: string[];
  dimensionsNote: string;
  whyThisLocation: string;
};

export const volverAValer = {
  title: 'Volver a Valer',
  subtitle: 'The Value We Carry',
  route: '/grant/no-vacancy-2026/volver-a-valer',
  status: 'Proposed site-specific installation · No Vacancy Miami Beach 2026',
  oneSentenceForm:
    'Volver a Valer: The Value We Carry is a site-specific hotel installation composed of a printed floor drawn from Latin American currencies and two or three freestanding sculptures that examine how money, labor, memory, care, and identity are transformed through migration.',
  thesis:
    'Currencies can collapse, fluctuate, or disappear without diminishing the value of the people who carried them.',
  criticalDistinction:
    'The installation does not ask whether migrants can become valuable again; it asks why economic, political, and cultural systems repeatedly fail to recognize the value they already carry.',
  emotionalSequence: 'beautiful → abundant → familiar → strange → unresolved but hopeful',
  systemOverview:
    'A site-adaptable hotel environment composed of a printed Latin American currency floor and two or three freestanding sculptures. The floor creates an immediate world; the sculptures remain autonomous objects that can survive outside the hotel.',
} as const;

export const volverInstallationSystem = {
  floor: {
    id: 'common-tender',
    title: 'Common Tender',
    role: 'Primary spatial gesture — printed currency floor',
    body: `A site-fitted, non-slip printed floor covering transforms part of the hotel lobby, waiting area, bar transition, or check-in zone into a continuous field of Latin American currencies and migration documents.

From a distance the surface resembles a luxury hotel carpet. At close range it resolves into bolívares, historical and decommissioned notes, remittance slips, exchange receipts, hotel invoices, shipping labels, serial numbers, and selected U.S. currency fragments.

The floor is anchored visually by Venezuelan bolívares without becoming a pan-Latin collage, national ranking, or country-by-country grid. Full readable notes concentrate along edges and approach zones; the central walking path uses magnified security patterns, guilloche lines, denomination fragments, and abstracted fields so the experience is walking through money without simply trampling portraits and national symbols.`,
    publicMaterialTerm: 'site-fitted printed currency floor',
    substrateNote:
      'Final substrate is selected after the hotel site survey: reusable PVC-free covering, modular commercial floorcloth, removable non-slip graphic material, or fabric-/rubber-backed panels. The proposal does not lock to single-use adhesive vinyl.',
  },
  sculptures: [
    {
      id: 'market-rate',
      title: 'Market Rate',
      role: 'Core sculpture — reflective monolith',
      optional: false,
      body: `A freestanding oil-black or smoked-mirror monolith derived from the proportions of a hotel check-in counter (approximately 60–72 inches wide, waist height). Sparse hotel-style plaques compare Room Rate, Resort Fee, and Valet with categories that resist pricing: Labor, Memory, Identity, Distance, Family, Future.

The reflective surface creates the final viewer encounter: the currency floor and the viewer appear together inside the value system. This is the intellectual anchor — hotel pricing, exchange, Miami luxury, and human worth in one minimal object.`,
    },
    {
      id: 'soft-currency',
      title: 'Soft Currency',
      role: 'Core sculpture — woven carrier',
      optional: false,
      body: `A freestanding, nonfunctional chinchorro-like textile suspended in a minimal metal frame. Woven from obsolete bills, printed currency strips, receipts, remittance records, and fiber, it references rest and home without becoming folk-art costume or a usable hammock.

The metal frame allows installation without relying on the hotel ceiling. Soft Currency carries the Venezuelan point of entry through labor, memory, and cultural knowledge without defining the entire installation as exclusively Venezuelan.`,
    },
    {
      id: 'carry-on',
      title: 'Carry-On',
      role: 'Optional sculpture — large sites only',
      optional: true,
      body: `A polished hotel luggage cart supporting clear archival containers of bills, receipts, luggage tags, hotel invoices, and remittance records. Containers reveal accumulated documents rather than hiding them. Avoid stacks that resemble contraband or bricks of cash.

Included only when the assigned hotel has enough circulation. It makes migration physical: what is carried, declared, and what cannot be converted.`,
    },
  ],
  adaptationRules: [
    {
      scale: 'Compact site',
      elements: ['Printed currency floor', 'Market Rate', 'Soft Currency'],
    },
    {
      scale: 'Medium site',
      elements: [
        'Printed currency floor',
        'Market Rate',
        'Soft Currency',
        'Small supporting material or wall label',
      ],
    },
    {
      scale: 'Large site',
      elements: ['Printed currency floor', 'Market Rate', 'Soft Currency', 'Carry-On'],
    },
  ],
} as const;

export const volverVisitorJourney = [
  {
    number: '01',
    title: 'Arrival',
    body: 'The viewer enters a luxury hotel and encounters what initially appears to be an extravagant custom carpet made from an abundance of money.',
  },
  {
    number: '02',
    title: 'Recognition',
    body: 'At closer range, the floor resolves into bolívares, pesos, soles, reais, quetzales, receipts, remittance records, serial numbers, hotel charges, and documents of work and movement.',
  },
  {
    number: '03',
    title: 'Embodiment',
    body: 'The sculptures convert the flat financial image into something carried, woven, rested beside, displayed, and priced — without costume or theatrical props.',
  },
  {
    number: '04',
    title: 'Revaluation',
    body: 'The viewer encounters their reflection in Market Rate, surrounded by currencies and categories of value that cannot be reconciled through one exchange rate.',
  },
] as const;

export const volverHotelStudies: NvHotelAdaptation[] = [
  {
    id: 'cadillac',
    hotelName: 'Cadillac Hotel & Beach Club',
    strategicRole: 'Most expansive and socially visible version',
    locationType: 'Bright resort lobby / lounge circulation',
    configuration: 'large',
    panorama: volverMedia.cadillacPanorama,
    poster: volverMedia.cadillacRender,
    proposedRender: volverMedia.cadillacRender,
    floorDetail: volverMedia.cadillacFloorDetail,
    sculptureDetail: volverMedia.cadillacSculptureDetail,
    installationElements: [
      'Long currency floor field',
      'Market Rate',
      'Soft Currency',
      'Optional Carry-On along circulation',
    ],
    siteAdvantages: [
      'Long sight lines and resort brightness',
      'Strong photography of abundance → recognition',
      'Space for optional third sculpture',
    ],
    constraints: [
      'Must not obstruct bar/lounge operations',
      'Evacuation path and sprinkler clearances required',
    ],
    adaptationNotes: [
      'Prefer freestanding modules and mechanically fastened floor panels',
      'Carry-On only if bypass remains clear',
    ],
    dimensionsNote: 'Final dimensions after site survey and Cultural Affairs coordination.',
    whyThisLocation:
      'Resort brightness and circulation make the currency field photographable while staging the double take between leisure and unstable value.',
  },
  {
    id: 'betsy',
    hotelName: 'The Betsy Hotel',
    strategicRole: 'Most restrained and intellectually architectural version',
    locationType: 'Refined check-in / waiting architecture',
    configuration: 'compact',
    panorama: volverMedia.betsyPanorama,
    poster: volverMedia.betsyRender,
    proposedRender: volverMedia.betsyRender,
    floorDetail: volverMedia.betsyFloorDetail,
    sculptureDetail: volverMedia.betsySculptureDetail,
    installationElements: [
      'Currency floor adapted to waiting or check-in zone',
      'Market Rate as dominant object',
      'Soft Currency as cultural counterpoint',
    ],
    siteAdvantages: [
      'Quieter conceptual atmosphere',
      'Architecture supports Minimal monolith finish',
      'Strong intellectual application image',
    ],
    constraints: [
      'Finish must meet luxury hospitality standards',
      'Limited footprint — no third sculpture unless survey allows',
    ],
    adaptationNotes: [
      'Prioritize clean silhouette over maximal floor coverage',
      'Market Rate reads as furniture-scale architecture, not prop',
    ],
    dimensionsNote: 'Compact adaptation — floor footprint sized to waiting/check-in edge.',
    whyThisLocation:
      'Refined architecture makes revaluation feel credible rather than spectacular alone.',
  },
  {
    id: 'casa-faena',
    hotelName: 'Casa Faena',
    strategicRole: 'Most intimate and materially embodied version',
    locationType: 'Intimate theatrical interior',
    configuration: 'compact',
    panorama: volverMedia.casaFaenaPanorama,
    poster: volverMedia.casaFaenaRender,
    proposedRender: volverMedia.casaFaenaRender,
    floorDetail: volverMedia.casaFaenaFloorDetail,
    sculptureDetail: volverMedia.casaFaenaSculptureDetail,
    installationElements: [
      'Smaller currency field',
      'Soft Currency as hero silhouette',
      'Market Rate as reflective endpoint',
      'Carry-On only if circulation permits',
    ],
    siteAdvantages: [
      'Intimate scale favors material richness of Soft Currency',
      'Theatrical interior without needing expansive floor',
    ],
    constraints: [
      'Smaller footprint — avoid overcrowding circulation',
      'Attachment and floor clearances TBD with property',
    ],
    adaptationNotes: [
      'Heritage weave must remain structured, not illustrative costume',
      'Scale for intimacy without blocking egress',
    ],
    dimensionsNote: 'Intimate field — Soft Currency prioritized in the frame.',
    whyThisLocation:
      'Allows Soft Currency to carry cultural memory inside a theatrical hospitality interior without casino excess.',
  },
];

export const volverCurrencyArchive = {
  heading: 'Currency archive methodology',
  intro:
    'The floor is not a colorful inventory of “all Latin American bills.” It follows a curatorial method so Venezuela remains foundational without flattening distinct countries into decorative multiculturalism.',
  principles: [
    'Obsolete and decommissioned notes preferred over circulating legal tender when feasible',
    'Currencies carried by Miami diasporas and remittance corridors, not a comprehensive map of Latin America',
    'Currencies with major redenominations and inflation histories',
    'Documents of exchange, remittance, hotel hospitality, labor, and shipping as equal material to notes',
    'No flags, maps, national ranking, or country-by-country grid',
    'Controlled local collection process for receipts and documents — not scavenged personal data',
  ],
  walkingPathNote:
    'Central walking paths use abstraction (guilloche, serials, fragments). Full portraits and national symbols concentrate at edges and approach zones. The proposal acknowledges that walking on currency remains a charged tension.',
} as const;

export const volverValueTransformations = [
  {
    mechanism: 'Labor',
    transformation: 'Notes and documents become woven, printed, supported, and installed.',
  },
  {
    mechanism: 'Context',
    transformation: 'Currency enters a luxury hotel as carpet and sculpture.',
  },
  {
    mechanism: 'Authorship',
    transformation: 'Material becomes a contemporary artwork with institutional framing.',
  },
  {
    mechanism: 'Memory',
    transformation: 'Notes retain histories that exceed exchange value.',
  },
  {
    mechanism: 'Collective belief',
    transformation:
      'Viewers and institutions participate in revaluation — without claiming art repairs collapse.',
  },
] as const;

export const volverFabrication = [
  'Historical, obsolete, or discarded paper materials where available',
  'Reusable modular printed floor system (PVC-free preferred)',
  'No permanent alteration of hotel surfaces',
  'Mechanically assembled sculpture frames',
  'Disassembly and reuse after exhibition',
  'Low-energy lighting only if needed',
  'No single-use scenic construction',
  'Editioned afterlife (floor fragments, woven studies, modules) — not onsite sales during the hotel run',
] as const;

export const volverPrototypes = [
  'Printed floor module + non-slip / edge finish sample',
  'Soft Currency weave sample in metal frame',
  'Market Rate oil-black / smoked-mirror finish plaque mockup',
  'Fire-retardant / hospitality safety review for paper materials',
  'Mounting and mechanical fastener test',
  'Optional Carry-On container layout study',
] as const;

export const volverBudget: NvBudgetLine[] = [
  { category: 'Printed modular currency floor', amount: 2000 },
  { category: 'Market Rate fabrication', amount: 1600 },
  { category: 'Soft Currency fabrication', amount: 1600 },
  { category: 'Optional Carry-On (large sites; reallocable)', amount: 1200 },
  { category: 'Currency, receipts, and textile materials', amount: 700 },
  { category: 'Fabrication assistance', amount: 1200 },
  { category: 'Transport and installation', amount: 700 },
  { category: 'Safety, mounting, and insurance', amount: 400 },
  { category: 'Documentation', amount: 300 },
  { category: 'Contingency', amount: 300 },
];

export const volverBudgetTotal = volverBudget.reduce((sum, line) => sum + line.amount, 0);

export const volverBudgetNote =
  'Draft within the $10,000 all-inclusive stipend. If Carry-On is not produced for the assigned hotel, its allocation strengthens floor fabrication, labor, finish quality, and contingency.';

export const volverRelatedWorks: GrantRelatedWork[] = [
  {
    slug: 'price_of_existence',
    title: 'Price of Existence',
    year: 2024,
    image: `${CDN}/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg`,
    blurb:
      'Precedent: death and monetary collapse through the body. Volver a Valer moves into hospitality, migration, collective value, and possible renewal — floor and freestanding sculptures, not a body wrap.',
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

export const volverSeo = {
  title: 'Volver a Valer: The Value We Carry — No Vacancy 2026 | Moises Sanabria',
  description:
    'Proposed hotel installation for No Vacancy Miami Beach 2026: a printed Latin American currency floor and freestanding sculptures examining how money, labor, memory, care, and identity transform through migration.',
} as const;

export const volverHeroMedia = toGrantMedia(volverMedia.hero);
export const volverClosingMedia = toGrantMedia(volverMedia.closing);

export const volverProjectStatement = {
  interestAndApproach: `No Vacancy offers a rare context: Miami Beach hotels as temporary public galleries during Art Week, when hospitality architecture becomes a stage for contemporary art. I am drawn to this program because it places work inside spaces of transit, leisure, and spectacle — where visitors already negotiate desire, consumption, and image — while keeping the work free and accessible to the public.

I propose Volver a Valer: The Value We Carry. A site-fitted printed currency floor transforms part of a lobby, waiting area, or check-in zone into a continuous field drawn from Venezuelan bolívares and historical Latin American currencies together with remittance slips, hotel invoices, and documents of movement. Two core freestanding sculptures — Market Rate, an oil-black monolith of hotel pricing and human worth, and Soft Currency, a woven chinchorro-like form of bills and receipts — complete the work. A third sculpture, Carry-On, is optional for larger sites.

From a distance the hotel appears to hold an extravagant money carpet. At closer range that abundance destabilizes. The currency changed value. The people who carried it did not. Full proposal: https://moises.tech/grant/no-vacancy-2026/volver-a-valer`,
  idealSiteConditions: `Ideal placement is a publicly accessible lobby edge, waiting alcove, or check-in adjacent zone where a modular printed floor can read as an environment and two freestanding sculptures can stand without blocking required circulation. Compact sites receive floor + Market Rate + Soft Currency. Larger sites may add Carry-On. Final layout will be determined collaboratively with Cultural Affairs staff and the assigned property after site survey.`,
} as const;
