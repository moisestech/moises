import { motion } from "framer-motion";
import { Key, ChevronRight, AlertCircle, ExternalLink, Lock, CreditCard } from "lucide-react";
import BackgroundShapes from "./BackgroundShapes";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AIMarketingSetupOpenAI() {
  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundShapes />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#7f5af0]/10 border border-[#7f5af0]/20 mb-6">
            <Key className="w-4 h-4 text-[#7f5af0]" />
            <span className="text-sm font-medium">OpenAI API Setup</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7f5af0] via-[#ff6ac1] to-[#42d392]"
          >
            Getting Started with OpenAI
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-[#e0e0e0]/80 max-w-2xl mx-auto"
          >
            Follow our step-by-step guide to set up your OpenAI API key and integrate it with n8n
          </motion.p>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
        >
          {/* Left Column - Steps */}
          <motion.div 
            variants={fadeIn}
            className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#7f5af0]/20 p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#7f5af0]/20 flex items-center justify-center">
                <Key className="w-4 h-4 text-[#7f5af0]" />
              </span>
              Step-by-Step Guide
            </h3>
            
            <ol className="space-y-4">
              {[
                "Visit OpenAI's platform at platform.openai.com",
                "Sign up or log in to your OpenAI account",
                "Go to the API section in your account dashboard",
                "Click on 'Create new secret key'",
                "Copy and securely store your API key",
                "Set up billing information to activate the API",
                "Add the API key to n8n's credentials"
              ].map((step, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#7f5af0]/5 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#7f5af0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-[#7f5af0]">{index + 1}</span>
                  </span>
                  <span className="text-[#e0e0e0]/90">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Right Column - API Key Example */}
          <motion.div variants={fadeIn} className="space-y-8">
            {/* API Key Example */}
            <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#ff6ac1]/20 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff6ac1]/20 flex items-center justify-center">
                  <Key className="w-4 h-4 text-[#ff6ac1]" />
                </span>
                API Key Format
              </h3>
              
              <p className="text-[#e0e0e0]/90 mb-4">
                When you get your API key, it will look something like this:
              </p>
              
              <div className="bg-black/50 p-4 rounded-lg border border-[#ff6ac1]/10">
                <pre className="font-mono text-sm text-[#e0e0e0]/90 overflow-x-auto">
                  sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </pre>
              </div>
              
              <div className="flex items-start gap-3 mt-4 p-4 rounded-lg bg-[#ff6ac1]/5 border border-[#ff6ac1]/10">
                <AlertCircle className="w-5 h-5 text-[#ff6ac1] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#e0e0e0]/80">
                  This is just an example format. Never share your actual API key with anyone!
                </p>
              </div>
            </div>

            {/* Security Tips */}
            <div className="bg-[#0a0a0f]/80 backdrop-blur-xl rounded-xl border border-[#42d392]/20 p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#42d392]/20 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-[#42d392]" />
                </span>
                Security Best Practices
              </h3>
              
              <ul className="space-y-3">
                {[
                  "Store your API key securely in n8n's credentials",
                  "Use environment variables for self-hosted setups",
                  "Never commit API keys to version control",
                  "Rotate keys regularly for enhanced security",
                  "Monitor API usage for unauthorized access"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#42d392] mt-0.5 flex-shrink-0" />
                    <span className="text-[#e0e0e0]/80">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={fadeIn}
          className="text-center"
        >
          <a 
            href="https://platform.openai.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7f5af0] hover:bg-[#7f5af0]/90 transition-colors text-white font-medium"
          >
            Get Your API Key
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 