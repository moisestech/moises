import { motion } from "framer-motion";
import { 
  PlayCircle, 
  ChevronRight, 
  AlertCircle, 
  Plus, 
  Workflow, 
  Play,
  Power,
  Zap,
  Settings,
  LayoutGrid
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

const methods = [
  {
    title: "Method 1: Side Menu",
    steps: [
      "Select the universal create resource icon in the upper-left corner",
      "Select 'workflow' from the options",
      "Choose between personal space or project (if available)",
      "Click 'Add first step' to add a trigger node"
    ]
  },
  {
    title: "Method 2: Overview Page",
    steps: [
      "Click the create button in the upper-right corner",
      "Select 'workflow' from the dropdown",
      "Workflow will be created in personal space or current project",
      "Click 'Add first step' to begin"
    ]
  }
];

const runningModes = [
  {
    title: "Manual Execution",
    icon: Play,
    description: "Run workflows manually during building and testing",
    steps: [
      "Open your workflow in the editor",
      "Click the 'Test Workflow' button",
      "View execution results in the debug panel"
    ],
    highlight: "Perfect for development and testing phases"
  },
  {
    title: "Automatic Execution",
    icon: Power,
    description: "Set workflows to run automatically when triggered",
    steps: [
      "Ensure your workflow has a trigger node",
      "Toggle the 'Active' switch in the editor",
      "Workflow will now run when trigger conditions are met"
    ],
    highlight: "Required for production workflows"
  }
];

export default function AIMarketingCreateWorkflow() {
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
            <span className="text-sm font-medium">Workflow Creation</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            Create Your First Workflow
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
          >
            Learn how to create and manage workflows in n8n, from basic setup to automation
          </motion.p>
        </motion.div>

        {/* What is a Workflow */}
        <motion.div 
          variants={fadeIn}
          className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-8 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
              <LayoutGrid className="w-6 h-6 text-[#7f5af0]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">What is a Workflow?</h3>
              <p className="text-zinc-600 dark:text-zinc-300">A collection of nodes connected together to automate a process</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Automation",
                description: "Connect multiple steps to automate tasks"
              },
              {
                icon: Settings,
                title: "Customization",
                description: "Configure nodes to handle your specific needs"
              },
              {
                icon: Play,
                title: "Execution",
                description: "Run workflows manually or automatically"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-violet-50 dark:bg-[#7f5af0]/5 border border-violet-100/90 dark:border-[#7f5af0]/10"
              >
                <feature.icon className="w-6 h-6 text-[#7f5af0] mb-3" />
                <h4 className="font-medium mb-2">{feature.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Creation Methods */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {methods.map((method, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-pink-200/90 dark:border-[#ff6ac1]/20 shadow-sm dark:shadow-none p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-[#ff6ac1]" />
                </span>
                {method.title}
              </h3>
              
              <ol className="space-y-4">
                {method.steps.map((step, stepIndex) => (
                  <li 
                    key={stepIndex}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-pink-50 dark:hover:bg-[#ff6ac1]/5 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium text-[#ff6ac1]">{stepIndex + 1}</span>
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </motion.div>

        {/* Running Modes */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {runningModes.map((mode, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-emerald-200/90 dark:border-[#42d392]/20 shadow-sm dark:shadow-none p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#42d392]/20 flex items-center justify-center">
                  <mode.icon className="w-4 h-4 text-[#42d392]" />
                </span>
                {mode.title}
              </h3>
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">{mode.description}</p>

              <ul className="space-y-3 mb-6">
                {mode.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#42d392] mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-600 dark:text-zinc-300">{step}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50 dark:bg-[#42d392]/5 border border-emerald-100/90 dark:border-[#42d392]/10">
                <AlertCircle className="w-5 h-5 text-[#42d392] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{mode.highlight}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Tips */}
        <motion.div 
          variants={fadeIn}
          className="mt-16 p-8 bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none"
        >
          <h3 className="text-2xl font-bold mb-6">Quick Tips</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "New workflows are inactive by default",
              "Trigger nodes require workflow activation",
              "Use the debug panel to track execution",
              "Save your workflow regularly while building"
            ].map((tip, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-violet-50 dark:bg-[#7f5af0]/5 border border-violet-100/90 dark:border-[#7f5af0]/10"
              >
                <AlertCircle className="w-5 h-5 text-[#7f5af0] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-600 dark:text-zinc-300">{tip}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
} 