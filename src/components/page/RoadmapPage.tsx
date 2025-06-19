'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { TimelineSection } from '@/components/knight-foundation/proposal/TimelineSection';
import { TimelineVertical } from '@/components/proposal/TimelineVertical';
import {
  ChevronLeft,
  Map,
  Users,
  Target,
  Laptop,
  Sparkles,
  Brain,
  Lightbulb,
  Flag,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const milestones = [
  {
    phase: "Phase 1: Foundation",
    quarter: "Q3 2025",
    objectives: [
      {
        title: "Team Assembly",
        tasks: [
          "Hire Program Director",
          "Recruit Technical Lead",
          "Onboard Community Manager"
        ],
        status: "Planning"
      },
      {
        title: "Infrastructure Setup",
        tasks: [
          "Development environment",
          "Cloud services configuration",
          "Version control system"
        ],
        status: "Planning"
      },
      {
        title: "Community Engagement",
        tasks: [
          "Partner outreach",
          "Advisory board formation",
          "Initial feedback sessions"
        ],
        status: "Planning"
      }
    ]
  },
  {
    phase: "Phase 2: Development",
    quarter: "Q4 2025",
    objectives: [
      {
        title: "Core Features",
        tasks: [
          "ML model implementation",
          "Mobile app development",
          "Cloud infrastructure"
        ],
        status: "Planning"
      },
      {
        title: "Testing & Feedback",
        tasks: [
          "Alpha testing program",
          "Performance benchmarks",
          "User experience research"
        ],
        status: "Planning"
      },
      {
        title: "Documentation",
        tasks: [
          "API documentation",
          "User guides",
          "Training materials"
        ],
        status: "Planning"
      }
    ]
  },
  {
    phase: "Phase 3: Refinement",
    quarter: "Q1 2026",
    objectives: [
      {
        title: "Enhancement",
        tasks: [
          "Performance optimization",
          "Feature refinement",
          "Security hardening"
        ],
        status: "Planning"
      },
      {
        title: "Beta Program",
        tasks: [
          "Beta user onboarding",
          "Feedback collection",
          "Bug fixes and updates"
        ],
        status: "Planning"
      },
      {
        title: "Integration",
        tasks: [
          "Third-party integrations",
          "API partnerships",
          "Community tools"
        ],
        status: "Planning"
      }
    ]
  },
  {
    phase: "Phase 4: Launch",
    quarter: "Q2 2026",
    objectives: [
      {
        title: "Deployment",
        tasks: [
          "Production environment",
          "Monitoring setup",
          "Backup systems"
        ],
        status: "Planning"
      },
      {
        title: "Training",
        tasks: [
          "Staff training",
          "Partner workshops",
          "Community sessions"
        ],
        status: "Planning"
      },
      {
        title: "Support",
        tasks: [
          "Help desk setup",
          "Knowledge base",
          "Community forum"
        ],
        status: "Planning"
      }
    ]
  }
];

export default function RoadmapPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isDark 
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
              <Map className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Project Roadmap
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Implementation Timeline
            </h1>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Detailed project phases and milestones
            </p>
          </motion.div>
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

      {/* Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center gap-4 mb-8">
                  <Flag className={`w-6 h-6 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <h2 className={`text-2xl md:text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{milestone.phase}</h2>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {milestone.quarter}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {milestone.objectives.map((objective) => (
                    <motion.div
                      key={objective.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-6 rounded-xl border ${
                        isDark
                          ? 'bg-gray-800/50 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{objective.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          isDark
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'bg-purple-100 text-purple-600'
                        }`}>
                          {objective.status}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {objective.tasks.map((task) => (
                          <li
                            key={task}
                            className={`flex items-center gap-2 ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {index < milestones.length - 1 && (
                  <div className="flex justify-center my-8">
                    <ArrowRight className={`w-8 h-8 ${
                      isDark ? 'text-gray-600' : 'text-gray-400'
                    }`} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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

      {/* Timeline Section */}
      <TimelineSection />

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Timeline Vertical */}
      <TimelineVertical />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Success Metrics */}
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
            }`}>Success Metrics</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Key performance indicators and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Community Impact",
                metrics: [
                  "500+ workshop participants",
                  "24 community events",
                  "4 partner institutions"
                ],
                icon: Users
              },
              {
                title: "Technical Goals",
                metrics: [
                  "95% uptime",
                  "Sub-100ms latency",
                  "90% accuracy rate"
                ],
                icon: Target
              },
              {
                title: "Sustainability",
                metrics: [
                  "3 revenue streams",
                  "2 major grants",
                  "Self-sustaining by 2027"
                ],
                icon: Lightbulb
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
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
                  {React.createElement(metric.icon, {
                    className: isDark ? 'text-blue-400' : 'text-blue-600'
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{metric.title}</h3>
                <ul className="space-y-2">
                  {metric.metrics.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 