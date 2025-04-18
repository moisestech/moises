'use client';

import { motion } from 'framer-motion';
import { Brain, Code, MessageSquare, Zap, BookOpen, Star, Calendar, Users, Clock, ArrowRight } from 'lucide-react';
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
    title: "Introduction & Setup",
    icon: Brain,
    content: [
      "Welcome & Course Overview",
      "What is Automation & Benefits",
      "Why n8n? Comparison with Other Platforms",
      "n8n Installation & Self‑Hosting (npm, Docker, Cloud)"
    ]
  },
  {
    title: "n8n Fundamentals",
    icon: Code,
    content: [
      "Understanding Nodes, Triggers & Actions",
      "Building Your First Workflow",
      "Credentials & Connecting External Apps",
      "Deep Dive: Node Types & Parameters"
    ]
  },
  {
    title: "AI‑Powered Chatbots",
    icon: MessageSquare,
    content: [
      "Creating an AI Chatbot Workflow",
      "Telegram & WhatsApp AI Agents",
      "WordPress Chatbot Integration"
    ]
  },
  {
    title: "RAG & Vector Databases",
    icon: Zap,
    content: [
      "WhatsApp RAG Agent Example",
      "Self‑Hosted Embeddings (Ollama/Deepseek)",
      "Qdrant & Vector DB Setup"
    ]
  },
  {
    title: "Social & Email Automation",
    icon: MessageSquare,
    content: [
      "RSS → Social Media Posts",
      "Email Summaries & Auto‑Replies",
      "YouTube Metadata Automation"
    ]
  },
  {
    title: "Enterprise Integrations",
    icon: Code,
    content: [
      "ERPNext & IT Admin Automations",
      "Job Applicant Shortlisting",
      "Proxmox Admin Automation"
    ]
  },
  {
    title: "Advanced Techniques",
    icon: Star,
    content: [
      "Webhooks, HTTP Requests & Debugging",
      "Flowise AI Agent Integration",
      "Prompt Engineering Best Practices"
    ]
  },
  {
    title: "Deployment & Business",
    icon: BookOpen,
    content: [
      "Self‑Hosting (Render, Docker)",
      "Selling Your Automations & AI Agents",
      "Security, Privacy & Compliance",
      "Final Project & Next Steps"
    ]
  }
];

export default function AIAgentsWorkshopClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Agents and the Arts Workshop
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              Learn how to integrate AI into your creative process and automate workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#signup"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Reserve Your Seat
              </Link>
              <Link
                href="#curriculum"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                View Curriculum
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <p className="text-xl text-gray-600">
                Master the art of AI automation and enhance your creative workflow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Automate workflows and business processes without complex code",
                "Build AI‑powered automation with n8n AI Agents",
                "Integrate APIs, Webhooks, and third‑party services",
                "Deploy and scale n8n workflows using Docker",
                "Debug and optimize workflows for production",
                "Create custom AI agents for your artistic needs"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Content</h2>
              <p className="text-xl text-gray-600">
                8 Sections • 53 Lectures • ~5h
              </p>
            </motion.div>

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
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
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
        </div>
      </section>

      {/* Instructor & Date Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Instructors</h2>
              <p className="text-xl text-gray-600">
                Learn from industry experts with years of experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tad Duval</h3>
                <p className="text-gray-600 mb-4">n8n Expert & AI Automation Engineer</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-5 h-5" />
                  <span>April 24, 2025</span>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Moisés</h3>
                <p className="text-gray-600 mb-4">Technical Support & Workshop Host</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-5 h-5" />
                  <span>5 Hours of Live Instruction</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about the workshop
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Do I need prior experience?",
                  answer: "No—this workshop is designed for both no‑code users and technical integrators."
                },
                {
                  question: "How long is the workshop?",
                  answer: "Approximately 5 hours, split into four 1¼‑hour sessions with breaks."
                },
                {
                  question: "What tools do I need?",
                  answer: "Install Docker (or npm), an n8n instance, and have an OpenAI key if you want to use AI Agents."
                },
                {
                  question: "Will it be recorded?",
                  answer: "Yes—recordings and companion materials (JSON workflows, PDFs) will be provided afterward."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Reserve Your Spot</h2>
              <p className="text-xl text-indigo-100">
                Seats are limited. Secure your place in the workshop now.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/workshop/ai-agents-and-the-arts/signup"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Sign Up Now
              </Link>
              <Link
                href="mailto:info@moises.works?subject=AI%20Agents%20and%20the%20Arts%20Workshop"
                className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
              >
                Email Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 