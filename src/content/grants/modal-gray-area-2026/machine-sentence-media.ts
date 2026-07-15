/**
 * MACHINE SENTENCE NO. 1 — central media manifesto (Cloudinary concept renderings).
 * These are proposal renderings of an unbuilt sculpture — never install photos.
 */

export type ProposalMediaStatus =
  | 'Proposal rendering'
  | 'Concept rendering'
  | 'Proposed exhibition state'
  | 'Proposed white-cube state'
  | 'Fabrication study'
  | 'Mechanical detail study'
  | 'Digital spatial study';

export type ProposalMediaLayout = 'object-contain' | 'object-cover';

export type MachineSentenceMediaAsset = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  status: ProposalMediaStatus;
  section: string;
  width: number;
  height: number;
  aspect: 'wide' | 'portrait' | 'square' | 'landscape-detail';
  layout: ProposalMediaLayout;
};

const BASE =
  'https://res.cloudinary.com/dck5rzi4h/image/upload';

export const machineSentenceMediaDisclosure =
  'Concept renderings. The physical sculpture is proposed and has not yet been fabricated.';

export const machineSentenceMedia = {
  heroFrontalVoid: {
    id: 'heroFrontalVoid',
    src: `${BASE}/v1784088863/grants/gray-area-modal-grant/proposal-section-hero-frontal-latent-void-machine-sentence-no-1_e0yrns.png`,
    alt: 'Concept rendering of Machine Sentence No. 1, a cubic raw-aluminum sculpture holding seven articulated screens around a central tapered void.',
    caption: 'Proposal rendering — frontal view emphasizing the inaccessible central void.',
    status: 'Concept rendering',
    section: 'Hero',
    width: 1122,
    height: 1402,
    aspect: 'portrait',
    layout: 'object-contain',
  },
  grayAreaActive: {
    id: 'grayAreaActive',
    src: `${BASE}/v1784088859/grants/gray-area-modal-grant/proposal-section-context-gray-area-active-establishing-machine-sentence-no-1_iwvyl2.png`,
    alt: 'Proposal rendering of the illuminated screen sculpture in a dark industrial gallery with one visitor standing nearby for scale.',
    caption: 'Proposed exhibition state — Gray Area active establishing view.',
    status: 'Proposed exhibition state',
    section: 'Hub / Context / Closing',
    width: 1672,
    height: 941,
    aspect: 'wide',
    layout: 'object-contain',
  },
  grayAreaVisitor: {
    id: 'grayAreaVisitor',
    src: `${BASE}/v1784088861/grants/gray-area-modal-grant/proposal-section-context-gray-area-visitor-encounter-machine-sentence-no-1_utu5bi.png`,
    alt: 'Concept rendering of a visitor facing the proposed cubic screen sculpture in a dark gallery.',
    caption: 'Proposed exhibition state — visitor encounter.',
    status: 'Proposed exhibition state',
    section: 'Encounter',
    width: 1672,
    height: 941,
    aspect: 'wide',
    layout: 'object-contain',
  },
  whiteCubeActive: {
    id: 'whiteCubeActive',
    src: `${BASE}/v1784088862/grants/gray-area-modal-grant/proposal-section-context-white-cube-active-three-quarter-machine-sentence-no-1_oexx48.png`,
    alt: 'Proposal rendering of the active sculpture in a white cube, showing mixed screen proportions and the central negative-space void.',
    caption:
      'Proposed white-cube active state. Distributed image and articulated screen planes surround the central void.',
    status: 'Proposed white-cube state',
    section: 'Object',
    width: 1122,
    height: 1402,
    aspect: 'portrait',
    layout: 'object-contain',
  },
  whiteCubeOff: {
    id: 'whiteCubeOff',
    src: `${BASE}/v1784088858/grants/gray-area-modal-grant/proposal-section-context-white-cube-powered-off-machine-sentence-no-1_wvhpxm.png`,
    alt: 'Proposal rendering of the same sculpture with all screens powered off, emphasizing its aluminum structure and black planes.',
    caption:
      'Proposed powered-off state. The sculpture remains materially and spatially legible without moving image.',
    status: 'Proposed white-cube state',
    section: 'Object',
    width: 1122,
    height: 1402,
    aspect: 'portrait',
    layout: 'object-contain',
  },
  rearInfrastructure: {
    id: 'rearInfrastructure',
    src: `${BASE}/v1784088862/grants/gray-area-modal-grant/proposal-section-context-white-cube-rear-infrastructure-machine-sentence-no-1_xrhxdo.png`,
    alt: 'Rear proposal rendering showing cross-bracing, cable routing, screen backs, service hardware, and local control equipment.',
    caption:
      'Proposed rear infrastructure state showing service access, cable circulation, cross-bracing, and local control hardware.',
    status: 'Fabrication study',
    section: 'Fabrication',
    width: 1122,
    height: 1402,
    aspect: 'portrait',
    layout: 'object-contain',
  },
  mutationTriptych: {
    id: 'mutationTriptych',
    src: `${BASE}/v1784088862/grants/gray-area-modal-grant/proposal-section-states-mutation-comparison-triptych-machine-sentence-no-1_mo3nrt.png`,
    alt: 'Three proposal renderings comparing different physical configurations of the same cubic screen sculpture.',
    caption:
      'Proposal study comparing three physical states of the same sculpture. Mutation changes the object’s silhouette and central void, not only its screen content.',
    status: 'Concept rendering',
    section: 'Authored states',
    width: 1672,
    height: 941,
    aspect: 'wide',
    layout: 'object-contain',
  },
  mechanicalDetail: {
    id: 'mechanicalDetail',
    src: `${BASE}/v1784088860/grants/gray-area-modal-grant/proposal-section-detail-mechanical-closeup-machine-sentence-no-1_a1eakj.png`,
    alt: 'Close-up concept rendering of a screen pivot, motor assembly, aluminum frame, cables, and display edge.',
    caption:
      'Proposal study of a serviceable screen pivot, motor, bracket, cable routing, and enclosure interface.',
    status: 'Mechanical detail study',
    section: 'Fabrication',
    width: 1448,
    height: 1086,
    aspect: 'landscape-detail',
    layout: 'object-contain',
  },
  internalVoidDetail: {
    id: 'internalVoidDetail',
    src: `${BASE}/v1784088860/grants/gray-area-modal-grant/proposal-section-detail-internal-latent-void-closeup-machine-sentence-no-1_tl073c.png`,
    alt: 'Close-up concept rendering looking into the dark central void formed between the sculpture’s articulated screen planes.',
    caption: 'Digital spatial study — looking into the inaccessible central void.',
    status: 'Digital spatial study',
    section: 'Latent void',
    width: 1254,
    height: 1254,
    aspect: 'square',
    layout: 'object-contain',
  },
  explodedAnatomy: {
    id: 'explodedAnatomy',
    src: `${BASE}/v1784088863/grants/gray-area-modal-grant/proposal-section-fabrication-exploded-anatomy-machine-sentence-no-1_o00gsa.png`,
    alt: 'Exploded fabrication study showing the aluminum cube, seven displays, articulated mounts, controllers, cables, and weighted base.',
    caption:
      'Fabrication study separating structure, screen clusters, movement hardware, control systems, and ballast.',
    status: 'Fabrication study',
    section: 'Fabrication',
    width: 1122,
    height: 1402,
    aspect: 'portrait',
    layout: 'object-contain',
  },
} as const satisfies Record<string, MachineSentenceMediaAsset>;

export type MachineSentenceMediaKey = keyof typeof machineSentenceMedia;

/** Preferred Open Graph / social image */
export const machineSentenceOgImage = machineSentenceMedia.grayAreaActive;
