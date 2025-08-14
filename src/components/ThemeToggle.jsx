import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsLightMode(false);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-4 right-5 z-50 p-2 rounded-full  transition-colors duration-300 cursor-pointer",
        "focus:outline-hidden"
      )}
    >
      {isLightMode ? (
        <Moon className="h-[1.3rem] w-[1.3rem] text-blue-900" />
      ) : (
        <Sun className="h-[1.3rem] w-[1.3rem] text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
