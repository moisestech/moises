'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

export function LearnAiReveal({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section'
}) {
  const reduce = useReducedMotion() ?? false

  if (reduce) {
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = Tag === 'section' ? motion.section : motion.div

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </MotionTag>
  )
}
