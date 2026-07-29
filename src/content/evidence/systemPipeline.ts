/**
 * Reusable system-pipeline case-study shapes for opportunity and project dossiers.
 * Content-driven — not tied to a specific employer or product name.
 */

export type SystemPipelineOwnership =
  | 'Owned'
  | 'Co-designed'
  | 'Integrated'
  | 'Led delivery';

export type SystemPipelineOwnershipLabel = {
  id: SystemPipelineOwnership;
  meaning: string;
};

export type SystemPipelineStageEvidence = {
  src: string;
  alt: string;
  local?: boolean;
  /** When true, treat as a labeled placeholder pending approved screenshots. */
  isPlaceholder?: boolean;
  /** Explicit TODO shown in UI when evidence is missing. */
  imageTodo?: string;
};

export type SystemPipelineStage = {
  id: string;
  step: string;
  title: string;
  systemAction: string;
  candidateContribution: string;
  /** One or more ownership labels for this stage. */
  ownership: SystemPipelineOwnership[];
  technologyTags?: string[];
  evidence?: SystemPipelineStageEvidence;
  boundaryNote?: string;
  pullQuote?: string;
  architectureNote?: string;
};

export type SystemPipelineRelevanceRow = {
  id: string;
  challenge: string;
  evidence: string;
};

export type SystemPipelineCaseStudyData = {
  eyebrow?: string;
  title: string;
  summary: string;
  ownershipLegend: SystemPipelineOwnershipLabel[];
  stages: SystemPipelineStage[];
  technologyTags?: string[];
  relevanceTitle?: string;
  relevanceIntro?: string;
  relevanceRows?: SystemPipelineRelevanceRow[];
  caveats?: string[];
  verificationNote?: string;
  /** Optional link to a fuller case study (used by condensed variants). */
  fullCaseStudyHref?: string;
  fullCaseStudyLabel?: string;
};
