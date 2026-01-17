"use client"

import React from "react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { LoginForm } from "@/components/auth/login-form"
import { SignUpForm } from "@/components/auth/signup-form"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { OTPForm } from "@/components/auth/otp-form"
import { Button } from "@/components/ui/button"

type AuthMode = "login" | "signup" | "forgot" | "otp"
type LayoutStyle = "minimalist" | "split-screen" | "glassmorphism"

export default function AuthPage() {
  const [mode, setMode] = React.useState<AuthMode>("login")
  const [style, setStyle] = React.useState<LayoutStyle>("minimalist")

  const renderForm = () => {
    switch (mode) {
      case "signup":
        return <SignUpForm style={style} />
      case "forgot":
        return <ForgotPasswordForm style={style} onBack={() => setMode("login")} />
      case "otp":
        return <OTPForm style={style} />
      default:
        return <LoginForm style={style} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Style selector */}
      <div className="fixed top-4 left-4 z-50 flex gap-2 flex-wrap max-w-xs">
        {(["minimalist", "split-screen", "glassmorphism"] as LayoutStyle[]).map((s) => (
          <Button
            key={s}
            variant={style === s ? "default" : "outline"}
            size="sm"
            onClick={() => setStyle(s)}
            className="text-xs"
          >
            {s === "split-screen" ? "Split" : s.charAt(0).toUpperCase() + s.slice(1)}
          </Button>
        ))}
      </div>

      {/* Mode selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 flex-wrap max-w-xs justify-end">
        {(["login", "signup", "forgot", "otp"] as AuthMode[]).map((m) => (
          <Button
            key={m}
            variant={mode === m ? "default" : "outline"}
            size="sm"
            onClick={() => setMode(m)}
            className="text-xs"
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </Button>
        ))}
      </div>

      {/* Main content */}
      <AuthLayout style={style} showImage={style === "split-screen"}>
        {renderForm()}
      </AuthLayout>
    </div>
  )
}
