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
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';

interface TimelineItem {
  quarter: string;
  period: string;
  internalBeats: string[];
  flagshipMoment: string;
  date: string;
  image: string;
  description: string;
}

// Budget data structure for charts
const budgetData = {
  totalRequest: 80000,
  categories: [
    {
      name: "Phase-0 Room Refresh",
      amount: 12000,
      percentage: 15,
      breakdown: [
        { title: "Paint, epoxy patch, blackout roller-shades", amount: 5000 },
        { title: "Replace fluorescents with flat-panel LEDs", amount: 4000 },
        { title: "Two sit-stand benches", amount: 2000 },
        { title: "1 Gb unmanaged switch + cabling", amount: 1000 }
      ],
      description: "Lab feels 'future' on Day 1"
    },
    {
      name: "Phase-1 Core Workstations",
      amount: 32000,
      percentage: 40,
      breakdown: [
        { title: "PC #1 (RTX 4080) for AI compute", amount: 12000 },
        { title: "PC #2 (RTX 4080) for render queue", amount: 12000 },
        { title: "Mac Studio (M3 Max) for motion graphics", amount: 6000 },
        { title: "48 TB QNAP NAS + UPS", amount: 2000 }
      ],
      description: "Central asset hub; scales to 30+ resident logins"
    },
    {
      name: "Phase-2 XR / Imaging / Prototyping",
      amount: 20000,
      percentage: 25,
      breakdown: [
        { title: "3× Meta Quest 3", amount: 4500 },
        { title: "Sony A7c II + stabiliser", amount: 3500 },
        { title: "Bambu X1C FDM + Elegoo Saturn 4 resin", amount: 8000 },
        { title: "Insta360 X4", amount: 4000 }
      ],
      description: "Rapid physical prototyping and 360° documentation"
    },
    {
      name: "Phase-3 Presentation & Streaming",
      amount: 8000,
      percentage: 10,
      breakdown: [
        { title: "86″ mobile 4K display", amount: 3000 },
        { title: "Epson ultra-short-throw", amount: 2000 },
        { title: "Blackmagic capture cards", amount: 1500 },
        { title: "2× Rode Wireless GO II lavs", amount: 1500 }
      ],
      description: "Drives livestream and ticket revenue"
    },
    {
      name: "Contingency / Growth Buffer",
      amount: 8000,
      percentage: 10,
      breakdown: [
        { title: "Shipping and warranties", amount: 3000 },
        { title: "Spare VR controllers", amount: 2500 },
        { title: "Extra printheads", amount: 2500 }
      ],
      description: "Allows quick pivot to new class demand"
    }
  ]
};

const COLORS = ['#A4FF4E', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

export default function OoliteDigitalBudgetPage() {
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
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavOolite />

      {/* Hero Section with Budget Overview */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              Total funding request for Oolite Digital Arts Lab
            </p>
          </motion.div>

          {/* Budget Charts Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Budget Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700`}>
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-bold">Budget Overview</h3>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-500 mb-2">
                    {formatCurrency(budgetData.totalRequest)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Total Budget Request</p>
                </div>

                <div className="space-y-4">
                  {budgetData.categories.map((category, index) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{formatCurrency(category.amount)}</div>
                        <div className="text-sm text-gray-500">{category.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Budget Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Budget Distribution</h3>
              </div>

              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData.categories}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="amount"
                      label={({ name, percentage }) => `${name} ${percentage}%`}
                    >
                      {budgetData.categories.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          opacity={0.8}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => [formatCurrency(value), 'Amount']}
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
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
                          alt={`${item.quarter} - ${item.flagshipMoment}`