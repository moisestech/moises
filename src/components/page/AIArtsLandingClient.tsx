'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, BookOpen, Users, Calendar } from "lucide-react";

export default function AIArtsLandingClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Value Proposition */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI & The Arts
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Master the intersection of artificial intelligence and creative expression.
            Transform your artistic practice with cutting-edge AI tools and techniques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/workshop/ai-and-the-arts/intro" 
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Preview
            </Link>
            <Link href="/workshop/ai-and-the-arts/syllabus"
                  className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              View Syllabus
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-gray-300">Multiple ways to engage with our content</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Self-Paced Course",
                description: "Access all course materials and learn at your own pace",
                icon: BookOpen,
                price: "Free Preview Available",
                link: "/workshop/ai-and-the-arts/course"
              },
              {
                title: "Live Workshop",
                description: "Join our next cohort for live sessions and direct feedback",
                icon: Users,
                price: "Starting at $999",
                link: "/workshop/ai-and-the-arts/live"
              },
              {
                title: "Private Training",
                description: "Customized training for teams and organizations",
                icon: Calendar,
                price: "Custom Quote",
                link: "/workshop/ai-and-the-arts/enterprise"
              }
            ].map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <path.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                <p className="text-gray-400 mb-4">{path.description}</p>
                <p className="text-purple-400 mb-4">{path.price}</p>
                <Link href={path.link}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Content Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Start Learning Now</h2>
            <p className="text-gray-300">Preview our comprehensive curriculum</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/workshop/ai-and-the-arts/intro">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors h-full"
              >
                <h3 className="text-xl font-bold mb-4">Course Introduction</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Overview of AI in arts</li>
                  <li>• Available tools and technologies</li>
                  <li>• Real-world applications</li>
                </ul>
              </motion.div>
            </Link>

            <Link href="/workshop/ai-and-the-arts/tools">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors h-full"
              >
                <h3 className="text-xl font-bold mb-4">Tools Overview</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Video generation</li>
                  <li>• Music composition</li>
                  <li>• Visual art creation</li>
                </ul>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 