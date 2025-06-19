'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import {
  ChevronLeft,
  Brain,
  ArrowRight,
  Target,
  Users,
  Zap,
  Shield,
  Lightbulb,
  Play,
  X,
  ChevronRight,
  ChevronLeft as ChevronLeftIcon,
  Smartphone,
  Monitor,
  Globe,
  Sparkles,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const toolkitSteps = [
  {
    step: "Step 1",
    title: "Discover Your AI Potential",
    description: "Start your AI journey with our guided assessment to identify your creative goals and technical comfort level.",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299467/ai24/app/ai24-tookit-step1_k2pcgs.png",
    features: [
      "Personalized AI readiness assessment",
      "Creative goal identification",
      "Technical skill evaluation",
      "Custom learning path creation"
    ],
    icon: Target,
    color: "text-[#A4FF4E]"
  },
  {
    step: "Step 2",
    title: "Choose Your Tools",
    description: "Select from our curated collection of AI tools designed specifically for creative professionals and community builders.",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299463/ai24/app/ai24-tookit-step2_xk85dd.png",
    features: [
      "Curated AI tool recommendations",
      "Free and open-source options",
      "Ethical AI guidelines",
      "Tool comparison matrix"
    ],
    icon: Brain,
    color: "text-[#3B82F6]"
  },
  {
    step: "Step 3",
    title: "Learn & Practice",
    description: "Master your chosen tools through hands-on workshops, tutorials, and real-world project applications.",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299462/ai24/app/ai24-tookit-step3_ailctv.png",
    features: [
      "Interactive workshops",
      "Step-by-step tutorials",
      "Project-based learning",
      "Community support"
    ],
    icon: Zap,
    color: "text-[#EC4899]"
  },
  {
    step: "Step 4",
    title: "Create & Share",
    description: "Apply your AI skills to create meaningful projects and share your knowledge with the community.",
    image: "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299466/ai24/app/ai24-tookit-step4_eihegs.png",
    features: [
      "Project showcase platform",
      "Community collaboration",
      "Knowledge sharing",
      "Impact measurement"
    ],
    icon: Users,
    color: "text-[#8B5CF6]"
  }
];

const toolkitFeatures = [
  {
    title: "Accessible Design",
    description: "Built with accessibility in mind - ASL interpretation, screen reader support, and intuitive navigation",
    icon: Shield,
    color: "text-[#A4FF4E]"
  },
  {
    title: "Bilingual Support",
    description: "Full Spanish and English support for Miami's diverse creative community",
    icon: Globe,
    color: "text-[#3B82F6]"
  },
  {
    title: "Mobile-First",
    description: "Optimized for smartphones and tablets - learn AI anywhere, anytime",
    icon: Smartphone,
    color: "text-[#EC4899]"
  },
  {
    title: "Open Source",
    description: "All tools and resources are freely available and can be customized for your needs",
    icon: Sparkles,
    color: "text-[#8B5CF6]"
  }
];

export default function AIToolkitsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [
    "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299636/ai24/app/ai24-tookit_hjvmlt.png",
    "https://res.cloudinary.com/dck5rzi4h/image/upload/v1750299636/ai24/app/ai24-tookit-stands_sgjmob.png",
    ...toolkitSteps.map(step => step.image)
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <TechNonprofitNavKF />

      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#232323] text-[#A4FF4E] border border-[#A4FF4E] transition-colors shadow-neon"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Overview
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <Brain className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                AI Toolkit Program
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Human-Ready AI Toolkits
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Curated AI tools designed with human needs in mind—accessible, ethical, and empowering for Miami's creative community
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Brain}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Toolkit Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your AI Journey Starts Here</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              A comprehensive toolkit designed to make AI accessible, ethical, and empowering for everyone
            </p>
          </motion.div>

          {/* Image Gallery */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl border-2 border-[#A4FF4E] shadow-neon"
              >
                <img
                  src={allImages[currentImageIndex]}
                  alt="AI Toolkit Overview"
                  className="w-full h-64 md:h-96 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedStep(0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">AI Toolkit Overview</h3>
                    <p className="text-[#A4FF4E]/90">Click to explore our comprehensive AI toolkit</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-[#A4FF4E]' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Toolkit Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {toolkitFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className={`w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center`}>
                  {React.createElement(feature.icon, {
                    className: `${feature.color} w-7 h-7`
                  })}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#A4FF4E]">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Toolkit Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your 4-Step AI Journey</h2>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              From discovery to creation - follow our proven path to AI mastery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {toolkitSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedStep(index)}
              >
                {/* Connection Line */}
                {index < toolkitSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#A4FF4E]/60 z-0"></div>
                )}

                <div className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/90 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${step.color.replace('text-', 'bg-')}/20 flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(step.icon, {
                        className: `${step.color} w-6 h-6`
                      })}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[#A4FF4E]/80">{step.step}</div>
                      <div className={`text-xl font-bold ${step.color}`}>{step.title}</div>
                    </div>
                    <Play className="w-5 h-5 text-[#A4FF4E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A4FF4E]"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Preview Image */}
                  <div className="mt-4 relative overflow-hidden rounded-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Lightbulb}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div className="p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A4FF4E]">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join Miami's creative community in mastering AI tools that empower rather than replace human creativity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/grant/knight-foundation/workshops"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Join a Workshop
                </Link>
                <Link
                  href="/grant/knight-foundation"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  Back to Overview
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Popup Modal */}
      <AnimatePresence>
        {selectedStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border-2 border-[#A4FF4E] rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${toolkitSteps[selectedStep]?.color.replace('text-', 'bg-')}/20 flex items-center justify-center`}>
                      {selectedStep !== null && React.createElement(toolkitSteps[selectedStep].icon, {
                        className: `${toolkitSteps[selectedStep].color} w-5 h-5`
                      })}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#A4FF4E]/80">
                        {selectedStep !== null && toolkitSteps[selectedStep].step}
                      </div>
                      <div className={`text-lg font-bold ${selectedStep !== null && toolkitSteps[selectedStep].color}`}>
                        {selectedStep !== null && toolkitSteps[selectedStep].title}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStep(null)}
                    className="text-[#A4FF4E] hover:text-[#A4FF4E]/80 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {selectedStep !== null && (
                  <>
                    <img
                      src={toolkitSteps[selectedStep].image}
                      alt={toolkitSteps[selectedStep].title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    <p className="text-gray-300 mb-4">
                      {toolkitSteps[selectedStep].description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#A4FF4E]">What you'll get:</h4>
                      {toolkitSteps[selectedStep].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-[#A4FF4E]"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 