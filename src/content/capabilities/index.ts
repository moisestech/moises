import { CAPABILITY_PILLARS, getPillarMeta, capabilitiesPillarHref } from './pillars';
import { CAPABILITY_SKILLS, CAPABILITY_CERTIFICATIONS_DRAFT } from './skills';
import type {
  CapabilityEvidenceScore,
  CapabilityPillarCounts,
  CapabilityPillarId,
  CapabilityPillarMeta,
  CapabilitySkill,
  CapabilitySkillStatus,
} from './types';

export type {
  CapabilityCertStatus,
  CapabilityCertification,
  CapabilityEvidence,
  CapabilityEvidenceScore,
  CapabilityPillarCounts,
  CapabilityPillarId,
  CapabilityPillarMeta,
  CapabilitySkill,
  CapabilitySkillStatus,
} from './types';

export { CAPABILITY_PILLARS, getPillarMeta, capabilitiesPillarHref } from './pillars';
export { CAPABILITY_SKILLS, CAPABILITY_CERTIFICATIONS_DRAFT } from './skills';

export function listPillars(): readonly CapabilityPillarMeta[] {
  return CAPABILITY_PILLARS;
}

export function getPillar(id: CapabilityPillarId): CapabilityPillarMeta {
  return getPillarMeta(id);
}

export function getSkillsByPillar(id: CapabilityPillarId): CapabilitySkill[] {
  return CAPABILITY_SKILLS[id] ?? [];
}

export function countByStatus(skills: CapabilitySkill[]): CapabilityPillarCounts {
  const counts: CapabilityPillarCounts = { proven: 0, building: 0, planned: 0 };
  for (const skill of skills) {
    counts[skill.status] += 1;
  }
  return counts;
}

export function evidenceScoreSummary(): CapabilityEvidenceScore {
  const byPillar = {} as Record<CapabilityPillarId, CapabilityPillarCounts>;
  let proven = 0;
  let building = 0;
  let planned = 0;

  for (const pillar of CAPABILITY_PILLARS) {
    const counts = countByStatus(getSkillsByPillar(pillar.id));
    byPillar[pillar.id] = counts;
    proven += counts.proven;
    building += counts.building;
    planned += counts.planned;
  }

  return {
    proven,
    building,
    planned,
    total: proven + building + planned,
    byPillar,
  };
}

export function assertProvenSkillsHaveEvidence(): void {
  for (const pillar of CAPABILITY_PILLARS) {
    for (const skill of getSkillsByPillar(pillar.id)) {
      if (skill.status === 'proven' && !skill.evidence?.href) {
        throw new Error(
          `Capability skill "${skill.id}" in pillar "${pillar.id}" is proven without evidence.href`,
        );
      }
    }
  }
}

/** Run at module load in non-production to catch authoring mistakes early. */
if (process.env.NODE_ENV !== 'production') {
  assertProvenSkillsHaveEvidence();
}

export const CAPABILITY_STATUS_LABEL: Record<CapabilitySkillStatus, string> = {
  proven: 'Proven',
  building: 'Building',
  planned: 'Planned',
};

/** Cert draft export kept for future UI — not rendered in v1. */
export function listDraftCertifications() {
  return CAPABILITY_CERTIFICATIONS_DRAFT;
}
