"use client";

import React from "react";
import { ModeSwitch } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { locale, setLocale } = useLanguage();
  const dictionary = getDictionary(locale);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        id="header"
        className={`header fixed top-0 left-0 w-full transition-transform duration-300 bg-background ${
          isScrolled
            ? "-translate-y-full" // Hide header
            : "translate-y-0 border-b border-gray-500 fade-out-100" // Show header
        } flex justify-between items-center max-w-full px-4 py-3 select-none dark:border-gray-200 z-[10]`}
      >
        <div id="leftHeader" className="flex items-center">
          <Logo />
        </div>

        <div id="rightHeader" className="flex items-center gap-2">
          <div id="navMenu" className="hidden lg:block mr-10">
            <NavMenu />
          </div>
          <div className="flex items-center pr-5">
            <Button
              variant={"outline"}
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              className="px-4 py-2 rounded-md text-foreground border border-foreground hover:bg-primary hover:text-background transition-colors duration-300"
            >
              {locale === "en" ? "ES" : "EN"}
            </Button>
          </div>
          <div className="flex items-center justify-end mr-2">
            <BurguerMenu />
          </div>
          <div className="relative hidden lg:flex">
            <ModeSwitch />
          </div>
        </div>
      </header>
      {!isScrolled && (
        <div className="absolute mt-20 p-3 text-center text-sm w-full h-8 bg-primary/70 text-foreground flex items-center justify-center rounded-lg left-0 mx-auto">
          <span
            className="w-full text-balance font-medium"
            dangerouslySetInnerHTML={{
              __html: dictionary.header.offer,
            }}
          />
        </div>
      )}
    </>
  );
}
