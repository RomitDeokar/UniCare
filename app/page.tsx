'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Activity, 
  Calendar, 
  Heart, 
  Users, 
  FileText, 
  Clock,
  AlertCircle,
  Building2,
  Stethoscope,
  Ambulance
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Comprehensive digital health records and patient information management',
    color: 'text-blue-500'
  },
  {
    icon: Stethoscope,
    title: 'Doctor Scheduling',
    description: 'Optimal shift allocation with conflict prevention and availability tracking',
    color: 'text-green-500'
  },
  {
    icon: Ambulance,
    title: 'Emergency Priority',
    description: 'Triage-based priority system for critical, high, medium, and low cases',
    color: 'text-red-500'
  },
  {
    icon: Heart,
    title: 'Organ Donation',
    description: 'Donor management with compatibility matching and expiry tracking',
    color: 'text-pink-500'
  },
  {
    icon: Calendar,
    title: 'Appointment System',
    description: 'Streamlined booking process for outpatient consultations',
    color: 'text-purple-500'
  },
  {
    icon: Building2,
    title: 'Department Management',
    description: 'Organize hospital infrastructure and hierarchy effectively',
    color: 'text-orange-500'
  },
  {
    icon: FileText,
    title: 'Medical Records',
    description: 'Secure storage of diagnosis, prescriptions, and lab results',
    color: 'text-indigo-500'
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Track vital signs, emergency cases, and patient status in real-time',
    color: 'text-teal-500'
  },
]

const stats = [
  { value: '10,000+', label: 'Patients Managed' },
  { value: '500+', label: 'Medical Staff' },
  { value: '50+', label: 'Departments' },
  { value: '99.9%', label: 'Uptime' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              <span>Modern Healthcare Management</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UniCare HMS
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Comprehensive Hospital Management System with Doctor Scheduling, Emergency Priority Handling, and Organ Donation Management
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                  <Activity className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technology stack to solve real-world healthcare management problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-200">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Priority Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium mb-6">
                <AlertCircle className="w-4 h-4" />
                <span>Life-Saving Technology</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Emergency Priority System</h2>
              <p className="text-lg text-gray-700 mb-6">
                Implements a triage-based priority classification ensuring life-threatening cases are handled immediately. Real-time tracking of emergency cases, doctor assignments, and discharge status improves response time and patient survival rates.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold">Critical Priority</h3>
                    <p className="text-gray-600">Immediate attention for life-threatening conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold">High Priority</h3>
                    <p className="text-gray-600">Urgent cases requiring prompt medical intervention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold">Medium & Low Priority</h3>
                    <p className="text-gray-600">Stable conditions with scheduled treatment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Active Emergency Cases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                    <div>
                      <div className="font-semibold">Critical: Cardiac Arrest</div>
                      <div className="text-sm text-gray-600">Patient ID: 1245 • Dr. Wilson</div>
                    </div>
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div>
                      <div className="font-semibold">High: Multiple Fractures</div>
                      <div className="text-sm text-gray-600">Patient ID: 3421 • Dr. Davis</div>
                    </div>
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div>
                      <div className="font-semibold">Medium: Fever & Cough</div>
                      <div className="text-sm text-gray-600">Patient ID: 5632 • Dr. Anderson</div>
                    </div>
                    <Activity className="w-6 h-6 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organ Donation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-600 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Save Lives</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Organ Donation & Waiting List Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintains donor information, available organs, compatibility checks, and expiry tracking. Automatically prioritizes recipients based on medical severity and waiting duration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Donor Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Track living and deceased donors with medical clearance status and organ availability
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Compatibility Check</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Blood group and tissue type matching to ensure safe organ transplants
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Waiting List Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fair and transparent allocation based on severity score and waiting duration
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals using UniCare HMS to improve patient care and operational efficiency
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Access Dashboard
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UniCare HMS</h3>
              <p className="text-gray-400">
                Modern Hospital Management System built with Next.js, TypeScript, and Prisma.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Patient Management</li>
                <li>Doctor Scheduling</li>
                <li>Emergency Priority</li>
                <li>Organ Donation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dashboard</li>
                <li>Appointments</li>
                <li>Emergency Cases</li>
                <li>Reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technology Stack</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Next.js 14</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Prisma ORM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 UniCare HMS. Database Management System Project.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
