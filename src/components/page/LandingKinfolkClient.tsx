'use client'

import Link from "next/link"
import {
  ChevronRight,
  Users,
  Lightbulb,
  Award,
  Code,
  Layers,
  Cpu,
  Database,
  GitBranch,
  Zap,
  Brain,
  Shield,
  Bot,
  Workflow,
  Boxes,
  MessageSquare,
  FileText,
  BookOpen,
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// First, let's add a custom divider component between sections
const SectionDivider = () => (
  <div className="container py-8">
    <div className="flex items-center justify-center gap-4">
      <div className="h-px bg-orange-200 flex-1" />
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-orange-300" />
        <div className="h-2 w-2 rounded-full bg-orange-400" />
        <div className="h-2 w-2 rounded-full bg-orange-500" />
      </div>
      <div className="h-px bg-orange-200 flex-1" />
    </div>
  </div>
);

// Update the navigation to include active states
const navigation = [
  { name: "Overview", href: "#overview" },
  { name: "Integration Points", href: "#integration-points" },
  { name: "AI Landscape", href: "#ai-landscape" },
  { name: "Implementation", href: "#implementation" },
  { name: "Values", href: "#values" },
];

export default function LandingPage() {
  // Add state for active section
  const [activeSection, setActiveSection] = useState("overview");

  // Add scroll spy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Updated Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-black">
              Kinfolk AI Technical Workshop
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-black hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button variant="outline" size="icon" className="md:hidden border border-zinc-200">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Gradient Banner */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500"></div>
          <div className="relative container py-16 md:py-24">
            <div className="max-w-3xl space-y-5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                AI Transformation for Historical Narratives
              </h1>
              <p className="text-xl text-white">
                Technical implementation plan for leveraging Unity and AI to amplify Black & Brown historical narratives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="tel:9545884680"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-orange-600 hover:bg-white/90 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Technical Overview</h2>
              <p className="text-lg text-black/80">
                {`A comprehensive implementation plan for integrating Unity's AI capabilities`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-black/80 mb-6">
                  {`This technical workshop provides a comprehensive implementation plan for integrating Unity's AI
                  capabilities with Kinfolk's mission to preserve and amplify Black & Brown historical narratives. The
                  focus is on practical, technical solutions that can be implemented within existing resource
                  constraints.`}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Cpu className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">Unity AI Integration</h3>
                      <p className="text-sm text-black/80">
                        Leveraging Unity Muse and Sentis for historical content creation and delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">Data Pipeline Architecture</h3>
                      <p className="text-sm text-black/80">
                        Processing historical archives into AI-ready formats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-black">Implementation Codebase</h3>
                      <p className="text-sm text-black/80">
                        Technical specifications and sample code for integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-black">Key Technical Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-black">Complete Unity-AI integration architecture blueprint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-black">Working prototype framework for AI historical agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-black">Data pipeline strategy for historical content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-black">Technical implementation guide with code samples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-black">Resource requirements assessment and scaling strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Integration Points Section */}
        <section id="integration-points" className="relative py-16 md:py-20 bg-white">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Technical Integration Points</h2>
              <p className="text-lg text-black/80">
                {`Key areas where Unity and AI can enhance Kinfolk's existing experiences`}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Unity-AI Integration</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Technical architecture showing how Unity and AI can work together to enhance existing AR experiences
                  with intelligent, responsive historical content.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Educational Framework</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Technical solutions for curriculum development and standards alignment, helping educators integrate
                  historical narratives into their teaching.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Ethical Considerations</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Technical safeguards ensuring AI implementation respects the sensitivity of historical narratives and
                  maintains authenticity.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Practical Applications</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Concrete technical examples of how AI can enhance existing products, with implementation details and
                  expected outcomes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Strategic Planning</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Technical implementation roadmap with resource requirements, timeline, and key milestones for
                  successful integration.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 rounded-xl p-8 border border-zinc-200">
              <h3 className="text-xl font-semibold mb-6 text-black">AI Integration Opportunities for Kinfolk</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                  <div className="flex items-start gap-3 mb-4">
                    <MessageSquare className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-black">AI-Powered Historical Narration & Chatbots</h4>
                      <ul className="mt-2 space-y-2 text-sm text-black">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>AI-driven chatbots for conversations with historical figures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>Voice synthesis for lifelike storytelling using AI-generated historical narrations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-black">Automated Archive Processing & Curation</h4>
                      <ul className="mt-2 space-y-2 text-sm text-black">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>NLP models to process historical documents and create structured narratives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>AI-enhanced OCR to digitize old manuscripts and images for a richer database</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* AI Landscape Section */}
        <section id="ai-landscape" className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">AI Landscape 2025</h2>
              <p className="text-lg text-black/80">
                Key AI technologies that will transform historical narrative preservation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">AI Agents</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Autonomous AI systems that can perceive, decide, and act independently to achieve specific goals.
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Kinfolk Application:</span> Creating interactive historical figures that
                    can engage in meaningful conversations with users.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Neural Networks</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Computing systems inspired by biological neural networks that can learn from and make decisions based
                  on data.
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Kinfolk Application:</span> Training models on historical texts,
                    speeches, and documents to generate authentic responses and narratives.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Workflow className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Unsupervised Learning</h3>
                </div>
                <p className="text-black/80 mb-4">
                  AI systems that can find patterns in data without explicit training, discovering hidden structures in
                  historical archives.
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Kinfolk Application:</span> Discovering connections between historical
                    events and figures that might otherwise remain hidden in vast archives.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Vector Databases</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Specialized databases that store and retrieve data as mathematical vectors, enabling semantic search
                  and similarity matching.
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Kinfolk Application:</span> Creating searchable archives of historical
                    content that can be queried in natural language and find conceptually related materials.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Boxes className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Multimodal AI</h3>
                </div>
                <p className="text-black/80 mb-4">
                  AI systems that can process and generate multiple types of data (text, images, audio, video)
                  simultaneously.
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Kinfolk Application:</span> Creating immersive historical experiences
                    that combine visual recreations with contextual narration and interactive elements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Ethical AI</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Frameworks and methodologies for ensuring AI systems are developed and deployed responsibly and
                  equitably.
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Kinfolk Application:</span> Ensuring historical narratives are presented
                    accurately and respectfully, with clear distinction between fact and AI-assisted reconstruction.
                  </p>
                </div>
                <div className="mt-4 p-3 bg-rose-100 rounded-lg">
                  <p className="text-sm font-medium text-rose-800">
                    <span className="font-bold">Warning:</span> Historical AI applications must be developed with
                    community involvement to avoid perpetuating biases or misrepresenting marginalized perspectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-black">The 70% Problem in Historical AI</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 mb-6">
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-black">
                  {`"Non-engineers using AI for coding find themselves hitting a frustrating wall. They can get 70% of the way there surprisingly quickly, but that final 30% becomes an exercise in diminishing returns."`}
                  <footer className="mt-2 text-sm font-medium text-black">
                    {`— Addy Osmani, "The 70% Problem: Hard Truths About AI-Assisted Coding"`}
                  </footer>
                </blockquote>
              </div>

              <p className="text-black/80 mb-6">
                When applying AI to historical narratives, this 70% problem becomes even more significant. The initial
                AI-generated content may appear comprehensive, but ensuring historical accuracy, cultural sensitivity,
                and ethical representation requires expert human oversight.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span className="text-black">Community review processes integrated directly into the development pipeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span className="text-black">Clear distinction between verified historical facts and AI-assisted reconstructions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span className="text-black">Collaborative approach between AI engineers and historical experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Unity AI Technology Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Unity AI Technology Stack</h2>
              <p className="text-lg text-black/80">
                Leveraging cutting-edge AI tools from Unity to create immersive historical experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Unity Muse</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Unity Muse is an AI platform that accelerates the creation of real-time 3D applications and
                  experiences. It enables creators to generate assets using natural input such as text prompts and
                  sketches.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>AI-based search across Unity documentation and support content</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>Creation of textures and sprites using natural language</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>Character animation through simple text prompts</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-medium mb-2 text-black">Implementation for Kinfolk:</h4>
                  <p className="text-sm text-black/80">
                    Muse will be used to rapidly prototype historical figures and environments, significantly reducing
                    the time and resources needed to create accurate historical representations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-6 w-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-black">Unity Sentis</h3>
                </div>
                <p className="text-black/80 mb-4">
                  {`Unity's Sentis bridges neural networks with the Unity Runtime`}
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>Embed AI models directly in applications for on-device processing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>Cross-platform compatibility from mobile to PC to game consoles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>Reduced latency and cloud hosting costs with edge computing</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-medium mb-2 text-black">Implementation for Kinfolk:</h4>
                  <p className="text-sm text-black/80">
                    Sentis will power interactive historical figures that can engage in meaningful conversations with
                    users, even in offline environments, making history accessible in any context.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 rounded-xl p-8 border">
              <h3 className="text-xl font-semibold mb-4 text-black">Unity Behavior Package</h3>
              <p className="mb-6 text-black/80">
                {`Unity's Behavior Package provides visual tools for creating intelligent, interactive historical figures through behavior trees and state machines.`}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-black">Visual Behavior Authoring</h4>
                  <p className="text-sm text-black/80 mb-4">
                    {`Unity Behavior is a free visual tool for authoring AI behaviors that control non-player characters or interactive objects. It simplifies the creation of complex character behaviors without requiring advanced programming skills.`}
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Graphical editor for intuitive behavior design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Real-time debugging during Play mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Customizable AI nodes for specialized behaviors</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-black">Behavior Graphs & State Machines</h4>
                  <p className="text-sm text-black/80 mb-4">
                    Unity Behavior supports both Behavior Trees (called Behavior Graphs in Unity) and Finite State
                    Machines, providing flexible options for designing character intelligence and interactions.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Non-linear behavior structures with merging branches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>State-based AI for complex character behaviors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Save and load running graph states for persistent behaviors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Implementation Section */}
        <section id="implementation" className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Implementation Plan</h2>
              <p className="text-lg text-black/80">
                A phased approach to implementing AI-enhanced historical narratives
              </p>
            </div>

            <div className="grid gap-8">
              {/* Phase 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black">Foundation Phase (Weeks 1-4)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-black">Technical Infrastructure</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start gap-2">
                        <GitBranch className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Set up Unity project with AI integration points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Database className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Establish data processing pipeline for historical content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Configure Unity Sentis runtime environment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-black">Technical Deliverables</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Project repository with CI/CD pipeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Data processing scripts for historical archives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Technical architecture documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black">Development Phase (Weeks 5-8)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-black">AI Implementation</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start gap-2">
                        <Lightbulb className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Implement Unity Muse for content generation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Develop conversational AI models for historical figures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Layers className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Create 3D environment prototypes with AI assistance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-black">Technical Deliverables</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Functional AI agent prototype</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Historical content generation pipeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Technical implementation guide for content creators</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-rose-600 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black">Optimization & Deployment (Weeks 9-12)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-black">Technical Refinement</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Optimize AI models for performance across platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Implement user testing feedback and technical adjustments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Finalize deployment architecture and scaling strategy</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-black">Technical Deliverables</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Production-ready AI-enhanced application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Technical documentation and maintenance guide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>Scaling strategy for future expansion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Values Section */}
        <section id="values" className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Core Values</h2>
              <p className="text-lg text-black/80">
                Our technical approach is guided by these core principles
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">ACCESS</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Making history accessible through affordable technology
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-500/20">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Technical Implementation:</span> Unity Sentis enables on-device AI
                    processing, making interactive historical experiences accessible even in areas with limited
                    connectivity.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">AUTHENTICITY</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Ensuring AI representations maintain historical accuracy
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-500/20">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Technical Implementation:</span> Our data pipeline includes verification
                    systems that clearly distinguish between documented facts and AI-assisted reconstructions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">COMMUNITY</h3>
                </div>
                <p className="text-black/80 mb-4">
                  Incorporating community feedback in AI development
                </p>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-500/20">
                  <p className="text-sm font-medium text-amber-800">
                    <span className="font-bold">Technical Implementation:</span> Our development process includes
                    community review interfaces that allow historical experts to provide feedback on AI-generated
                    content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Ethical Considerations */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Ethical Considerations</h2>
              <p className="text-lg text-black/80">
                Our approach to AI implementation is guided by strong ethical principles
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="text-lg font-medium text-black">
                    {`Our technical implementation will include verification systems to clearly distinguish between
                    documented historical facts and AI-assisted reconstructions, maintaining intellectual integrity
                    while filling knowledge gaps.`}
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="text-lg font-medium text-black">
                    {`The architecture will be designed to amplify, not replace, the work of human historians and
                    community knowledge-keepers, with technical safeguards to ensure community expertise remains central
                    to the experience.`}
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-medium mb-2 text-black">Warning: Ethical Implementation Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-black">
                      All AI-generated content must be clearly labeled and distinguishable from verified historical
                      facts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-black">
                      Community review processes must be integrated into the content creation pipeline
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-black">
                      Regular bias audits must be conducted on all AI models used in historical representation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* CTA Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-rose-500/10"
            animate={{
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Ready to Transform Historical Narratives?</h2>
              <p className="text-lg text-black/80 mb-8">
                Explore our comprehensive technical implementation plan and discover how Unity AI can amplify Black &
                Brown historical narratives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container py-8">
          <div className="text-center text-sm text-black">
            <p>© {new Date().getFullYear()} Kinfolk Tech Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

