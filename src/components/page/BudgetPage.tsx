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
  Briefcase
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

// Budget data
const budgetData = {
  totalRequest: 24850,
  categories: [
    {
      name: "Staff",
      amount: 15000,
      breakdown: [
        { title: "Moises - Project Lead / Dev (0.3 FTE × 6 mo)", amount: 9000 },
        { title: "Fabiola - Community / Growth (0.15 FTE × 6 mo)", amount: 3000 },
        { title: "Mentor Micro-stipends (3 Miami artists)", amount: 3000 }
      ]
    },
    {
      name: "App / CRM / Signage",
      amount: 4000,
      breakdown: [
        { title: "React + Supabase Board skin (40 hrs)", amount: 3000 },
        { title: "Hosting / SaaS (6 mo)", amount: 1000 }
      ]
    },
    {
      name: "Hardware",
      amount: 3000,
      breakdown: [
        { title: "6 × Raspberry Pi 5 kits + mounts + SD cards", amount: 1200 },
        { title: "Refurbished dev/stream laptop", amount: 800 }
      ]
    },
    {
      name: "Workshop Ops",
      amount: 2000,
      breakdown: [
        { title: "4 free capacity clinics (snacks, ASL, childcare)", amount: 2000 }
      ]
    },
    {
      name: "Infra / Insurance",
      amount: 1000,
      breakdown: [
        { title: "Two weekend van rentals & COI", amount: 1000 }
      ]
    },
    {
      name: "Contingency",
      amount: 850,
      breakdown: [
        { title: "Buffer for parts / overruns", amount: 850 }
      ]
    }
  ]
};

const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#EC4899', '#F43F5E'];

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
    <main className={`min-h-screen ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDark 
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
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Budget Details
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {formatCurrency(budgetData.totalRequest)}
            </h1>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Total funding request for 12-month program
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Building2}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Budget Overview</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Detailed breakdown by category
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white border-gray-200'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Budget Distribution</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData.categories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="amount"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {budgetData.categories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => formatCurrency(value)}
                      contentStyle={{
                        backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                        border: 'none',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                      itemStyle={{
                        color: isDark ? '#E5E7EB' : '#374151',
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
                  className={`p-6 rounded-xl border ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{category.name}</h3>
                    <div className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {formatCurrency(category.amount)}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {category.breakdown.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between"
                      >
                        <span className={
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }>{item.title}</span>
                        <span className={
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }>{formatCurrency(item.amount)}</span>
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
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Budget Justification</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Detailed breakdown of our $24,850 request
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-xl border ${
              isDark
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Staff & Expertise (60% of budget)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Moises Sanabria (Project Lead/Developer, 0.3 FTE) - $9,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Covers 0.3 FTE for six months to design, code, deploy, document, and maintain the open-source 
                      Announcement Board and to lead all four clinics. Knight dollars buy human knowledge that persists 
                      beyond hardware life-cycles.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Fabiola Larios (Community & Growth, 0.15 FTE) - $3,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Funds 0.15 FTE community manager who recruits participants, handles bilingual comms, and tracks 
                      KPIs—critical for equitable reach.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Mentor Stipends - $3,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Pays three Miami artists ($1,000 each) who co-teach, localize curricula, and provide cultural 
                      context—keeping 60%+ of grant dollars in neighborhood paychecks.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Technology & Infrastructure (40% of budget)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>React + Supabase Build - $3,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Freelance support (40 hrs) to harden code, write tests, and create installer scripts so Akron/Detroit 
                      peers can spin up their own boards—core to Knight's digital-capacity goal.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Hosting / SaaS (6 mo) - $1,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Supabase Pro, PostHog cloud, HubSpot Starter, Streamlabs—kept to minimal starter tiers; we teach 
                      these same tools in the clinics.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Hardware (Pi kits) - $1,200</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Six Raspberry Pi 5 players plus SD cards and mounts turn existing venue TVs into boards—low-cost, 
                      replicable infrastructure.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Dev / Stream Laptop - $800</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Refurbished Legion laptop powers live-coding demos and hybrid streaming; chosen for longevity and 
                      repairability.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Workshop Ops - $2,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Snacks, ASL interpreters, childcare, and venue A/V rentals ensure workshops are welcoming to parents, 
                      Deaf participants, and low-income artists—aligning with Knight's inclusion values.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Van Rentals & COI - $1,000</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Two weekend vans plus insurance move gear to Little Haiti & Downtown pop-ups, extending reach to 
                      underserved neighborhoods.
                    </p>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>Contingency (3.5%) - $850</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      Covers minor part failures or bandwidth upgrades; any unspent funds roll into additional screen kits.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Alignment with Fund Priorities</h3>
                <ul className={`space-y-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li><strong>Digital tools & infrastructure:</strong> Boards, Pi kits, and cloud stack give artists concrete technology they can control.</li>
                  <li><strong>Capacity-building expertise:</strong> 60% of funds pay humans (salaries, mentors, interpreters) who transfer skills, not just install gear.</li>
                  <li><strong>Replicability & sustainability:</strong> Open-source code, Creative-Commons templates, and a clear earned-income pathway let the model grow without perpetual grants.</li>
                </ul>
                <p className={`mt-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  At &lt;$25K, every Knight dollar directly amplifies community voices, leaving Miami with working screens, 
                  trained stewards, and an evidence-based template ready for Akron and Detroit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Quarterly Spending</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Projected expenditure timeline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-xl border ${
              isDark
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { quarter: 'Q3 2025', amount: 45000 },
                    { quarter: 'Q4 2025', amount: 40000 },
                    { quarter: 'Q1 2026', amount: 35000 },
                    { quarter: 'Q2 2026', amount: 30000 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fill: isDark ? '#E5E7EB' : '#374151' }}
                  />
                  <YAxis
                    tick={{ fill: isDark ? '#E5E7EB' : '#374151' }}
                    tickFormatter={(value) => formatCurrency(value)}
                  />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{
                      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                      border: 'none',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                    itemStyle={{
                      color: isDark ? '#E5E7EB' : '#374151',
                    }}
                  />
                  <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 