'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

interface GlassDecorativeDividerProps {
  variant?: 'default' | 'reverse' | 'stacked' | 'overlap'
}

export function GlassDecorativeDivider({ variant = 'default' }: GlassDecorativeDividerProps) {
  const { theme } = useTheme()

  const getShapes = (variant: string) => {
    const baseShapes = [
      {
        color: theme === 'dark' ? '#4D9DE0' : '#4D9DE0', // blue
        width: 280,
        height: 120,
        x:10,
        y: 30,
        rotation: -5,
        zIndex: 1
      },
      {
        color: theme === 'dark' ? '#E041B5' : '#E041B5', // pink
        width: 120,
        height: 200,
        x: 35,
        y: 40,
        rotation: 3,
        zIndex: 2
      },
      {
        color: theme === 'dark' ? '#41E079' : '#41E079', // green
        width: 160,
        height: 160,
        x: 38,
        y: 50,
        rotation: -2,
        zIndex: 3
      }
    ]

    switch (variant) {
      case 'reverse':
        return baseShapes.map(shape => ({
          ...shape,
          x: 20,
          y: 30,
          rotation: -shape.rotation,
          zIndex: 4 - shape.zIndex
        }))
      case 'stacked':
        return baseShapes.map((shape, index) => ({
          ...shape,
          x: 40,
          y: 20,
          zIndex: index + 1
        }))
      case 'overlap':
        return baseShapes.map((shape, index) => ({
          ...shape,
          x: 30 + (index * 15),
          y: -20,
          zIndex: index + 1
        }))
      default:
        return baseShapes
    }
  }

  const shapes = getShapes(variant)

  return (
    <>
    {/* <p>{variant}</p> */}
    <div className="relative w-full h-[400px] overflow-hidden">
      {shapes.map((shape, index) => (
          <motion.div
          key={index}
          className="absolute"
          style={{
              backgroundColor: `${shape.color}${theme === 'dark' ? '15' : '10'}`,
              width: shape.width,
              height: shape.height,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              rotate: shape.rotation,
              zIndex: shape.zIndex,
              backdropFilter: 'blur(2px)',
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            }}
            whileHover={{
                backgroundColor: `${shape.color}${theme === 'dark' ? '25' : '20'}`,
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
            }}
            />
        ))}
    </div>
    </>
  )
} 