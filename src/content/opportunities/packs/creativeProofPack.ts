/**
 * Creative-agency dossiers: shared case/project IDs featured in factory pages.
 * Case modules, campaign specimens, POV, and workflow live in creativeAgencyShared.ts —
 * import builders; do not duplicate.
 */

import type { EvidenceProjectId } from '@/content/evidence/projects';

export const creativeProofPack = {
  featuredProjectIds: [
    'lore-machine',
    'ai24',
    'multimodal-image-systems',
    'digital-culture-infrastructure',
  ] as const satisfies readonly EvidenceProjectId[],
  notes:
    'Builders: buildCreativeAgencyDossier, buildCampaignSystem, miamiLightCampaignSpecimens in creativeAgencyShared.ts',
} as const;
