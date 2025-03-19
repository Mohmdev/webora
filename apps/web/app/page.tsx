import { AnimatedTextHero } from "@workspace/ui/hero/text-hero"

export default function Page() {
  return (
    <div className="flex min-w-full">
      <div className="flex flex-col min-w-full">
        <AnimatedTextHero />
        <div className="flex flex-col items-center justify-center gap-4 w-full"></div>
      </div>
    </div>
  )
}
