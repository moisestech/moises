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

  return (
    <figure className={cn(opp.card, className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden bg-stone-100 dark:bg-stone-800',
          ASPECT[plate.aspect],
        )}
      >
        {plate.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={plate.src} alt={plate.alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col justify-between p-4 sm:p-5">
            <p className={opp.label}>{plate.label}</p>
            <p className={cn(opp.subtle, 'max-w-md')}>
              Placeholder. Generate from the prompt in{' '}
              <code className={opp.code}>aep-workshop-visuals.ts</code>, upload to Cloudinary, then set{' '}
              <code className={opp.code}>src</code>.
            </p>
          </div>
        )}
      </div>
      <figcaption className={cn(opp.illustrationCaption, opp.subtle)}>{plate.alt}</figcaption>
    </figure>
  )
}
