import { motion } from "framer-motion";
import { 
  Rocket,
  ChevronRight,
  AlertCircle,
  Globe,
  FileText,
  Play,
  Plus,
  MessageSquare,
  Code,
  Heart,
  Star,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
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

const quickStartSteps = [
  {
    title: "Sign Up for n8n",
    icon: Globe,
    description: "Start your automation journey with n8n Cloud",
    steps: [
      "Visit n8n.io (not .com!) to get started",
      "Click 'Sign Up' for a free trial account",
      "No credit card required for trial"
    ],
    tip: "Pro tip: n8n Cloud offers a generous free trial to explore all features!",
    motivation: "Every great automation journey begins with a single signup 🚀"
  },
  {
    title: "Open a Workflow Template",
    icon: FileText,
    description: "Learn from pre-built examples using training nodes",
    steps: [
      "Navigate to Templates | Very quick quickstart",
      "Click 'Use workflow' to see options",
      "Select 'Import template to cloud workspace'"
    ],
    tip: "Templates are like having an expert guide you through the process!",
    motivation: "Don't start from scratch - stand on the shoulders of giants 🌟"
  },
  {
    title: "Run Your First Workflow",
    icon: Play,
    description: "See your workflow in action",
    steps: [
      "Locate the 'Test Workflow' button",
      "Click to run the workflow",
      "Watch data flow through the nodes"
    ],
    tip: "The Customer Datastore node provides safe test data to experiment with",
    motivation: "That feeling when your first automation works - priceless! ✨"
  },
  {
    title: "Add Your First Node",
    icon: Plus,
    description: "Customize the workflow with a messaging node",
    steps: [
      "Click the '+' connector on Edit Fields node",
      "Search for 'Customer Messenger'",
      "Select 'Customer Messenger (n8n training)'"
    ],
    tip: "Take your time exploring node settings - there's no rush!",
    motivation: "Each node you add is a new skill learned 💪"
  }
];

const expressionExample = `Hi {{ $json.customer_name }}. Your description is: {{ $json.customer_description }}`;

export default function AIMarketingN8NGetStarted() {
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
            <Rocket className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">Quick Start Guide</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            Your First Steps with n8n
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
          >
            Let's start your automation journey with this beginner-friendly guide
          </motion.p>

          {/* Motivation Banner */}
          <motion.div
            variants={fadeIn}
            className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#7f5af0]/10 via-[#ff6ac1]/10 to-[#42d392]/10 border border-[#7f5af0]/20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Star className="w-6 h-6 text-[#ff6ac1]" />
              <h3 className="text-xl font-bold">Why Start with n8n?</h3>
              <Star className="w-6 h-6 text-[#ff6ac1]" />
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">
              n8n makes automation accessible to everyone. You'll be amazed at what you can create!
            </p>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {quickStartSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-8"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#7f5af0]/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-[#7f5af0]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6">{step.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    {step.steps.map((substep, subIndex) => (
                      <div 
                        key={subIndex}
                        className="flex items-start gap-3 p-4 rounded-lg bg-violet-50 dark:bg-[#7f5af0]/5 border border-violet-100/90 dark:border-[#7f5af0]/10"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#7f5af0]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-[#7f5af0]">{subIndex + 1}</span>
                        </span>
                        <span className="text-zinc-700 dark:text-zinc-300">{substep}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Pro Tip */}
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-pink-50 dark:bg-[#ff6ac1]/5 border border-pink-100/90 dark:border-[#ff6ac1]/10">
                      <AlertCircle className="w-5 h-5 text-[#ff6ac1] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">{step.tip}</p>
                    </div>

                    {/* Motivation */}
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50 dark:bg-[#42d392]/5 border border-emerald-100/90 dark:border-[#42d392]/10">
                      <Sparkles className="w-5 h-5 text-[#42d392] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">{step.motivation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expression Example */}
        <motion.div 
          variants={fadeIn}
          className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-8 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
              <Code className="w-6 h-6 text-[#7f5af0]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Your First Expression</h3>
              <p className="text-zinc-600 dark:text-zinc-300">Create a personalized message using n8n expressions</p>
            </div>
          </div>

          <div className="bg-zinc-200 dark:bg-black/50 p-6 rounded-lg border border-[#7f5af0]/10 mb-6">
            <pre className="font-mono text-sm text-zinc-700 dark:text-zinc-300 overflow-x-auto">
              {expressionExample}
            </pre>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-violet-50 dark:bg-[#7f5af0]/5 border border-violet-100/90 dark:border-[#7f5af0]/10">
            <AlertCircle className="w-5 h-5 text-[#7f5af0] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Copy this expression into the Message field's expression editor. Don't worry if it seems complex - you'll master expressions in no time!
            </p>
          </div>
        </motion.div>

        {/* Final Encouragement */}
        <motion.div 
          variants={fadeIn}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]">
            <Heart className="w-5 h-5" />
            <span className="font-medium">You're on your way to becoming an automation expert!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 