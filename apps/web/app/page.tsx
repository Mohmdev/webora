import { AnimatedTextHero } from "@workspace/ui/hero/text-hero"
import { FeaturesSection } from "../components/features"

export default function Page() {
  return (
    <div className="flex flex-col min-w-full h-max">
      <div className="flex flex-col min-w-full">
        <AnimatedTextHero />
      </div>
      <FeaturesSection />
    </div>
  )
}
