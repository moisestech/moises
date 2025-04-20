import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FlashyTitleProps {
  title: string;
  Icon: LucideIcon;
  color: string;
  reducedMotion?: boolean;
}

const titleVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    rotateX: 45,
    scale: 0.8
  },
  animate: { 
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const iconVariants = {
  initial: { 
    opacity: 0,
    scale: 0.5,
    rotate: -180
  },
  animate: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function FlashyTitle({ title, Icon, color, reducedMotion = false }: FlashyTitleProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="text-center"
          variants={titleVariants}
        >
          <motion.div
            className="mb-8"
            variants={iconVariants}
            whileHover={reducedMotion ? {} : "hover"}
          >
            <Icon 
              className="w-32 h-32 md:w-48 md:h-48" 
              style={{ 
                color,
                filter: `drop-shadow(0 0 20px ${color}40)`
              }}
            />
          </motion.div>
          <h2 
            className="text-4xl md:text-6xl font-bold"
            style={{
              background: `linear-gradient(45deg, ${color}, ${color}80)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `0 0 20px ${color}40`
            }}
          >
            {title}
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
} 