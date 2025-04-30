'use client'

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Tv, Users, BarChart, Calendar, Image as ImageIcon, Lock, Zap, Building, Palette, Coffee, Check, Tag, Clock, Shield } from "lucide-react";
import DecorativeDivider from '@/components/common/DecorativeDivider'

// Add new animation variants
const iconCarousel = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5 }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Add new animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Add SmartSign specific icons
const smartSignIcons = [
  { icon: Tv, label: "Digital Displays" },
  { icon: Calendar, label: "Event Scheduling" },
  { icon: Users, label: "Community Engagement" },
  { icon: ImageIcon, label: "Multimedia Content" },
  { icon: Zap, label: "Smart Automation" },
  { icon: Shield, label: "Secure Access" }
];

const tips = [
  "Transform any screen into a dynamic digital sign",
  "Automatically update content based on your schedule",
  "Engage your audience with interactive displays",
  "Simplify your digital signage management",
  "Showcase events and announcements in real-time",
  "Support multiple display configurations",
  "Access your content from anywhere",
  "Built with accessibility in mind"
];

const features = [
  { icon: Tv, title: "Dynamic Displays", description: "Transform any screen into a smart digital sign" },
  { icon: Calendar, title: "Smart Scheduling", description: "Automatically update content based on your schedule" },
  { icon: Users, title: "Community Focus", description: "Engage your audience with interactive displays" },
  { icon: ImageIcon, title: "Rich Media", description: "Showcase videos, images, and interactive content" },
  { icon: Zap, title: "Smart Automation", description: "Automate content updates and scheduling" },
  { icon: Shield, title: "Secure Access", description: "Control who can update your displays" }
];

export default function SmartSignClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    useCase: "gallery"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Add new animation states
  const [hoverIndex, setHoverIndex] = useState(-1);

  // Add new state for icon carousel
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  // Add useEffect for icon carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % smartSignIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add useEffect for tips rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add useEffect for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]" />
        <div className="absolute inset-0">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30833_1px,transparent_1px),linear-gradient(to_bottom,#eab30833_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <Tv className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-200">Smart Digital Signage</span>
                  </motion.div>
                </div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-lime-300 to-yellow-400"
                >
                  Transform Your Space
                  <br />
                  With SmartSign
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="text-xl text-gray-300 max-w-2xl mb-8"
                >
                  Dynamic digital signage that adapts to your needs, engages your audience, and simplifies your workflow
                </motion.p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTip}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-yellow-400 font-medium mb-12"
                  >
                    {tips[currentTip]}
                  </motion.div>
                </AnimatePresence>

                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <motion.button
                    whileHover={reducedMotion ? {} : hoverScale}
                    className="px-8 py-4 rounded-lg font-medium bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
                  >
                    Schedule Demo
                  </motion.button>
                  <motion.button
                    whileHover={reducedMotion ? {} : hoverScale}
                    className="px-8 py-4 rounded-lg font-medium border border-yellow-500/20 hover:border-yellow-500/40 transition-colors text-yellow-200"
                  >
                    Start Free Trial
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            <div className="h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="w-16 h-16 bg-yellow-500/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-yellow-500/20"
                    >
                      {React.createElement(feature.icon, {
                        className: "w-8 h-8 text-yellow-400"
                      })}
                    </motion.div>
                    <span className="text-sm text-yellow-200 text-center">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-zinc-800/80 backdrop-blur-xl rounded-xl border border-yellow-500/20 p-6"
                whileHover={reducedMotion ? {} : hoverScale}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={reducedMotion ? {} : pulse}
                    className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center"
                  >
                    {React.createElement(feature.icon, {
                      className: "w-6 h-6 text-yellow-400"
                    })}
                  </motion.div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Icon Carousel Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-lime-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                  <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <Tv className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-200">Smart Digital Signage</span>
                  </motion.div>
                </div>
                
                <motion.h2 
                  variants={fadeIn}
                  className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-lime-300 to-yellow-400"
                >
                  Transform Your Space
                  <br />
                  With SmartSign
                </motion.h2>
                
                <motion.p 
                  variants={fadeIn}
                  className="text-xl text-gray-300 max-w-2xl mb-8"
                >
                  Dynamic digital signage that adapts to your needs, engages your audience, and simplifies your workflow
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <motion.button
                    whileHover={reducedMotion ? {} : hoverScale}
                    className="px-8 py-4 rounded-lg font-medium bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
                  >
                    Schedule Demo
                  </motion.button>
                  <motion.button
                    whileHover={reducedMotion ? {} : hoverScale}
                    className="px-8 py-4 rounded-lg font-medium border border-yellow-500/20 hover:border-yellow-500/40 transition-colors text-yellow-200"
                  >
                    Start Free Trial
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            <div className="h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8">
                {smartSignIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="w-16 h-16 bg-yellow-500/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-yellow-500/20"
                    >
                      {React.createElement(item.icon, {
                        className: "w-8 h-8 text-yellow-400"
                      })}
                    </motion.div>
                    <span className="text-sm text-yellow-200 text-center">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Tv}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-lime-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-300">Powerful tools for dynamic content management</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dynamic Event Display",
                description: [
                  "Automatically display events based on real-time schedules.",
                  "Filter and categorize events effortlessly with custom labels and tags.",
                  "Tailor event visibility by specific timeframes and audience segments."
                ],
                icon: Calendar,
              },
              {
                title: "Multimedia Integration",
                description: [
                  "Showcase videos, images, and interactive content seamlessly.",
                  "Empower your community by allowing members to feature their own approved content on the sign."
                ],
                icon: ImageIcon,
              },
              {
                title: "Flexible User Permissions",
                description: [
                  "Multiple authorization levels for secure, controlled event posting.",
                  "Simple and intuitive management interface for administrators."
                ],
                icon: Lock,
              },
              {
                title: "Intelligent Automation",
                description: [
                  "Smart scheduling: events appear and disappear automatically.",
                  "Reduce manual updating efforts, freeing your team to focus on what matters most."
                ],
                icon: Zap,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(-1)}
                className="group bg-gradient-to-br from-yellow-500/10 to-lime-500/5 rounded-xl p-6 hover:from-yellow-500/20 hover:to-lime-500/10 transition-all duration-300 border border-yellow-500/10 hover:border-yellow-500/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 group-hover:translate-x-full duration-1000 transition-transform" />
                <feature.icon className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <motion.div
                        animate={{
                          x: hoverIndex === index ? [0, 2, 0] : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
                      </motion.div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-lime-500/10" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-300">See how SmartSign transforms spaces across different sectors</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Art Galleries",
                description: "Promote exhibitions, artist talks, workshops, and multimedia installations.",
                icon: Palette,
                color: "from-pink-500/20 to-purple-500/20"
              },
              {
                title: "Nonprofits",
                description: "Highlight fundraising events, volunteer opportunities, and community messages.",
                icon: Building,
                color: "from-blue-500/20 to-cyan-500/20"
              },
              {
                title: "Event Spaces",
                description: "Dynamically manage event schedules, room allocations, and guest communications.",
                icon: Coffee,
                color: "from-purple-500/20 to-blue-500/20"
              }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-6 bg-gradient-to-br ${useCase.color} border border-white/10 hover:border-white/20 transition-all duration-300`}
              >
                <useCase.icon className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Calendar}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Updated Pricing Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-lime-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing & Services</h2>
            <p className="text-gray-300">Transparent pricing with no hidden costs</p>
            <div className="mt-6 inline-block bg-white/5 rounded-lg px-4 py-2 border border-white/10">
              <p className="text-sm text-gray-300">Setup fee varies by plan (Solo $750 | Community $1 200 | Pro custom).</p>
            </div>
            <p className="mt-3 text-sm text-gray-400">Save 15% with annual payment (popular for grant budgets).</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solo",
                setupIncludes: [
                  "Custom app development ($750)",
                  "Basic branding integration",
                  "Installation support",
                  "1–2 display configurations"
                ],
                monthlyPrice: "$119",
                monthlyFeatures: [
                  "Event Scheduling & Automation",
                  "Basic User Management",
                  "Image & Video Support",
                  "Email Support"
                ]
              },
              {
                title: "Community",
                setupIncludes: [
                  "Custom app development ($1 200)",
                  "Advanced branding integration",
                  "Installation & training",
                  "Up to 3 display configurations"
                ],
                monthlyPrice: "$199",
                monthlyFeatures: [
                  "All Solo features",
                  "Community content submissions",
                  "Advanced filtering & tagging",
                  "Priority Email and Chat Support",
                  "Monthly check-in call"
                ],
                highlighted: true
              },
              {
                title: "Pro",
                setupIncludes: [
                  "Setup fee starts at $1 200",
                  "Premium branding integration",
                  "Full team training",
                  "Unlimited display configurations",
                  "Custom feature development"
                ],
                monthlyPrice: "$299–$499",
                monthlyFeatures: [
                  "All Community features",
                  "Customized Templates",
                  "Advanced Analytics & Reporting",
                  "24/7 Priority Support",
                  "Dedicated Success Manager",
                  "Quarterly strategy sessions"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 transition-all duration-300 border ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-yellow-500/20 to-lime-500/20 border-yellow-500/50 transform hover:scale-105' 
                    : 'bg-white/5 border-yellow-500/10 hover:bg-yellow-500/5'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                
                {/* One-time setup section */}
                <div className="mb-8">
                  <p className="text-sm text-gray-400 mb-2">One-time setup includes:</p>
                  <ul className="space-y-2 mb-4">
                    {plan.setupIncludes.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Monthly section */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Monthly support & features:</p>
                  <p className="text-3xl font-bold mb-4 text-yellow-400">
                    {plan.monthlyPrice}
                    <span className="text-sm font-normal text-gray-400">/month{plan.title === "Pro" ? "*" : ""}</span>
                  </p>
                  <ul className="space-y-2 mb-8">
                    {plan.monthlyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#demo"
                      className={`inline-flex items-center justify-center w-full py-3 rounded-full transition-all duration-300 ${
                        plan.highlighted
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                          : 'border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
                      }`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500 italic text-center">
            * Exact Pro pricing depends on custom integrations and SLA.
          </p>
        </div>
      </section>

      <DecorativeDivider 
        icon={Users}
        gradientColors={{
          from: 'rgba(234, 179, 8, 0.1)',
          via: 'rgba(132, 204, 22, 0.1)',
          to: 'rgba(234, 179, 8, 0.1)'
        }}
        iconColor="text-yellow-400/50"
        className="my-16"
      />

      {/* Interactive Footer with Parallax Effect */}
      <motion.footer 
        className="py-12 relative overflow-hidden"
        style={{
          backgroundColor: useTransform(
            scrollYProgress,
            [0, 1],
            ["rgba(0,0,0,0)", "rgba(29,78,216,0.1)"]
          )
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <blockquote className="text-gray-400 text-sm">
              "SmartSign transformed our gallery's digital presence overnight. The community engagement has been incredible." — Maria, Contemporary Art Space
            </blockquote>
            <blockquote className="mt-6 text-gray-400 text-sm">
              "The 30-day pilot let our board see SmartSign in action—approval was unanimous." — Carla, Community Arts Center
            </blockquote>
            <motion.p 
              className="text-gray-400 mt-8"
              style={{
                opacity: useTransform(scrollYProgress, [0, 1], [0.5, 1])
              }}
            >
              Bakehouse Artist Tech Initiative —{" "}
              <Link href="https://moises.tech" target="_blank" className="underline hover:text-white transition-colors">
                Moises Sanabria & Fabiola Larios
              </Link>
            </motion.p>
          </div>
        </div>
      </motion.footer>

      {/* Add new styles */}
      <style jsx global>{`
        @keyframes text-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(234, 179, 8, 0.2);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-icon-float {
          animation: icon-float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 