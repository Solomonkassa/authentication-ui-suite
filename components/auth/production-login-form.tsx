"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedFormInput } from "./enhanced-form-input"
import { SocialLoginButtons } from "./social-login-buttons"
import { validateEmail } from "@/lib/auth-utils"
import type { LayoutStyle } from "./auth-styles"

interface ProductionLoginFormProps {
  style?: LayoutStyle
  onSubmit?: (data: { email: string; password: string; rememberMe: boolean }) => Promise<void>
}

export function ProductionLoginForm({ style = "minimalist", onSubmit }: ProductionLoginFormProps) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [rememberMe, setRememberMe] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<{ email?: string; password?: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const newErrors: typeof errors = {}
    if (!email) newErrors.email = "Email is required"
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email"

    if (!password) newErrors.password = "Password is required"
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      if (onSubmit) {
        await onSubmit({ email, password, rememberMe })
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log({ email, password, rememberMe })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const isDarkStyle = ["dark-neon", "brutalist", "cyberpunk", "minimalist-dark"].includes(style)
  const cardClass = ["glassmorphism", "dark-neon", "cyberpunk"].includes(style) ? "bg-transparent border-0" : ""
  const textClass = isDarkStyle ? "text-white" : ""

  return (
    <Card className={cardClass}>
      <CardHeader className="text-center">
        <CardTitle className={`text-2xl ${textClass}`}>Welcome Back</CardTitle>
        <CardDescription className={isDarkStyle ? "text-gray-400" : ""}>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <EnhancedFormInput
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />

          <EnhancedFormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            showPasswordToggle
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border border-input"
              />
              <span className={`${isDarkStyle ? "text-gray-300" : "text-muted-foreground"}`}>Remember me</span>
            </label>
            <a href="#forgot" className="text-sm text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <SocialLoginButtons isDark={isDarkStyle} />

        <div className={`text-center text-sm ${isDarkStyle ? "text-gray-400" : "text-muted-foreground"}`}>
          Don't have an account?{" "}
          <a href="#signup" className="text-primary font-medium hover:underline">
            Sign up
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
