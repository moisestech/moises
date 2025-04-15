'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen,
  Globe,
  FileText,
  Smartphone,
  Archive,
  Layers,
  Stars,
  Image,
  Link2,
  ClipboardList,
  FileCheck,
  Upload,
  MessageSquare,
  Settings,
  RefreshCw,
  Calendar
} from 'lucide-react';
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

const sections = [
  {
    title: "Content Strategy",
    color: "from-blue-500 to-blue-600",
    items: [
      {
        title: "Artist Pathways Overview",
        href: "/workshop/own-your-digital-presence/day/1/session/2/artist-pathways",
        icon: BookOpen
      },
      {
        title: "Choosing Your Key Pages",
        href: "/workshop/own-your-digital-presence/day/1/session/2/key-pages",
        icon: FileText
      },
      {
        title: "Above-the-Fold Principles",
        href: "/workshop/own-your-digital-presence/day/1/session/2/above-the-fold",
        icon: Layers
      },
      {
        title: "Worksheet Setup",
        href: "/workshop/own-your-digital-presence/day/1/session/2/worksheet",
        icon: ClipboardList
      },
      {
        title: "Group Check-In / Examples",
        href: "/workshop/own-your-digital-presence/day/1/session/2/group-check",
        icon: MessageSquare
      }
    ]
  },
  {
    title: "Technical Implementation",
    color: "from-purple-500 to-purple-600",
    items: [
      {
        title: "Hosting & Asset Management",
        href: "/workshop/own-your-digital-presence/day/1/session/2/hosting-assets",
        icon: Image
      },
      {
        title: "Accessibility + Maintenance Tips",
        href: "/workshop/own-your-digital-presence/day/1/session/2/accessibility",
        icon: Settings
      },
      {
        title: "Using AI to Refresh Sites Over Time",
        href: "/workshop/own-your-digital-presence/day/1/session/2/ai-refresh",
        icon: RefreshCw
      },
      {
        title: "Productivity Systems for Artists",
        href: "/workshop/own-your-digital-presence/day/1/session/2/productivity",
        icon: Calendar
      }
    ]
  },
  {
    title: "Final Steps",
    color: "from-green-500 to-green-600",
    items: [
      {
        title: "Final Assignment Overview + Upload",
        href: "/workshop/own-your-digital-presence/day/1/session/2/final-assignment",
        icon: Upload
      },
      {
        title: "Q&A + Preview of Saturday",
        href: "/workshop/own-your-digital-presence/day/1/session/2/qa",
        icon: MessageSquare
      }
    ]
  }
];

export default function Session2Page() {
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
              Session 2: Content Organization & Customization
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to organize your content effectively and customize your website to reflect your artistic style.
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