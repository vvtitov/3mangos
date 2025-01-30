"use client";

import React from "react";
import { ModeToggle } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <div
        id="header"
        className="grid grid-cols-2 lg:grid max-w-8xl mx-auto select-none items-center p-5 dark:border-gray-200 bg-transparent border-b border-[#333333]/50"
      >
        <div
          id="leftHeader"
          className="flex justify-center lg:justify-start z-10 items-center"
        >
          <h1 className="px-5 text-xl hidden lg:flex">THREEMANGOS</h1>
          <Logo />
        </div>

        <div
          id="rightHeader"
          className="flex justify-center gap-1 items-center"
        >
          <div id="navMenu" className="hidden lg:block w-full">
            <NavMenu />
          </div>
          <div className="justify-end w-10">
            <BurguerMenu />
          </div>
          <div className="lg:block ml-[17vw] lg:mx-auto w-20">
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
