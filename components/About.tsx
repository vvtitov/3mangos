import React from "react";
import { AboutMaskText } from "./AboutMaskText";
import { AnimatedTooltipPreview } from "./AnimatedTooltipAbout";

export default function AboutUs() {
  return (
    <section id="about" className="w-full h-full mb-10">
      <div className="relative flex flex-col text-center">
        <div className="justify-center hidden lg:flex lg:p-10">
          <AboutMaskText />
        </div>
        <div className="flex flex-col lg:hidden p-5 bg-primary-foreground dark:bg-primary-foreground gap-10">
          <h1 className="text-5xl text-primary">ABOUT US</h1>
          <p className="text-xl max-w-2xl mx-auto px-8 text-left pb-20 text-balance">
            One day, three mangos rolled off a fruit stand and landed right in
            front of a struggling developer. Frustrated with his broken code, he
            sighed, &apos;If only you three knew how to program…&quot; To his
            surprise, the mangos glowed and, through some bizarre cosmic glitch,
            started writing flawless code. Stunned, he founded{" "}
            <strong>THREE MANGOS</strong>, claiming his secret team of coding
            mangos powered the company. Investors thought it was a joke—until
            3MANGOS started delivering top-tier software. To this day, no one
            knows the truth… except for the three very, very wise mangos.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </section>
  );
}
