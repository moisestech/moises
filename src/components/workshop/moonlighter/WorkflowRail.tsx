'use client'

import { workflowStages } from '@/content/workshops/moonlighter-ai-3d-printing'
import Link from 'next/link'

export function WorkflowRail({
  current,
  hrefForModule,
}: {
  current: number
  hrefForModule?: (id: number) => string
}) {
  return (
    <nav aria-label="Workshop stages" className="w-full overflow-x-auto">
      <ol className="flex min-w-max gap-1 md:grid md:min-w-0 md:grid-cols-10 md:gap-2">
        {workflowStages.map((stage) => {
          const active = stage.id === current
          const done = stage.id < current
          const className = `rounded-sm border px-2 py-2 text-center font-mono text-[10px] uppercase tracking-wide ${
            active
              ? 'border-[var(--ml-digital)] bg-[var(--ml-digital)] text-white'
              : done
                ? 'border-[var(--ml-verified)]/40 bg-[var(--ml-verified)]/10 text-[var(--ml-verified)]'
                : 'border-[var(--ml-soft-gray)] bg-white/40 text-[var(--ml-ink)]/55'
          }`
          const label = (
            <>
              <span className="block opacity-70">{stage.id}</span>
              <span className="mt-0.5 block truncate">{stage.label}</span>
            </>
          )
          return (
            <li key={stage.id} className="min-w-[4.5rem] md:min-w-0">
              {hrefForModule ? (
                <Link href={hrefForModule(stage.id)} className={`block ${className}`} aria-current={active ? 'step' : undefined}>
                  {label}
                </Link>
              ) : (
                <div className={className} aria-current={active ? 'step' : undefined}>
                  {label}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
