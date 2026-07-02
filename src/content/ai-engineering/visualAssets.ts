import type { ApplicationBanner } from '@/content/opportunities/types';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { techLogoRegistry } from '@/content/evidence/tech-logos';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

/** Recruiter packet art — Cloudinary `jobs/recruiter/` */
export const recruiterCloudinaryAssets = {
  ogAiEngineering: `${CDN}/v1783034176/jobs/recruiter/ai-engineering-og-card-moises-name-text-heavy_c67fvt.png`,
  heroBanners: {
    iconSystemBalanced: `${CDN}/v1783034175/jobs/recruiter/ai-engineering-hero-banner-icon-system-balanced_jnzy97.png`,
    visualNoText: `${CDN}/v1783034175/jobs/recruiter/ai-engineering-hero-banner-visual-no-text-final_ga7guu.png`,
    networkLogoRow: `${CDN}/v1783034175/jobs/recruiter/ai-engineering-hero-banner-network-logo-row_ytjcof.png`,
    abstractWorkflowText: `${CDN}/v1783034174/jobs/recruiter/ai-engineering-hero-banner-abstract-workflow-text_un4ydq.png`,
    fullUiWithLogos: `${CDN}/v1783034174/jobs/recruiter/ai-engineering-hero-banner-full-ui-with-logos_fb9skc.png`,
    leftTextFlowchart: `${CDN}/v1783034174/jobs/recruiter/ai-engineering-hero-banner-left-text-flowchart_l3jqxl.png`,
  },
} as const;

/** Primary hero under recruiting header — swap key in `heroBanners` to A/B test. */
export const aiEngineeringHeroBannerSrc = recruiterCloudinaryAssets.heroBanners.iconSystemBalanced;

export const aiEngineeringHeroBanner: ApplicationBanner = {
  src: aiEngineeringHeroBannerSrc,
  alt: 'Full-stack AI systems builder — Claude Code, Next.js, Supabase, Airtable, and automation workflows',
  aspectClass: 'aspect-[21/9] min-h-[128px] max-h-[min(44vh,460px)] sm:aspect-[2.5/1] sm:max-h-[min(40vh,420px)]',
};

/** Drop custom assets here — swap `useLocalRecruitingAssets` to true once files are committed locally. */
export const RECRUITING_IMAGES_DIR = '/images/recruiting';

export const recruitingImageFiles = {
  heroBanner: `${RECRUITING_IMAGES_DIR}/hero-banner.png`,
  ogAiEngineering: `${RECRUITING_IMAGES_DIR}/og-ai-engineering.png`,
  ogCareerPacket: `${RECRUITING_IMAGES_DIR}/og-career-packet.png`,
  lifeOsProof: `${RECRUITING_IMAGES_DIR}/life-os-proof.png`,
  infra24Proof: `${RECRUITING_IMAGES_DIR}/infra24-smartsign.png`,
} as const;

/** Set true after adding PNGs under `public/images/recruiting/`. */
export const useLocalRecruitingAssets = false;

const SITE_ORIGIN = 'https://moises.tech';

function absoluteAsset(path: string) {
  return `${SITE_ORIGIN}${path}`;
}

function logoBandItem(id: string, height = 36): LogoBandItem | null {
  const entry = techLogoRegistry[id];
  if (!entry?.imageSrc) return null;
  return { src: entry.imageSrc, alt: entry.label, height };
}

export const aiEngineeringVisuals = {
  heroBanner: aiEngineeringHeroBanner,
  headshot: {
    src: moisesSanabriaHeadshot,
    alt: 'Moises Sanabria — professional headshot',
  },
  techLogoIds: [
    'anthropic',
    'openai',
    'nextjs',
    'typescript',
    'supabase',
    'airtable',
    'n8n',
    'vercel',
    'github',
  ],
  logoBand: [
    'anthropic',
    'openai',
    'nextjs',
    'typescript',
    'supabase',
    'airtable',
    'n8n',
    'vercel',
    'github',
    'langgraph',
  ]
    .map((id) => logoBandItem(id))
    .filter((item): item is LogoBandItem => item !== null),
  ogImage: useLocalRecruitingAssets
    ? absoluteAsset(recruitingImageFiles.ogAiEngineering)
    : recruiterCloudinaryAssets.ogAiEngineering,
  careerPacketOgImage: useLocalRecruitingAssets
    ? absoluteAsset(recruitingImageFiles.ogCareerPacket)
    : recruiterCloudinaryAssets.ogAiEngineering,
  proofImageFallbacks: {
    'life-os':
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659236/product-ai-data-career-direction_ofgnrk.png',
    infra24:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1779309206/dccmiami/knight/dcc-miami-website-screenshot_mugf7d.png',
  },
  proofImageLocal: {
    'life-os': recruitingImageFiles.lifeOsProof,
    infra24: recruitingImageFiles.infra24Proof,
  },
  recruitingImageFiles,
} as const;

export function proofProjectImageSrc(
  slug: keyof typeof aiEngineeringVisuals.proofImageLocal,
  fallback: string,
): string {
  if (!useLocalRecruitingAssets) return fallback;
  return absoluteAsset(aiEngineeringVisuals.proofImageLocal[slug]);
}
