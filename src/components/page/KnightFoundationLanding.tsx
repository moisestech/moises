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
  Network,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const sections = [
  {
    title: "Impact You Can Screenshot",
    description: "Detailed breakdown of the $24,850 pilot program with interactive visualizations.",
    icon: DollarSign,
    href: "/grant/knight-foundation/budget",
    color: "blue"
  },
  {
    title: "4 Zero-Cost Skill Sprints",
    description: "Free capacity clinics with accessibility-first approach.",
    icon: Calendar,
    href: "/grant/knight-foundation/workshops",
    color: "purple"
  },
  {
    title: "Plug-n-Play Community Screens",
    description: "Open-source React + Supabase digital signage solution.",
    icon: Tv,
    href: "/grant/knight-foundation/smart-sign",
    color: "pink"
  },
  {
    title: "License → Re-fuel → Repeat",
    description: "Measurable outcomes and return on investment across sectors.",
    icon: Target,
    href: "/grant/knight-foundation/impact-roi",
    color: "indigo"
  },
  {
    title: "Human-Ready AI Toolkits",
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#A4FF4E]/10 via-transparent to-[#A4FF4E]/10 animate-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <h1 className={`text-[120px] md:text-[140px] font-bold leading-[1] tracking-tight mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              MAKE AI FOR ALL
            </h1>
            <p className={`text-2xl mb-12 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Knight-seeded pilot turning idle screens into culture hubs
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/grant/knight-foundation/pilot"
                className={`px-8 py-4 rounded-lg font-medium ${
                  isDark 
                    ? 'bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90' 
                    : 'bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90'
                } transition-colors`}
              >
                See the 6-Month Pilot
              </Link>
              <Link
                href="/grant/knight-foundation/proposal.pdf"
                className={`px-8 py-4 rounded-lg font-medium border ${
                  isDark 
                    ? 'border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10' 
                    : 'border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10'
                } transition-colors`}
              >
                Download 1-page PDF
              </Link>
            </div>
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

      {/* Impact Bar */}
      <div className={`sticky top-0 z-50 ${
        isDark ? 'bg-black/80' : 'bg-white/80'
      } backdrop-blur-md border-b ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            {[
              { value: "120+", label: "Learners" },
              { value: "6", label: "Screens" },
              { value: "3", label: "Venues" },
              { value: "100%", label: "Bilingual" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-2 px-4 ${
                  index < 3 ? 'border-r' : ''
                } ${
                  isDark ? 'border-gray-800' : 'border-gray-200'
                }`}
              >
                <span className={`text-2xl font-bold ${
                  isDark ? 'text-[#A4FF4E]' : 'text-[#A4FF4E]'
                }`}>{metric.value}</span>
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ethics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className={`text-[120px] font-bold leading-[1] tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              ETHICS
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <ul className={`space-y-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${
                    isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#A4FF4E]/20'
                  } flex items-center justify-center`}>
                    <Code className={`w-4 h-4 ${
                      isDark ? 'text-[#A4FF4E]' : 'text-[#A4FF4E]'
                    }`} />
                  </div>
                  Creative Commons code
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${
                    isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#A4FF4E]/20'
                  } flex items-center justify-center`}>
                    <BarChart className={`w-4 h-4 ${
                      isDark ? 'text-[#A4FF4E]' : 'text-[#A4FF4E]'
                    }`} />
                  </div>
                  Live equity metrics
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${
                    isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#A4FF4E]/20'
                  } flex items-center justify-center`}>
                    <Network className={`w-4 h-4 ${
                      isDark ? 'text-[#A4FF4E]' : 'text-[#A4FF4E]'
                    }`} />
                  </div>
                  Open API
                </li>
              </ul>
              <Link
                href="/grant/knight-foundation/ethics"
                className={`inline-flex items-center gap-2 text-[#A4FF4E] hover:underline`}
              >
                See our Responsible-AI rubric
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-20">
        <div className={`grid md:grid-cols-2 gap-0 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}>
          <div className={`p-12 ${
            isDark ? 'bg-gradient-to-r from-[#A4FF4E]/20 to-transparent' : 'bg-gradient-to-r from-[#A4FF4E]/10 to-transparent'
          }`}>
            <h2 className={`text-3xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Knight's $24,850 sparks a self-funded, bilingual tech spine for Miami's creatives. Ready to light the fuse?
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/grant/knight-foundation/support"
                className={`px-8 py-4 rounded-lg font-medium ${
                  isDark 
                    ? 'bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90' 
                    : 'bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90'
                } transition-colors`}
              >
                Sign Support Letter
              </Link>
              <Link
                href="/grant/knight-foundation/demo"
                className={`px-8 py-4 rounded-lg font-medium border ${
                  isDark 
                    ? 'border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10' 
                    : 'border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10'
                } transition-colors`}
              >
                Book Demo
              </Link>
            </div>
          </div>
          <div className={`p-12 ${
            isDark ? 'bg-black' : 'bg-white'
          }`} />
        </div>
      </section>
    </main>
  );
} 