import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCircleNodes } from "react-icons/fa6";
import { LuWorkflow } from "react-icons/lu";
import { 
  TbAdjustmentsDown,
  TbArrowCurveRight,
  TbArrowDownLeftCircle,
  TbArrowGuide,
  TbArrowsRandom,
  TbRobot,
  TbBinaryTree,
  TbBinaryTree2
} from "react-icons/tb";
import N8NIcon from "./N8NIcon";
import IconCarousel from "./IconCarousel";
import BackgroundShapes from "./BackgroundShapes";
import LargeIconCarousel from "./LargeIconCarousel";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
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

const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const tips = [
  "Connect your favorite apps and services",
  "Automate repetitive tasks with ease",
  "Build powerful workflows without code",
  "Integrate AI into your automations",
  "Create custom solutions for your business",
  "Monitor and debug your workflows",
  "Share your automations with your team",
  "Scale your operations with n8n"
];

const features = [
  { icon: FaCircleNodes, title: "Visual Workflow Builder", description: "Drag and drop interface for creating automations" },
  { icon: TbRobot, title: "Powerful Automation", description: "Connect and automate your favorite tools" },
  { icon: TbBinaryTree, title: "Complex Logic", description: "Build sophisticated workflows with ease" },
  { icon: TbArrowCurveRight, title: "API Integration", description: "Connect to any API with built-in nodes" },
  { icon: TbAdjustmentsDown, title: "Custom Nodes", description: "Extend functionality with custom code" },
  { icon: TbArrowsRandom, title: "Flexible Triggers", description: "Start workflows from any event" }
];

export default function AIMarketingHeroSection({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundShapes />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-100/70 dark:bg-[#7f5af0]/10 border border-violet-200/80 dark:border-[#7f5af0]/20">
                  <N8NIcon className="w-5 h-5" />
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Master n8n Automation</span>
                </motion.div>
              </div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
              >
                Build Powerful Workflows
                <br />
                Without Writing Code
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mb-8"
              >
                Learn to automate your work and connect your favorite tools with n8n's visual workflow builder
              </motion.p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTip}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-[#7f5af0] font-medium mb-12"
                >
                  {tips[currentTip]}
                </motion.div>
              </AnimatePresence>

              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16"
              >
                <motion.button
                  whileHover={reducedMotion ? {} : hoverScale}
                  className="px-8 py-4 rounded-lg font-medium bg-[#7f5af0] text-white hover:bg-[#7f5af0]/90 transition-colors"
                >
                  Start Learning
                </motion.button>
                <motion.button
                  whileHover={reducedMotion ? {} : hoverScale}
                  className="px-8 py-4 rounded-lg font-medium border border-violet-300 text-zinc-800 transition-colors hover:border-violet-500 dark:border-[#7f5af0]/20 dark:text-zinc-100 dark:hover:border-[#7f5af0]/40"
                >
                  View Curriculum
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          <div className="h-[400px] md:h-[500px] flex items-center justify-center">
            <LargeIconCarousel reducedMotion={reducedMotion} />
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-6"
                whileHover={reducedMotion ? {} : hoverScale}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={reducedMotion ? {} : pulse}
                    className="w-12 h-12 rounded-full bg-[#7f5af0]/20 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-[#7f5af0]" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{feature.title}</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 