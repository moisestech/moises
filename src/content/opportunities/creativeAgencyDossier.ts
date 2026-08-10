/**
 * Creative-agency dossier shapes for WMX Senior Art Director — Creative + AI Expertise.
 * Shared creative-agency opportunity dossier shapes.
 */

import type { DeliveryStatus, FitPillar } from '@/content/opportunities/systemsDossier';

export type CreativeCaseGalleryItem = {
  src: string;
  alt: string;
  local?: boolean;
  caption?: string;
  /** Visible honesty label when asset is pending. */
  placeholderNote?: string;
};

export type CreativeCaseStudyModule = {
  id: string;
  title: string;
  category: string;
  deliveryStatus: DeliveryStatus;
  context: string;
  challenge: string;
  role: string;
  designDecisions: string[];
  workflow: string;
  outputs: string[];
  learning: string;
  /** Visible TODO markers — never invent facts to fill these. */
  todos?: string[];
  imageSrc: string;
  imageAlt: string;
  imageLocal?: boolean;
  gallery?: CreativeCaseGalleryItem[];
  href?: string;
  linkLabel?: string;
};

export type CampaignChannelFormat = {
  id: string;
  label: string;
  aspectClass: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
  placeholderNote?: string;
};

export type CampaignSystemBlock = {
  eyebrow: string;
  title: string;
  intro: string;
  conceptTitle: string;
  conceptBody: string;
  disclaimer: string;
  formats: CampaignChannelFormat[];
};

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
};

export type BeforeAfterPair = {
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  beforeAlt?: string;
  afterSrc?: string;
  afterAlt?: string;
  note: string;
  todo?: string;
};

export type HumanAiWorkflowBlock = {
  title: string;
  intro: string;
  steps: WorkflowStep[];
  beforeAfter: BeforeAfterPair;
};

export type LeadershipPoint = {
  id: string;
  title: string;
  body: string;
};

export type LeadershipBlock = {
  title: string;
  intro: string;
  points: LeadershipPoint[];
};

export type PointOfViewItem = {
  id: string;
  title: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
};

export type PointOfViewBlock = {
  title: string;
  intro: string;
  pullQuote: string;
  items: PointOfViewItem[];
};

export type MotionClip = {
  id: string;
  title: string;
  roleLabel: string;
  /** What you did: animation, edit, composite, keyframes, etc. */
  contribution: string;
  /** Poster / still — required (also used as YouTube poster fallback). */
  posterSrc: string;
  posterAlt: string;
  posterLocal?: boolean;
  /** Optional hosted video URL (Cloudinary / Mux / Vimeo). */
  videoSrc?: string;
  /** YouTube video id — renders privacy-enhanced embed when set. */
  youtubeId?: string;
  /** Honest note when clip is pending upload. */
  placeholderNote?: string;
  /** Full-width featured treatment (e.g. high-view count YouTube proof). */
  featured?: boolean;
  /** Optional deep link (research page, case study, etc.). */
  href?: string;
  linkLabel?: string;
};

export type MotionSection = {
  title: string;
  intro: string;
  toolsLine: string;
  clips: MotionClip[];
};

export type CreativeAgencyDossier = {
  capabilitiesTitle: string;
  capabilitiesIntro?: string;
  capabilities: FitPillar[];
  caseStudiesTitle: string;
  caseStudiesIntro: string;
  caseStudies: CreativeCaseStudyModule[];
  campaign: CampaignSystemBlock;
  workflow: HumanAiWorkflowBlock;
  /** Optional — rendered when present (e.g. Morley Motion & Animation). */
  motionSection?: MotionSection;
  leadership: LeadershipBlock;
  pointOfView: PointOfViewBlock;
  alignmentTitle: string;
  alignmentIntro: string;
  ctaHeadline: string;
};
