'use client'

import { Fragment, useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { TrustIdeaQuote as TrustIdeaQuoteCopy } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { useTrustPresentation } from './TrustPresentation'
import { trust, trustIdea, trustPresent } from './trust-tokens'

function quoteWords(text: string) {
  return text.split(/\s+/).filter(Boolean)
}

function typeOnDurationMs(wordCount: number) {
  return Math.min(12_000, Math.max(8_000, wordCount * 400))
}

/**
 * Compact source quote after The idea. One Present slide; self-paced keeps it
 * at the bottom of the claim. Not a rail step.
 */
export function TrustIdeaQuote({ quote }: { quote: TrustIdeaQuoteCopy }) {
  const { present } = useTrustPresentation()
  const reduceMotion = useReducedMotion()
  const words = useMemo(() => quoteWords(quote.text), [quote.text])
  const wordCount = words.length
  const [revealed, setRevealed] = useState(0)
  const [settled, setSettled] = useState(!present)

  const typing = present && reduceMotion !== true && revealed < wordCount
  const metaReady = !present || reduceMotion === true || settled

  useEffect(() => {
    if (!present || reduceMotion === true) {
      setRevealed(wordCount)
      return
    }
    if (reduceMotion !== false) return

    setRevealed(0)
    const step = typeOnDurationMs(wordCount) / Math.max(wordCount, 1)
    let n = 0
    const id = window.setInterval(() => {
      n += 1
      setRevealed(n)
      if (n >= wordCount) window.clearInterval(id)
    }, step)
    return () => window.clearInterval(id)
  }, [present, reduceMotion, wordCount])

  useEffect(() => {
    if (!present || reduceMotion === true) {
      setSettled(true)
      return
    }
    if (revealed < wordCount) {
      setSettled(false)
      return
    }
    const id = window.setTimeout(() => setSettled(true), 280)
    return () => window.clearTimeout(id)
  }, [present, reduceMotion, revealed, wordCount])

  const attribution = present || !quote.href ? (
    quote.attribution
  ) : (
    <a href={quote.href} className={trust.link} target="_blank" rel="noreferrer">
      {quote.attribution}
    </a>
  )

  return (
    <figure
      data-trust-idea-quote
      data-trust-idea-quote-settled={metaReady || undefined}
      tabIndex={0}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-stone-200 bg-stone-50 outline-none',
        'dark:border-stone-700 dark:bg-stone-900',
        'motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-300 motion-safe:ease-out',
        'hover:border-cyan-400 hover:shadow-md focus-visible:border-cyan-400 focus-visible:shadow-md',
        'motion-safe:hover:-translate-y-0.5 motion-safe:focus-visible:-translate-y-0.5',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/70',
        present ? 'max-w-[42ch] px-6 py-8 sm:px-8' : 'max-w-[42ch] px-4 py-4'
      )}
    >
      <span
        aria-hidden
        data-trust-idea-quote-rule
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-center scale-y-[0.7] bg-cyan-400/45',
          'motion-safe:transition-[transform,background-color,width] motion-safe:duration-300 motion-safe:ease-out',
          'group-hover:w-[3px] group-hover:scale-y-100 group-hover:bg-cyan-400',
          'group-focus-visible:w-[3px] group-focus-visible:scale-y-100 group-focus-visible:bg-cyan-400'
        )}
      />
      <blockquote className="min-w-0">
        <p className={cn(present ? trustPresent.body : trustIdea.body, 'italic')}>
          <span
            data-trust-idea-quote-mark
            className={cn(
              'inline-block text-cyan-700/80 dark:text-cyan-400/80',
              'motion-safe:transition-[transform,color] motion-safe:duration-300 motion-safe:ease-out',
              'group-hover:-translate-y-0.5 group-hover:text-cyan-600',
              'group-focus-visible:-translate-y-0.5 group-focus-visible:text-cyan-600',
              'dark:group-hover:text-cyan-300 dark:group-focus-visible:text-cyan-300'
            )}
          >
            “
          </span>
          {words.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              {index > 0 ? ' ' : null}
              <span
                data-trust-idea-quote-word
                data-revealed={!typing || index < revealed || undefined}
                className={cn(
                  'motion-safe:transition-opacity motion-safe:duration-500',
                  typing && index >= revealed ? 'opacity-[0.16] motion-reduce:opacity-100' : 'opacity-100'
                )}
              >
                {word}
              </span>
            </Fragment>
          ))}
          ”
        </p>
        <footer
          className={cn(
            'mt-4',
            'motion-safe:transition-opacity motion-safe:duration-500',
            metaReady ? 'opacity-100' : 'opacity-0 motion-reduce:opacity-100'
          )}
        >
          <cite
            className={cn(
              'not-italic text-stone-600 dark:text-stone-400',
              present ? trustPresent.note : 'text-sm font-medium'
            )}
          >
            {attribution}
          </cite>
        </footer>
      </blockquote>
      <figcaption
        data-trust-idea-quote-why
        className={cn(
          'mt-5',
          present && 'mt-7',
          'motion-safe:transition-opacity motion-safe:duration-500',
          metaReady ? 'opacity-100' : 'opacity-0 motion-reduce:opacity-100'
        )}
      >
        <p
          data-trust-idea-quote-kicker
          className={cn(
            'font-space-mono uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400',
            present ? 'text-sm sm:text-base' : 'text-[11px] leading-none'
          )}
        >
          Why this matters here
        </p>
        <span
          aria-hidden
          className={cn(
            'mt-2 block h-px w-10 bg-cyan-400',
            present && 'mt-2.5 w-12'
          )}
        />
        <p
          data-trust-idea-quote-bridge
          className={cn(
            'mt-2 font-medium not-italic text-stone-800 dark:text-stone-200',
            present ? cn(trustPresent.note, 'font-medium') : 'text-sm leading-relaxed'
          )}
        >
          {quote.bridge}
        </p>
      </figcaption>
    </figure>
  )
}
