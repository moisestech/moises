"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import SpriteText from "three-spritetext"
import { useStore } from "@/features/i-will-remember-you/store"
import { nodes, links } from "@/features/i-will-remember-you/data"

// Dynamically import ForceGraph3D to avoid SSR issues
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-500">Loading 3D visualization...</div>
    </div>
  ),
})

export function ForceScene() {
  const fgRef = useRef<any>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)
  const { setSelectedNode, setIsOpen } = useStore()

  useEffect(() => {
    setIsClient(true)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (fgRef.current && isClient) {
      // Auto-fit graph on load
      setTimeout(() => {
        fgRef.current?.zoomToFit(1000, 50)
      }, 100)
    }
  }, [dimensions, isClient])

  const handleNodeClick = (node: any) => {
    setSelectedNode(node)
    setIsOpen(true)
  }

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-500">Loading 3D visualization...</div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      <ForceGraph3D
        ref={fgRef}
        width={dimensions.width}
        height={dimensions.height}
        graphData={{ nodes, links }}
        nodeLabel="id"
        nodeColor={(node: any) => {
          const colors = {
            1: "#ff6b6b", // Visitor - coral
            2: "#4ecdc4", // Input devices - teal
            3: "#45b7d1", // Processing - blue
            4: "#96ceb4", // Output - green
            5: "#feca57", // Infrastructure - yellow
          }
          return colors[node.group as keyof typeof colors] || "#999"
        }}
        nodeVal={(node: any) => node.group * 2}
        nodeThreeObject={(node: any) => {
          const sprite = new SpriteText(node.id)
          sprite.material.depthWrite = false // make sprite background transparent
          sprite.color = "#333333"
          sprite.textHeight = 8
          sprite.backgroundColor = "rgba(255, 255, 255, 0.9)"
          sprite.padding = 2
          sprite.borderWidth = 1
          sprite.borderColor = "#cccccc"
          sprite.borderRadius = 4
          return sprite
        }}
        linkColor={() => "rgba(30, 144, 255, 0.6)"}
        linkWidth={2}
        linkCurvature={0.3}
        onNodeClick={handleNodeClick}
        backgroundColor="rgba(255, 255, 255, 0)"
        showNavInfo={false}
        controlType="orbit"
        enableNodeDrag={true}
        nodeRelSize={6}
      />
    </div>
  )
} 