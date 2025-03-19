import { cn } from "@workspace/ui/lib/utils"
import React from "react"
import type { FooterTemplate } from ".."
import { Footer4 } from "./footer-4"

interface FooterProps {
  template?: FooterTemplate
  className?: string
}

export function FooterSection({ template, className }: FooterProps) {
  const Footer = template === "footer-4" ? Footer4 : null

  if (!Footer) return null
  return (
    <footer className={cn("flex h-max w-full", className)}>
      <div className="max-w-screen-3xl w-full mx-auto px-6">
        <Footer />
      </div>
    </footer>
  )
}
