'use client'

import type { ExternalRef } from '@/content/workshops/moonlighter-ai-3d-printing'

export function ExternalRefCard({
  refItem,
  compact = false,
}: {
  refItem: ExternalRef
  compact?: boolean
}) {
  return (
    <a
      href={refItem.url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        compact
          ? 'inline-flex items-center rounded-sm border border-[var(--ml-soft-gray)] bg-white/60 px-2 py-1 text-xs text-[var(--ml-digital)] hover:border-[var(--ml-digital)]'
          : 'block border border-[var(--ml-soft-gray)] bg-white/50 p-4 hover:border-[var(--ml-digital)]'
      }
    >
      {!compact && (
        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-ink)]/50">
          {refItem.source} · opens new tab · reviewed {refItem.lastReviewed}
        </p>
      )}
      <p className={compact ? '' : 'mt-1 font-medium'}>{refItem.title}</p>
    </a>
  )
}
