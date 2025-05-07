'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  baseVelocity?: number
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
}

export function Marquee({ 
  children, 
  baseVelocity = 100, 
  className = '',
  reverse = false,
  pauseOnHover = false,
  vertical = false
}: MarqueeProps) {
  const { theme } = useTheme()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const [contentWidth, setContentWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const directionRef = useRef<number>(reverse ? -1 : 1)

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(vertical ? containerRef.current.scrollHeight : containerRef.current.scrollWidth)
    }
  }, [children, vertical])

  useAnimationFrame((t, delta) => {
    if (pauseOnHover && isHovered) return

    let moveBy = directionRef.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionRef.current *= -1
    } else if (velocityFactor.get() > 0) {
      directionRef.current *= -1
    }

    moveBy *= directionRef.current * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)

    if (baseX.get() <= -contentWidth) {
      baseX.set(0)
    } else if (baseX.get() > 0) {
      baseX.set(-contentWidth)
    }
  })

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className={cn(
          "flex whitespace-nowrap",
          vertical && "flex-col"
        )}
        style={{ 
          [vertical ? 'y' : 'x']: baseX 
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
} 