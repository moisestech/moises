import { motion, AnimatePresence } from "framer-motion";
import { N8NIcon, N8NIconReact } from "../icons/N8NIcon";
import { useEffect, useState } from "react";

const sections = [
  "Workflow Automation",
  "AI Integration",
  "API Connections",
  "Custom Nodes",
  "Data Flow",
  "Guided Automation"
];

const pulseKeyframes = {
  "0%": {
    transform: "scale(0.2)",
    boxShadow: "0 0 0 0 rgba(127, 90, 240, 1)"
  },
  "70%": {
    transform: "scale(1)",
    boxShadow: "0 0 0 60px rgba(127, 90, 240, 0)"
  },
  "100%": {
    transform: "scale(0.2)"
  }
};

const gradientPulseKeyframes = {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.2,
    boxShadow: "0 0 0 0 rgba(127, 90, 240, 0.3)"
  },
  "70%": {
    transform: "scale(1.2)",
    opacity: 0.6,
    boxShadow: "0 0 0 100px rgba(127, 90, 240, 0)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0.2
  }
};

const titleVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    }
  }
};

const carouselVariants = {
  enter: {
    y: 20,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -20,
    opacity: 0
  }
};

export default function AIMarketingFlashyTitle({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <style jsx>{`
        @keyframes pulse {
          ${Object.entries(pulseKeyframes)
            .map(([key, value]) => `${key} { ${Object.entries(value)
              .map(([prop, val]) => `${prop}: ${val}`)
              .join("; ")} }`)
            .join("\n")}
        }
        @keyframes gradientPulse {
          ${Object.entries(gradientPulseKeyframes)
            .map(([key, value]) => `${key} { ${Object.entries(value)
              .map(([prop, val]) => `${prop}: ${val}`)
              .join("; ")} }`)
            .join("\n")}
        }
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        .gradient-pulse {
          animation: gradientPulse 2s infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute inset-0 gradient-pulse`}
          style={{
            background: "radial-gradient(circle at center, rgba(127, 90, 240, 0.3) 0%, rgba(255, 106, 193, 0.2) 50%, transparent 100%)",
            filter: "blur(80px)"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 relative">
            <div 
              className={`absolute inset-0 gradient-pulse`}
              style={{
                background: "radial-gradient(circle at center, rgba(127, 90, 240, 0.4) 0%, rgba(255, 106, 193, 0.2) 50%, transparent 100%)",
                filter: "blur(40px)",
                transform: "translateZ(0)"
              }}
            />
            <div className="relative z-10">
              <N8NIconReact 
                className="w-32 h-32 md:w-48 md:h-48 pulse-animation" 
                style={{ 
                  color: "#7f5af0",
                  filter: "drop-shadow(0 0 30px rgba(127, 90, 240, 0.6))"
                }}
              />
            </div>
          </div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 relative"
            variants={titleVariants}
            initial="initial"
            animate="animate"
            style={{
              background: "linear-gradient(45deg, #7f5af0, #ff6ac1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(127, 90, 240, 0.4)"
            }}
          >
            Master n8n Automation
          </motion.h1>

          <div className="h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                className="text-xl text-zinc-600 dark:text-zinc-300"
              >
                {sections[currentSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 