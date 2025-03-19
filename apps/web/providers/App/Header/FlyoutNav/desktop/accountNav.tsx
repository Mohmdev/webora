import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"
import React from "react"
import { FaUserCircle } from "react-icons/fa"

export const AccountNav: React.FC = () => {
  return (
    <div
      className={cn(
        "flex gap-6 items-center flex-wrap *:decoration-0",
        "opacity-100 visible",
        "transition-opacity duration-100 ease-linear",
        "text-primary"
      )}
    >
      <Link href="/login">
        <button className="flex items-center gap-2 rounded-lg ring-0 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black">
          <FaUserCircle />
          <span>Sign in</span>
        </button>
      </Link>

      {/* <Link href="/account">
        <button className="flex items-center gap-2 rounded-lg ring-0 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black">
          <FaUserCircle />
          <span>Account</span>
        </button>
      </Link> */}
    </div>
  )
}
