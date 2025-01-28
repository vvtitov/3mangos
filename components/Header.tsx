import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/dark-toggle-button";

export default function Header() {
  return (
    <div
      id="header"
      className="container grid grid-cols-2 max-w-8xl max-h-[150px] mx-auto p-4 justify-center items-center"
    >
      <div id="logo" className="flex justify-start z-10 items-center">
        <h1 className="px-2 text-lg">#THREEMANGOS</h1>
        <Image
          src="/3m-logo-black.png"
          alt="3MANGOS"
          width={70}
          height={70}
          className="dark:hidden"
        />
        <Image
          src="/3m-logo-white.png"
          alt="3MANGOS"
          width={50}
          height={50}
          className="hidden dark:block"
        />
      </div>

      <div className="flex justify-end min-w-[150px]">
        <ModeToggle />
      </div>
    </div>
  );
}
