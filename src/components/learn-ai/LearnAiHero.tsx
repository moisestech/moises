'use client'

import Image from 'next/image'
import { useState } from 'react'
import { GlitchDisplayHero } from '@/components/common/GlitchDisplayHero'
import { LEARN_AI_WORKSHOP_HERO_IMAGE } from '@/constants/learn-ai-workshop'
import { mailtoLearnAi } from '@/lib/learn-ai-mailto'
import { cn } from '@/lib/utils'

export function LearnAiHero() {
  const [imgError, setImgError] = useState(false)

  return (
    <header className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:min-h-[min(88vh,860px)] lg:items-stretch">
        <div className="relative h-[min(52vh,420px)] sm:h-[min(56vh,480px)] lg:h-auto lg:min-h-[520px]">
          {imgError ? (
            <div
              className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-900"
              role="img"
              aria-label="Hero artwork placeholder"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-600">
                Hero artwork
              </span>
            </div>
          ) : (
            <>
              <Image
                src={LEARN_AI_WORKSHOP_HERO_IMAGE}
                alt="Learn AI Without Losing Yourself — atmospheric workshop artwork background"
                fill
                priority
                className="object-cover object-[center_22%] sm:object-center lg:object-[center_28%]"
                sizes="(max-width: 1024px) 100vw, 52vw"
                onError={() => setImgError(true)}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15 dark:from-black dark:via-black/55 dark:to-black/25 lg:from-black/55 lg:via-black/25 lg:to-black/10 dark:lg:from-black/75 dark:lg:via-black/35 dark:lg:to-black/20"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/25 dark:from-black/70 dark:to-black/40 lg:hidden"
                aria-hidden
              />
            </>
          )}
        </div>

        <div
          className={cn(
            'relative z-10 flex flex-col justify-end lg:justify-center',
            'px-5 sm:px-8 py-12 sm:py-14 lg:py-16 lg:pl-10 lg:pr-12 xl:pr-16',
            'bg-zinc-50 dark:bg-zinc-950',
            'border-t border-zinc-200/90 dark:border-zinc-800/80 lg:border-t-0 lg:border-l lg:border-zinc-200/90 dark:lg:border-zinc-800/80'
          )}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-5">
            Workshop · live performance
          </p>
          <GlitchDisplayHero
            as="h1"
            variant="large"
            palette="zinc"
            className="mt-0 min-h-0 mb-0"
            containerClassName="max-w-xl mx-0"
          >
            Learn AI Without Losing Yourself
          </GlitchDisplayHero>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-light max-w-xl leading-snug">
            A live workshop-performance on practical AI, burnout culture, and staying human in the loop.
          </p>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            Learn how to use AI for writing, research, and creative work without flattening your voice, outsourcing
            judgment, or mistaking synthetic scale for freedom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={mailtoLearnAi('Bring “Learn AI Without Losing Yourself” to our space')}
              className="inline-flex justify-center items-center rounded-sm bg-zinc-900 text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:ring-offset-zinc-950"
            >
              Bring this to your space
            </a>
            <a
              href="#inquiry"
              className="inline-flex justify-center items-center rounded-sm border border-zinc-300 text-zinc-800 px-6 py-3.5 text-sm font-medium hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
            >
              Request details
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
