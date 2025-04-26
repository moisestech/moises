'use client'

import { WorkshopNavigation } from '@/components/workshop/WorkshopNavigation'
import { WorkshopBreadcrumbs } from '@/components/workshop/WorkshopBreadcrumbs'
import { DarkLightThemeSelector } from '@/components/common/DarkLightThemeSelector'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function DigitalPresenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()

  return (
    <div className={cn(
      "flex min-h-screen",
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    )}>
      <div className={cn(
        "w-64 border-r p-4",
        theme === 'dark' 
          ? 'border-gray-800 bg-gray-900' 
          : 'border-gray-200 bg-white'
      )}>
        <WorkshopNavigation />
      </div>
      <div className="flex-1">
        <div className={cn(
          "sticky top-0 z-10 border-b p-4 flex justify-between items-center",
          theme === 'dark'
            ? 'border-gray-800 bg-gray-900'
            : 'border-gray-200 bg-white'
        )}>
          <WorkshopBreadcrumbs />
          <DarkLightThemeSelector />
        </div>
        <main className={cn(
          "py-8",
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        )}>
          {children}
        </main>
      </div>
    </div>
  )
} 