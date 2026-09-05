'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { TrustIdeaTerm } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { trustIdea } from './trust-tokens'

const IdeaTermsContext = createContext<{
  openTerm: string | null
  toggle: (term: string) => void
}>({
  openTerm: null,
  toggle: () => {},
})

/** One definition open at a time across The idea. */
export function IdeaTermsProvider({ children }: { children: ReactNode }) {
  const [openTerm, setOpenTerm] = useState<string | null>(null)
  const value = useMemo(
    () => ({
      openTerm,
      toggle: (term: string) => setOpenTerm((current) => (current === term ? null : term)),
    }),
    [openTerm]
  )

  useEffect(() => {
    if (!openTerm) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenTerm(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openTerm])

  return <IdeaTermsContext.Provider value={value}>{children}</IdeaTermsContext.Provider>
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function TrustIdeaMark({
  term,
  meaning,
  children,
}: {
  term: string
  meaning: string
  children: ReactNode
}) {
  const id = useId()
  const key = term.toLowerCase()
  const { openTerm, toggle } = useContext(IdeaTermsContext)
  const open = openTerm === key

  return (
    <span className="relative inline">
      <button
        type="button"
        data-trust-idea-term
        aria-expanded={open}
        aria-controls={id}
        onClick={() => toggle(key)}
        className={cn(trustIdea.term, 'cursor-help underline decoration-cyan-500/50 decoration-dotted underline-offset-2')}
      >
        {children}
      </button>
      {open ? (
        <span
          id={id}
          role="note"
          data-trust-idea-def
          className="absolute left-0 top-full z-20 mt-1 w-[min(18rem,calc(100vw-2rem))] rounded-md border border-cyan-300 bg-white px-2.5 py-2 text-left text-sm font-normal not-italic leading-snug text-stone-800 shadow-md dark:border-cyan-800 dark:bg-stone-900 dark:text-stone-100"
        >
          <span className="font-space-mono text-[10px] uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-400">
            {term}
          </span>
          <span className="mt-1 block">{meaning}</span>
        </span>
      ) : null}
    </span>
  )
}

export function highlightIdeaTerms(text: string, terms: readonly TrustIdeaTerm[]): ReactNode[] {
  if (terms.length === 0) return [text]
  const sorted = [...terms].sort((a, b) => b.term.length - a.term.length)
  const pattern = new RegExp(`(${sorted.map((entry) => escapeRegExp(entry.term)).join('|')})`, 'gi')
  return text.split(pattern).map((part, index) => {
    const entry = terms.find((item) => item.term.toLowerCase() === part.toLowerCase())
    if (!entry || !part) return part
    return (
      <TrustIdeaMark key={`${entry.term}-${index}`} term={entry.term} meaning={entry.meaning}>
        {part}
      </TrustIdeaMark>
    )
  })
}
