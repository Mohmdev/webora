import FooterSection from "@/providers/layout/footer"
import React from "react"
import { FlyoutNav } from "../components/FlyoutNav"

export const AppWrapper: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  return (
    <>
      <FlyoutNav />
      {children}
      <FooterSection />
    </>
  )
}
