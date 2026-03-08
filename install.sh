#!/bin/bash

# UniCare HMS Installation Script
echo "🏥 UniCare HMS - Installation Script"
echo "======================================"
echo ""

# Check Node.js
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js $(node --version) found"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi
echo "✅ npm $(npm --version) found"

# Check MySQL
echo ""
echo "📦 Checking MySQL installation..."
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed. Please install MySQL 8+ first."
    echo "Ubuntu/Debian: sudo apt-get install mysql-server"
    echo "macOS: brew install mysql"
    exit 1
fi
echo "✅ MySQL found"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Check if .env exists
if [ ! -f .env ]; then
    echo ""
    echo "⚙️  Setting up environment variables..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: Please update the .env file with your database credentials!"
    echo "   Edit .env and set:"
    echo "   - DATABASE_URL (your MySQL connection string)"
    echo "   - NEXTAUTH_SECRET (run: openssl rand -base64 32)"
    echo ""
    read -p "Press enter to continue after updating .env file..."
fi

# Generate Prisma client
echo ""
echo "🔧 Generating Prisma client..."
npx prisma generate

# Ask if user wants to push schema
echo ""
read -p "Do you want to push Prisma schema to database? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔧 Pushing schema to database..."
    npx prisma db push
    echo "✅ Schema pushed successfully"
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "📚 Then visit: http://localhost:3000"
echo ""
echo "⚠️  Don't forget to:"
echo "   1. Execute hospital_ddl.sql in your MySQL database"
echo "   2. Execute hospital_dml.sql for sample data"
echo ""
