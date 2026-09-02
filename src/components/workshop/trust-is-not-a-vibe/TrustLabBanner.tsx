'use client'

import Image from 'next/image'
import { APPLICATION_BANNER_FRAME } from '@/components/opportunities/OpportunityApplicationBanner'
import { TRUST_PLACEHOLDERS } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_MISSING_HATCH, TrustMissingStillBadge } from './TrustMissingStill'

export function TrustLabBanner() {
  const asset = TRUST_PLACEHOLDERS.labBanner
  const src = asset.src

  if (src) {
    return (
      <div
        data-site-chrome
        className={cn(APPLICATION_BANNER_FRAME, 'overflow-hidden border-b border-stone-200 print:hidden dark:border-stone-800')}
      >
        <Image
          src={src}
          alt={asset.alt}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
          unoptimized
        />
      </div>
    )
  }

  return (
    <div
      data-site-chrome
      className={cn(
        APPLICATION_BANNER_FRAME,
        'overflow-hidden border-b border-dashed border-amber-400/80 print:hidden dark:border-amber-500/60'
      )}
    >
      <div className={cn('relative h-full w-full bg-stone-100 dark:bg-stone-900', TRUST_MISSING_HATCH)}>
        <TrustMissingStillBadge
          status={asset.status}
          filename={asset.surfaceFilename}
          className="absolute left-4 top-3 z-[1]"
        />
      </div>
    </div>
  )
}
