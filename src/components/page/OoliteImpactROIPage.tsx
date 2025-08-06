"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart3, 
  Heart, 
  Globe, 
  Award,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
  Star,
  Sparkles,
  Calendar,
  MapPin,
  Zap,
  Eye,
  ArrowRight,
  X
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { TechNonprofitNavOolite } from '@/components/workshop/TechNonprofitNavOolite';

interface ImpactMetric {
  name: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
  category: 'economic' | 'social' | 'environmental' | 'artistic';
  icon: any;
  color: string;
}

interface ROIMetric {
  period: string;
  investment: number;
  return: number;
  multiplier: number;
  description: string;
}

const impactMetrics: ImpactMetric[] = [
  {
    name: "Economic Impact",
    value: "$240K",
    change: 200,
    trend: 'up',
    description: "Total economic value generated (3x multiplier)",
    category: 'economic',
    icon: DollarSign,
    color: "#00FFFF"
  },
  {
    name: "Artists Served",
    value: "30+",
    change: 15,
    trend: 'up',
    description: "Direct beneficiaries of lab resources",
    category: 'social',
    icon: Users,
    color: "#0080FF"
  },
  {
    name: "Workshops Delivered",
    value: "24",
    change: 8,
    trend: 'up',
    description: "Educational sessions completed",
    category: 'artistic',
    icon: Award,
    color: "#8000FF"
  },
  {
    name: "Community Engagement",
    value: "500+",
    change: 25,
    trend: 'up',
    description: "Total community interactions",
    category: 'social',
    icon: Heart,
    color: "#FF0080"
  },
  {
    name: "Local Investment",
    value: "70%",
    change: 5,
    trend: 'up',
    description: "Percentage of budget spent locally",
    category: 'economic',
    icon: MapPin,
    color: "#00FF80"
  },
  {
    name: "Carbon Reduction",
    value: "2.5T",
    change: -15,
    trend: 'down',
    description: "CO2 emissions reduced through digital tools",
    category: 'environmental',
    icon: Globe,
    color: "#FF8000"
  }
];

const roiMetrics: ROIMetric[] = [
  {
    period: "Year 1",
    investment: 80000,
    return: 240000,
    multiplier: 3.0,
    description: "Initial investment and projected returns"
  },
  {
    period: "Year 2",
    investment: 60000,
    return: 200000,
    multiplier: 3.3,
    description: "Optimized operations and expanded impact"
  },
  {
    period: "Year 3",
    investment: 50000,
    return: 180000,
    multiplier: 3.6,
    description: "Sustainable model with continued growth"
  }
];

const impactStories = [
  {
    title: "Resident Artist Success",
    description: "Local artist increased digital art sales by 300% using lab resources",
    impact: "+300%",
    category: "Economic",
    color: "#00FFFF"
  },
  {
    title: "Community Workshop Impact",
    description: "500+ community members engaged through free digital art workshops",
    impact: "500+",
    category: "Social",
    color: "#0080FF"
  },
  {
    title: "Youth Program Success",
    description: "50+ students developed digital portfolios and skills",
    impact: "50+",
    category: "Educational",
    color: "#8000FF"
  },
  {
    title: "Environmental Impact",
    description: "Reduced traditional art supply waste through digital tools",
    impact: "-40%",
    category: "Environmental",
    color: "#FF0080"
  }
];

export default function OoliteImpactROIPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedMetric, setSelectedMetric] = useState<ImpactMetric | null>(null);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return ArrowUp;
      case 'down':
        return ArrowDown;
      case 'stable':
        return Minus;
    }
  };

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      case 'stable':
        return 'text-gray-500';
    }
  };

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
              <Target className={`w-4 h-4 ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-[#00FFFF]' : 'text-[#0080FF]'}`}>
                Impact & ROI Analysis
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Digital Arts Lab Impact & ROI
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-[#00FFFF]/80' : 'text-[#0080FF]/80]'}`}>
              Comprehensive analysis of our economic, social, and artistic impact with measurable returns on investment
            </p>
          </motion.div>

          {/* Impact Overview Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Total ROI", value: "3.0x", icon: TrendingUp, color: "#00FFFF" },
              { label: "Economic Impact", value: "$240K", icon: DollarSign, color: "#0080FF" },
              { label: "Artists Served", value: "30+", icon: Users, color: "#8000FF" },
              { label: "Community Reach", value: "500+", icon: Heart, color: "#FF0080" }
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

      {/* Impact Metrics Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Key Impact Metrics
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Measurable outcomes across economic, social, environmental, and artistic dimensions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const TrendIcon = getTrendIcon(metric.trend);
              
              return (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`rounded-xl overflow-hidden cursor-pointer backdrop-blur-sm border hover:shadow-lg transition-all duration-300 ${
                    isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                  }`}
                  onClick={() => setSelectedMetric(metric)}
                >
                  {/* Metric Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: metric.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                          {metric.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className={`text-2xl font-bold`} style={{ color: metric.color }}>
                            {metric.value}
                          </span>
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                            metric.trend === 'up' ? 'bg-green-500/20 text-green-400' :
                            metric.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            <TrendIcon className="w-3 h-3" />
                            <span>{Math.abs(metric.change)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {metric.description}
                    </p>
                  </div>

                  {/* Metric Details */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Category</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize`} style={{ backgroundColor: `${metric.color}20`, color: metric.color }}>
                          {metric.category}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Trend</span>
                        <div className={`flex items-center gap-1 ${getTrendColor(metric.trend)}`}>
                          <TrendIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {metric.trend === 'up' ? 'Increasing' : 
                             metric.trend === 'down' ? 'Decreasing' : 'Stable'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Return on Investment Analysis
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Detailed breakdown of investment returns across multiple years
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {roiMetrics.map((roi, index) => (
              <motion.div
                key={roi.period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className={`rounded-xl p-8 backdrop-blur-sm border ${
                  isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                } text-center`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {roi.period}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className={`text-3xl font-bold mb-2`} style={{ color: '#00FFFF' }}>
                      {roi.multiplier}x ROI
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Return Multiplier
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className={`text-xl font-bold mb-1`} style={{ color: '#0080FF' }}>
                        ${roi.investment.toLocaleString()}K
                      </div>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Investment
                      </p>
                    </div>
                    <div>
                      <div className={`text-xl font-bold mb-1`} style={{ color: '#8000FF' }}>
                        ${roi.return.toLocaleString()}K
                      </div>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Return
                      </p>
                    </div>
                  </div>
                  
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {roi.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Impact Stories
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Real stories of transformation and success from our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className={`rounded-xl p-8 backdrop-blur-sm border ${
                  isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${story.color}20` }}>
                    <Star className="w-6 h-6" style={{ color: story.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      {story.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-2xl font-bold`} style={{ color: story.color }}>
                        {story.impact}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium`} style={{ backgroundColor: `${story.color}20`, color: story.color }}>
                        {story.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metric Detail Modal */}
      {selectedMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="max-w-2xl mx-auto p-4">
            <div className={`rounded-xl overflow-hidden ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${selectedMetric.color}20` }}>
                      <selectedMetric.icon className="w-8 h-8" style={{ color: selectedMetric.color }} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        {selectedMetric.name}
                      </h2>
                      <div className={`text-3xl font-bold`} style={{ color: selectedMetric.color }}>
                        {selectedMetric.value}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMetric(null)}
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
                      {selectedMetric.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                        Category
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize`} style={{ backgroundColor: `${selectedMetric.color}20`, color: selectedMetric.color }}>
                        {selectedMetric.category}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                        Trend
                      </h3>
                      <div className={`flex items-center gap-2 ${getTrendColor(selectedMetric.trend)}`}>
                        {(() => {
                          const TrendIcon = getTrendIcon(selectedMetric.trend);
                          return <TrendIcon className="w-5 h-5" />;
                        })()}
                        <span className="font-medium">
                          {selectedMetric.trend === 'up' ? 'Increasing' : 
                           selectedMetric.trend === 'down' ? 'Decreasing' : 'Stable'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Change
                    </h3>
                    <div className={`text-2xl font-bold`} style={{ color: selectedMetric.color }}>
                      {selectedMetric.change > 0 ? '+' : ''}{selectedMetric.change}%
                    </div>
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