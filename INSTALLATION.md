# Installation Guide

## Quick Start

### 1. Copy Files
Copy the following directories and files to your project:
```
components/auth/
lib/auth-config.ts
lib/auth-utils.ts
```

### 2. Install Dependencies
All required dependencies should already be in your `package.json`:
```bash
npm install
```

### 3. Use Components
```tsx
import { ProductionLoginForm } from "@/components/auth/production-login-form"

export default function LoginPage() {
  return <ProductionLoginForm style="glassmorphism" />
}
```

## Detailed Setup

### Component Files
- `production-login-form.tsx` - Login form
- `production-signup-form.tsx` - Sign up form
- `production-forgot-password-form.tsx` - Password reset
- `production-otp-form.tsx` - OTP verification
- `enhanced-form-input.tsx` - Reusable input component
- `password-strength.tsx` - Password strength indicator
- `enhanced-social-login.tsx` - Social login buttons
- `auth-styles.tsx` - All 12 layout styles

### Utility Files
- `auth-config.ts` - Configuration constants
- `auth-utils.ts` - Validation and helper functions

### API Routes (Optional)
Create these routes in your `app/api/auth/` directory:
- `login/route.ts`
- `signup/route.ts`
- `forgot-password/route.ts`
- `verify-otp/route.ts`

## Styling

The components use Tailwind CSS. Ensure your `tailwind.config.ts` is properly configured:

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
```

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## TypeScript

Full TypeScript support is included. Type definitions are available for all components and utilities.

## Next Steps

1. Review the [Documentation](./AUTH_README.md)
2. Check out [Code Snippets](./app/code-snippets)
3. Follow the [Setup Guide](./app/setup-guide)
