"use client";

import React from "react";
import Carrousel from "./ui/carousel";

export default function ServicesCarousel() {
  return (
    <>
      <div className="flex overflow-hidden w-full h-full mt-[12vh] justify-center z-0 p-10">
        <Carrousel
          slides={[
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
          ]}
        />
      </div>
    </>
  );
}
