'use client'

import { useCallback, useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { TeachingSlide } from '@/content/workshops/moonlighter-ai-3d-printing/instructor-media'
import { MeshGlyph } from './MeshGlyphs'

const AUTOPLAY_MS = 5200

export function InstructorTeachingCarousel({ slides }: { slides: TeachingSlide[] }) {
  const reduceMotion = useReducedMotion()
  const labelId = useId()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length
  const current = slides[index] ?? slides[0]

  const go = useCallback(
    (next: number) => {
      if (count < 1) return
      setIndex(((next % count) + count) % count)
    },
    [count]
  )

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [count, paused, reduceMotion, index])

  if (!current) return null

  return (
    <div
      className="relative overflow-hidden bg-[var(--ml-charcoal)] [perspective:1200px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
    >
      <p id={labelId} className="sr-only">
        Photos of Moises Sanabria teaching
      </p>

      <div className="relative aspect-[4/3] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.04, rotateY: -4 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          <MeshGlyph id="ml-shared-handoff" className="h-3.5 w-3.5 text-[var(--ml-accent)]" />
          Teaching
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
          <p className="max-w-md text-sm font-medium text-white">{current.caption}</p>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-white/30 px-3 py-1 text-xs text-white transition hover:bg-white/10"
              onClick={() => go(index - 1)}
              aria-label="Previous teaching photo"
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-full border border-white/30 px-3 py-1 text-xs text-white transition hover:bg-white/10"
              onClick={() => go(index + 1)}
              aria-label="Next teaching photo"
            >
              Next
            </button>
            <div className="ml-auto flex gap-1.5" aria-hidden>
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    i === index ? 'bg-[var(--ml-accent)]' : 'bg-white/35'
                  }`}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
