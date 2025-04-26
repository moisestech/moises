'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Smartphone,
  Layout,
  Settings,
  Sparkles,
  Laptop,
  Globe,
  Eye,
  Gauge,
  Accessibility,
  FileCheck,
  RefreshCw,
  Layers,
  MonitorSmartphone,
  Keyboard,
  Cpu,
  Wifi,
  Compass,
  RotateCcw,
  Ruler,
  Smartphone as SmartphoneIcon,
  Tablet,
  Maximize2
} from 'lucide-react'
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

export default function Day1Session1FundamentalsMobile() {
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
              Mobile Optimization
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
                <Smartphone className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Mobile Optimization
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to create a responsive and mobile-friendly website that works well on all devices.
              </p>
            </div>
          </motion.section>

          {/* Responsive Design */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Responsive Design</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Layout className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Viewport Settings</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Set proper viewport meta tag</li>
                  <li>Use relative units (em, rem, %)</li>
                  <li>Implement fluid typography</li>
                  <li>Consider device pixel ratio</li>
                  <li>Test on various screen sizes</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Laptop className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Media Queries</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Use mobile-first approach</li>
                  <li>Define meaningful breakpoints</li>
                  <li>Test breakpoint transitions</li>
                  <li>Consider device orientation</li>
                  <li>Document breakpoint usage</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Globe className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Flexible Layouts</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Use CSS Grid and Flexbox</li>
                  <li>Implement fluid grids</li>
                  <li>Consider content reordering</li>
                  <li>Handle overflow gracefully</li>
                  <li>Maintain visual hierarchy</li>
                </ul>
              </div>
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

          {/* Mobile UX */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Mobile UX</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Eye className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Touch Interactions</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Size touch targets appropriately</li>
                  <li>Provide adequate spacing</li>
                  <li>Implement touch gestures</li>
                  <li>Consider thumb reach zones</li>
                  <li>Test touch interactions</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Gauge className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Performance</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Optimize images for mobile</li>
                  <li>Minimize HTTP requests</li>
                  <li>Use efficient code</li>
                  <li>Implement lazy loading</li>
                  <li>Monitor performance metrics</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Layers className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Content Strategy</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Prioritize essential content</li>
                  <li>Use concise, scannable text</li>
                  <li>Optimize images and media</li>
                  <li>Consider offline capabilities</li>
                  <li>Test content readability</li>
                </ul>
              </div>
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
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <FileCheck className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Testing</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Test on actual devices</li>
                  <li>Use browser dev tools</li>
                  <li>Check different screen sizes</li>
                  <li>Test network conditions</li>
                  <li>Document testing results</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <Accessibility className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Accessibility</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Ensure proper contrast</li>
                  <li>Support screen readers</li>
                  <li>Provide text alternatives</li>
                  <li>Test with accessibility tools</li>
                  <li>Follow WCAG guidelines</li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <div className={`p-3 rounded-lg ${
                  theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                } mb-4`}>
                  <RefreshCw className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Progressive Enhancement</h4>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li>Start with basic functionality</li>
                  <li>Add features progressively</li>
                  <li>Consider device capabilities</li>
                  <li>Test feature detection</li>
                  <li>Document enhancement layers</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Laptop}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              via: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
              to: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-pink-400/50' : 'text-pink-500/50'}
          />

          {/* Chrome DevTools Guide */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Testing with Chrome DevTools</h2>
            
            {/* Quick Access */}
            <div className={`mb-8 p-6 rounded-xl ${
              theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Quick Access Shortcuts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Keyboard className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Mac</span>
                  </div>
                  <code className={`px-2 py-1 rounded ${
                    theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>⌘ + ⌥ + I</code>
                  <span className={`ml-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>(Command + Option + I)</span>
                </div>
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Keyboard className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                    <span className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Windows/Linux</span>
                  </div>
                  <code className={`px-2 py-1 rounded ${
                    theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Ctrl + Shift + I</code>
                  <span className={`ml-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>(Control + Shift + I)</span>
                </div>
              </div>
            </div>

            {/* Step by Step Guide */}
            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Step 1: Open Device Mode</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                    }`}>
                      <MonitorSmartphone className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                    </div>
                    <div>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        After opening DevTools, click the "Toggle device toolbar" button (looks like a phone/tablet icon) or use the shortcut:
                      </p>
                      <code className={`mt-2 px-2 py-1 rounded ${
                        theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>⌘ + Shift + M</code> (Mac) or <code className={`px-2 py-1 rounded ${
                        theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>Ctrl + Shift + M</code> (Windows/Linux)
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Step 2: Choose a Device</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                    }`}>
                      <SmartphoneIcon className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                    </div>
                    <div className="space-y-2">
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        Use the dropdown menu at the top to select:
                      </p>
                      <ul className={`space-y-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <li className="flex items-center gap-2">
                          <Maximize2 className="w-4 h-4" /> Responsive (drag edges to resize)
                        </li>
                        <li className="flex items-center gap-2">
                          <SmartphoneIcon className="w-4 h-4" /> Specific phone models
                        </li>
                        <li className="flex items-center gap-2">
                          <Tablet className="w-4 h-4" /> Tablet devices
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Step 3: Test Different Conditions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Wifi className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                      <h4 className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Network Speed</h4>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Simulate 3G, 4G, or offline conditions
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                      <h4 className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>CPU Throttling</h4>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Test on slower devices
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                      <h4 className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Orientation</h4>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Switch between portrait and landscape
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Pro Tips</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                      <h4 className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Show Rulers</h4>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Click "More options" (⋮) and select "Show rulers" to see pixel measurements
                    </p>
                  </div>
                  <div className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <RotateCcw className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                      <h4 className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Hard Reload</h4>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Use ⌘ + Shift + R (Mac) or Ctrl + Shift + R (Windows/Linux) to clear cache and reload
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 