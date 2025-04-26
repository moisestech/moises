'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Sparkles, Zap, BookOpen, MessageSquare, Image, Code, FileText } from 'lucide-react';
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
    title: "What is ChatGPT?",
    icon: Brain,
    content: [
      "Large Language Model (LLM) developed by OpenAI",
      "Versions: GPT-3.5 (Free), GPT-4 (Paid), GPT-4o (Multimodal)",
      "Capabilities: Generate, summarize, translate, and ideate text"
    ]
  },
  {
    title: "How ChatGPT Works",
    icon: Sparkles,
    content: [
      "Processes prompts based on patterns from training data",
      "Not browsing the web (unless web access is enabled)",
      "Quality of response depends on prompt quality"
    ]
  },
  {
    title: "Prompt Engineering 101",
    icon: Zap,
    content: [
      "Simple prompts: Direct questions or instructions",
      "Roleplay: Assigning specific roles to the AI",
      "Constraints: Setting limits on responses",
      "Few-shot: Providing examples for the AI to follow"
    ]
  },
  {
    title: "Top Use Cases for Artists",
    icon: Image,
    content: [
      "Bio Writing & Artist Statements",
      "Grant Proposals & Exhibition Descriptions",
      "Workshop Planning & Content Creation",
      "Social Media Captions & Marketing"
    ]
  },
  {
    title: "Model Comparisons",
    icon: BookOpen,
    content: [
      "GPT-4o: Best logic, visuals, longer memory (Paid)",
      "GPT-3.5: Fast, free, less accurate",
      "Claude: Long memory, great tone",
      "Gemini: Great with documents + web tools",
      "Mistral/LLaMA: Open-source, privacy-oriented"
    ]
  },
  {
    title: "Advanced Tips & Tools",
    icon: Code,
    content: [
      "Custom GPTs: Build your own AI personas",
      "Memory: Enable for personalized interactions",
      "Plugins & Web Browsing: Access additional features",
      "Code Interpreter: Upload and analyze data"
    ]
  },
  {
    title: "Homework & Resources",
    icon: FileText,
    content: [
      "Try 2-3 prompts from the examples",
      "Explore different AI models and their strengths",
      "Practice prompt engineering with your own content",
      "Check out prompt galleries and tutorials"
    ]
  }
];

export default function AIFundamentalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              AI Fundamentals with ChatGPT
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
            <h1 className="text-4xl font-bold mb-4">AI Fundamentals Crash Course</h1>
            <p className="text-xl text-indigo-100">
              A comprehensive guide to using ChatGPT and other AI tools for creative productivity, research, and personal workflow.
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