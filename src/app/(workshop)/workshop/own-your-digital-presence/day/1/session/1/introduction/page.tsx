'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Globe, 
  Server, 
  Shield, 
  Smartphone, 
  Layout, 
  Search, 
  FileText, 
  Image as LucideImage, 
  LayoutDashboard, 
  Users, 
  Code2, 
  FileCode,
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  Laptop,
  Settings,
  RefreshCw,
  Calendar,
  MessageSquare,
  Smartphone as Mobile,
  Archive,
  Stars,
  Link2,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

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

const platforms = [
  {
    title: "Squarespace",
    description: "Professional templates with built-in e-commerce and analytics",
    icon: Layout,
    color: "from-gray-600 to-gray-800"
  },
  {
    title: "Wix",
    description: "Drag-and-drop website builder with extensive customization",
    icon: LayoutDashboard,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "GitHub Pages",
    description: "Free hosting for static websites with version control",
    icon: Code2,
    color: "from-gray-800 to-gray-900"
  },
  {
    title: "Webflow",
    description: "Design-focused platform with advanced customization",
    icon: LayoutDashboard,
    color: "from-blue-500 to-blue-600"
  }
];

const aiIntegration = [
  {
    title: "Content Creation",
    description: "AI can help generate and optimize content for your website, from artist statements to project descriptions",
    icon: FileText
  },
  {
    title: "Design Assistance",
    description: "AI tools can suggest layouts, color schemes, and design elements that match your artistic style",
    icon: Layout
  },
  {
    title: "Image Optimization",
    description: "AI can automatically optimize your artwork images for web display while maintaining quality",
    icon: LucideImage
  },
  {
    title: "SEO Enhancement",
    description: "AI can help improve your website's visibility by suggesting keywords and metadata",
    icon: Search
  }
];

const sections = [
  {
    title: "Welcome + Workshop Overview",
    description: "Get started with the workshop and understand its structure and goals",
    icon: BookOpen,
    href: "/workshop/own-your-digital-presence/day/1/session/1/welcome"
  },
  {
    title: "Participants",
    description: "Meet your fellow artists and explore their digital presence",
    icon: Users,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/participants"
  },
  {
    title: "Digital Presence",
    description: "Learn why digital presence matters and how to establish yours",
    icon: Globe,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence"
  },
  {
    title: "Analysis",
    description: "Analyze existing artist websites and learn from their approaches",
    icon: Search,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/analysis"
  },
  {
    title: "Sustainability",
    description: "Learn how to maintain and update your website effectively",
    icon: RefreshCw,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability"
  },
  {
    title: "Vocabulary Basics",
    description: "Understand essential web development and design terminology",
    icon: FileText,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary"
  }
];

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-white">
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
              Introduction
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Workshop</h2>
            <p className="text-gray-600 mb-6">
              This workshop will guide you through creating and maintaining a professional digital presence. 
              We'll explore different platforms and tools that can help you showcase your work effectively.
            </p>
          </motion.section>

          {/* What We're Building */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We're Building</h2>
            <div className="space-y-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Public Digital Presence</h3>
                <p className="text-gray-700">
                  We're building a professional online space that represents your artistic identity and makes your work accessible to a global audience.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Storytelling & Clarity</h3>
                <p className="text-gray-700">
                  Learn how to present your work with clear narratives and professional presentation that engages viewers and communicates your artistic vision.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Professional Hub</h3>
                <p className="text-gray-700">
                  Create a space where curators, collectors, and collaborators can discover your work, understand your practice, and connect with you.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Workshop Sections */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Workshop Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <Link 
                  key={section.title}
                  href={section.href}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <section.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{section.title}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Platform Options */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform) => (
                <div 
                  key={platform.title}
                  className={`bg-gradient-to-r ${platform.color} rounded-xl p-6 text-white`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <platform.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{platform.title}</h3>
                  </div>
                  <p className="text-white/90">{platform.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* AI Integration */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Integration</h2>
            <p className="text-gray-600 mb-6">
              AI tools can help make your website more sustainable and easier to maintain. 
              Here's how AI can assist you throughout the process:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {aiIntegration.map((item) => (
                <div 
                  key={item.title}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>

                  {/* Next Steps */}
                  <motion.section
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-600 mb-6">
              Let's begin by understanding why digital presence matters for artists today.
            </p>
            <Link
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue to Digital Presence
              <ArrowLeft className="ml-2 h-4 w-4 transform rotate-180" />
            </Link>
          </motion.section>
      </main>
    </div>
  );
} 