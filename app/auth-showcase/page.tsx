"use client"

import React from "react"
import { AuthLayoutRenderer } from "@/components/auth/auth-styles"
import { ProductionLoginForm } from "@/components/auth/production-login-form"
import { ProductionSignUpForm } from "@/components/auth/production-signup-form"
import { ProductionForgotPasswordForm } from "@/components/auth/production-forgot-password-form"
import { ProductionOTPForm } from "@/components/auth/production-otp-form"
import { Button } from "@/components/ui/button"
import type { LayoutStyle } from "@/components/auth/auth-styles"
import { AUTH_STYLES } from "@/lib/auth-config"

type AuthMode = "login" | "signup" | "forgot" | "otp"

export default function AuthShowcase() {
  const [mode, setMode] = React.useState<AuthMode>("login")
  const [style, setStyle] = React.useState<LayoutStyle>("minimalist")

  const renderForm = () => {
    switch (mode) {
      case "signup":
        return <ProductionSignUpForm style={style} />
      case "forgot":
        return <ProductionForgotPasswordForm style={style} onBack={() => setMode("login")} />
      case "otp":
        return <ProductionOTPForm style={style} email="user@example.com" />
      default:
        return <ProductionLoginForm style={style} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Style selector */}
      <div className="fixed top-4 left-4 z-50 flex gap-2 flex-wrap max-w-xs">
        {(AUTH_STYLES as readonly LayoutStyle[]).map((s) => (
          <Button
            key={s}
            variant={style === s ? "default" : "outline"}
            size="sm"
            onClick={() => setStyle(s)}
            className="text-xs"
            title={s}
          >
            {s.replace(/-/g, " ").slice(0, 8)}
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
            {m === "forgot" ? "Reset" : m.charAt(0).toUpperCase() + m.slice(1)}
          </Button>
        ))}
      </div>

      {/* Current style and mode display */}
      <div className="fixed bottom-4 left-4 z-50 text-xs text-muted-foreground">
        <p>Style: {style}</p>
        <p>Mode: {mode}</p>
      </div>

      {/* Main content */}
      <AuthLayoutRenderer style={style}>{renderForm()}</AuthLayoutRenderer>
    </div>
  )
}
