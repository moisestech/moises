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
  href?: string;
};

export const bitmPublicDocumentationSlides: BitmPublicDocSlide[] = [
  {
    id: 'open-studios-2024',
    category: 'open-studio',
    title: 'Bakehouse Open Studios',
    caption: 'Studio 43 documentation — interim photograph pending dedicated flat panorama.',
    imageUrl: bitmAssets.studio43.flatPhoto.url,
    alt: bitmAssets.studio43.flatPhoto.alt,
  },
  {
    id: 'breadbytes-2023',
    category: 'install',
    title: 'Breadbytes Exhibition',
    caption: 'Artmaking for the Next Generation — Baby AGI / From Cradle to AGI at Bakehouse.',
    imageUrl: bitmAssets.studio.breadbytes,
    alt: 'Breadbytes exhibition installation shot at Bakehouse',
    href: 'https://www.bacfl.org/exhibitions/breadbytes-artmaking-for-the-next-generation',
  },
  {
    id: 'continuum-munag-2024',
    category: 'install',
    title: 'CONTINUUM at MUNAG',
    caption:
      'National Museum of Art of Guatemala — Smart Shoppers and The Price of Existence with Bakehouse peers.',
    imageUrl: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`,
    alt: 'Smart Shoppers — CONTINUUM exhibition context',
    href: 'https://www.bacfl.org/blog/csiu59p0euqb6bnpyojclicd6bjjiw',
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
