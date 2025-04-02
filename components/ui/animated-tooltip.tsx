"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group -mr-4"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatedItem
            item={item}
            isHovered={hoveredIndex === item.id}
          />
        </div>
      ))}
    </div>
  );
};

const AnimatedItem = ({
  item,
  isHovered,
}: {
  item: {
    id: number;
    name: string;
    designation: string;
    image: string;
  };
  isHovered: boolean;
}) => {
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const halfWidth = element.offsetWidth / 2;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    x.set(offsetX - halfWidth);
  };

  return (
    <>
      <div
        className="flex items-center justify-center rounded-full cursor-pointer relative h-16 w-16 border-2 group-hover:scale-125 group-hover:z-30 border-white transition duration-500"
        onMouseMove={handleMouseMove}
      >
        <Image
          src={item.image}
          fill
          className="rounded-full object-cover object-top"
          alt={item.name}
        />
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-20 -left-[3rem] -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-secondary-foreground z-50 shadow-xl px-4 py-2"
          >
            <div className="absolute inset-x-10 z-30 w-[40%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-1" />
            <div className="absolute left-10 w-[60%] z-30 -bottom-px bg-gradient-to-r from-transparent via-orange-300 to-transparent h-1" />
            <div className="font-bold text-primary relative z-30 text-base">
              {item.name}
            </div>
            <div className="text-primary-foreground text-lg md:text-xl">
              {item.designation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
