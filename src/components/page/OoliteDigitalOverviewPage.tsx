"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Target, 
  Calendar, 
  DollarSign, 
  BarChart3, 
  Users, 
  Monitor, 
  Cpu, 
  Camera, 
  Printer, 
  Video, 
  Wifi, 
  Database,
  TrendingUp,
  CheckCircle,
  Clock,
  MapPin,
  Globe,
  Zap,
  BookOpen,
  Award,
  Rocket,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Map
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';
import Link from 'next/link';

interface TimelineItem {
  quarter: string;
  period: string;
  flagshipMoment: string;
  date: string;
  image: string;
  description: string;
}

export default function OoliteDigitalOverviewPage() {
  const { theme } = useTheme();
  const [hoveredTimeline, setHoveredTimeline] = useState<string | null>(null);

  const timelineItems: TimelineItem[] = [
    {
      quarter: "Q3 2025",
      period: "Aug–Oct",
      flagshipMoment: "Open-Lab Launch",
      date: "Oct 1",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-1_y8rgsz.png",
      description: "Foundation phase with room renovation and core equipment installation. Establishing the digital arts lab infrastructure and conducting initial needs assessment with resident artists."
    },
    {
      quarter: "Q4 2025",
      period: "Nov–Dec",
      flagshipMoment: "Holiday Open House",
      date: "Dec 12",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-2_ctm1ft.png",
      description: "Launch of educational programming with introductory workshops and artist talks. Staff training sessions and community engagement through the holiday open house event."
    },
    {
      quarter: "Q1 2026",
      period: "Jan–Mar",
      flagshipMoment: "Showcase Opening",
      date: "Mar 7",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-3_qkdzir.png",
      description: "Advanced workshops focusing on AI and real-time 3D technologies. Installation and opening of the mid-project showcase featuring resident artist work."
    },
    {
      quarter: "Q2 2026",
      period: "Apr–Jun",
      flagshipMoment: "Public Digital Exhibition",
      date: "Jun 13",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030298/own-your-digital-presence/website-building-day-1-virtual-session_qk0esh.jpg",
      description: "Remix workshops exploring creative reuse and automation. Staff training in automation tools and preparation of the comprehensive catalog for the public digital exhibition."
    },
    {
      quarter: "Q3 2026",
      period: "Jul–Aug",
      flagshipMoment: "Year-1 Report-Out",
      date: "Aug 28",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030367/own-your-digital-presence/website-building-day-4-online-presentations_tncppm.jpg",
      description: "Comprehensive evaluation of the first year, documentation of standard operating procedures, and hardware maintenance. Final report-out and planning for year two."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      {/* Navigation */}
      <TechNonprofitNavOolite />
      
      <div className="max-w-7xl mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Oolite Digital Arts Lab
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              theme === 'dark' ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
            }`}>
              <DollarSign className="h-5 w-5" />
              <span className="font-semibold">$80k Capital Budget</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              theme === 'dark' ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'
            }`}>
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">12-Month Timeline</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              theme === 'dark' ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
            }`}>
              <Target className="h-5 w-5" />
              <span className="font-semibold">4 KPI Pillars</span>
            </div>
          </div>
        </motion.div>

        {/* Primary Objective - Manifesto Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30' : 'bg-gradient-to-r from-purple-50 to-blue-50'
          } rounded-2xl p-12 border ${
            theme === 'dark' ? 'border-purple-500/20' : 'border-purple-200'
          }`}>
            <div className="text-center max-w-5xl mx-auto">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Stand-up a future-forward Digital Arts Lab
              </h2>
              <p className={`text-xl md:text-2xl leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Delivering visible impact between <span className="font-bold text-purple-400">Aug 2025 → Aug 2026</span>—serving resident artists, staff, and the wider Miami art-tech community—while laying the rails for the Little River campus.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, label: "Capital Budget", value: "$80k", color: "green" },
              { icon: Calendar, label: "Timeline", value: "12 Months", color: "blue" },
              { icon: Users, label: "Target Users", value: "30+ Artists", color: "purple" },
              { icon: Target, label: "KPI Pillars", value: "4 Metrics", color: "orange" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
                } border ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                } text-center`}
              >
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'purple' ? 'text-purple-500' : 'text-orange-500'
                }`} />
                <div className={`text-3xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{stat.value}</div>
                <div className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-xl p-6 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Calendar className="h-8 w-8 text-purple-500" />
                12-Month Timeline Overview
              </h2>
              <Link
                href="/workshop/tech-nonprofit/oolite/roadmap"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  theme === 'dark' ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                } transition-colors`}
              >
                View Full Roadmap
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-xl ${
                    theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
                  }`}
                  onMouseEnter={() => setHoveredTimeline(item.quarter)}
                  onMouseLeave={() => setHoveredTimeline(null)}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Column */}
                    <div className="relative h-48 md:h-full min-h-[200px]">
                      <Image
                        src={item.image}
                        alt={`${item.quarter} - ${item.flagshipMoment}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${
                        theme === 'dark' 
                          ? 'from-black/60 via-black/40 to-transparent' 
                          : 'from-white/60 via-white/40 to-transparent'
                      }`} />
                      
                      {/* Quarter Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${
                        theme === 'dark' ? 'bg-purple-500/90 text-white' : 'bg-purple-500/90 text-white'
                      }`}>
                        {item.quarter} ({item.period})
                      </div>
                      
                      {/* Date Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                        theme === 'dark' ? 'bg-blue-500/90 text-white' : 'bg-blue-500/90 text-white'
                      }`}>
                        {item.date}
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className={`text-xl font-bold mb-3 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.flagshipMoment}
                      </h3>
                      
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay with Additional Info */}
                  {hoveredTimeline === item.quarter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`absolute inset-0 flex items-center justify-center ${
                        theme === 'dark' ? 'bg-black/80' : 'bg-white/90'
                      }`}
                    >
                      <div className="text-center p-6">
                        <h4 className={`text-lg font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.flagshipMoment}
                        </h4>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30' : 'bg-gradient-to-r from-purple-50 to-blue-50'
          } rounded-2xl p-12 border ${
            theme === 'dark' ? 'border-purple-500/20' : 'border-purple-200'
          }`}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to dive deeper?
              </h2>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Explore the detailed budget breakdown, comprehensive roadmap, and workshop schedules.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/workshop/tech-nonprofit/oolite/budget"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-green-500/20 text-green-300 hover:bg-green-500/30' : 'bg-green-100 text-green-700 hover:bg-green-200'
                  } transition-colors`}
                >
                  <DollarSign className="h-5 w-5" />
                  View Budget Details
                </Link>
                <Link
                  href="/workshop/tech-nonprofit/oolite/roadmap"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  } transition-colors`}
                >
                  <Map className="h-5 w-5" />
                  View Full Roadmap
                </Link>
                <Link
                  href="/workshop/tech-nonprofit/oolite/workshops"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  } transition-colors`}
                >
                  <BookOpen className="h-5 w-5" />
                  View Workshops
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 