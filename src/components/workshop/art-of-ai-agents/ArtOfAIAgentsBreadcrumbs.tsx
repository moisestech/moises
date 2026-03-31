'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'
import {
  ART_OF_AI_AGENTS_BASE,
  getArtOfAiAgentsChapter,
} from '@/config/art-of-ai-agents-chapters'

export function ArtOfAIAgentsBreadcrumbs() {
  const pathname = usePathname()
  const { theme } = useTheme()

  if (!pathname?.startsWith(ART_OF_AI_AGENTS_BASE)) return null

  const segments = pathname.replace(ART_OF_AI_AGENTS_BASE, '').split('/').filter(Boolean)

  const crumbs: { label: string; href?: string }[] = [
    { label: 'The Art of AI Agents', href: ART_OF_AI_AGENTS_BASE },
  ]

  if (segments[0] === 'course') {
    crumbs.push({ label: 'Course materials' })
  } else if (segments[0] === 'chapter' && segments[1]) {
    const ch = getArtOfAiAgentsChapter(segments[1])
    crumbs.push({ label: ch?.title ?? segments[1] })
  } else if (segments[0] === 'full') {
    crumbs.push({ label: 'Full workshop (legacy)' })
  } else if (segments[0] === 'share') {
    crumbs.push({ label: 'Share' })
  }

  const linkClass =
    theme === 'dark'
      ? 'text-zinc-400 hover:text-white'
      : 'text-zinc-600 hover:text-zinc-900'

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm">
      {crumbs.map((c, i) => (
        <span key={`${c.label}-${i}`} className="flex items-center gap-1">
          {i > 0 && (
            <ChevronRight
              className={cn('h-4 w-4 shrink-0', theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400')}
              aria-hidden
            />
          )}
          {c.href && i < crumbs.length - 1 ? (
            <Link href={c.href} className={linkClass}>
              {c.label}
            </Link>
          ) : (
            <span
              className={cn(
                i === crumbs.length - 1 ? (theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900') : linkClass
              )}
            >
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
