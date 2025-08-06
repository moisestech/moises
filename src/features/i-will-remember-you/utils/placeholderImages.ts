// Generate placeholder image URLs using a placeholder service
export const generatePlaceholderImage = (nodeId: string, group: number, width = 400, height = 300) => {
  const colors = {
    1: "ff6b6b", // Visitor - coral
    2: "4ecdc4", // Input devices - teal
    3: "45b7d1", // Processing - blue
    4: "96ceb4", // Output - green
    5: "feca57", // Infrastructure - yellow
  }

  const color = colors[group as keyof typeof colors] || "999999"
  const text = encodeURIComponent(nodeId.replace(/\s+/g, '+'))
  
  // Use a placeholder image service
  return `https://via.placeholder.com/${width}x${height}/${color}/ffffff?text=${text}`
}

// Pre-generated placeholder URLs for each node
export const placeholderImages = {
  "Visitor": "https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Visitor",
  "Mic / STT": "https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Mic+%2F+STT",
  "Camera": "https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Camera",
  "Jetson Orin Nano": "https://via.placeholder.com/400x300/45b7d1/ffffff?text=Jetson+Orin+Nano",
  "LLM + Memory DB": "https://via.placeholder.com/400x300/45b7d1/ffffff?text=LLM+%2B+Memory+DB",
  "Stable Diffusion": "https://via.placeholder.com/400x300/45b7d1/ffffff?text=Stable+Diffusion",
  "Display": "https://via.placeholder.com/400x300/96ceb4/ffffff?text=Display",
  "Speakers": "https://via.placeholder.com/400x300/96ceb4/ffffff?text=Speakers",
  "Local NVMe SSD": "https://via.placeholder.com/400x300/feca57/ffffff?text=Local+NVMe+SSD",
  "UPS / Power": "https://via.placeholder.com/400x300/feca57/ffffff?text=UPS+%2F+Power",
  "Optional LAN / Wi-Fi": "https://via.placeholder.com/400x300/feca57/ffffff?text=Optional+LAN+%2F+Wi-Fi"
} 