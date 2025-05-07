'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useMemo } from 'react'

interface Shape {
  type: 'wide' | 'tall' | 'square'
  color: string
  size: { width: number; height: number }
  position: { x: number; y: number }
  rotation: number
  delay: number
}

// Shape configuration presets
const SHAPE_PRESETS = {
  wide: {
    minWidth: 240,
    maxWidth: 320,
    minHeight: 100,
    maxHeight: 140,
    minX: 35,
    maxX: 45,
  },
  tall: {
    minWidth: 100,
    maxWidth: 140,
    minHeight: 200,
    maxHeight: 240,
    minX: 30,
    maxX: 40,
  },
  square: {
    minWidth: 140,
    maxWidth: 180,
    minHeight: 140,
    maxHeight: 180,
    minX: 38,
    maxX: 42,
  }
}

function useRandomShapes() {
  const { theme } = useTheme()
  
  const colors = useMemo(() => ({
    blue: theme === 'dark' ? '#4D9DE0' : '#4D9DE0',
    green: theme === 'dark' ? '#41E079' : '#41E079',
    pink: theme === 'dark' ? '#E041B5' : '#E041B5',
  }), [theme])

  // Generate a random number between min and max
  const randomBetween = (min: number, max: number) => 
    Math.floor(Math.random() * (max - min + 1)) + min

  // Generate a random position that doesn't overlap with existing shapes
  const generateUniquePosition = (type: keyof typeof SHAPE_PRESETS, existingPositions: number[]) => {
    const preset = SHAPE_PRESETS[type]
    let x: number
    do {
      x = randomBetween(preset.minX, preset.maxX)
    } while (existingPositions.some(pos => Math.abs(pos - x) < 5))
    return x
  }

  // Generate shapes with random variations
  const shapes = useMemo(() => {
    const shapeTypes: Array<keyof typeof SHAPE_PRESETS> = ['wide', 'tall', 'square']
    const usedPositions: number[] = []
    const colorKeys = Object.keys(colors) as Array<keyof typeof colors>
    
    return shapeTypes.map((type, index) => {
      const preset = SHAPE_PRESETS[type]
      const x = generateUniquePosition(type, usedPositions)
      usedPositions.push(x)
      
      return {
        type,
        color: colors[colorKeys[index % colorKeys.length]],
        size: {
          width: randomBetween(preset.minWidth, preset.maxWidth),
          height: randomBetween(preset.minHeight, preset.maxHeight)
        },
        position: {
          x,
          y: randomBetween(20, 40)
        },
        rotation: randomBetween(-8, 8),
        delay: index * 0.2
      }
    })
  }, [colors])

  return shapes
}

export function GlassDecorativeDivider() {
  const { theme } = useTheme()
  const shapes = useRandomShapes()

  const baseStyle = {
    position: 'absolute' as const,
    transform: 'translate(-30%, -30%)',
    width: '100%',
    height: '100%',
    borderRadius: '0px',
    backdropFilter: 'blur(1px)',
    boxShadow: theme === 'dark' 
      ? '0 4px 30px rgba(0, 0, 0, 0.2)' 
      : '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(234, 234, 234, 0.7)'}`,
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          style={{
            ...baseStyle,
            backgroundColor: `${shape.color}${theme === 'dark' ? '25' : '20'}`,
            width: shape.size.width,
            height: shape.size.height,
            left: `${shape.position.x}%`,
            top: `${shape.position.y}%`,
            rotate: shape.rotation,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            backgroundColor: `${shape.color}${theme === 'dark' ? '35' : '30'}`,
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        />
      ))}
    </div>
  )
} 