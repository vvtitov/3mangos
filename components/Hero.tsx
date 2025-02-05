"use client";

import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="select-none w-full bg-[var(--background)] dark:bg-[var(--background)] pt-[120px]"
      >
        <HeroParallax
          products={[
            {
              title: "Moonbeam",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Cursor",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Rogue",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },

            {
              title: "Editorially",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Editrix AI",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Pixel Perfect",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },

            {
              title: "Algochurn",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Aceternity UI",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Tailwind Master Kit",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "SmartBridge",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Renderwork Studio",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Creme Digital",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Golden Bells Academy",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "Invoker Labs",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
            {
              title: "E Free Invoice",
              link: "#contact",
              thumbnail: "/mango-2000x1440.png",
            },
          ]}
        />
      </div>
    </>
  );
}
