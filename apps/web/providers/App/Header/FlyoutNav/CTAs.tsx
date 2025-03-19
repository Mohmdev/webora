import { cn } from "@workspace/ui/lib/utils"
import React from "react"

interface CTAsProps {
  enableCta?: boolean
  link?: { label: string }
  className?: string
}

export const CTAs: React.FC<CTAsProps> = (props) => {
  const { enableCta, link, className } = props

  return (
    <>
      {enableCta ? (
        <button
          className={cn(
            "rounded-lg border-0 ring-0 bg-violet-700 px-4 py-1 font-medium  transition-colors hover:bg-violet-500 hover:text-white",
            className
          )}
        >
          {link?.label || "Schedule a Demo"}
        </button>
      ) : null}
    </>
  )
}
