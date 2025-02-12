"use client";

import React from "react";
import Carrousel from "./ui/carousel";

export default function ServicesCarousel() {
  return (
    <>
      <div className="flex overflow-hidden justify-center mt-[2vh]">
        <Carrousel
          slides={[
            {
              title: "Websites",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "Web Apps",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "Desktop Apps",
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
