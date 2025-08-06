"use client"

import { useStore } from "@/features/i-will-remember-you/store"

export function Legend() {
  const { layerMode, setLayerMode } = useStore()

  return (
    <div className="fixed bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">View Mode</h3>
      <div className="flex space-x-2">
        <button
          onClick={() => setLayerMode("highLevel")}
          className={`px-3 py-2 text-sm rounded-md transition-colors ${
            layerMode === "highLevel" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          High-Level
        </button>
        <button
          onClick={() => setLayerMode("deepTech")}
          className={`px-3 py-2 text-sm rounded-md transition-colors ${
            layerMode === "deepTech" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Deep Tech
        </button>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">Node Groups</p>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span className="text-xs text-gray-600">Visitor</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
            <span className="text-xs text-gray-600">Input</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-xs text-gray-600">Processing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-xs text-gray-600">Output</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-xs text-gray-600">Infrastructure</span>
          </div>
        </div>
      </div>
    </div>
  )
} 