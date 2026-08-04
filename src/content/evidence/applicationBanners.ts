import type { ApplicationBanner } from '@/content/opportunities/types';

const cdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Role banner for `/opportunities/cvs-senior-genai-engineer`. */
export const seniorGenAiEngineerBanner: ApplicationBanner = {
  src: `${cdn}/v1778695455/jobs/banners/senior-genai-engineer-banner_iljp58.png`,
  alt: 'Generative image systems — pipelines, large assets, and review interfaces',
};

export const knightTechProductStrategistBanner: ApplicationBanner = {
  src: `${cdn}/v1778702939/jobs/banners/tech-strategy-knight-foundation-banner_lctdt0.png`,
  alt: 'Knight Foundation — Technology Product Strategist, Journalism Program — application banner',
};

/** NEW INC — Media and Fabrication Lab Manager (`/opportunities/new-inc-media-fabrication-lab-manager`). */
export const newIncMediaFabLabBanner: ApplicationBanner = {
  src: `${cdn}/v1781639125/new-inc-media-fabrication-lab-manager_xezusz.png`,
  alt: 'NEW INC — Media and Fabrication Lab Manager application banner',
  aspectClass: 'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};

/** `/work/creative-tech-image-tools` only — do not reuse on CVS or Knight pages. */
export const creativeTechImageToolsBanner: ApplicationBanner = {
  src: `${cdn}/v1780248505/jobs/banners/ChatGPT_Image_May_31_2026_12_19_46_PM_wu8xw1.png`,
  alt: 'Creative image tools — segmentation, large assets, IIIF delivery, and review interfaces',
  aspectClass: 'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};

/** Affirm — AI Solutions Engineer.
 * Index / OG listing asset only. The systems-dossier page uses a text hero (no full-bleed banner).
 */
export const affirmAiSolutionsEngineerBanner: ApplicationBanner = {
  src: `${cdn}/v1784090736/jobs/banners/job-opportunity-affirm-banner_wyd0cj.png`,
  alt: 'Affirm — AI Solutions Engineer application listing banner',
  aspectClass: 'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};

/**
 * Forward Deployed AI Engineer — Creative Technologist.
 * Local 21:9 editorial workstation banner (left negative space for headline).
 */
export const forwardDeployedAiEngineerBanner: ApplicationBanner = {
  src: '/images/opportunities/forward-deployed-ai-engineer-banner.png',
  alt: 'Creative technology workbench — modular workstation connecting generative media tools, fabrication prototypes, and production workflows',
  aspectClass: 'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};

/**
 * Comfy — Member of Technical Staff, Frontend.
 * Atmospheric work-sample hero (typography overlaid in HTML — image is decorative).
 */
export const comfyMtsFrontendBanner: ApplicationBanner = {
  src: '/images/opportunities/comfy-mts-hero-atmosphere.png',
  alt: '',
  aspectClass:
    'aspect-[16/9] min-h-[140px] max-h-[min(36vh,320px)] sm:aspect-[21/9] sm:min-h-[150px] sm:max-h-[min(40vh,400px)] md:aspect-[2.6/1] md:max-h-[min(42vh,440px)]',
};

/**
 * FLORA — Founding Data Engineer.
 * Data/product career-direction editorial (warehouse + creative systems atmosphere).
 */
export const floraFoundingDataEngineerBanner: ApplicationBanner = {
  src: `${cdn}/v1781659236/product-ai-data-career-direction_ofgnrk.png`,
  alt: 'FLORA Founding Data Engineer — data pipelines, product metrics, and creative systems atmosphere',
  aspectClass:
    'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};

/**
 * WMX — Senior Art Director, Creative + AI Expertise.
 * Dedicated application banner (not a WMX brand asset).
 */
export const wmxSeniorArtDirectorBanner: ApplicationBanner = {
  src: `${cdn}/v1785859691/jobs/banners/senior-art-director-ai-driven-desgin-leader-banner_pweexz.png`,
  alt: 'Senior Art Director — AI-driven design leadership application banner for Moises Sanabria',
  aspectClass:
    'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};
