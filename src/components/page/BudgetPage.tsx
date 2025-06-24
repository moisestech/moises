'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
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
        { title: "Lead Developer (PT) - 10 hrs/week × 6 months × $29/hr", amount: 7000 },
        { title: "Bilingual Coordinator (PT) - 6 hrs/week × 6 months × $23/hr", amount: 3300 }
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
        { title: "Supabase Pro (6 months)", amount: 600 },
        { title: "PostHog analytics (6 months)", amount: 400 },
        { title: "Streamlabs for livestreaming (6 months)", amount: 400 }
      ],
      description: "Six months of cloud services for reliable platform operation"
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className={`min-h-screen bg-black text-white`}>
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
              <DollarSign className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Budget Details
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {formatCurrency(budgetData.totalRequest)}
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Total funding request for 12-month AI24 program
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

      {/* Budget Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Budget Breakdown</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Detailed allocation of $24,950 for maximum community impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon"
            >
              <h3 className="text-xl font-bold mb-6 text-[#A4FF4E]">Budget Distribution</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData.categories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#A4FF4E"
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
                        backgroundColor: '#18181b',
                        border: '1px solid #A4FF4E',
                        borderRadius: '0.5rem',
                        color: '#A4FF4E',
                        boxShadow: '0 0 24px #A4FF4E44',
                      }}
                      itemStyle={{
                        color: '#A4FF4E',
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
                  className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#A4FF4E]">{category.name}</h3>
                    <div className="text-xl font-bold text-[#A4FF4E]">
                      {formatCurrency(category.amount)}
                    </div>
                  </div>
                  <p className="text-[#A4FF4E]/80 mb-4 text-sm">{category.description}</p>
                  <div className="space-y-3">
                    {category.breakdown.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between"
                      >
                        <span className="text-[#A4FF4E]/80 text-sm">{item.title}</span>
                        <span className="text-[#A4FF4E]/80 text-sm font-mono">{formatCurrency(item.amount)}</span>
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Budget Justification</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              How each dollar creates lasting community capacity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Program Salaries & Wages (41% of budget)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Lead Developer (PT) - $7,000</h4>
                    <p className="text-[#A4FF4E]/80">
                      10 hours per week for six months to build, secure, and document the open-core website 
                      and Learning Portal. This role ensures the platform is robust, well-documented, and 
                      ready for community use.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Bilingual Coordinator (PT) - $3,300</h4>
                    <p className="text-[#A4FF4E]/80">
                      6 hours per week for six months to translate UI, caption videos, run online help desk, 
                      and ensure the platform serves Miami's diverse community effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Contracted Services (23% of budget)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Web/LMS Codebase Development - $3,500</h4>
                    <p className="text-[#A4FF4E]/80">
                      Building the React + Supabase platform with QR links, live visitor stats, and three 
                      micro-courses: Web-Design for Smart Signs, Ethical AI Agents, and Bilingual SEO.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Automation Scripts - $1,500</h4>
                    <p className="text-[#A4FF4E]/80">
                      Scripts that copy weekly metrics to GitHub and clean data for the dashboard, ensuring 
                      transparency and easy reporting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Documentation & Testing - $850</h4>
                    <p className="text-[#A4FF4E]/80">
                      Comprehensive documentation and testing to ensure the platform is reliable and 
                      user-friendly for community stewards.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Hardware & Materials (28% of budget)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Smart Signs - $2,400</h4>
                    <p className="text-[#A4FF4E]/80">
                      Two museum-grade Smart Signs for Bakehouse & Locust lobbies to broadcast events and 
                      impact data, creating visible community engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Learning Stations - $1,800</h4>
                    <p className="text-[#A4FF4E]/80">
                      Twelve Raspberry-Pi learning stations for workshops, allowing participants to code 
                      along and preview results instantly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Projectors - $2,000</h4>
                    <p className="text-[#A4FF4E]/80">
                      Portable LaserCube and short-throw LED projectors for pop-up events, projecting 
                      AI visuals, live stats, and partner branding.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Demo Laptop - $700</h4>
                    <p className="text-[#A4FF4E]/80">
                      Refurbished Legion laptop for live demos and development work during events.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Cloud & Admin Costs (6% of budget)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Supabase Pro - $600</h4>
                    <p className="text-[#A4FF4E]/80">
                      Six months of reliable database and backend services for the platform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">PostHog Analytics - $400</h4>
                    <p className="text-[#A4FF4E]/80">
                      Six months of analytics to track community engagement and platform usage.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-[#A4FF4E]">Streamlabs - $400</h4>
                    <p className="text-[#A4FF4E]/80">
                      Six months of reliable livestreaming services for events and tutorials.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Contingency & Spare Parts (2% of budget)</h3>
                <p className="text-[#A4FF4E]/80">
                  Extra cables, backup Raspberry Pi, and replacement projector lamp to ensure everything 
                  keeps running smoothly during events. This small buffer prevents disruptions and 
                  maintains professional quality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Alignment with Fund Priorities</h3>
                <ul className="space-y-2 text-[#A4FF4E]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-[#A4FF4E] flex-shrink-0" />
                    <span><strong>Digital tools & infrastructure:</strong> Smart Signs, Pi kits, and cloud stack give artists concrete technology they can control.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-[#A4FF4E] flex-shrink-0" />
                    <span><strong>Capacity-building expertise:</strong> 41% of funds pay humans who transfer skills, not just install gear.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-[#A4FF4E] flex-shrink-0" />
                    <span><strong>Replicability & sustainability:</strong> Open-source code, Creative-Commons templates, and clear earned-income pathway let the model grow without perpetual grants.</span>
                  </li>
                </ul>
                <p className="mt-4 text-[#A4FF4E]/80">
                  At $24,950, every Knight dollar directly amplifies community voices, leaving Miami with 
                  working screens, trained stewards, and an evidence-based template ready for replication.
                </p>
              </div>
            </div>
          </motion.div>
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

      {/* Budget Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Quarterly Spending</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Projected expenditure timeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon"
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
                  <CartesianGrid strokeDasharray="3 3" stroke="#A4FF4E22" />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fill: '#A4FF4E' }}
                  />
                  <YAxis
                    tick={{ fill: '#A4FF4E' }}
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{
                      backgroundColor: '#18181b',
                      border: '1px solid #A4FF4E',
                      borderRadius: '0.5rem',
                      color: '#A4FF4E',
                      boxShadow: '0 0 24px #A4FF4E44',
                    }}
                    itemStyle={{
                      color: '#A4FF4E',
                    }}
                  />
                  <Bar dataKey="amount" fill="#A4FF4E" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 