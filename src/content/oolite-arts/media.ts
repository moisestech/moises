/**
 * Oolite Arts / Digilab media registry.
 *
 * Stable ids stay fixed when Cloudinary version hashes or folders change.
 * Update `src` only — pages import by id via `digilabMedia` / helpers.
 *
 * `usedOn` documents which routes/slots consume each asset so remaps stay auditable.
 */

export type DigilabMediaCategory =
  | 'space'
  | 'workshop-banner'
  | 'documentary'
  | 'service'
  | 'headshot';

export type DigilabMediaAsset = {
  id: string;
  /** Human-readable name for editors / future URL swaps */
  name: string;
  src: string;
  alt: string;
  category: DigilabMediaCategory;
  /** Cloudinary public_id / filename stem for matching re-uploads */
  cloudinaryId: string;
  caption?: string;
  credit?: string;
  /** Routes and content slots that reference this asset */
  usedOn: readonly string[];
};

const CDN_DCK = 'https://res.cloudinary.com/dck5rzi4h/image/upload';
const CDN_DKO = 'https://res.cloudinary.com/dkod1at3i/image/upload';

export const digilabMedia = {
  'digilab.room-cyan': {
    id: 'digilab.room-cyan',
    name: 'Digital Lab — computer vision / production room',
    src: `${CDN_DCK}/v1781710428/oolite-arts/oolite-arts-computer-vision-digilab-room-upscale-cyan-1030x579_whqmlg.webp`,
    alt: 'Oolite Arts Digital Lab — computer vision and production workspace',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-arts-computer-vision-digilab-room-upscale-cyan-1030x579_whqmlg',
    caption: 'Production workspace used for open lab, workshops, and artist support.',
    credit: 'Oolite Arts Digital Lab',
    usedOn: [
      '/oolite-arts#hero',
      '/oolite-arts#before-after',
      '/artist-infrastructure#hero',
      '/artist-infrastructure#oolite-proof',
      '/institutions#hero',
      'OOLITE_DIGITAL_LAB_IMAGE (shared constant)',
    ],
  },
  'digilab.entrance': {
    id: 'digilab.entrance',
    name: 'Digilab entrance — front of windows',
    src: `${CDN_DCK}/v1786123447/oolite-arts/oolite-digilab-entrance-front-of-windows_u7aqjx.jpg`,
    alt: 'Oolite Arts Digital Lab entrance — windows and street-facing frontage',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-digilab-entrance-front-of-windows_u7aqjx',
    caption: 'Studio 105 entrance — public-facing Digital Lab presence.',
    usedOn: ['/oolite-arts#hero-parallax', '/oolite-arts#lab-gallery', '/artist-infrastructure#oolite-proof'],
  },
  'digilab.360-hero': {
    id: 'digilab.360-hero',
    name: 'Lab 360 — wide room view',
    src: `${CDN_DCK}/v1786123448/oolite-arts/oolite-arts-digital-lab-360-photo_uaguwe.jpg`,
    alt: 'Oolite Arts Digital Lab — 360° wide room view with workstations',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-arts-digital-lab-360-photo_uaguwe',
    usedOn: ['/oolite-arts#hero-parallax', '/oolite-arts#lab-gallery', '/institutions#banner'],
  },
  'digilab.360-photo-2': {
    id: 'digilab.360-photo-2',
    name: 'Lab 360 — alternate angle',
    src: `${CDN_DCK}/v1786123448/oolite-arts/oolite-arts-digital-lab-360-photo-2_ocoi7k.jpg`,
    alt: 'Oolite Arts Digital Lab — alternate 360° room angle',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-arts-digital-lab-360-photo-2_ocoi7k',
    usedOn: ['/oolite-arts#lab-gallery', '/artist-infrastructure#oolite-proof'],
  },
  'digilab.360-smart-screen': {
    id: 'digilab.360-smart-screen',
    name: 'Lab 360 — smart screen',
    src: `${CDN_DCK}/v1786123448/oolite-arts/oolite-arts-digital-lab-360-smart-screen_nx6omi.jpg`,
    alt: 'Oolite Arts Digital Lab — smart screen display in the room',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-arts-digital-lab-360-smart-screen_nx6omi',
    usedOn: ['/oolite-arts#lab-gallery'],
  },
  'digilab.360-smartsign': {
    id: 'digilab.360-smartsign',
    name: 'Lab 360 — SmartSign',
    src: `${CDN_DCK}/v1786123444/oolite-arts/oolite-digilab-360-smartsign_rbgu1v.jpg`,
    alt: 'Oolite Arts Digital Lab — SmartSign spatial display',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-digilab-360-smartsign_rbgu1v',
    usedOn: ['/oolite-arts#lab-gallery'],
  },
  'digilab.360-pcs-printer': {
    id: 'digilab.360-pcs-printer',
    name: 'Lab 360 — PCs and 3D printer',
    src: `${CDN_DCK}/v1786123444/oolite-arts/oolite-digilab-360-pcs-3d-printer-2_bz4s7h.jpg`,
    alt: 'Oolite Arts Digital Lab — workstations and 3D printer station',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-digilab-360-pcs-3d-printer-2_bz4s7h',
    usedOn: [
      '/oolite-arts#lab-gallery',
      '/oolite-arts#resin',
      '/workshop/moonlighter-ai-3d-printing#instructor',
    ],
  },
  'digilab.360-faby-printer': {
    id: 'digilab.360-faby-printer',
    name: 'Lab 360 — Faby, 3D printer, and PC',
    src: `${CDN_DCK}/v1786123444/oolite-arts/oolite-360-faby-3d-printer-pc_c8boda.jpg`,
    alt: 'Oolite Arts Digital Lab — fabrication station with 3D printer and PC',
    category: 'space',
    cloudinaryId: 'oolite-arts/oolite-360-faby-3d-printer-pc_c8boda',
    usedOn: ['/oolite-arts#lab-gallery', '/oolite-arts#resin'],
  },

  'workshop.vibe-code-net-art': {
    id: 'workshop.vibe-code-net-art',
    name: 'Vibe Code & Net Art — workshop banner',
    src: `${CDN_DKO}/v1776612065/vibe-code-and-net-art_mx7emv.webp`,
    alt: 'Vibe Code and Net Art workshop banner — Digilab Oolite',
    category: 'workshop-banner',
    cloudinaryId: 'vibe-code-and-net-art_mx7emv',
    usedOn: [
      '/oolite-arts#classes.artist-website-beginners',
      '/artist-infrastructure#oolite-proof',
      '/artist-infrastructure#hero',
      'replaces former dccmiami vibe-coding digilab banner',
    ],
  },
  'workshop.seo-banner': {
    id: 'workshop.seo-banner',
    name: 'SEO for Artists — workshop banner',
    src: `${CDN_DKO}/v1776544585/seo-workshop-banner_np2vhf.png`,
    alt: 'SEO workshop banner — artist discoverability and search',
    category: 'workshop-banner',
    cloudinaryId: 'seo-workshop-banner_np2vhf',
    usedOn: [
      '/oolite-arts#classes.seo-for-artists',
      '/artist-infrastructure#hero',
    ],
  },
  'workshop.artist-websites-cover': {
    id: 'workshop.artist-websites-cover',
    name: 'Artist Websites for Beginners — cover',
    src: `${CDN_DCK}/v1786123443/oolite-arts/artists-websites-for-beginners-background-cover-text_hjhhb1.jpg`,
    alt: 'Artist Websites for Beginners — Digital Lab workshop cover',
    category: 'workshop-banner',
    cloudinaryId: 'oolite-arts/artists-websites-for-beginners-background-cover-text_hjhhb1',
    usedOn: [
      '/oolite-arts#classes.artist-websites-aug',
      '/artist-infrastructure#hero',
    ],
  },
  'workshop.resin-2026': {
    id: 'workshop.resin-2026',
    name: '3D Resin Printing for Artists — landscape',
    src: `${CDN_DCK}/v1786123445/oolite-arts/3d-resin-printing-for-artists-digilab-2026-landscape-2_xu5bil.jpg`,
    alt: 'Intro to 3D Resin Printing for Artists — Digilab workshop documentation',
    category: 'workshop-banner',
    cloudinaryId: 'oolite-arts/3d-resin-printing-for-artists-digilab-2026-landscape-2_xu5bil',
    usedOn: [
      '/oolite-arts#classes.intro-resin-printing',
      '/oolite-arts#resin',
      '/artist-infrastructure#hero',
      '/workshop/moonlighter-ai-3d-printing#instructor',
    ],
  },
  'workshop.art-tech-coding': {
    id: 'workshop.art-tech-coding',
    name: 'Art-tech coding workshop — teaching',
    src: `${CDN_DCK}/v1786123445/oolite-arts/moises-sanabria-art-tech-coding-workshop_yw3kuu.jpg`,
    alt: 'Moises Sanabria teaching an art-tech coding workshop in the Digital Lab',
    category: 'documentary',
    cloudinaryId: 'oolite-arts/moises-sanabria-art-tech-coding-workshop_yw3kuu',
    credit: 'Oolite Arts Digital Lab',
    usedOn: [
      '/oolite-arts#classes.artist-website-beginners.documentary',
      '/artist-infrastructure#hero',
      '/artist-infrastructure#oolite-proof',
      '/workshop/moonlighter-ai-3d-printing#instructor',
      '/institutions#hero',
      '/forward-deployed#case-studies',
    ],
  },

  'docs.vibe-apr25-29': {
    id: 'docs.vibe-apr25-29',
    name: 'Vibe coding documentation — Apr 25 · frame 29',
    src: `${CDN_DCK}/v1786123445/oolite-arts/vibe-coding-documentation-apr25th_29_ltq9if.jpg`,
    alt: 'Vibe coding workshop documentation — Digital Lab, April 25',
    category: 'documentary',
    cloudinaryId: 'oolite-arts/vibe-coding-documentation-apr25th_29_ltq9if',
    usedOn: [
      '/oolite-arts#classes.artist-website-beginners.documentary',
      '/oolite-arts#documentation',
      '/workshop/moonlighter-ai-3d-printing#instructor',
    ],
  },
  'docs.vibe-apr25-35': {
    id: 'docs.vibe-apr25-35',
    name: 'Vibe coding documentation — Apr 25 · frame 35',
    src: `${CDN_DCK}/v1786123446/oolite-arts/vibe-coding-documentation-apr25th_35_x2dqzj.jpg`,
    alt: 'Vibe coding workshop in progress — screens and participants, Digital Lab',
    category: 'documentary',
    cloudinaryId: 'oolite-arts/vibe-coding-documentation-apr25th_35_x2dqzj',
    usedOn: [
      '/oolite-arts#classes.artist-website-beginners.documentary',
      '/artist-infrastructure#oolite-proof',
      '/artist-infrastructure#hero',
      '/workshop/moonlighter-ai-3d-printing#instructor',
    ],
  },
  'docs.vibe-apr25-39': {
    id: 'docs.vibe-apr25-39',
    name: 'Vibe coding documentation — Apr 25 · frame 39',
    src: `${CDN_DCK}/v1786123446/oolite-arts/vibe-coding-documentation-apr25th_39_tdskyw.jpg`,
    alt: 'Vibe coding workshop documentation — Digital Lab workstations',
    category: 'documentary',
    cloudinaryId: 'oolite-arts/vibe-coding-documentation-apr25th_39_tdskyw',
    usedOn: [
      '/oolite-arts#classes.artist-website-beginners.documentary',
      '/oolite-arts#documentation',
      '/workshop/moonlighter-ai-3d-printing#instructor',
    ],
  },

  'service.3d-consulting': {
    id: 'service.3d-consulting',
    name: '3D consulting — Digilab preview',
    src: `${CDN_DCK}/v1786123443/oolite-arts/preview-3d-consulting-digilab-oolite_htemmy.jpg`,
    alt: '3D consulting offering — developed at Oolite Digilab, now offered independently',
    category: 'service',
    cloudinaryId: 'oolite-arts/preview-3d-consulting-digilab-oolite_htemmy',
    usedOn: ['/oolite-arts#offerings', '/artist-infrastructure#curriculum'],
  },
  'service.360-photo': {
    id: 'service.360-photo',
    name: '360° photo — Digilab preview',
    src: `${CDN_DCK}/v1786123443/oolite-arts/preview-360-photo-digilab-oolite_akxssh.jpg`,
    alt: '360° photography offering — developed at Oolite Digilab, now offered independently',
    category: 'service',
    cloudinaryId: 'oolite-arts/preview-360-photo-digilab-oolite_akxssh',
    usedOn: ['/oolite-arts#offerings'],
  },
  'service.virtual-studio-visit': {
    id: 'service.virtual-studio-visit',
    name: '1:1 virtual studio visit — Digilab preview',
    src: `${CDN_DCK}/v1786123443/oolite-arts/preview-1-1-virtual-studio-visit-digilab-oolite_lkw0tp.jpg`,
    alt: 'One-on-one virtual studio visit — developed at Oolite Digilab, now offered independently',
    category: 'service',
    cloudinaryId: 'oolite-arts/preview-1-1-virtual-studio-visit-digilab-oolite_lkw0tp',
    usedOn: ['/oolite-arts#offerings'],
  },
  'service.studio-visit': {
    id: 'service.studio-visit',
    name: '1:1 studio visit — Digilab preview',
    src: `${CDN_DCK}/v1786123442/oolite-arts/preview-1-1-studio-visit-digilab-oolite_wxjncb.jpg`,
    alt: 'One-on-one in-person studio visit — developed at Oolite Digilab, now offered independently',
    category: 'service',
    cloudinaryId: 'oolite-arts/preview-1-1-studio-visit-digilab-oolite_wxjncb',
    usedOn: ['/oolite-arts#offerings'],
  },
  'service.vr-consulting': {
    id: 'service.vr-consulting',
    name: 'VR consulting — Digilab preview',
    src: `${CDN_DCK}/v1786123442/oolite-arts/preview-vr-consulting-digilab-oolite_pv0lfc.jpg`,
    alt: 'VR consulting offering — developed at Oolite Digilab, now offered independently',
    category: 'service',
    cloudinaryId: 'oolite-arts/preview-vr-consulting-digilab-oolite_pv0lfc',
    usedOn: ['/oolite-arts#offerings'],
  },
  'service.inkjet': {
    id: 'service.inkjet',
    name: 'Inkjet printing — Digilab preview',
    src: `${CDN_DCK}/v1786123442/oolite-arts/preview-inkjet-printing-digilab-oolite_wo2wtp.jpg`,
    alt: 'Inkjet printing consultation — developed at Oolite Digilab, now offered independently',
    category: 'service',
    cloudinaryId: 'oolite-arts/preview-inkjet-printing-digilab-oolite_wo2wtp',
    usedOn: ['/oolite-arts#offerings'],
  },

  'portrait.moises': {
    id: 'portrait.moises',
    name: 'Moises Sanabria — Oolite Arts portrait',
    src: `${CDN_DCK}/v1786124933/oolite-arts/moises-portrait-oolite-arts_xetxca.jpg`,
    alt: 'Moises Sanabria — Technical Director of Digital, Oolite Arts Digital Lab',
    category: 'headshot',
    cloudinaryId: 'oolite-arts/moises-portrait-oolite-arts_xetxca',
    credit: 'Oolite Arts',
    usedOn: [
      '/oolite-arts#credits',
      '/artist-infrastructure#oolite-proof',
      '/workshop/moonlighter-ai-3d-printing#instructor',
      '/workshops#about',
      '/institutions#profile',
    ],
  },
  'portrait.fabiola': {
    id: 'portrait.fabiola',
    name: 'Fabiola Larios — Oolite Arts portrait',
    src: `${CDN_DCK}/v1786124931/oolite-arts/fabiola-portrait-oolite-arts_cqg32x.jpg`,
    alt: 'Fabiola Larios — Director of Digital Lab, Oolite Arts',
    category: 'headshot',
    cloudinaryId: 'oolite-arts/fabiola-portrait-oolite-arts_cqg32x',
    credit: 'Oolite Arts',
    usedOn: ['/oolite-arts#credits', '/workshops#about'],
  },
} as const satisfies Record<string, DigilabMediaAsset>;

export type DigilabMediaId = keyof typeof digilabMedia;

export function digilabAsset(id: DigilabMediaId): DigilabMediaAsset {
  return digilabMedia[id];
}

/** Shared canonical Digilab room — keep in sync with digilab.room-cyan */
export const OOLITE_DIGITAL_LAB_IMAGE = digilabMedia['digilab.room-cyan'].src;
export const OOLITE_DIGITAL_LAB_IMAGE_ALT = digilabMedia['digilab.room-cyan'].alt;

/** Primary vibe-coding / net-art workshop banner (replaces former dccmiami PNG) */
export const VIBE_CODE_NET_ART_BANNER = digilabMedia['workshop.vibe-code-net-art'].src;
export const VIBE_CODE_NET_ART_BANNER_ALT = digilabMedia['workshop.vibe-code-net-art'].alt;

export const digilabLabGalleryIds = [
  'digilab.entrance',
  'digilab.360-hero',
  'digilab.360-photo-2',
  'digilab.360-smart-screen',
  'digilab.360-smartsign',
  'digilab.360-pcs-printer',
  'digilab.360-faby-printer',
  'digilab.room-cyan',
] as const satisfies readonly DigilabMediaId[];

export const digilabServiceIds = [
  'service.3d-consulting',
  'service.360-photo',
  'service.virtual-studio-visit',
  'service.studio-visit',
  'service.vr-consulting',
  'service.inkjet',
] as const satisfies readonly DigilabMediaId[];

export const digilabHeroParallaxLayers = [
  { id: 'digilab.room-cyan' as const, depth: 0.02 },
  { id: 'digilab.360-hero' as const, depth: 0.06 },
  { id: 'digilab.entrance' as const, depth: 0.1 },
];
