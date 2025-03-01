"use client";

import React from "react";
import { AboutMaskText } from "./AboutMaskText";
import { AnimatedTooltipPreview } from "./AnimatedTooltipAbout";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";
import { BackgroundLines } from "./ui/background-lines";

export default function AboutUs() {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  return (
    <section id="about" className="w-full h-full">
      <div className="flex flex-col text-center">
        {/* <div className="justify-center hidden lg:flex lg:px-5">
          <AboutMaskText />
        </div> */}
        <div className="flex flex-col bg-primary-foreground gap-10 mt-[2rem] items-start">
          <h1 className="text-4xl font-bold mx-auto ">
            <span
              dangerouslySetInnerHTML={{ __html: dictionary.about.title }}
            />
          </h1>
          <p className="text-lg lg:text-xl max-w-6xl mx-auto px-10 text-left">
            <span dangerouslySetInnerHTML={{ __html: dictionary.about.text }} />
          </p>
        </div>
        <div className="flex flex-col px-5 bg-primary-foreground dark:bg-primary-foreground gap-10 mt-[6rem] lg:mt-[10rem]">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </section>
  );
}
