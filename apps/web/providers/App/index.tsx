import { GeometricBackground } from "@workspace/ui/background/geometric-background"
import React from "react"
import { ChildrenWrapper } from "./Children"
import { FooterSection } from "./Footer"
import { HeaderSection } from "./Header"
import { ThemeProvider } from "./theme"

export type HeaderTemplate = "header-1" | "header-2" | "header-3" | "flyout"
export type FooterTemplate = "footer-1" | "footer-2" | "footer-3" | "footer-4"

type AppProps = {
  children: React.ReactNode
  header?: HeaderTemplate
  footer?: FooterTemplate
}

export function App({ children, header, footer }: AppProps) {
  return (
    <ThemeProvider>
      <main
        style={
          {
            "--gap-value": "0.75rem",
          } as React.CSSProperties
        }
        className="min-h-svh flex flex-col justify-between relative"
      >
        <HeaderSection template={header} />
        <ChildrenWrapper>{children}</ChildrenWrapper>
        <FooterSection template={footer} />
        <GeometricBackground />
      </main>
    </ThemeProvider>
  )
}
