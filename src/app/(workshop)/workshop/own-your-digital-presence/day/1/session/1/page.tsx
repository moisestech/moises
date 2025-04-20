'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Image,
  FileText,
  Layout,
  ClipboardList,
  CheckSquare,
  Globe,
  Code,
  Monitor,
  PenTool,
  UserPlus,
  Home,
  Layers,
  Users,
  Laptop,
  Settings,
  RefreshCw,
  Calendar,
  MessageSquare,
  Smartphone,
  Archive,
  Stars,
  Link2,
  FileCheck,
  Search
} from 'lucide-react';
import { FaSquarespace, FaWix, FaGithub } from 'react-icons/fa';
import { SiWebflow } from "react-icons/si";

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

const sections = [
  {
    title: "Introduction & Overview",
    color: "from-blue-500 to-blue-600",
    items: [
      {
        title: "Welcome + Workshop Overview",
        href: "/workshop/own-your-digital-presence/day/1/session/1/welcome",
        icon: BookOpen
      },
      {
        title: "Participants",
        href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/participants",
        icon: Users
      },
      {
        title: "Digital Presence",
        href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence",
        icon: Globe
      },
      {
        title: "Analysis",
        href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/analysis",
        icon: Search
      },
      {
        title: "Sustainability",
        href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability",
        icon: RefreshCw
      },
      {
        title: "Vocabulary Basics",
        href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary",
        icon: FileText
      }
    ]
  },
  {
    title: "Web Fundamentals",
    color: "from-purple-500 to-purple-600",
    items: [
      {
        title: "What Makes a Good Homepage?",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/homepage",
        icon: Globe
      },
      {
        title: "Hosting Media Strategically",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/media",
        icon: Image
      },
      {
        title: "Mobile Navigation Demos",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/mobile",
        icon: Smartphone
      },
      {
        title: "The Living Archive Approach",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/archive",
        icon: Archive
      },
      {
        title: "Organizing Content Types",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/content",
        icon: Layers
      },
      {
        title: "Above-the-Fold Principles",
        href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/above-the-fold",
        icon: FileText
      }
    ]
  },
  {
    title: "Platform Selection",
    color: "from-green-500 to-green-600",
    items: [
      {
        title: "Squarespace Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/squarespace",
        icon: FileText
      },
      {
        title: "GitHub Pages Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/github",
        icon: FileText
      },
      {
        title: "Wix Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/wix",
        icon: FileText
      },
      {
        title: "Webflow Guide",
        href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/webflow",
        icon: FileText
      }
    ]
  },
  {
    title: "AI & Tools",
    color: "from-pink-500 to-pink-600",
    items: [
      {
        title: "Using AI to Mock Up Layouts",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-tools/layout",
        icon: Stars
      },
      {
        title: "Using AI for Art Assets",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-tools/assets",
        icon: Image
      },
      {
        title: "Smart Bios + CVs with AI",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-tools/content",
        icon: FileText
      },
      {
        title: "Link Tools + Calendars",
        href: "/workshop/own-your-digital-presence/day/1/session/2/tools",
        icon: Link2
      }
    ]
  },
  {
    title: "Resources",
    color: "from-indigo-500 to-indigo-600",
    items: [
      {
        title: "Worksheet",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/worksheet",
        icon: ClipboardList
      },
      {
        title: "Checklist",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/checklist",
        icon: FileCheck
      },
      {
        title: "Templates",
        href: "/workshop/own-your-digital-presence/day/1/session/1/resources/templates",
        icon: FileText
      }
    ]
  }
];

const platforms = [
  {
    title: "Squarespace",
    icon: FaSquarespace,
    description: "Professional templates with built-in e-commerce and analytics",
    color: "from-gray-600 to-gray-800",
    href: "/workshop/own-your-digital-presence/day/1/session/1/squarespace"
  },
  {
    title: "GitHub Pages",
    icon: FaGithub,
    description: "Free hosting for static websites with version control",
    color: "from-gray-800 to-gray-900",
    href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/github"
  },
  {
    title: "Wix",
    icon: FaWix,
    description: "Drag-and-drop website builder with extensive customization",
    color: "from-yellow-500 to-yellow-600",
    href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/wix"
  },
  {
    title: "Webflow",
    icon: SiWebflow,
    description: "Design-focused platform with advanced customization",
    color: "from-blue-500 to-blue-600",
    href: "/workshop/own-your-digital-presence/day/1/session/1/platforms/webflow"
  }
];

const foundations = [
  {
    title: "Introduction",
    description: "Learn about the importance of digital presence and how to get started",
    icon: BookOpen,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction"
  },
  {
    title: "Digital Presence",
    description: "Understand the key elements of a strong digital presence",
    icon: Globe,
    href: "/workshop/own-your-digital-presence/day/1/session/1/introduction/digital-presence"
  },
  {
    title: "Homepage",
    description: "Learn how to create an effective homepage for your website",
    icon: Home,
    href: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/homepage"
  }
];

const artistExamples = {
  title: "Artist Website Examples",
  description: "Explore real-world examples of successful artist websites across different disciplines",
  icon: BookOpen,
  href: "/workshop/own-your-digital-presence/day/1/session/1/artist-websites"
};

const finalSteps = [
  {
    title: "Final Assignment",
    description: "Submit your completed website for review",
    icon: FileText,
    href: "/workshop/own-your-digital-presence/day/1/session/1/final-assignment"
  },
  {
    title: "Q&A Session",
    description: "Get your questions answered and preview next steps",
    icon: MessageSquare,
    href: "/workshop/own-your-digital-presence/day/1/session/1/qa"
  }
];

export default function Session1Page() {
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
              Session 1: Understanding Websites & Digital Presence
            </h1>
            <p className="text-xl text-gray-600">
              Learn the fundamentals of digital presence and how websites serve as your online home base.
            </p>
          </motion.section>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={fadeIn}
                className={`bg-gradient-to-r ${section.color} rounded-xl p-6 text-white`}
              >
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group block"
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-white/20">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </motion.div>
                    </Link>
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