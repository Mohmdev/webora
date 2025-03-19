"use client"

import { cn } from "@workspace/ui/lib/utils"
import { Logo } from "@workspace/ui/misc/logo"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Link from "next/link"
import React, { useState } from "react"
import { DesktopNav } from "./desktop"
import { MobileMenu } from "./mobile"
import { Hamburger } from "./mobile/hamburger"

interface FlyoutNavProps {
  className?: string
}

export const FlyoutNav: React.FC<FlyoutNavProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100 ? true : false)
  })

  const [hovered, setHovered] = useState<string | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className={cn("flex h-max fixed top-0 z-50 w-screen inset-x-0 text-white", className)}>
      <div
        onMouseLeave={() => setHovered(null)}
        className="w-full h-max z-50 max-w-screen-3xl mx-auto px-6"
      >
        <motion.nav
          animate={
            scrolled && !mobileNavOpen
              ? "scrolled"
              : !scrolled && !mobileNavOpen
                ? "notScrolled"
                : "scrolledMobileNavOpen"
          }
          variants={variants}
          transition={{
            duration: 0.4,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className="flex"
        >
          <div className="flex flex-row items-center justify-between mx-auto w-full">
            <Link
              href="/"
              className="z-50"
            >
              <Logo />
            </Link>
            <DesktopNav
              setHovered={setHovered}
              hovered={hovered}
              className="z-40"
            />
            <Hamburger
              active={mobileNavOpen}
              setActive={setMobileNavOpen}
              className="block lg:hidden z-50"
            />
          </div>
        </motion.nav>
      </div>
      <MobileMenu
        open={mobileNavOpen}
        className="lg:hidden z-25"
      />
    </div>
  )
}

const variants = {
  initial: {
    opacity: 0,
    backgroundColor: "hsla(var(--navigation) / 0)",
    height: "var(--full-header-height)",
    marginTop: 0,
    borderWidth: 0,
  },
  scrolled: {
    opacity: 1,
    height: "var(--base-header-height)",
    backdropFilter: "blur(8px)",
    backgroundColor: "hsla(var(--navigation) / 0.7)",
  },
  scrolledMobileNavOpen: {
    opacity: 1,
    height: "var(--base-header-height)",
    backdropFilter: "blur(8px)",
    backgroundColor: "hsla(var(--navigation) / 0)",
  },
  notScrolled: {
    opacity: 1,
    height: "var(--full-header-height)",
    backdropFilter: "blur(0px)",
    backgroundColor: "hsla(var(--navigation) / 0)",
    borderColor: "transparent",
  },
}
