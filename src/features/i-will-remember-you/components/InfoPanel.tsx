"use client"

import { useStore } from "@/features/i-will-remember-you/store"
import { X } from "lucide-react"
import Image from "next/image"
import { PlaceholderImage } from "./PlaceholderImage"

export function InfoPanel() {
  const { selectedNode, isOpen, setIsOpen, layerMode } = useStore()

  if (!isOpen || !selectedNode) return null

  const getTechnicalDescription = (nodeId: string) => {
    const descriptions: Record<string, { highLevel: string; deepTech: string }> = {
      Visitor: {
        highLevel: "The human participant who interacts with the artwork through voice and presence.",
        deepTech: "Biometric input source providing audio waveforms and visual data for ML processing pipelines.",
      },
      "Mic / STT": {
        highLevel: "Captures spoken words and converts them to text for the AI to understand.",
        deepTech:
          "Digital MEMS microphone with real-time speech-to-text processing using Whisper or similar transformer models.",
      },
      Camera: {
        highLevel: "Records visual information about visitors for memory creation.",
        deepTech: "RGB camera sensor with computer vision preprocessing for face detection and scene analysis.",
      },
      "Jetson Orin Nano": {
        highLevel: "The main computer brain that processes all information and makes decisions.",
        deepTech:
          "ARM Cortex-A78AE CPU with 1024-core NVIDIA Ampere GPU, running containerized ML inference workloads.",
      },
      "LLM + Memory DB": {
        highLevel: "AI system that remembers conversations and generates thoughtful responses.",
        deepTech:
          "Large Language Model (7B-13B parameters) with vector database for semantic memory retrieval and RAG architecture.",
      },
      "Stable Diffusion": {
        highLevel: "Creates unique images based on the conversation and memories.",
        deepTech:
          "Latent diffusion model with U-Net architecture for text-to-image generation, optimized for edge deployment.",
      },
      Display: {
        highLevel: "Shows the generated images and visual responses to visitors.",
        deepTech: "4K LCD/OLED display with HDMI 2.1 interface, calibrated for accurate color reproduction.",
      },
      Speakers: {
        highLevel: "Plays back the AI's spoken responses and ambient sounds.",
        deepTech:
          "Full-range drivers with digital amplification, supporting 48kHz/24-bit audio output via I2S protocol.",
      },
      "Local NVMe SSD": {
        highLevel: "Stores all memories, conversations, and generated content locally.",
        deepTech: "1TB+ NVMe PCIe 4.0 SSD with wear leveling and encryption for persistent data storage.",
      },
      "UPS / Power": {
        highLevel: "Provides reliable power to keep the artwork running continuously.",
        deepTech:
          "Uninterruptible Power Supply with lithium battery backup, power conditioning, and remote monitoring.",
      },
      "Optional LAN / Wi-Fi": {
        highLevel: "Occasional internet connection for updates and cloud backup.",
        deepTech: "802.11ac Wi-Fi 6 or Gigabit Ethernet with VPN tunneling for secure cloud synchronization.",
      },
    }

    return descriptions[nodeId]?.[layerMode] || "No description available."
  }

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-l border-gray-200">
      <div className="p-6 h-full overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{selectedNode.id}</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Component Image */}
          <div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-100 mb-4">
              <Image
                src={selectedNode.image}
                alt={`${selectedNode.id} component`}
                fill
                className="object-cover"
                onError={(e) => {
                  // Show placeholder when image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) {
                    placeholder.style.opacity = '1';
                  }
                }}
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300">
                <PlaceholderImage 
                  nodeId={selectedNode.id} 
                  group={selectedNode.group} 
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Power Consumption</h3>
            <p className="text-lg text-gray-900">{selectedNode.power}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Poetic Description</h3>
            <p className="text-lg italic text-gray-700 leading-relaxed">"{selectedNode.poetic}"</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Technical Role</h3>
            <p className="text-gray-900 leading-relaxed">{getTechnicalDescription(selectedNode.id)}</p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    {
                      1: "#ff6b6b",
                      2: "#4ecdc4",
                      3: "#45b7d1",
                      4: "#96ceb4",
                      5: "#feca57",
                    }[selectedNode.group] || "#999",
                }}
              />
              <span className="text-sm text-gray-600">Group {selectedNode.group}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 