'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  Code,
  Users,
  Calendar,
  DollarSign,
  Clock,
  BarChart,
  Tv,
  Target,
  ArrowRight,
  Brain,
  Heart,
  Sparkles,
  FileText,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const sections = [
  {
    title: "Budget Details",
    description: "Detailed breakdown of the $24,850 pilot program with interactive visualizations.",
    icon: DollarSign,
    href: "/grant/knight-foundation/budget",
    color: "blue"
  },
  {
    title: "Workshop Program",
    description: "4 free capacity clinics with accessibility-first approach.",
    icon: Calendar,
    href: "/grant/knight-foundation/workshops",
    color: "purple"
  },
  {
    title: "Smart Sign Platform",
    description: "Open-source React + Supabase digital signage solution.",
    icon: Tv,
    href: "/grant/knight-foundation/smart-sign",
    color: "pink"
  },
  {
    title: "Impact & ROI",
    description: "Measurable outcomes and return on investment across sectors.",
    icon: Target,
    href: "/grant/knight-foundation/impact-roi",
    color: "indigo"
  },
  {
    title: "Project Timeline",
    description: "6-month pilot roadmap from launch to sustainability.",
    icon: Clock,
    href: "/grant/knight-foundation/roadmap",
    color: "green"
  },
  {
    title: "Full Proposal",
    description: "Read our complete 1,000-word proposal narrative.",
    icon: FileText,
    href: "/grant/knight-foundation/proposal",
    color: "yellow"
  }
];

const principles = [
  {
    title: "Human-Centric",
    description: "Technology that amplifies human efforts, not replaces them",
    icon: Heart
  },
  {
    title: "Community-Driven",
    description: "Built with and for Miami's creative ecosystem",
    icon: Users
  },
  {
    title: "Sustainable Impact",
    description: "Self-sustaining model through license revenue",
    icon: Target
  }
];

export default function KnightFoundationLanding() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

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
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Knight Foundation Proposal
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Building Digital Capacity
              <br />
              in Miami's Creative Community
            </h1>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              A $24,850 pilot program to transform how Miami's artists and cultural organizations
              leverage technology for impact and sustainability
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Brain}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Principles Section */}
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
            }`}>Our Principles</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Core values that guide our approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 mb-4 rounded-full ${
                  isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                } flex items-center justify-center`}>
                  {React.createElement(principle.icon, {
                    className: isDark ? 'text-blue-400' : 'text-blue-600'
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{principle.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Key Metrics */}
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
            }`}>Pilot Program Metrics</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Measurable impact across our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "120+", label: "Workshop Participants" },
              { value: "4", label: "Free Clinics" },
              { value: "3", label: "Partner Venues" },
              { value: "100%", label: "Bilingual Content" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border text-center ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>{metric.value}</div>
                <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
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
            }`}>Pilot Program Details</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Explore each aspect of our lean, focused approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group p-6 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50'
                    : 'bg-white border-gray-200 hover:border-blue-500/50'
                } transition-colors`}
              >
                <Link href={section.href} className="block">
                  <div className={`w-12 h-12 mb-4 rounded-full ${
                    isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                  } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {React.createElement(section.icon, {
                      className: isDark ? 'text-blue-400' : 'text-blue-600'
                    })}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } group-hover:text-blue-500 transition-colors`}>
                    {section.title}
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } mb-4`}>
                    {section.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
      />
    </main>
  );
} 