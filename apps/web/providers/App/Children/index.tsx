import { cn } from "@workspace/ui/lib/utils"
import React from "react"

interface ChildrenProps {
  children: React.ReactNode
  className?: string
}

export function ChildrenWrapper({ children, className }: ChildrenProps) {
  return (
    <article className={cn("flex h-max w-full", className)}>
      <div className="max-w-screen-3xl w-full mx-auto">{children}</div>
    </article>
  )
}
