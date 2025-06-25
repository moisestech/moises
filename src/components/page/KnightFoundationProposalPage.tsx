"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechNonprofitNavKF } from "@/components/workshop/TechNonprofitNavKF";
import DecorativeDivider from "@/components/common/DecorativeDivider";
import { proposalTranslations } from "@/translations/proposal";
import {
  Users, FileText, Target, Brain, BarChart, Monitor, Shield, Network, Building2, DollarSign, Sparkles, ArrowRight, CheckCircle, Lightbulb, Globe, Award, Clock
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const SECTIONS = [
  {
    key: "about",
    icon: Users,
    titleKey: "aboutTitle",
    contentKey: "about"
  },
  {
    key: "one_sentence",
    icon: Lightbulb,
    titleKey: "oneSentenceTitle",
    contentKey: "oneSentence"
  },
  {
    key: "activities",
    icon: Brain,
    titleKey: "activitiesTitle",
    content: [
      { subtitleKey: "techBuild", items: [
        "Launch an open-core website for each host (React + Supabase) with QR links and live visitor stats.",
        "Embed a Learning Portal featuring three founder-authored micro-courses—Web-Design, Ethical Creative AI, SEO Presence—complete with videos, quizzes, and mobile friendly."
      ]},
      { subtitleKey: "hardwareRollout", items: [
        "Install 2 museum-grade Smart Signs (Bakehouse & Locust lobbies) to broadcast events.",
        "Assemble 12 Raspberry-Pi \"learning stations,\" laptop-sized kits used in workshops so participants can learn and interact along and preview results instantly."
      ]},
      { subtitleKey: "staffTraining", items: [
        "Lead Tech Developer (part-time) builds, secures, and documents the stack.",
        "Bilingual Tech Coordinator (part-time) teaches, host, event representative assistant.",
        "Smart Sign Skill Sprints (2 hrs, EN/ES) so stewards learn to post content, moderate feeds, and read metrics."
      ]},
      { subtitleKey: "communityEngagement", items: [
        "Take a portable LaserCube and short-throw projector to three pop-ups, projecting AI visuals and partner branding.",
        "Record every session; upload tutorials and weekly KPI snapshots to a public GitHub archive under CC BY-NC."
      ]},
      { subtitleKey: "logistics", items: [
        "Smart Signs, Pi kits, laser, and projector fit into two rolling cases that slide into a standard cargo van, letting the lab reach festivals or future partner sites on short notice.",
        "Deliver bilingual tech platform, hands-on training and public demos that transform hardware into lasting community capacity."
      ]}
    ]
  },
  {
    key: "outcomes",
    icon: BarChart,
    titleKey: "outcomesTitle",
    content: [
      { subtitleKey: "accessSkills", items: [
        "At least 200 Miami artists finish one LMS micro-course on Ethical AI, SEO, Web Design, or Smart Sign User; another 400 community members attend or watch a streamed workshop.",
        "Graduates earn digital badges they can add to résumés and grant apps."
      ]},
      { subtitleKey: "visibility", items: [
        "Smart Signs, web embeds, and QR flyers generate 40 000 bilingual impressions; three LaserCube pop-ups and archived streams add another 600 replay views, giving partners a clear public-reach metric."
      ]},
      { subtitleKey: "equity", items: [
        "The live dashboard shows ≥ 40 % women-identifying participants and ≥ 30 % Spanish or Haitian-Creole speakers.",
        "All videos ship with human-checked EN/ES captions; one flagship tutorial pilots an ASL overlay, setting a future standard."
      ]},
      { subtitleKey: "openTech", items: [
        "All code lands on GitHub under MIT; weekly data snapshots are CC BY."
      ]},
      { subtitleKey: "sustainabilityOutcomes", items: [
        "At least one host upgrades to the $99/month nonprofit license, covering Year-2 hosting costs.",
        "Micro-courses bring in $1.5 K, earmarked for mentor stipends and new lesson production."
      ]},
      { subtitleKey: "scalability", items: [
        "A public parts list and step-by-step playbook let any future Knight city replicate the lab for under $1 500 in hardware.",
        "LaserCube activations will be pitched to at least one additional venue, seeding the next rollout site.",
        "Together these outcomes tie hardware, software, and human fluency into a repeatable, transparent model—exactly the digital capacity Knight seeks to build."
      ]}
    ]
  },
  {
    key: "measurement",
    icon: Monitor,
    titleKey: "measurementTitle",
    contentKey: "measurement"
  },
  {
    key: "sustainability",
    icon: Shield,
    titleKey: "sustainabilityTitle",
    contentKey: "sustainability"
  },
  {
    key: "partners",
    icon: Network,
    titleKey: "partnersTitle",
    content: [
      { subtitleKey: "bakehouse", items: ["hosts the lab studio, assigns three staff stewards, and donates A/V for four Skill Sprints."] },
      { subtitleKey: "locustProjects", items: ["provides lobby display space, pushes calls to its 12 K-subscriber list, and co-leads the second workshop block."] },
      { subtitleKey: "expandingNetwork", items: [
        "Miami Dade College AI Center",
        "New World School of the Arts", 
        "Code/Art",
        "FIU College of Communication",
        "Edge Zones"
      ]},
      { subtitleKey: "networkImpact", items: ["This network spans four Miami neighborhoods and the full K-12-to-graduate pipeline, amplifying impact without adding cost to the Knight budget."] }
    ]
  },
  {
    key: "budget",
    icon: DollarSign,
    titleKey: "budgetTitle",
    content: [
      "totalBudget",
      "knightEligible",
      "fundingRequested",
      "otherRevenue"
    ]
  }
];

export default function KnightFoundationProposalPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === "dark";
  const t = proposalTranslations[language];

  return (
    <main className="min-h-screen bg-black text-white">
      <TechNonprofitNavKF />
      
      {/* Back to Main */}
      <div className="fixed top-24 left-4 z-30">
        <Link
          href="/grant/knight-foundation"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#232323] text-[#A4FF4E] border border-[#A4FF4E] transition-colors shadow-neon"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          {t.backToOverview}
        </Link>
      </div>

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#A4FF4E]/10 border border-[#A4FF4E]/30 mb-6">
              <FileText className="w-4 h-4 text-[#A4FF4E]" />
              <span className="text-sm font-medium text-[#A4FF4E]">
                Knight Foundation Proposal
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t.pageTitle}
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              {t.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {SECTIONS.map((section, idx) => (
        <React.Fragment key={section.key}>
          <DecorativeDivider
            icon={section.icon}
            gradientColors={{
              from: "rgba(164, 255, 78, 0.1)",
              via: "rgba(59, 130, 246, 0.1)",
              to: "rgba(164, 255, 78, 0.1)"
            }}
            iconColor="text-[#A4FF4E]/50"
          />
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="max-w-4xl mx-auto"
              >
                <div className="p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#A4FF4E]/20 flex items-center justify-center">
                      {React.createElement(section.icon, { className: "w-6 h-6 text-[#A4FF4E]" })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#A4FF4E]">
                        {t[section.titleKey as keyof typeof t]}
                      </h2>
                    </div>
                  </div>
                  
                  {Array.isArray(section.content) ? (
                    section.content.every(
                      (item) => typeof item === 'object' && 'subtitleKey' in item && 'items' in item
                    ) ? (
                      // Array of objects with subtitleKey/items
                      section.content.map((sub: any, i: number) => (
                        <div key={sub.subtitleKey} className="mb-6">
                          <h3 className="text-lg font-semibold text-[#A4FF4E] mb-2">
                            {t[sub.subtitleKey as keyof typeof t]}
                          </h3>
                          <ul className="space-y-2">
                            {sub.items.map((item: string, j: number) => (
                              <li key={j} className="flex items-start gap-2 text-gray-300">
                                <CheckCircle className="w-4 h-4 text-[#A4FF4E] mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      // Array of strings (budget section)
                      <ul className="space-y-2">
                        {section.content.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#A4FF4E] mt-1" />
                            <span>{t[item as keyof typeof t]}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  ) : (
                    // String content
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {t[section.contentKey as keyof typeof t]}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        </React.Fragment>
      ))}

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
                {t.readyToSupport}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {t.readyToSupportSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/grant/knight-foundation"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  {t.backToOverview}
                </Link>
                <Link
                  href="/grant/knight-foundation/budget"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  {t.viewBudgetDetails}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 