"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function SetupGuide() {
  const steps = [
    {
      title: "1. Installation",
      description: "Get the authentication components",
      items: [
        "Copy components from /components/auth folder",
        "Copy utilities from /lib/auth-*.ts files",
        "Ensure all dependencies are installed",
      ],
    },
    {
      title: "2. Configuration",
      description: "Set up environment and config",
      items: [
        "Create .env.local with NEXT_PUBLIC_APP_URL",
        "Review AUTH_CONFIG in lib/auth-config.ts",
        "Customize validation rules as needed",
      ],
    },
    {
      title: "3. Component Integration",
      description: "Use auth components in your pages",
      items: [
        "Import form components into your pages",
        "Choose a style variant (12 available)",
        "Implement onSubmit handlers",
      ],
    },
    {
      title: "4. Connect Your Backend",
      description: "Integrate with your authentication service",
      items: [
        "Pass form data to your backend authentication service",
        "Handle login/signup/password-reset requests",
        "Manage user sessions in your backend",
        "Return appropriate responses to the form handlers",
      ],
    },
    {
      title: "5. Database Setup (Optional)",
      description: "Set up user database",
      items: [
        "Create users table with email, password_hash fields",
        "Create sessions table for session management",
        "Add indexes for performance",
        "Set up migrations",
      ],
    },
    {
      title: "6. Testing",
      description: "Test the authentication flow",
      items: [
        "Test signup with valid/invalid data",
        "Test login with correct/incorrect credentials",
        "Test password reset flow",
        "Test OTP verification",
      ],
    },
    {
      title: "7. Deployment",
      description: "Deploy to production",
      items: [
        "Set environment variables in Vercel",
        "Run build: npm run build",
        "Deploy: npm run deploy or git push",
        "Monitor errors and performance",
      ],
    },
    {
      title: "8. Security Hardening",
      description: "Implement security best practices",
      items: [
        "Enable rate limiting on auth endpoints",
        "Implement CSRF protection",
        "Use HTTPS only",
        "Add logging and monitoring",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Setup Guide</h1>
          <p className="text-lg text-muted-foreground">Step-by-step instructions to set up the authentication system</p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/auth-showcase">
            <Button className="w-full bg-transparent" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Demo
            </Button>
          </Link>
          <Link href="/code-snippets">
            <Button className="w-full bg-transparent" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Code Snippets
            </Button>
          </Link>
          <Link href="/auth-documentation">
            <Button className="w-full bg-transparent" variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Documentation
            </Button>
          </Link>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Issues */}
        <Card>
          <CardHeader>
            <CardTitle>Common Issues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Styles not applying?</h4>
              <p className="text-sm text-muted-foreground">
                Ensure Tailwind CSS is configured correctly and all component files are imported.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Components not found?</h4>
              <p className="text-sm text-muted-foreground">
                Check that all files are in the correct directories: components/auth and lib.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">API routes not working?</h4>
              <p className="text-sm text-muted-foreground">
                Verify that API routes are in app/api/auth folder and are correctly exporting handler functions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Getting Help */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Check the documentation and code snippets for detailed examples. Review the showcase to see all available
              styles.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/auth-documentation">
                <Button variant="outline" className="w-full bg-transparent">
                  Read Documentation
                </Button>
              </Link>
              <Link href="/code-snippets">
                <Button variant="outline" className="w-full bg-transparent">
                  View Code Examples
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
