"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MuxPlayer from "@mux/mux-player-react";
import { 
  Target, 
  Calendar, 
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
  Map,
  Building2,
  GraduationCap,
  Palette,
  Brain,
  Eye
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';
import { ooliteTranslations } from '@/translations/oolite/index';
import Link from 'next/link';

// Magic UI Components
import { SparklesText } from "@/components/magicui/sparkles-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import { HyperText } from "@/components/magicui/hyper-text";

interface TimelineItem {
  quarter: string;
  period: string;
  flagshipMoment: string;
  date: string;
  image: string;
  description: string;
  color: string;
}

export default function OoliteDigitalOverviewPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [hoveredTimeline, setHoveredTimeline] = useState<string | null>(null);

  // Get translations for current language
  const t = ooliteTranslations[language];

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

  // Debug: Log current language and translation object
  console.log('Current language:', language);
  console.log('Translation object:', t);
  console.log('Hero title:', t?.heroTitle);

  const timelineItems: TimelineItem[] = [
    {
      quarter: t.q1,
      period: t.augOct2025,
      flagshipMoment: t.foundationSetup,
      date: t.aug2025,
      image: placeholderImages.schedule.day1,
      description: t.foundationSetupDesc,
      color: "#00FFFF"
    },
    {
      quarter: t.q2, 
      period: t.novJan2026,
      flagshipMoment: t.launchCommunity,
      date: t.nov2025,
      image: placeholderImages.schedule.day2,
      description: t.launchCommunityDesc,
      color: "#0080FF"
    },
    {
      quarter: t.q3,
      period: t.febApr2026, 
      flagshipMoment: t.advancedProgramming,
      date: t.feb2026,
      image: placeholderImages.workshop.focus,
      description: t.advancedProgrammingDesc,
      color: "#8000FF"
    },
    {
      quarter: t.q4,
      period: t.mayJul2026,
      flagshipMoment: t.optimizationScale,
      date: t.may2026, 
      image: placeholderImages.schedule.day4,
      description: t.optimizationScaleDesc,
      color: "#FF0080"
    }
  ];

  const targetUsers = [
    {
      group: t.residentArtists,
      count: `26 ${t.artists}`,
      description: t.professionalArtists,
      icon: Palette,
      color: "purple",
      includes: [t.cinemaResidents, t.studioResidents, t.terranovaResidents],
      programs: [t.digitalArtWorkshops, t.equipmentAccess, t.professionalDevelopment]
    },
    {
      group: t.communityArtists,
      count: `100+ ${t.participants}`,
      description: t.localArtists,
      icon: Users,
      color: "blue",
      includes: [t.artClasses, t.workshops, t.publicPrograms],
      programs: [t.openLabHours, t.communityWorkshops, t.exhibitionOpportunities]
    },
    {
      group: t.k12Youth,
      count: `50+ ${t.students}`,
      description: t.educationalPrograms,
      icon: GraduationCap,
      color: "green",
      includes: [t.schoolPrograms, t.summerCamps, t.youthWorkshops],
      programs: [t.digitalLiteracy, t.creativeTechnology, t.portfolioDevelopment]
    },
    {
      group: t.staffEducators,
      count: `15+ ${t.staff}`,
      description: t.ooliteStaff,
      icon: Brain,
      color: "orange",
      includes: [t.professionalDevelopment, t.digitalSkillsTraining, t.programIntegration],
      programs: [t.staffTraining, t.curriculumDevelopment, t.technologyIntegration]
    }
  ];

  const handleQuarterClick = (quarter: string) => {
    // Navigate to roadmap page with quarter parameter
    window.location.href = `/tech-nonprofit/oolite/roadmap?quarter=${quarter}`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-black'
    }`}>
      
      {/* Navigation */}
      <TechNonprofitNavOolite />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <MuxPlayer
            playbackId="CH6vKfURI3mrhIGC3TZ1dCSWNYDxDm7myS84L9F2qRU"
            streamType="on-demand"
            autoPlay
            loop
            muted
            className="absolute inset-0 h-full w-full object-cover"
            style={{ pointerEvents: 'none' }}
          />
          {/* Cyan Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-blue-900/20 to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/10 via-transparent to-[#0080FF]/10 z-10 animate-pulse" />
        </div>
        
        {/* Enhanced Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden z-20">
          {/* Static particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFFF] rounded-full animate-ping opacity-30" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#0080FF] rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#8000FF] rounded-full animate-ping opacity-35" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#FF0080] rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
          
          {/* Additional floating elements */}
          <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-gradient-to-r from-[#00FFFF] to-[#0080FF] rounded-full animate-bounce opacity-20" style={{ animationDelay: '0.3s' }} />
          <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-gradient-to-r from-[#8000FF] to-[#FF0080] rounded-full animate-bounce opacity-25" style={{ animationDelay: '1.5s' }} />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/2 left-1/8 w-4 h-4 bg-[#00FFFF] rounded-full opacity-10 animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/8 right-1/2 w-3 h-3 bg-[#0080FF] rounded-full opacity-15 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-30">
          {/* Enhanced Header with Magic UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6">
              <SparklesText className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                {t.heroTitle}
              </SparklesText>
            </h1>
            
            <div className="mb-8">
              <MorphingText
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90"
                texts={[
                  "Transforming digital arts education",
                  "Empowering artists with technology",
                  "Building the future of creative expression",
                  "Connecting communities through art"
                ]}
              />
            </div>
            
            {/* Enhanced Navigation Pills with Cyan Theme */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 128, 255, 0.6)" }}
                className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md border border-[#0080FF]/40 bg-[#0080FF]/20 text-[#0080FF] hover:bg-[#0080FF]/30 hover:border-[#0080FF]/60"
                onClick={() => {
                  if (window.location.pathname === '/tech-nonprofit/oolite') {
                    const element = document.getElementById('timeline');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = '/tech-nonprofit/oolite/roadmap';
                  }
                }}
              >
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">{t.timeline}</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(128, 0, 255, 0.6)" }}
                className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md border border-[#8000FF]/40 bg-[#8000FF]/20 text-[#8000FF] hover:bg-[#8000FF]/30 hover:border-[#8000FF]/60"
                onClick={() => {
                  if (window.location.pathname === '/tech-nonprofit/oolite') {
                    const element = document.getElementById('target-users');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = '/tech-nonprofit/oolite/workshops';
                  }
                }}
              >
                <Users className="h-5 w-5" />
                <span className="font-semibold">{t.targetUsers}</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 128, 0.6)" }}
                className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md border border-[#FF0080]/40 bg-[#FF0080]/20 text-[#FF0080] hover:bg-[#FF0080]/30 hover:border-[#FF0080]/60"
                onClick={() => {
                  if (window.location.pathname === '/tech-nonprofit/oolite') {
                    const element = document.getElementById('impact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = '/tech-nonprofit/oolite/impact-roi';
                  }
                }}
              >
                <Target className="h-5 w-5" />
                <span className="font-semibold">{t.kpiPillars}</span>
              </motion.div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Primary Objective - Enhanced with Cyan Glowing Border Effect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <div className={`relative p-12 rounded-3xl backdrop-blur-sm overflow-hidden ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-[#00FFFF]/30' 
              : 'bg-gradient-to-r from-cyan-100/50 via-blue-100/50 to-purple-100/50 border border-[#00FFFF]/50'
          }`}>
            {/* Animated border gradient */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00FFFF] via-[#0080FF] to-[#8000FF] border-glow gradient-shift ${
              theme === 'dark' ? 'opacity-20' : 'opacity-30'
            }`} />
            <div className={`absolute inset-[2px] rounded-3xl backdrop-blur-sm ${
              theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
            }`} />
            
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              >
                <HyperText 
                  className="bg-gradient-to-r from-[#00FFFF] via-[#0080FF] to-[#8000FF] bg-clip-text text-transparent"
                >
                  {t.primaryObjective}
                </HyperText>
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`relative text-xl md:text-2xl leading-relaxed ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-800/90'
                }`}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 rounded-2xl animate-pulse ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#00FFFF]/10 via-[#0080FF]/10 to-[#8000FF]/10' 
                    : 'bg-gradient-to-r from-[#00FFFF]/20 via-[#0080FF]/20 to-[#8000FF]/20'
                }`} />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-[#FF0080]/5 to-transparent gradient-shift ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-80'
                }`} />
                
                {/* Text content */}
                <div className={`relative z-10 p-6 rounded-2xl backdrop-blur-sm ${
                  theme === 'dark' ? 'bg-black/20' : 'bg-white/40'
                }`}>
                  <p className="text-center leading-relaxed">
                    {t.objectiveDescription}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Quick Stats - Enhanced with Cyan Glow Effects */}
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Calendar, 
                label: "Timeline", 
                value: "12 Months", 
                color: "#0080FF",
                href: "/tech-nonprofit/oolite/roadmap",
                sectionId: "timeline"
              },
              { 
                icon: Users, 
                label: "Target Users", 
                value: "30+ Artists", 
                color: "#8000FF",
                href: "/tech-nonprofit/oolite/workshops",
                sectionId: "target-users"
              },
              { 
                icon: Target, 
                label: "KPI Pillars", 
                value: "4 Metrics", 
                color: "#FF0080",
                href: "/tech-nonprofit/oolite/impact-roi",
                sectionId: "impact"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 30px ${stat.color}40`
                }}
                className={`p-6 rounded-2xl backdrop-blur-sm ${
                  theme === 'dark' ? 'bg-gray-800/30' : 'bg-white/80'
                } border ${
                  theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'
                } text-center cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  theme === 'dark' 
                    ? 'hover:border-gray-600 hover:bg-gray-800/50' 
                    : 'hover:border-gray-300 hover:bg-white/90'
                }`}
                onClick={() => {
                  // Check if we're on the landing page and scroll to section, otherwise navigate
                  if (window.location.pathname === '/tech-nonprofit/oolite') {
                    const element = document.getElementById(stat.sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = stat.href;
                  }
                }}
              >
                <div className="relative mb-4">
                  <stat.icon className={`h-12 w-12 mx-auto transition-transform duration-300 group-hover:scale-110`} style={{ color: stat.color }} />
                  <div className={`absolute inset-0 rounded-full blur-lg opacity-20`} style={{ backgroundColor: stat.color }} />
                </div>
                <div className={`text-3xl font-bold mb-2`} style={{ color: stat.color }}>{stat.value}</div>
                <div className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{stat.label}</div>
                <div className={`mt-2 text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {t.clickToViewDetails}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Target Users Section */}
        <motion.section
          id="target-users"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-xl p-6 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Users className="h-8 w-8" style={{ color: '#8000FF' }} />
                {t.targetUsersTitle}
              </h2>
              <Link
                href="/tech-nonprofit/oolite/workshops"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  theme === 'dark' ? 'bg-[#8000FF]/20 text-[#8000FF] hover:bg-[#8000FF]/30' : 'bg-[#8000FF]/10 text-[#8000FF] hover:bg-[#8000FF]/20'
                } transition-colors`}
              >
                {t.viewWorkshops}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {targetUsers.map((user, index) => {
                // Assign different background images to each user group
                const backgroundImage = index === 0 ? placeholderImages.workshop.focus :
                                       index === 1 ? placeholderImages.schedule.day1 :
                                       index === 2 ? placeholderImages.schedule.day2 :
                                       placeholderImages.schedule.day4;
                
                // Assign cyan theme colors
                const userColors = ['#00FFFF', '#0080FF', '#8000FF', '#FF0080'];
                const userColor = userColors[index];
                
                return (
                <motion.div
                  key={user.group}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
                  } p-6 rounded-xl border ${
                    theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                  } backdrop-blur-sm`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <Image
                      src={backgroundImage}
                      alt={`${user.group} background`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg`} style={{ backgroundColor: `${userColor}20`, color: userColor }}>
                      <user.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {user.group}
                      </h3>
                      <div className={`text-lg font-semibold`} style={{ color: userColor }}>
                        {user.count}
                      </div>
                    </div>
                  </div>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {user.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t.includes}
                      </h4>
                      <ul className="space-y-1">
                        {user.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className={`flex items-center gap-2 text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <CheckCircle className="w-4 h-4" style={{ color: userColor }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t.programs}
                      </h4>
                      <ul className="space-y-1">
                        {user.programs.map((program, programIndex) => (
                          <li key={programIndex} className={`flex items-center gap-2 text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: userColor }} />
                            {program}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  </div>
                </motion.div>
              )})}
            </div>
          </div>
        </motion.section>

        {/* Compact Timeline Overview */}
        <motion.section
          id="timeline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-xl p-6 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          } backdrop-blur-sm`}>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Calendar className="h-8 w-8" style={{ color: '#0080FF' }} />
                {t.timelineTitle}
              </h2>
              <Link
                href="/tech-nonprofit/oolite/roadmap"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  theme === 'dark' ? 'bg-[#0080FF]/20 text-[#0080FF] hover:bg-[#0080FF]/30' : 'bg-[#0080FF]/10 text-[#0080FF] hover:bg-[#0080FF]/20'
                } transition-colors`}
              >
                {t.viewFullRoadmap}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
                  } border ${
                    theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                  }`}
                  onMouseEnter={() => setHoveredTimeline(item.quarter)}
                  onMouseLeave={() => setHoveredTimeline(null)}
                  onClick={() => handleQuarterClick(item.quarter)}
                >
                  {/* Background Image */}
                  <div className="relative h-32">
                    <Image
                      src={item.image}
                      alt={`${item.quarter} - ${item.flagshipMoment}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Quarter Badge */}
                    <div 
                      className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.quarter}
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-[#0080FF]/90 text-white">
                      {item.date}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className={`text-sm font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.flagshipMoment}
                    </h3>
                    
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {item.period}
                      </span>
                      <div className={`text-xs px-2 py-1 rounded`} style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                        {t.clickToExplore}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  {hoveredTimeline === item.quarter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/80"
                    >
                      <div className="text-center p-4">
                        <h4 className={`text-sm font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-white'
                        }`}>
                          {item.flagshipMoment}
                        </h4>
                        <p className={`text-xs ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
                        }`}>
                          Click to view detailed roadmap
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          id="impact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50'
          } rounded-2xl p-12 border ${
            theme === 'dark' ? 'border-[#00FFFF]/20' : 'border-[#00FFFF]/20'
          } backdrop-blur-sm`}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.impactTitle}
              </h2>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t.impactSubtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { metric: "3x", label: t.impactMultiplier, description: t.impactDescription },
                  { metric: "70%", label: t.localInvestment, description: t.localDescription },
                  { metric: "$60K", label: t.annualRevenue, description: t.revenueDescription },
                  { metric: "30+", label: t.artistsServed, description: t.artistsServedDescription }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`p-4 rounded-xl ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'
                    } border ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    } backdrop-blur-sm`}
                  >
                    <div className={`text-2xl font-bold mb-2`} style={{ color: '#00FFFF' }}>{item.metric}</div>
                    <div className={`font-medium mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{item.label}</div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{item.description}</div>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/tech-nonprofit/oolite/impact-roi"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                  theme === 'dark' ? 'bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30' : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                } transition-colors`}
              >
                <Target className="h-5 w-5" />
                {t.viewDetailedImpactAnalysis}
              </Link>
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
            theme === 'dark' ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50'
          } rounded-2xl p-12 border ${
            theme === 'dark' ? 'border-[#00FFFF]/20' : 'border-[#00FFFF]/20'
          } backdrop-blur-sm`}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.readyToDiveDeeper}
              </h2>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t.exploreDetails}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/tech-nonprofit/oolite/roadmap"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-[#0080FF]/20 text-[#0080FF] hover:bg-[#0080FF]/30' : 'bg-[#0080FF]/10 text-[#0080FF] hover:bg-[#0080FF]/20'
                  } transition-colors`}
                >
                  <Map className="h-5 w-5" />
                  {t.viewFullRoadmap}
                </Link>
                <Link
                  href="/tech-nonprofit/oolite/workshops"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-[#8000FF]/20 text-[#8000FF] hover:bg-[#8000FF]/30' : 'bg-[#8000FF]/10 text-[#8000FF] hover:bg-[#8000FF]/20'
                  } transition-colors`}
                >
                  <BookOpen className="h-5 w-5" />
                  {t.viewWorkshops}
                </Link>
                <Link
                  href="/tech-nonprofit/oolite/lab"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark' ? 'bg-[#FF0080]/20 text-[#FF0080] hover:bg-[#FF0080]/30' : 'bg-[#FF0080]/10 text-[#FF0080] hover:bg-[#FF0080]/20'
                  } transition-colors`}
                >
                  <Building2 className="h-5 w-5" />
                  {t.visitTheLab}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      
      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.6); }
        }
        
        @keyframes borderGlow {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.02);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .glow-effect {
          animation: glow 3s ease-in-out infinite;
        }
        
        .border-glow {
          animation: borderGlow 4s ease-in-out infinite;
        }
        
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 