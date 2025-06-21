"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { TechNonprofitNavKF } from "@/components/workshop/TechNonprofitNavKF";
import DecorativeDivider from "@/components/common/DecorativeDivider";
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
    title: "Tell us more about yourself or your organization (150 words)",
    content: `AI24 is an artist-run tech studio launched by Moises Sanabria (Venezuelan-born AI engineer / new-media artist) and Fabiola Larios (Mexican new-media artist). From a micro-lab inside the Bakehouse Art Complex we build bilingual, ethics-first creative tools that Latinx and Afro-Caribbean artists can actually afford. Since 2020 we've:
run free AI-art workshop sessions in English & Spanish,
built web apps (AI art, event signage and learning management systems), and
helped cultural organizations broadcast their programs.
Our model is "open core, sustainable extras": the base code is released for non-profit use, while premium hosting and analytics fund updates. Tutorials are CC BY-NC so teachers can share them freely. Small by choice, we iterate fast and test in the wild—first at Bakehouse, then Locust Projects (Little Haiti). These partnerships give our AI lab real neighborhood reach without big overhead.`
  },
  {
    key: "one_sentence",
    icon: Lightbulb,
    title: "How would you describe your project in a sentence? (50 words)",
    content: `Launch a mobile AI laboratory that deploys 2 museum-grade Smart Signs, a 12 AI mobile learning stations, and a bilingual Learning Management System across Bakehouse, Locust Projects, and beyond—equipping Miami artists with open, ethical creative-tech and a self-funded skill & communications pipeline that keeps growing long after the grant.`
  },
  {
    key: "activities",
    icon: Brain,
    title: "Describe the activities that would be carried out with support from the Knight Art + Tech Expansion Fund. (250 words)",
    content: [
      { subtitle: "Tech Build", items: [
        "Launch an open-core website for each host (React + Supabase) with QR links and live visitor stats.",
        "Embed a Learning Portal featuring three founder-authored micro-courses—Web-Design, Ethical Creative AI, SEO Presence—complete with videos, quizzes, and mobile friendly."
      ]},
      { subtitle: "Hardware Roll-out", items: [
        "Install 2 museum-grade Smart Signs (Bakehouse & Locust lobbies) to broadcast events.",
        "Assemble 12 Raspberry-Pi \"learning stations,\" laptop-sized kits used in workshops so participants can learn and interact along and preview results instantly."
      ]},
      { subtitle: "Staff & Training", items: [
        "Lead Tech Developer (part-time) builds, secures, and documents the stack.",
        "Bilingual Tech Coordinator (part-time) teaches, host, event representative assistant.",
        "Smart Sign Skill Sprints (2 hrs, EN/ES) so stewards learn to post content, moderate feeds, and read metrics."
      ]},
      { subtitle: "Community Engagement", items: [
        "Take a portable LaserCube and short-throw projector to three pop-ups, projecting AI visuals and partner branding.",
        "Record every session; upload tutorials and weekly KPI snapshots to a public GitHub archive under CC BY-NC."
      ]},
      { subtitle: "Logistics", items: [
        "Smart Signs, Pi kits, laser, and projector fit into two rolling cases that slide into a standard cargo van, letting the lab reach festivals or future partner sites on short notice.",
        "Deliver bilingual tech platform, hands-on training and public demos that transform hardware into lasting community capacity."
      ]}
    ]
  },
  {
    key: "outcomes",
    icon: BarChart,
    title: "Describe the outcomes that would result from successful implementation of the activities described above. (250 words)",
    content: [
      { subtitle: "Access & Skills", items: [
        "At least 200 Miami artists finish one LMS micro-course on Ethical AI, SEO, Web Design, or Smart Sign User; another 400 community members attend or watch a streamed workshop.",
        "Graduates earn digital badges they can add to résumés and grant apps."
      ]},
      { subtitle: "Visibility", items: [
        "Smart Signs, web embeds, and QR flyers generate 40 000 bilingual impressions; three LaserCube pop-ups and archived streams add another 600 replay views, giving partners a clear public-reach metric."
      ]},
      { subtitle: "Equity", items: [
        "The live dashboard shows ≥ 40 % women-identifying participants and ≥ 30 % Spanish or Haitian-Creole speakers.",
        "All videos ship with human-checked EN/ES captions; one flagship tutorial pilots an ASL overlay, setting a future standard."
      ]},
      { subtitle: "Open Tech", items: [
        "All code lands on GitHub under MIT; weekly data snapshots are CC BY."
      ]},
      { subtitle: "Sustainability", items: [
        "At least one host upgrades to the $39/month nonprofit license, covering Year-2 hosting costs.",
        "Micro-courses bring in $1.5 K, earmarked for mentor stipends and new lesson production."
      ]},
      { subtitle: "Scalability", items: [
        "A public parts list and step-by-step playbook let any future Knight city replicate the lab for under $1 500 in hardware.",
        "LaserCube activations will be pitched to at least one additional venue, seeding the next rollout site.",
        "Together these outcomes tie hardware, software, and human fluency into a repeatable, transparent model—exactly the digital capacity Knight seeks to build."
      ]}
    ]
  },
  {
    key: "measurement",
    icon: Monitor,
    title: "How will you know this project led to those outcomes?",
    content: `A public Data Analytics (Looker Studio dashboard) pulls live data from three automated feeds:
1. Product Analytics (PostHog) logs screen views and QR-code hits for both Smart Signs and the web application.
2. Database (Supabase) captures LMS course completions plus anonymous language and gender tags from an opt-in sign-in form.
3. YouTube / Streamlabs adds total livestream minutes watched and peak-concurrent viewers.
A Supabase Edge Function refreshes the source sheet every every day and pushes a weekly CSV snapshot to a public GitHub repo. GitHub's API also lists outside pull-requests and forks, giving Knight an open-source score in real time. The dashboard link is pinned on both Smart Signs once a day so visitors can verify the numbers themselves. No paid software, no hidden data—anyone can audit, remix, or research the figures.`
  },
  {
    key: "sustainability",
    icon: Shield,
    title: "How will you sustain the positive outcomes of the effort beyond the funding period? If this is not intended to be a sustainable effort, please explain why.",
    content: `Bakehouse Art Complex hosts the lab studio, assigns three staff stewards, and donates A/V for four Skill Sprints.
Locust Projects provides lobby display space, pushes calls to its 12 K-subscriber list, and co-leads the second workshop block.
We're also expanding ties—built through prior workshops—with five Miami institutions:
Miami Dade College AI Center, New World School of the Arts, Code/Art, FIU College of Communication, Edge Zones.
This network spans four Miami neighborhoods and the full K-12-to-graduate pipeline, amplifying impact without adding cost to the Knight budget.`
  },
  {
    key: "partners",
    icon: Network,
    title: "Who are your partners in this project?",
    content: [
      { subtitle: "Bakehouse Art Complex", items: ["hosts the lab studio, assigns three staff stewards, and donates A/V for four Skill Sprints."] },
      { subtitle: "Locust Projects", items: ["provides lobby display space, pushes calls to its 12 K-subscriber list, and co-leads the second workshop block."] },
      { subtitle: "Expanding Network", items: [
        "Miami Dade College AI Center",
        "New World School of the Arts", 
        "Code/Art",
        "FIU College of Communication",
        "Edge Zones"
      ]},
      { subtitle: "Network Impact", items: ["This network spans four Miami neighborhoods and the full K-12-to-graduate pipeline, amplifying impact without adding cost to the Knight budget."] }
    ]
  },
  {
    key: "budget",
    icon: DollarSign,
    title: "Budget & Revenue Summary",
    content: [
      "Total project budget: $24 850",
      "Knight-eligible cash items (hardware, infra, dev, archive, contingency): $24 850",
      "Funding requested from Knight: $24 850",
      "How other revenue will be raised: The three host venues have confirmed in-kind support letters covering space rental, snacks, and volunteer camera ops"
    ]
  }
];

export default function KnightFoundationProposalPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
          Back to Overview
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
              AI24 Mobile AI Laboratory
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Knight Art + Tech Expansion Fund Proposal
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
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  {Array.isArray(section.content) ? (
                    section.content.every(
                      (item) => typeof item === 'object' && 'subtitle' in item && 'items' in item
                    ) ? (
                      // Array of objects with subtitle/items
                      section.content.map((sub: any, i: number) => (
                        <div key={sub.subtitle} className="mb-6">
                          <h3 className="text-lg font-semibold text-[#A4FF4E] mb-2">{sub.subtitle}</h3>
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
                      // Array of strings
                      <ul className="space-y-2">
                        {section.content.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-[#A4FF4E] mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  ) : (
                    // String content
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {section.content}
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
                Ready to Support Digital Capacity?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in building Miami's first sustainable creative-tech infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/grant/knight-foundation"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium bg-[#A4FF4E] text-black hover:bg-[#A4FF4E]/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                  Back to Overview
                </Link>
                <Link
                  href="/grant/knight-foundation/budget"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium border border-[#A4FF4E] text-[#A4FF4E] hover:bg-[#A4FF4E]/10 transition-colors"
                >
                  <DollarSign className="w-5 h-5" />
                  View Budget Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 