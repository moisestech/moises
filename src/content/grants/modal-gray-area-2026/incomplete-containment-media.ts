/**
 * INCOMPLETE CONTAINMENT OF A MODEL — media manifest
 * Production-realistic placeholders + archived superseded kinetic studies.
 */
import type { GrantPlaceholderMedia } from '@/components/grant/shared/GrantProposalUi';
import {
  machineSentenceMedia,
  type MachineSentenceMediaAsset,
} from '@/content/grants/modal-gray-area-2026/machine-sentence-media';

export const incompleteContainmentMediaDisclosure =
  'Production-realistic concept placeholders. The physical listening structure is proposed and has not yet been fabricated.';

export const supersededStudiesLabel =
  'Earlier formal studies — superseded by the production-realistic listening structure.';

/** Replacement images needed — no src until authentic production renders exist */
export const incompleteContainmentPlaceholders = {
  heroFrontal: {
    label:
      '[PLACEHOLDER — HERO] Frontal white-civic body, black central aperture nearly sealed, narrow line of internal light, weighted base, approximate 5 ft wide × 4–4.5 ft tall.',
    caption:
      'Hero — frontal view of the self-standing listening structure in civic-industrial white with a changing black aperture.',
    alt: 'Placeholder for frontal view of Incomplete Containment of a Model listening structure',
  },
  visitorEncounter: {
    label:
      '[PLACEHOLDER — VISITOR ENCOUNTER] One visitor at microphone height, structure at rest in exhibition lighting, aperture partially open, no theatrical robot staging.',
    caption: 'Visitor encounter — testimony at the directional microphone.',
    alt: 'Placeholder for visitor speaking one sentence into the listening structure',
  },
  apertureStates: {
    label:
      '[PLACEHOLDER — APERTURE STATES] Five-panel or triptych comparison: Sealed, Listening, Attentive, Exposed, Unresolved — same object, linked shutter positions only.',
    caption: 'Changing aperture — artist-authored states achievable by one linked two-shutter mechanism.',
    alt: 'Placeholder comparing five aperture states of the listening structure',
  },
  curvedMembrane: {
    label:
      '[PLACEHOLDER — CURVED MEMBRANE] Interior detail: static flat display behind curved translucent PETG or polycarbonate diffusion membrane, soft internal glow.',
    caption: 'Curved internal membrane — display surface seen through diffusion, not as a smart screen.',
    alt: 'Placeholder for curved translucent membrane in front of static display',
  },
  rearFabrication: {
    label:
      '[PLACEHOLDER — REAR FABRICATION] Rear service access: controller, power, emergency stop, cable routing, thermal printer bay, weighted base internals.',
    caption: 'Rear fabrication and service view — repairable civic apparatus, not hidden consumer electronics.',
    alt: 'Placeholder for rear service access and fabrication detail',
  },
  thermalEvidence: {
    label:
      '[PLACEHOLDER — THERMAL EVIDENCE] Narrow forensic receipt emerging from thermal printer with legible fields: retained, transformed, unresolved.',
    caption: 'Evidence receipt — thermal trace of what the system retained, transformed, or marked unresolved.',
    alt: 'Placeholder for thermal printer issuing forensic evidence receipt',
  },
  explodedMechanism: {
    label:
      '[PLACEHOLDER — EXPLODED MECHANISM] Exploded anatomy: outer shell, two linked shutters, single actuator or gearmotor, display stack, membrane, microphone, printer, base.',
    caption: 'Exploded mechanism anatomy — one actuator, two shutters, deterministic aperture mapping.',
    alt: 'Placeholder for exploded view of shutter mechanism and internal components',
  },
  grayAreaContext: {
    label:
      '[PLACEHOLDER — GRAY AREA CONTEXT] Structure in Gray Area–scale industrial gallery, visitor scale, dark ambient light, civic kiosk read at exhibition distance.',
    caption: 'Gray Area context study — proposed exhibition encounter, not a surveyed site photograph.',
    alt: 'Placeholder for listening structure in Gray Area exhibition context',
  },
} as const satisfies Record<string, GrantPlaceholderMedia>;

export type IncompleteContainmentPlaceholderKey = keyof typeof incompleteContainmentPlaceholders;

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

/** Open Graph until hero placeholder is replaced with authentic render */
export const incompleteContainmentOgPlaceholder = incompleteContainmentPlaceholders.heroFrontal;
