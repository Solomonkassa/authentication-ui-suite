import fs from "fs"

function validateConfig() {
  console.log("🔐 Validating Authentication Configuration\n")

  const checks = {
    "Components exist": () => {
      const componentFiles = [
        "components/auth/production-login-form.tsx",
        "components/auth/production-signup-form.tsx",
        "components/auth/production-forgot-password-form.tsx",
        "components/auth/production-otp-form.tsx",
      ]

      for (const file of componentFiles) {
        if (!fs.existsSync(file)) {
          throw new Error(`Missing component: ${file}`)
        }
      }
      return true
    },

    "Utilities exist": () => {
      const utilFiles = ["lib/auth-utils.ts", "lib/auth-config.ts"]

      for (const file of utilFiles) {
        if (!fs.existsSync(file)) {
          throw new Error(`Missing utility: ${file}`)
        }
      }
      return true
    },

    "Environment variables": () => {
      const envFile = ".env.local"
      if (!fs.existsSync(envFile)) {
        console.warn("⚠️  .env.local not found (optional)")
        return true
      }

      const envContent = fs.readFileSync(envFile, "utf-8")
      if (!envContent.includes("NEXT_PUBLIC_APP_URL")) {
        console.warn("⚠️  NEXT_PUBLIC_APP_URL not set")
      }
      return true
    },

    "TypeScript config": () => {
      if (!fs.existsSync("tsconfig.json")) {
        throw new Error("tsconfig.json not found")
      }
      return true
    },

    "Tailwind config": () => {
      const tailwindFiles = ["tailwind.config.ts", "tailwind.config.js"]
      const exists = tailwindFiles.some((f) => fs.existsSync(f))
      if (!exists) {
        throw new Error("Tailwind configuration not found")
      }
      return true
    },
  }

  let passed = 0
  let failed = 0

  for (const [check, fn] of Object.entries(checks)) {
    try {
      if (fn()) {
        console.log(`✅ ${check}`)
        passed++
      }
    } catch (error) {
      console.log(`❌ ${check}`)
      console.error(`   ${error instanceof Error ? error.message : String(error)}\n`)
      failed++
    }
  }

  console.log(`\n${passed} passed, ${failed} failed\n`)

  if (failed > 0) {
    process.exit(1)
  }

  console.log("🎉 All checks passed! Ready for deployment.\n")
}

validateConfig()
