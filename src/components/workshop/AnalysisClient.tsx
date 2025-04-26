'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Gauge, 
  Navigation, 
  Layout, 
  Link as LinkIcon, 
  Eye, 
  Smartphone, 
  Zap, 
  Shield, 
  FileText, 
  Image, 
  Video, 
  Music,
  ChevronRight,
  ChevronLeft,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import DecorativeDivider from '@/components/common/DecorativeDivider';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface WebVitalItem {
  name: string;
  icon: LucideIcon;
  description: string;
  ideal: string;
  poor: string;
  tips: string[];
}

interface Aspect {
  name: string;
  description: string;
  checklist: string[];
}

interface AnalysisItem {
  title: string;
  icon: LucideIcon;
  aspects: Aspect[];
}

interface BestPracticeItem {
  title: string;
  icon: LucideIcon;
  items: {
    name: string;
    description: string;
    checklist: string[];
  }[];
}

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  content: (WebVitalItem | AnalysisItem | BestPracticeItem)[];
}

const sections: Section[] = [
  {
    id: 'web-vitals',
    title: 'Web Vitals',
    icon: Gauge,
    color: 'from-blue-500 to-blue-600',
    content: [
      {
        name: "Accessing Web Vitals",
        icon: Gauge,
        description: "How to measure and analyze your website's performance metrics",
        ideal: "Use Chrome DevTools or PageSpeed Insights",
        poor: "Not monitoring Web Vitals",
        tips: [
          "Open Chrome DevTools (F12 or right-click > Inspect)",
          "Go to the 'Performance' tab",
          "Click 'Record' to capture metrics",
          "Use Google's PageSpeed Insights for detailed analysis",
          "Install the Web Vitals Chrome extension for real-time monitoring"
        ]
      },
      {
        name: "Largest Contentful Paint (LCP)",
        icon: Gauge,
        description: "Measures loading performance",
        ideal: "2.5 seconds or less",
        poor: "4 seconds or more",
        tips: [
          "Optimize server response time",
          "Use a CDN for static assets",
          "Optimize images and videos",
          "Implement lazy loading",
          "Minimize CSS and JavaScript"
        ]
      },
      {
        name: "First Input Delay (FID)",
        icon: Zap,
        description: "Measures interactivity",
        ideal: "100 milliseconds or less",
        poor: "300 milliseconds or more",
        tips: [
          "Minimize JavaScript execution",
          "Use web workers for heavy tasks",
          "Break up long tasks",
          "Optimize third-party code",
          "Implement code splitting"
        ]
      },
      {
        name: "Cumulative Layout Shift (CLS)",
        icon: Layout,
        description: "Measures visual stability",
        ideal: "0.1 or less",
        poor: "0.25 or more",
        tips: [
          "Include size attributes for images",
          "Reserve space for ads and embeds",
          "Avoid inserting content above existing content",
          "Use CSS transforms for animations",
          "Preload web fonts"
        ]
      }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation Analysis',
    icon: Navigation,
    color: 'from-purple-500 to-purple-600',
    content: [
      {
        title: "Menu Structure",
        icon: Navigation,
        aspects: [
          {
            name: "Clarity",
            description: "Is the navigation menu clear and intuitive?",
            checklist: [
              "Clear labels and categories",
              "Logical grouping of items",
              "Consistent placement",
              "Visible on all pages",
              "Mobile-friendly design"
            ]
          },
          {
            name: "Accessibility",
            description: "Is the navigation accessible to all users?",
            checklist: [
              "Keyboard navigation support",
              "Screen reader compatibility",
              "Sufficient color contrast",
              "Clear focus states",
              "ARIA labels where needed"
            ]
          }
        ]
      },
      {
        title: "Page Organization",
        icon: Layout,
        aspects: [
          {
            name: "Hierarchy",
            description: "Is the content hierarchy clear?",
            checklist: [
              "Clear heading structure",
              "Logical content flow",
              "Consistent layout patterns",
              "Proper use of white space",
              "Visual hierarchy"
            ]
          },
          {
            name: "Content Structure",
            description: "Is the content well-organized?",
            checklist: [
              "Clear sections and subsections",
              "Consistent formatting",
              "Proper use of lists and tables",
              "Balanced text and media",
              "Clear call-to-actions"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'links',
    title: 'Link Analysis',
    icon: LinkIcon,
    color: 'from-pink-500 to-pink-600',
    content: [
      {
        title: "Internal Links",
        icon: LinkIcon,
        aspects: [
          {
            name: "Navigation",
            description: "How well do internal links support navigation?",
            checklist: [
              "Clear link text",
              "Relevant anchor text",
              "Proper link placement",
              "Consistent styling",
              "Mobile-friendly touch targets"
            ]
          },
          {
            name: "SEO",
            description: "How well do internal links support SEO?",
            checklist: [
              "Logical link structure",
              "Relevant anchor text",
              "Proper use of nofollow",
              "Link depth consideration",
              "Broken link monitoring"
            ]
          }
        ]
      },
      {
        title: "External Links",
        icon: LinkIcon,
        aspects: [
          {
            name: "User Experience",
            description: "How well are external links implemented?",
            checklist: [
              "Clear indication of external links",
              "Proper opening behavior",
              "Relevant link text",
              "Security considerations",
              "Accessibility compliance"
            ]
          },
          {
            name: "Trust & Security",
            description: "How secure are external links?",
            checklist: [
              "HTTPS protocol",
              "Proper rel attributes",
              "Link validation",
              "Security warnings",
              "User control options"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    icon: Shield,
    color: 'from-green-500 to-green-600',
    content: [
      {
        title: "Performance",
        icon: Zap,
        items: [
          {
            name: "Loading Speed",
            description: "Optimize for fast loading times",
            checklist: [
              "Minimize HTTP requests",
              "Enable compression",
              "Leverage browser caching",
              "Optimize images",
              "Minify CSS/JS"
            ]
          },
          {
            name: "Responsiveness",
            description: "Ensure smooth interactions",
            checklist: [
              "Optimize JavaScript",
              "Use efficient CSS",
              "Implement lazy loading",
              "Optimize animations",
              "Monitor performance"
            ]
          }
        ]
      },
      {
        title: "Accessibility",
        icon: Eye,
        items: [
          {
            name: "WCAG Compliance",
            description: "Follow accessibility guidelines",
            checklist: [
              "Proper heading structure",
              "Alt text for images",
              "Keyboard navigation",
              "Color contrast",
              "Screen reader support"
            ]
          },
          {
            name: "User Experience",
            description: "Ensure inclusive design",
            checklist: [
              "Clear navigation",
              "Readable text",
              "Consistent layout",
              "Error handling",
              "User feedback"
            ]
          }
        ]
      },
      {
        title: "Mobile Experience",
        icon: Smartphone,
        items: [
          {
            name: "Responsive Design",
            description: "Optimize for all devices",
            checklist: [
              "Mobile-first approach",
              "Responsive images",
              "Touch-friendly targets",
              "Adaptive layouts",
              "Performance optimization"
            ]
          },
          {
            name: "User Interface",
            description: "Ensure mobile-friendly UI",
            checklist: [
              "Simplified navigation",
              "Clear call-to-actions",
              "Readable text",
              "Fast loading",
              "Touch interactions"
            ]
          }
        ]
      }
    ]
  }
];

const webVitals = [
  {
    name: "Largest Contentful Paint (LCP)",
    icon: Gauge,
    description: "Measures loading performance",
    ideal: "2.5 seconds or less",
    poor: "4 seconds or more",
    tips: [
      "Optimize server response time",
      "Use a CDN for static assets",
      "Optimize images and videos",
      "Implement lazy loading",
      "Minimize CSS and JavaScript"
    ]
  },
  {
    name: "First Input Delay (FID)",
    icon: Zap,
    description: "Measures interactivity",
    ideal: "100 milliseconds or less",
    poor: "300 milliseconds or more",
    tips: [
      "Minimize JavaScript execution",
      "Use web workers for heavy tasks",
      "Break up long tasks",
      "Optimize third-party code",
      "Implement code splitting"
    ]
  },
  {
    name: "Cumulative Layout Shift (CLS)",
    icon: Layout,
    description: "Measures visual stability",
    ideal: "0.1 or less",
    poor: "0.25 or more",
    tips: [
      "Include size attributes for images",
      "Reserve space for ads and embeds",
      "Avoid inserting content above existing content",
      "Use CSS transforms for animations",
      "Preload web fonts"
    ]
  }
]

export default function AnalysisClient() {
  const { theme } = useTheme();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentVital, setCurrentVital] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const nextVital = () => {
    setCurrentVital((prev) => (prev + 1) % webVitals.length);
  };

  const prevVital = () => {
    setCurrentVital((prev) => (prev - 1 + webVitals.length) % webVitals.length);
  };

  const currentSectionData = sections[currentSection];
  const currentVitalData = webVitals[currentVital];
  const SectionIcon = currentSectionData.icon;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Website Analysis
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Analysis Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50' : 'bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Website Analysis Guide</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              A comprehensive analysis of your website helps identify strengths, areas for improvement, and opportunities for optimization. Here are the key aspects we'll examine:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'}`}>
                    <Gauge className={`h-5 w-5 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  </div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Performance</h3>
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Evaluate loading speed, responsiveness, and overall user experience metrics.
                </p>
              </div>
              <div className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-purple-900/50' : 'bg-purple-100'}`}>
                    <Eye className={`h-5 w-5 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Accessibility</h3>
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Ensure your site is usable by everyone, including those with disabilities.
                </p>
              </div>
              <div className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-pink-900/50' : 'bg-pink-100'}`}>
                    <Smartphone className={`h-5 w-5 ${theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}`} />
                  </div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Mobile Experience</h3>
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Check how well your site performs and looks on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <DecorativeDivider
          icon={Gauge}
          gradientColors={{
            from: 'rgba(59, 130, 246, 0.2)',
            via: 'rgba(99, 102, 241, 0.2)',
            to: 'rgba(168, 85, 247, 0.2)'
          }}
          iconColor="text-blue-500/50"
        />

        {/* Section Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevSection}
            className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Previous</span>
          </button>
          <div className="flex items-center gap-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSection ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSection}
            className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
          >
            <span className="text-sm font-medium">Next</span>
            <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeIn}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className={`bg-gradient-to-r ${currentSectionData.color} rounded-2xl p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <SectionIcon className="w-8 h-8" />
                <h2 className="text-3xl font-bold">{currentSectionData.title}</h2>
              </div>
              <p className="text-lg text-white/90">
                {currentSectionData.title === 'Web Vitals' 
                  ? 'Key metrics for measuring user experience and website performance'
                  : currentSectionData.title === 'Navigation Analysis'
                  ? 'Evaluate and improve your website\'s navigation structure'
                  : currentSectionData.title === 'Link Analysis'
                  ? 'Analyze and optimize your internal and external links'
                  : 'Follow these best practices for optimal website performance'}
              </p>
            </div>

            {/* Section Content */}
            {currentSectionData.id === 'web-vitals' ? (
              <div className="space-y-8">
                {/* Web Vitals Navigation */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevVital}
                    className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
                  >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Previous Metric</span>
                  </button>
                  <div className="flex items-center gap-2">
                    {webVitals.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVital(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentVital ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextVital}
                    className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'} transition-colors`}
                  >
                    <span className="text-sm font-medium">Next Metric</span>
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>

                {/* Current Web Vital */}
                <motion.div
                  key={currentVital}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${theme === 'dark' ? 'from-blue-900 to-blue-800' : 'from-blue-500 to-blue-600'}`}>
                        <currentVitalData.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentVitalData.name}</h3>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{currentVitalData.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-50'}`}>
                        <h4 className={`font-bold ${theme === 'dark' ? 'text-green-300' : 'text-green-900'} mb-3`}>Ideal Performance</h4>
                        <p className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{currentVitalData.ideal}</p>
                      </div>
                      <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-50'}`}>
                        <h4 className={`font-bold ${theme === 'dark' ? 'text-red-300' : 'text-red-900'} mb-3`}>Poor Performance</h4>
                        <p className={`font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{currentVitalData.poor}</p>
                      </div>
                      <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                        <h4 className={`font-bold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-900'} mb-3`}>Optimization Tips</h4>
                        <ul className="space-y-2">
                          {currentVitalData.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`} />
                              <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Resources */}
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Additional Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                      <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>PageSpeed Insights</h5>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-3`}>Get detailed performance analysis and recommendations</p>
                      <a 
                        href="https://pagespeed.web.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                      >
                        Visit PageSpeed Insights →
                      </a>
                    </div>
                    <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                      <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>Web Vitals Extension</h5>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-3`}>Monitor Core Web Vitals in real-time</p>
                      <a 
                        href="https://pagespeed.web.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                      >
                        Install Extension →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-8">
                {currentSectionData.content.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${currentSectionData.color}`}>
                            <ItemIcon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {'name' in item ? item.name : item.title}
                          </h3>
                        </div>

                        <DecorativeDivider
                          icon={ItemIcon}
                          gradientColors={{
                            from: 'rgba(16, 185, 129, 0.2)',
                            via: 'rgba(5, 150, 105, 0.2)',
                            to: 'rgba(4, 120, 87, 0.2)'
                          }}
                          iconColor="text-emerald-500/50"
                          className="my-6"
                        />

                        {currentSectionData.id === 'web-vitals' && 'name' in item && item.name === "Accessing Web Vitals" ? (
                          <div className="space-y-8">
                            {/* Tools Overview */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-3">Recommended Tools</h4>
                                <ul className="space-y-3">
                                  <li className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                      <Gauge className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <span className="text-gray-700">Chrome DevTools</span>
                                  </li>
                                  <li className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                      <Zap className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <span className="text-gray-700">PageSpeed Insights</span>
                                  </li>
                                  <li className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                      <Eye className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <span className="text-gray-700">Web Vitals Extension</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="bg-purple-50 p-6 rounded-xl">
                                <h4 className="font-bold text-purple-900 mb-3">Quick Start Guide</h4>
                                <p className="text-gray-600 mb-4">
                                  Follow these steps to start measuring your website's performance:
                                </p>
                                <ol className="space-y-4">
                                  <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                      <span className="text-purple-600 font-bold">1</span>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-gray-900">Open Chrome DevTools</h5>
                                      <p className="text-sm text-gray-600">Press F12 or right-click and select "Inspect"</p>
                                    </div>
                                  </li>
                                  <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                      <span className="text-purple-600 font-bold">2</span>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-gray-900">Navigate to Performance</h5>
                                      <p className="text-sm text-gray-600">Click on the "Performance" tab in DevTools</p>
                                    </div>
                                  </li>
                                  <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                      <span className="text-purple-600 font-bold">3</span>
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-gray-900">Start Recording</h5>
                                      <p className="text-sm text-gray-600">Click the record button to capture metrics</p>
                                    </div>
                                  </li>
                                </ol>
                              </div>
                            </div>

                            {/* Additional Resources */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                              <h4 className="font-bold text-gray-900 mb-4">Additional Resources</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                  <h5 className="font-medium text-gray-900 mb-2">PageSpeed Insights</h5>
                                  <p className="text-sm text-gray-600 mb-3">Get detailed performance analysis and recommendations</p>
                                  <a 
                                    href="https://pagespeed.web.dev/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`text-blue-600 hover:text-blue-700 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                                  >
                                    Visit PageSpeed Insights →
                                  </a>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                  <h5 className="font-medium text-gray-900 mb-2">Web Vitals Extension</h5>
                                  <p className="text-sm text-gray-600 mb-3">Monitor Core Web Vitals in real-time</p>
                                  <a 
                                    href="https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`text-blue-600 hover:text-blue-700 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                                  >
                                    Install Extension →
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : currentSectionData.id === 'web-vitals' ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-bold text-gray-900 mb-3">Ideal Performance</h4>
                              <p className="text-green-600 font-medium">{'ideal' in item ? item.ideal : ''}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-3">Poor Performance</h4>
                              <p className="text-red-600 font-medium">{'poor' in item ? item.poor : ''}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-3">Optimization Tips</h4>
                              <ul className="space-y-2">
                                {('tips' in item ? item.tips : []).map((tip: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                    <span className="text-gray-600">{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {('aspects' in item ? item.aspects : 'items' in item ? item.items : []).map((aspect: Aspect | { name: string; description: string; checklist: string[] }, i: number) => (
                              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-bold text-gray-900 mb-3">{aspect.name}</h4>
                                <p className="text-gray-600 mb-4">{aspect.description}</p>
                                <ul className="space-y-2">
                                  {aspect.checklist.map((point: string, j: number) => (
                                    <li key={j} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                      <span className="text-gray-600">{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <DecorativeDivider
          icon={Navigation}
          gradientColors={{
            from: 'rgba(168, 85, 247, 0.2)',
            via: 'rgba(236, 72, 153, 0.2)',
            to: 'rgba(244, 63, 94, 0.2)'
          }}
          iconColor="text-purple-500/50"
        />
      </main>
    </div>
  );
} 