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
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
  href?: string;
  linkLabel?: string;
};

/** Application-evidence checklist for roles that need visible proof (OSS PR, demo, interviews). */
export type RolePortfolioEvidenceItemStatus = 'ready' | 'in-progress' | 'todo';

export type RolePortfolioEvidenceItem = {
  id: string;
  title: string;
  status: RolePortfolioEvidenceItemStatus;
  body: string;
  href?: string;
  linkLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
};

export type RolePortfolioEvidenceRoadmap = {
  title: string;
  intro?: string;
  items: RolePortfolioEvidenceItem[];
};

/** Category for Coming soon visual placeholders (color-coded cards). */
export type RolePortfolioComingSoonKind = 'repo' | 'cert' | 'skill' | 'demo' | 'research';

/** Visual “Coming soon” cards for proof still shipping (repos, certs, skill gaps). */
export type RolePortfolioComingSoonItem = {
  id: string;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
  /** Defaults to “Coming soon”. */
  badge?: string;
  /** Drives placeholder color + label when `imageSrc` is absent. */
  kind?: RolePortfolioComingSoonKind;
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
  /** Certificate / license face fields (used when `kind === 'cert'`). */
  certIssuer?: string;
  certCredential?: string;
  certHolder?: string;
  certId?: string;
};

export type RolePortfolioComingSoonBlock = {
  title: string;
  intro?: string;
  items: RolePortfolioComingSoonItem[];
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
  /** Override heading for selected project section (default: Selected AI Project). */
  selectedProjectSectionTitle?: string;
  evidenceRoadmap?: RolePortfolioEvidenceRoadmap;
  comingSoon?: RolePortfolioComingSoonBlock;
  educationTitle?: string;
  education?: RolePortfolioEducationItem[];
  continuingDevelopment?: RolePortfolioContinuingBlock;
  technologiesTitle?: string;
  technologies?: RolePortfolioTechGroup[];
  availabilityNote: string;
};
