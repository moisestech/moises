import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  id: number;
}

interface CursorTrailProps {
  disabled?: boolean;
}

export const CursorTrail: React.FC<CursorTrailProps> = ({ disabled = false }) => {
  const [points, setPoints] = useState<Point[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastEventRef = useRef<MouseEvent | null>(null);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      lastEventRef.current = e;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          if (lastEventRef.current) {
            const { clientX, clientY } = lastEventRef.current;
            mouseX.set(clientX);
            mouseY.set(clientY);
            idRef.current += 1;
            setPoints(prev => {
              const newPoints = [...prev, { x: clientX, y: clientY, id: idRef.current }];
              if (newPoints.length > 20) {
                return newPoints.slice(-20);
              }
              return newPoints;
            });
          }
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [disabled, mouseX, mouseY]);

  if (disabled) {
    return null;
  }

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
      {points.map((point) => (
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