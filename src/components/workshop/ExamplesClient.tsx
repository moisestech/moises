'use client'

import { motion } from 'framer-motion';
import { ArrowLeft, Image, Layout, Smartphone, Eye, User, Globe } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ExamplesClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Session
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Examples</h1>
          <p className="text-xl text-gray-600">Explore different types of websites and their features</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Portfolio Websites",
              description: "Showcase your work and artistic journey",
              icon: User,
              link: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/portfolios"
            },
            {
              title: "Landing Pages",
              description: "Create focused, conversion-oriented pages",
              icon: Layout,
              link: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/landing-pages"
            },
            {
              title: "Business Websites",
              description: "Professional sites for artists and creatives",
              icon: Globe,
              link: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/websites"
            },
            {
              title: "Case Studies",
              description: "Real-world examples and success stories",
              icon: Eye,
              link: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/case-studies"
            },
            {
              title: "Mobile-First Design",
              description: "Responsive and mobile-optimized examples",
              icon: Smartphone,
              link: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/mobile"
            },
            {
              title: "Visual Galleries",
              description: "Showcase your work with stunning visuals",
              icon: Image,
              link: "/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples/galleries"
            }
          ].map((example, index) => (
            <Link key={example.title} href={example.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <example.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{example.title}</h3>
                </div>
                <p className="text-gray-600">{example.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 