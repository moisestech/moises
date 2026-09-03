import type { ReactNode } from 'react'
import Image from 'next/image'
import {
  TRUST_PLACEHOLDERS,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark } from './TrustMarks'
import {
  TRUST_MISSING_HATCH,
  TRUST_STATUS_LABEL,
  TrustMissingStillBadge,
  trustStillIsMissing,
} from './TrustMissingStill'

export function TrustPlaceholderFrame({
  asset,
  className,
  children,
  compact,
}: {
  asset: TrustPlaceholderKey
  className?: string
  children?: ReactNode
  compact?: boolean
}) {
  const item: TrustPlaceholder = TRUST_PLACEHOLDERS[asset]
  const missing = trustStillIsMissing(item.status)
  const src = item.src
  const remote = Boolean(src?.startsWith('https://'))
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border',
        missing
          ? 'border-dashed border-amber-400/80 dark:border-amber-500/70'
          : 'border-stone-200 dark:border-stone-700',
        className
      )}
    >
      {children ??
        (src ? (
          <div className={cn('relative bg-stone-100 dark:bg-stone-900', compact ? 'aspect-[16/9]' : 'aspect-[16/10]')}>
            <Image
              src={src}
              alt={item.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 720px"
              unoptimized={remote}
            />
          </div>
        ) : (
          <div
            className={cn(
              'relative flex flex-col items-center justify-center px-4 text-center',
              missing ? TRUST_MISSING_HATCH : 'bg-stone-100/80 dark:bg-stone-900/40',
              compact ? 'aspect-[16/9] py-6' : 'aspect-[16/10] py-8'
            )}
            role="img"
            aria-label={item.alt}
          >
            <TrustMissingStillBadge
              status={item.status}
              filename={item.surfaceFilename}
              className="absolute left-3 top-3"
            />
            <TrustMark id={item.mark} className="h-9 w-9" />
            <p className="mt-3 max-w-sm text-sm font-semibold text-stone-800 dark:text-stone-100">{item.label}</p>
            <p className="mt-1 max-w-sm text-xs leading-relaxed text-stone-600 dark:text-stone-400">{item.depiction}</p>
            <p className="mt-3 text-[10px] uppercase tracking-wide text-amber-800 dark:text-amber-200">
              {TRUST_STATUS_LABEL[item.status]}
            </p>
          </div>
        ))}
      <figcaption
        className={cn(
          'border-t px-4 py-2 text-xs',
          missing
            ? 'border-amber-200 bg-amber-50/80 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100'
            : 'border-stone-200 bg-white/90 text-stone-500 dark:border-stone-700 dark:bg-stone-900/90'
        )}
      >
        {item.quote ? (
          <>
            <p className="text-sm font-medium italic text-stone-800 dark:text-stone-100">“{item.quote.text}”</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-stone-500">— {item.quote.attribution}</p>
          </>
        ) : (
          item.alt
        )}
      </figcaption>
    </figure>
  )
}

