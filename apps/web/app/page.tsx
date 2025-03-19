import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="flex  min-w-full">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button
          variant="destructive"
          size="sm"
        >
          Button
        </Button>
      </div>
    </div>
  )
}
