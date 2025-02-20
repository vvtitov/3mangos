"use client";

import React from "react";
import Carrousel from "./ui/carousel";

export default function ServicesCarousel() {
  return (
    <>
      <div className="flex overflow-hidden justify-center p-3">
        <Carrousel
          slides={[
            {
              title: "",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
            {
              title: "",
              button: "Click me",
              src: "/mango-2000x1440.png",
            },
          ]}
        />
      </div>
    </>
  );
}
