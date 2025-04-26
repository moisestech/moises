'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Layout, 
  Globe, 
  Users, 
  Search, 
  Share2, 
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Info,
  ExternalLink,
  Code,
  CheckCircle2,
  XCircle,
  Sparkles,
  PenTool,
  Laptop,
  DollarSign,
  Clock,
  MessageSquare,
  Video,
  GalleryHorizontal,
  Palette,
  LayoutDashboard,
  BookOpen,
  Boxes,
  Gauge,
  Lock,
  Wrench,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import { PlatformBadge, PLATFORM_STYLES } from '@/components/workshop/PlatformIcons';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { useTheme } from '@/contexts/ThemeContext';
import { PlatformIcon } from './PlatformIcons';

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
    id: 'wix',
    title: 'Wix',
    description: 'User-friendly content management with drag-and-drop interface',
    icon: 'wix',
    color: 'from-yellow-500 to-orange-500',
    contentTypes: {
      pages: {
        title: 'Pages',
        description: 'Create and manage website pages',
        features: [
          'Drag-and-drop editor',
          'Pre-designed templates',
          'Mobile optimization',
          'SEO tools',
          'Version history'
        ]
      },
      blog: {
        title: 'Blog',
        description: 'Manage blog posts and articles',
        features: [
          'Rich text editor',
          'Categories and tags',
          'Scheduling',
          'Comments',
          'Social sharing'
        ]
      },
      media: {
        title: 'Media',
        description: 'Handle images, videos, and galleries',
        features: [
          'Image optimization',
          'Video hosting',
          'Gallery layouts',
          'Lightbox effects',
          'Media library'
        ]
      }
    },
    pros: [
      'Intuitive interface',
      'Built-in templates',
      'Automatic mobile optimization',
      'Integrated SEO tools',
      'Regular updates'
    ],
    cons: [
      'Limited customization',
      'Template restrictions',
      'Platform lock-in',
      'Performance limitations',
      'Cost for advanced features'
    ],
    bestFor: 'Artists who want a quick, professional website with minimal technical maintenance'
  },
  {
    id: 'squarespace',
    title: 'Squarespace',
    description: 'Sophisticated content management with design flexibility',
    icon: 'squarespace',
    color: 'from-gray-600 to-gray-800',
    contentTypes: {
      pages: {
        title: 'Pages',
        description: 'Create and manage website pages',
        features: [
          'Style editor',
          'Custom templates',
          'Mobile preview',
          'SEO settings',
          'Page scheduling'
        ]
      },
      blog: {
        title: 'Blog',
        description: 'Manage blog posts and articles',
        features: [
          'Advanced editor',
          'Multiple authors',
          'Content scheduling',
          'Comment system',
          'RSS feeds'
        ]
      },
      media: {
        title: 'Media',
        description: 'Handle images, videos, and galleries',
        features: [
          'Image editor',
          'Video backgrounds',
          'Gallery styles',
          'Portfolio layouts',
          'Asset management'
        ]
      }
    },
    pros: [
      'Professional templates',
      'Design flexibility',
      'Built-in analytics',
      'E-commerce integration',
      'Regular updates'
    ],
    cons: [
      'Learning curve',
      'Template limitations',
      'Platform lock-in',
      'Cost for features',
      'Limited customization'
    ],
    bestFor: 'Artists who want a sophisticated online presence with moderate customization'
  },
  {
    id: 'github',
    title: 'GitHub Pages',
    description: 'Developer-focused content management with complete control',
    icon: 'github',
    color: 'from-blue-600 to-indigo-600',
    contentTypes: {
      pages: {
        title: 'Pages',
        description: 'Create and manage website pages',
        features: [
          'Markdown support',
          'Custom templates',
          'Version control',
          'Custom domains',
          'Continuous deployment'
        ]
      },
      blog: {
        title: 'Blog',
        description: 'Manage blog posts and articles',
        features: [
          'Jekyll integration',
          'Custom layouts',
          'Content scheduling',
          'Comment systems',
          'RSS feeds'
        ]
      },
      media: {
        title: 'Media',
        description: 'Handle images, videos, and galleries',
        features: [
          'Custom optimization',
          'CDN integration',
          'Custom galleries',
          'Lazy loading',
          'Asset versioning'
        ]
      }
    },
    pros: [
      'Complete control',
      'Custom development',
      'Free hosting',
      'Version control',
      'Community support'
    ],
    cons: [
      'Technical knowledge required',
      'Manual setup',
      'No built-in editor',
      'Limited support',
      'Maintenance required'
    ],
    bestFor: 'Artists who want complete control and are comfortable with technical development'
  }
];

const platformTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'engagement', label: 'Engagement' }
];

export default function Day1Session1PlatformsClient() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [activePlatform, setActivePlatform] = useState(platforms[0].id);

  const currentPlatform = platforms.find(p => p.id === activePlatform);

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
              Platform Comparison
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
                Choose Your Platform
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Compare different platforms to find the best fit for your digital presence
              </p>
            </div>
          </motion.section>

          {/* Platform Selection */}
          <motion.section variants={fadeIn} className="flex justify-center gap-4">
            {platforms.map((platform) => (
              <motion.button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activePlatform === platform.id
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
                <PlatformIcon platform={platform.id} size={20} />
                <span>{platform.title}</span>
              </motion.button>
            ))}
          </motion.section>

          {currentPlatform && (
            <>
              {/* Platform Overview */}
              <motion.section
                variants={fadeIn}
                className={`rounded-2xl shadow-xl p-8 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${currentPlatform.color}`}>
                    <PlatformIcon platform={currentPlatform.id} size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{currentPlatform.title}</h2>
                    <p className={`text-lg ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{currentPlatform.description}</p>
                  </div>
                </div>

                {/* Content Types */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(currentPlatform.contentTypes).map(([key, content]) => (
                    <div
                      key={key}
                      className={`rounded-xl p-6 ${
                        theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                      }`}
                    >
                      <h3 className={`text-xl font-semibold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{content.title}</h3>
                      <p className={`mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{content.description}</p>
                      <ul className="space-y-2">
                        {content.features.map((feature, index) => (
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

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      <CheckCircle2 className="w-5 h-5" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {currentPlatform.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                          }`} />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {pro}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                      theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>
                      <XCircle className="w-5 h-5" />
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {currentPlatform.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            theme === 'dark' ? 'bg-red-400' : 'bg-red-600'
                          }`} />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                            {con}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Best For */}
                <div className={`rounded-xl p-6 ${
                  theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Users className="w-5 h-5" />
                    Best For
                  </h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {currentPlatform.bestFor}
                  </p>
                </div>
              </motion.section>
            </>
          )}
        </motion.div>
      </main>
    </div>
  );
} 
 