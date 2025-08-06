import { create } from "zustand"

interface Node {
  id: string
  group: number
  power: string
  poetic: string
  image: string
}

interface Store {
  selectedNode: Node | null
  isOpen: boolean
  layerMode: "highLevel" | "deepTech"
  setSelectedNode: (node: Node | null) => void
  setIsOpen: (isOpen: boolean) => void
  setLayerMode: (mode: "highLevel" | "deepTech") => void
}

export const useStore = create<Store>((set) => ({
  selectedNode: null,
  isOpen: false,
  layerMode: "highLevel",
  setSelectedNode: (node) => set({ selectedNode: node }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setLayerMode: (mode) => set({ layerMode: mode }),
})) 