import { moisesSanabriaHeadshot, moisesSanabriaPortraitFull } from '@/content/evidence/recruitingLogoBand';
import { OOLITE_DIGITAL_LAB_IMAGE } from '@/content/evidence/projects';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const bitmPublicBase = '/born-into-the-machine';

export const STUDIO_43_PANORAMA_EMBED =
  'https://momento360.com/e/u/a338f042352a4550b3e12a6ccc29f98b?utm_campaign=embed&utm_source=other&heading=128.94&pitch=-17.74&field-of-view=75&size=medium&display-plan=true';

export const bitmAssets = {
  hero: {
    poster: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    pointCloud: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    wireframe: `${bitmPublicBase}/hero/hero-machine-wireframe.svg`,
    loop: `${bitmPublicBase}/hero/hero-born-machine-loop.webm`,
    og: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
  },
  portraits: {
    primary: moisesSanabriaPortraitFull,
    secondary: moisesSanabriaHeadshot,
    depth: `${bitmPublicBase}/portraits/portrait-moises-depth.webp`,
    mask: `${bitmPublicBase}/portraits/portrait-moises-mask.webp`,
    cutout: `${bitmPublicBase}/portraits/portrait-moises-cutout.webp`,
    poseSvg: `${bitmPublicBase}/portraits/portrait-moises-pose.svg`,
  },
  studio43: {
    panoramaEmbedUrl: STUDIO_43_PANORAMA_EMBED,
    flatPhoto: { status: 'needed' as const, url: null },
  },
  studio: {
    openStudios: `${CDN}/v1717960571/art/moisestech-website/digitaldivinities-moisesdsanabria-fabiolalarios-bakehouse-openstudios-spring-2024_f3ahbx.jpg`,
    breadbytes: `${CDN}/v1739483633/art/moisestech-website/exhibitions/dec_2023_bakehouse_breadbytes/exhibition_shot_2_nbx7ky.jpg`,
    ooliteLab: OOLITE_DIGITAL_LAB_IMAGE,
    installation: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
  },
  textures: {
    scanLines: `${bitmPublicBase}/textures/scan-lines.webp`,
    depthMap: `${bitmPublicBase}/textures/depth-map.webp`,
    annotationGrid: `${bitmPublicBase}/textures/annotation-grid.svg`,
  },
  audio: {
    ambience: `${bitmPublicBase}/audio/studio-machine-ambience.mp3`,
    transcript: `${bitmPublicBase}/audio/studio-machine-transcript.txt`,
  },
  signature: `${bitmPublicBase}/portraits/author-signature.svg`,
} as const;
