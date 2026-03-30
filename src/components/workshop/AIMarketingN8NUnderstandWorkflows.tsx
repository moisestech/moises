import { motion } from "framer-motion";
import { 
  Share2,
  ChevronRight,
  AlertCircle,
  Workflow,
  Box,
  GitBranch,
  StickyNote,
  Play,
  Bug,
  FileText,
  Zap,
  ArrowRight,
  Lightbulb,
  Network
} from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

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

const workflowComponents = [
  {
    title: "Nodes",
    icon: Box,
    description: "The building blocks of your automation",
    details: [
      "Represent integrations and operations",
      "Each node performs a specific task",
      "Configure nodes with custom settings",
      "Connect nodes to create a flow"
    ],
    tip: "Think of nodes as LEGO blocks - each one has a specific purpose, but together they build something amazing!"
  },
  {
    title: "Connections",
    icon: GitBranch,
    description: "The paths that data follows between nodes",
    details: [
      "Connect nodes to define data flow",
      "Transfer data between operations",
      "Create conditional branches",
      "Handle multiple data paths"
    ],
    tip: "Connections are like roads in your workflow city - they determine how data travels from one place to another."
  },
  {
    title: "Sticky Notes",
    icon: StickyNote,
    description: "Document and organize your workflows",
    details: [
      "Add explanatory notes",
      "Document complex logic",
      "Create section labels",
      "Improve workflow readability"
    ],
    tip: "Good documentation is like a map - it helps others (and future you) understand your workflow's purpose."
  }
];

const workflowFeatures = [
  {
    title: "Templates",
    icon: FileText,
    description: "Jump-start your automation with pre-built workflows",
    highlight: "Save time by using community-tested templates"
  },
  {
    title: "Debugging",
    icon: Bug,
    description: "Track and fix issues using the Executions list",
    highlight: "Monitor workflow performance and troubleshoot errors"
  },
  {
    title: "Sharing",
    icon: Share2,
    description: "Collaborate with team members and the community",
    highlight: "Export and import workflows between instances"
  }
];

export default function AIMarketingN8NUnderstandWorkflows() {
  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundShapes />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-100/70 dark:bg-[#7f5af0]/10 border border-violet-200/80 dark:border-[#7f5af0]/20 mb-6">
            <Workflow className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">Understanding Workflows</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            Master n8n Workflows
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
          >
            Learn the key components and concepts that make n8n workflows powerful
          </motion.p>
        </motion.div>

        {/* What is a Workflow */}
        <motion.div 
          variants={fadeIn}
          className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-8 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
              <Network className="w-6 h-6 text-[#7f5af0]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">What is a Workflow?</h3>
              <p className="text-zinc-600 dark:text-zinc-300">The foundation of automation in n8n</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-zinc-700 dark:text-zinc-300">
                A workflow is a collection of nodes connected together to automate a process. Think of it as a recipe where each ingredient (node) and step (connection) works together to create something amazing.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-violet-50 dark:bg-[#7f5af0]/5 border border-violet-100/90 dark:border-[#7f5af0]/10">
                <Lightbulb className="w-5 h-5 text-[#7f5af0] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  The best workflows start simple and grow as needed. Don't worry about making it perfect from the start!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "Automate repetitive tasks" },
                { icon: Share2, text: "Connect different services" },
                { icon: Play, text: "Run on schedule or trigger" },
                { icon: Bug, text: "Easy to test and debug" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-violet-50 dark:bg-[#7f5af0]/5 border border-violet-100/90 dark:border-[#7f5af0]/10"
                >
                  <feature.icon className="w-5 h-5 text-[#7f5af0] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Components */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {workflowComponents.map((component, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                  <component.icon className="w-5 h-5 text-[#7f5af0]" />
                </div>
                <h3 className="text-xl font-bold">{component.title}</h3>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-6">{component.description}</p>

              <ul className="space-y-3 mb-6">
                {component.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#ff6ac1] mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-600 dark:text-zinc-300">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50 dark:bg-[#42d392]/5 border border-emerald-100/90 dark:border-[#42d392]/10">
                <Lightbulb className="w-5 h-5 text-[#42d392] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{component.tip}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {workflowFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-pink-200/90 dark:border-[#ff6ac1]/20 shadow-sm dark:shadow-none p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#ff6ac1]" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-4">{feature.description}</p>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-pink-50 dark:bg-[#ff6ac1]/5 border border-pink-100/90 dark:border-[#ff6ac1]/10">
                <AlertCircle className="w-5 h-5 text-[#ff6ac1] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{feature.highlight}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 