import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      setPoints(prev => {
        const newPoints = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newPoints.length > 20) {
          return newPoints.slice(-20);
        }
        return newPoints;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '2px solid var(--ai24-green)',
          opacity: 0.5
        }}
      />
      {points.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-40"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          style={{
            x: point.x,
            y: point.y,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: 'var(--ai24-green)',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </>
  );
}; 