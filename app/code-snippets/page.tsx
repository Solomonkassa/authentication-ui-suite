"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function CodeSnippetsPage() {
  const [copied, setCopied] = useState<string>("")

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(""), 2000)
  }

  const snippets = [
    {
      id: "login-basic",
      title: "Basic Login Setup",
      description: "Simple login form with custom styling",
      code: `import { ProductionLoginForm } from "@/components/auth/production-login-form"

export default function LoginPage() {
  const handleLogin = async (data) => {
    try {
      // Send to your backend authentication service
      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        window.location.href = "/dashboard"
      } else {
        console.error("Login failed")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <ProductionLoginForm 
      style="glassmorphism"
      onSubmit={handleLogin}
    />
  )
}`,
    },
    {
      id: "signup-full",
      title: "Full Signup Form",
      description: "Complete signup flow with validation",
      code: `import { ProductionSignUpForm } from "@/components/auth/production-signup-form"
import { validatePassword } from "@/lib/auth-utils"

export default function SignupPage() {
  const handleSignup = async (data) => {
    try {
      // Validate before sending
      const passwordValidation = validatePassword(data.password)
      if (!passwordValidation.isValid) {
        console.error(passwordValidation.feedback[0])
        return
      }

      // Send to your registration endpoint
      const response = await fetch("https://your-api.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        }),
      })

      if (response.ok) {
        window.location.href = "/verify-email"
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <ProductionSignUpForm 
      style="modern-gradient"
      onSubmit={handleSignup}
    />
  )
}`,
    },
    {
      id: "forgot-password",
      title: "Password Reset Flow",
      description: "Forgot password form",
      code: `import { ProductionForgotPasswordForm } from "@/components/auth/production-forgot-password-form"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleReset = async (email) => {
    try {
      const response = await fetch("https://your-api.com/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <ProductionForgotPasswordForm 
      style="dark-neon"
      onSubmit={handleReset}
      onBack={() => window.history.back()}
    />
  )
}`,
    },
    {
      id: "otp-verification",
      title: "OTP Verification",
      description: "Two-factor authentication form",
      code: `import { ProductionOTPForm } from "@/components/auth/production-otp-form"
import { useState } from "react"

export default function OTPPage() {
  const [email] = useState("user@example.com")

  const handleVerify = async (code) => {
    try {
      const response = await fetch("https://your-api.com/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, email }),
      })

      if (response.ok) {
        window.location.href = "/dashboard"
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleResend = async () => {
    try {
      await fetch("https://your-api.com/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <ProductionOTPForm 
      style="cyberpunk"
      email={email}
      onVerify={handleVerify}
      onResend={handleResend}
    />
  )
}`,
    },
    {
      id: "all-styles",
      title: "Try All Styles",
      description: "Display all 12 styles in showcase",
      code: `import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AUTH_STYLES } from "@/lib/auth-config"
import Link from "next/link"

export default function StylesGallery() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Authentication Styles</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUTH_STYLES.map((style) => (
            <Card key={style} className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300" />
              <div className="p-4">
                <h3 className="font-semibold capitalize mb-2">
                  {style.replace(/-/g, " ")}
                </h3>
                <Link href={\`/showcase?style=\${style}\`}>
                  <Button size="sm" className="w-full">
                    Preview
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}`,
    },
    {
      id: "custom-validation",
      title: "Custom Validation",
      description: "Add custom validation rules",
      code: `import { validateEmail, validatePassword } from "@/lib/auth-utils"

// Add custom validators
export function validateUsername(username: string): boolean {
  return /^[a-zA-Z0-9_-]{3,20}$/.test(username)
}

export function validatePhoneNumber(phone: string): boolean {
  return /^\\+?[1-9]\\d{1,14}$/.test(phone)
}

export function validateCompanyName(name: string): boolean {
  return name.length >= 2 && name.length <= 100
}

// Use in your form
export function validateRegistration(data: any) {
  const errors: Record<string, string> = {}

  if (!validateEmail(data.email)) {
    errors.email = "Invalid email address"
  }

  if (!validatePassword(data.password).isValid) {
    errors.password = "Password does not meet requirements"
  }

  if (!validateUsername(data.username)) {
    errors.username = "Username must be 3-20 characters"
  }

  return errors
}`,
    },
    {
      id: "error-handling",
      title: "Error Handling",
      description: "Handle form errors gracefully",
      code: `import { ProductionSignUpForm } from "@/components/auth/production-signup-form"
import { useState } from "react"

export default function SignupWithErrors() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (data) => {
    setError("")
    setLoading(true)

    try {
      const response = await fetch("https://your-api.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || "Sign up failed")
        return
      }

      window.location.href = "/verify-email"
    } catch (err) {
      setError("Network error. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded">
          {error}
        </div>
      )}
      <ProductionSignUpForm 
        style="minimalist"
        onSubmit={handleSignup}
      />
    </div>
  )
}`,
    },
    {
      id: "style-switcher",
      title: "Dynamic Style Switcher",
      description: "Let users choose their preferred style",
      code: `"use client"

import { ProductionLoginForm } from "@/components/auth/production-login-form"
import { AUTH_STYLES } from "@/lib/auth-config"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LoginWithStyleSwitcher() {
  const [style, setStyle] = useState<any>("glassmorphism")

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {AUTH_STYLES.map((s) => (
          <Button
            key={s}
            variant={style === s ? "default" : "outline"}
            onClick={() => setStyle(s)}
            size="sm"
          >
            {s.replace(/-/g, " ")}
          </Button>
        ))}
      </div>

      <ProductionLoginForm 
        style={style}
        onSubmit={async (data) => {
          console.log("Login with", style, "style:", data)
        }}
      />
    </div>
  )
}`,
    },
    {
      id: "multi-step",
      title: "Multi-Step Authentication",
      description: "Build a multi-step auth flow",
      code: `"use client"

import { ProductionSignUpForm } from "@/components/auth/production-signup-form"
import { ProductionOTPForm } from "@/components/auth/production-otp-form"
import { useState } from "react"

export default function MultiStepAuth() {
  const [step, setStep] = useState<"signup" | "otp">("signup")
  const [email, setEmail] = useState("")

  const handleSignup = async (data) => {
    setEmail(data.email)
    // Send signup request
    setStep("otp")
  }

  const handleOTPVerify = async (code) => {
    // Verify OTP
    window.location.href = "/dashboard"
  }

  return (
    <div>
      {step === "signup" && (
        <ProductionSignUpForm 
          style="split-screen"
          onSubmit={handleSignup}
        />
      )}
      {step === "otp" && (
        <ProductionOTPForm 
          style="split-screen"
          email={email}
          onVerify={handleOTPVerify}
        />
      )}
    </div>
  )
}`,
    },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Code Snippets</h1>
          <p className="text-lg text-muted-foreground">Copy-paste ready code for common authentication scenarios</p>
        </div>

        <div className="space-y-4">
          {snippets.map((snippet) => (
            <Card key={snippet.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{snippet.title}</CardTitle>
                    <CardDescription>{snippet.description}</CardDescription>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyCode(snippet.id, snippet.code)}
                    className="gap-2"
                  >
                    {copied === snippet.id ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm font-mono whitespace-pre-wrap break-words">{snippet.code}</pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
