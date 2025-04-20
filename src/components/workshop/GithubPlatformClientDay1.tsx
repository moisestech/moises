'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Code, GitBranch, BookOpen, Terminal, Shield, Clock, FileText, Users, Zap, Database, Menu, Video, ShieldCheck, Home, Info, Phone, PenTool, Globe2, Star, Grid, Type, Palette, Calendar, Map, Music, Share2, Rss, Cloud } from 'lucide-react';
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

const githubContent = {
  title: "GitHub Platform Guide - Day 1",
  description: "Learn the fundamentals of GitHub Pages and how to create your first website using GitHub.",
  sections: [
    {
      title: "Getting Started with GitHub",
      icon: Code,
      description: "Set up your GitHub account and understand the basics of version control.",
      keyPoints: [
        "Create a GitHub account",
        "Install Git on your computer",
        "Configure Git with your credentials",
        "Understand repositories and branches"
      ]
    },
    {
      title: "GitHub Pages Basics",
      icon: GitBranch,
      description: "Learn how GitHub Pages works and how to create your first site.",
      keyPoints: [
        "What is GitHub Pages?",
        "Types of GitHub Pages sites",
        "Repository naming conventions",
        "Setting up your first page"
      ]
    },
    {
      title: "Creating Your First Site",
      icon: BookOpen,
      description: "Step-by-step guide to creating and deploying your first website.",
      steps: [
        {
          title: "Create a Repository",
          icon: Database,
          items: ["Name your repository", "Initialize with README", "Choose visibility"]
        },
        {
          title: "Set Up GitHub Pages",
          icon: Terminal,
          items: ["Enable GitHub Pages", "Choose source branch", "Configure custom domain"]
        },
        {
          title: "Add Your Content",
          icon: FileText,
          items: ["Create index.html", "Add CSS and JavaScript", "Upload assets"]
        }
      ]
    },
    {
      title: "Essential GitHub Features",
      icon: Shield,
      description: "Key features you'll need to manage your website effectively.",
      features: [
        "Repository management",
        "Branch protection rules",
        "Actions and workflows",
        "Security settings",
        "Collaboration tools"
      ]
    }
  ]
};

export default function GithubPlatformClientDay1() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/1/session/1"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 1</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              {githubContent.title}
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
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{githubContent.title}</h1>
            <p className="text-lg text-gray-200">{githubContent.description}</p>
          </motion.section>

          {/* Content Sections */}
          {githubContent.sections.map((section, index) => (
            <motion.section
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-100">
                  <section.icon className="w-6 h-6 text-gray-800" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  
                  {section.keyPoints && (
                    <div className="space-y-3">
                      {section.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1">
                            <div className="w-2 h-2 rounded-full bg-gray-800" />
                          </div>
                          <p className="text-gray-600">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.steps && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {section.steps.map((step, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-gray-100">
                              <step.icon className="w-5 h-5 text-gray-800" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{step.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {step.items.map((item, j) => (
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
                            <div className="w-2 h-2 rounded-full bg-gray-800" />
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