"use client";

import { motion } from "framer-motion";
import { TimelineEvent } from "../constants/timeline";
import Link from "next/link";
import { Calendar, ExternalLink, Github, FileText } from "lucide-react";

interface TimelineSectionProps {
  events: TimelineEvent[];
  title: string;
  description?: string;
}

export default function TimelineSection({ events, title, description }: TimelineSectionProps) {
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } items-center`}
              >
                {/* Event content */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8" : "pl-8"
                }`}>
                  <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.month} {event.year}</span>
                      {event.type === "research" && (
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">
                          Research
                        </span>
                      )}
                      {event.type === "release" && (
                        <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full text-xs">
                          Release
                        </span>
                      )}
                      {event.type === "milestone" && (
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-xs">
                          Milestone
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                    {event.company && (
                      <p className="text-sm text-gray-400 mb-2">by {event.company}</p>
                    )}
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.category.map(cat => (
                        <span
                          key={cat}
                          className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-purple-300 mb-4">
                      Impact: {event.impact}
                    </p>

                    <div className="flex gap-4">
                      <Link
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Learn More
                      </Link>
                      {event.paperUrl && (
                        <Link
                          href={event.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <FileText className="h-4 w-4" />
                          Paper
                        </Link>
                      )}
                      {event.githubUrl && (
                        <Link
                          href={event.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 