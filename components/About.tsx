import React from "react";
import { MaskEffect } from "./MaskText";

export default function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="relative justify-center text-center md:my-60 lg:my-80 w-full"
      >
        <div>
          <MaskEffect />
        </div>
      </div>
    </>
  );
}
