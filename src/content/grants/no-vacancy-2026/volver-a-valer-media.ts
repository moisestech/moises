/**
 * Volver a Valer — central media manifesto (proposal placeholders until site renders land).
 * Price of Existence images are related-work only — never staged as hotel installs.
 */

export type VolverMediaKind =
  | 'hero'
  | 'render'
  | 'panorama'
  | 'floor-detail'
  | 'sculpture-detail'
  | 'prototype'
  | 'related-work';

export type VolverHotelId = 'cadillac' | 'betsy' | 'casa-faena';

export type VolverMediaAsset = {
  id: string;
  src?: string;
  alt: string;
  caption: string;
  label: string;
  kind: VolverMediaKind;
  hotelId?: VolverHotelId;
  placeholder: boolean;
  width?: number;
  height?: number;
};

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Related-work source only — prior sculpture documentation */
const POE_FULL =
  `${CDN}/v1753724794/art/moisestech-website/artworks/2024_price_of_existence/MoisesSanabria-PriceOfExistence-2024_e4mizb.jpg`;
const POE_DETAIL =
  `${CDN}/v1737831890/art/moisestech-website/price_of_existence_detail_uuw5yf.jpg`;

function placeholder(
  partial: Omit<VolverMediaAsset, 'placeholder' | 'label'> & { label?: string },
): VolverMediaAsset {
  return {
    ...partial,
    placeholder: true,
    label: partial.label ?? `[PLACEHOLDER] ${partial.id}`,
  };
}

export const volverMediaDisclosure =
  'Concept proposal visuals. The hotel installation has not been fabricated or installed.';

export const volverMedia = {
  hero: placeholder({
    id: 'hero',
    kind: 'hero',
    alt: 'Proposed hotel installation: printed currency floor with freestanding sculptures Market Rate and Soft Currency.',
    caption:
      'Proposal hero — currency floor as primary field; Soft Currency silhouette; Market Rate as dark anchor. Replace with final render.',
    label: '[PLACEHOLDER] Hero — Common Tender floor + core sculptures',
    width: 1672,
    height: 941,
  }),
  currencyFloorOverview: placeholder({
    id: 'currencyFloorOverview',
    kind: 'render',
    alt: 'Proposed site-fitted printed floor resembling a luxury carpet from a distance, composed of Latin American currency fields and documents.',
    caption: 'Common Tender — floor field overview (proposal study).',
    label: '[PLACEHOLDER] Common Tender — floor overview',
  }),
  currencyFloorDetail: placeholder({
    id: 'currencyFloorDetail',
    kind: 'floor-detail',
    alt: 'Close study of guilloche patterns, serial numbers, remittance fragments, and abstracted bill details in the proposed floor composition.',
    caption:
      'Floor detail — abstracted security patterns and document fragments on the walking path; full readable notes concentrated at edges.',
    label: '[PLACEHOLDER] Common Tender — floor detail',
  }),
  marketRateOverview: placeholder({
    id: 'marketRateOverview',
    kind: 'render',
    alt: 'Proposed freestanding oil-black mirrored monolith derived from hotel check-in proportions.',
    caption: 'Market Rate — freestanding monolith overview.',
    label: '[PLACEHOLDER] Market Rate — overview',
  }),
  marketRateDetail: placeholder({
    id: 'marketRateDetail',
    kind: 'sculpture-detail',
    alt: 'Detail of sparse hotel-style valuation plaques on the Market Rate monolith.',
    caption: 'Market Rate — plaque and mirror finish detail.',
    label: '[PLACEHOLDER] Market Rate — detail',
  }),
  softCurrencyOverview: placeholder({
    id: 'softCurrencyOverview',
    kind: 'render',
    alt: 'Proposed freestanding chinchorro-like woven sculpture in a minimal metal frame.',
    caption: 'Soft Currency — woven textile overview.',
    label: '[PLACEHOLDER] Soft Currency — overview',
  }),
  softCurrencyDetail: placeholder({
    id: 'softCurrencyDetail',
    kind: 'sculpture-detail',
    alt: 'Close view of obsolete bills, receipts, and fiber woven into Soft Currency.',
    caption: 'Soft Currency — weave and frame detail.',
    label: '[PLACEHOLDER] Soft Currency — detail',
  }),
  carryOnOverview: placeholder({
    id: 'carryOnOverview',
    kind: 'render',
    alt: 'Optional hotel luggage cart sculpture carrying clear archival containers of documents and currency.',
    caption: 'Carry-On — optional third sculpture for large sites.',
    label: '[PLACEHOLDER] Carry-On — overview',
  }),
  cadillacPanorama: placeholder({
    id: 'cadillacPanorama',
    kind: 'panorama',
    hotelId: 'cadillac',
    alt: 'Equirectangular study of Cadillac Hotel typology for Volver a Valer site adaptation.',
    caption: 'Cadillac — 360 site-adaptation study (pending capture).',
    label: '[PLACEHOLDER] Cadillac — panorama',
  }),
  cadillacRender: placeholder({
    id: 'cadillacRender',
    kind: 'render',
    hotelId: 'cadillac',
    alt: 'Proposed expansive installation in a bright resort lobby typology.',
    caption: 'Cadillac adaptation — long currency floor with optional Carry-On.',
    label: '[PLACEHOLDER] Cadillac — proposed render',
  }),
  cadillacFloorDetail: placeholder({
    id: 'cadillacFloorDetail',
    kind: 'floor-detail',
    hotelId: 'cadillac',
    alt: 'Floor detail for Cadillac site study.',
    caption: 'Cadillac — floor field detail.',
    label: '[PLACEHOLDER] Cadillac — floor detail',
  }),
  cadillacSculptureDetail: placeholder({
    id: 'cadillacSculptureDetail',
    kind: 'sculpture-detail',
    hotelId: 'cadillac',
    alt: 'Sculpture placement detail for Cadillac site study.',
    caption: 'Cadillac — sculpture arrangement detail.',
    label: '[PLACEHOLDER] Cadillac — sculpture detail',
  }),
  betsyPanorama: placeholder({
    id: 'betsyPanorama',
    kind: 'panorama',
    hotelId: 'betsy',
    alt: 'Equirectangular study of The Betsy Hotel typology for Volver a Valer.',
    caption: 'The Betsy — 360 site-adaptation study (pending capture).',
    label: '[PLACEHOLDER] Betsy — panorama',
  }),
  betsyRender: placeholder({
    id: 'betsyRender',
    kind: 'render',
    hotelId: 'betsy',
    alt: 'Proposed restrained installation adapted to refined check-in architecture.',
    caption: 'Betsy adaptation — Market Rate dominant; Soft Currency as counterpoint.',
    label: '[PLACEHOLDER] Betsy — proposed render',
  }),
  betsyFloorDetail: placeholder({
    id: 'betsyFloorDetail',
    kind: 'floor-detail',
    hotelId: 'betsy',
    alt: 'Floor detail for Betsy site study.',
    caption: 'Betsy — floor field detail.',
    label: '[PLACEHOLDER] Betsy — floor detail',
  }),
  betsySculptureDetail: placeholder({
    id: 'betsySculptureDetail',
    kind: 'sculpture-detail',
    hotelId: 'betsy',
    alt: 'Sculpture detail for Betsy site study.',
    caption: 'Betsy — sculpture detail.',
    label: '[PLACEHOLDER] Betsy — sculpture detail',
  }),
  casaFaenaPanorama: placeholder({
    id: 'casaFaenaPanorama',
    kind: 'panorama',
    hotelId: 'casa-faena',
    alt: 'Equirectangular study of Casa Faena typology for Volver a Valer.',
    caption: 'Casa Faena — 360 site-adaptation study (pending capture).',
    label: '[PLACEHOLDER] Casa Faena — panorama',
  }),
  casaFaenaRender: placeholder({
    id: 'casaFaenaRender',
    kind: 'render',
    hotelId: 'casa-faena',
    alt: 'Proposed intimate installation with Soft Currency as hero object.',
    caption: 'Casa Faena adaptation — smaller field; Soft Currency hero.',
    label: '[PLACEHOLDER] Casa Faena — proposed render',
  }),
  casaFaenaFloorDetail: placeholder({
    id: 'casaFaenaFloorDetail',
    kind: 'floor-detail',
    hotelId: 'casa-faena',
    alt: 'Floor detail for Casa Faena site study.',
    caption: 'Casa Faena — floor field detail.',
    label: '[PLACEHOLDER] Casa Faena — floor detail',
  }),
  casaFaenaSculptureDetail: placeholder({
    id: 'casaFaenaSculptureDetail',
    kind: 'sculpture-detail',
    hotelId: 'casa-faena',
    alt: 'Sculpture detail for Casa Faena site study.',
    caption: 'Casa Faena — Soft Currency emphasis.',
    label: '[PLACEHOLDER] Casa Faena — sculpture detail',
  }),
  prototypeFloor: placeholder({
    id: 'prototypeFloor',
    kind: 'prototype',
    alt: 'Prototype module of the printed currency floor system.',
    caption: 'Prototype — printed floor module and non-slip tests.',
    label: '[PLACEHOLDER] Prototype — floor module',
  }),
  prototypeWeave: placeholder({
    id: 'prototypeWeave',
    kind: 'prototype',
    alt: 'Prototype weave sample for Soft Currency.',
    caption: 'Prototype — Soft Currency weave sample.',
    label: '[PLACEHOLDER] Prototype — weave sample',
  }),
  prototypeMirror: placeholder({
    id: 'prototypeMirror',
    kind: 'prototype',
    alt: 'Prototype oil-black or smoked-mirror finish sample for Market Rate.',
    caption: 'Prototype — Market Rate finish sample.',
    label: '[PLACEHOLDER] Prototype — mirror finish',
  }),
  closing: placeholder({
    id: 'closing',
    kind: 'render',
    alt: 'Closing proposal image of the currency floor and reflective Market Rate encounter.',
    caption: 'Closing proposal study — revaluation beat.',
    label: '[PLACEHOLDER] Closing — floor + Market Rate',
  }),
  priceOfExistenceRelated: {
    id: 'priceOfExistenceRelated',
    src: POE_FULL,
    alt: 'Price of Existence (2024) — human skeleton wrapped in Venezuelan bolívares.',
    caption:
      'Related work — Price of Existence (2024). Precedent for currency as sculptural material; not a hotel install photograph.',
    label: 'Related work — Price of Existence',
    kind: 'related-work' as const,
    placeholder: false,
    width: 1600,
    height: 1200,
  },
  priceOfExistenceDetail: {
    id: 'priceOfExistenceDetail',
    src: POE_DETAIL,
    alt: 'Detail of Venezuelan bolívar notes wrapping skeletal form in Price of Existence.',
    caption: 'Related work detail — bolívar as material language.',
    label: 'Related work — Price of Existence detail',
    kind: 'related-work' as const,
    placeholder: false,
  },
} as const satisfies Record<string, VolverMediaAsset>;

export type VolverMediaKey = keyof typeof volverMedia;

/** OG uses first non-placeholder proposal render when available; else omitted at page layer */
export const volverOgImage = (() => {
  const candidates = [volverMedia.hero, volverMedia.cadillacRender, volverMedia.currencyFloorOverview];
  return candidates.find((m) => !m.placeholder && m.src) ?? null;
})();

/** Convert media asset to GrantPlaceholderFigure shape */
export function toGrantMedia(asset: VolverMediaAsset) {
  return {
    label: asset.label,
    caption: asset.caption,
    src: asset.src,
    alt: asset.alt,
  };
}
