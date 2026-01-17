"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react"

interface EnhancedFormInputProps {
  label?: string
  error?: string
  success?: string
  hint?: string
  showPasswordToggle?: boolean
  type?: string
  className?: string
  showStrength?: boolean
  [key: string]: any
}

export function EnhancedFormInput({
  label,
  error,
  success,
  hint,
  showPasswordToggle,
  type = "text",
  className,
  showStrength,
  ...props
}: EnhancedFormInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type
  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label className="text-sm font-medium text-foreground">
          {label}
          {props.required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <div className="relative">
        <Input
          type={inputType}
          className={cn(
            "transition-all",
            error && "border-destructive ring-destructive/20",
            success && "border-green-500 ring-green-500/20",
            isFocused && "ring-2",
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={error ? "error" : hint ? "hint" : undefined}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        )}
        {success && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-green-500" />}
      </div>
      {error && (
        <p id="error" className="text-sm text-destructive flex items-center gap-1">
          <AlertCircle className="size-3" />
          {error}
        </p>
      )}
      {success && <p className="text-sm text-green-600">{success}</p>}
      {hint && (
        <p id="hint" className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  )
}
