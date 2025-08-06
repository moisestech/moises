"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Sphere, Cylinder, useTexture, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Building2, 
  Monitor, 
  Cpu, 
  Camera, 
  Printer, 
  Video, 
  Wifi, 
  Database,
  Users,
  Target,
  Lightbulb,
  Zap,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  Settings,
  Info,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  Sparkles,
  X,
  Box as BoxIcon,
  Globe,
  Palette,
  Brain,
  Smartphone,
  Headphones
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';
import LabRoom3D from '@/components/3d/LabRoom3D';

// Floating Kaleidoscope House Component
function FloatingKaleidoscopeHouse({ position, scale, rotationSpeed }: any) {
  const houseRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (houseRef.current) {
      // Gentle floating animation
      houseRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      // Slow rotation
      houseRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed;
    }
  });

  // Colors for the kaleidoscope effect
  const colors = {
    cyan: new THREE.Color("#00FFFF"),
    blue: new THREE.Color("#0080FF"),
    purple: new THREE.Color("#8000FF"),
    pink: new THREE.Color("#FF0080"),
    orange: new THREE.Color("#FF8000"),
    yellow: new THREE.Color("#FFFF00"),
  };

  const colorArray = Object.values(colors);

  return (
    <group ref={houseRef} position={position} scale={scale}>
      {/* Base structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 1.5]} />
        <meshBasicMaterial color="#ffffff" opacity={0.05} transparent />
      </mesh>

      {/* Colored panels with kaleidoscope effect */}
      {[0, 1, 2].map((floor) => (
        [-0.5, 0.5].map((side, sideIndex) => (
          <mesh 
            key={`${floor}-${side}`}
            position={[side, floor * 0.5 - 0.25, 0.76]} 
            rotation={[0, 0, 0]}
          >
            <planeGeometry args={[1, 0.4]} />
            <meshStandardMaterial
              color={colorArray[(floor * 2 + sideIndex) % colorArray.length]}
              transparent
              opacity={0.6}
              emissive={colorArray[(floor * 2 + sideIndex) % colorArray.length]}
              emissiveIntensity={0.2}
            />
          </mesh>
        ))
      ))}

      {/* Side panels */}
      <mesh position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshStandardMaterial
          color={colors.cyan}
          transparent
          opacity={0.4}
          emissive={colors.cyan}
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh position={[-1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshStandardMaterial
          color={colors.purple}
          transparent
          opacity={0.4}
          emissive={colors.purple}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Glowing edges */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(2, 1.5, 1.5)]} />
        <lineBasicMaterial 
          attach="material" 
          color={colors.cyan} 
          linewidth={1}
          transparent
          opacity={0.8}
        />
      </lineSegments>
    </group>
  );
}

// Cyan Glow Effect Component
function CyanGlowEffect() {
  const glowRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (glowRef.current) {
      // Pulsing glow effect
      const intensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
      glowRef.current.children.forEach((child: any) => {
        if (child.material) {
          child.material.emissiveIntensity = intensity;
        }
      });
    }
  });

  return (
    <group ref={glowRef}>
      {/* Multiple glowing spheres */}
      {Array.from({ length: 8 }, (_, i) => (
        <Sphere
          key={i}
          args={[0.1 + Math.random() * 0.2, 8, 8]}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 20
          ]}
        >
          <meshStandardMaterial
            color="#00FFFF"
            transparent
            opacity={0.6}
            emissive="#00FFFF"
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
}

// Immersive Background Component
function ImmersiveBackground() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      {/* Cyan glow effects */}
      <CyanGlowEffect />
      
      {/* Floating kaleidoscope houses */}
      {Array.from({ length: 6 }, (_, i) => (
        <FloatingKaleidoscopeHouse
          key={i}
          position={[
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 15 + 5,
            (Math.random() - 0.5) * 30 - 10
          ]}
          scale={0.3 + Math.random() * 0.4}
          rotationSpeed={0.1 + Math.random() * 0.2}
        />
      ))}
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} color="#00FFFF" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0080FF" />
      
      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

interface LabEquipment {
  name: string;
  description: string;
  status: 'operational' | 'maintenance' | 'upcoming';
  icon: any;
  specs: string[];
  location: string;
  color: string;
}

interface LabImage {
  id: string;
  title: string;
  description: string;
  category: 'setup' | 'equipment' | 'workshop' | 'showcase';
  url: string;
  alt: string;
}

const labEquipment: LabEquipment[] = [
  {
    name: "AI Compute Workstation",
    description: "High-performance PC with RTX 4080 for AI model training and inference",
    status: 'operational',
    icon: Cpu,
    specs: ["RTX 4080 GPU", "32GB RAM", "2TB NVMe SSD", "AI-optimized cooling"],
    location: "Workstation Bay 1",
    color: "#10B981"
  },
  {
    name: "Render Queue Server",
    description: "Dedicated rendering powerhouse for 3D and video processing",
    status: 'operational',
    icon: Monitor,
    specs: ["RTX 4080 GPU", "64GB RAM", "4TB Storage", "24/7 operation"],
    location: "Server Rack A",
    color: "#F59E0B"
  },
  {
    name: "Motion Graphics Station",
    description: "Mac Studio M3 Max for professional motion graphics and editing",
    status: 'operational',
    icon: Video,
    specs: ["M3 Max Chip", "32GB Unified Memory", "1TB SSD", "Pro Display XDR ready"],
    location: "Workstation Bay 2",
    color: "#8B5CF6"
  },
  {
    name: "XR Development Kit",
    description: "Meta Quest 3 headsets for VR/AR development and testing",
    status: 'operational',
    icon: Eye,
    specs: ["3x Meta Quest 3", "Wireless streaming", "Hand tracking", "Mixed reality"],
    location: "XR Testing Zone",
    color: "#EC4899"
  },
  {
    name: "3D Printing Suite",
    description: "Bambu X1C FDM and Elegoo Saturn 4 resin printers",
    status: 'operational',
    icon: Printer,
    specs: ["FDM: 256x256x256mm", "Resin: 192x120x200mm", "Auto-calibration", "Multi-material"],
    location: "Prototyping Corner",
    color: "#3B82F6"
  },
  {
    name: "Documentation Station",
    description: "Sony A7c II camera setup for content creation and documentation",
    status: 'operational',
    icon: Camera,
    specs: ["Sony A7c II", "4K video", "Professional lighting", "Audio interface"],
    location: "Media Bay",
    color: "#EF4444"
  }
];

const labImages: LabImage[] = [
  {
    id: "lab-overview",
    title: "Digital Arts Lab Overview",
    description: "Complete view of the Oolite Digital Arts Lab setup",
    category: 'setup',
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    alt: "Digital Arts Lab Overview"
  },
  {
    id: "ai-workstation",
    title: "AI Compute Workstation",
    description: "High-performance AI workstation for machine learning and creative AI",
    category: 'equipment',
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    alt: "AI Workstation"
  },
  {
    id: "3d-printing",
    title: "3D Printing Suite",
    description: "Advanced 3D printing capabilities for prototyping and production",
    category: 'equipment',
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    alt: "3D Printing Suite"
  },
  {
    id: "workshop-session",
    title: "Digital Arts Workshop",
    description: "Active workshop session with artists and students",
    category: 'workshop',
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    alt: "Workshop Session"
  }
];

export default function OoliteDigitalLabPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [show3DView, setShow3DView] = useState(false);
  const [selectedImage, setSelectedImage] = useState<LabImage | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'equipment' | 'workshops' | 'gallery'>('overview');

  const openImageModal = (image: LabImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500/20 text-green-400';
      case 'maintenance':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  if (show3DView) {
    return <LabRoom3D onExit={() => setShow3DView(false)} />;
  }

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavOolite />

      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ImmersiveBackground />
        </Canvas>
      </div>

      {/* Hero Section with Immersive Background */}
      <section className="relative pt-32 pb-20 z-10">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
              isDark 
                ? 'bg-[#00FFFF]/10 border border-[#00FFFF]/30 backdrop-blur-sm' 
                : 'bg-[#00FFFF]/20 border border-[#00FFFF]/50 backdrop-blur-sm'
            } mb-6`}>
              <Building2 className={`w-4 h-4 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`}>
                Digital Arts Lab
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Oolite Digital Arts Lab
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#00FFFF]/80' : 'text-[#0080FF]/80]'}`}>
              State-of-the-art digital arts facility with cutting-edge equipment for creative innovation
            </p>
          </motion.div>

          {/* 3D Lab Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <button
              onClick={() => setShow3DView(true)}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-[#00FFFF] to-[#0080FF] text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]' 
                  : 'bg-gradient-to-r from-[#00FFFF] to-[#0080FF] text-white hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]'
              } hover:scale-105 backdrop-blur-sm`}
            >
              <BoxIcon className="w-6 h-6" />
              Explore 3D Lab Environment
            </button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 relative z-10 bg-white/95 dark:bg-black/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview', icon: Info },
              { id: 'equipment', label: 'Equipment', icon: Cpu },
              { id: 'workshops', label: 'Workshops', icon: Users },
              { id: 'gallery', label: 'Gallery', icon: Camera }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? isDark 
                        ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                        : 'bg-[#00FFFF]/20 text-[#0080FF] border border-[#00FFFF]/30'
                      : isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                    Welcome to the Digital Arts Lab
                  </h2>
                  <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    The Oolite Digital Arts Lab is a cutting-edge facility designed to empower artists and creators 
                    with the latest digital tools and technologies. Our lab provides access to professional-grade 
                    equipment for digital art creation, 3D printing, AI-powered workflows, and immersive experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Equipment", value: "6+ Stations", icon: Cpu },
                      { label: "Capacity", value: "15 Artists", icon: Users },
                      { label: "Hours", value: "24/7 Access", icon: Clock },
                      { label: "Support", value: "Expert Staff", icon: Brain }
                    ].map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className={`p-4 rounded-lg backdrop-blur-sm ${
                          isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/50 border border-gray-200/50'
                        }`}>
                          <div className="flex items-center gap-3">
                            <Icon className={`w-6 h-6 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
                            <div>
                              <div className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                                {stat.value}
                              </div>
                              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={`rounded-2xl overflow-hidden backdrop-blur-sm ${
                  isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/50 border border-gray-200/50'
                }`}>
                  <img
                    src={labImages[0].url}
                    alt={labImages[0].alt}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Lab Features */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI-Powered Creation",
                    description: "Access to cutting-edge AI tools for creative expression and digital art generation",
                    icon: Brain,
                    color: "#10B981"
                  },
                  {
                    title: "3D Printing & Prototyping",
                    description: "Professional 3D printing capabilities for rapid prototyping and production",
                    icon: Printer,
                    color: "#3B82F6"
                  },
                  {
                    title: "Immersive Experiences",
                    description: "VR/AR development tools for creating next-generation digital experiences",
                    icon: Eye,
                    color: "#EC4899"
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-xl backdrop-blur-sm border ${
                        isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: `${feature.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: feature.color }} />
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                        {feature.title}
                      </h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'equipment' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Lab Equipment
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Professional-grade equipment for digital arts creation and innovation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {labEquipment.map((equipment, index) => {
                  const Icon = equipment.icon;
                  return (
                    <motion.div
                      key={equipment.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-xl backdrop-blur-sm border hover:shadow-lg transition-all duration-300 ${
                        isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                      }`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${equipment.color}20` }}>
                          <Icon className="w-6 h-6" style={{ color: equipment.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                            {equipment.name}
                          </h3>
                          <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(equipment.status)}`}>
                            <div className={`w-2 h-2 rounded-full ${
                              equipment.status === 'operational' ? 'bg-green-500' :
                              equipment.status === 'maintenance' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`} />
                            {equipment.status}
                          </div>
                        </div>
                      </div>
                      
                      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {equipment.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Specifications:
                        </div>
                        <ul className="space-y-1">
                          {equipment.specs.map((spec, specIndex) => (
                            <li key={specIndex} className={`flex items-center gap-2 text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`mt-4 pt-4 border-t ${
                        isDark ? 'border-gray-700' : 'border-gray-200'
                      }`}>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4" style={{ color: equipment.color }} />
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {equipment.location}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'workshops' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Lab Workshops & Programs
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hands-on workshops and training programs for digital arts education
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Digital Art Fundamentals",
                    description: "Learn the basics of digital art creation using professional tools and techniques",
                    duration: "4 weeks",
                    capacity: "12 students",
                    level: "Beginner",
                    icon: Palette
                  },
                  {
                    title: "AI Art & Creative Coding",
                    description: "Explore AI-powered art creation and creative coding for digital artists",
                    duration: "6 weeks",
                    capacity: "8 students",
                    level: "Intermediate",
                    icon: Brain
                  },
                  {
                    title: "3D Modeling & Printing",
                    description: "Master 3D modeling software and learn professional 3D printing techniques",
                    duration: "8 weeks",
                    capacity: "10 students",
                    level: "Intermediate",
                    icon: BoxIcon
                  },
                  {
                    title: "VR/AR Development",
                    description: "Create immersive experiences using virtual and augmented reality technologies",
                    duration: "10 weeks",
                    capacity: "6 students",
                    level: "Advanced",
                    icon: Eye
                  }
                ].map((workshop, index) => {
                  const Icon = workshop.icon;
                  return (
                    <motion.div
                      key={workshop.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 rounded-xl backdrop-blur-sm border ${
                        isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                      }`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isDark ? 'bg-[#00FFFF]/20' : 'bg-[#00FFFF]/20'
                        }`}>
                          <Icon className={`w-6 h-6 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                            {workshop.title}
                          </h3>
                          <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {workshop.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Duration
                          </div>
                          <div className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                            {workshop.duration}
                          </div>
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Capacity
                          </div>
                          <div className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                            {workshop.capacity}
                          </div>
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Level
                          </div>
                          <div className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                            {workshop.level}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Lab Gallery
                </h2>
                <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Visual documentation of our lab activities and equipment
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {labImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm border hover:shadow-lg transition-all duration-300 ${
                      isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                    }`}
                    onClick={() => openImageModal(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                        {image.title}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {image.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-4xl mx-auto p-4">
            <div className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {selectedImage.title}
                  </h3>
                  <button
                    onClick={closeImageModal}
                    className={`p-2 rounded-lg ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 