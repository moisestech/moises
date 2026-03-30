import { motion } from "framer-motion";
import { 
  Code2, 
  PlayCircle, 
  CheckCircle, 
  ChevronRight,
  ChevronLeft, 
  Terminal,
  Zap,
  Brain,
  Database,
  Settings,
  Link2,
  Book,
  Target,
  User,
  Clock,
  Award,
  Key,
  Lock,
  CreditCard,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
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

const hoverScale = {
  scale: 1.02,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

const courseSteps = [
  {
    title: "Introduction",
    icon: Book,
    content: "Welcome to the n8n Course Level 1! This course introduces you to the fundamental concepts within n8n and develops your low-code automation expertise.",
    highlights: []
  },
  {
    title: "Is This Course Right for Me?",
    icon: Target,
    content: "This course is perfect for beginners and those looking to build their first workflows.",
    highlights: [
      "Starting to use n8n for the first time",
      "Looking for help creating your first workflow",
      "Want to automate processes in your personal or working life"
    ]
  },
  {
    title: "What You'll Learn",
    icon: Brain,
    content: "Learn by doing with a mix of theory and hands-on practice.",
    highlights: [
      "Set up n8n and navigate the Editor UI",
      "Understand n8n data structures",
      "Configure node parameters and credentials",
      "Use conditional logic in workflows",
      "Schedule and control workflows",
      "Import, download, and share workflows"
    ]
  },
  {
    title: "Prerequisites",
    icon: CheckCircle,
    content: "Get ready to start your n8n journey with these requirements:",
    highlights: [
      "n8n Cloud (or self-hosted version)",
      "Course user ID from signup",
      "Basic JavaScript and API knowledge (helpful but not required)",
      "n8n community forum account for badges"
    ]
  },
  {
    title: "Course Duration & Completion",
    icon: Clock,
    content: "The course takes approximately two hours to complete, with flexible learning at your own pace.",
    highlights: [
      "Complete in multiple sessions",
      "Two main milestones:",
      "• Building the main workflow",
      "• Passing the final quiz",
      "Earn a badge and avatar upon completion"
    ]
  },
  {
    title: "Practical Projects",
    icon: Code2,
    content: "You'll build two hands-on workflows:",
    highlights: [
      "Two-node workflow: Get articles from Hacker News",
      "Seven-node workflow: Help clients with data warehouse operations",
      "• Retrieve records",
      "• Apply filters",
      "• Perform calculations",
      "• Send team notifications"
    ]
  },
  {
    title: "Getting Your OpenAI API Key",
    icon: Key,
    content: "Follow these steps to get your OpenAI API key for n8n integration:",
    highlights: [
      "Visit OpenAI's platform at platform.openai.com",
      "Sign up or log in to your OpenAI account",
      "Go to the API section in your account dashboard",
      "Click on 'Create new secret key'",
      "Copy and securely store your API key",
      "Set up billing information to activate the API",
      "Add the API key to n8n's credentials"
    ]
  },
  {
    title: "API Key Security",
    icon: Lock,
    content: "Important security considerations for your OpenAI API key:",
    highlights: [
      "Never share your API key publicly",
      "Store the key in n8n's encrypted credentials",
      "Use environment variables for self-hosted setups",
      "Regularly rotate your API keys",
      "Monitor API usage to prevent unauthorized access",
      "Set up usage limits in OpenAI dashboard"
    ]
  },
  {
    title: "API Usage & Billing",
    icon: CreditCard,
    content: "Understanding OpenAI API costs and usage:",
    highlights: [
      "Set up a payment method in OpenAI dashboard",
      "Review pricing for different models (GPT-3.5, GPT-4)",
      "Monitor usage in OpenAI dashboard",
      "Set up usage limits to control costs",
      "Understand token counting and pricing",
      "Check n8n workflow estimated costs"
    ]
  }
];

export default function AIMarketingStepModule() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showApiSection, setShowApiSection] = useState(false);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % courseSteps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + courseSteps.length) % courseSteps.length);
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-16 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <BackgroundShapes />
      
      <motion.div variants={fadeIn} className="text-center mb-16 relative z-10">
        <div className="inline-block">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]">
            {showApiSection ? "OpenAI API Setup" : "Course Overview"}
          </h2>
        </div>
        <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
          {showApiSection 
            ? "Everything you need to know about setting up your OpenAI API key"
            : "Everything you need to know about getting started with n8n"
          }
        </p>
        <motion.button
          onClick={() => setShowApiSection(!showApiSection)}
          className="mt-4 px-4 py-2 rounded-lg border border-[#7f5af0]/20 hover:border-[#7f5af0]/40 transition-colors inline-flex items-center gap-2"
          whileHover={hoverScale}
        >
          {showApiSection ? "Back to Course Overview" : "Learn About API Setup"}
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </motion.div>

      <div className="relative z-10">
        <motion.div 
          className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-8 mb-8"
          variants={fadeIn}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
              {(() => {
                const IconComponent = courseSteps[currentStep].icon;
                return <IconComponent className="w-6 h-6 text-[#7f5af0]" />;
              })()}
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] to-[#ff6ac1]">
              {courseSteps[currentStep].title}
            </h3>
          </div>
          
          <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-6">
            {courseSteps[currentStep].content}
          </p>

          {courseSteps[currentStep].highlights.length > 0 && (
            <ul className="space-y-3">
              {courseSteps[currentStep].highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#ff6ac1] mt-1 flex-shrink-0" />
                  <span className="text-zinc-600 dark:text-zinc-300">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {courseSteps[currentStep].title === "Getting Your OpenAI API Key" && (
            <div className="mt-6 p-4 bg-zinc-100 dark:bg-[#0a0a0f] rounded-lg border border-zinc-200 dark:border-[#7f5af0]/20">
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Quick tip: When you get your API key, it will look something like this:
              </p>
              <pre className="overflow-x-auto rounded bg-zinc-200 p-3 font-mono text-sm text-zinc-800 dark:bg-black/50 dark:text-zinc-200">
                sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </pre>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">
                Note: This is just an example format. Never share your actual API key!
              </p>
            </div>
          )}
        </motion.div>

        <div className="flex justify-between items-center">
          <motion.button
            onClick={prevStep}
            className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 transition-colors hover:border-violet-500 dark:border-[#7f5af0]/20 dark:text-zinc-200 dark:hover:border-[#7f5af0]/40"
            whileHover={hoverScale}
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </motion.button>

          <div className="flex gap-2">
            {courseSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? "bg-[#7f5af0]" : "bg-[#7f5af0]/20"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextStep}
            className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-zinc-800 transition-colors hover:border-violet-500 dark:border-[#7f5af0]/20 dark:text-zinc-200 dark:hover:border-[#7f5af0]/40"
            whileHover={hoverScale}
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 