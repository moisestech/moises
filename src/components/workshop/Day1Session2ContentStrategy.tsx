'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  FileText, 
  BarChart2, 
  RefreshCw, 
  Shield, 
  Settings, 
  Activity,
  Image,
  Video,
  Music,
  Users,
  BookOpen,
  MessageSquare,
  Link2,
  Share2,
  Grid,
  List,
  GalleryHorizontal,
  Newspaper,
  Globe
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

const cardHover = {
  scale: 1.02,
  transition: { 
    duration: 0.2,
    ease: "easeOut"
  }
};

const hoverCardStyle = "hover:shadow-2xl hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-200"

const contentPlanningTips = [
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Plan your content in advance with a structured calendar",
    details: [
      "Schedule posts and updates",
      "Balance different types of content",
      "Plan for special events and announcements"
    ]
  },
  {
    icon: Clock,
    title: "Regular Updates",
    description: "Maintain a consistent posting schedule",
    details: [
      "Set realistic update frequencies",
      "Create a content backlog",
      "Automate where possible"
    ]
  },
  {
    icon: FileText,
    title: "Content Types",
    description: "Diversify your content to engage different audiences",
    details: [
      "Blog posts and articles",
      "Project updates",
      "Behind-the-scenes content"
    ]
  },
  {
    icon: BarChart2,
    title: "Analytics Review",
    description: "Regularly analyze your content performance",
    details: [
      "Track engagement metrics",
      "Identify successful content types",
      "Adjust strategy based on data"
    ]
  }
];

const maintenanceTips = [
  {
    icon: RefreshCw,
    title: "Regular Backups",
    description: "Ensure your content is always safe",
    details: [
      "Automated backup systems",
      "Multiple backup locations",
      "Regular backup testing"
    ]
  },
  {
    icon: Shield,
    title: "Security Updates",
    description: "Keep your website secure and up-to-date",
    details: [
      "Regular security audits",
      "Plugin and theme updates",
      "SSL certificate maintenance"
    ]
  },
  {
    icon: Settings,
    title: "Performance Monitoring",
    description: "Ensure optimal website performance",
    details: [
      "Page load speed checks",
      "Mobile responsiveness testing",
      "Broken link monitoring"
    ]
  },
  {
    icon: Activity,
    title: "Content Audit",
    description: "Regularly review and update existing content",
    details: [
      "Update outdated information",
      "Improve SEO optimization",
      "Enhance user experience"
    ]
  }
];

const instagramBestPractices = [
  {
    icon: Image,
    title: "Visual Content",
    description: "Create high-quality visual content",
    details: [
      "Use consistent filters and style",
      "Maintain proper image dimensions",
      "Include alt text for accessibility"
    ]
  },
  {
    icon: Video,
    title: "Video Content",
    description: "Engage with video content",
    details: [
      "Short-form videos (Reels)",
      "Behind-the-scenes content",
      "Process videos"
    ]
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Build and maintain your community",
    details: [
      "Respond to comments",
      "Engage with followers' content",
      "Use relevant hashtags"
    ]
  },
  {
    icon: MessageSquare,
    title: "Story Features",
    description: "Utilize Instagram Stories effectively",
    details: [
      "Regular story updates",
      "Interactive elements",
      "Highlights organization"
    ]
  }
];

export default function Day1Session2ContentStrategy() {
  const [activeSection, setActiveSection] = useState<'planning' | 'maintenance' | 'instagram'>('planning');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Content Strategy
          </h1>
          <p className="text-gray-600">
            Learn how to plan, create, and maintain effective content for your website
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveSection('planning')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === 'planning'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Content Planning
            </div>
          </button>
          <button
            onClick={() => setActiveSection('maintenance')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === 'maintenance'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Website Maintenance
            </div>
          </button>
          <button
            onClick={() => setActiveSection('instagram')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeSection === 'instagram'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5" />
              Instagram Best Practices
            </div>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          {activeSection === 'planning' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Content Planning
              </h2>
              <p className="text-gray-600 mb-6">
                Develop a strategic approach to creating and managing your website content
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {contentPlanningTips.map((tip) => (
                  <motion.div
                    key={tip.title}
                    whileHover={cardHover}
                    className={`p-6 rounded-lg bg-gray-50 ${hoverCardStyle}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-blue-500">
                        <tip.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{tip.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'maintenance' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Website Maintenance
              </h2>
              <p className="text-gray-600 mb-6">
                Keep your website running smoothly and securely
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {maintenanceTips.map((tip) => (
                  <motion.div
                    key={tip.title}
                    whileHover={cardHover}
                    className={`p-6 rounded-lg bg-gray-50 ${hoverCardStyle}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-blue-500">
                        <tip.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{tip.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'instagram' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Instagram Best Practices
              </h2>
              <p className="text-gray-600 mb-6">
                Optimize your Instagram presence for maximum engagement
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {instagramBestPractices.map((tip) => (
                  <motion.div
                    key={tip.title}
                    whileHover={cardHover}
                    className={`p-6 rounded-lg bg-gray-50 ${hoverCardStyle}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-blue-500">
                        <tip.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{tip.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 
 
 