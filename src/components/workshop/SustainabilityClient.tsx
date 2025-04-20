'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Layout, Code, Users, RefreshCw, ArrowRight, Zap, Shield, FileText, Image, Video, Music } from 'lucide-react';
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

const platformChoices = [
  {
    name: "Wix",
    icon: Globe,
    description: "Perfect for artists who want a quick, professional presence with minimal technical maintenance",
    commitmentLevel: "Low to Medium",
    features: [
      "Drag-and-drop website builder",
      "Built-in templates and galleries",
      "Automatic mobile optimization",
      "Integrated e-commerce",
      "Basic SEO tools"
    ],
    sustainability: [
      "Easy to maintain and update",
      "Regular platform updates",
      "Built-in security",
      "Automatic backups",
      "24/7 support"
    ],
    bestFor: "Artists who want to focus on their work while maintaining a professional online presence",
    engagementTips: [
      "Use Wix's built-in blog for updates",
      "Leverage the Art Store for sales",
      "Utilize Wix's social media integration",
      "Create regular content updates",
      "Use Wix's analytics to track engagement"
    ]
  },
  {
    name: "Squarespace",
    icon: Layout,
    description: "Ideal for artists seeking a polished, gallery-like presentation with moderate customization",
    commitmentLevel: "Medium",
    features: [
      "Professional templates",
      "Advanced gallery options",
      "Custom domain support",
      "Integrated analytics",
      "Email campaigns"
    ],
    sustainability: [
      "Regular content updates",
      "Professional image management",
      "Built-in SEO tools",
      "Mobile optimization",
      "Secure hosting"
    ],
    bestFor: "Artists who want a sophisticated online gallery with some customization options",
    engagementTips: [
      "Use the blog for artist statements",
      "Create portfolio collections",
      "Leverage email campaigns",
      "Use the scheduling feature",
      "Maintain consistent updates"
    ]
  },
  {
    name: "GitHub Pages",
    icon: Code,
    description: "For artists who want complete creative control and are willing to invest in technical skills",
    commitmentLevel: "High",
    features: [
      "Complete design control",
      "Custom animations",
      "Advanced SEO optimization",
      "Version control",
      "Custom integrations"
    ],
    sustainability: [
      "Regular technical maintenance",
      "Custom content management",
      "Advanced security options",
      "Performance optimization",
      "Custom analytics"
    ],
    bestFor: "Tech-savvy artists who want full creative control and unique digital experiences",
    engagementTips: [
      "Create custom interactive elements",
      "Implement custom analytics",
      "Build unique user experiences",
      "Create custom content systems",
      "Develop unique engagement features"
    ]
  }
];

const engagementStrategies = [
  {
    title: "Content Creation Loop",
    icon: RefreshCw,
    description: "Create a sustainable cycle between your art, website, and audience",
    steps: [
      {
        title: "Create",
        description: "Develop your artwork and documentation",
        tips: [
          "Document your process",
          "Capture high-quality images",
          "Write about your inspiration",
          "Record behind-the-scenes content"
        ]
      },
      {
        title: "Share",
        description: "Present your work on your website",
        tips: [
          "Use appropriate platforms",
          "Optimize for different devices",
          "Include context and stories",
          "Make it easy to share"
        ]
      },
      {
        title: "Engage",
        description: "Interact with your audience",
        tips: [
          "Respond to comments",
          "Ask for feedback",
          "Share updates",
          "Create community"
        ]
      },
      {
        title: "Iterate",
        description: "Use feedback to improve",
        tips: [
          "Analyze engagement",
          "Refine your approach",
          "Experiment with new ideas",
          "Update your content"
        ]
      }
    ]
  },
  {
    title: "Audience Journey",
    icon: Users,
    description: "Guide your audience through a meaningful experience",
    steps: [
      {
        title: "Discovery",
        description: "Make your work easy to find",
        tips: [
          "Optimize for search engines",
          "Share on social media",
          "Network with other artists",
          "Participate in online communities"
        ]
      },
      {
        title: "Exploration",
        description: "Create an engaging browsing experience",
        tips: [
          "Organize content logically",
          "Provide context and stories",
          "Make navigation intuitive",
          "Include clear calls to action"
        ]
      },
      {
        title: "Connection",
        description: "Build relationships with your audience",
        tips: [
          "Share your process",
          "Tell your story",
          "Respond to feedback",
          "Create opportunities for interaction"
        ]
      },
      {
        title: "Action",
        description: "Encourage meaningful engagement",
        tips: [
          "Make it easy to contact you",
          "Provide clear next steps",
          "Offer various engagement options",
          "Create a mailing list"
        ]
      }
    ]
  }
];

export default function SustainabilityClient() {
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
              Sustainable Digital Presence
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
            <h1 className="text-4xl font-bold mb-4">Sustainable Digital Presence</h1>
            <p className="text-xl text-indigo-100">
              Build a digital presence that grows with your artistic practice and engages your audience meaningfully
            </p>
          </motion.section>

          {/* Platform Choices */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Choosing Your Platform</h2>
            <p className="text-lg text-gray-600">
              Select a platform that matches your technical comfort level and digital engagement goals
            </p>
            <div className="grid grid-cols-1 gap-8">
              {platformChoices.map((platform, index) => (
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
                        <p className="text-sm text-gray-500">Commitment Level: {platform.commitmentLevel}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{platform.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {platform.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Sustainability</h4>
                        <ul className="space-y-2">
                          {platform.sustainability.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Best For</h4>
                        <p className="text-gray-600">{platform.bestFor}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Engagement Tips</h4>
                        <ul className="space-y-2">
                          {platform.engagementTips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
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

          {/* Engagement Strategies */}
          <motion.section variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Building Sustainable Engagement</h2>
            <div className="grid grid-cols-1 gap-8">
              {engagementStrategies.map((strategy, index) => (
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
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{strategy.title}</h3>
                        <p className="text-gray-600">{strategy.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {strategy.steps.map((step, i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-3">{step.title}</h4>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.tips.map((tip, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                                <span className="text-gray-600">{tip}</span>
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
            href="/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue to Vocabulary Basics
            <ArrowLeft className="ml-2 h-4 w-4 transform rotate-180" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
} 