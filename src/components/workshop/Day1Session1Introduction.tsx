'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
  FileCheck,
  Key,
  User,
  CreditCard,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { PlatformIcon, PLATFORM_STYLES } from './PlatformIcons'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
}

const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { duration: 0.2 }
}

const platforms = [
  {
    title: "Squarespace",
    description: "Professional templates with built-in e-commerce and analytics",
    platform: "squarespace",
    requirements: [
      { text: "Create a Squarespace account", icon: User },
      { text: "Choose a plan (Personal or Business)", icon: CreditCard },
      { text: "Select a template", icon: Layout }
    ]
  },
  {
    title: "Wix",
    description: "Drag-and-drop website builder with extensive customization",
    platform: "wix",
    requirements: [
      { text: "Sign up for a Wix account", icon: User },
      { text: "Choose a plan (Free or Premium)", icon: CreditCard },
      { text: "Select a template", icon: LayoutDashboard }
    ]
  },
  {
    title: "GitHub Pages",
    description: "Free hosting for static websites with version control",
    platform: "github",
    requirements: [
      { text: "Create a GitHub account", icon: User },
      { text: "Set up SSH keys", icon: Key },
      { text: "Install Git", icon: Code2 }
    ]
  }
]

const aiIntegration = [
  {
    title: "Content Creation",
    description: "AI can help generate and optimize content for your website, from artist statements to project descriptions",
    icon: FileText,
    color: "bg-purple-100",
    hoverColor: "hover:bg-purple-200"
  },
  {
    title: "Design Assistance",
    description: "AI tools can suggest layouts, color schemes, and design elements that match your artistic style",
    icon: Layout,
    color: "bg-blue-100",
    hoverColor: "hover:bg-blue-200"
  }
]

const sections = [
  {
    title: "Web Fundamentals",
    description: "Learn the basics of web development and design principles",
    icon: Code2,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals",
    color: "bg-indigo-100",
    hoverColor: "hover:bg-indigo-200"
  },
  {
    title: "Platform Guides",
    description: "Step-by-step guides for each platform",
    icon: LayoutDashboard,
    href: "/workshop/own-your-digital-presence/day/1/session/1/platforms",
    color: "bg-pink-100",
    hoverColor: "hover:bg-pink-200"
  },
  {
    title: "Content Strategy",
    description: "Plan and organize your website content effectively",
    icon: FileText,
    href: "/workshop/own-your-digital-presence/day/1/session/2/content",
    color: "bg-teal-100",
    hoverColor: "hover:bg-teal-200"
  },
  {
    title: "Productivity Tools",
    description: "Tools and techniques to streamline your workflow",
    icon: Settings,
    href: "/workshop/own-your-digital-presence/day/1/session/2/productivity",
    color: "bg-amber-100",
    hoverColor: "hover:bg-amber-200"
  }
]

const buildingBlocks = [
  {
    title: "Public Digital Presence",
    description: "We're building a professional online space that represents your artistic identity and makes your work accessible to a global audience.",
    icon: Globe,
    color: "bg-indigo-100",
    hoverColor: "hover:bg-indigo-200"
  },
  {
    title: "Storytelling & Clarity",
    description: "Learn how to present your work with clear narratives and professional presentation that engages viewers and communicates your artistic vision.",
    icon: BookOpen,
    color: "bg-purple-100",
    hoverColor: "hover:bg-purple-200"
  },
  {
    title: "Professional Hub",
    description: "Create a space where curators, collectors, and collaborators can discover your work, understand your practice, and connect with you.",
    icon: Users,
    color: "bg-pink-100",
    hoverColor: "hover:bg-pink-200"
  }
]

export default function Day1Session1Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to the Workshop
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              This workshop will guide you through creating and maintaining a professional digital presence. 
              We'll explore different platforms and tools that can help you showcase your work effectively.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Building Your Digital Presence */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Building Your Digital Presence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {buildingBlocks.map((block) => (
                <motion.div
                  key={block.title}
                  whileHover={cardHover}
                  className={`${block.color} ${block.hoverColor} p-6 rounded-xl shadow-md transition-colors`}
                >
                  <motion.div
                    whileHover={iconHover}
                    className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center mb-4"
                  >
                    <block.icon className="w-6 h-6 text-gray-700" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{block.title}</h3>
                  <p className="text-gray-700">{block.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Platform Requirements */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Need</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform) => {
                const styles = PLATFORM_STYLES[platform.platform]
                return (
                  <motion.div
                    key={platform.title}
                    whileHover={cardHover}
                    className={`${styles.bgColor} ${styles.borderColor} border rounded-xl p-8 shadow-md transition-all`}
                  >
                    <motion.div
                      whileHover={iconHover}
                      className="w-16 h-16 rounded-lg bg-white/50 flex items-center justify-center mb-6"
                    >
                      <PlatformIcon platform={platform.platform} size={32} />
                    </motion.div>
                    <h3 className={`text-2xl font-bold mb-4 ${styles.color}`}>{platform.title}</h3>
                    <p className="text-gray-700 mb-6">{platform.description}</p>
                    <div className="space-y-3">
                      {platform.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <req.icon className={`w-5 h-5 ${styles.color}`} />
                          <span className="text-gray-700">{req.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Workshop Sections */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Workshop Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <Link 
                  key={section.title}
                  href={section.href}
                  className="group block"
                >
                  <motion.div
                    whileHover={cardHover}
                    className={`${section.color} ${section.hoverColor} p-6 rounded-xl shadow-md transition-colors`}
                  >
                    <motion.div
                      whileHover={iconHover}
                      className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center mb-4"
                    >
                      <section.icon className="w-6 h-6 text-gray-700" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-700">{section.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's begin by understanding the fundamentals of web development and design.
            </p>
            <Link
              href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Continue to Web Fundamentals
              <ArrowLeft className="ml-2 h-5 w-5 transform rotate-180" />
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}