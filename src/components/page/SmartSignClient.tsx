'use client'

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Tv, Users, BarChart, Calendar, Image as ImageIcon, Lock, Zap, Building, Palette, Coffee, Check, Tag, Clock, Shield } from "lucide-react";

export default function SmartSignClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    useCase: "gallery"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Add new animation states
  const [hoverIndex, setHoverIndex] = useState(-1);

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
      {/* Updated Hero Section with new background */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]" />
        <div className="absolute inset-0">
          {/* Animated grid background with new colors */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing effect behind title */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-yellow-500/20 via-lime-500/20 to-yellow-500/20 rounded-full" />
            <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-lime-300 to-yellow-400 bg-clip-text text-transparent animate-text-shine">
              SmartSign
            </h1>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-200">
            Dynamic Digital Signage for Galleries & Nonprofit Event Spaces
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Engaging. Versatile. Community-Driven.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            SmartSign transforms any screen—whether it's a Smart TV or Raspberry Pi-connected display—into a powerful, versatile digital sign optimized for galleries, nonprofits, and event spaces. Instantly communicate events, share multimedia content, and foster deeper community engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#demo" 
                  className="bg-gradient-to-r from-yellow-500 to-lime-500 hover:from-yellow-600 hover:to-lime-600 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              <Play className="w-5 h-5" />
              Schedule Your Free Demo
            </Link>
            <Link href="#features"
                  className="border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Explore Features
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Updated Features Section */}
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
              <p className="text-sm text-gray-300">All plans include a one-time setup fee of <span className="text-yellow-400 font-semibold">$500</span> for custom app development</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                setupIncludes: [
                  "Custom app development",
                  "Basic branding integration",
                  "Installation support",
                  "1 display configuration"
                ],
                monthlyPrice: "$49",
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
                  "Custom app development",
                  "Advanced branding integration",
                  "Installation & training",
                  "Up to 3 display configurations"
                ],
                monthlyPrice: "$99",
                monthlyFeatures: [
                  "All Starter features",
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
                  "Custom app development",
                  "Premium branding integration",
                  "Full team training",
                  "Unlimited display configurations",
                  "Custom feature development"
                ],
                monthlyPrice: "Custom",
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
                  <p className="text-lg font-semibold text-yellow-400">
                    {plan.title === "Pro" ? "Starting at $500" : "$500"}
                  </p>
                </div>

                {/* Monthly section */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Monthly support & features:</p>
                  <p className="text-3xl font-bold mb-4 text-yellow-400">
                    {plan.monthlyPrice}
                    <span className="text-sm font-normal text-gray-400">/month</span>
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
        </div>
      </section>

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
            <motion.p 
              className="text-gray-400"
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
      `}</style>
    </main>
  );
} 