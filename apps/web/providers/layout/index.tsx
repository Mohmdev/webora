import { cn } from "@workspace/ui/lib/utils"
import React from "react"
import { AppWrapper } from "./nav-wrapper"

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      style={
        {
          "--gap-value": "0.75rem",
          // '--ui-primary-color': 'hsl(var(--primary))',
          // '--ui-accent-color': 'hsl(var(--accent))',
          // '--ui-background-color': 'hsl(var(--background))',
        } as React.CSSProperties
      }
      className={cn(
        "relative z-1",
        "full-dynamic-height full-dynamic-width",
        "flex flex-col justify-between"
        //
      )}
    >
      <AppWrapper>{children}</AppWrapper>
    </main>
  )
}
