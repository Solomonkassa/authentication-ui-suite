"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function AuthDocumentation() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Authentication UI Library</h1>
          <p className="text-lg text-muted-foreground">
            Production-ready authentication components with 12 style variants
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/auth-showcase">
            <Button className="w-full" variant="default">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Showcase
            </Button>
          </Link>
          <Link href="https://github.com">
            <Button className="w-full bg-transparent" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
          <Link href="/docs">
            <Button className="w-full bg-transparent" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Docs
            </Button>
          </Link>
          <Link href="/api-reference">
            <Button className="w-full bg-transparent" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              API Ref
            </Button>
          </Link>
        </div>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">12 Style Variants</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Minimalist</li>
                <li>✓ Split Screen</li>
                <li>✓ Glassmorphism</li>
                <li>✓ Modern Gradient</li>
                <li>✓ Dark Neon</li>
                <li>✓ Soft Rounded</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">More Styles</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Neumorphic</li>
                <li>✓ Geometric</li>
                <li>✓ Brutalist</li>
                <li>✓ Luxury</li>
                <li>✓ Cyberpunk</li>
                <li>✓ Minimalist Dark</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Import and use components in your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Login Form</h4>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  {`import { ProductionLoginForm } from "@/components/auth/production-login-form"

export function MyLoginPage() {
  return (
    <ProductionLoginForm 
      style="glassmorphism"
      onSubmit={async (data) => {
        // Handle login
      }}
    />
  )
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Signup Form</h4>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  {`import { ProductionSignUpForm } from "@/components/auth/production-signup-form"

export function MySignupPage() {
  return (
    <ProductionSignUpForm 
      style="modern-gradient"
      onSubmit={async (data) => {
        // Handle signup
      }}
    />
  )
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">OTP Form</h4>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  {`import { ProductionOTPForm } from "@/components/auth/production-otp-form"

export function MyOTPPage() {
  return (
    <ProductionOTPForm 
      style="dark-neon"
      email="user@example.com"
      onVerify={async (code) => {
        // Handle verification
      }}
    />
  )
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Utilities */}
        <Card>
          <CardHeader>
            <CardTitle>Utility Functions</CardTitle>
            <CardDescription>Helper functions for authentication logic</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">validateEmail(email: string)</h4>
              <p className="text-sm text-muted-foreground mb-2">Validates email format</p>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg">
                <pre className="text-sm">{`import { validateEmail } from "@/lib/auth-utils"

if (validateEmail("user@example.com")) {
  // Email is valid
}`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">validatePassword(password: string)</h4>
              <p className="text-sm text-muted-foreground mb-2">Validates and scores password strength</p>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg">
                <pre className="text-sm">{`import { validatePassword } from "@/lib/auth-utils"

const { isValid, strength, feedback } = validatePassword(pwd)
// strength: "weak" | "fair" | "good" | "strong"`}</pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">maskEmail(email: string)</h4>
              <p className="text-sm text-muted-foreground mb-2">Masks email for display</p>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg">
                <pre className="text-sm">{`import { maskEmail } from "@/lib/auth-utils"

maskEmail("user@example.com") // "u*@example.com"`}</pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Style Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Available Styles</CardTitle>
            <CardDescription>12 professionally designed authentication layouts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Minimalist", desc: "Clean and simple" },
                { name: "Split Screen", desc: "With hero image" },
                { name: "Glassmorphism", desc: "Modern frosted glass" },
                { name: "Modern Gradient", desc: "Gradient backgrounds" },
                { name: "Dark Neon", desc: "Cyberpunk aesthetic" },
                { name: "Soft Rounded", desc: "Gentle curves" },
                { name: "Neumorphic", desc: "3D extruded effect" },
                { name: "Geometric", desc: "Shape patterns" },
                { name: "Brutalist", desc: "Bold and minimal" },
                { name: "Luxury", desc: "Premium aesthetic" },
                { name: "Cyberpunk", desc: "High-tech look" },
                { name: "Minimalist Dark", desc: "Dark minimalism" },
              ].map((style) => (
                <div key={style.name} className="p-4 rounded-lg border">
                  <h4 className="font-semibold">{style.name}</h4>
                  <p className="text-sm text-muted-foreground">{style.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Component API */}
        <Card>
          <CardHeader>
            <CardTitle>Component Props</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">ProductionLoginForm</h4>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg mt-2 overflow-x-auto">
                <pre className="text-sm">
                  {`interface ProductionLoginFormProps {
  style?: LayoutStyle
  onSubmit?: (data: {
    email: string
    password: string
    rememberMe: boolean
  }) => Promise<void>
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">ProductionSignUpForm</h4>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg mt-2 overflow-x-auto">
                <pre className="text-sm">
                  {`interface ProductionSignUpFormProps {
  style?: LayoutStyle
  onSubmit?: (data: {
    fullName: string
    email: string
    password: string
    agreeToTerms: boolean
  }) => Promise<void>
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">ProductionOTPForm</h4>
              <div className="bg-slate-900 text-slate-50 p-4 rounded-lg mt-2 overflow-x-auto">
                <pre className="text-sm">
                  {`interface ProductionOTPFormProps {
  style?: LayoutStyle
  email?: string
  onVerify?: (code: string) => Promise<void>
  onResend?: () => Promise<void>
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>Customize authentication settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`import { AUTH_CONFIG, VALIDATION_RULES } from "@/lib/auth-config"

// Customize settings
const config = {
  passwordMinLength: 8,
  otpLength: 6,
  otpResendTimeout: 30000, // 30 seconds
  passwordReset: {
    linkExpiry: 86400000, // 24 hours
    maxAttempts: 5,
  },
  security: {
    enableRateLimiting: true,
    enableTwoFactor: true,
    sessionTimeout: 3600000, // 1 hour
  },
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>Authentication UI Library v1.0.0</p>
          <p>Production-ready components for Next.js applications</p>
        </div>
      </div>
    </div>
  )
}
