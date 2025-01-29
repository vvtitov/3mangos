"use client";

import React from "react";
import { ModeToggle } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import BurguerMenu from "./BurguerMenu";

export default function Header() {
  return (
    <>
      <div
        id="header"
        className="grid grid-cols-2 max-w-8xl mx-auto select-none items-center p-5 dark:border-gray-200 bg-transparent border-b border-[#333333]/50"
      >
        <div id="leftHeader" className="flex justify-start z-10 items-center">
          <h1
            className="px-5 text-xl hidden
        md:flex"
          >
            THREEMANGOS
          </h1>
          <Logo />
        </div>

        <div id="rightHeader" className="flex justify-end items-center gap-5">
          <div id="navMenu" className="hidden lg:flex">
            <NavMenu />
          </div>
          <BurguerMenu />
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
