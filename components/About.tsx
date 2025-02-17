import React from "react";
import { AboutMaskText } from "./AboutMaskText";
import { AnimatedTooltipPreview } from "./AnimatedTooltipAbout";
import { LampContainer } from "./ui/lamp";

export default function AboutUs() {
  return (
    <section id="about" className="w-full h-full">
      <div className="flex flex-col text-center">
        <div className="justify-center hidden lg:flex lg:px-5">
          <AboutMaskText />
        </div>
        <div className="flex flex-col lg:hidden bg-primary-foreground dark:bg-primary-foreground gap-10 mt-[8rem]">
          <h1 className="text-4xl font-bold italic bg-clip-text text-transparent bg-gradient-to-l from-primary/80 to-secondary">
            WHO WE ARE
          </h1>
          <p className="text-xl max-w-2xl mx-auto px-10 text-left text-balanced font-medium">
            One day, three mangos rolled off a fruit stand and landed right in
            front of a struggling developer. Frustrated with his broken code, he
            sighed, &apos;If only you three knew how to program…&quot; To his
            surprise, the mangos glowed and, through some bizarre cosmic glitch,
            he started writing flawless code. Absolutely stunned, he founded{" "}
            <strong className="text-primary">THREE MANGOS</strong>, claiming his
            secret team of coding mangos powered the company. Investors thought
            it was a joke—until we started delivering top-tier software. To this
            day, no one knows the truth… except for the three very, very wise
            mangos.
          </p>
        </div>
        <div className="flex flex-col px-5 bg-primary-foreground dark:bg-primary-foreground gap-10 mt-[4rem] lg:mt-[10rem]">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </section>
  );
}
