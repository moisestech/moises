import type { ApplicationBanner } from '@/content/opportunities/types';

const cdn = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Role banner created for `/opportunities/cvs-senior-genai-engineer`. */
export const seniorGenAiEngineerBanner: ApplicationBanner = {
  src: `${cdn}/v1778695455/jobs/banners/senior-genai-engineer-banner_iljp58.png`,
  alt: 'Generative image systems — pipelines, large assets, and review interfaces',
};

export const knightTechProductStrategistBanner: ApplicationBanner = {
  src: `${cdn}/v1778702939/jobs/banners/tech-strategy-knight-foundation-banner_lctdt0.png`,
  alt: 'Knight Foundation — Technology Product Strategist, Journalism Program — application banner',
};

/**
 * Dedicated `/work/creative-tech-image-tools` banner — set `src` after uploading
 * `jobs/banners/creative-tech-image-tools-banner.png` (see docs/work/creative-tech-banner-prompt.md).
 */
export const creativeTechImageToolsBannerDedicated: ApplicationBanner = {
  src: `${cdn}/jobs/banners/creative-tech-image-tools-banner.png`,
  alt: 'Creative image tools — segmentation, large assets, IIIF delivery, and review interfaces',
};

/** Flip to `true` once the dedicated Cloudinary asset exists (HTTP 200 on `creativeTechImageToolsBannerDedicated.src`). */
export const USE_DEDICATED_CREATIVE_TECH_BANNER = false;

/** `/work/creative-tech-image-tools` — dedicated asset when uploaded, else GenAI banner fallback. */
export const creativeTechImageToolsBanner: ApplicationBanner = USE_DEDICATED_CREATIVE_TECH_BANNER
  ? creativeTechImageToolsBannerDedicated
  : {
      ...seniorGenAiEngineerBanner,
      alt: 'Creative image tools — generative pipelines, large assets, and review interfaces',
    };
