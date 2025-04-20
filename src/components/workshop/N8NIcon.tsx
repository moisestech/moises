import { motion } from "framer-motion";
import { SiN8N } from "react-icons/si";

const pulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const glow = {
  boxShadow: [
    "0 0 0 0 rgba(127, 90, 240, 0.4)",
    "0 0 0 20px rgba(127, 90, 240, 0)",
    "0 0 0 0 rgba(127, 90, 240, 0.4)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function N8NIcon({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={pulse}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={glow}
      />
      <SiN8N className="w-full h-full text-[#7f5af0]" />
    </motion.div>
  );
} 