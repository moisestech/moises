'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const WorkshopCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Early return if the ref isn't available yet
    if (!mountRef.current) return
    
    // Setup scene, camera, and renderer
    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 15
    
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2)
    scene.add(ambientLight)
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)
    
    // Create a group for our objects
    const group = new THREE.Group()
    scene.add(group)
    
    // Create Art + Tech particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    
    const positionArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)
    
    // Create colorful particles with different positions
    for (let i = 0; i < particlesCount; i++) {
      // Position
      positionArray[i * 3] = (Math.random() - 0.5) * 30
      positionArray[i * 3 + 1] = (Math.random() - 0.5) * 30
      positionArray[i * 3 + 2] = (Math.random() - 0.5) * 30
      
      // Color (gradient between blue, purple and pink)
      const mixFactor = Math.random()
      if (mixFactor < 0.33) {
        // Blue theme
        colorsArray[i * 3] = 0.0
        colorsArray[i * 3 + 1] = 0.3 + Math.random() * 0.4
        colorsArray[i * 3 + 2] = 0.8 + Math.random() * 0.2
      } else if (mixFactor < 0.66) {
        // Indigo theme
        colorsArray[i * 3] = 0.3
        colorsArray[i * 3 + 1] = 0.0
        colorsArray[i * 3 + 2] = 0.8 + Math.random() * 0.2
      } else {
        // Purple theme
        colorsArray[i * 3] = 0.6 + Math.random() * 0.4
        colorsArray[i * 3 + 1] = 0.0
        colorsArray[i * 3 + 2] = 0.8 + Math.random() * 0.2
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3))
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })
    
    // Create the particles mesh
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    group.add(particles)
    
    // Add some geometric shapes representing technology
    const shapesCount = 12
    const shapes: THREE.Mesh[] = []
    
    // Create different geometric shapes
    for (let i = 0; i < shapesCount; i++) {
      let geometry
      const randomShape = Math.floor(Math.random() * 5)
      
      switch (randomShape) {
        case 0:
          geometry = new THREE.IcosahedronGeometry(0.8, 0) // Low poly icosahedron
          break
        case 1:
          geometry = new THREE.OctahedronGeometry(0.8, 0) // Low poly octahedron
          break
        case 2:
          geometry = new THREE.TetrahedronGeometry(0.8, 0) // Low poly tetrahedron
          break
        case 3:
          geometry = new THREE.TorusGeometry(0.6, 0.2, 16, 32) // Torus
          break
        case 4:
        default:
          geometry = new THREE.DodecahedronGeometry(0.8, 0) // Low poly dodecahedron
      }
      
      // Create a gradient material with random colors
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(
          Math.random() * 0.5 + 0.5, // R: 0.5-1.0
          Math.random() * 0.5,       // G: 0-0.5
          Math.random() * 0.5 + 0.5  // B: 0.5-1.0
        ),
        shininess: 100,
        transparent: true,
        opacity: 0.8,
        wireframe: Math.random() > 0.5,
      })
      
      const mesh = new THREE.Mesh(geometry, material)
      
      // Position randomly within a sphere
      const radius = 8 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta)
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta)
      mesh.position.z = radius * Math.cos(phi)
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      mesh.rotation.z = Math.random() * Math.PI
      
      // Random scale
      const scale = Math.random() * 0.5 + 0.5
      mesh.scale.set(scale, scale, scale)
      
      shapes.push(mesh)
      group.add(mesh)
    }
    
    // Add lines connecting closest shapes (network effect)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8a2be2,
      transparent: true,
      opacity: 0.3,
    })
    
    // Connect closest shapes with lines
    const connectionLines: THREE.Line[] = []
    for (let i = 0; i < shapes.length; i++) {
      // Find 2 closest shapes
      const connections = findClosestShapes(i, 2)
      for (const j of connections) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          shapes[i].position,
          shapes[j].position
        ])
        const line = new THREE.Line(lineGeometry, lineMaterial)
        connectionLines.push(line)
        group.add(line)
      }
    }
    
    // Function to find closest shapes by index
    function findClosestShapes(index: number, count: number): number[] {
      const distances: {index: number, distance: number}[] = []
      
      for (let i = 0; i < shapes.length; i++) {
        if (i !== index) {
          const distance = shapes[index].position.distanceTo(shapes[i].position)
          distances.push({ index: i, distance })
        }
      }
      
      // Sort by distance and take top 'count'
      return distances
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count)
        .map(d => d.index)
    }
    
    // Add controls for interactivity (disabled on mobile for better performance)
    const isMobile = window.innerWidth < 768
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = !isMobile
    controls.autoRotateSpeed = 0.5
    
    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 100
      mouseY = (event.clientY - windowHalfY) / 100
    }
    
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        mouseX = (event.touches[0].clientX - windowHalfX) / 50
        mouseY = (event.touches[0].clientY - windowHalfY) / 50
      }
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    
    window.addEventListener('resize', handleResize)
    
    // Animation loop
    const clock = new THREE.Clock()
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      
      // Slowly rotate the group
      group.rotation.y = elapsedTime * 0.05
      
      // Apply mouse movement effect if not on mobile
      if (!isMobile) {
        group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05
        group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.05
      }
      
      // Animate each shape
      shapes.forEach((shape, i) => {
        // Make shapes float up and down at different speeds
        shape.position.y += Math.sin(elapsedTime * 0.5 + i) * 0.005
        
        // Slightly rotate each shape
        shape.rotation.x += 0.002 * (i % 2 ? 1 : -1)
        shape.rotation.y += 0.001 * (i % 3 ? 1 : -1)
      })
      
      // Update line positions to follow shapes
      connectionLines.forEach((line, i) => {
        const positions = line.geometry.attributes.position.array
        const shape1Index = Math.floor(i / 2)
        const shape2Index = findClosestShapes(shape1Index, 2)[i % 2]
        
        // Update line positions
        positions[0] = shapes[shape1Index].position.x
        positions[1] = shapes[shape1Index].position.y
        positions[2] = shapes[shape1Index].position.z
        
        positions[3] = shapes[shape2Index].position.x
        positions[4] = shapes[shape2Index].position.y
        positions[5] = shapes[shape2Index].position.z
        
        line.geometry.attributes.position.needsUpdate = true
      })
      
      // Update controls
      controls.update()
      
      // Render
      renderer.render(scene, camera)
      
      // Call animate again on the next frame
      requestAnimationFrame(animate)
    }
    
    animate()
    
    // Store canvas reference for cleanup
    const canvasRef = renderer.domElement;

    return () => {
      // Use stored reference in cleanup
      const ctx = canvasRef.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
      }
      
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
      
      // Dispose of all geometries and materials
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      
      shapes.forEach(shape => {
        shape.geometry.dispose()
        if (shape.material instanceof THREE.Material) {
          shape.material.dispose()
        }
      })
      
      connectionLines.forEach(line => {
        line.geometry.dispose()
        if (line.material instanceof THREE.Material) {
          line.material.dispose()
        }
      })
      
      // Remove renderer
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      renderer.dispose()
    }
  }, [])
  
  return <div ref={mountRef} className="absolute inset-0" />
}

export default WorkshopCanvas 