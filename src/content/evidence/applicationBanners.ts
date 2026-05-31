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

/** `/work/creative-tech-image-tools` — dedicated role banner. */
export const creativeTechImageToolsBanner: ApplicationBanner = {
  src: `${cdn}/v1780248505/jobs/banners/ChatGPT_Image_May_31_2026_12_19_46_PM_wu8xw1.png`,
  alt: 'Creative image tools — segmentation, large assets, IIIF delivery, and review interfaces',
};
