'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'
import {
  ART_OF_AI_AGENTS_BASE,
  ART_OF_AI_AGENTS_CHAPTERS,
} from '@/config/art-of-ai-agents-chapters'

export function ArtOfAIAgentsChapterNav({ slug }: { slug: string }) {
  const { theme } = useTheme()
  const i = ART_OF_AI_AGENTS_CHAPTERS.findIndex((c) => c.slug === slug)
  const prev = i > 0 ? ART_OF_AI_AGENTS_CHAPTERS[i - 1] : null
  const next = i >= 0 && i < ART_OF_AI_AGENTS_CHAPTERS.length - 1 ? ART_OF_AI_AGENTS_CHAPTERS[i + 1] : null

  const linkClass = cn(
    'inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
    theme === 'dark'
      ? 'border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900'
      : 'border-zinc-300 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-100'
  )

  return (
    <nav
      className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Chapter navigation"
    >
      <div>
        {prev ? (
          <Link href={`${ART_OF_AI_AGENTS_BASE}/chapter/${prev.slug}`} className={linkClass}>
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-left">Previous: {prev.title}</span>
          </Link>
        ) : (
          <Link href={ART_OF_AI_AGENTS_BASE} className={linkClass}>
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            Introduction
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next ? (
          <Link href={`${ART_OF_AI_AGENTS_BASE}/chapter/${next.slug}`} className={linkClass}>
            <span className="text-right">Next: {next.title}</span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        ) : (
          <Link href={ART_OF_AI_AGENTS_BASE} className={linkClass}>
            Back to introduction
          </Link>
        )}
      </div>
    </nav>
  )
}
