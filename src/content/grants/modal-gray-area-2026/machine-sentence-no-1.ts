/**
 * MACHINE SENTENCE NO. 1 — Latent Monument
 * Full editorial content for Modal × Gray Area 2026
 */
import type { GrantBudgetLine, GrantPlaceholderMedia, GrantRelatedWork } from '@/components/grant/shared/GrantProposalUi';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type MachineSentenceState =
  | 'column'
  | 'sentence'
  | 'aperture'
  | 'witness'
  | 'refusal'
  | 'compression'
  | 'chorus'
  | 'fault_line';

export type BodyScore = {
  openness: number;
  coherence: number;
  attention: number;
  contradiction: number;
  compression: number;
  organicMachine: number;
  state: MachineSentenceState;
  model?: string;
  latencyMs?: number;
  mode: 'mock' | 'modal';
};

export type ContextStudy = {
  id: string;
  title: string;
  strategicRole: string;
  description: string;
  establishing: GrantPlaceholderMedia;
  visitorOrSecondary: GrantPlaceholderMedia;
  detail: GrantPlaceholderMedia;
  notes: string[];
};

export const machineSentence = {
  title: 'MACHINE SENTENCE NO. 1',
  subtitle: 'A model organism from Born into the Machine',
  formalAlias: 'Latent Monument',
  route: '/grant/modal-gray-area-2026/machine-sentence-no-1',
  status: 'Application-stage proposal · digital proof of concept · not yet fabricated',
  metadata: [
    'Self-standing inference sculpture',
    'Gray Area · October 2026',
    'Modal compute + production support',
    'New work in development',
  ],
  thesis:
    'The sculpture does not illustrate what the visitor says. It becomes a machine sentence constructed from screens, movement, texture, and inference.',
  oneSentencePitch:
    'A self-standing inference sculpture transforms human language into physical orientation, distributed imagery, and temporary machine posture.',
  lede: `MACHINE SENTENCE NO. 1 is a cubic, self-standing sculpture whose planes have become computational, perceptual, and unstable. A raw aluminum lattice holds three articulated screen clusters. Between them, an inaccessible tapered void makes latent space physically consequential. Human language enters through voice or text; inference proposes a posture; a deterministic controller selects only from an artist-authored vocabulary of safe states.`,
  conceptStatement: `Against a prevailing narrative where inference means automation and homogeneous output, this work treats AI as infrastructure for a sculptural grammar. The rigid orthogonal lattice is syntax. Paired and clustered screens are clauses. Physical pivots are punctuation. Distributed imagery is semantic pressure. The complete object is a machine sentence — the first in a repeatable series (Machine Sentence No. 2, for Two Bodies, Collective Memory).

The formal conflict is the point: hard rule versus soft mutation. Measured, serial, finite structure contains textural, inferred, temporarily unstable screen behavior. The AI never invents unsafe motor coordinates. It produces values such as openness, certainty, attention, and contradiction. A local controller translates those values into authored states: Cube, Aperture, Witness, Refusal, Compression, Chorus, Fault Line.

Temporally, the work moves through reflex (1–3 seconds), metabolization (20–45 seconds), and rest (30–90 seconds) — machine speed versus material time. Screens carry latent texture and occasional language residue, never a chatbot reply. Modal hosts the intentional inference path; the minimum artwork remains complete offline with cached and mock fallbacks.`,
  spatialGesture: {
    primary: 'Seven mixed-proportion screens form one physically mutable sentence around a central void.',
    secondary: 'A fixed raw-aluminum cubic lattice holds three articulated screen modules.',
    endpoint:
      'Human language becomes a temporary physical body authored jointly by inference and a deterministic sculptural grammar.',
  },
  anatomy: [
    { label: 'Scale', value: 'Approx. 6.5 ft tall × 4 ft wide · heavy self-standing base' },
    { label: 'Structure', value: 'Raw aluminum orthogonal cubic lattice (syntax)' },
    { label: 'Displays', value: 'Preferred 7 mixed proportions / complete minimum 4–6 / stretch 9' },
    { label: 'Clusters', value: 'Three articulated modules (not seven independent motors)' },
    { label: 'Motion', value: 'Three motorized axes · deterministic safety controller' },
    { label: 'Housings', value: 'Black civic-industrial shells; restrained mineral/bone edge behavior' },
    { label: 'Input', value: 'Microphone and/or typed text · accessible visitor interface' },
    { label: 'Base', value: 'Local computer, controller, amplifiers, power · organized cable circulation' },
    { label: 'Void', value: 'Tapered inaccessible central space = latent space made consequential' },
  ],
} as const;

export const machineSentenceHero: GrantPlaceholderMedia = {
  label: '[PLACEHOLDER] Hero — Latent Monument establishing silhouette',
  caption:
    'Full-viewport: raw aluminum cubic armature, black housings, mixed screens, central void, one human for scale. Digital study until fabrication.',
  alt: 'Placeholder hero for Machine Sentence No. 1 cubic inference sculpture',
};

export const machineSentenceTemporal = [
  {
    number: '01',
    title: 'Reflex',
    body: '1–3 seconds. Immediate acknowledgment: a small orientation shift, low mechanical or sonic pulse. The system registers that something has entered without yet finishing interpretation.',
  },
  {
    number: '02',
    title: 'Metabolization',
    body: '20–45 seconds. Modules slowly reconfigure; distributed image surfaces update; panels may agree, diverge, or interrupt. Inference completes into a new silhouette.',
  },
  {
    number: '03',
    title: 'Rest',
    body: '30–90 seconds. Movement stops. The visitor examines the result as an object. The body eventually returns toward neutral or waits for the next sentence.',
  },
] as const;

export const machineSentenceStates: {
  id: MachineSentenceState;
  title: string;
  physical: string;
  tone: string;
}[] = [
  {
    id: 'column',
    title: 'Column / Cube',
    physical: 'Screens align into a dense cubic or vertical coherence',
    tone: 'Authority, certainty, closed grammar',
  },
  {
    id: 'sentence',
    title: 'Sentence',
    physical: 'Modules extend into a wider lateral composition',
    tone: 'Expression, sequence, declaration',
  },
  {
    id: 'aperture',
    title: 'Aperture',
    physical: 'Clusters pivot outward around the central void',
    tone: 'Openness, perception, invitation',
  },
  {
    id: 'witness',
    title: 'Witness',
    physical: 'Screens orient toward the visitor',
    tone: 'Attention, recognition, surveillance',
  },
  {
    id: 'refusal',
    title: 'Refusal',
    physical: 'Screens turn partially away',
    tone: 'Withdrawal, opacity, failed understanding',
  },
  {
    id: 'compression',
    title: 'Compression',
    physical: 'Modules contract toward the center',
    tone: 'Anxiety, simplification, information loss',
  },
  {
    id: 'chorus',
    title: 'Chorus',
    physical: 'Screens face different directions',
    tone: 'Contradiction, plurality, model disagreement',
  },
  {
    id: 'fault_line',
    title: 'Fault Line',
    physical: 'Asymmetric break across clusters — misalignment held as form',
    tone: 'Broken grammar, partial reconstruction',
  },
];

export const machineSentenceContextStudies: ContextStudy[] = [
  {
    id: 'gray-area',
    title: 'Gray Area — Active State',
    strategicRole: 'Exhibition encounter',
    description:
      'Dark industrial context. Screens illuminated. Visitor present for scale. Cabling and infrastructure legible. Spatial silhouette reads as monument, not interface.',
    establishing: {
      label: '[PLACEHOLDER] Gray Area — Image A Establishing View',
      caption: 'Dark venue · illuminated sculpture · one visitor · bypass clear. Concept study — not surveyed site photo.',
      alt: 'Placeholder Gray Area establishing view of Machine Sentence No. 1',
    },
    visitorOrSecondary: {
      label: '[PLACEHOLDER] Gray Area — Image B Visitor Encounter',
      caption: 'Person offering a sentence; sculpture in Witness or Aperture; reflex beginning.',
      alt: 'Placeholder visitor encounter at Gray Area',
    },
    detail: {
      label: '[PLACEHOLDER] Gray Area — Image C Material Detail',
      caption: 'Black housing, aluminum lattice joint, cable route, screen edge texture.',
      alt: 'Placeholder material detail active state',
    },
    notes: [
      'Context study — Gray Area floor plan not yet surveyed',
      'Screens illuminated; latent void readable',
      'Works during normal circulation without blocking egress',
    ],
  },
  {
    id: 'white-cube',
    title: 'White Cube — Sculptural State',
    strategicRole: 'Formal autonomy',
    description:
      'Neutral institutional room. Prove the object survives beyond Gray Area: active and powered-off states both read as sculpture.',
    establishing: {
      label: '[PLACEHOLDER] White Cube — Active establishing',
      caption: 'Generous empty space · full silhouette · soft ambient light.',
      alt: 'Placeholder white-cube active establishing view',
    },
    visitorOrSecondary: {
      label: '[PLACEHOLDER] White Cube — Powered off / rest',
      caption: 'Screens dark; aluminum and black housings carry the form. Sculpture remains meaningful while inactive.',
      alt: 'Placeholder white-cube powered-off state',
    },
    detail: {
      label: '[PLACEHOLDER] White Cube — Frontal void view',
      caption: 'Central inaccessible void emphasized; mixed screen proportions visible.',
      alt: 'Placeholder frontal latent-void view',
    },
    notes: [
      'Demonstrates formal autonomy beyond event tech',
      'Inactive state is a requirement of the proposal',
      'No hotel / venue claim — universal institutional room',
    ],
  },
  {
    id: 'anatomy',
    title: 'Anatomy — Fabrication State',
    strategicRole: 'Technical credibility',
    description:
      'Exploded or sectional study: screen module, pivot, lattice, enclosure, weighted base, controller, safety layer, cable routing.',
    establishing: {
      label: '[PLACEHOLDER] Anatomy — Exploded establishing',
      caption: 'Exploded cubic armature with callouts. Not a purchasing diagram.',
      alt: 'Placeholder exploded fabrication anatomy',
    },
    visitorOrSecondary: {
      label: '[PLACEHOLDER] Anatomy — Cluster / pivot assembly',
      caption: 'One articulated cluster: screens, housing, pivot joint, motor axis.',
      alt: 'Placeholder pivot and cluster assembly',
    },
    detail: {
      label: '[PLACEHOLDER] Anatomy — Base / controller / safety',
      caption: 'Weighted base: compute, controller, amplifiers, power, organized cable loom.',
      alt: 'Placeholder base and control-system detail',
    },
    notes: [
      'Procurement only after written selection confirmation',
      'Three axes preferred over six independent motors',
      'Replaceable screens and motors as design rule',
    ],
  },
];

export const machineSentenceVisitorJourney = [
  'ENTER',
  'OFFER A SENTENCE',
  'REFLEX',
  'METABOLIZATION',
  'REST / READ THE BODY',
  'VOID REMAINS',
] as const;

export const machineSentenceFastSlow = {
  fast: [
    'Speech transcription or typed text',
    'Text embedding',
    'Structured semantic interpretation',
    'Constrained body score',
    'Immediate physical / digital reflex',
  ],
  slow: [
    'Same input extracts latent and semantic features',
    'Selects or generates an artist-authored texture family',
    'Produces one distributed image surface',
    'Maps across displays',
    'Updates while sculpture settles — does not block reflex',
  ],
  note: 'Cold-start diffusion must never gate the kinetic reflex. Visual generation is deferred until body scoring is reliable.',
} as const;

export const machineSentencePrivacy = [
  'No biometric identity retention',
  'Voice used only for ephemeral transcription when enabled',
  'Text inputs not stored as personal profiles',
  'Offline and cached fallback mode required',
  'Model does not claim to understand emotion, consciousness, or true intent',
] as const;

export const machineSentenceScope = [
  {
    level: 'Minimum (complete artwork)',
    screens: '4 screens',
    note: 'Fewer clusters; same lattice + void + authored states; modal credits for body scoring',
  },
  {
    level: 'Preferred',
    screens: '6–7 mixed-proportion screens',
    note: 'Three articulated clusters; best balance of multiplicity and mechanical reliability',
  },
  {
    level: 'Stretch (funded)',
    screens: 'Up to 9 screens',
    note: 'Only if production support and fabrication capacity allow — not a submission dependency',
  },
] as const;

export const machineSentenceFabrication = [
  '2× module mockup: housing + pivot + one screen surrogate',
  'Aluminum lattice joint and cable routing sample',
  'Deterministic controller safety tests (soft limits, e-stop path)',
  'Textural enclosure edge sample (mineral/bone behavior — intensity adjustable)',
  'Audio/mechanical pulse levels for Reflex stage',
  'Accessibility review of typed + voice input',
  'Inactive-state photogenic rest pose documentation',
] as const;

export const machineSentenceBudget: GrantBudgetLine[] = [
  { category: 'Structural lattice / base materials (aluminum, hardware)', amount: 1200 },
  { category: 'Screen housings / textural enclosures (prototypes)', amount: 800 },
  { category: 'Displays (used/refurb preferred path)', amount: 1400 },
  { category: 'Motors, controllers, cabling, power conditioning', amount: 700 },
  { category: 'Local compute / audio amplification', amount: 400 },
  { category: 'Fabrication labor / assistance', amount: 350 },
  { category: 'Shipping / crating contingency (SF install)', amount: 100 },
  { category: 'Documentation', amount: 50 },
];

export const machineSentenceBudgetTotal = machineSentenceBudget.reduce((s, l) => s + l.amount, 0);

export const machineSentenceRisks = [
  {
    risk: 'Modal cold start / latency',
    mitigation: 'Reflex uses local/fast path; mock + cached scores offline; warm keep-alive after selection',
  },
  {
    risk: 'Motor safety / unsafe coordinates',
    mitigation: 'AI never sends motors directly; finite authored state vocabulary + soft limits',
  },
  {
    risk: 'Screen failure on tour',
    mitigation: 'Replaceable displays; redundant cascade down to 4-screen minimum',
  },
  {
    risk: 'Interaction read as demo/attraction',
    mitigation: 'Slow metabolization + rest; choreography prioritizes object over gadget',
  },
  {
    risk: 'Homogeneous AI imagery',
    mitigation: 'Defer diffusion; latent texture + language residue; artist-authored visual families',
  },
  {
    risk: 'Budget overruns before authorization',
    mitigation: 'Zero personal cash until written production confirmation; scope ladder',
  },
] as const;

export const machineSentenceBitm = {
  heading: 'Relationship to Born into the Machine',
  body: `Born into the Machine is the long-form research project on intelligence as infrastructure — attention, adaptation tax, and agency. Machine Sentence No. 1 is a model organism of that research: a physical unit that lets inference take temporary form without claiming understanding. The grant page is the commission dossier; the research hub holds the wider inquiry.`,
  href: '/research/born-into-the-machine',
} as const;

export const machineSentenceRelated: GrantRelatedWork[] = [
  {
    slug: 'baby_agi',
    title: 'Baby AGI / From Cradle to AGI',
    year: 2023,
    image: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    blurb: 'Intelligence assembled as sculptural metaphor — precedent for technological embodiment.',
  },
  {
    slug: 'digital_divinities',
    title: 'Digital Divinities',
    year: 2023,
    image: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    blurb: 'Live systems where mediation and belief share a field — screen as ritual plane.',
  },
  {
    slug: 'doomscrolling_treadmill',
    title: 'Doom Scrolling Treadmill',
    year: 2024,
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    blurb: 'Durational body inside algorithmic continuity — time as medium.',
  },
  {
    slug: 'simulation_faith',
    title: 'Simulation Faith',
    year: 2025,
    image: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`,
    blurb: 'Sacred form under technical mediation — belief as infrastructure.',
  },
];

export const machineSentenceClosing: GrantPlaceholderMedia = {
  label: '[PLACEHOLDER] Closing — three mutation states comparison',
  caption:
    'Same armature in Cube / Aperture / Fault Line — proves mutation is physical, not only image change. Most important application image suite item.',
  alt: 'Placeholder comparison of three physical configurations of Machine Sentence No. 1',
};

export const machineSentenceProjectStatement = {
  interestAndApproach: `Modal × Gray Area asks what intentional inference can unlock when AI is treated as infrastructure rather than automation or slop. I propose MACHINE SENTENCE NO. 1 — a self-standing cubic inference sculpture from the Born into the Machine research line.

A raw aluminum lattice holds three articulated screen clusters around an inaccessible central void. Visitor language (speech or text) is scored into constrained values; a deterministic controller selects only from artist-authored states. Screens carry latent texture and occasional language residue — never a chatbot. Reflex is immediate; metabolization is slow; rest lets the result become an object.

Modal hosts the intentional inference path and future visual skin. The minimum version (four screens) remains a complete artwork. Preferred form uses six–seven mixed-proportion screens. No personal expenditure before production authorization. Full dossier: https://moises.tech/grant/modal-gray-area-2026/machine-sentence-no-1`,
  technicalApproach: `Fast path: transcription/text → embedding → structured body score → reflex. Slow path: texture/image update while settling — never blocking kinetic response. Safety: no unrestricted motor commands; offline mock fallback; no biometric retention.`,
} as const;

export const machineSentenceSeo = {
  title: 'MACHINE SENTENCE NO. 1 — Modal × Gray Area 2026 | Moises Sanabria',
  description:
    'Proposed self-standing inference sculpture for Modal × Gray Area 2026: screens, lattice, and latent void transform language into temporary machine posture.',
} as const;

export const machineSentenceSuggestedInput = 'I remember something that never happened.';
