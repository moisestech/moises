import { HiOutlineArrowRight } from 'react-icons/hi2'
import {
  TRUST_CASE_A,
  TRUST_CASE_B,
  TRUST_EVAL_ANATOMY,
  TRUST_METHOD_TRANSFER,
  TRUST_METHOD_TRANSFER_LINE,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram'

const STAGE = Object.fromEntries(TRUST_EVAL_ANATOMY.map((stage) => [stage.id, stage]))

/**
 * The five-part method from Case A applied to the unseen card.
 *
 * The two columns exist to be compared, so this is a grid rather than a canvas:
 * it reflows to stacked pairs on a phone instead of shrinking the type.
 */
export function TrustMethodTransfer({ className }: { className?: string }) {
  return (
    <TrustFigure
      className={className}
      eyebrow="Transfer"
      title="The same five questions on a different card"
      caption={TRUST_METHOD_TRANSFER_LINE}
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)_1.25rem_minmax(0,1fr)]">
        <p className="hidden text-[10px] font-semibold uppercase tracking-wide text-stone-500 sm:block">
          The question
        </p>
        <p className="hidden text-[10px] font-semibold uppercase tracking-wide text-stone-500 sm:block">
          {TRUST_CASE_A.title}
        </p>
        <span className="hidden sm:block" />
        <p className="hidden text-[10px] font-semibold uppercase tracking-wide text-stone-500 sm:block">
          {TRUST_CASE_B.title}
        </p>

        {TRUST_METHOD_TRANSFER.map((row) => {
          const stage = STAGE[row.stage]
          return (
            <div
              key={row.stage}
              className="grid grid-cols-1 gap-2 rounded-lg border border-stone-200 p-3 sm:col-span-4 sm:grid-cols-[8.5rem_minmax(0,1fr)_1.25rem_minmax(0,1fr)] sm:items-start dark:border-stone-700"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{stage?.term}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">{stage?.question}</p>
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500 sm:hidden">
                  {TRUST_CASE_A.title}
                </p>
                <p className={cn('text-sm text-stone-700 dark:text-stone-300')}>{row.caseA}</p>
              </div>

              <HiOutlineArrowRight className="hidden h-4 w-4 shrink-0 text-stone-400 sm:mt-0.5 sm:block" aria-hidden />

              <div className="min-w-0 rounded-md bg-emerald-50/60 p-2 dark:bg-emerald-950/30">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-800 sm:hidden dark:text-emerald-300">
                  {TRUST_CASE_B.title}
                </p>
                <p className="text-sm text-stone-800 dark:text-stone-200">{row.caseB}</p>
              </div>
            </div>
          )
        })}
      </div>
    </TrustFigure>
  )
}
