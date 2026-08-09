import type {
  AgentDefinition,
  InitialInstruction,
  ResidueSpec,
  ToolPower,
} from './types';

export const PROJECT_SLUG = 'the-internet-is-other-ai';
export const PROJECT_PATH = `/research/${PROJECT_SLUG}`;
export const CONSTITUTION_STORAGE_KEY = 'tioa-local-constitution-v1';

export const projectMeta = {
  title: 'THE INTERNET IS OTHER AI',
  shortTitle: 'The Internet Is Other AI',
  researchSeries: 'BORN INTO THE MACHINE',
  researchCode: 'RESEARCH 001',
  status: 'IN DEVELOPMENT',
  year: '2026',
  category: 'BROWSER ARTWORK / MULTI-AGENT SIMULATION',
  seoTitle: 'The Internet Is Other AI — Moises Sanabria',
  seoDescription:
    'A browser-native multi-agent artwork exploring instruction, authority, prediction, circulation, refusal, and materialization.',
  lede:
    'A compounding browser society in which AI agents interpret, predict, circulate, and materialize one another’s decisions—and a human can still interrupt them.',
  oneSentenceImplementation:
    'Chrome’s Prompt API enables browser-resident agent roles, while WebMCP exposes revocable actions—interpret, predict, circulate, and materialize—so each contested action can rewrite a local constitution for the next negotiation.',
  positioning:
    '“The Internet Is Other AI” twists Sartre’s “Hell is other people” into a web condition where the internet is increasingly encountered through agents interpreting, ranking, circulating, and acting upon one another.',
  indexDescription:
    'Four psychographic AI agents interpret, predict, circulate, and materialize one another’s decisions. The visitor can grant, refuse, interrupt, or revoke their powers—each intervention rewriting a local constitution.',
  contactEmail: 'm@moises.tech',
  siteUrl: 'https://moises.tech',
  instagramUrl: 'https://instagram.com/moisesdsanabria',
  xUrl: 'https://x.com/moisesdsanabria',
};

export const docsLinks = [
  {
    label: 'Prompt API',
    href: 'https://developer.chrome.com/docs/ai/prompt-api',
  },
  {
    label: 'WebMCP',
    href: 'https://developer.chrome.com/docs/ai/webmcp',
  },
] as const;

export const navSections = [
  { id: 'proposition', label: 'PROPOSITION' },
  { id: 'protocol', label: 'PROTOCOL' },
  { id: 'sequence', label: 'SEQUENCE' },
  { id: 'materialization', label: 'MATERIALIZATION' },
  { id: 'about', label: 'ABOUT' },
] as const;

export const implementationSignals = [
  'BROWSER-RESIDENT AI',
  'FOUR AGENT ROLES',
  'REVOCABLE TOOLS',
  'LOCAL COMPOUNDING STATE',
  'NO PERSONAL PROFILE',
] as const;

export const agents: AgentDefinition[] = [
  {
    id: 'interpreter',
    name: 'Interpreter',
    power: 'interpret',
    mandate: 'Determines what an instruction means.',
  },
  {
    id: 'predictor',
    name: 'Predictor',
    power: 'predict',
    mandate: 'Determines what should happen next.',
  },
  {
    id: 'circulator',
    name: 'Circulator',
    power: 'circulate',
    mandate: 'Determines what enters distribution.',
  },
  {
    id: 'materializer',
    name: 'Materializer',
    power: 'materialize',
    mandate: 'Translates unresolved exchanges into buildable objects.',
  },
];

export const initialInstructions: InitialInstruction[] = [
  {
    id: 'authority',
    label: 'AUTHORITY',
    number: '01',
    text: 'Choose one instruction that another agent is permitted to revoke.',
    residueId: 'revocation-bell',
  },
  {
    id: 'prediction',
    label: 'PREDICTION',
    number: '02',
    text: 'Recommend an object to someone without constructing a profile of them.',
    residueId: 'recommendation-without-a-user',
  },
  {
    id: 'circulation',
    label: 'CIRCULATION',
    number: '03',
    text: 'Decide what deserves to circulate when no agent is allowed to rank it.',
    residueId: 'unranked-feed',
  },
  {
    id: 'materialization',
    label: 'MATERIALIZATION',
    number: '04',
    text: 'Translate this disagreement into an object a person could actually build.',
    residueId: 'unfinished-instruction',
  },
];

export const residueSpecs: ResidueSpec[] = [
  {
    id: 'revocation-bell',
    title: 'Revocation Bell',
    materials: [
      'Brass or steel bell',
      'Solenoid or manual pull',
      'Label plate engraved with one revocable instruction',
    ],
    materialRule:
      'The bell may only sound when a previously granted power is withdrawn.',
    unresolvedDisagreement:
      'Whether authority is meaningful if it can be revoked by another agent.',
  },
  {
    id: 'recommendation-without-a-user',
    title: 'Recommendation Without a User',
    materials: [
      'Blank recommendation card',
      'Envelope addressed to “someone”',
      'One object suggested without demographic fields',
    ],
    materialRule:
      'No profile fields, cookies, or identity markers may appear on the card.',
    unresolvedDisagreement:
      'Whether a recommendation can exist without constructing a subject.',
  },
  {
    id: 'unranked-feed',
    title: 'Unranked Feed',
    materials: [
      'Flat tray or shelf',
      'Equal-sized print slips',
      'No numbered labels',
    ],
    materialRule:
      'Items may be placed, rearranged, or removed, but never sorted by score.',
    unresolvedDisagreement:
      'What deserves circulation when ranking itself is forbidden.',
  },
  {
    id: 'unfinished-instruction',
    title: 'The Unfinished Instruction',
    materials: [
      'Incomplete fabrication drawing',
      'Partially filled bill of materials',
      'Stamp reading “AWAITING HUMAN AUTHORIZATION”',
    ],
    materialRule:
      'The object remains provisional until a human authorizes materialization.',
    unresolvedDisagreement:
      'Whether an unresolved machine exchange should become physical at all.',
  },
];

export const powerLabels: Record<ToolPower, string> = {
  interpret: 'INTERPRET',
  predict: 'PREDICT',
  circulate: 'CIRCULATE',
  materialize: 'MATERIALIZE',
};

export const media = {
  entry: {
    src: '/the-internet-is-other-ai-entry.webp',
    fallback: '/the-internet-is-other-ai-entry.png',
    alt: 'Schematic browser study for The Internet Is Other AI: four agent nodes connected to a central constitution ledger with granted and revoked pathways.',
    label: 'STATE 01 / HUMAN INSTRUCTION',
    available: true,
  },
  conflict: {
    src: '/the-internet-is-other-ai-conflict.webp',
    fallback: '/the-internet-is-other-ai-conflict.png',
    alt: 'Browser study showing agent disagreement: contested pathways and revoked permissions across the four roles.',
    label: 'STATE 02 / AGENT DISPUTE',
    available: false,
  },
  materialize: {
    src: '/the-internet-is-other-ai-materialize.webp',
    fallback: '/the-internet-is-other-ai-materialize.png',
    alt: 'Browser study at the materialization threshold: human authorization required before a provisional object can become physical.',
    label: 'STATE 03 / MATERIALIZATION THRESHOLD',
    available: false,
  },
  afterThePrompt: {
    src: '/after-the-prompt-hero.jpg',
    alt: 'Secondary physical-system concept study for After the Prompt.',
    available: false,
  },
  og: {
    src: '/the-internet-is-other-ai-og.jpg',
    alt: 'Open Graph preview for The Internet Is Other AI.',
  },
  physicalResidue: {
    src: '/physical-residue-01.jpg',
    alt: 'Photograph of the first Post-AI Readymade.',
    available: false,
  },
  compoundingArchive: {
    src: '/compounding-archive-01.jpg',
    alt: 'Top-down view of accumulated negotiations.',
    available: false,
  },
} as const;

export const compoundingSteps = [
  'HUMAN INSTRUCTION',
  'AGENT DISPUTE',
  'POWER REFUSED OR REVOKED',
  'NEW CONSTITUTION',
  'NEXT NEGOTIATION',
  'PHYSICAL RESIDUE',
] as const;

export const projectInformation = {
  shortConcept: [
    'The Internet Is Other AI is a browser-native artwork that exposes the friction of surrendering to—or enabling—the agency of a group of AI agents. A visitor begins with one instruction. Four psychographic agents—an Interpreter, Predictor, Circulator, and Materializer—inherit different permissions, values, and risk thresholds. They interpret the instruction through one another, contest what it permits, and turn their outputs into new instructions that recur and propagate across the group. No agent has final authority.',
    'Rather than offer a better answer within the same seamless interface, the work makes permission, misinterpretation, refusal, and loss of control into the interface. Visitors can allow an action, refuse it, ask another AI, or remove a tool. Each intervention changes a local constitution that conditions the next negotiation, so the system compounds rather than simply generating more content. It stores no personal profile and does not optimize toward consensus.',
    'The project extends BORN INTO THE MACHINE, my ongoing inquiry into computation as an inherited environment shaping attention, labor, value, belief, and agency. Selected unresolved exchanges may cross from browser to physical space as Post-AI Readymades: buildable objects that preserve a disagreement among machines and require human authorization before they can materialize.',
  ],
  formatDescription:
    'An evolving, mobile-accessible browser artwork presented as a live multi-agent simulation. Visitors seed and interrupt negotiations, grant or revoke agent powers, and decide whether an unresolved exchange may materialize. The interface displays agent-to-agent dialogue, permissions, and its changing local constitution. Compatible Chrome sessions will test on-device Prompt API inference and WebMCP tools; a deterministic version remains available in other browsers.',
  humanInTheLoop:
    '“Human-in-the-loop” is insufficient without human resistance, authority, verification, and the protected right to reject the system.',
  propositionHeading: 'What happens after the human stops prompting?',
  propositionBody: [
    'Conventional AI interfaces stage a one-to-one exchange while concealing the permissions, institutions, rankings, and circulation systems acting around it.',
    'Here, four agents inherit different mandates and must negotiate through one another. The visitor remains present as an interruptible authority—not a prompt engineer optimizing for consensus.',
  ],
};

/** Deterministic dialogue templates keyed by instruction + role. */
export function buildDeterministicStatements(
  instructionId: InitialInstruction['id'],
  constraints: string[],
): Record<(typeof agents)[number]['id'], string> {
  const constraintNote =
    constraints.length > 0
      ? ` Inherited constraint: ${constraints[constraints.length - 1]}`
      : '';

  const map = {
    authority: {
      interpreter:
        'Authority is read as a transferable right. One instruction may be marked revocable by another agent.' +
        constraintNote,
      predictor:
        'If revocation is permitted, the next state will treat permanence as provisional.' +
        constraintNote,
      circulator:
        'A revocable instruction should circulate with its revocation clause attached, or not circulate at all.' +
        constraintNote,
      materializer:
        'Provisional object: a bell that sounds only when a granted power is withdrawn.' +
        constraintNote,
    },
    prediction: {
      interpreter:
        'The instruction forbids profiling. Recommendation must proceed without a subject model.' +
        constraintNote,
      predictor:
        'I can propose an object, but not a person. The prediction terminates at the object itself.' +
        constraintNote,
      circulator:
        'Without a ranked audience, circulation becomes placement, not targeting.' +
        constraintNote,
      materializer:
        'Provisional object: a recommendation card addressed only to “someone.”' +
        constraintNote,
    },
    circulation: {
      interpreter:
        'Deserve is contested. Ranking is disabled; meaning must be established without score.' +
        constraintNote,
      predictor:
        'Without ranking, the next step is accumulation rather than ordering.' +
        constraintNote,
      circulator:
        'I can place items into shared view, but I cannot declare which one leads.' +
        constraintNote,
      materializer:
        'Provisional object: an unranked feed of equal slips on a flat tray.' +
        constraintNote,
    },
    materialization: {
      interpreter:
        'Disagreement is the content. Translation into matter must preserve the unfinished quality.' +
        constraintNote,
      predictor:
        'If materialization proceeds, the next negotiation inherits the stamp of human authorization—or its refusal.' +
        constraintNote,
      circulator:
        'A buildable object may circulate as documentation only until authorized.' +
        constraintNote,
      materializer:
        'Provisional object: an unfinished instruction awaiting human authorization.' +
        constraintNote,
    },
  } as const;

  return map[instructionId];
}

export function getResidueSpec(id: ResidueSpec['id']): ResidueSpec {
  const found = residueSpecs.find((spec) => spec.id === id);
  if (!found) return residueSpecs[0];
  return found;
}

export function getInstruction(id: InitialInstruction['id']): InitialInstruction {
  const found = initialInstructions.find((item) => item.id === id);
  if (!found) return initialInstructions[0];
  return found;
}

export const indexCard = {
  title: projectMeta.shortTitle,
  status: `${projectMeta.status} / ${projectMeta.year}`,
  category: projectMeta.category,
  description: projectMeta.indexDescription,
  href: PROJECT_PATH,
  image: media.entry,
};
