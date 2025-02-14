import React from "react";
import { AboutMaskText } from "./AboutMaskText";
import { AnimatedTooltipPreview } from "./AnimatedTooltipAbout";
import { LampContainer } from "./ui/lamp";

export default function AboutUs() {
  return (
    <section id="about" className="w-full mb-2 pt-[100px] lg:pt-0">
      <div className="flex flex-col text-center">
        <div className="justify-center hidden lg:flex lg:px-5">
          <AboutMaskText />
        </div>
        <div className="flex flex-col lg:hidden p-5 bg-primary-foreground dark:bg-primary-foreground gap-10">
          <h1 className="text-4xl text-foreground font-medium italic">
            WHO WE ARE
          </h1>
          <p className="text-xl max-w-2xl mx-auto px-8 text-left text-balance">
            One day, three mangos rolled off a fruit stand and landed right in
            front of a struggling developer. Frustrated with his broken code, he
            sighed, 'If only you three knew how to program...' <br />
            To his surprise, the mangos glowed and, through some bizarre cosmic
            glitch, started writing flawless code. Stunned, he founded{" "}
            <strong className="text-primary">THREE MANGOS</strong>, claiming his
            secret team of coding mangos powered the company. Investors thought
            it was a joke—until we started delivering top-tier software. To this
            day, no one knows the truth… except for the three very, very wise
            mangos.
          </p>
        </div>
        <LampContainer>
          <AnimatedTooltipPreview />
        </LampContainer>
      </div>
    </section>
  );
}
