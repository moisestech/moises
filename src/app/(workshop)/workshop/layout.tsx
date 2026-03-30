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
    pathname?.endsWith('/full') || pathname?.includes('/workshop/the-art-of-ai-agents/share')

  return (
    <div className="min-h-screen">
      {!hideTopNav && <WorkshopAreaTopNav />}
      {children}
    </div>
  )
} 