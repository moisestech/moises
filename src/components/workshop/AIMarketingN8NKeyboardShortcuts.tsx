import { motion } from "framer-motion";
import { 
  Keyboard,
  MousePointer,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Copy,
  Pause,
  Scissors,
  Undo2,
  Redo2,
  Play,
  Plus,
  StickyNote,
  Trash2,
  Pin,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  X,
  Square,
  Check,
  Equal,
  Minus,
  PlusCircle,
  Mouse,
  Hand,
  PanelLeft,
  PanelRight,
  FileText,
  FolderOpen,
  Save,
  Search,
  Code2,
  MousePointerClick,
  Command,
  Space,
  Delete,
  Home,
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

const hoverScale = {
  scale: 1.02,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

const Key = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.span
    className={`inline-flex items-center justify-center px-2 py-1 rounded-md bg-[#1a1a1f] border border-[#7f5af0]/20 text-sm font-mono ${className}`}
    whileHover={hoverScale}
  >
    {children}
  </motion.span>
);

const ShortcutGroup = ({ title, icon: Icon, shortcuts }: { 
  title: string, 
  icon: React.ComponentType<{ className?: string }>,
  shortcuts: { keys: React.ReactNode[], description: string }[]
}) => (
  <motion.div
    variants={fadeIn}
    className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#7f5af0]/20 p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#7f5af0]" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <div className="space-y-3">
      {shortcuts.map((shortcut, index) => (
        <div key={`${title}-${index}`} className="flex items-start gap-3">
          <div className="flex gap-1.5 flex-wrap">
            {shortcut.keys.map((key, keyIndex) => (
              <span key={`${title}-${index}-key-${keyIndex}`}>
                {key}
              </span>
            ))}
          </div>
          <span className="text-[#e0e0e0]/80 text-sm">{shortcut.description}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function AIMarketingN8NKeyboardShortcuts() {
  const workflowControls = [
    { keys: [<Key key="ctrl">Ctrl</Key>, <Key key="alt">Alt</Key>, <Key key="n">n</Key>], description: "Create new workflow" },
    { keys: [<Key key="ctrl-o">Ctrl</Key>, <Key key="o">o</Key>], description: "Open workflow" },
    { keys: [<Key key="ctrl-s">Ctrl</Key>, <Key key="s">s</Key>], description: "Save current workflow" },
    { keys: [<Key key="ctrl-z">Ctrl</Key>, <Key key="z">z</Key>], description: "Undo" },
    { keys: [<Key key="ctrl-shift-z">Ctrl</Key>, <Key key="shift">Shift</Key>, <Key key="z">z</Key>], description: "Redo" },
    { keys: [<Key key="ctrl-enter">Ctrl</Key>, <Key key="enter">Enter</Key>], description: "Execute workflow" }
  ];

  const canvasMovement = [
    { keys: [<Key key="ctrl-drag">Ctrl</Key>, <Mouse key="mouse" className="w-4 h-4" />, <Key key="drag">drag</Key>], description: "Move node view" },
    { keys: [<Key key="space">Space</Key>, <Key key="space-drag">drag</Key>], description: "Move node view" },
    { keys: [<Hand key="hand" className="w-4 h-4" />, <Key key="two-fingers">two fingers</Key>], description: "Move node view (touch screen)" }
  ];

  const canvasZoom = [
    { keys: [<Key key="plus">+</Key>, <Key key="equals">=</Key>], description: "Zoom in" },
    { keys: [<Key key="minus">-</Key>, <Key key="underscore">_</Key>], description: "Zoom out" },
    { keys: [<Key key="zero">0</Key>], description: "Reset zoom level" },
    { keys: [<Key key="one">1</Key>], description: "Zoom to fit workflow" },
    { keys: [<Key key="ctrl-wheel">Ctrl</Key>, <Mouse key="mouse-wheel" className="w-4 h-4" />, <Key key="wheel">wheel</Key>], description: "Zoom in/out" }
  ];

  const nodeControls = [
    { keys: [<Key key="ctrl-a">Ctrl</Key>, <Key key="a">a</Key>], description: "Select all nodes" },
    { keys: [<Key key="ctrl-v">Ctrl</Key>, <Key key="v">v</Key>], description: "Paste nodes" },
    { keys: [<Key key="shift-s">Shift</Key>, <Key key="s">s</Key>], description: "Add sticky note" },
    { keys: [<Key key="ctrl-c">Ctrl</Key>, <Key key="c">c</Key>], description: "Copy selected nodes" },
    { keys: [<Key key="ctrl-x">Ctrl</Key>, <Key key="x">x</Key>], description: "Cut selected nodes" },
    { keys: [<Key key="delete">Delete</Key>], description: "Delete selected nodes" },
    { keys: [<Key key="p">P</Key>], description: "Pin data in node" }
  ];

  const nodeNavigation = [
    { keys: [<ArrowUp key="up" className="w-4 h-4" />], description: "Select sibling node above" },
    { keys: [<ArrowDown key="down" className="w-4 h-4" />], description: "Select sibling node below" },
    { keys: [<ArrowLeft key="left" className="w-4 h-4" />], description: "Select node to the left" },
    { keys: [<ArrowRight key="right" className="w-4 h-4" />], description: "Select node to the right" }
  ];

  const nodePanel = [
    { keys: [<Key key="tab">Tab</Key>], description: "Open the Node Panel" },
    { keys: [<Key key="enter">Enter</Key>], description: "Insert selected node into workflow" },
    { keys: [<Key key="esc">Esc</Key>], description: "Close Node panel" }
  ];

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
            <Keyboard className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">Keyboard Shortcuts</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            n8n Keyboard Shortcuts
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-[#e0e0e0]/80 max-w-2xl mx-auto"
          >
            Master the n8n Editor with these keyboard shortcuts and controls
          </motion.p>
        </motion.div>

        {/* Shortcut Groups */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          <ShortcutGroup title="Workflow Controls" icon={FileText} shortcuts={workflowControls} />
          <ShortcutGroup title="Canvas Movement" icon={MousePointer} shortcuts={canvasMovement} />
          <ShortcutGroup title="Canvas Zoom" icon={ZoomIn} shortcuts={canvasZoom} />
          <ShortcutGroup title="Node Controls" icon={PanelLeft} shortcuts={nodeControls} />
          <ShortcutGroup title="Node Navigation" icon={ArrowRight} shortcuts={nodeNavigation} />
          <ShortcutGroup title="Node Panel" icon={PanelRight} shortcuts={nodePanel} />
        </motion.div>
      </div>
    </section>
  );
} 