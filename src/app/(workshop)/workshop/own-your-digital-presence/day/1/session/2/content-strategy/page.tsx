"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Clock, BarChart, Settings, RefreshCw, Video, Users, TrendingUp, ExternalLink, Check, DollarSign, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const contentPlanningTips = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Calendar",
    description: "Plan your content in advance using a calendar to maintain consistency and ensure a good mix of content types."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Regular Updates",
    description: "Set a realistic posting schedule that you can maintain consistently, whether it's daily, weekly, or monthly."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time Management",
    description: "Allocate specific time blocks for content creation, editing, and publishing to maintain workflow efficiency."
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analytics Review",
    description: "Regularly review your content performance to understand what resonates with your audience and adjust accordingly."
  }
]

const frequentlyUpdatedPages = [
  {
    title: "Homepage Hero",
    description: "Your main landing page that needs regular updates to showcase current events, exhibitions, or featured content.",
    platforms: {
      squarespace: "Use the built-in banner editor with image optimization tools",
      wix: "Utilize the Wix Editor's drag-and-drop interface for quick updates",
      github: "Update the hero section in your main HTML/CSS files"
    }
  },
  {
    title: "Events Calendar",
    description: "A dynamic page that requires frequent updates for upcoming events, workshops, and exhibitions.",
    platforms: {
      squarespace: "Use the Events Block with automatic calendar integration",
      wix: "Implement the Wix Events app for easy management",
      github: "Create a JSON-based event system with automatic date sorting"
    }
  },
  {
    title: "Artwork Gallery",
    description: "Your portfolio or gallery section that needs regular updates with new artwork and exhibitions.",
    platforms: {
      squarespace: "Use the Gallery Block with built-in image optimization",
      wix: "Utilize the Wix Pro Gallery for high-quality image display",
      github: "Implement an image optimization pipeline with next/image"
    }
  },
  {
    title: "News/Blog",
    description: "Regular updates about your work, exhibitions, and community engagement.",
    platforms: {
      squarespace: "Use the Blog Block with built-in SEO tools",
      wix: "Implement the Wix Blog with social sharing features",
      github: "Create a markdown-based blog system with automatic builds"
    }
  }
]

const maintenanceTips = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Regular Backups",
    description: "Implement automated backup systems to protect your content and ensure quick recovery in case of issues."
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Content Updates",
    description: "Regularly review and update existing content to keep it relevant and maintain its value to your audience."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Audit",
    description: "Periodically audit your content to identify gaps, outdated information, and opportunities for improvement."
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Performance Monitoring",
    description: "Track key metrics to understand how your content performs and make data-driven decisions for improvement."
  }
]

const instagramSections = [
  {
    title: "GROW WITH REELS",
    description: "There's no right way on Reels. Explore, experiment, collaborate and create on repeat.",
    icon: <Video className="w-8 h-8" />,
    tips: [
      "Focus on driving authentic engagement with your community",
      "Upload the highest resolution possible for better engagement",
      "Use trending audio to increase reach",
      "Engage with comments within the first 7 days",
      "Study your insights to understand your audience"
    ]
  },
  {
    title: "EXPAND YOUR REACH",
    description: "Genuine connections to amplify reach on Instagram.",
    icon: <Users className="w-8 h-8" />,
    tips: [
      "Avoid non-recommendable content and clickbait",
      "Remove watermarks from your reels",
      "Share original content only",
      "Keep reels under 3 minutes for better reach",
      "Use relevant hashtags strategically"
    ]
  },
  {
    title: "CONTENT GUIDELINES",
    description: "Uncover the secrets to detect and amplify trends on Instagram",
    icon: <TrendingUp className="w-8 h-8" />,
    tips: [
      "Follow Instagram's Recommendation Guidelines",
      "Use trending audio and hashtags",
      "Create content that resonates with your audience",
      "Maintain consistent posting schedule",
      "Engage with your community regularly"
    ]
  }
]

export default function ContentStrategy() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Content Strategy & Maintenance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to plan, create, and maintain your digital content effectively
            to engage your audience and achieve your goals.
          </p>
        </motion.div>

        {/* Content Planning Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Content Planning
            </h2>
            <p className="text-gray-600 mb-8">
              A well-structured content plan helps you maintain consistency, engage
              your audience, and achieve your digital presence goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contentPlanningTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-gray-50"
                >
                  <div className="text-blue-500">{tip.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Frequently Updated Pages Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Updated Pages
            </h2>
            <p className="text-gray-600 mb-8">
              Consider which pages you'll update most often and how to make them easier to maintain.
              Here are some common pages that typically need regular updates:
            </p>

            <div className="grid grid-cols-1 gap-6">
              {frequentlyUpdatedPages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{page.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Squarespace</h4>
                      <p className="text-sm text-gray-600">{page.platforms.squarespace}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Wix</h4>
                      <p className="text-sm text-gray-600">{page.platforms.wix}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">GitHub</h4>
                      <p className="text-sm text-gray-600">{page.platforms.github}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Website Maintenance Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Website Maintenance
            </h2>
            <p className="text-gray-600 mb-8">
              Regular maintenance ensures your website remains secure, performs
              well, and continues to meet your audience's needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {maintenanceTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-gray-50"
                >
                  <div className="text-purple-500">{tip.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Instagram Best Practices Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/instagram-logo.png"
                    alt="Instagram Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Instagram Best Practices
                  </h2>
                  <p className="text-lg opacity-90">
                    Personalized guidance to help you grow as a creator
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => window.open('https://creators.instagram.com/how-to-grow', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              {instagramSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === index
                      ? 'bg-white text-purple-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {section.icon}
                  <span className="font-medium">{section.title}</span>
                </button>
              ))}
            </div>

            {/* Active Section Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-white">{instagramSections[activeSection].icon}</div>
                <h3 className="text-xl font-bold">{instagramSections[activeSection].title}</h3>
              </div>
              <p className="text-white/80 mb-6">{instagramSections[activeSection].description}</p>
              <ul className="space-y-3">
                {instagramSections[activeSection].tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0 text-white/90" />
                    <span className="text-white/90">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Express Yourself</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['Edits', 'Reels', 'Live', 'Stories', 'Profile', 'Broadcast Channels'].map((item) => (
                    <div key={item} className="text-center p-3 bg-white/5 rounded-lg">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Build Your Community</h3>
                <ul className="space-y-2">
                  {['Reach Your Target Audience', 'Using Insights'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                <ul className="space-y-2">
                  {['Best Practices', 'Blog', 'FAQs', 'Meta for Business', 'About Instagram'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 