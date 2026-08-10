/**
 * Onassis ONX — Senior Manager of Artistic Development
 * /opportunities/onx-senior-manager-artistic-development
 *
 * Deadline recorded Aug 31. Announcement: Instagram ONX post.
 * Emphasize institutional/artist development — not a personalized FIU microsite.
 */

import type { Opportunity } from './types';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { evidenceProjects } from '@/content/evidence/projects';
import {
  OOLITE_DIGITAL_LAB_IMAGE,
  OOLITE_DIGITAL_LAB_IMAGE_ALT,
} from '@/content/evidence/projects';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath } from '@/content/technologyCvPrint';
import { onxArtisticDevelopmentBanner } from '@/content/evidence/applicationBanners';
import { educationEvidencePack } from './packs';
import {
  sprint2026NavItems,
  sprint2026ProcessSteps,
  sprint2026TeachingHighlights,
} from './shared-sprint-2026';

const ai24 = evidenceProjects.ai24;

export const onxSeniorManagerArtisticDevelopmentOpportunity: Opportunity = {
  slug: 'onx-senior-manager-artistic-development',
  status: 'active',
  listed: false,
  family: 'compact',
  applicationStatus: 'ready',
  variant: 'compact',
  capabilitiesHref: '/capabilities#design-creative-technology',
  applicationBanner: onxArtisticDevelopmentBanner,
  seo: {
    title: 'ONX — Senior Manager of Artistic Development — Moises Sanabria',
    description:
      'Private dossier for Onassis ONX Senior Manager of Artistic Development — artist programs, creative-technology infrastructure, and teaching from a live practice.',
    indexable: false,
  },
  visibilityNote:
    'Private application dossier · Onassis ONX · Senior Manager of Artistic Development · not affiliated with or endorsed by Onassis Foundation / ONX',
  company: 'Onassis ONX',
  roleTitle: 'Senior Manager of Artistic Development',
  heroEyebrow: 'APPLICATION DOSSIER · ONX',
  candidateName: 'Moises Sanabria',
  candidatePositioning:
    'Artist · educator · systems builder — programs and infrastructure that help artists develop work with emerging technology.',
  heroMetaChips: [
    'Artistic development',
    'Artist-facing programs',
    'Creative technology',
    'Teaching from practice',
    'Institutional collaboration',
  ],
  heroPrimaryCta: { label: 'Role fit', href: '#fit' },
  heroSecondaryCta: { label: 'Infrastructure overview', href: '/artist-infrastructure' },
  audienceKeywords: {
    lead: 'Prepared for',
    terms: [
      {
        label: 'ONX',
        detail: 'Onassis ONX — artistic development and emerging media programs.',
      },
      {
        label: 'Artistic development',
        detail: 'Programs, mentorship, and infrastructure that advance artist work.',
      },
      {
        label: 'Creative technology',
        detail: 'AI, vibe coding, fabrication, and studio systems as artistic mediums.',
      },
    ],
  },
  navItems: sprint2026NavItems,
  hero: {
    headline: 'Artistic development with real creative-technology infrastructure',
    subheadline:
      'Programs, workshops, and systems that help artists move from idea to working prototype',
    introParagraphs: [
      'ONX needs leaders who understand artistic development as more than programming calendars—artists need tools, critique, documentation, and repeatable access. At Oolite Arts I helped turn a Digital Lab into an artist-facing program (space, fabrication, workshops, operations) in collaboration with Director Fabiola Larios, staff, and participating artists.',
      'I teach from a live museum practice and package that offer for incubators and cultural partners at /artist-infrastructure—complementary to digital-presence curricula, focused on the operational and technical layer underneath the work.',
    ],
    trustLine: 'Oolite Arts Technical Director · AI24 · workshops · Cooper Union BFA',
    headshotSrc: moisesSanabriaHeadshot,
    headshotAlt: 'Moises Sanabria — professional headshot',
  },
  roleMatchSectionTitle: 'Role fit',
  roleMatchIntro:
    'Mapped to Senior Manager of Artistic Development: programs, artist support, and creative-technology literacy—without inventing ONX employment history.',
  roleMatchColumnHeaders: {
    left: 'ONX priority',
    right: 'Evidence',
  },
  roleMatchRows: [
    {
      requirement: 'Artist-facing program development',
      evidence:
        'Oolite Digital Lab: workshops, open lab access, fabrication workflows, and operational systems co-developed with Director Fabiola Larios and Oolite staff.',
      status: 'demonstrated',
      illustration: { src: OOLITE_DIGITAL_LAB_IMAGE, alt: OOLITE_DIGITAL_LAB_IMAGE_ALT },
    },
    {
      requirement: 'Teaching from a live artistic practice',
      evidence:
        'Museum-legible practice (Born into the Machine and related works) plus public workshops on AI agents, vibe coding, and studio automation.',
      status: 'demonstrated',
      illustration: { src: ai24.imageSrc, alt: ai24.imageAlt },
    },
    {
      requirement: 'Creative-technology infrastructure',
      evidence:
        'Reusable curricula and institutional systems documented at /artist-infrastructure and /oolite-arts—not a consulting pitch.',
      status: 'demonstrated',
    },
    {
      requirement: 'ONX / Onassis program tenure',
      evidence: 'Not claimed. This dossier is prepared for application conversations only.',
      status: 'todo',
    },
  ],
  featuredProjectIds: [...educationEvidencePack.featuredProjectIds],
  skillsMatrixRows: [...educationEvidencePack.skillRows],
  teachingHighlights: sprint2026TeachingHighlights,
  processSteps: sprint2026ProcessSteps,
  processSectionTitle: 'How I would approach artistic development',
  processIntro:
    'Listen to artists and program needs, connect space/tools/teaching, leave documentation that survives a single workshop.',
  ctas: recruitingCtas({
    emailSubject: 'ONX — Senior Manager of Artistic Development — Moises Sanabria',
    caseStudiesAnchor: '#case-studies',
    resumePdfPath: technologyCvPdfPath,
    resumePrintPath: '/cv/tech/print',
  }),
  techLogoIds: [],
  resumeSectionTitle: 'Discuss artistic development and creative-technology programs',
  resumeSectionNote:
    'Private ONX dossier. Also see /artist-infrastructure for the reusable institutional offer.',
};
