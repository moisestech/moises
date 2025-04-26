'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  FileText, 
  Users, 
  Archive, 
  MessageSquare,
  Search,
  Layout,
  Link2,
  Share2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Image,
  PenTool,
  Video,
  Mail,
  BarChart2,
  Edit2,
  Camera,
  GalleryHorizontal,
  MessageCircle,
  Mailbox,
  Lightbulb,
  Zap
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

const keyBenefits = [
  {
    title: "Document & Share",
    icon: FileText,
    description: "Document and share your artistic journey in real-time, creating a dynamic record of your creative process.",
    color: "from-blue-500 to-blue-600",
    tips: [
      { icon: Image, text: "Share work-in-progress images" },
      { icon: PenTool, text: "Document your creative process" },
      { icon: Video, text: "Create time-lapse videos" },
      { icon: Edit2, text: "Write about your artistic decisions" }
    ]
  },
  {
    title: "Build Connections",
    icon: Users,
    description: "Build meaningful connections with your audience through regular updates and engagement.",
    color: "from-purple-500 to-purple-600",
    tips: [
      { icon: MessageCircle, text: "Respond to comments and questions" },
      { icon: Share2, text: "Share behind-the-scenes content" },
      { icon: Users, text: "Create interactive elements" },
      { icon: Mail, text: "Build an email list for updates" }
    ]
  },
  {
    title: "Living Archive",
    icon: Archive,
    description: "Create a living archive of your creative process that evolves with your artistic practice.",
    color: "from-green-500 to-green-600",
    tips: [
      { icon: GalleryHorizontal, text: "Organize work by series" },
      { icon: Camera, text: "Document your techniques" },
      { icon: Archive, text: "Maintain a portfolio history" },
      { icon: RefreshCw, text: "Update with new pieces" }
    ]
  },
  {
    title: "Gather Feedback",
    icon: MessageSquare,
    description: "Gather valuable feedback to inform and enhance your artistic practice.",
    color: "from-pink-500 to-pink-600",
    tips: [
      { icon: BarChart2, text: "Analyze content engagement" },
      { icon: MessageSquare, text: "Collect audience feedback" },
      { icon: Lightbulb, text: "Refine based on insights" },
      { icon: Zap, text: "Experiment with new approaches" }
    ]
  }
];

const engagementStrategies = [
  {
    title: "Discovery",
    icon: Search,
    description: "Make your artistic work easily discoverable",
    color: "from-indigo-500 to-indigo-600",
    steps: [
      { icon: Search, text: "Optimize for art-related searches" },
      { icon: Share2, text: "Share on art-focused platforms" },
      { icon: Users, text: "Connect with artists and galleries" },
      { icon: MessageCircle, text: "Join online art communities" }
    ]
  },
  {
    title: "Exploration",
    icon: Layout,
    description: "Create an engaging artistic experience",
    color: "from-blue-500 to-blue-600",
    steps: [
      { icon: GalleryHorizontal, text: "Organize by series or themes" },
      { icon: FileText, text: "Provide context for each piece" },
      { icon: Layout, text: "Make navigation intuitive" },
      { icon: Link2, text: "Include clear calls to action" }
    ]
  },
  {
    title: "Connection",
    icon: Users,
    description: "Build relationships with your audience",
    color: "from-purple-500 to-purple-600",
    steps: [
      { icon: PenTool, text: "Share your artistic journey" },
      { icon: MessageCircle, text: "Tell stories behind your work" },
      { icon: MessageSquare, text: "Respond to feedback" },
      { icon: Share2, text: "Create interactive elements" }
    ]
  },
  {
    title: "Action",
    icon: Zap,
    description: "Encourage meaningful artistic engagement",
    color: "from-pink-500 to-pink-600",
    steps: [
      { icon: MessageSquare, text: "Make contact easy" },
      { icon: Mailbox, text: "Provide clear purchasing info" },
      { icon: Share2, text: "Offer engagement options" },
      { icon: Mail, text: "Create an art updates list" }
    ]
  }
];

export default function SustainabilityClient() {
  const { theme } = useTheme();
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeStrategy, setActiveStrategy] = useState(0);

  const nextBenefit = () => setActiveBenefit((prev) => (prev + 1) % keyBenefits.length);
  const prevBenefit = () => setActiveBenefit((prev) => (prev - 1 + keyBenefits.length) % keyBenefits.length);

  const nextStrategy = () => setActiveStrategy((prev) => (prev + 1) % engagementStrategies.length);
  const prevStrategy = () => setActiveStrategy((prev) => (prev - 1 + engagementStrategies.length) % engagementStrategies.length);

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
              Sustainability & Engagement
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
          <motion.section variants={fadeIn} className="text-center">
            <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
              Building a Sustainable Digital Presence
            </h1>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Learn how to create and maintain an engaging digital presence that grows with your artistic practice.
            </p>
          </motion.section>

          <DecorativeDivider
            icon={RefreshCw}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              via: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)',
              to: theme === 'dark' ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-indigo-400/50' : 'text-indigo-500/50'}
          />

          {/* Key Benefits */}
          <motion.section variants={fadeIn} className="space-y-8">
            <div className="text-center">
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Key Benefits</h2>
              <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Discover the core benefits of maintaining a sustainable digital presence.
              </p>
            </div>

            <div className={`rounded-xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBenefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className={`bg-gradient-to-r ${keyBenefits[activeBenefit].color} p-6 rounded-xl text-white`}>
                      <div className="flex items-center gap-4 mb-4">
                        {React.createElement(keyBenefits[activeBenefit].icon, { className: "w-8 h-8" })}
                        <h3 className="text-2xl font-bold">{keyBenefits[activeBenefit].title}</h3>
                      </div>
                      <p className="text-white/90">{keyBenefits[activeBenefit].description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {keyBenefits[activeBenefit].tips.map((tip, index) => (
                        <div key={index} className={`flex items-center gap-3 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          {React.createElement(tip.icon, { className: `w-5 h-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}` })}
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{tip.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={prevBenefit}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  <div className="flex gap-2">
                    {keyBenefits.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveBenefit(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === activeBenefit
                            ? theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                            : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextBenefit}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          <DecorativeDivider
            icon={Users}
            gradientColors={{
              from: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
              via: theme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              to: theme === 'dark' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'
            }}
            iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-500/50'}
          />

          {/* Engagement Strategies */}
          <motion.section variants={fadeIn} className="space-y-8">
            <div className="text-center">
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Engagement Strategies</h2>
              <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Learn effective strategies for engaging with your audience and building a sustainable digital presence.
              </p>
            </div>

            <div className={`rounded-xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStrategy}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className={`bg-gradient-to-r ${engagementStrategies[activeStrategy].color} p-6 rounded-xl text-white`}>
                      <div className="flex items-center gap-4 mb-4">
                        {React.createElement(engagementStrategies[activeStrategy].icon, { className: "w-8 h-8" })}
                        <h3 className="text-2xl font-bold">{engagementStrategies[activeStrategy].title}</h3>
                      </div>
                      <p className="text-white/90">{engagementStrategies[activeStrategy].description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {engagementStrategies[activeStrategy].steps.map((step, index) => (
                        <div key={index} className={`flex items-center gap-3 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          {React.createElement(step.icon, { className: `w-5 h-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}` })}
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{step.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={prevStrategy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                  <div className="flex gap-2">
                    {engagementStrategies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStrategy(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === activeStrategy
                            ? theme === 'dark' ? 'bg-indigo-400' : 'bg-indigo-600'
                            : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextStrategy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Next Steps */}
          <motion.section variants={fadeIn} className="text-center">
            <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Next Steps</h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
              Now that you understand sustainability and engagement strategies, let's explore the key vocabulary and concepts in digital presence.
            </p>
            <Link
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white transition-colors`}
            >
              Continue to Vocabulary
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 