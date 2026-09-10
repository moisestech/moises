import Image from 'next/image'
import {
  TRUST_IDEA_PORTRAIT_SIZE,
  getTrustIdeaIllustration,
  type TrustIdeaIllustrationId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram/TrustFigure'

/**
 * Constrained portrait for a teaching moment. Hold assets render nothing.
 * Course language stays in the caption, not on the raster.
 */
export function TrustIdeaPortrait({
  id,
  priority = false,
  className,
}: {
  id: TrustIdeaIllustrationId
  priority?: boolean
  className?: string
}) {
  const item = getTrustIdeaIllustration(id)
  if (item.status !== 'ready') return null

  return (
    <div
      data-trust-idea-portrait={item.id}
      data-trust-present-figure
      className={cn('max-w-sm', className)}
    >
      <TrustFigure caption={item.caption}>
        <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem]">
          <Image
            src={item.src}
            alt={item.alt}
            width={TRUST_IDEA_PORTRAIT_SIZE.width}
            height={TRUST_IDEA_PORTRAIT_SIZE.height}
            sizes="(max-width: 390px) 70vw, (max-width: 768px) 40vw, 18rem"
            className="h-auto w-full max-h-[min(28rem,62dvh)] object-contain object-top"
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            unoptimized
          />
        </div>
      </TrustFigure>
    </div>
  )
}
