import type { ReactNode } from 'react'
import type {
  TrustFailureMarkId,
  TrustLayerId,
  TrustMarkId,
  TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

const MARK_CLASS: Record<TrustMarkId, string> = {
  evidence: 'text-cyan-600 dark:text-cyan-400',
  authority: 'text-amber-600 dark:text-amber-400',
  impact: 'text-rose-600 dark:text-rose-400',
  allow: 'text-emerald-600 dark:text-emerald-400',
  ask: 'text-amber-600 dark:text-amber-400',
  deny: 'text-red-600 dark:text-red-400',
  pm: 'text-stone-700 dark:text-stone-200',
  engineering: 'text-slate-600 dark:text-slate-300',
  design: 'text-violet-600 dark:text-violet-400',
  strategy: 'text-cyan-700 dark:text-cyan-300',
  'wrong-evidence': 'text-cyan-700 dark:text-cyan-300',
  'wrong-path': 'text-slate-600 dark:text-slate-300',
  'wrong-power': 'text-amber-700 dark:text-amber-300',
  'wrong-impact': 'text-rose-700 dark:text-rose-300',
  'wrong-judge': 'text-violet-700 dark:text-violet-300',
}

function Icon({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-7 w-7 shrink-0', className)}
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      {children}
    </svg>
  )
}

export function TrustMark({ id, className }: { id: TrustMarkId; className?: string }) {
  const tone = MARK_CLASS[id]
  switch (id) {
    case 'evidence':
      return (
        <Icon label="Evidence" className={cn(tone, className)}>
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </Icon>
      )
    case 'authority':
      return (
        <Icon label="Authority" className={cn(tone, className)}>
          <rect x="7" y="10" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 10 V8 a4 4 0 0 1 8 0 v2" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'impact':
      return (
        <Icon label="Impact" className={cn(tone, className)}>
          <circle cx="12" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="21" cy="20" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M15 16 L19 18" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'allow':
      return (
        <Icon label="Allow" className={cn(tone, className)}>
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M10 16.5 L14 20.5 L22 11.5" fill="none" stroke="currentColor" strokeWidth="2" />
        </Icon>
      )
    case 'ask':
      return (
        <Icon label="Ask" className={cn(tone, className)}>
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 13 a4 4 0 1 1 5 4 v2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16" cy="22.5" r="1.1" fill="currentColor" />
        </Icon>
      )
    case 'deny':
      return (
        <Icon label="Deny" className={cn(tone, className)}>
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M11 11 L21 21 M21 11 L11 21" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'pm':
      return (
        <Icon label="Product" className={cn(tone, className)}>
          <rect x="6" y="8" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M6 13 H26" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'engineering':
      return (
        <Icon label="Engineering" className={cn(tone, className)}>
          <path d="M10 8 L6 16 L10 24 M22 8 L26 16 L22 24" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'design':
      return (
        <Icon label="Design" className={cn(tone, className)}>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M15 15 L24 24" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'strategy':
      return (
        <Icon label="Strategy" className={cn(tone, className)}>
          <path d="M7 22 L16 8 L25 22 Z" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'wrong-evidence':
      return (
        <Icon label="Wrong evidence" className={cn(tone, className)}>
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M10 22 L22 10" stroke="currentColor" strokeWidth="1.5" />
        </Icon>
      )
    case 'wrong-path':
      return (
        <Icon label="Wrong path" className={cn(tone, className)}>
          <path d="M6 16 H20" stroke="currentColor" strokeWidth="1.75" />
          <path d="M16 12 L20 16 L16 20" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M22 10 L26 22" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'wrong-power':
      return (
        <Icon label="Wrong power" className={cn(tone, className)}>
          <rect x="7" y="10" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 10 V8 a4 4 0 0 1 8 0 v2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 17 H20" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'wrong-impact':
      return (
        <Icon label="Wrong impact" className={cn(tone, className)}>
          <circle cx="12" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M20 12 L24 22 M24 12 L20 22" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    case 'wrong-judge':
      return (
        <Icon label="Wrong judge" className={cn(tone, className)}>
          <rect x="7" y="8" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M11 14 H21 M11 19 H17" stroke="currentColor" strokeWidth="1.75" />
        </Icon>
      )
    default:
      return null
  }
}

export const TRUST_LAYER_MARKS: readonly { id: TrustLayerId; label: string }[] = [
  { id: 'evidence', label: 'Evidence' },
  { id: 'authority', label: 'Authority' },
  { id: 'impact', label: 'Impact' },
]

export const TRUST_VERDICT_MARKS: readonly { id: TrustVerdict; label: string }[] = [
  { id: 'allow', label: 'Allow' },
  { id: 'ask', label: 'Ask' },
  { id: 'deny', label: 'Deny' },
]

export function failureMarkFromVisible(visible: string): TrustFailureMarkId {
  if (visible === 'Wrong path') return 'wrong-path'
  if (visible === 'Wrong power') return 'wrong-power'
  if (visible === 'Wrong impact') return 'wrong-impact'
  if (visible === 'Wrong judge') return 'wrong-judge'
  return 'wrong-evidence'
}
