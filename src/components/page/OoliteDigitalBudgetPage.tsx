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
  ChevronUp
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';

interface BudgetItem {
  category: string;
  amount: number;
  description: string;
  impact: string;
  phase: string;
}

interface KPIMetric {
  pillar: string;
  metric: string;
  tool: string;
  target: string;
  current?: number;
}

interface TimelineItem {
  quarter: string;
  period: string;
  internalBeats: string[];
  flagshipMoment: string;
  date: string;
  image: string;
  description: string;
}

export default function OoliteDigitalBudgetPage() {
  const { theme } = useTheme();
  const [expandedSections, setExpandedSections] = useState<string[]>(['objective', 'timeline']);
  const [hoveredTimeline, setHoveredTimeline] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const budgetItems: BudgetItem[] = [
    {
      category: "Phase-0 Room Refresh (Aug)",
      amount: 12000,
      description: "Paint, epoxy patch, blackout roller-shades; replace fluorescents with flat-panel LEDs; two sit-stand benches; 1 Gb unmanaged switch + cabling",
      impact: "Lab feels 'future' on Day 1",
      phase: "Phase-0"
    },
    {
      category: "Phase-1 Core Workstations & Storage (Sept)",
      amount: 32000,
      description: "3 workstations: PC #1 (RTX 4080) for AI compute, PC #2 (RTX 4080) for render queue, Mac Studio (M3 Max) for motion graphics. 48 TB QNAP NAS + UPS",
      impact: "Central asset hub; scales to 30+ resident logins",
      phase: "Phase-1"
    },
    {
      category: "Phase-2 XR / Imaging / Prototyping (Nov–Jan)",
      amount: 20000,
      description: "3× Meta Quest 3, Sony A7c II + stabiliser, Bambu X1C FDM + Elegoo Saturn 4 resin, Insta360 X4",
      impact: "Rapid physical prototyping and 360° documentation",
      phase: "Phase-2"
    },
    {
      category: "Phase-3 Presentation & Streaming Kit (Mar)",
      amount: 8000,
      description: "86″ mobile 4K display, Epson ultra-short-throw, Blackmagic capture cards, 2× Rode Wireless GO II lavs",
      impact: "Drives livestream and ticket revenue",
      phase: "Phase-3"
    },
    {
      category: "Contingency / Growth Buffer",
      amount: 8000,
      description: "Shipping, warranties, spare VR controllers, extra printheads",
      impact: "Allows quick pivot to new class demand",
      phase: "Contingency"
    }
  ];

  const kpiMetrics: KPIMetric[] = [
    {
      pillar: "Utilisation",
      metric: "% of bookable hours filled",
      tool: "Skedda",
      target: "≥ 70% by Mar 2026"
    },
    {
      pillar: "Attendance",
      metric: "In-person heads / workshop",
      tool: "Eventbrite check-ins",
      target: "15 avg. / session"
    },
    {
      pillar: "Public Reach",
      metric: "Livestream viewer-minutes",
      tool: "YouTube Analytics",
      target: "1,000+ cumulative"
    },
    {
      pillar: "Earned Revenue",
      metric: "Workshop/course fees",
      tool: "QuickBooks class codes",
      target: "Cover ≥ 25% of op-ex"
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      quarter: "Q3 2025",
      period: "Aug–Oct",
      internalBeats: ["🛠 Phase-0 room refresh (Aug)", "🛠 Phase-1 core gear arrival (Sept)", "📝 Needs-assessment labs"],
      flagshipMoment: "Open-Lab Launch",
      date: "Oct 1",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-1_y8rgsz.png",
      description: "Foundation phase with room renovation and core equipment installation. Establishing the digital arts lab infrastructure and conducting initial needs assessment with resident artists."
    },
    {
      quarter: "Q4 2025",
      period: "Nov–Dec",
      internalBeats: ["🎓 Intro Workshops (4)", "🎤 Artist Talks (2)", "🚀 Staff Sprint #1 – Foundations"],
      flagshipMoment: "Holiday Open House",
      date: "Dec 12",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-2_ctm1ft.png",
      description: "Launch of educational programming with introductory workshops and artist talks. Staff training sessions and community engagement through the holiday open house event."
    },
    {
      quarter: "Q1 2026",
      period: "Jan–Mar",
      internalBeats: ["🎓 AI/Realtime-3-D Masterclasses (3)", "🎤 Talks (2)", "🏗️ Mid-Project Showcase install"],
      flagshipMoment: "Showcase Opening",
      date: "Mar 7",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1745329555/tech-nonprofit/nonprofit-tech-image-3_qkdzir.png",
      description: "Advanced workshops focusing on AI and real-time 3D technologies. Installation and opening of the mid-project showcase featuring resident artist work."
    },
    {
      quarter: "Q2 2026",
      period: "Apr–Jun",
      internalBeats: ["🎓 Remix Workshops (4)", "🚀 Staff Sprint #2 – Automation", "📚 Catalog build"],
      flagshipMoment: "Public Digital Exhibition",
      date: "Jun 13",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030298/own-your-digital-presence/website-building-day-1-virtual-session_qk0esh.jpg",
      description: "Remix workshops exploring creative reuse and automation. Staff training in automation tools and preparation of the comprehensive catalog for the public digital exhibition."
    },
    {
      quarter: "Q3 2026",
      period: "Jul–Aug",
      internalBeats: ["📝 Year-1 evaluation", "SOP hand-off", "Hardware maintenance"],
      flagshipMoment: "Year-1 Report-Out",
      date: "Aug 28",
      image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1743030367/own-your-digital-presence/website-building-day-4-online-presentations_tncppm.jpg",
      description: "Comprehensive evaluation of the first year, documentation of standard operating procedures, and hardware maintenance. Final report-out and planning for year two."
    }
  ];

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0);

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

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-xl p-6 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <button
              onClick={() => toggleSection('timeline')}
              className="flex items-center justify-between w-full mb-6"
            >
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Calendar className="h-8 w-8 text-purple-500" />
                12-Month Timeline (Tier A Deliverables)
              </h2>
              {expandedSections.includes('timeline') ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
            
            {expandedSections.includes('timeline') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-8"
              >
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
                      <div className="relative h-64 md:h-full min-h-[300px]">
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
                        <h3 className={`text-2xl font-bold mb-4 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.flagshipMoment}
                        </h3>
                        
                        <p className={`mb-4 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                        
                        <div>
                          <h4 className={`font-semibold mb-2 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>Internal Beats</h4>
                          <ul className="space-y-1">
                            {item.internalBeats.map((beat, beatIndex) => (
                              <li key={beatIndex} className={`flex items-start gap-2 text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                <span className="text-purple-400 mt-1">•</span>
                                <span>{beat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
                          <h4 className={`text-xl font-bold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.flagshipMoment}
                          </h4>
                          <p className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
                
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'
                  }`}>
                    <strong>Tier-B:</strong> catalog print-run × 500 → 250; second exhibition crew held for extra funding.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Budget Section */}
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
            <button
              onClick={() => toggleSection('budget')}
              className="flex items-center justify-between w-full mb-6"
            >
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <DollarSign className="h-8 w-8 text-green-500" />
                Capital Spend Strategy – $80k Detail
              </h2>
              {expandedSections.includes('budget') ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
            
            {expandedSections.includes('budget') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6"
              >
                <div className="grid gap-6">
                  {budgetItems.map((item, index) => (
                    <div key={index} className={`p-6 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>{item.category}</h3>
                          <p className={`text-sm mb-2 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>{item.description}</p>
                          <p className={`text-sm font-semibold ${
                            theme === 'dark' ? 'text-green-300' : 'text-green-600'
                          }`}>Impact: {item.impact}</p>
                        </div>
                        <div className={`text-right ml-4 ${
                          theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>
                          <div className="text-2xl font-bold">${item.amount.toLocaleString()}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                          }`}>
                            {item.phase}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={`p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>TOTAL CAPITAL BUDGET</h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Software / Op-Ex (~$12k) – Adobe CC, Maxon One, Substance3-D, Frame.io, Skedda. Charged to Oolite program budget, not capital.
                      </p>
                    </div>
                    <div className={`text-3xl font-bold ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      ${totalBudget.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* KPIs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-xl p-6 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <button
              onClick={() => toggleSection('kpis')}
              className="flex items-center justify-between w-full mb-6"
            >
              <h2 className={`text-3xl font-bold flex items-center gap-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <BarChart3 className="h-8 w-8 text-orange-500" />
                KPIs & Success Metrics
              </h2>
              {expandedSections.includes('kpis') ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
            
            {expandedSections.includes('kpis') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {kpiMetrics.map((kpi, index) => (
                    <div key={index} className={`p-6 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
                    }`}>
                      <h3 className={`text-xl font-bold mb-3 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{kpi.pillar}</h3>
                      <p className={`text-sm mb-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{kpi.metric}</p>
                      <p className={`text-xs mb-2 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Tool: {kpi.tool}</p>
                      <p className={`text-lg font-semibold ${
                        theme === 'dark' ? 'text-orange-300' : 'text-orange-600'
                      }`}>Target: {kpi.target}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Data Dashboard Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className={`${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } rounded-xl p-6 border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h2 className={`text-3xl font-bold flex items-center gap-3 mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <Database className="h-8 w-8 text-cyan-500" />
              Data Dashboard Stack
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { data: "Booking & utilisation", tool: "Skedda", auto: true, note: "Webhooks to Sheets monthly" },
                { data: "Asset output", tool: "QNAP + Grafana", auto: true, note: "S3 backup scripts for Little River migration" },
                { data: "Stream analytics", tool: "YouTube + Restream", auto: true, note: "Adds geographic reach data" },
                { data: "Ticketing & revenue", tool: "Eventbrite API", auto: true, note: "Sync to QuickBooks tag 'Digital Lab'" },
                { data: "Network health", tool: "Ubiquiti UI Dashboard", auto: true, note: "Alerts if bandwidth < 500 Mb/s" }
              ].map((item, index) => (
                <div key={index} className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
                }`}>
                  <h3 className={`font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{item.data}</h3>
                  <p className={`text-sm mb-2 ${
                    theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
                  }`}>Tool: {item.tool}</p>
                  <div className={`text-xs px-2 py-1 rounded-full w-fit mb-2 ${
                    item.auto 
                      ? theme === 'dark' ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'
                      : theme === 'dark' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.auto ? 'Auto-Capture' : 'Manual'}
                  </div>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 