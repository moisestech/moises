'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
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
  HardDrive
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
        title: "Order \u0026 receive 2 Smart-Sign screens + 12 Pi learning kits",
        icon: Monitor,
        category: "Hardware",
        status: "Hardware Procurement"
      },
      {
        title: "Spin up Supabase project; configure PostHog \u0026 Looker Studio",
        icon: Wifi,
        category: "Infrastructure",
        status: "Cloud Setup"
      },
      {
        title: "Push open-core repo to GitHub",
        icon: GitBranch,
        category: "Development",
        status: "Code Base"
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
        title: "Install Smart-Sign #1 in Bakehouse lobby",
        icon: Tv,
        category: "Installation",
        status: "Hardware Deployment"
      },
      {
        title: "Assemble 6 Pi kits; begin internal beta",
        icon: Code,
        category: "Development",
        status: "Beta Testing"
      },
      {
        title: "Record Micro-course #1 (Web-Design for Smart Signs)",
        icon: PlayCircle,
        category: "Content",
        status: "Course Creation"
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
        title: "Host Screen-Admin Skill Sprint #1 (EN/ES, captioned)",
        icon: Users,
        category: "Training",
        status: "Workshop Delivery"
      },
      {
        title: "Launch Micro-course #2 (Ethical AI Agents)",
        icon: Brain,
        category: "Content",
        status: "Course Launch"
      },
      {
        title: "Add QR flyers; begin live metrics",
        icon: BarChart3,
        category: "Analytics",
        status: "Metrics Implementation"
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
        title: "Install Smart-Sign #2 at Locust; assemble remaining Pi kits",
        icon: Monitor,
        category: "Installation",
        status: "Final Deployment"
      },
      {
        title: "LaserCube pop-up #1 (Little Haiti) + pop-up #2 (Design District)",
        icon: Sparkles,
        category: "Events",
        status: "Public Activations"
      },
      {
        title: "Publish playbook + parts list; first nonprofit license signed",
        icon: Award,
        category: "Sustainability",
        status: "Replication Framework"
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

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#232323] text-[#A4FF4E] border border-[#A4FF4E] transition-colors shadow-neon"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Overview
        </Link>
      </div>

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
              AI24 Implementation Timeline
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-4">
              Grant funds released ≈ October 2025; pilot closes September 2026
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              This one-year cadence lines up spending with concrete actions: gear purchased up front, 
              code and courses built in winter, skills delivered in spring, and public activations 
              plus sustainability milestones by summer's end.
            </p>
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
        icon={Brain}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Timeline Section */}
      <TimelineSection />

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

      {/* Running Metrics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Running Metrics</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-4">
              Public dashboard refreshes every 6 hours
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30">
              <BarChart3 className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm text-[#A4FF4E]">Live tracking throughout the grant period</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {runningMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center group-hover:bg-[#A4FF4E]/30 transition-colors">
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${metric.color}`}>
                        {metric.target}
                      </div>
                      <div className="text-sm text-gray-400">Target</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{metric.title}</h3>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <motion.div
                        className={`h-1 rounded-full bg-gradient-to-r ${metric.color.includes('#A4FF4E') ? 'from-[#A4FF4E]/70 to-[#A4FF4E]' : metric.color.includes('#3B82F6') ? 'from-[#3B82F6]/70 to-[#3B82F6]' : metric.color.includes('#8B5CF6') ? 'from-[#8B5CF6]/70 to-[#8B5CF6]' : metric.color.includes('#EC4899') ? 'from-[#EC4899]/70 to-[#EC4899]' : metric.color.includes('#F59E0B') ? 'from-[#F59E0B]/70 to-[#F59E0B]' : 'from-[#10B981]/70 to-[#10B981]'}`}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Sustainability Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 shadow-neon max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold text-[#A4FF4E] mb-6 text-center">Additional Sustainability Targets</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                <GitBranch className="w-6 h-6 text-[#10B981]" />
                <div>
                  <div className="font-bold text-[#10B981]">≥3 external pull-requests merged</div>
                  <div className="text-sm text-gray-400">Community code contributions</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20">
                <Award className="w-6 h-6 text-[#F59E0B]" />
                <div>
                  <div className="font-bold text-[#F59E0B]">1 nonprofit license covering Year-2 hosting</div>
                  <div className="text-sm text-gray-400">Sustainable replication model</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 