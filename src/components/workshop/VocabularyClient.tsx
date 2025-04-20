'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Globe, Server, Shield, Smartphone, Layout, Search, FileText, Image, LayoutDashboard, Users, Code2, FileCode } from 'lucide-react';
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

const vocabularySections = [
  {
    title: "Basic Web Terms",
    icon: Globe,
    terms: [
      {
        term: "Domain",
        definition: "Your website's address on the internet (e.g., www.yourname.com)",
        icon: Globe
      },
      {
        term: "Hosting",
        definition: "The service that stores your website's files and makes them accessible on the internet",
        icon: Server
      },
      {
        term: "SSL Certificate",
        definition: "A security protocol that encrypts data between your website and visitors (indicated by 'https://')",
        icon: Shield
      },
      {
        term: "Responsive Design",
        definition: "A design approach that ensures your website looks good on all devices (desktop, tablet, mobile)",
        icon: Smartphone
      }
    ]
  },
  {
    title: "Content Management",
    icon: Layout,
    terms: [
      {
        term: "CMS (Content Management System)",
        definition: "A platform that allows you to manage website content without coding (e.g., WordPress, Squarespace)",
        icon: Layout
      },
      {
        term: "Website Performance",
        definition: "Tools for monitoring and improving website speed and user experience",
        icon: Search
      },
      {
        term: "Metadata",
        definition: "Information about your content that helps search engines understand your website",
        icon: FileText
      },
      {
        term: "Alt Text",
        definition: "Descriptive text added to images for accessibility purposes",
        icon: Image
      }
    ]
  },
  {
    title: "Design & Development",
    icon: Code2,
    terms: [
      {
        term: "UI (User Interface)",
        definition: "The visual elements and layout of your website that users interact with",
        icon: LayoutDashboard
      },
      {
        term: "UX (User Experience)",
        definition: "The overall experience users have when interacting with your website",
        icon: Users
      },
      {
        term: "CSS (Cascading Style Sheets)",
        definition: "Code that controls the visual appearance of your website",
        icon: Code2
      },
      {
        term: "HTML (Hypertext Markup Language)",
        definition: "The standard language for creating web pages and applications",
        icon: FileCode
      }
    ]
  }
];

export default function VocabularyClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1/introduction/sustainability"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Sustainability</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Web Development Vocabulary
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-12"
        >
          {/* Introduction */}
          <motion.section
            variants={fadeIn}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-white/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold">Web Development Vocabulary</h1>
            </div>
            <p className="text-xl text-indigo-100">
              Learn the essential terms and concepts you'll need to understand when building your website
            </p>
          </motion.section>

          {/* Vocabulary Sections */}
          {vocabularySections.map((section, index) => (
            <motion.section key={index} variants={fadeIn} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-indigo-100">
                  <section.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.terms.map((term, termIndex) => (
                  <div key={termIndex} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <term.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                    </div>
                    <p className="text-gray-600">{term.definition}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  );
} 