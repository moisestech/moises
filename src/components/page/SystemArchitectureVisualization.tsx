"use client"

import { useState } from 'react'
import { SystemVisualization } from '@/features/i-will-remember-you'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Monitor, Eye, Info } from 'lucide-react'

interface SystemArchitectureVisualizationProps {
  title?: string
  description?: string
}

export function SystemArchitectureVisualization({ 
  title = "System Architecture", 
  description = "Interactive 3D visualization of the I Will Remember You technical system" 
}: SystemArchitectureVisualizationProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={() => setIsFullscreen(false)}
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm"
          >
            Exit Fullscreen
          </Button>
        </div>
        <SystemVisualization />
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-blue-500" />
            <CardTitle>{title}</CardTitle>
          </div>
          <Button
            onClick={() => setIsFullscreen(true)}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            Fullscreen
          </Button>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="relative h-[600px] rounded-lg overflow-hidden border">
          <SystemVisualization />
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Info className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">How to interact:</span>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Click on any node to view detailed information</li>
            <li>• Use mouse to rotate, zoom, and pan the 3D visualization</li>
            <li>• Toggle between High-Level and Deep Tech views using the legend</li>
            <li>• Drag nodes to rearrange the network layout</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
} 