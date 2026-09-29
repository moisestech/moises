import {
  Archive,
  ArrowRightLeft,
  Columns,
  Eye,
  GitBranch,
  Layers,
  Scale,
  Share2,
  type LucideIcon,
} from 'lucide-react'
import type { LabChapterId } from '@/content/workshops/artist-infrastructure-lab'

export type LabVisual = {
  icon: LucideIcon
  /** Spine mark and path node, kept inside paper, charcoal, teal, and orange. */
  tick: string
  node: string
  active: string
}

export const LAB_VISUAL: Record<LabChapterId, LabVisual> = {
  observe: {
    icon: Eye,
    tick: 'bg-[#0f5f5c]',
    node: 'border-[#0f5f5c] bg-[#0f5f5c] text-[#f3eee6]',
    active: 'bg-[#0f5f5c] text-[#f3eee6]',
  },
  structure: {
    icon: Columns,
    tick: 'bg-[#7eaea9]',
    node: 'border-[#0f5f5c] bg-[#e5f2f1] text-[#0f5f5c]',
    active: 'bg-[#e5f2f1] text-[#0f5f5c]',
  },
  automate: {
    icon: GitBranch,
    tick: 'bg-[#1c1916]',
    node: 'border-[#1c1916] bg-[#1c1916] text-[#f3eee6]',
    active: 'bg-[#1c1916] text-[#f3eee6]',
  },
  judge: {
    icon: Scale,
    tick: 'bg-[#c4511a]',
    node: 'border-[#1c1916] bg-[#1c1916] text-[#f3eee6]',
    active: 'bg-[#1c1916] text-[#f3eee6]',
  },
  relate: {
    icon: Share2,
    tick: 'bg-[#c4511a]',
    node: 'border-[#c4511a] bg-[#c4511a] text-[#f3eee6]',
    active: 'bg-[#c4511a] text-[#f3eee6]',
  },
  publish: {
    icon: Layers,
    tick: 'bg-[#7a3412]',
    node: 'border-[#7a3412] bg-[#7a3412] text-[#f3eee6]',
    active: 'bg-[#7a3412] text-[#f3eee6]',
  },
  preserve: {
    icon: Archive,
    tick: 'bg-transparent border border-[#0f5f5c]',
    node: 'border-[#0f5f5c] bg-[#f3eee6] text-[#0f5f5c]',
    active: 'bg-[#e5f2f1] text-[#0f5f5c]',
  },
  'hand-off': {
    icon: ArrowRightLeft,
    tick: 'bg-transparent border border-[#c4511a]',
    node: 'border-[#c4511a] bg-[#f3eee6] text-[#7a3412]',
    active: 'bg-[#f8efe8] text-[#7a3412]',
  },
}

export const LAB_OVERVIEW_SECTIONS = [
  { id: 'why', label: 'Why' },
  { id: 'path', label: 'Path' },
  { id: 'tools', label: 'Tools' },
  { id: 'instructor', label: 'Instructor' },
  { id: 'codesign', label: 'Co-development' },
] as const
