import type { CaseStudyOverride } from '@/content/evidence/caseStudyCards';
import type { LogoBandItem } from '@/content/evidence/recruitingLogoBand';
import type { SystemPipelineCaseStudyData } from '@/content/evidence/systemPipeline';
import type {
  EvidenceStatus,
  RoleReferenceData,
  SystemsDossier,
  ThirtySixtyNinetyData,
} from '@/content/opportunities/systemsDossier';
import type { RolePortfolioDossier } from '@/content/opportunities/rolePortfolio';
import type { CreativeAgencyDossier } from '@/content/opportunities/creativeAgencyDossier';

export type ApplicationBanner = {
  src: string;
  /** Optional wider crop shown from the `sm` breakpoint up. */
  srcWide?: string;
  /** Optional extra-wide crop shown from the `lg` breakpoint up. */
  srcExtraWide?: string;
  alt: string;
  /**
   * Intrinsic width ÷ height of the master asset (e.g. `3` for 2172×724).
   * Drives the sharp layer’s aspect box so art fills the strip’s **full height**
   * without horizontal crush. Measure after upload — see docs/opportunities/application-banners.md.
   */
  intrinsicRatio?: number;
  /**
   * Optional Tailwind classes for the image frame (width is always full-bleed).
   * Prefer fixed-height frames via the default contain-blur presentation.
   * Only applied when `presentation: 'cover'`.
   */
  aspectClass?: string;
  /**
   * Optional frame-height override for `contain-blur` (Tailwind height utilities).
   * Default shared strip heights live in OpportunityApplicationBanner.
   */
  frameClass?: string;
  /**
   * `contain-blur` (default): fixed-height strip; sharp art fills full height (`object-contain`);
   * blurred cover of the same image fills the sides.
   * `cover`: legacy full-bleed crop — only for assets designed to survive edge crop.
   */
  presentation?: 'contain-blur' | 'cover';
  /**
   * Cover-crop focal point. Default `top` matches recruiting banners.
   * Use `center` for cinematic stills that should stay vertically aligned in the strip.
   */
  objectPosition?: 'center' | 'top';
  /** Accessible HTML overlay on the banner — never bake this text into the bitmap. */
  overlayLabel?: string;
};

/** Compact two-column honesty split (proven vs not claimed). */
export type HonestyOverlay = {
  title: string;
  intro: string;
  provenTitle: string;
  proven: string[];
  notClaimedTitle: string;
  notClaimed: string[];
  rampStatement: string;
};

/** Compact “code to inspect” cards under featured proof. */
export type CodeInspectItem = {
  id: string;
  title: string;
  href: string;
  body: string;
};

export type CodeInspectFootnote = {
  label: string;
  href: string;
  note?: string;
};

export type CodeInspectBlock = {
  title: string;
  intro?: string;
  items: CodeInspectItem[];
  footnotes?: CodeInspectFootnote[];
};

export type OpportunityStatus = 'active' | 'draft';

/** Pipeline hygiene for private dossiers — independent of `status` (active/draft for routing). */
export type OpportunityApplicationStatus = 'draft' | 'ready' | 'submitted' | 'archived';

export type OpportunityFamilyHint =
  | 'creative-agency'
  | 'compact'
  | 'role-portfolio'
  | 'systems'
  | 'full';

export type OpportunitySeo = {
  title: string;
  description: string;
  /** When false, page sets robots noindex (draft private links). */
  indexable?: boolean;
  keywords?: string[];
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
  /** Transparent evidence label for systems-dossier / EvidenceMatrix pages. */
  status?: EvidenceStatus;
  illustration?: RoleMatchIllustration;
};

export type ProcessStep = {
  title: string;
  description: string;
  /** Optional stack marks shown under the step (work / dossier approach sections). */
  logoIds?: string[];
};

export type ProcessDiagram = {
  src: string;
  /** Optional dark-theme variant (workflow / architecture diagrams). */
  srcDark?: string;
  alt: string;
  caption?: string;
};

export type OpportunityCtas = {
  /** Direct PDF in /public */
  resumePdfPath?: string;
  resumePrintPath?: string;
  /** Public cover letter URL (e.g. Google Docs); opens in a new tab when external. */
  coverLetterUrl?: string;
  coverLetterPrintPath?: string;
  email: string;
  emailSubject?: string;
  linkedin: string;
  github?: string;
  instagram?: string;
  portfolio?: string;
  cv?: string;
  /** Institutional program work (e.g. Oolite Digital Lab on this site) */
  ooliteWork?: string;
  /** Label for `ooliteWork` link; defaults to “Oolite Digital Lab” */
  ooliteWorkLabel?: string;
  /** Main institution site (e.g. oolitearts.org) */
  ooliteOrg?: string;
  /** In-page anchor for “view case studies” */
  caseStudiesAnchor?: string;
  /** Career packet path (e.g. `/career-packet`) */
  careerPacket?: string;
  /** External scheduler (e.g. Algora intro with a recruiter). */
  scheduleUrl?: string;
  /** Button label for `scheduleUrl`; defaults to “Schedule intro”. */
  scheduleLabel?: string;
  /** Override résumé PDF button label (default: “Download résumé (PDF)”). */
  resumePdfLabel?: string;
  /** Second PDF (e.g. technical evidence brief) shown after the résumé CTA. */
  evidenceBriefPdfPath?: string;
  evidenceBriefLabel?: string;
  /** Profile GitHub (moisestech). When set, hero Profiles uses this instead of `github`. */
  githubProfile?: string;
  /** Override GitHub button label (default: “GitHub”). */
  githubLabel?: string;
};

export type TeachingHighlight = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  /** SVG or files under `/public` — use plain `img` */
  imageLocal?: boolean;
};

export type CertificationItem = {
  name: string;
  detail?: string;
  href?: string;
};

/** Employer application-form Q&A (compact dossiers). */
export type ApplicationAnswer = {
  question: string;
  answer: string;
};

export type OpportunityNavItem = {
  id: string;
  label: string;
  /** Shorter label for sticky nav on narrow screens. */
  shortLabel?: string;
  /** Optional Lucide key for dossier-map tiles. */
  icon?: SkillsMatrixIconKey;
};

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

export type OpportunityVariant = 'compact' | 'full-dossier' | 'systems-dossier' | 'role-portfolio';

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
  /** When false, hidden from `/opportunities` index but reachable by direct URL. Default: true */
  listed?: boolean;
  /** Pipeline status for tracker / maintenance (optional). */
  applicationStatus?: OpportunityApplicationStatus;
  /** Optional explicit family hint; otherwise derived from variant + creativeAgency. */
  family?: OpportunityFamilyHint;
  seo: OpportunitySeo;
  variant: OpportunityVariant;
  audienceLine?: string;
  /** Interactive focus terms — preferred over `audienceLine` when set. */
  audienceKeywords?: OpportunityAudienceKeywords;
  company?: string;
  roleTitle?: string;
  /** Hero eyebrow (e.g. “Application for Affirm”). */
  heroEyebrow?: string;
  /** Compact role metadata under the headline (location · team). */
  heroRoleMeta?: string;
  /** Candidate name shown in the text hero. */
  candidateName?: string;
  /** Short positioning line above intro paragraphs. */
  candidatePositioning?: string;
  /** Restrained metadata chips under hero CTAs. */
  heroMetaChips?: string[];
  /** Primary in-page scroll CTA (label + hash). */
  heroPrimaryCta?: { label: string; href: string };
  /** Secondary in-page scroll CTA. */
  heroSecondaryCta?: { label: string; href: string };
  /**
   * Optional company mark (light theme). Cloudinary or `/public` path.
   * Pair with `companyLogoSrcDark` when dark-theme artwork differs.
   */
  companyLogoSrc?: string;
  /** Dark-theme company mark. Falls back to `companyLogoSrc` when omitted. */
  companyLogoSrcDark?: string;
  companyLogoAlt?: string;
  hero: {
    headline: string;
    subheadline: string;
    introParagraphs: string[];
    trustLine?: string;
    headshotSrc?: string;
    headshotAlt?: string;
  };
  /** Systems engineering application sections (architecture, trust, 30/60/90, etc.). */
  systemsDossier?: SystemsDossier;
  /** Optional expandable JD / listing snapshot (creative-agency + systems). */
  roleReference?: RoleReferenceData;
  /** Creative / forward-deployed role portfolio sections (no Affirm-shaped architecture panels). */
  rolePortfolio?: RolePortfolioDossier;
  /** Art-direction / creative-director dossier sections (campaign system, AI workflow, POV). */
  creativeAgency?: CreativeAgencyDossier;
  roleMatchSectionTitle?: string;
  roleMatchIntro?: string;
  roleMatchColumnHeaders?: { left: string; right: string; status?: string };
  roleMatchRows: RoleMatchRow[];
  featuredProjectIds: string[];
  /**
   * When set, case-study grid prefers flagship recipe ranking
   * (`opportunityEvidenceRecipes` in evidence/flagships.ts).
   */
  evidenceRecipe?: keyof typeof import('@/content/evidence/flagships').opportunityEvidenceRecipes;
  /** Merged with `featuredProjectIds` in `CaseStudyGrid` (work microsites). */
  caseStudyOverrides?: CaseStudyOverride[];
  /** Case study grid columns at `lg` breakpoint; default 2. */
  caseStudyColumns?: 2 | 3;
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
  /** Application-form answers (e.g. Hurix SME screening questions) */
  applicationAnswersSectionTitle?: string;
  applicationAnswersIntro?: string;
  applicationAnswers?: ApplicationAnswer[];
  /** Infinite-scroll logo band (e.g. Cloudinary partner marks) */
  animatedLogoBand?: LogoBandItem[];
  /** Full-bleed image under the recruiting header — swap per employer / application */
  applicationBanner?: ApplicationBanner;
  /**
   * Deep-link to the canonical Technical Proof Engine
   * (e.g. `/capabilities#ai-engineering`). Renders a shared strip near Skills.
   */
  capabilitiesHref?: string;
  /** When set, OpportunityPageClient can render a 30/60/90 plan. */
  plan?: ThirtySixtyNinetyData;
  /** Compact honesty split: proven now vs not claimed yet. */
  honestyOverlay?: HonestyOverlay;
  /** Compact “code to inspect” cards under featured proof. */
  codeInspect?: CodeInspectBlock;
  /** Optional multi-stage system pipeline case study (e.g. Lore Machine walkthrough). */
  systemPipeline?: SystemPipelineCaseStudyData;
};
