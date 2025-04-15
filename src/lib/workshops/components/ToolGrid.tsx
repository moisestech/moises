"use client";

import { motion } from "framer-motion";
import { Company } from "../constants/companies";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ToolGridProps {
  tools: Company[];
  title: string;
  description?: string;
}

export default function ToolGrid({ tools, title, description }: ToolGridProps) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-300">{description}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full group hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                        {tool.name}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        tool.type === 'company' ? 'bg-blue-500/20 text-blue-300' :
                        tool.type === 'platform' ? 'bg-purple-500/20 text-purple-300' :
                        tool.type === 'tool' ? 'bg-green-500/20 text-green-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {tool.type}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 group-hover:text-white/90 transition-colors">
                      {tool.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.category.map(cat => (
                        <span
                          key={cat}
                          className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-medium">Learn more</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 