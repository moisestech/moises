"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Sphere, Cylinder, useTexture, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight,
  Building2,
  Cpu,
  Camera,
  Video,
  Monitor,
  Rocket,
  Lightbulb,
  DollarSign,
  ChevronDown,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';
import { ooliteTranslations } from '@/translations/oolite/index';

// Timeline Progress Nodes Component
function TimelineProgressNodes() {
  const nodesRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (nodesRef.current) {
      // Gentle floating animation
      nodesRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.5;
    }
  });

  const colors = {
    cyan: new THREE.Color("#00FFFF"),
    blue: new THREE.Color("#0080FF"),
    purple: new THREE.Color("#8000FF"),
    pink: new THREE.Color("#FF0080"),
  };

  return (
    <group ref={nodesRef}>
      {/* Timeline nodes representing progress */}
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[i * 3 - 12, 0, 0]}>
          {/* Main node */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color={Object.values(colors)[i % 4]}
              emissive={Object.values(colors)[i % 4]}
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          {/* Connection lines */}
          {i < 7 && (
            <mesh position={[1.5, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 3]} />
              <meshStandardMaterial
                color={Object.values(colors)[i % 4]}
                emissive={Object.values(colors)[i % 4]}
                emissiveIntensity={0.2}
                transparent
                opacity={0.6}
              />
            </mesh>
          )}
          
          {/* Floating particles around nodes */}
          {Array.from({ length: 5 }, (_, j) => (
            <mesh
              key={j}
              position={[
                Math.sin(j * 1.2) * 1.5,
                Math.cos(j * 1.2) * 1.5,
                Math.sin(j * 0.8) * 0.5
              ]}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial
                color={Object.values(colors)[i % 4]}
                emissive={Object.values(colors)[i % 4]}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Floating Calendar Elements
function FloatingCalendarElements() {
  const calendarRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (calendarRef.current) {
      // Slow rotation and floating
      calendarRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      calendarRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3;
    }
  });

  return (
    <group ref={calendarRef}>
      {Array.from({ length: 6 }, (_, i) => (
        <group key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 + 5,
          (Math.random() - 0.5) * 20 - 5
        ]}>
          {/* Calendar page */}
          <mesh>
            <boxGeometry args={[1, 1.5, 0.1]} />
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.1}
            />
          </mesh>
          
          {/* Calendar rings */}
          <mesh position={[0, 0, 0.06]}>
            <ringGeometry args={[0.2, 0.3, 8]} />
            <meshStandardMaterial
              color="#00FFFF"
              emissive="#00FFFF"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Roadmap Background
function RoadmapBackground() {
  const { theme } = useTheme();
  
  return (
    <>
      {/* Subtle stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={2000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />
      
      {/* Timeline progress nodes */}
      <TimelineProgressNodes />
      
      {/* Floating calendar elements */}
      <FloatingCalendarElements />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#00FFFF" />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#0080FF" />
      
      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

interface TimelineItem {
  quarter: string;
  period: string;
  title: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  icon: any;
  color: string;
  monthlyBreakdown: MonthlyBreakdown[];
}

interface MonthlyBreakdown {
  month: string;
  activities: string[];
  milestones: string[];
  budget: string;
}

export default function OoliteRoadmapPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === 'dark';
  const [activeQuarter, setActiveQuarter] = useState<string>('all');
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set());

  // Get translations for current language
  const t = ooliteTranslations[language];

  // Create timeline data with translations
  const timelineData: TimelineItem[] = [
    {
      quarter: "Q1",
      period: "Aug–Oct",
      title: "Foundation Phase",
      description: "Establishing the digital arts lab infrastructure and conducting initial needs assessment with resident artists.",
      milestones: [
        "Phase-0 room refresh (Aug)",
        "Phase-1 core gear arrival (Sept)", 
        "Needs-assessment labs",
        "Open-Lab Launch (Oct 1)"
      ],
      status: 'upcoming',
      icon: Building2,
      color: '#00FFFF',
      monthlyBreakdown: [
        {
          month: "August 2025",
          activities: [
            "Hardware procurement and delivery",
            "Software development kickoff", 
            "Staff hiring and onboarding",
            "Community partner identification"
          ],
          milestones: ["Lab space secured", "Core team assembled"],
          budget: "$25K"
        },
        {
          month: "September 2025", 
          activities: [
            "Equipment installation and testing",
            "Software development phase 1",
            "Staff training programs",
            "Community outreach initiatives"
          ],
          milestones: ["Equipment operational", "Software v1.0 complete"],
          budget: "$20K"
        },
        {
          month: "October 2025",
          activities: [
            "System integration and testing",
            "Staff training completion",
            "Community partnership launch",
            "Open lab preparation and soft launch"
          ],
          milestones: ["Lab fully operational", "Open lab launch"],
          budget: "$15K"
        }
      ]
    },
    {
      quarter: "Q2",
      period: "Nov–Jan",
      title: "Launch Phase",
      description: "Launching the digital arts lab with initial programming and community engagement initiatives.",
      milestones: [
        "Open-Lab Launch (Nov)",
        "First workshop series (Dec)",
        "Community partnerships established",
        "Initial impact assessment"
      ],
      status: 'upcoming',
      icon: Rocket,
      color: '#0080FF',
      monthlyBreakdown: [
        {
          month: "November 2025",
          activities: [
            "Open lab grand opening",
            "First workshop launch",
            "Community outreach and marketing",
            "Partnership development"
          ],
          milestones: ["Lab open to public", "First workshop completed"],
          budget: "$10K"
        },
        {
          month: "December 2025",
          activities: [
            "Holiday programming and events",
            "Workshop series expansion",
            "Community feedback collection",
            "Partnership strengthening"
          ],
          milestones: ["Holiday events completed", "Workshop series launched"],
          budget: "$8K"
        },
        {
          month: "January 2026",
          activities: [
            "New year programming launch",
            "Community assessment and feedback",
            "Partnership evaluation",
            "Program optimization based on feedback"
          ],
          milestones: ["New year programs launched", "Community assessment complete"],
          budget: "$12K"
        }
      ]
    },
    {
      quarter: "Q3",
      period: "Feb–Apr",
      title: "Growth Phase",
      description: "Expanding programming and establishing advanced workshops and community partnerships.",
      milestones: [
        "Advanced workshops launch (Feb)",
        "Community partnerships expansion (Mar)",
        "Impact assessment and optimization (Apr)",
        "Program scaling and expansion"
      ],
      status: 'upcoming',
      icon: TrendingUp,
      color: '#8000FF',
      monthlyBreakdown: [
        {
          month: "February 2026",
          activities: [
            "Advanced workshop launch",
            "Specialized programs development",
            "Community partnership expansion",
            "Impact measurement implementation"
          ],
          milestones: ["Advanced workshops launched", "Specialized programs active"],
          budget: "$15K"
        },
        {
          month: "March 2026",
          activities: [
            "Spring programming and events",
            "Partnership strengthening",
            "Community engagement initiatives",
            "Program evaluation and feedback"
          ],
          milestones: ["Spring programs launched", "Partnerships strengthened"],
          budget: "$12K"
        },
        {
          month: "April 2026",
          activities: [
            "Impact assessment and analysis",
            "Program optimization",
            "Community feedback integration",
            "Future planning and strategy"
          ],
          milestones: ["Impact assessment complete", "Program optimized"],
          budget: "$10K"
        }
      ]
    },
    {
      quarter: "Q4",
      period: "May–Jul",
      title: "Optimization Phase",
      description: "Optimizing operations, scaling successful programs, and preparing for long-term sustainability.",
      milestones: [
        "Program optimization and scaling (May)",
        "Sustainability planning (Jun)",
        "Annual assessment and planning (Jul)",
        "Future roadmap development"
      ],
      status: 'upcoming',
      icon: Target,
      color: '#FF0080',
      monthlyBreakdown: [
        {
          month: "May 2026",
          activities: [
            "Program scaling and expansion",
            "Optimization implementation",
            "Community impact measurement",
            "Partnership evaluation and renewal"
          ],
          milestones: ["Programs scaled", "Optimization complete"],
          budget: "$12K"
        },
        {
          month: "June 2026",
          activities: [
            "Sustainability planning",
            "Long-term strategy development",
            "Community engagement optimization",
            "Partnership strengthening"
          ],
          milestones: ["Sustainability plan complete", "Long-term strategy developed"],
          budget: "$8K"
        },
        {
          month: "July 2026",
          activities: [
            "Annual assessment and evaluation",
            "Future planning and roadmap",
            "Community feedback integration",
            "Next year preparation"
          ],
          milestones: ["Annual assessment complete", "Future roadmap developed"],
          budget: "$10K"
        }
      ]
    }
  ];

  // Handle URL parameters for quarter navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const quarter = urlParams.get('quarter');
      if (quarter) {
        setActiveQuarter(quarter);
        // Scroll to the timeline section after a short delay
        setTimeout(() => {
          const timelineSection = document.getElementById('timeline-section');
          if (timelineSection) {
            timelineSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, []);

  const filteredTimeline = activeQuarter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.quarter === activeQuarter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'upcoming':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const toggleMonthExpansion = (monthKey: string) => {
    const newExpanded = new Set(expandedMonths);
    if (newExpanded.has(monthKey)) {
      newExpanded.delete(monthKey);
    } else {
      newExpanded.add(monthKey);
    }
    setExpandedMonths(newExpanded);
  };

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavOolite />

      {/* Roadmap Background */}
      <div className="fixed inset-0 z-0 opacity-25">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <RoadmapBackground />
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
              <Calendar className={`w-4 h-4 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`}>
                Project Roadmap
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Digital Arts Lab Roadmap
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#00FFFF]/80' : 'text-[#0080FF]/80]'}`}>
              A comprehensive 12-month timeline for establishing and scaling the Digital Arts Lab
            </p>
          </motion.div>

          {/* Roadmap Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Total Quarters", value: "4", icon: Calendar, color: "#00FFFF" },
              { label: "Key Milestones", value: "16", icon: Target, color: "#0080FF" },
              { label: "Total Budget", value: "$120K", icon: DollarSign, color: "#8000FF" },
              { label: "Timeline", value: "12 Months", icon: Clock, color: "#FF0080" }
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

      {/* Quarter Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 relative z-10 bg-white/95 dark:bg-black/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveQuarter('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeQuarter === 'all'
                  ? isDark 
                    ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                    : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                  : isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-5 h-5" />
              All Quarters
            </button>
            {timelineData.map((quarter) => {
              const Icon = quarter.icon;
              return (
                <button
                  key={quarter.quarter}
                  onClick={() => setActiveQuarter(quarter.quarter)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeQuarter === quarter.quarter
                      ? isDark 
                        ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                        : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                      : isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" style={{ color: quarter.color }} />
                  {quarter.quarter} - {quarter.period}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative z-10 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {filteredTimeline.map((quarter, index) => {
              const Icon = quarter.icon;
              return (
                <motion.div
                  key={quarter.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl overflow-hidden backdrop-blur-sm border ${
                    isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                  }`}
                >
                  {/* Quarter Header */}
                  <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${quarter.color}20` }}>
                        <Icon className="w-8 h-8" style={{ color: quarter.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                            {quarter.quarter} - {quarter.period}
                          </h2>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(quarter.status)}`}>
                            {quarter.status}
                          </span>
                        </div>
                        <h3 className={`text-xl font-semibold mb-2`} style={{ color: quarter.color }}>
                          {quarter.title}
                        </h3>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {quarter.description}
                        </p>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {quarter.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                        }`}>
                          <CheckCircle className="w-5 h-5" style={{ color: quarter.color }} />
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {milestone}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Breakdown */}
                  <div className="p-8">
                    <h4 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                      Monthly Breakdown
                    </h4>
                    <div className="space-y-4">
                      {quarter.monthlyBreakdown.map((month, monthIndex) => {
                        const monthKey = `${quarter.quarter}-${monthIndex}`;
                        const isExpanded = expandedMonths.has(monthKey);
                        
                        return (
                          <div key={monthIndex} className={`rounded-lg border ${
                            isDark ? 'bg-gray-700/30 border-gray-600' : 'bg-gray-50/50 border-gray-200'
                          }`}>
                            <button
                              onClick={() => toggleMonthExpansion(monthKey)}
                              className={`w-full p-4 flex items-center justify-between ${
                                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'
                              } transition-colors`}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${quarter.color}20` }}>
                                  <Calendar className="w-5 h-5" style={{ color: quarter.color }} />
                                </div>
                                <div className="text-left">
                                  <h5 className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                                    {month.month}
                                  </h5>
                                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Budget: {month.budget}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium`} style={{ backgroundColor: `${quarter.color}20`, color: quarter.color }}>
                                  {month.milestones.length} milestones
                                </span>
                                <ChevronDown 
                                  className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                                  style={{ color: quarter.color }}
                                />
                              </div>
                            </button>
                            
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 pb-4"
                              >
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <h6 className={`font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                      Activities
                                    </h6>
                                    <ul className="space-y-2">
                                      {month.activities.map((activity, activityIndex) => (
                                        <li key={activityIndex} className={`flex items-start gap-2 text-sm ${
                                          isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                          <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: quarter.color }} />
                                          {activity}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className={`font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                      Milestones
                                    </h6>
                                    <ul className="space-y-2">
                                      {month.milestones.map((milestone, milestoneIndex) => (
                                        <li key={milestoneIndex} className={`flex items-center gap-2 text-sm ${
                                          isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                          <CheckCircle className="w-4 h-4" style={{ color: quarter.color }} />
                                          {milestone}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 