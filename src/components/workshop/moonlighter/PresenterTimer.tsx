'use client'

export function PresenterTimer({
  timeboxMin,
  warningMinutes,
  mode,
}: {
  timeboxMin: number
  warningMinutes: number | null
  mode: string
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm md:text-base">
      <span className="rounded-sm border border-white/30 px-3 py-1">
        Timebox {timeboxMin}m
      </span>
      {warningMinutes != null && (
        <span className="rounded-sm bg-[var(--ml-diagnose)] px-3 py-1 text-white">
          {warningMinutes}m warning
        </span>
      )}
      <span className="uppercase tracking-wider text-white/70">{mode.replace('_', ' ')}</span>
    </div>
  )
}
