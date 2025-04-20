'use client'

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    client: "Fashion Retailer",
    description: "Transformed an outdated e-commerce platform into a modern, user-friendly experience",
    results: "Increased conversion rate by 45% and reduced bounce rate by 30%",
    duration: "3 months",
    team: "5 members",
    image: "/images/case-studies/ecommerce.jpg"
  },
  {
    id: 2,
    title: "Mobile App Development",
    client: "Health & Wellness",
    description: "Created a mobile app to help users track their fitness goals and nutrition",
    results: "Achieved 100,000+ downloads in the first month",
    duration: "6 months",
    team: "8 members",
    image: "/images/case-studies/mobile.jpg"
  },
  {
    id: 3,
    title: "Website Redesign",
    client: "Creative Agency",
    description: "Redesigned the agency's website to better showcase their portfolio and services",
    results: "Increased lead generation by 60% and improved user engagement",
    duration: "2 months",
    team: "4 members",
    image: "/images/case-studies/website.jpg"
  }
];

export default function CaseStudiesClient() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600">Discover our successful projects and client stories</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-purple-600">Case Study</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BarChart className="w-4 h-4 text-purple-600" />
                    <span>{study.results}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>{study.team}</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  View Case Study
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