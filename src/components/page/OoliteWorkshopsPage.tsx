"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Sphere, Cylinder, useTexture, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  BookOpen, 
  Users, 
  Target, 
  Award, 
  Heart, 
  Globe, 
  Zap, 
  Brain, 
  Palette, 
  Camera, 
  Video, 
  Box as BoxIcon,
  Eye, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  GraduationCap,
  Building2,
  Cpu,
  Smartphone,
  Monitor,
  Printer,
  Headphones,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';
import Image from 'next/image';

// Floating Workshop Tools Component
function FloatingWorkshopTools() {
  const toolsRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (toolsRef.current) {
      // Gentle floating animation
      toolsRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3;
      toolsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const colors = {
    cyan: new THREE.Color("#00FFFF"),
    blue: new THREE.Color("#0080FF"),
    purple: new THREE.Color("#8000FF"),
    pink: new THREE.Color("#FF0080"),
  };

  return (
    <group ref={toolsRef}>
      {/* Floating digital art tools */}
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15 + 3,
          (Math.random() - 0.5) * 25 - 8
        ]}>
          {/* Palette */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.1, 8]} />
            <meshStandardMaterial
              color={Object.values(colors)[i % 4]}
              emissive={Object.values(colors)[i % 4]}
              emissiveIntensity={0.2}
              transparent
              opacity={0.7}
            />
          </mesh>
          
          {/* Paint brushes */}
          {Array.from({ length: 3 }, (_, j) => (
            <mesh
              key={j}
              position={[
                Math.sin(j * 2.1) * 1.2,
                Math.cos(j * 2.1) * 1.2,
                0.1
              ]}
            >
              <cylinderGeometry args={[0.02, 0.02, 0.8, 6]} />
              <meshStandardMaterial
                color={Object.values(colors)[(i + j) % 4]}
                emissive={Object.values(colors)[(i + j) % 4]}
                emissiveIntensity={0.3}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
          
          {/* Floating particles */}
          {Array.from({ length: 4 }, (_, k) => (
            <mesh
              key={k}
              position={[
                Math.sin(k * 1.5) * 2,
                Math.cos(k * 1.5) * 2,
                Math.sin(k * 0.7) * 0.3
              ]}
            >
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial
                color={Object.values(colors)[(i + k) % 4]}
                emissive={Object.values(colors)[(i + k) % 4]}
                emissiveIntensity={0.4}
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Floating Learning Elements
function FloatingLearningElements() {
  const learningRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (learningRef.current) {
      // Slow rotation and floating
      learningRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      learningRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={learningRef}>
      {Array.from({ length: 6 }, (_, i) => (
        <group key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12 + 6,
          (Math.random() - 0.5) * 20 - 10
        ]}>
          {/* Book */}
          <mesh>
            <boxGeometry args={[1.2, 1.6, 0.2]} />
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.1}
            />
          </mesh>
          
          {/* Knowledge sparkles */}
          {Array.from({ length: 5 }, (_, j) => (
            <mesh
              key={j}
              position={[
                Math.sin(j * 1.3) * 1.5,
                Math.cos(j * 1.3) * 1.5,
                Math.sin(j * 0.9) * 0.2
              ]}
            >
              <sphereGeometry args={[0.06, 6, 6]} />
              <meshStandardMaterial
                color="#00FFFF"
                emissive="#00FFFF"
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Workshops Background
function WorkshopsBackground() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Subtle stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={1500} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.3}
      />
      
      {/* Floating workshop tools */}
      <FloatingWorkshopTools />
      
      {/* Floating learning elements */}
      <FloatingLearningElements />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} color="#00FFFF" />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#0080FF" />
      
      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

interface Workshop {
  id: string;
  title: string;
  description: string;
  category: 'digital';
  level: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  duration: string;
  instructor: string;
  materials: 'included' | 'not-included' | 'partial';
  equipment: string[];
  outcomes: string[];
  schedule: string;
  dates: string;
  capacity: number;
  enrolled: number;
  status: 'upcoming' | 'active' | 'completed';
  cost: string;
  age: string;
  languages: string[];
  location: 'in-person' | 'virtual' | 'hybrid';
}

interface WorkshopCategory {
  name: string;
  description: string;
  icon: any;
  color: string;
  workshops: Workshop[];
}

const workshopCategories: WorkshopCategory[] = [
  {
    name: "Digital Painting & Drawing",
    description: "Master digital art fundamentals with tablets and software",
    icon: Palette,
    color: "#00FFFF",
    workshops: [
      {
        id: "digital-painting-1",
        title: "Digital Painting with Procreate",
        description: "Four-week course covering fundamental digital painting techniques and color theory",
        category: 'digital',
        level: 'beginner',
        duration: "4 weeks",
        instructor: "Moises Sanabria",
        materials: 'not-included',
        equipment: ["iPad with Apple Pencil", "Procreate App"],
        outcomes: [
          "Master Procreate interface and tools",
          "Understand digital color theory and mixing",
          "Create composition and design principles",
          "Develop personal digital painting style"
        ],
        schedule: "Tuesdays, 10am - 1pm",
        dates: "Aug 12-Sept 2, 2025",
        capacity: 12,
        enrolled: 8,
        status: 'upcoming',
        cost: "$195",
        age: "15+",
        languages: ["English", "Spanish"],
        location: 'in-person'
      },
      {
        id: "digital-painting-2",
        title: "Digital Figure Drawing",
        description: "Four-week course focusing on digital figure drawing and anatomy",
        category: 'digital',
        level: 'all-levels',
        duration: "4 weeks",
        instructor: "Fabiola Larios",
        materials: 'not-included',
        equipment: ["Wacom Tablet", "Adobe Photoshop", "Krita"],
        outcomes: [
          "Master digital figure drawing techniques",
          "Understand human anatomy and proportions",
          "Create depth and three-dimensionality",
          "Develop expressive digital drawing style"
        ],
        schedule: "Tuesdays, 6-8:30 PM",
        dates: "Sept 9-30, 2025",
        capacity: 8,
        enrolled: 6,
        status: 'upcoming',
        cost: "$195",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      },
      {
        id: "digital-painting-3",
        title: "Live Virtual Digital Art Course",
        description: "Four-week online course for beginners covering digital art fundamentals",
        category: 'digital',
        level: 'beginner',
        duration: "4 weeks",
        instructor: "Fabiola Larios",
        materials: 'not-included',
        equipment: ["Computer with internet", "Any drawing tablet", "Free digital art software"],
        outcomes: [
          "Understand digital art materials and setup",
          "Master basic digital techniques and color theory",
          "Learn composition and design principles",
          "Create finished digital art projects"
        ],
        schedule: "Mondays, 6-8 PM ET",
        dates: "Aug 4-25, 2025",
        capacity: 15,
        enrolled: 12,
        status: 'active',
        cost: "$120",
        age: "15+",
        languages: ["English", "Spanish"],
        location: 'virtual'
      }
    ]
  },
  {
    name: "Digital Design & Illustration",
    description: "Create stunning digital illustrations and designs",
    icon: Cpu,
    color: "#0080FF",
    workshops: [
      {
        id: "digital-design-1",
        title: "Digital Illustration Fundamentals",
        description: "Two-day workshop teaching the fundamentals of digital illustration",
        category: 'digital',
        level: 'all-levels',
        duration: "2 days",
        instructor: "Moises Sanabria",
        materials: 'included',
        equipment: ["Wacom Tablets", "Adobe Illustrator", "Procreate"],
        outcomes: [
          "Master digital illustration techniques",
          "Create unique digital artwork",
          "Learn digital painting methods",
          "Complete original digital illustrations"
        ],
        schedule: "Saturdays, 10 AM - 1 PM",
        dates: "Aug 2 & 9, 2025",
        capacity: 6,
        enrolled: 4,
        status: 'upcoming',
        cost: "$110",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      },
      {
        id: "digital-design-2",
        title: "Graphic Design with Adobe Creative Suite",
        description: "One-day workshop exploring graphic design techniques and processes",
        category: 'digital',
        level: 'all-levels',
        duration: "1 day",
        instructor: "Fabiola Larios",
        materials: 'included',
        equipment: ["Mac/PC Workstations", "Adobe Photoshop", "Adobe Illustrator"],
        outcomes: [
          "Learn graphic design basics",
          "Create professional logos and designs",
          "Master Adobe Photoshop and Illustrator",
          "Complete portfolio-ready projects"
        ],
        schedule: "Thursday, 6-9 PM",
        dates: "Aug 7, 2025",
        capacity: 8,
        enrolled: 6,
        status: 'upcoming',
        cost: "$95",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      },
      {
        id: "digital-design-3",
        title: "Digital Art Portfolio Development",
        description: "Three-week course covering digital portfolio creation and presentation",
        category: 'digital',
        level: 'intermediate',
        duration: "3 weeks",
        instructor: "Moises Sanabria",
        materials: 'partial',
        equipment: ["Computer", "Portfolio Software", "Digital Art Files"],
        outcomes: [
          "Master digital portfolio techniques",
          "Understand digital presentation methods",
          "Create professional digital portfolios",
          "Develop digital marketing skills"
        ],
        schedule: "Thursdays, 6-8:30 PM",
        dates: "Aug 14-28, 2025",
        capacity: 6,
        enrolled: 4,
        status: 'upcoming',
        cost: "$180",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      }
    ]
  },
  {
    name: "Digital Animation & Motion",
    description: "Bring your digital art to life with animation",
    icon: Video,
    color: "#8000FF",
    workshops: [
      {
        id: "animation-1",
        title: "Digital Animation Fundamentals",
        description: "Four-week course focusing on digital animation principles",
        category: 'digital',
        level: 'all-levels',
        duration: "4 weeks",
        instructor: "Fabiola Larios",
        materials: 'not-included',
        equipment: ["Computer", "Animation Software", "Drawing Tablet"],
        outcomes: [
          "Master animation principles",
          "Understand digital animation tools",
          "Create simple animations",
          "Develop storytelling skills"
        ],
        schedule: "Saturdays, 10 AM - 12:30 PM",
        dates: "Sept 13 - Oct 4, 2025",
        capacity: 10,
        enrolled: 7,
        status: 'upcoming',
        cost: "$175",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      },
      {
        id: "animation-2",
        title: "Digital Animation Studio",
        description: "Ongoing digital animation sessions with guided projects",
        category: 'digital',
        level: 'all-levels',
        duration: "Ongoing",
        instructor: "Studio Monitor",
        materials: 'not-included',
        equipment: ["Animation Workstations", "Adobe Animate", "Blender"],
        outcomes: [
          "Practice digital animation regularly",
          "Work on personal projects",
          "Improve animation skills",
          "Build portfolio of animated works"
        ],
        schedule: "Mondays, 7-9 PM",
        dates: "Ongoing",
        capacity: 15,
        enrolled: 12,
        status: 'active',
        cost: "$15/session",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      }
    ]
  },
  {
    name: "Digital Photography & Editing",
    description: "Master digital photography and post-processing",
    icon: Camera,
    color: "#FF0080",
    workshops: [
      {
        id: "photography-1",
        title: "Digital Photography Basics",
        description: "One-day workshop exploring digital photography fundamentals",
        category: 'digital',
        level: 'beginner',
        duration: "1 day",
        instructor: "Moises Sanabria",
        materials: 'included',
        equipment: ["Digital Cameras", "Tripods", "Lighting Equipment"],
        outcomes: [
          "Learn digital photography techniques",
          "Master camera settings and composition",
          "Understand lighting and exposure",
          "Complete photography projects"
        ],
        schedule: "Tuesday, 6-8:30 PM",
        dates: "Aug 26, 2025",
        capacity: 8,
        enrolled: 6,
        status: 'upcoming',
        cost: "$85",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      },
      {
        id: "photography-2",
        title: "Digital Photo Editing with Lightroom",
        description: "One-day workshop on digital photo editing and enhancement",
        category: 'digital',
        level: 'beginner',
        duration: "1 day",
        instructor: "Fabiola Larios",
        materials: 'included',
        equipment: ["Mac/PC Workstations", "Adobe Lightroom", "Sample Photos"],
        outcomes: [
          "Learn Lightroom editing techniques",
          "Master color correction and enhancement",
          "Understand digital workflow",
          "Complete edited photo projects"
        ],
        schedule: "Tuesday, 6-8:30 PM",
        dates: "Sept 2, 2025",
        capacity: 8,
        enrolled: 5,
        status: 'upcoming',
        cost: "$85",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      }
    ]
  },
  {
    name: "Specialized Digital Workshops",
    description: "Unique and specialized digital art workshops",
    icon: Star,
    color: "#FF8000",
    workshops: [
      {
        id: "specialized-1",
        title: "Digital Art for Social Media",
        description: "Three-hour workshop creating digital art for social platforms",
        category: 'digital',
        level: 'all-levels',
        duration: "3 hours",
        instructor: "Moises Sanabria",
        materials: 'included',
        equipment: ["Tablets", "Social Media Apps", "Design Software"],
        outcomes: [
          "Learn social media design principles",
          "Create engaging digital content",
          "Understand platform requirements",
          "Complete social media projects"
        ],
        schedule: "Friday, 6-9 PM",
        dates: "Aug 22, 2025",
        capacity: 10,
        enrolled: 8,
        status: 'upcoming',
        cost: "$75",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      },
      {
        id: "specialized-2",
        title: "Digital Art Business Fundamentals",
        description: "Four-week course focusing on digital art entrepreneurship",
        category: 'digital',
        level: 'all-levels',
        duration: "4 weeks",
        instructor: "Fabiola Larios",
        materials: 'not-included',
        equipment: ["Computer", "Business Software", "Portfolio Materials"],
        outcomes: [
          "Master digital art business basics",
          "Understand online marketing",
          "Create business strategies",
          "Develop entrepreneurial skills"
        ],
        schedule: "Thursdays, 6:30-9:30 PM",
        dates: "Aug 14-Sept 4, 2025",
        capacity: 12,
        enrolled: 9,
        status: 'upcoming',
        cost: "$195",
        age: "15+",
        languages: ["English"],
        location: 'in-person'
      }
    ]
  }
];

// Placeholder images from Digital Presence workshop
const placeholderImages = {
  hero: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030235/own-your-digital-presence/website-building-hero-image_exoyv7.png",
  schedule: {
    day1: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030298/own-your-digital-presence/website-building-day-1-virtual-session_qk0esh.jpg",
    day2: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg",
    day3: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030278/own-your-digital-presence/website-building-day-2-3-weekend-in-person_jm1abi.jpg",
    day4: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030367/own-your-digital-presence/website-building-day-4-online-presentations_tncppm.jpg"
  },
  workshop: {
    focus: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743021790/own-your-digital-presence/website-building-workshop-focus_wvkiwk.jpg",
    overview: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743021790/own-your-digital-presence/website-building-workshop-focus_wvkiwk.jpg"
  }
};

export default function OoliteWorkshopsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-400';
      case 'completed':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  // Handle URL parameters for workshop details
  useEffect(() => {
    const workshopId = searchParams.get('workshop');
    if (workshopId) {
      const allWorkshops = workshopCategories.flatMap(cat => cat.workshops);
      const workshop = allWorkshops.find(w => w.id === workshopId);
      if (workshop) {
        setSelectedWorkshop(workshop);
      }
    }
  }, [searchParams]);

  const filteredWorkshops = selectedCategory === 'all' 
    ? workshopCategories.flatMap(cat => cat.workshops)
    : workshopCategories.find(cat => cat.name === selectedCategory)?.workshops || [];

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavOolite />

      {/* Workshops Background */}
      <div className="fixed inset-0 z-0 opacity-25">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <WorkshopsBackground />
        </Canvas>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
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
              <BookOpen className={`w-4 h-4 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`}>
                Digital Arts Workshops
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Digital Arts Lab Workshops
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#00FFFF]/80' : 'text-[#0080FF]/80]'}`}>
              Comprehensive workshops covering digital art fundamentals, 3D modeling, AI art, motion graphics, and interactive design
            </p>
          </motion.div>

          {/* Workshop Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Total Workshops", value: "12", icon: BookOpen, color: "#00FFFF" },
              { label: "Active Sessions", value: "8", icon: Users, color: "#0080FF" },
              { label: "Students Enrolled", value: "89", icon: GraduationCap, color: "#8000FF" },
              { label: "Success Rate", value: "94%", icon: Target, color: "#FF0080" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-xl backdrop-blur-sm border ${
                    isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                  } text-center`}
                >
                  <div className="relative mb-4">
                    <Icon className="h-12 w-12 mx-auto transition-transform duration-300 group-hover:scale-110" style={{ color: stat.color }} />
                    <div className={`absolute inset-0 rounded-full blur-lg opacity-20`} style={{ backgroundColor: stat.color }} />
                  </div>
                  <div className={`text-3xl font-bold mb-2`} style={{ color: stat.color }}>{stat.value}</div>
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? isDark 
                    ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                    : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                  : isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              All Workshops
            </button>
            {workshopCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? isDark 
                        ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                        : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                      : isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" style={{ color: category.color }} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 relative z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => {
              const category = workshopCategories.find(cat => cat.workshops.includes(workshop));
              const CategoryIcon = category?.icon;
              
              return (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm border hover:shadow-lg transition-all duration-300 ${
                    isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                  }`}
                  onClick={() => {
                    setSelectedWorkshop(workshop);
                    router.push(`?workshop=${workshop.id}`);
                  }}
                >
                  {/* Workshop Image */}
                  <div className="relative h-48">
                    <Image
                      src={placeholderImages.workshop.focus}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold text-white backdrop-blur-sm"
                         style={{ backgroundColor: `${category?.color}80` }}>
                      {workshop.category}
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold text-white backdrop-blur-sm"
                         style={{ backgroundColor: `${category?.color}80` }}>
                      {workshop.status}
                    </div>
                  </div>
                  
                  {/* Workshop Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {CategoryIcon && (
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${category?.color}20` }}>
                          <CategoryIcon className="w-5 h-5" style={{ color: category.color }} />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                          {workshop.title}
                        </h3>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {workshop.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Workshop Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Instructor</span>
                        <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>{workshop.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cost</span>
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>{workshop.cost}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Dates</span>
                        <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>{workshop.dates}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Level</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(workshop.level)}`}>
                          {workshop.level}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Enrolled</span>
                        <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                          {workshop.enrolled}/{workshop.capacity}
                        </span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button
                      onClick={() => {
                        setSelectedWorkshop(workshop);
                        router.push(`?workshop=${workshop.id}`);
                      }}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isDark 
                          ? 'bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30' 
                          : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                      }`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-4xl mx-auto p-4">
            <div className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="relative h-64">
                <Image
                  src={placeholderImages.workshop.focus}
                  alt={selectedWorkshop.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {selectedWorkshop.title}
                  </h2>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedWorkshop(null);
                    router.push('');
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-lg ${
                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedWorkshop.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                      Workshop Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Instructor</span>
                        <span className={`${isDark ? 'text-white' : 'text-black'}`}>{selectedWorkshop.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Schedule</span>
                        <span className={`${isDark ? 'text-white' : 'text-black'}`}>{selectedWorkshop.schedule}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Duration</span>
                        <span className={`${isDark ? 'text-white' : 'text-black'}`}>{selectedWorkshop.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Capacity</span>
                        <span className={`${isDark ? 'text-white' : 'text-black'}`}>
                          {selectedWorkshop.enrolled}/{selectedWorkshop.capacity}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {selectedWorkshop.outcomes.map((outcome, index) => (
                        <li key={index} className={`flex items-center gap-2 text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                    Course Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className={`font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Cost</span>
                          <span className={`${isDark ? 'text-white' : 'text-black'}`}>{selectedWorkshop.cost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Materials</span>
                          <span className={`${isDark ? 'text-white' : 'text-black'}`}>
                            {selectedWorkshop.materials === 'included' ? 'Included' : 
                             selectedWorkshop.materials === 'partial' ? 'Partially Included' : 'Not Included'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Age</span>
                          <span className={`${isDark ? 'text-white' : 'text-black'}`}>{selectedWorkshop.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</span>
                          <span className={`${isDark ? 'text-white' : 'text-black'}`}>
                            {selectedWorkshop.location === 'in-person' ? 'In-Person' : 
                             selectedWorkshop.location === 'virtual' ? 'Virtual' : 'Hybrid'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedWorkshop.languages.map((language, index) => (
                          <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {language}
                          </span>
                        ))}
                      </div>
                      <h4 className={`font-medium mb-2 mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Dates</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {selectedWorkshop.dates}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-4">
                  <button className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    isDark 
                      ? 'bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30' 
                      : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                  } transition-colors`}>
                    <BookOpen className="w-5 h-5" />
                    Enroll Now
                  </button>
                  <button className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    isDark 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}>
                    <Calendar className="w-5 h-5" />
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}