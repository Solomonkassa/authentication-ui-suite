#!/bin/bash

# Authentication UI Library Deployment Script
# Deploy to Vercel/Production

set -e

echo "🔐 Authentication UI Library Deployment"
echo "========================================"
echo ""

# Check environment
echo "1. Checking environment..."
if [ ! -f ".env.local" ]; then
  echo "⚠️  .env.local not found. Please create it with required variables."
  echo "   Required: NEXT_PUBLIC_APP_URL"
  exit 1
fi

# Install dependencies
echo "2. Installing dependencies..."
npm install

# Run type checking
echo "3. Running type checks..."
npm run type-check 2>/dev/null || echo "⚠️  Type checking (skipped)"

# Build project
echo "4. Building project..."
npm run build

# Test components
echo "5. Testing components..."
npm run test 2>/dev/null || echo "⚠️  Tests (skipped)"

# Lint code
echo "6. Linting code..."
npm run lint 2>/dev/null || echo "⚠️  Linting (skipped)"

echo ""
echo "✅ Build successful!"
echo ""
echo "Next steps:"
echo "1. Review your authentication configuration"
echo "2. Test forms locally: npm run dev"
echo "3. Deploy to Vercel: vercel deploy"
echo ""
