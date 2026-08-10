import type { ApplicationBanner } from '@/content/opportunities/types';
import { OOLITE_DIGITAL_LAB_IMAGE } from '@/content/oolite-arts/media';

const cdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/**
 * Canonical creative-agency application banners (Morley, Ogilvy, WMX, …).
 * Measured: 2172×724 → ratio 3.
 */
export const CREATIVE_AGENCY_BANNER_RATIO = 3;

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
  };
}

/** Role banner for `/opportunities/cvs-senior-genai-engineer`. */
export const seniorGenAiEngineerBanner = defineApplicationBanner({
  src: `${cdn}/v1778695455/jobs/banners/senior-genai-engineer-banner_iljp58.png`,
  alt: 'Generative image systems — pipelines, large assets, and review interfaces',
  intrinsicRatio: GENAI_BANNER_RATIO,
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
 * Forward Deployed AI Engineer — Creative Technologist.
 * Local 21:9 editorial workstation banner (left negative space for headline).
 */
export const forwardDeployedAiEngineerBanner = defineApplicationBanner({
  src: '/images/opportunities/forward-deployed-ai-engineer-banner.png',
  alt: 'Creative technology workbench — modular workstation connecting generative media tools, fabrication prototypes, and production workflows',
  intrinsicRatio: 1536 / 1024, // measured local asset
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

/** Ogilvy — Creative Editor / AI (banner asset may still read Creative Director). */
export const ogilvySeniorAiDrivenCreativeDirectorBanner = defineApplicationBanner({
  src: `${cdn}/v1785862416/jobs/banners/senior-ai-driven-creative-director-banner_y1mof7.png`,
  alt: 'Ogilvy — Creative Editor / AI application banner',
  intrinsicRatio: CREATIVE_AGENCY_BANNER_RATIO,
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
  src: `${cdn}/v1780248505/jobs/banners/ChatGPT_Image_May_31_2026_12_19_46_PM_wu8xw1.png`,
  alt: 'Stacklok — Staff Forward Deployed Engineer application banner',
  intrinsicRatio: GENAI_BANNER_RATIO,
});
