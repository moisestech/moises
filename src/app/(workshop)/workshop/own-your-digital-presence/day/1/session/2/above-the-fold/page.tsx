'use client';

import { motion } from 'framer-motion';
import { Eye, Layout, Image, Type, MousePointer, Smartphone } from 'lucide-react';

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

const principles = [
  {
    title: "Visual Hierarchy",
    description: "Guide visitors' attention to what matters most",
    icon: Eye,
    color: "from-blue-500 to-blue-600",
    tips: [
      "Use size and contrast to create focus",
      "Place important elements in prominent positions",
      "Create clear visual paths for the eye to follow"
    ]
  },
  {
    title: "Layout & Spacing",
    description: "Create balance and breathing room",
    icon: Layout,
    color: "from-purple-500 to-purple-600",
    tips: [
      "Use whitespace effectively",
      "Maintain consistent spacing",
      "Create clear content sections"
    ]
  },
  {
    title: "Imagery",
    description: "Make a powerful first impression",
    icon: Image,
    color: "from-pink-500 to-pink-600",
    tips: [
      "Use high-quality, relevant images",
      "Optimize images for fast loading",
      "Consider image placement and size"
    ]
  },
  {
    title: "Typography",
    description: "Communicate clearly and effectively",
    icon: Type,
    color: "from-indigo-500 to-indigo-600",
    tips: [
      "Choose readable fonts",
      "Establish clear text hierarchy",
      "Use appropriate font sizes"
    ]
  },
  {
    title: "Call to Action",
    description: "Guide visitors to take the next step",
    icon: MousePointer,
    color: "from-green-500 to-green-600",
    tips: [
      "Make actions clear and visible",
      "Use contrasting colors for buttons",
      "Keep text action-oriented"
    ]
  },
  {
    title: "Mobile Responsiveness",
    description: "Ensure great experience on all devices",
    icon: Smartphone,
    color: "from-yellow-500 to-yellow-600",
    tips: [
      "Test on different screen sizes",
      "Optimize touch targets",
      "Adjust layout for mobile"
    ]
  }
];

export default function AboveTheFoldPage() {
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
              Above-the-Fold Principles
            </h1>
            <p className="text-xl text-gray-600">
              Design principles for effective website layouts
            </p>
          </motion.section>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is Above-the-Fold?
              </h2>
              <p className="text-gray-600 mb-6">
                The "above-the-fold" area is what visitors see first when they land on your website, 
                before scrolling. This prime real estate should immediately communicate who you are 
                and what you do.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle) => (
                  <motion.div
                    key={principle.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${principle.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <principle.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{principle.title}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{principle.description}</p>
                    <ul className="space-y-2 text-white/80">
                      {principle.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <motion.div variants={fadeIn} className="bg-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Best Practices
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Keep the most important content visible without scrolling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Use clear, compelling headlines that communicate your value</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Include a strong call-to-action that guides visitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Ensure fast loading times for all above-the-fold content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Test your design on different devices and screen sizes</span>
                </li>
              </ul>
            </motion.div>

            {/* Next Steps */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Next Steps
              </h2>
              <p className="text-gray-600 mb-4">
                Apply these principles to your website:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Sketch your above-the-fold layout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Choose your key visual elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Write compelling headlines and copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Test your design with others</span>
                </li>
              </ul>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 