'use client';

import { motion } from 'framer-motion';
import { 
  Eye, 
  Headphones, 
  MousePointer, 
  Shield, 
  RefreshCw, 
  Settings, 
  AlertCircle,
  CheckCircle,
  Info
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

const accessibilityGuidelines = [
  {
    title: "Visual Accessibility",
    icon: Eye,
    color: "from-blue-500 to-blue-600",
    tips: [
      "Use sufficient color contrast (4.5:1 for text)",
      "Provide text alternatives for images",
      "Ensure text is resizable without breaking layout",
      "Use clear and readable fonts"
    ]
  },
  {
    title: "Navigation",
    icon: MousePointer,
    color: "from-purple-500 to-purple-600",
    tips: [
      "Keyboard-friendly navigation",
      "Clear and consistent menus",
      "Skip links for screen readers",
      "Logical tab order"
    ]
  },
  {
    title: "Content Structure",
    icon: Headphones,
    color: "from-pink-500 to-pink-600",
    tips: [
      "Proper heading hierarchy",
      "Descriptive link text",
      "Transcripts for audio/video",
      "Alt text for all images"
    ]
  }
];

const maintenanceTips = [
  {
    title: "Regular Updates",
    icon: RefreshCw,
    color: "from-green-500 to-green-600",
    tips: [
      "Update content regularly",
      "Check for broken links",
      "Review and update metadata",
      "Test on different devices"
    ]
  },
  {
    title: "Security",
    icon: Shield,
    color: "from-yellow-500 to-yellow-600",
    tips: [
      "Keep software updated",
      "Use HTTPS",
      "Regular backups",
      "Monitor for vulnerabilities"
    ]
  },
  {
    title: "Performance",
    icon: Settings,
    color: "from-red-500 to-red-600",
    tips: [
      "Optimize images",
      "Minimize code",
      "Use caching",
      "Monitor loading times"
    ]
  }
];

export default function AccessibilityPage() {
  const [activeTab, setActiveTab] = useState('accessibility');

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
              Accessibility & Maintenance
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to make your website accessible to all users and maintain it effectively
            </p>
          </motion.section>

          {/* Tabs */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('accessibility')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'accessibility'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Accessibility
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'maintenance'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Maintenance
            </button>
          </motion.div>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            {activeTab === 'accessibility' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {accessibilityGuidelines.map((guideline) => (
                  <motion.div
                    key={guideline.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${guideline.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <guideline.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{guideline.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {guideline.tips.map((tip) => (
                        <div
                          key={tip}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {maintenanceTips.map((tip) => (
                  <motion.div
                    key={tip.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${tip.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <tip.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{tip.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {tip.tips.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/50" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Best Practices Section */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Best Practices
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-green-100">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Do's</h3>
                      <p className="text-sm text-gray-600">
                        Use semantic HTML, provide alt text, ensure keyboard navigation, and maintain consistent layouts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-red-100">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Don'ts</h3>
                      <p className="text-sm text-gray-600">
                        Rely on color alone, use small text, ignore mobile users, or neglect regular updates
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <Info className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Tools & Resources</h3>
                      <p className="text-sm text-gray-600">
                        Use accessibility checkers, performance monitors, and automated testing tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-yellow-100">
                      <Settings className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Regular Checks</h3>
                      <p className="text-sm text-gray-600">
                        Schedule monthly reviews, test with different devices, and monitor user feedback
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