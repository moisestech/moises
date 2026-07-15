/**
 * MACHINE SENTENCES — Pioneer Works 2027 Visual Arts Residency dossier content
 * Pack-aligned thesis, timeline, Second Sundays, risks, and placeholders.
 */
import type { GrantPlaceholderMedia, GrantRelatedWork } from '@/components/grant/shared/GrantProposalUi';
import { pioneerWorksMeta } from '@/content/grants/pioneer-works-residency-2027/meta';
import { pioneerWorksWorkSamples } from '@/content/grants/pioneer-works-residency-2027/shared';

export const pioneerWorksProjectStatement = `Machine Sentences asks what happens when language stops behaving only as representation and acquires posture, weight, duration, and mechanical consequence. The project translates human sentences into a constrained sculptural grammar. Displays become clauses, movement becomes punctuation, and a visible void becomes a temporary model of latent space. The model does not freely invent the sculpture’s body. It interprets within a vocabulary authored by the artist, exposing the negotiation between computational inference and material rule.`;

export type AuthoredStateId =
  | 'column'
  | 'sentence'
  | 'aperture'
  | 'witness'
  | 'refusal'
  | 'compression'
  | 'chorus'
  | 'fault_line';

export const machineSentences = {
  title: 'MACHINE SENTENCES',
  subtitle: 'A model organism for language',
  centralWork: 'MACHINE SENTENCE NO. 1',
  route: pioneerWorksMeta.proposalRoute,
  status:
    'Proposal and work in progress. The central physical sculpture has not yet been fabricated or exhibited.',
  metadata: [
    'Visual Arts Residency · Pioneer Works 2027',
    'Five-month physical studio practice',
    'Anchor work: MACHINE SENTENCE NO. 1',
    'Not primarily a software research project',
  ],
  thesis:
    'Over five months, Moises Sanabria will develop a physical grammar for machine interpretation: a family of screen-based sculptures, mechanical clauses, material studies, diagrams, and public experiments in which language acquires posture.',
  oneSentencePitch:
    'A five-month studio investigation in which human language becomes physical orientation, fragmented imagery, sound, mechanical posture, and a family of screen-based sculptural objects.',
  projectStatement: pioneerWorksProjectStatement,
  coreDistinction: `This is not primarily a chatbot, website, text-to-image experience, technology demonstration, generic responsive installation, or a claim that a machine understands human intention.

It is a physical practice involving frames, displays, joints, electronics, sound, cables, enclosures, diagrams, prints, failed components, smaller sculptures, and one full-scale kinetic work.`,
  whyStudio: `Pioneer Works’ approximately 20 × 11-foot glass-fronted studio, fabrication resources, and public-facing residency culture are required because Machine Sentences must accumulate as objects in space. The work cannot be resolved as a single remote prototype: it needs room for maquettes, frame fragments, cable looms, kinetic testing, failed parts, and monthly public chapters. The glass studio becomes a public operating theater for an unfinished machine body rather than a problem to tolerate.`,
  publicStudioStrategy: `The glass-fronted studio is treated as an evolving public installation. Visitors witness vocabulary studies before anatomy is complete; incomplete joints, software failures, and revised rules remain visible. Second Sundays operate as monthly chapters. Feedback changes artistic rules and constraints rather than merely restyling generative output. Facilities support sculpture and are contingent on program rules — not unrestricted private production support.`,
  seriesOverview: `Machine Sentences is the residency body of work: a model organism for language. MACHINE SENTENCE NO. 1 is its central full-scale sculpture — a self-standing armature with multiple displays, custom housings, visible cable circulation, sound, and a constrained AI system. Alongside it, smaller grammar studies, diagrams, screen fragments, and failed components occupy the studio as an evolving installation.`,
  centralWorkBody: `MACHINE SENTENCE NO. 1 combines a self-standing aluminum armature, multiple displays, custom housings, visible cable circulation, sound, and a constrained AI system. Rather than allowing a model to freely generate form, the artist authors a finite physical grammar — states such as witness, refusal, compression, aperture, and chorus — and uses inference only to move the sculpture among those states.

Proposed dimensions are approximately 78 × 48 × 36 inches and remain provisional. Exact screen count, motor systems, and enclosure materials are unresolved. Visual material is a concept study and digital movement study; the physical work has not yet been fabricated.`,
  aiControl: `AI may classify or score language, but it never invents unrestricted motor coordinates. A deterministic control layer maps interpretation into safe, artist-authored physical states. The system remains legible as sculpture while inactive. Visitor language is processed without retaining personal identity. The work does not claim biometric analysis, consciousness, emotional recognition, or understanding of a visitor’s real intent.`,
  closing: `The residency will culminate in a resolved prototype of MACHINE SENTENCE NO. 1, smaller grammar sculptures, documentation, and a public workshop on building artist-authored AI systems rather than defaulting to generic automation. The dossier remains an application-stage plan: residency not awarded, studio not assigned, physical sculpture not yet fabricated, deadline requiring manual verification.`,
} as const;

const conceptCaption = (detail: string) =>
  `CONCEPT STUDY — WORK NOT YET FABRICATED. ${detail}`;

export const machineSentencesHero: GrantPlaceholderMedia = {
  label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Machine Sentence hero',
  caption: conceptCaption(
    'Silhouette study: aluminum armature, screen housings, cable circulation, one figure for scale. Not documentary installation photography.',
  ),
  alt: 'Placeholder hero for Machine Sentences central sculpture study',
};

export const machineSentencesPlaceholders: Record<string, GrantPlaceholderMedia> = {
  studioEstablishing: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Full studio establishing study',
    caption: conceptCaption(
      'Conceptual view of the glass studio occupied by studies and the central armature. Not a photo of an assigned studio.',
    ),
    alt: 'Placeholder full studio establishing study',
  },
  glassVisitorView: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Glass-wall visitor view',
    caption: conceptCaption(
      'Sightline through glass to unfinished machine anatomy and wall diagrams.',
    ),
    alt: 'Placeholder glass-wall visitor view of the residency studio',
  },
  fiveMonthEvolution: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Five-month evolution sequence',
    caption: conceptCaption(
      'Vocabulary → Anatomy → Movement → Public testing → Assembly as a single annotated strip.',
    ),
    alt: 'Placeholder five-month studio evolution sequence',
  },
  poweredOff: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Machine Sentence powered-off state',
    caption: conceptCaption(
      'Sculpture remains readable as object while inactive: dark screens, exposed structure, resting posture.',
    ),
    alt: 'Placeholder powered-off state of Machine Sentence No. 1',
  },
  threeMutations: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Three physical mutation states',
    caption: conceptCaption(
      'Same armature in Witness / Refusal / Compression — mutation is physical, not only image change.',
    ),
    alt: 'Placeholder three physical mutation states comparison',
  },
  materialPivot: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Material and pivot close-up',
    caption: conceptCaption(
      'Joint study, housing edge, cable route. Fabrication specimen, not a finished install detail.',
    ),
    alt: 'Placeholder material and pivot close-up',
  },
  fabricationExploded: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Exploded fabrication anatomy',
    caption: conceptCaption(
      'Base, frame, housings, pivots, controller, cable loom. Conceptual exploded study.',
    ),
    alt: 'Placeholder exploded fabrication anatomy',
  },
  secondSundays: {
    label: '[PLACEHOLDER — AUTHENTIC ASSET REQUIRED] Second Sundays public encounter',
    caption: conceptCaption(
      'Conceptual open-studio chapter: visitors witness incomplete anatomy and revised rules.',
    ),
    alt: 'Placeholder Second Sundays public encounter',
  },
};

/** Central inventory for acceptance reporting */
export const pioneerWorksAllPlaceholders: GrantPlaceholderMedia[] = [
  machineSentencesHero,
  ...Object.values(machineSentencesPlaceholders),
];

export const machineSentencesGrammar = [
  { element: 'Structural frame', function: 'Syntax' },
  { element: 'Screen clusters', function: 'Clauses' },
  { element: 'Physical movement', function: 'Punctuation' },
  { element: 'Distributed imagery', function: 'Semantic pressure' },
  { element: 'Central void', function: 'Latent space' },
  { element: 'Complete object', function: 'Machine sentence' },
] as const;

export const machineSentencesStates: {
  id: AuthoredStateId;
  title: string;
  physical: string;
  tone: string;
}[] = [
  {
    id: 'column',
    title: 'Column',
    physical: 'Screens align into dense vertical or cubic coherence',
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

export const residencyTimelineMonths = [
  {
    id: 'month-1',
    month: 'Month 1',
    title: 'Vocabulary',
    items: [
      'Screen-clause maquettes',
      'Motion vocabulary',
      'Enclosure tests',
      'Display-ratio studies',
      'Studio layout',
      'Public introduction',
    ],
  },
  {
    id: 'month-2',
    month: 'Month 2',
    title: 'Anatomy',
    items: [
      'Frame and base fragments',
      'Pivot and joint studies',
      'Cable routing',
      'Electronics architecture',
      'Sound tests',
      'Inactive-state evaluation',
    ],
  },
  {
    id: 'month-3',
    month: 'Month 3',
    title: 'Movement',
    items: [
      'Full-scale modular armature',
      'Deterministic control',
      'Distributed screen surface',
      'Kinetic choreography',
      'Failure and recovery states',
    ],
  },
  {
    id: 'month-4',
    month: 'Month 4',
    title: 'Public Testing',
    items: [
      'Second Sundays participation',
      'Visitor-input experiments',
      'Accessibility testing',
      'Privacy decisions',
      'Rule revision',
      'Observation without biometric retention',
    ],
  },
  {
    id: 'month-5',
    month: 'Month 5',
    title: 'Assembly',
    items: [
      'Resolved Machine Sentence No. 1 prototype',
      'Smaller grammar sculptures',
      'Final studio installation',
      'Documentation',
      'Public workshop',
      'Next-stage exhibition plan',
    ],
  },
] as const;

export const studioPlanZones = [
  { id: 'sculpture', label: 'Central full-scale sculpture', x: 35, y: 26, w: 28, h: 34 },
  { id: 'diagrams', label: 'Wall-mounted diagrams', x: 4, y: 8, w: 22, h: 12 },
  { id: 'workbench', label: 'Workbench', x: 68, y: 16, w: 26, h: 16 },
  { id: 'maquettes', label: 'Maquette shelves', x: 68, y: 36, w: 18, h: 12 },
  { id: 'archive', label: 'Material & failed-part archive', x: 4, y: 48, w: 22, h: 14 },
  { id: 'electronics', label: 'Electronics station', x: 72, y: 54, w: 22, h: 14 },
  { id: 'circulation', label: 'Safe circulation', x: 28, y: 68, w: 36, h: 12 },
  { id: 'rest', label: 'Inactive condition / sightline', x: 38, y: 8, w: 24, h: 10 },
] as const;

export const studioPlanDisclaimer =
  'Conceptual studio plan based on published approximate dimensions. Final assignment, access, and conditions unverified.';

export const secondSundaysChapters = [
  {
    id: 'vocabulary',
    number: '01',
    title: 'Vocabulary',
    encounter: 'Small screen-clause maquettes, motion studies, and enclosure fragments.',
    mayChange: 'Which states read as legible vocabulary; which maquettes advance.',
    cannotChange: 'Authored state names and safety limits already fixed as grammar seeds.',
    discarded: 'Casual visitor comments that are not transcribed into rule notes.',
    feedbackRule:
      'Feedback sharpens which clauses are built next — not how a generative skin looks.',
  },
  {
    id: 'anatomy',
    number: '02',
    title: 'Anatomy',
    encounter: 'Frame fragments, joints, housings, cable diagrams, and failed parts on shelves.',
    mayChange: 'Joint details, cable routing, housing proportions after observation.',
    cannotChange: 'Requirement that the object remain sculpture while inactive.',
    discarded: 'Photos of visitors; biometric-like inferences from gaze or proximity.',
    feedbackRule: 'Feedback revises fabrication priorities, not a claim of machine empathy.',
  },
  {
    id: 'movement',
    number: '03',
    title: 'Movement',
    encounter: 'Constrained kinetic tests, failure and recovery, temporal choreography.',
    mayChange: 'Soft limits, recovery paths, tempo between reflex and rest.',
    cannotChange: 'No unrestricted AI motor coordinates; finite authored states only.',
    discarded: 'Ephemeral motion telemetry not needed for artist rule revision.',
    feedbackRule: 'Failures stay public process — feedback tightens constraints.',
  },
  {
    id: 'collective',
    number: '04',
    title: 'Collective Sentence',
    encounter: 'Optional visitor language input under authored participation rules.',
    mayChange: 'Input prompts, discard timers, accessible typed path design.',
    cannotChange: 'No biometric retention; no claim of understanding true intent.',
    discarded: 'Visitor utterances and temporary transcriptions after scoring.',
    feedbackRule: 'Feedback changes artistic rules and vocabulary, not output styling alone.',
  },
  {
    id: 'rest',
    number: '05',
    title: 'Rest State',
    encounter: 'Powered-off posture, documentation station, workshop announcement.',
    mayChange: 'Documentation framing and workshop agenda.',
    cannotChange: 'Inactive sculpture remains the primary public object.',
    discarded: 'Any leftover session buffers from prior collective chapters.',
    feedbackRule: 'Rest proves the work is sculpture when the system stops.',
  },
] as const;

export const temporalChoreographyBeats = [
  {
    number: '01',
    title: 'Reflex',
    body: '1–3 seconds. Immediate acknowledgment: a small orientation shift or low pulse. The sculpture registers that language has entered without finishing interpretation.',
  },
  {
    number: '02',
    title: 'Metabolization',
    body: '20–45 seconds. Modules slowly reconfigure within authored states; distributed surfaces update. Inference settles into a new silhouette.',
  },
  {
    number: '03',
    title: 'Rest',
    body: '30–90 seconds. Movement stops. Visitors read the result as an object. The system returns toward inactive posture or waits for the next sentence.',
  },
] as const;

export const publicEncounterModes = [
  {
    id: 'observation',
    title: 'Observation',
    body: 'Visitors watch unfinished anatomy, software failures, and revised rules through the glass without leaving persistent traces.',
  },
  {
    id: 'participation',
    title: 'Participation',
    body: 'Optional language input under artist-authored constraints. Participation is experimental and reversible.',
  },
  {
    id: 'retained',
    title: 'Retained system state',
    body: 'Only author-chosen grammar rules and typed configuration revisions persist between public chapters.',
  },
  {
    id: 'discarded',
    title: 'Immediately discarded',
    body: 'Visitor utterances and temporary transcriptions are discarded after scoring. No personal identity profiles are retained.',
  },
] as const;

export const fabricationChecklist = [
  'Screen-clause maquette with housing surrogate',
  'Aluminum or steel joint sample and cable routing specimen',
  'Deterministic controller safety tests (soft limits, e-stop path)',
  'Sound and rest-state documentation',
  'Accessibility review of typed input path',
  'Privacy review: no biometric retention; ephemeral transcription only when enabled',
] as const;

export const facilitiesRelationship = [
  {
    facility: '3D printing',
    use: 'Custom housings, joint prototypes, enclosure fragments for screen clauses (scheduling contingent)',
  },
  {
    facility: 'Laser cutting',
    use: 'Frame templates, diagram plates, fixture jigs for modular assembly (scheduling contingent)',
  },
  {
    facility: 'Large-format printing',
    use: 'Wall diagrams of grammar, studio annotations, public-facing process prints',
  },
  {
    facility: 'Tech Lab',
    use: 'Engineering consultation for safe kinetics — in service of sculpture, not the artwork itself; access depends on program rules',
  },
] as const;

export const machineSentencesPrivacy = [
  'No biometric identity retention',
  'Voice used only for ephemeral transcription when enabled',
  'Text inputs not stored as personal profiles',
  'Offline and mock fallback mode for digital studies',
  'Model does not claim to understand emotion, consciousness, or true intent',
  'Non-audio typed interaction path required',
  'No autoplay sound; manual stop and inactive fallback',
  'Inactive sculpture remains the primary public object when the system rests',
] as const;

export const machineSentencesScope = [
  {
    level: 'Minimum',
    note: 'Family of small screen-clause studies + diagrams + one reduced-scale kinetic armature; public open-studio chapters intact',
  },
  {
    level: 'Preferred',
    note: 'Full-scale modular Machine Sentence No. 1 prototype with authored states, smaller grammar sculptures, Second Sundays chapters, and workshop',
  },
  {
    level: 'Expanded',
    note: 'Additional grammar sculptures and refined documentation for post-residency exhibition — only if fabrication capacity and independent resources allow; not a submission dependency',
  },
] as const;

export const machineSentencesRisks = [
  {
    risk: 'Deadline / portal conflict',
    mitigation:
      'Artist-supplied July 17 date stored with conflicting-public-information flag; manual verification before submission; no countdown',
  },
  {
    risk: 'Studio assignment unknown',
    mitigation:
      'Conceptual 20×11 plan labeled unverified; proposal argues process, not a claimed assigned room',
  },
  {
    risk: 'Unrestricted AI motor behavior',
    mitigation: 'Finite authored states; deterministic local controller; soft limits and e-stop path',
  },
  {
    risk: 'Read as software demo',
    mitigation:
      'Slow metabolization + rest; glass studio shows incomplete anatomy; inactive sculpture remains primary object',
  },
  {
    risk: 'Privacy overreach',
    mitigation: 'No biometric retention; ephemeral transcription; discard after scoring',
  },
  {
    risk: 'Facilities unavailable when needed',
    mitigation:
      'Scope ladder; facilities described as contingent; small studies proceed without specialized tools',
  },
  {
    risk: 'Housing / travel for non-NYC artist',
    mitigation: 'Plan kept private and off the public page; form-only logistics',
  },
] as const;

export const machineSentencesBitm = {
  heading: 'Relationship to Born into the Machine',
  body: `Born into the Machine is the long-form research project on intelligence as infrastructure — attention, adaptation tax, and agency. Machine Sentences is a model organism of that research: physical units that let machine interpretation take temporary form without claiming understanding. This residency dossier foregrounds studio necessity and sculptural accumulation; the research hub holds the wider inquiry.`,
  href: '/research/born-into-the-machine',
} as const;

export const machineSentencesModalLink = {
  heading: 'Parallel development context',
  body: `A related technical commission dossier and digital movement study live under Modal × Gray Area 2026 / Machine Sentence No. 1. This Pioneer Works application does not depend on Modal deployment. The residency proposal foregrounds physical production and five-month studio necessity; the Modal page remains a parallel development context.`,
  hubHref: pioneerWorksMeta.modalRoute,
  proposalHref: pioneerWorksMeta.modalProposalRoute,
} as const;

export const machineSentencesRelated: GrantRelatedWork[] = pioneerWorksWorkSamples
  .filter((s): s is typeof s & { slug: string; image: string } => Boolean(s.slug && s.image))
  .map((s) => ({
    slug: s.slug,
    title: s.title,
    year: s.year,
    image: s.image,
    blurb: s.context,
  }));

export const machineSentencesSeo = {
  title: 'MACHINE SENTENCES — Pioneer Works 2027 | Moises Sanabria',
  description:
    'Residency proposal for Pioneer Works 2027: MACHINE SENTENCES — a five-month studio investigation in which human language acquires physical posture.',
} as const;

export const visitorJourneySteps = [
  'ENTER',
  'SEE UNFINISHED BODY',
  'OFFER LANGUAGE (OPTIONAL)',
  'WITNESS STATE CHANGE',
  'REST / READ THE OBJECT',
] as const;

/** Proposal-page work-sample order: central study first */
export const proposalWorkSampleOrder = [
  'machine-sentence-no-1',
  'baby-agi',
  'digital-divinities',
  'doomscrolling-treadmill',
  'simulation-faith',
] as const;
