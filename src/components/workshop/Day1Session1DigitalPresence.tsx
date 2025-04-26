'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Users, 
  FileText, 
  Image as LucideImage,
  Layout,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Code2,
  LayoutDashboard,
  FileText as FileTextIcon,
  ArrowLeft,
  Sparkles,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'

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

const sections = [
  {
    title: "Online Presence Essentials",
    description: "Core elements of a strong digital presence",
    icon: Globe,
    color: "from-indigo-500 to-indigo-600",
    items: [
      {
        title: "Professional Website",
        description: "Your central hub for showcasing work",
        icon: Layout
      },
      {
        title: "Portfolio Gallery",
        description: "Curated display of your best work",
        icon: LucideImage
      },
      {
        title: "Artist Statement",
        description: "Clear communication of your vision",
        icon: FileText
      }
    ]
  },
  {
    title: "Audience Engagement",
    description: "Connect with your audience effectively",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    items: [
      {
        title: "Social Media Integration",
        description: "Extend your reach across platforms",
        icon: Globe
      },
      {
        title: "Contact Methods",
        description: "Professional communication channels",
        icon: MessageSquare
      },
      {
        title: "Newsletter Setup",
        description: "Keep your audience updated",
        icon: FileText
      }
    ]
  },
  {
    title: "Professional Tools",
    description: "Essential tools for managing your presence",
    icon: Settings,
    color: "from-purple-500 to-purple-600",
    items: [
      {
        title: "Analytics Dashboard",
        description: "Track your online performance",
        icon: LayoutDashboard
      },
      {
        title: "Content Calendar",
        description: "Plan and schedule your content",
        icon: FileTextIcon
      },
      {
        title: "SEO Tools",
        description: "Improve your visibility online",
        icon: Globe
      }
    ]
  }
]

export default function Day1Session1DigitalPresence() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-800' 
          : 'bg-white/80 border-gray-200'
      } backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Digital Presence
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
          {/* Hero Section */}
          <motion.section
            variants={fadeIn}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-indigo-900 via-purple-900 to-pink-900'
                : 'from-indigo-500 via-purple-500 to-pink-500'
            }`}>
              <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover opacity-20" />
            </div>
            <div className="relative p-8 text-white">
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
                <Globe className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Digital Presence
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Build and maintain a professional online presence that showcases your work effectively
              </p>
            </div>
          </motion.section>

          {sections.map((section, index) => (
            <React.Fragment key={section.title}>
              {index > 0 && (
                <DecorativeDivider
                  icon={index === 1 ? Settings : Sparkles}
                  gradientColors={{
                    from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
                    via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
                    to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
                  }}
                  iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
                />
              )}

              <motion.section
                variants={fadeIn}
                className={`rounded-2xl shadow-xl p-8 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color}`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{section.title}</h2>
                    <p className={`text-lg ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{section.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-xl p-6 ${
                        theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                      } mb-4`}>
                        <item.icon className={`w-6 h-6 ${
                          theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                        }`} />
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{item.title}</h3>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </React.Fragment>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
 
 