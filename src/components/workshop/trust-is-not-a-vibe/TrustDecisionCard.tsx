import Link from 'next/link'
import {
  TRUST_CASE_A,
  TRUST_CENTRAL_QUESTION,
  TRUST_REHEARSE_HREF,
  TRUST_SESSION_TITLE,
  TRUST_SURFACES_HREF,
  TRUST_TITLE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustMark, TRUST_LAYER_MARKS, TRUST_VERDICT_MARKS } from './TrustMarks'
import { trust } from './trust-tokens'

export function TrustDecisionCard() {
  return (
    <main className={cn(trust.shell, 'pb-16 print:bg-white print:text-black')}>
      <style>{`@media print { header, footer, [data-site-chrome] { display: none !important; } }`}</style>
      <div className={cn(trust.main, 'max-w-3xl print:max-w-none print:px-0')}>
        <p className={cn(trust.eyebrow, 'print:hidden')}>Printable card · not indexed</p>
        <article className="mt-4 rounded-xl border border-stone-300 bg-white p-6 dark:border-stone-600 dark:bg-stone-900 print:border-stone-900 print:shadow-none">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            {TRUST_TITLE} · {TRUST_SESSION_TITLE}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-stone-950 dark:text-stone-50">{TRUST_CENTRAL_QUESTION}</h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{TRUST_CASE_A.fixtureNote}</p>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Vote</h2>
            <ul className="mt-2 grid gap-2 sm:grid-cols-3">
              {TRUST_VERDICT_MARKS.map((item) => (
                <li key={item.id} className="flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 dark:border-stone-700">
                  <TrustMark id={item.id} className="h-5 w-5" />
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="ml-auto h-4 w-4 rounded-full border border-stone-400" aria-hidden />
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Inspect</h2>
            <ul className="mt-2 space-y-2">
              {TRUST_LAYER_MARKS.map((item) => (
                <li key={item.id} className="flex items-start gap-2 rounded-lg border border-dashed border-stone-300 px-3 py-2 dark:border-stone-600">
                  <TrustMark id={item.id} className="mt-0.5 h-5 w-5" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="min-h-[2.5rem] border-b border-stone-200 text-xs text-stone-400 dark:border-stone-700">
                      Write what you found
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-500">One safeguard</h2>
            <p className="mt-2 min-h-[4rem] rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-400 dark:border-stone-700">
              A specific validation, approval, or rollback — not “human review.”
            </p>
          </section>
        </article>

        <div className="mt-6 flex flex-wrap gap-3 print:hidden">
          <Link href={TRUST_REHEARSE_HREF} className={trust.link}>
            Back to rehearse
          </Link>
          <Link href={TRUST_SURFACES_HREF} className={trust.link}>
            Five surfaces
          </Link>
        </div>
      </div>
    </main>
  )
}
