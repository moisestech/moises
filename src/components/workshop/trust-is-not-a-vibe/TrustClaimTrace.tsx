import { HiOutlineArrowRight } from 'react-icons/hi2'
import {
  TRUST_CLAIM_TRACE,
  TRUST_CLAIM_TRACE_LINE,
  TRUST_TRACE_VERDICT,
  type TrustTraceVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TrustFigure } from './diagram'

const VERDICT_CLASS: Record<TrustTraceVerdict, string> = {
  traced: 'border-emerald-400/60 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200',
  unsupported: 'border-amber-400/60 bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
  fabricated: 'border-red-400/60 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200',
}

/** A glyph as well as a color, so the verdict survives greyscale and projection. */
const VERDICT_GLYPH: Record<TrustTraceVerdict, string> = {
  traced: '✓',
  unsupported: '≠',
  fabricated: '∅',
}

/**
 * Each confident claim on the card beside the record it should have come from.
 *
 * Laid out as a reflowing grid rather than an SVG: at 390 pixels wide a 640-unit
 * canvas would render this much text at around seven pixels.
 */
export function TrustClaimTrace({ className }: { className?: string }) {
  return (
    <TrustFigure
      className={className}
      eyebrow="Provenance"
      title="Where each claim came from"
      caption={TRUST_CLAIM_TRACE_LINE}
      legend={
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {(Object.keys(TRUST_TRACE_VERDICT) as TrustTraceVerdict[]).map((verdict) => (
            <li key={verdict} className="flex items-center gap-2 text-xs">
              <span
                aria-hidden
                className={cn(
                  'flex h-5 w-5 shrink-0 items-center justify-center rounded border text-[11px] font-semibold',
                  VERDICT_CLASS[verdict]
                )}
              >
                {VERDICT_GLYPH[verdict]}
              </span>
              <span className="font-medium text-stone-800 dark:text-stone-200">
                {TRUST_TRACE_VERDICT[verdict].label}
              </span>
              <span className="text-stone-500 dark:text-stone-400">{TRUST_TRACE_VERDICT[verdict].meaning}</span>
            </li>
          ))}
        </ul>
      }
    >
      <ul className="space-y-2">
        {TRUST_CLAIM_TRACE.map((row) => (
          <li
            key={row.claim}
            // The verdict column is fixed rather than auto: each row is its own
            // grid, so a wider verdict would otherwise shift that row's record
            // column out of line with the rest.
            className="grid gap-2 rounded-lg border border-stone-200 p-3 sm:grid-cols-[minmax(0,1fr)_1.25rem_minmax(0,1fr)_8rem] sm:items-center dark:border-stone-700"
          >
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">The card says</p>
              <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{row.claim}</p>
              <p className="text-xs text-stone-600 dark:text-stone-400">{row.asserted}</p>
            </div>

            <HiOutlineArrowRight
              className="hidden h-4 w-4 shrink-0 text-stone-400 sm:block"
              aria-hidden
            />

            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">The record holds</p>
              <p className="break-words font-space-mono text-xs text-stone-700 dark:text-stone-300">{row.record}</p>
              <p className="text-xs text-stone-600 dark:text-stone-400">{row.found}</p>
            </div>

            <p
              className={cn(
                'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold',
                VERDICT_CLASS[row.verdict]
              )}
            >
              <span aria-hidden>{VERDICT_GLYPH[row.verdict]}</span>
              {TRUST_TRACE_VERDICT[row.verdict].label}
            </p>
          </li>
        ))}
      </ul>
    </TrustFigure>
  )
}
