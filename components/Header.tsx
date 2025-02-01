"use client";

import React from "react";
import { ModeSwitch } from "./ui/dark-toggle-button";
import NavMenu from "./NavMenu";
import BurguerMenu from "./BurguerMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header
        id="header"
        className="relative w-full h-full grid grid-cols-2 lg:grid max-w-8xl mx-auto select-none items-center px-10 py-3 dark:border-gray-200 bg-transparent border-b border-[#333333]/50"
      >
        <div
          id="leftHeader"
          className="flex justify-center lg:justify-start items-center"
        >
          <h1 className="mr-8 text-xl hidden lg:flex">#THREEMANGOS</h1>
          <Logo />
        </div>

        <div
          id="rightHeader"
          className="flex w-full gap-2 items-center justify-end"
        >
          <div id="navMenu" className="hidden lg:block fill">
            <NavMenu />
          </div>
          <div className="w-[100px] mr-10">
            <BurguerMenu />
          </div>
          <div className="relative">
            <ModeSwitch />
          </div>
        </div>
      </header>
    </>
  );
}
