"use client";

import React from "react";
import { ModeSwitch } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={`fixed top-0 w-full ${
        isScrolled
          ? "h-[90px] bg-slate-50 dark:bg-[#333333]"
          : "h-[120px] bg-slate-50/50 dark:bg-[#333333]/50"
      } grid grid-cols-2 lg:grid max-w-8xl px-10 select-none items-center dark:border-gray-200 border-b border-[#333333]/50 transition-all duration-300 z-[10]`}
    >
      <div
        id="leftHeader"
        className="flex justify-center lg:justify-start items-center"
      >
        <Logo />
      </div>

      <div
        id="rightHeader"
        className="flex w-full gap-2 items-center justify-end min-w-[300px]"
      >
        <div id="navMenu" className="hidden lg:block mr-10">
          <NavMenu />
        </div>
        <div className="flex w-[200px] relative items-center justify-center">
          <BurguerMenu />
        </div>
        <div className="relative hidden lg:flex">
          <ModeSwitch />
        </div>
      </div>
    </header>
  );
}
