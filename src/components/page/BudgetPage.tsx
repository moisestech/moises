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
  totalRequest: 100000,
  categories: [
    {
      name: "Personnel",
      amount: 60000,
      breakdown: [
        { title: "Program Director", amount: 30000 },
        { title: "Technical Lead", amount: 20000 },
        { title: "Community Manager", amount: 10000 }
      ]
    },
    {
      name: "Equipment",
      amount: 16667,
      breakdown: [
        { title: "Laptops & Tablets", amount: 10000 },
        { title: "Projection Equipment", amount: 4667 },
        { title: "Audio/Video Gear", amount: 2000 }
      ]
    },
    {
      name: "Venue & Events",
      amount: 13333,
      breakdown: [
        { title: "Venue Rentals", amount: 5333 },
        { title: "Catering & Supplies", amount: 4667 },
        { title: "Event Insurance", amount: 3333 }
      ]
    },
    {
      name: "Marketing",
      amount: 6667,
      breakdown: [
        { title: "Digital Advertising", amount: 3333 },
        { title: "Print Materials", amount: 2000 },
        { title: "Community Outreach", amount: 1334 }
      ]
    },
    {
      name: "Software & Services",
      amount: 3333,
      breakdown: [
        { title: "Cloud Credits", amount: 1667 },
        { title: "Software Licenses", amount: 1000 },
        { title: "Streaming Services", amount: 666 }
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