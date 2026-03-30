"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Brain, Bot, Code2, MessageSquare, Mail, Globe, Database, Settings, AlertCircle, ChevronRight, Link2, Shield, DollarSign } from "lucide-react";
import Image from "next/image";
import AIMarketingCourseOverview from "../workshop/AIMarketingCourseOverview";
import AIMarketingHeroSection from "../workshop/AIMarketingHeroSection";
import AIMarketingSetupOpenAI from "../workshop/AIMarketingSetupOpenAI";
import AIMarketingCreateWorkflow from "../workshop/AIMarketingCreateWorkflow";
import AIMarketingN8NGetStarted from "../workshop/AIMarketingN8NGetStarted";
import AIMarketingN8NNodes from "../workshop/AIMarketingN8NNodes";
import AIMarketingN8NNavigatingEditorUI from "../workshop/AIMarketingN8NNavigatingEditorUI";
import AIMarketingFlashyTitle from "../workshop/AIMarketingFlashyTitle";
import AIMarketingNav from "../workshop/AIMarketingNav";
import AIMarketingN8NKeyboardShortcuts from "../workshop/AIMarketingN8NKeyboardShortcuts";
import { ART_OF_AI_AGENTS_HERO_IMAGE } from "@/constants/art-of-ai-agents";
import { ArtOfAIAgentsLegacyChrome } from "../workshop/art-of-ai-agents/ArtOfAIAgentsLegacyChrome";
import { ArtOfAIAgentsWhatYouLearnSection } from "../workshop/art-of-ai-agents/ArtOfAIAgentsWhatYouLearnSection";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const images = {
  hero: ART_OF_AI_AGENTS_HERO_IMAGE,
  about: "/images/workshop/ai-marketing/about.jpg",
  resources: "/images/workshop/ai-marketing/resources.jpg",
  impact: "/images/workshop/ai-marketing/impact.jpg",
};

const sections = [
  {
    title: "AI Marketing Fundamentals",
    icon: Brain,
    items: [
      {
        title: "Introduction to AI Marketing",
        description: "Understanding the role of AI in modern marketing strategies",
        icon: Brain
      },
      {
        title: "AI Tools Overview",
        description: "Exploring n8n, Make, and other automation platforms",
        icon: Bot
      },
      {
        title: "Workflow Basics",
        description: "Creating and managing automated marketing workflows",
        icon: Code2
      }
    ]
  },
  {
    title: "Content Creation",
    icon: MessageSquare,
    items: [
      {
        title: "AI Content Generation",
        description: "Automating content creation with AI tools",
        icon: MessageSquare
      },
      {
        title: "Email Marketing",
        description: "Automated email campaigns and personalization",
        icon: Mail
      },
      {
        title: "Social Media Automation",
        description: "Scheduling and managing social media content",
        icon: Globe
      }
    ]
  },
  {
    title: "Data & Analytics",
    icon: Database,
    items: [
      {
        title: "Data Collection",
        description: "Automated data gathering and processing",
        icon: Database
      },
      {
        title: "Analytics Integration",
        description: "Connecting marketing data with analytics tools",
        icon: Settings
      },
      {
        title: "Error Handling",
        description: "Managing and debugging workflow errors",
        icon: AlertCircle
      }
    ]
  },
  {
    title: "AI Agents & Automation",
    icon: Bot,
    items: [
      {
        title: "AI Chatbot Workflows",
        description: "Creating AI-powered chatbots for Telegram & WhatsApp",
        icon: Bot
      },
      {
        title: "RAG & Vector Databases",
        description: "Implementing Retrieval-Augmented Generation with Qdrant",
        icon: Database
      },
      {
        title: "Enterprise Integrations",
        description: "Automating ERPNext, IT admin, and business processes",
        icon: Settings
      }
    ]
  },
  {
    title: "Advanced Techniques",
    icon: Code2,
    items: [
      {
        title: "Webhooks & HTTP Requests",
        description: "Building and debugging webhook integrations",
        icon: Link2
      },
      {
        title: "Flowise AI Integration",
        description: "Connecting Flowise AI agents with n8n workflows",
        icon: Bot
      },
      {
        title: "Prompt Engineering",
        description: "Best practices for AI prompt design and optimization",
        icon: Brain
      }
    ]
  },
  {
    title: "Deployment & Business",
    icon: Rocket,
    items: [
      {
        title: "Self-Hosting & Deployment",
        description: "Deploying n8n with Docker and cloud solutions",
        icon: Rocket
      },
      {
        title: "Security & Compliance",
        description: "Ensuring data privacy and security in automations",
        icon: Shield
      },
      {
        title: "Monetization",
        description: "Selling automations and AI agents as a service",
        icon: DollarSign
      }
    ]
  }
];

export default function ArtOfAIAgentsClient() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ArtOfAIAgentsLegacyChrome variant="full">
        {/* Navigation */}
        <AIMarketingNav />

        {/* Flashy Title Section */}
        <AIMarketingFlashyTitle reducedMotion={reducedMotion} />

        <section
          className="relative max-w-6xl mx-auto px-4 py-6 sm:py-10"
          aria-label="Workshop documentation"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-white/10 shadow-2xl ring-1 ring-white/5">
            <Image
              src={images.hero}
              alt="The Art of AI Agents — Locust Projects, The Dill, 2026"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority
            />
          </div>
          <p className="text-center text-xs sm:text-sm text-[#e0e0e0]/45 mt-3 tracking-wide">
            Locust Projects · The Dill — 2026
          </p>
        </section>

        {/* 1. Overview Section */}
        <section id="hero" className="relative py-24 overflow-hidden">
          <AIMarketingHeroSection reducedMotion={reducedMotion} />
        </section>

        <ArtOfAIAgentsWhatYouLearnSection reducedMotion={reducedMotion} />

        {/* 3. First Steps Section */}
        <section id="overview">
          <AIMarketingCourseOverview />
        </section>

        <section id="getting-started">
          <AIMarketingSetupOpenAI />
        </section>

        {/* 5. Building Blocks Section */}
        <section id="first-steps">
          <AIMarketingN8NGetStarted />
        </section>

        {/* 4. UI Editor Section */}
        <section id="ui-editor">
          <AIMarketingN8NNavigatingEditorUI />
        </section>

        <section id="building-blocks">
          <AIMarketingN8NNodes />
        </section>

        {/* 6. First Workflow Section */}
        <section id="first-workflow">
          <AIMarketingCreateWorkflow />
        </section>

        {/* Additional Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <motion.div
                key={section.title}
                className="bg-[#0a0a0f]/50 backdrop-blur-sm rounded-xl neon-border p-6 relative overflow-hidden"
                variants={fadeIn}
                whileHover={reducedMotion ? {} : hoverScale}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7f5af0]/10 to-[#ff6ac1]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={reducedMotion ? {} : pulse}
                    className="w-8 h-8"
                  >
                    <section.icon className="w-full h-full text-[#7f5af0]" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#7f5af0]/10 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-[#7f5af0] mt-1" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-[#e0e0e0]/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Keyboard Shortcuts Section */}
        <section id="keyboard-shortcuts">
          <AIMarketingN8NKeyboardShortcuts />
        </section>

        {/* FAQ Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 py-16"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Do I need prior experience?",
                answer: "No—this workshop is designed for both no‑code users and technical integrators."
              },
              {
                question: "How long is the workshop?",
                answer: "Approximately 5 hours, split into four 1¼‑hour sessions with breaks."
              },
              {
                question: "What tools do I need?",
                answer: "Install Docker (or npm), an n8n instance, and have an OpenAI key if you want to use AI Agents."
              },
              {
                question: "Will it be recorded?",
                answer: "Yes—recordings and companion materials (JSON workflows, PDFs) will be provided afterward."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0f]/50 backdrop-blur-sm rounded-xl neon-border p-6"
                variants={fadeIn}
                whileHover={reducedMotion ? {} : hoverScale}
              >
                <h3 className="text-xl font-bold mb-4 text-[#7f5af0]">{faq.question}</h3>
                <p className="text-[#e0e0e0]/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 py-16 text-center relative"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-[#0a0a0f]/50 backdrop-blur-sm rounded-xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Master n8n?</h2>
            <p className="text-xl text-[#e0e0e0]/80 mb-8">
              Join our workshop on April 24th and transform your automation skills
            </p>
            <motion.button 
              className="px-8 py-4 rounded-lg font-medium neon-border neon-gradient hover:opacity-90 transition-opacity"
              whileHover={reducedMotion ? {} : hoverScale}
            >
              Reserve Your Spot
              <ChevronRight className="w-5 h-5 inline-block ml-2" />
            </motion.button>
          </div>
        </motion.div>
    </ArtOfAIAgentsLegacyChrome>
  );
} 