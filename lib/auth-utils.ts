export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePassword(password: string): {
  isValid: boolean
  strength: "weak" | "fair" | "good" | "strong"
  feedback: string[]
} {
  const feedback: string[] = []
  let strength: "weak" | "fair" | "good" | "strong" = "weak"

  if (password.length < 8) feedback.push("At least 8 characters")
  if (!/[a-z]/.test(password)) feedback.push("Lowercase letter")
  if (!/[A-Z]/.test(password)) feedback.push("Uppercase letter")
  if (!/\d/.test(password)) feedback.push("Number")
  if (!/[@$!%*?&]/.test(password)) feedback.push("Special character")

  const score = 5 - feedback.length
  if (score >= 4) strength = "strong"
  else if (score >= 3) strength = "good"
  else if (score >= 2) strength = "fair"

  return {
    isValid: feedback.length === 0,
    strength,
    feedback: feedback.length > 0 ? ["Add: " + feedback.join(", ")] : [],
  }
}

export function validateFullName(name: string): boolean {
  return /^[a-zA-Z\s'-]{2,50}$/.test(name)
}

export function maskEmail(email: string): string {
  const [name, domain] = email.split("@")
  const maskedName = name.charAt(0) + "*".repeat(Math.max(0, name.length - 2)) + name.slice(-1)
  return `${maskedName}@${domain}`
}

export function getPasswordStrengthColor(strength: "weak" | "fair" | "good" | "strong"): string {
  const colors: Record<string, string> = {
    weak: "bg-destructive",
    fair: "bg-yellow-500",
    good: "bg-blue-500",
    strong: "bg-green-500",
  }
  return colors[strength]
}

export function formatOTP(value: string): string {
  return value.replace(/\D/g, "").slice(0, 6)
}
