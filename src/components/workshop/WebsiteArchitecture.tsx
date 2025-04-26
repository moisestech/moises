'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  LayoutGrid,
  FolderTree,
  FileText,
  Image as ImageIcon,
  Video,
  Link2,
  Folder,
  Globe,
  Navigation,
  LayoutDashboard,
  Sparkles,
  Settings,
  Users,
  ChevronRight,
  Home,
  Mail,
  Briefcase,
  GalleryHorizontal,
  Calendar,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { useState } from 'react';

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

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

interface TreeNode {
  id: string;
  title: string;
  description?: string;
  icon: any;
  children?: TreeNode[];
}

const architectureTree: Record<string, TreeNode> = {
  homepage: {
    id: 'homepage',
    title: 'Homepage',
    description: 'Your digital front door',
    icon: Home,
    children: [
      {
        id: 'hero',
        title: 'Hero Section',
        description: 'First impression and key message',
        icon: Globe,
        children: []
      },
      {
        id: 'featured',
        title: 'Featured Work',
        description: 'Showcase your best projects',
        icon: GalleryHorizontal,
        children: []
      },
      {
        id: 'intro',
        title: 'Introduction',
        description: 'Brief overview of your practice',
        icon: Info,
        children: []
      }
    ]
  },
  navigation: {
    id: 'navigation',
    title: 'Navigation',
    description: 'Site structure and user flow',
    icon: Navigation,
    children: [
      {
        id: 'main-menu',
        title: 'Main Menu',
        description: 'Primary navigation items',
        icon: LayoutGrid,
        children: []
      },
      {
        id: 'footer',
        title: 'Footer',
        description: 'Secondary links and information',
        icon: Link2,
        children: []
      }
    ]
  },
  content: {
    id: 'content',
    title: 'Content Organization',
    description: 'How your work is structured',
    icon: FolderTree,
    children: [
      {
        id: 'portfolio',
        title: 'Portfolio',
        description: 'Your work showcase',
        icon: GalleryHorizontal,
        children: [
          {
            id: 'projects',
            title: 'Projects',
            description: 'Individual project pages',
            icon: Briefcase,
            children: []
          },
          {
            id: 'gallery',
            title: 'Gallery',
            description: 'Visual collection of work',
            icon: ImageIcon,
            children: []
          }
        ]
      },
      {
        id: 'about',
        title: 'About',
        description: 'Your story and background',
        icon: Info,
        children: []
      },
      {
        id: 'contact',
        title: 'Contact',
        description: 'How to reach you',
        icon: Mail,
        children: []
      }
    ]
  }
};

function TreeNodeComponent({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-start">
      <motion.div 
        whileHover={cardHover}
        className={`flex items-center gap-2 p-4 rounded-lg ${
          theme === 'dark'
            ? 'bg-gray-700/50 hover:bg-gray-700'
            : 'bg-gray-50 hover:bg-gray-100'
        } transition-colors relative z-10 ${level > 0 ? 'ml-6' : ''}`}
      >
        <div className={`p-2 rounded-lg ${
          theme === 'dark'
            ? 'bg-gray-600'
            : 'bg-white'
        }`}>
          {React.createElement(node.icon, { 
            className: `w-5 h-5 ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`
          })}
        </div>
        <div>
          <h3 className={`text-sm font-medium ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{node.title}</h3>
          {node.description && (
            <p className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>{node.description}</p>
          )}
        </div>
        {hasChildren && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`ml-2 ${
              theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        )}
      </motion.div>
      {hasChildren && isExpanded && (
        <div className={`mt-2 pl-8 border-l ${
          theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
        }`}>
          {node.children?.map((child) => (
            <TreeNodeComponent key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

const architectureElements = [
  {
    title: "Homepage",
    description: "Your website's main entry point and first impression",
    icon: Globe,
    elements: [
      "Hero section with key message",
      "Featured work or projects",
      "Brief introduction",
      "Call-to-action buttons",
      "Latest updates or news"
    ]
  },
  {
    title: "Navigation Structure",
    description: "How users move through your website",
    icon: Navigation,
    elements: [
      "Main menu items",
      "Dropdown menus",
      "Breadcrumb navigation",
      "Footer links",
      "Search functionality"
    ]
  },
  {
    title: "Content Organization",
    description: "How your content is structured and categorized",
    icon: FolderTree,
    elements: [
      "Portfolio categories",
      "Blog or news section",
      "About pages",
      "Contact information",
      "Resource library"
    ]
  }
];

const contentTypes = [
  {
    title: "Text Content",
    description: "Written content throughout your site",
    icon: FileText,
    examples: [
      "Artist statements",
      "Project descriptions",
      "Blog posts",
      "About page content",
      "Contact information"
    ]
  },
  {
    title: "Visual Content",
    description: "Images and visual elements",
    icon: ImageIcon,
    examples: [
      "Portfolio images",
      "Project documentation",
      "Process photos",
      "Exhibition documentation",
      "Profile pictures"
    ]
  },
  {
    title: "Media Content",
    description: "Rich media elements",
    icon: Video,
    examples: [
      "Video documentation",
      "Audio recordings",
      "Time-based work",
      "Interactive elements",
      "Animations"
    ]
  }
];

const bestPractices = [
  {
    title: "Clear Hierarchy",
    description: "Organize content in a logical and intuitive way",
    icon: LayoutDashboard,
    tips: [
      "Use consistent navigation",
      "Group related content",
      "Create clear categories",
      "Maintain visual hierarchy",
      "Use descriptive labels"
    ]
  },
  {
    title: "Efficient Structure",
    description: "Make content easily accessible",
    icon: Folder,
    tips: [
      "Limit navigation levels",
      "Use clear URLs",
      "Implement search",
      "Create sitemaps",
      "Add breadcrumbs"
    ]
  },
  {
    title: "User-Focused",
    description: "Design with your audience in mind",
    icon: Users,
    tips: [
      "Consider user journeys",
      "Optimize for mobile",
      "Ensure accessibility",
      "Test navigation",
      "Gather feedback"
    ]
  }
];

export default function WebsiteArchitecture() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<'homepage' | 'navigation' | 'content'>('homepage');
  const [showTreeView, setShowTreeView] = useState(false);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
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
              Website Architecture
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
          {/* Introduction */}
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
                <LayoutGrid className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Website Architecture
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Learn how to structure your website for optimal organization and user experience
              </p>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={FolderTree}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* View Toggle */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <motion.button
              className={`px-4 py-2 rounded-lg transition-colors ${
                !showTreeView
                  ? theme === 'dark'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowTreeView(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Card View
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-lg transition-colors ${
                showTreeView
                  ? theme === 'dark'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setShowTreeView(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tree View
            </motion.button>
          </motion.div>

          {/* Section Navigation */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            {Object.entries(architectureTree).map(([key, section]) => (
              <motion.button
                key={key}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeSection === key
                    ? theme === 'dark'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-500 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveSection(key as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {React.createElement(section.icon, { className: "w-5 h-5" })}
                <span>{section.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Content Display */}
          <AnimatePresence mode="wait">
            {showTreeView ? (
              <motion.section
                key="tree-view"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`rounded-2xl shadow-xl p-8 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <TreeNodeComponent node={architectureTree[activeSection]} />
              </motion.section>
            ) : (
              <motion.div
                key="card-view"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Core Architecture Elements */}
                <motion.section
                  variants={fadeIn}
                  className={`rounded-2xl shadow-xl p-8 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h2 className={`text-3xl font-bold mb-8 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Core Architecture Elements</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {architectureElements.map((element) => (
                      <motion.div
                        key={element.title}
                        whileHover={cardHover}
                        className={`rounded-xl p-6 ${
                          theme === 'dark'
                            ? 'bg-gray-700/50'
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${
                          theme === 'dark'
                            ? 'from-indigo-900 to-purple-900'
                            : 'from-indigo-500 to-purple-500'
                        } mb-4`}>
                          <element.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{element.title}</h3>
                        <p className={`mb-4 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>{element.description}</p>
                        <ul className="space-y-2">
                          {element.elements.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                                theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                              }`} />
                              <span className={
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <DecorativeDivider
                  icon={FileText}
                  gradientColors={{
                    from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
                    via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
                    to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
                  }}
                  iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
                />

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
                      <motion.div
                        key={type.title}
                        whileHover={cardHover}
                        className={`rounded-xl p-6 ${
                          theme === 'dark'
                            ? 'bg-gray-700/50'
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${
                          theme === 'dark'
                            ? 'from-purple-900 to-pink-900'
                            : 'from-purple-500 to-pink-500'
                        } mb-4`}>
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{type.title}</h3>
                        <p className={`mb-4 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>{type.description}</p>
                        <ul className="space-y-2">
                          {type.examples.map((example, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                                theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
                              }`} />
                              <span className={
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <DecorativeDivider
                  icon={Settings}
                  gradientColors={{
                    from: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
                    via: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
                    to: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'
                  }}
                  iconColor={theme === 'dark' ? 'text-pink-400/50' : 'text-pink-500/50'}
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
                      <motion.div
                        key={practice.title}
                        whileHover={cardHover}
                        className={`rounded-xl p-6 ${
                          theme === 'dark'
                            ? 'bg-gray-700/50'
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${
                          theme === 'dark'
                            ? 'from-pink-900 to-orange-900'
                            : 'from-pink-500 to-orange-500'
                        } mb-4`}>
                          <practice.icon className="w-6 h-6 text-white" />
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
                                theme === 'dark' ? 'bg-pink-400' : 'bg-pink-600'
                              }`} />
                              <span className={
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <DecorativeDivider
                  icon={Sparkles}
                  gradientColors={{
                    from: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
                    via: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
                    to: theme === 'dark' ? 'rgba(244, 63, 94, 0.3)' : 'rgba(244, 63, 94, 0.2)'
                  }}
                  iconColor={theme === 'dark' ? 'text-purple-400/50' : 'text-purple-500/50'}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
} 