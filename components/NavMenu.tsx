"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import React from "react";
import { Button } from "./ui/button";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export default function NavMenu() {
  return (
    <>
      <div id="navmenu" className="w-full">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-end">
            <NavigationMenuItem>
              <Button variant="default" size="sm">
                <NavigationMenuLink
                  href="/home"
                  className={`${navigationMenuTriggerStyle()} text-[#333333] dark:text-white/70 dark:hover:text-orange-300 hover:text-orange-300`}
                >
                  HOME
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="default" size="sm">
                <NavigationMenuLink
                  href="#about"
                  className={`${navigationMenuTriggerStyle()} text-[#333333] dark:text-white/70 dark:hover:text-orange-300 hover:text-orange-300`}
                >
                  ABOUT
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="default" size="sm">
                <NavigationMenuLink
                  href="#services"
                  className={`${navigationMenuTriggerStyle()} text-[#333333] dark:text-white/70 dark:hover:text-orange-300 hover:text-orange-300`}
                >
                  SERVICES
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="default" size="sm">
                <NavigationMenuLink
                  href="#contact"
                  className={`${navigationMenuTriggerStyle()} text-[#333333] dark:text-white/70 dark:hover:text-orange-300 hover:text-orange-300`}
                >
                  CONTACT
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
