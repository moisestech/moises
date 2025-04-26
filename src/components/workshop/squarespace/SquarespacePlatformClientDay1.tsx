'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Layout,
  Image as ImageIcon,
  FileText,
  Settings,
  Globe,
  Laptop,
  Code2,
  Palette,
  Sparkles,
  RefreshCw,
  Link2,
  Search,
  ShoppingCart,
  Users,
  MessageSquare,
  Brush,
  PaintBucket,
  Layers,
  Pencil,
  MonitorSmartphone,
  BookOpen,
  Eye
} from 'lucide-react'
import Link from 'next/link'
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

const gettingStartedSteps = [
  {
    title: "Choose Your Template",
    icon: Layout,
    description: "Start with a template that matches your artistic style",
    steps: [
      "Visit the template gallery",
      "Filter by 'Portfolio' or 'Art & Design'",
      "Preview templates in different color schemes",
      "Consider your content needs"
    ],
    links: [
      {
        text: "Browse Templates",
        url: "https://www.squarespace.com/templates/browse/topic/all-templates"
      },
      {
        text: "Try AI Website Builder",
        url: "https://www.squarespace.com/designer/home"
      }
    ]
  },
  {
    title: "Set Up Your Account",
    icon: Settings,
    description: "Create your Squarespace account and start your free trial",
    steps: [
      "Start a 14-day free trial",
      "Choose your template",
      "Set up basic account info",
      "Familiarize with the dashboard"
    ]
  },
  {
    title: "Plan Your Content",
    icon: Pencil,
    description: "Organize your artwork and content before building",
    steps: [
      "Prepare high-quality images",
      "Write your artist statement",
      "List your portfolio categories",
      "Gather testimonials and press"
    ]
  },
  {
    title: "Basic Setup",
    icon: Layers,
    description: "Configure essential website settings",
    steps: [
      "Add your business information",
      "Set up your domain",
      "Configure basic SEO settings",
      "Set up social media links"
    ]
  }
];

const designCustomization = [
  {
    title: "Visual Style",
    icon: PaintBucket,
    description: "Create your unique artistic identity",
    features: [
      {
        name: "Color Palette",
        description: "Choose colors that complement your artwork",
        tip: "Use your artwork's dominant colors for consistency"
      },
      {
        name: "Typography",
        description: "Select fonts that match your style",
        tip: "Limit to 2-3 fonts for clean design"
      },
      {
        name: "Spacing & Layout",
        description: "Create breathing room for your work",
        tip: "Use white space to let artwork shine"
      }
    ]
  },
  {
    title: "Portfolio Setup",
    icon: ImageIcon,
    description: "Showcase your artwork effectively",
    features: [
      {
        name: "Gallery Layouts",
        description: "Choose from grid, slideshow, or masonry",
        tip: "Consider artwork dimensions when selecting layout"
      },
      {
        name: "Image Optimization",
        description: "Ensure your work looks its best",
        tip: "Balance quality and load time"
      },
      {
        name: "Categorization",
        description: "Organize work by medium or series",
        tip: "Create clear navigation paths"
      }
    ]
  },
  {
    title: "Mobile Experience",
    icon: MonitorSmartphone,
    description: "Perfect your site for all devices",
    features: [
      {
        name: "Responsive Design",
        description: "Ensure artwork displays well on mobile",
        tip: "Test on multiple devices"
      },
      {
        name: "Navigation",
        description: "Create intuitive mobile menus",
        tip: "Simplify for touch interaction"
      },
      {
        name: "Image Scaling",
        description: "Optimize for smaller screens",
        tip: "Check text readability on mobile"
      }
    ]
  }
];

const essentialPages = [
  {
    title: "Homepage",
    icon: Globe,
    description: "Your artistic introduction",
    elements: [
      "Featured artwork showcase",
      "Brief artist statement",
      "Latest news or exhibitions",
      "Call-to-action for galleries/collectors"
    ]
  },
  {
    title: "Portfolio",
    icon: ImageIcon,
    description: "Your work showcase",
    elements: [
      "Organized gallery sections",
      "Artwork details and context",
      "Series or collections",
      "Process documentation"
    ]
  },
  {
    title: "About",
    icon: BookOpen,
    description: "Your story and credentials",
    elements: [
      "Full artist statement",
      "Exhibition history",
      "Press and publications",
      "Awards and recognition"
    ]
  },
  {
    title: "Contact",
    icon: MessageSquare,
    description: "Professional connections",
    elements: [
      "Gallery inquiries form",
      "Commission requests",
      "Studio visit information",
      "Newsletter signup"
    ]
  }
];

const bestPractices = [
  {
    title: "Image Presentation",
    icon: Eye,
    tips: [
      "Use consistent image ratios",
      "Maintain color accuracy",
      "Include artwork details",
      "Show scale when relevant"
    ]
  },
  {
    title: "Content Strategy",
    icon: FileText,
    tips: [
      "Update regularly with new work",
      "Share your artistic process",
      "Include exhibition dates",
      "Maintain a news section"
    ]
  },
  {
    title: "Professional Touch",
    icon: Brush,
    tips: [
      "Clear pricing for available works",
      "Easy gallery contact options",
      "Professional email setup",
      "Regular content updates"
    ]
  }
];

const templateInfo = {
  title: "Understanding Squarespace 7.1",
  description: "Modern template system with unified features",
  keyPoints: [
    {
      title: "Template Family System",
      description: "All 7.1 templates share the same features and capabilities",
      details: [
        "No need to switch templates for different features",
        "Unified style options across all templates",
        "Consistent editing experience",
        "Full customization freedom"
      ]
    },
    {
      title: "Page Section System",
      description: "Build pages using stackable sections",
      details: [
        "Add sections using the 'Add Section' button",
        "Choose from pre-designed or blank sections",
        "Customize section backgrounds and spacing",
        "Arrange sections by dragging and dropping"
      ]
    },
    {
      title: "Style Customization",
      description: "Global and section-specific styling",
      details: [
        "Use Site Styles panel for global changes",
        "Apply section-specific color themes",
        "Customize fonts, colors, and spacing",
        "Create consistent brand identity"
      ]
    }
  ],
  links: [
    {
      text: "Browse All Templates",
      url: "https://www.squarespace.com/templates/browse/topic/all-templates"
    },
    {
      text: "Try AI Website Builder",
      url: "https://www.squarespace.com/designer/home"
    }
  ]
};

const templateSelection = {
  title: "Choosing Your Template",
  description: "Select a starting point for your artist website",
  considerations: [
    {
      title: "Content First Approach",
      description: "Consider your artwork and content needs",
      points: [
        "Think about your artwork types (paintings, sculptures, installations)",
        "Consider portfolio layout needs (grid, slideshow, stacked)",
        "Plan for additional content (artist statement, CV, press)",
        "Account for future content growth"
      ]
    },
    {
      title: "Visual Alignment",
      description: "Match template style with your artistic vision",
      points: [
        "Look for templates that complement your work",
        "Consider white space and typography",
        "Check image display options",
        "Preview mobile layouts"
      ]
    },
    {
      title: "Customization Potential",
      description: "Evaluate modification needs",
      points: [
        "Identify required layout changes",
        "Check gallery options",
        "Review header styles",
        "Assess navigation needs"
      ]
    }
  ],
  artistTemplates: [
    {
      name: "Reflect",
      type: "Portfolio-focused",
      features: [
        "Large image displays",
        "Minimal navigation",
        "Full-screen galleries",
        "Artist bio section"
      ],
      bestFor: "Visual artists with large-scale work"
    },
    {
      name: "Wells",
      type: "Gallery-centric",
      features: [
        "Grid-based layouts",
        "Multiple gallery styles",
        "Project pages",
        "Blog integration"
      ],
      bestFor: "Artists with diverse collections"
    },
    {
      name: "Wexley",
      type: "Narrative-driven",
      features: [
        "Story-focused layouts",
        "Mixed media support",
        "Process documentation",
        "Exhibition features"
      ],
      bestFor: "Artists who document process"
    }
  ]
};

const pageStructure = {
  title: "Building Your Pages",
  description: "Create effective artist pages using sections",
  sections: [
    {
      title: "Homepage Sections",
      type: "Essential",
      elements: [
        {
          name: "Hero Gallery",
          purpose: "Showcase featured work",
          setup: [
            "Use 'Add Section' → 'Gallery'",
            "Choose between grid or slideshow",
            "Set optimal image sizes (2500px wide recommended)",
            "Enable lightbox for detailed views"
          ]
        },
        {
          name: "Artist Statement",
          purpose: "Introduce your practice",
          setup: [
            "Add text section with background",
            "Use typography for emphasis",
            "Keep content concise",
            "Include call-to-action"
          ]
        },
        {
          name: "Recent Work",
          purpose: "Show latest projects",
          setup: [
            "Create gallery grid section",
            "Enable hover effects",
            "Add artwork details",
            "Link to full portfolio"
          ]
        }
      ]
    },
    {
      title: "Portfolio Structure",
      type: "Core",
      elements: [
        {
          name: "Gallery Layout",
          purpose: "Display artwork collections",
          setup: [
            "Choose between grid, slideshow, or stack",
            "Set consistent image ratios",
            "Configure spacing and margins",
            "Add artwork metadata"
          ]
        },
        {
          name: "Project Pages",
          purpose: "Detailed work presentation",
          setup: [
            "Create individual project pages",
            "Use mixed content sections",
            "Add process documentation",
            "Include technical details"
          ]
        }
      ]
    }
  ],
  tips: [
    "Use consistent section spacing",
    "Maintain visual hierarchy",
    "Consider mobile viewing",
    "Test different layouts"
  ]
};

const styleCustomization = {
  title: "Styling Your Site",
  description: "Customize your site's appearance",
  areas: [
    {
      title: "Global Styles",
      access: "Site Styles panel (paintbrush icon)",
      elements: [
        {
          name: "Typography",
          options: [
            "Choose from built-in fonts",
            "Set heading styles",
            "Adjust line spacing",
            "Define text colors"
          ],
          tip: "Stick to 2-3 fonts maximum"
        },
        {
          name: "Colors",
          options: [
            "Create color palette",
            "Set theme colors",
            "Define accent colors",
            "Apply color themes to sections"
          ],
          tip: "Use colors that complement your artwork"
        },
        {
          name: "Spacing",
          options: [
            "Set global margins",
            "Define padding",
            "Adjust section spacing",
            "Configure grid gaps"
          ],
          tip: "Maintain consistent spacing throughout"
        }
      ]
    },
    {
      title: "Section-Specific Styles",
      access: "Section settings (edit icon)",
      elements: [
        {
          name: "Background",
          options: [
            "Solid colors",
            "Gradients",
            "Images",
            "Videos"
          ],
          tip: "Use subtle backgrounds that don't compete with artwork"
        },
        {
          name: "Layout",
          options: [
            "Content width",
            "Column configuration",
            "Alignment options",
            "Spacing controls"
          ],
          tip: "Test layouts at different screen sizes"
        }
      ]
    }
  ]
};

export default function SquarespacePlatformClientDay1() {
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
              href="/workshop/own-your-digital-presence/day/1/session/2"
              className={`flex items-center ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-indigo-400'
                  : 'text-gray-600 hover:text-indigo-600'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 2</span>
            </Link>
            <h1 className={`text-lg font-space-mono font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Artist's Guide to Squarespace
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-16"
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
                <Layout className="w-16 h-16" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Artist's Guide to Squarespace
              </h1>
              <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
                Create a professional portfolio that showcases your artwork beautifully
              </p>
            </div>
          </motion.section>

          {/* Getting Started Steps */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Getting Started</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {gettingStartedSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                  } mb-4`}>
                    <step.icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{step.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{step.description}</p>
                  <ol className="space-y-2">
                    {step.steps.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${
                          theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                        } flex items-center justify-center text-sm ${
                          theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                        }`}>
                          {i + 1}
                        </span>
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                  {step.links && (
                    <div className="mt-4 space-y-2">
                      {step.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 ${
                            theme === 'dark'
                              ? 'text-indigo-400 hover:text-indigo-300'
                              : 'text-indigo-600 hover:text-indigo-800'
                          }`}
                        >
                          <Link2 className="w-4 h-4" />
                          <span>{link.text}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Palette}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Template Understanding Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{templateInfo.title}</h2>
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{templateInfo.description}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {templateInfo.keyPoints.map((point) => (
                <div
                  key={point.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{point.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{point.description}</p>
                  <ul className="space-y-2">
                    {point.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {templateInfo.links.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-indigo-900 text-indigo-100 hover:bg-indigo-800'
                      : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
                  } transition-colors`}
                >
                  <Link2 className="w-4 h-4" />
                  <span>{link.text}</span>
                </a>
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

          {/* Template Selection Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{templateSelection.title}</h2>
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{templateSelection.description}</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {templateSelection.considerations.map((consideration) => (
                <div
                  key={consideration.title}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{consideration.title}</h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>{consideration.description}</p>
                  <ul className="space-y-2">
                    {consideration.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                          theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                        }`} />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Recommended Artist Templates</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {templateSelection.artistTemplates.map((template) => (
                <div
                  key={template.name}
                  className={`rounded-xl p-6 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}
                >
                  <h4 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{template.name}</h4>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>{template.type}</p>
                  <ul className="space-y-2 mb-4">
                    {template.features.map((feature, index) => (
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
                  <p className={`text-sm italic ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>Best for: {template.bestFor}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Layers}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.2)',
              via: theme === 'dark' ? 'rgba(5, 150, 105, 0.3)' : 'rgba(5, 150, 105, 0.2)',
              to: theme === 'dark' ? 'rgba(4, 120, 87, 0.3)' : 'rgba(4, 120, 87, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-emerald-400/50' : 'text-emerald-500/50'}
          />

          {/* Page Building Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{pageStructure.title}</h2>
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{pageStructure.description}</p>

            {pageStructure.sections.map((section) => (
              <div key={section.title} className="mb-12">
                <h3 className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{section.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {section.elements.map((element) => (
                    <div
                      key={element.name}
                      className={`rounded-xl p-6 ${
                        theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                      }`}
                    >
                      <h4 className={`text-xl font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{element.name}</h4>
                      <p className={`mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{element.purpose}</p>
                      <div className="space-y-4">
                        {element.setup.map((step, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full ${
                              theme === 'dark' ? 'bg-indigo-900/50' : 'bg-indigo-100'
                            } flex items-center justify-center text-sm ${
                              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                            }`}>
                              {index + 1}
                            </span>
                            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className={`rounded-xl p-6 ${
              theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
            }`}>
              <h4 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Pro Tips</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {pageStructure.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {tip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Palette}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)',
              via: theme === 'dark' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.2)',
              to: theme === 'dark' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-pink-400/50' : 'text-pink-500/50'}
          />

          {/* Style Customization Section */}
          <motion.section
            variants={fadeIn}
            className={`rounded-2xl shadow-xl p-8 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h2 className={`text-3xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{styleCustomization.title}</h2>
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{styleCustomization.description}</p>

            {styleCustomization.areas.map((area) => (
              <div key={area.title} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{area.title}</h3>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>({area.access})</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {area.elements.map((element) => (
                    <div
                      key={element.name}
                      className={`rounded-xl p-6 ${
                        theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
                      }`}
                    >
                      <h4 className={`text-xl font-semibold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{element.name}</h4>
                      <ul className="space-y-2 mb-4">
                        {element.options.map((option, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                              theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                            }`} />
                            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                              {option}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className={`text-sm italic ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Tip: {element.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
} 