'use client'

import { useLayoutEffect, useState } from 'react'
import { AEP_CAPACITY_LINE } from '@/content/workshops/aep-workshop-copy'
import { cn } from '@/lib/utils'

export function AepCapacityLine({ className }: { className?: string }) {
  const [shown, setShown] = useState(AEP_CAPACITY_LINE)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    setShown('')
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setShown(AEP_CAPACITY_LINE.slice(0, i))
      if (i >= AEP_CAPACITY_LINE.length) window.clearInterval(id)
    }, 18)
    return () => window.clearInterval(id)
  }, [])

  return (
    <p
      aria-label={AEP_CAPACITY_LINE}
      className={cn(
        "font-['MoMA_Sans'] text-3xl font-bold leading-[1.15] tracking-tight text-stone-950 dark:text-stone-50 md:text-5xl",
        className,
      )}
    >
      {shown}
      {shown.length < AEP_CAPACITY_LINE.length ? (
        <span className="ml-0.5 inline-block w-[0.55ch] animate-pulse bg-cyan-500 align-[-0.1em]" aria-hidden>
          {' '}
        </span>
      ) : null}
    </p>
  )
}
