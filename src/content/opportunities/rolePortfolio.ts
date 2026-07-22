/**
 * Lean dossier shape for `variant: 'role-portfolio'` pages.
 * Reuses FitPillar / SystemsCaseStudy / CapabilityMapData without Affirm-shaped SystemsDossier fields.
 */

import type {
  CapabilityMapData,
  FitPillar,
  SystemsCaseStudy,
} from '@/content/opportunities/systemsDossier';

export type RolePortfolioCreativeBlock = {
  title: string;
  lead: string;
  points: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
};

export type RolePortfolioClientBlock = {
  title: string;
  intro: string;
  points: string[];
};

export type RolePortfolioPrinciple = {
  id: string;
  text: string;
};

export type RolePortfolioTimelineItem = {
  id: string;
  org: string;
  title: string;
  period: string;
  detail?: string;
};

export type RolePortfolioDossier = {
  fitSectionTitle: string;
  fitIntro?: string;
  fitPillars: FitPillar[];
  caseStudiesTitle: string;
  caseStudiesIntro?: string;
  caseStudies: SystemsCaseStudy[];
  capabilityMap: CapabilityMapData;
  /** Adjacent tools/skills — shown muted, not as established expertise. */
  currentlyExtending?: string[];
  creative: RolePortfolioCreativeBlock;
  clientFacing: RolePortfolioClientBlock;
  principlesTitle: string;
  principles: RolePortfolioPrinciple[];
  experienceTitle: string;
  experienceIntro?: string;
  experience: RolePortfolioTimelineItem[];
  availabilityNote: string;
};
