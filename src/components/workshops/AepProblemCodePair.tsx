import { AepGitHubLink } from '@/components/workshops/AepGitHubMark'
import { AepWorkshopPlate } from '@/components/workshops/AepWorkshopPlate'
import type { AepCodePair, AepCodePairTone } from '@/content/workshops/aep-code-pairs'
import { opp } from '@/components/opportunities/opportunityTheme'
import { cn } from '@/lib/utils'

const TONE: Record<AepCodePairTone, string> = {
  deny: 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200',
  ask: 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200',
  inspect: 'border-cyan-300 bg-cyan-50 text-cyan-800 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-200',
  allow: 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200',
}

const TONE_LABEL: Record<AepCodePairTone, string> = {
  deny: 'Fail closed',
  ask: 'Needs review',
  inspect: 'Scoped',
  allow: 'Idempotent',
}

export function AepProblemCodePair({ pair }: { pair: AepCodePair }) {
  return (
    <article className="grid gap-4 lg:grid-cols-2 lg:items-start">
      <div className="space-y-4">
        <p
          className={cn(
            'inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold',
            TONE[pair.tone],
          )}
        >
          {TONE_LABEL[pair.tone]}
        </p>
        <h3 className={cn(opp.h3MoMA, 'mt-2')}>{pair.problem}</h3>
        <p className={cn(opp.body, 'mt-2 max-w-xl')}>{pair.why}</p>
        {pair.plate ? <AepWorkshopPlate id={pair.plate} className="mt-4" /> : null}
      </div>
      <div className={cn(opp.card, 'overflow-hidden')}>
        <pre className="overflow-x-auto bg-stone-950 p-4 text-[12px] leading-relaxed text-stone-100 dark:bg-black">
          <code>
            {pair.lines.map((line, index) => (
              <span key={`${pair.id}-${index}`} className="block whitespace-pre">
                <span className="mr-4 inline-block w-6 select-none text-right text-stone-500">
                  {pair.startLine + index}
                </span>
                {line}
              </span>
            ))}
          </code>
        </pre>
        <div className={cn(opp.illustrationCaption, 'flex items-center justify-between gap-3')}>
          <AepGitHubLink href={pair.href}>{pair.file}</AepGitHubLink>
        </div>
      </div>
    </article>
  )
}
