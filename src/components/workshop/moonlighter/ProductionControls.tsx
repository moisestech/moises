'use client'

import {
  MOONLIGHTER_PLACEHOLDERS,
  productionTiers,
  supportRatings,
  timeClasses,
} from '@/content/workshops/moonlighter-ai-3d-printing'

export function TierSelector({
  value,
  onChange,
}: {
  value?: 'miniature' | 'sculpture'
  onChange?: (id: 'miniature' | 'sculpture') => void
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2" role="group" aria-label="Production tier">
      {productionTiers.map((tier) => (
        <button
          key={tier.id}
          type="button"
          onClick={() => onChange?.(tier.id)}
          className={`rounded-sm border p-4 text-left ${
            value === tier.id
              ? 'border-[var(--ml-digital)] bg-[var(--ml-digital)]/10'
              : 'border-[var(--ml-soft-gray)] bg-white/50'
          }`}
          aria-pressed={value === tier.id}
        >
          <p className="font-mono text-[10px] tracking-wider text-[var(--ml-controlled)]">{tier.label}</p>
          <p className="mt-1 font-medium capitalize">{tier.id}</p>
          <p className="mt-2 text-xs text-[var(--ml-ink)]/70">{tier.sizeMm} · {tier.typicalEstimate}</p>
        </button>
      ))}
    </div>
  )
}

export function FilamentSwatch({
  value,
  onChange,
}: {
  value?: 'black' | 'white' | 'accent'
  onChange?: (c: 'black' | 'white' | 'accent') => void
}) {
  const options = [
    { id: 'black' as const, label: 'Black PLA', color: '#1a1a1a', border: false },
    { id: 'white' as const, label: 'White PLA', color: '#f7f7f5', border: true },
    {
      id: 'accent' as const,
      label: MOONLIGHTER_PLACEHOLDERS.plaAccentName,
      color: 'var(--ml-digital)',
      border: false,
    },
  ]
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="PLA color">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange?.(o.id)}
          className={`flex items-center gap-2 rounded-sm border px-3 py-2 text-sm ${
            value === o.id ? 'border-[var(--ml-ink)]' : 'border-[var(--ml-soft-gray)]'
          }`}
          aria-pressed={value === o.id}
        >
          <span
            className="h-6 w-6 rounded-sm"
            style={{
              background: o.color,
              border: o.border ? '1px solid #ccc' : undefined,
            }}
            aria-hidden
          />
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function SupportMeter({
  value,
  onChange,
}: {
  value?: 'low' | 'moderate' | 'high'
  onChange?: (id: 'low' | 'moderate' | 'high') => void
}) {
  return (
    <div className="space-y-2" role="group" aria-label="Support rating">
      {supportRatings.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => onChange?.(r.id)}
          className={`flex w-full items-start gap-3 rounded-sm border px-3 py-3 text-left text-sm ${
            value === r.id
              ? 'border-[var(--ml-controlled)] bg-[var(--ml-controlled)]/10'
              : 'border-[var(--ml-soft-gray)] bg-white/50'
          }`}
          aria-pressed={value === r.id}
        >
          <span className="font-medium capitalize">{r.label}</span>
          <span className="text-xs text-[var(--ml-ink)]/70">{r.note}</span>
        </button>
      ))}
    </div>
  )
}

export function SliceEstimate({
  estimate,
}: {
  estimate?: {
    timeMin?: number
    grams?: number
    dimensions?: string
    supports?: string
    printer?: string
    status?: string
  }
}) {
  const timeClass =
    estimate?.timeMin == null
      ? '—'
      : estimate.timeMin < 60
        ? timeClasses[0].label
        : estimate.timeMin <= 120
          ? timeClasses[1].label
          : timeClasses[2].label

  const rows = [
    ['Printer', estimate?.printer ?? MOONLIGHTER_PLACEHOLDERS.printerModels],
    ['Dimensions', estimate?.dimensions ?? '—'],
    ['Supports', estimate?.supports ?? '—'],
    ['Time', estimate?.timeMin != null ? `${estimate.timeMin} min` : '—'],
    ['Time class', timeClass],
    ['Material', estimate?.grams != null ? `${estimate.grams} g` : '—'],
    ['Status', estimate?.status ?? 'Draft'],
  ]

  return (
    <dl className="grid grid-cols-2 gap-2 border border-[var(--ml-soft-gray)] bg-white/50 p-3 text-sm sm:grid-cols-3">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">{k}</dt>
          <dd className="mt-0.5">{v}</dd>
        </div>
      ))}
    </dl>
  )
}
