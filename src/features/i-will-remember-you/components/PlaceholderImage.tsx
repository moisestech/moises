"use client"

interface PlaceholderImageProps {
  nodeId: string
  group: number
  className?: string
}

export function PlaceholderImage({ nodeId, group, className = "" }: PlaceholderImageProps) {
  const colors = {
    1: "#ff6b6b", // Visitor - coral
    2: "#4ecdc4", // Input devices - teal
    3: "#45b7d1", // Processing - blue
    4: "#96ceb4", // Output - green
    5: "#feca57", // Infrastructure - yellow
  }

  const color = colors[group as keyof typeof colors] || "#999"

  // Generate a simple icon based on the node type
  const getIcon = (id: string) => {
    const lowerId = id.toLowerCase()
    if (lowerId.includes('visitor')) return '👤'
    if (lowerId.includes('mic') || lowerId.includes('stt')) return '🎤'
    if (lowerId.includes('camera')) return '📷'
    if (lowerId.includes('jetson')) return '🖥️'
    if (lowerId.includes('llm') || lowerId.includes('memory')) return '🧠'
    if (lowerId.includes('stable') || lowerId.includes('diffusion')) return '🎨'
    if (lowerId.includes('display')) return '🖥️'
    if (lowerId.includes('speaker')) return '🔊'
    if (lowerId.includes('ssd') || lowerId.includes('nvme')) return '💾'
    if (lowerId.includes('ups') || lowerId.includes('power')) return '⚡'
    if (lowerId.includes('wifi') || lowerId.includes('lan')) return '📡'
    return '🔧'
  }

  const icon = getIcon(nodeId)

  return (
    <div 
      className={`flex items-center justify-center rounded-lg ${className}`}
      style={{ backgroundColor: color + '20' }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">{icon}</div>
        <div className="text-sm font-medium text-gray-700" style={{ color }}>
          {nodeId}
        </div>
      </div>
    </div>
  )
} 