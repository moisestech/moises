import { motion } from "framer-motion";
import { 
  Play,
  Zap,
  Key,
  Code2,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Rocket,
  BookOpen,
  Share2,
  Terminal,
  Settings,
  FileText
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

const workflowSteps = [
  {
    title: "Create a New Workflow",
    icon: Play,
    description: "Start from scratch or use a template",
    details: [
      "Choose 'Start from Scratch' or 'Create Workflow'",
      "Name your workflow",
      "Set up initial configuration"
    ]
  },
  {
    title: "Add a Trigger Node",
    icon: Zap,
    description: "Configure how your workflow starts",
    details: [
      "Select Schedule Trigger for this example",
      "Set interval to weekly",
      "Configure specific time and day"
    ]
  },
  {
    title: "Set Up Credentials",
    icon: Key,
    description: "Configure API access",
    details: [
      "Create new credentials",
      "Add API keys",
      "Test connection"
    ]
  },
  {
    title: "Add Action Nodes",
    icon: Code2,
    description: "Process and transform data",
    details: [
      "Configure node parameters",
      "Use expressions for dynamic values",
      "Test each step"
    ]
  }
];

const keyConcepts = [
  {
    title: "Trigger Nodes",
    icon: Zap,
    description: "Start workflows automatically or manually",
    details: [
      "Schedule-based triggers",
      "Event-based triggers",
      "Manual triggers"
    ]
  },
  {
    title: "Data Processing",
    icon: Code2,
    description: "Transform and manipulate data",
    details: [
      "Use expressions",
      "Apply filters",
      "Format output"
    ]
  },
  {
    title: "Logic & Control",
    icon: Settings,
    description: "Add conditional logic",
    details: [
      "If/Else conditions",
      "Loops and iterations",
      "Error handling"
    ]
  }
];

const nextSteps = [
  {
    title: "Explore Templates",
    icon: FileText,
    description: "Learn from existing workflows"
  },
  {
    title: "Join Community",
    icon: Share2,
    description: "Connect with other n8n users"
  },
  {
    title: "Advanced Features",
    icon: Rocket,
    description: "Explore more complex workflows"
  }
];

export default function AIMarketingN8NIntroDeepDive() {
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
          <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#7f5af0]/10 border border-[#7f5af0]/20 mb-6">
            <Rocket className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">Your First Workflow</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            Building Your First n8n Workflow
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-[#e0e0e0]/80 max-w-2xl mx-auto"
          >
            A step-by-step guide to creating your first automation
          </motion.p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#7f5af0]/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#7f5af0]" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>

              <p className="text-[#e0e0e0]/80 mb-6">{step.description}</p>

              <ul className="space-y-3">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#ff6ac1] mt-0.5 flex-shrink-0" />
                    <span className="text-[#e0e0e0]/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Concepts */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {keyConcepts.map((concept, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#ff6ac1]/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center">
                  <concept.icon className="w-5 h-5 text-[#ff6ac1]" />
                </div>
                <h3 className="text-xl font-bold">{concept.title}</h3>
              </div>

              <p className="text-[#e0e0e0]/80 mb-6">{concept.description}</p>

              <ul className="space-y-3">
                {concept.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#ff6ac1] mt-0.5 flex-shrink-0" />
                    <span className="text-[#e0e0e0]/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {nextSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#42d392]/20 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#42d392]/20 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-[#42d392]" />
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
              </div>
              <p className="text-[#e0e0e0]/80 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 