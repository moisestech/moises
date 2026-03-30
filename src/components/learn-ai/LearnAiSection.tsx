import { cn } from '@/lib/utils'

export function LearnAiSection({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div id={id} className={cn('max-w-3xl mx-auto px-5 sm:px-6', className)}>
      {children}
    </div>
  )
}
