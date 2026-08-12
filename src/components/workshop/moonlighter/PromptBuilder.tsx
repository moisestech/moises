'use client'

import { useMemo, useState } from 'react'
import { negativeGuidance, promptChips, promptFormula } from '@/content/workshops/moonlighter-ai-3d-printing'

export function PromptBuilder({
  value,
  onChange,
}: {
  value?: string
  onChange?: (prompt: string) => void
}) {
  const [local, setLocal] = useState(value ?? promptFormula)
  const [active, setActive] = useState<Record<string, boolean>>({})

  const display = value ?? local

  function setPrompt(next: string) {
    setLocal(next)
    onChange?.(next)
  }

  function toggleChip(id: string, placeholder: string) {
    const nextActive = { ...active, [id]: !active[id] }
    setActive(nextActive)
    if (!active[id]) {
      setPrompt(`${display}\n\n[${id}]: ${placeholder}`)
    }
  }

  const chipList = useMemo(() => [...promptChips], [])

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {chipList.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => toggleChip(chip.id, chip.placeholder)}
            className={`rounded-sm border px-2 py-1 text-xs ${
              active[chip.id]
                ? 'border-[var(--ml-digital)] bg-[var(--ml-digital)]/10 text-[var(--ml-digital)]'
                : 'border-[var(--ml-soft-gray)] bg-white'
            }`}
            aria-pressed={!!active[chip.id]}
          >
            {chip.label}
          </button>
        ))}
      </div>
      <label className="block">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
          Editable prompt
        </span>
        <textarea
          className="mt-1 min-h-[140px] w-full rounded-sm border border-[var(--ml-soft-gray)] bg-white p-3 text-sm"
          value={display}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <button
        type="button"
        className="text-xs text-[var(--ml-digital)] underline-offset-2 hover:underline"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(display)
          } catch {
            /* ignore */
          }
        }}
      >
        Copy prompt
      </button>
      <p className="text-xs text-[var(--ml-ink)]/55">
        Avoid: {negativeGuidance.join('; ')}.
      </p>
    </div>
  )
}
