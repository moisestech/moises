"use client"

import { AnimatePresence, motion, type Variants, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"
import type { ElementType } from "react"
import React, { useState, useEffect, useRef } from "react"

interface ControlledFlipTextProps extends MotionProps {
  /** The duration of the animation */
  duration?: number
  /** The delay between each character */
  delayMultiple?: number
  /** The variants of the animation */
  framerProps?: Variants
  /** The class name of the component */
  className?: string
  /** The element type of the component */
  as?: ElementType
  /** The children of the component */
  children: React.ReactNode
  /** The variants of the animation */
  variants?: Variants
  /** Trigger to control when the animation runs */
  animationKey?: number | string
  /** How often to auto-animate (in ms), 0 to disable */
  autoAnimateInterval?: number
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
}

export function ControlledFlipText({
  children,
  duration = 0.5,
  delayMultiple = 0.08,
  className,
  as: Component = "span",
  variants,
  animationKey = 0,
  autoAnimateInterval = 0,
  ...props
}: ControlledFlipTextProps) {
  const MotionComponent = motion.create(Component)
  const characters = React.Children.toArray(children).join("").split("")
  
  // Use a simple key-based approach for animation
  const [key, setKey] = useState(0)
  const lastAnimationKeyRef = useRef<number | string>(animationKey)
  
  // Trigger animation when animationKey changes
  useEffect(() => {
    if (animationKey !== lastAnimationKeyRef.current) {
      lastAnimationKeyRef.current = animationKey
      setKey(prev => prev + 1)
    }
  }, [animationKey])
  
  // Auto-animate on interval if enabled
  useEffect(() => {
    if (autoAnimateInterval > 0) {
      const timer = setInterval(() => {
        setKey(prev => prev + 1)
      }, autoAnimateInterval)
      
      return () => clearInterval(timer)
    }
    return undefined
  }, [autoAnimateInterval])

  return (
    <div className="flex justify-center space-x-2">
      <AnimatePresence mode="wait">
        {characters.map((char, i) => (
          <MotionComponent
            key={`${char}-${i}-${key}`}
            initial="hidden"
            animate="visible"
            variants={variants || defaultVariants}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm", className)}
            {...props}
          >
            {char}
          </MotionComponent>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ControlledFlipText 