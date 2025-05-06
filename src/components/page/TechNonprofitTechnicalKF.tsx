'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  Network,
  GitBranch,
  Code,
  Users,
  Workflow,
  Share2,
  Timer
} from 'lucide-react';

import OrgChart from '@/components/visualizations/OrgChart';
import TechStack from '@/components/visualizations/TechStack';
import VennDiagram from '@/components/visualizations/VennDiagram';
import CRMFunnel from '@/components/visualizations/CRMFunnel';
import RadarComparison from '@/components/visualizations/RadarComparison';
import TimelineZoom from '@/components/visualizations/TimelineZoom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function TechNonprofitTechnicalKF() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Technical Overview Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Technical Implementation
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Architecture
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Detailed breakdown of our technical implementation and architecture
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={GitBranch}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Tech Stack Section */}
      <section id="stack" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Technology Stack</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Our carefully selected tools and technologies
            </p>
          </motion.div>
          <TechStack />
        </div>
      </section>

      <DecorativeDivider 
        icon={Network}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Organization Structure */}
      <section id="organization" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Organization Structure</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Our team structure and roles
            </p>
          </motion.div>
          <OrgChart />
        </div>
      </section>

      <DecorativeDivider 
        icon={Users}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* CRM & Automation */}
      <section id="automation" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>CRM & Automation</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Our automated workflows and CRM integration
            </p>
          </motion.div>
          <CRMFunnel />
        </div>
      </section>

      <DecorativeDivider 
        icon={Workflow}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Gap Analysis */}
      <section id="analysis" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Gap Analysis</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Understanding and addressing community needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <VennDiagram />
            <RadarComparison />
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Timer}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Detailed Timeline */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Implementation Timeline</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Detailed project timeline with milestones
            </p>
          </motion.div>
          <TimelineZoom />
        </div>
      </section>

      <DecorativeDivider 
        icon={Share2}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />
    </main>
  );
} 