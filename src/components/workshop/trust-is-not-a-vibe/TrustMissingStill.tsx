import {
  TRUST_PLACEHOLDERS,
  type TrustPlaceholderKey,
  type TrustPlaceholderStatus,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

export const TRUST_MISSING_HATCH =
  'bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(245,158,11,0.09)_10px,rgba(245,158,11,0.09)_20px)] dark:bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,rgba(245,158,11,0.14)_10px,rgba(245,158,11,0.14)_20px)]'

export const TRUST_STATUS_LABEL = {
  pending: 'Missing still',
  css: 'Interface exists · missing still',
  svg: 'SVG in place',
  ready: 'Ready',
} as const

export function trustStillIsMissing(status: TrustPlaceholderStatus) {
  return status === 'pending' || status === 'css'
}

export function TrustMissingStillBadge({
  status,
  filename,
  className,
}: {
  status: TrustPlaceholderStatus
  filename?: string
  className?: string
}) {
  const missing = trustStillIsMissing(status)
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
        missing
          ? 'border-amber-500/70 bg-amber-50 text-amber-950 dark:border-amber-400/60 dark:bg-amber-950/80 dark:text-amber-50'
          : 'border-stone-300 bg-white text-stone-600 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-300',
        className
      )}
    >
      <span className="truncate">
        {filename ? `${filename} · ` : ''}
        {TRUST_STATUS_LABEL[status]}
      </span>
    </span>
  )
}

export function TrustMissingStillNote({
  asset,
  className,
}: {
  asset: TrustPlaceholderKey
  className?: string
}) {
  const item = TRUST_PLACEHOLDERS[asset]
  if (!trustStillIsMissing(item.status)) return null
  return (
    <p className={cn('flex flex-wrap items-center gap-2 text-[11px] leading-relaxed', className)}>
      <TrustMissingStillBadge status={item.status} filename={item.surfaceFilename} />
      <span className={trustStillIsMissing(item.status) ? 'text-amber-800 dark:text-amber-200' : 'text-stone-500'}>
        {item.depiction}
      </span>
    </p>
  )
}
