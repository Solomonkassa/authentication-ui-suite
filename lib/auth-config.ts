export const AUTH_STYLES = [
  "minimalist",
  "split-screen",
  "glassmorphism",
  "modern-gradient",
  "dark-neon",
  "soft-rounded",
  "neumorphic",
  "geometric",
  "brutalist",
  "luxury",
  "cyberpunk",
  "minimalist-dark",
] as const

export type AuthStyle = (typeof AUTH_STYLES)[number]

export const AUTH_MODES = ["login", "signup", "forgot", "otp"] as const
export type AuthMode = (typeof AUTH_MODES)[number]

export const AUTH_CONFIG = {
  passwordMinLength: 8,
  otpLength: 6,
  otpResendTimeout: 30000,
  passwordReset: {
    linkExpiry: 86400000, // 24 hours
    maxAttempts: 5,
  },
  security: {
    enableRateLimiting: true,
    enableTwoFactor: true,
    sessionTimeout: 3600000, // 1 hour
  },
}

export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  password: {
    minLength: AUTH_CONFIG.passwordMinLength,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: `Password must be at least ${AUTH_CONFIG.passwordMinLength} characters with uppercase, lowercase, number, and special character`,
  },
  fullName: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: "Full name can only contain letters, spaces, hyphens, and apostrophes",
  },
  // Additional validation rules can be added here
}
