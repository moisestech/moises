'use client'

import { getTrustRole, TRUST_COMBINED_STRATEGY_DESIGN, TRUST_ROLES } from '@/content/workshops/trust-is-not-a-vibe'
import type { TrustRoleId } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

export function RoleLensPicker({
  value,
  onChange,
  needToSee,
  onNeedToSeeChange,
}: {
  value: TrustRoleId | null
  onChange: (role: TrustRoleId) => void
  needToSee: string
  onNeedToSeeChange: (value: string) => void
}) {
  const selected = getTrustRole(value)

  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-semibold text-stone-900 dark:text-stone-100">Pick a seat</legend>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
          One path, four lenses. Stay with this seat for the rest of the lab.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {TRUST_ROLES.map((role) => {
            const active = value === role.id
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => onChange(role.id)}
                aria-pressed={active}
                className={cn(
                  'rounded-xl border p-4 text-left transition',
                  active
                    ? 'border-cyan-400 bg-cyan-50 dark:bg-cyan-950/40'
                    : 'border-stone-200 bg-white hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900'
                )}
              >
                <p className="text-[10px] uppercase tracking-wide text-stone-500">{role.shortLabel}</p>
                <p className="mt-0.5 font-semibold text-stone-950 dark:text-stone-50">{role.label}</p>
                <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">{role.primaryQuestions[0]}</p>
              </button>
            )
          })}
        </div>
      </fieldset>

      {selected ? (
        <div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-900">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
            You are part of the harness
          </p>
          <p className="mt-2 text-sm font-medium text-stone-900 dark:text-stone-100">{selected.chapterHighlight}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-stone-600 dark:text-stone-400">
            {selected.inspectPrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-stone-500">Blind spot: {selected.blindSpot}</p>
          <label className="mt-4 block">
            <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">{selected.needToSeePrompt}</span>
            <textarea
              value={needToSee}
              onChange={(event) => onNeedToSeeChange(event.target.value)}
              rows={3}
              className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 dark:border-stone-600 dark:bg-stone-950 dark:text-stone-100"
            />
          </label>
        </div>
      ) : null}

      <p className="text-xs text-stone-500">
        Live room of three: use the combined {TRUST_COMBINED_STRATEGY_DESIGN.label} card. {TRUST_COMBINED_STRATEGY_DESIGN.note}
      </p>
    </div>
  )
}

export function RoleMargin({ roleId }: { roleId: TrustRoleId | null }) {
  const role = getTrustRole(roleId)
  if (!role) {
    return (
      <p className="rounded-lg border border-dashed border-stone-300 px-3 py-2 text-xs text-stone-500 dark:border-stone-600">
        No seat selected yet. Return to Four Lenses to pick one.
      </p>
    )
  }
  return (
    <aside className="rounded-lg border border-cyan-200 bg-cyan-50/70 px-3 py-2 text-xs text-cyan-900 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-100">
      <p className="font-semibold">{role.label} lens</p>
      <p className="mt-1 opacity-80">{role.primaryQuestions.join(' ')}</p>
    </aside>
  )
}
