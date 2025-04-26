'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  FileVideo,
  FolderOpen,
  Upload,
  Settings,
  Sparkles,
  Cloud,
  HardDrive,
  Link2,
  FileCheck,
  RefreshCw,
  Globe,
  Layout,
  Laptop,
  Gauge
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { PlatformIcon } from './PlatformIcons'
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

const contentTypes = [
  {
    title: "Images & Media",
    description: "Manage visual content effectively",
    icon: ImageIcon,
    color: "from-blue-500 to-indigo-500",
    platforms: {
      squarespace: {
        features: [
          "20MB file size limit per upload",
          "Built-in image editor",
          "Gallery blocks for portfolios",
          "Automatic image optimization",
          "Direct file linking support"
        ]
      },
      wix: {
        features: [
          "Media Manager for organization",
          "Built-in image optimization",
          "Gallery layouts and lightbox",
          "Video hosting integration",
          "Media library management"
        ]
      },
      github: {
        features: [
          "Git LFS for large files",
          "Cloudinary integration option",
          "Direct repository storage",
          "Version control for media",
          "CDN support for fast loading"
        ]
      }
    }
  },
  {
    title: "Documents & Files",
    description: "Organize and share documents",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    platforms: {
      squarespace: {
        features: [
          "File blocks for downloads",
          "PDF display support",
          "Document linking",
          "File organization in editor",
          "Automatic file URLs"
        ]
      },
      wix: {
        features: [
          "Document storage system",
          "File download blocks",
          "PDF viewer integration",
          "File access management",
          "Document organization"
        ]
      },
      github: {
        features: [
          "Markdown documentation",
          "PDF hosting",
          "Repository organization",
          "File version tracking",
          "Direct file linking"
        ]
      }
    }
  },
  {
    title: "Content Organization",
    description: "Structure your content logically",
    icon: FolderOpen,
    color: "from-green-500 to-teal-500",
    platforms: {
      squarespace: {
        features: [
          "Collections for content",
          "Tags and categories",
          "Content scheduling",
          "Page hierarchy",
          "Content templates"
        ]
      },
      wix: {
        features: [
          "Dynamic pages",
          "Content collections",
          "Page management",
          "Content categories",
          "Site structure tools"
        ]
      },
      github: {
        features: [
          "Repository structure",
          "Content in markdown",
          "Jekyll collections",
          "Front matter",
          "Directory organization"
        ]
      }
    }
  }
]

const uploadWorkflows = {
  squarespace: {
    title: "Squarespace Upload Workflow",
    steps: [
      "Open the link editor or content block",
      "Select 'File' from the dropdown",
      "Upload file (20MB limit)",
      "Organize in collections",
      "Set display options"
    ]
  },
  wix: {
    title: "Wix Upload Process",
    steps: [
      "Open Media Manager",
      "Drag and drop or select files",
      "Choose optimization settings",
      "Organize in folders",
      "Add to your site"
    ]
  },
  github: {
    title: "GitHub Content Management",
    steps: [
      "Clone repository locally",
      "Add files to project structure",
      "Commit changes",
      "Push to repository",
      "Deploy updates"
    ]
  }
}

const bestPractices = [
  {
    title: "File Organization",
    description: "Keep your content structured and easy to find",
    icon: Layout,
    tips: [
      "Use consistent naming conventions",
      "Create logical folder structures",
      "Maintain content hierarchy",
      "Document your organization system"
    ]
  },
  {
    title: "Version Control",
    description: "Track changes and maintain backups",
    icon: RefreshCw,
    tips: [
      "Regular content backups",
      "Document major changes",
      "Keep revision history",
      "Test before publishing"
    ]
  },
  {
    title: "Performance",
    description: "Optimize content for fast loading",
    icon: Gauge,
    tips: [
      "Compress images appropriately",
      "Use appropriate file formats",
      "Implement lazy loading",
      "Monitor file sizes"
    ]
  }
]

export default function Day1Session1FundamentalsContent() {
  const { theme } = useTheme()
  const [activePlatform, setActivePlatform] = React.useState<'squarespace' | 'wix' | 'github'>('squarespace')

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
              Content Management
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
                Content Management
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to effectively manage and organize your content across different platforms
              </p>
            </div>
          </motion.section>

          {/* Platform Selection */}
          <motion.section variants={fadeIn} className="flex justify-center gap-4">
            {(['squarespace', 'wix', 'github'] as const).map((platform) => (
              <motion.button
                key={platform}
                onClick={() => setActivePlatform(platform)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activePlatform === platform
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
                <PlatformIcon platform={platform} size={20} />
                <span className="capitalize">{platform}</span>
              </motion.button>
            ))}
          </motion.section>

          {/* Content Types */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Content Types</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contentTypes.map((type) => (
                <div
                  key={type.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color} mb-4`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{type.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{type.description}</p>
                  <div className="space-y-4">
                    {type.platforms[activePlatform].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Upload}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Upload Workflow */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
              }`}>
                <Upload className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{uploadWorkflows[activePlatform].title}</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {uploadWorkflows[activePlatform].steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`absolute -left-3 -top-3 w-8 h-8 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-indigo-600' : 'bg-indigo-500'
                  }`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className={`mt-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{step}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Settings}
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