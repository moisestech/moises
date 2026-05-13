import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';

export type ApplicationBanner = {
  src: string;
  alt: string;
  /**
   * Optional Tailwind classes for the image frame (width is always full-bleed).
   * Default: wide cinematic crop. Example: `aspect-[3/1] max-h-[280px]`
   */
  aspectClass?: string;
};

export type OpportunityStatus = 'active' | 'draft';

export type OpportunitySeo = {
  title: string;
  description: string;
  /** When false, page sets robots noindex (draft private links). */
  indexable?: boolean;
};

/** Optional visual for the role-fit matrix — shown in the storytelling panel when the row is hovered or focused. */
export type RoleMatchIllustration = {
  src: string;
  alt: string;
  /** SVG or other static files under `/public` — use plain `img` to avoid Next image SVG constraints. */
  local?: boolean;
};

export type RoleMatchRow = {
  requirement: string;
  evidence: string;
  illustration?: RoleMatchIllustration;
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

/** Single hoverable term in the audience keyword strip (opportunity hero lead-in). */
export type OpportunityAudienceKeyword = {
  label: string;
  /** Optional line shown on hover / focus (keep short for mobile). */
  detail?: string;
};

/** Replaces a flat `audienceLine` with an interactive, sentence-style keyword row. */
export type OpportunityAudienceKeywords = {
  /** Short context above the terms (plain text). */
  lead?: string;
  terms: OpportunityAudienceKeyword[];
};

export type OpportunityVariant = 'compact' | 'full-dossier';

export type SkillsMatrixIconKey =
  | 'code2'
  | 'sparkles'
  | 'workflow'
  | 'image'
  | 'boxes'
  | 'cloud'
  | 'rocket'
  | 'users'
  | 'fileText'
  | 'target'
  | 'tv'
  | 'presentation'
  | 'scale'
  | 'lineChart'
  | 'cpu'
  | 'shield'
  | 'layers';

export type SkillsMatrixRow = {
  category: string;
  skills: string;
  /** Optional Lucide-backed icon in the left gutter */
  icon?: SkillsMatrixIconKey;
};

export type Opportunity = {
  slug: string;
  status: OpportunityStatus;
  seo: OpportunitySeo;
  variant: OpportunityVariant;
  audienceLine?: string;
  /** Interactive focus terms — preferred over `audienceLine` when set. */
  audienceKeywords?: OpportunityAudienceKeywords;
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
  /** Full-bleed image under the recruiting header — swap per employer / application */
  applicationBanner?: ApplicationBanner;
};
