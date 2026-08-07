/**
 * Technical Proof Engine — canonical capabilities types.
 * Proven skills MUST include linkable evidence (type-enforced).
 */

export type CapabilitySkillStatus = 'proven' | 'building' | 'planned';

export type CapabilityCertStatus = 'not-started' | 'in-progress' | 'completed';

export type CapabilityPillarId =
  | 'ai-engineering'
  | 'software-engineering'
  | 'data-infrastructure'
  | 'design-creative-technology'
  | 'devops-deployment'
  | 'leadership-communication';

export type CapabilityEvidence = {
  label: string;
  href: string;
};

/** Discriminated union: proven requires evidence. */
export type CapabilitySkill =
  | {
      id: string;
      name: string;
      status: 'proven';
      evidence: CapabilityEvidence;
      note?: string;
    }
  | {
      id: string;
      name: string;
      status: 'building' | 'planned';
      evidence?: CapabilityEvidence;
      note?: string;
    };

export type CapabilityCertification = {
  id: string;
  name: string;
  tier: 1 | 2 | 3;
  status: CapabilityCertStatus;
  /** Credential / verification URL when completed. */
  href?: string;
  note?: string;
};

export type CapabilityPillarMeta = {
  id: CapabilityPillarId;
  name: string;
  shortName: string;
  description: string;
  /** Hex accent from design brief. */
  color: string;
  /** Lucide icon key resolved in UI. */
  icon: 'sparkles' | 'code2' | 'database' | 'palette' | 'server' | 'users';
};

export type CapabilityPillarCounts = {
  proven: number;
  building: number;
  planned: number;
};

export type CapabilityEvidenceScore = {
  proven: number;
  building: number;
  planned: number;
  total: number;
  byPillar: Record<CapabilityPillarId, CapabilityPillarCounts>;
};
