/**
 * Lean dossier shape for `variant: 'role-portfolio'` pages.
 * Reuses FitPillar / SystemsCaseStudy / CapabilityMapData without Affirm-shaped SystemsDossier fields.
 */

import type {
  CapabilityMapData,
  DeliveryStatus,
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

/** Full résumé-style role with rich-text bullets (`**bold**`, `*italic*`). */
export type RolePortfolioExperienceRole = {
  id: string;
  org: string;
  /** Italicized title line, e.g. Chief Prompt Officer · Founding Engineer */
  title: string;
  location?: string;
  period?: string;
  /** Bullet strings; support lightweight markdown for tools/context hierarchy. */
  bullets: string[];
};

export type RolePortfolioEducationItem = {
  id: string;
  institution: string;
  degree: string;
  detail?: string;
};

export type RolePortfolioContinuingBlock = {
  title: string;
  subtitle: string;
  body: string;
};

export type RolePortfolioTechGroup = {
  id: string;
  label: string;
  items: string;
};

export type RolePortfolioSelectedProject = {
  title: string;
  subtitle: string;
  deliveryStatus: DeliveryStatus;
  bullets: string[];
};

export type RolePortfolioDossier = {
  /** Optional role-match pillars; omit to skip FitPillars section. */
  fitSectionTitle?: string;
  fitIntro?: string;
  fitPillars?: FitPillar[];
  /** Optional legacy case-study grid; omit when using selectedProject + experienceRoles. */
  caseStudiesTitle?: string;
  caseStudiesIntro?: string;
  caseStudies?: SystemsCaseStudy[];
  capabilityMap: CapabilityMapData;
  /** Adjacent tools/skills — shown muted, not as established expertise. */
  currentlyExtending?: string[];
  creative?: RolePortfolioCreativeBlock;
  clientFacing?: RolePortfolioClientBlock;
  principlesTitle?: string;
  principles?: RolePortfolioPrinciple[];
  /** Compact timeline (optional fallback). */
  experienceTitle?: string;
  experienceIntro?: string;
  experience?: RolePortfolioTimelineItem[];
  /** Full résumé-style professional experience. */
  experienceRolesTitle?: string;
  experienceRolesIntro?: string;
  experienceRoles?: RolePortfolioExperienceRole[];
  selectedProject?: RolePortfolioSelectedProject;
  educationTitle?: string;
  education?: RolePortfolioEducationItem[];
  continuingDevelopment?: RolePortfolioContinuingBlock;
  technologiesTitle?: string;
  technologies?: RolePortfolioTechGroup[];
  availabilityNote: string;
};
