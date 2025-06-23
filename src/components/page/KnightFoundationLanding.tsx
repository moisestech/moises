'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { HeroSection } from '@/components/knight-foundation/HeroSection';
import { 
  Code,
  Users,
  Calendar,
  DollarSign,
  Clock,
  BarChart,
  Tv,
  Target,
  ArrowRight,
  Brain,
  Heart,
  Sparkles,
  FileText,
  Network,
  Play,
  CheckCircle,
} from 'lucide-react';
import { MicroMotif } from '../shared/MicroMotif';
import { ChromeIcon } from '../shared/ChromeIcon';
import { NeonText } from '../shared/NeonText';
import { ChromeButton } from '../shared/ChromeButton';
import { CursorTrail } from '../shared/CursorTrail';
import '../../styles/theme.css';
import { KFPrinciplesSection } from '@/components/knight-foundation/KFPrinciplesSection';
import { KFProgramDetailsGrid } from '@/components/knight-foundation/KFProgramDetailsGrid';
import { KFMetricsBar } from '@/components/knight-foundation/KFMetricsBar';
import { ControlledFlipText } from '@/components/ui/controlled-flip-text';
import { ManifestoStrip } from '@/components/proposal/ManifestoStrip';
import { ClinicsCarousel } from '@/components/proposal/ClinicsCarousel';
import AboveTheFoldAIWords3D from '@/components/knight-foundation/AboveTheFoldAIWords3D';
import { KFProposalSection } from '@/components/knight-foundation/KFProposalSection';
import { MiamiLocationsImage } from '../proposal/MiamiLocationsImage';
import { ProposalTextReveal } from '../proposal/ProposalTextReveal';
import { NeedAndSolution } from '../proposal/NeedAndSolution';
import { TimelineVertical } from '../proposal/TimelineVertical';
import { TeamGrid } from '../proposal/TeamGrid';
import { OutcomesSection } from '@/components/knight-foundation/proposal/OutcomesSection';
import { ImpactSection } from '@/components/knight-foundation/proposal/ImpactSection';
import { SustainabilitySection } from '@/components/knight-foundation/proposal/SustainabilitySection';
import { BudgetSection } from '@/components/knight-foundation/proposal/BudgetSection';
import { TimelineSection } from '@/components/knight-foundation/proposal/TimelineSection';

// Micro-motifs as SVG paths
const motifs = {
  wiggle: "M0 10 Q5 0 10 10 T20 10 T30 10 T40 10",
  binary: "M0 0 L10 0 M0 10 L10 10 M20 0 L30 0 M20 10 L30 10",
  plusMinus: "M0 5 L10 5 M5 0 L5 10 M20 5 L30 5 M25 0 L25 10"
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const pulse = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.1, 1],
    transition: { duration: 0.5 }
  }
};

// Cursor trail effect
const useCursorTrail = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { position, isVisible };
};

const KnightFoundationLanding: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { position, isVisible } = useCursorTrail();

  // Theme-aware colors
  const themeColors = {
    primary: isDark ? '#A4FF4E' : '#2563EB',
    secondary: isDark ? '#3B82F6' : '#4F46E5',
    accent: isDark ? '#EC4899' : '#7C3AED',
    background: isDark ? 'bg-black' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDark ? 'bg-black/80' : 'bg-white/80',
    cardBorder: isDark ? 'border-[#A4FF4E]' : 'border-[#2563EB]',
    buttonBg: isDark ? 'bg-[#A4FF4E]' : 'bg-[#2563EB]',
    buttonText: isDark ? 'text-black' : 'text-white',
    buttonHover: isDark ? 'hover:bg-[#A4FF4E]/90' : 'hover:bg-[#2563EB]/90',
    buttonBorder: isDark ? 'border-[#A4FF4E]' : 'border-[#2563EB]',
    buttonHoverBorder: isDark ? 'hover:bg-[#A4FF4E]/10' : 'hover:bg-[#2563EB]/10',
    shadowNeon: isDark ? 'shadow-[0_0_30px_rgba(164,255,78,0.3)]' : 'shadow-[0_0_30px_rgba(37,99,235,0.3)]'
  };

  return (
    <div className={`min-h-screen ${themeColors.background} ${themeColors.text}`}>
      <CursorTrail />
      <TechNonprofitNavKF />
      
      {/* Hero Section - Overview */}
      <HeroSection />

      <ManifestoStrip />

      <MiamiLocationsImage />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      <ProposalTextReveal />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Digital Capacity Section */}
      <section id="capacity" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Digital <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Capacity</span>
            </h2>
          </motion.div>
          
          {/* Animated Metrics Bar */}
          <KFMetricsBar />

          {/* Proposal Section with ROI focus */}
          {/* <KFProposalSection /> */}
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Program Details Grid with budget focus */}
      <KFProgramDetailsGrid />

      {/* ROI Section */}
      <section id="roi" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Return on <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Investment</span>
            </h2>
            <p className={`text-xl ${themeColors.textSecondary} max-w-3xl mx-auto`}>
              Measurable impact and sustainable growth for Miami's creative ecosystem
            </p>
          </motion.div>
          
          {/* ROI Overview Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                metric: "3x",
                label: "Impact Multiplier",
                description: "Every $1 generates $3 in community value"
              },
              {
                metric: "70%",
                label: "Local Investment",
                description: "Of budget goes directly to Miami talent"
              },
              {
                metric: "$60K",
                label: "Annual Revenue",
                description: "Projected sustainable income by 2026"
              }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${themeColors.cardBorder} ${themeColors.cardBg} ${themeColors.text} shadow-neon hover:${themeColors.shadowNeon} hover:${themeColors.cardBorder}/80 transition-all duration-300`}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  <Target className={`w-7 h-7 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`}>{item.metric}</div>
                <div className="font-medium mb-2 text-white">{item.label}</div>
                <div className="text-sm text-gray-300">{item.description}</div>
              </motion.div>
            ))}
          </div>
          
          {/* View Detailed ROI Button */}
          <div className="text-center">
            <Link
              href="/grant/knight-foundation/impact-roi"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium ${themeColors.buttonBg} ${themeColors.buttonText} ${themeColors.buttonHover} transition-colors`}
            >
              <Target className="w-5 h-5" />
              View Impact & ROI Analysis
            </Link>
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Principles Section */}
      <section id="principles" className="py-20">
        <div className="container mx-auto px-4">
          <KFPrinciplesSection />
        </div>
      </section>

      <DecorativeDivider 
        icon={DollarSign}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Budget Section */}
      <section id="budget" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Budget <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Overview</span>
            </h2>
            <p className={`text-xl ${themeColors.textSecondary} max-w-3xl mx-auto`}>
              Transparent allocation of $24,950 for maximum community impact
            </p>
          </motion.div>
          
          {/* Add Budget Details Button */}
          <div className="text-center">
            <Link
              href="/grant/knight-foundation/budget"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium ${themeColors.buttonBg} ${themeColors.buttonText} ${themeColors.buttonHover} transition-colors`}
            >
              <DollarSign className="w-5 h-5" />
              View Detailed Budget
            </Link>
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Calendar}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Workshops Section */}
      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Skill <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Clinics</span>
            </h2>
            <p className={`text-xl ${themeColors.textSecondary} max-w-3xl mx-auto`}>
              24 free workshops across Miami's creative community
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI Fundamentals",
                description: "Introduction to ethical AI tools and workflows",
                icon: Brain,
                link: "/grant/knight-foundation/workshops"
              },
              {
                title: "Smart Signs",
                description: "Digital signage and community engagement",
                icon: Tv,
                link: "/grant/knight-foundation/smart-signs"
              },
              {
                title: "Sustainability",
                description: "Building lasting impact and revenue streams",
                icon: Heart,
                link: "/grant/knight-foundation/sustainability"
              }
            ].map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 ${themeColors.cardBorder} ${themeColors.cardBg} ${themeColors.text} shadow-neon hover:${themeColors.shadowNeon} hover:${themeColors.cardBorder}/80 transition-all duration-300`}
              >
                <div className={`w-12 h-12 mb-4 rounded-full ${isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#2563EB]/20'} flex items-center justify-center`}>
                  {React.createElement(workshop.icon, {
                    className: `${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} w-6 h-6`
                  })}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`}>{workshop.title}</h3>
                <p className={`${themeColors.textSecondary} mb-4`}>{workshop.description}</p>
                <Link
                  href={workshop.link}
                  className={`inline-flex items-center gap-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} hover:underline`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={BarChart}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Community <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Impact</span>
            </h2>
            <p className={`text-xl ${themeColors.textSecondary} max-w-3xl mx-auto`}>
              Measurable outcomes and sustainable growth for Miami's creative ecosystem
            </p>
          </motion.div>
          
          {/* Need & Solution with impact focus */}
          <NeedAndSolution />
        </div>
      </section>

      <DecorativeDivider 
        icon={Clock}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Timeline Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Project <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Timeline</span>
            </h2>
            <p className={`text-xl ${themeColors.textSecondary} max-w-3xl mx-auto`}>
              12-month implementation roadmap with key milestones
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-xl border-2 ${themeColors.cardBorder} ${themeColors.cardBg} ${themeColors.text} shadow-neon`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`}>Phase 1: Foundation (Months 1-3)</h3>
                <ul className={`space-y-2 ${themeColors.textSecondary}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                    Hardware procurement and setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                    Software development and testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                    Community partner onboarding
                  </li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl border-2 ${themeColors.cardBorder} ${themeColors.cardBg} ${themeColors.text} shadow-neon`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`}>Phase 2: Launch (Months 4-6)</h3>
                <ul className={`space-y-2 ${themeColors.textSecondary}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                    First workshops and community events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                    Smart Signs deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                    Impact measurement and optimization
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/grant/knight-foundation/roadmap"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium ${themeColors.buttonBg} ${themeColors.buttonText} ${themeColors.buttonHover} transition-colors`}
              >
                <ArrowRight className="w-5 h-5" />
                View Detailed Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Users}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Take-aways Section */}
      <section id="takeaways" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeColors.text}`}>
              Key <span className={isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}>Take-aways</span>
            </h2>
            <p className={`text-xl ${themeColors.textSecondary} max-w-3xl mx-auto`}>
              What Miami's creative community will gain from this investment
            </p>
          </motion.div>
          
          {/* Team Grid with focus on outcomes */}
          <TeamGrid />
        </div>
      </section>

      <DecorativeDivider 
        icon={Code}
        gradientColors={{
          from: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(79, 70, 229, 0.1)',
          to: isDark ? 'rgba(164, 255, 78, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={isDark ? "text-[#A4FF4E]/50" : "text-[#2563EB]/50"}
      />

      {/* Ethics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className={`text-[120px] font-bold leading-[1] tracking-tight ${themeColors.text}`}
            >
              ETHICS
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <ul className={`space-y-4 ${themeColors.textSecondary}`}>
                <li className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#2563EB]/20'} flex items-center justify-center`}>
                    <Code className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                  </div>
                  Creative Commons code
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#2563EB]/20'} flex items-center justify-center`}>
                    <BarChart className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                  </div>
                  Live equity metrics
                </li>
                <li className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-[#A4FF4E]/20' : 'bg-[#2563EB]/20'} flex items-center justify-center`}>
                    <Network className={`w-4 h-4 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'}`} />
                  </div>
                  Open API
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/grant/knight-foundation/impact-roi"
                  className={`inline-flex items-center gap-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} hover:underline`}
                >
                  View Impact Metrics
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/grant/knight-foundation/budget"
                  className={`inline-flex items-center gap-2 ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} hover:underline`}
                >
                  See Budget Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-20">
        <div className={`grid md:grid-cols-2 gap-0 ${themeColors.background}`}>
          <div className={`p-12 ${isDark ? 'bg-gradient-to-r from-[#A4FF4E]/20 to-transparent' : 'bg-gradient-to-r from-[#2563EB]/20 to-transparent'}`}>
            <h2 className={`text-3xl font-bold mb-4 ${themeColors.text}`}>
              Knight's $24,950 sparks a self-funded, bilingual tech spine for Miami's creatives. Ready to light the fuse?
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/grant/knight-foundation/proposal"
                className={`px-8 py-4 rounded-lg font-medium ${themeColors.buttonBg} ${themeColors.buttonText} ${themeColors.buttonHover} transition-colors`}
              >
                View Full Proposal
              </Link>
              <Link
                href="/grant/knight-foundation/roadmap"
                className={`px-8 py-4 rounded-lg font-medium border ${themeColors.buttonBorder} ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} ${themeColors.buttonHoverBorder} transition-colors`}
              >
                See Timeline
              </Link>
              <Link
                href="/grant/knight-foundation/budget"
                className={`px-8 py-4 rounded-lg font-medium border ${themeColors.buttonBorder} ${isDark ? 'text-[#A4FF4E]' : 'text-[#2563EB]'} ${themeColors.buttonHoverBorder} transition-colors`}
              >
                <DollarSign className="w-5 h-5" />
                Budget Details
              </Link>
            </div>
          </div>
          <div className={`p-12 ${themeColors.background}`} />
        </div>
      </section>
    </div>
  );
};

export default KnightFoundationLanding; 