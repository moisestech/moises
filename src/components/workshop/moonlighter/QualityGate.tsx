'use client'

import type { QualityLevel } from '@/content/workshops/moonlighter-ai-3d-printing'

const STYLES: Record<QualityLevel, string> = {
  green: 'border-[var(--ml-verified)] bg-[var(--ml-verified)]/10 text-[var(--ml-verified)]',
  amber: 'border-[var(--ml-controlled)] bg-[var(--ml-controlled)]/10 text-[var(--ml-controlled)]',
  coral: 'border-[var(--ml-diagnose)] bg-[var(--ml-diagnose)]/10 text-[var(--ml-diagnose)]',
}

const ICONS: Record<QualityLevel, string> = {
  green: '✓',
  amber: '!',
  coral: '×',
}

export function QualityGate({
  value,
  labels,
  onChange,
}: {
  value?: QualityLevel | null
  labels?: Partial<Record<QualityLevel, string>>
  onChange?: (level: QualityLevel) => void
}) {
  const levels: QualityLevel[] = ['green', 'amber', 'coral']
  return (
    <div className="space-y-2" role="group" aria-label="Quality gate">
      {levels.map((level) => {
        const selected = value === level
        return (
          <button
            key={level}
            type="button"
            onClick={() => onChange?.(level)}
            className={`flex w-full items-start gap-3 rounded-sm border px-3 py-3 text-left text-sm ${STYLES[level]} ${
              selected ? 'ring-2 ring-offset-1 ring-[var(--ml-ink)]/30' : ''
            }`}
            aria-pressed={selected}
          >
            <span className="font-mono text-base" aria-hidden>
              {ICONS[level]}
            </span>
            <span>
              <span className="font-medium capitalize">{level}</span>
              {labels?.[level] && (
                <span className="mt-0.5 block text-xs opacity-90">{labels[level]}</span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
