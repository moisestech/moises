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
    <main className="min-h-screen bg-black text-white">
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#232323] text-[#A4FF4E] border border-[#A4FF4E] transition-colors shadow-neon"
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <Map className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Project Roadmap
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Implementation Timeline
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Detailed project phases and milestones
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
                  <Flag className="w-6 h-6 text-[#A4FF4E]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{milestone.phase}</h2>
                  <div className="px-3 py-1 rounded-full text-sm bg-[#A4FF4E]/10 text-[#A4FF4E] border border-[#A4FF4E]/30">
                    {milestone.quarter}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {milestone.objectives.map((objective) => (
                    <motion.div
                      key={objective.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{objective.title}</h3>
                        <div className="px-3 py-1 rounded-full text-sm bg-[#A4FF4E]/20 text-[#A4FF4E] border border-[#A4FF4E]/30">
                          {objective.status}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {objective.tasks.map((task) => (
                          <li
                            key={task}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#A4FF4E]" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {index < milestones.length - 1 && (
                  <div className="flex justify-center my-8">
                    <ArrowRight className="w-8 h-8 text-[#A4FF4E]/50" />
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Timeline Section */}
      <TimelineSection />

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Timeline Vertical */}
      <TimelineVertical />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Metrics</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
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
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  {React.createElement(metric.icon, {
                    className: 'text-[#A4FF4E] w-6 h-6'
                  })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{metric.title}</h3>
                <ul className="space-y-2">
                  {metric.metrics.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#A4FF4E]" />
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