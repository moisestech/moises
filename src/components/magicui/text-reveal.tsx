"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef, useEffect, useState } from "react";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(200);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  // Split on spaces, so emojis must be surrounded by spaces in the string
  const words = children.split(" ");

  // Calculate dynamic height based on text length
  useEffect(() => {
    if (targetRef.current) {
      const wordCount = words.length;
      // Base height + additional height for longer texts
      const calculatedHeight = Math.max(200, wordCount * 15);
      setContainerHeight(calculatedHeight);
    }
  }, [words.length]);

  return (
    <div 
      ref={targetRef} 
      className={`relative z-0 ${className || ''}`}
      style={{ height: `${containerHeight}px` }}
    >
      <div className="sticky top-0 mx-auto flex h-screen items-center justify-center bg-transparent px-4">
        <span className="flex flex-wrap justify-center p-5 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black/20 dark:text-white/20 md:p-8 lg:p-10">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);
  
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity, y: y }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
}; 