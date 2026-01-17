"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedFormInput } from "./enhanced-form-input"
import { PasswordStrength } from "./password-strength"
import { SocialLoginButtons } from "./social-login-buttons"
import { validateEmail, validateFullName, validatePassword } from "@/lib/auth-utils"
import type { LayoutStyle } from "./auth-styles"

interface ProductionSignUpFormProps {
  style?: LayoutStyle
  onSubmit?: (data: { fullName: string; email: string; password: string; agreeToTerms: boolean }) => Promise<void>
}

export function ProductionSignUpForm({ style = "minimalist", onSubmit }: ProductionSignUpFormProps) {
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [agreeToTerms, setAgreeToTerms] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const newErrors: Record<string, string> = {}

    if (!fullName) newErrors.fullName = "Full name is required"
    else if (!validateFullName(fullName)) newErrors.fullName = "Please enter a valid full name"

    if (!email) newErrors.email = "Email is required"
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email"

    if (!password) newErrors.password = "Password is required"
    else {
      const validation = validatePassword(password)
      if (!validation.isValid) newErrors.password = validation.feedback[0]
    }

    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match"

    if (!agreeToTerms) newErrors.terms = "You must agree to the terms and conditions"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      if (onSubmit) {
        await onSubmit({ fullName, email, password, agreeToTerms })
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log({ fullName, email, password, agreeToTerms })
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
        <CardTitle className={`text-2xl ${textClass}`}>Create Account</CardTitle>
        <CardDescription className={isDarkStyle ? "text-gray-400" : ""}>
          Join us and start your journey today
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <EnhancedFormInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
            required
          />

          <EnhancedFormInput
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            hint="We'll never share your email"
            required
          />

          <div>
            <EnhancedFormInput
              label="Password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              showPasswordToggle
              required
            />
            {password && <PasswordStrength password={password} />}
          </div>

          <EnhancedFormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            showPasswordToggle
            required
          />

          <label className="flex items-start gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="rounded border border-input mt-1"
              required
            />
            <span className={isDarkStyle ? "text-gray-300" : "text-muted-foreground"}>
              I agree to the{" "}
              <a href="#terms" className="text-primary hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <SocialLoginButtons isDark={isDarkStyle} />

        <div className={`text-center text-sm ${isDarkStyle ? "text-gray-400" : "text-muted-foreground"}`}>
          Already have an account?{" "}
          <a href="#login" className="text-primary font-medium hover:underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
