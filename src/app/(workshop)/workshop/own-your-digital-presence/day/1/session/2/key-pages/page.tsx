'use client';

import { motion } from 'framer-motion';
import { Image, FileText, Images, User, Mail, Calendar, BookOpen } from 'lucide-react';

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

const keyPages = [
  {
    title: "Homepage",
    description: "Your digital front door - make a strong first impression",
    icon: Image,
    color: "from-blue-500 to-blue-600",
    tips: [
      "Showcase your best work immediately",
      "Keep navigation simple and clear",
      "Include a brief artist statement"
    ]
  },
  {
    title: "Portfolio",
    description: "Organize your work to tell your artistic story",
    icon: Images,
    color: "from-purple-500 to-purple-600",
    tips: [
      "Group works by series or theme",
      "Include high-quality images",
      "Add context for each piece"
    ]
  },
  {
    title: "About",
    description: "Share your artistic journey and practice",
    icon: User,
    color: "from-pink-500 to-pink-600",
    tips: [
      "Write a compelling artist statement",
      "Include your CV or resume",
      "Share your artistic influences"
    ]
  },
  {
    title: "Contact",
    description: "Make it easy for people to reach you",
    icon: Mail,
    color: "from-indigo-500 to-indigo-600",
    tips: [
      "Include multiple contact methods",
      "Add a contact form",
      "List your social media links"
    ]
  },
  {
    title: "Events",
    description: "Keep your audience updated on shows and exhibitions",
    icon: Calendar,
    color: "from-green-500 to-green-600",
    tips: [
      "List upcoming exhibitions",
      "Include past shows",
      "Add press coverage"
    ]
  },
  {
    title: "Resources",
    description: "Share additional content and documentation",
    icon: BookOpen,
    color: "from-yellow-500 to-yellow-600",
    tips: [
      "Include press releases",
      "Add exhibition catalogs",
      "Share artist talks or interviews"
    ]
  }
];

export default function KeyPagesPage() {
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
              Choosing Your Key Pages
            </h1>
            <p className="text-xl text-gray-600">
              Essential pages for your artist website
            </p>
          </motion.section>

          {/* Main Content */}
          <motion.section variants={fadeIn} className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Essential Pages for Artists
              </h2>
              <p className="text-gray-600 mb-6">
                Your website should include these key pages to effectively showcase your work and connect with your audience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {keyPages.map((page) => (
                  <motion.div
                    key={page.title}
                    whileHover={{ y: -5 }}
                    className={`bg-gradient-to-r ${page.color} rounded-xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white/20">
                        <page.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{page.title}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{page.description}</p>
                    <ul className="space-y-2 text-white/80">
                      {page.tips.map((tip, index) => (
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

            {/* Content Strategy */}
            <motion.div variants={fadeIn} className="bg-indigo-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Content Strategy Tips
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Start with your strongest work and most important information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Keep text concise and impactful</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Use high-quality images that load quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Make navigation intuitive and consistent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>Update content regularly to keep your site fresh</span>
                </li>
              </ul>
            </motion.div>

            {/* Next Steps */}
            <motion.div variants={fadeIn} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Next Steps
              </h2>
              <p className="text-gray-600 mb-4">
                Use this framework to plan your website structure:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>List the pages you need based on your practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Gather content for each page (images, text, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Create a content hierarchy for each page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Plan how pages will link to each other</span>
                </li>
              </ul>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 