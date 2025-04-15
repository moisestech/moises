'use client';

import { motion } from 'framer-motion';
import { Users, Palette, BookOpen, Target } from 'lucide-react';

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

const pathways = [
  {
    title: "Full-Time Artists",
    description: "Focus on portfolio presentation, exhibition history, and professional documentation",
    icon: Palette,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Teaching Artists",
    description: "Balance between artistic practice and educational experience",
    icon: BookOpen,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Multi-Hyphenates",
    description: "Showcase diverse skills and interdisciplinary practice",
    icon: Target,
    color: "from-pink-500 to-pink-600"
  }
];

export default function ArtistPathwaysPage() {
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
              Artist Pathways Overview
            </h1>
            <p className="text-xl text-gray-600">
              Understanding different artist needs and website goals
            </p>
          </motion.section>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is your website for?
              </h2>
              <p className="text-gray-600 mb-6">
                Your website should reflect your unique artistic journey and professional goals. 
                Consider what you want visitors to understand about your practice and what actions 
                you want them to take.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {pathways.map((pathway) => (
                  <motion.div
                    key={pathway.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${pathway.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <pathway.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{pathway.title}</h3>
                    </div>
                    <p className="text-white/90">{pathway.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reflection Questions */}
            <motion.div variants={fadeIn} className="bg-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reflection Questions
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>What's missing in your current digital footprint?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>What do you want visitors to feel or do on your site?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>What's the first artwork visitors should see?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>How can your website support your professional goals?</span>
                </li>
              </ul>
            </motion.div>

            {/* Next Steps */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Next Steps
              </h2>
              <p className="text-gray-600 mb-4">
                Use these reflections to create your personal site roadmap. Consider:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Your target audience (curators, collectors, collaborators)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Key content sections needed for your practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>How to present your work most effectively</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Ways to make your site easy to maintain and update</span>
                </li>
              </ul>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 