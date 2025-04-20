import { ReactNode } from 'react'
import { WorkshopNavigation } from '@/config/workshop-navigation'
import { WorkshopPageState } from '@/config/workshop-page-states'

interface WorkshopPageProps {
  title: string
  description: string
  navigation: WorkshopNavigation
  pageState: WorkshopPageState
  children: ReactNode
}

export function WorkshopPage({
  title,
  description,
  navigation,
  pageState,
  children,
}: WorkshopPageProps) {
  if (!pageState.isEnabled) {
    return (
      <div className="min-h-screen bg-[#09090b] text-[#e0e0e0] p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-[#a0a0a0]">{pageState.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-xl text-[#a0a0a0]">{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
} 