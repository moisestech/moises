export type BitmAssetStatus = 'ready' | 'placeholder' | 'needed';

export type BitmPlausibilityStatus = 'documented' | 'partial' | 'needed' | 'not-applicable';

export type BitmLaborFieldStatus = 'documented' | 'partial' | 'being-indexed' | 'not-applicable';

export type CaseStudyPresentation = 'stage-slider' | 'archive' | 'photographic-sequence';

export type BitmInstitutionRelationship =
  | 'studio'
  | 'host'
  | 'exhibition'
  | 'education'
  | 'funder'
  | 'partner'
  | 'presentation';

export interface BitmPlausibilityField {
  value: string;
  status: BitmPlausibilityStatus;
}

export interface BitmPlausibilityAudit {
  status: BitmPlausibilityStatus;
  machineProposal: string;
  materialReality: string;
  institutionalReality: string;
  materialTest: string;
  rejectedOrSimplified: string;
  budget?: BitmPlausibilityField;
  timeframe?: BitmPlausibilityField;
  approvalsOrDependencies: string[];
  maintenance: string;
  documentationNeeded?: string[];
}

export interface BitmCredit {
  name: string;
  role: string;
  url?: string;
  status?: BitmLaborFieldStatus;
}

export interface BitmLaborField {
  label: string;
  value: string;
  status: BitmLaborFieldStatus;
}
