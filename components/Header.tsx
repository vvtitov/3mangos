"use client";

import React, { useState, useEffect, useRef } from "react";
import { ModeSwitch } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { locale, setLocale } = useLanguage();
  const dictionary = getDictionary(locale);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

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
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className={`header fixed top-0 left-0 w-full transition-transform duration-300 bg-background ${
          isScrolled
            ? "-translate-y-full"
            : "translate-y-0 border-b border-gray-500 fade-out-100"
        } flex justify-between items-center max-w-full px-4 py-3 select-none dark:border-gray-200 z-[10]`}
      >
        <div id="leftHeader" className="flex items-center">
          <Logo />
        </div>

        <div id="rightHeader" className="flex items-center gap-2">
          <div id="navMenu" className="hidden lg:block mr-10">
            <NavMenu />
          </div>
          <div
            className="flex items-center pr-5 relative"
            ref={languageMenuRef}
          >
            <div
              className="flex items-center px-2 py-2 rounded-md text-foreground transition-colors duration-300 bg-transparent cursor-pointer"
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            >
              {locale === "en" ? "EN" : "ES"}
              <ChevronDown
                className={`w-4 transition-transform duration-300 ${
                  isLanguageMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isLanguageMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full -left-4 z-10 w-auto bg-background rounded-b-2xl border border-primary border-t-0 px-2 py-2"
              >
                <div
                  onClick={() => {
                    setLocale("en");
                    setIsLanguageMenuOpen(false);
                  }}
                  className="flex flex-row items-center text-foreground font-semibold hover:bg-primary/90 px-4 cursor-pointer rounded-full py-2 transition-all duration-300 mb-1"
                >
                  EN
                </div>
                <div
                  onClick={() => {
                    setLocale("es");
                    setIsLanguageMenuOpen(false);
                  }}
                  className="flex flex-row items-center text-foreground font-semibold hover:bg-primary/90 px-4 cursor-pointer rounded-full py-2"
                >
                  ES
                </div>
              </motion.div>
            )}
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
        <div className="absolute mt-[5.1rem] p-3 text-center text-sm w-full h-auto bg-primary/90 text-foreground flex justify-center items-center mx-auto top-0 left-0 right-0 shadow-lg dark:shadow-primary/50 shadow-primary/50 animate-pulse transition-all duration-2000">
          <span
            className="w-full text-balance font-medium text-foreground dark:text-primary-foreground"
            dangerouslySetInnerHTML={{
              __html: dictionary.header.offer,
            }}
          />
        </div>
      )}
    </>
  );
}
