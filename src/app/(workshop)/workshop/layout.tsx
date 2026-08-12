'use client'

import { usePathname } from 'next/navigation'
import { WorkshopAreaTopNav } from '@/components/workshop/WorkshopAreaTopNav'

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideTopNav =
    pathname?.endsWith('/full') ||
    pathname?.includes('/workshop/the-art-of-ai-agents/share') ||
    pathname?.includes('/workshop/moonlighter-ai-3d-printing/present') ||
    pathname?.includes('/workshop/moonlighter-ai-3d-printing/facilitate')

  return (
    <div className="min-h-screen">
      {!hideTopNav && <WorkshopAreaTopNav />}
      {children}
    </div>
  )
} 