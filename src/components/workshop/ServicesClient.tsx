'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Code, Palette, Smartphone, Search, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services = [
  {
    title: "Web Design",
    description: "Create beautiful, responsive websites that showcase your work and connect with your audience.",
    icon: Palette,
    features: ["Custom Design", "Mobile Responsive", "User Experience"]
  },
  {
    title: "Web Development",
    description: "Build fast, secure, and scalable websites using modern technologies and best practices.",
    icon: Code,
    features: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Mobile Apps",
    description: "Extend your digital presence with native mobile applications for iOS and Android.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-Platform"]
  },
  {
    title: "SEO Optimization",
    description: "Improve your website's visibility in search engines and attract more visitors.",
    icon: Search,
    features: ["Keyword Research", "Content Optimization", "Technical SEO"]
  },
  {
    title: "Social Media",
    description: "Manage your social media presence and engage with your audience effectively.",
    icon: Users,
    features: ["Content Strategy", "Community Management", "Analytics"]
  },
  {
    title: "Performance",
    description: "Optimize your website's speed and performance for better user experience.",
    icon: Zap,
    features: ["Speed Optimization", "Caching", "Image Optimization"]
  }
];

export default function ServicesClient() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital presence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              >
                <div className="p-3 rounded-lg bg-purple-100 w-fit mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 