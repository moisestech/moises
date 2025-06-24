'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { ProposalTextReveal } from '../proposal/ProposalTextReveal';
import { 
  Users,
  Code,
  Target,
  BarChart,
  Globe,
  BookOpen,
  Lightbulb,
  Building2,
  DollarSign,
  CheckCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function KFProposalSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isDark ? 'from-black via-black to-[#1a1a1a]' : 'from-white via-gray-50 to-gray-100'
      } z-0`} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] ${
          isDark ? 'opacity-10' : 'opacity-5'
        }`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${
          isDark ? 'from-[#A4FF4E]/5' : 'from-blue-500/5'
        } to-transparent`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`p-6 rounded-xl border-2 ${
              isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
            } shadow-neon`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className={`w-6 h-6 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-[#A4FF4E]' : 'text-blue-600'}`}>
                About AI24
              </h3>
            </div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              AI24 is an artist-led technology studio founded by Moises Sanabria (Venezuelan-born, 
              Miami-based AI engineer and interdisciplinary artist) and Fabiola Larios (Mexican New 
              Media Artist). We operate a micro-lab at the Bakehouse Art Complex, where we prototype 
              open-source tools that merge ethical AI, community storytelling, and measurable impact.
            </p>
          </motion.div>

          {/* Activities Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`p-6 rounded-xl border-2 ${
              isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
            } shadow-neon`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className={`w-6 h-6 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-[#A4FF4E]' : 'text-blue-600'}`}>
                Key Activities
              </h3>
            </div>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                <span>Deploy 12 Smart Signs across three venues</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                <span>Build bilingual LMS portal with video lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                <span>Lead Screen-Admin Skill Sprints (EN/ES)</span>
              </li>
            </ul>
          </motion.div>

          {/* Outcomes Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`p-6 rounded-xl border-2 ${
              isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
            } shadow-neon`}
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart className={`w-6 h-6 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-[#A4FF4E]' : 'text-blue-600'}`}>
                Expected Outcomes
              </h3>
            </div>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start gap-2">
                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                <span>220 artists complete LMS micro-courses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                <span>60,000 bilingual impressions across venues</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className={`w-5 h-5 mt-0.5 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
                <span>40% women-identifying participants</span>
              </li>
            </ul>
          </motion.div>

          {/* Budget Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`p-6 rounded-xl border-2 ${
              isDark ? 'border-[#A4FF4E] bg-black/80' : 'border-blue-500 bg-white'
            } shadow-neon`}
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className={`w-6 h-6 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
              <h3 className={`text-xl font-bold ${isDark ? 'text-[#A4FF4E]' : 'text-blue-600'}`}>
                Budget Overview
              </h3>
            </div>
            <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex justify-between items-center">
                <span>Total Project Budget:</span>
                <span className="font-bold">$29,950</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Knight Foundation Request:</span>
                <span className="font-bold">$24,950</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 