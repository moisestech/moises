import { motion } from "framer-motion";
import { 
  Layout,
  PanelLeft,
  PanelRight,
  Menu,
  Tag,
  Power,
  Share2,
  Save,
  History,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Plus,
  StickyNote,
  Play,
  Trash2,
  MoreVertical,
  Search,
  ArrowRight,
  Lightbulb,
  Code2,
  Zap,
  Box,
  Settings,
  FileText,
  HelpCircle,
  RefreshCw,
  Users,
  Grid
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

const leftPanelItems = [
  {
    title: "Overview",
    icon: Layout,
    description: "Access all workflows and credentials"
  },
  {
    title: "Projects",
    icon: Grid,
    description: "Group workflows and credentials (Pro/Enterprise)"
  },
  {
    title: "Admin Panel",
    icon: Settings,
    description: "Manage instance settings (n8n Cloud)"
  },
  {
    title: "Templates",
    icon: FileText,
    description: "Browse pre-made workflows"
  },
  {
    title: "Variables",
    icon: Code2,
    description: "Store fixed data (Pro/Enterprise)"
  },
  {
    title: "All Executions",
    icon: Play,
    description: "View workflow execution history"
  },
  {
    title: "Help",
    icon: HelpCircle,
    description: "Access n8n resources"
  },
  {
    title: "Update",
    icon: RefreshCw,
    description: "Check for product updates"
  }
];

const topBarItems = [
  {
    title: "Workflow Name",
    icon: FileText,
    description: "Edit your workflow's name"
  },
  {
    title: "Add Tag",
    icon: Tag,
    description: "Organize workflows with tags"
  },
  {
    title: "Active/Inactive",
    icon: Power,
    description: "Toggle workflow status"
  },
  {
    title: "Share",
    icon: Share2,
    description: "Collaborate on workflows"
  },
  {
    title: "Save",
    icon: Save,
    description: "Save workflow changes"
  },
  {
    title: "History",
    icon: History,
    description: "View previous versions"
  }
];

const canvasControls = [
  {
    title: "Zoom Controls",
    icon: ZoomIn,
    description: "Adjust canvas view",
    items: [
      "Fit to screen",
      "Zoom in/out",
      "Tidy up nodes"
    ]
  },
  {
    title: "Test Workflow",
    icon: Play,
    description: "Execute all nodes"
  },
  {
    title: "Add Node",
    icon: Plus,
    description: "Open nodes panel"
  },
  {
    title: "Sticky Note",
    icon: StickyNote,
    description: "Add notes to canvas"
  }
];

const nodeTypes = [
  {
    title: "App/Action Nodes",
    icon: Box,
    description: "Process and send data",
    examples: [
      "Data manipulation",
      "API calls",
      "External events"
    ]
  },
  {
    title: "Trigger Nodes",
    icon: Zap,
    description: "Start workflows",
    examples: [
      "Schedule triggers",
      "Webhook triggers",
      "Event triggers"
    ]
  },
  {
    title: "Core Nodes",
    icon: Code2,
    description: "Provide core functionality",
    examples: [
      "Logic operations",
      "Scheduling",
      "Generic API calls"
    ]
  },
  {
    title: "Cluster Nodes",
    icon: Grid,
    description: "Grouped AI functionality",
    examples: [
      "AI workflows",
      "Complex operations",
      "Grouped tasks"
    ]
  }
];

export default function AIMarketingN8NNavigatingEditorUI() {
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
            <Layout className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">Editor UI Guide</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            Navigating the n8n Editor UI
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
          >
            Learn how to navigate and use the n8n Editor interface
          </motion.p>
        </motion.div>

        {/* Left Panel */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {leftPanelItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-[#7f5af0]" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Bar */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {topBarItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-pink-200/90 dark:border-[#ff6ac1]/20 shadow-sm dark:shadow-none p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-[#ff6ac1]" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Canvas Controls */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {canvasControls.map((control, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-emerald-200/90 dark:border-[#42d392]/20 shadow-sm dark:shadow-none p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#42d392]/20 flex items-center justify-center">
                  <control.icon className="w-5 h-5 text-[#42d392]" />
                </div>
                <h3 className="text-xl font-bold">{control.title}</h3>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-6">{control.description}</p>

              {control.items && (
                <ul className="space-y-3">
                  {control.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-[#42d392] mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-600 dark:text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Node Types */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {nodeTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/90 dark:bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-zinc-200/90 dark:border-[#7f5af0]/20 shadow-sm dark:shadow-none p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                  <type.icon className="w-4 h-4 text-[#7f5af0]" />
                </div>
                <h3 className="text-lg font-bold">{type.title}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="text-zinc-500 dark:text-zinc-500 text-sm">
                    • {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 