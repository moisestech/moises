import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';

export type OpportunityStatus = 'active' | 'draft';

export type OpportunitySeo = {
  title: string;
  description: string;
  /** When false, page sets robots noindex (draft private links). */
  indexable?: boolean;
};

export type RoleMatchRow = {
  requirement: string;
  evidence: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type OpportunityCtas = {
  /** Direct PDF in /public */
  resumePdfPath?: string;
  resumePrintPath?: string;
  coverLetterPrintPath?: string;
  email: string;
  emailSubject?: string;
  linkedin: string;
  github?: string;
  instagram?: string;
  portfolio?: string;
  cv?: string;
  /** In-page anchor for “view case studies” */
  caseStudiesAnchor?: string;
};

export type TeachingHighlight = {
  title: string;
  description: string;
  href: string;
};

export type CertificationItem = {
  name: string;
  detail?: string;
  href?: string;
};

export type OpportunityNavItem = { id: string; label: string };

export type OpportunityVariant = 'compact' | 'full-dossier';

export type SkillsMatrixRow = {
  category: string;
  skills: string;
};

export type Opportunity = {
  slug: string;
  status: OpportunityStatus;
  seo: OpportunitySeo;
  variant: OpportunityVariant;
  audienceLine?: string;
  company?: string;
  roleTitle?: string;
  hero: {
    headline: string;
    subheadline: string;
    introParagraphs: string[];
    trustLine?: string;
    headshotSrc?: string;
    headshotAlt?: string;
  };
  roleMatchSectionTitle?: string;
  roleMatchIntro?: string;
  roleMatchColumnHeaders?: { left: string; right: string };
  roleMatchRows: RoleMatchRow[];
  featuredProjectIds: string[];
  caseStudiesSectionTitle?: string;
  caseStudiesIntro?: string;
  skillsSectionTitle?: string;
  skillsMatrixRows: SkillsMatrixRow[];
  processSectionTitle?: string;
  processIntro?: string;
  processSteps: ProcessStep[];
  innovationLabSectionTitle?: string;
  innovationLabLead?: string;
  innovationLabBody?: string;
  ctas: OpportunityCtas;
  techLogoIds: string[];
  visibilityNote?: string;
  resumeSectionTitle?: string;
  resumeSectionNote?: string;
  /** Compact pages: sticky section nav */
  navItems?: OpportunityNavItem[];
  /** Public-facing programs (workshops, teaching hub) */
  teachingHighlights?: TeachingHighlight[];
  /** Degrees, certs, or credential lines you can verify — keep truthful */
  certifications?: CertificationItem[];
  /** Infinite-scroll logo band (e.g. Cloudinary partner marks) */
  animatedLogoBand?: LogoBandItem[];
};
