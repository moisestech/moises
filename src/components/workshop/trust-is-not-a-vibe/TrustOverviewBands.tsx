import Image from 'next/image'
import Link from 'next/link'
import {
  TRUST_CHAPTERS,
  TRUST_ISLAND_BEATS,
  TRUST_LEARN_BASE,
  TRUST_ONE_LINE,
  TRUST_OUTCOMES,
  TRUST_OVERVIEW_SPEC,
  TRUST_PLACEHOLDERS,
  type TrustPlaceholder,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_VERDICT_CLASS, TRUST_VERDICT_HINT, TRUST_VERDICT_LABEL, trust, trustOverview } from './trust-tokens'

const START_HREF = `${TRUST_LEARN_BASE}/${TRUST_CHAPTERS[0].slug}`

/** 01 — the orientation answers, before anyone commits 30 minutes. */
export function TrustOverviewSpec() {
  return (
    <div className="space-y-6">
      <dl className="grid gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 sm:grid-cols-2 dark:border-stone-700 dark:bg-stone-700">
        {TRUST_OVERVIEW_SPEC.map((row) => (
          <div key={row.label} className="bg-stone-50 px-4 py-3 dark:bg-stone-900">
            <dt className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">{row.label}</dt>
            <dd className="mt-1 text-base text-stone-800 dark:text-stone-200">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap items-center gap-4">
        <Link href={START_HREF} className={trust.btnPrimary}>
          Start the lab
        </Link>
        <span className="text-sm text-stone-500">Chapter 1 · {TRUST_CHAPTERS[0].title}</span>
      </div>
    </div>
  )
}

/** 02 — the three answers the question has, named once. */
export function TrustOverviewVerdicts() {
  return (
    <dl className="grid gap-3 sm:grid-cols-3">
      {(['allow', 'ask', 'deny'] as const).map((verdict) => (
        <div key={verdict} className={cn('rounded-xl border px-4 py-3', TRUST_VERDICT_CLASS[verdict])}>
          <dt className="text-base font-bold">{TRUST_VERDICT_LABEL[verdict]}</dt>
          <dd className="mt-1 text-sm leading-snug">{TRUST_VERDICT_HINT[verdict]}</dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * 03 — the merged argument. The three beats carry the thesis, the still and the
 * four goals carry what you walk out able to do. Static: the only thing the
 * Overview asks you to operate is your seat.
 */
export function TrustOverviewWhy() {
  const still = TRUST_PLACEHOLDERS.peelOpenHero as TrustPlaceholder
  const src = still.src

  return (
    <div className="space-y-10">
      <ol className="grid gap-3 sm:grid-cols-3">
        {TRUST_ISLAND_BEATS.map((beat, index) => (
          <li key={beat.id} className="rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700">
            <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
              {index + 1}
            </p>
            <p className="mt-1 text-lg font-semibold text-stone-950 dark:text-stone-50">{beat.line}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{beat.body}</p>
          </li>
        ))}
      </ol>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
        <div>
          <p className={trustOverview.body}>
            Forward-deployed work rewards speed and autonomy. Those strengths can collapse five jobs into one person:
            interpret the need, build the workflow, decide if it works, grant permission to act, and explain it to the
            client. That is not independent evaluation.
          </p>
          <blockquote className="mt-6 border-l-2 border-cyan-400 pl-4 text-lg leading-relaxed text-stone-800 dark:text-stone-200">
            {TRUST_ONE_LINE}
          </blockquote>
          {src ? (
            <figure className="mt-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-900">
                <Image
                  src={src}
                  alt={still.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 620px"
                  unoptimized={src.startsWith('https://')}
                />
              </div>
              <figcaption className="mt-2 text-xs text-stone-500">{still.label}</figcaption>
            </figure>
          ) : null}
        </div>

        <div>
          <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-stone-500">
            What you walk out able to do
          </p>
          <ol className="mt-3 space-y-3">
            {TRUST_OUTCOMES.map((outcome, index) => (
              <li
                key={outcome.title}
                className="rounded-xl border border-stone-200 px-4 py-3 dark:border-stone-700"
              >
                <p className="text-sm font-semibold text-stone-950 dark:text-stone-50">
                  <span className="mr-1.5 font-space-mono text-[10px] text-stone-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {outcome.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{outcome.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
