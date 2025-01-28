import React from "react";
import {
  IconHome,
  IconTerminal2,
  IconInfoCircle,
  IconMail,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Navbar() {
  return (
    <div
      id="menu"
      className="fixed bottom-10 left-0 right-0 flex justify-center w-full"
    >
      <FloatingDock
        items={[
          {
            title: "Home",
            icon: (
              <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/home",
          },
          {
            title: "About",
            icon: (
              <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
          {
            title: "Services",
            icon: (
              <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
          {
            title: "Contact",
            icon: (
              <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
        ]}
      />
    </div>
  );
}
