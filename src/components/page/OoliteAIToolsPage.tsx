"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Bot, 
  Code2, 
  Database, 
  Settings, 
  Zap, 
  Brain, 
  MessageSquare, 
  Mail, 
  Globe, 
  Shield, 
  DollarSign,
  Play,
  Pause,
  RotateCcw,
  Eye,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Terminal,
  Workflow,
  Network,
  Webhook,
  X
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';

interface AITool {
  name: string;
  description: string;
  category: 'automation' | 'ai' | 'integration' | 'development';
  icon: any;
  features: string[];
  status: 'active' | 'planned' | 'beta';
  documentation: string;
  color: string;
}

interface WorkflowItem {
  name: string;
  description: string;
  triggers: string[];
  actions: string[];
  complexity: 'basic' | 'intermediate' | 'advanced';
  useCase: string;
  color: string;
}

const aiTools: AITool[] = [
  {
    name: "n8n Automation Platform",
    description: "Open-source workflow automation tool for connecting apps and services",
    category: 'automation',
    icon: Workflow,
    features: ["Visual workflow builder", "200+ integrations", "Self-hosted", "Webhook support"],
    status: 'active',
    documentation: "https://docs.n8n.io",
    color: "#00FFFF"
  },
  {
    name: "OpenAI API Integration",
    description: "GPT-4 and other AI models for content generation and analysis",
    category: 'ai',
    icon: Brain,
    features: ["Text generation", "Image analysis", "Code assistance", "Custom fine-tuning"],
    status: 'active',
    documentation: "https://platform.openai.com/docs",
    color: "#0080FF"
  },
  {
    name: "Qdrant Vector Database",
    description: "High-performance vector similarity search for RAG applications",
    category: 'ai',
    icon: Database,
    features: ["Vector search", "Metadata filtering", "Real-time updates", "Scalable architecture"],
    status: 'active',
    documentation: "https://qdrant.tech/documentation",
    color: "#8000FF"
  },
  {
    name: "Flowise AI Agents",
    description: "Visual AI agent builder for conversational AI applications",
    category: 'ai',
    icon: Bot,
    features: ["Drag-and-drop interface", "Multi-modal agents", "API endpoints", "Custom tools"],
    status: 'planned',
    documentation: "https://docs.flowiseai.com",
    color: "#FF0080"
  },
  {
    name: "Telegram Bot API",
    description: "Messaging platform integration for automated communications",
    category: 'integration',
    icon: MessageSquare,
    features: ["Message handling", "File sharing", "Group management", "Webhook support"],
    status: 'active',
    documentation: "https://core.telegram.org/bots/api",
    color: "#00FF80"
  },
  {
    name: "Custom API Development",
    description: "Tailored API endpoints for specific lab requirements",
    category: 'development',
    icon: Network,
    features: ["RESTful APIs", "GraphQL support", "Authentication", "Rate limiting"],
    status: 'active',
    documentation: "Internal documentation",
    color: "#FF8000"
  }
];

const workflows: WorkflowItem[] = [
  {
    name: "Artist Registration Automation",
    description: "Automated onboarding process for new artists",
    triggers: ["New artist registration", "Form submission", "Email notification"],
    actions: ["Create user account", "Send welcome email", "Assign workshop access", "Update database"],
    complexity: 'basic',
    useCase: "Streamline artist onboarding process",
    color: "#00FFFF"
  },
  {
    name: "Workshop Reminder System",
    description: "Automated reminders for upcoming workshops",
    triggers: ["Workshop scheduled", "24 hours before", "1 hour before"],
    actions: ["Send email reminder", "Update calendar", "Check attendance", "Follow-up if needed"],
    complexity: 'intermediate',
    useCase: "Improve workshop attendance rates",
    color: "#0080FF"
  },
  {
    name: "Content Generation Pipeline",
    description: "AI-powered content creation for marketing materials",
    triggers: ["New workshop created", "Weekly content schedule", "Manual request"],
    actions: ["Generate social media posts", "Create workshop descriptions", "Design graphics", "Schedule posts"],
    complexity: 'advanced',
    useCase: "Automate marketing content creation",
    color: "#8000FF"
  },
  {
    name: "Equipment Booking System",
    description: "Automated equipment reservation and management",
    triggers: ["Equipment booking request", "Availability check", "Booking confirmation"],
    actions: ["Check availability", "Send confirmation", "Update calendar", "Remind before pickup"],
    complexity: 'intermediate',
    useCase: "Streamline equipment management",
    color: "#FF0080"
  }
];

export default function OoliteAIToolsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400';
      case 'beta':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'basic':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredTools = activeCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <TechNonprofitNavOolite />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
              isDark 
                ? 'bg-[#00FFFF]/10 border border-[#00FFFF]/30 backdrop-blur-sm' 
                : 'bg-[#00FFFF]/20 border border-[#00FFFF]/50 backdrop-blur-sm'
            } mb-6`}>
              <Cpu className={`w-4 h-4 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`}>
                AI Tools & Automation
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Digital Arts Lab AI Tools
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#00FFFF]/80' : 'text-[#0080FF]/80]'}`}>
              Advanced AI tools and automation workflows to enhance digital arts education and streamline operations
            </p>
          </motion.div>

          {/* Tools Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Active Tools", value: "4", icon: Cpu, color: "#00FFFF" },
              { label: "Automation Workflows", value: "4", icon: Workflow, color: "#0080FF" },
              { label: "API Integrations", value: "200+", icon: Network, color: "#8000FF" },
              { label: "Success Rate", value: "98%", icon: CheckCircle, color: "#FF0080" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-xl backdrop-blur-sm border ${
                    isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                  } text-center`}
                >
                  <div className="relative mb-4">
                    <Icon className="h-12 w-12 mx-auto transition-transform duration-300 group-hover:scale-110" style={{ color: stat.color }} />
                    <div className={`absolute inset-0 rounded-full blur-lg opacity-20`} style={{ backgroundColor: stat.color }} />
                  </div>
                  <div className={`text-3xl font-bold mb-2`} style={{ color: stat.color }}>{stat.value}</div>
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-800 relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? isDark 
                    ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                    : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                  : isDark 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              <Cpu className="w-5 h-5" />
              All Tools
            </button>
            {[
              { key: 'automation', label: 'Automation', icon: Workflow, color: '#00FFFF' },
              { key: 'ai', label: 'AI & ML', icon: Brain, color: '#0080FF' },
              { key: 'integration', label: 'Integration', icon: Network, color: '#8000FF' },
              { key: 'development', label: 'Development', icon: Code2, color: '#FF0080' }
            ].map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? isDark 
                        ? 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30' 
                        : 'bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30'
                      : isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" style={{ color: category.color }} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              AI Tools & Platforms
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Comprehensive suite of AI tools and automation platforms powering the Digital Arts Lab
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => {
              const Icon = tool.icon;
              
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm border hover:shadow-lg transition-all duration-300 ${
                    isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                  }`}
                  onClick={() => setSelectedTool(tool)}
                >
                  {/* Tool Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${tool.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: tool.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                          {tool.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                          {tool.status}
                        </span>
                      </div>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {tool.description}
                    </p>
                  </div>

                  {/* Tool Features */}
                  <div className="p-6">
                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-center gap-2 text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <CheckCircle className="w-4 h-4" style={{ color: tool.color }} />
                          {feature}
                        </div>
                      ))}
                      {tool.features.length > 3 && (
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          +{tool.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <button
                      className={`w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isDark 
                          ? 'bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30' 
                          : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                      }`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Automation Workflows
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Streamlined automation workflows to enhance lab operations and user experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className={`rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm border hover:shadow-lg transition-all duration-300 ${
                  isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                }`}
                onClick={() => setSelectedWorkflow(workflow)}
              >
                {/* Workflow Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${workflow.color}20` }}>
                      <Workflow className="w-6 h-6" style={{ color: workflow.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        {workflow.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(workflow.complexity)}`}>
                        {workflow.complexity}
                      </span>
                    </div>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {workflow.description}
                  </p>
                </div>

                {/* Workflow Details */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Triggers
                      </h4>
                      <ul className="space-y-1">
                        {workflow.triggers.slice(0, 2).map((trigger, triggerIndex) => (
                          <li key={triggerIndex} className={`flex items-center gap-2 text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: workflow.color }} />
                            {trigger}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Actions
                      </h4>
                      <ul className="space-y-1">
                        {workflow.actions.slice(0, 2).map((action, actionIndex) => (
                          <li key={actionIndex} className={`flex items-center gap-2 text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <CheckCircle className="w-4 h-4" style={{ color: workflow.color }} />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <strong>Use Case:</strong> {workflow.useCase}
                  </div>
                  
                  <button
                    className={`w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isDark 
                        ? 'bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30' 
                        : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                    }`}
                  >
                    <span>View Workflow</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-4xl mx-auto p-4">
            <div className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${selectedTool.color}20` }}>
                      <selectedTool.icon className="w-8 h-8" style={{ color: selectedTool.color }} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        {selectedTool.name}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedTool.status)}`}>
                        {selectedTool.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTool(null)}
                    className={`p-2 rounded-lg ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Description
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedTool.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                      Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedTool.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                        }`}>
                          <CheckCircle className="w-5 h-5" style={{ color: selectedTool.color }} />
                          <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Documentation
                    </h3>
                    <a
                      href={selectedTool.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isDark 
                          ? 'bg-[#00FFFF]/20 text-[#00FFFF] hover:bg-[#00FFFF]/30' 
                          : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                      }`}
                    >
                      <span>View Documentation</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workflow Detail Modal */}
      {selectedWorkflow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-4xl mx-auto p-4">
            <div className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${selectedWorkflow.color}20` }}>
                      <Workflow className="w-8 h-8" style={{ color: selectedWorkflow.color }} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        {selectedWorkflow.name}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getComplexityColor(selectedWorkflow.complexity)}`}>
                        {selectedWorkflow.complexity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedWorkflow(null)}
                    className={`p-2 rounded-lg ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Description
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedWorkflow.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        Triggers
                      </h3>
                      <ul className="space-y-2">
                        {selectedWorkflow.triggers.map((trigger, index) => (
                          <li key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                            isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                          }`}>
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedWorkflow.color }} />
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {trigger}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        Actions
                      </h3>
                      <ul className="space-y-2">
                        {selectedWorkflow.actions.map((action, index) => (
                          <li key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                            isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                          }`}>
                            <CheckCircle className="w-5 h-5" style={{ color: selectedWorkflow.color }} />
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {action}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Use Case
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedWorkflow.useCase}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 