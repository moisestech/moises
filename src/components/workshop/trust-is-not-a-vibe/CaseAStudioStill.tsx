import Image from 'next/image'
import { TRUST_CASE_A, TRUST_PLACEHOLDERS } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustSpecimen } from './TrustSpecimen'

const SURFACE = TRUST_PLACEHOLDERS.caseAOutput

export function CaseAStudioStill() {
  const src = SURFACE.src
  if (!src) return null

  return (
    <figure className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700">
      <div className="relative aspect-video bg-stone-950">
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          className="object-cover object-center opacity-90"
          sizes="(max-width: 768px) 100vw, 720px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden />
        <div className="absolute inset-x-3 bottom-3 top-[18%] flex items-end justify-center sm:inset-x-10 sm:bottom-5 sm:top-[16%]">
          <TrustSpecimen
            caseData={TRUST_CASE_A}
            variant="bare"
            className="w-full max-w-xl scale-[0.92] shadow-2xl sm:scale-100"
          />
        </div>
      </div>
      <figcaption className={cn('border-t border-stone-200 bg-white px-4 py-3 text-xs text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400')}>
        <p className="font-medium text-stone-800 dark:text-stone-100">
          Studio still · numbers come from the typed card, not the photograph.
        </p>
        <p className="mt-1">
          Visual polish is not evidence of system quality. {SURFACE.alt}
        </p>
      </figcaption>
    </figure>
  )
}
