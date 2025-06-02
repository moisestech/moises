'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { ChevronLeft, FileText } from 'lucide-react';
import { HeroSection } from '../proposal/HeroSection';
import { ManifestoStrip } from '../proposal/ManifestoStrip';
import { NeedAndSolution } from '../proposal/NeedAndSolution';
import { ImpactBar } from '../proposal/ImpactBar';
import { ClinicsCarousel } from '../proposal/ClinicsCarousel';
import { TimelineVertical } from '../proposal/TimelineVertical';
import { TeamGrid } from '../proposal/TeamGrid';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProposalPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="bg-black min-h-screen text-white">
      <HeroSection />
      
      <ManifestoStrip />
      
      <div className="max-w-7xl mx-auto px-4">
        <NeedAndSolution />
        
        <div id="impact" className="py-20">
          <ImpactBar />
        </div>
        
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#A4FF4E]">Skill</span> Clinics
          </h2>
          <ClinicsCarousel />
        </div>
        
        <div id="timeline" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Project <span className="text-[#A4FF4E]">Timeline</span>
          </h2>
          <TimelineVertical />
        </div>
        
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet the <span className="text-[#A4FF4E]">Team</span>
          </h2>
          <TeamGrid />
        </div>
      </div>
    </div>
  );
} 