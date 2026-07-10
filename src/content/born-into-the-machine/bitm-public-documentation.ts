import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type BitmPublicDocCategory =
  | 'workshop'
  | 'university'
  | 'art-community'
  | 'open-studio'
  | 'install'
  | 'audience'
  | 'maintenance';

export type BitmPublicDocSlide = {
  id: string;
  category: BitmPublicDocCategory;
  title: string;
  caption: string;
  imageUrl?: string;
  imageStatus?: 'ready' | 'needed';
  alt: string;
};

export const bitmPublicDocumentationSlides: BitmPublicDocSlide[] = [
  {
    id: 'open-studios-2024',
    category: 'open-studio',
    title: 'Bakehouse Open Studios',
    caption: 'Spring 2024 — public studio access and workshop context.',
    imageUrl: bitmAssets.studio.openStudios,
    alt: 'Bakehouse open studios with Moises Sanabria and Fabiola Larios',
  },
  {
    id: 'breadbytes-2023',
    category: 'install',
    title: 'Breadbytes Exhibition',
    caption: 'Dec 2023 — institutional install at Bakehouse Art Complex.',
    imageUrl: bitmAssets.studio.breadbytes,
    alt: 'Breadbytes exhibition installation shot at Bakehouse',
  },
  {
    id: 'oolite-lab',
    category: 'art-community',
    title: 'Oolite Digital Lab',
    caption: 'Distributed studio node — technical production and research.',
    imageUrl: bitmAssets.studio.ooliteLab,
    alt: 'Oolite Digital Lab room',
  },
  {
    id: 'touchgrass-festival',
    category: 'install',
    title: 'Touch Grass Circuit Floor',
    caption: 'Chroma Art Film Festival — public festival install.',
    imageUrl: bitmAssets.studio.installation,
    alt: 'Doomscrolling Treadmill stations at Touch Grass festival',
  },
  {
    id: 'workshop-needed',
    category: 'workshop',
    title: 'Workshop Documentation',
    caption: 'Public workshop and teaching program — additional documentation being indexed.',
    imageStatus: 'needed',
    alt: 'Workshop documentation placeholder',
  },
  {
    id: 'collab-install-needed',
    category: 'maintenance',
    title: 'Collaborative Installation',
    caption: 'COLLABORATIVE INSTALLATION DOCUMENTATION NEEDED — crew, rigging, cables.',
    imageStatus: 'needed',
    alt: 'Collaborative installation documentation needed',
  },
];

export const bitmPublicDocCategoryLabels: Record<BitmPublicDocCategory, string> = {
  workshop: 'WORKSHOP',
  university: 'UNIVERSITY',
  'art-community': 'ART COMMUNITY',
  'open-studio': 'OPEN STUDIO',
  install: 'INSTALL',
  audience: 'AUDIENCE',
  maintenance: 'MAINTENANCE',
};
