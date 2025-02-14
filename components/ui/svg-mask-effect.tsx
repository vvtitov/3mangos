"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 700,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);
  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("w-full relative", className)}
      animate={{
        backgroundColor: isHovered ? "transparent" : "transparent",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute px-20 [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          maskPosition: `${(mousePosition.x ?? 0) - maskSize / 2}px ${
            (mousePosition.y ?? 0) - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          duration: 0,
        }}
      >
        <div className="absolute inset-0 bg-background h-full w-full z-0" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-5xl mx-auto text-center text-primary dark:text-primary text-2xl lg:text-3xl font-bold relative z-20 px-2"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center mx-2 text-primary dark:text-primary">
        {revealText}
      </div>
    </motion.div>
  );
};
