'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import { BackToOverview } from '@/components/shared/BackToOverview';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import {
  ChevronLeft,
  Map,
  Users,
  Target,
  Laptop,
  Sparkles,
  Brain,
  Lightbulb,
  Flag,
  Clock,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Calendar,
  Tv,
  Code,
  GraduationCap,
  Zap,
  Building2,
  BarChart3,
  TrendingUp,
  Eye,
  GitBranch,
  Award,
  PlayCircle,
  Monitor,
  Wifi,
  HardDrive,
  FileText
} from 'lucide-react';
import { TimelineSection } from '@/components/knight-foundation/proposal/TimelineSection';
import { TimelineVertical } from '@/components/proposal/TimelineVertical';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Quarterly roadmap data based on the Knight Foundation grant
// Total budget: $24,950 distributed across 4 quarters
const quarterlyRoadmap = [
  {
    quarter: "Q4 2025",
    subtitle: "Oct – Dec '25 · Build \u0026 Stage",
    phase: "Build \u0026 Stage",
    icon: HardDrive,
    primarySpend: "$9,500",
    cumulativePercent: "38%",
    deliverables: [
      {
        title: "Sign MOUs with Bakehouse \u0026 Locust Projects",
        icon: FileText,
        category: "Partnerships",
        status: "Agreement Finalization",
        month: "Oct '25 (M1)"
      },
      {
        title: "Order 2 Smart Signs + 12 Pi learning kits",
        icon: Monitor,
        category: "Hardware",
        status: "Hardware Procurement",
        month: "Oct '25 (M1)"
      },
      {
        title: "Create Supabase project and GitHub repo skeleton",
        icon: GitBranch,
        category: "Infrastructure",
        status: "Cloud Setup",
        month: "Oct '25 (M1)"
      },
      {
        title: "Skin UI (EN/ES) and deploy Web-App MVP to Vercel",
        icon: Code,
        category: "Development",
        status: "UI Development",
        month: "Nov '25 (M2)"
      },
      {
        title: "PostHog + Looker Studio wired to demo data",
        icon: BarChart3,
        category: "Analytics",
        status: "Metrics Setup",
        month: "Nov '25 (M2)"
      },
      {
        title: "Draft Micro-Course #1 outline",
        icon: PlayCircle,
        category: "Content",
        status: "Course Planning",
        month: "Nov '25 (M2)"
      },
      {
        title: "Push open-core repo public",
        icon: GitBranch,
        category: "Development",
        status: "Code Release",
        month: "Dec '25 (M3)"
      },
      {
        title: "Film \u0026 edit Micro-Course #1: Web-Design for Smart Signs",
        icon: PlayCircle,
        category: "Content",
        status: "Course Creation",
        month: "Dec '25 (M3)"
      }
    ],
    budgetBreakdown: [
      { item: "Hardware \u0026 Materials", amount: "$6,900" },
      { item: "Program Salaries (2.6k)", amount: "$2,600" }
    ]
  },
  {
    quarter: "Q1 2026",
    subtitle: "Jan – Mar '26 · Deploy",
    phase: "Deploy",
    icon: Building2,
    primarySpend: "$5,950",
    cumulativePercent: "66%",
    deliverables: [
      {
        title: "Install Smart Sign #1 in Bakehouse lobby",
        icon: Monitor,
        category: "Installation",
        status: "Hardware Deployment",
        month: "Jan '26 (M4)"
      },
      {
        title: "Assemble 6 Pi kits for in-house beta",
        icon: Code,
        category: "Development",
        status: "Beta Setup",
        month: "Jan '26 (M4)"
      },
      {
        title: "Internal beta \u0026 bug-fix sprint",
        icon: Code,
        category: "Development",
        status: "Beta Testing",
        month: "Jan '26 (M4)"
      },
      {
        title: "Record Micro-Course #2 (Ethical AI Agents)",
        icon: PlayCircle,
        category: "Content",
        status: "Course Creation",
        month: "Feb '26 (M5)"
      },
      {
        title: "Add QR flyers + live metrics slide",
        icon: BarChart3,
        category: "Analytics",
        status: "Metrics Implementation",
        month: "Feb '26 (M5)"
      },
      {
        title: "Start gathering early user testimonials",
        icon: Users,
        category: "Community",
        status: "Feedback Collection",
        month: "Feb '26 (M5)"
      },
      {
        title: "Run Screen-Admin Skill Sprint #1 (EN/ES, captioned)",
        icon: Users,
        category: "Training",
        status: "Workshop Delivery",
        month: "Mar '26 (M6)"
      },
      {
        title: "Launch Micro-Course #2 to LMS",
        icon: PlayCircle,
        category: "Content",
        status: "Course Launch",
        month: "Mar '26 (M6)"
      }
    ],
    budgetBreakdown: [
      { item: "Salaries (2.6k)", amount: "$2,600" },
      { item: "Contract dev (LMS build)", amount: "$3,000" },
      { item: "Cloud (350)", amount: "$350" }
    ]
  },
  {
    quarter: "Q2 2026",
    subtitle: "Apr – Jun '26 · Teach \u0026 Test",
    phase: "Teach \u0026 Test",
    icon: GraduationCap,
    primarySpend: "$4,600",
    cumulativePercent: "87%",
    deliverables: [
      {
        title: "Install Smart Sign #2 at Locust Projects",
        icon: Monitor,
        category: "Installation",
        status: "Hardware Deployment",
        month: "Apr '26 (M7)"
      },
      {
        title: "Assemble remaining 6 Pi kits",
        icon: Code,
        category: "Development",
        status: "Hardware Assembly",
        month: "Apr '26 (M7)"
      },
      {
        title: "LaserCube Pop-Up #1 (Little Haiti w/ Edge Zones)",
        icon: Sparkles,
        category: "Events",
        status: "Public Activation",
        month: "May '26 (M8)"
      },
      {
        title: "Live KPI dashboard public",
        icon: BarChart3,
        category: "Analytics",
        status: "Dashboard Launch",
        month: "May '26 (M8)"
      },
      {
        title: "Run Skill Sprint #2 + capture footage",
        icon: Users,
        category: "Training",
        status: "Workshop Delivery",
        month: "Jun '26 (M9)"
      },
      {
        title: "Reach 100 course completions milestone",
        icon: GraduationCap,
        category: "Milestone",
        status: "Progress Tracking",
        month: "Jun '26 (M9)"
      }
    ],
    budgetBreakdown: [
      { item: "Salaries (2.6k)", amount: "$2,600" },
      { item: "Contract (automation script)", amount: "$1,650" },
      { item: "Cloud (350)", amount: "$350" }
    ]
  },
  {
    quarter: "Q3 2026",
    subtitle: "Jul – Sep '26 · Engage \u0026 Sustain",
    phase: "Engage \u0026 Sustain",
    icon: Zap,
    primarySpend: "$4,900",
    cumulativePercent: "100%",
    deliverables: [
      {
        title: "LaserCube Pop-Up #2 (Design District)",
        icon: Sparkles,
        category: "Events",
        status: "Public Activation",
        month: "Jul '26 (M10)"
      },
      {
        title: "Publish open-source playbook + parts list",
        icon: Award,
        category: "Sustainability",
        status: "Documentation",
        month: "Jul '26 (M10)"
      },
      {
        title: "Secure first nonprofit license ($99/mo) → covers Year-2 hosting",
        icon: Award,
        category: "Sustainability",
        status: "Revenue Generation",
        month: "Aug '26 (M11)"
      },
      {
        title: "Merge external pull-request #1",
        icon: GitBranch,
        category: "Development",
        status: "Community Contribution",
        month: "Aug '26 (M11)"
      },
      {
        title: "Produce \"Year-1 Impact Reel\" (for Knight + partners)",
        icon: PlayCircle,
        category: "Content",
        status: "Impact Documentation",
        month: "Sep '26 (M12)"
      },
      {
        title: "Hit 200 course completions / 40k bilingual impressions",
        icon: TrendingUp,
        category: "Milestone",
        status: "Target Achievement",
        month: "Sep '26 (M12)"
      },
      {
        title: "Prepare grant close-out report \u0026 next-city prospectus",
        icon: FileText,
        category: "Reporting",
        status: "Project Closure",
        month: "Sep '26 (M12)"
      }
    ],
    budgetBreakdown: [
      { item: "Salaries (2.5k)", amount: "$2,500" },
      { item: "Cloud \u0026 Admin (700)", amount: "$700" },
      { item: "Contracted Services (1.2k)", amount: "$1,200" },
      { item: "Contingency / spares (500)", amount: "$500" }
    ]
  }
];

// Budget verification: $9,500 + $5,950 + $4,600 + $4,900 = $24,950 ✓

// Running metrics that will be tracked
const runningMetrics = [
  {
    title: "Course Completions",
    target: "200",
    description: "Participants completing micro-courses",
    icon: GraduationCap,
    color: "text-[#A4FF4E]"
  },
  {
    title: "Livestream Attendees",
    target: "400",
    description: "Live workshop participants",
    icon: Eye,
    color: "text-[#3B82F6]"
  },
  {
    title: "Bilingual Impressions",
    target: "40,000",
    description: "Smart Sign display reach",
    icon: TrendingUp,
    color: "text-[#8B5CF6]"
  },
  {
    title: "Women Participation",
    target: "≥40%",
    description: "Women-identifying participants",
    icon: Users,
    color: "text-[#EC4899]"
  },
  {
    title: "ES/HT Participants",
    target: "≥30%",
    description: "Spanish/Haitian Creole speakers",
    icon: Users,
    color: "text-[#F59E0B]"
  },
  {
    title: "External Pull Requests",
    target: "≥3",
    description: "Community code contributions",
    icon: GitBranch,
    color: "text-[#10B981]"
  }
];

export default function RoadmapPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuarter, setActiveQuarter] = useState(0);

  return (
    <main className="min-h-screen bg-black text-white">
      <TechNonprofitNavKF />
      <BackToOverview />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <Calendar className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                12-Month Roadmap & Quarterly Spend Plan
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Implementation Timeline
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-4">
              Grant funds released ≈ October 2025; pilot closes September 2026
            </p>

          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Building2}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Activity Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <span className="bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E] bg-clip-text text-transparent">Activity Summary</span>
              </h2>
              <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-8">
                Over 1 year <strong>AI24</strong> will transform digital capacity through strategic phases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Build",
                  description: "a bilingual web platform",
                  icon: Code,
                  gradient: "from-[#A4FF4E] to-[#00FF88]",
                  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
                  phase: "Q4 2025"
                },
                {
                  title: "Roll out",
                  description: "a small but visible hardware fleet",
                  icon: Monitor,
                  gradient: "from-[#3B82F6] to-[#1D4ED8]",
                  image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center",
                  phase: "Q1 2026"
                },
                {
                  title: "Train",
                  description: "venue stewards through free micro-courses",
                  icon: GraduationCap,
                  gradient: "from-[#8B5CF6] to-[#7C3AED]",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center",
                  phase: "Q2 2026"
                },
                {
                  title: "Spark public excitement",
                  description: "with laser pop-ups",
                  icon: Sparkles,
                  gradient: "from-[#EC4899] to-[#DB2777]",
                  image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop&crop=center",
                  phase: "Q3 2026"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative overflow-hidden rounded-2xl border border-[#A4FF4E]/20 bg-black/60 backdrop-blur-sm hover:border-[#A4FF4E]/60 transition-all duration-500 cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(164, 255, 78, 0.3)"
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                    
                    <div className="relative p-6">
                      <div className="flex items-start gap-4">
                        {/* Animated Icon */}
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                              <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                            </div>
                          </div>
                          {/* Glow effect */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-bold text-white group-hover:text-[#A4FF4E] transition-colors duration-300">
                              {item.title}
                            </h4>
                            <span className="px-2 py-1 rounded-full text-xs bg-[#A4FF4E]/20 text-[#A4FF4E] font-medium">
                              {item.phase}
                            </span>
                          </div>
                          <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 backdrop-blur-sm"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 animate-pulse" />
              
              <div className="relative p-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#00FF88] flex items-center justify-center">
                    <Tv className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Portable Innovation Lab</h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  All gear packs into two rolling cases, so the lab can move from studio to street festival overnight. 
                  <span className="text-[#A4FF4E] font-medium"> Ready for any venue, anywhere.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Interactive Quarterly Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Quarterly Roadmap</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Click on each quarter to explore detailed deliverables and budget allocation
            </p>
          </motion.div>

          {/* Quarter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {quarterlyRoadmap.map((quarter, index) => {
              const Icon = quarter.icon;
              return (
                <motion.button
                  key={quarter.quarter}
                  onClick={() => setActiveQuarter(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                    activeQuarter === index
                      ? 'border-[#A4FF4E] bg-[#A4FF4E]/10 shadow-[0_0_20px_rgba(164,255,78,0.3)]'
                      : 'border-[#A4FF4E]/30 bg-black/50 hover:border-[#A4FF4E]/60 hover:bg-[#A4FF4E]/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-[#A4FF4E]" />
                  <div className="text-left">
                    <div className="font-bold text-white">{quarter.quarter}</div>
                    <div className="text-xs text-[#A4FF4E]/80">{quarter.phase}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#A4FF4E]">{quarter.primarySpend}</div>
                    <div className="text-xs text-gray-300">{quarter.cumulativePercent} total</div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Quarter Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuarter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              {quarterlyRoadmap[activeQuarter] && (
                <div className="p-8 rounded-2xl border-2 border-[#A4FF4E] bg-black/80 shadow-neon">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Quarter Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        {React.createElement(quarterlyRoadmap[activeQuarter].icon, {
                          className: 'w-8 h-8 text-[#A4FF4E]'
                        })}
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {quarterlyRoadmap[activeQuarter].quarter}
                          </h3>
                          <p className="text-[#A4FF4E]/80">
                            {quarterlyRoadmap[activeQuarter].subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Key Deliverables */}
                      <h4 className="text-xl font-bold text-[#A4FF4E] mb-4">Key Deliverables</h4>
                      <div className="space-y-4 mb-6">
                        {quarterlyRoadmap[activeQuarter].deliverables.map((deliverable, index) => {
                          const DeliverableIcon = deliverable.icon;
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                  <DeliverableIcon className="w-4 h-4 text-[#A4FF4E]" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-1 rounded-full text-xs bg-[#A4FF4E]/20 text-[#A4FF4E]">
                                      {deliverable.category}
                                    </span>
                                    <span className="px-2 py-1 rounded-full text-xs bg-gray-500/20 text-gray-300">
                                      {deliverable.status}
                                    </span>
                                    {deliverable.month && (
                                      <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                                        {deliverable.month}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-gray-200 text-sm">{deliverable.title}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column - Budget Breakdown */}
                    <div>
                      <h4 className="text-xl font-bold text-[#A4FF4E] mb-4">Primary Spend This Quarter</h4>
                      <div className="p-6 rounded-xl bg-[#A4FF4E]/5 border border-[#A4FF4E]/20 mb-6">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-[#A4FF4E]">
                            {quarterlyRoadmap[activeQuarter].primarySpend}
                          </div>
                          <div className="text-sm text-gray-300">
                            {quarterlyRoadmap[activeQuarter].cumulativePercent} of total Knight Grant
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {quarterlyRoadmap[activeQuarter].budgetBreakdown.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex justify-between items-center p-3 rounded-lg bg-black/50"
                            >
                              <span className="text-gray-200">{item.item}</span>
                              <span className="font-bold text-[#A4FF4E]">{item.amount}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Progress Visual */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-300">Grant Progress</span>
                          <span className="text-sm font-bold text-[#A4FF4E]">
                            {quarterlyRoadmap[activeQuarter].cumulativePercent}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-[#A4FF4E] h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: quarterlyRoadmap[activeQuarter].cumulativePercent 
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Timeline Vertical */}
      <TimelineVertical />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Navigation to Related Pages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Related Metrics</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-8">
              Dive deeper into impact tracking and sustainability measures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Impact & ROI Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link href="/grant/knight-foundation/impact-roi">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 hover:bg-[#A4FF4E]/5 transition-all duration-300 cursor-pointer p-8 text-center">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#00FF88] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF4E] transition-colors duration-300">
                      Impact & ROI
                    </h3>
                    <p className="text-gray-300 mb-6">
                      View live metrics dashboard, course completions, workshop attendance, and bilingual reach tracking
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/20 text-[#A4FF4E] font-medium">
                      <span>View Metrics</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                </div>
              </Link>
            </motion.div>

            {/* Sustainability Cycle Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link href="/grant/knight-foundation/sustainability-cycle">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 hover:bg-[#A4FF4E]/5 transition-all duration-300 cursor-pointer p-8 text-center">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#00FF88] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF4E] transition-colors duration-300">
                      Sustainability Cycle
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Explore nonprofit licensing model, community contributions, and long-term replication framework
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/20 text-[#A4FF4E] font-medium">
                      <span>View Model</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 rounded-xl border border-[#A4FF4E]/20 bg-black/40 max-w-2xl mx-auto text-center"
          >
            <p className="text-gray-300">
              <span className="text-[#A4FF4E] font-medium">Running metrics</span> and sustainability targets are tracked in real-time across our grant pages for comprehensive project monitoring.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 