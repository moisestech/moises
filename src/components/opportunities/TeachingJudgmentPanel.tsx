import Link from 'next/link'
import { saturdayLabLive } from '@/content/opportunities/packs/designFacilitationEvidencePack'
import { TRUST_BASE } from '@/content/workshops/trust-is-not-a-vibe'
import { AEP_WORKSHOP_HREF } from '@/content/workshops/aepHarness'
import { opp } from '@/components/opportunities/opportunityTheme'
import { cn } from '@/lib/utils'

const SPINE = [
  { n: '01', label: 'Observable outcome', body: 'Someone can see whether the learner did the thing.' },
  { n: '02', label: 'Authentic decision', body: 'Start with an action that might actually ship.' },
  { n: '03', label: 'Role-based practice', body: 'PM, engineering, and strategy/design inspect the same case.' },
  { n: '04', label: 'Unseen transfer', body: 'A second case, not a recitation of the first.' },
  { n: '05', label: 'Evidence of learning', body: 'Correct classification and a named safeguard — not attendance.' },
] as const

const LENSES = [
  { id: 'pm', label: 'Product', body: 'Outcome and decision. What is acceptable? What is intolerable?' },
  { id: 'eng', label: 'Engineer', body: 'System and control. Source, tool, permission, rollback.' },
  { id: 'design', label: 'Strategy / design', body: 'Person and handoff. Who feels it, and can a person intervene?' },
] as const

const COMPARE = [
  { participation: 'Attended the workshop', learning: 'Applies the framework to a new case' },
  { participation: 'Completed the exercise', learning: 'Identifies the correct failure' },
  { participation: 'Shared an opinion', learning: 'Justifies a control or approval boundary' },
] as const

const LINKS = [
  { href: '/oolite-arts', label: 'Oolite Digital Lab photograph' },
  { href: saturdayLabLive.hub, label: 'Saturday Lab hub' },
  { href: saturdayLabLive.facilitator, label: 'Facilitator run-of-show' },
  { href: saturdayLabLive.vibeCoding, label: 'Vibe Coding exercise' },
  { href: saturdayLabLive.exitTicket, label: 'Exit-ticket instrument' },
  { href: '/workshop/the-art-of-ai-agents', label: 'The Art of AI Agents' },
  { href: AEP_WORKSHOP_HREF, label: 'Agentic Evidence Pipeline' },
  { href: TRUST_BASE, label: 'Trust Is Not a Vibe' },
] as const

export function TeachingJudgmentPanel({ className }: { className?: string }) {
  return (
    <section id="teaching-judgment" className={cn('mt-10 sm:mt-14', className)} aria-labelledby="teaching-judgment-heading">
      <p className={opp.accent}>Instructional design</p>
      <h2 id="teaching-judgment-heading" className={cn(opp.h2, 'mt-2')}>
        Teaching technical judgment — not tool memorization
      </h2>
      <p className={cn(opp.muted, 'mt-3 max-w-3xl')}>
        The question is whether an output may act. Mixed seats inspect one case, then transfer the same framework to a
        case they have not rehearsed.
      </p>

      <ol className="mt-6 grid gap-2 sm:grid-cols-5">
        {SPINE.map((step) => (
          <li key={step.n} className={cn(opp.card, 'p-3')}>
            <p className={opp.subtle}>{step.n}</p>
            <p className={cn(opp.matrixPrimary, 'mt-1')}>{step.label}</p>
            <p className={cn(opp.subtle, 'mt-2')}>{step.body}</p>
          </li>
        ))}
      </ol>
      <p className={cn(opp.subtle, 'mt-3')}>
        Observable outcome → authentic decision → role-based practice → unseen transfer → evidence of learning.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {LENSES.map((lens) => (
          <article key={lens.id} className={cn(opp.card, 'p-4')}>
            <p className={opp.label}>{lens.label}</p>
            <p className={cn(opp.body, 'mt-2')}>{lens.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <caption className={cn(opp.subtle, 'mb-3 text-left')}>Participation is not learning.</caption>
          <thead>
            <tr className="border-b border-stone-200 dark:border-stone-700">
              <th className="py-2 pr-4 font-semibold">Participation</th>
              <th className="py-2 font-semibold">Learning</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE.map((row) => (
              <tr key={row.participation} className="border-b border-stone-100 dark:border-stone-800">
                <td className="py-2 pr-4 text-stone-600 dark:text-stone-400">{row.participation}</td>
                <td className="py-2 text-stone-900 dark:text-stone-100">{row.learning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={cn(opp.muted, 'mt-6 max-w-3xl')}>
        Designed assessment instruments and transfer activities; completed learner responses and measured learning
        gains are not published.
      </p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {LINKS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={opp.linkAccent}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href={AEP_WORKSHOP_HREF} className={opp.linkAccent}>
            Allow / Ask / Deny in the AEP harness
          </Link>
        </li>
      </ul>
    </section>
  )
}
