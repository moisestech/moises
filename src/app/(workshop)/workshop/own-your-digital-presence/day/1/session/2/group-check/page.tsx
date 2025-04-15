'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Users, MessageSquare, CheckCircle, FileText, Share2, ThumbsUp, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
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

const exampleTypes = [
  {
    title: "Portfolio Examples",
    icon: ImageIcon,
    color: "from-blue-500 to-blue-600",
    examples: [
      "Project galleries",
      "Image optimization",
      "Video integration",
      "Mobile responsiveness"
    ]
  },
  {
    title: "Content Structure",
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    examples: [
      "Artist statements",
      "Biography pages",
      "CV formatting",
      "Contact sections"
    ]
  },
  {
    title: "Navigation & UX",
    icon: Share2,
    color: "from-pink-500 to-pink-600",
    examples: [
      "Menu layouts",
      "Mobile navigation",
      "Footer design",
      "Call-to-action buttons"
    ]
  }
];

export default function GroupCheckPage() {
  const [activeTab, setActiveTab] = useState('examples');
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (exampleId: string) => {
    setLikes(prev => ({
      ...prev,
      [exampleId]: (prev[exampleId] || 0) + 1
    }));
  };

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
              Group Check-In
            </h1>
            <p className="text-xl text-gray-600">
              Share your progress and get inspired by others
            </p>
          </motion.section>

          {/* Tabs */}
          <motion.div variants={fadeIn} className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('examples')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'examples'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Examples
            </button>
            <button
              onClick={() => setActiveTab('share')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'share'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Share Progress
            </button>
          </motion.div>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            {activeTab === 'examples' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {exampleTypes.map((type) => (
                  <motion.div
                    key={type.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${type.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <type.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{type.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {type.examples.map((example) => (
                        <div
                          key={example}
                          className="flex items-center justify-between p-3 bg-white/10 rounded-lg"
                        >
                          <span className="text-white/90">{example}</span>
                          <button
                            onClick={() => handleLike(example)}
                            className="flex items-center gap-2 text-white/80 hover:text-white"
                          >
                            <ThumbsUp className="w-4 h-4" />
                            <span>{likes[example] || 0}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Share Your Progress
                </h2>
                <p className="text-gray-600 mb-6">
                  Upload screenshots or share links to your work-in-progress website
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <MessageSquare className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <textarea
                        className="w-full p-2 rounded border border-gray-200 focus:border-indigo-500 focus:outline-none"
                        placeholder="Share your progress or ask for feedback..."
                        rows={3}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="p-3 rounded-lg bg-indigo-100">
                      <MessageSquare className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full p-2 rounded border border-gray-200 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Share Update
                  </button>
                </div>
              </div>
            )}

            {/* Discussion Section */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Discussion & Feedback
              </h2>
              <p className="text-gray-600 mb-6">
                Share your thoughts and get feedback from the group
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="p-3 rounded-lg bg-indigo-100">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <textarea
                      className="w-full p-2 rounded border border-gray-200 focus:border-indigo-500 focus:outline-none"
                      placeholder="Join the discussion..."
                      rows={3}
                    />
                  </div>
                </div>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Post Comment
                </button>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 