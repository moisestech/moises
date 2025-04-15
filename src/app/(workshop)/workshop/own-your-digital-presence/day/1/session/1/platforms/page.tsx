'use client';

import { motion } from 'framer-motion';
import { FaSquarespace, FaWix, FaGithub } from 'react-icons/fa';
import { Layout } from 'lucide-react';
import { PlatformBadge } from '@/components/workshop/PlatformBadge';

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
    name: 'Squarespace',
    icon: FaSquarespace,
    description: 'Professional website builder with beautiful templates and e-commerce features.',
    pros: [
      'Beautiful, professional templates',
      'Built-in e-commerce',
      'Excellent customer support',
      'Mobile-responsive designs'
    ],
    cons: [
      'Higher pricing',
      'Limited customization',
      'Monthly subscription required'
    ],
    pricing: '$16-49/month',
    bestFor: 'Artists who want a professional, polished website with minimal technical knowledge'
  },
  {
    name: 'Wix',
    icon: FaWix,
    description: 'User-friendly website builder with drag-and-drop functionality.',
    pros: [
      'Easy to use',
      'Flexible design options',
      'Large template library',
      'Free plan available'
    ],
    cons: [
      'Can be slow to load',
      'Limited analytics options',
      'Template switching not allowed'
    ],
    pricing: '$16-45/month',
    bestFor: 'Artists who want creative freedom and ease of use'
  },
  {
    name: 'GitHub Pages',
    icon: FaGithub,
    description: 'Free hosting for static websites with version control.',
    pros: [
      'Completely free',
      'Full control over code',
      'Version control built-in',
      'Great for learning'
    ],
    cons: [
      'Requires coding knowledge',
      'Static sites only',
      'Steeper learning curve'
    ],
    pricing: 'Free',
    bestFor: 'Artists who want to learn web development and have full control'
  },
  {
    name: 'Webflow',
    icon: Layout,
    description: 'Professional design tool with visual development capabilities.',
    pros: [
      'Visual development',
      'Professional-grade design',
      'Custom animations',
      'CMS capabilities'
    ],
    cons: [
      'Higher learning curve',
      'More expensive',
      'Requires design knowledge'
    ],
    pricing: '$14-39/month',
    bestFor: 'Artists who want professional design capabilities without coding'
  }
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          <motion.section variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the platform that best fits your needs and technical comfort level.
            </p>
          </motion.section>

          {/* Desktop View */}
          <motion.div variants={fadeIn} className="hidden md:block">
            <div className="grid grid-cols-1 gap-8">
              {platforms.map((platform) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <platform.icon className="h-12 w-12 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{platform.description}</p>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Pros</h4>
                          <ul className="space-y-2">
                            {platform.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span className="text-gray-600">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cons</h4>
                          <ul className="space-y-2">
                            {platform.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span className="text-gray-600">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <PlatformBadge platform="pricing">
                          {platform.pricing}
                        </PlatformBadge>
                        <PlatformBadge platform="bestFor">
                          {platform.bestFor}
                        </PlatformBadge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tablet/Mobile View */}
          <motion.div variants={fadeIn} className="md:hidden">
            <div className="space-y-6">
              {platforms.map((platform) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <platform.icon className="h-10 w-10 text-gray-900" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-500">{platform.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pros</h4>
                      <ul className="space-y-2">
                        {platform.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-600">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cons</h4>
                      <ul className="space-y-2">
                        {platform.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span className="text-gray-600">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <PlatformBadge platform="bestFor">
                      {platform.bestFor}
                    </PlatformBadge>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 