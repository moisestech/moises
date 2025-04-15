import { cn } from '@/lib/utils'

interface PlatformBadgeProps {
  platform: 'pricing' | 'bestFor'
  children: React.ReactNode
}

export function PlatformBadge({ platform, children }: PlatformBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        platform === 'pricing'
          ? 'bg-blue-100 text-blue-800'
          : 'bg-purple-100 text-purple-800'
      )}
    >
      {children}
    </span>
  )
}

interface PlatformTagProps {
  platform: 'pricing' | 'bestFor'
  children: React.ReactNode
}

export function PlatformTag({ platform, children }: PlatformTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        platform === 'pricing'
          ? 'bg-blue-100 text-blue-800'
          : 'bg-purple-100 text-purple-800'
      )}
    >
      {children}
    </span>
  )
} 