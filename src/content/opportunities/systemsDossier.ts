/**
 * Shared data shapes for `variant: 'systems-dossier'` opportunity pages.
 * Keep Affirm-specific copy in per-role modules; keep these types role-agnostic.
 */

export type FitPillar = {
  id: string;
  title: string;
  body: string;
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

/** Optional editorial positioning block (systems → environments narrative). */
export type PositioningStatementData = {
  title: string;
  paragraphs: string[];
  annotation?: string;
};

/** Qualitative evaluation signal for AgentUniverseExplorer / EvaluationScorecard. */
export type AgentEvalSignal = {
  id: string;
  label: string;
  /** Deterministic illustrative label (e.g. Strong, Partial, At risk) — not a benchmark score. */
  status: string;
  explanation?: string;
};

export type AgentEnvironmentState = {
  objective: string;
  knownFacts: string[];
  assumptions: string[];
  openQuestions: string[];
  availableTools: string[];
  restrictedActions: string[];
  memoryState: string;
  lastObservation: string;
  proposedNextAction: string;
};

export type AgentTimelineStepOverride = {
  narrative?: string;
  state?: Partial<AgentEnvironmentState>;
  evaluations?: AgentEvalSignal[];
};

export type AgentTimelineStep = {
  id: string;
  label: string;
  eventType: string;
  narrative: string;
  state: AgentEnvironmentState;
  evaluations: AgentEvalSignal[];
  /** Per-interruption deterministic overrides keyed by interruption id. */
  interruptionOverrides?: Record<string, AgentTimelineStepOverride>;
};

export type AgentInterruptionOption = {
  id: string;
  label: string;
  description: string;
};

export type AgentUniverseData = {
  prototypeLabel: string;
  title: string;
  intro: string;
  scenarioTitle: string;
  scenarioSummary: string;
  disclaimer: string;
  researchNote: string;
  interruptions: AgentInterruptionOption[];
  /** null = baseline trajectory with no injected failure. */
  defaultInterruptionId: string | null;
  timeline: AgentTimelineStep[];
};

export type EvaluationPhilosophyItem = {
  id: string;
  title: string;
  body: string;
};

export type EvaluationPhilosophyData = {
  title: string;
  intro?: string;
  items: EvaluationPhilosophyItem[];
};

export type FailureTaxonomyItem = {
  id: string;
  name: string;
  symptom: string;
  hiddenRisk: string;
  intervention: string;
  evaluationSignal: string;
};

export type FailureTaxonomyData = {
  title: string;
  intro?: string;
  items: FailureTaxonomyItem[];
};

export type ResearchQuestionsData = {
  title: string;
  intro?: string;
  questions: string[];
};

export type CulturalPerspectiveItem = {
  id: string;
  title: string;
  researchQuestion: string;
  relevance: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
};

export type CulturalPerspectiveData = {
  title: string;
  intro: string;
  items: CulturalPerspectiveItem[];
};

export type SystemsDossier = {
  fitSectionTitle: string;
  fitIntro?: string;
  fitPillars: FitPillar[];
  /** Optional narrative bridge before fit pillars (applications → environments). */
  positioningStatement?: PositioningStatementData;
  architecture: ArchitectureFlowData;
  /** Affirm-style permission demo — omit when unused. */
  permissions?: PermissionScenarioData;
  /** Affirm-style reliability panel — omit when unused. */
  reliability?: ReliabilityPanelData;
  /** Affirm-style translation panel — omit when unused. */
  translation?: TranslationPanelData;
  /** Interactive agent-environment evaluation lab (research prototype). */
  agentUniverse?: AgentUniverseData;
  evaluationPhilosophy?: EvaluationPhilosophyData;
  failureTaxonomy?: FailureTaxonomyData;
  researchQuestions?: ResearchQuestionsData;
  culturalPerspective?: CulturalPerspectiveData;
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
