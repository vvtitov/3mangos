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
      <div id="navmenu">
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <Button variant="link" size="lg">
                <NavigationMenuLink
                  href="/home"
                  className={navigationMenuTriggerStyle()}
                >
                  HOME
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" size="lg">
                <NavigationMenuLink
                  href="#aboutUs"
                  className={navigationMenuTriggerStyle()}
                >
                  ABOUT
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="link" size="lg">
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
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
