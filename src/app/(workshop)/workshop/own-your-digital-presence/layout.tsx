import { WorkshopNavigation } from '@/components/workshop/WorkshopNavigation'
import { WorkshopBreadcrumbs } from '@/components/workshop/WorkshopBreadcrumbs'

export default function DigitalPresenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r bg-white p-4">
        <WorkshopNavigation />
      </div>
      <div className="flex-1">
        <div className="sticky top-0 z-10 border-b bg-white p-4">
          <WorkshopBreadcrumbs />
        </div>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
} 