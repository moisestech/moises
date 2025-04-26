'use client';

import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  Layout, 
  Zap, 
  Wand2, 
  Sparkles,
  Bot,
  Clock,
  Calendar
} from 'lucide-react';
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

const refreshStrategies = [
  {
    title: "Content Updates",
    icon: RefreshCw,
    color: "from-blue-500 to-blue-600",
    tools: [
      "AI-powered content suggestions",
      "Automatic content optimization",
      "Performance improvements",
      "Content calendar planning"
    ]
  },
  {
    title: "Design Refreshes",
    icon: Layout,
    color: "from-purple-500 to-purple-600",
    tools: [
      "Layout optimization",
      "Color scheme updates",
      "Typography improvements",
      "Responsive design checks"
    ]
  },
  {
    title: "Performance Optimization",
    icon: Zap,
    color: "from-pink-500 to-pink-600",
    tools: [
      "Image optimization",
      "Code minification",
      "Loading speed analysis",
      "Resource optimization"
    ]
  }
];

const aiTools = [
  {
    title: "Content Generation",
    icon: Wand2,
    color: "from-green-500 to-green-600",
    description: "Use AI to generate fresh content ideas and updates",
    examples: [
      "Blog post suggestions",
      "Social media content",
      "Newsletter updates",
      "Artist statements"
    ]
  },
  {
    title: "Design Assistance",
    icon: Sparkles,
    color: "from-yellow-500 to-yellow-600",
    description: "AI tools for design improvements and updates",
    examples: [
      "Layout suggestions",
      "Color palette generation",
      "Image enhancement",
      "Typography recommendations"
    ]
  },
  {
    title: "Automation",
    icon: Bot,
    color: "from-red-500 to-red-600",
    description: "Automate routine website maintenance tasks",
    examples: [
      "Content scheduling",
      "Performance monitoring",
      "Backup management",
      "Security checks"
    ]
  }
];

export default function AIRefreshPage() {
  const [activeTab, setActiveTab] = useState('strategies');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Header */}
          <motion.section variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Using AI to Refresh Your Website
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to leverage AI tools to keep your website fresh and engaging over time
            </p>
          </motion.section>

          {/* Tabs */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('strategies')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'strategies'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Refresh Strategies
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'tools'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              AI Tools
            </button>
          </motion.div>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            {activeTab === 'strategies' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {refreshStrategies.map((strategy) => (
                  <motion.div
                    key={strategy.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${strategy.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <strategy.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{strategy.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {strategy.tools.map((tool) => (
                        <div
                          key={tool}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {aiTools.map((tool) => (
                  <motion.div
                    key={tool.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${tool.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <tool.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{tool.title}</h3>
                    </div>
                    <p className="text-white/80 mb-4">{tool.description}</p>
                    <div className="space-y-2">
                      {tool.examples.map((example) => (
                        <div
                          key={example}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Schedule Section */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Maintenance Schedule
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Weekly Tasks</h3>
                      <p className="text-sm text-gray-600">
                        Content updates, social media integration, and performance checks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Monthly Tasks</h3>
                      <p className="text-sm text-gray-600">
                        Design refreshes, performance improvements, and security updates
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-green-100">
                      <RefreshCw className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Quarterly Tasks</h3>
                      <p className="text-sm text-gray-600">
                        Major content updates, design overhauls, and performance optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-yellow-100">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Annual Tasks</h3>
                      <p className="text-sm text-gray-600">
                        Complete website review, platform updates, and strategy planning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 