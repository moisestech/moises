'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Clock,
  BookOpen,
  Sparkles,
  Code2,
  Layout,
  FileText,
  Settings,
  Globe,
  Laptop,
  Stars,
  Users,
  Link2,
  LucideIcon
} from 'lucide-react'
import Link from 'next/link'
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

interface Topic {
  title: string;
  description: string;
  icon?: LucideIcon;
  platforms?: string[];
}

const schedule = [
  {
    day: 1,
    title: "Building Your Digital Foundation",
    description: "Learn the fundamentals of web presence and start building your site",
    sessions: [
      {
        number: 1,
        title: "Web Fundamentals & Digital Presence",
        duration: "2 hours",
        topics: [
          {
            title: "Introduction to Digital Presence",
            icon: Globe,
            description: "Understanding the importance of online presence"
          },
          {
            title: "Web Fundamentals",
            icon: Code2,
            description: "Core concepts of web development and design"
          },
          {
            title: "Platform Overview",
            icon: Layout,
            description: "Comparing Squarespace, Wix, and GitHub Pages"
          }
        ]
      },
      {
        number: 2,
        title: "Platform Deep Dive & Resources",
        duration: "2 hours",
        topics: [
          {
            title: "Platform Guides",
            platforms: ["squarespace", "wix", "github"],
            description: "Detailed walkthrough of each platform"
          },
          {
            title: "Essential Tools",
            icon: Settings,
            description: "Key tools for web development"
          },
          {
            title: "Resource Library",
            icon: BookOpen,
            description: "Templates, guides, and assets"
          }
        ]
      }
    ]
  },
  {
    day: 2,
    title: "Content & Design",
    description: "Master content creation and design principles",
    sessions: [
      {
        number: 1,
        title: "Content Strategy & Creation",
        duration: "2 hours",
        topics: [
          {
            title: "Content Planning",
            icon: FileText,
            description: "Developing your content strategy"
          },
          {
            title: "Writing for the Web",
            icon: BookOpen,
            description: "Creating engaging web content"
          },
          {
            title: "Media Management",
            icon: Layout,
            description: "Handling images, videos, and files"
          }
        ]
      },
      {
        number: 2,
        title: "Design & User Experience",
        duration: "2 hours",
        topics: [
          {
            title: "Design Principles",
            icon: Layout,
            description: "Core design concepts and best practices"
          },
          {
            title: "User Experience",
            icon: Users,
            description: "Creating intuitive navigation and flow"
          },
          {
            title: "Responsive Design",
            icon: Laptop,
            description: "Making your site work on all devices"
          }
        ]
      }
    ]
  },
  {
    day: 3,
    title: "Advanced Features & Launch",
    description: "Implement advanced features and prepare for launch",
    sessions: [
      {
        number: 1,
        title: "Advanced Features & Integration",
        duration: "2 hours",
        topics: [
          {
            title: "Advanced Platform Features",
            icon: Stars,
            description: "Exploring advanced platform capabilities"
          },
          {
            title: "Third-party Integration",
            icon: Link2,
            description: "Adding external services and tools"
          },
          {
            title: "Analytics & Tracking",
            icon: Settings,
            description: "Setting up analytics and monitoring"
          }
        ]
      },
      {
        number: 2,
        title: "Launch & Maintenance",
        duration: "2 hours",
        topics: [
          {
            title: "Pre-launch Checklist",
            icon: FileText,
            description: "Final checks before going live"
          },
          {
            title: "Launch Strategy",
            icon: Globe,
            description: "Planning and executing your launch"
          },
          {
            title: "Maintenance Plan",
            icon: Settings,
            description: "Keeping your site updated and secure"
          }
        ]
      }
    ]
  }
]

export default function WorkshopScheduleClient() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
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
                <Calendar className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Workshop Schedule
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                A comprehensive overview of our workshop sessions and topics
              </p>
            </div>
          </motion.section>

          {schedule.map((day, dayIndex) => (
            <React.Fragment key={day.day}>
              {dayIndex > 0 && (
                <DecorativeDivider
                  icon={dayIndex === 1 ? Settings : Sparkles}
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
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  }`}>
                    <Calendar className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Day {day.day}: {day.title}</h2>
                    <p className={`text-lg ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{day.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {day.sessions.map((session) => (
                    <div key={session.number} className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          <Clock className={`w-5 h-5 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className={`text-xl font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>Session {session.number}: {session.title}</h3>
                          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                            {session.duration}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 pl-12">
                        {session.topics.map((topic) => (
                          <div
                            key={topic.title}
                            className={`rounded-xl p-6 ${
                              theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                            }`}
                          >
                            {topic.icon ? (
                              <div className={`p-3 rounded-lg ${
                                theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                              } mb-4`}>
                                <topic.icon className={`w-6 h-6 ${
                                  theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                                }`} />
                              </div>
                            ) : topic.platforms ? (
                              <div className="flex gap-2 mb-4">
                                {topic.platforms.map(platform => (
                                  <div
                                    key={platform}
                                    className={`p-2 rounded-lg ${
                                      theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                                    }`}
                                  >
                                    <PlatformIcon platform={platform} size={20} />
                                  </div>
                                ))}
                              </div>
                            ) : null}
                            <h4 className={`text-lg font-semibold mb-2 ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>{topic.title}</h4>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                              {topic.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
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