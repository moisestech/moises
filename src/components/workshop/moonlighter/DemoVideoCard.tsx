'use client'

import type { DemoSlot } from '@/content/workshops/moonlighter-ai-3d-printing'

export function DemoVideoCard({ demo }: { demo: DemoSlot }) {
  return (
    <article className="border border-[var(--ml-soft-gray)] bg-white/50 p-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
        Original demo · {demo.durationSec[0]}–{demo.durationSec[1]}s · {demo.status}
      </p>
      <h3 className="mt-1 font-medium">{demo.title}</h3>
      <div
        className="mt-3 aspect-video border border-[var(--ml-soft-gray)] bg-[var(--ml-ink)]/5"
        role="img"
        aria-label={demo.posterAlt}
      >
        <div className="flex h-full items-center justify-center text-xs text-[var(--ml-ink)]/45">
          {demo.status === 'recorded' && demo.muxPlaybackId
            ? 'Video ready'
            : 'Poster / recording pending'}
        </div>
      </div>
      <p className="mt-2 text-xs text-[var(--ml-ink)]/55">Captions and transcript required when recorded.</p>
    </article>
  )
}
