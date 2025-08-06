"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Sphere, Cylinder, useTexture, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { 
  Eye, 
  Move, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2,
  Monitor,
  Cpu,
  Printer,
  Camera,
  Video,
  Eye as EyeIcon,
  X,
  Info,
  Settings,
  Lightbulb,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface LabRoom3DProps {
  onExit: () => void;
}

interface Equipment3D {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  icon: any;
  description: string;
  status: 'operational' | 'maintenance' | 'upcoming';
  color: string;
}

// Lab dimensions
const LAB_WIDTH = 12;
const LAB_LENGTH = 12;
const LAB_HEIGHT = 4;
const WINDOW_WIDTH = 8;
const WINDOW_HEIGHT = 2.5;

const labEquipment3D: Equipment3D[] = [
  {
    id: "3d-printer",
    name: "3D Printer Suite",
    position: { x: -4, y: 0.5, z: -3 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    icon: Printer,
    description: "Bambu X1C FDM & Elegoo Saturn 4 Resin",
    status: 'operational',
    color: '#3B82F6'
  },
  {
    id: "ai-workstation",
    name: "AI Compute Workstation",
    position: { x: 3, y: 0.5, z: -2 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    icon: Cpu,
    description: "RTX 4080 GPU, 32GB RAM, AI-optimized",
    status: 'operational',
    color: '#10B981'
  },
  {
    id: "motion-station",
    name: "Motion Graphics Station",
    position: { x: 3, y: 0.5, z: 2 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    icon: Video,
    description: "Mac Studio M3 Max, Pro Display XDR",
    status: 'operational',
    color: '#8B5CF6'
  },
  {
    id: "render-server",
    name: "Render Queue Server",
    position: { x: -3, y: 0.5, z: 3 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    icon: Monitor,
    description: "RTX 4080, 64GB RAM, 24/7 operation",
    status: 'operational',
    color: '#F59E0B'
  },
  {
    id: "xr-kit",
    name: "XR Development Kit",
    position: { x: 0, y: 0.5, z: 4 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    icon: EyeIcon,
    description: "Meta Quest 3 headsets, Mixed reality",
    status: 'operational',
    color: '#EC4899'
  },
  {
    id: "camera-station",
    name: "Documentation Station",
    position: { x: -4, y: 0.5, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    icon: Camera,
    description: "Sony A7c II, lighting setup",
    status: 'operational',
    color: '#EF4444'
  }
];

// 3D Printer Component
function Printer3D({ position, rotation, scale }: any) {
  const [isPrinting, setIsPrinting] = useState(false);
  
  useFrame((state) => {
    if (isPrinting) {
      // Animate printing process
      state.clock.elapsedTime * 2;
    }
  });

  return (
    <group position={[position.x, position.y, position.z]} rotation={[rotation.x, rotation.y, rotation.z]} scale={[scale.x, scale.y, scale.z]}>
      {/* Printer Base */}
      <Box args={[1.2, 0.8, 1.2]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#2C3E50" />
      </Box>
      
      {/* Printer Frame */}
      <Box args={[1.4, 1.6, 0.1]} position={[0, 1.2, 0.6]}>
        <meshStandardMaterial color="#34495E" />
      </Box>
      <Box args={[1.4, 1.6, 0.1]} position={[0, 1.2, -0.6]}>
        <meshStandardMaterial color="#34495E" />
      </Box>
      <Box args={[0.1, 1.6, 1.2]} position={[0.7, 1.2, 0]}>
        <meshStandardMaterial color="#34495E" />
      </Box>
      <Box args={[0.1, 1.6, 1.2]} position={[-0.7, 1.2, 0]}>
        <meshStandardMaterial color="#34495E" />
      </Box>
      
      {/* Print Bed */}
      <Box args={[1.1, 0.05, 1.1]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#95A5A6" />
      </Box>
      
      {/* Extruder */}
      <Box args={[0.1, 0.3, 0.1]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#E74C3C" />
      </Box>
      
      {/* Filament Spool */}
      <Cylinder args={[0.2, 0.2, 0.1, 8]} position={[0.8, 1.8, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#3498DB" />
      </Cylinder>
      
      {/* Status Light */}
      <Sphere args={[0.05, 8, 8]} position={[0.6, 1.8, 0]}>
        <meshStandardMaterial color={isPrinting ? "#2ECC71" : "#E74C3C"} />
      </Sphere>
    </group>
  );
}

// Window with Curtains
function WindowWithCurtains() {
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  
  return (
    <group position={[0, LAB_HEIGHT/2, LAB_LENGTH/2 + 0.1]}>
      {/* Window Frame */}
      <Box args={[WINDOW_WIDTH + 0.2, WINDOW_HEIGHT + 0.2, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#34495E" />
      </Box>
      
      {/* Window Glass */}
      <Box args={[WINDOW_WIDTH, WINDOW_HEIGHT, 0.05]} position={[0, 0, 0.1]}>
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.3} />
      </Box>
      
      {/* Left Curtain */}
      <Box 
        args={[WINDOW_WIDTH/2, WINDOW_HEIGHT + 0.5, 0.1]} 
        position={curtainsOpen ? [-WINDOW_WIDTH/2 - 0.5, 0, -0.1] : [-WINDOW_WIDTH/4, 0, -0.1]}
        rotation={[0, 0, curtainsOpen ? 0 : 0.1]}
      >
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Right Curtain */}
      <Box 
        args={[WINDOW_WIDTH/2, WINDOW_HEIGHT + 0.5, 0.1]} 
        position={curtainsOpen ? [WINDOW_WIDTH/2 + 0.5, 0, -0.1] : [WINDOW_WIDTH/4, 0, -0.1]}
        rotation={[0, 0, curtainsOpen ? 0 : -0.1]}
      >
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Curtain Rod */}
      <Cylinder args={[0.05, 0.05, WINDOW_WIDTH + 1, 8]} position={[0, WINDOW_HEIGHT/2 + 0.3, -0.2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#654321" />
      </Cylinder>
    </group>
  );
}

// Equipment Item Component
function EquipmentItem({ equipment, onClick }: { equipment: Equipment3D; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group 
      position={[equipment.position.x, equipment.position.y, equipment.position.z]}
      rotation={[equipment.rotation.x, equipment.rotation.y, equipment.rotation.z]}
      scale={[equipment.scale.x, equipment.scale.y, equipment.scale.z]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Equipment Base */}
      <Box args={[0.8, 0.6, 0.8]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color={hovered ? equipment.color : "#4A5568"} />
      </Box>
      
      {/* Equipment Display */}
      <Box args={[0.7, 0.4, 0.05]} position={[0, 0.8, 0.4]}>
        <meshStandardMaterial color="#1A202C" />
      </Box>
      
      {/* Status Indicator */}
      <Sphere args={[0.05, 8, 8]} position={[0.3, 0.9, 0.4]}>
        <meshStandardMaterial color={
          equipment.status === 'operational' ? '#10B981' : 
          equipment.status === 'maintenance' ? '#F59E0B' : '#EF4444'
        } />
      </Sphere>
      
      {/* Equipment Label */}
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.15}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
        textAlign="center"
      >
        {equipment.name}
      </Text>
    </group>
  );
}

// Lab Scene Component
function LabScene({ onEquipmentClick }: { onEquipmentClick: (equipment: Equipment3D) => void }) {
  const { camera } = useThree();
  
  useEffect(() => {
    // Set initial camera position
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, LAB_HEIGHT - 0.5, 0]} intensity={0.5} color="#FFFFFF" />
      
      {/* Lab Floor */}
      <Plane args={[LAB_WIDTH, LAB_LENGTH]} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#2D3748" />
      </Plane>
      
      {/* Lab Walls */}
      <Box args={[LAB_WIDTH, LAB_HEIGHT, 0.2]} position={[0, LAB_HEIGHT/2, -LAB_LENGTH/2]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      <Box args={[LAB_WIDTH, LAB_HEIGHT, 0.2]} position={[0, LAB_HEIGHT/2, LAB_LENGTH/2]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      <Box args={[0.2, LAB_HEIGHT, LAB_LENGTH]} position={[-LAB_WIDTH/2, LAB_HEIGHT/2, 0]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      <Box args={[0.2, LAB_HEIGHT, LAB_LENGTH]} position={[LAB_WIDTH/2, LAB_HEIGHT/2, 0]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      
      {/* Lab Ceiling */}
      <Plane args={[LAB_WIDTH, LAB_LENGTH]} position={[0, LAB_HEIGHT, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2D3748" />
      </Plane>
      
      {/* Window with Curtains */}
      <WindowWithCurtains />
      
      {/* 3D Printer */}
      <Printer3D position={{ x: -4, y: 0, z: -3 }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: 1, y: 1, z: 1 }} />
      
      {/* Equipment Items */}
      {labEquipment3D.map((equipment) => (
        <EquipmentItem 
          key={equipment.id} 
          equipment={equipment} 
          onClick={() => onEquipmentClick(equipment)}
        />
      ))}
      
      {/* Work Tables */}
      <Box args={[2, 0.1, 1]} position={[2, 0.05, -1]}>
        <meshStandardMaterial color="#8B7355" />
      </Box>
      <Box args={[2, 0.1, 1]} position={[2, 0.05, 1]}>
        <meshStandardMaterial color="#8B7355" />
      </Box>
      <Box args={[2, 0.1, 1]} position={[-2, 0.05, -1]}>
        <meshStandardMaterial color="#8B7355" />
      </Box>
      <Box args={[2, 0.1, 1]} position={[-2, 0.05, 1]}>
        <meshStandardMaterial color="#8B7355" />
      </Box>
      
      {/* Environment */}
      <Environment preset="studio" />
    </>
  );
}

export default function LabRoom3D({ onExit }: LabRoom3DProps) {
  const { theme } = useTheme();
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment3D | null>(null);
  const [cameraMode, setCameraMode] = useState<'orbit' | 'first-person'>('orbit');
  const [lightingMode, setLightingMode] = useState<'day' | 'night' | 'studio'>('day');

  const handleEquipmentClick = (equipment: Equipment3D) => {
    setSelectedEquipment(equipment);
  };

  const handleCloseEquipment = () => {
    setSelectedEquipment(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [8, 6, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <LabScene onEquipmentClick={handleEquipmentClick} />
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={20}
            minDistance={2}
          />
        </Suspense>
      </Canvas>

      {/* UI Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <button
          onClick={onExit}
          className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setCameraMode(cameraMode === 'orbit' ? 'first-person' : 'orbit')}
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <Eye className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setLightingMode(lightingMode === 'day' ? 'night' : lightingMode === 'night' ? 'studio' : 'day')}
          className="p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          <Lightbulb className="w-5 h-5" />
        </button>
      </div>

      {/* Equipment Info Panel */}
      {selectedEquipment && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="absolute top-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {selectedEquipment.name}
            </h3>
            <button
              onClick={handleCloseEquipment}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              {selectedEquipment.description}
            </p>
            
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                selectedEquipment.status === 'operational' ? 'bg-green-500' :
                selectedEquipment.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
              <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                {selectedEquipment.status}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedEquipment.color }} />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Equipment ID: {selectedEquipment.id}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Lab Info */}
      <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Oolite Digital Arts Lab
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Interactive 3D Lab Environment
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Click equipment to view details • Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
} 