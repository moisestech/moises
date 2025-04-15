'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const pricingPlans = [
  {
    name: 'Basic',
    price: '$19',
    description: 'Perfect for getting started',
    features: [
      'Single website',
      'Basic analytics',
      'Community support',
      'Basic templates'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Best for growing businesses',
    features: [
      'Up to 5 websites',
      'Advanced analytics',
      'Priority support',
      'Premium templates',
      'Custom domains',
      'SEO tools'
    ],
    cta: 'Try Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited websites',
      'Enterprise analytics',
      'Dedicated support',
      'Custom templates',
      'Multiple domains',
      'Advanced SEO tools',
      'API access'
    ],
    cta: 'Contact Us',
    popular: false
  }
];

export default function PricingClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeIn}
              className={`
                relative rounded-2xl p-8 
                ${plan.popular 
                  ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50' 
                  : 'bg-white/5 border border-white/10'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 