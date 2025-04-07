"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Menu, X, ArrowRight, Download, CheckCircle, Star, Rocket, Sparkles, Zap, Target, Heart, User, Award, BookOpen, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Custom section divider component
const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`} />
);

// Navigation items
const navItems = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About Me" },
  { id: "resources", label: "Resources" },
  { id: "impact", label: "Impact" },
  { id: "cta", label: "Join Now" },
];

// Placeholder images - replace with actual images
const images = {
  hero: "/images/workshop/ai-marketing/hero.jpg",
  about: "/images/workshop/ai-marketing/about.jpg",
  resources: "/images/workshop/ai-marketing/resources.jpg",
  impact: "/images/workshop/ai-marketing/impact.jpg",
};

export default function AIMarketingClient() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Intersection observer for sections
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [resourcesRef, resourcesInView] = useInView({ threshold: 0.5 });
  const [impactRef, impactInView] = useInView({ threshold: 0.5 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (aboutInView) setActiveSection("about");
    else if (resourcesInView) setActiveSection("resources");
    else if (impactInView) setActiveSection("impact");
    else if (ctaInView) setActiveSection("cta");
  }, [heroInView, aboutInView, resourcesInView, impactInView, ctaInView]);

  // Countdown timer
  useEffect(() => {
    const endDate = new Date("2024-05-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">
              Moises Sanabria
            </Link>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm md:hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm text-white/60 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero}
            alt="The Art of AI Marketing Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The Art of AI Marketing
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            How to Stand Out in the Age of AI-Generated Content
          </motion.p>
          <motion.div variants={fadeIn} className="flex justify-center">
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
            >
              Get Your Free Resources
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={24} className="text-white/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="relative h-[400px]">
              <Image
                src={images.about}
                alt="About Moises"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold">{`Hi, I'm Moises — Your Guide in the New Era of AI Marketing`}</h2>
              <p className="text-white/80">
                {`I'm an interdisciplinary artist and seasoned AI front-end developer. My work has been showcased at leading institutions, including PAMM, Bakehouse Art Complex, and major international events.`}
              </p>
              <p className="text-white/80">
                {`I don't just use AI—I craft compelling stories, visuals, and brands that leverage AI to cut through the noise, engage audiences, and deliver measurable results.`}
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Why Listen to Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Proven Results</h4>
                      <p className="text-white/70">{`I've helped artists, brands, and institutions harness AI to create impactful stories and memorable experiences.`}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Industry Recognition</h4>
                      <p className="text-white/70">Exhibited globally and partnered with prestigious organizations, providing unique credibility.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Rocket className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Ahead of the Curve</h4>
                      <p className="text-white/70">Deeply embedded in the creative tech scene, offering insights that few have.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Resources Section */}
      <section
        id="resources"
        ref={resourcesRef}
        className="py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              The AI Marketing Toolbox – Your Free Resources
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 max-w-2xl mx-auto">
              {`I've prepared exclusive resources to give you an immediate advantage in the AI marketing landscape.`}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Free Guide",
                description: "5 Proven Ways to Stand Out in AI-Generated Content",
                icon: <BookOpen className="h-8 w-8 text-blue-400" />,
              },
              {
                title: "Checklist",
                description: "AI Content Creator's Checklist for Visual & Narrative Excellence",
                icon: <CheckCircle className="h-8 w-8 text-green-400" />,
              },
              {
                title: "Mini-Workshop Replay",
                description: "Building Trust & Taste in Your AI Marketing Strategy",
                icon: <PlayCircle className="h-8 w-8 text-purple-400" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 text-center"
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-6">
              These tools will help you:
            </motion.h3>
            <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Enhance your storytelling</h4>
                <p className="text-white/70">Create compelling narratives that resonate with your audience</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Optimize your AI workflow</h4>
                <p className="text-white/70">Streamline your content creation process</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Ensure authenticity</h4>
                <p className="text-white/70">Make your content feel human and memorable</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Impact Section */}
      <section
        id="impact"
        ref={impactRef}
        className="py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              The Impact of Making the Right Choices
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 max-w-2xl mx-auto">
              {`Brands and creators I've coached are now thriving in the AI marketing landscape.`}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Increased Engagement</h3>
              </div>
              <p className="text-white/80">
                Increased audience engagement by 300% through AI-powered storytelling techniques that resonate with target audiences.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/20 p-2 rounded-full">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Boosted Conversions</h3>
              </div>
              <p className="text-white/80">
                Boosted conversions and brand recognition by making AI-generated content feel authentic and aligned with brand values.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Star className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Thought Leadership</h3>
              </div>
              <p className="text-white/80">
                Positioned themselves as thought leaders in their industries by leveraging AI in innovative and ethical ways.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500/20 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">Authentic Connection</h3>
              </div>
              <p className="text-white/80">
                Built deeper connections with audiences by using AI to enhance human creativity rather than replace it.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <p className="text-xl font-medium">
              You can achieve these results too with the right guidance and tools.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section
        id="cta"
        ref={ctaRef}
        className="py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              Ready to Stand Out?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 max-w-2xl mx-auto mb-8">
              {`Join hundreds of forward-thinking marketers, artists, and entrepreneurs who've elevated their AI marketing approach.`}
            </motion.p>

            {!isSubmitted ? (
              <motion.form
                variants={fadeIn}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-white/20"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Get Free Resources
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  {`You'll instantly receive all your free resources + access to my newsletter full of cutting-edge strategies.`}
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400"
              >
                Thank you! Your free resources are on the way to your inbox.
              </motion.div>
            )}

            <motion.div
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">The Future Belongs to Storytellers—Will You Be One?</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                {`We're witnessing a shift. AI can amplify your voice—or drown it. The difference is how intentionally you use it.`}
              </p>
              <p className="text-white/80 max-w-2xl mx-auto mt-4">
                Choose to stand out. Choose authenticity.
              </p>
              <p className="text-white/80 max-w-2xl mx-auto mt-4 font-medium">
                {`Together, let's shape the future of marketing.`}
              </p>
              <p className="text-white/80 max-w-2xl mx-auto mt-4 italic">
                — Moises Sanabria
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 