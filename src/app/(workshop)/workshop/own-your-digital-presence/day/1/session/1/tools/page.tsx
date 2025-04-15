'use client';

import { motion } from 'framer-motion';
import { Link2, Calendar, Share2, ClipboardList, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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

const tools = [
  {
    title: "Link Management",
    description: "Tools to organize and manage your online presence",
    icon: Link2,
    items: [
      {
        name: "Linktree",
        description: "Create a single link for all your social media profiles",
        url: "https://linktr.ee",
        color: "from-green-500 to-green-600"
      },
      {
        name: "Carrd",
        description: "Simple one-page websites for your links",
        url: "https://carrd.co",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Bio.fm",
        description: "Create a beautiful bio link page",
        url: "https://bio.fm",
        color: "from-purple-500 to-purple-600"
      }
    ]
  },
  {
    title: "Calendar & Scheduling",
    description: "Tools to manage your appointments and events",
    icon: Calendar,
    items: [
      {
        name: "Calendly",
        description: "Schedule meetings without the back-and-forth emails",
        url: "https://calendly.com",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Acuity Scheduling",
        description: "Professional scheduling for artists and creatives",
        url: "https://acuityscheduling.com",
        color: "from-indigo-500 to-indigo-600"
      }
    ]
  },
  {
    title: "Social Media Management",
    description: "Tools to manage and schedule your social media content",
    icon: Share2,
    items: [
      {
        name: "Buffer",
        description: "Schedule and manage social media posts",
        url: "https://buffer.com",
        color: "from-gray-500 to-gray-600"
      },
      {
        name: "Hootsuite",
        description: "All-in-one social media management",
        url: "https://hootsuite.com",
        color: "from-orange-500 to-orange-600"
      }
    ]
  },
  {
    title: "Content Organization",
    description: "Tools to organize your content and assets",
    icon: ClipboardList,
    items: [
      {
        name: "Notion",
        description: "All-in-one workspace for notes, tasks, and wikis",
        url: "https://notion.so",
        color: "from-gray-500 to-gray-600"
      },
      {
        name: "Trello",
        description: "Visual project management",
        url: "https://trello.com",
        color: "from-blue-500 to-blue-600"
      }
    ]
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Header */}
          <motion.section variants={fadeIn} className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Link Tools & Calendars
            </h1>
            <p className="text-xl text-gray-600">
              Essential tools to manage your online presence and schedule
            </p>
          </motion.section>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <motion.div
                key={tool.title}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{tool.title}</h2>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {tool.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        className={`p-4 rounded-lg bg-gradient-to-r ${item.color} text-white`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-white/80 text-sm">{item.description}</p>
                          </div>
                          <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 