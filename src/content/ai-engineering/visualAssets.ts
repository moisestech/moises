import { seniorGenAiEngineerBanner } from '@/content/evidence/applicationBanners';
import type { ApplicationBanner } from '@/content/opportunities/types';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { techLogoRegistry } from '@/content/evidence/tech-logos';

/** Drop custom assets here — swap `useLocalRecruitingAssets` to true once files are committed. */
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

const cloudinaryOgAiEngineering = seniorGenAiEngineerBanner.src;
const cloudinaryOgCareerPacket =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png';

export const aiEngineeringVisuals = {
  heroBanner: seniorGenAiEngineerBanner satisfies ApplicationBanner,
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
    : cloudinaryOgAiEngineering,
  careerPacketOgImage: useLocalRecruitingAssets
    ? absoluteAsset(recruitingImageFiles.ogCareerPacket)
    : cloudinaryOgCareerPacket,
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
