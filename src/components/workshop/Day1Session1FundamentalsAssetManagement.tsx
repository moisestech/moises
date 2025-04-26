'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FolderGit2,
  FileImage,
  FileVideo,
  FileAudio,
  FileText,
  FolderOpen,
  HardDrive,
  Cloud,
  RefreshCw,
  Tags,
  Search,
  FolderTree,
  ArrowLeft,
  Settings,
  Sparkles
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

const sections = [
  {
    title: "File Organization",
    description: "Create a clear and maintainable file structure",
    icon: FolderTree,
    color: "from-blue-500 to-blue-600",
    items: [
      {
        title: "Directory Structure",
        description: "Learn how to organize files by type and project",
        icon: FolderOpen,
        platforms: {
          squarespace: "Use Collections to organize content",
          wix: "Create Media Manager folders",
          github: "Structure repositories with clear folders"
        }
      },
      {
        title: "Naming Conventions",
        description: "Best practices for naming your files and folders",
        icon: Tags,
        platforms: {
          squarespace: "Use descriptive names for collections",
          wix: "Label media files consistently",
          github: "Follow Git naming conventions"
        }
      },
      {
        title: "Search & Retrieval",
        description: "Efficiently find and manage your assets",
        icon: Search,
        platforms: {
          squarespace: "Use Collection filters",
          wix: "Media Manager search features",
          github: "Repository search and filters"
        }
      }
    ]
  },
  {
    title: "Media Types",
    description: "Handle different types of media effectively",
    icon: FileImage,
    color: "from-purple-500 to-purple-600",
    items: [
      {
        title: "Images",
        description: "Manage your image files and formats",
        icon: FileImage,
        platforms: {
          squarespace: "Image blocks and galleries",
          wix: "Media Manager image optimization",
          github: "Git LFS for large images"
        }
      },
      {
        title: "Videos",
        description: "Organize video content and thumbnails",
        icon: FileVideo,
        platforms: {
          squarespace: "Video blocks and hosting",
          wix: "Wix Video integration",
          github: "Link to external video services"
        }
      },
      {
        title: "Documents",
        description: "Keep track of text and document files",
        icon: FileText,
        platforms: {
          squarespace: "File blocks for downloads",
          wix: "Document sharing features",
          github: "Markdown and documentation"
        }
      }
    ]
  },
  {
    title: "Storage Solutions",
    description: "Choose the right storage for your needs",
    icon: HardDrive,
    color: "from-pink-500 to-pink-600",
    items: [
      {
        title: "Local Storage",
        description: "Organize assets on your computer",
        icon: HardDrive,
        platforms: {
          squarespace: "Local backup of content",
          wix: "Export site content",
          github: "Local Git repository"
        }
      },
      {
        title: "Cloud Storage",
        description: "Use cloud services for backup and sharing",
        icon: Cloud,
        platforms: {
          squarespace: "Built-in cloud storage",
          wix: "Wix cloud hosting",
          github: "GitHub storage and Pages"
        }
      },
      {
        title: "Version Control",
        description: "Track changes and maintain backups",
        icon: RefreshCw,
        platforms: {
          squarespace: "Content versioning",
          wix: "Site history and backups",
          github: "Git version control"
        }
      }
    ]
  }
]

export default function Day1Session1FundamentalsAssetManagement() {
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
              Asset Management
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
                <FolderGit2 className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Asset Management
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to organize and manage your digital assets across different platforms
              </p>
            </div>
          </motion.section>

          {sections.map((section, sectionIndex) => (
            <React.Fragment key={section.title}>
              {sectionIndex > 0 && (
                <DecorativeDivider
                  icon={sectionIndex === 1 ? Settings : Sparkles}
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
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                        } flex items-center justify-center mb-4`}
                      >
                        <item.icon className={`w-6 h-6 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`} />
                      </motion.div>
                      <h4 className={`text-xl font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{item.title}</h4>
                      <p className={`mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{item.description}</p>
                      
                      {/* Platform-specific information */}
                      <div className="space-y-3">
                        {Object.entries(item.platforms).map(([platform, info]) => (
                          <div key={platform} className="flex items-start gap-2">
                            <div className={`p-1 rounded ${
                              theme === 'dark' ? 'bg-gray-600' : 'bg-white'
                            }`}>
                              <PlatformIcon platform={platform} size={16} />
                            </div>
                            <span className={`text-sm ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {info}
                            </span>
                          </div>
                        ))}
                      </div>
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
          {sections.map((section) => (
            <motion.section
              key={section.title}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color}`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-lg text-gray-600">{section.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${section.color} rounded-xl p-6 shadow-md`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/90">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  )
} 