'use client'

import type { ReactNode, SVGProps } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import type { MeshGlyphId } from '@/content/workshops/moonlighter-ai-3d-printing/mesh-glyphs'

/**
 * MeshGlyphs — Moonlighter landing icon system (24×24, stroke 1.75, round caps).
 * Symbolic fabrication metaphors that contrast with photoreal section media.
 */

export type { MeshGlyphId }

type GlyphProps = SVGProps<SVGSVGElement> & { title?: string }

function GlyphShell({ title, children, className = '', ...rest }: GlyphProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

/** Rounded bean body used as Moonlet-like silhouette shorthand */
function ObjectSilhouette({ cx = 12, cy = 11, scale = 1 }: { cx?: number; cy?: number; scale?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale}) translate(-12 -11)`}>
      <path d="M8.5 14.5c0-3.2 1.6-6.5 3.5-6.5s3.5 3.3 3.5 6.5c0 1.8-.9 3-3.5 3s-3.5-1.2-3.5-3Z" />
      <path d="M10.2 8.4c-.2-1.1.3-2.1 1-2.1" />
      <path d="M13.8 8.4c.2-1.1-.3-2.1-1-2.1" />
      <circle cx="10.7" cy="11.2" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="13.3" cy="11.2" r="0.55" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="16.8" rx="3.2" ry="1.1" />
    </g>
  )
}

const GLYPHS: Record<MeshGlyphId, (p: GlyphProps) => ReactNode> = {
  'ml-reference': (p) => (
    <GlyphShell {...p}>
      <path d="M4 7V4.5H7" />
      <path d="M17 4.5h3V7" />
      <path d="M20 17v2.5h-3" />
      <path d="M7 19.5H4V17" />
      <ObjectSilhouette scale={0.82} cy={12} />
    </GlyphShell>
  ),
  'ml-image': (p) => (
    <GlyphShell {...p}>
      <rect x="4.5" y="5.5" width="15" height="13" rx="2" />
      <ObjectSilhouette scale={0.62} cy={12.2} />
      <path d="M16.2 7.2l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7z" fill="currentColor" stroke="none" />
    </GlyphShell>
  ),
  'ml-mesh': (p) => (
    <GlyphShell {...p}>
      <path d="M8.2 15c0-2.8 1.5-5.8 3.8-5.8S15.8 12.2 15.8 15c0 1.6-.8 2.7-3.8 2.7S8.2 16.6 8.2 15Z" />
      <circle cx="12" cy="10.2" r="1.1" />
      <circle cx="8.6" cy="13.2" r="1.1" />
      <circle cx="15.4" cy="13.2" r="1.1" />
      <circle cx="9.6" cy="16.6" r="1.1" />
      <circle cx="14.4" cy="16.6" r="1.1" />
      <path d="M12 10.2L8.6 13.2M12 10.2l3.8 3M8.6 13.2l1 3.4M15.4 13.2l-1 3.4M9.6 16.6h4.8" />
    </GlyphShell>
  ),
  'ml-print': (p) => (
    <GlyphShell {...p}>
      <ObjectSilhouette scale={0.72} cy={9.5} />
      <path d="M6.5 15.2h11" />
      <path d="M7 17h10" />
      <path d="M7.8 18.8h8.4" />
      <path d="M8.6 20.5h6.8" />
    </GlyphShell>
  ),
  'ml-image-generate': (p) => (
    <GlyphShell {...p}>
      <rect x="3.5" y="7" width="7" height="9" rx="1.5" />
      <rect x="13.5" y="7" width="7" height="9" rx="1.5" />
      <path d="M10.5 11.5h3" />
      <path d="M12 9.8l.55 1.15 1.15.55-1.15.55L12 13.2l-.55-1.15-1.15-.55 1.15-.55z" fill="currentColor" stroke="none" />
    </GlyphShell>
  ),
  'ml-image-to-3d': (p) => (
    <GlyphShell {...p}>
      <rect x="3.5" y="8" width="6.5" height="8" rx="1.2" />
      <path d="M10.2 12h2.2" />
      <path d="M14.2 8.2l4.6 2.2-4.6 2.2 4.6 2.2-4.6 2.2V8.2z" />
    </GlyphShell>
  ),
  'ml-mesh-check': (p) => (
    <GlyphShell {...p}>
      <path d="M12 3.8l6.5 2.4v5.2c0 3.6-2.6 6.4-6.5 8.2-3.9-1.8-6.5-4.6-6.5-8.2V6.2L12 3.8z" />
      <circle cx="12" cy="10" r="1" />
      <circle cx="9.6" cy="12.4" r="1" />
      <circle cx="14.4" cy="12.4" r="1" />
      <path d="M12 10l-2.4 2.4M12 10l2.4 2.4" />
      <path d="M9.2 15.2l1.8 1.6 3.6-3.4" />
    </GlyphShell>
  ),
  'ml-slice-print': (p) => (
    <GlyphShell {...p}>
      <ellipse cx="12" cy="7" rx="5.2" ry="1.6" />
      <ellipse cx="12" cy="11" rx="5.8" ry="1.7" />
      <ellipse cx="12" cy="15" rx="6.4" ry="1.8" />
      <path d="M5 19.2h14" />
      <path d="M7 20.8h10" />
    </GlyphShell>
  ),
  'ml-computer': (p) => (
    <GlyphShell {...p}>
      <rect x="4" y="4.5" width="16" height="11" rx="1.8" />
      <path d="M9 18.5h6" />
      <path d="M12 15.5v3" />
      <path d="M7.5 20.5h9" />
    </GlyphShell>
  ),
  'ml-filament': (p) => (
    <GlyphShell {...p}>
      <circle cx="11" cy="11" r="5.5" />
      <circle cx="11" cy="11" r="2" />
      <path d="M16 12.5c1.4.4 3.2 1.6 3.8 3.8" />
      <path d="M8.5 8.8c1-.8 2.4-1.1 3.6-.6" />
    </GlyphShell>
  ),
  'ml-archive': (p) => (
    <GlyphShell {...p}>
      <path d="M7 6.5h9.5v11H7z" />
      <path d="M5.5 8h9.5v11H5.5z" />
      <path d="M4 9.5h9.5V20.5H4z" />
      <path d="M17.5 12.5v5.5" />
      <path d="M15.8 15.8L17.5 18l1.7-2.2" />
    </GlyphShell>
  ),
  'ml-reprint': (p) => (
    <GlyphShell {...p}>
      <path d="M18.2 10.2a6.5 6.5 0 1 0 1 4.2" />
      <path d="M18.2 7.2v3.2h-3.1" />
      <ObjectSilhouette scale={0.48} cy={12.5} />
      <path d="M9.2 16.6h5.6" />
      <path d="M9.6 18h4.8" />
    </GlyphShell>
  ),
  'ml-pickup': (p) => (
    <GlyphShell {...p}>
      <path d="M6 10.5h12l-1.2 8.2H7.2L6 10.5z" />
      <path d="M8 10.5V8.8c0-2.1 1.8-3.5 4-3.5s4 1.4 4 3.5v1.7" />
      <ObjectSilhouette scale={0.42} cy={14.2} />
    </GlyphShell>
  ),
  'ml-shared-handoff': (p) => (
    <GlyphShell {...p}>
      <path d="M4.5 14.5c1.2-1.8 2.8-2.6 4.5-2.2.8.2 1.4.8 2 1.7" />
      <path d="M19.5 14.5c-1.2-1.8-2.8-2.6-4.5-2.2-.8.2-1.4.8-2 1.7" />
      <rect x="9.2" y="14.8" width="5.6" height="3.2" rx="0.8" />
      <ObjectSilhouette scale={0.34} cy={13.2} />
    </GlyphShell>
  ),
  'ml-mini': (p) => (
    <GlyphShell {...p}>
      <ObjectSilhouette scale={0.55} cx={9.5} cy={12} />
      <path d="M16 5.5v13" />
      <path d="M14.5 5.5h3" />
      <path d="M14.5 18.5h3" />
      <path d="M15.2 12.2h1.6" />
    </GlyphShell>
  ),
  'ml-sculpture': (p) => (
    <GlyphShell {...p}>
      <ObjectSilhouette scale={0.78} cy={10.2} />
      <path d="M7.5 18.2h9" />
      <path d="M9 20h6" />
      <path d="M18.2 6.2v10.5" />
      <path d="M17 6.2h2.4" />
      <path d="M17 16.7h2.4" />
    </GlyphShell>
  ),
  'ml-clock': (p) => (
    <GlyphShell {...p}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8.2v4.2l2.8 1.6" />
      <ObjectSilhouette scale={0.28} cy={12.2} />
    </GlyphShell>
  ),
  'ml-orient': (p) => (
    <GlyphShell {...p}>
      <ObjectSilhouette scale={0.55} cy={9.5} />
      <path d="M6.5 18.5h11" />
      <path d="M17.8 14.2a4.2 4.2 0 0 0-7.2-3" />
      <path d="M10.2 9.8l.4 2.4 2.2-.9" />
    </GlyphShell>
  ),
  'ml-printer': (p) => (
    <GlyphShell {...p}>
      <rect x="5" y="4.5" width="14" height="15.5" rx="1.8" />
      <path d="M7.5 8h9" />
      <rect x="8" y="10.5" width="8" height="6" rx="0.8" />
      <ObjectSilhouette scale={0.32} cy={13.5} />
    </GlyphShell>
  ),
  'ml-age-16': (p) => (
    <GlyphShell {...p}>
      <circle cx="10.2" cy="8.2" r="2.4" />
      <path d="M5.8 18.5c.4-3.4 2.1-5.2 4.4-5.2s4 1.8 4.4 5.2" />
      <path d="M17 9.5v5" />
      <path d="M14.5 12h5" />
    </GlyphShell>
  ),
  'ml-prerequisite': (p) => (
    <GlyphShell {...p}>
      <path d="M5 18.5h14" />
      <path d="M6.5 18.5l1.2-3h8.6l1.2 3" />
      <rect x="8.5" y="7" width="7" height="7" rx="1.2" />
      <path d="M8.5 10.5h7" />
    </GlyphShell>
  ),
  'ml-access': (p) => (
    <GlyphShell {...p}>
      <path d="M4.5 19V8.5L12 4.8l7.5 3.7V19" />
      <path d="M9 19v-6.5h6V19" />
      <path d="M4.5 19h15" />
    </GlyphShell>
  ),
  'ml-account': (p) => (
    <GlyphShell {...p}>
      <circle cx="9.5" cy="8.5" r="2.5" />
      <path d="M5 18.5c.5-3.2 2.1-4.8 4.5-4.8s4 1.6 4.5 4.8" />
      <circle cx="17" cy="13.5" r="3.2" />
      <circle cx="17" cy="13.5" r="1" />
    </GlyphShell>
  ),
  'ml-layers': (p) => (
    <GlyphShell {...p}>
      <path d="M12 4.5 4.8 8.2 12 11.9l7.2-3.7L12 4.5z" />
      <path d="M4.8 12.2 12 15.9l7.2-3.7" />
      <path d="M4.8 15.8 12 19.5l7.2-3.7" />
    </GlyphShell>
  ),
  'ml-glossary': (p) => (
    <GlyphShell {...p}>
      <path d="M6 5.5h9.5a2.5 2.5 0 0 1 2.5 2.5V19l-2.2-1.4H6a2 2 0 0 1-2-2V7.5A2 2 0 0 1 6 5.5z" />
      <path d="M8.5 10h6" />
      <path d="M8.5 13h4.5" />
    </GlyphShell>
  ),
}

export function MeshGlyph({
  id,
  className = 'h-5 w-5',
  title,
  ...rest
}: GlyphProps & { id: MeshGlyphId }) {
  const Comp = GLYPHS[id]
  return <Comp className={className} title={title} {...rest} />
}

export type MeshGlyphTone = 'charcoal' | 'coral' | 'paper' | 'soft'

const TONE_FRAME: Record<MeshGlyphTone, string> = {
  charcoal: 'bg-[var(--ml-charcoal)] text-white',
  coral: 'bg-[var(--ml-accent)] text-[var(--ml-charcoal)]',
  paper: 'bg-white text-[var(--ml-ink)] border border-[var(--ml-soft-gray)]',
  soft: 'bg-[var(--ml-soft-gray)] text-[var(--ml-charcoal)]',
}

export function MeshGlyphFrame({
  id,
  tone = 'coral',
  size = 'md',
  className = '',
  label,
}: {
  id: MeshGlyphId
  tone?: MeshGlyphTone
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  label?: string
}) {
  const reduceMotion = useReducedMotion()
  const sizeClass =
    size === 'sm'
      ? 'h-9 w-9'
      : size === 'lg'
        ? 'h-14 w-14'
        : size === 'xl'
          ? 'h-16 w-16'
          : 'h-12 w-12'
  const iconClass =
    size === 'sm' ? 'h-4 w-4' : size === 'lg' || size === 'xl' ? 'h-6 w-6' : 'h-5 w-5'

  return (
    <motion.span
      className={`inline-flex ${sizeClass} items-center justify-center rounded-full ${TONE_FRAME[tone]} ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -6 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
    >
      <MeshGlyph id={id} className={iconClass} />
    </motion.span>
  )
}
