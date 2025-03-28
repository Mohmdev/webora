import { cn } from "@workspace/ui/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import useMeasure from "react-use-measure"
import { GroupContent } from "./group-content"

export type MobileNavGroupProps = {
  className?: string
  group: any
}

export const MobileNavGroup: React.FC<MobileNavGroupProps> = (props) => {
  const [ref, { height }] = useMeasure()
  const [open, setOpen] = useState(false)

  const { group, className } = props
  const {
    groupLabel,
    link: linkProps,
    enableDirectLink = false,
    enableDropdown = false,
    dscrpArea: descriptionArea,
    navItems,
  } = group

  return (
    <div className="relative text-neutral-950">
      {/* When there is direct link */}
      {enableDirectLink ? (
        <div
          onClick={() => setOpen((pv) => !pv)}
          className={cn(
            "flex w-full py-4 items-center justify-between",
            "border-border text-start text-2xl font-normal leading-auto text-foreground",
            // open ? 'border-b-0' : 'border-b-1',
            "border-b-1 px-1",
            "cursor-pointer"
          )}
        >
          <Link
            href={linkProps.href}
            className="text-2xl font-normal leading-auto text-foreground"
          >
            {groupLabel}
          </Link>
          {enableDropdown && (
            <motion.div
              animate={{ rotate: open ? "180deg" : "0deg" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <FiChevronDown className="cursor-pointer select-auto text-muted-foreground prose" />
            </motion.div>
          )}
        </div>
      ) : (
        // When there is no direct link
        <div
          onClick={() => setOpen((pv) => !pv)}
          className={cn(
            "flex w-full py-4 items-center justify-between",
            "border-border text-start text-2xl font-normal text-foreground leading-auto",
            // open ? 'border-b-0' : 'border-b-1',
            "border-b-1 px-1",
            "cursor-pointer"
          )}
        >
          <span>{groupLabel && groupLabel}</span>
          {enableDropdown && (
            <motion.div
              animate={{ rotate: open ? "180deg" : "0deg" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="cursor-pointer select-auto text-muted-foreground prose"
            >
              <FiChevronDown />
            </motion.div>
          )}
        </div>
      )}
      {/*  */}
      {enableDropdown && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <GroupContent
              enable={enableDropdown}
              text={descriptionArea?.text}
              links={descriptionArea?.links}
              navItems={navItems}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
