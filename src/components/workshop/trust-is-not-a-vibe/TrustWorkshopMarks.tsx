import type { IconType } from 'react-icons'
import {
  HiOutlineArrowPath,
  HiOutlineChartBar,
  HiOutlineCommandLine,
  HiOutlineExclamationTriangle,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlinePaperAirplane,
  HiOutlineQueueList,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineViewfinderCircle,
} from 'react-icons/hi2'
import { TbCompass } from 'react-icons/tb'
import type { TrustChapterId } from '@/content/workshops/trust-is-not-a-vibe'

export const TRUST_CHAPTER_ICON: Record<TrustChapterId, IconType> = {
  'looks-right': HiOutlineSparkles,
  'four-lenses': HiOutlineViewfinderCircle,
  'seeded-failures': HiOutlineExclamationTriangle,
  'the-loop': HiOutlineArrowPath,
  'the-harness': HiOutlineShieldCheck,
  transfer: HiOutlinePaperAirplane,
}

export const TRUST_VOCAB_ICON: Record<string, IconType> = {
  'vibe-eval': HiOutlineSparkles,
  eval: HiOutlineChartBar,
  benchmark: HiOutlineQueueList,
  'golden-set': HiOutlineStar,
  faithfulness: HiOutlineShieldCheck,
  'llm-as-judge': HiOutlineScale,
  baseline: HiOutlineFlag,
  'whac-a-mole': HiOutlineArrowPath,
}

export const TRUST_WHY_ICON: Record<string, IconType> = {
  thesis: HiOutlineUser,
  proposes: HiOutlineSparkles,
  controls: HiOutlineArrowPath,
  authorizes: HiOutlineViewfinderCircle,
  measure: HiOutlineScale,
  'walk-out': HiOutlineFlag,
  'outcome-01': HiOutlineEye,
  'outcome-02': HiOutlineArrowPath,
  'outcome-03': HiOutlineShieldCheck,
  'outcome-04': HiOutlineViewfinderCircle,
}

export const TRUST_CHAPTER_RING: Record<TrustChapterId, string> = {
  'looks-right': 'group-hover/why:ring-amber-400 hover:ring-amber-400',
  'four-lenses': 'group-hover/why:ring-violet-400 hover:ring-violet-400',
  'seeded-failures': 'group-hover/why:ring-rose-400 hover:ring-rose-400',
  'the-loop': 'group-hover/why:ring-cyan-400 hover:ring-cyan-400',
  'the-harness': 'group-hover/why:ring-teal-400 hover:ring-teal-400',
  transfer: 'group-hover/why:ring-emerald-400 hover:ring-emerald-400',
}

export const TRUST_WHY_KIND: Record<string, TrustChapterId> = {
  thesis: 'the-loop',
  proposes: 'looks-right',
  controls: 'the-loop',
  authorizes: 'four-lenses',
  measure: 'the-harness',
  'walk-out': 'transfer',
  'outcome-01': 'seeded-failures',
  'outcome-02': 'the-loop',
  'outcome-03': 'the-harness',
  'outcome-04': 'four-lenses',
}

export { HiOutlineCommandLine, TbCompass }
