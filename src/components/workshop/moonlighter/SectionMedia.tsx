'use client'

import Image from 'next/image'
import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type {
  LandingMediaAspect,
  LandingMediaItem,
} from '@/content/workshops/moonlighter-ai-3d-printing/landing-media'
import { getLandingMedia } from '@/content/workshops/moonlighter-ai-3d-printing/landing-media'
import type { MeshGlyphId } from '@/content/workshops/moonlighter-ai-3d-printing/mesh-glyphs'
import { MeshGlyph, MeshGlyphFrame, type MeshGlyphTone } from './MeshGlyphs'

const ASPECT_CLASS: Record<LandingMediaAspect, string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
}

const TONE_GRADIENT: Record<NonNullable<LandingMediaItem['tone']>, string> = {
  charcoal: 'linear-gradient(145deg, #1A1A1A 0%, #2C2C2C 42%, #FF6B5A33 100%)',
  coral: 'linear-gradient(145deg, #FF6B5A 0%, #FF8A7A 45%, #1A1A1A 100%)',
  paper: 'linear-gradient(145deg, #FFFFFF 0%, #F2F0EE 40%, #FF6B5A22 100%)',
  digital: 'linear-gradient(145deg, #1A1A1A 0%, #277DA8 55%, #FF6B5A44 100%)',
}

type TiltIntensity = 'off' | 'subtle' | 'medium' | 'strong'

const TILT_MAX: Record<Exclude<TiltIntensity, 'off'>, { rx: number; ry: number; scale: number }> = {
  subtle: { rx: 3, ry: 4, scale: 1.01 },
  medium: { rx: 5, ry: 7, scale: 1.025 },
  strong: { rx: 8, ry: 11, scale: 1.04 },
}

type PointerState = {
  x: number
  y: number
  rx: number
  ry: number
  active: boolean
}

const IDLE_POINTER: PointerState = { x: 50, y: 40, rx: 0, ry: 0, active: false }

type SectionMediaProps = {
  id?: string
  media?: LandingMediaItem
  className?: string
  showCaption?: boolean
  showIconFrame?: boolean
  priority?: boolean
  tilt?: TiltIntensity
  float?: boolean
  delay?: number
}

export function SectionMedia({
  id,
  media: mediaProp,
  className = '',
  showCaption = false,
  showIconFrame = true,
  priority = false,
  tilt = 'medium',
  float = false,
  delay = 0,
}: SectionMediaProps) {
  const reduceMotion = useReducedMotion()
  const frameRef = useRef<HTMLDivElement>(null)
  const [pointer, setPointer] = useState<PointerState>(IDLE_POINTER)
  const media = mediaProp ?? (id ? getLandingMedia(id) : undefined)

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (reduceMotion || tilt === 'off') return
      const el = frameRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      const max = TILT_MAX[tilt]
      setPointer({
        x: Math.min(100, Math.max(0, x)),
        y: Math.min(100, Math.max(0, y)),
        ry: ((x - 50) / 50) * max.ry,
        rx: -((y - 50) / 50) * max.rx,
        active: true,
      })
    },
    [reduceMotion, tilt]
  )

  const onPointerLeave = useCallback(() => setPointer(IDLE_POINTER), [])

  if (!media) return null

  const tone = media.tone ?? 'charcoal'
  const isLight = tone === 'paper' || tone === 'coral'
  const hasSrc = Boolean(media.src)
  const tiltEnabled = !reduceMotion && tilt !== 'off'
  const max = tilt !== 'off' ? TILT_MAX[tilt] : null

  const cardStyle: CSSProperties | undefined =
    tiltEnabled && max
      ? {
          transform: pointer.active
            ? `rotateX(${pointer.rx}deg) rotateY(${pointer.ry}deg) translateZ(12px) scale(${max.scale})`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)',
          transformStyle: 'preserve-3d',
          ['--ml-shine-x' as string]: `${pointer.x}%`,
          ['--ml-shine-y' as string]: `${pointer.y}%`,
        }
      : undefined

  const inner = hasSrc && media.src ? (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      priority={priority}
      className="object-cover transition-transform duration-500 ease-out will-change-transform motion-safe:group-hover/ml-media:scale-[1.06]"
      sizes="(max-width: 768px) 100vw, 720px"
      style={
        tiltEnabled && pointer.active
          ? {
              transform: `translateZ(18px) translate(${(pointer.x - 50) * -0.04}%, ${(pointer.y - 50) * -0.04}%)`,
            }
          : undefined
      }
    />
  ) : (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6"
      style={{ background: TONE_GRADIENT[tone] }}
      aria-hidden={showCaption ? undefined : true}
    >
      <div
        className={`absolute inset-0 opacity-30 ${
          isLight
            ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_55%)]'
            : 'bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,90,0.35),transparent_50%)]'
        }`}
      />
      {showIconFrame && (
        <div
          className={`relative z-[1] flex h-16 w-16 items-center justify-center rounded-full border-2 md:h-20 md:w-20 ${
            isLight
              ? 'border-[var(--ml-ink)]/20 bg-white/70 text-[var(--ml-ink)]'
              : 'border-white/25 bg-white/10 text-white'
          }`}
        >
          <MeshGlyph id={media.icon} className="h-7 w-7 md:h-8 md:w-8" />
        </div>
      )}
      <p
        className={`relative z-[1] max-w-[16rem] text-center text-xs font-medium uppercase tracking-[0.18em] md:text-sm ${
          isLight ? 'text-[var(--ml-ink)]/70' : 'text-white/80'
        }`}
      >
        {media.title}
      </p>
    </div>
  )

  return (
    <motion.div
      className={`[perspective:1200px] ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 16, rotateX: 6 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div
        ref={frameRef}
        className="group/ml-media relative h-full w-full"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <motion.figure
          className={`relative overflow-hidden ${ASPECT_CLASS[media.aspect]} transform-gpu will-change-transform transition-[transform,box-shadow] duration-300 ease-out motion-safe:group-hover/ml-media:shadow-[0_28px_50px_-24px_rgba(0,0,0,0.45)]`}
          style={cardStyle}
          animate={
            !reduceMotion && float && !pointer.active
              ? {
                  rotateY: [-4, 4, -4],
                  rotateX: [2, 4, 2],
                  y: [0, -4, 0],
                }
              : undefined
          }
          transition={
            float
              ? { duration: 7, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3, ease: 'easeOut' }
          }
        >
          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {inner}
            {!hasSrc && <span className="sr-only">{media.alt}</span>}

            {tiltEnabled && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 motion-safe:group-hover/ml-media:opacity-100"
                style={{
                  background: `radial-gradient(circle at var(--ml-shine-x, 50%) var(--ml-shine-y, 40%), rgba(255,255,255,0.28), transparent 42%)`,
                  mixBlendMode: 'soft-light',
                }}
              />
            )}

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-white/25 transition-opacity duration-300 motion-safe:group-hover/ml-media:opacity-100"
            />
          </div>

          {showCaption && (
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-3 pt-8 text-xs text-white">
              {media.title}
            </figcaption>
          )}
        </motion.figure>
      </div>
    </motion.div>
  )
}

/** @deprecated Prefer MeshGlyphFrame — kept for existing call sites */
export function MoonlighterIconFrame({
  icon,
  tone = 'charcoal',
  className = '',
}: {
  icon: MeshGlyphId
  tone?: MeshGlyphTone
  className?: string
}) {
  return <MeshGlyphFrame id={icon} tone={tone} className={className} />
}
