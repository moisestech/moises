import type { TrustMarkId } from './types'

/**
 * Asset register — pending stills and clips stay labeled as pending.
 * Never present these as finished photography or recorded video.
 * Ready srcs are conceptual teaching illustrations, not product screenshots.
 */

export type TrustPlaceholderStatus = 'pending' | 'css' | 'svg' | 'ready'

export type TrustPlaceholder = {
  id: string
  label: string
  status: TrustPlaceholderStatus
  alt: string
  depiction: string
  mark: TrustMarkId
  surfaceFilename?: string
  src?: string
}

const TRUST_STILL_CDN =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/dccmiami/workshops/agentic-engineering-for-beginners'

export const TRUST_PLACEHOLDERS = {
  labBanner: {
    id: 'lab-banner',
    label: 'Lab wide banner',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/01-Agentic-Engineering-Painfully-Alone-Ultrawide-Banner_ke5jde.png`,
    surfaceFilename: '00-lab-banner',
    mark: 'ask' as const,
    depiction: 'Ultrawide teaching banner for the Painfully Alone problem. Not a product screenshot.',
    alt: 'Teaching illustration — Agentic Engineering for the Painfully Alone ultrawide banner. Not a product screenshot.',
  },
  peelOpenHero: {
    id: 'peel-open-hero',
    label: 'Peel-open hero illustration',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/02-Evaluating-AI-Output-Peel-Open-Hero_rawqgs.png`,
    surfaceFilename: '01-before-the-agent-acts',
    mark: 'ask' as const,
    depiction: 'A confident agent card peeling open so the system under the answer can be inspected.',
    alt: 'Teaching illustration — evaluating an AI output by opening the system beneath it. Not a product screenshot.',
  },
  caseAOutput: {
    id: 'case-a-output',
    label: 'Case A output card still',
    status: 'pending' as const,
    surfaceFilename: '02-six-week-launch-scenario',
    mark: 'pm' as const,
    depiction: 'Six-week launch card: October 6, 120 messages, 87%, auto-removal. Synthetic fixture.',
    alt: 'Slot for the six-week program-launch agent output card. Synthetic fixture, not a live dashboard.',
  },
  caseAEnvironment: {
    id: 'case-a-environment',
    label: 'Evaluate the system',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/04-Evaluation-Lab-Output-Trace-Action-Outcome_mn6ncu.png`,
    surfaceFilename: '03-evidence-authority-impact',
    mark: 'evidence' as const,
    depiction: 'Output, trace, action, and outcome — the answer is only the first layer.',
    alt: 'Teaching illustration — evaluate the system across output, trace, action, and outcome. Not a product screenshot.',
  },
  verdictCards: {
    id: 'verdict-cards',
    label: 'Allow / Ask / Deny verdict cards',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/06-Human-Authority-Allow-Ask-Deny_rltkm9.png`,
    surfaceFilename: '04-allow-ask-deny',
    mark: 'allow' as const,
    depiction: 'Human authority threshold: Allow, Ask, or Deny before the system may act.',
    alt: 'Teaching illustration — Allow, Ask, or Deny as a human authority threshold. Not a product screenshot.',
  },
  roleLensCards: {
    id: 'role-lens-cards',
    label: 'Four role-lens cards',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/03-Cross-Functional-Release-Contract_fseg1f.png`,
    surfaceFilename: '06-role-lens-cards',
    mark: 'design' as const,
    depiction: 'Product, Engineering, Design, and Strategy sharing one release contract.',
    alt: 'Teaching illustration — four seats sharing a release contract. Not a team photograph.',
  },
  failureTokens: {
    id: 'failure-tokens',
    label: 'Failure-mode atlas',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/05-Agentic-Failure-Atlas_q4ubym.png`,
    surfaceFilename: '07-failure-tokens',
    mark: 'wrong-evidence' as const,
    depiction: 'Named failure classes: evidence, path, power, impact, and judge.',
    alt: 'Teaching illustration — agentic failure atlas. Not a live incident log.',
  },
  controlCards: {
    id: 'control-cards',
    label: 'Six control cards',
    status: 'css' as const,
    surfaceFilename: '08-control-cards',
    mark: 'authority' as const,
    depiction: 'Ground, validate, restrict, approve, trace, recover.',
    alt: 'Control cards rendered in the interface. Printed-card still pending.',
  },
  simpleLoop: {
    id: 'simple-loop',
    label: 'Simple agent-loop diagram',
    status: 'ready' as const,
    src: '/images/teaching/trust-agent-loop-simple.png',
    surfaceFilename: '09-simple-loop',
    mark: 'wrong-path' as const,
    depiction: 'Observe, Decide, Act, Check — then Stop / Ask / Continue.',
    alt: 'Teaching illustration — the agent loop. Evaluate behavior across the loop, not a hidden chain of thought.',
  },
  fullHarness: {
    id: 'full-harness',
    label: 'Eval and regression workbench',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/07-Eval-Regression-Workbench_mzy5r3.png`,
    surfaceFilename: '10-full-harness',
    mark: 'engineering' as const,
    depiction: 'Failure to eval to regression — the engineering cycle around the model.',
    alt: 'Teaching illustration — eval and regression workbench. Not a live monitoring console.',
  },
  caseBTransfer: {
    id: 'case-b-transfer',
    label: 'Case B transfer card still',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/08-Fabrication-Transfer-Human-Approval_brsexw.png`,
    surfaceFilename: '05-transfer-case',
    mark: 'impact' as const,
    depiction: 'Fabrication transfer with approval before operational handoff.',
    alt: 'Teaching illustration — fabrication transfer case with human approval. Synthetic fixture, not a museum system screenshot.',
  },
  sharedOwnership: {
    id: 'shared-ownership',
    label: 'Shared-ownership closing illustration',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/03-Cross-Functional-Release-Contract_fseg1f.png`,
    surfaceFilename: '11-shared-ownership',
    mark: 'strategy' as const,
    depiction: 'Four seats around one contract. Not a team photograph.',
    alt: 'Teaching illustration — four seats sharing one release contract. Not a team photograph.',
  },
  instructorClips: {
    id: 'instructor-clips',
    label: 'Instructor clips (45–90s per chapter)',
    status: 'pending' as const,
    surfaceFilename: '12-instructor-clips',
    mark: 'ask' as const,
    depiction: 'Six short instructor clips. Captions required when recorded.',
    alt: 'Recording pending. Captions and transcript required when recorded.',
  },
  decisionCard: {
    id: 'decision-card',
    label: 'Participant decision card',
    status: 'css' as const,
    surfaceFilename: '13-participant-decision-card',
    mark: 'ask' as const,
    depiction: 'Printable card: vote, three layers, one safeguard. Not a scanned worksheet.',
    alt: 'Printable decision card rendered in the interface. PDF export is the print route.',
  },
  catalogCover: {
    id: 'catalog-cover',
    label: 'Workshops catalog cover',
    status: 'ready' as const,
    src: `${TRUST_STILL_CDN}/02-Evaluating-AI-Output-Peel-Open-Hero_rawqgs.png`,
    surfaceFilename: '14-workshop-cover',
    mark: 'ask' as const,
    depiction: 'Catalog and FDE teaching tile uses the peel-open hero.',
    alt: 'Teaching illustration — peel-open hero used as the Trust Is Not a Vibe catalog cover. Not a product screenshot.',
  },
} as const satisfies Record<string, TrustPlaceholder>

export type TrustPlaceholderKey = keyof typeof TRUST_PLACEHOLDERS

export const TRUST_DEMO_SURFACES: readonly TrustPlaceholderKey[] = [
  'peelOpenHero',
  'caseAOutput',
  'caseAEnvironment',
  'verdictCards',
  'caseBTransfer',
]

export function trustPlaceholderEntries() {
  return Object.entries(TRUST_PLACEHOLDERS) as [TrustPlaceholderKey, TrustPlaceholder][]
}

export function trustStillsNeeded() {
  return trustPlaceholderEntries().filter(([, item]) => item.status === 'pending' || item.status === 'css')
}
