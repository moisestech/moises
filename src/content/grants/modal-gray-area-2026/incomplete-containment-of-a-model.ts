/**
 * INCOMPLETE CONTAINMENT OF A MODEL
 * Full editorial content for Modal × Gray Area 2026
 * Research lineage: Machine Sentences · Born into the Machine
 */
import type { GrantBudgetLine, GrantRelatedWork } from '@/components/grant/shared/GrantProposalUi';

const CDN = 'https://res.cloudinary.com/dck5rzi4h/image/upload';

export type ApertureState = 'sealed' | 'listening' | 'attentive' | 'exposed' | 'unresolved';

/** Constrained inference values mapped to safe aperture positions by local controller */
export type InferenceScore = {
  retention: number;
  transformation: number;
  ambiguity: number;
  certainty: number;
  unresolved: number;
  state: ApertureState;
  model?: string;
  latencyMs?: number;
  mode: 'mock' | 'modal';
};

/** @deprecated Use InferenceScore — retained for prototype imports */
export type BodyScore = InferenceScore & {
  openness?: number;
  coherence?: number;
  attention?: number;
  contradiction?: number;
  compression?: number;
  organicMachine?: number;
};

/** @deprecated Use ApertureState */
export type MachineSentenceState = ApertureState;

export const incompleteContainment = {
  title: 'INCOMPLETE CONTAINMENT OF A MODEL',
  subtitle: 'A listening structure for inference under observation',
  researchLineage: ['Machine Sentences', 'Born into the Machine'],
  route: '/grant/modal-gray-area-2026/machine-sentence-no-1',
  status: 'Application-stage proposal · digital proof of concept · not yet fabricated',
  visitorPrompt: 'Offer one sentence you want heard, not answered.',
  metadata: [
    'Civic-forensic listening structure',
    'Gray Area · October 2026',
    'Modal compute + production support',
    'New work in development',
  ],
  thesis:
    'The enclosure makes the model visible while revealing how little visibility guarantees accountability or control.',
  thesisSupport:
    'The visitor leaves with evidence that the machine processed their statement, but no proof that it understood them.',
  oneSentencePitch:
    'A public listening structure receives one human sentence, changes the shape of its central aperture, and issues a forensic trace of what the machine retained, transformed, and could not resolve.',
  conceptualTension:
    'The structure appears to contain the model, but the model already exceeds the object, the interface, and the institutions claiming to govern it.',
  heroLead:
    'A civic-forensic sculpture receives one human sentence, changes the shape of its central aperture, and produces evidence of what the machine retained, transformed, and could not resolve.',
  lede: `INCOMPLETE CONTAINMENT OF A MODEL is a broad, self-standing civic-forensic listening structure — not a robot, chatbot kiosk, or kinetic screen cube. A white civic-industrial body holds a black changing central aperture, a static display behind a curved translucent membrane, a directional microphone, and a thermal receipt printer. The visitor speaks one sentence; inference returns constrained semantic values; a local deterministic controller maps them to one of five artist-authored aperture positions. The artwork sits formally between civic information kiosk, evidence-viewing apparatus, technological enclosure, observation window, and secular reliquary.`,
  conceptStatement: `Against narratives that treat inference as automation or personality, this work stages a public listening structure under observation. The visitor is heard, not judged, diagnosed, scored, or advised. The model never receives direct motor control. It produces bounded values — retention, transformation, ambiguity, certainty, unresolved — that the local controller translates into safe predetermined aperture states: Sealed, Listening, Attentive, Exposed, Unresolved.

The formal conflict is containment versus overflow. The object appears to hold the model inside its aperture and receipt trace, but the model already exceeds the sculpture, the interface, and the institution. Modal hosts intentional language inference when live; the minimum artwork remains complete with cached fallback. The thermal receipt is forensic evidence, not advice.`,
  spatialGesture: {
    primary: 'A civic-industrial listening volume with one changing central aperture.',
    secondary: 'White outer body, black aperture shutters, static display with curved diffusion membrane.',
    endpoint:
      'One human sentence becomes a physical aperture state and a narrow printed trace of machine retention.',
  },
  anatomy: [
    { label: 'Scale', value: 'Approx. 5 ft wide × 4–4.5 ft tall × 20–26 in. deep · weighted base' },
    { label: 'Outer body', value: 'White civic-industrial facing · black aperture panels' },
    { label: 'Aperture', value: 'Two mechanically linked lightweight shutters · one actuator or gearmotor' },
    { label: 'Display', value: 'One static flat display behind curved PETG or polycarbonate membrane' },
    { label: 'Input', value: 'Directional microphone · testimony only — one sentence' },
    { label: 'Output', value: 'Thermal receipt printer · forensic evidence trace' },
    { label: 'Control', value: 'Local deterministic controller · emergency stop · rear service access' },
    { label: 'Compute', value: 'On-device controller with Modal-hosted inference path when live' },
  ],
  closingQuestion:
    'Does containment protect the viewer from the model, the model from the viewer, or the institution from responsibility?',
} as const;

export const incompleteContainmentInteraction = [
  {
    number: '01',
    title: 'Dormant',
    body: 'The aperture is nearly sealed. A narrow line of light remains visible.',
  },
  {
    number: '02',
    title: 'Approach',
    body: 'The internal light increases slightly as someone nears the structure.',
  },
  {
    number: '03',
    title: 'Testimony',
    body: 'The visitor speaks one sentence into the directional microphone.',
  },
  {
    number: '04',
    title: 'Acknowledgment',
    body: 'The aperture opens slightly before intensive inference is complete.',
  },
  {
    number: '05',
    title: 'Interpretation',
    body: 'The sentence is transcribed and mapped into constrained semantic values.',
  },
  {
    number: '06',
    title: 'Physical state',
    body: 'The system selects from a finite artist-authored set of aperture positions.',
  },
  {
    number: '07',
    title: 'Evidence trace',
    body: 'A thermal printer issues a narrow forensic receipt describing retention, transformation, or unresolved marks.',
  },
  {
    number: '08',
    title: 'Rest',
    body: 'The aperture holds its state before returning to neutral.',
  },
] as const;

export const incompleteContainmentApertureStates: {
  id: ApertureState;
  title: string;
  physical: string;
  tone: string;
}[] = [
  {
    id: 'sealed',
    title: 'Sealed',
    physical: 'Shutters nearly closed — narrow line of internal light only',
    tone: 'Dormancy, withholding, institutional closure',
  },
  {
    id: 'listening',
    title: 'Listening',
    physical: 'Slight parting — aperture acknowledges incoming speech',
    tone: 'Reception without judgment',
  },
  {
    id: 'attentive',
    title: 'Attentive',
    physical: 'Moderate opening — structure visibly attending during inference',
    tone: 'Held attention, civic formality',
  },
  {
    id: 'exposed',
    title: 'Exposed',
    physical: 'Wider opening — internal display and membrane legible',
    tone: 'Visibility, disclosure, incomplete containment',
  },
  {
    id: 'unresolved',
    title: 'Unresolved',
    physical: 'Asymmetric or held gap — inference could not fully resolve',
    tone: 'Ambiguity marked, not repaired',
  },
];

export const incompleteContainmentVisitorJourney = [
  'APPROACH',
  'TESTIMONY',
  'ACKNOWLEDGMENT',
  'INTERPRETATION',
  'APERTURE STATE',
  'EVIDENCE RECEIPT',
  'REST',
] as const;

export const incompleteContainmentInferenceFlow = {
  input: [
    'Directional microphone capture',
    'Speech transcription',
    'Structured semantic interpretation',
    'Constrained inference values',
  ],
  control: [
    'Schema validation and clamping',
    'Authored aperture-state mapper',
    'Single actuator command within safe limits',
    'Cached fallback when offline',
  ],
  output: [
    'Physical aperture position',
    'Optional generated or cached visual field on static display',
    'Thermal forensic receipt',
  ],
  note: 'AI never receives direct motor control. Inference returns constrained values; the local controller maps them to safe predetermined positions.',
} as const;

export const incompleteContainmentPrivacy = [
  'No biometric identity retention',
  'Voice used only for ephemeral transcription',
  'Testimony not stored as personal profiles',
  'Offline and cached fallback mode required',
  'Model does not claim to understand emotion, consciousness, or true intent',
  'Receipt describes processing — not diagnosis or advice',
] as const;

export const incompleteContainmentScope = [
  {
    level: 'Minimum (complete artwork)',
    summary: 'Full listening structure',
    note: 'Fabricated body, static display, membrane, linked two-shutter aperture, microphone, thermal printer, local controller, cached inference fallback, five authored aperture states',
  },
  {
    level: 'Preferred',
    summary: 'Live inference + refined finish',
    note: 'Live Modal-hosted language inference, generated and cached visual evidence fields, refined acoustic treatment, custom white and black exterior finishing, exhibition documentation',
  },
  {
    level: 'Stretch',
    summary: 'Expanded archive and surfaces',
    note: 'Custom voice or multimodal model, cumulative anonymized public evidence archive, additional sound layer, second observation surface',
  },
] as const;

export const incompleteContainmentFabrication = [
  'Shutter linkage and single-actuator mockup with soft limits and e-stop path',
  'Display stack and curved membrane diffusion sample',
  'Thermal printer receipt format and field validation',
  'Acoustic treatment test at microphone position',
  'White and black exterior finish samples',
  'Weighted base and rear service access mockup',
  'Accessibility review of approach height and testimony position',
  'Inactive-state photogenic documentation',
] as const;

export const incompleteContainmentBudget: GrantBudgetLine[] = [
  { category: 'Outer structure and weighted base', amount: 1150 },
  { category: 'White facing, aperture panels, and finish', amount: 500 },
  { category: 'Rails, linkage, and actuator', amount: 650 },
  { category: 'Display and curved diffusion membrane', amount: 400 },
  { category: 'Computer and display output', amount: 400 },
  { category: 'Microphone and thermal printer', amount: 225 },
  { category: 'Controller, power, switches, and emergency stop', amount: 350 },
  { category: 'Cables, hardware, and service access', amount: 250 },
  { category: 'Packing and local transport', amount: 350 },
  { category: 'Contingency and replacement parts', amount: 725 },
];

export const incompleteContainmentBudgetTotal = incompleteContainmentBudget.reduce(
  (s, l) => s + l.amount,
  0,
);

export const incompleteContainmentBudgetNote =
  'Preliminary planning figures subject to vendor quotes, borrowed equipment, and venue support. Maximum production ceiling $5,000. Honorarium and Modal compute credits are separate. Artist labor not included.';

export const incompleteContainmentRisks = [
  {
    risk: 'Modal cold start / latency',
    mitigation: 'Acknowledgment aperture shift uses local path; cached scores offline; warm keep-alive after selection',
  },
  {
    risk: 'Actuator safety / unsafe coordinates',
    mitigation: 'AI never sends motors directly; finite authored state vocabulary + soft limits + e-stop',
  },
  {
    risk: 'Thermal printer failure',
    mitigation: 'Cached receipt templates; screen-readable evidence fallback',
  },
  {
    risk: 'Interaction read as chatbot or diagnosis',
    mitigation: 'One sentence only; receipt is forensic trace; no conversational reply',
  },
  {
    risk: 'Homogeneous AI imagery on display',
    mitigation: 'Artist-authored visual evidence fields; cached skins when generation fails',
  },
  {
    risk: 'Budget overruns before authorization',
    mitigation: 'Minimum scope is complete artwork; procurement only after written confirmation',
  },
] as const;

export const incompleteContainmentBitm = {
  heading: 'Relationship to Born into the Machine',
  body: `Born into the Machine is the long-form research project on intelligence as infrastructure — attention, adaptation tax, and agency. Machine Sentences is a related lineage of physical units that let inference take temporary form without claiming understanding. INCOMPLETE CONTAINMENT OF A MODEL is the Gray Area commission proposal: a civic-forensic listening structure that makes retention visible while refusing the fantasy of control.`,
  href: '/research/born-into-the-machine',
} as const;

export type IncompleteContainmentWorkSample = GrantRelatedWork & {
  medium: string;
  caption: string;
  relationship: string;
  alt: string;
  missingArtPage?: boolean;
  missingImage?: boolean;
};

export const incompleteContainmentWorkSamples: IncompleteContainmentWorkSample[] = [
  {
    slug: 'baby_agi',
    title: 'Baby AGI / From Cradle to AGI',
    year: 2023,
    medium: 'Gaming-computer stroller, robotic hands, electronics, mixed media',
    image: `${CDN}/v1717961679/art/moisestech-website/moisesdsanabria-babyagi_ewquhe.webp`,
    alt: 'Baby AGI stroller sculpture with robotic hands and electronics',
    caption: 'Intelligence staged as something culturally raised and wheeled into the room.',
    relationship:
      'Precedent for technological embodiment — containment as care before understanding exists.',
    blurb: 'Intelligence assembled as sculptural metaphor — precedent for technological embodiment.',
  },
  {
    slug: 'simulation_faith',
    title: 'Simulation Faith',
    year: 2025,
    medium: 'Found religious sculpture, VR headset, mixed media',
    image: `${CDN}/v1742962577/art/moisestech-website/artworks/2025_simulation_faith/moises-sanabria-simulation-faith_vdshq3.jpg`,
    alt: 'Religious baby figure wearing a virtual reality headset',
    caption: 'Sacred form rewired by mediation — belief under continuous technical adjustment.',
    relationship: 'Secular reliquary logic — inherited belief reformatted by contemporary interfaces.',
    blurb: 'Sacred form under technical mediation — belief as infrastructure.',
  },
  {
    slug: 'digital_divinities',
    title: 'Digital Divinities',
    year: 2023,
    medium: 'Interactive AI installation, custom software, displays, projected imagery',
    image: `${CDN}/v1779573363/art/moisestech-website/artworks/2023_digital_divinities/02DigitalDivinities_n4yrg8.png`,
    alt: 'Digital Divinities installation with screens and projected imagery',
    caption: 'Live systems where mediation and belief share a visual field.',
    relationship: 'Observation apparatus — visitors become subjects of algorithmic attention.',
    blurb: 'Live systems where mediation and belief share a field — screen as ritual plane.',
  },
  {
    slug: 'ai_everydays',
    title: 'AI Everydays: The First 5000',
    year: 2022,
    medium: 'AI-generated images, algorithmic processing',
    image: `${CDN}/v1738039650/art/moisestech-website/ai-everydays_2023_tw5k7j.jpg`,
    alt: 'Grid of AI Everydays generated images',
    caption: 'Repetition and synthetic accumulation as conceptual engine for machine image labor.',
    relationship: 'Machine output as durational evidence — visual fields the listening structure may reference.',
    blurb: 'Repetition and synthetic accumulation as conceptual engine for machine image labor.',
  },
  {
    slug: 'doomscrolling_treadmill',
    title: 'Doomscrolling Treadmill',
    year: 2024,
    medium: 'Treadmill, computer, livestream, durational performance',
    image: `${CDN}/v1737831895/art/moisestech-website/touchgrass-doomscrolling-treadmill-stations-6_cwf4ns.jpg`,
    alt: 'Doomscrolling Treadmill performance installation with treadmill and screen',
    caption: 'Durational body inside algorithmic continuity — attention as physical labor.',
    relationship: 'Public encounter with machine rhythm — visitor body versus system tempo.',
    blurb: 'Durational body inside algorithmic continuity — time as medium.',
  },
];

export const incompleteContainmentWorkSampleBackups: IncompleteContainmentWorkSample[] = [
  {
    slug: 'generative_text_art',
    title: 'Generative Text Art',
    year: 2015,
    medium: 'Generative text compositions',
    image: `${CDN}/v1738040058/art/moisestech-website/tumblr_npjwlisCq31r1ubs7o1_1280_z30nb4.jpg`,
    alt: 'Generative text art composition',
    caption: 'Early language-as-material study.',
    relationship: 'Lineage for constrained semantic mapping and printed residue.',
    blurb: 'Early generative text study — language as visual material.',
  },
  {
    slug: 'neural_chapel',
    title: 'Neural Chapel / Tech Prophecies',
    year: 0,
    medium: 'Installation — status unverified',
    image: '',
    alt: 'Neural Chapel / Tech Prophecies — image missing',
    caption: '[MISSING IMAGE] Authentic asset required.',
    relationship: 'Ritual enclosure precedents — verify before submission upload.',
    blurb: 'Ritual and prophecy under technical mediation.',
    missingArtPage: true,
    missingImage: true,
  },
  {
    slug: 'privacy_is_a_luxury',
    title: 'Privacy Is a Luxury',
    year: 2025,
    medium: 'Sculpture, consumer hardware, mixed media',
    image: `${CDN}/v1742962524/art/moisestech-website/artworks/2025_privacy_mask/moises-sanabria-privacy-mask_ewms3y.jpg`,
    alt: 'Privacy Is a Luxury sculpture',
    caption: 'Surveillance and enclosure as polished consumer object.',
    relationship: 'Civic-forensic tone — privacy as material condition, not policy slide.',
    blurb: 'Surveillance and privacy staged as sculptural commodity.',
  },
  {
    slug: 'smart_shoppers',
    title: 'Smart Shoppers',
    year: 2024,
    medium: 'New media installation, 3D-printed objects, shopping cart',
    image: `${CDN}/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg`,
    alt: 'Smart Shoppers installation with brains in shopping cart',
    caption: 'Cognition staged as consumer product.',
    relationship: 'Kiosk-adjacent consumer logic the listening structure refuses.',
    blurb: 'Cognition as consumer product — kiosk-adjacent precedent.',
  },
];

export const incompleteContainmentProjectStatement = {
  projectDescription: `I propose INCOMPLETE CONTAINMENT OF A MODEL — a civic-forensic listening structure for Gray Area, October 2026. The artwork receives one human sentence through a directional microphone, changes the shape of its central aperture via two mechanically linked shutters driven by a single actuator, and issues a thermal forensic receipt describing what the system retained, transformed, or marked unresolved.

The object is approximately five feet wide, four to four-and-a-half feet tall, and twenty to twenty-six inches deep: white civic-industrial outer body, black changing aperture, static display behind a curved translucent membrane, thermal printer, and local deterministic controller. It sits between information kiosk, evidence-viewing apparatus, observation window, and secular reliquary — not a robot, chatbot, or kinetic screen cube.

Modal hosts live language inference when available; the minimum version remains a complete artwork with cached fallback. Full dossier: https://moises.tech/grant/modal-gray-area-2026/machine-sentence-no-1`,
  relationshipWithAi: `AI is infrastructure for interpretation, not personality or automation. The model transcribes and maps each sentence into constrained semantic values — retention, transformation, ambiguity, certainty, unresolved — but never receives direct motor control. A local controller selects only from five artist-authored aperture positions: Sealed, Listening, Attentive, Exposed, Unresolved.

The visitor should feel heard, not judged, diagnosed, scored, or advised. The thermal receipt is forensic evidence of processing, not a conversational reply. Modal provides on-demand compute for intentional inference; the sculpture remains materially legible when inference is slow or offline. The work's tension is containment versus overflow: the structure appears to hold the model, but the model already exceeds the object, the interface, and the institution.`,
  whyParticipate: `Modal × Gray Area asks what intentional inference can unlock when treated as artistic infrastructure rather than homogeneous output. This project needs that compute layer plus a production context where the public can encounter inference as civic form — under observation, with material consequences.

Gray Area's exhibition culture and San Francisco presentation are the right scale for a self-standing listening structure that must be tested in public: approach, testimony, acknowledgment, receipt, rest. The commission aligns with my Born into the Machine research while delivering a resolved physical work — fabricated body, aperture mechanism, display membrane, printer trace — that remains complete at minimum scope. I build my own controllers and exhibition software; Modal is the intentional inference path inside an artist-authored safety grammar.`,
} as const;

export const incompleteContainmentSeo = {
  title: 'Incomplete Containment of a Model — Moises Sanabria',
  description:
    'A proposal for a civic-forensic listening structure that receives one human sentence, changes its central aperture, and issues a thermal evidence trace of machine retention.',
} as const;

export const incompleteContainmentSuggestedInput = 'I want this to be remembered, not explained.';

/** Legacy export alias */
export const machineSentence = incompleteContainment;
export const machineSentenceStates = incompleteContainmentApertureStates;
export const machineSentenceVisitorJourney = incompleteContainmentVisitorJourney;
export const machineSentenceScope = incompleteContainmentScope;
export const machineSentenceFabrication = incompleteContainmentFabrication;
export const machineSentenceBudget = incompleteContainmentBudget;
export const machineSentenceBudgetTotal = incompleteContainmentBudgetTotal;
export const machineSentenceRelated = incompleteContainmentWorkSamples;
export const machineSentenceProjectStatement = incompleteContainmentProjectStatement;
export const machineSentenceSeo = incompleteContainmentSeo;
export const machineSentenceSuggestedInput = incompleteContainmentSuggestedInput;
export const machineSentenceBitm = incompleteContainmentBitm;
export const machineSentenceRisks = incompleteContainmentRisks;
export const machineSentencePrivacy = incompleteContainmentPrivacy;
export const machineSentenceTemporal = incompleteContainmentInteraction;
export const machineSentenceFastSlow = incompleteContainmentInferenceFlow;
