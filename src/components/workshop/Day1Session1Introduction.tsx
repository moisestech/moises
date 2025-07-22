'use client'

import React, { useState } from 'react'
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
import DecorativeDivider from '@/components/common/DecorativeDivider'
import { useTheme } from '@/contexts/ThemeContext'

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
  scale: 1.05,
  transition: { 
    duration: 0.2,
    ease: "easeOut" as const
  }
}

const hoverCardStyle = "hover:shadow-2xl hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-200"

const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { duration: 0.2 }
}

const sectionDivider = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

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
    href: "/workshop/own-your-digital-presence/day/1/session/2/platforms",
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
    id: 'public-presence',
    title: "Public Digital Presence",
    description: "We're building a professional online space that represents your artistic identity and makes your work accessible to a global audience.",
    icon: Globe,
    color: "bg-indigo-100 dark:bg-indigo-900/30",
    hoverColor: "hover:bg-indigo-200 dark:hover:bg-indigo-800/50",
    details: [
      {
        title: "Global Accessibility",
        description: "Make your work available to audiences worldwide, breaking geographical barriers.",
        icon: Globe
      },
      {
        title: "Professional Identity",
        description: "Establish a consistent and professional online presence that reflects your artistic practice.",
        icon: User
      },
      {
        title: "24/7 Availability",
        description: "Your work is accessible anytime, allowing for continuous engagement with your audience.",
        icon: Server
      }
    ]
  },
  {
    id: 'storytelling',
    title: "Storytelling & Clarity",
    description: "Learn how to present your work with clear narratives and professional presentation that engages viewers and communicates your artistic vision.",
    icon: BookOpen,
    color: "bg-purple-100 dark:bg-purple-900/30",
    hoverColor: "hover:bg-purple-200 dark:hover:bg-purple-800/50",
    details: [
      {
        title: "Narrative Structure",
        description: "Create compelling stories around your work that engage and connect with viewers.",
        icon: FileText
      },
      {
        title: "Visual Communication",
        description: "Use visual elements to effectively communicate your artistic vision and process.",
        icon: LucideImage
      },
      {
        title: "Professional Presentation",
        description: "Present your work in a way that maintains its integrity and impact.",
        icon: Layout
      }
    ]
  },
  {
    id: 'professional-hub',
    title: "Professional Hub",
    description: "Create a space where curators, collectors, and collaborators can discover your work, understand your practice, and connect with you.",
    icon: Users,
    color: "bg-pink-100 dark:bg-pink-900/30",
    hoverColor: "hover:bg-pink-200 dark:hover:bg-pink-800/50",
    details: [
      {
        title: "Professional Network",
        description: "Connect with industry professionals and potential collaborators.",
        icon: Users
      },
      {
        title: "Portfolio Showcase",
        description: "Present your work in a professional context that appeals to collectors and curators.",
        icon: Archive
      },
      {
        title: "Contact & Collaboration",
        description: "Make it easy for professionals to reach out and engage with your work.",
        icon: MessageSquare
      }
    ]
  }
]

export default function Day1Session1Introduction() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState('public-presence')
  const currentBlock = buildingBlocks.find(block => block.id === activeTab)

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
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
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-8`}>Building Your Digital Presence</h2>
            
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8 border-b border-gray-200 dark:border-gray-700">
              {buildingBlocks.map((block) => (
                <button
                  key={block.id}
                  onClick={() => setActiveTab(block.id)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === block.id
                      ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {block.title}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            {currentBlock && (
              <motion.div
                key={currentBlock.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Main Description */}
                <div className={`${currentBlock.color} dark:${currentBlock.color.replace('100', '900/30')} p-6 rounded-xl shadow-md ${hoverCardStyle}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50'
                    } flex items-center justify-center`}>
                      <currentBlock.icon className={`w-6 h-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`} />
                    </div>
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{currentBlock.title}</h3>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{currentBlock.description}</p>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {currentBlock.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      whileHover={cardHover}
                      className={`${
                        theme === 'dark'
                          ? 'bg-gray-800 hover:bg-gray-700 border-gray-700'
                          : 'bg-white hover:bg-gray-50 border-gray-100'
                      } rounded-xl shadow-sm hover:shadow-md transition-all p-6 border`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                      } flex items-center justify-center mb-4`}>
                        <detail.icon className={`w-5 h-5 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`} />
                      </div>
                      <h4 className={`text-lg font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      } mb-2`}>{detail.title}</h4>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {detail.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.section>

          <DecorativeDivider
            icon={Code2}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Platform Requirements */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-8`}>What You'll Need</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform) => {
                const styles = PLATFORM_STYLES[platform.platform]
                return (
                  <motion.div
                    key={platform.title}
                    whileHover={cardHover}
                    className={`${
                      theme === 'dark' 
                        ? 'bg-gray-700/50 border-gray-600' 
                        : styles.bgColor
                    } ${
                      theme === 'dark'
                        ? 'border-gray-600'
                        : styles.borderColor
                    } border rounded-xl p-8 shadow-md transition-all ${hoverCardStyle}`}
                  >
                    <motion.div
                      whileHover={iconHover}
                      className={`w-16 h-16 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gray-600/50'
                          : 'bg-white/50'
                      } flex items-center justify-center mb-6`}
                    >
                      <PlatformIcon platform={platform.platform} size={32} />
                    </motion.div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : styles.color
                    }`}>{platform.title}</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{platform.description}</p>
                    <div className="space-y-3">
                      {platform.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <req.icon className={`w-5 h-5 ${
                            theme === 'dark' ? 'text-gray-400' : styles.color
                          }`} />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{req.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={LayoutDashboard}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
              via: theme === 'dark' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.2)',
              to: theme === 'dark' ? 'rgba(20, 184, 166, 0.3)' : 'rgba(20, 184, 166, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-500/50'}
          />

          {/* Workshop Sections */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-8`}>Workshop Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <Link 
                  key={section.title}
                  href={section.href}
                  className="group block"
                >
                  <motion.div
                    whileHover={cardHover}
                    className={`${
                      theme === 'dark'
                        ? 'bg-gray-700/50 border-gray-600'
                        : section.color
                    } ${
                      theme === 'dark'
                        ? 'hover:bg-gray-700'
                        : section.hoverColor
                    } p-6 rounded-xl shadow-md transition-colors ${hoverCardStyle}`}
                  >
                    <motion.div
                      whileHover={iconHover}
                      className={`w-12 h-12 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gray-600/50'
                          : 'bg-white/50'
                      } flex items-center justify-center mb-4`}
                    >
                      <section.icon className={`w-6 h-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`} />
                    </motion.div>
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    } mb-2`}>{section.title}</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{section.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={FileText}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              via: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              to: theme === 'dark' ? 'rgba(244, 63, 94, 0.3)' : 'rgba(244, 63, 94, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-purple-400/50' : 'text-purple-500/50'}
          />

          {/* Next Steps */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Next Steps</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Let's begin by meeting our workshop participants and understanding their goals.
            </p>
            <Link
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction/participants"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Meet the Participants
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}