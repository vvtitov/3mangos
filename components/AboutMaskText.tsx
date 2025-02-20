"use client";
import { MaskContainer } from "./ui/svg-mask-effect";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export function AboutMaskText() {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-cover bg-center mb-[0rem] lg:mb-[-5rem]">
      <MaskContainer
        revealText={
          <h1 className="max-w-4xl mx-auto text-transparent bg-clip-text bg-gradient-to-l from-primary to-primary/80 text-center text-5xl lg:text-7xl font-bold p-2">
            {dictionary.about.title}
          </h1>
        }
        className="h-[30rem] mb-[-5rem] lg:mt-[5rem]"
      >
        <span dangerouslySetInnerHTML={{ __html: dictionary.about.text }} />
      </MaskContainer>
    </div>
  );
}
