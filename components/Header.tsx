import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/dark-toggle-button";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div
      id="header"
      className="grid grid-cols-2 max-w-8xl mx-auto select-none items-center p-5 dark:border-gray-200 bg-transparent"
    >
      <div id="logo" className="flex justify-start z-10 items-center">
        {/* <h1 className="px-5 text-xl">THREEMANGOS</h1> */}
        <Link href="/home" passHref>
          <Image
            src="/3m-logo-black.png"
            alt="3MANGOS"
            width={70}
            height={70}
            className="dark:hidden hover:rotate-3 hover:scale-110 duration-500 cursor-pointer"
          />
        </Link>
        <Link href="/home" passHref>
          <Image
            src="/3m-logo-white.png"
            alt="3MANGOS"
            width={70}
            height={70}
            className="hidden dark:block hover:rotate-3 hover:scale-110 duration-500 cursor-pointer"
          />
        </Link>
      </div>

      <div id="rightHeader" className="flex justify-end items-center gap-5">
        <div className="navmenu hidden lg:flex">
          <NavMenu />
        </div>
        <div id="burgerMenu" className="lg:hidden">
          <Button
            className="flex items-center px-3 py-2 rounded text-gray-500 dark:text-white/80 w-10 h-10"
            variant="default"
          >
            <svg
              className="fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </Button>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
