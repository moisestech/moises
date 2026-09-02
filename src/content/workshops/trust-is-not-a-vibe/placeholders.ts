/**
 * Asset register — pending stills and clips stay labeled as pending.
 * Never present these as finished photography or recorded video.
 */

export const TRUST_PLACEHOLDERS = {
  peelOpenHero: {
    id: 'peel-open-hero',
    label: 'Peel-open hero illustration',
    status: 'pending' as const,
    alt: 'Conceptual placeholder — an agent recommendation peeling open to show evidence, authority, and impact. Not a product screenshot.',
  },
  caseAOutput: {
    id: 'case-a-output',
    label: 'Case A output card still',
    status: 'pending' as const,
    alt: 'Placeholder for the program-launch agent output card. Synthetic fixture, not a live dashboard.',
  },
  caseAEnvironment: {
    id: 'case-a-environment',
    label: 'Case A environment card still',
    status: 'pending' as const,
    alt: 'Placeholder for the hidden environment behind the program-launch recommendation. Synthetic fixture.',
  },
  verdictCards: {
    id: 'verdict-cards',
    label: 'Allow / Ask / Deny verdict cards',
    status: 'css' as const,
    alt: 'Verdict cards rendered in the interface. Illustration still pending.',
  },
  roleLensCards: {
    id: 'role-lens-cards',
    label: 'Four role-lens cards',
    status: 'css' as const,
    alt: 'Role-lens cards rendered in the interface. Printed-card still pending.',
  },
  failureTokens: {
    id: 'failure-tokens',
    label: 'Six failure-mode tokens',
    status: 'css' as const,
    alt: 'Failure tokens rendered in the interface. Physical-token still pending.',
  },
  controlCards: {
    id: 'control-cards',
    label: 'Six control cards',
    status: 'css' as const,
    alt: 'Control cards rendered in the interface. Printed-card still pending.',
  },
  simpleLoop: {
    id: 'simple-loop',
    label: 'Simple agent-loop SVG',
    status: 'svg' as const,
    alt: 'Observe, Decide, Act, Check — simple loop diagram.',
  },
  fullHarness: {
    id: 'full-harness',
    label: 'Full harness SVG',
    status: 'svg' as const,
    alt: 'Harness diagram: context, tools, permissions, approval, traces, evals, recovery.',
  },
  caseBTransfer: {
    id: 'case-b-transfer',
    label: 'Case B transfer card still',
    status: 'pending' as const,
    alt: 'Placeholder for the unseen museum-intake case. Synthetic fixture, not a museum system screenshot.',
  },
  sharedOwnership: {
    id: 'shared-ownership',
    label: 'Shared-ownership closing illustration',
    status: 'pending' as const,
    alt: 'Conceptual placeholder — four seats around one harness. Not a team photograph.',
  },
  instructorClips: {
    id: 'instructor-clips',
    label: 'Instructor clips (45–90s per chapter)',
    status: 'pending' as const,
    alt: 'Recording pending. Captions and transcript required when recorded.',
  },
} as const

export type TrustPlaceholderKey = keyof typeof TRUST_PLACEHOLDERS
