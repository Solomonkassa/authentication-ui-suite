import { getPasswordStrengthColor, validatePassword } from "@/lib/auth-utils"

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const { strength, feedback } = validatePassword(password)

  if (!password) return null

  const strengthPercentage = {
    weak: 25,
    fair: 50,
    good: 75,
    strong: 100,
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Password strength</span>
        <span
          className={`text-xs font-semibold capitalize ${getPasswordStrengthColor(strength).replace("bg-", "text-")}`}
        >
          {strength}
        </span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all ${getPasswordStrengthColor(strength)}`}
          style={{ width: `${strengthPercentage[strength]}%` }}
        />
      </div>
      {feedback.length > 0 && (
        <ul className="text-xs text-muted-foreground space-y-1">
          {feedback.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
