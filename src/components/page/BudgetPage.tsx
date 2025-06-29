'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import { BackToOverview } from '@/components/shared/BackToOverview';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import {
  ChevronLeft,
  DollarSign,
  Users,
  Building2,
  Laptop,
  Sparkles,
  Clock,
  Briefcase,
  Code,
  Tv,
  Brain,
  Globe,
  CheckCircle,
  Target
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Updated budget data to match the exact $24,950 breakdown
const budgetData = {
  totalRequest: 24950,
  categories: [
    {
      name: "Program Salaries & Wages",
      amount: 10300,
      breakdown: [
        { title: "Lead Developer (PT) - 10 hrs/week × 12 months × $29/hr", amount: 7000 },
        { title: "Bilingual Coordinator (PT) - 6 hrs/week × 12 months × $23/hr", amount: 3300 }
      ],
      description: "Part-time staff to build, secure, document the stack and translate UI, caption videos, run help desk"
    },
    {
      name: "Contracted Services",
      amount: 5850,
      breakdown: [
        { title: "Web/LMS codebase development (React + Supabase)", amount: 3500 },
        { title: "Automation scripts for metrics & data cleaning", amount: 1500 },
        { title: "Documentation and testing", amount: 850 }
      ],
      description: "One-off tech work including building the web/LMS codebase plus automation scripts"
    },
    {
      name: "Hardware & Materials",
      amount: 6900,
      breakdown: [
        { title: "2 × Museum-grade Smart Signs (screens + Raspberry Pi players)", amount: 2400 },
        { title: "12 × Raspberry-Pi learning stations for workshops", amount: 1800 },
        { title: "Portable LaserCube projector", amount: 1200 },
        { title: "Short-throw LED projector", amount: 800 },
        { title: "Refurbished Legion laptop for demos", amount: 700 }
      ],
      description: "Hardware fleet including Smart Signs, Pi kits, projectors, and demo equipment"
    },
    {
      name: "Cloud & Admin Costs",
      amount: 1400,
      breakdown: [
        { title: "Supabase Pro (12 months)", amount: 600 },
        { title: "PostHog analytics (12 months)", amount: 400 },
        { title: "Streamlabs for livestreaming (12 months)", amount: 400 }
      ],
      description: "Twelve months of cloud services for reliable platform operation"
    },
    {
      name: "Contingency & Spare Parts",
      amount: 500,
      breakdown: [
        { title: "Extra cables and connectors", amount: 200 },
        { title: "Backup Raspberry Pi", amount: 150 },
        { title: "Replacement projector lamp", amount: 150 }
      ],
      description: "Backup equipment to keep everything running if something fails mid-event"
    }
  ]
};

const COLORS = ['#A4FF4E', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

export default function BudgetPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Use bright lime green for dark mode, darker lime green for light mode
  const primaryColor = isDark ? '#A4FF4E' : '#22C55E';

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

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
                : 'bg-[#22C55E]/20 border border-[#22C55E]/50'
            } mb-6`}>
              <DollarSign className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>
                Budget Details
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {formatCurrency(budgetData.totalRequest)}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#A4FF4E]/80' : 'text-[#22C55E]/80'}`}>
              Total funding request for 12-month AI24 program
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)'
        }}
        iconColor={isDark ? 'text-[#A4FF4E]/50' : 'text-[#22C55E]/50'}
      />

      {/* Budget Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Budget Breakdown</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#A4FF4E]/80' : 'text-[#22C55E]/80'}`}>
              Detailed allocation of $24,950 for maximum community impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl border-2 ${
                isDark 
                  ? 'border-[#A4FF4E] bg-black/80 text-white' 
                  : 'border-[#22C55E] bg-white/80 text-black border-gray-200'
              } shadow-neon`}
            >
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Budget Distribution</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData.categories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill={primaryColor}
                      dataKey="amount"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {budgetData.categories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} opacity={0.8} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{
                        backgroundColor: isDark ? '#18181b' : '#ffffff',
                        border: `1px solid ${primaryColor}`,
                        borderRadius: '0.5rem',
                        color: primaryColor,
                        boxShadow: `0 0 24px ${primaryColor}44`,
                      }}
                      itemStyle={{
                        color: primaryColor,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Category Breakdown */}
            <div className="space-y-6">
              {budgetData.categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl border-2 ${
                    isDark 
                      ? 'border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80' 
                      : 'border-[#22C55E] bg-white/80 text-black border-gray-200 shadow-neon hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:border-[#22C55E]/80'
                  } transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>{category.name}</h3>
                    <div className={`text-xl font-bold ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>
                      {formatCurrency(category.amount)}
                    </div>
                  </div>
                  <p className={`mb-4 text-sm ${isDark ? 'text-white' : 'text-black'}`}>{category.description}</p>
                  <div className="space-y-3">
                    {category.breakdown.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between"
                      >
                        <span className={`text-sm ${isDark ? 'text-[#A4FF4E]/80' : 'text-gray-600'}`}>{item.title}</span>
                        <span className={`text-sm font-mono ${isDark ? 'text-[#A4FF4E]/80' : 'text-gray-600'}`}>{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)'
        }}
        iconColor={isDark ? 'text-[#A4FF4E]/50' : 'text-[#22C55E]/50'}
      />

      {/* Budget Justification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Budget Justification</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#A4FF4E]/80' : 'text-[#22C55E]/80'}`}>
              How each dollar creates lasting community capacity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-xl border-2 ${
              isDark 
                ? 'border-[#A4FF4E] bg-black/80 text-white' 
                : 'border-[#22C55E] bg-white/80 text-black border-gray-200'
            } shadow-neon`}
          >
            <div className="space-y-12">
              <div className={`p-6 rounded-lg border ${
                isDark 
                  ? 'bg-[#A4FF4E]/5 border-[#A4FF4E]/20' 
                  : 'bg-[#22C55E]/5 border-[#22C55E]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Program Salaries & Wages (41% of budget)</h3>
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Lead Developer (PT) - 7,000</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      10 hours per week for twelve months to build, secure, and document the open-core website 
                      and Learning Portal. This role ensures the platform is robust, well-documented, and 
                      ready for community use.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Bilingual Coordinator (PT) - $3,300</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      6 hours per week for twelve months to translate UI, caption videos, run online help desk, 
                      and ensure the platform serves Miami's diverse community effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDark 
                  ? 'bg-[#A4FF4E]/5 border-[#A4FF4E]/20' 
                  : 'bg-[#22C55E]/5 border-[#22C55E]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Contracted Services (23% of budget)</h3>
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Web/LMS Codebase Development - $3,500</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Building the React + Supabase platform with QR links, live visitor stats, and three 
                      micro-courses: Web-Design for Smart Signs, Ethical AI Agents, and Bilingual SEO.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Automation Scripts - $1,500</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Scripts that copy weekly metrics to GitHub and clean data for the dashboard, ensuring 
                      transparency and easy reporting.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Documentation & Testing - $850</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Comprehensive documentation and testing to ensure the platform is reliable and 
                      user-friendly for community stewards.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDark 
                  ? 'bg-[#A4FF4E]/5 border-[#A4FF4E]/20' 
                  : 'bg-[#22C55E]/5 border-[#22C55E]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Hardware & Materials (28% of budget)</h3>
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Smart Signs - $2,400</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Two museum-grade Smart Signs for Bakehouse & Locust lobbies to broadcast events and 
                      impact data, creating visible community engagement.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Learning Stations - $1,800</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Twelve Raspberry-Pi learning stations for workshops, allowing participants to code 
                      along and preview results instantly.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Projectors - $2,000</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Portable LaserCube and short-throw LED projectors for pop-up events, projecting 
                      AI visuals, live stats, and partner branding.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Demo Laptop - $700</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Refurbished Legion laptop for live demos and development work during events.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDark 
                  ? 'bg-[#A4FF4E]/5 border-[#A4FF4E]/20' 
                  : 'bg-[#22C55E]/5 border-[#22C55E]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Cloud & Admin Costs (6% of budget)</h3>
                <div className="space-y-6">
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Supabase Pro - $600</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Twelve months of reliable database and backend services for the platform.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>PostHog Analytics - $400</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Twelve months of analytics to track community engagement and platform usage.
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Streamlabs - $400</h4>
                    <p className={isDark ? 'text-white' : 'text-black'}>
                      Twelve months of reliable livestreaming services for events and tutorials.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDark 
                  ? 'bg-[#A4FF4E]/5 border-[#A4FF4E]/20' 
                  : 'bg-[#22C55E]/5 border-[#22C55E]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Contingency & Spare Parts (2% of budget)</h3>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                  <p className={isDark ? 'text-white' : 'text-black'}>
                    Extra cables, backup Raspberry Pi, and replacement projector lamp to ensure everything 
                    keeps running smoothly during events. This small buffer prevents disruptions and 
                    maintains professional quality.
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDark 
                  ? 'bg-[#A4FF4E]/5 border-[#A4FF4E]/20' 
                  : 'bg-[#22C55E]/5 border-[#22C55E]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Alignment with Fund Priorities</h3>
                <ul className="space-y-4">
                  <li className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`} />
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Digital tools & infrastructure:</span>
                      <span className={isDark ? 'text-white' : 'text-black'}> Smart Signs, Pi kits, and cloud stack give artists concrete technology they can control.</span>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`} />
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Capacity-building expertise:</span>
                      <span className={isDark ? 'text-white' : 'text-black'}> 41% of funds pay humans who transfer skills, not just install gear.</span>
                    </div>
                  </li>
                  <li className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`} />
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Replicability & sustainability:</span>
                      <span className={isDark ? 'text-white' : 'text-black'}> Open-source code, Creative-Commons templates, and clear earned-income pathway let the model grow without perpetual grants.</span>
                    </div>
                  </li>
                </ul>
                <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
                  <p className={isDark ? 'text-white' : 'text-black'}>
                    At $24,950, every Knight dollar directly amplifies community voices, leaving Miami with 
                    working screens, trained stewards, and an evidence-based template ready for replication.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)'
        }}
        iconColor={isDark ? 'text-[#A4FF4E]/50' : 'text-[#22C55E]/50'}
      />

      {/* Budget Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Quarterly Spending</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#A4FF4E]/80' : 'text-[#22C55E]/80'}`}>
              Projected expenditure timeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-xl border-2 ${
              isDark 
                ? 'border-[#A4FF4E] bg-black/80 text-white' 
                : 'border-[#22C55E] bg-white/80 text-black border-gray-200'
            } shadow-neon`}
          >
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { quarter: 'Q3 2025', amount: 8500 },
                    { quarter: 'Q4 2025', amount: 7200 },
                    { quarter: 'Q1 2026', amount: 5800 },
                    { quarter: 'Q2 2026', amount: 3450 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#A4FF4E22" : "#22C55E22"} />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fill: primaryColor }}
                  />
                  <YAxis
                    tick={{ fill: primaryColor }}
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{
                      backgroundColor: isDark ? '#18181b' : '#ffffff',
                      border: `1px solid ${primaryColor}`,
                      borderRadius: '0.5rem',
                      color: primaryColor,
                      boxShadow: `0 0 24px ${primaryColor}44`,
                    }}
                    itemStyle={{
                      color: primaryColor,
                    }}
                  />
                  <Bar dataKey="amount" fill={primaryColor} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(34, 197, 94, 0.1)'
        }}
        iconColor={isDark ? 'text-[#A4FF4E]/50' : 'text-[#22C55E]/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Explore Related Analysis</h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${isDark ? 'text-[#A4FF4E]/80' : 'text-[#22C55E]/80'}`}>
              See how this budget translates into measurable impact and sustainable growth
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
                <div className={`relative overflow-hidden rounded-2xl border-2 ${
                  isDark 
                    ? 'border-[#A4FF4E] bg-black/80 hover:bg-[#A4FF4E]/5' 
                    : 'border-[#22C55E] bg-white/80 hover:bg-[#22C55E]/5'
                } transition-all duration-300 cursor-pointer p-8 text-center`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5' 
                      : 'bg-gradient-to-r from-[#22C55E]/5 via-[#16A34A]/5 to-[#22C55E]/5'
                  }`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-[#A4FF4E] to-[#00FF88]' 
                        : 'bg-gradient-to-br from-[#22C55E] to-[#16A34A]'
                    }`}>
                      <BarChart className={`w-8 h-8 ${isDark ? 'text-black' : 'text-white'}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:transition-colors duration-300 ${
                      isDark 
                        ? 'text-white group-hover:text-[#A4FF4E]' 
                        : 'text-black group-hover:text-[#22C55E]'
                    }`}>
                      Impact & ROI Analysis
                    </h3>
                    <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      See how $24,950 creates measurable community impact with live metrics tracking and detailed outcomes
                    </p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
                      isDark 
                        ? 'bg-[#A4FF4E]/20 text-[#A4FF4E]' 
                        : 'bg-[#22C55E]/20 text-[#22C55E]'
                    }`}>
                      <span>View Impact</span>
                      <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 rotate-180" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm ${
                    isDark 
                      ? 'bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E]' 
                      : 'bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#22C55E]'
                  }`} />
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
                <div className={`relative overflow-hidden rounded-2xl border-2 ${
                  isDark 
                    ? 'border-[#A4FF4E] bg-black/80 hover:bg-[#A4FF4E]/5' 
                    : 'border-[#22C55E] bg-white/80 hover:bg-[#22C55E]/5'
                } transition-all duration-300 cursor-pointer p-8 text-center`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5' 
                      : 'bg-gradient-to-r from-[#22C55E]/5 via-[#16A34A]/5 to-[#22C55E]/5'
                  }`} />
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-[#A4FF4E] to-[#00FF88]' 
                        : 'bg-gradient-to-br from-[#22C55E] to-[#16A34A]'
                    }`}>
                      <Sparkles className={`w-8 h-8 ${isDark ? 'text-black' : 'text-white'}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:transition-colors duration-300 ${
                      isDark 
                        ? 'text-white group-hover:text-[#A4FF4E]' 
                        : 'text-black group-hover:text-[#22C55E]'
                    }`}>
                      Sustainability Model
                    </h3>
                    <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Discover how this investment becomes a self-funding ecosystem through the sustainability flywheel
                    </p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
                      isDark 
                        ? 'bg-[#A4FF4E]/20 text-[#A4FF4E]' 
                        : 'bg-[#22C55E]/20 text-[#22C55E]'
                    }`}>
                      <span>View Model</span>
                      <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 rotate-180" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm ${
                    isDark 
                      ? 'bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E]' 
                      : 'bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#22C55E]'
                  }`} />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`mt-12 p-6 rounded-xl border ${
              isDark 
                ? 'border-[#A4FF4E]/20 bg-black/40' 
                : 'border-[#22C55E]/20 bg-gray-50'
            } max-w-2xl mx-auto text-center`}
          >
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              <span className={`font-medium ${isDark ? 'text-[#A4FF4E]' : 'text-[#22C55E]'}`}>Budget transparency</span> and impact measurement go hand-in-hand. Explore how each dollar creates lasting community value.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 