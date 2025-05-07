'use client'

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment, Float, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { KaleidoscopeHouse } from "@/components/kaleidoscope-house"
import { useTheme } from "@/contexts/ThemeContext"

function Scene() {
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsTablet(width > 768 && width <= 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Adjust camera position based on device
  const cameraPosition = isMobile 
    ? [0, 0, 8]  // Closer for mobile
    : isTablet 
      ? [0, 0, 10] // Medium distance for tablet
      : [0, 0, 12] // Original distance for desktop

  // Adjust house scale based on device
  const houseScale = isMobile 
    ? 1.8  // Smaller for mobile
    : isTablet 
      ? 2.2 // Medium for tablet
      : 2.5 // Original for desktop

  // Adjust content scale based on device
  const contentScale = isMobile 
    ? 0.2  // Smaller for mobile
    : isTablet 
      ? 0.25 // Medium for tablet
      : 0.3 // Original for desktop

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Environment preset={theme === "dark" ? "night" : "sunset"} />

      {/* Landing Section with 3D House */}
      <Float 
        speed={2} 
        rotationIntensity={isMobile ? 0.3 : 0.5} 
        floatIntensity={isMobile ? 0.3 : 0.5} 
        position={[0, 0, 0]}
      >
        <KaleidoscopeHouse position={[0, 0, -3]} scale={houseScale} />

        <Html position={[0, 0, -1]} center transform>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center"
            style={{ transform: `scale(${contentScale})` }}
          >
            <div className="relative">
              {/* Content container */}
              <div className="relative p-6">
                {/* Title with enhanced typography and animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mb-4"
                >
                  <h1 className={`text-xl md:text-2xl font-bold tracking-tight ${
                    theme === 'dark'
                      ? 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
                      : 'text-black drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]'
                  }`}>
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#4D9DE0] via-[#E041B5] to-[#41E079]">
                      ATTENDANT
                    </span>
                    <br />
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#E041B5] via-[#41E079] to-[#4D9DE0]">
                      ENGAGEMENTS No. 1
                    </span>
                  </h1>
                </motion.div>
                
                {/* Description with enhanced styling */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className={`mb-4 p-4 rounded-xl backdrop-blur-md ${
                    theme === 'dark'
                      ? 'bg-black/40 border-white/10'
                      : 'bg-white/40 border-black/10'
                  } border relative overflow-hidden`}
                >
                  {/* Animated gradient border */}
                  <motion.div 
                    className="absolute inset-0 opacity-50"
                    animate={{
                      background: [
                        'linear-gradient(45deg, #4D9DE0, #E041B5, #41E079)',
                        'linear-gradient(45deg, #41E079, #4D9DE0, #E041B5)',
                        'linear-gradient(45deg, #E041B5, #41E079, #4D9DE0)',
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="relative">
                    <p className={`text-xs md:text-sm max-w-2xl mx-auto ${
                      theme === 'dark'
                        ? 'text-white/90'
                        : 'text-black/90'
                    } font-medium leading-relaxed space-y-2`}>
                      <span className="block">A culminating, one-night-only digital art exhibition</span>
                      <span className="block">celebrating the creative impact of The Kaleidoscope (...Bigger) House</span>
                      <span className="block">by Laurie Simmons and Peter M. Wheelwright.</span>
                    </p>
                  </div>
                </motion.div>

                {/* Enhanced button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <Button
                    onClick={() => scrollToSection("featured-works")}
                    className={`relative overflow-hidden group ${
                      theme === 'dark'
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-black/10 hover:bg-black/20 text-black'
                    } backdrop-blur-md border ${
                      theme === 'dark'
                        ? 'border-white/20 hover:border-white/30'
                        : 'border-black/20 hover:border-black/30'
                    } px-4 py-2 rounded-full text-xs transition-all duration-300 hover:scale-105`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Enter the Experience
                      <ChevronDown className="w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${
                      theme === 'dark'
                        ? 'from-white/0 via-white/10 to-white/0'
                        : 'from-black/0 via-black/10 to-black/0'
                    } translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Html>
      </Float>
    </>
  )
}

export default function ThreeCanvas() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsTablet(width > 768 && width <= 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Adjust FOV based on device
  const fov = isMobile 
    ? 45  // Wider FOV for mobile
    : isTablet 
      ? 40 // Medium FOV for tablet
      : 35 // Original FOV for desktop

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 12], fov }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
} 