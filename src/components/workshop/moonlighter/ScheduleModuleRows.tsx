'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { ScheduleRow } from '@/content/workshops/moonlighter-ai-3d-printing/schedule'
import {
  getScheduleModuleVisual,
  type ScheduleModuleVisual,
} from '@/content/workshops/moonlighter-ai-3d-printing/instructor-media'
import { MeshGlyph, MeshGlyphFrame } from './MeshGlyphs'

function ModulePreview({
  visual,
  open,
}: {
  visual: ScheduleModuleVisual
  open: boolean
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="tooltip"
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="pointer-events-none absolute left-12 top-[calc(100%-6px)] z-30 w-[min(18rem,72vw)] overflow-hidden border border-[var(--ml-soft-gray)] bg-white shadow-[0_22px_48px_-22px_rgba(26,26,26,0.5)] md:left-auto md:right-4"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={visual.previewSrc}
              alt={visual.previewAlt}
              fill
              className="object-cover"
              sizes="288px"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  'radial-gradient(circle at 70% 20%, rgba(255,107,90,0.35), transparent 55%)',
              }}
            />
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <MeshGlyph id={visual.glyph} className="h-4 w-4 text-[var(--ml-accent)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ml-ink)]/70">
              {visual.hint}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ScheduleModuleRows({ rows }: { rows: ScheduleRow[] }) {
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="mt-8">
      <div className="grid grid-cols-[auto_7.5rem_1fr] items-center gap-3 border-b-2 border-[var(--ml-charcoal)] px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ml-ink)]/55 md:grid-cols-[auto_8.5rem_minmax(12rem,1.1fr)_minmax(12rem,1fr)] md:gap-4 md:px-3">
        <span className="h-9 w-9" aria-hidden />
        <span>Time</span>
        <span>Module</span>
        <span className="hidden md:block">Output</span>
      </div>

      <div className="space-y-0">
        {rows.map((row, i) => {
          const visual = getScheduleModuleVisual(row.moduleId)
          const open = activeId === row.moduleId
          return (
            <motion.div
              key={row.moduleId}
              className="group/row relative border-b border-[var(--ml-soft-gray)] transition-colors duration-150 hover:bg-[var(--ml-accent)]/[0.06] focus-within:bg-[var(--ml-accent)]/[0.06]"
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              onMouseEnter={() => setActiveId(row.moduleId)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(row.moduleId)}
              onBlur={() => setActiveId(null)}
            >
              <button
                type="button"
                className="grid w-full grid-cols-[auto_7.5rem_1fr] items-center gap-3 px-2 py-3 text-left md:grid-cols-[auto_8.5rem_minmax(12rem,1.1fr)_minmax(12rem,1fr)] md:gap-4 md:px-3"
                aria-describedby={open && visual ? `module-preview-${row.moduleId}` : undefined}
              >
                {visual ? (
                  <MeshGlyphFrame
                    id={visual.glyph}
                    tone={open ? 'coral' : 'soft'}
                    size="sm"
                    className="shrink-0 transition-transform duration-200 group-hover/row:-rotate-6 group-hover/row:scale-105"
                  />
                ) : (
                  <span className="h-9 w-9 shrink-0" />
                )}
                <span className="font-mono text-xs text-[var(--ml-ink)]/65">{row.time}</span>
                <span className="text-sm font-medium text-[var(--ml-ink)]">{row.module}</span>
                <span className="hidden text-sm text-[var(--ml-ink)]/70 md:block">{row.output}</span>
              </button>
              <p className="px-3 pb-3 pl-[calc(2.25rem+0.75rem+7.5rem)] text-xs text-[var(--ml-ink)]/65 md:hidden">
                {row.output}
              </p>
              {visual && (
                <div id={`module-preview-${row.moduleId}`}>
                  <ModulePreview visual={visual} open={open} />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <p className="pt-3 text-xs text-[var(--ml-ink)]/45">
        Hover or focus a module to preview the stage. Icons use the same MeshGlyph language as the rest
        of the landing.
      </p>
    </div>
  )
}
