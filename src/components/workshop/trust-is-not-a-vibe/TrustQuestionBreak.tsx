'use client'

import { useEffect, useState } from 'react'
import { TRUST_CENTRAL_QUESTION } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

export function TrustQuestionBreak({
  className,
  prompt = 'ASK',
}: {
  className?: string
  prompt?: string
}) {
  const [shown, setShown] = useState('')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(TRUST_CENTRAL_QUESTION)
      setReady(true)
      return
    }

    let index = 0
    const tick = window.setInterval(() => {
      index += 1
      setShown(TRUST_CENTRAL_QUESTION.slice(0, index))
      if (index >= TRUST_CENTRAL_QUESTION.length) {
        window.clearInterval(tick)
        setReady(true)
      }
    }, 28)

    return () => window.clearInterval(tick)
  }, [])

  return (
    <section
      aria-label={TRUST_CENTRAL_QUESTION}
      className={cn('group/ask relative overflow-hidden rounded-xl border border-cyan-400/40 bg-stone-950 text-cyan-100', className)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:100%_3px] motion-safe:animate-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-200 group-hover/ask:opacity-70 [background-image:repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,0.35)_2px,rgba(0,0,0,0.35)_4px)]"
        aria-hidden
      />

      <div className="relative flex items-center justify-between border-b border-cyan-400/25 px-4 py-2 font-space-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300/80 sm:px-5">
        <span>eval · authority threshold</span>
        <span className="text-cyan-400/70">{ready ? 'ready' : 'typing'}</span>
      </div>

      <p className="relative px-4 py-6 font-space-mono text-xl leading-snug tracking-tight text-cyan-50 [image-rendering:pixelated] sm:px-5 sm:text-2xl md:text-3xl">
        <span className="mr-3 text-cyan-400" aria-hidden>
          {prompt}
          <span className="text-cyan-600"> &gt;</span>
        </span>
        <span className="transition-colors duration-200 group-hover/ask:text-white">
          {shown}
        </span>
        <span
          className={cn(
            'ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.12em] bg-cyan-300 align-baseline',
            ready ? 'motion-safe:animate-pulse' : '',
            'group-hover/ask:bg-white'
          )}
          aria-hidden
        />
      </p>

      <p className="relative border-t border-cyan-400/20 px-4 py-2 font-space-mono text-[10px] uppercase tracking-[0.18em] text-cyan-400/70 sm:px-5">
        Allow · Ask · Deny — before the system may write
      </p>
    </section>
  )
}
