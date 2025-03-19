import { cn } from "@workspace/ui/lib/utils"
import { Logo } from "@workspace/ui/misc/logo"
import { ThemeToggle } from "@workspace/ui/misc/theme-switcher"
import Link from "next/link"

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "AI Playground",
    href: "#",
  },
]

interface Footer4Props {
  className?: string
}

export function Footer4({ className }: Footer4Props) {
  return (
    <div className={cn("border-b bg-white py-8 dark:bg-transparent w-full", className)}>
      <div className={cn("flex flex-wrap gap-8 justify-center md:justify-between w-full")}>
        <div className="order-[1] flex items-center gap-2 max-w-[85%] justify-start md:hidden">
          <Logo className="" />
        </div>

        <div className="flex flex-col items-center md:items-start justify-between gap-4 order-last md:order-first max-w-[85%]">
          <Logo className="hidden md:block" />

          <span className="text-muted-foreground  block text-center text-xs md:text-sm">
            © {new Date().getFullYear()} Webora Technologies, All rights reserved
          </span>

          <ThemeToggle className="block md:hidden" />
        </div>

        <div className="flex flex-col items-end justify-between gap-4 order-[2] md:order-last">
          <div className=" flex flex-wrap justify-center gap-4 gap-y-2 md:gap-6 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span className="leading-none">{link.title}</span>
              </Link>
            ))}
          </div>
          <ThemeToggle className="hidden md:block" />
        </div>
      </div>
    </div>
  )
}
