"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

interface OTPFormProps {
  style?: "minimalist" | "split-screen" | "glassmorphism"
  email?: string
  onVerify?: (code: string) => void
}

export function OTPForm({ style = "minimalist", email = "user@example.com", onVerify }: OTPFormProps) {
  const [code, setCode] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [resendCount, setResendCount] = React.useState(0)
  const [canResend, setCanResend] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError("")

    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code")
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    if (onVerify) {
      onVerify(code)
    }
    console.log({ code })
  }

  const handleResend = async () => {
    setResendCount((prev) => prev + 1)
    setCanResend(false)

    // Simulate resend delay
    setTimeout(() => setCanResend(true), 30000)
  }

  const cardClass = style === "glassmorphism" ? "bg-transparent border-0" : ""

  return (
    <Card className={cardClass}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Verify Your Email</CardTitle>
        <CardDescription>We've sent a verification code to {email}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-center">Enter 6-digit code</label>
            <InputOTP maxLength={6} value={code} onChange={setCode} disabled={isLoading}>
              <InputOTPGroup className="flex justify-center gap-2">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading || code.length !== 6}>
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={!canResend && resendCount > 0}
            className="text-primary hover:underline disabled:opacity-50"
          >
            {resendCount > 0 && !canResend ? "Resend in 30s" : "Resend"}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
