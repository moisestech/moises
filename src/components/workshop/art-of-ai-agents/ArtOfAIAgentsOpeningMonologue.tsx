'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Film, ImageIcon, Keyboard, List, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ART_OF_AI_AGENTS_MONOLOGUE_ALL,
  ART_OF_AI_AGENTS_MONOLOGUE_PART1,
  type MonologueBlock,
} from '@/constants/art-of-ai-agents-monologue'
import { N8NIconReact } from '@/components/icons/N8NIcon'
import { cn } from '@/lib/utils'

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

function MonologueMediaWell({ block }: { block: MonologueBlock }) {
  const src = block.media === 'video' ? block.videoPosterSrc : block.imageSrc

  if (src) {
    return (
      <div
        className={cn(
          'relative aspect-[16/10] w-full overflow-hidden rounded-xl border shadow-sm',
          'border-zinc-200/90 dark:border-white/10 dark:shadow-none'
        )}
      >
        <Image
          src={src}
          alt={`${block.label}: ${block.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 640px"
        />
        {block.media === 'video' && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" aria-hidden />
            Video
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed px-6 text-center',
        'border-zinc-300/90 bg-gradient-to-br from-violet-100/50 via-zinc-50 to-cyan-100/40',
        'dark:border-white/15 dark:from-violet-950/40 dark:via-zinc-950 dark:to-cyan-950/30'
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(127,90,240,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(66,211,146,0.2), transparent 40%)',
        }}
        aria-hidden
      />
      {block.media === 'video' ? (
        <div className="relative z-[1] flex flex-col items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15 text-red-600 dark:bg-red-500/20 dark:text-red-400">
            <Film className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Placeholder
          </span>
        </div>
      ) : (
        <div className="relative z-[1] flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-400">
          <ImageIcon className="h-10 w-10 opacity-70" strokeWidth={1.25} />
        </div>
      )}
      <p className="relative z-[1] max-w-xs text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {block.media === 'video'
          ? 'Add videoPosterSrc (still) or embed later — constants file.'
          : 'Add imageSrc in art-of-ai-agents-monologue.ts when ready.'}
      </p>
    </div>
  )
}

function MonologueSectionCard({
  block,
  index,
  reduceMotion,
}: {
  block: MonologueBlock
  index: number
  reduceMotion: boolean
}) {
  const Tag = reduceMotion ? 'div' : motion.article
  const motionProps = reduceMotion ? {} : fadeIn

  return (
    <Tag
      {...(reduceMotion ? {} : motionProps)}
      className={cn(
        'border-b border-zinc-200/80 py-12 last:border-b-0 dark:border-zinc-800/80',
        index === 0 && 'pt-4'
      )}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest',
              block.part === 1
                ? 'bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200'
                : 'bg-cyan-100 text-cyan-900 dark:bg-cyan-500/15 dark:text-cyan-200'
            )}
          >
            Part {block.part}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {block.label}
          </span>
        </div>

        <div className="mb-6 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-10">
          <MonologueMediaWell block={block} />
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              {block.title}
            </h2>
            {block.subtitle && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {block.id === 'p1-s5' && (
                  <N8NIconReact className="h-6 w-6 shrink-0 text-[#ea4b71]" aria-hidden />
                )}
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{block.subtitle}</p>
              </div>
            )}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {block.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {block.stageNotes && block.stageNotes.length > 0 && (
              <ul className="mt-6 space-y-2 border-l-2 border-violet-400/60 py-1 pl-4 dark:border-violet-500/50">
                {block.stageNotes.map((note, i) => (
                  <li
                    key={i}
                    className="text-sm italic leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Tag>
  )
}

export function ArtOfAIAgentsOpeningMonologue() {
  const reduceMotion = useReducedMotion() ?? false
  const [activeId, setActiveId] = useState<string>(ART_OF_AI_AGENTS_MONOLOGUE_ALL[0]?.id ?? '')
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el)
    else sectionRefs.current.delete(id)
  }, [])

  useEffect(() => {
    const nodes = ART_OF_AI_AGENTS_MONOLOGUE_ALL.map((b) => sectionRefs.current.get(b.id)).filter(Boolean) as HTMLElement[]
    if (nodes.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      { root: null, rootMargin: '-20% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    )
    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  const scrollToId = useCallback((id: string) => {
    sectionRefs.current.get(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [reduceMotion])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      const idx = ART_OF_AI_AGENTS_MONOLOGUE_ALL.findIndex((b) => b.id === activeId)
      if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault()
        const next = ART_OF_AI_AGENTS_MONOLOGUE_ALL[idx + 1]
        if (next) scrollToId(next.id)
      }
      if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault()
        const prev = ART_OF_AI_AGENTS_MONOLOGUE_ALL[idx - 1]
        if (prev) scrollToId(prev.id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeId, scrollToId])

  const part1End = ART_OF_AI_AGENTS_MONOLOGUE_PART1.length

  return (
    <div className="relative">
      <header className="mx-auto max-w-3xl border-b border-zinc-200/80 px-1 pb-10 dark:border-zinc-800/80">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
          Live talk · script
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Opening monologue
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Part 1 sets context and the plan for the room. Part 2 is the spoken essay (~7 minutes): precise, reflective,
          un-sugarcoated. Use the rail to jump; use{' '}
          <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] dark:border-zinc-600 dark:bg-zinc-800">
            ↑
          </kbd>{' '}
          <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] dark:border-zinc-600 dark:bg-zinc-800">
            ↓
          </kbd>{' '}
          or{' '}
          <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] dark:border-zinc-600 dark:bg-zinc-800">
            j
          </kbd>{' '}
          <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-[11px] dark:border-zinc-600 dark:bg-zinc-800">
            k
          </kbd>{' '}
          between beats.
        </p>
        <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
          <Keyboard className="h-3.5 w-3.5" aria-hidden />
          <span>Keyboard navigation</span>
          <span className="text-zinc-400">·</span>
          <List className="h-3.5 w-3.5" aria-hidden />
          <span>{ART_OF_AI_AGENTS_MONOLOGUE_ALL.length} beats with media placeholders</span>
        </p>
      </header>

      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0">
          <div
            className={cn(
              'sticky top-0 z-[2] flex gap-2 overflow-x-auto border-b py-3 lg:hidden',
              'border-zinc-200/80 bg-zinc-50/95 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90'
            )}
            role="tablist"
            aria-label="Jump to beat"
          >
            {ART_OF_AI_AGENTS_MONOLOGUE_ALL.map((b, i) => (
              <button
                key={b.id}
                type="button"
                onClick={() => scrollToId(b.id)}
                className={cn(
                  'shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                  activeId === b.id
                    ? 'bg-violet-600 text-white dark:bg-violet-500'
                    : 'bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-violet-400/50 via-zinc-200/50 to-cyan-400/40 lg:block dark:from-violet-500/30 dark:via-zinc-700/40 dark:to-cyan-500/25"
              aria-hidden
            />
            <div className="lg:pl-6">
              <div className="scroll-mt-28 pt-10" id="part-1-intro">
                <div className="mx-auto mb-8 max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-violet-200/80 bg-violet-50/80 px-3 py-2 dark:border-violet-500/25 dark:bg-violet-950/30">
                    <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                    <span className="text-sm font-semibold text-violet-900 dark:text-violet-100">
                      Part 1 — Intro, context, funnel
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    Slides 0–5 · thanks, bio, title, disclaimer, overview (n8n).
                  </p>
                </div>
              </div>

              {ART_OF_AI_AGENTS_MONOLOGUE_ALL.slice(0, part1End).map((block, i) => (
                <div
                  key={block.id}
                  id={block.id}
                  ref={(el) => registerRef(block.id, el)}
                  className="scroll-mt-24"
                >
                  <MonologueSectionCard block={block} index={i} reduceMotion={reduceMotion} />
                </div>
              ))}

              <div className="mx-auto max-w-3xl py-6">
                <hr className="border-zinc-200 dark:border-zinc-800" />
              </div>

              <div className="scroll-mt-28" id="part-2-monologue">
                <div className="mx-auto mb-8 max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-200/80 bg-cyan-50/80 px-3 py-2 dark:border-cyan-500/25 dark:bg-cyan-950/25">
                    <span className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">
                      Part 2 — Opening monologue (~7 min)
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                    Tone: hybrid — precise, reflective, un-sugarcoated. Mode: spoken essay.
                  </p>
                </div>
              </div>

              {ART_OF_AI_AGENTS_MONOLOGUE_ALL.slice(part1End).map((block, i) => (
                <div
                  key={block.id}
                  id={block.id}
                  ref={(el) => registerRef(block.id, el)}
                  className="scroll-mt-24"
                >
                  <MonologueSectionCard block={block} index={i + part1End} reduceMotion={reduceMotion} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside
          className={cn(
            'hidden lg:block',
            'sticky top-24 max-h-[calc(100vh-6rem)] self-start overflow-y-auto pb-10 pt-10'
          )}
          aria-label="Beat index"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Index</p>
          <ol className="mt-4 space-y-1 border-l border-zinc-200 pl-3 dark:border-zinc-700">
            {ART_OF_AI_AGENTS_MONOLOGUE_ALL.map((b, i) => (
              <li key={b.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(b.id)}
                  className={cn(
                    'w-full rounded-r-md py-1.5 pl-2 text-left text-xs transition-colors',
                    activeId === b.id
                      ? 'border-l-2 border-violet-500 bg-violet-50/80 font-medium text-violet-900 -ml-px dark:bg-violet-950/40 dark:text-violet-100'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200'
                  )}
                >
                  <span className="text-zinc-400 dark:text-zinc-500">{i + 1}.</span>{' '}
                  <span className="line-clamp-2">{b.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  )
}
