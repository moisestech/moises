"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  RefreshCw, 
  ZoomIn, 
  ZoomOut,
  Zap,
  Code,
  Database,
  MessageSquare,
  Mail,
  Globe,
  Settings,
  AlertCircle,
  LucideIcon
} from "lucide-react";

type NodeType = 'trigger' | 'action' | 'helper' | 'error';

interface NodeStyle {
  icon: LucideIcon;
  headerBg: string;
  borderColor: string;
}

interface NodePosition {
  x: number;
  y: number;
}

interface Node {
  id: number;
  type: NodeType;
  title: string;
  params: string[];
  position: NodePosition;
}

// Node types and their styles
const NODE_TYPES: Record<NodeType, NodeStyle> = {
  trigger: {
    icon: Zap,
    headerBg: "bg-green-500/20",
    borderColor: "border-green-500/30",
  },
  action: {
    icon: Code,
    headerBg: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  helper: {
    icon: Settings,
    headerBg: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
  },
  error: {
    icon: AlertCircle,
    headerBg: "bg-red-500/20",
    borderColor: "border-red-500/30",
  },
};

// Node component
const Node = ({ 
  type, 
  title, 
  params, 
  position, 
  onDrag 
}: { 
  type: NodeType;
  title: string;
  params: string[];
  position: NodePosition;
  onDrag: (oldPos: NodePosition, newPos: NodePosition) => void;
}) => {
  const Icon = NODE_TYPES[type].icon;
  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={(event, info) => onDrag(position, info.point)}
      className={`
        absolute w-[200px] min-h-[100px] rounded-lg p-4
        ${NODE_TYPES[type].borderColor}
        border-2 bg-black/50 backdrop-blur-sm
        cursor-move
      `}
      style={{ left: position.x, top: position.y }}
    >
      <div className={`${NODE_TYPES[type].headerBg} rounded-t-lg -mx-4 -mt-4 p-2 mb-2`}>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
      </div>
      <div className="space-y-2">
        {params.map((param: string, i: number) => (
          <div key={i} className="text-xs text-white/70">
            {param}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Sidebar component
const Sidebar = ({ onAddNode }: { onAddNode: (type: NodeType) => void }) => {
  return (
    <div className="w-64 h-full bg-black/50 backdrop-blur-sm border-r border-white/10 p-4">
      <h2 className="text-lg font-medium mb-4">Nodes</h2>
      <div className="space-y-2">
        {Object.entries(NODE_TYPES).map(([type, { icon: Icon }]) => (
          <button
            key={type}
            onClick={() => onAddNode(type as NodeType)}
            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Icon className="w-4 h-4" />
            <span className="capitalize">{type}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Toolbar component
const Toolbar = ({ 
  onZoomIn, 
  onZoomOut, 
  onRun, 
  onReset 
}: { 
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRun: () => void;
  onReset: () => void;
}) => {
  return (
    <div className="h-12 bg-black/50 backdrop-blur-sm border-b border-white/10 p-2 flex items-center gap-2">
      <button onClick={onZoomIn} className="p-2 hover:bg-white/5 rounded-lg">
        <ZoomIn className="w-4 h-4" />
      </button>
      <button onClick={onZoomOut} className="p-2 hover:bg-white/5 rounded-lg">
        <ZoomOut className="w-4 h-4" />
      </button>
      <div className="flex-1" />
      <button onClick={onRun} className="p-2 hover:bg-white/5 rounded-lg">
        <Play className="w-4 h-4" />
      </button>
      <button onClick={onReset} className="p-2 hover:bg-white/5 rounded-lg">
        <RefreshCw className="w-4 h-4" />
      </button>
    </div>
  );
};

// Main WorkflowEditor component
export default function WorkflowEditor() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [scale, setScale] = useState(1);

  const handleAddNode = (type: NodeType) => {
    const newNode: Node = {
      id: Date.now(),
      type,
      title: `${type} Node`,
      params: ["Parameter 1", "Parameter 2"],
      position: { x: 100, y: 100 },
    };
    setNodes([...nodes, newNode]);
  };

  const handleNodeDrag = (oldPos: NodePosition, newPos: NodePosition) => {
    setNodes(nodes.map(node => 
      node.position === oldPos 
        ? { ...node, position: newPos }
        : node
    ));
  };

  const handleZoomIn = () => setScale(scale * 1.2);
  const handleZoomOut = () => setScale(scale * 0.8);
  const handleRun = () => console.log("Running workflow");
  const handleReset = () => setNodes([]);

  return (
    <div className="h-full flex">
      <Sidebar onAddNode={handleAddNode} />
      <div className="flex-1 flex flex-col">
        <Toolbar 
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onRun={handleRun}
          onReset={handleReset}
        />
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale }}
          >
            {nodes.map(node => (
              <Node
                key={node.id}
                type={node.type}
                title={node.title}
                params={node.params}
                position={node.position}
                onDrag={handleNodeDrag}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 