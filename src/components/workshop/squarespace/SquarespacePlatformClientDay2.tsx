'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Layout, Image, FileText, Users, Zap, Shield, Clock, BookOpen, Play, RefreshCw, Copy, File, Link2, Search, HelpCircle, Sparkles, Mail, Database, Menu, Video, ShieldCheck, Home, Info, Phone, PenTool, Globe2, Star, Grid, Type, Palette, Code, Calendar, Map, Music, Share2, Rss, Cloud } from 'lucide-react';
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

const squarespaceContent = {
  title: "Squarespace Platform Guide - Day 2",
  description: "Learn how to create and customize your website using Squarespace's powerful tools and features.",
  sections: [
    {
      title: "Choosing a Template",
      icon: Layout,
      description: "All Squarespace 7.1 templates have the same features and style options. Your choice is a starting point that doesn't limit your design possibilities.",
      keyPoints: [
        "Explore the template store or use Squarespace Blueprint",
        "Focus on structure and style rather than demo content",
        "Customize any template to meet your needs",
        "Change designs later using pages, sections, and style settings"
      ]
    },
    {
      title: "Creating Your Design",
      icon: Palette,
      description: "Customize your site's appearance with curated font and color themes.",
      keyPoints: [
        "Choose from curated font packs and scale base font size",
        "Select color palettes and theme options",
        "Create logos with Squarespace Logo (free for subscribers)",
        "Upload custom images or use stock images",
        "Follow accessibility guidelines for better design"
      ]
    },
    {
      title: "Adding Content with Blocks",
      icon: Grid,
      description: "Blocks are drag-and-drop features that display content on your site. Use them to customize pages with various content types.",
      blocks: [
        {
          name: "Text & Content",
          icon: Type,
          items: ["Text", "Markdown", "Quote", "Line", "Spacer"]
        },
        {
          name: "Media",
          icon: Image,
          items: ["Image", "Gallery", "Video", "Audio", "SoundCloud"]
        },
        {
          name: "Interactive",
          icon: Share2,
          items: ["Button", "Form", "Newsletter", "Social Links", "Search"]
        },
        {
          name: "Business",
          icon: Database,
          items: ["Product", "Calendar", "Scheduling", "Reservations", "Donation"]
        },
        {
          name: "Integration",
          icon: Code,
          items: ["Embed", "Map", "Instagram", "RSS", "Amazon"]
        }
      ]
    },
    {
      title: "Site Subscription Features",
      icon: Shield,
      description: "Every full Squarespace website subscription includes comprehensive tools and features.",
      features: [
        "Drag-and-drop site building tools",
        "Content hosting on robust infrastructure",
        "Built-in search engine optimization",
        "Squarespace and Google Analytics integration",
        "Responsive design for all devices",
        "24/7 customer support"
      ]
    }
  ]
};

export default function SquarespacePlatformClientDay2() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/2/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              {squarespaceContent.title}
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
            className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{squarespaceContent.title}</h1>
            <p className="text-lg text-blue-100">{squarespaceContent.description}</p>
          </motion.section>

          {/* Content Sections */}
          {squarespaceContent.sections.map((section, index) => (
            <motion.section
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <section.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  
                  {section.keyPoints && (
                    <div className="space-y-3">
                      {section.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>
                          <p className="text-gray-600">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.blocks && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {section.blocks.map((block, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-blue-100">
                              <block.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{block.name}</h3>
                          </div>
                          <div className="space-y-2">
                            {block.items.map((item, j) => (
                              <div key={j} className="flex items-center gap-2 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.features && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {section.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                          <div className="mt-1">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>
                          <p className="text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </motion.div>
      </main>
    </div>
  );
} 