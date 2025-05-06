'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
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
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Impact data by vertical
const impactData = {
  artists: {
    partners: ["Bakehouse", "Edge Zones", "Locust Projects"],
    kpi: "100 artists open AI accounts; 30 grant-ready proposals",
    path: "8 venues license signage SaaS ($4K/yr sustaining income)"
  },
  film: {
    partners: ["UM Cinema", "Miami Film Fest", "O-Cinema"],
    kpi: "8 AI-audited shorts; avg $8K VFX saving",
    path: "AI24 Seal required by 2 SE-US festivals"
  },
  education: {
    partners: ["NWSA", "FIU", "UM", "MDC Wolfson"],
    kpi: "3 schools embed AI24 modules → 400 students/yr",
    path: "Adoption in 6 US & 2 EU art programs"
  },
  brands: {
    partners: ["The Community", "República Havas", "Alma DDB"],
    kpi: "2 pilot ads cut turnaround 40%",
    path: "$60K/yr in B2B studio-in-a-box rollouts"
  },
  institutions: {
    partners: ["PAMM", "Vizcaya", "Miami Book Fair"],
    kpi: "PAMM & Book Fair display signage; share rubric",
    path: "4 additional orgs subscribe to ethics rubric service"
  },
  research: {
    partners: ["FIU AI Hub", "MAGIC (MDC)", "CodeArt Miami"],
    kpi: "Release open-source Watermark plugin → 150 dl",
    path: "500+ downloads, 20 paid support contracts"
  }
};

export default function ImpactROIPage() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            theme === 'dark' 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Impact & ROI Analysis
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Measurable Community Impact
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Transforming investment into sustainable community value
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Impact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Vertical-Specific Impact</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Targeted outcomes across key sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(impactData).map(([key, data], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 capitalize ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{key}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.partners.map((partner) => (
                        <span
                          key={partner}
                          className={`text-sm px-2 py-1 rounded-full ${
                            theme === 'dark'
                              ? 'bg-blue-500/10 text-blue-400'
                              : 'bg-blue-100 text-blue-600'
                          }`}
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>KPI</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {data.kpi}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Growth Path</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {data.path}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={LineChart}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* ROI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Return on Investment</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Every dollar multiplies through our ecosystem
            </p>
          </motion.div>

          {/* ROI Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                metric: "3x",
                label: "Impact Multiplier",
                description: "Every $1 generates $3 in community value",
                icon: TrendingUp
              },
              {
                metric: "70%",
                label: "Local Investment",
                description: "Of budget goes directly to Miami talent",
                icon: Users
              },
              {
                metric: "$60K",
                label: "Annual Revenue",
                description: "Projected sustainable income by 2026",
                icon: DollarSign
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border text-center ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${
                  theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                } flex items-center justify-center`}>
                  {React.createElement(item.icon, {
                    className: theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{item.metric}</div>
                <div className={`font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>{item.label}</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 