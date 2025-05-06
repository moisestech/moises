'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
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
  Clock
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
    color: "blue"
  },
  {
    title: "Low-latency Processing",
    description: "Edge computing ensures minimal delay in translations",
    icon: Zap,
    color: "purple"
  },
  {
    title: "Cloud Integration",
    description: "Secure cloud storage and model updates",
    icon: Cloud,
    color: "pink"
  },
  {
    title: "Mobile Companion",
    description: "Cross-platform mobile app for remote access",
    icon: Smartphone,
    color: "indigo"
  },
  {
    title: "Offline Support",
    description: "Core features work without internet connection",
    icon: Wifi,
    color: "green"
  },
  {
    title: "Easy Configuration",
    description: "Simple setup and customization options",
    icon: Settings,
    color: "orange"
  }
];

const techStack = [
  {
    category: "Frontend",
    technologies: [
      "React Native",
      "TensorFlow.js",
      "WebRTC",
      "Tailwind CSS"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "WebSocket",
      "Redis",
      "PostgreSQL"
    ]
  },
  {
    category: "ML/AI",
    technologies: [
      "TensorFlow",
      "MediaPipe",
      "OpenCV",
      "ONNX Runtime"
    ]
  },
  {
    category: "DevOps",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS"
    ]
  }
];

export default function SmartSignPage() {
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
              <Monitor className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Technical Details
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Smart Sign Platform
            </h1>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Real-time ASL translation powered by edge computing
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

      {/* Features Grid */}
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
            }`}>Key Features</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
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
                className={`p-6 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 mb-4 rounded-full bg-${feature.color}-500/20 flex items-center justify-center`}>
                  {React.createElement(feature.icon, {
                    className: `text-${feature.color}-400`
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
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
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Technology Stack</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
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
                className={`p-6 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <li
                      key={tech}
                      className={`flex items-center gap-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <Laptop className="w-4 h-4" />
                      {tech}
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
          from: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Implementation Plan</h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Development roadmap and milestones
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: "Phase 1: Core Development",
                duration: "Q3 2025",
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
                className={`p-6 rounded-xl border ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{phase.phase}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>{phase.duration}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li
                      key={task}
                      className={`flex items-center gap-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <Sparkles className="w-4 h-4" />
                      {task}
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