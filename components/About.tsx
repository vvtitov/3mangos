import React from "react";
import { AboutMaskText } from "./AboutMaskText";

export default function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="relative justify-center text-center md:my-60 lg:my-80 w-full"
      >
        <div>
          <AboutMaskText />
        </div>
      </div>
    </>
  );
}
