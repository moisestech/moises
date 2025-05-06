'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  Calendar,
  ChevronLeft,
  Users,
  MapPin,
  Monitor,
  Brain,
  Laptop,
  Sparkles,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Workshop data
const workshopData = [
  {
    host: "Bakehouse Art Complex",
    quarter: "Q3 '25",
    workshops: [
      "GPT-4 on $0 budget",
      "Gen-4 Storyboarding",
      "Prompt Gym"
    ],
    activation: "Night-wall projection of workshop outputs",
    reach: { inPerson: 60, stream: 300 }
  },
  {
    host: "Edge Zones",
    quarter: "Q4 '25",
    workshops: [
      "Community Archives × Stable Diffusion",
      "AI Mural Mapping",
      "Canva-AI Meme Ethics"
    ],
    activation: "Block-party DJ set + AI visuals",
    reach: { inPerson: 75, stream: 250 }
  },
  {
    host: "PAMM",
    quarter: "Q4 '25",
    workshops: [
      "Voice-clone captions for accessibility",
      "Curating AI in museums"
    ],
    activation: "AI on the Terrace outdoor screening",
    reach: { inPerson: 400, stream: 500 }
  },
  {
    host: "NWSA",
    quarter: "Q1 '26",
    workshops: [
      "No-GPU Short-Film Pipeline",
      "GitHub Copilot for Performance"
    ],
    activation: "5-hr hackathon; judged by faculty",
    reach: { inPerson: 90, stream: 600 }
  }
];

export default function WorkshopsPage() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            theme === 'dark' 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          } transition-colors`}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Overview
        </Link>
      </div>

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
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Workshop Program
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Hands-on AI Education
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              24 free workshops across Miami's creative community
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Brain}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Workshop Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Workshop Schedule</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Tailored programs at key community venues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshopData.map((venue, index) => (
              <motion.div
                key={venue.host}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{venue.host}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className={`w-4 h-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>{venue.quarter}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${
                    theme === 'dark'
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {venue.workshops.length} Workshops
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Workshop Topics</h4>
                    <ul className="space-y-2">
                      {venue.workshops.map((workshop) => (
                        <li
                          key={workshop}
                          className={`flex items-center gap-2 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <Laptop className="w-4 h-4" />
                          {workshop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>Community Activation</h4>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {venue.activation}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-gray-700">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>In-Person</div>
                        <div className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{venue.reach.inPerson}</div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>Streaming</div>
                        <div className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{venue.reach.stream}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Workshop Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Workshop Features</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Every workshop includes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Hybrid Format",
                description: "In-person + live streaming with chat",
                icon: Monitor
              },
              {
                title: "Inclusive Design",
                description: "ASL, childcare, and snacks provided",
                icon: Users
              },
              {
                title: "Take-home Resources",
                description: "Code templates and workflow guides",
                icon: Brain
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 mb-4 rounded-full ${
                  theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                } flex items-center justify-center`}>
                  {React.createElement(feature.icon, {
                    className: theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 