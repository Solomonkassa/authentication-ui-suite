"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { maskEmail } from "@/lib/auth-utils"
import type { LayoutStyle } from "./auth-styles"
import { AlertCircle } from "lucide-react"

interface ProductionOTPFormProps {
  style?: LayoutStyle
  email?: string
  onVerify?: (code: string) => Promise<void>
  onResend?: () => Promise<void>
}

export function ProductionOTPForm({
  style = "minimalist",
  email = "user@example.com",
  onVerify,
  onResend,
}: ProductionOTPFormProps) {
  const [code, setCode] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const [resendCount, setResendCount] = React.useState(0)
  const [canResend, setCanResend] = React.useState(false)
  const [resendTimer, setResendTimer] = React.useState(0)

  React.useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else if (resendTimer === 0 && resendCount > 0) {
      setCanResend(true)
    }
  }, [resendTimer, resendCount])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code")
      return
    }

    setIsLoading(true)
    try {
      if (onVerify) {
        await onVerify(code)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log({ code })
      }
    } catch (err) {
      setError("Invalid verification code. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    setResendCount((prev) => prev + 1)
    setCanResend(false)
    setResendTimer(30)

    try {
      if (onResend) {
        await onResend()
      }
    } catch (err) {
      setError("Failed to resend code. Please try again.")
    }
  }

  const isDarkStyle = ["dark-neon", "brutalist", "cyberpunk", "minimalist-dark"].includes(style)
  const cardClass = ["glassmorphism", "dark-neon", "cyberpunk"].includes(style) ? "bg-transparent border-0" : ""
  const textClass = isDarkStyle ? "text-white" : ""

  return (
    <Card className={cardClass}>
      <CardHeader className="text-center">
        <CardTitle className={`text-2xl ${textClass}`}>Verify Your Email</CardTitle>
        <CardDescription className={isDarkStyle ? "text-gray-400" : ""}>
          We've sent a verification code to {maskEmail(email)}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className={`text-sm font-medium text-center ${textClass}`}>Enter 6-digit code</label>
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
            {error && (
              <p className="text-sm text-destructive text-center flex items-center justify-center gap-1">
                <AlertCircle className="size-3" />
                {error}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading || code.length !== 6}>
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>

        <div className={`text-center text-sm ${isDarkStyle ? "text-gray-400" : "text-muted-foreground"}`}>
          Didn't receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={!canResend}
            className="text-primary hover:underline disabled:opacity-50 font-medium"
          >
            {resendCount > 0 && resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend"}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
