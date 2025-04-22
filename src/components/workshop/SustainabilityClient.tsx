'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Layout, Code, Users, RefreshCw, ArrowRight, Zap, Shield, FileText, Image, Video, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { PlatformIcon, PLATFORM_STYLES } from '@/components/workshop/PlatformIcons'
import { useState } from 'react'

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

type PlatformName = 'wix' | 'squarespace' | 'github'

const platformChoices = [
  {
    name: "Wix" as const,
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
    name: "Squarespace" as const,
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
    name: "GitHub" as const,
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
    description: "Use your website as a living extension of your artistic practice",
    color: "from-blue-500 to-blue-600",
    steps: [
      {
        title: "Create",
        description: "Document and develop your artistic process on your website",
        tips: [
          "Share work-in-progress images and videos",
          "Write about your creative decisions and challenges",
          "Document your artistic techniques and materials",
          "Create time-lapse videos of your process"
        ]
      },
      {
        title: "Share",
        description: "Present your work in a way that enhances its impact",
        tips: [
          "Use high-quality images with proper lighting",
          "Include detailed descriptions of your work",
          "Create virtual exhibitions or galleries",
          "Share your artist statement and inspiration"
        ]
      },
      {
        title: "Engage",
        description: "Build meaningful connections through your website",
        tips: [
          "Respond to comments and questions about your work",
          "Share behind-the-scenes content regularly",
          "Create opportunities for audience interaction",
          "Build an email list for exclusive updates"
        ]
      },
      {
        title: "Iterate",
        description: "Use feedback to evolve your artistic practice",
        tips: [
          "Analyze which content resonates most with your audience",
          "Refine your presentation based on feedback",
          "Experiment with new ways to showcase your work",
          "Update your portfolio with your latest pieces"
        ]
      }
    ]
  },
  {
    title: "Audience Journey",
    icon: Users,
    description: "Guide visitors through a meaningful artistic experience",
    color: "from-purple-500 to-purple-600",
    steps: [
      {
        title: "Discovery",
        description: "Make your artistic work easily discoverable",
        tips: [
          "Optimize your website for art-related searches",
          "Share your work on art-focused platforms",
          "Connect with other artists and galleries",
          "Participate in online art communities"
        ]
      },
      {
        title: "Exploration",
        description: "Create an engaging artistic experience",
        tips: [
          "Organize your work by series or themes",
          "Provide context for each piece",
          "Make navigation intuitive and artistic",
          "Include clear calls to action for engagement"
        ]
      },
      {
        title: "Connection",
        description: "Build relationships with your audience",
        tips: [
          "Share your artistic journey and process",
          "Tell the stories behind your work",
          "Respond to feedback and questions",
          "Create interactive elements for engagement"
        ]
      },
      {
        title: "Action",
        description: "Encourage meaningful artistic engagement",
        tips: [
          "Make it easy to contact you about your work",
          "Provide clear information about purchasing",
          "Offer various ways to engage with your art",
          "Create a mailing list for art updates"
        ]
      }
    ]
  }
];

const platformTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'engagement', label: 'Engagement' }
]

export default function SustainabilityClient() {
  const [activeTab, setActiveTab] = useState('overview')
  const [currentSection, setCurrentSection] = useState(0);
  const [currentStrategy, setCurrentStrategy] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % currentStrategyData.steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + currentStrategyData.steps.length) % currentStrategyData.steps.length);
  };

  const currentStrategyData = engagementStrategies[currentStrategy];
  const currentStepData = currentStrategyData.steps[currentStep];

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
                    {/* Platform Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${PLATFORM_STYLES[platform.name.toLowerCase() as PlatformName]?.bgColor || 'bg-gray-100'}`}>
                        <PlatformIcon platform={platform.name.toLowerCase() as PlatformName} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                        <p className="text-sm text-gray-500">Commitment Level: {platform.commitmentLevel}</p>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-6">
                      <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                          {platformTabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`
                                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                                ${activeTab === tab.id
                                  ? 'border-indigo-500 text-indigo-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }
                              `}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </nav>
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">
                      {activeTab === 'overview' && (
                        <div className="space-y-4">
                          <p className="text-gray-600">{platform.description}</p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-gray-900 mb-2">Best For</h4>
                            <p className="text-gray-600">{platform.bestFor}</p>
                          </div>
                        </div>
                      )}

                      {activeTab === 'features' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {platform.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === 'sustainability' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {platform.sustainability.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                              <span className="text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === 'engagement' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {platform.engagementTips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                              <span className="text-gray-600">{tip}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Engagement Strategies */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Building Sustainable Engagement</h2>
              <p className="text-lg text-indigo-100 mb-4">
                Your website is more than just a portfolio - it's a dynamic platform that can enhance and extend your artistic practice. By integrating your website into your creative process, you can:
              </p>
              <ul className="space-y-2 text-indigo-100">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                  <span>Document and share your artistic journey in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                  <span>Build meaningful connections with your audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                  <span>Create a living archive of your creative process</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                  <span>Gather valuable feedback to inform your practice</span>
                </li>
              </ul>
            </div>

            {/* Strategy Navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setCurrentStrategy((prev) => (prev - 1 + engagementStrategies.length) % engagementStrategies.length)}
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Previous Strategy</span>
              </button>
              <div className="flex items-center gap-2">
                {engagementStrategies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStrategy(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStrategy ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentStrategy((prev) => (prev + 1) % engagementStrategies.length)}
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <span className="text-sm font-medium">Next Strategy</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>

            <motion.div
              key={currentStrategy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${currentStrategyData.color}`}>
                    <currentStrategyData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentStrategyData.title}</h3>
                    <p className="text-gray-600">{currentStrategyData.description}</p>
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevStep}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Previous Step</span>
                  </button>
                  <div className="flex items-center gap-2">
                    {currentStrategyData.steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextStep}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <span className="text-sm font-medium">Next Step</span>
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>

                {/* Current Step */}
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">{currentStep + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{currentStepData.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-6">{currentStepData.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStepData.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2" />
                        <span className="text-gray-600">{tip}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
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