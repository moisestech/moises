'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassmorphicPanelProps {
  children: ReactNode
  className?: string
}

export function GlassmorphicPanel({ children, className = '' }: GlassmorphicPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative backdrop-blur-xl bg-background/30 border border-foreground/10 rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
} 