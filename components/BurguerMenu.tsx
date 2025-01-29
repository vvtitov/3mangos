import { Button } from "./ui/button";

import React from "react";

export default function BurguerMenu() {
  return (
    <>
      <div id="burgerMenu" className="lg:hidden">
        <Button
          className="flex items-center px-3 py-2 rounded text-gray-[#333333] dark:text-white/80 w-10 h-10"
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
    </>
  );
}
