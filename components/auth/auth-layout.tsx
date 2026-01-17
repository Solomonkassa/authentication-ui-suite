import type React from "react"

type LayoutStyle = "minimalist" | "split-screen" | "glassmorphism"

interface AuthLayoutProps {
  style: LayoutStyle
  children: React.ReactNode
  showImage?: boolean
}

export function AuthLayout({ style, children, showImage = true }: AuthLayoutProps) {
  if (style === "split-screen" && showImage) {
    return (
      <div className="flex h-screen w-full">
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-900 items-center justify-center p-8">
          <div className="text-center text-white max-w-md">
            <div className="mb-6 text-6xl">🔐</div>
            <h2 className="text-3xl font-bold mb-4">Secure Access</h2>
            <p className="text-blue-100">Experience seamless authentication with modern security standards.</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-background">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    )
  }

  if (style === "glassmorphism") {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Form container */}
        <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          {children}
        </div>
      </div>
    )
  }

  // Minimalist style (default)
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
