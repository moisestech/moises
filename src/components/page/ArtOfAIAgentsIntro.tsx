'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ART_OF_AI_AGENTS_HERO_IMAGE } from '@/constants/art-of-ai-agents'
import {
  ART_OF_AI_AGENTS_BASE,
  ART_OF_AI_AGENTS_CHAPTERS,
} from '@/config/art-of-ai-agents-chapters'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

export default function ArtOfAIAgentsIntro() {
  const { theme } = useTheme()

  return (
    <div className="mx-auto max-w-3xl">
      <p className={cn('mb-4 text-sm', theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600')}>
        <Link
          href={ART_OF_AI_AGENTS_BASE}
          className={cn(
            'font-medium underline-offset-4 hover:underline',
            theme === 'dark' ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-800 hover:text-indigo-700'
          )}
        >
          ← Program overview
        </Link>
      </p>
      <p
        className={cn(
          'mb-3 text-xs uppercase tracking-[0.2em]',
          theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
        )}
      >
        Workshop
      </p>
      <h1
        className={cn(
          'text-4xl font-semibold tracking-tight sm:text-5xl',
          theme === 'dark' ? 'text-white' : 'text-zinc-900'
        )}
      >
        The Art of AI Agents
      </h1>
      <p
        className={cn(
          'mt-4 text-lg leading-relaxed',
          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
        )}
      >
        Artist-facing automation: n8n, AI agents, integrations, and deployment — taught as a workshop, not a product
        demo. This page is the chapter index; the{' '}
        <Link
          href={ART_OF_AI_AGENTS_BASE}
          className={cn(
            'font-medium underline-offset-4 hover:underline',
            theme === 'dark' ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-800 hover:text-indigo-700'
          )}
        >
          program overview
        </Link>{' '}
        covers formats, outcomes, and booking. The legacy single-page version remains linked below during migration.
      </p>

      <div
        className={cn(
          'relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border shadow-lg ring-1',
          theme === 'dark' ? 'border-zinc-800 ring-white/5' : 'border-zinc-200 ring-black/5'
        )}
      >
        <Image
          src={ART_OF_AI_AGENTS_HERO_IMAGE}
          alt="The Art of AI Agents — Locust Projects, The Dill, 2026"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>
      <p
        className={cn(
          'mt-3 text-center text-xs tracking-wide',
          theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
        )}
      >
        Locust Projects · The Dill — 2026
      </p>

      <div
        className={cn(
          'mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap',
          theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
        )}
      >
        <Link
          href={`${ART_OF_AI_AGENTS_BASE}/chapter/${ART_OF_AI_AGENTS_CHAPTERS[0]?.slug ?? 'overview'}`}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors',
            theme === 'dark'
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-indigo-700 text-white hover:bg-indigo-600'
          )}
        >
          Start with the first chapter
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href={`${ART_OF_AI_AGENTS_BASE}/full`}
          className={cn(
            'inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-medium transition-colors',
            theme === 'dark'
              ? 'border-zinc-600 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900'
              : 'border-zinc-300 text-zinc-800 hover:bg-zinc-100'
          )}
        >
          Open full workshop (legacy one-page)
        </Link>
      </div>

      <section className="mt-16" aria-labelledby="chapters-heading">
        <h2
          id="chapters-heading"
          className={cn(
            'text-xl font-semibold',
            theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
          )}
        >
          Chapters
        </h2>
        <ul className="mt-6 space-y-3">
          {ART_OF_AI_AGENTS_CHAPTERS.map((ch) => (
            <li key={ch.slug}>
              <Link
                href={`${ART_OF_AI_AGENTS_BASE}/chapter/${ch.slug}`}
                className={cn(
                  'group flex flex-col rounded-lg border p-4 transition-colors sm:flex-row sm:items-start sm:justify-between',
                  theme === 'dark'
                    ? 'border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/40'
                    : 'border-zinc-200 bg-white hover:border-indigo-300'
                )}
              >
                <div>
                  <span
                    className={cn(
                      'font-medium',
                      theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                    )}
                  >
                    {ch.title}
                  </span>
                  <p
                    className={cn(
                      'mt-1 text-sm',
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    )}
                  >
                    {ch.description}
                  </p>
                </div>
                <span
                  className={cn(
                    'mt-2 inline-flex items-center gap-1 text-sm font-medium sm:mt-0 sm:shrink-0',
                    theme === 'dark'
                      ? 'text-indigo-400 group-hover:text-indigo-300'
                      : 'text-indigo-700 group-hover:text-indigo-600'
                  )}
                >
                  Open
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
