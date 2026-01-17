"use client"
import { Button } from "@/components/ui/button"
import { Github, Mail, Apple } from "lucide-react"

export function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground px-2">or continue with</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="outline"
          size="default"
          className="flex items-center justify-center bg-transparent"
          onClick={() => console.log("Google login")}
        >
          <Mail className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="default"
          className="flex items-center justify-center bg-transparent"
          onClick={() => console.log("GitHub login")}
        >
          <Github className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="default"
          className="flex items-center justify-center bg-transparent"
          onClick={() => console.log("Apple login")}
        >
          <Apple className="size-4" />
        </Button>
      </div>
    </div>
  )
}
