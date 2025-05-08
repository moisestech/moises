'use client'

import { Suspense, useEffect, useState, useCallback } from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment, Float, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { KaleidoscopeHouse } from "@/components/kaleidoscope-house"
import { useTheme } from "@/contexts/ThemeContext"

// Loading component for the 3D scene
const SceneLoading = () => {
  console.log('[ThreeCanvas] Rendering SceneLoading component')
  return (
    <Html center>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading 3D Scene...</div>
      </div>
    </Html>
  )
}

interface SceneContentProps {
  deviceConfig: {
    contentScale: number;
  };
  theme: string;
  scrollToSection: (sectionId: string) => void;
}

// Content component that will be rendered inside the Three.js scene
function SceneContent({ deviceConfig, theme, scrollToSection }: SceneContentProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Html
      position={[0, 0, -1]}
      center
      transform
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center pointer-events-auto"
        style={{ transform: `scale(${deviceConfig.contentScale})` }}
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
                  {isMobile ? (
                    <>
                      <span className="block">A culminating</span>
                      <span className="block">one-night-only digital art exhibition</span>
                      <span className="block">celebrating the creative impact</span>
                      <span className="block">of The Kaleidoscope (...Bigger) House</span>
                      <span className="block">by Laurie Simmons</span>
                      <span className="block">and Peter M. Wheelwright.</span>
                    </>
                  ) : (
                    <>
                      <span className="block">A culminating, one-night-only digital art exhibition</span>
                      <span className="block">celebrating the creative impact of The Kaleidoscope (...Bigger) House</span>
                      <span className="block">by Laurie Simmons and Peter M. Wheelwright.</span>
                    </>
                  )}
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
  )
}

function Scene() {
  console.log('[ThreeCanvas] Initializing Scene component')
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Memoize device check to prevent unnecessary re-renders
  const checkDevice = useCallback(() => {
    console.log('[ThreeCanvas] Checking device type')
    const width = window.innerWidth
    setIsMobile(width <= 768)
    setIsTablet(width > 768 && width <= 1024)
  }, [])

  useEffect(() => {
    console.log('[ThreeCanvas] Scene component mounted')
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => {
      console.log('[ThreeCanvas] Scene component unmounting')
      window.removeEventListener('resize', checkDevice)
    }
  }, [checkDevice])

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  // Memoize device-specific values
  const deviceConfig = {
    cameraPosition: isMobile 
      ? [0, 0, 8]  // Closer for mobile
      : isTablet 
        ? [0, 0, 10] // Medium distance for tablet
        : [0, 0, 12], // Original distance for desktop
    houseScale: isMobile 
      ? 1.8  // Smaller for mobile
      : isTablet 
        ? 2.2 // Medium for tablet
        : 2.5, // Original for desktop
    contentScale: isMobile 
      ? 0.2  // Smaller for mobile
      : isTablet 
        ? 0.25 // Medium for tablet
        : 0.3, // Original for desktop
    floatIntensity: isMobile ? 0.3 : 0.5,
    rotationIntensity: isMobile ? 0.3 : 0.5
  }

  console.log('[ThreeCanvas] Rendering Scene with device config:', { isMobile, isTablet })
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Environment preset={theme === "dark" ? "night" : "sunset"} />

      {/* Landing Section with 3D House */}
      <Float 
        speed={2} 
        rotationIntensity={deviceConfig.rotationIntensity} 
        floatIntensity={deviceConfig.floatIntensity} 
        position={[0, 0, 0]}
      >
        <KaleidoscopeHouse 
          position={[0, 0, -3]} 
          scale={deviceConfig.houseScale} 
        />
        <SceneContent 
          deviceConfig={deviceConfig}
          theme={theme}
          scrollToSection={scrollToSection}
        />
      </Float>
    </>
  )
}

export default function ThreeCanvas() {
  console.log('[ThreeCanvas] Initializing component')
  const [error, setError] = useState<Error | null>(null)
  const { theme } = useTheme()

  // Handle errors from the Three.js canvas
  const handleError = useCallback((event: React.SyntheticEvent) => {
    console.error('[ThreeCanvas] Error:', event)
    setError(new Error('Failed to load 3D scene'))
  }, [])

  // Reset error state
  const handleRetry = useCallback(() => {
    console.log('[ThreeCanvas] Retrying canvas load')
    setError(null)
  }, [])

  if (error) {
    console.error('[ThreeCanvas] Rendering error state')
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-xl font-bold mb-4">Failed to load 3D scene</h2>
          <p className="text-sm mb-4">There was an error loading the interactive 3D experience.</p>
          <Button onClick={handleRetry} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        onError={handleError}
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: true
        }}
      >
        <Suspense fallback={<SceneLoading />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
} 