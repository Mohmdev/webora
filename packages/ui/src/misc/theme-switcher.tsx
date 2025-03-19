"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../components/button.js"
import { cn } from "../lib/utils.js"

interface ThemeToggleProps {
  className?: string
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="ghost"
      className={cn("size-8 rounded-full", className)}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
