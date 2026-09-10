'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import {
  TRUST_IDEA_LANDSCAPE_SIZE,
  type TrustIdeaStill,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { trustIdea, trustPresent } from './trust-tokens'

/**
 * One Idea beat: the sentence plus its landscape still. A custom component
 * so Present pages them together instead of flattening the pair.
 */
export function TrustIdeaScene({
  still,
  children,
  priority = false,
}: {
  still: TrustIdeaStill
  children: ReactNode
  priority?: boolean
}) {
  const { present } = useTrustPresentation()

  return (
    <div data-trust-idea-scene={still.id} className="space-y-4">
      <div className={cn(present ? [trustPresent.body, 'max-w-[34ch]'] : trustIdea.body)}>{children}</div>
      <figure data-trust-idea-still={still.id} className="min-w-0">
        <div className="overflow-hidden rounded-xl bg-stone-50 dark:bg-stone-900">
          <Image
            src={still.src}
            alt={still.alt}
            width={TRUST_IDEA_LANDSCAPE_SIZE.width}
            height={TRUST_IDEA_LANDSCAPE_SIZE.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 52rem"
            className="h-auto w-full min-h-[12rem] max-h-[min(24rem,56dvh)] object-contain object-center"
            priority={priority}
            loading={priority ? undefined : 'eager'}
            unoptimized
          />
        </div>
        <figcaption
          className={cn(
            'mt-2 leading-snug text-stone-600 dark:text-stone-400',
            present ? undefined : 'text-sm'
          )}
        >
          {still.caption}
        </figcaption>
      </figure>
    </div>
  )
}
