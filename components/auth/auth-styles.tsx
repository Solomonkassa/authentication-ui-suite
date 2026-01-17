import type React from "react"

export type LayoutStyle =
  | "minimalist"
  | "split-screen"
  | "glassmorphism"
  | "modern-gradient"
  | "dark-neon"
  | "soft-rounded"
  | "neumorphic"
  | "geometric"
  | "brutalist"
  | "luxury"
  | "cyberpunk"
  | "minimalist-dark"

interface AuthLayoutProps {
  style: LayoutStyle
  children: React.ReactNode
  title?: string
}

export function AuthLayoutMinimalist({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}

export function AuthLayoutSplitScreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-900 items-center justify-center p-8">
        <div className="text-center text-white max-w-md">
          <div className="mb-6 text-6xl font-bold">🔐</div>
          <h2 className="text-4xl font-bold mb-4">Secure Access</h2>
          <p className="text-blue-100 text-lg">Experience seamless authentication with modern security standards.</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}

export function AuthLayoutGlassmorphism({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export function AuthLayoutModernGradient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">{children}</div>
    </div>
  )
}

export function AuthLayoutDarkNeon({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1)_0%,rgba(59,130,246,0)_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1)_0%,rgba(168,85,247,0)_50%)]" />
      <div className="relative z-10 w-full max-w-md bg-slate-900 border-2 border-cyan-500/30 rounded-xl p-8 shadow-2xl shadow-cyan-500/20">
        {children}
      </div>
    </div>
  )
}

export function AuthLayoutSoftRounded({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-full p-12 shadow-2xl border-8 border-rose-100">{children}</div>
    </div>
  )
}

export function AuthLayoutNeumorphic({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div
        className="w-full max-w-md bg-gray-100 rounded-3xl p-8 shadow-[0_20px_60px_#c0c0c0,inset_0_1px_0_#ffffff]"
        style={{
          boxShadow: "0 20px 60px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function AuthLayoutGeometric({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-300/20 rounded-full -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full -ml-36 -mb-36" />
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-8 border-4 border-orange-200 shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export function AuthLayoutBrutalist({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 p-4">
      <div className="w-full max-w-md bg-zinc-900 border-4 border-zinc-700 p-8">{children}</div>
    </div>
  )
}

export function AuthLayoutLuxury({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-10 shadow-2xl border border-amber-200 relative">
        <div className="absolute inset-0 border border-amber-400 rounded-2xl pointer-events-none opacity-30 m-3" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

export function AuthLayoutCyberpunk({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-950 p-4 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,255,0.03)_0px,rgba(0,255,255,0.03)_1px,transparent_1px,transparent_2px)]" />
      <div className="relative z-10 w-full max-w-md bg-gray-900 border-2 border-cyan-400 p-8 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
        {children}
      </div>
    </div>
  )
}

export function AuthLayoutMinimalistDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-lg p-8 border border-slate-800">{children}</div>
    </div>
  )
}

export function AuthLayoutRenderer({ style, children }: AuthLayoutProps) {
  const layouts: Record<LayoutStyle, React.ReactNode> = {
    minimalist: <AuthLayoutMinimalist>{children}</AuthLayoutMinimalist>,
    "split-screen": <AuthLayoutSplitScreen>{children}</AuthLayoutSplitScreen>,
    glassmorphism: <AuthLayoutGlassmorphism>{children}</AuthLayoutGlassmorphism>,
    "modern-gradient": <AuthLayoutModernGradient>{children}</AuthLayoutModernGradient>,
    "dark-neon": <AuthLayoutDarkNeon>{children}</AuthLayoutDarkNeon>,
    "soft-rounded": <AuthLayoutSoftRounded>{children}</AuthLayoutSoftRounded>,
    neumorphic: <AuthLayoutNeumorphic>{children}</AuthLayoutNeumorphic>,
    geometric: <AuthLayoutGeometric>{children}</AuthLayoutGeometric>,
    brutalist: <AuthLayoutBrutalist>{children}</AuthLayoutBrutalist>,
    luxury: <AuthLayoutLuxury>{children}</AuthLayoutLuxury>,
    cyberpunk: <AuthLayoutCyberpunk>{children}</AuthLayoutCyberpunk>,
    "minimalist-dark": <AuthLayoutMinimalistDark>{children}</AuthLayoutMinimalistDark>,
  }

  return layouts[style]
}
