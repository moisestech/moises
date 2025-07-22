import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
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

interface IconItem {
  Icon: LucideIcon | typeof FaCircleNodes | typeof LuWorkflow | typeof TbAdjustmentsDown | typeof TbArrowCurveRight | typeof TbArrowDownLeftCircle | typeof TbArrowGuide | typeof TbArrowsRandom | typeof TbRobot | typeof TbBinaryTree | typeof TbBinaryTree2;
  color: string;
  title: string;
}

const icons: IconItem[] = [
  { Icon: FaCircleNodes, color: "#7f5af0", title: "Visual Workflow Builder" },
  { Icon: LuWorkflow, color: "#ff6ac1", title: "Workflow Automation" },
  { Icon: TbRobot, color: "#42d392", title: "AI Integration" },
  { Icon: TbBinaryTree, color: "#7f5af0", title: "Complex Logic" },
  { Icon: TbArrowCurveRight, color: "#ff6ac1", title: "API Connections" },
  { Icon: TbAdjustmentsDown, color: "#42d392", title: "Custom Nodes" },
  { Icon: TbArrowsRandom, color: "#7f5af0", title: "Flexible Triggers" },
  { Icon: TbArrowDownLeftCircle, color: "#ff6ac1", title: "Data Flow" },
  { Icon: TbArrowGuide, color: "#42d392", title: "Guided Automation" },
  { Icon: TbBinaryTree2, color: "#7f5af0", title: "Advanced Workflows" }
];

const iconVariants = {
  enter: { 
    scale: 0.8,
    opacity: 0,
    y: 20
  },
  center: { 
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
  exit: { 
    scale: 0.8,
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeIn" as const
    }
  }
};

const titleVariants = {
  enter: { opacity: 0, y: 20 },
  center: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  exit: { opacity: 0, y: -20 }
};

export default function LargeIconCarousel({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (reducedMotion) {
    const currentIcon = icons[0];
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <currentIcon.Icon 
            className="w-64 h-64 md:w-96 md:h-96 mx-auto" 
            style={{ 
              color: currentIcon.color,
              filter: "drop-shadow(0 0 30px rgba(127, 90, 240, 0.4))"
            }} 
          />
          <h3 className="text-2xl font-bold mt-8">{currentIcon.title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="text-center"
          initial="enter"
          animate="center"
          exit="exit"
          variants={iconVariants}
        >
          <motion.div
            className="w-64 h-64 md:w-96 md:h-96 mx-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {(() => {
              const { Icon, color } = icons[currentIndex];
              return (
                <Icon 
                  className="w-full h-full" 
                  style={{ 
                    color,
                    filter: "drop-shadow(0 0 30px rgba(127, 90, 240, 0.4))"
                  }} 
                />
              );
            })()}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mt-8"
            variants={titleVariants}
          >
            {icons[currentIndex].title}
          </motion.h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 