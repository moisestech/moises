import { motion } from "framer-motion";
import { FaCircleNodes } from "react-icons/fa6";
import { LuWorkflow } from "react-icons/lu";
import { 
  TbAdjustmentsDown,
  TbArrowCurveRight,
  TbArrowDownLeftCircle,
  TbArrowGuide,
  TbArrowsRandom,
  TbRobot,
  TbBinaryTree,
  TbBinaryTree2
} from "react-icons/tb";
import { useEffect, useState } from "react";

const icons = [
  { Icon: FaCircleNodes, color: "#7f5af0" },
  { Icon: LuWorkflow, color: "#ff6ac1" },
  { Icon: TbRobot, color: "#42d392" },
  { Icon: TbBinaryTree, color: "#7f5af0" },
  { Icon: TbArrowCurveRight, color: "#ff6ac1" },
  { Icon: TbAdjustmentsDown, color: "#42d392" },
  { Icon: TbArrowsRandom, color: "#7f5af0" },
  { Icon: TbArrowDownLeftCircle, color: "#ff6ac1" },
  { Icon: TbArrowGuide, color: "#42d392" },
  { Icon: TbBinaryTree2, color: "#7f5af0" }
];

const carouselVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 20,
        ease: "linear" as const
      }
    }
  }
};

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
  hover: {
    scale: 1.2,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

export default function IconCarousel({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative w-full h-32 overflow-hidden">
      <motion.div
        className="absolute flex gap-8"
        variants={reducedMotion ? {} : carouselVariants}
        initial="initial"
        animate="animate"
      >
        {/* First set of icons */}
        {icons.map(({ Icon, color }, index) => (
          <motion.div
            key={`first-${index}`}
            className="w-16 h-16 flex items-center justify-center"
            variants={iconVariants}
            whileHover={reducedMotion ? {} : "hover"}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {icons.map(({ Icon, color }, index) => (
          <motion.div
            key={`second-${index}`}
            className="w-16 h-16 flex items-center justify-center"
            variants={iconVariants}
            whileHover={reducedMotion ? {} : "hover"}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 