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
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export default function NavMenu() {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  return (
    <>
      <div id="navmenu" className="w-full">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-end">
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#hero"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  {dictionary.header.home}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#about"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  {dictionary.header.about}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#services"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  {dictionary.header.services}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="transparent" size="lg">
                <NavigationMenuLink
                  href="#contact"
                  className={`${navigationMenuTriggerStyle()} text-foreground dark:text-foreground`}
                >
                  {dictionary.header.contact}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
