import type { CaseStudyOverride } from '@/content/evidence/caseStudyCards';
import type {
  ApplicationBanner,
  OpportunityAudienceKeywords,
  OpportunityCtas,
  OpportunityNavItem,
  OpportunitySeo,
  ProcessDiagram,
  ProcessStep,
} from '@/content/opportunities/types';

export type WorkSkillTierId = 'core' | 'aligned' | 'supporting';

export type WorkSkillItem = {
  logoId: string;
  label: string;
  framing: string;
};

export type WorkSkillTier = {
  id: WorkSkillTierId;
  title: string;
  /** e.g. “Proven in production” vs “Integration-ready” */
  subtitle?: string;
  skills: WorkSkillItem[];
};

/** Optional overrides on shared evidence projects (same shape as `CaseStudyOverride`). */
export type WorkCaseStudy = CaseStudyOverride;

export type WorkAbout = {
  title: string;
  paragraphs: string[];
};

export type WorkSite = {
  slug: string;
  seo: OpportunitySeo;
  applicationBanner?: ApplicationBanner;
  audienceKeywords?: OpportunityAudienceKeywords;
  roleTitle: string;
  hero: {
    headline: string;
    subheadline: string;
    introParagraphs: string[];
    trustLine?: string;
    headshotSrc?: string;
    headshotAlt?: string;
  };
  skillTiers: WorkSkillTier[];
  caseStudies: WorkCaseStudy[];
  caseStudiesSectionTitle?: string;
  caseStudiesIntro?: string;
  approachSectionTitle: string;
  approachIntro?: string;
  approachDiagrams?: ProcessDiagram[];
  approachSteps: ProcessStep[];
  about: WorkAbout;
  ctas: OpportunityCtas;
  navItems: OpportunityNavItem[];
  resumeSectionTitle?: string;
  resumeSectionNote?: string;
};
