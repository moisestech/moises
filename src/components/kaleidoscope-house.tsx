'use client'

import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial, useTexture, Html } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

interface KaleidoscopeHouseProps {
  position?: [number, number, number]
  scale?: number
}

export function KaleidoscopeHouse({ position = [0, 0, 0], scale = 1 }: KaleidoscopeHouseProps) {
  console.log('[KaleidoscopeHouse] Initializing component with position:', position, 'scale:', scale)
  const houseRef = useRef<THREE.Group>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<Error | null>(null)
  const [useFallbackTexture, setUseFallbackTexture] = useState(false)

  useEffect(() => {
    console.log('[KaleidoscopeHouse] Component mounted')
    return () => {
      console.log('[KaleidoscopeHouse] Component unmounting')
    }
  }, [])

  // Load texture with error handling and fallback
  const houseImageTexture = useTexture(
    useFallbackTexture 
      ? "/textures/fallback.jpg"  // Local fallback texture
      : "https://res.cloudinary.com/dck5rzi4h/image/upload/v1746639320/DMINTI/Screenshot_20250507_121642_Instagram_r2t7vk.jpg",
    (texture) => {
      console.log('[KaleidoscopeHouse] Texture loaded successfully')
      setIsLoading(false)
    }
  )

  // Handle texture loading errors
  useEffect(() => {
    if (houseImageTexture instanceof Error) {
      console.error('[KaleidoscopeHouse] Error loading texture:', houseImageTexture)
      if (!useFallbackTexture) {
        console.log('[KaleidoscopeHouse] Attempting to use fallback texture')
        setUseFallbackTexture(true)
      } else {
        setLoadError(houseImageTexture)
        setIsLoading(false)
      }
    }
  }, [houseImageTexture, useFallbackTexture])

  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    console.log('[KaleidoscopeHouse] Checking device type')
    const checkMobile = () => {
      const width = window.innerWidth
      const isMobileDevice = width <= 768
      console.log('[KaleidoscopeHouse] Device width:', width, 'isMobile:', isMobileDevice)
      setIsMobile(isMobileDevice)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      console.log('[KaleidoscopeHouse] Removing resize listener')
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Create a stylized house inspired by the Kaleidoscope House image
  useFrame((state) => {
    if (houseRef.current) {
      const rotation = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.1
      houseRef.current.rotation.y = rotation
    }
  })

  if (loadError) {
    console.error('[KaleidoscopeHouse] Rendering error state due to texture loading failure')
    return (
      <mesh position={position} scale={scale}>
        <boxGeometry args={[3, 2, 2]} />
        <meshBasicMaterial color={theme === "dark" ? "#ffffff" : "#f0f0f0"} opacity={0.5} transparent />
      </mesh>
    )
  }

  if (isLoading) {
    console.log('[KaleidoscopeHouse] Still loading texture')
    return (
      <mesh position={position} scale={scale}>
        <boxGeometry args={[3, 2, 2]} />
        <meshBasicMaterial color={theme === "dark" ? "#ffffff" : "#f0f0f0"} opacity={0.3} transparent />
      </mesh>
    )
  }

  console.log('[KaleidoscopeHouse] Rendering house with theme:', theme, 'isMobile:', isMobile)

  // Colors from the Kaleidoscope House image
  const colors = {
    blue: new THREE.Color("#4D9DE0"),
    green: new THREE.Color("#41E079"),
    yellow: new THREE.Color("#E0D241"),
    orange: new THREE.Color("#E08541"),
    pink: new THREE.Color("#E041B5"),
    purple: new THREE.Color("#9941E0"),
  }

  // Adjust material properties based on theme and device
  const transmission = theme === "dark" ? (isMobile ? 0.7 : 0.8) : (isMobile ? 0.6 : 0.7)
  const thickness = theme === "dark" ? (isMobile ? 0.3 : 0.4) : (isMobile ? 0.2 : 0.3)
  const roughness = theme === "dark" ? (isMobile ? 0.2 : 0.15) : (isMobile ? 0.25 : 0.2)
  const samples = isMobile ? 2 : 4

  return (
    <group position={position} scale={scale} ref={houseRef}>
      {/* Base structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 2]} />
        <meshBasicMaterial color={theme === "dark" ? "#ffffff" : "#f0f0f0"} opacity={0.1} transparent />
      </mesh>

      {/* Colored panels inspired by the Kaleidoscope House */}
      {/* Top floor */}
      <mesh position={[-0.75, 0.75, 1.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.blue}
        />
      </mesh>

      <mesh position={[0.75, 0.75, 1.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.green}
        />
      </mesh>

      {/* Middle floor */}
      <mesh position={[-0.75, 0, 1.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.yellow}
        />
      </mesh>

      <mesh position={[0.75, 0, 1.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.orange}
        />
      </mesh>

      {/* Bottom floor */}
      <mesh position={[-0.75, -0.75, 1.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.pink}
        />
      </mesh>

      <mesh position={[0.75, -0.75, 1.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1.5, 0.5]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.purple}
        />
      </mesh>

      {/* Side panels */}
      <mesh position={[1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 2]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.blue}
        />
      </mesh>

      <mesh position={[-1.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2, 2]} />
        <MeshTransmissionMaterial
          samples={samples}
          thickness={thickness}
          roughness={roughness}
          transmission={transmission}
          color={colors.green}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.25, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.2, 2.2]} />
        <meshStandardMaterial color={theme === "dark" ? "#ffffff" : "#f0f0f0"} />
      </mesh>

      {/* Glowing edges */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(3, 2, 2)]} />
        <lineBasicMaterial attach="material" color={theme === "dark" ? "#ffffff" : "#333333"} linewidth={2} />
      </lineSegments>

      {/* Miniature furniture inside - only render on desktop */}
      {!isMobile && (
        <>
          <mesh position={[-0.75, -0.75, 0]} scale={[0.2, 0.2, 0.2]}>
            <boxGeometry args={[1, 0.5, 1]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          <mesh position={[0.75, -0.75, 0]} scale={[0.1, 0.3, 0.1]}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#A52A2A" />
          </mesh>

          <mesh position={[0.75, 0, 0]} scale={[0.3, 0.1, 0.3]}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#D2B48C" />
          </mesh>

          <mesh position={[-0.75, 0.75, 0]} scale={[0.4, 0.1, 0.8]}>
            <boxGeometry />
            <meshStandardMaterial color="#4682B4" />
          </mesh>
        </>
      )}
    </group>
  )
} 