'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Image as ImageIcon,
  Filter,
  Layout,
  Grid,
  Columns,
  Rows,
  GalleryHorizontal,
  GalleryVertical,
  ImagePlus
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

type Platform = 'all' | 'squarespace' | 'wix' | 'github'

const galleryLayouts = [
  {
    title: "Grid Gallery",
    description: "A responsive grid layout for showcasing multiple artworks",
    icon: Grid,
    platforms: {
      squarespace: {
        features: [
          "Customizable grid spacing",
          "Hover effects",
          "Lightbox integration",
          "Image optimization",
          "Mobile responsive"
        ]
      },
      wix: {
        features: [
          "Dynamic grid layouts",
          "Custom hover animations",
          "Pro gallery features",
          "Auto-arrange options",
          "Advanced image settings"
        ]
      },
      github: {
        features: [
          "CSS Grid implementation",
          "Responsive breakpoints",
          "Custom image loading",
          "Markdown gallery support",
          "Static optimization"
        ]
      }
    }
  },
  {
    title: "Masonry Layout",
    description: "A dynamic layout that adapts to image dimensions",
    icon: Layout,
    platforms: {
      squarespace: {
        features: [
          "Auto-adjusting columns",
          "Vertical spacing control",
          "Image aspect ratio",
          "Gallery navigation",
          "Thumbnail options"
        ]
      },
      wix: {
        features: [
          "Masonry grid settings",
          "Column customization",
          "Image scaling options",
          "Gallery filters",
          "Sorting capabilities"
        ]
      },
      github: {
        features: [
          "CSS Masonry layout",
          "Dynamic column count",
          "Image lazy loading",
          "Progressive loading",
          "Responsive design"
        ]
      }
    }
  },
  {
    title: "Slideshow",
    description: "A full-screen slideshow for immersive viewing",
    icon: GalleryHorizontal,
    platforms: {
      squarespace: {
        features: [
          "Transition effects",
          "Navigation controls",
          "Autoplay options",
          "Caption support",
          "Fullscreen mode"
        ]
      },
      wix: {
        features: [
          "Multiple transitions",
          "Custom controls",
          "Background options",
          "Mobile swipe",
          "Slideshow settings"
        ]
      },
      github: {
        features: [
          "Custom slideshow",
          "Keyboard navigation",
          "Touch support",
          "Image preloading",
          "Performance optimization"
        ]
      }
    }
  }
]

const bestPractices = [
  {
    title: "Image Optimization",
    description: "Ensure fast loading and high quality",
    icon: ImageIcon,
    tips: [
      "Compress images without quality loss",
      "Use appropriate file formats",
      "Implement lazy loading",
      "Provide multiple sizes",
      "Enable caching"
    ]
  },
  {
    title: "Layout Design",
    description: "Create visually appealing galleries",
    icon: Columns,
    tips: [
      "Maintain consistent spacing",
      "Consider image proportions",
      "Use appropriate thumbnails",
      "Implement clear navigation",
      "Ensure mobile responsiveness"
    ]
  },
  {
    title: "User Experience",
    description: "Make browsing enjoyable and intuitive",
    icon: GalleryVertical,
    tips: [
      "Add smooth transitions",
      "Include loading states",
      "Provide clear navigation",
      "Support keyboard controls",
      "Optimize for touch devices"
    ]
  }
]

export default function Day1Session1FundamentalsGallery() {
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
              Gallery Layouts
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
                <ImagePlus className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Gallery Layouts
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to create beautiful and responsive gallery layouts for your artwork.
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

          {/* Gallery Layouts */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Gallery Layouts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryLayouts.map((layout) => (
                <div
                  key={layout.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <layout.icon className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{layout.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{layout.description}</p>
                  
                  <ul className="space-y-2">
                    {(selectedPlatform === 'all' 
                      ? layout.platforms.squarespace.features 
                      : layout.platforms[selectedPlatform].features
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
            icon={Layout}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
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
 