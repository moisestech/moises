'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
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

const heroWords = [
  'MAKE AI FOR ALL',
  'ETHICS BEFORE ALGORITHMS',
  'AI FOR COMMUNITY',
  'OPEN SOURCE FUTURE',
  'BILINGUAL OR BUST',
];

const KnightFoundationLanding: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { position, isVisible } = useCursorTrail();
  const [mainWordIndex, setMainWordIndex] = React.useState(0);
  const [isGlitching, setIsGlitching] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorTrail />
      <TechNonprofitNavKF />
      
      {/* Hero Section - Overview */}
      <section id="overview" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <AboveTheFoldAIWords3D className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a1a1a] z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <div
              className="mb-8 cursor-pointer select-none"
              onMouseEnter={() => setIsGlitching(true)}
              onMouseLeave={() => setIsGlitching(false)}
              onClick={() => setMainWordIndex((mainWordIndex + 1) % heroWords.length)}
            >
              <ControlledFlipText
                className={`text-[80px] md:text-[120px] font-bold leading-[1] tracking-tight text-white drop-shadow-lg ${isGlitching ? 'glitch-rgb' : ''}`}
                duration={0.5}
                delayMultiple={0.06}
                animationKey={mainWordIndex + (isGlitching ? '-glitch' : '')}
              >
                {heroWords[mainWordIndex]}
              </ControlledFlipText>
              <style jsx>{`
                .glitch-rgb {
                  text-shadow:
                    2px 0 8px #A4FF4E,
                    -2px 0 8px #3B82F6,
                    0 2px 8px #EC4899;
                  animation: glitch 0.4s infinite alternate;
                }
                @keyframes glitch {
                  0% { transform: translateX(0); }
                  20% { transform: translateX(-2px); }
                  40% { transform: translateX(2px); }
                  60% { transform: translateX(-1px); }
                  80% { transform: translateX(1px); }
                  100% { transform: translateX(0); }
                }
              `}</style>
            </div>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Knight-seeded pilot building sustainable technology infrastructure and educational live event culture hubs.
            </p>
              {/* , for Miami's creative community. */}
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/grant/knight-foundation/roadmap"
                className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
              >
                See the 1 Year Pilot
              </Link>
              <Link
                href="/grant/knight-foundation/proposal"
                className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
              >
                View Full Proposal
              </Link>
            </div>
          </motion.div>
        </div>
        <MicroMotif type="wiggle" className="absolute bottom-10 left-10 text-[#A4FF4E] z-10" />
        <MicroMotif type="binary" className="absolute top-10 right-10 text-[#A4FF4E] z-10" />
      </section>

      <ManifestoStrip />

      <MiamiLocationsImage />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      <ProposalTextReveal />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Digital <span className="text-[#A4FF4E]">Capacity</span>
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Return on <span className="text-[#A4FF4E]">Investment</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable impact and sustainable growth for Miami's creative ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Budget <span className="text-[#A4FF4E]">Overview</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent allocation of $24,850 for maximum community impact
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Calendar}
        gradientColors={{
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Skill <span className="text-[#A4FF4E]">Clinics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon hover:shadow-[0_0_30px_rgba(164,255,78,0.3)] hover:border-[#A4FF4E]/80 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                  {React.createElement(workshop.icon, {
                    className: 'text-[#A4FF4E] w-6 h-6'
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#A4FF4E]">{workshop.title}</h3>
                <p className="text-gray-300 mb-4">{workshop.description}</p>
                <Link
                  href={workshop.link}
                  className="inline-flex items-center gap-2 text-[#A4FF4E] hover:underline"
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Community <span className="text-[#A4FF4E]">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Project <span className="text-[#A4FF4E]">Timeline</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              12-month implementation roadmap with key milestones
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Phase 1: Foundation (Months 1-3)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A4FF4E]" />
                    Hardware procurement and setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A4FF4E]" />
                    Software development and testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A4FF4E]" />
                    Community partner onboarding
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
                <h3 className="text-xl font-bold mb-4 text-[#A4FF4E]">Phase 2: Launch (Months 4-6)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A4FF4E]" />
                    First workshops and community events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A4FF4E]" />
                    Smart Signs deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A4FF4E]" />
                    Impact measurement and optimization
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/grant/knight-foundation/roadmap"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Key <span className="text-[#A4FF4E]">Take-aways</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
          from: 'rgba(164, 255, 78, 0.1)',
          via: 'rgba(59, 130, 246, 0.1)',
          to: 'rgba(164, 255, 78, 0.1)'
        }}
        iconColor="text-[#A4FF4E]/50"
      />

      {/* Ethics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-[120px] font-bold leading-[1] tracking-tight text-white"
            >
              ETHICS
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    <Code className="w-4 h-4 text-[#A4FF4E]" />
                  </div>
                  Creative Commons code
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    <BarChart className="w-4 h-4 text-[#A4FF4E]" />
                  </div>
                  Live equity metrics
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                    <Network className="w-4 h-4 text-[#A4FF4E]" />
                  </div>
                  Open API
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/grant/knight-foundation/impact-roi"
                  className="inline-flex items-center gap-2 text-[#A4FF4E] hover:underline"
                >
                  View Impact Metrics
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/grant/knight-foundation/budget"
                  className="inline-flex items-center gap-2 text-[#A4FF4E] hover:underline"
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
        <div className="grid md:grid-cols-2 gap-0 bg-black">
          <div className="p-12 bg-gradient-to-r from-[#A4FF4E]/20 to-transparent">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Knight's $24,850 sparks a self-funded, bilingual tech spine for Miami's creatives. Ready to light the fuse?
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/grant/knight-foundation/proposal"
                className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
              >
                View Full Proposal
              </Link>
              <Link
                href="/grant/knight-foundation/roadmap"
                className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
              >
                See Timeline
              </Link>
            </div>
          </div>
          <div className="p-12 bg-black" />
        </div>
      </section>
    </div>
  );
};

export default KnightFoundationLanding; 