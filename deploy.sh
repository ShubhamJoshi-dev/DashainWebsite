#!/bin/bash

# Dashain Festival Website Deployment Script
# This script builds and deploys the Next.js application

set -e  # Exit on any error

echo "🪔 Starting Dashain Festival Website Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18.0.0 or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" = "$REQUIRED_VERSION" ]; then
    print_success "Node.js version $NODE_VERSION meets requirements"
else
    print_error "Node.js version $NODE_VERSION is below required version $REQUIRED_VERSION"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Install dependencies
print_status "Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install --frozen-lockfile
elif command -v pnpm &> /dev/null; then
    pnpm install --frozen-lockfile
else
    npm ci
fi
print_success "Dependencies installed successfully"

# Run type checking
print_status "Running TypeScript type checking..."
npx tsc --noEmit
print_success "Type checking passed"

# Run linting
print_status "Running ESLint..."
npm run lint
print_success "Linting passed"

# Build the application
print_status "Building the application..."
npm run build
print_success "Build completed successfully"

# Optional: Run bundle analyzer
if [ "$ANALYZE" = "true" ]; then
    print_status "Running bundle analysis..."
    npm run analyze
fi

# Check if deployment target is specified
DEPLOY_TARGET=${1:-""}

case $DEPLOY_TARGET in
    "vercel")
        print_status "Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
            print_success "Deployed to Vercel successfully"
        else
            print_error "Vercel CLI not found. Install with: npm i -g vercel"
            exit 1
        fi
        ;;
    "netlify")
        print_status "Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=.next
            print_success "Deployed to Netlify successfully"
        else
            print_error "Netlify CLI not found. Install with: npm i -g netlify-cli"
            exit 1
        fi
        ;;
    "static")
        print_status "Generating static export..."
        npm run export
        print_success "Static export generated in 'out' directory"
        print_warning "Upload the 'out' directory to your static hosting provider"
        ;;
    "")
        print_success "Build completed! Application is ready for deployment."
        echo ""
        echo "🚀 Deployment Options:"
        echo "  - Vercel: ./deploy.sh vercel"
        echo "  - Netlify: ./deploy.sh netlify"
        echo "  - Static Export: ./deploy.sh static"
        echo "  - Manual: Upload .next directory to your hosting provider"
        ;;
    *)
        print_error "Unknown deployment target: $DEPLOY_TARGET"
        echo "Available targets: vercel, netlify, static"
        exit 1
        ;;
esac

echo ""
print_success "🎉 Deployment process completed!"
echo "🪔 शुभ दशैं! Your Dashain Festival website is ready! 🌼"
