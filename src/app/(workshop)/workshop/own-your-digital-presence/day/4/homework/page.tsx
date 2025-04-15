'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const tasks = [
  {
    title: "Final Presentation Preparation",
    description: "Create a 5-minute presentation showcasing your website's key features, design choices, and future plans.",
    deadline: "Before Day 4 Session 1",
    points: 5
  },
  {
    title: "Maintenance Plan",
    description: "Develop a comprehensive maintenance plan for your website, including content updates, technical maintenance, and growth strategies.",
    deadline: "Before Day 4 Session 2",
    points: 5
  },
  {
    title: "Feedback Collection",
    description: "Gather feedback from peers and instructors during the showcase session and document key insights.",
    deadline: "During Day 4 Session 1",
    points: 3
  },
  {
    title: "Future Roadmap",
    description: "Create a 6-month roadmap for your website's growth, including planned features and content updates.",
    deadline: "Before Day 4 Session 2",
    points: 4
  }
];

export default function Day4HomeworkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/workshop/own-your-digital-presence/day/4"
              className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Back to Day 4</span>
            </Link>
            <h1 className="text-lg font-space-mono font-medium text-gray-900">
              Day 4 Homework
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="space-y-8"
        >
          {/* Overview */}
          <motion.section variants={fadeIn} className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-3xl font-space-mono font-bold text-gray-900 mb-4">
              Final Day Preparation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Prepare for the final day of the workshop by creating your presentation and planning for the future of your website. 
              These tasks will help you showcase your work effectively and set yourself up for long-term success.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Due before Day 4</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Total Points: 17</span>
              </div>
            </div>
          </motion.section>

          {/* Tasks Grid */}
          <motion.section variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:bg-teal-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-space-mono font-bold text-gray-900 mb-2">
                      {task.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{task.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{task.deadline}</span>
                      </div>
                      <span className="text-sm font-medium text-teal-600">
                        {task.points} points
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Submission Guidelines */}
          <motion.section variants={fadeIn} className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-space-mono font-bold text-gray-900 mb-4">
              Submission Guidelines
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Submit your presentation slides in PDF format before the showcase session</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Share your maintenance plan and roadmap in the workshop's shared document</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Document your feedback collection process and key insights</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>Be prepared to discuss your plans during the final session</span>
              </li>
            </ul>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
} 