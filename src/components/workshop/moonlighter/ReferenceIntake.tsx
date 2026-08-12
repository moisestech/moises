'use client'

import { useState } from 'react'

type IntakeMethod = 'upload' | 'bring' | 'photograph'

export function ReferenceIntake({
  method,
  onMethodChange,
  note,
  onNoteChange,
}: {
  method?: IntakeMethod
  onMethodChange?: (m: IntakeMethod) => void
  note?: string
  onNoteChange?: (n: string) => void
}) {
  const [local, setLocal] = useState<IntakeMethod>(method ?? 'upload')
  const current = method ?? local

  function select(m: IntakeMethod) {
    setLocal(m)
    onMethodChange?.(m)
  }

  const copy: Record<IntakeMethod, string> = {
    upload: 'Upload a prepared reference to the workshop computer before or during class.',
    bring: 'Bring files on USB or cloud and save into 01_reference/.',
    photograph: 'Photograph one everyday object against a simple background during class.',
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-3">
        {(['upload', 'bring', 'photograph'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => select(m)}
            className={`rounded-sm border px-3 py-3 text-left text-sm capitalize ${
              current === m
                ? 'border-[var(--ml-digital)] bg-[var(--ml-digital)]/10'
                : 'border-[var(--ml-soft-gray)] bg-white/50'
            }`}
            aria-pressed={current === m}
          >
            {m}
          </button>
        ))}
      </div>
      <p className="text-sm text-[var(--ml-ink)]/75">{copy[current]}</p>
      <label className="block text-sm">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
          Reference note / filename
        </span>
        <input
          className="mt-1 w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white px-3 py-2"
          value={note ?? ''}
          onChange={(e) => onNoteChange?.(e.target.value)}
          placeholder="e.g. working_reference.png"
        />
      </label>
    </div>
  )
}
