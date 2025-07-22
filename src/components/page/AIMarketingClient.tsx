"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Menu, X, ArrowRight, Download, CheckCircle, Star, Rocket, Sparkles, Zap, Target, Heart, User, Award, BookOpen, PlayCircle, Brain, Bot, Code2, MessageSquare, Mail, Globe, Database, Settings, AlertCircle, ChevronRight, Link2, Shield, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import WorkflowEditor from "../workshop/WorkflowEditor";
import AIMarketingCourseOverview from "../workshop/AIMarketingCourseOverview";
import AIMarketingHeroSection from "../workshop/AIMarketingHeroSection";
import AIMarketingSetupOpenAI from "../workshop/AIMarketingSetupOpenAI";
import AIMarketingCreateWorkflow from "../workshop/AIMarketingCreateWorkflow";
import AIMarketingN8NGetStarted from "../workshop/AIMarketingN8NGetStarted";
import AIMarketingN8NNodes from "../workshop/AIMarketingN8NNodes";
import AIMarketingN8NIntroDeepDive from "../workshop/AIMarketingN8NIntroDeepDive";
import AIMarketingN8NNavigatingEditorUI from "../workshop/AIMarketingN8NNavigatingEditorUI";
import AIMarketingFlashyTitle from "../workshop/AIMarketingFlashyTitle";
import AIMarketingNav from "../workshop/AIMarketingNav";
import AIMarketingN8NKeyboardShortcuts from "../workshop/AIMarketingN8NKeyboardShortcuts";

// CSS Variables
const styles = `
  :root {
    --bg: #0a0a0f;
    --fg: #e0e0e0;
    --accent1: #7f5af0;
    --accent2: #ff6ac1;
    --accent3: #42d392;
  }

  @keyframes glitch {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-1px); }
    100% { transform: translateX(0); }
  }

  @keyframes gradientBorder {
    0% { border-image: linear-gradient(45deg, var(--accent1), var(--accent2), var(--accent3)) 1; }
    50% { border-image: linear-gradient(225deg, var(--accent1), var(--accent2), var(--accent3)) 1; }
    100% { border-image: linear-gradient(45deg, var(--accent1), var(--accent2), var(--accent3)) 1; }
  }

  .glitch-text {
    position: relative;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg);
  }

  .glitch-text::before {
    left: 2px;
    text-shadow: -2px 0 var(--accent1);
    animation: glitch 0.3s infinite;
  }

  .glitch-text::after {
    left: -2px;
    text-shadow: 2px 0 var(--accent2);
    animation: glitch 0.3s infinite reverse;
  }

  .neon-border {
    border: 1px solid transparent;
    animation: gradientBorder 4s linear infinite;
  }

  .neon-gradient {
    background: linear-gradient(45deg, var(--accent1), var(--accent2));
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    mix-blend-mode: overlay;
    opacity: 0.05;
    pointer-events: none;
  }
`;

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
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

// Custom section divider component
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`} />
);

// Navigation items
const navItems = [
  { id: "hero", label: "Start" },
  { id: "overview", label: "Course Overview" },
  { id: "ui-editor", label: "UI Editor" },
  { id: "getting-started", label: "Getting Started" },
  { id: "first-workflow", label: "First Workflow" },
  { id: "about", label: "About Me" },
  { id: "resources", label: "Resources" },
  { id: "impact", label: "Impact" },
  { id: "cta", label: "Join Now" },
];

// Placeholder images - replace with actual images
const images = {
  hero: "/images/workshop/ai-marketing/hero.jpg",
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

export default function AIMarketingClient() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [reducedMotion, setReducedMotion] = useState(false);

  // Intersection observer for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [resourcesRef, resourcesInView] = useInView({ threshold: 0.5 });
  const [impactRef, impactInView] = useInView({ threshold: 0.5 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (aboutInView) setActiveSection("about");
    else if (resourcesInView) setActiveSection("resources");
    else if (impactInView) setActiveSection("impact");
    else if (ctaInView) setActiveSection("cta");
  }, [heroInView, aboutInView, resourcesInView, impactInView, ctaInView]);

  // Countdown timer
  useEffect(() => {
    const endDate = new Date("2024-05-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-[#09090b] text-[#e0e0e0] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] to-[#0a0a0f]" />
        <div className="noise-overlay" />

        {/* Navigation */}
        <AIMarketingNav />

        {/* Flashy Title Section */}
        <AIMarketingFlashyTitle reducedMotion={reducedMotion} />

        {/* 1. Overview Section */}
        <section id="hero" className="relative py-24 overflow-hidden">
          <AIMarketingHeroSection reducedMotion={reducedMotion} />
        </section>

        {/* 2. Getting Started Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 py-16"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Automate workflows and business processes in n8n without writing complex code",
              "Build AI‑powered automation with n8n AI Agents, OpenAI/Gemini integration, and RAG models",
              "Integrate APIs, Webhooks, and third‑party services for seamless automation",
              "Deploy, self‑host, and scale n8n workflows using Docker and cloud solutions",
              "Debug and optimize n8n workflows for production readiness",
              "Create and monetize AI agents and automation solutions"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0f]/50 backdrop-blur-sm rounded-xl neon-border p-6"
                variants={fadeIn}
                whileHover={reducedMotion ? {} : hoverScale}
              >
                <p className="text-[#e0e0e0]/90">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                onClick={() => setActiveSection(section.title)}
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
      </div>
    </>
  );
} 