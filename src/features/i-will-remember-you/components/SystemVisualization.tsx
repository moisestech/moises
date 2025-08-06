"use client"

import { ForceScene } from './ForceScene'
import { InfoPanel } from './InfoPanel'
import { Legend } from './Legend'

export function SystemVisualization() {
  return (
    <div className="relative w-full h-screen">
      <ForceScene />
      <InfoPanel />
      <Legend />
    </div>
  )
} 