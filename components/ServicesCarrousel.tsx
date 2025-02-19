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
              title: "Extraordinary UX Design 1",
              button: "View More",
              src: "https://example.com/ux-design-1.jpg",
            },
            {
              title: "Extraordinary UX Design 2",
              button: "View More",
              src: "https://example.com/ux-design-2.jpg",
            },
            {
              title: "Extraordinary UX Design 3",
              button: "View More",
              src: "https://example.com/ux-design-3.jpg",
            },
            {
              title: "Extraordinary UX Design 4",
              button: "View More",
              src: "https://example.com/ux-design-4.jpg",
            },
            {
              title: "Extraordinary UX Design 5",
              button: "View More",
              src: "https://example.com/ux-design-5.jpg",
            },
            {
              title: "Extraordinary UX Design 6",
              button: "View More",
              src: "https://example.com/ux-design-6.jpg",
            },
          ]}
        />
      </div>
    </>
  );
}
