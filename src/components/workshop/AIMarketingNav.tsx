import { motion } from "framer-motion";
import { N8NIconReact } from "../icons/N8NIcon";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const navItems = [
  { id: "hero", label: "Start" },
  { id: "overview", label: "Course Overview" },
  { id: "ui-editor", label: "UI Editor" },
  { id: "getting-started", label: "Getting Started" },
  { id: "first-steps", label: "First Steps" },
  { id: "ui-editor", label: "UI Editor" },
  { id: "building-blocks", label: "Building Blocks" },
  { id: "first-workflow", label: "First Workflow" },
  { id: "keyboard-shortcuts", label: "Keyboard Shortcuts" },
];

const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

export default function AIMarketingNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Create refs for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.5 });
  const [gettingStartedRef, gettingStartedInView] = useInView({ threshold: 0.5 });
  const [firstStepsRef, firstStepsInView] = useInView({ threshold: 0.5 });
  const [uiEditorRef, uiEditorInView] = useInView({ threshold: 0.5 });
  const [buildingBlocksRef, buildingBlocksInView] = useInView({ threshold: 0.5 });
  const [firstWorkflowRef, firstWorkflowInView] = useInView({ threshold: 0.5 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (gettingStartedInView) setActiveSection("getting-started");
    else if (firstStepsInView) setActiveSection("first-steps");
    else if (uiEditorInView) setActiveSection("ui-editor");
    else if (buildingBlocksInView) setActiveSection("building-blocks");
    else if (firstWorkflowInView) setActiveSection("first-workflow");
  }, [heroInView, gettingStartedInView, firstStepsInView, uiEditorInView, buildingBlocksInView, firstWorkflowInView]);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div
              whileHover={hoverScale}
              className="w-8 h-8"
            >
              <N8NIconReact 
                className="w-full h-full" 
                style={{ 
                  color: "#7f5af0",
                  filter: "drop-shadow(0 0 10px rgba(127, 90, 240, 0.6))"
                }}
              />
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-[#7f5af0] transition-colors">
              Moises Sanabria
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors ${
                  activeSection === item.id 
                    ? "text-[#7f5af0] font-medium" 
                    : "text-white/60 hover:text-white"
                }`}
                whileHover={hoverScale}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 