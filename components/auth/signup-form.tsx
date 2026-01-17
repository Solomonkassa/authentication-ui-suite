"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FormInput } from "./form-input"
import { SocialLoginButtons } from "./social-login-buttons"

interface SignUpFormProps {
  style?: "minimalist" | "split-screen" | "glassmorphism"
}

export function SignUpForm({ style = "minimalist" }: SignUpFormProps) {
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [agreeToTerms, setAgreeToTerms] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<{
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    terms?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setErrors({})

    const newErrors: typeof errors = {}
    if (!fullName) newErrors.fullName = "Full name is required"
    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!agreeToTerms) newErrors.terms = "You must agree to the terms"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    console.log({ fullName, email, password, agreeToTerms })
  }

  const cardClass = style === "glassmorphism" ? "bg-transparent border-0" : ""

  return (
    <Card className={cardClass}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create Account</CardTitle>
        <CardDescription>Join us and start your journey today</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
          />

          <FormInput
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            showPasswordToggle
          />

          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            showPasswordToggle
          />

          <label className="flex items-start gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="rounded border border-input mt-1"
            />
            <span className="text-muted-foreground">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms and Conditions
              </a>
            </span>
          </label>
          {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <SocialLoginButtons />

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-primary font-medium hover:underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
