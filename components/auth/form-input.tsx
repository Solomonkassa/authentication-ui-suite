"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

interface FormInputProps {
  label?: string
  error?: string
  showPasswordToggle?: boolean
  type?: string
  className?: string
  [key: string]: any
}

export function FormInput({ label, error, showPasswordToggle, type = "text", className, ...props }: FormInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type

  return (
    <div className="flex flex-col gap-2">
      {label && <Label className="text-sm font-medium">{label}</Label>}
      <div className="relative">
        <Input
          type={inputType}
          className={cn(error && "aria-invalid:border-destructive aria-invalid:ring-destructive/20", className)}
          aria-invalid={!!error}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
