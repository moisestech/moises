import type { ProjectDossier } from './types';
import { OOLITE_DIGITAL_LAB_IMAGE, OOLITE_DIGITAL_LAB_IMAGE_ALT } from '@/content/evidence/projects';

export const ooliteDigitalLabProject: ProjectDossier = {
  slug: 'oolite-digital-lab',
  seo: {
    title: 'Oolite Digital Lab — Technical Direction | Moises Sanabria',
    description:
      'Technical direction for a Miami arts institution digital lab: artist programs, equipment ops, documentation, and stakeholder support.',
  },
  title: 'Oolite Digital Lab',
  category: 'Institutional digital lab',
  whatItIs:
    'Technical direction for Oolite Arts Digital Lab — a Miami institution providing artists access to digital fabrication, media production, AI literacy, and public-facing digital infrastructure.',
  whatIBuilt:
    'Support public-facing digital infrastructure for artist access, lab operations, booking pathways, equipment readiness, signage, and documentation. Develop AI, media, and digital literacy programs. Coordinate vendor communication, fabrication/printing workflows, grant documentation, demos, tutorials, and leadership updates.',
  stack: [
    'Technical direction',
    'Documentation',
    'Digital fabrication',
    'AI literacy',
    'Stakeholder support',
    'Signage systems',
    'Grant reporting',
  ],
  whyItMatters:
    'Demonstrates technical leadership with non-engineering stakeholders, institutional systems design, and the judgment to translate emerging technology into practical artist-facing tools.',
  imageSrc: OOLITE_DIGITAL_LAB_IMAGE,
  imageAlt: OOLITE_DIGITAL_LAB_IMAGE_ALT,
  externalHref: '/tech-nonprofit/oolite',
  externalLabel: 'Oolite microsite',
};
