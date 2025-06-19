"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { TechNonprofitNavKF } from "@/components/workshop/TechNonprofitNavKF";
import DecorativeDivider from "@/components/common/DecorativeDivider";
import {
  Users, FileText, Target, Brain, BarChart, Monitor, Shield, Network, Building2, DollarSign, Sparkles, ArrowRight, CheckCircle, Lightbulb
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
    content: `AI24 is an artist-led technology studio founded by Moises Sanabria (Venezuelan-born, Miami-based AI engineer and interdisciplinary artist) and Fabiola Larios (Mexican New Media Artist). We operate a micro-lab at the Bakehouse Art Complex, where we prototype open-source tools that merge ethical AI, community storytelling, and measurable impact. Our mission is to make emerging creative-tech ethical, affordable, and bilingual—especially for Latinx and Afro-Caribbean artists who are often last to get access. Since 2021 we have produced free workshops on AI image workflows, built Supabase-powered web apps, and advised nonprofits on technical website integrations for more functionality (User authentication, Shop). AI24's small size lets us iterate fast; our partnerships with Bakehouse, Edge Zones, and Locust Projects give us reach across three neighborhoods.`
  },
  {
    key: "one_sentence",
    icon: Lightbulb,
    title: "One-sentence project description (50 words)",
    content: `Moises Sanabria with the project AI24 will launch an mobile AI laboratory that deploys twelve raspberry-pi learning stations, a suitcase-laser classroom, and a bilingual Learning Management System across Bakehouse, Edge Zones, and Locust Projects, equipping Miami artists with open, ethical creative-tech and a self-funded skill & communications pipeline that keeps growing long after the grant.`
  },
  {
    key: "activities",
    icon: Brain,
    title: "Activities supported by the Fund (250 words)",
    content: [
      { subtitle: "Hardware & Installation", items: [
        "Purchase twelve Smart Sign kits—24″ IPS monitor, Raspberry Pi 5, VESA stand, wireless keyboard/mouse—packed in flight-cases.",
        "Add one LaserCube WiFi projector and one 4 000-lumen short-throw LED projector for pop-up activations.",
        "Configure PoE injectors and Wi-Fi extenders so each host has reliable networking."
      ]},
      { subtitle: "Software & Infrastructure", items: [
        "Fork AI24's MIT-licensed React | PostGres Database codebase; brand each venue instance; enable bilingual UI, QR generation, and live PostHog analytics.",
        "Build an integrated LMS portal (video lessons, quizzes, micro-badges) that plugs into the same Database project."
      ]},
      { subtitle: "Staff & Training", items: [
        "Lead Developer (0.25 FTE) codes, hardens, and documents the stack.",
        "Bilingual Coordinator (0.15 FTE) translates UI, writes captions, and manages an online help desk.",
        "Two \"Screen-Admin Skill Sprints\" (3 h each, EN/ES + captioned) teach stewards to post content, moderate, and view metrics."
      ]},
      { subtitle: "Community Engagement", items: [
        "Use LaserCube and projector for three outdoor or lobby projections that showcase AI-generated visuals, screen stats, and partner branding.",
        "Record and upload tutorials; archive all screen posts and KPI snapshots to GitHub + Airtable under CC BY."
      ]},
      { subtitle: "Logistics", items: [
        "All gear fits into two rolling cases that load into a standard cargo van, allowing the lab to serve festivals or additional venues on request."
      ]}
    ]
  },
  {
    key: "outcomes",
    icon: BarChart,
    title: "Outcomes of successful implementation (250 words)",
    content: [
      { subtitle: "Access & Skills", items: [
        "100 Miami artists complete at least one LMS micro-course on ethical AI or Smart Sign admin.",
        "300 additional community members attend or view live streamed sessions."
      ]},
      { subtitle: "Visibility", items: [
        "60 000 bilingual impressions across in-venue screens, website embeds, and QR scans.",
        "800 livestream and social-media video views of projection events."
      ]},
      { subtitle: "Equity", items: [
        "Demographic dashboard shows ≥ 40 % women-identifying and ≥ 30 % Spanish/Haitian-Creole participants.",
        "All video lessons include human-reviewed EN/ES captions; one flagship tutorial includes an ASL overlay pilot."
      ]},
      { subtitle: "Open Technology", items: [
        "Full code released on GitHub with install script; at least three external pull requests merged.",
        "GitHub/Airtable archive preserves every post, livestream file, and weekly KPI snapshot under CC BY, creating a reusable dataset for researchers."
      ]},
      { subtitle: "Sustainability", items: [
        "At least one host venue upgrades to a $39/month nonprofit license, fully covering Year-2 hosting.",
        "LMS micro-courses generate $1 500 in fee revenue, earmarked for mentor stipends."
      ]},
      { subtitle: "Scalability", items: [
        "Written playbook and parts list enable any future Knight city to replicate the lab without proprietary fees.",
        "LaserCube pop-ups generate press coverage and sponsor attention, paving the way for new partner sites."
      ]}
    ]
  },
  {
    key: "measurement",
    icon: Monitor,
    title: "How we'll know we reached those outcomes",
    content: `Impact is tracked by an automated Tableau dashboard that pulls directly from: PostHog analytics (screen / web views, QR scans), Supabase tables (course_completion, user roles), YouTube & Streamlabs APIs (livestream views), and an IR beam foot-traffic counter at Locust Projects. Demographic and language data come from optional sign-in forms and chat-language tags, aggregated and anonymized. Metrics refresh every six hours, and Knight reviewers receive a weekly digest email generated by a Supabase Edge Function. Pull-request counts and open-source forks are monitored via the GitHub REST API. A green "Hosting Paid" indicator lights up when Stripe records the first nonprofit license payment. Because all raw data is stored in GitHub/Airtable and the dashboard link is public, anyone can audit or replicate our outcome calculations.`
  },
  {
    key: "sustainability",
    icon: Shield,
    title: "Sustaining outcomes beyond the grant",
    content: `The WebApp is MIT-licensed and costs <$30/month to self-host, but most venues prefer convenience. A $39/month nonprofit SaaS tier covers Supabase/PostHog costs and funds minor upgrades. Optional premium modules (sponsor slides, multi-venue dashboard) provide upsell revenue, while $9–$29 LMS micro-courses generate cash for mentor stipends. Because hardware is commodity and tutorials are Creative Commons, new venues can join the network cheaply, driving additional subscriptions. If all three pilot hosts convert, Year-2 hosting and bug-fix time are entirely community-funded.`
  },
  {
    key: "partners",
    icon: Network,
    title: "Project partners",
    content: [
      { subtitle: "Bakehouse Art Complex", items: ["provides a lab studio, three staff stewards, venue and A/V for one skill sprint, and in-kind childcare/snacks."] },
      { subtitle: "Edge Zones", items: ["hosts a street-party projection; supplies outdoor wall space and community marketing."] },
      { subtitle: "Locust Projects", items: ["supplies lobby install space, foot-traffic counter, and marketing list; co-hosts the second skill sprint."] }
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
              AI24 Mobile Laboratory
            </h1>
            <p className="text-xl text-[#A4FF4E]/80 max-w-3xl mx-auto">
              Complete proposal for Knight Foundation Art + Tech Expansion Fund
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
                    <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        </React.Fragment>
      ))}
      <DecorativeDivider
        icon={Sparkles}
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
            className="text-center"
          >
            <div className="p-8 rounded-xl border-2 border-[#A4FF4E] bg-black/80 text-white shadow-neon">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A4FF4E]">
                Ready to Support Our Mission?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in creating sustainable, accessible AI education for Miami's creative community
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