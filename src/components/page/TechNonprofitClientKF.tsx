'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { TechNonprofitNavKF } from '@/components/workshop/TechNonprofitNavKF';
import DecorativeDivider from '@/components/common/DecorativeDivider';
import { 
  BarChart, 
  MapPin, 
  Users, 
  TrendingUp, 
  RefreshCw, 
  Calendar,
  ArrowRight,
  ChevronRight,
  Building2,
  Rocket,
  Lightbulb,
  BarChart2,
  Cpu,
  Network,
  Zap,
  Target,
  Heart,
  Sparkles,
  ChevronDown,
  DollarSign,
  LineChart,
  Database,
  Brain,
  BookOpen,
  Wrench,
  FileText,
  Share2,
} from 'lucide-react';
import BudgetChart from '@/components/visualizations/BudgetChart';
import WorkshopsMap from '@/components/visualizations/WorkshopsMap';
import ImpactMetrics from '@/components/visualizations/ImpactMetrics';
import KFProjectRoadmap from '@/components/visualizations/KFProjectRoadmap';
import CapacityFormula from '@/components/visualizations/CapacityFormula';
import ROIComparison from '@/components/visualizations/ROIComparison';
import PrinciplesCarousel from '@/components/visualizations/PrinciplesCarousel';

// Budget data
const budgetData = {
  staff: {
    label: "Staff (68%)",
    value: 82500,
    items: [
      { label: "2 Co-Founders FT", value: 52500, description: "9 months of salaries for development, teaching & outreach" },
      { label: "Pop-Up Teaching Corps", value: 24000, description: "6 local mentors, 144 paid hours" },
      { label: "Community Liaison", value: 6000, description: "0.25 FTE for neighborhood engagement" }
    ]
  },
  app: {
    label: "App/CRM/Signage (14%)",
    value: 14000,
    items: [
      { label: "React + Supabase CMS", value: 6000, description: "Open-source code with future license revenue" },
      { label: "n8n + PostHog + HubSpot", value: 4200, description: "18 months of AI workflows & analytics" },
      { label: "Streamlabs Ultra", value: 3800, description: "12 months + paid camera operators" }
    ]
  },
  hardware: {
    label: "Hardware (6%)",
    value: 4400,
    items: [
      { label: "Lenovo Legion Laptop", value: 2000, description: "Development & demo machine" },
      { label: "Raspberry Pi Kits", value: 2400, description: "12 signage kits with mounts" }
    ]
  },
  workshop: {
    label: "Workshop Ops (8%)",
    value: 8400,
    items: [
      { label: "8 Free Workshops", value: 8400, description: "Includes documentation, and snacks" }
    ]
  },
  infra: {
    label: "Infra & Insurance (4%)",
    value: 4200,
    items: [
      { label: "Van Rentals & Insurance", value: 4200, description: "Reach 8 neighborhoods, off-grid capability" }
    ]
  }
};

// Workshop data
const workshopData = [
  {
    host: "Bakehouse Art Complex",
    quarter: "Q3 '25",
    workshops: [
      "GPT-4o on $0 budget",
      "Gen-4 Storyboarding",
      "Prompt Gym"
    ],
    activation: "Night-wall projection of workshop outputs",
    reach: { inPerson: 60, stream: 300 }
  },
  {
    host: "Edge Zones",
    quarter: "Q4 '25",
    workshops: [
      "Community Archives × Stable Diffusion",
      "AI Mural Mapping",
      "Canva-AI Meme Ethics"
    ],
    activation: "Block-party DJ set + AI visuals",
    reach: { inPerson: 75, stream: 250 }
  },
  {
    host: "PAMM",
    quarter: "Q4 '25",
    workshops: [
      "Voice-clone captions for accessibility",
      "Curating AI in museums"
    ],
    activation: "AI on the Terrace outdoor screening",
    reach: { inPerson: 400, stream: 500 }
  },
  {
    host: "NWSA",
    quarter: "Q1 '26",
    workshops: [
      "No-GPU Short-Film Pipeline",
      "GitHub Copilot for Performance"
    ],
    activation: "5-hr hackathon; judged by faculty",
    reach: { inPerson: 90, stream: 600 }
  },
  {
    host: "FIU AI Hub",
    quarter: "Q1 '26",
    workshops: [
      "AI Ads 101 (free tiers)",
      "Latinx Data-bias Fixathon"
    ],
    activation: "Pop-up signage board demo",
    reach: { inPerson: 80, stream: 400 }
  },
  {
    host: "UM I-Lab",
    quarter: "Q1 '26",
    workshops: [
      "Runway Gen-4 for Docs",
      "Carbon-impact calculator workshop"
    ],
    activation: "Hybrid panel with Green-tech org",
    reach: { inPerson: 100, stream: 700 }
  }
];

// Impact data by vertical
const impactData = {
  artists: {
    partners: ["Bakehouse", "Edge Zones", "Locust Projects"],
    kpi: "100 artists open AI accounts; 30 grant-ready proposals",
    path: "8 venues license signage SaaS ($4K/yr sustaining income)"
  },
  film: {
    partners: ["UM Cinema", "Miami Film Fest", "O-Cinema"],
    kpi: "8 AI-audited shorts; avg $8K VFX saving",
    path: "AI24 Seal required by 2 SE-US festivals"
  },
  education: {
    partners: ["NWSA", "FIU", "UM", "MDC Wolfson"],
    kpi: "3 schools embed AI24 modules → 400 students/yr",
    path: "Adoption in 6 US & 2 EU art programs"
  },
  brands: {
    partners: ["The Community", "República Havas", "Alma DDB"],
    kpi: "2 pilot ads cut turnaround 40%",
    path: "$60K/yr in B2B studio-in-a-box rollouts"
  },
  institutions: {
    partners: ["PAMM", "Vizcaya", "Miami Book Fair"],
    kpi: "PAMM & Book Fair display signage; share rubric",
    path: "4 additional orgs subscribe to ethics rubric service"
  },
  research: {
    partners: ["FIU AI Hub", "MAGIC (MDC)", "CodeArt Miami"],
    kpi: "Release open-source Watermark plugin → 150 dl",
    path: "500+ downloads, 20 paid support contracts"
  }
};

// CRM funnel data
const crmData = {
  capture: {
    label: "Capture",
    lift: "QR on signage auto-tags interest",
    benefit: "KF scholarship coupon auto-applies; equity tracking"
  },
  nurture: {
    label: "Nurture",
    lift: "GPT-powered email variance in EN/ES/HT",
    benefit: "Doubles open-rate for bilingual artists"
  },
  conversion: {
    label: "Conversion",
    lift: "AI agent books 1-on-1 pre-workshop calls",
    benefit: "Increases attendance among first-gen students"
  },
  feedback: {
    label: "Feedback",
    lift: "PostHog event hooks feed Tableau dashboards",
    benefit: "Knight sees real-time impact heat-map"
  }
};

// Sustainability data
const sustainabilityData = {
  seed: {
    label: "Knight Seed",
    value: 99800,
    description: "Pays people, builds signage CMS, launches pop-ups"
  },
  workshops: {
    label: "Free Workshops",
    value: 0,
    description: "Drive memberships (Yr 1 free, $49 renew Yr 2)"
  },
  signage: {
    label: "Signage SaaS",
    value: 39000,
    description: "Non-profit ($99) and agency ($149) licenses"
  },
  licensing: {
    label: "Tool Licensing",
    value: 60000,
    description: "Agency/University tool-licensing + audits"
  },
  microgrants: {
    label: "Micro-grants",
    value: 0,
    description: "Spark alumni-run events that feed more content"
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function TechNonprofitClientKF() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <main className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <TechNonprofitNavKF />

      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-sm font-medium text-blue-400">
                Human-Centric Digital Capacity
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              AI24 Operating Ethos
            </h1>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Building sustainable digital capacity through human-centered technology
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Brain}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Digital Capacity Framework</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Our comprehensive approach to building sustainable digital capabilities
            </p>
          </motion.div>
          <CapacityFormula />
        </div>
      </section>

      <DecorativeDivider 
        icon={DollarSign}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* ROI Section */}
      <section id="roi" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Impact & ROI</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              25¢ technology → 150¢ impact: our ROI mechanic
            </p>
          </motion.div>
          <ROIComparison />
        </div>
      </section>

      <DecorativeDivider 
        icon={Target}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Principles Section */}
      <section id="principles" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Guiding Principles</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Core values we bake into every spend
            </p>
          </motion.div>

          <PrinciplesCarousel />
        </div>
      </section>

      <DecorativeDivider 
        icon={Heart}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Key Take-aways</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Core messages for the Knight panel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "We're not asking for gadgets; we're funding human capability.",
              "Our lean stack keeps 70%+ of dollars in Miami paychecks, stipends, and public programming.",
              "The same dollars echo through open-source toolkits, license revenue that sustains the mission, and a signage platform that lets every partner broadcast opportunities.",
              "Digital capacity = confident creators + agile tech, not closets of aging hardware."
            ].map((takeaway, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>{takeaway}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Sparkles}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Detailed Budget Breakdown</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Transparent allocation of funds for maximum community impact
            </p>
          </motion.div>
          <BudgetChart />
        </div>
      </section>

      <DecorativeDivider 
        icon={DollarSign}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Budget Impact Spacer */}
      <section className="py-20 relative overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5' 
            : 'bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5'
        }`} />
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <p className={`text-2xl md:text-3xl font-medium leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              "Our lean stack keeps <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>70%+</span> of dollars in Miami paychecks, stipends, and public programming. Every dollar spent on tools is matched by <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>three dollars</span> invested in human capacity."
            </p>
          </motion.div>
        </div>
      </section>

      <DecorativeDivider 
        icon={Users}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
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
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Workshop Implementation</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              24-Workshop & Pop-Up Activation Grid across South Florida
            </p>
          </motion.div>
          <WorkshopsMap />
        </div>
      </section>

      <DecorativeDivider 
        icon={Users}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Impact Metrics Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Impact Metrics</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Measuring success through quantifiable outcomes and community growth
            </p>
          </motion.div>
          <ImpactMetrics />
        </div>
      </section>

      <DecorativeDivider 
        icon={BarChart}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />

      {/* Project Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Project Timeline</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}>
              Strategic implementation roadmap from launch to sustainability
            </p>
          </motion.div>
          <KFProjectRoadmap />
        </div>
      </section>

      <DecorativeDivider 
        icon={Rocket}
        gradientColors={{
          from: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
          via: theme === 'dark' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(124, 58, 237, 0.1)',
          to: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'
        }}
        iconColor={theme === 'dark' ? 'text-blue-400/50' : 'text-blue-600/50'}
      />
    </main>
  );
} 