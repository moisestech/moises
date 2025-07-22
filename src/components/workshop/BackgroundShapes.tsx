import { motion, MotionStyle } from "framer-motion";
import { useMemo } from "react";

const shapeVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: [0.2, 0.4, 0.2],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const rotateVariants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const
    }
  }
};

// Generate random position within constraints
const generatePosition = (minPercent: number, maxPercent: number) => {
  return `${minPercent + Math.random() * (maxPercent - minPercent)}%`;
};

// Generate random size within constraints
const generateSize = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min));
};

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'triangle' | 'line';
  color: string;
  top: string;
  left: string;
  size: number;
  rotation: number;
  variant: 'shape' | 'rotate';
}

export default function BackgroundShapes() {
  const shapes = useMemo(() => {
    const colors = [
      '#00a4e4', // Cyan
      '#e6007e', // Magenta
      '#fce016', // Yellow
      '#ff6ac1', // Pink
      '#7f5af0', // Purple
      '#42d392', // Green
      '#ff9f1c', // Orange
      '#4cc9f0', // Light Blue
    ];

    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: ['circle', 'square', 'triangle', 'line'][Math.floor(Math.random() * 4)] as Shape['type'],
      color: colors[Math.floor(Math.random() * colors.length)],
      top: generatePosition(5, 95),
      left: generatePosition(5, 95),
      size: generateSize(16, 48),
      rotation: Math.floor(Math.random() * 360),
      variant: Math.random() > 0.5 ? 'shape' : 'rotate' as Shape['variant']
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute rounded-full"
        style={{
          backgroundColor: "rgba(127, 90, 240, 0.1)",
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "300px",
          height: "300px",
          transform: "translate(-50%, -50%)"
        } as MotionStyle}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />
      {shapes.map((shape: Shape) => {
        const shapeStyles: MotionStyle = {
          position: "absolute",
          top: shape.top,
          left: shape.left,
          width: `${shape.size}px`,
          height: shape.type === 'line' ? '2px' : `${shape.size}px`,
          transform: `rotate(${shape.rotation}deg)`,
          backgroundColor: shape.color
        };

        let className = "mix-blend-screen ";
        if (shape.type === 'circle') {
          className += "rounded-full ";
        }
        className += shape.type === 'line' ? 'blur-sm' : 'blur-lg';

        return (
          <motion.div
            key={shape.id}
            style={shapeStyles}
            className={className}
            variants={shape.variant === 'shape' ? shapeVariants : rotateVariants}
            initial="initial"
            animate="animate"
          >
            {shape.type === 'triangle' && (
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${shape.size / 2}px solid transparent`,
                  borderRight: `${shape.size / 2}px solid transparent`,
                  borderBottom: `${shape.size}px solid ${shape.color}`,
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
} 