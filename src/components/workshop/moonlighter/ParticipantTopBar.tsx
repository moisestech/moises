'use client'

import Link from 'next/link'
import { HelpBeacon } from './CheckpointAction'

export function ParticipantTopBar({
  title,
  sessionCode,
  moduleLabel,
  pace,
  onPaceChange,
  progress,
  saveStatus,
  helpHref,
  onHelpFlag,
}: {
  title: string
  sessionCode: string
  moduleLabel: string
  pace: 'follow' | 'my_pace'
  onPaceChange: (pace: 'follow' | 'my_pace') => void
  progress: string
  saveStatus: string
  helpHref?: string
  onHelpFlag?: (category: string) => void
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-[var(--ml-soft-gray)] bg-[var(--ml-paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 text-sm">
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{title}</p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
            Session {sessionCode} · {moduleLabel} · {progress}
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-sm border border-[var(--ml-soft-gray)] p-0.5" role="group" aria-label="Pace">
          {(['follow', 'my_pace'] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPaceChange(p)}
              className={`rounded-sm px-2 py-1 text-xs ${
                pace === p ? 'bg-[var(--ml-ink)] text-[var(--ml-paper)]' : ''
              }`}
              aria-pressed={pace === p}
            >
              {p === 'follow' ? 'Follow class' : 'My pace'}
            </button>
          ))}
        </div>
        <span className="font-mono text-[10px] text-[var(--ml-ink)]/50">{saveStatus}</span>
        {helpHref ? (
          <Link href={helpHref} className="text-xs underline">
            Help
          </Link>
        ) : (
          <div className="w-full sm:w-auto sm:min-w-[12rem]">
            <HelpBeacon onFlag={onHelpFlag} />
          </div>
        )}
      </div>
    </div>
  )
}
