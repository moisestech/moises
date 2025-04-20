'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Gauge, Navigation, Layout, Link as LinkIcon, Eye, Smartphone, Zap, Shield, FileText, Image, Video, Music } from 'lucide-react';
import Link from 'next/link';

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
];

const navigationAnalysis = [
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
];

const linkAnalysis = [
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
];

const bestPractices = [
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
];

export default function AnalysisClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Website Analysis
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
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Website Analysis & Best Practices</h1>
            <p className="text-xl text-indigo-100">
              Learn how to effectively analyze and evaluate websites for optimal user experience
            </p>
          </motion.section>

          {/* Web Vitals */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Core Web Vitals</h2>
            <p className="text-lg text-gray-600">
              Key metrics for measuring user experience and website performance
            </p>
            <div className="grid grid-cols-1 gap-8">
              {webVitals.map((vital, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <vital.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{vital.name}</h3>
                        <p className="text-gray-600">{vital.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Ideal Performance</h4>
                        <p className="text-green-600 font-medium">{vital.ideal}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Poor Performance</h4>
                        <p className="text-red-600 font-medium">{vital.poor}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Optimization Tips</h4>
                        <ul className="space-y-2">
                          {vital.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Navigation Analysis */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Navigation Analysis</h2>
            <div className="grid grid-cols-1 gap-8">
              {navigationAnalysis.map((section, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <section.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.aspects.map((aspect, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">{aspect.name}</h4>
                          <p className="text-gray-600 mb-4">{aspect.description}</p>
                          <ul className="space-y-2">
                            {aspect.checklist.map((item, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Link Analysis */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Link Analysis</h2>
            <div className="grid grid-cols-1 gap-8">
              {linkAnalysis.map((section, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <section.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.aspects.map((aspect, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">{aspect.name}</h4>
                          <p className="text-gray-600 mb-4">{aspect.description}</p>
                          <ul className="space-y-2">
                            {aspect.checklist.map((item, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Best Practices */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Best Practices</h2>
            <div className="grid grid-cols-1 gap-8">
              {bestPractices.map((section, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <section.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.items.map((item, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">{item.name}</h4>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <ul className="space-y-2">
                            {item.checklist.map((point, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                <span className="text-gray-600">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Next Section Link */}
        <motion.div
          variants={fadeIn}
          className="mt-12 flex justify-end"
        >
          <Link
            href="/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue to Sustainability
            <ArrowLeft className="ml-2 h-4 w-4 transform rotate-180" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
} 