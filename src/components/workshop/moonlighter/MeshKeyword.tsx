'use client'

import {
  useCallback,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  getGlossaryTerm,
  type GlossaryTerm,
  type GlossaryTone,
} from '@/content/workshops/moonlighter-ai-3d-printing/glossary'

const GRADIENTS: Record<GlossaryTone, string> = {
  coral: 'radial-gradient(circle at var(--kw-x, 50%) var(--kw-y, 40%), #FF6B5A 0%, #FF927F 35%, transparent 68%)',
  mesh: 'radial-gradient(circle at var(--kw-x, 50%) var(--kw-y, 40%), #277DA8 0%, #78C5CF 28%, #FF6B5A 55%, transparent 72%)',
  charcoal: 'radial-gradient(circle at var(--kw-x, 50%) var(--kw-y, 40%), #3A2E2A 0%, #1A1A1A 45%, transparent 70%)',
  paper: 'radial-gradient(circle at var(--kw-x, 50%) var(--kw-y, 40%), #FFFFFF 0%, #F7F6F4 40%, #E8E8E8 70%, transparent 85%)',
}

type PointerState = { x: number; y: number; rx: number; ry: number; active: boolean }

const IDLE: PointerState = { x: 50, y: 40, rx: 0, ry: 0, active: false }

/**
 * Inline glossary keyword with CSS 3D tilt + volumetric gradient bloom on hover/focus.
 */
export function MeshKeyword({
  id,
  children,
  className = '',
  variant = 'light',
}: {
  id: string
  children?: ReactNode
  className?: string
  /** `dark` for charcoal backgrounds (white type). */
  variant?: 'light' | 'dark'
}) {
  const term = getGlossaryTerm(id)
  const reduceMotion = useReducedMotion()
  const tipId = useId()
  const ref = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [pointer, setPointer] = useState<PointerState>(IDLE)

  const onMove = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (reduceMotion || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      setPointer({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
        ry: ((x - 50) / 50) * 6,
        rx: -((y - 50) / 50) * 4,
        active: true,
      })
    },
    [reduceMotion]
  )

  if (!term) {
    return <span className={className}>{children ?? id}</span>
  }

  const style: CSSProperties = reduceMotion
    ? {}
    : {
        transform: pointer.active
          ? `perspective(600px) rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) translateZ(2px)`
          : 'perspective(600px) rotateX(0deg) rotateY(0deg)',
        ['--kw-x' as string]: `${pointer.x}%`,
        ['--kw-y' as string]: `${pointer.y}%`,
      }

  const dark = variant === 'dark'

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <button
        ref={ref}
        type="button"
        aria-describedby={open ? tipId : undefined}
        className={`group/kw relative inline-flex items-baseline rounded-sm px-1 py-0.5 font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--ml-accent)] focus-visible:ring-offset-2 ${
          dark
            ? 'text-white focus-visible:ring-offset-[var(--ml-charcoal)]'
            : 'text-[var(--ml-ink)] focus-visible:ring-offset-[var(--ml-paper)]'
        }`}
        style={style}
        onPointerMove={onMove}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => {
          setOpen(false)
          setPointer(IDLE)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          setOpen(false)
          setPointer(IDLE)
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-2px] rounded-sm opacity-0 transition-opacity duration-200 group-hover/kw:opacity-100 group-focus-visible/kw:opacity-100"
          style={{
            background: GRADIENTS[term.tone],
            mixBlendMode: dark ? 'screen' : 'multiply',
          }}
        />
        <span
          className={`relative z-[1] border-b border-dotted decoration-[var(--ml-accent)] underline-offset-4 group-hover/kw:border-solid ${
            dark ? 'border-white/55' : 'border-[var(--ml-accent)]/70'
          }`}
        >
          {children ?? term.term}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.span
            id={tipId}
            role="tooltip"
            initial={reduceMotion ? false : { opacity: 0, y: 6, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-1/2 top-[calc(100%+8px)] z-40 w-[min(18rem,70vw)] -translate-x-1/2 rounded-md border border-[var(--ml-soft-gray)] bg-[var(--ml-paper)] p-3 text-left shadow-[0_18px_40px_-24px_rgba(26,26,26,0.45)] [transform-style:preserve-3d]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-md opacity-80"
              style={{ background: GRADIENTS[term.tone] }}
            />
            <span className="relative z-[1] block text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ml-accent)]">
              {term.short}
            </span>
            <span className="relative z-[1] mt-1 block text-xs leading-relaxed text-[var(--ml-ink)]/85">
              {term.definition}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

export function GlossaryCard({
  term,
  index = 0,
}: {
  term: GlossaryTerm
  index?: number
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [pointer, setPointer] = useState<PointerState>(IDLE)

  const onMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (reduceMotion || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      setPointer({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
        ry: ((x - 50) / 50) * 5,
        rx: -((y - 50) / 50) * 4,
        active: true,
      })
    },
    [reduceMotion]
  )

  const cardStyle: CSSProperties = reduceMotion
    ? { ['--kw-x' as string]: '50%', ['--kw-y' as string]: '30%' }
    : {
        transform: pointer.active
          ? `rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) translateZ(8px)`
          : 'rotateX(0deg) rotateY(0deg)',
        ['--kw-x' as string]: `${pointer.x}%`,
        ['--kw-y' as string]: `${pointer.y}%`,
      }

  return (
    <motion.article
      ref={ref}
      className="group/card relative overflow-hidden border border-[var(--ml-soft-gray)] bg-white p-5 [transform-style:preserve-3d]"
      style={cardStyle}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onMove}
      onPointerLeave={() => setPointer(IDLE)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 group-hover/card:opacity-90"
        style={{ background: GRADIENTS[term.tone] }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          background: `radial-gradient(circle at var(--kw-x) var(--kw-y), rgba(255,255,255,0.55), transparent 45%)`,
        }}
      />
      <p className="relative z-[1] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ml-ink)]/45">
        {term.category}
      </p>
      <h3 className="relative z-[1] mt-2 text-lg font-semibold tracking-tight text-[var(--ml-ink)]">
        {term.term}
      </h3>
      <p className="relative z-[1] mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ml-accent)]">
        {term.short}
      </p>
      <p className="relative z-[1] mt-3 text-sm leading-relaxed text-[var(--ml-ink)]/75">{term.definition}</p>
    </motion.article>
  )
}
