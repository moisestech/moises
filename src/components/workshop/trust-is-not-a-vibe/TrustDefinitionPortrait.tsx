'use client'

import Image from 'next/image'
import {
  TRUST_DEFINITION_PORTRAIT_SIZE,
  getTrustDefinitionIllustration,
  type TrustDefinitionIllustrationId,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram/TrustFigure'

export function TrustDefinitionPortrait({
  id,
  priority = false,
  className,
}: {
  id: TrustDefinitionIllustrationId
  priority?: boolean
  className?: string
}) {
  const item = getTrustDefinitionIllustration(id)

  return (
    <div data-trust-definition-portrait={item.id} className={cn('max-w-sm', className)}>
      <TrustFigure>
        <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem]">
          <Image
            src={item.src}
            alt={item.alt}
            width={TRUST_DEFINITION_PORTRAIT_SIZE.width}
            height={TRUST_DEFINITION_PORTRAIT_SIZE.height}
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
