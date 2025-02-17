"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-full flex space-x-2 items-center justify-center text-primary">
      <Sun
        className={`h-4 w-4 ${isDark ? "text-foreground" : "text-primary"}`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="flex items-center"
      ></Switch>
      <Moon
        className={`h-4 w-4 ${isDark ? "text-primary" : "text-foreground"}`}
      />
    </div>
  );
}
