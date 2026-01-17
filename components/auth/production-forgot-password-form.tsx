"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedFormInput } from "./enhanced-form-input"
import { validateEmail, maskEmail } from "@/lib/auth-utils"
import type { LayoutStyle } from "./auth-styles"
import { ChevronLeft, Mail } from "lucide-react"

interface ProductionForgotPasswordFormProps {
  style?: LayoutStyle
  onSubmit?: (email: string) => Promise<void>
  onBack?: () => void
}

export function ProductionForgotPasswordForm({
  style = "minimalist",
  onSubmit,
  onBack,
}: ProductionForgotPasswordFormProps) {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    setIsLoading(true)
    try {
      if (onSubmit) {
        await onSubmit(email)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log({ email })
      }
      setSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  const isDarkStyle = ["dark-neon", "brutalist", "cyberpunk", "minimalist-dark"].includes(style)
  const cardClass = ["glassmorphism", "dark-neon", "cyberpunk"].includes(style) ? "bg-transparent border-0" : ""
  const textClass = isDarkStyle ? "text-white" : ""

  if (submitted) {
    return (
      <Card className={cardClass}>
        <CardHeader className="text-center">
          <div className={`flex justify-center mb-4 ${isDarkStyle ? "text-cyan-400" : "text-blue-600"}`}>
            <Mail className="size-12" />
          </div>
          <CardTitle className={`text-2xl ${textClass}`}>Check Your Email</CardTitle>
          <CardDescription className={isDarkStyle ? "text-gray-400" : ""}>
            We've sent password reset instructions to {maskEmail(email)}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div
            className={`rounded-lg p-4 text-center ${isDarkStyle ? "bg-cyan-500/10 border border-cyan-500/30" : "bg-blue-50 border border-blue-200"}`}
          >
            <p className={`text-sm ${isDarkStyle ? "text-cyan-100" : "text-blue-900"}`}>
              Click the link in your email to reset your password. The link will expire in 24 hours.
            </p>
          </div>

          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                setSubmitted(false)
                setEmail("")
              }}
            >
              Send Again
            </Button>

            {onBack && (
              <Button type="button" variant="ghost" className="w-full" onClick={onBack}>
                <ChevronLeft className="size-4 mr-2" />
                Back to Login
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cardClass}>
      <CardHeader className="text-center">
        <CardTitle className={`text-2xl ${textClass}`}>Reset Password</CardTitle>
        <CardDescription className={isDarkStyle ? "text-gray-400" : ""}>
          Enter your email and we'll send you a password reset link
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
            error={error}
            hint="Enter the email address associated with your account"
            required
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>

        {onBack && (
          <Button type="button" variant="ghost" className="w-full" onClick={onBack}>
            <ChevronLeft className="size-4 mr-2" />
            Back to Login
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
