'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FileText, Target } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function KFProposalHero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-10 overflow-hidden">
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
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
            isDark ? 'bg-[#A4FF4E]/10 border-[#A4FF4E]/30' : 'bg-blue-500/10 border-blue-500/30'
          } border mb-6`}>
            <Target className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-blue-500'}`} />
            <span className={`text-sm font-medium ${
              isDark ? 'text-[#A4FF4E]' : 'text-blue-500'
            }`}>
              Knight Foundation Proposal
            </span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Building Digital Capacity Through Art & Technology
          </h1>

          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto mb-12`}>
            A proposal to create an innovative digital art platform that combines hardware, 
            software, and community engagement to empower artists and venues in Miami.
          </p>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="#outcomes"
              className={`px-8 py-4 rounded-lg font-medium ${
                isDark 
                  ? 'bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-colors`}
            >
              View Outcomes
            </Link>
            <Link
              href="/grant/knight-foundation/proposal.pdf"
              className={`px-8 py-4 rounded-lg font-medium border ${
                isDark 
                  ? 'border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              } transition-colors inline-flex items-center gap-2`}
            >
              <FileText className="w-4 h-4" />
              Download PDF
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 