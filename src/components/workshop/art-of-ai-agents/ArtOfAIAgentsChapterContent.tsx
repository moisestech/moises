'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import AIMarketingFlashyTitle from '@/components/workshop/AIMarketingFlashyTitle'
import AIMarketingHeroSection from '@/components/workshop/AIMarketingHeroSection'
import AIMarketingCourseOverview from '@/components/workshop/AIMarketingCourseOverview'
import AIMarketingSetupOpenAI from '@/components/workshop/AIMarketingSetupOpenAI'
import AIMarketingN8NGetStarted from '@/components/workshop/AIMarketingN8NGetStarted'
import AIMarketingN8NNavigatingEditorUI from '@/components/workshop/AIMarketingN8NNavigatingEditorUI'
import AIMarketingN8NNodes from '@/components/workshop/AIMarketingN8NNodes'
import AIMarketingCreateWorkflow from '@/components/workshop/AIMarketingCreateWorkflow'
import AIMarketingN8NKeyboardShortcuts from '@/components/workshop/AIMarketingN8NKeyboardShortcuts'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'
import { ArtOfAIAgentsLegacyChrome } from './ArtOfAIAgentsLegacyChrome'
import { ArtOfAIAgentsWhatYouLearnSection } from './ArtOfAIAgentsWhatYouLearnSection'
import { ArtOfAIAgentsOpeningMonologue } from './ArtOfAIAgentsOpeningMonologue'

export function ArtOfAIAgentsChapterContent({ slug }: { slug: string }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const body = (() => {
    switch (slug) {
      case 'opening-monologue':
        return (
          <section id="opening-monologue" className="py-2" aria-label="Opening monologue script">
            <ArtOfAIAgentsOpeningMonologue />
          </section>
        )
      case 'overview':
        return (
          <>
            <AIMarketingFlashyTitle reducedMotion={reducedMotion} />
            <section className="relative px-4 py-6 sm:py-10" aria-label="Workshop hero image">
              <div className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-xl border border-zinc-200/90 shadow-lg ring-1 ring-zinc-200/40 dark:border-white/10 dark:shadow-2xl dark:ring-white/5 sm:aspect-[21/9]">
                <Image
                  src={ART_OF_AI_AGENTS_HERO_IMAGE}
                  alt="The Art of AI Agents — Locust Projects, The Dill, 2026"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 1152px"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs tracking-wide text-zinc-500 dark:text-zinc-400 sm:text-sm">
                Locust Projects · The Dill — 2026
              </p>
            </section>
            <section id="hero" className="relative overflow-hidden py-16 sm:py-24">
              <AIMarketingHeroSection reducedMotion={reducedMotion} />
            </section>
            <ArtOfAIAgentsWhatYouLearnSection reducedMotion={reducedMotion} />
          </>
        )
      case 'course-overview':
        return (
          <section id="overview" className="py-4">
            <AIMarketingCourseOverview />
          </section>
        )
      case 'getting-started':
        return (
          <section id="getting-started" className="py-4">
            <AIMarketingSetupOpenAI />
          </section>
        )
      case 'first-steps':
        return (
          <section id="first-steps" className="py-4">
            <AIMarketingN8NGetStarted />
          </section>
        )
      case 'ui-editor':
        return (
          <section id="ui-editor" className="py-4">
            <AIMarketingN8NNavigatingEditorUI />
          </section>
        )
      case 'building-blocks':
        return (
          <section id="building-blocks" className="py-4">
            <AIMarketingN8NNodes />
          </section>
        )
      case 'first-workflow':
        return (
          <section id="first-workflow" className="py-4">
            <AIMarketingCreateWorkflow />
          </section>
        )
      case 'keyboard-shortcuts':
        return (
          <section id="keyboard-shortcuts" className="py-4">
            <AIMarketingN8NKeyboardShortcuts />
          </section>
        )
      default:
        return null
    }
  })()

  if (!body) return null

  return (
    <ArtOfAIAgentsLegacyChrome variant="embedded">
      <div className="px-2 pb-6 pt-4 sm:px-4">{body}</div>
    </ArtOfAIAgentsLegacyChrome>
  )
}
