'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Users,
  UserCog,
  Calendar,
  Ambulance,
  Heart,
  Building2,
  FileText,
  Activity,
  TrendingUp,
  Clock,
  AlertCircle,
  DollarSign
} from 'lucide-react'

const modules = [
  {
    title: 'Patients',
    description: 'Manage patient records and information',
    icon: Users,
    href: '/dashboard/patients',
    color: 'bg-blue-500',
    count: '1,245'
  },
  {
    title: 'Doctors',
    description: 'Manage doctor profiles and schedules',
    icon: UserCog,
    href: '/dashboard/doctors',
    color: 'bg-green-500',
    count: '89'
  },
  {
    title: 'Appointments',
    description: 'Schedule and manage appointments',
    icon: Calendar,
    href: '/dashboard/appointments',
    color: 'bg-purple-500',
    count: '324'
  },
  {
    title: 'Emergency Cases',
    description: 'Track priority-based emergency cases',
    icon: Ambulance,
    href: '/dashboard/emergency',
    color: 'bg-red-500',
    count: '12 Active'
  },
  {
    title: 'Organ Donation',
    description: 'Manage donors and waiting list',
    icon: Heart,
    href: '/dashboard/organs',
    color: 'bg-pink-500',
    count: '45'
  },
  {
    title: 'Departments',
    description: 'Manage hospital departments',
    icon: Building2,
    href: '/dashboard/departments',
    color: 'bg-orange-500',
    count: '12'
  },
  {
    title: 'Medical Records',
    description: 'Access patient medical history',
    icon: FileText,
    href: '/dashboard/records',
    color: 'bg-indigo-500',
    count: '5,643'
  },
  {
    title: 'Billing',
    description: 'Manage bills and payments',
    icon: DollarSign,
    href: '/dashboard/billing',
    color: 'bg-teal-500',
    count: '₹2.4M'
  },
]

const stats = [
  {
    title: 'Total Patients',
    value: '1,245',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Active Appointments',
    value: '324',
    change: '+8.2%',
    trend: 'up',
    icon: Calendar,
    color: 'text-purple-600'
  },
  {
    title: 'Emergency Cases',
    value: '12',
    change: '-3.1%',
    trend: 'down',
    icon: AlertCircle,
    color: 'text-red-600'
  },
  {
    title: 'Revenue (Month)',
    value: '₹2.4M',
    change: '+15.3%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-green-600'
  },
]

const recentActivities = [
  {
    type: 'appointment',
    message: 'New appointment scheduled with Dr. Wilson',
    time: '5 minutes ago',
    icon: Calendar,
    color: 'text-purple-600'
  },
  {
    type: 'emergency',
    message: 'Critical emergency case admitted - Patient #1245',
    time: '12 minutes ago',
    icon: Ambulance,
    color: 'text-red-600'
  },
  {
    type: 'organ',
    message: 'Organ match found for waiting list #3',
    time: '1 hour ago',
    icon: Heart,
    color: 'text-pink-600'
  },
  {
    type: 'patient',
    message: 'New patient registration - John Doe',
    time: '2 hours ago',
    icon: Users,
    color: 'text-blue-600'
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UniCare HMS
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button>
                <Activity className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome to Dashboard</h2>
          <p className="text-gray-600">Comprehensive overview of your hospital management system</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="border-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className={`text-sm flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.change} from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Modules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6">System Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Link key={index} href={module.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-300">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center mb-4`}>
                      <module.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-700">{module.count}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest updates across the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className={`w-5 h-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.message}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Active Emergency Cases
              </CardTitle>
              <CardDescription>Priority-based emergency management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-red-900">Critical</span>
                    <span className="text-sm text-red-700">2 cases</span>
                  </div>
                  <p className="text-sm text-red-800">Cardiac arrest, Severe trauma</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-orange-900">High</span>
                    <span className="text-sm text-orange-700">5 cases</span>
                  </div>
                  <p className="text-sm text-orange-800">Fractures, respiratory distress</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-yellow-900">Medium</span>
                    <span className="text-sm text-yellow-700">5 cases</span>
                  </div>
                  <p className="text-sm text-yellow-800">Minor injuries, fever</p>
                </div>
              </div>
              <Link href="/dashboard/emergency">
                <Button className="w-full mt-4" variant="outline">
                  View All Emergency Cases
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
