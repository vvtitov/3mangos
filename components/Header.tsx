"use client";

import React from "react";
import { ModeSwitch } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 w-screen ${
        isScrolled
          ? "h-[80px] bg-primary-foreground dark:bg-primary-foreground border-b border-gray-500"
          : "h-[110px] bg-trasnparent dark:bg-trasparent"
      } grid grid-cols-2 lg:grid max-w-8xl px-10 select-none items-center dark:border-gray-200 transition-all duration-300 z-[10]`}
    >
      <div
        id="leftHeader"
        className="block justify-center lg:justify-start items-center"
      >
        <Logo />
      </div>

      <div
        id="rightHeader"
        className="flex w-full gap-2 items-center justify-end"
      >
        <div id="navMenu" className="hidden lg:block mr-10">
          <NavMenu />
        </div>
        <div className="flex items-center justify-end">
          <BurguerMenu />
        </div>
        <div className="relative hidden lg:flex">
          <ModeSwitch />
        </div>
        <div className="flex items-center ml-5">
          <Button
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="px-4 py-2 rounded-md bg-primary text-foreground hover:bg-primary transition-colors"
          >
            {locale === "en" ? "ES" : "EN"}
          </Button>
        </div>
      </div>
    </header>
  );
}
