'use client'

export function ArchiveChecklist({
  items,
  checked,
  onToggle,
}: {
  items: string[]
  checked?: Record<number, boolean | 'not_produced'>
  onToggle?: (index: number, value: boolean | 'not_produced') => void
}) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => {
        const state = checked?.[i]
        return (
          <li
            key={item}
            className="flex flex-wrap items-start gap-3 border border-[var(--ml-soft-gray)] bg-white/40 px-3 py-2 text-sm"
          >
            {onToggle ? (
              <select
                className="rounded-sm border border-[var(--ml-soft-gray)] bg-white px-2 py-1 text-xs"
                value={state === 'not_produced' ? 'not_produced' : state ? 'yes' : 'no'}
                onChange={(e) => {
                  const v = e.target.value
                  onToggle(i, v === 'not_produced' ? 'not_produced' : v === 'yes')
                }}
                aria-label={`Status for ${item}`}
              >
                <option value="no">Missing</option>
                <option value="yes">Present</option>
                <option value="not_produced">Not produced</option>
              </select>
            ) : (
              <span className="mt-0.5 font-mono text-[10px] text-[var(--ml-ink)]/45" aria-hidden>
                ☐
              </span>
            )}
            <span className="flex-1">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}
