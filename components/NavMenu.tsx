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
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="/home"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  Home
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#about"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  About
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#services"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  Services
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#contact"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  Contact
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
