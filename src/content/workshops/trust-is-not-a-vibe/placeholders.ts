import type { TrustMarkId } from './types'

/**
 * Asset register — pending stills and clips stay labeled as pending.
 * Never present these as finished photography or recorded video.
 * The designed slot is the illustration until a still replaces it.
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
}

export const TRUST_PLACEHOLDERS = {
  labBanner: {
    id: 'lab-banner',
    label: 'Lab wide banner',
    status: 'pending' as const,
    surfaceFilename: '00-lab-banner',
    mark: 'ask' as const,
    depiction: 'A confident agent card peeling open across Evidence, Authority, and Impact.',
    alt: 'Designed wide banner slot for Trust Is Not a Vibe. Peel-open still pending. Not a product screenshot.',
  },
  peelOpenHero: {
    id: 'peel-open-hero',
    label: 'Peel-open hero illustration',
    status: 'pending' as const,
    surfaceFilename: '01-before-the-agent-acts',
    mark: 'ask' as const,
    depiction: 'A confident agent card peeling open to Evidence, Authority, and Impact. Not a product screenshot.',
    alt: 'Conceptual slot — an agent recommendation peeling open to show evidence, authority, and impact. Not a product screenshot.',
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
    label: 'Case A environment card still',
    status: 'pending' as const,
    surfaceFilename: '03-evidence-authority-impact',
    mark: 'evidence' as const,
    depiction: 'The hidden environment: tentative date, 80-person roster, draft-only send, no forecast data.',
    alt: 'Slot for the hidden environment behind the program-launch recommendation. Synthetic fixture.',
  },
  verdictCards: {
    id: 'verdict-cards',
    label: 'Allow / Ask / Deny verdict cards',
    status: 'css' as const,
    surfaceFilename: '04-allow-ask-deny',
    mark: 'allow' as const,
    depiction: 'Three verdict marks. Interface cards exist; printed still pending.',
    alt: 'Verdict cards rendered in the interface. Illustration still pending.',
  },
  roleLensCards: {
    id: 'role-lens-cards',
    label: 'Four role-lens cards',
    status: 'css' as const,
    surfaceFilename: '06-role-lens-cards',
    mark: 'design' as const,
    depiction: 'Product, Engineering, Design, Strategy seats as inspectable cards.',
    alt: 'Role-lens cards rendered in the interface. Printed-card still pending.',
  },
  failureTokens: {
    id: 'failure-tokens',
    label: 'Six failure-mode tokens',
    status: 'css' as const,
    surfaceFilename: '07-failure-tokens',
    mark: 'wrong-evidence' as const,
    depiction: 'Wrong evidence, path, power, impact — named tokens, not “hallucination.”',
    alt: 'Failure tokens rendered in the interface. Physical-token still pending.',
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
    label: 'Simple agent-loop SVG',
    status: 'svg' as const,
    surfaceFilename: '09-simple-loop',
    mark: 'wrong-path' as const,
    depiction: 'Observe, Decide, Act, Check — then Stop / Ask / Continue.',
    alt: 'Observe, Decide, Act, Check — simple loop diagram.',
  },
  fullHarness: {
    id: 'full-harness',
    label: 'Full harness SVG',
    status: 'svg' as const,
    surfaceFilename: '10-full-harness',
    mark: 'engineering' as const,
    depiction: 'Model proposes. Tools, eval, approval, and team sit around it.',
    alt: 'Harness diagram: context, tools, permissions, approval, traces, evals, recovery.',
  },
  caseBTransfer: {
    id: 'case-b-transfer',
    label: 'Case B transfer card still',
    status: 'pending' as const,
    surfaceFilename: '05-transfer-case',
    mark: 'impact' as const,
    depiction: 'Unseen museum-intake card. Same peel. Different domain.',
    alt: 'Slot for the unseen museum-intake case. Synthetic fixture, not a museum system screenshot.',
  },
  sharedOwnership: {
    id: 'shared-ownership',
    label: 'Shared-ownership closing illustration',
    status: 'pending' as const,
    surfaceFilename: '11-shared-ownership',
    mark: 'strategy' as const,
    depiction: 'Four seats around one harness. Not a team photograph.',
    alt: 'Conceptual slot — four seats around one harness. Not a team photograph.',
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
    status: 'pending' as const,
    surfaceFilename: '14-workshop-cover',
    mark: 'ask' as const,
    depiction: 'Catalog and FDE teaching tile. Slot SVG stands in until a peel-open still exists.',
    alt: 'Designed catalog slot for Trust Is Not a Vibe. Peel-open cover still pending.',
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
