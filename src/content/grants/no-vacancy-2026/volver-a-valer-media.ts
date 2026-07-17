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

/** Uploaded concept studies (hotel install not fabricated) */
const HERO_FULL =
  `${CDN}/v1784253420/grants/no-vacancy-2026/volver-a-valer__hero__full-installation-concept-v01_bhrwzy.png`;
const FLOOR_BOUNDED =
  `${CDN}/v1784258053/grants/no-vacancy-2026/volver-a-valer__common-tender__bounded-floor-overview-v01_gvgssh.png`;
const FLOOR_DETAIL_V01 =
  `${CDN}/v1784258051/grants/no-vacancy-2026/volver-a-valer__common-tender__floor-detail-v01_yflf5y.png`;
const FLOOR_DETAIL_V02 =
  `${CDN}/v1784258052/grants/no-vacancy-2026/volver-a-valer__common-tender__floor-detail-v02_oeecq5.png`;
const CASA_FRONT =
  `${CDN}/v1784253419/grants/no-vacancy-2026/volver-a-valer__casa-de-cambio__front-overview-v01_rj7oyw.png`;
const CASA_SCREEN =
  `${CDN}/v1784258047/grants/no-vacancy-2026/volver-a-valer__casa-de-cambio__screen-detail-v01_fulqq8.png`;
const CUENTACHISTE_OVERVIEW =
  `${CDN}/v1784253418/grants/no-vacancy-2026/volver-a-valer__el-cuentachiste__sculpture-overview-v01_hb17hd.jpg`;
const CUENTACHISTE_DETAIL_V01 =
  `${CDN}/v1784258054/grants/no-vacancy-2026/volver-a-valer__el-cuentachiste__material-detail-v01_gjjzpt.png`;
const CUENTACHISTE_DETAIL_V02 =
  `${CDN}/v1784258050/grants/no-vacancy-2026/volver-a-valer__el-cuentachiste__material-detail-v02_ntfnxs.png`;
const HARINA_OVERVIEW =
  `${CDN}/v1784253418/grants/no-vacancy-2026/volver-a-valer__harina-de-otro-costal__sculpture-overview-v01_taonfz.jpg`;
const HARINA_DETAIL =
  `${CDN}/v1784258052/grants/no-vacancy-2026/volver-a-valer__harina-de-otro-costal__material-detail-v01_tr8etg.png`;
const CLOSING_NIGHT =
  `${CDN}/v1784258053/grants/no-vacancy-2026/volver-a-valer__closing__full-installation-night-v01_bszmqo.png`;
const CLOSING_REFLECTION =
  `${CDN}/v1784258051/grants/no-vacancy-2026/volver-a-valer__closing__exchange-reflection-v01_wg12gz.png`;
const CADILLAC_RENDER =
  `${CDN}/v1784290791/grants/no-vacancy-2026/volver-a-valer__cadillac__proposed-render-v01_pc0oby.png`;
const BETSY_RENDER =
  `${CDN}/v1784290791/grants/no-vacancy-2026/volver-a-valer__betsy__proposed-render-v01_usuvdz.png`;
const CASA_FAENA_RENDER =
  `${CDN}/v1784290792/grants/no-vacancy-2026/volver-a-valer__casa-faena__proposed-render-v01_fwly8q.png`;

function placeholder(
  partial: Omit<VolverMediaAsset, 'placeholder' | 'label'> & { label?: string },
): VolverMediaAsset {
  return {
    ...partial,
    placeholder: true,
    label: partial.label ?? `Concept rendering — ${partial.id}`,
  };
}

function conceptStudy(
  partial: Omit<VolverMediaAsset, 'placeholder'> & { src: string },
): VolverMediaAsset {
  return {
    ...partial,
    placeholder: false,
  };
}

export const volverMediaDisclosure =
  'Concept studies for the proposal. The hotel installation has not been fabricated or installed.';

export const volverMedia = {
  hero: conceptStudy({
    id: 'hero',
    kind: 'hero',
    src: HERO_FULL,
    alt: 'Proposed hotel installation: printed currency floor with El Cuentachiste, Harina de Otro Costal, and Casa de Cambio.',
    caption:
      'Proposal hero — Common Tender floor with life-size figures and Casa de Cambio (concept study).',
    label: 'Concept study — Hero — full installation',
    width: 1122,
    height: 1402,
  }),
  currencyFloorOverview: conceptStudy({
    id: 'currencyFloorOverview',
    kind: 'render',
    src: FLOOR_BOUNDED,
    alt: 'Proposed removable laminated currency floor resembling a luxury carpet from a distance.',
    caption: 'Common Tender — bounded floor overview. Entry study kept in the reveal slot.',
    label: 'Concept study — Common Tender — floor overview',
  }),
  currencyFloorDetail: conceptStudy({
    id: 'currencyFloorDetail',
    kind: 'floor-detail',
    src: FLOOR_DETAIL_V02,
    alt: 'Close study of selected currencies, remittance fragments, serial numbers, and security patterns at believable note scale.',
    caption:
      'Common Tender — floor detail. Notes at believable scale; current or restricted notes cropped, overlapped, or abstracted.',
    label: 'Concept study — Common Tender — floor detail',
  }),
  cuentachisteOverview: conceptStudy({
    id: 'cuentachisteOverview',
    kind: 'render',
    src: CUENTACHISTE_OVERVIEW,
    alt: 'Faceless figure covered with currency, seated on a white molded-plastic chair, holding a coffee cup and domino.',
    caption: 'El Cuentachiste — sculpture overview. Humor as survival intelligence; no facial expression, no costume.',
    label: 'Concept study — El Cuentachiste — overview',
  }),
  cuentachisteDetail: conceptStudy({
    id: 'cuentachisteDetail',
    kind: 'sculpture-detail',
    src: CUENTACHISTE_DETAIL_V01,
    alt: 'Detail of currency textile skin, secured cup and domino on El Cuentachiste.',
    caption: 'El Cuentachiste — material and prop detail.',
    label: 'Concept study — El Cuentachiste — detail',
  }),
  harinaOverview: conceptStudy({
    id: 'harinaOverview',
    kind: 'render',
    src: HARINA_OVERVIEW,
    alt: 'Faceless figure covered with yellow corn-flour packaging, seated in a chinchorro on a freestanding steel stand, holding a cuatro.',
    caption:
      'Harina de Otro Costal (working title) — sculpture overview. Explicit Venezuelan anchor; freestanding stand, no ceiling attachment.',
    label: 'Concept study — Harina de Otro Costal — overview',
  }),
  harinaDetail: conceptStudy({
    id: 'harinaDetail',
    kind: 'sculpture-detail',
    src: HARINA_DETAIL,
    alt: 'Detail of corn-flour packaging skin, hammock weave, and secured cuatro.',
    caption: 'Harina de Otro Costal — packaging, hammock, and instrument detail.',
    label: 'Concept study — Harina de Otro Costal — detail',
  }),
  casaDeCambioFront: conceptStudy({
    id: 'casaDeCambioFront',
    kind: 'render',
    src: CASA_FRONT,
    alt: 'Compact black airport-style currency-exchange kiosk with acrylic transaction window and digital rate board.',
    caption:
      'Casa de Cambio — front overview. Offline rate board; occasional HOME / MEMORY / LABOR / FAMILY / FUTURE interruptions.',
    label: 'Concept study — Casa de Cambio — front view',
  }),
  casaDeCambioScreen: conceptStudy({
    id: 'casaDeCambioScreen',
    kind: 'sculpture-detail',
    src: CASA_SCREEN,
    alt: 'Close view of the Casa de Cambio digital rate board with currency buy/sell columns.',
    caption: 'Casa de Cambio — screen typography study. Local media; no live API.',
    label: 'Concept study — Casa de Cambio — screen detail',
  }),
  revealFloorPattern: conceptStudy({
    id: 'revealFloorPattern',
    kind: 'floor-detail',
    src: FLOOR_DETAIL_V01,
    alt: 'Alternate Common Tender floor pattern and note-scale study.',
    caption: 'Reveal — Common Tender floor detail (v01). Primary detail frame uses v02.',
    label: 'Concept study — Reveal — Common Tender',
  }),
  revealCuentachisteIcon: conceptStudy({
    id: 'revealCuentachisteIcon',
    kind: 'sculpture-detail',
    src: CUENTACHISTE_DETAIL_V02,
    alt: 'Alternate material detail for El Cuentachiste — currency skin and props.',
    caption: 'Reveal — El Cuentachiste material detail (v02).',
    label: 'Concept study — Reveal — El Cuentachiste',
  }),
  revealHarinaIcon: placeholder({
    id: 'revealHarinaIcon',
    kind: 'sculpture-detail',
    alt: 'Alternate reveal still for Harina de Otro Costal — chinchorro/cuatro icon study.',
    caption: 'Reveal slot — Harina de Otro Costal. Replace with your icon or material still.',
    label: 'Concept rendering — Reveal — Harina de Otro Costal',
  }),
  revealCasaIcon: conceptStudy({
    id: 'revealCasaIcon',
    kind: 'sculpture-detail',
    src: CLOSING_REFLECTION,
    alt: 'Casa de Cambio exchange reflection on the currency floor.',
    caption: 'Reveal — Casa de Cambio exchange reflection.',
    label: 'Concept study — Reveal — Casa de Cambio',
  }),
  cadillacPanorama: placeholder({
    id: 'cadillacPanorama',
    kind: 'panorama',
    hotelId: 'cadillac',
    alt: 'Equirectangular study of Cadillac Hotel typology for Volver a Valer site adaptation.',
    caption: 'Cadillac — 360 site-adaptation study (pending capture).',
    label: 'Concept rendering — Cadillac — panorama',
  }),
  cadillacRender: conceptStudy({
    id: 'cadillacRender',
    kind: 'render',
    hotelId: 'cadillac',
    src: CADILLAC_RENDER,
    alt: 'Proposed full installation in a bright resort lobby typology.',
    caption: 'Cadillac adaptation — full installation with largest floor field.',
    label: 'Concept study — Cadillac — proposed render',
  }),
  betsyPanorama: placeholder({
    id: 'betsyPanorama',
    kind: 'panorama',
    hotelId: 'betsy',
    alt: 'Equirectangular study of The Betsy Hotel typology for Volver a Valer.',
    caption: 'The Betsy — 360 site-adaptation study (pending capture).',
    label: 'Concept rendering — Betsy — panorama',
  }),
  betsyRender: conceptStudy({
    id: 'betsyRender',
    kind: 'render',
    hotelId: 'betsy',
    src: BETSY_RENDER,
    alt: 'Proposed restrained installation prioritizing El Cuentachiste and Casa de Cambio.',
    caption: 'Betsy adaptation — restrained architectural version.',
    label: 'Concept study — Betsy — proposed render',
  }),
  casaFaenaPanorama: placeholder({
    id: 'casaFaenaPanorama',
    kind: 'panorama',
    hotelId: 'casa-faena',
    alt: 'Equirectangular study of Casa Faena typology for Volver a Valer.',
    caption: 'Casa Faena — 360 site-adaptation study (pending capture).',
    label: 'Concept rendering — Casa Faena — panorama',
  }),
  casaFaenaRender: conceptStudy({
    id: 'casaFaenaRender',
    kind: 'render',
    hotelId: 'casa-faena',
    src: CASA_FAENA_RENDER,
    alt: 'Proposed intimate installation prioritizing Harina de Otro Costal and Casa de Cambio.',
    caption: 'Casa Faena adaptation — intimate and culturally embodied.',
    label: 'Concept study — Casa Faena — proposed render',
  }),
  prototypeFloorSample: placeholder({
    id: 'prototypeFloorSample',
    kind: 'prototype',
    alt: '24 by 36 inch printed floor sample for scale, color, glare, slip, and removal testing.',
    caption: 'Prototype — floor sample (24 × 36 in.).',
    label: 'Concept rendering — Prototype — floor sample',
  }),
  prototypeKioskMockup: placeholder({
    id: 'prototypeKioskMockup',
    kind: 'prototype',
    alt: 'Full-scale cardboard mockup of Casa de Cambio kiosk proportions.',
    caption: 'Prototype — Casa de Cambio cardboard mockup.',
    label: 'Concept rendering — Prototype — kiosk mockup',
  }),
  prototypeScreen: placeholder({
    id: 'prototypeScreen',
    kind: 'prototype',
    alt: 'Screen typography and motion test for the offline rate board.',
    caption: 'Prototype — rate-board typography and motion test.',
    label: 'Concept rendering — Prototype — screen test',
  }),
  closing: conceptStudy({
    id: 'closing',
    kind: 'render',
    src: CLOSING_NIGHT,
    alt: 'Closing proposal view of the full Volver a Valer installation at night on the currency floor.',
    caption: 'Closing — full installation night view. Exchange reflection used in Casa de Cambio reveal.',
    label: 'Concept study — Closing — night installation',
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

/** OG prefers hero, then Casa de Cambio front, when a real render lands */
export const volverOgImage = (() => {
  const candidates = [volverMedia.hero, volverMedia.casaDeCambioFront, volverMedia.currencyFloorOverview];
  return candidates.find((m) => !m.placeholder && m.src) ?? null;
})();

export function toGrantMedia(asset: VolverMediaAsset) {
  return {
    label: asset.label,
    caption: asset.caption,
    src: asset.src,
    alt: asset.alt,
  };
}
