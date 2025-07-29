"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Lightbulb
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';

interface TimelineItem {
  quarter: string;
  period: string;
  title: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  icon: any;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    quarter: "Q3 2025",
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
    color: '#A4FF4E'
  },
  {
    quarter: "Q4 2025", 
    period: "Nov–Jan",
    title: "Equipment & Training",
    description: "Installing advanced equipment and beginning training programs for resident artists.",
    milestones: [
      "Phase-2 XR/Imaging equipment setup",
      "Staff training on new equipment",
      "First resident artist workshops",
      "Prototype development begins"
    ],
    status: 'upcoming',
    icon: Cpu,
    color: '#3B82F6'
  },
  {
    quarter: "Q1 2026",
    period: "Feb–Apr", 
    title: "Program Launch",
    description: "Full program launch with comprehensive workshops and public events.",
    milestones: [
      "Phase-3 presentation equipment",
      "Public workshop series launch",
      "Livestream events begin",
      "Community outreach programs"
    ],
    status: 'upcoming',
    icon: Video,
    color: '#8B5CF6'
  },
  {
    quarter: "Q2 2026",
    period: "May–Jul",
    title: "Expansion & Impact",
    description: "Scaling programs and measuring impact with expanded community engagement.",
    milestones: [
      "Advanced workshop series",
      "Artist residency programs",
      "Impact assessment & metrics",
      "Community showcase events"
    ],
    status: 'upcoming',
    icon: Target,
    color: '#EC4899'
  }
];

export default function OoliteRoadmapPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuarter, setActiveQuarter] = useState<string>('Q3 2025');

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavOolite />

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
                ? 'bg-[#A4FF4E]/10 border border-[#A4FF4E]/30' 
                : 'bg-[#22C55E]/20 border border-[#22C55E]/50'
            } mb-6`}>
              <Calendar className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>
                Project Timeline
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Implementation Roadmap
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#A4FF4E]/80' : 'text-[#22C55E]/80'}`}>
              12-month timeline for establishing the Oolite Digital Arts Lab
            </p>
          </motion.div>
        </div>
      </section>

      {/* Linear Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                {timelineData.map((item) => (
                  <button
                    key={item.quarter}
                    onClick={() => setActiveQuarter(item.quarter)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeQuarter === item.quarter
                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.quarter}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 ${
                    activeQuarter === item.quarter ? 'block' : 'hidden'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900"
                    style={{ backgroundColor: item.color, transform: 'translateX(-50%)' }}
                  ></div>

                  {/* Content Card */}
                  <div className="ml-16">
                    <div className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700`}>
                      <div className="flex items-start gap-6">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <item.icon className="w-8 h-8" style={{ color: item.color }} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700">
                              {item.period}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {item.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-lg mb-3">Key Milestones:</h4>
                            {item.milestones.map((milestone, milestoneIndex) => (
                              <div key={milestoneIndex} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700 dark:text-gray-300">{milestone}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16"
            >
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700`}>
                <h3 className="text-2xl font-bold mb-6">Project Progress</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {timelineData.map((item, index) => (
                    <div key={item.quarter} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                           style={{ backgroundColor: `${item.color}20` }}>
                        <item.icon className="w-8 h-8" style={{ color: item.color }} />
                      </div>
                      <h4 className="font-semibold mb-2">{item.quarter}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.period}</p>
                      <div className="mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : item.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                        }`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 