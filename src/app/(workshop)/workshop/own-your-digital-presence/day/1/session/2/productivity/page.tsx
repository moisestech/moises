'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Zap, 
  BookOpen,
  FileText,
  Image,
  Link2,
  Settings,
  Timer,
  CheckCircle
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

const productivityTools = [
  {
    title: "Content Management",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    description: "Tools and strategies for organizing and updating your website content",
    features: [
      "Content calendar planning",
      "Batch content creation",
      "Version control for updates",
      "Content templates"
    ]
  },
  {
    title: "Media Organization",
    icon: Image,
    color: "from-purple-500 to-purple-600",
    description: "Efficient ways to manage and update your visual content",
    features: [
      "Digital asset management",
      "Image optimization workflows",
      "Gallery organization",
      "Media backup systems"
    ]
  },
  {
    title: "Link Management",
    icon: Link2,
    color: "from-pink-500 to-pink-600",
    description: "Tools for maintaining and updating your website links",
    features: [
      "Link tracking and monitoring",
      "Social media integration",
      "External resource management",
      "Link health checks"
    ]
  }
];

const automationTools = [
  {
    title: "Scheduling",
    icon: Calendar,
    color: "from-green-500 to-green-600",
    description: "Automate your content updates and maintenance tasks",
    features: [
      "Content scheduling tools",
      "Maintenance reminders",
      "Update notifications",
      "Task automation"
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    description: "Tools to monitor and optimize your website performance",
    features: [
      "Performance monitoring",
      "Automated backups",
      "Security checks",
      "Uptime monitoring"
    ]
  },
  {
    title: "Integration",
    icon: Settings,
    color: "from-red-500 to-red-600",
    description: "Connect your website with other tools and platforms",
    features: [
      "Social media integration",
      "Email marketing tools",
      "Analytics platforms",
      "CRM systems"
    ]
  }
];

export default function ProductivityPage() {
  const [activeTab, setActiveTab] = useState('tools');

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
              Productivity Systems for Artists
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to efficiently maintain and update your website with smart tools and workflows
            </p>
          </motion.section>

          {/* Tabs */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'tools'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Productivity Tools
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'automation'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Automation Tools
            </button>
          </motion.div>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            {activeTab === 'tools' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {productivityTools.map((tool) => (
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
                      {tool.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {automationTools.map((tool) => (
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
                      {tool.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Workflow Section */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Recommended Workflow
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <Timer className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Daily Tasks</h3>
                    <p className="text-sm text-gray-600">
                      Quick content updates, social media integration, and performance checks
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="p-3 rounded-lg bg-purple-100">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Weekly Planning</h3>
                    <p className="text-sm text-gray-600">
                      Content calendar updates, media organization, and link management
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="p-3 rounded-lg bg-green-100">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Monthly Review</h3>
                    <p className="text-sm text-gray-600">
                      Performance analysis, content strategy updates, and automation optimization
                    </p>
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