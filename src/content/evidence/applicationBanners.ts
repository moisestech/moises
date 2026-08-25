import type { ApplicationBanner } from '@/content/opportunities/types';
import { OOLITE_DIGITAL_LAB_IMAGE } from '@/content/oolite-arts/media';

const cdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/**
 * Canonical creative-agency application banners (Morley, Ogilvy, WMX, …).
 * Measured: 2172×724 → ratio 3.
 */
export const CREATIVE_AGENCY_BANNER_RATIO = 3;

/**
 * 3:1 strip height — fills viewport width so 2172×724 assets don't leave a gray band.
 * Height tracks width, capped at 640px.
 */
const FLAGSHIP_BANNER_FRAME =
  '!h-[min(calc(100vw/3),640px)] sm:!h-[min(calc(100vw/3),640px)] md:!h-[min(calc(100vw/3),640px)] lg:!h-[min(calc(100vw/3),640px)] xl:!h-[min(calc(100vw/3),640px)] w-full';

/** Older gen-AI / strategy banners (CVS, Knight, creative-tech). Measured: 1916×821 → ~2.334. */
export const GENAI_BANNER_RATIO = 1916 / 821;

type BannerInput = {
  src: string;
  alt: string;
  intrinsicRatio: number;
  srcWide?: string;
  srcExtraWide?: string;
  presentation?: ApplicationBanner['presentation'];
  aspectClass?: string;
  frameClass?: string;
  objectPosition?: ApplicationBanner['objectPosition'];
  overlayLabel?: string;
};

/** Prefer this helper so every banner declares its intrinsic width÷height. */
export function defineApplicationBanner(input: BannerInput): ApplicationBanner {
  return {
    src: input.src,
    alt: input.alt,
    intrinsicRatio: input.intrinsicRatio,
    srcWide: input.srcWide,
    srcExtraWide: input.srcExtraWide,
    presentation: input.presentation ?? 'contain-blur',
    aspectClass: input.aspectClass,
    frameClass: input.frameClass,
    objectPosition: input.objectPosition,
    overlayLabel: input.overlayLabel,
  };
}

/** Role banner for `/opportunities/cvs-senior-genai-engineer`. */
export const seniorGenAiEngineerBanner = defineApplicationBanner({
  src: `${cdn}/v1778695455/jobs/banners/senior-genai-engineer-banner_iljp58.png`,
  alt: 'Generative image systems — pipelines, large assets, and review interfaces',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/** Role banner for GenAI curriculum / SME education contracts (Hurix and reusable overlays). Measured 2172×724. */
export const genAiCurriculumSmeBanner = defineApplicationBanner({
  src: `${cdn}/v1786719736/jobs/banners/hurix-genai-sme-banner_nlymdc.png`,
  alt: 'Subject Matter Expert — Generative AI — curriculum, labs, and video-ready teaching banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
  frameClass: FLAGSHIP_BANNER_FRAME,
});

export const knightTechProductStrategistBanner = defineApplicationBanner({
  src: `${cdn}/v1778702939/jobs/banners/tech-strategy-knight-foundation-banner_lctdt0.png`,
  alt: 'Knight Foundation — Technology Product Strategist, Journalism Program — application banner',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/** NEW INC — Media and Fabrication Lab Manager (`/opportunities/new-inc-media-fabrication-lab-manager`). */
export const newIncMediaFabLabBanner = defineApplicationBanner({
  src: `${cdn}/v1781639125/new-inc-media-fabrication-lab-manager_xezusz.png`,
  alt: 'NEW INC — Media and Fabrication Lab Manager application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** `/work/creative-tech-image-tools` only — do not reuse on CVS or Knight pages. */
export const creativeTechImageToolsBanner = defineApplicationBanner({
  src: `${cdn}/v1780248505/jobs/banners/ChatGPT_Image_May_31_2026_12_19_46_PM_wu8xw1.png`,
  alt: 'Creative image tools — segmentation, large assets, IIIF delivery, and review interfaces',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/** Affirm — AI Solutions Engineer.
 * Index / OG listing asset only. The systems-dossier page uses a text hero (no full-bleed banner).
 */
export const affirmAiSolutionsEngineerBanner = defineApplicationBanner({
  src: `${cdn}/v1784090736/jobs/banners/job-opportunity-affirm-banner_wyd0cj.png`,
  alt: 'Affirm — AI Solutions Engineer application listing banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** Public archetype — AI Solutions Architect (`/opportunities/ai-solutions-architect`). */
export const aiSolutionsArchitectBanner = defineApplicationBanner({
  src: `${cdn}/v1784090736/jobs/banners/job-opportunity-affirm-banner_wyd0cj.png`,
  alt: 'AI Solutions Architect — technical discovery, integration scoping, and customer-facing AI systems',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/**
 * Forward-Deployed Systems — `/forward-deployed` + `/opportunities/forward-deployed-ai-engineer`.
 * Measured 2172×724.
 */
export const forwardDeployedAiEngineerBanner = defineApplicationBanner({
  src: `${cdn}/v1786744384/jobs/banners/forward-deployed-systems-banner_brf4sa.png`,
  alt: 'Forward-Deployed Systems — from organizational problems to deployed technical systems',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
  presentation: 'cover',
  aspectClass:
    '!aspect-[3/1] w-full !min-h-[168px] sm:!min-h-[220px] md:!min-h-[248px] !max-h-[min(42vh,420px)]',
});

/**
 * Comfy — Member of Technical Staff, Frontend.
 * Atmospheric work-sample hero (typography overlaid in HTML — image is decorative).
 */
export const comfyMtsFrontendBanner = defineApplicationBanner({
  src: '/images/opportunities/comfy-mts-hero-atmosphere.png',
  alt: '',
  intrinsicRatio: 1536 / 1024, // measured local asset
});

/**
 * FLORA — Founding Data Engineer.
 * Data/product career-direction editorial (warehouse + creative systems atmosphere).
 */
export const floraFoundingDataEngineerBanner = defineApplicationBanner({
  src: `${cdn}/v1781659236/product-ai-data-career-direction_ofgnrk.png`,
  alt: 'FLORA Founding Data Engineer — data pipelines, product metrics, and creative systems atmosphere',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/**
 * FLORA — Forward Deployed Creative.
 * Local 3:1 hero banner (2172×724) from public/images/opportunities/flora-forward-deployed-creative/.
 */
export const floraForwardDeployedCreativeBanner = defineApplicationBanner({
  src: '/images/opportunities/flora-forward-deployed-creative/flora-forward-deployed-creative-hero-banner.png',
  alt: 'FLORA Forward Deployed Creative — creative workflow systems and customer enablement atmosphere',
  intrinsicRatio: 2172 / 724,
});

/** Ogilvy — Creative Editor / AI (banner asset may still read Creative Director). */
export const ogilvySeniorAiDrivenCreativeDirectorBanner = defineApplicationBanner({
  src: `${cdn}/v1785862416/jobs/banners/senior-ai-driven-creative-director-banner_y1mof7.png`,
  alt: 'Ogilvy — Creative Editor / AI application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** Public hiring flagship — `/creative-ai` (measured 2172×724). */
export const creativeAiFlagshipBanner = defineApplicationBanner({
  src: `${cdn}/v1786380608/jobs/banners/creative-ai-moises-tech-banner_qtiy2f.png`,
  alt: 'Creative AI — Moises Sanabria hiring flagship banner',
  intrinsicRatio: 2172 / 724,
  frameClass: FLAGSHIP_BANNER_FRAME,
});

/** Public hiring flagship — `/creative-strategist` (measured 2172×724). */
export const creativeStrategistFlagshipBanner = defineApplicationBanner({
  src: `${cdn}/v1786380606/jobs/banners/creative-strategist-moises-tech-banner_ptxn5d.png`,
  alt: 'Creative Strategist — Moises Sanabria hiring flagship banner',
  intrinsicRatio: 2172 / 724,
  frameClass: FLAGSHIP_BANNER_FRAME,
});

/**
 * `/artist-infrastructure` banner — measured 2171×724 (~3:1 flagship strip).
 * @see docs/institutions/artist-infrastructure-banner-prompt.md
 */
export const artistInfrastructureBanner = defineApplicationBanner({
  src: `${cdn}/v1786387514/dccmiami/workshops/the-art-of-ai-agents/artist-infrastructure-banner-wide_fqgn4y.png`,
  alt: 'Creative Infrastructure for Artists — workshops, tools, and systems banner',
  intrinsicRatio: 2171 / 724,
  frameClass: FLAGSHIP_BANNER_FRAME,
});

/**
 * /institutions — cinematic lab still until a dedicated 2172×724 services banner is produced.
 * Cover crop of the Oolite Digital Lab 360 room (institutional workspace, not a logo wall).
 */
export const institutionsDigitalSystemsBanner = defineApplicationBanner({
  src: `${cdn}/v1786123448/oolite-arts/oolite-arts-digital-lab-360-photo_uaguwe.jpg`,
  alt: 'Oolite Arts Digital Lab — workstations and production room used for artist programs',
  intrinsicRatio: 16 / 9,
  presentation: 'cover',
  frameClass: FLAGSHIP_BANNER_FRAME,
  objectPosition: 'center',
});

/**
 * /ica-miami — wide ICA exhibition still as page chrome.
 * Later-context only: not visual evidence of the 2019–2020 Digital Producer role.
 */
export const icaMiamiSystemsBanner = defineApplicationBanner({
  src: `${cdn}/v1739483923/art/moisestech-website/exhibitions/dec_2024_dminti_notions_of_home/NotionsOfHome_banner_soubxf.jpg`,
  alt: 'Notions of Home — ICA Miami × Dminti exhibition banner',
  intrinsicRatio: 21 / 9,
  presentation: 'cover',
  frameClass: FLAGSHIP_BANNER_FRAME,
});

/** Morley — Art Director (Remote, Florida). */
export const morleyArtDirectorBanner = defineApplicationBanner({
  src: `${cdn}/v1785862415/jobs/banners/art-director-morley-banner_b5ridm.png`,
  alt: 'Morley — Art Director application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** MSC Cruises — Creative Director, Travel & Experiences. */
export const mscCruisesCreativeDirectorBanner = defineApplicationBanner({
  src: `${cdn}/v1785862415/jobs/banners/creative-director-msc-cruises-banner_whtcx8.png`,
  alt: 'MSC Cruises — Creative Director Travel & Experiences application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** Razorfish / Publicis Groupe — Junior Art Director. */
export const razorfishJuniorArtDirectorBanner = defineApplicationBanner({
  src: `${cdn}/v1785862413/jobs/banners/junior-art-director-razorfish-banner_jt9yyi.png`,
  alt: 'Razorfish — Junior Art Director application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** Digitas — Associate Director, Creative. */
export const digitasAssociateDirectorCreativeBanner = defineApplicationBanner({
  src: `${cdn}/v1785862413/jobs/banners/associate-director-creative-digitas-banner_to4ylc.png`,
  alt: 'Digitas — Associate Director Creative application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/**
 * WMX — Senior Art Director, Creative + AI Expertise.
 * Dedicated application banner (not a WMX brand asset).
 */
export const wmxSeniorArtDirectorBanner = defineApplicationBanner({
  src: `${cdn}/v1785862412/jobs/banners/senior-art-director-wmx-creative-ai-expertise-banner_axmv4k.png`,
  alt: 'WMX — Senior Art Director Creative + AI Expertise application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/**
 * WMX — Senior Art Director, AI-Driven Design Leader.
 * Companion listing / alternate title framing at wearewmx.com.
 */
export const wmxAiDrivenDesignLeaderBanner = defineApplicationBanner({
  src: `${cdn}/v1785859691/jobs/banners/senior-art-director-ai-driven-desgin-leader-banner_pweexz.png`,
  alt: 'WMX — Senior Art Director AI-Driven Design Leader application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** Alpha Drive AI — Full Stack Engineer. */
export const alphaDriveAiFullStackBanner = defineApplicationBanner({
  src: `${cdn}/v1781659418/ai24-website-above-the-fold_kbp2ei.png`,
  alt: 'Alpha Drive AI — Full Stack Engineer application banner (product/engineering atmosphere)',
  intrinsicRatio: 4112 / 2394, // measured
});

/** WPP HEX — Creative Innovation Lead / ACD. */
export const wppHexCreativeInnovationLeadBanner = defineApplicationBanner({
  src: `${cdn}/v1785862416/jobs/banners/senior-ai-driven-creative-director-banner_y1mof7.png`,
  alt: 'WPP HEX — Creative Innovation Lead / ACD application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
});

/** Onassis ONX — Senior Manager of Artistic Development. */
export const onxArtisticDevelopmentBanner = defineApplicationBanner({
  src: OOLITE_DIGITAL_LAB_IMAGE,
  alt: 'ONX — Senior Manager of Artistic Development application banner',
  intrinsicRatio: 1030 / 579, // digilab.room-cyan delivery size
});

/** Stacklok — Staff Forward Deployed Engineer. */
export const stacklokStaffFdeBanner = defineApplicationBanner({
  src: `${cdn}/v1785454236/jobs/banners/forward-deploiyed-engineer-stacklok_mdpzpp.png`,
  alt: 'Stacklok Staff Forward Deployed Engineer — enterprise AI deployment, secure agent connectivity, and field-to-platform delivery',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/** Alias used by the Stacklok dossier module. */
export const stacklokStaffForwardDeployedEngineerBanner = stacklokStaffFdeBanner;

/** Banesco USA — AI Developer. */
export const banescoAiDeveloperBanner = defineApplicationBanner({
  src: `${cdn}/v1784909845/jobs/banners/banesco-ai-engineer_njqmce.png`,
  alt: 'Banesco USA AI Developer — applied AI, cloud data systems, and bilingual delivery',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/** CoreStory — AI Engineer. */
export const corestoryAiEngineerBanner = defineApplicationBanner({
  src: `${cdn}/v1785208741/jobs/banners/corestory-ai-engineer-banner_pa23tj.png`,
  alt: 'CoreStory AI Engineer — LLM systems, retrieval, and narrative intelligence from legacy complexity',
  intrinsicRatio: GENAI_BANNER_RATIO,
});

/** Deloitte — Forward Deployed Engineer, ServiceNow (req. 362315). Branded crop 1983×793; text is in the image. */
export const deloitteServicenowFdeBanner = defineApplicationBanner({
  src: `${cdn}/v1787067441/jobs/banners/deloitte-fde-servicenow_bw2clz.png`,
  alt: 'Deloitte Forward Deployed Engineer evidence — Discover, Build, Harden, Enable.',
  intrinsicRatio: 1983 / 793,
  presentation: 'cover',
  objectPosition: 'center',
  aspectClass:
    '!aspect-[1983/793] w-full !min-h-[168px] sm:!min-h-[220px] md:!min-h-[248px] !max-h-[min(42vh,420px)]',
});

/**
 * Deloitte — AI Design Facilitator and Forward-Deployed Engineer II (req. 360529).
 * Local 1536×1024 (3:2) workshop still; title is in the image. No employer logo.
 * Contain-blur so the full frame stays visible; strip height tracks 3:2 until 640px, then side blur.
 */
export const deloitteAiDesignFacilitatorFdeBanner = defineApplicationBanner({
  src: '/images/opportunities/deloitte-ai-design-facilitator-fde/hero-banner.png',
  alt: 'AI Design Facilitator and Forward-Deployed Engineer application evidence — workshop, journey map, and prototype review.',
  intrinsicRatio: 1536 / 1024,
  presentation: 'cover',
  objectPosition: 'center',
  overlayLabel: 'FRAME → FACILITATE → PROTOTYPE → TEST → ENABLE',
});
