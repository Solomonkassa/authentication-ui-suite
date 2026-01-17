"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FormInput } from "./form-input"
import { ChevronLeft } from "lucide-react"

interface ForgotPasswordFormProps {
  style?: "minimalist" | "split-screen" | "glassmorphism"
  onBack?: () => void
}

export function ForgotPasswordForm({ style = "minimalist", onBack }: ForgotPasswordFormProps) {
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

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setSubmitted(true)
    console.log({ email })
  }

  const cardClass = style === "glassmorphism" ? "bg-transparent border-0" : ""

  if (submitted) {
    return (
      <Card className={cardClass}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Check Your Email</CardTitle>
          <CardDescription>We've sent password reset instructions to {email}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
            <p className="text-sm text-blue-900 dark:text-blue-100">
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
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your email and we'll send you a password reset link</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
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
