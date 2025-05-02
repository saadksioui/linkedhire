"use client";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const ThemeSwitch = () => {

  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Sun className="text-black dark:text-white"/>
      <Switch
        defaultChecked={currentTheme === "dark"}
        onCheckedChange={(checked) => {
          if (checked) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        checked={currentTheme === "dark"}
        disabled={!mount}
      />
      <Moon className="text-black dark:text-white"/>
    </div>
  )
};

export default ThemeSwitch
