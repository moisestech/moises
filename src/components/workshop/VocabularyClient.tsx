'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, BookOpen, Globe, Server, Shield, Smartphone, Layout, Search, FileText, Image, 
  LayoutDashboard, Users, Code2, FileCode, ChevronDown, ChevronUp, Trophy, Star, Sparkles,
  Filter, RefreshCw, CheckCircle2, XCircle, LayoutGrid, Presentation
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { useState, useEffect, Suspense } from 'react';
import React from 'react';
import { PlatformIcon } from '@/components/workshop/PlatformIcons';
import VocabularyPresentation from './VocabularyPresentation';

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

const vocabularySections = [
  {
    title: "Basic Web Terms",
    icon: Globe,
    color: "from-blue-500 to-indigo-500",
    terms: [
      {
        term: "Domain",
        definition: "Your website's address on the internet (e.g., www.yourname.com)",
        icon: Globe,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "Hosting",
        definition: "The service that stores your website's files and makes them accessible on the internet",
        icon: Server,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "SSL Certificate",
        definition: "A security protocol that encrypts data between your website and visitors (indicated by 'https://')",
        icon: Shield,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "Responsive Design",
        definition: "A design approach that ensures your website looks good on all devices (desktop, tablet, mobile)",
        icon: Smartphone,
        platforms: ["squarespace", "wix", "github"]
      }
    ]
  },
  {
    title: "Content Management",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    terms: [
      {
        term: "CMS (Content Management System)",
        definition: "A platform that allows you to manage website content without coding (e.g., WordPress, Squarespace)",
        icon: Layout,
        platforms: ["squarespace", "wix"]
      },
      {
        term: "Website Performance",
        definition: "Tools for monitoring and improving website speed and user experience",
        icon: Search,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "Metadata",
        definition: "Information about your content that helps search engines understand your website",
        icon: FileText,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "Alt Text",
        definition: "Descriptive text added to images for accessibility purposes",
        icon: Image,
        platforms: ["squarespace", "wix", "github"]
      }
    ]
  },
  {
    title: "Design & Development",
    icon: Code2,
    color: "from-green-500 to-teal-500",
    terms: [
      {
        term: "UI (User Interface)",
        definition: "The visual elements and layout of your website that users interact with",
        icon: LayoutDashboard,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "UX (User Experience)",
        definition: "The overall experience users have when interacting with your website",
        icon: Users,
        platforms: ["squarespace", "wix", "github"]
      },
      {
        term: "CSS (Cascading Style Sheets)",
        definition: "Code that controls the visual appearance of your website",
        icon: Code2,
        platforms: ["github"]
      },
      {
        term: "HTML (Hypertext Markup Language)",
        definition: "The standard language for creating web pages and applications",
        icon: FileCode,
        platforms: ["github"]
      }
    ]
  },
  {
    title: "Squarespace Specific",
    icon: Layout,
    color: "from-amber-500 to-orange-500",
    terms: [
      {
        term: "Template",
        definition: "Pre-designed website layouts that can be customized with your content",
        icon: LayoutDashboard,
        platforms: ["squarespace"]
      },
      {
        term: "Style Editor",
        definition: "Squarespace's tool for customizing colors, fonts, and other visual elements",
        icon: Sparkles,
        platforms: ["squarespace"]
      },
      {
        term: "Content Blocks",
        definition: "Modular elements you can add to your pages (text, images, galleries, etc.)",
        icon: Layout,
        platforms: ["squarespace"]
      },
      {
        term: "Collection",
        definition: "A group of similar content items (blog posts, products, gallery images)",
        icon: FileText,
        platforms: ["squarespace"]
      }
    ]
  },
  {
    title: "Wix Specific",
    icon: Layout,
    color: "from-rose-500 to-pink-500",
    terms: [
      {
        term: "Wix Editor",
        definition: "The main interface for designing and customizing your Wix website",
        icon: LayoutDashboard,
        platforms: ["wix"]
      },
      {
        term: "ADI (Artificial Design Intelligence)",
        definition: "Wix's AI-powered tool that creates a website based on your answers to questions",
        icon: Sparkles,
        platforms: ["wix"]
      },
      {
        term: "Dynamic Pages",
        definition: "Templates that automatically populate with your content from a collection",
        icon: RefreshCw,
        platforms: ["wix"]
      },
      {
        term: "Corvid",
        definition: "Wix's development platform for adding custom functionality to your site",
        icon: Code2,
        platforms: ["wix"]
      }
    ]
  },
  {
    title: "GitHub Specific",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    terms: [
      {
        term: "Repository",
        definition: "A storage space where your website's files are kept and version-controlled",
        icon: FileCode,
        platforms: ["github"]
      },
      {
        term: "Git",
        definition: "The version control system used to track changes in your website files",
        icon: RefreshCw,
        platforms: ["github"]
      },
      {
        term: "Markdown",
        definition: "A simple markup language used for formatting text on GitHub",
        icon: FileText,
        platforms: ["github"]
      },
      {
        term: "GitHub Pages",
        definition: "GitHub's free hosting service for static websites",
        icon: Globe,
        platforms: ["github"]
      }
    ]
  }
];

type GameMode = 'learn' | 'challenge';
type PlatformFilter = 'all' | 'squarespace' | 'wix' | 'github';

export default function VocabularyClient() {
  const { theme } = useTheme();
  const [gameMode, setGameMode] = useState<GameMode>('learn');
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('all');
  const [currentTerm, setCurrentTerm] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'goals' | 'overview' | 'architecture'>('goals');
  const [filters, setFilters] = useState({
    platforms: [] as string[],
    aiLevel: [] as number[],
    webDesignLevel: [] as number[]
  });
  const [viewMode, setViewMode] = useState<'list' | 'presentation'>('list');

  const allTerms = vocabularySections.flatMap(section => section.terms);
  const filteredTerms = allTerms.filter(term => 
    platformFilter === 'all' || term.platforms.includes(platformFilter)
  );

  const currentTermData = filteredTerms[currentTerm];
  const options = filteredTerms
    .filter((_, index) => index !== currentTerm)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(term => term.definition);

  const shuffledOptions = [currentTermData.definition, ...options]
    .sort(() => Math.random() - 0.5);

  const handleAnswer = (selectedDefinition: string) => {
    setSelectedOption(selectedDefinition);
    const correct = selectedDefinition === currentTermData.definition;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextTerm = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    setCurrentTerm(prev => (prev + 1) % filteredTerms.length);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability"
              className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Sustainability</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode(prev => prev === 'list' ? 'presentation' : 'list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-indigo-900 text-indigo-100 hover:bg-indigo-800' 
                    : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
                } transition-colors`}
              >
                {viewMode === 'list' ? (
                  <>
                    <Presentation className="w-5 h-5" />
                    <span>Presentation View</span>
                  </>
                ) : (
                  <>
                    <LayoutGrid className="w-5 h-5" />
                    <span>List View</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setGameMode(prev => prev === 'learn' ? 'challenge' : 'learn')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-indigo-900 text-indigo-100 hover:bg-indigo-800' 
                    : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
                } transition-colors`}
              >
                {gameMode === 'learn' ? (
                  <>
                    <Trophy className="w-5 h-5" />
                    <span>Start Challenge</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5" />
                    <span>Back to Learning</span>
                  </>
                )}
              </button>
              {gameMode === 'challenge' && (
                <div className="flex items-center gap-2">
                  <Star className={`w-5 h-5 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`} />
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Score: {score}
                  </span>
                </div>
              )}
            </div>
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
            className={`bg-gradient-to-r ${theme === 'dark' ? 'from-indigo-900 to-purple-900' : 'from-indigo-500 to-purple-500'} rounded-2xl p-8 text-white`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-white/20' : 'bg-white/20'}`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold">Web Development Vocabulary</h1>
            </div>
            <p className={`text-xl ${theme === 'dark' ? 'text-indigo-200' : 'text-indigo-100'}`}>
              {viewMode === 'list'
                ? 'Browse and learn essential terms and concepts for building your website'
                : 'Click on terms to see their definitions in a visual presentation'}
            </p>
          </motion.section>

          <AnimatePresence mode="wait">
            {viewMode === 'list' ? (
              // Learning Mode
              <>
                {/* Platform Filter */}
                <motion.div variants={fadeIn} className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Filter className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                  </div>
                  <div className="flex gap-2">
                    {(['all', 'squarespace', 'wix', 'github'] as const).map(platform => (
                      <button
                        key={platform}
                        onClick={() => setPlatformFilter(platform)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          platformFilter === platform
                            ? theme === 'dark'
                              ? 'bg-indigo-600 text-white'
                              : 'bg-indigo-500 text-white'
                            : theme === 'dark'
                              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {platform === 'all' ? 'All Platforms' : (
                          <div className="flex items-center gap-2">
                            <PlatformIcon platform={platform} size={16} />
                            <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Vocabulary Sections */}
                {vocabularySections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <motion.section variants={fadeIn} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'}`}>
                          {React.createElement(section.icon, { className: `w-6 h-6 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}` })}
                        </div>
                        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{section.title}</h2>
                      </div>

                      <div className={`rounded-xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="p-6">
                          <div className="space-y-4">
                            {section.terms
                              .filter(term => platformFilter === 'all' || term.platforms.includes(platformFilter))
                              .map((term, termIndex) => (
                                <div 
                                  key={termIndex}
                                  className={`rounded-lg overflow-hidden transition-all duration-200 ${
                                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                                  }`}
                                >
                                  <div className="p-4">
                                    <div className="flex items-center gap-4 mb-2">
                                      <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'}`}>
                                        {React.createElement(term.icon, { className: `w-5 h-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}` })}
                                      </div>
                                      <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        {term.term}
                                      </h3>
                                    </div>
                                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                                      {term.definition}
                                    </p>
                                    <div className="flex gap-2 mt-3">
                                      {term.platforms.map(platform => (
                                        <div 
                                          key={platform}
                                          className={`p-1 rounded ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
                                        >
                                          <PlatformIcon platform={platform} size={16} />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </motion.section>

                    {sectionIndex < vocabularySections.length - 1 && (
                      <DecorativeDivider
                        icon={section.icon}
                        gradientColors={{
                          from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
                          via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
                          to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
                        }}
                        iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
                      />
                    )}
                  </div>
                ))}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <VocabularyPresentation sections={vocabularySections} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
} 
