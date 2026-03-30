'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { DarkLightThemeSelector } from '@/components/common/DarkLightThemeSelector'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { ArtOfAIAgentsSidebar } from './ArtOfAIAgentsSidebar'
import { ArtOfAIAgentsBreadcrumbs } from './ArtOfAIAgentsBreadcrumbs'

/** Routes that keep the legacy full-bleed layout (no sidebar) */
function useFullBleed(pathname: string | null): boolean {
  if (!pathname) return false
  if (pathname.includes('/share')) return true
  if (pathname.endsWith('/full')) return true
  return false
}

export function ArtOfAIAgentsWorkshopLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const fullBleed = useFullBleed(pathname)

  if (fullBleed) {
    return <>{children}</>
  }

  return (
    <div
      className={cn(
        'flex min-h-screen',
        theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
      )}
    >
      <aside
        className={cn(
          'hidden md:flex w-64 shrink-0 flex-col border-r p-4 overflow-y-auto max-h-screen sticky top-0',
          theme === 'dark' ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
        )}
      >
        <ArtOfAIAgentsSidebar />
      </aside>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header
          className={cn(
            'sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3',
            theme === 'dark' ? 'border-zinc-800 bg-zinc-950/95 backdrop-blur' : 'border-zinc-200 bg-white/95 backdrop-blur'
          )}
        >
          <ArtOfAIAgentsBreadcrumbs />
          <DarkLightThemeSelector />
        </header>

        <div className="md:hidden border-b px-4 py-3">
          <details className="group">
            <summary
              className={cn(
                'cursor-pointer list-none font-medium text-sm',
                theme === 'dark' ? 'text-zinc-200' : 'text-zinc-900'
              )}
            >
              Menu — workshop navigation
            </summary>
            <div className="mt-3">
              <ArtOfAIAgentsSidebar />
            </div>
          </details>
        </div>

        <main
          className={cn(
            'flex-1 px-4 py-6 sm:px-6 sm:py-10',
            theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
