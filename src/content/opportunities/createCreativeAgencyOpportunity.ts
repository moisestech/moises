/**
 * Helper to assemble creative-agency opportunity dossiers with shared chrome.
 */

import type { ApplicationBanner, Opportunity, RoleMatchRow } from './types';
import type { CreativeAgencyDossier } from './creativeAgencyDossier';
import {
  creativeAgencyNavItems,
  creativeAgencySkillsMatrix,
  sharedCreativeProcessSteps,
  buildCreativeRolePortfolio,
} from './creativeAgencyShared';
import { recruitingCtas } from '@/content/evidence/recruitingDefaults';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { resumePdfDriveViewUrl } from '@/content/ai-engineering/packet';
import { creativeProofPack } from './packs';

export type CreativeAgencyOpportunityConfig = {
  slug: string;
  company: string;
  roleTitle: string;
  seoTitle: string;
  seoDescription: string;
  banner: ApplicationBanner;
  heroEyebrow: string;
  headline: string;
  subheadline: string;
  introParagraphs: string[];
  trustLine: string;
  heroMetaChips: string[];
  audienceTerms: { label: string; detail: string }[];
  creativeAgency: CreativeAgencyDossier;
  roleMatchIntro: string;
  roleMatchRows: RoleMatchRow[];
  emailSubject: string;
  availabilityNote: string;
  resumeSectionNote?: string;
  processIntro?: string;
  applicationStatus?: Opportunity['applicationStatus'];
  navItems?: Opportunity['navItems'];
};

export function createCreativeAgencyOpportunity(
  config: CreativeAgencyOpportunityConfig,
): Opportunity {
  const agency = config.creativeAgency;
  return {
    slug: config.slug,
    status: 'active',
    listed: false,
    variant: 'role-portfolio',
    family: 'creative-agency',
    applicationStatus: config.applicationStatus ?? 'ready',
    applicationBanner: config.banner,
    seo: {
      title: config.seoTitle,
      description: config.seoDescription,
      indexable: false,
    },
    visibilityNote: `Private application dossier · ${config.company} · ${config.roleTitle} · not affiliated with or endorsed by ${config.company}`,
    audienceKeywords: {
      lead: 'Prepared for',
      terms: config.audienceTerms,
    },
    company: config.company,
    roleTitle: config.roleTitle,
    heroEyebrow: config.heroEyebrow,
    candidateName: 'Moises Sanabria',
    candidatePositioning: `${config.roleTitle} · Selected work for ${config.company}`,
    heroMetaChips: config.heroMetaChips,
    heroPrimaryCta: { label: 'View Selected Work', href: '#case-studies' },
    heroSecondaryCta: { label: 'Contact Moises', href: '#contact' },
    navItems: config.navItems ?? creativeAgencyNavItems,
    hero: {
      headline: config.headline,
      subheadline: config.subheadline,
      introParagraphs: config.introParagraphs,
      trustLine: config.trustLine,
      headshotSrc: moisesSanabriaHeadshot,
      headshotAlt: 'Moises Sanabria — professional headshot',
    },
    creativeAgency: agency,
    rolePortfolio: buildCreativeRolePortfolio(config.availabilityNote),
    roleMatchSectionTitle: agency.alignmentTitle,
    roleMatchIntro: config.roleMatchIntro,
    roleMatchColumnHeaders: {
      left: `${config.company} priority`,
      right: 'Evidence',
    },
    roleMatchRows: config.roleMatchRows,
    featuredProjectIds: [...creativeProofPack.featuredProjectIds],
    skillsMatrixRows: creativeAgencySkillsMatrix,
    processSectionTitle: `How I would work at ${config.company}`,
    processIntro:
      config.processIntro ??
      'Agency creativity must support customer journeys and business results. This is the operating motion I would bring under hybrid or remote collaboration.',
    processSteps: sharedCreativeProcessSteps,
    ctas: recruitingCtas({
      resumePdfPath: resumePdfDriveViewUrl,
      resumePrintPath: '/cv/tech/print',
      careerPacket: '/career-packet',
      caseStudiesAnchor: '#case-studies',
      emailSubject: config.emailSubject,
    }),
    techLogoIds: [],
    resumeSectionTitle: agency.ctaHeadline,
    resumeSectionNote:
      config.resumeSectionNote ??
      `Download résumé, email Moises, or connect on LinkedIn. This dossier is prepared specifically for ${config.company}’s ${config.roleTitle} role.`,
    capabilitiesHref: '/capabilities#design-creative-technology',
  };
}
