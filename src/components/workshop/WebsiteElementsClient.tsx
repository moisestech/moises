'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Image, Layout, FileText, Users, Zap, Shield, Clock, BookOpen, Play, RefreshCw, Copy, File, Link2, Search, HelpCircle, Sparkles, Mail, Database, Menu, Video, ShieldCheck, Home, Info, Phone, PenTool, Globe2, Star } from 'lucide-react';
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

const websiteElements = {
  title: "Essential Website Elements",
  description: "Learn about key website components and how to implement them across different platforms",
  elements: [
    {
      title: "Call to Action (CTA)",
      icon: Zap,
      description: "Effective CTAs guide visitors to take desired actions on your website. They should be clear, compelling, and strategically placed.",
      platforms: {
        wix: "Use Wix's button and text elements with custom styling. Add hover effects and animations to increase engagement.",
        squarespace: "Utilize Squarespace's button blocks with custom styling options. Add background images and overlay text for visual appeal.",
        github: "Create custom HTML/CSS buttons with hover effects. Use JavaScript for interactive elements if needed."
      }
    },
    {
      title: "Navigation & Menus",
      icon: Menu,
      description: "Clear navigation helps users find what they're looking for quickly. Consider mobile responsiveness and user experience.",
      platforms: {
        wix: "Use Wix's menu editor to create dropdown menus and mobile-friendly navigation.",
        squarespace: "Customize navigation using Squarespace's style editor and mobile settings.",
        github: "Create responsive navigation using HTML, CSS, and JavaScript. Consider using frameworks like Bootstrap."
      }
    },
    {
      title: "Media Integration",
      icon: Video,
      description: "Effectively integrate images, videos, and galleries to showcase your work and engage visitors.",
      platforms: {
        wix: "Use Wix's media manager and gallery elements. Add video backgrounds and lightbox effects.",
        squarespace: "Utilize Squarespace's gallery blocks and video backgrounds. Add image overlays and hover effects.",
        github: "Implement custom galleries using HTML/CSS/JS. Consider using libraries like Lightbox or Fancybox."
      }
    },
    {
      title: "Privacy Policy & Legal",
      icon: ShieldCheck,
      description: "Essential legal documents that protect both you and your visitors. Ensure compliance with relevant regulations.",
      platforms: {
        wix: "Use Wix's built-in privacy policy generator or add custom HTML pages.",
        squarespace: "Create custom pages for legal documents using Squarespace's text blocks.",
        github: "Create dedicated pages for legal documents using Markdown or HTML."
      }
    },
    {
      title: "Core Pages",
      icon: Home,
      description: "Essential pages every website needs: Home, About, Contact, and custom content pages.",
      platforms: {
        wix: "Use Wix's page templates and customize with drag-and-drop editor.",
        squarespace: "Create pages using Squarespace's templates and style editor.",
        github: "Create individual HTML pages or use a static site generator for better organization."
      }
    },
    {
      title: "Blog Integration",
      icon: PenTool,
      description: "Share updates, showcase work, and improve SEO through regular blog posts.",
      platforms: {
        wix: "Use Wix's blog manager to create and organize posts with custom layouts.",
        squarespace: "Utilize Squarespace's blog features with custom styling options.",
        github: "Implement a blog using Jekyll or other static site generators. Use Markdown for content."
      }
    },
    {
      title: "Domain & Branding",
      icon: Globe2,
      description: "Establish your online presence with a custom domain and consistent branding elements.",
      platforms: {
        wix: "Purchase and connect domains through Wix. Add favicon and customize site identity.",
        squarespace: "Connect custom domains and customize site identity settings.",
        github: "Set up custom domains through GitHub Pages. Add favicon and meta tags for branding."
      }
    }
  ]
};

export default function WebsiteElementsClient() {
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
              Essential Website Elements
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
            <h1 className="text-4xl font-bold mb-4">{websiteElements.title}</h1>
            <p className="text-lg text-blue-100">{websiteElements.description}</p>
          </motion.section>

          {/* Website Elements */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {websiteElements.elements.map((element, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <element.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{element.title}</h3>
                      <p className="text-gray-600 mb-4">{element.description}</p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Wix Implementation</h4>
                          <p className="text-gray-600">{element.platforms.wix}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Squarespace Implementation</h4>
                          <p className="text-gray-600">{element.platforms.squarespace}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">GitHub Implementation</h4>
                          <p className="text-gray-600">{element.platforms.github}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 