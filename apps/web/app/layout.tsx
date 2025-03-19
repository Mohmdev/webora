import { Providers } from "@/providers"
import { Geist, Geist_Mono } from "next/font/google"
import React from "react"

import "@workspace/ui/globals.css"
import { App } from "@/providers/App"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <Providers>
        <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
          <App
            // header="header-1"
            footer="footer-4"
          >
            {children}
          </App>
        </body>
      </Providers>
    </html>
  )
}
