'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Image, Video, Layout, Code, Globe, Users, RefreshCw, Zap, Shield } from 'lucide-react';
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

const platforms = [
  {
    name: "Wix",
    icon: Globe,
    description: "User-friendly content management with drag-and-drop interface",
    contentTypes: [
      {
        name: "Pages",
        description: "Create and manage website pages",
        features: [
          "Drag-and-drop editor",
          "Pre-designed templates",
          "Mobile optimization",
          "SEO tools",
          "Version history"
        ]
      },
      {
        name: "Blog",
        description: "Manage blog posts and articles",
        features: [
          "Rich text editor",
          "Categories and tags",
          "Scheduling",
          "Comments",
          "Social sharing"
        ]
      },
      {
        name: "Media",
        description: "Handle images, videos, and galleries",
        features: [
          "Image optimization",
          "Video hosting",
          "Gallery layouts",
          "Lightbox effects",
          "Media library"
        ]
      }
    ],
    pros: [
      "Intuitive interface",
      "Built-in templates",
      "Automatic mobile optimization",
      "Integrated SEO tools",
      "Regular updates"
    ],
    cons: [
      "Limited customization",
      "Template restrictions",
      "Platform lock-in",
      "Performance limitations",
      "Cost for advanced features"
    ],
    bestFor: "Artists who want a quick, professional website with minimal technical maintenance"
  },
  {
    name: "Squarespace",
    icon: Layout,
    description: "Sophisticated content management with design flexibility",
    contentTypes: [
      {
        name: "Pages",
        description: "Create and manage website pages",
        features: [
          "Style editor",
          "Custom templates",
          "Mobile preview",
          "SEO settings",
          "Page scheduling"
        ]
      },
      {
        name: "Blog",
        description: "Manage blog posts and articles",
        features: [
          "Advanced editor",
          "Multiple authors",
          "Content scheduling",
          "Comment system",
          "RSS feeds"
        ]
      },
      {
        name: "Media",
        description: "Handle images, videos, and galleries",
        features: [
          "Image editor",
          "Video backgrounds",
          "Gallery styles",
          "Portfolio layouts",
          "Asset management"
        ]
      }
    ],
    pros: [
      "Professional templates",
      "Design flexibility",
      "Built-in analytics",
      "E-commerce integration",
      "Regular updates"
    ],
    cons: [
      "Learning curve",
      "Template limitations",
      "Platform lock-in",
      "Cost for features",
      "Limited customization"
    ],
    bestFor: "Artists who want a sophisticated online presence with moderate customization"
  },
  {
    name: "GitHub Pages",
    icon: Code,
    description: "Developer-focused content management with complete control",
    contentTypes: [
      {
        name: "Pages",
        description: "Create and manage website pages",
        features: [
          "Markdown support",
          "Custom templates",
          "Version control",
          "Custom domains",
          "Continuous deployment"
        ]
      },
      {
        name: "Blog",
        description: "Manage blog posts and articles",
        features: [
          "Jekyll integration",
          "Custom layouts",
          "Content scheduling",
          "Comment systems",
          "RSS feeds"
        ]
      },
      {
        name: "Media",
        description: "Handle images, videos, and galleries",
        features: [
          "Custom optimization",
          "CDN integration",
          "Custom galleries",
          "Lazy loading",
          "Asset versioning"
        ]
      }
    ],
    pros: [
      "Complete control",
      "Custom development",
      "Free hosting",
      "Version control",
      "Community support"
    ],
    cons: [
      "Technical knowledge required",
      "Manual setup",
      "No built-in editor",
      "Limited support",
      "Maintenance required"
    ],
    bestFor: "Tech-savvy artists who want complete creative control and custom development"
  }
];

const contentStrategies = [
  {
    title: "Content Organization",
    icon: FileText,
    aspects: [
      {
        name: "Structure",
        description: "How to organize your content effectively",
        checklist: [
          "Create clear hierarchies",
          "Use consistent naming",
          "Implement categories",
          "Maintain version control",
          "Backup regularly"
        ]
      },
      {
        name: "Workflow",
        description: "Establish efficient content workflows",
        checklist: [
          "Define content types",
          "Set up templates",
          "Create style guides",
          "Establish review process",
          "Schedule updates"
        ]
      }
    ]
  },
  {
    title: "Content Optimization",
    icon: Zap,
    aspects: [
      {
        name: "Performance",
        description: "Optimize content for better performance",
        checklist: [
          "Compress images",
          "Minimize code",
          "Use lazy loading",
          "Implement caching",
          "Monitor performance"
        ]
      },
      {
        name: "SEO",
        description: "Optimize content for search engines",
        checklist: [
          "Use keywords naturally",
          "Write meta descriptions",
          "Add alt text",
          "Create sitemaps",
          "Monitor analytics"
        ]
      }
    ]
  }
];

const bestPractices = [
  {
    title: "Content Creation",
    icon: FileText,
    items: [
      {
        name: "Writing",
        description: "Create effective written content",
        checklist: [
          "Use clear language",
          "Write for your audience",
          "Maintain consistency",
          "Include calls to action",
          "Proofread carefully"
        ]
      },
      {
        name: "Media",
        description: "Handle media content effectively",
        checklist: [
          "Optimize file sizes",
          "Use appropriate formats",
          "Maintain quality",
          "Add descriptions",
          "Organize files"
        ]
      }
    ]
  },
  {
    title: "Content Maintenance",
    icon: RefreshCw,
    items: [
      {
        name: "Updates",
        description: "Keep content fresh and relevant",
        checklist: [
          "Regular reviews",
          "Update outdated content",
          "Remove broken links",
          "Check performance",
          "Monitor engagement"
        ]
      },
      {
        name: "Backup",
        description: "Protect your content",
        checklist: [
          "Regular backups",
          "Version control",
          "Offline storage",
          "Test recovery",
          "Document processes"
        ]
      }
    ]
  }
];

export default function ContentFundamentalsClient() {
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
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Content Management Fundamentals</h1>
            <p className="text-xl text-indigo-100">
              Learn how to effectively manage and organize content across different platforms
            </p>
          </motion.section>

          {/* Platform Comparison */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Platform Comparison</h2>
            <p className="text-lg text-gray-600">
              Compare content management features across different platforms
            </p>
            <div className="grid grid-cols-1 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <platform.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                        <p className="text-gray-600">{platform.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Content Types</h4>
                        <div className="space-y-4">
                          {platform.contentTypes.map((type, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg">
                              <h5 className="font-semibold text-gray-900">{type.name}</h5>
                              <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                              <ul className="space-y-1">
                                {type.features.map((feature, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                    <span className="text-sm text-gray-600">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Pros & Cons</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-green-600 mb-2">Pros</h5>
                            <ul className="space-y-1">
                              {platform.pros.map((pro, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                                  <span className="text-sm text-gray-600">{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-600 mb-2">Cons</h5>
                            <ul className="space-y-1">
                              {platform.cons.map((con, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                                  <span className="text-sm text-gray-600">{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Best For</h4>
                        <p className="text-gray-600">{platform.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Content Strategies */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Content Strategies</h2>
            <div className="grid grid-cols-1 gap-8">
              {contentStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <strategy.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{strategy.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {strategy.aspects.map((aspect, i) => (
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
      </main>
    </div>
  );
} 