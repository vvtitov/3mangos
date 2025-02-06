"use client";

import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="select-none w-full bg-[var(--background)] dark:bg-[var(--background)]"
      >
        <HeroParallax
          products={[
            {
              title: "Moonbeam",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Cursor",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Rogue",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },

            {
              title: "Editorially",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Editrix AI",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Pixel Perfect",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },

            {
              title: "Algochurn",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Aceternity UI",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Tailwind Master Kit",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "SmartBridge",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Renderwork Studio",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Creme Digital",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Golden Bells Academy",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Invoker Labs",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "E Free Invoice",
              link: "#",
              thumbnail: "/mango-2000x1440.png",
            },
          ]}
        />
      </div>
    </>
  );
}
