import { Timeline } from "@workspace/ui/blocks/timeline"
import React from "react"
import { featuresData } from "./data"

export function FeaturesSection() {
  return (
    <div className="min-h-screen w-full">
      <div className="relative top-0 left-0 w-full">
        <Timeline
          data={featuresData}
          hasBackground={false}
        />
      </div>
    </div>
  )
}
