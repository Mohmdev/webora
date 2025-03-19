"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "../components/button.js"
import { cn } from "../lib/utils.js"

interface ThemeToggleProps {
  className?: string
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="ghost"
      className={cn("size-8 rounded-full", className)}
    >
      {mounted ? (
        theme === "dark" ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )
      ) : (
        <span className="opacity-0">
          <SunIcon />
        </span>
      )}
    </Button>
  )
}
