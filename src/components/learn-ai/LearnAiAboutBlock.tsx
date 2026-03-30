'use client'

import Image from 'next/image'
import {
  LEARN_AI_ABOUT_BODY,
  LEARN_AI_ABOUT_IMAGE,
  LEARN_AI_ABOUT_SUPPORTING,
} from '@/constants/learn-ai-content'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { GlyphStackTiles } from '@/components/learn-ai/LearnAiGlyphs'
import { learnAiSectionEyebrow } from '@/components/learn-ai/learn-ai-tokens'
import { cn } from '@/lib/utils'

export function LearnAiAboutBlock() {
  const hasImage = Boolean(LEARN_AI_ABOUT_IMAGE)

  return (
    <LearnAiReveal className="max-w-3xl mx-auto px-5 sm:px-6">
      <p className={learnAiSectionEyebrow()}>About Moises</p>
      <div
        className={cn(
          'flex flex-col gap-8',
          hasImage && 'md:flex-row md:items-start md:gap-10'
        )}
      >
        {hasImage && LEARN_AI_ABOUT_IMAGE && (
          <div className="shrink-0 w-full md:w-[200px] lg:w-[220px]">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900">
              <Image
                src={LEARN_AI_ABOUT_IMAGE}
                alt="Moises Sanabria"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 220px"
              />
            </div>
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-5">
          {!hasImage && (
            <div
              className={cn(
                'inline-flex items-center gap-3 rounded-sm border border-zinc-800',
                'px-5 py-4 bg-zinc-900/50 mb-2'
              )}
              aria-hidden
            >
              <GlyphStackTiles />
              <span className="font-medium tracking-tight text-zinc-300 text-sm">MS</span>
            </div>
          )}
          <p className="text-zinc-300 leading-relaxed text-lg">{LEARN_AI_ABOUT_BODY}</p>
          <p className="text-zinc-500 text-base leading-relaxed border-l border-zinc-700 pl-4">
            {LEARN_AI_ABOUT_SUPPORTING}
          </p>
        </div>
      </div>
    </LearnAiReveal>
  )
}
