"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";

interface BackgroundGradientAnimationProps extends ComponentProps<"div"> {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: BackgroundGradientAnimationProps) => {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-transparent",
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("absolute inset-0", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full [filter:url(#blurMe)_blur(40px)]",
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `left-[--x] top-[--y] h-[--size] w-[--size] -translate-x-1/2 -translate-y-1/2`,
            `[--first-color:rgba(var(--first-color-val),1)]`,
            `[--x:50%] [--y:50%] [--size:200px]`,
          )}
          style={
            {
              "--first-color-val": firstColor,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--second-color)_0,_var(--second-color)_50%)_no-repeat]`,
            `left-[--x] top-[--y] h-[--size] w-[--size] -translate-x-1/2 -translate-y-1/2`,
            `[--second-color:rgba(var(--second-color-val),1)]`,
            `[--x:50%] [--y:50%] [--size:200px]`,
          )}
          style={
            {
              "--second-color-val": secondColor,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--third-color)_0,_var(--third-color)_50%)_no-repeat]`,
            `left-[--x] top-[--y] h-[--size] w-[--size] -translate-x-1/2 -translate-y-1/2`,
            `[--third-color:rgba(var(--third-color-val),1)]`,
            `[--x:50%] [--y:50%] [--size:200px]`,
          )}
          style={
            {
              "--third-color-val": thirdColor,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--fourth-color)_0,_var(--fourth-color)_50%)_no-repeat]`,
            `left-[--x] top-[--y] h-[--size] w-[--size] -translate-x-1/2 -translate-y-1/2`,
            `[--fourth-color:rgba(var(--fourth-color-val),1)]`,
            `[--x:50%] [--y:50%] [--size:200px]`,
          )}
          style={
            {
              "--fourth-color-val": fourthColor,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--fifth-color)_0,_var(--fifth-color)_50%)_no-repeat]`,
            `left-[--x] top-[--y] h-[--size] w-[--size] -translate-x-1/2 -translate-y-1/2`,
            `[--fifth-color:rgba(var(--fifth-color-val),1)]`,
            `[--x:50%] [--y:50%] [--size:200px]`,
          )}
          style={
            {
              "--fifth-color-val": fifthColor,
            } as React.CSSProperties
          }
        ></div>
        {interactive && (
          <div
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_var(--pointer-color)_0,_var(--pointer-color)_50%)_no-repeat]`,
              `left-[--x-pointer] top-[--y-pointer] h-full w-full -translate-x-1/2 -translate-y-1/2`,
              `[--pointer-color:rgba(var(--pointer-color-val),0.8)]`,
            )}
            style={
              {
                "--pointer-color-val": pointerColor,
              } as React.CSSProperties
            }
          ></div>
        )}
      </div>
    </div>
  );
}; 