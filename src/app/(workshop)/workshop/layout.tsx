'use client'

import { WorkshopNavigation } from '@/components/workshop/WorkshopNavigation'
import { WorkshopBreadcrumbs } from '@/components/workshop/WorkshopBreadcrumbs'

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 