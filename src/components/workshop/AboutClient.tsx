'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1/examples" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Learn more about our mission and team</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2024, we're dedicated to helping artists and creatives establish their digital presence. 
              Our team combines technical expertise with creative vision to build beautiful, functional websites.
            </p>
            <p className="text-gray-600">
              We believe that every artist deserves a platform to showcase their work and connect with their audience. 
              Our mission is to make web development accessible and empowering for the creative community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-purple-600">About</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              description: "Empowering artists with the tools and knowledge to build their digital presence.",
              icon: "🎯"
            },
            {
              title: "Our Values",
              description: "Creativity, accessibility, and community are at the heart of everything we do.",
              icon: "❤️"
            },
            {
              title: "Our Vision",
              description: "A world where every artist has the digital tools they need to succeed.",
              icon: "✨"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 