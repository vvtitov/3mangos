"use client";
import { TabsServices } from "./AnimatedTab";
import AcordionServices from "./AcordionServices";
import ServicesCarousel from "./ServicesCarrousel";
import { FlipWords } from "./ui/flip-words";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export default function Services() {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  const words = [
    dictionary.services.words[0],
    dictionary.services.words[1],
    dictionary.services.words[2],
    dictionary.services.words[3],
  ];

  return (
    <section id="services" className="flex flex-col w-full mx-auto">
      <div className="flex flex-row justify-center items-center mx-auto mt-10">
        <h1 className="text-5xl text-secondary-foreground mx-auto hover:rotate-2 -rotate-3 transition-transform duration-500">
          {dictionary.services.title}
          <FlipWords
            words={words}
            className="text-primary dark:text-primary text-5xl mx-auto font-bold"
          />
        </h1>
      </div>

      <div className="flex flex-col h-full items-center justify-center p-10 my-6">
        <TabsServices />
      </div>

      <div className="flex flex-col items-center max-w-5xl w-full mx-auto px-10 pt-20">
        <h1 className="text-4xl text-center mb-10 animate-fade-in">
          {dictionary.services.carouselTitle}
        </h1>
      </div>
      <ServicesCarousel />

      <div className="flex flex-col items-center max-w-5xl w-full mx-auto px-10 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          {dictionary.services.faqTitle}
        </h1>
        <AcordionServices />
      </div>
    </section>
  );
}
