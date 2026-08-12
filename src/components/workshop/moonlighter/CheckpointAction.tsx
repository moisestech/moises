'use client'

export function CheckpointAction({
  status,
  onMarkReady,
  responseNote,
}: {
  status?: string
  onMarkReady?: () => void
  responseNote?: string
}) {
  return (
    <div className="border border-[var(--ml-soft-gray)] bg-white/60 p-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">Checkpoint</p>
      <p className="mt-1 text-sm">
        Status:{' '}
        <span className="font-medium">{status ?? 'Working'}</span>
      </p>
      {responseNote && <p className="mt-2 text-sm text-[var(--ml-controlled)]">{responseNote}</p>}
      <button
        type="button"
        onClick={onMarkReady}
        className="mt-3 rounded-sm bg-[var(--ml-ink)] px-4 py-2 text-sm text-[var(--ml-paper)]"
      >
        Mark ready for review
      </button>
    </div>
  )
}

export function HelpBeacon({
  onFlag,
}: {
  onFlag?: (category: string) => void
}) {
  const categories = [
    'reference',
    'account',
    'credit',
    'generation',
    'mesh',
    'repair',
    'slice',
    'approval',
  ]
  return (
    <details className="border border-[var(--ml-soft-gray)] bg-white/50 p-3 text-sm">
      <summary className="cursor-pointer font-medium">I need help</summary>
      <div className="mt-3 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="rounded-sm border border-[var(--ml-soft-gray)] px-2 py-1 text-xs capitalize hover:border-[var(--ml-digital)]"
            onClick={() => onFlag?.(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </details>
  )
}
