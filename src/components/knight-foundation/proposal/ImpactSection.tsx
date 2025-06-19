'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { BarChart, LineChart, PieChart, Activity, Target, Users } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function ImpactSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const impactAreas = [
    {
      title: 'Analytics Integration',
      icon: BarChart,
      image: '/images/impact/analytics.jpg',
      description: 'PostHog analytics track user engagement, demographics, and content performance.',
      metrics: [
        'Real-time dashboard for venue managers',
        'Custom event tracking for art installations',
        'Demographic insights for equity monitoring'
      ]
    },
    {
      title: 'Data Collection',
      icon: LineChart,
      image: '/images/impact/data.jpg',
      description: 'Comprehensive data gathering through multiple touchpoints.',
      metrics: [
        'Workshop attendance and completion rates',
        'Screen viewership and interaction metrics',
        'Community feedback and satisfaction scores'
      ]
    },
    {
      title: 'Reporting',
      icon: PieChart,
      image: '/images/impact/reporting.jpg',
      description: 'Regular reporting to stakeholders and the community.',
      metrics: [
        'Monthly progress reports to Knight Foundation',
        'Quarterly community impact summaries',
        'Annual comprehensive evaluation'
      ]
    },
    {
      title: 'Transparency',
      icon: Activity,
      image: '/images/impact/transparency.jpg',
      description: 'Open sharing of results and learnings.',
      metrics: [
        'Public dashboard of key metrics',
        'Open-source documentation of methods',
        'Regular community updates'
      ]
    }
  ];

  return (
    <section id="impact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a1a1a] z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#A4FF4E]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <Target className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Impact Tracking
              </span>
            </div>
            <h2 className={`text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Measuring Our Impact
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              We track our impact through comprehensive analytics, data collection, 
              and transparent reporting to ensure we're meeting our goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${
                  isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
                } shadow-neon relative overflow-hidden group`}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-[#A4FF4E]/20' : 'bg-blue-100'
                    }`}>
                      <area.icon className={`w-5 h-5 ${
                        isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                    }`}>
                      {area.title}
                    </h3>
                  </div>

                  <p className={`mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {area.description}
                  </p>

                  <ul className={`space-y-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {area.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          isDark ? 'bg-[#A4FF4E]' : 'bg-blue-500'
                        }`} />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`mt-12 p-6 rounded-xl border-2 ${
              isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
            } shadow-neon`}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-[#A4FF4E]/20' : 'bg-blue-100'
                }`}>
                  <Users className={`w-8 h-8 ${
                    isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                  }`} />
                </div>
                <h4 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>220+</h4>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Artists Trained</p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-[#A4FF4E]/20' : 'bg-blue-100'
                }`}>
                  <Target className={`w-8 h-8 ${
                    isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                  }`} />
                </div>
                <h4 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>60K+</h4>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Screen Impressions</p>
              </div>
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-[#A4FF4E]/20' : 'bg-blue-100'
                }`}>
                  <Activity className={`w-8 h-8 ${
                    isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                  }`} />
                </div>
                <h4 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>40%+</h4>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Women Participants</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 