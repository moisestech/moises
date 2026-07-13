import type { BitmInstitutionRelationship } from '@/content/born-into-the-machine/bitm-types';
import { OOLITE_DIGITAL_LAB_IMAGE } from '@/content/evidence/projects';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type BitmInstitution = {
  id: string;
  name: string;
  relationship: BitmInstitutionRelationship;
  caption: string;
  imageUrl?: string;
  logoUrl?: string;
};

export const bitmInstitutions: BitmInstitution[] = [
  {
    id: 'bakehouse',
    name: 'Bakehouse Art Complex',
    relationship: 'studio',
    caption:
      'Studio 43 — primary production environment; Breadbytes and CONTINUUM cohort host.',
    imageUrl: `${CDN}/v1783907488/art/moisestech-website/studio/moises-sanabria-open-studios-red-world-eye-2024_zdyayj.jpg`,
  },
  {
    id: 'munag',
    name: 'MUNAG — National Museum of Art of Guatemala',
    relationship: 'exhibition',
    caption:
      'CONTINUUM — Smart Shoppers and The Price of Existence with Fabiola Larios and Leo Castañeda.',
    imageUrl: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`,
  },
  {
    id: 'oolite',
    name: 'Oolite Arts',
    relationship: 'partner',
    caption: 'Digital Lab — distributed studio node for technical production and research.',
    imageUrl: OOLITE_DIGITAL_LAB_IMAGE,
  },
  {
    id: 'mdc-idea',
    name: 'MDC Idea Center',
    relationship: 'education',
    caption: 'AI Sprint for Artists — workshop and education partnership.',
  },
  {
    id: 'locust',
    name: 'Locust Projects',
    relationship: 'exhibition',
    caption: 'Exhibition and presentation context.',
  },
  {
    id: 'edgezones',
    name: 'Edge Zones',
    relationship: 'exhibition',
    caption: 'Exhibition and presentation context.',
  },
  {
    id: 'chroma',
    name: 'Chroma Art Film Festival',
    relationship: 'host',
    caption: 'Touch Grass Circuit Floor — public festival install host.',
    imageUrl: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
  },
  {
    id: 'superblue',
    name: 'Superblue',
    relationship: 'presentation',
    caption: 'Presentation and institutional context.',
  },
  {
    id: 'momus',
    name: 'MOMus',
    relationship: 'exhibition',
    caption: 'International exhibition context.',
  },
  {
    id: 'knight',
    name: 'Knight Foundation',
    relationship: 'funder',
    caption: 'Public art and civic technology funding context.',
  },
  {
    id: 'transmediale',
    name: 'Transmediale',
    relationship: 'presentation',
    caption: 'International presentation and research context.',
  },
  {
    id: 'hkw',
    name: 'HKW',
    relationship: 'presentation',
    caption: 'Haus der Kulturen der Welt — international presentation context.',
  },
];

export const bitmInfrastructureCenterLabel =
  'BORN INTO THE MACHINE · STUDIO 43 / DISTRIBUTED PRACTICE';

export type BitmInfrastructureNodeExtended = {
  id: string;
  label: string;
  role: string;
  image?: string;
  archivalArtifact?: string;
  credits?: string;
  dependsOn?: string[];
  relationship?: string;
  status?: 'documented' | 'partial' | 'needed';
};

export const bitmInfrastructureDependencies: Record<string, string[]> = {
  artist: ['community', 'models', 'fabrication', 'institution', 'funding'],
  community: ['artist', 'education'],
  models: ['data', 'energy'],
  data: ['documentation'],
  fabrication: ['energy', 'maintenance'],
  institution: ['funding', 'documentation'],
  funding: ['institution'],
  education: ['community', 'documentation'],
  documentation: ['institution', 'distribution'],
  maintenance: ['fabrication', 'energy'],
  energy: ['fabrication'],
  distribution: ['documentation', 'institution'],
};
