'use client'

import { TRUST_TOOL_LANDSCAPE } from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'

/**
 * Vendor marks for the Engineering toolkit. Architecture stays the point;
 * these names sit next to eval-12 so a stack is visible without being required.
 */
export function TrustToolLandscape({ className }: { className?: string }) {
  return (
    <ul
      data-trust-tool-landscape
      className={cn('grid gap-2 sm:grid-cols-2', className)}
    >
      {TRUST_TOOL_LANDSCAPE.map((tool) => (
        <li key={tool.id}>
          <a
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            data-trust-tool={tool.id}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 no-underline hover:border-slate-400 dark:border-slate-600 dark:bg-white"
          >
            <span className="flex h-10 w-32 shrink-0 items-center justify-center">
              {/* Landscape lockups; next/image lazy-load leaves them blank inside closed details. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.logoSrc} alt="" className="max-h-8 max-w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-slate-900">{tool.name}</span>
              <span className="mt-0.5 block text-xs leading-snug text-slate-600">{tool.use}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
