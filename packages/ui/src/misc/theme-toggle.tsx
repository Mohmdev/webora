"use client"

import { cn } from "@workspace/ui/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "size-8 grid place-items-center rounded-full overflow-hidden relative transition-colors duration-300 cursor-pointer",
        "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
        theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-200",
        className
      )}
      animate={{
        backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
      }}
      transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {mounted && (
          <motion.div
            key={theme}
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </motion.div>
        )}
        {!mounted && (
          <span className="opacity-0">
            <SunIcon />
          </span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
