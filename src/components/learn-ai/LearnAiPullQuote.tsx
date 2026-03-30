import { cn } from '@/lib/utils'

export function LearnAiPullQuote({
  children,
  className,
  tension,
}: {
  children: React.ReactNode
  className?: string
  tension?: boolean
}) {
  return (
    <blockquote
      className={cn(
        'border-l-2 pl-5 sm:pl-7 py-2 my-8 sm:my-10',
        tension ? 'border-red-500/45' : 'border-amber-500/50',
        className
      )}
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 leading-snug italic">{children}</p>
    </blockquote>
  )
}
