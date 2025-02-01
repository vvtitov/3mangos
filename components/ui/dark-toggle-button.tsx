"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex space-x-2 items-center w-[80px]">
      <Sun
        className={`h-3 w-3 ${isDark ? "text-gray-500" : "text-yellow-500"}`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="bg-orange-300 dark:bg-orange-300 flex items-center"
      ></Switch>
      <Moon
        className={`h-3 w-3 ${isDark ? "text-yellow-500" : "text-gray-500"}`}
      />
    </div>
  );
}
