"use client";

import React from "react";
import Carrousel from "./ui/carousel";

export default function MainCarousel() {
  return (
    <>
      <div className="flex overflow-hidden w-full h-full mt-[12vh] justify-center z-0 p-10">
        <Carrousel
          slides={[
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango.png",
            },
            {
              title: "We are 3MANGOS",
              button: "Click me",
              src: "/mango.png",
            },
          ]}
        />
      </div>
    </>
  );
}
