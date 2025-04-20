'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Image, Layout, FileText, Users, Zap, Shield, Clock, BookOpen, Play, RefreshCw, Copy, File, Link2, Search, HelpCircle, Sparkles, Mail, Database } from 'lucide-react';
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

const aiTools = {
  title: "AI Tools: An Overview",
  duration: "5 min",
  description: "Discover how Wix's AI tools can revolutionize your website creation and management process.",
  introduction: "At Wix, we are revolutionizing the world of website creation and management by harnessing the extraordinary power of Artificial Intelligence (AI). With a suite of innovative AI tools, we don't just simplify the process of building a website, we can help you transform it into an exciting and creative journey that you will thoroughly enjoy.",
  features: [
    {
      title: "Get a professionally designed site",
      icon: Layout,
      description: "Creating a website has never been easier, thanks to Wix's AI Website Builder. This tool uses a chat interface to understand your website needs. It asks you a series of questions about your preferences, such as design style and required features, and then automatically creates a personalized website for you.",
      cta: "Take me to the Wix free AI website builder"
    },
    {
      title: "Generate text content for your site",
      icon: FileText,
      description: "Coming up with engaging and SEO-friendly text for your website can be a challenge. Wix's AI text generator tool can assist you with this. It uses AI algorithms to understand your website's context and generate suitable text. This tool can help you create compelling website text, product descriptions, and more, enhancing your site's search engine visibility and user engagement.",
      cta: "Learn more about creating text using AI in the editor"
    },
    {
      title: "Build your site sections",
      icon: Layout,
      description: "When you are working on your site inside the editor, use AI to create sections for your site. Suppose you want an 'About Us' section. All you need to do is describe your vision for this section in the editor. The AI tool takes over from there, generating a custom section that seamlessly blends with your site's design, complete with relevant content and images.",
      cta: "Try the AI section generator"
    },
    {
      title: "Create your own images",
      icon: Image,
      description: "Wix's AI tool for image creation allows you to generate unique and appealing visuals without any design experience. Just tell it exactly what you want in the image and select the preferred style, and it will create images for you to use on your site - for free!",
      cta: "Learn more about creating images using AI"
    },
    {
      title: "Design a professional logo",
      icon: Sparkles,
      description: "Use AI to create your very own unique logo for your brand. This tool uses AI to understand your brand and style preferences. It asks a few questions about your business and then generates a variety of custom logo designs.",
      cta: "Get started creating your logo using AI"
    },
    {
      title: "Write detailed product descriptions",
      icon: FileText,
      description: "When setting up your store in your site's dashboard, you can use AI to create compelling product descriptions that emphasize your products' unique features and advantages. The AI tool will provide you with different variations of product descriptions that are SEO-friendly and incorporate relevant keywords.",
      cta: "Go to Products in your site's dashboard to get started"
    },
    {
      title: "Send out eye-catching emails",
      icon: Mail,
      description: "From the email marketing section in your dashboard, you can use AI to generate captivating emails to send to your contacts. Just specify the main purpose of your email, such as promoting a sale or welcoming a new subscriber.",
      cta: "Go to Email Marketing in your site's dashboard and select Generate AI email"
    },
    {
      title: "Create collections for your CMS",
      icon: Database,
      description: "Managing content on your website is made easier with Wix's AI tool for creating collections in the CMS. Simply input a name and a brief description of the collection you wish to create, and then let the AI handle the rest.",
      cta: "Go to CMS in your site's dashboard, click Create Collection and choose Create with AI"
    }
  ]
};

export default function WixAIToolsClient() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/2/session/2"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Session 2</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Wix AI Tools Guide
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
            <h1 className="text-4xl font-bold mb-4">{aiTools.title}</h1>
            <p className="text-xl text-blue-100 mb-4">{aiTools.duration}</p>
            <p className="text-lg text-blue-100">{aiTools.introduction}</p>
          </motion.section>

          {/* AI Tools Features */}
          <motion.section variants={fadeIn} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {aiTools.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        <Link2 className="w-4 h-4" />
                        <span>{feature.cta}</span>
                      </a>
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