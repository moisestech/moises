'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { CheckCircle, Target, Users, Globe, Code, Sparkles } from 'lucide-react';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function OutcomesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const outcomes = [
    {
      category: 'Access & Skills',
      icon: Users,
      image: '/images/outcomes/access-skills.jpg',
      items: [
        '220 Miami artists complete at least one LMS micro-course on ethical AI or Smart Sign admin.',
        '600 additional community members attend or view live streamed sessions.'
      ]
    },
    {
      category: 'Visibility',
      icon: Globe,
      image: '/images/outcomes/visibility.jpg',
      items: [
        '60 000 bilingual impressions across in-venue screens, website embeds, and QR scans.',
        '800 livestream and social-media video views of projection events.'
      ]
    },
    {
      category: 'Equity',
      icon: Target,
      image: '/images/outcomes/equity.jpg',
      items: [
        'Demographic dashboard shows ≥ 40 % women-identifying and ≥ 30 % Spanish/Haitian-Creole participants.',
        'All video lessons include human-reviewed EN/ES captions; one flagship tutorial includes an ASL overlay pilot.'
      ]
    },
    {
      category: 'Open Technology',
      icon: Code,
      image: '/images/outcomes/open-tech.jpg',
      items: [
        'Full code released on GitHub with install script; at least three external pull requests merged.',
        'GitHub/Airtable archive preserves every post, livestream file, and weekly KPI snapshot under CC BY, creating a reusable dataset for researchers.'
      ]
    },
    {
      category: 'Sustainability',
      icon: Sparkles,
      image: '/images/outcomes/sustainability.jpg',
      items: [
        'At least one host venue upgrades to a $39/month nonprofit license, fully covering Year-2 hosting.',
        'LMS micro-courses generate $1 500 in fee revenue, earmarked for mentor stipends.'
      ]
    },
    {
      category: 'Scalability',
      icon: Target,
      image: '/images/outcomes/scalability.jpg',
      items: [
        'Written playbook and parts list enable any future Knight city to replicate the lab without proprietary fees.',
        'LaserCube pop-ups generate press coverage and sponsor attention, paving the way for new partner sites.'
      ]
    }
  ];

  return (
    <section id="outcomes" className="py-20 relative overflow-hidden">
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
                Expected Outcomes
              </span>
            </div>
            <h2 className={`text-4xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Measuring Success
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              These outcomes knit together hardware, software, and human fluency—the exact capacity gap 
              the Knight Art + Tech Expansion Fund was designed to close.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {outcomes.map((category, index) => (
              <motion.div
                key={category.category}
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
                    src={category.image}
                    alt={category.category}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-[#A4FF4E]/20' : 'bg-blue-100'
                    }`}>
                      <category.icon className={`w-5 h-5 ${
                        isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-[#A4FF4E]' : 'text-blue-600'
                    }`}>
                      {category.category}
                    </h3>
                  </div>

                  <ul className={`space-y-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 mt-0.5 ${
                          isDark ? 'text-[#A4FF4E]' : 'text-blue-500'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 