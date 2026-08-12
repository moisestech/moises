'use client'

import type { MoonlighterPrinter } from '@/lib/workshop/moonlighter/types'

export function PrinterBoard({
  printers,
  onUpdate,
  editable = false,
}: {
  printers: MoonlighterPrinter[]
  editable?: boolean
  onUpdate?: (printerId: string, patch: Partial<MoonlighterPrinter>) => void
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {printers.map((p) => (
        <article key={p.id} className="border border-[var(--ml-soft-gray)] bg-white/50 p-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">{p.unit}</p>
          <p className="mt-1 font-medium capitalize">{p.state}</p>
          <p className="mt-1 text-xs text-[var(--ml-ink)]/70">Color: {p.color}</p>
          <p className="text-xs text-[var(--ml-ink)]/70">Job: {p.job ?? '—'}</p>
          <p className="text-xs text-[var(--ml-ink)]/70">
            Est: {p.estimate_min != null ? `${p.estimate_min} min` : '—'}
          </p>
          {editable && onUpdate && (
            <div className="mt-3 flex flex-wrap gap-1">
              {(['idle', 'assigned', 'printing', 'finished', 'failed'] as const).map((state) => (
                <button
                  key={state}
                  type="button"
                  className="rounded-sm border border-[var(--ml-soft-gray)] px-1.5 py-0.5 text-[10px] capitalize"
                  onClick={() => onUpdate(p.id, { state })}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
