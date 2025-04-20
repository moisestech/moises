'use client'

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layout, Smartphone, Tablet } from "lucide-react";
import Link from "next/link";
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const landingPages = [
  {
    id: 1,
    title: "Product Launch",
    description: "A high-converting landing page for product launches",
    devices: ["Desktop", "Tablet", "Mobile"],
    image: "/images/landing-pages/product.jpg"
  },
  {
    id: 2,
    title: "Service Showcase",
    description: "Showcase your services with a modern, clean design",
    devices: ["Desktop", "Tablet", "Mobile"],
    image: "/images/landing-pages/service.jpg"
  },
  {
    id: 3,
    title: "Event Registration",
    description: "Capture leads and registrations for your events",
    devices: ["Desktop", "Tablet", "Mobile"],
    image: "/images/landing-pages/event.jpg"
  },
  {
    id: 4,
    title: "App Download",
    description: "Drive app downloads with an engaging landing page",
    devices: ["Desktop", "Tablet", "Mobile"],
    image: "/images/landing-pages/app.jpg"
  }
];

export default function LandingPagesClient() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Examples
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Landing Pages</h1>
          <p className="text-xl text-gray-600">Explore our collection of landing page designs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {landingPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">Landing Page</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {page.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {page.description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Layout className="w-4 h-4 text-purple-600" />
                    <span>Desktop</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Tablet className="w-4 h-4 text-purple-600" />
                    <span>Tablet</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                    <span>Mobile</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  View Design
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 