"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function AboutMaskText() {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-cover bg-center">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-foreground text-center text-5xl lg:text-7xl font-bold italic">
            WHO WE ARE
          </p>
        }
        className="h-[55rem] mb-[-12rem]"
      >
        One day, three mangos rolled off a fruit stand and landed right in front
        of a struggling developer. Frustrated with his broken code, he sighed,
        &apos;If only you three knew how to program…&quot; <br />
        To his surprise, the mangos glowed and, through some bizarre cosmic
        glitch, he started writing flawless code. Absolutely stuned, founded{" "}
        <strong>THREE MANGOS</strong>, claiming his secret team of coding mangos
        powered the company. Investors thought it was a joke—until 3MANGOS
        started delivering top-tier software. To this day, no one knows the
        truth… except for the three very, very wise mangos.
      </MaskContainer>
    </div>
  );
}
