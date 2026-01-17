"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Apple, Chrome } from "lucide-react"

interface SocialLoginButtonsProps {
  isDark?: boolean
}

export function SocialLoginButtons({ isDark }: SocialLoginButtonsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex items-center gap-3">
        <div className={`flex-1 h-px ${isDark ? "bg-slate-700" : "bg-border"}`} />
        <span className={`text-xs ${isDark ? "text-gray-400" : "text-muted-foreground"} px-2`}>or continue with</span>
        <div className={`flex-1 h-px ${isDark ? "bg-slate-700" : "bg-border"}`} />
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button
          variant="outline"
          size="default"
          className={`flex items-center justify-center ${isDark ? "bg-slate-800 border-slate-700 hover:bg-slate-700" : "bg-transparent"}`}
          onClick={() => console.log("Google login")}
          aria-label="Sign in with Google"
        >
          <Chrome className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="default"
          className={`flex items-center justify-center ${isDark ? "bg-slate-800 border-slate-700 hover:bg-slate-700" : "bg-transparent"}`}
          onClick={() => console.log("GitHub login")}
          aria-label="Sign in with GitHub"
        >
          <Github className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="default"
          className={`flex items-center justify-center ${isDark ? "bg-slate-800 border-slate-700 hover:bg-slate-700" : "bg-transparent"}`}
          onClick={() => console.log("Apple login")}
          aria-label="Sign in with Apple"
        >
          <Apple className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="default"
          className={`flex items-center justify-center ${isDark ? "bg-slate-800 border-slate-700 hover:bg-slate-700" : "bg-transparent"}`}
          onClick={() => console.log("Email login")}
          aria-label="Sign in with Email"
        >
          <Mail className="size-4" />
        </Button>
      </div>
    </div>
  )
}
