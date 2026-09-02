'use client'

import Link from 'next/link'
import {
  EVALS_FIELD_VOCAB,
  EVALS_SOURCE,
  TRUST_BASE,
  TRUST_CASE_A,
  TRUST_CHAPTERS,
  TRUST_LEARN_BASE,
  TRUST_ONE_LINE,
  TRUST_OUTCOMES,
  TRUST_PROBLEM_NAME,
  TRUST_QUICK_FACTS,
  TRUST_REHEARSE_HREF,
  TRUST_ROLES,
  TRUST_SECONDARY_LINE,
  TRUST_SUBTITLE,
  TRUST_THESIS,
  TRUST_TITLE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { trust } from './trust-tokens'
import { TrustPlaceholderFrame } from './TrustPlaceholderFrame'

export function TrustLandingClient() {
  return (
    <main className={cn(trust.shell, 'overflow-x-clip pb-20 sm:pb-24')}>
      <div className={trust.main}>
        <p className={trust.eyebrow}>Workshop · field lab · 30 minutes</p>
        <h1 className={cn(trust.title, 'mt-2')}>{TRUST_TITLE}</h1>
        <p className="mt-3 max-w-2xl text-lg font-light text-stone-600 dark:text-stone-300">{TRUST_SUBTITLE}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {TRUST_SECONDARY_LINE} {TRUST_THESIS}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`${TRUST_LEARN_BASE}/${TRUST_CHAPTERS[0].slug}`} className={trust.btnPrimary}>
            Start the lab
          </Link>
          <Link href={TRUST_REHEARSE_HREF} className={trust.btnSecondary}>
            Rehearse (facilitator)
          </Link>
          <Link href="/workshop/agentic-evidence-pipeline" className={trust.link}>
            Related: Agentic Evidence Pipeline
          </Link>
        </div>

        <dl className="mt-8 grid gap-3 sm:grid-cols-4">
          {TRUST_QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-stone-700 dark:bg-stone-900">
              <dt className={trust.label}>{fact.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-stone-900 dark:text-stone-100">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <TrustPlaceholderFrame asset="peelOpenHero" />
          <div>
            <p className={trust.eyebrow}>The problem</p>
            <h2 className={cn(trust.h2, 'mt-2')}>{TRUST_PROBLEM_NAME}</h2>
            <p className={cn(trust.body, 'mt-3')}>
              Forward-deployed work rewards speed and autonomy. Those strengths can collapse five jobs into one
              person: interpret the need, build the workflow, decide if it works, grant permission to act, and
              explain it to the client. That is not independent evaluation.
            </p>
            <blockquote className="mt-4 border-l-2 border-cyan-400 pl-4 text-sm text-stone-700 dark:text-stone-300">
              {TRUST_ONE_LINE}
            </blockquote>
          </div>
        </div>

        <section className="mt-14 border-t border-stone-200 pt-10 dark:border-stone-800">
          <h2 className={trust.h2}>What you leave able to do</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {TRUST_OUTCOMES.map((outcome) => (
              <article key={outcome.title} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                <h3 className="text-sm font-bold text-stone-950 dark:text-stone-50">{outcome.title}</h3>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{outcome.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-stone-200 pt-10 dark:border-stone-800">
          <h2 className={trust.h2}>Four seats, one case</h2>
          <p className={cn(trust.muted, 'mt-2 max-w-2xl')}>
            Not four courses. The taught fixture is a program-launch agent. {TRUST_CASE_A.fixtureNote}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ROLES.map((role) => (
              <article key={role.id} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                <p className={trust.label}>{role.shortLabel}</p>
                <h3 className="mt-1 text-sm font-bold">{role.label}</h3>
                <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">{role.primaryQuestions[0]}</p>
                <p className="mt-2 text-xs text-stone-500">Blind spot: {role.blindSpot}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-stone-200 pt-10 dark:border-stone-800">
          <h2 className={trust.h2}>Field vocabulary</h2>
          <p className={cn(trust.muted, 'mt-2 max-w-2xl')}>
            Shared language for the 30 minutes. Each term is taught in a chapter, not dumped as a glossary quiz.
          </p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {EVALS_FIELD_VOCAB.map((row) => (
              <div key={row.term} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
                <dt className="text-sm font-bold text-stone-950 dark:text-stone-50">{row.term}</dt>
                <dd className="mt-1 text-sm text-stone-600 dark:text-stone-400">{row.meaning}</dd>
                <dd className="mt-2 text-[10px] uppercase tracking-wide text-stone-400">
                  Taught in {TRUST_CHAPTERS.find((chapter) => chapter.id === row.chapterId)?.title}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 border-t border-stone-200 pt-10 dark:border-stone-800">
          <h2 className={trust.h2}>30-minute clock</h2>
          <ol className="mt-4 space-y-2">
            {TRUST_CHAPTERS.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`${TRUST_LEARN_BASE}/${chapter.slug}`}
                  className="flex flex-col gap-1 rounded-xl border border-stone-200 bg-white px-4 py-3 hover:border-cyan-400/50 dark:border-stone-700 dark:bg-stone-900 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-sm font-semibold">
                    {chapter.number}. {chapter.title}
                  </span>
                  <span className="text-xs text-stone-500">
                    {chapter.clock} min · {chapter.checkpoint}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-10 text-xs text-stone-500">
          {EVALS_SOURCE.honesty} Source lecture: {EVALS_SOURCE.title} ({EVALS_SOURCE.speaker}).{' '}
          {EVALS_SOURCE.languageNote} Skipped on purpose: {EVALS_SOURCE.skip.map((item) => item.clock).join('; ')}.
        </p>
        <p className="mt-3 text-xs text-stone-500">
          Teaching instrument. Both cases are synthetic fixtures. Related reference implementation:{' '}
          <Link href="/workshop/agentic-evidence-pipeline" className={trust.link}>
            Agentic Evidence Pipeline
          </Link>
          . Public listing:{' '}
          <Link href="/workshops" className={trust.link}>
            Workshops
          </Link>
          . Facilitator clock lives at{' '}
          <Link href={TRUST_REHEARSE_HREF} className={trust.link}>
            {TRUST_BASE}/rehearse
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
