import { moisesSanabriaHeadshot, moisesSanabriaPortraitFull } from '@/content/evidence/recruitingLogoBand';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const bitmPublicBase = '/born-into-the-machine';

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
  studio: {
    workstation: `${CDN}/v1775099574/art/moisestech-website/research/broken-acceleration/broken-acceleration-writing-apr1st-wavemaker-2026_xrg993.png`,
    workshop: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    fabrication: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
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
