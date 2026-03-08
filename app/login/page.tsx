'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, LogIn } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/dashboard')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UniCare HMS
            </h1>
          </div>
          <p className="text-gray-600">Sign in to access your account</p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <LogIn className="w-6 h-6" />
              Login
            </CardTitle>
            <CardDescription>Enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 text-center mb-3">Demo Accounts:</p>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-blue-50 rounded">
                  <strong>Admin:</strong> admin@hospital.com / admin123
                </div>
                <div className="p-2 bg-green-50 rounded">
                  <strong>Doctor:</strong> doctor@hospital.com / admin123
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <strong>Patient:</strong> patient@hospital.com / admin123
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
