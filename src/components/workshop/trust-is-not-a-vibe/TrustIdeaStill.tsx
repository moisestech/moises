import Image from 'next/image'
import {
  TRUST_PLACEHOLDERS,
  type TrustPlaceholder,
  type TrustPlaceholderKey,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

/**
 * Right-column still for The idea. Concept illustration, not the specimen
 * and not the chapter banner already used as the page hero.
 */
export function TrustIdeaStill({
  asset,
  className,
}: {
  asset: TrustPlaceholderKey
  className?: string
}) {
  const item = TRUST_PLACEHOLDERS[asset] as TrustPlaceholder
  const src = item.src
  if (!src) return null
  const remote = src.startsWith('https://')
  const contain = item.kind === 'deterministic-diagram'

  return (
    <figure className={cn('min-w-0', className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 sm:aspect-[5/6] dark:bg-stone-900">
        <Image
          src={src}
          alt={item.alt}
          fill
          className={contain ? 'object-contain object-center p-3' : 'object-cover object-[70%_center]'}
          sizes="(max-width: 768px) 100vw, 22rem"
          unoptimized={remote}
        />
      </div>
      {item.quote ? (
        <figcaption className="mt-2 text-sm leading-snug text-stone-600 dark:text-stone-400">
          <span className="italic">“{item.quote.text}”</span>
          <span className="mt-0.5 block font-space-mono text-[10px] uppercase tracking-[0.14em] text-stone-500">
            {item.quote.attribution}
          </span>
        </figcaption>
      ) : (
        <figcaption className="sr-only">{item.alt}</figcaption>
      )}
    </figure>
  )
}
