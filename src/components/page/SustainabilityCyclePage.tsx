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
  RefreshCw,
  DollarSign,
  Users,
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  Globe,
  Building2,
  Lightbulb,
  Shield,
  Activity,
  BarChart,
  Clock,
  Sparkles,
  Code,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const flywheelStages = [
  {
    stage: "1. Initial Investment",
    title: "Knight Foundation Grant",
    amount: "$24,950",
    description: "Seed funding to launch the program",
    icon: DollarSign,
    color: "text-[#A4FF4E]",
    bgColor: "bg-[#A4FF4E]/20"
  },
  {
    stage: "2. Community Engagement",
    title: "Workshops & Training",
    participants: "1,025+",
    description: "Free workshops across Miami venues",
    icon: Users,
    color: "text-[#3B82F6]",
    bgColor: "bg-[#3B82F6]/20"
  },
  {
    stage: "3. Skill Development",
    title: "Digital Literacy",
    impact: "220+ Artists",
    description: "Trained in AI and creative technology",
    icon: Target,
    color: "text-[#EC4899]",
    bgColor: "bg-[#EC4899]/20"
  },
  {
    stage: "4. Revenue Generation",
    title: "Smart Sign Venue Licenses",
    revenue: "$99/month",
    description: "Per venue for Smart Sign services",
    icon: TrendingUp,
    color: "text-[#8B5CF6]",
    bgColor: "bg-[#8B5CF6]/20"
  },
  {
    stage: "5. Sustainable Growth",
    title: "Self-Funding Model",
    projection: "$60K/year",
    description: "Projected annual revenue by 2026",
    icon: RefreshCw,
    color: "text-[#10B981]",
    bgColor: "bg-[#10B981]/20"
  }
];

const sustainabilityMetrics = [
  {
    metric: "3x",
    label: "ROI Multiplier",
    description: "Every $1 generates $3 in community value",
    icon: TrendingUp,
    color: "text-[#A4FF4E]"
  },
  {
    metric: "70%",
    label: "Local Investment",
    description: "Of budget goes directly to Miami talent",
    icon: Users,
    color: "text-[#3B82F6]"
  },
  {
    metric: "100%",
    label: "Open Source",
    description: "All tools and code freely available",
    icon: Globe,
    color: "text-[#EC4899]"
  },
  {
    metric: "∞",
    label: "Scalability",
    description: "Model can be replicated in other cities",
    icon: RefreshCw,
    color: "text-[#8B5CF6]"
  }
];

export default function SustainabilityCyclePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen bg-black text-white">
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <RefreshCw className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Sustainability Model
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Flywheel Sustainability
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              How $24,950 becomes a self-funding ecosystem for Miami's creative community
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={RefreshCw}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Flywheel Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Sustainability Flywheel</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              A self-reinforcing cycle of investment, engagement, and growth
            </p>
          </motion.div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="block lg:hidden">
            <div className="space-y-6 max-w-md mx-auto">
              {flywheelStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < flywheelStages.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-6 bg-[#A4FF4E]/60 z-0"></div>
                  )}
                  
                  <div className="w-full p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/90 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-full ${stage.bgColor} flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(stage.icon, {
                          className: `${stage.color} w-6 h-6`
                        })}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-[#A4FF4E]/80">{stage.stage}</div>
                        <div className={`text-lg font-bold ${stage.color}`}>{stage.title}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {stage.amount && (
                        <div className={`text-2xl font-bold ${stage.color}`}>{stage.amount}</div>
                      )}
                      {stage.participants && (
                        <div className={`text-2xl font-bold ${stage.color}`}>{stage.participants}</div>
                      )}
                      {stage.impact && (
                        <div className={`text-2xl font-bold ${stage.color}`}>{stage.impact}</div>
                      )}
                      {stage.revenue && (
                        <div className={`text-2xl font-bold ${stage.color}`}>{stage.revenue}</div>
                      )}
                      {stage.projection && (
                        <div className={`text-2xl font-bold ${stage.color}`}>{stage.projection}</div>
                      )}
                      <div className="text-sm text-gray-300">{stage.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet Layout - Grid */}
          <div className="hidden lg:block xl:hidden">
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {flywheelStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-full p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/90 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${stage.bgColor} flex items-center justify-center`}>
                        {React.createElement(stage.icon, {
                          className: `${stage.color} w-5 h-5`
                        })}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#A4FF4E]/80">{stage.stage}</div>
                        <div className={`text-lg font-bold ${stage.color}`}>{stage.title}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {stage.amount && (
                        <div className={`text-xl font-bold ${stage.color}`}>{stage.amount}</div>
                      )}
                      {stage.participants && (
                        <div className={`text-xl font-bold ${stage.color}`}>{stage.participants}</div>
                      )}
                      {stage.impact && (
                        <div className={`text-xl font-bold ${stage.color}`}>{stage.impact}</div>
                      )}
                      {stage.revenue && (
                        <div className={`text-xl font-bold ${stage.color}`}>{stage.revenue}</div>
                      )}
                      {stage.projection && (
                        <div className={`text-xl font-bold ${stage.color}`}>{stage.projection}</div>
                      )}
                      <div className="text-sm text-gray-300">{stage.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Circular Flywheel */}
          <div className="hidden xl:block">
            <div className="relative max-w-6xl mx-auto" style={{ height: '800px' }}>
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#10B981] flex items-center justify-center shadow-[0_0_50px_rgba(164,255,78,0.5)]"
                >
                  <RefreshCw className="w-12 h-12 text-black" />
                </motion.div>
              </div>

              {/* Connecting Lines - Desktop Only */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {flywheelStages.map((_, index) => {
                  const angle1 = (index * 72) - 90;
                  const angle2 = ((index + 1) * 72) - 90;
                  const radius = 280;
                  const centerX = 400; // Half of max-width
                  const centerY = 400; // Half of height
                  const x1 = Math.cos((angle1 * Math.PI) / 180) * radius + centerX;
                  const y1 = Math.sin((angle1 * Math.PI) / 180) * radius + centerY;
                  const x2 = Math.cos((angle2 * Math.PI) / 180) * radius + centerX;
                  const y2 = Math.sin((angle2 * Math.PI) / 180) * radius + centerY;

                  return (
                    <motion.line
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: index * 0.2 + 1, duration: 1 }}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#A4FF4E"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.6"
                    />
                  );
                })}
              </svg>

              {/* Flywheel Stages */}
              <div className="relative w-full h-full">
                {flywheelStages.map((stage, index) => {
                  const angle = (index * 72) - 90; // 360° / 5 stages = 72°, start at -90° for top
                  const radius = 280; // Distance from center
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={stage.stage}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                      }}
                    >
                      <div className="w-64 p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/90 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full ${stage.bgColor} flex items-center justify-center`}>
                            {React.createElement(stage.icon, {
                              className: `${stage.color} w-5 h-5`
                            })}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-[#A4FF4E]/80">{stage.stage}</div>
                            <div className={`text-lg font-bold ${stage.color}`}>{stage.title}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {stage.amount && (
                            <div className={`text-2xl font-bold ${stage.color}`}>{stage.amount}</div>
                          )}
                          {stage.participants && (
                            <div className={`text-2xl font-bold ${stage.color}`}>{stage.participants}</div>
                          )}
                          {stage.impact && (
                            <div className={`text-2xl font-bold ${stage.color}`}>{stage.impact}</div>
                          )}
                          {stage.revenue && (
                            <div className={`text-2xl font-bold ${stage.color}`}>{stage.revenue}</div>
                          )}
                          {stage.projection && (
                            <div className={`text-2xl font-bold ${stage.color}`}>{stage.projection}</div>
                          )}
                          <div className="text-sm text-gray-300">{stage.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
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

      {/* Sustainability Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sustainability Metrics</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Key indicators of our sustainable impact model
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {sustainabilityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center`}>
                  {React.createElement(metric.icon, {
                    className: `${metric.color} w-7 h-7`
                  })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.metric}</div>
                <div className="font-medium mb-2 text-white">{metric.label}</div>
                <div className="text-sm text-gray-300">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Building2}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Sustainability Tracking Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sustainability Tracking</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-4">
              Key metrics for long-term sustainability and community engagement
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30">
              <Activity className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm text-[#A4FF4E]">Real-time tracking throughout the grant period</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Community Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300 p-8">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF4E] transition-colors duration-300 text-center">
                    Community Code Contributions
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#10B981] mb-2">≥3</div>
                    <div className="text-sm text-gray-400">External Pull Requests</div>
                  </div>
                  <p className="text-gray-300 mb-6 text-center">
                    Open-source community engagement and code contributions to ensure long-term project sustainability
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-[#10B981] to-[#059669] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#10B981]/20 text-[#10B981] font-medium">
                      Target: Community Engagement
                    </span>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#10B981] via-[#059669] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              </div>
            </motion.div>

            {/* Nonprofit License */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300 p-8">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF4E] transition-colors duration-300 text-center">
                    Nonprofit License Model
                  </h3>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#F59E0B] mb-2">$99</div>
                    <div className="text-sm text-gray-400">Per Month</div>
                  </div>
                  <p className="text-gray-300 mb-6 text-center">
                    Sustainable revenue model covering Year-2 hosting costs and ensuring long-term project viability
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#F59E0B]/20 text-[#F59E0B] font-medium">
                      Target: Revenue Generation
                    </span>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              </div>
            </motion.div>
          </div>

          {/* Sustainability Model Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 shadow-neon max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#00FF88] flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#A4FF4E] mb-4">Sustainable Replication Model</h3>
              <p className="text-gray-300 mb-4">
                Community contributions + nonprofit licensing = Year-2 hosting covered
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30">
                <span className="text-sm text-[#A4FF4E] font-medium">
                  Self-funding ecosystem for long-term impact
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={DollarSign}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Revenue Streams</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Multiple income sources ensure long-term sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Smart Sign Venue Licenses",
                amount: "$99/month",
                description: "Per venue for Smart Sign services",
                icon: Building2,
                color: "text-[#A4FF4E]"
              },
              {
                title: "Workshop Fees",
                amount: "$150/session",
                description: "Premium workshops for organizations",
                icon: Users,
                color: "text-[#3B82F6]"
              },
              {
                title: "Consulting",
                amount: "$200/hour",
                description: "AI implementation consulting",
                icon: Lightbulb,
                color: "text-[#EC4899]"
              }
            ].map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className={`w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center`}>
                  {React.createElement(stream.icon, {
                    className: `${stream.color} w-7 h-7`
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#A4FF4E]">{stream.title}</h3>
                <div className={`text-2xl font-bold mb-2 ${stream.color}`}>{stream.amount}</div>
                <p className="text-gray-300">{stream.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Link to Impact ROI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/grant/knight-foundation/impact-roi"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
            >
              <BarChart className="w-5 h-5" />
              View Detailed Impact & ROI Analysis
            </Link>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Shield}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Related Analysis</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto mb-8">
              See how the sustainability model connects to budget allocation and measurable impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Budget Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link href="/grant/knight-foundation/budget">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 hover:bg-[#A4FF4E]/5 transition-all duration-300 cursor-pointer p-8 text-center">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#00FF88] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF4E] transition-colors duration-300">
                      Budget Breakdown
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Explore the detailed $24,950 budget allocation that funds this sustainable ecosystem
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/20 text-[#A4FF4E] font-medium">
                      <span>View Budget</span>
                      <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 rotate-180" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                </div>
              </Link>
            </motion.div>

            {/* Impact & ROI Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link href="/grant/knight-foundation/impact-roi">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#A4FF4E] bg-black/80 hover:bg-[#A4FF4E]/5 transition-all duration-300 cursor-pointer p-8 text-center">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/5 via-[#00FF88]/5 to-[#A4FF4E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A4FF4E] to-[#00FF88] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BarChart className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A4FF4E] transition-colors duration-300">
                      Impact & ROI Analysis
                    </h3>
                    <p className="text-gray-300 mb-6">
                      See how the sustainability model translates into measurable community impact and returns
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A4FF4E]/20 text-[#A4FF4E] font-medium">
                      <span>View Impact</span>
                      <ChevronLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 rotate-180" />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A4FF4E] via-[#00FF88] to-[#A4FF4E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 rounded-xl border border-[#A4FF4E]/20 bg-black/40 max-w-2xl mx-auto text-center"
          >
            <p className="text-gray-300">
              <span className="text-[#A4FF4E] font-medium">Sustainability</span> is built on smart budgeting and measurable outcomes. Explore how each component works together.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 