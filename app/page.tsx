import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Code2, Palette, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">Production Authentication UI</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                12 professionally designed authentication layouts. Fully customizable, production-ready components for
                Next.js.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/auth-showcase">
                <Button size="lg" className="gap-2">
                  <Palette className="h-5 w-5" />
                  View All Styles
                </Button>
              </Link>
              <Link href="/code-snippets">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Code2 className="h-5 w-5" />
                  Copy Code
                </Button>
              </Link>
              <Link href="/setup-guide">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Zap className="h-5 w-5" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                12 Styles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Minimalist, Split Screen, Glassmorphism, Modern Gradient, Dark Neon, Soft Rounded, Neumorphic,
                Geometric, Brutalist, Luxury, Cyberpunk, and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Copy-Paste Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Production-ready components with full validation, error handling, and TypeScript support. Start building
                immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Fully Customizable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Easy to customize styles, validation rules, and behavior. Works with any backend or database.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/auth-showcase">
              <Card className="hover:shadow-lg transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Interactive Showcase
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Try all 12 styles with 4 authentication templates</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/code-snippets">
              <Card className="hover:shadow-lg transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Code Snippets
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Copy-paste ready examples and integrations</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/setup-guide">
              <Card className="hover:shadow-lg transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Setup Guide
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Step-by-step instructions for deployment</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/auth-documentation">
              <Card className="hover:shadow-lg transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Documentation
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>Complete API reference and component guide</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
