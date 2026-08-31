import { GraduationCap, PencilRuler, Search, Workflow } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

const PETALS = [
  {
    title: 'Client / workflow discovery',
    body: 'Watch the stuck point. Name the owner and the acceptance test.',
    icon: Search,
    className: 'border-cyan-200 bg-cyan-50/70 dark:border-cyan-800 dark:bg-cyan-950/40',
  },
  {
    title: 'Product / experience design',
    body: 'Turn ambiguity into a reviewable path people can follow.',
    icon: PencilRuler,
    className: 'border-sky-200 bg-sky-50/70 dark:border-sky-800 dark:bg-sky-950/40',
  },
  {
    title: 'Software / integration engineering',
    body: 'Ship the slice: tools, permissions, persistence, and a fallback.',
    icon: Workflow,
    className: 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/40',
  },
  {
    title: 'Teaching / capability transfer',
    body: 'Leave a session and a runbook the team can operate without me.',
    icon: GraduationCap,
    className: 'border-violet-200 bg-violet-50/70 dark:border-violet-800 dark:bg-violet-950/40',
  },
] as const;

export function FdeRoleMap({ className }: { className?: string }) {
  return (
    <section id="role-map" className={cn('scroll-mt-32', className)} aria-labelledby="role-map-heading">
      <h2 id="role-map-heading" className={opp.h2}>
        Forward-Deployed AI practice
      </h2>
      <p className={`mt-3 max-w-3xl ${opp.muted}`}>
        Four petals around one practice — not a Platform / SWE / SA Venn. Recruiter scan: I sit with the
        workflow, design the experience, engineer the integration, and teach the handoff.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {PETALS.map((petal) => {
          const Icon = petal.icon;
          return (
            <article key={petal.title} className={cn(opp.card, 'p-4', petal.className)}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-300/60 bg-white/70 dark:border-stone-600 dark:bg-stone-900/60">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h3 className={opp.matrixPrimary}>{petal.title}</h3>
                  <p className={cn(opp.matrixSecondary, 'mt-1')}>{petal.body}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <p className={cn(opp.subtle, 'mt-4 text-center')}>Center: Forward-Deployed AI practice</p>
    </section>
  );
}
