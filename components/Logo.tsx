"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div id="logo" className="flex w-[60px] justify-start z-10 items-center">
        <Link href="/home" passHref>
          <Image
            src="/3m-logo-black.png"
            alt="3MANGOS"
            width={80}
            height={80}
            className="dark:hidden hover:rotate-3 hover:scale-125 duration-500 cursor-pointer"
          />
        </Link>
        <Link href="/home" passHref>
          <Image
            src="/3m-logo-white.png"
            alt="3MANGOS"
            width={80}
            height={80}
            className="hidden dark:block hover:rotate-3 hover:scale-125 duration-500 cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
