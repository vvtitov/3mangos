"use client";

import React from "react";
import { AboutMaskText } from "./AboutMaskText";
import { AnimatedTooltipPreview } from "./AnimatedTooltipAbout";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export default function AboutUs() {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  return (
    <section id="about" className="w-full h-full">
      <div className="flex flex-col text-center">
        <div className="justify-center hidden lg:flex lg:px-5">
          <AboutMaskText />
        </div>
        <div className="flex flex-col lg:hidden bg-primary-foreground dark:bg-primary-foreground gap-10 mt-[8rem]">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-secondary">
            {dictionary.about.title}
          </h1>
          <p className="text-2xl max-w-2xl mx-auto px-10 text-left text-balanced">
            {dictionary.about.text}
          </p>
        </div>
        <div className="flex flex-col px-5 bg-primary-foreground dark:bg-primary-foreground gap-10 mt-[4rem] lg:mt-[10rem]">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </section>
  );
}
