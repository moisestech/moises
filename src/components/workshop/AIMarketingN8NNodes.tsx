import { motion } from "framer-motion";
import { 
  Box,
  Zap,
  Play,
  Power,
  Trash2,
  MoreVertical,
  Settings,
  AlertCircle,
  ArrowRight,
  Lightbulb,
  Code2,
  Share2,
  Clock,
  Shield,
  RefreshCw,
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

const nodeTypes = [
  {
    title: "Trigger Nodes",
    icon: Zap,
    description: "Start your workflow in response to events",
    examples: [
      "Webhook triggers",
      "Schedule triggers",
      "App event triggers"
    ]
  },
  {
    title: "Action Nodes",
    icon: Box,
    description: "Perform specific tasks in your workflow",
    examples: [
      "Data manipulation",
      "API calls",
      "File operations"
    ]
  },
  {
    title: "Custom Nodes",
    icon: Code2,
    description: "Create your own nodes for specific needs",
    examples: [
      "Community nodes",
      "Custom integrations",
      "Specialized operations"
    ]
  }
];

const nodeOperations = [
  {
    title: "Trigger Operations",
    icon: Zap,
    description: "Start workflows based on events",
    details: [
      "App events (e.g., new email, file upload)",
      "Scheduled triggers",
      "Webhook endpoints"
    ]
  },
  {
    title: "Action Operations",
    icon: Box,
    description: "Perform specific tasks",
    details: [
      "Data processing",
      "API integrations",
      "File operations"
    ]
  }
];

const nodeControls = [
  {
    title: "Test Step",
    icon: Play,
    description: "Run the node to test its functionality"
  },
  {
    title: "Deactivate",
    icon: Power,
    description: "Temporarily disable the node"
  },
  {
    title: "Delete",
    icon: Trash2,
    description: "Remove the node from the workflow"
  },
  {
    title: "More Options",
    icon: MoreVertical,
    description: "Access additional node actions"
  }
];

const nodeSettings = [
  {
    title: "Request Options",
    icon: Settings,
    description: "Configure HTTP request settings"
  },
  {
    title: "Batching",
    icon: Share2,
    description: "Control how to batch input items"
  },
  {
    title: "Timeout",
    icon: Clock,
    description: "Set request timeout duration"
  },
  {
    title: "Error Handling",
    icon: AlertCircle,
    description: "Configure error behavior"
  },
  {
    title: "SSL Settings",
    icon: Shield,
    description: "Manage SSL validation"
  },
  {
    title: "Retry Options",
    icon: RefreshCw,
    description: "Configure retry behavior"
  }
];

export default function AIMarketingN8NNodes() {
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
            <Box className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">Understanding Nodes</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            n8n Nodes: The Building Blocks
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-[#e0e0e0]/80 max-w-2xl mx-auto"
          >
            Learn how to use nodes to create powerful automations
          </motion.p>
        </motion.div>

        {/* Node Types */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {nodeTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#7f5af0]/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                  <type.icon className="w-5 h-5 text-[#7f5af0]" />
                </div>
                <h3 className="text-xl font-bold">{type.title}</h3>
              </div>

              <p className="text-[#e0e0e0]/80 mb-6">{type.description}</p>

              <ul className="space-y-3">
                {type.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#ff6ac1] mt-0.5 flex-shrink-0" />
                    <span className="text-[#e0e0e0]/80">{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Node Operations */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {nodeOperations.map((operation, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#ff6ac1]/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center">
                  <operation.icon className="w-5 h-5 text-[#ff6ac1]" />
                </div>
                <h3 className="text-xl font-bold">{operation.title}</h3>
              </div>

              <p className="text-[#e0e0e0]/80 mb-6">{operation.description}</p>

              <ul className="space-y-3">
                {operation.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#ff6ac1] mt-0.5 flex-shrink-0" />
                    <span className="text-[#e0e0e0]/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Node Controls */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {nodeControls.map((control, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#42d392]/20 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#42d392]/20 flex items-center justify-center">
                  <control.icon className="w-4 h-4 text-[#42d392]" />
                </div>
                <h3 className="text-lg font-bold">{control.title}</h3>
              </div>
              <p className="text-[#e0e0e0]/80 text-sm">{control.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Node Settings */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {nodeSettings.map((setting, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#7f5af0]/20 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                  <setting.icon className="w-4 h-4 text-[#7f5af0]" />
                </div>
                <h3 className="text-lg font-bold">{setting.title}</h3>
              </div>
              <p className="text-[#e0e0e0]/80 text-sm">{setting.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 