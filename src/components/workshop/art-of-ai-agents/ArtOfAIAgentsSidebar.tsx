'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Layers, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'
import {
  ART_OF_AI_AGENTS_BASE,
  ART_OF_AI_AGENTS_CHAPTERS,
  ART_OF_AI_AGENTS_COURSE_HUB,
} from '@/config/art-of-ai-agents-chapters'

export function ArtOfAIAgentsSidebar() {
  const pathname = usePathname()
  const { theme } = useTheme()

  const itemClass = (active: boolean) =>
    cn(
      'flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors',
      active && theme === 'dark' && 'bg-indigo-900/30 text-indigo-300',
      active && theme !== 'dark' && 'bg-indigo-50 text-indigo-800',
      !active && theme === 'dark' && 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200',
      !active && theme !== 'dark' && 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
    )

  const overviewActive = pathname === ART_OF_AI_AGENTS_BASE || pathname === `${ART_OF_AI_AGENTS_BASE}/`
  const courseHubActive = pathname === ART_OF_AI_AGENTS_COURSE_HUB

  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2
          className={cn(
            'text-lg font-semibold mb-3',
            theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
          )}
        >
          Workshop
        </h2>
        <nav className="space-y-1">
          <Link
            href={ART_OF_AI_AGENTS_BASE}
            className={itemClass(overviewActive)}
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            Overview
          </Link>
          <Link href={ART_OF_AI_AGENTS_COURSE_HUB} className={itemClass(courseHubActive)}>
            <BookOpen className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            Course materials
          </Link>
          <Link
            href={`${ART_OF_AI_AGENTS_BASE}/full`}
            className={itemClass(pathname === `${ART_OF_AI_AGENTS_BASE}/full`)}
          >
            <Layers className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            Full workshop (legacy)
          </Link>
        </nav>
      </div>

      <div>
        <h2
          className={cn(
            'text-lg font-semibold mb-3',
            theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
          )}
        >
          Chapters
        </h2>
        <nav className="space-y-0.5" aria-label="Workshop chapters">
          {ART_OF_AI_AGENTS_CHAPTERS.map((ch) => {
            const href = `${ART_OF_AI_AGENTS_BASE}/chapter/${ch.slug}`
            const active = pathname === href
            return (
              <Link key={ch.slug} href={href} className={itemClass(active)}>
                <BookOpen className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
                <span className="truncate">{ch.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
