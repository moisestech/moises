'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import { BackToOverview } from '@/components/shared/BackToOverview';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  BarChart,
  Target,
  ArrowRight,
  ChevronLeft,
  DollarSign,
  Users,
  LineChart,
  TrendingUp,
  Activity,
  Globe,
  Sparkles,
  Building,
  Film,
  GraduationCap,
  Palette,
  Building2,
  Code,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Updated impact data with research-backed metrics
const impactData = {
  artists: {
    icon: Palette,
    confirmedPartners: ["Bakehouse Art Complex", "Edge Zones Contemporary Art", "Locust Projects"],
    potentialPartners: ["Miami Art Week", "Art Basel Miami Beach"],
    kpi: "100+ artists trained in AI tools; 30 grant-ready proposals",
    path: "8 venues license signage SaaS ($32K/yr sustaining income)",
    details: "90% of creators report AI tools save time and money. Partnering with Miami's premier art incubators."
  },
  film: {
    icon: Film,
    confirmedPartners: [],
    potentialPartners: ["University of Miami Cinema", "Miami Film Festival", "O Cinema"],
    kpi: "8 AI-audited shorts; avg $8K VFX saving per film",
    path: "AI24 Seal required by 2 SE-US festivals",
    details: "AI tools allow 5-10x more video content with same budget. Traditional VFX costs ~$1,800/minute."
  },
  education: {
    icon: GraduationCap,
    confirmedPartners: [],
    potentialPartners: ["Northwest School of the Arts", "FIU AI Hub", "UM Studios", "MDC Wolfson"],
    kpi: "3 schools embed AI ethics modules → 400 students/yr",
    path: "Adoption in 6 US & 2 EU art programs",
    details: "91% of artists want verifiable attribution tools. 89% say AI content should be clearly labeled."
  },
  brands: {
    icon: Building,
    confirmedPartners: [],
    potentialPartners: ["The Community", "República Havas", "Alma DDB"],
    kpi: "2 pilot ads cut turnaround 40% using AI tools",
    path: "$60K/yr in B2B studio-in-a-box rollouts",
    details: "AI-driven editing can produce 40-100% more content with same resources."
  },
  institutions: {
    icon: Building2,
    confirmedPartners: [],
    potentialPartners: ["Pérez Art Museum (PAMM)", "Vizcaya Museum", "Miami Book Fair"],
    kpi: "2 flagship institutions display AI-curated content",
    path: "4 additional orgs subscribe to ethics rubric service",
    details: "Implementing Google SynthID-style invisible watermarks for AI transparency."
  },
  research: {
    icon: Code,
    confirmedPartners: [],
    potentialPartners: ["FIU AI Hub", "MAGIC (MDC)", "Code/Art Miami"],
    kpi: "Open-source watermark plugin → 150 downloads",
    path: "500+ downloads, 20 paid support contracts",
    details: "Inspired by Google SynthID technology for AI-generated media identification."
  }
};

// Economic impact data
const economicData = {
  miamiArts: {
    value: "$2.1B",
    label: "Miami-Dade Arts Economic Activity",
    description: "Annual economic impact supporting 31,500 jobs"
  },
  artsROI: {
    value: "$39",
    label: "Community Value Return",
    description: "Every $1 invested in arts returns $39 in community value"
  },
  taxRevenue: {
    value: "$694.7M",
    label: "Florida Arts Tax Revenue",
    description: "Annual tax revenue from arts sector"
  }
};

export default function ImpactROIPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
              isDark 
                ? 'bg-[#A4FF4E]/10 border border-[#A4FF4E]/30' 
                : 'bg-[#A4FF4E]/20 border border-[#A4FF4E]/50'
            } mb-6`}>
              <Target className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Research-Backed Impact & ROI Analysis
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Measurable Community Impact
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Grounded in Miami's proven creative economy and industry benchmarks
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

      {/* Economic Context */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Miami's Creative Economy Context</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Building on proven economic impact and leveraging existing infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Object.entries(economicData).map(([key, data], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className="text-3xl font-bold mb-2 text-[#A4FF4E]">{data.value}</div>
                <div className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{data.label}</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{data.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={LineChart}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Vertical-Specific Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Vertical-Specific Impact</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Research-backed outcomes across key sectors with real partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(impactData).map(([key, data], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    {React.createElement(data.icon, {
                      className: 'text-[#A4FF4E] w-5 h-5'
                    })}
                  </div>
                  <h3 className="text-xl font-bold capitalize text-[#A4FF4E]">{key}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Confirmed Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.confirmedPartners.length > 0 ? (
                        data.confirmedPartners.map((partner) => (
                          <span
                            key={partner}
                            className={`text-xs px-2 py-1 rounded-full ${
                              isDark 
                                ? 'bg-[#A4FF4E]/10 text-[#A4FF4E] border border-[#A4FF4E]/30'
                                : 'bg-[#A4FF4E]/20 text-[#A4FF4E] border border-[#A4FF4E]/50'
                            }`}
                          >
                            {partner}
                          </span>
                        ))
                      ) : (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isDark 
                            ? 'bg-gray-500/10 text-gray-400 border border-gray-500/30'
                            : 'bg-gray-200 text-gray-600 border border-gray-300'
                        }`}>
                          No confirmed partners yet
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Potential Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.potentialPartners.map((partner) => (
                        <span
                          key={partner}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDark 
                              ? 'bg-gray-500/10 text-gray-400 border border-gray-500/30'
                              : 'bg-gray-200 text-gray-600 border border-gray-300'
                          }`}
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Measurable KPI</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {data.kpi}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Growth Path</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {data.path}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-[#A4FF4E]/80">Industry Context</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {data.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Activity}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Revenue Streams */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Sustainable Revenue Streams</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Multiple income sources anchored in industry benchmarks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Digital Signage Licensing",
                revenue: "$32K/yr",
                description: "5-10 community smart signs at $4K/year each",
                details: "Screen ads command higher CPMs than web banners",
                icon: Globe
              },
              {
                title: "Tech Consulting & Workshops",
                revenue: "$15K-25K/yr",
                description: "Boutique tech consulting and AI training services",
                details: "Typical Miami tech consulting: $3K-25K per contract",
                icon: Code
              },
              {
                title: "Grants & Program Funds",
                revenue: "$10K-15K/yr",
                description: "Leverage existing Miami Individual Artists grants",
                details: "Supplemental funding through established partnerships",
                icon: DollarSign
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  {React.createElement(item.icon, {
                    className: 'text-[#A4FF4E] w-7 h-7'
                  })}
                </div>
                <div className="text-xl font-bold mb-2 text-[#A4FF4E]">{item.title}</div>
                <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{item.revenue}</div>
                <div className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</div>
                <div className="text-xs text-[#A4FF4E]/70">{item.details}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={BarChart}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Key Impact Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Projected Impact Metrics</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Quantifiable outcomes grounded in industry data and local partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "220+",
                label: "Artists Trained",
                description: "AI workshops and clinics across all verticals",
                icon: Users,
                color: "text-[#A4FF4E]"
              },
              {
                metric: "60K+",
                label: "Screen Impressions",
                description: "Annual community engagement through smart signs",
                icon: Globe,
                color: "text-[#3B82F6]"
              },
              {
                metric: "40%+",
                label: "Women Participants",
                description: "Exceeding typical tech-training diversity rates",
                icon: Activity,
                color: "text-[#EC4899]"
              },
              {
                metric: "100%",
                label: "Open Source",
                description: "All tools, curricula, and code freely available",
                icon: Sparkles,
                color: "text-[#8B5CF6]"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                  isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center`}>
                  {React.createElement(item.icon, {
                    className: `${item.color} w-7 h-7`
                  })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${item.color}`}>{item.metric}</div>
                <div className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{item.label}</div>
                <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={TrendingUp}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Live Running Metrics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Live Running Metrics</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-4">
              Public dashboard refreshes every 6 hours
            </p>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark ? 'bg-[#A4FF4E]/10 border border-[#A4FF4E]/30' : 'bg-[#A4FF4E]/20 border border-[#A4FF4E]/50'
            }`}>
              <BarChart className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm text-[#A4FF4E]">Live tracking throughout the grant period</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
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
                icon: Users,
                color: "text-[#3B82F6]"
              },
              {
                title: "Bilingual Impressions",
                target: "40,000",
                description: "Smart Sign display reach",
                icon: Globe,
                color: "text-[#8B5CF6]"
              },
              {
                title: "Women Participation",
                target: "≥40%",
                description: "Women-identifying participants",
                icon: Activity,
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
                icon: Code,
                color: "text-[#10B981]"
              }
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 border-[#A4FF4E] ${
                    isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
                  } shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center group-hover:bg-[#A4FF4E]/30 transition-colors`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${metric.color}`}>
                        {metric.target}
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Target</div>
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{metric.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{metric.description}</p>
                  
                  {/* Animated progress indicator */}
                  <div className="mt-4">
                    <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1`}>
                      <motion.div
                        className={`h-1 rounded-full bg-gradient-to-r ${
                          metric.color.includes('#A4FF4E') ? 'from-[#A4FF4E]/70 to-[#A4FF4E]' : 
                          metric.color.includes('#3B82F6') ? 'from-[#3B82F6]/70 to-[#3B82F6]' : 
                          metric.color.includes('#8B5CF6') ? 'from-[#8B5CF6]/70 to-[#8B5CF6]' : 
                          metric.color.includes('#EC4899') ? 'from-[#EC4899]/70 to-[#EC4899]' : 
                          metric.color.includes('#F59E0B') ? 'from-[#F59E0B]/70 to-[#F59E0B]' : 
                          'from-[#10B981]/70 to-[#10B981]'
                        }`}
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
            className={`p-8 rounded-xl border-2 border-[#A4FF4E] ${
              isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
            } shadow-neon max-w-4xl mx-auto`}
          >
            <h3 className="text-xl font-bold text-[#A4FF4E] mb-6 text-center">Additional Sustainability Targets</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`flex items-center gap-3 p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20`}>
                <Code className="w-6 h-6 text-[#10B981]" />
                <div>
                  <div className="font-bold text-[#10B981]">≥3 external pull-requests merged</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Community code contributions</div>
                </div>
              </div>
              <div className={`flex items-center gap-3 p-4 rounded-lg bg-[#A4FF4E]/5 border border-[#A4FF4E]/20`}>
                <DollarSign className="w-6 h-6 text-[#F59E0B]" />
                <div>
                  <div className="font-bold text-[#F59E0B]">1 paid nonprofit license ($99/mo)</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Covers Year-2 hosting costs</div>
                </div>
              </div>
            </div>
            <div className={`mt-6 p-4 rounded-lg bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 text-center`}>
              <p className="text-[#A4FF4E] font-medium">
                Sustainable replication model → Year-2 hosting covered
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={BarChart}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div className={`p-8 rounded-xl border-2 border-[#A4FF4E] ${
              isDark ? 'bg-black/80 text-white' : 'bg-white/80 text-black border-gray-200'
            } shadow-neon`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A4FF4E]">
                Ready to Amplify Miami's Creative Economy?
              </h2>
              <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Join us in leveraging Miami's proven $2.1B arts economy to create sustainable, measurable impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/grant/knight-foundation"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  Back to Overview
                </Link>
                <Link
                  href="/grant/knight-foundation/budget"
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] ${
                    isDark ? 'hover:bg-[#A4FF4E]/10' : 'hover:bg-[#A4FF4E]/5'
                  } transition-colors`}
                >
                  <DollarSign className="w-5 h-5" />
                  View Budget Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 