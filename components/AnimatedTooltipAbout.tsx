"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Vladislav Titov",
    designation: "CEO & Software Engineer",
    image:
      "/vlad.jpeg",
  },
  {
    id: 2,
    name: "Stepan Nikulenko",
    designation: "CTO & Mobile Engineer",
    image:
      "/step.jpeg",
  },
  {
    id: 3,
    name: "Noelia Conti",
    designation: "Test Engineer",
    image:
      "/noe.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex relative justify-center text-start">
      <AnimatedTooltip items={people} />
    </div>
  );
}
