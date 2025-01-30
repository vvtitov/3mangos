"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function MaskEffect() {
  return (
    <div className="h-full mt-20 md:h-[50rem] md:-mt-40 w-full flex items-center justify-center overflow-hidden bg-cover bg-center">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-orange-300 dark:text-white text-center text-4xl font-bold">
            ABOUT
          </p>
        }
        className="h-[100rem]"
      >
        One day, three mangos rolled off a fruit stand and landed right in front
        of a struggling developer. Frustrated with his broken code, he sighed,
        &apos;If only you three knew how to program…&quot; To his surprise, the
        mangos glowed and, through some bizarre cosmic glitch, started writing
        flawless code. Stunned, he founded <strong>THREE MANGOS</strong>,
        claiming his secret team of coding mangos powered the company. Investors
        thought it was a joke—until 3MANGOS started delivering top-tier
        software. To this day, no one knows the truth… except for the three
        very, very wise mangos.
      </MaskContainer>
    </div>
  );
}
