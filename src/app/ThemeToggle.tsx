"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-neutral-500 transition-colors hover:text-accent dark:hover:glow"
    >
      <Moon size={15} className="dark:hidden" />
      <Sun size={15} className="hidden dark:block" />
    </button>
  );
}
