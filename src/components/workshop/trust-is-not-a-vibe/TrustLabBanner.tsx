'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  TRUST_PLACEHOLDERS,
  type TrustBannerCopy,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_MISSING_HATCH, TrustMissingStillBadge } from './TrustMissingStill'
import { TRUST_PAGE_GUTTER } from './trust-tokens'

const TRUST_BANNER_FRAME =
  'relative h-[200px] w-full overflow-hidden border-b border-stone-200 print:hidden sm:h-[260px] md:h-[320px] lg:h-[380px] dark:border-stone-800'

const TRUST_BANNER_FRAME_CTA =
  'relative h-[280px] w-full overflow-hidden border-b border-stone-200 print:hidden sm:h-[340px] md:h-[400px] lg:h-[460px] dark:border-stone-800'

const TRUST_BANNER_FRAME_COMPACT =
  'relative h-[104px] w-full overflow-hidden border-b border-stone-200 print:hidden dark:border-stone-800'

export type TrustBannerCta = {
  href: string
  label: string
}

function BannerTitle({
  copy,
  tone = 'light',
  cta,
  lede,
  compact,
}: {
  copy: TrustBannerCopy
  tone?: 'light' | 'dark'
  cta?: TrustBannerCta
  lede?: string
  compact?: boolean
}) {
  const onDark = tone === 'light'
  return (
    <div className={cn('relative z-[2] flex h-full w-full items-center', TRUST_PAGE_GUTTER)}>
      <div className={cn('flex max-w-md flex-col', compact ? 'py-2' : 'py-4')}>
        <h1 className="flex flex-col">
          {copy.number ? (
            <span
              className={cn(
                'font-space-mono uppercase tracking-[0.22em]',
                compact ? 'text-[10px]' : 'text-[11px] sm:text-xs',
                onDark ? 'text-white/70' : 'text-stone-500'
              )}
            >
              {copy.number}
            </span>
          ) : null}
          <span
            className={cn(
              'font-semibold leading-tight tracking-tight',
              compact
                ? 'mt-0.5 text-xl sm:text-2xl'
                : 'mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
              onDark ? 'text-white' : 'text-stone-950 dark:text-stone-50'
            )}
          >
            {copy.title}
          </span>
          <span
            className={cn(
              'font-space-mono uppercase tracking-[0.18em]',
              compact ? 'mt-0.5 text-[10px]' : 'mt-2 text-[11px] sm:text-xs',
              onDark ? 'text-white/75' : 'text-stone-500'
            )}
          >
            {copy.clock}
          </span>
        </h1>
        {lede ? (
          <p
            className={cn(
              'mt-3 text-sm leading-relaxed sm:text-base',
              onDark ? 'text-white/80' : 'text-stone-600 dark:text-stone-300'
            )}
          >
            {lede}
          </p>
        ) : null}
        {cta ? (
          <Link
            href={cta.href}
            className={cn(
              'mt-4 inline-flex w-fit items-center rounded-full px-4 py-2 text-sm font-semibold',
              onDark
                ? 'bg-cyan-400 text-stone-950 hover:bg-cyan-300'
                : 'bg-cyan-600 text-white hover:bg-cyan-500'
            )}
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export function TrustLabBanner({
  asset = 'labBanner',
  copy,
  cta,
  lede,
  compact,
}: {
  asset?: TrustPlaceholderKey
  copy: TrustBannerCopy
  cta?: TrustBannerCta
  lede?: string
  compact?: boolean
}) {
  const item = TRUST_PLACEHOLDERS[asset] as TrustPlaceholder
  const src = item.src
  const frame = compact ? TRUST_BANNER_FRAME_COMPACT : cta ? TRUST_BANNER_FRAME_CTA : TRUST_BANNER_FRAME

  if (src) {
    const remote = src.startsWith('https://')
    return (
      <div data-site-chrome className={frame}>
        <Image
          src={src}
          alt={item.alt}
          fill
          priority
          unoptimized={remote}
          className="object-cover object-right"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-stone-950/10 dark:from-black/90 dark:via-black/50 dark:to-black/15"
          aria-hidden
        />
        <div className="relative z-[1] h-full w-full">
          <BannerTitle copy={copy} cta={cta} lede={lede} compact={compact} />
        </div>
      </div>
    )
  }

  return (
    <div
      data-site-chrome
      className={cn(frame, 'border-dashed border-amber-400/80 dark:border-amber-500/60')}
    >
      <div className={cn('relative flex h-full w-full bg-stone-100 dark:bg-stone-900', TRUST_MISSING_HATCH)}>
        <TrustMissingStillBadge
          status={item.status}
          filename={item.surfaceFilename}
          className="absolute right-4 top-3 z-[2]"
        />
        <BannerTitle copy={copy} tone="dark" cta={cta} lede={lede} compact={compact} />
      </div>
    </div>
  )
}

export function TrustBannerQuote({ asset = 'labBanner' }: { asset?: TrustPlaceholderKey }) {
  const quote = (TRUST_PLACEHOLDERS[asset] as TrustPlaceholder).quote
  if (!quote) return null
  return (
    <blockquote
      data-site-chrome
      className="border-b border-stone-200 bg-stone-50 px-6 py-10 text-center dark:border-stone-800 dark:bg-stone-950"
    >
      <p className="mx-auto max-w-3xl text-lg italic leading-relaxed text-stone-800 sm:text-xl dark:text-stone-100">
        “{quote.text}”
      </p>
      <footer className="mt-3 font-space-mono text-xs uppercase tracking-[0.18em] text-stone-500">
        — {quote.attribution}
      </footer>
    </blockquote>
  )
}
