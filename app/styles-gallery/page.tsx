"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AUTH_STYLES } from "@/lib/auth-config"
import { ArrowRight } from "lucide-react"

export default function StylesGallery() {
  const styleDescriptions: Record<string, string> = {
    minimalist: "Clean and simple with minimal visual elements",
    "split-screen": "Hero image on the left, form on the right",
    glassmorphism: "Modern frosted glass effect with blur",
    "modern-gradient": "Gradient backgrounds for a contemporary look",
    "dark-neon": "Dark background with neon cyan accents",
    "soft-rounded": "Soft curves and rounded corners",
    neumorphic: "3D extruded effect with depth",
    geometric: "Geometric shapes and patterns",
    brutalist: "Bold, minimal with thick borders",
    luxury: "Premium aesthetic with gold accents",
    cyberpunk: "High-tech neon with scanlines",
    "minimalist-dark": "Dark theme minimal design",
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Authentication Styles Gallery</h1>
          <p className="text-lg text-muted-foreground">
            12 professionally designed authentication layouts to choose from
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUTH_STYLES.map((style) => (
            <Card key={style} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
              {/* Preview Box */}
              <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-sm text-slate-600 font-medium">
                Preview
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold capitalize text-lg">{style.replace(/-/g, " ")}</h3>
                  <p className="text-sm text-muted-foreground">{styleDescriptions[style]}</p>
                </div>

                <Link href={`/auth-showcase?style=${style}`}>
                  <Button size="sm" className="w-full gap-2">
                    View <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Info */}
        <Card className="bg-slate-50">
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How to Use</h3>
              <p className="text-sm text-muted-foreground">
                Click "View" on any style to preview it with all 4 authentication templates (Login, Sign Up, Password
                Reset, OTP).
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/auth-showcase">
                <Button variant="outline" className="w-full bg-transparent">
                  Interactive Demo
                </Button>
              </Link>
              <Link href="/code-snippets">
                <Button variant="outline" className="w-full bg-transparent">
                  Copy Code
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
