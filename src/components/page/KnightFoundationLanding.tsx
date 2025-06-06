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
import KnightFoundationProposalPage from './KnightFoundationProposalPage';

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
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
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
              Knight-seeded pilot turning idle screens into culture hubs
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/grant/knight-foundation/pilot"
                className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
              >
                See the 1 Year Pilot
              </Link>
              <Link
                href="/grant/knight-foundation/proposal.pdf"
                className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
              >
                Download 1-page PDF
              </Link>
            </div>
          </motion.div>
        </div>
        <MicroMotif type="wiggle" className="absolute bottom-10 left-10 text-[#A4FF4E] z-10" />
        <MicroMotif type="binary" className="absolute top-10 right-10 text-[#A4FF4E] z-10" />
      </section>

      <ManifestoStrip />

      {/* Animated Metrics Bar with narrative header */}
      <KFMetricsBar />

      {/* Principles Section */}
      <KFPrinciplesSection />

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: 'rgba(59, 130, 246, 0.1)',
          via: 'rgba(147, 51, 234, 0.1)',
          to: 'rgba(59, 130, 246, 0.1)'
        }}
        iconColor="text-blue-400/50"
      />

      {/* Program Details Grid */}
      <KFProgramDetailsGrid />

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: 'rgba(59, 130, 246, 0.1)',
          via: 'rgba(147, 51, 234, 0.1)',
          to: 'rgba(59, 130, 246, 0.1)'
        }}
        iconColor="text-blue-400/50"
      />

      {/* Proposal Section (imported) */}
      <section id="proposal" className="py-20">
        <div className="container mx-auto px-4">
          <KnightFoundationProposalPage />
        </div>
      </section>

      {/* Spinning/3D Carousel Clinics Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#A4FF4E]">Skill</span> Clinics
          </h2>
          <ClinicsCarousel />
        </div>
      </section> */}

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
                  href="/grant/knight-foundation/ethics"
                  className="inline-flex items-center gap-2 text-[#A4FF4E] hover:underline"
                >
                  See our Responsible-AI rubric
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
                href="/grant/knight-foundation/support"
                className="px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
              >
                Sign Support Letter
              </Link>
              <Link
                href="/grant/knight-foundation/demo"
                className="px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
              >
                Book Demo
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