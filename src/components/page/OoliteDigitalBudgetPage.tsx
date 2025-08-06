"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  BarChart3,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Package,
  Monitor,
  Camera,
  Video,
  Wifi,
  Printer,
  Headphones
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

// Budget data structure for charts
const budgetData = {
  totalRequest: 80000,
  categories: [
    {
      name: "Phase-0 Room Refresh",
      amount: 12000,
      percentage: 15,
      icon: Package,
      color: '#A4FF4E',
      breakdown: [
        { 
          title: "Paint, epoxy patch, blackout roller-shades", 
          amount: 5000,
          description: "Complete room refresh with professional-grade materials",
          details: ["Premium paint and epoxy", "Custom blackout shades", "Professional installation"]
        },
        { 
          title: "Replace fluorescents with flat-panel LEDs", 
          amount: 4000,
          description: "Modern LED lighting system for optimal workspace illumination",
          details: ["Energy-efficient LED panels", "Professional installation", "Warranty coverage"]
        },
        { 
          title: "Two sit-stand benches", 
          amount: 2000,
          description: "Ergonomic workstations for flexible seating arrangements",
          details: ["Adjustable height", "Durable construction", "Assembly included"]
        },
        { 
          title: "1 Gb unmanaged switch + cabling", 
          amount: 1000,
          description: "Network infrastructure for high-speed connectivity",
          details: ["Gigabit switch", "Cat6 cabling", "Professional installation"]
        }
      ],
      description: "Lab feels 'future' on Day 1"
    },
    {
      name: "Phase-1 Core Workstations",
      amount: 32000,
      percentage: 40,
      icon: Monitor,
      color: '#3B82F6',
      breakdown: [
        { 
          title: "PC #1 (RTX 4080) for AI compute", 
          amount: 12000,
          description: "High-performance workstation optimized for AI and machine learning",
          details: ["RTX 4080 GPU", "64GB RAM", "2TB NVMe SSD", "Professional software licenses"]
        },
        { 
          title: "PC #2 (RTX 4080) for render queue", 
          amount: 12000,
          description: "Dedicated rendering workstation for 3D and video processing",
          details: ["RTX 4080 GPU", "64GB RAM", "4TB NVMe SSD", "Render farm software"]
        },
        { 
          title: "Mac Studio (M3 Max) for motion graphics", 
          amount: 6000,
          description: "Apple's latest workstation for creative professionals",
          details: ["M3 Max chip", "32GB unified memory", "1TB SSD", "Final Cut Pro license"]
        },
        { 
          title: "48 TB QNAP NAS + UPS", 
          amount: 2000,
          description: "Centralized storage solution with backup power",
          details: ["48TB RAID storage", "Uninterruptible power supply", "Network management software"]
        }
      ],
      description: "Central asset hub; scales to 30+ resident logins"
    },
    {
      name: "Phase-2 XR / Imaging / Prototyping",
      amount: 20000,
      percentage: 25,
      icon: Camera,
      color: '#8B5CF6',
      breakdown: [
        { 
          title: "3× Meta Quest 3", 
          amount: 4500,
          description: "Virtual reality headsets for immersive experiences",
          details: ["3x Meta Quest 3 headsets", "Accessories and controllers", "VR development software"]
        },
        { 
          title: "Sony A7c II + stabiliser", 
          amount: 3500,
          description: "Professional mirrorless camera for high-quality video",
          details: ["Sony A7c II body", "Gimbal stabilizer", "Professional lenses", "Memory cards"]
        },
        { 
          title: "Bambu X1C FDM + Elegoo Saturn 4 resin", 
          amount: 8000,
          description: "3D printing capabilities for rapid prototyping",
          details: ["Bambu X1C FDM printer", "Elegoo Saturn 4 resin printer", "Materials and supplies", "Safety equipment"]
        },
        { 
          title: "Insta360 X4", 
          amount: 4000,
          description: "360-degree camera for immersive content creation",
          details: ["Insta360 X4 camera", "Accessories and mounts", "Editing software license", "Storage solutions"]
        }
      ],
      description: "Rapid physical prototyping and 360° documentation"
    },
    {
      name: "Phase-3 Presentation & Streaming",
      amount: 8000,
      percentage: 10,
      icon: Video,
      color: '#EC4899',
      breakdown: [
        { 
          title: "86″ mobile 4K display", 
          amount: 3000,
          description: "Large format display for presentations and screenings",
          details: ["86-inch 4K display", "Mobile stand", "HDMI and connectivity", "Professional calibration"]
        },
        { 
          title: "Epson ultra-short-throw", 
          amount: 2000,
          description: "Projector for large-scale presentations",
          details: ["Ultra-short-throw projector", "Mounting hardware", "Professional installation", "Warranty"]
        },
        { 
          title: "Blackmagic capture cards", 
          amount: 1500,
          description: "Professional video capture and streaming equipment",
          details: ["Blackmagic capture cards", "Cabling and adapters", "Software licenses", "Technical support"]
        },
        { 
          title: "2× Rode Wireless GO II lavs", 
          amount: 1500,
          description: "Wireless audio system for professional recording",
          details: ["2x Rode Wireless GO II", "Lavalier microphones", "Charging cases", "Audio accessories"]
        }
      ],
      description: "Drives livestream and ticket revenue"
    },
    {
      name: "Contingency / Growth Buffer",
      amount: 8000,
      percentage: 10,
      icon: Package,
      color: '#F59E0B',
      breakdown: [
        { 
          title: "Shipping and warranties", 
          amount: 3000,
          description: "Logistics and extended warranty coverage",
          details: ["Professional shipping", "Extended warranties", "Insurance coverage", "Import duties"]
        },
        { 
          title: "Spare VR controllers", 
          amount: 2500,
          description: "Replacement parts and accessories",
          details: ["VR controller replacements", "Cables and adapters", "Protective cases", "Cleaning supplies"]
        },
        { 
          title: "Extra printheads", 
          amount: 2500,
          description: "3D printer maintenance and consumables",
          details: ["3D printer nozzles", "Print beds", "Filament and resin", "Maintenance tools"]
        }
      ],
      description: "Allows quick pivot to new class demand"
    }
  ]
};

const COLORS = ['#A4FF4E', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'];

export default function OoliteDigitalBudgetPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const toggleCategoryExpansion = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const scrollToCategory = (categoryName: string) => {
    // First expand the category if it's not already expanded
    if (!expandedCategories.has(categoryName)) {
      toggleCategoryExpansion(categoryName);
    }
    
    // Then scroll to the category section
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryName.replace(/\s+/g, '-').toLowerCase()}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Custom tooltip component for better contrast
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className={`p-4 rounded-lg shadow-lg border ${
          isDark 
            ? 'bg-gray-900 border-gray-700 text-white' 
            : 'bg-white border-gray-200 text-gray-900'
        }`}>
          <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {data.name}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Amount: {formatCurrency(data.value)}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Percentage: {data.payload.percentage}%
          </p>
        </div>
      );
    }
    return null;
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
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Click any phase below to view detailed breakdown
                  </p>
                </div>

                <div className="space-y-4">
                  {budgetData.categories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      onClick={() => scrollToCategory(category.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full transition-transform group-hover:scale-110"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {formatCurrency(category.amount)}
                        </div>
                        <div className="text-sm text-gray-500 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                          {category.percentage}%
                        </div>
                      </div>
                    </motion.button>
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
                      content={<CustomTooltip />}
                      cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Detailed Expense Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                Detailed Expense Breakdown
              </h2>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Comprehensive breakdown of all expenses by phase and category
              </p>
            </div>

            {budgetData.categories.map((category, index) => (
              <motion.div
                key={category.name}
                id={`category-${category.name.replace(/\s+/g, '-').toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`${
                  isDark ? 'bg-gray-800/50' : 'bg-white'
                } rounded-xl border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                } overflow-hidden`}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategoryExpansion(category.name)}
                  className={`w-full p-6 flex items-center justify-between text-left hover:bg-opacity-80 transition-colors ${
                    isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                  } ${expandedCategories.has(category.name) ? 'bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon 
                        className="w-6 h-6" 
                        style={{ color: category.color }}
                      />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        {category.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        {formatCurrency(category.amount)}
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {category.percentage}% of total
                      </div>
                    </div>
                    {expandedCategories.has(category.name) ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Category Details */}
                {expandedCategories.has(category.name) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.breakdown.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`${
                            isDark ? 'bg-gray-700/30' : 'bg-gray-50'
                          } p-4 rounded-lg border ${
                            isDark ? 'border-gray-600' : 'border-gray-200'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                              {item.title}
                            </h4>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                            }`}>
                              {formatCurrency(item.amount)}
                            </span>
                          </div>
                          <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                          <ul className="space-y-1">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className={`flex items-center gap-2 text-xs ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}