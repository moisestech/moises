'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'
import {
  ART_OF_AI_AGENTS_DIFFERENTIATION_BULLETS,
  ART_OF_AI_AGENTS_FORMATS,
  ART_OF_AI_AGENTS_OVERVIEW_HERO_LEAD,
  ART_OF_AI_AGENTS_OVERVIEW_HERO_SECOND,
  ART_OF_AI_AGENTS_OVERVIEW_HERO_EYEBROW,
  ART_OF_AI_AGENTS_OVERVIEW_HERO_TITLE,
  ART_OF_AI_AGENTS_HUMAN_ITEMS,
  ART_OF_AI_AGENTS_HUMAN_SPLIT_FOOTER,
  ART_OF_AI_AGENTS_IDEAL_INTRO,
  ART_OF_AI_AGENTS_IDEAL_VENUES,
  ART_OF_AI_AGENTS_LEARNING_OUTCOMES,
  ART_OF_AI_AGENTS_OUTCOMES_HEADING,
  ART_OF_AI_AGENTS_PROBLEM_LEAD,
  ART_OF_AI_AGENTS_PROBLEM_SECOND,
  ART_OF_AI_AGENTS_PROCESS_STEPS,
  ART_OF_AI_AGENTS_PROCESS_TAGLINE,
  ART_OF_AI_AGENTS_PROOF,
  ART_OF_AI_AGENTS_PROOF_PLACEHOLDERS,
  ART_OF_AI_AGENTS_QUICK_FACTS,
  ART_OF_AI_AGENTS_QUOTE_ASSISTANCE,
  ART_OF_AI_AGENTS_QUOTE_SCALING,
  ART_OF_AI_AGENTS_QUOTE_SUMMARY,
  ART_OF_AI_AGENTS_SCENARIOS,
  ART_OF_AI_AGENTS_AUTOMATED_ITEMS,
  ART_OF_AI_AGENTS_CONTACT_EMAIL,
} from '@/constants/art-of-ai-agents-overview-content'
import { ART_OF_AI_AGENTS_COURSE_HUB } from '@/config/art-of-ai-agents-chapters'
import { LearnAiAboutBlock } from '@/components/learn-ai/LearnAiAboutBlock'
import { GlyphBracketPair, GlyphListMark } from '@/components/learn-ai/LearnAiGlyphs'
import { LearnAiLearningCard } from '@/components/learn-ai/LearnAiLearningCard'
import { LearnAiPullQuote } from '@/components/learn-ai/LearnAiPullQuote'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import { LearnAiScenarioCard } from '@/components/learn-ai/LearnAiScenarioCard'
import { LearnAiSection } from '@/components/learn-ai/LearnAiSection'
import {
  learnAiAtmosphereNavy,
  learnAiPageRoot,
  learnAiSectionEyebrow,
  learnAiSectionTitle,
} from '@/components/learn-ai/learn-ai-tokens'
import { mailtoLearnAi } from '@/lib/learn-ai-mailto'
import { cn } from '@/lib/utils'
import { useState } from 'react'

function FormatCard({ duration, kind, desc }: { duration: string; kind: string; desc: string }) {
  const reduce = useReducedMotion() ?? false
  const inner = (
    <div
      className={cn(
        'h-full rounded-sm border p-5 sm:p-6 transition-all duration-300',
        'border-zinc-200 bg-zinc-50/90 dark:border-zinc-800 dark:bg-zinc-900/25',
        !reduce &&
          'hover:-translate-y-0.5 hover:border-lime-600/30 hover:shadow-[0_0_0_1px_rgba(101,163,13,0.08)] dark:hover:border-lime-500/25 dark:hover:shadow-[0_0_0_1px_rgba(163,230,53,0.08)]'
      )}
    >
      <h3 className="text-zinc-900 dark:text-zinc-100">
        <span className="font-semibold text-lime-700 dark:text-lime-400/90">{duration}</span>{' '}
        <span className="font-medium text-zinc-600 dark:text-zinc-300">{kind}</span>
      </h3>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  )
  if (reduce) return inner
  return (
    <motion.div whileHover={{ scale: 1.005 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
      {inner}
    </motion.div>
  )
}

function OverviewHero() {
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
                src={ART_OF_AI_AGENTS_HERO_IMAGE}
                alt="The Art of AI Agents — Locust Projects, The Dill, 2026"
                fill
                priority
                className="object-cover object-center"
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
            {ART_OF_AI_AGENTS_OVERVIEW_HERO_EYEBROW}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05] max-w-xl">
            {ART_OF_AI_AGENTS_OVERVIEW_HERO_TITLE}
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-light max-w-xl leading-snug">
            {ART_OF_AI_AGENTS_OVERVIEW_HERO_LEAD}
          </p>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            {ART_OF_AI_AGENTS_OVERVIEW_HERO_SECOND}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href={ART_OF_AI_AGENTS_COURSE_HUB}
              className="inline-flex justify-center items-center rounded-sm bg-zinc-900 text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:ring-offset-zinc-950"
            >
              Open workshop materials
            </Link>
            <a
              href="#inquiry"
              className="inline-flex justify-center items-center rounded-sm border border-zinc-300 text-zinc-800 px-6 py-3.5 text-sm font-medium hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
            >
              Host or customize
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function OverviewQuickFacts() {
  return (
    <LearnAiReveal className="max-w-5xl mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-2 sm:pb-4 relative z-20">
      <div
        className={cn(
          'rounded-sm border border-zinc-200 dark:border-zinc-800',
          'bg-white/90 backdrop-blur-sm dark:bg-zinc-900/50 shadow-sm dark:shadow-none',
          'px-4 py-5 sm:px-6 sm:py-6'
        )}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
          {ART_OF_AI_AGENTS_QUICK_FACTS.map((f) => (
            <div key={f.label} className="flex items-start gap-2.5 min-w-0">
              <GlyphBracketPair className="mt-0.5 opacity-80 shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500">{f.label}</p>
                <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-medium leading-snug mt-1">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LearnAiReveal>
  )
}

function ProcessCard({ title, body, index }: { title: string; body: string; index: number }) {
  const reduce = useReducedMotion() ?? false
  const inner = (
    <div
      className={cn(
        'h-full rounded-sm border px-5 py-6 sm:px-6 sm:py-7 transition-all duration-300',
        'border-zinc-200 bg-white/90 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/35 dark:shadow-none',
        !reduce &&
          'hover:-translate-y-0.5 hover:border-lime-600/30 hover:shadow-[0_0_0_1px_rgba(101,163,13,0.1)] dark:hover:border-lime-500/25 dark:hover:shadow-[0_0_0_1px_rgba(163,230,53,0.12)]'
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">Step {index + 1}</p>
      <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{body}</p>
    </div>
  )
  if (reduce) return inner
  return (
    <motion.div whileHover={{ scale: 1.005 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
      {inner}
    </motion.div>
  )
}

function AgentsProcessSection() {
  return (
    <LearnAiReveal as="section" className="max-w-5xl mx-auto px-5 sm:px-6">
      <LearnAiSection>
        <p className={learnAiSectionEyebrow()}>How the day moves</p>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mb-10 leading-relaxed">
          {ART_OF_AI_AGENTS_PROCESS_TAGLINE}
        </p>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {ART_OF_AI_AGENTS_PROCESS_STEPS.map((s, i) => (
            <ProcessCard key={s.title} title={s.title} body={s.body} index={i} />
          ))}
        </div>
      </LearnAiSection>
    </LearnAiReveal>
  )
}

function AgentsHumanSplit() {
  return (
    <LearnAiReveal className="max-w-5xl mx-auto px-5 sm:px-6">
      <div className="rounded-sm border border-zinc-200 bg-white/70 p-6 sm:p-10 ring-1 ring-zinc-200/80 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/20 dark:ring-zinc-800/80 dark:shadow-none">
        <p className={learnAiSectionEyebrow()}>What to keep manual</p>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl leading-relaxed">
          Automation is not neutral. The workshop names what should stay in human hands — and what can safely be
          delegated to a graph.
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div
            className={cn(
              'rounded-sm border p-6 sm:p-8 relative overflow-hidden min-h-[280px]',
              'border-amber-200/90 bg-gradient-to-br from-amber-50/95 via-zinc-50 to-zinc-50 ring-1 ring-amber-200/60 dark:border-amber-900/50 dark:from-amber-950/40 dark:via-zinc-950 dark:to-zinc-950 dark:ring-amber-500/10'
            )}
          >
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase text-amber-900/90 dark:text-amber-200/90">
              Human
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed">
              {ART_OF_AI_AGENTS_HUMAN_ITEMS.map((item) => (
                <li key={item} className="flex gap-2 text-zinc-800 dark:text-zinc-200">
                  <span className="shrink-0 font-mono text-xs pt-0.5 text-amber-700/80 dark:text-amber-600/70">—</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              'rounded-sm border p-6 sm:p-8 relative overflow-hidden min-h-[280px]',
              'border-slate-200 bg-gradient-to-br from-slate-100/90 via-zinc-50 to-zinc-50 ring-1 ring-slate-200/70 dark:border-slate-800 dark:from-slate-950/80 dark:via-zinc-950 dark:to-zinc-950 dark:ring-slate-700/30'
            )}
          >
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase text-slate-600 dark:text-slate-400">
              Automate
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed">
              {ART_OF_AI_AGENTS_AUTOMATED_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 font-mono text-xs pt-0.5 text-slate-500 dark:text-slate-500">—</span>
                  <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-lg text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed max-w-2xl border-t border-zinc-200 dark:border-zinc-800 pt-8">
          {ART_OF_AI_AGENTS_HUMAN_SPLIT_FOOTER}
        </p>
      </div>
    </LearnAiReveal>
  )
}

function ProofSlot({
  label,
  value,
  placeholder,
}: {
  label: string
  value: string
  placeholder: string
}) {
  const filled = value.trim().length > 0
  return (
    <div
      className={cn(
        'rounded-sm border px-4 py-4 sm:px-5 sm:py-5',
        'border-zinc-200 bg-zinc-50/90 dark:border-zinc-800 dark:bg-zinc-900/30'
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">{label}</p>
      <p
        className={cn(
          'text-sm sm:text-base leading-relaxed',
          filled ? 'text-zinc-800 dark:text-zinc-200' : 'text-zinc-500 italic'
        )}
      >
        {filled ? value : placeholder}
      </p>
    </div>
  )
}

export default function ArtOfAIAgentsOverviewPageClient() {
  return (
    <div className={learnAiPageRoot()}>
      <OverviewHero />
      <OverviewQuickFacts />

      <div className="space-y-20 sm:space-y-28 pb-28 sm:pb-36 pt-8 sm:pt-12">
        <div className={learnAiAtmosphereNavy()}>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(101,163,13,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(163,230,53,0.05),transparent)]"
            aria-hidden
          />
          <LearnAiReveal as="section" className="relative py-12 sm:py-16">
            <LearnAiSection className="max-w-3xl">
              <p className={learnAiSectionEyebrow()}>The problem</p>
              <div className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                <p className="text-xl sm:text-2xl font-light text-zinc-900 dark:text-zinc-100 leading-snug">
                  {ART_OF_AI_AGENTS_PROBLEM_LEAD}
                </p>
                <p>{ART_OF_AI_AGENTS_PROBLEM_SECOND}</p>
              </div>
              <LearnAiPullQuote>{ART_OF_AI_AGENTS_QUOTE_ASSISTANCE}</LearnAiPullQuote>
            </LearnAiSection>
          </LearnAiReveal>
        </div>

        <LearnAiReveal as="section">
          <LearnAiSection className="max-w-5xl">
            <h2 className={cn(learnAiSectionTitle(), 'mb-8 max-w-3xl')}>{ART_OF_AI_AGENTS_OUTCOMES_HEADING}</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {ART_OF_AI_AGENTS_LEARNING_OUTCOMES.map((card) => (
                <LearnAiLearningCard key={card.title} variant={card.variant} title={card.title} body={card.body} />
              ))}
            </div>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiSection className="max-w-3xl">
          <LearnAiPullQuote tension>{ART_OF_AI_AGENTS_QUOTE_SUMMARY}</LearnAiPullQuote>
        </LearnAiSection>

        <AgentsProcessSection />

        <AgentsHumanSplit />

        <LearnAiReveal as="section">
          <LearnAiSection className="max-w-5xl">
            <p className={learnAiSectionEyebrow()}>Sample scenarios</p>
            <div className="grid gap-4 sm:gap-5 mt-2">
              {ART_OF_AI_AGENTS_SCENARIOS.map((s) => (
                <LearnAiScenarioCard key={s.title} title={s.title} body={s.body} />
              ))}
            </div>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiReveal as="section">
          <LearnAiSection>
            <p className={learnAiSectionEyebrow()}>What makes this different</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed max-w-2xl">
              This is not a funnel for a tool. It is a workshop-shaped build session with room to refuse hype and keep
              workflows legible.
            </p>
            <ul className="list-none space-y-2.5 text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
              {ART_OF_AI_AGENTS_DIFFERENTIATION_BULLETS.map((line) => (
                <li key={line} className="flex gap-3 pl-1">
                  <GlyphListMark />
                  <span className="min-w-0">{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed max-w-2xl">
              The point is repeatable practice: small automations you can read, revise, and stand behind.
            </p>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiSection className="max-w-3xl">
          <LearnAiPullQuote>{ART_OF_AI_AGENTS_QUOTE_SCALING}</LearnAiPullQuote>
        </LearnAiSection>

        <LearnAiReveal as="section">
          <LearnAiSection className="max-w-5xl">
            <p className={learnAiSectionEyebrow()}>Format options</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {ART_OF_AI_AGENTS_FORMATS.map((f) => (
                <FormatCard key={`${f.duration}-${f.kind}`} duration={f.duration} kind={f.kind} desc={f.desc} />
              ))}
            </div>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiReveal as="section">
          <LearnAiSection>
            <p className={learnAiSectionEyebrow()}>Ideal for</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              {ART_OF_AI_AGENTS_IDEAL_INTRO}
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {ART_OF_AI_AGENTS_IDEAL_VENUES.map((venue) => (
                <li
                  key={venue}
                  className="rounded-sm border border-zinc-200 bg-white/90 px-3 py-2 text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-300 dark:shadow-none"
                >
                  {venue}
                </li>
              ))}
            </ul>
          </LearnAiSection>
        </LearnAiReveal>

        <LearnAiAboutBlock />

        <LearnAiReveal className="max-w-5xl mx-auto px-5 sm:px-6">
          <p className={learnAiSectionEyebrow()}>Proof-ready</p>
          <h2 className={cn(learnAiSectionTitle(), 'mb-3')}>Presence &amp; documentation</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed">
            Host lines, quotes, and media can be updated as engagements are confirmed — the layout stays finished either
            way.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <ProofSlot
              label="Presented with / Hosted by"
              value={ART_OF_AI_AGENTS_PROOF.presentedWith}
              placeholder={ART_OF_AI_AGENTS_PROOF_PLACEHOLDERS.presentedWith}
            />
            <ProofSlot
              label="Organizer notes"
              value={ART_OF_AI_AGENTS_PROOF.organizerNotes}
              placeholder={ART_OF_AI_AGENTS_PROOF_PLACEHOLDERS.organizerNotes}
            />
            <ProofSlot
              label="Audience response"
              value={ART_OF_AI_AGENTS_PROOF.audienceResponse}
              placeholder={ART_OF_AI_AGENTS_PROOF_PLACEHOLDERS.audienceResponse}
            />
            <ProofSlot
              label="Still image / clip"
              value={ART_OF_AI_AGENTS_PROOF.stillOrClip}
              placeholder={ART_OF_AI_AGENTS_PROOF_PLACEHOLDERS.stillOrClip}
            />
          </div>
        </LearnAiReveal>

        <LearnAiReveal as="section">
          <LearnAiSection id="inquiry" className="max-w-2xl scroll-mt-28">
            <h2 className={cn(learnAiSectionTitle(), 'mb-5')}>Bring this workshop to your space</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">The Art of AI Agents</span> is available
              for residencies, studios, schools, museums, and custom institutional programs — as a single intensive or a
              stretched cohort format.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={mailtoLearnAi('Host “The Art of AI Agents”')}
                className="inline-flex justify-center items-center rounded-sm bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white dark:focus-visible:ring-offset-zinc-950"
              >
                Email to book
              </a>
              <Link
                href={ART_OF_AI_AGENTS_COURSE_HUB}
                className="inline-flex justify-center items-center rounded-sm border border-zinc-300 text-zinc-800 px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-500 dark:focus-visible:ring-offset-zinc-950"
              >
                Go to course materials
              </Link>
            </div>

            <p className="text-zinc-600 dark:text-zinc-500 mb-2 text-sm sm:text-base leading-relaxed">
              Direct email:{' '}
              <a
                href={`mailto:${ART_OF_AI_AGENTS_CONTACT_EMAIL}`}
                className="text-zinc-900 underline underline-offset-4 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-sm dark:text-zinc-200 dark:hover:text-white dark:focus-visible:ring-zinc-500"
              >
                {ART_OF_AI_AGENTS_CONTACT_EMAIL}
              </a>
            </p>
          </LearnAiSection>
        </LearnAiReveal>
      </div>
    </div>
  )
}
