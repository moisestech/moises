/**
 * INCOMPLETE CONTAINMENT OF A MODEL — media manifest
 * Production-realistic concept renders + archived superseded kinetic studies.
 */
import type { GrantPlaceholderMedia } from '@/components/grant/shared/GrantProposalUi';
import {
  machineSentenceMedia,
  type MachineSentenceMediaAsset,
} from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

const BASE = '/grant/modal-gray-area-2026/incomplete-containment';

export const incompleteContainmentMediaDisclosure =
  'Concept renderings of the proposed listening structure. The physical sculpture has not yet been fabricated.';

export const supersededStudiesLabel =
  'Earlier formal studies — superseded by the production-realistic listening structure.';

/** Production-realistic concept renders for the civic-forensic listening structure */
export const incompleteContainmentPlaceholders = {
  heroFrontal: {
    label: 'Concept rendering — frontal',
    caption:
      'Hero — frontal view of the self-standing listening structure in civic-industrial white with a changing black aperture.',
    alt: 'Concept rendering of Incomplete Containment of a Model: white civic body with nearly sealed black aperture and a narrow line of internal light',
    src: `${BASE}/hero-frontal.png`,
  },
  visitorEncounter: {
    label: 'Concept rendering — visitor encounter',
    caption: 'Visitor encounter — testimony at the directional microphone.',
    alt: 'Concept rendering of a visitor speaking one sentence into the listening structure at microphone height',
    src: `${BASE}/visitor-encounter.png`,
  },
  apertureStates: {
    label: 'Concept rendering — aperture states',
    caption: 'Changing aperture — artist-authored states achievable by one linked two-shutter mechanism.',
    alt: 'Concept comparison of five aperture states: sealed, listening, attentive, exposed, and unresolved',
    src: `${BASE}/aperture-states.png`,
  },
  curvedMembrane: {
    label: 'Concept rendering — curved membrane',
    caption: 'Curved internal membrane — display surface seen through diffusion, not as a smart screen.',
    alt: 'Close-up concept rendering of a curved translucent membrane in front of a static display',
    src: `${BASE}/curved-membrane.png`,
  },
  rearFabrication: {
    label: 'Concept rendering — rear fabrication',
    caption: 'Rear fabrication and service view — repairable civic apparatus, not hidden consumer electronics.',
    alt: 'Concept rendering of rear service access showing controller, power, cables, and thermal printer bay',
    src: `${BASE}/rear-fabrication.png`,
  },
  thermalEvidence: {
    label: 'Concept rendering — thermal evidence',
    caption: 'Evidence receipt — thermal trace of what the system retained, transformed, or marked unresolved.',
    alt: 'Concept rendering of a thermal printer issuing a narrow forensic evidence receipt',
    src: `${BASE}/thermal-evidence.png`,
  },
  explodedMechanism: {
    label: 'Concept rendering — exploded mechanism',
    caption: 'Exploded mechanism anatomy — one actuator, two shutters, deterministic aperture mapping.',
    alt: 'Exploded concept view of the listening structure: shell, linked shutters, actuator, display, membrane, microphone, printer, and base',
    src: `${BASE}/exploded-mechanism.png`,
  },
  grayAreaContext: {
    label: 'Concept rendering — Gray Area context',
    caption: 'Gray Area context study — proposed exhibition encounter, not a surveyed site photograph.',
    alt: 'Concept rendering of the listening structure in a dark industrial gallery with a visitor for scale',
    src: `${BASE}/gray-area-context.png`,
  },
} as const satisfies Record<string, GrantPlaceholderMedia>;

export type IncompleteContainmentPlaceholderKey = keyof typeof incompleteContainmentPlaceholders;

/** Dimensions for Open Graph / proposal figure usage */
export const incompleteContainmentMediaMeta = {
  heroFrontal: { width: 1024, height: 1536 },
  visitorEncounter: { width: 1536, height: 1024 },
  apertureStates: { width: 1536, height: 1024 },
  curvedMembrane: { width: 1536, height: 1024 },
  rearFabrication: { width: 1024, height: 1536 },
  thermalEvidence: { width: 1536, height: 1024 },
  explodedMechanism: { width: 1024, height: 1536 },
  grayAreaContext: { width: 1536, height: 1024 },
} as const;

/** Archived kinetic-screen renders — retained for lineage, not shown as final proposal */
function supersede(asset: MachineSentenceMediaAsset): MachineSentenceMediaAsset {
  return {
    ...asset,
    caption: `Superseded — ${asset.caption}`,
    section: 'Archive',
  };
}

export const supersededKineticStudies: readonly MachineSentenceMediaAsset[] = Object.values(
  machineSentenceMedia,
).map(supersede);

/** Preferred social / Open Graph image */
export const incompleteContainmentOgImage = {
  src: incompleteContainmentPlaceholders.grayAreaContext.src,
  width: incompleteContainmentMediaMeta.grayAreaContext.width,
  height: incompleteContainmentMediaMeta.grayAreaContext.height,
  alt: incompleteContainmentPlaceholders.grayAreaContext.alt,
} as const;

/** @deprecated Use incompleteContainmentOgImage */
export const incompleteContainmentOgPlaceholder = incompleteContainmentPlaceholders.heroFrontal;
