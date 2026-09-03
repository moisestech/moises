import { TRUST_CHAPTERS, TRUST_TITLE } from './chapters'
import { TRUST_CHAPTER_TIME } from './time-budget'
import {
  TRUST_DECISION_CARD_HREF,
  TRUST_LEARN_BASE,
  TRUST_REHEARSE_HREF,
  TRUST_SURFACES_HREF,
  type TrustChapterId,
  type TrustMarkId,
} from './types'

/**
 * Asset register — pending stills and clips stay labeled as pending.
 * Never present these as finished photography or recorded video.
 * Ready srcs are conceptual teaching illustrations, not product screenshots.
 */

export type TrustPlaceholderStatus =
  | 'pending'
  | 'css'
  | 'svg'
  | 'ready'
  | 'poster-ready'
  | 'recording-ready'
  | 'captioned'
  | 'complete'

export type TrustAssetKind =
  | 'photography'
  | 'generated-still'
  | 'deterministic-diagram'
  | 'interactive'
  | 'printable'
  | 'recorded-video'
  | 'caption-track'
  | 'reused'

export type TrustPlaceholder = {
  id: string
  label: string
  status: TrustPlaceholderStatus
  kind: TrustAssetKind
  required: boolean
  alt: string
  depiction: string
  mark: TrustMarkId
  surfaceFilename?: string
  src?: string
  reusedFrom?: string
  composite?: 'html' | 'svg'
  quote?: {
    text: string
    attribution: string
  }
}

const TRUST_STILL_CDN =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/dccmiami/workshops/agentic-engineering-for-beginners'

export const TRUST_PLACEHOLDERS = {
  labBanner: {
    id: 'lab-banner',
    label: 'Lab wide banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1788447377/dccmiami/workshops/agentic-engineering-for-beginners/trust-is-not-a-vibe-00-course-overview-banner-v2_p52xu6.png',
    surfaceFilename: '00-lab-banner',
    mark: 'ask' as const,
    depiction: 'Ultrawide teaching banner for the Painfully Alone problem. Not a product screenshot.',
    alt: 'Teaching illustration — Agentic Engineering for the Painfully Alone ultrawide banner. Not a product screenshot.',
    quote: {
      text: 'No man is an island, entire of itself; every man is a piece of the continent.',
      attribution: 'John Donne',
    },
  },
  peelOpenHero: {
    id: 'peel-open-hero',
    label: 'Peel-open hero illustration',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/02-Evaluating-AI-Output-Peel-Open-Hero_rawqgs.png`,
    surfaceFilename: '01-before-the-agent-acts',
    mark: 'ask' as const,
    depiction: 'A confident agent card peeling open so the system under the answer can be inspected.',
    alt: 'Teaching illustration — evaluating an AI output by opening the system beneath it. Not a product screenshot.',
    quote: {
      text: 'The map is not the territory.',
      attribution: 'Alfred Korzybski',
    },
  },
  caseAOutput: {
    id: 'case-a-output',
    label: 'Case A output card still',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    composite: 'html' as const,
    src: '/images/teaching/trust-is-not-a-vibe/02-six-week-launch-scenario.webp',
    surfaceFilename: '02-six-week-launch-scenario',
    mark: 'pm' as const,
    depiction:
      'Studio still of The send. October 6, 120 messages, 87%, and auto-removal live on the typed AgentOutputCard — not in the photograph.',
    alt: 'Editorial studio still of a blank recommendation card on a dark work surface. The exact launch figures are in the HTML card, not this photograph. Synthetic teaching fixture, not a live dashboard.',
  },
  caseAEnvironment: {
    id: 'case-a-environment',
    label: 'Evaluate the system',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/04-Evaluation-Lab-Output-Trace-Action-Outcome_mn6ncu.png`,
    surfaceFilename: '03-evidence-authority-impact',
    mark: 'evidence' as const,
    depiction: 'Output, trace, action, and outcome — the answer is only the first layer.',
    alt: 'Teaching illustration — evaluate the system across output, trace, action, and outcome. Not a product screenshot.',
    quote: {
      text: 'The purpose of a system is what it does.',
      attribution: 'Stafford Beer',
    },
  },
  verdictCards: {
    id: 'verdict-cards',
    label: 'Allow / Ask / Deny verdict cards',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/06-Human-Authority-Allow-Ask-Deny_rltkm9.png`,
    surfaceFilename: '04-allow-ask-deny',
    mark: 'allow' as const,
    depiction: 'Human authority threshold: Allow, Ask, or Deny before the system may act.',
    alt: 'Teaching illustration — Allow, Ask, or Deny as a human authority threshold. Not a product screenshot.',
    quote: {
      text: 'Between stimulus and response there is a space. In that space is our power to choose.',
      attribution: 'Viktor E. Frankl',
    },
  },
  roleLensCards: {
    id: 'role-lens-cards',
    label: 'Four role-lens cards',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/03-Cross-Functional-Release-Contract_fseg1f.png`,
    surfaceFilename: '06-role-lens-cards',
    mark: 'design' as const,
    depiction: 'Product, Engineering, Design, and Strategy sharing one release contract.',
    alt: 'Teaching illustration — four seats sharing a release contract. Not a team photograph.',
    quote: {
      text: 'The whole is other than the sum of the parts.',
      attribution: 'Kurt Koffka',
    },
  },
  failureTokens: {
    id: 'failure-tokens',
    label: 'Failure-mode atlas',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/05-Agentic-Failure-Atlas_q4ubym.png`,
    surfaceFilename: '07-failure-tokens',
    mark: 'wrong-evidence' as const,
    depiction: 'Named failure classes: evidence, path, power, impact, and judge.',
    alt: 'Teaching illustration — agentic failure atlas. Not a live incident log.',
    quote: {
      text: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.',
      attribution: 'Richard Feynman',
    },
  },
  controlCards: {
    id: 'control-cards',
    label: 'Six control cards',
    status: 'css' as const,
    kind: 'interactive' as const,
    required: false,
    surfaceFilename: '08-control-cards',
    mark: 'authority' as const,
    depiction: 'Ground, validate, restrict, approve, trace, recover.',
    alt: 'Control cards rendered in the interface. Printed-card still pending.',
  },
  simpleLoop: {
    id: 'simple-loop',
    label: 'Simple agent-loop diagram',
    status: 'ready' as const,
    kind: 'deterministic-diagram' as const,
    required: true,
    src: '/images/teaching/trust-agent-loop-simple.png',
    surfaceFilename: '09-simple-loop',
    mark: 'wrong-path' as const,
    depiction: 'Observe, Decide, Act, Check — then Stop / Ask / Continue.',
    alt: 'Teaching illustration — the agent loop. Evaluate behavior across the loop, not a hidden chain of thought.',
    quote: {
      text: 'A bad system will beat a good person every time.',
      attribution: 'W. Edwards Deming',
    },
  },
  fullHarness: {
    id: 'full-harness',
    label: 'Eval and regression workbench',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/07-Eval-Regression-Workbench_mzy5r3.png`,
    surfaceFilename: '10-full-harness',
    mark: 'engineering' as const,
    depiction: 'Failure to eval to regression — the engineering cycle around the model.',
    alt: 'Teaching illustration — eval and regression workbench. Not a live monitoring console.',
    quote: {
      text: 'In God we trust; all others must bring data.',
      attribution: 'W. Edwards Deming',
    },
  },
  caseBTransfer: {
    id: 'case-b-transfer',
    label: 'Case B transfer card still',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/08-Fabrication-Transfer-Human-Approval_brsexw.png`,
    surfaceFilename: '05-transfer-case',
    mark: 'impact' as const,
    depiction: 'Fabrication transfer with approval before operational handoff.',
    alt: 'Teaching illustration — fabrication transfer case with human approval. Synthetic fixture, not a museum system screenshot.',
    quote: {
      text: 'Trust, but verify.',
      attribution: 'Russian proverb',
    },
  },
  sharedOwnership: {
    id: 'shared-ownership',
    label: 'Shared-ownership closing illustration',
    status: 'ready' as const,
    kind: 'reused' as const,
    required: false,
    reusedFrom: 'roleLensCards',
    src: `${TRUST_STILL_CDN}/03-Cross-Functional-Release-Contract_fseg1f.png`,
    surfaceFilename: '11-shared-ownership',
    mark: 'strategy' as const,
    depiction: 'Four seats around one contract. Not a team photograph.',
    alt: 'Teaching illustration — four seats sharing one release contract. Not a team photograph.',
    quote: {
      text: 'No man is an island, entire of itself.',
      attribution: 'John Donne',
    },
  },
  instructorClips: {
    id: 'instructor-clips',
    label: 'Instructor clips (45–90s per chapter)',
    status: 'poster-ready' as const,
    kind: 'recorded-video' as const,
    required: true,
    surfaceFilename: '12-instructor-clips',
    mark: 'ask' as const,
    depiction:
      'Six chapter clips. Posters are temporary. A chapter is complete only when the mp4 and WebVTT both exist.',
    alt: 'Instructor clip posters are temporary stand-ins. Recorded video and captions are still missing.',
  },
  decisionCard: {
    id: 'decision-card',
    label: 'Participant decision card',
    status: 'css' as const,
    kind: 'printable' as const,
    required: false,
    surfaceFilename: '13-participant-decision-card',
    mark: 'ask' as const,
    depiction: 'Printable card: vote, three layers, one safeguard. Not a scanned worksheet.',
    alt: 'Printable decision card rendered in the interface. PDF export is the print route.',
  },
  catalogCover: {
    id: 'catalog-cover',
    label: 'Workshops catalog cover',
    status: 'ready' as const,
    kind: 'reused' as const,
    required: false,
    reusedFrom: 'peelOpenHero',
    src: `${TRUST_STILL_CDN}/02-Evaluating-AI-Output-Peel-Open-Hero_rawqgs.png`,
    surfaceFilename: '14-workshop-cover',
    mark: 'ask' as const,
    depiction: 'Catalog and FDE teaching tile uses the peel-open hero.',
    alt: 'Teaching illustration — peel-open hero used as the Trust Is Not a Vibe catalog cover. Not a product screenshot.',
  },
  looksRightBanner: {
    id: 'looks-right-banner',
    label: 'Looks Right chapter banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-01-looks-right-banner_pws8dt.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-01-looks-right-banner',
    mark: 'ask' as const,
    depiction: 'Quiet left field for the chapter title. A polished card over a concealed evidence sheet.',
    alt: 'Teaching banner — a recommendation card above a hidden evidence sheet. Left side reserved for the chapter title. Not a product screenshot.',
    quote: {
      text: 'The map is not the territory.',
      attribution: 'Alfred Korzybski',
    },
  },
  fourLensesBanner: {
    id: 'four-lenses-banner',
    label: 'Four Lenses chapter banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-02-four-lenses-banner_mbozm9.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-02-four-lenses-banner',
    mark: 'design' as const,
    depiction: 'Quiet left field for the chapter title. Four viewing frames on one artifact.',
    alt: 'Teaching banner — four colored viewing frames converging on one system artifact. Left side reserved for the chapter title. Not a team photograph.',
    quote: {
      text: 'The whole is other than the sum of the parts.',
      attribution: 'Kurt Koffka',
    },
  },
  seededFailuresBanner: {
    id: 'seeded-failures-banner',
    label: 'Seeded Failures chapter banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-03-seeded-failures-banner_elsewj.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-03-seeded-failures-banner',
    mark: 'wrong-evidence' as const,
    depiction: 'Quiet left field for the chapter title. Failure tokens around a clean card.',
    alt: 'Teaching banner — an output card surrounded by red and amber failure tokens. Left side reserved for the chapter title. Not a live incident log.',
    quote: {
      text: 'The first principle is that you must not fool yourself — and you are the easiest person to fool.',
      attribution: 'Richard Feynman',
    },
  },
  theLoopBanner: {
    id: 'the-loop-banner',
    label: 'The Loop chapter banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-04-the-loop-banner_ilgz92.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-04-the-loop-banner',
    mark: 'wrong-path' as const,
    depiction: 'Quiet left field for the chapter title. A circular path with one interruption.',
    alt: 'Teaching banner — a circular paper path with one visible break. Left side reserved for the chapter title. Not a dashboard.',
    quote: {
      text: 'A bad system will beat a good person every time.',
      attribution: 'W. Edwards Deming',
    },
  },
  theHarnessBanner: {
    id: 'the-harness-banner',
    label: 'The Harness chapter banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-05-the-harness-banner_qctnff.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-05-the-harness-banner',
    mark: 'engineering' as const,
    depiction: 'Quiet left field for the chapter title. A card entering validators and gates.',
    alt: 'Teaching banner — a case card entering paper validators, gates, and recovery controls. Left side reserved for the chapter title. Not a live console.',
    quote: {
      text: 'In God we trust; all others must bring data.',
      attribution: 'W. Edwards Deming',
    },
  },
  transferBanner: {
    id: 'transfer-banner',
    label: 'Transfer chapter banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: true,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-06-transfer-banner_m9nylk.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-06-transfer-banner',
    mark: 'impact' as const,
    depiction: 'Quiet left field for the chapter title. A system moving into a shared toolkit.',
    alt: 'Teaching banner — an operational packet moving from one desk into a shared toolkit. Left side reserved for the chapter title. Synthetic fixture.',
    quote: {
      text: 'Trust, but verify.',
      attribution: 'Russian proverb',
    },
  },
  rehearseBanner: {
    id: 'rehearse-banner',
    label: 'Rehearse banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: false,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-07-rehearse-banner_tzxsrz.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-07-rehearse-banner',
    mark: 'ask' as const,
    depiction: 'Quiet left field for the facilitator title. Clock and notes as physical objects.',
    alt: 'Teaching banner — a facilitation table with a clock and speaker notes. Left side reserved for the title. Not a product screenshot.',
  },
  surfacesBanner: {
    id: 'surfaces-banner',
    label: 'Surfaces banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: false,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-08-surfaces-banner_c8kv1h.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-08-surfaces-banner',
    mark: 'ask' as const,
    depiction: 'Quiet left field for the surfaces title. Printed teaching plates.',
    alt: 'Teaching banner — printed workshop surfaces laid out on a table. Left side reserved for the title. Not a product screenshot.',
  },
  decisionCardBanner: {
    id: 'decision-card-banner',
    label: 'Decision card banner',
    status: 'ready' as const,
    kind: 'generated-still' as const,
    required: false,
    src: `${TRUST_STILL_CDN}/trust-is-not-a-vibe-09-decision-card-banner_lyj8th.webp`,
    surfaceFilename: 'trust-is-not-a-vibe-09-decision-card-banner',
    mark: 'ask' as const,
    depiction: 'Quiet left field for the decision-card title. A printed vote card.',
    alt: 'Teaching banner — a printed Allow / Ask / Deny decision card. Left side reserved for the title. Not a live form.',
  },
} as const satisfies Record<string, TrustPlaceholder>

export type TrustPlaceholderKey = keyof typeof TRUST_PLACEHOLDERS

export const TRUST_CHAPTER_BANNER: Record<TrustChapterId, TrustPlaceholderKey> = {
  'looks-right': 'looksRightBanner',
  'four-lenses': 'fourLensesBanner',
  'seeded-failures': 'seededFailuresBanner',
  'the-loop': 'theLoopBanner',
  'the-harness': 'theHarnessBanner',
  transfer: 'transferBanner',
}

export type TrustBannerCopy = {
  number: string | null
  title: string
  clock: string
}

function trustChapterSlugFromPath(pathname: string | null | undefined): TrustChapterId | null {
  if (!pathname?.startsWith(`${TRUST_LEARN_BASE}/`)) return null
  const slug = pathname.slice(TRUST_LEARN_BASE.length + 1).split('/')[0] as TrustChapterId
  return slug in TRUST_CHAPTER_BANNER ? slug : null
}

export function trustBannerForPath(pathname: string | null | undefined): TrustPlaceholderKey {
  if (pathname === TRUST_SURFACES_HREF) return 'surfacesBanner'
  if (pathname === TRUST_DECISION_CARD_HREF) return 'decisionCardBanner'
  if (pathname === TRUST_REHEARSE_HREF) return 'rehearseBanner'
  const slug = trustChapterSlugFromPath(pathname)
  if (!slug) return 'labBanner'
  return TRUST_CHAPTER_BANNER[slug]
}

export function trustBannerCopyForPath(pathname: string | null | undefined): TrustBannerCopy {
  if (pathname === TRUST_SURFACES_HREF) {
    return { number: null, title: 'Surfaces', clock: 'Facilitator' }
  }
  if (pathname === TRUST_DECISION_CARD_HREF) {
    return { number: null, title: 'Decision card', clock: 'Facilitator' }
  }
  if (pathname === TRUST_REHEARSE_HREF) {
    return { number: null, title: 'Rehearse', clock: '30 min' }
  }
  const slug = trustChapterSlugFromPath(pathname)
  if (!slug) {
    return { number: null, title: TRUST_TITLE, clock: '30 min' }
  }
  const chapter = TRUST_CHAPTERS.find((item) => item.id === slug)
  if (!chapter) {
    return { number: null, title: TRUST_TITLE, clock: '30 min' }
  }
  return {
    number: String(chapter.number).padStart(2, '0'),
    title: chapter.title,
    clock: TRUST_CHAPTER_TIME[chapter.id].clock,
  }
}

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
  return trustPlaceholderEntries().filter(
    ([, item]) => item.required && (item.status === 'pending' || item.status === 'css')
  )
}

export function trustOptionalStills() {
  return trustPlaceholderEntries().filter(
    ([, item]) => !item.required && (item.status === 'pending' || item.status === 'css')
  )
}

export function trustIncompleteRequired() {
  return trustPlaceholderEntries().filter(([, item]) => {
    if (!item.required) return false
    return item.status !== 'ready' && item.status !== 'svg' && item.status !== 'complete'
  })
}
