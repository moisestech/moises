/**
 * Shared data shapes for `variant: 'systems-dossier'` opportunity pages.
 * Keep Affirm-specific copy in per-role modules; keep these types role-agnostic.
 */

export type FitPillar = {
  id: string;
  title: string;
  body: string;
  /** Optional still for richer creative-agency / flagship cards. */
  imageSrc?: string;
  imageAlt?: string;
  /** Lucide key shared with skills matrix icon map. */
  icon?: import('@/content/opportunities/types').SkillsMatrixIconKey;
};

export type EvidenceStatus =
  | 'demonstrated'
  | 'transferable'
  | 'role-specific'
  | 'learning'
  | 'todo';

export type EvidenceStatusLabel = {
  status: EvidenceStatus;
  label: string;
};

export const EVIDENCE_STATUS_LABELS: Record<EvidenceStatus, string> = {
  demonstrated: 'Demonstrated',
  transferable: 'Transferable',
  'role-specific': 'Role-specific demonstration',
  learning: 'Learning priority',
  todo: 'TODO: verify evidence',
};

/** Shipment status for role-portfolio / systems case studies — distinct from evidence strength. */
export type DeliveryStatus = 'deployed' | 'prototype' | 'research' | 'in-development';

export const DELIVERY_STATUS_LABELS: Record<DeliveryStatus, string> = {
  deployed: 'Deployed',
  prototype: 'Prototype',
  research: 'Research',
  'in-development': 'In Development',
};

export type ArchitectureNode = {
  id: string;
  label: string;
};

export type ArchitectureStage = {
  id: string;
  title: string;
  nodes: ArchitectureNode[];
};

export type ArchitectureScenario = {
  id: string;
  question: string;
  /** Stage ids highlighted for this scenario path. */
  stageIds: string[];
  /** Optional node ids highlighted within those stages. */
  nodeIds?: string[];
  summary: string;
};

export type ArchitectureFlowData = {
  title: string;
  subtitle: string;
  disclaimer: string;
  stages: ArchitectureStage[];
  scenarios: ArchitectureScenario[];
  syntheticLabel: string;
};

export type PermissionPersona = {
  id: string;
  label: string;
  accessSummary: string;
  allowed: string[];
  denied: string[];
};

export type PermissionScenarioData = {
  title: string;
  subtitle?: string;
  question: string;
  personas: PermissionPersona[];
  principles: string[];
  syntheticLabel: string;
};

export type ReliabilityControl = {
  id: string;
  title: string;
  purpose: string;
};

export type ReliabilityPanelData = {
  title: string;
  subtitle?: string;
  controls: ReliabilityControl[];
  pipelineSteps: string[];
};

export type TranslationExample = {
  id: string;
  statedRequest: string;
  underlyingProblem: string;
  engineeringResponse: string;
};

export type TranslationPanelData = {
  title: string;
  subtitle?: string;
  examples: TranslationExample[];
};

export type CapabilityGroup = {
  id: string;
  title: string;
  items: string[];
  /** Optional tech logo ids from `techLogoRegistry` for interactive stack cards. */
  logoIds?: string[];
};

export type CapabilityMapData = {
  title: string;
  subtitle?: string;
  groups: CapabilityGroup[];
  closingStatement: string;
  /** Adjacent tools shown as extending — not established expertise. */
  currentlyExtending?: string[];
};

export type PlanPhase = {
  id: string;
  label: string;
  title: string;
  items: string[];
};

export type ThirtySixtyNinetyData = {
  title: string;
  subtitle?: string;
  disclaimer?: string;
  phases: PlanPhase[];
};

export type RoleReferenceField = {
  label: string;
  value: string;
};

export type RoleReferenceData = {
  title: string;
  fields: RoleReferenceField[];
  platformReferences: string[];
  /** Optional narrative blocks (e.g. About DAVID / Ogilvy / WPP) shown when expanded. */
  narrativeSections?: { heading: string; body: string }[];
  /** Only set when a real careers URL is available. */
  listingUrl?: string;
  listingUrlLabel?: string;
};

export type SystemsCaseStudy = {
  id: string;
  title: string;
  category: string;
  ambiguity: string;
  stakeholders: string;
  ownership: string;
  systemBuilt: string;
  production: string;
  challenge?: string;
  outcome: string;
  roleConnection: string;
  skillTags: string[];
  href?: string;
  linkLabel?: string;
  imageSrc: string;
  imageAlt: string;
  imageLocal?: boolean;
  evidenceStatus: EvidenceStatus;
  /** Optional shipment status pill (Deployed / Prototype / Research / In Development). */
  deliveryStatus?: DeliveryStatus;
};

export type WhyCompanyBlock = {
  title: string;
  paragraphs: string[];
};

export type GapStatement = {
  title: string;
  body: string;
};

export type SystemsDossier = {
  fitSectionTitle: string;
  fitIntro?: string;
  fitPillars: FitPillar[];
  architecture: ArchitectureFlowData;
  permissions: PermissionScenarioData;
  reliability: ReliabilityPanelData;
  translation: TranslationPanelData;
  capabilityMap: CapabilityMapData;
  plan: ThirtySixtyNinetyData;
  caseStudiesTitle: string;
  caseStudiesIntro?: string;
  caseStudies: SystemsCaseStudy[];
  whyCompany: WhyCompanyBlock;
  gapStatement: GapStatement;
  roleReference: RoleReferenceData;
  ctaTitle: string;
  ctaBody: string;
};
