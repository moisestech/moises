'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAdjacentTrustChapters, TRUST_BASE, TRUST_LEARN_BASE } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { trust } from './trust-tokens'

export function TrustChapterNav({ slug }: { slug: string }) {
  const { prev, next } = getAdjacentTrustChapters(slug)
  const linkClass = cn(
    'inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium',
    'border-stone-300 text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-100 dark:hover:bg-stone-800'
  )

  return (
    <nav className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-8 dark:border-stone-800 sm:flex-row sm:items-center sm:justify-between" aria-label="Chapter navigation">
      <div>
        {prev ? (
          <Link href={`${TRUST_LEARN_BASE}/${prev.slug}`} className={linkClass}>
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span>Previous: {prev.title}</span>
          </Link>
        ) : (
          <Link href={TRUST_BASE} className={linkClass}>
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back to the lab
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next ? (
          <Link href={`${TRUST_LEARN_BASE}/${next.slug}`} className={cn(linkClass, trust.btnPrimary, 'border-transparent')}>
            <span>Next: {next.title}</span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        ) : (
          <Link href={TRUST_BASE} className={linkClass}>
            Finish · back to the lab
          </Link>
        )}
      </div>
    </nav>
  )
}
