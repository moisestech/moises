'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { LearnAiPullQuote } from '@/components/learn-ai/LearnAiPullQuote'
import { LearnAiReveal } from '@/components/learn-ai/LearnAiReveal'
import {
  learnAiAtmosphereNavy,
  learnAiPageRoot,
  learnAiSectionEyebrow,
  learnAiSectionTitle,
} from '@/components/learn-ai/learn-ai-tokens'
import { GlyphBracketPair } from '@/components/learn-ai/LearnAiGlyphs'
import {
  LEARN_AI_LAB_CRITIQUES,
  LEARN_AI_LAB_HUMOR_MECHANICS,
  LEARN_AI_LAB_EDUCATIONAL_MECHANICS,
  LEARN_AI_LAB_INTRO,
  LEARN_AI_LAB_PROOF_ITEMS,
  LEARN_AI_LAB_PULL_QUOTES,
  LEARN_AI_LAB_SESSION_MAP,
  LEARN_AI_LAB_SKILLS,
  LEARN_AI_LAB_STATUS,
  LEARN_AI_LAB_THESIS_SUMMARY,
  LEARN_AI_LAB_THESIS_SUPPORTS,
  LEARN_AI_LAB_TOC,
  LEARN_AI_LAB_VERSIONS,
  LEARN_AI_LAB_VISUAL_STRATEGY,
} from '@/constants/learn-ai-lab-content'
import { LEARN_AI_PROCESS_STEPS, LEARN_AI_PROCESS_TAGLINE } from '@/constants/learn-ai-content'
import { cn } from '@/lib/utils'

function LabToc() {
  const linkClass =
    'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline-offset-4 hover:underline'

  return (
    <>
      <nav
        className="lg:hidden mb-10 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 px-4 py-3"
        aria-label="On this page"
      >
        <details>
          <summary className="cursor-pointer text-xs font-medium tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400">
            On this page
          </summary>
          <ul className="mt-3 space-y-2 list-none pl-0 text-sm">
            {LEARN_AI_LAB_TOC.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      <aside
        className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-6.5rem)] overflow-y-auto pr-3 w-[200px] shrink-0"
        aria-label="On this page"
      >
        <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-zinc-500 mb-4">On this page</p>
        <ul className="space-y-2.5 list-none pl-0 text-sm leading-snug">
          {LEARN_AI_LAB_TOC.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

function SessionBlockCard({
  title,
  purpose,
  tension,
  skill,
  critique,
  kind,
}: {
  title: string
  purpose: string
  tension: string
  skill: string
  critique: string
  kind: 'opening' | 'segment' | 'closing'
}) {
  const rail =
    kind === 'opening'
      ? 'border-l-lime-600/70 dark:border-l-lime-500/50'
      : kind === 'closing'
        ? 'border-l-zinc-400 dark:border-l-zinc-600'
        : 'border-l-zinc-300 dark:border-l-zinc-700'

  return (
    <div
      className={cn(
        'rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/35 pl-4 pr-4 py-5 sm:pl-5 sm:pr-5 border-l-4',
        rail
      )}
    >
      <div className="flex flex-wrap items-baseline gap-2 mb-3">
        <h3 className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
        <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          {kind === 'opening' ? 'Open' : kind === 'closing' ? 'Close' : 'Segment'}
        </span>
      </div>
      <dl className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-0.5">Purpose</dt>
          <dd className="leading-relaxed">{purpose}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-0.5">Key tension / joke</dt>
          <dd className="leading-relaxed">{tension}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-lime-800/90 dark:text-lime-400/90 mb-0.5">
            Skill
          </dt>
          <dd className="leading-relaxed">{skill}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-0.5">Critique</dt>
          <dd className="leading-relaxed">{critique}</dd>
        </div>
      </dl>
    </div>
  )
}

function SkillLabCard({ title, human, aiAssist, risk }: (typeof LEARN_AI_LAB_SKILLS)[number]) {
  return (
    <div
      className={cn(
        'h-full rounded-sm border border-zinc-200 dark:border-zinc-800',
        'bg-white/90 dark:bg-zinc-900/30 p-5 sm:p-6 transition-colors',
        'hover:border-lime-600/25 dark:hover:border-lime-500/20'
      )}
    >
      <div className="flex items-start gap-2 mb-4">
        <GlyphBracketPair className="mt-0.5 opacity-70 shrink-0 text-zinc-500" />
        <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 leading-snug">{title}</h3>
      </div>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-1">What stays human</dt>
          <dd className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{human}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-lime-800/90 dark:text-lime-400/85 mb-1">
            What AI can assist with
          </dt>
          <dd className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{aiAssist}</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-1">Risk / warning</dt>
          <dd className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{risk}</dd>
        </div>
      </dl>
    </div>
  )
}

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-sm border border-zinc-200 bg-white/90 px-3 py-2 text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-300 dark:shadow-none">
      {children}
    </span>
  )
}

export default function LearnAiLabPageClient() {
  return (
    <div className={learnAiPageRoot()}>
      <header className={cn(learnAiAtmosphereNavy(), 'border-b border-zinc-200/80 dark:border-zinc-800/80')}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(101,163,13,0.05),transparent)] dark:bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(163,230,53,0.04),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-4">
            <Link
              href="/workshop/learn-ai-without-losing-yourself"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 underline-offset-4 hover:underline"
            >
              Learn AI Without Losing Yourself
            </Link>
            <span className="text-zinc-400 dark:text-zinc-600"> · </span>
            <span>Lab</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex rounded-sm border border-lime-700/30 bg-lime-500/10 dark:border-lime-500/25 dark:bg-lime-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-lime-900 dark:text-lime-300/95">
              {LEARN_AI_LAB_STATUS}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 max-w-3xl">
            Inside the Workshop
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
            {LEARN_AI_LAB_INTRO}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          <LabToc />

          <div className="min-w-0 flex-1 space-y-16 sm:space-y-20 pb-24">
            <LearnAiReveal as="section" id="overview" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Overview</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-4')}>What this page is</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">{LEARN_AI_LAB_INTRO}</p>
              <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
                For booking and formats, use the{' '}
                <Link
                  href="/workshop/learn-ai-without-losing-yourself"
                  className="text-zinc-800 dark:text-zinc-300 underline underline-offset-4 hover:text-lime-800 dark:hover:text-lime-400"
                >
                  public workshop page
                </Link>
                .
              </p>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="thesis" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Core thesis</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-6')}>Conceptual center</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mb-8">{LEARN_AI_LAB_THESIS_SUMMARY}</p>
              <ul className="list-none space-y-2.5 mb-10 max-w-3xl">
                {LEARN_AI_LAB_THESIS_SUPPORTS.map((line) => (
                  <li key={line} className="flex gap-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                    <GlyphBracketPair className="mt-1 shrink-0 opacity-70" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4 max-w-3xl">
                {LEARN_AI_LAB_PULL_QUOTES.map((q) => (
                  <LearnAiPullQuote key={q}>{q}</LearnAiPullQuote>
                ))}
              </div>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="session-map" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Run of show</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-2')}>30–40 minute session map</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-8 max-w-2xl">
                Backbone for the live talk, slides, and future versions. Adjust timing; keep the sequence legible.
              </p>
              <div className="space-y-4 max-w-4xl">
                {LEARN_AI_LAB_SESSION_MAP.map((block) => (
                  <SessionBlockCard
                    key={block.title}
                    kind={block.kind}
                    title={block.title}
                    purpose={block.purpose}
                    tension={block.tension}
                    skill={block.skill}
                    critique={block.critique}
                  />
                ))}
              </div>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="skills" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Concrete takeaways</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-8')}>Skills taught</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl">
                {LEARN_AI_LAB_SKILLS.map((s) => (
                  <SkillLabCard key={s.title} {...s} />
                ))}
              </div>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="critiques" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Conceptual terrain</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-6')}>Critiques surfaced</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl">
                Map of themes the workshop keeps in play — so critical depth does not get lost in practical tips.
              </p>
              <ul className="flex flex-wrap gap-2.5 list-none p-0">
                {LEARN_AI_LAB_CRITIQUES.map((c) => (
                  <li key={c}>
                    <TagPill>{c}</TagPill>
                  </li>
                ))}
              </ul>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="humor" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Method</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-6')}>Humor / edutainment strategy</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-3xl">
                Memorable teaching: laugh at recognition, then land the skill and the discomfort.
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mb-12">
                <div className="rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/25 p-5 sm:p-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">What makes it funny</h3>
                  <ul className="list-none space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {LEARN_AI_LAB_HUMOR_MECHANICS.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-lime-700 dark:text-lime-500/90">·</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/25 p-5 sm:p-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">What makes it educational</h3>
                  <ul className="list-none space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {LEARN_AI_LAB_EDUCATIONAL_MECHANICS.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-lime-700 dark:text-lime-500/90">·</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/35 p-6 sm:p-8 max-w-3xl">
                <h3 className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-2">Core formula</h3>
                <p className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight mb-6">
                  Pressure → Prompt → Problem → Practice
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">{LEARN_AI_PROCESS_TAGLINE}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {LEARN_AI_PROCESS_STEPS.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-sm border border-zinc-100 dark:border-zinc-800/80 p-4 bg-zinc-50/50 dark:bg-black/20"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-800 dark:text-lime-400/90 mb-2">
                        {step.title}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="visual" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Visual</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-6')}>Visual strategy</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-8 max-w-2xl">
                Source for site, slides, promos, and posters. Placeholders are intentional shells until assets exist.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-5xl">
                {LEARN_AI_LAB_VISUAL_STRATEGY.map((v) => (
                  <div
                    key={v.title}
                    className={cn(
                      'rounded-sm border p-5 sm:p-6',
                      v.placeholder
                        ? 'border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/40 dark:bg-zinc-950/40'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/30'
                    )}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{v.title}</h3>
                      {v.placeholder ? (
                        <span className="text-[9px] uppercase tracking-[0.16em] text-zinc-400 shrink-0">Shell</span>
                      ) : null}
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="proof" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Proof</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-6')}>Future assets / proof</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 max-w-2xl">
                Checklist after live events — operational memory, not vanity.
              </p>
              <ul className="space-y-4 max-w-3xl list-none p-0">
                {LEARN_AI_LAB_PROOF_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-4 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/25 px-4 py-4"
                  >
                    <span
                      className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border border-zinc-300 dark:border-zinc-600"
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1 leading-relaxed">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </LearnAiReveal>

            <LearnAiReveal as="section" id="versions" className="scroll-mt-28">
              <p className={learnAiSectionEyebrow()}>Expansion</p>
              <h2 className={cn(learnAiSectionTitle(), 'mb-8')}>Versioning / roadmap</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-5xl">
                {LEARN_AI_LAB_VERSIONS.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/30 p-5"
                  >
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2">{v.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </LearnAiReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
