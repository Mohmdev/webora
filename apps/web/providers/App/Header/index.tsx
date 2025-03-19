import { cn } from "@workspace/ui/lib/utils"
import React from "react"
import type { HeaderTemplate } from ".."
import { FlyoutNav } from "./FlyoutNav"

interface HeaderProps {
  template?: HeaderTemplate
  className?: string
}

export function HeaderSection({ template, className }: HeaderProps) {
  const Header = template === "flyout" ? FlyoutNav : null

  if (!Header) return null

  return (
    <header className={cn("flex h-max w-full", className)}>
      <div className="max-w-screen-3xl w-full mx-auto px-6">
        <Header />
      </div>
    </header>
  )
}
