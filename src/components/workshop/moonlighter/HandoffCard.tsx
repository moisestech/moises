'use client'

import { approvalStates } from '@/content/workshops/moonlighter-ai-3d-printing'
import type { MoonlighterHandoff } from '@/lib/workshop/moonlighter/types'

export function HandoffCard({
  handoff,
  participantName,
  onChange,
  editable = false,
}: {
  handoff?: Partial<MoonlighterHandoff> | null
  participantName?: string
  editable?: boolean
  onChange?: (patch: Partial<MoonlighterHandoff>) => void
}) {
  const fields: { key: keyof MoonlighterHandoff; label: string }[] = [
    { key: 'project_title', label: 'Project title' },
    { key: 'approved_filename', label: 'Approved filename' },
    { key: 'tier', label: 'Tier' },
    { key: 'dimensions', label: 'Dimensions' },
    { key: 'pla_color', label: 'PLA color' },
    { key: 'printer_unit', label: 'Printer unit' },
    { key: 'support_rating', label: 'Support rating' },
    { key: 'expected_pickup', label: 'Expected pickup' },
    { key: 'notes', label: 'Notes' },
  ]

  return (
    <div className="border border-[var(--ml-soft-gray)] bg-white/60 p-4 text-sm">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
        Production handoff
      </p>
      {participantName && <p className="mt-1 font-medium">{participantName}</p>}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {fields.map(({ key, label }) => (
          <label key={key} className="block">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
              {label}
            </span>
            {editable ? (
              <input
                className="mt-0.5 w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white px-2 py-1"
                value={String(handoff?.[key] ?? '')}
                onChange={(e) => onChange?.({ [key]: e.target.value })}
              />
            ) : (
              <p className="mt-0.5">{String(handoff?.[key] || '—')}</p>
            )}
          </label>
        ))}
      </div>
      <label className="mt-3 block">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/45">
          Approval status
        </span>
        {editable ? (
          <select
            className="mt-0.5 w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white px-2 py-1"
            value={handoff?.approval_status ?? 'ready_for_review'}
            onChange={(e) => onChange?.({ approval_status: e.target.value })}
          >
            {approvalStates.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        ) : (
          <p className="mt-0.5">{handoff?.approval_status ?? '—'}</p>
        )}
      </label>
    </div>
  )
}
