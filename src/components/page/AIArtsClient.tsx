"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
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
  { id: "story", label: "The Story" },
  { id: "offer", label: "What We Offer" },
  { id: "workshops", label: "Workshops" },
  { id: "cta", label: "Join Us" },
];

// Placeholder images - replace with actual images
const images = {
  hero: "/images/workshop/ai-arts/hero.jpg",
  story: "/images/workshop/ai-arts/story.jpg",
  offer: "/images/workshop/ai-arts/offer.jpg",
  workshops: "/images/workshop/ai-arts/workshops.jpg",
};

export default function AIArtsClient() {
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
  const [storyRef, storyInView] = useInView({ threshold: 0.5 });
  const [offerRef, offerInView] = useInView({ threshold: 0.5 });
  const [workshopsRef, workshopsInView] = useInView({ threshold: 0.5 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.5 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (storyInView) setActiveSection("story");
    else if (offerInView) setActiveSection("offer");
    else if (workshopsInView) setActiveSection("workshops");
    else if (ctaInView) setActiveSection("cta");
  }, [heroInView, storyInView, offerInView, workshopsInView, ctaInView]);

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
            alt="AI and the Arts Hero"
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
            AI and the Arts
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            Explore the intersection of artificial intelligence and creative expression
          </motion.p>
          <motion.div variants={fadeIn} className="flex justify-center">
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
            >
              Join the Waitlist
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

      {/* The Story Section */}
      <section
        id="story"
        ref={storyRef}
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
                src={images.story}
                alt="The Story"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold">The Story</h2>
              <p className="text-white/80">
                {`In a world where technology and creativity are increasingly intertwined,
                we've created a space where artists, technologists, and innovators
                come together to explore the transformative potential of AI in the arts.`}
              </p>
              <p className="text-white/80">
                Our workshop series brings together leading experts in AI and the arts
                to share their knowledge, inspire new ideas, and help you navigate
                the exciting possibilities at this intersection.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* What We Offer Section */}
      <section
        id="offer"
        ref={offerRef}
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
              What We Offer
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 max-w-2xl mx-auto">
              A comprehensive program designed to help artists and creators harness
              the power of AI to expand their creative horizons and push the
              boundaries of artistic expression.
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
                title: "AI Tools & Techniques",
                description:
                  "Learn to use cutting-edge AI tools and techniques in your creative process.",
              },
              {
                title: "Creative Applications",
                description:
                  "Explore innovative ways to apply AI in various artistic disciplines.",
              },
              {
                title: "Expert Guidance",
                description:
                  "Get personalized feedback and guidance from experienced AI artists.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Workshops Section */}
      <section
        id="workshops"
        ref={workshopsRef}
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
              Workshops That Inspire
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 max-w-2xl mx-auto">
              Hands-on sessions designed to help you explore and master the use of
              AI in your creative practice.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "AI Art Generation",
                description:
                  "Learn to create stunning artwork using AI-powered tools and techniques.",
              },
              {
                title: "Creative AI Applications",
                description:
                  "Explore innovative ways to integrate AI into your creative workflow.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/5 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
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
              Join the Waitlist
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 max-w-2xl mx-auto mb-8">
              Applications for our next cohort are opening soon. Join the waitlist
              to be notified when applications open and receive early access.
            </motion.p>

            {!isSubmitted ? (
              <motion.form
                variants={fadeIn}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
              >
                <div className="flex gap-4">
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
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Join Waitlist
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400"
              >
                {`Thank you for joining the waitlist! We'll be in touch soon.`}
              </motion.div>
            )}

            <motion.div
              variants={fadeIn}
              className="mt-12 grid grid-cols-4 gap-4 max-w-2xl mx-auto"
            >
              {Object.entries(countdown).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-3xl font-bold">{value}</div>
                  <div className="text-white/60 text-sm capitalize">{unit}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 