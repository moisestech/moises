'use client'

import { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import {
  ArrowRightLeft,
  Bookmark,
  BookOpen,
  FileText,
  GraduationCap,
  ImageIcon,
  Mic,
  Monitor,
  Printer,
  Sparkles,
  Theater,
} from 'lucide-react'
import {
  LEARN_AI_CUE_SEGMENT_LABEL,
  LEARN_AI_CUE_SEGMENT_ORDER,
  LEARN_AI_CUE_SHEET_BEATS,
  type LearnAiCueBeat,
  type LearnAiCueSegment,
} from '@/constants/learn-ai-cue-sheet'
import {
  LEARN_AI_CULTURE_INSERTS,
  LEARN_AI_FUNNEL_CTA,
  LEARN_AI_TRANSITION_PHRASES,
  LEARN_AI_V2_GLOBAL_VISUAL,
} from '@/constants/learn-ai-deck-v2-presenter'
import {
  LEARN_AI_REHEARSE_CORE_TONE,
  LEARN_AI_REHEARSE_EDUTAINMENT,
  LEARN_AI_REHEARSE_EDUTAINMENT_IMPROVEMENTS,
  LEARN_AI_REHEARSE_EMOTIONAL_MIX,
  LEARN_AI_REHEARSE_NEXT_STEP,
  LEARN_AI_REHEARSE_RUNNING_ORDER,
  LEARN_AI_REHEARSE_TEACHING_RHYTHM,
} from '@/constants/learn-ai-rehearse-guide'
import { getLearnAiV2SlidePrompt } from '@/constants/learn-ai-slide-prompts-v2'
import {
  learnAiAtmosphereNavy,
  learnAiPageRoot,
  learnAiSectionEyebrow,
} from '@/components/learn-ai/learn-ai-tokens'
import { cn } from '@/lib/utils'

type MobileTab = 'map' | 'beat' | 'guide' | 'script'

function groupBeatsBySegment(
  beats: readonly LearnAiCueBeat[]
): Map<LearnAiCueSegment, LearnAiCueBeat[]> {
  const m = new Map<LearnAiCueSegment, LearnAiCueBeat[]>()
  for (const seg of LEARN_AI_CUE_SEGMENT_ORDER) {
    m.set(seg, [])
  }
  for (const b of beats) {
    const list = m.get(b.segment) ?? []
    list.push(b)
    m.set(b.segment, list)
  }
  return m
}

function firstBeatIndexForSegment(
  beats: readonly LearnAiCueBeat[],
  segment: LearnAiCueSegment
): number {
  const i = beats.findIndex((b) => b.segment === segment)
  return i === -1 ? 0 : i
}

function RehearsePrintableDoc({ markdown }: { markdown: string }) {
  if (!markdown.trim()) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Missing printable manuscript. Add{' '}
        <code className="rounded bg-zinc-100 px-1 text-xs dark:bg-zinc-800">content/workshop/learn-ai-without-losing-yourself-printable-rehearsal.md</code>
        .
      </p>
    )
  }

  return (
    <article className="learn-ai-rehearse-printable-markdown max-w-none text-zinc-800 dark:text-zinc-200 print:text-black">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mt-10 first:mt-0 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 print:break-inside-avoid print:text-black">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-zinc-100 print:break-inside-avoid print:mt-6 print:text-black">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 text-lg font-medium text-zinc-900 dark:text-zinc-100 print:break-inside-avoid print:text-black">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-4 text-base font-medium text-zinc-800 dark:text-zinc-200 print:text-black">{children}</h4>
          ),
          p: ({ children }) => <p className="mt-3 text-sm sm:text-base leading-relaxed print:text-sm">{children}</p>,
          ul: ({ children }) => (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm sm:text-base leading-relaxed print:text-sm">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm sm:text-base leading-relaxed print:text-sm">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          hr: () => <hr className="my-8 border-zinc-200 dark:border-zinc-700 print:border-zinc-300" />,
          strong: ({ children }) => <strong className="font-semibold text-zinc-900 dark:text-zinc-50 print:text-black">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} className="text-lime-800 underline underline-offset-2 dark:text-lime-400 print:text-black">
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-zinc-100 px-1 py-0.5 text-[0.9em] dark:bg-zinc-800 print:bg-zinc-100">{children}</code>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  )
}

function isCloudinarySlideUrl(url: string) {
  try {
    const u = new URL(url)
    return u.hostname === 'res.cloudinary.com'
  } catch {
    return false
  }
}

function SlideVisual({ beat }: { beat: LearnAiCueBeat }) {
  const url = beat.slideImageUrl
  if (url && isCloudinarySlideUrl(url)) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <Image src={url} alt="" fill className="object-cover" sizes="(min-width: 1024px) 360px, 100vw" />
      </div>
    )
  }
  if (url) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt="" className="h-full w-full object-cover" />
      </div>
    )
  }
  return (
    <div
      className={cn(
        'flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed',
        'border-zinc-300 bg-zinc-100/80 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-500'
      )}
    >
      <ImageIcon className="h-8 w-8 opacity-60" aria-hidden />
      <span className="text-xs font-medium uppercase tracking-wider">Slide / visual</span>
      <span className="px-4 text-center text-[11px] leading-snug">Add `slideImageUrl` on this beat when the asset exists.</span>
    </div>
  )
}

function BeatDetail({ beat }: { beat: LearnAiCueBeat }) {
  const v2Slide = beat.deckSlideNumber != null ? getLearnAiV2SlidePrompt(beat.deckSlideNumber) : undefined
  const promptDark = beat.slideImagePromptDark ?? v2Slide?.promptDark
  const promptLight = beat.slideImagePromptLight ?? v2Slide?.promptLight
  const promptAlt = v2Slide?.promptAlt
  const slidePurpose = beat.slideVisualPurpose ?? v2Slide?.purpose
  const hasImagePromptDetails = Boolean(promptDark || promptLight || promptAlt || slidePurpose)

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <div className="min-w-0 flex-1 space-y-5 text-sm sm:text-base">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-lime-800 dark:text-lime-400/90">
            {beat.timeRange}
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">{LEARN_AI_CUE_SEGMENT_LABEL[beat.segment]}</span>
          {beat.deckSlideNumber != null ? (
            <>
              <span className="text-zinc-400 dark:text-zinc-600">·</span>
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Deck v2 · slide {beat.deckSlideNumber}</span>
            </>
          ) : null}
        </div>
        <h2 className="text-lg font-medium leading-snug text-zinc-900 dark:text-zinc-100 sm:text-xl">{beat.slideLabel}</h2>

        {beat.skillWord ? (
          <p className="inline-flex items-center gap-2 rounded-sm border border-lime-700/25 bg-lime-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-900 dark:border-lime-500/30 dark:bg-lime-500/10 dark:text-lime-200">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Skill: {beat.skillWord}
          </p>
        ) : null}

        {beat.onScreenLine ? (
          <div className="rounded-sm border border-zinc-300 bg-zinc-100/90 px-4 py-3 dark:border-zinc-600 dark:bg-zinc-800/60">
            <p className="text-base font-medium leading-snug text-zinc-900 dark:text-zinc-100">{beat.onScreenLine}</p>
            {beat.onScreenGloss ? (
              <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">
                {beat.onScreenGloss}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="space-y-4">
          {beat.transitionFromPrior ? (
            <div className="rounded-sm border border-amber-400/70 bg-amber-50/95 p-4 dark:border-amber-700/45 dark:bg-amber-950/35">
              <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2 font-semibold text-amber-950 dark:text-amber-200')}>
                <ArrowRightLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
                Transition — bridge in
              </div>
              <p className="font-semibold leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap">
                {beat.transitionFromPrior}
              </p>
            </div>
          ) : null}

          <div className="rounded-sm border border-sky-200/90 bg-sky-50/90 p-4 dark:border-sky-900/50 dark:bg-sky-950/35">
            <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2')}>
              <Monitor className="h-3.5 w-3.5 text-sky-700 dark:text-sky-400" aria-hidden />
              Screen action
            </div>
            <p className="leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">{beat.screenAction}</p>
          </div>

          {beat.script ? (
            <div className="rounded-sm border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950/40">
              <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2')}>
                <Mic className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" aria-hidden />
                What you say
              </div>
              <p className="leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">{beat.script}</p>
            </div>
          ) : null}

          {beat.altJoke ? (
            <div className="rounded-sm border border-zinc-200/80 border-dashed bg-zinc-50/80 p-4 italic dark:border-zinc-700 dark:bg-zinc-900/30">
              <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2 not-italic')}>
                <Sparkles className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400/90" aria-hidden />
                Optional alt line
              </div>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">{beat.altJoke}</p>
            </div>
          ) : null}

          {beat.cultureBeat ? (
            <div className="rounded-sm border border-rose-300/80 bg-rose-50/90 p-4 dark:border-rose-900/40 dark:bg-rose-950/30">
              <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2 font-semibold text-rose-950 dark:text-rose-200')}>
                <Theater className="h-3.5 w-3.5 shrink-0" aria-hidden />
                Culture beat (optional)
              </div>
              <p className="font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">
                {beat.cultureBeat}
              </p>
            </div>
          ) : null}

          {beat.transitionToNext ? (
            <div className="rounded-sm border border-amber-400/70 bg-amber-50/95 p-4 dark:border-amber-700/45 dark:bg-amber-950/35">
              <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2 font-semibold text-amber-950 dark:text-amber-200')}>
                <ArrowRightLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
                Transition — bridge out
              </div>
              <p className="font-semibold leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap">
                {beat.transitionToNext}
              </p>
            </div>
          ) : null}

          {hasImagePromptDetails ? (
            <details className="rounded-sm border border-zinc-300 bg-zinc-50/80 p-4 dark:border-zinc-600 dark:bg-zinc-900/40">
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 dark:text-zinc-100 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2">
                  <ImageIcon className="h-3.5 w-3.5 shrink-0 text-zinc-600 dark:text-zinc-400" aria-hidden />
                  Image generation prompts (v2)
                </span>
              </summary>
              <div className="mt-4 space-y-3 text-sm leading-relaxed">
                {v2Slide ? (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {v2Slide.title}
                    {beat.slideImagePromptDark || beat.slideImagePromptLight
                      ? ' · prompts below override or extend the deck pack for this beat.'
                      : null}
                  </p>
                ) : null}
                {slidePurpose ? (
                  <p>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">Purpose: </span>
                    <span className="text-zinc-600 dark:text-zinc-400">{slidePurpose}</span>
                  </p>
                ) : null}
                {promptDark ? (
                  <div>
                    <p className="mb-1 font-semibold text-zinc-800 dark:text-zinc-200">Dark / editorial</p>
                    <p className="whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">{promptDark}</p>
                  </div>
                ) : null}
                {promptAlt ? (
                  <div>
                    <p className="mb-1 font-semibold text-zinc-800 dark:text-zinc-200">Alt concept</p>
                    <p className="whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">{promptAlt}</p>
                  </div>
                ) : null}
                {promptLight ? (
                  <div>
                    <p className="mb-1 font-semibold text-zinc-800 dark:text-zinc-200">Light background</p>
                    <p className="whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">{promptLight}</p>
                  </div>
                ) : null}
              </div>
            </details>
          ) : null}

          <div className="rounded-sm border border-violet-200/80 bg-violet-50/80 p-4 dark:border-violet-900/45 dark:bg-violet-950/30">
            <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2')}>
              <GraduationCap className="h-3.5 w-3.5 text-violet-700 dark:text-violet-400" aria-hidden />
              Teaching goal
            </div>
            <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{beat.teachingGoal}</p>
          </div>

          <div className="rounded-sm border border-lime-700/30 bg-lime-500/10 p-4 dark:border-lime-500/25 dark:bg-lime-500/10">
            <div className={cn(learnAiSectionEyebrow(), 'mb-2 flex items-center gap-2 text-lime-900 dark:text-lime-200')}>
              <Bookmark className="h-3.5 w-3.5" aria-hidden />
              Critical takeaway
            </div>
            <p className="font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">{beat.criticalTakeaway}</p>
          </div>

          {beat.notes ? (
            <div className="rounded-sm border border-zinc-200 bg-zinc-50/60 p-4 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/25 dark:text-zinc-400">
              <div className={cn(learnAiSectionEyebrow(), 'mb-2')}>Notes</div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{beat.notes}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="w-full shrink-0 lg:w-[min(100%,340px)] lg:pt-1">
        <p className={cn(learnAiSectionEyebrow(), 'mb-2 hidden lg:block')}>Slide</p>
        <SlideVisual beat={beat} />
      </div>
    </div>
  )
}

function RehearseGuide({
  beats,
  onJumpToSegment,
}: {
  beats: readonly LearnAiCueBeat[]
  onJumpToSegment: (segment: LearnAiCueSegment) => void
}) {
  return (
    <div className="space-y-10 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-3 flex items-center gap-2 text-base font-medium text-zinc-900 dark:text-zinc-100">
          <BookOpen className="h-4 w-4 text-lime-700 dark:text-lime-400" aria-hidden />
          Core tone reminder
        </h2>
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">{LEARN_AI_REHEARSE_CORE_TONE.insideContradiction}</p>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>You are not</p>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          {LEARN_AI_REHEARSE_CORE_TONE.youAreNot.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>You are</p>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          {LEARN_AI_REHEARSE_CORE_TONE.youAre.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">Emotional mix</h2>
        <ul className="flex flex-wrap gap-2">
          {LEARN_AI_REHEARSE_EMOTIONAL_MIX.map((item) => (
            <li
              key={item}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">Repeating teaching rhythm</h2>
        <p className="rounded-sm bg-amber-50/90 px-4 py-3 text-zinc-800 dark:bg-amber-950/25 dark:text-zinc-200">
          {LEARN_AI_REHEARSE_TEACHING_RHYTHM}
        </p>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-4 text-base font-medium text-zinc-900 dark:text-zinc-100">Running order</h2>
        <div className="overflow-x-auto rounded-sm border border-zinc-200 dark:border-zinc-800">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-zinc-100/90 text-xs uppercase tracking-wider text-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-400">
              <tr>
                <th className="px-4 py-3 font-medium">Time</th>
                <th className="px-4 py-3 font-medium">Block</th>
                <th className="px-4 py-3 font-medium">Cue map</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {LEARN_AI_REHEARSE_RUNNING_ORDER.map((row) => (
                <tr key={row.segment} className="bg-white/60 dark:bg-zinc-950/20">
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">{row.timeRange}</td>
                  <td className="px-4 py-3 text-zinc-800 dark:text-zinc-200">{row.title}</td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => onJumpToSegment(row.segment)}
                      className="text-left text-sm font-medium text-lime-800 underline-offset-2 hover:underline dark:text-lime-400"
                    >
                      Jump to first beat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-4 text-base font-medium text-zinc-900 dark:text-zinc-100">Edutainment on stage</h2>
        <ul className="mb-4 list-disc space-y-2 pl-5">
          <li>{LEARN_AI_REHEARSE_EDUTAINMENT.skillWords}</li>
          <li>{LEARN_AI_REHEARSE_EDUTAINMENT.quoteSlidePattern}</li>
        </ul>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>Bridge lines between segments</p>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          {LEARN_AI_REHEARSE_EDUTAINMENT.bridgeLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>Quote + gloss examples</p>
        <ul className="space-y-3">
          {LEARN_AI_REHEARSE_EDUTAINMENT.examples.map((ex) => (
            <li key={ex.quote} className="rounded-sm border border-zinc-200 bg-zinc-50/80 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900/40">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">{ex.quote}</span>
              <span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-400">{ex.gloss}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-4 text-base font-medium text-zinc-900 dark:text-zinc-100">Helpful improvements (on stage)</h2>
        <ol className="list-decimal space-y-4 pl-5 text-sm sm:text-base">
          {LEARN_AI_REHEARSE_EDUTAINMENT_IMPROVEMENTS.map((item) => (
            <li key={item.title} className="leading-relaxed marker:font-medium">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {item.title.replace(/^\d+\.\s*/, '')}
              </span>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-3 flex items-center gap-2 text-base font-medium text-zinc-900 dark:text-zinc-100">
          <ImageIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" aria-hidden />
          Deck v2 — visual direction
        </h2>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>Overall</p>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          {LEARN_AI_V2_GLOBAL_VISUAL.overallStyle.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>Avoid</p>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          {LEARN_AI_V2_GLOBAL_VISUAL.avoid.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className={cn(learnAiSectionEyebrow(), 'mb-2')}>Core motifs</p>
        <ul className="mb-4 list-disc space-y-1 pl-5">
          {LEARN_AI_V2_GLOBAL_VISUAL.coreMotifs.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Full image prompts: see <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Image generation prompts (v2)</strong>{' '}
          on each beat with a deck slide number, or <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">learn-ai-slide-prompts-v2.ts</code>.
        </p>
      </section>

      <section className="rounded-sm border border-amber-200/90 bg-amber-50/50 p-5 dark:border-amber-900/35 dark:bg-amber-950/20 sm:p-6">
        <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-amber-950 dark:text-amber-200">
          <ArrowRightLeft className="h-4 w-4 shrink-0" aria-hidden />
          Transition phrase toolbox
        </h2>
        <p className="mb-3 text-sm text-zinc-700 dark:text-zinc-300">
          Reuse when the talk feels jagged — also surfaced per beat as <strong className="font-semibold">Transition</strong> cards.
        </p>
        <ul className="list-disc space-y-2 pl-5 font-medium text-zinc-800 dark:text-zinc-200">
          {LEARN_AI_TRANSITION_PHRASES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-sm border border-rose-200/90 bg-rose-50/50 p-5 dark:border-rose-900/35 dark:bg-rose-950/20 sm:p-6">
        <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-rose-950 dark:text-rose-200">
          <Theater className="h-4 w-4 shrink-0" aria-hidden />
          Culture sprinkles (optional)
        </h2>
        <p className="mb-3 text-sm text-zinc-700 dark:text-zinc-300">Light seasoning — not full sections. Some beats include a rose <strong className="font-semibold">Culture beat</strong> card.</p>
        <ul className="space-y-4 text-sm">
          <li>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">Fruit Love Island</p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">{LEARN_AI_CULTURE_INSERTS.fruitLoveIsland}</p>
          </li>
          <li>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">AI movie / plausibility</p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">{LEARN_AI_CULTURE_INSERTS.aiMoviePlausibility}</p>
          </li>
          <li>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">Overworked assistant</p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">{LEARN_AI_CULTURE_INSERTS.overworkedAssistant}</p>
          </li>
        </ul>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">Closing funnel (v2)</h2>
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">{LEARN_AI_FUNNEL_CTA.primary.title}</p>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{LEARN_AI_FUNNEL_CTA.primary.body}</p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{LEARN_AI_FUNNEL_CTA.primary.hrefNote}</p>
        <p className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">{LEARN_AI_FUNNEL_CTA.secondary.title}</p>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{LEARN_AI_FUNNEL_CTA.secondary.body}</p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{LEARN_AI_FUNNEL_CTA.secondary.hrefNote}</p>
      </section>

      <section className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-6">
        <h2 className="mb-3 text-base font-medium text-zinc-900 dark:text-zinc-100">Best next step</h2>
        <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">{LEARN_AI_REHEARSE_NEXT_STEP}</p>
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
          Beats in data: {beats.length} (includes flex row). First-beat jumps use the live cue sheet order.
        </p>
      </section>
    </div>
  )
}

export default function LearnAiRehearsePageClient({ printableMarkdown }: { printableMarkdown: string }) {
  const beats = LEARN_AI_CUE_SHEET_BEATS
  const bySegment = useMemo(() => groupBeatsBySegment(beats), [beats])
  const beatIndexById = useMemo(() => {
    const m = new Map<string, number>()
    beats.forEach((b, i) => m.set(b.id, i))
    return m
  }, [beats])
  const [index, setIndex] = useState(0)
  const [mobileTab, setMobileTab] = useState<MobileTab>('beat')

  const current = beats[index] ?? beats[0]
  const total = beats.length
  const canPrev = index > 0
  const canNext = index < total - 1

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(total - 1, i + 1))
  }, [total])

  const selectBeat = useCallback((i: number) => {
    setIndex(i)
    setMobileTab('beat')
  }, [])

  const jumpToSegment = useCallback(
    (segment: LearnAiCueSegment) => {
      setIndex(firstBeatIndexForSegment(beats, segment))
      setMobileTab('beat')
    },
    [beats]
  )

  const handlePrint = useCallback(() => {
    setMobileTab('script')
    requestAnimationFrame(() => {
      window.print()
    })
  }, [])

  const tabBtn = (tab: MobileTab, label: string) => (
    <button
      type="button"
      onClick={() => setMobileTab(tab)}
      className={cn(
        'flex-1 px-2 py-3 text-sm font-medium transition-colors sm:flex-none sm:px-4',
        mobileTab === tab
          ? 'text-lime-800 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-500'
          : 'text-zinc-500 border-b-2 border-transparent'
      )}
    >
      {label}
    </button>
  )

  return (
    <div className={cn(learnAiPageRoot(), 'learn-ai-rehearse-root print:bg-white print:text-black')}>
      <header
        className={cn(
          learnAiAtmosphereNavy(),
          'learn-ai-rehearse-hide-print border-b border-zinc-200/80 dark:border-zinc-800/80 print:border-zinc-300'
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-[11px]">
                <Link
                  href="/workshop/learn-ai-without-losing-yourself"
                  className="text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400 print:text-black"
                >
                  Learn AI Without Losing Yourself
                </Link>
                <span className="text-zinc-400 dark:text-zinc-600"> · </span>
                <span>Presenter cue sheet</span>
              </p>
              <h1 className="text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl print:text-black">
                Rehearsal — map, beats & guide
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                Unlisted page for practice. Beat {index + 1} of {total}. Draft v1 timing (~35–40 min). Use Guide for tone;
                Map to jump; Beat while presenting; Script for the full printable manuscript.
              </p>
            </div>
            <button
              type="button"
              onClick={handlePrint}
              className="print:hidden inline-flex items-center gap-2 rounded-sm border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <Printer className="h-4 w-4" aria-hidden />
              Print script
            </button>
          </div>

          {/* Desktop tabs */}
          <div className="learn-ai-rehearse-hide-print hidden print:hidden md:flex md:flex-wrap md:gap-1 md:border-b md:border-zinc-200 md:dark:border-zinc-800">
            {(['map', 'beat', 'guide', 'script'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setMobileTab(t)}
                className={cn(
                  'rounded-t-sm px-4 py-2 text-sm font-medium transition-colors',
                  mobileTab === t
                    ? 'bg-white text-lime-900 shadow-sm dark:bg-zinc-900 dark:text-lime-300'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                )}
              >
                {t === 'map' ? 'Map' : t === 'beat' ? 'Beat' : t === 'guide' ? 'Guide' : 'Script'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile tab bar */}
      <div className="learn-ai-rehearse-hide-print sticky top-0 z-20 flex print:hidden md:hidden border-b border-zinc-200 bg-zinc-50/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
        {tabBtn('map', 'Map')}
        {tabBtn('beat', 'Beat')}
        {tabBtn('guide', 'Guide')}
        {tabBtn('script', 'Script')}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 pb-28 sm:px-6 sm:py-10 md:pb-10 print:py-4 print:pb-4">
        <div className="flex flex-col gap-8 md:flex-row md:gap-8 lg:gap-10 print:flex-col print:gap-0">
          <aside
            className={cn(
              'learn-ai-rehearse-hide-print shrink-0 md:max-h-[calc(100vh-8rem)] md:w-[min(100%,320px)] md:overflow-y-auto md:pr-2 lg:w-[360px]',
              mobileTab === 'script' ? 'hidden' : mobileTab === 'map' ? 'block' : 'hidden md:block'
            )}
            aria-label="Cue map"
          >
            <p className="mb-4 hidden text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 print:block md:block">
              Map
            </p>
            <div className="space-y-8">
              {LEARN_AI_CUE_SEGMENT_ORDER.map((seg) => {
                const segBeats = bySegment.get(seg) ?? []
                if (segBeats.length === 0) return null
                return (
                  <div key={seg}>
                    <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                      {LEARN_AI_CUE_SEGMENT_LABEL[seg]}
                    </h2>
                    <ul className="list-none space-y-1 p-0">
                      {segBeats.map((b) => {
                        const i = beatIndexById.get(b.id) ?? 0
                        const active = i === index
                        return (
                          <li key={b.id}>
                            <button
                              type="button"
                              onClick={() => selectBeat(i)}
                              className={cn(
                                'w-full rounded-sm border px-3 py-2.5 text-left text-sm transition-colors',
                                active
                                  ? 'border-lime-600/50 bg-lime-500/10 text-zinc-900 dark:border-lime-500/35 dark:bg-lime-500/10 dark:text-zinc-100'
                                  : 'border-zinc-200 bg-white/80 text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:border-zinc-700'
                              )}
                            >
                              <span className="mb-0.5 block text-[10px] uppercase tracking-wider text-zinc-500">{b.timeRange}</span>
                              <span className="leading-snug">{b.slideLabel}</span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </aside>

          <main
            className={cn(
              'min-w-0 flex-1',
              mobileTab !== 'script' && 'md:border-l md:border-zinc-200 md:pl-8 md:dark:border-zinc-800 lg:pl-10',
              mobileTab === 'map' ? 'hidden md:block' : 'block'
            )}
          >
            {mobileTab === 'guide' ? (
              <div className="md:max-w-3xl print:max-w-none">
                <RehearseGuide beats={beats} onJumpToSegment={jumpToSegment} />
              </div>
            ) : mobileTab === 'script' ? (
              <div className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-8 print:border-0 print:bg-white print:p-0 print:shadow-none">
                <p className="learn-ai-rehearse-hide-print mb-6 flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  <FileText className="h-4 w-4 shrink-0" aria-hidden />
                  Printable rehearsal — Draft v1 (also in repo as Markdown)
                </p>
                <RehearsePrintableDoc markdown={printableMarkdown} />
              </div>
            ) : (
              <div className="rounded-sm border border-zinc-200 bg-white/90 p-5 dark:border-zinc-800 dark:bg-zinc-900/35 sm:p-8 print:border-zinc-300 print:shadow-none">
                <BeatDetail beat={current} />
              </div>
            )}
          </main>
        </div>
      </div>

      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-30 gap-2 border-t border-zinc-200 bg-zinc-50/95 px-3 py-3 backdrop-blur-sm print:hidden md:hidden dark:border-zinc-800 dark:bg-zinc-950/95',
          mobileTab === 'guide' || mobileTab === 'script' ? 'hidden' : 'flex'
        )}
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPrev}
          className={cn(
            'flex-1 rounded-sm border py-3 text-sm font-medium',
            canPrev
              ? 'border-zinc-300 bg-white text-zinc-900 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100'
              : 'cursor-not-allowed border-zinc-200 text-zinc-400 dark:border-zinc-800'
          )}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!canNext}
          className={cn(
            'flex-1 rounded-sm border py-3 text-sm font-medium',
            canNext
              ? 'border-lime-700/40 bg-lime-500/15 text-zinc-900 dark:border-lime-500/40 dark:bg-lime-500/10 dark:text-zinc-100'
              : 'cursor-not-allowed border-zinc-200 text-zinc-400 dark:border-zinc-800'
          )}
        >
          Next
        </button>
      </div>

    </div>
  )
}
