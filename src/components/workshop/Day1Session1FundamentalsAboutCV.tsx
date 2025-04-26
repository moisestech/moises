'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  FileText,
  User,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  Settings,
  Sparkles,
  Filter,
  BookOpen,
  ScrollText,
  MessageSquare,
  Layout,
  Link2,
  Languages,
  Share2,
  Download
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import DecorativeDivider from '@/components/common/DecorativeDivider'
import { PlatformIcon } from './PlatformIcons'

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

type Platform = 'all' | 'squarespace' | 'wix' | 'github'

const cvSections = [
  {
    title: "Artist Statement",
    description: "Craft your artistic vision and philosophy",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
    platforms: {
      squarespace: {
        features: [
          "Text block with custom formatting",
          "Multiple layout options",
          "Easy updates and revisions",
          "Mobile-responsive design",
          "SEO optimization tools"
        ]
      },
      wix: {
        features: [
          "Rich text editor",
          "Custom typography options",
          "Dynamic content areas",
          "Multiple column layouts",
          "Text animations"
        ]
      },
      github: {
        features: [
          "Markdown formatting",
          "Version control for changes",
          "Multiple language versions",
          "Static site generation",
          "Custom styling options"
        ]
      }
    }
  },
  {
    title: "Biography",
    description: "Share your professional journey and achievements",
    icon: User,
    color: "from-purple-500 to-pink-500",
    platforms: {
      squarespace: {
        features: [
          "Professional bio templates",
          "Image integration",
          "Social media links",
          "Contact information",
          "Download options"
        ]
      },
      wix: {
        features: [
          "Bio page templates",
          "Media galleries",
          "Social feed integration",
          "Contact forms",
          "PDF downloads"
        ]
      },
      github: {
        features: [
          "Markdown biography",
          "HTML/CSS customization",
          "Repository documentation",
          "Multiple formats",
          "Automated updates"
        ]
      }
    }
  },
  {
    title: "CV/Resume",
    description: "Document your professional experience and education",
    icon: ScrollText,
    color: "from-green-500 to-teal-500",
    platforms: {
      squarespace: {
        features: [
          "Structured CV layouts",
          "PDF attachments",
          "Downloadable formats",
          "Regular updates",
          "Professional formatting"
        ]
      },
      wix: {
        features: [
          "CV builder tools",
          "Multiple format support",
          "Download options",
          "Dynamic updates",
          "Custom sections"
        ]
      },
      github: {
        features: [
          "Markdown CV",
          "PDF generation",
          "Version tracking",
          "Multiple languages",
          "Automated builds"
        ]
      }
    }
  }
]

const bestPractices = [
  {
    title: "Content Organization",
    description: "Structure your information effectively",
    icon: Layout,
    tips: [
      "Use clear section headings",
      "Maintain chronological order",
      "Group similar experiences",
      "Include relevant keywords",
      "Keep formatting consistent"
    ]
  },
  {
    title: "Professional Presentation",
    description: "Present your information professionally",
    icon: Award,
    tips: [
      "Use professional language",
      "Highlight key achievements",
      "Include relevant links",
      "Update regularly",
      "Proofread carefully"
    ]
  },
  {
    title: "Accessibility",
    description: "Make your information accessible",
    icon: Globe,
    tips: [
      "Provide downloadable formats",
      "Ensure mobile responsiveness",
      "Use clear typography",
      "Include alt text for images",
      "Maintain readable contrast"
    ]
  }
]

const cvComponents = [
  {
    title: "Education",
    icon: GraduationCap,
    elements: [
      "Degrees and certifications",
      "Relevant coursework",
      "Workshops and training",
      "Awards and honors",
      "Research projects"
    ]
  },
  {
    title: "Experience",
    icon: Briefcase,
    elements: [
      "Exhibitions",
      "Residencies",
      "Teaching positions",
      "Curatorial work",
      "Commissions"
    ]
  },
  {
    title: "Publications",
    icon: MessageSquare,
    elements: [
      "Press coverage",
      "Articles and reviews",
      "Catalogs",
      "Interviews",
      "Publications"
    ]
  }
]

export default function Day1Session1FundamentalsAboutCV() {
  const { theme } = useTheme()
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('all')

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
              href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Fundamentals</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About & CV
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
                <FileText className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                About & CV
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to present your professional information effectively across different platforms.
              </p>
            </div>
          </motion.section>

          {/* Platform Filter */}
          <motion.section variants={fadeIn} className="flex justify-center gap-4">
            {(['all', 'squarespace', 'wix', 'github'] as const).map((platform) => (
              <motion.button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedPlatform === platform
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-500 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {platform === 'all' ? (
                  <>
                    <Filter className="w-5 h-5" />
                    <span>All Platforms</span>
                  </>
                ) : (
                  <>
                    <PlatformIcon platform={platform} size={20} />
                    <span className="capitalize">{platform}</span>
                  </>
                )}
              </motion.button>
            ))}
          </motion.section>

          {/* CV Sections */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Content Sections</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cvSections.map((section) => (
                <div
                  key={section.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} mb-4`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{section.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{section.description}</p>
                  
                  <ul className="space-y-2">
                    {(selectedPlatform === 'all' 
                      ? section.platforms.squarespace.features 
                      : section.platforms[selectedPlatform].features
                    ).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Settings}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* CV Components */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Essential Components</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cvComponents.map((component) => (
                <div
                  key={component.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <component.icon className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{component.title}</h3>
                  
                  <ul className="space-y-2">
                    {component.elements.map((element, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {element}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Sparkles}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
              via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
              to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
          />

          {/* Best Practices */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Best Practices</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {bestPractices.map((practice) => (
                <div
                  key={practice.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <practice.icon className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{practice.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{practice.description}</p>
                  
                  <ul className="space-y-2">
                    {practice.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 