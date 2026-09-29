export type AepWorkshopPlateId =
  | 'hero-capacity'
  | 'model-vs-harness'
  | 'fail-closed'
  | 'github-inspect'
  | 'allow-ask-deny'
  | 'thin-slice'
  | 'pair-citation'
  | 'pair-review'

export type AepWorkshopPlate = {
  id: AepWorkshopPlateId
  label: string
  alt: string
  aspect: '16/9' | '4/3' | '21/9'
  prompt: string
  /** Landscape plate. Leave null until uploaded. */
  src: string | null
  /** Isolated PNG on alpha. */
  transparentSrc: string | null
  /** 512 square icon on alpha. */
  iconSrc: string | null
}

export const AEP_WORKSHOP_CLOUDINARY_FOLDER = 'dccmiami/workshops/agentic-evidence-pipeline'

export const AEP_WORKSHOP_PLATES: Record<AepWorkshopPlateId, AepWorkshopPlate> = {
  'hero-capacity': {
    id: 'hero-capacity',
    label: 'Plate 01 · hero-capacity',
    alt: 'Conceptual still-life: a typed assessment card in front of a blurred model glow, with a circled unsupported-citation chip and a REVIEW stamp.',
    aspect: '16/9',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'Museum-dossier still-life, stone and cyan. A typed assessment card sits in front of a blurred model glow. A coral unsupported-citation chip is circled. A human stamp reads REVIEW. No product UI chrome, no logos, no readable client names.',
  },
  'model-vs-harness': {
    id: 'model-vs-harness',
    label: 'Plate 02 · model-vs-harness',
    alt: 'Split conceptual diagram: fluent ungrounded model text on the left, a rigid harness with context, tools, permissions, and review on the right.',
    aspect: '16/9',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'Split plate. Left: soft, fluent, ungrounded text (the model). Right: a rigid harness — context box, tool list, permission gate, review pause. Stone paper, one cyan rule. Conceptual diagram, not a screenshot.',
  },
  'fail-closed': {
    id: 'fail-closed',
    label: 'Plate 03 · fail-closed',
    alt: 'A citation arrow misses an evidence stack and hits a rose STOP labeled not in allowlist.',
    aspect: '4/3',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'A citation arrow misses the evidence stack and hits a rose STOP. Caption space: “not in allowlist.” Dry, archival, no mascots.',
  },
  'github-inspect': {
    id: 'github-inspect',
    label: 'Plate 04 · github-inspect',
    alt: 'Overhead of a printed TypeScript page with a small GitHub mark and a finger on policy.ts.',
    aspect: '16/9',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'Overhead of a printed TypeScript page, a small GitHub mark in the corner, a finger on policy.ts. Documentary, not a marketing mock.',
  },
  'allow-ask-deny': {
    id: 'allow-ask-deny',
    label: 'Plate 05 · allow-ask-deny',
    alt: 'Three vertical lanes labeled ALLOW, ASK, and DENY, each holding the same write request.',
    aspect: '16/9',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'Three vertical lanes: emerald ALLOW, amber ASK, rose DENY. Same object in each lane (a write request). Quiet institutional color, no icons from consumer apps.',
  },
  'thin-slice': {
    id: 'thin-slice',
    label: 'Plate 06 · thin-slice',
    alt: 'Six beads on a stone rail labeled Discover, Prototype, Govern, Deploy, Teach, Handoff.',
    aspect: '21/9',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'Six beads on a stone rail: Discover → Prototype → Govern → Deploy → Teach → Handoff. The rail is the method; no office photography.',
  },
  'pair-citation': {
    id: 'pair-citation',
    label: 'Plate 07 · pair-citation',
    alt: 'Before and after: a fluent paragraph with a fake footnote, then the same page with the footnote struck and REVIEW stamped.',
    aspect: '4/3',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'Before/after: fluent paragraph with a fake footnote vs the same page with the footnote struck and REVIEW stamped.',
  },
  'pair-review': {
    id: 'pair-review',
    label: 'Plate 08 · pair-review',
    alt: 'A run timeline that pauses at a human gate, with the next box empty until a person continues.',
    aspect: '4/3',
    src: null,
    transparentSrc: null,
    iconSrc: null,
    prompt:
      'A run timeline that pauses at a human gate. The next box is empty until a person continues.',
  },
}

export function getAepWorkshopPlate(id: AepWorkshopPlateId): AepWorkshopPlate {
  return AEP_WORKSHOP_PLATES[id]
}

/** Jump chips, authority cards, and pair tones — icon + transparent only. See the image brief. */
export type AepWorkshopMark = {
  id: string
  label: string
  iconSrc: string | null
  transparentSrc: string | null
}

export const AEP_WORKSHOP_MARKS: Record<string, AepWorkshopMark> = {
  'nav-capacity': { id: 'nav-capacity', label: 'Capacity', iconSrc: null, transparentSrc: null },
  'nav-harness': { id: 'nav-harness', label: 'Harness', iconSrc: null, transparentSrc: null },
  'nav-authority': { id: 'nav-authority', label: 'Authority', iconSrc: null, transparentSrc: null },
  'nav-code': { id: 'nav-code', label: 'Code', iconSrc: null, transparentSrc: null },
  'nav-process': { id: 'nav-process', label: 'Thin slice', iconSrc: null, transparentSrc: null },
  'nav-repo': { id: 'nav-repo', label: 'Repo', iconSrc: null, transparentSrc: null },
  'mark-allow': { id: 'mark-allow', label: 'Allow', iconSrc: null, transparentSrc: null },
  'mark-ask': { id: 'mark-ask', label: 'Ask', iconSrc: null, transparentSrc: null },
  'mark-deny': { id: 'mark-deny', label: 'Deny', iconSrc: null, transparentSrc: null },
  'chip-deny': { id: 'chip-deny', label: 'Fail closed', iconSrc: null, transparentSrc: null },
  'chip-ask': { id: 'chip-ask', label: 'Needs review', iconSrc: null, transparentSrc: null },
  'chip-inspect': { id: 'chip-inspect', label: 'Scoped', iconSrc: null, transparentSrc: null },
  'chip-allow': { id: 'chip-allow', label: 'Idempotent', iconSrc: null, transparentSrc: null },
}
