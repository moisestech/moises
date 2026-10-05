'use client'

import { useState } from 'react'
import type { AepWorkshopPlate as AepWorkshopPlateData, AepWorkshopPlateId } from '@/content/workshops/aep-workshop-visuals'
import { getAepWorkshopPlate } from '@/content/workshops/aep-workshop-visuals'
import { opp } from '@/components/opportunities/opportunityTheme'
import { cn } from '@/lib/utils'

const ASPECT: Record<AepWorkshopPlateData['aspect'], string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '21/9': 'aspect-[21/9]',
}

export function AepWorkshopPlate({
  id,
  className,
}: {
  id: AepWorkshopPlateId
  className?: string
}) {
  const plate = getAepWorkshopPlate(id)
  const [loaded, setLoaded] = useState(false)
  const waiting = !plate.src || !loaded

  return (
    <figure className={cn(opp.card, className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden bg-stone-100 dark:bg-stone-800',
          ASPECT[plate.aspect],
          waiting && 'animate-pulse motion-reduce:animate-none',
        )}
      >
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4" aria-hidden>
          <span className="h-2 w-1/4 rounded-sm bg-stone-300 dark:bg-stone-600" />
          <span className="h-2 w-1/2 rounded-sm bg-stone-300/80 dark:bg-stone-600/80" />
        </div>
        {plate.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={plate.src}
            alt={plate.alt}
            className={cn(
              'relative z-[1] h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none',
              loaded ? 'opacity-100' : 'opacity-0',
            )}
            onLoad={() => setLoaded(true)}
            ref={(node) => {
              if (node?.complete) setLoaded(true)
            }}
          />
        ) : (
          <div className="relative z-[1] flex h-full flex-col justify-between p-4 sm:p-5">
            <p className={opp.label}>{plate.label}</p>
            <p className={cn(opp.subtle, 'max-w-md')}>
              Placeholder. Prompts and formats are in{' '}
              <code className={opp.code}>docs/workshops/aep-workshop-image-brief.md</code>. Upload to Cloudinary,
              then set <code className={opp.code}>src</code>.
            </p>
          </div>
        )}
      </div>
      <figcaption className={cn(opp.illustrationCaption, opp.subtle)}>{plate.alt}</figcaption>
    </figure>
  )
}
