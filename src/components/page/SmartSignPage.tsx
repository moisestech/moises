'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import { BackToOverview } from '@/components/shared/BackToOverview';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import {
  ChevronLeft,
  Monitor,
  Users,
  Code2,
  Laptop,
  Sparkles,
  Brain,
  Lightbulb,
  Smartphone,
  Wifi,
  Cloud,
  Settings,
  Zap,
  Clock,
  ArrowRight,
  Target,
  Activity,
  Database,
  Server,
  Globe,
  Shield,
  Cpu,
  Network,
  GitBranch,
  Container,
  Workflow,
  Github,
  Code,
  Layers,
  Box,
  Package,
  Terminal,
  HardDrive,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Square,
  Circle,
  Triangle,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const features = [
  {
    title: "Real-time Translation",
    description: "Instant ASL to text and vice versa using advanced ML models",
    icon: Brain,
    color: "text-[#A4FF4E]"
  },
  {
    title: "Low-latency Processing",
    description: "Edge computing ensures minimal delay in translations",
    icon: Zap,
    color: "text-[#3B82F6]"
  },
  {
    title: "Cloud Integration",
    description: "Secure cloud storage and model updates",
    icon: Cloud,
    color: "text-[#EC4899]"
  },
  {
    title: "Mobile Companion",
    description: "Cross-platform mobile app for remote access",
    icon: Smartphone,
    color: "text-[#8B5CF6]"
  },
  {
    title: "Offline Support",
    description: "Core features work without internet connection",
    icon: Wifi,
    color: "text-[#10B981]"
  },
  {
    title: "Easy Configuration",
    description: "Simple setup and customization options",
    icon: Settings,
    color: "text-[#F59E0B]"
  }
];

const techStack = [
  {
    category: "Frontend",
    icon: Code,
    technologies: [
      { name: "React Native", icon: Square },
      { name: "TensorFlow.js", icon: Brain },
      { name: "WebRTC", icon: Globe },
      { name: "Tailwind CSS", icon: Sparkles }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: Terminal },
      { name: "WebSocket", icon: Network },
      { name: "Redis", icon: DatabaseIcon },
      { name: "PostgreSQL", icon: DatabaseIcon }
    ]
  },
  {
    category: "ML/AI",
    icon: Brain,
    technologies: [
      { name: "TensorFlow", icon: Brain },
      { name: "MediaPipe", icon: Cpu },
      { name: "OpenCV", icon: Monitor },
      { name: "ONNX Runtime", icon: Activity }
    ]
  },
  {
    category: "DevOps",
    icon: Workflow,
    technologies: [
      { name: "Docker", icon: Container },
      { name: "Kubernetes", icon: GitBranch },
      { name: "GitHub Actions", icon: Github },
      { name: "AWS", icon: CloudIcon }
    ]
  }
];

export default function SmartSignPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen bg-black text-white">
      <TechNonprofitNavKF />
      <BackToOverview />

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
              <Monitor className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Technical Details
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Smart Sign Platform
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Real-time ASL translation powered by edge computing
            </p>
          </motion.div>
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Core capabilities of the Smart Sign platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  {React.createElement(feature.icon, {
                    className: `${feature.color} w-7 h-7`
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#A4FF4E]">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Code2}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technology Stack</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Modern tools and frameworks powering Smart Sign
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    {React.createElement(stack.icon, {
                      className: 'text-[#A4FF4E] w-5 h-5'
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-[#A4FF4E]">{stack.category}</h3>
                </div>
                <ul className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#A4FF4E] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#A4FF4E]/10 flex items-center justify-center">
                        {React.createElement(tech.icon, {
                          className: 'text-[#A4FF4E] w-3 h-3'
                        })}
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Lightbulb}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Implementation Plan</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Development roadmap and milestones
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: "Phase 1: Core Development",
                duration: "Q3 2025",
                icon: Code2,
                tasks: [
                  "Set up development environment",
                  "Implement basic ML models",
                  "Create mobile app prototype",
                  "Establish cloud infrastructure"
                ]
              },
              {
                phase: "Phase 2: Feature Implementation",
                duration: "Q4 2025",
                icon: Brain,
                tasks: [
                  "Enhance ML model accuracy",
                  "Add offline capabilities",
                  "Implement real-time translation",
                  "Beta testing program"
                ]
              },
              {
                phase: "Phase 3: Optimization",
                duration: "Q1 2026",
                icon: Zap,
                tasks: [
                  "Performance optimization",
                  "Security hardening",
                  "User feedback integration",
                  "Documentation"
                ]
              },
              {
                phase: "Phase 4: Launch",
                duration: "Q2 2026",
                icon: Target,
                tasks: [
                  "Final testing and QA",
                  "Community deployment",
                  "Training workshops",
                  "Support system setup"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                      {React.createElement(phase.icon, {
                        className: 'text-[#A4FF4E] w-5 h-5'
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#A4FF4E]">{phase.phase}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-[#A4FF4E]/80" />
                        <span className="text-sm text-[#A4FF4E]/80">{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#A4FF4E]"></div>
                      <span className="text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Shield}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div className="p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A4FF4E]">
                Ready to Build Smart Signs?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in creating accessible technology for Miami's creative community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/grant/knight-foundation"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  Back to Overview
                </Link>
                <Link
                  href="/grant/knight-foundation/workshops"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  View Workshops
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 