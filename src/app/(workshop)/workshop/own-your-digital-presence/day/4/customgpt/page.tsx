'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Code, FileText, Layout, MessageSquare, Zap, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const sections = [
  {
    title: "Introduction to CustomGPTs",
    icon: Brain,
    content: [
      "What are CustomGPTs and why they matter",
      "Key benefits for developers and creators",
      "Understanding the customization process",
      "Best practices for GPT development"
    ]
  },
  {
    title: "General Coding Assistants",
    icon: Code,
    content: [
      "Code Copilot - All-purpose coding aide",
      "Professional Coder - Detailed solutions",
      "Grimoire - UI to code conversion",
      "DevXplorer Ultra - Technical research"
    ]
  },
  {
    title: "Domain-Specific Tools",
    icon: Zap,
    content: [
      "Python GPT - ML and optimization",
      "Rust Assistant - Compiler guidance",
      "Vue.js GPT - Framework expertise",
      "DevOps GPT - Configuration automation"
    ]
  },
  {
    title: "Documentation & Visualization",
    icon: FileText,
    content: [
      "Code Comment Generator",
      "Diagram Creation Tools",
      "Code to UML Conversion",
      "Documentation Automation"
    ]
  },
  {
    title: "Implementation Guide",
    icon: Layout,
    content: [
      "Setting up your development environment",
      "Configuring GPT parameters",
      "Testing and validation",
      "Deployment and scaling"
    ]
  },
  {
    title: "Best Practices",
    icon: Star,
    content: [
      "Writing effective prompts",
      "Iterative refinement process",
      "Security considerations",
      "Performance optimization"
    ]
  },
  {
    title: "Resources & Next Steps",
    icon: BookOpen,
    content: [
      "Official documentation",
      "Community resources",
      "Advanced customization options",
      "Future developments"
    ]
  }
];

export default function CustomGPTWorkshopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/2/session/2"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 2</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              CustomGPT Workshop
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          {/* Introduction */}
          <motion.section
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">CustomGPT Workshop</h1>
            <p className="text-xl text-indigo-100">
              Learn how to build and customize your own AI assistant to enhance your development workflow and creative process.
            </p>
          </motion.section>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-indigo-100">
                  <section.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  );
} 