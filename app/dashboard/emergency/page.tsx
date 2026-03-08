'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Ambulance,
  ArrowLeft,
  AlertCircle,
  Clock,
  Activity,
  User,
  Calendar,
  TrendingUp,
  Plus
} from 'lucide-react'

const mockEmergencyCases = [
  {
    id: 1,
    patientName: 'John Doe',
    patientId: 1,
    doctorName: 'Dr. Lisa Anderson',
    admissionTime: '2024-03-15 14:30:00',
    priority: 'Critical',
    complaint: 'Severe chest pain, shortness of breath',
    vitalSigns: 'BP: 180/110, HR: 120, SpO2: 88%',
    status: 'Active'
  },
  {
    id: 2,
    patientName: 'Raj Kumar',
    patientId: 3,
    doctorName: 'Dr. Lisa Anderson',
    admissionTime: '2024-03-16 08:15:00',
    priority: 'High',
    complaint: 'Motor vehicle accident, multiple fractures',
    vitalSigns: 'BP: 140/90, HR: 95, SpO2: 94%',
    status: 'Discharged'
  },
  {
    id: 3,
    patientName: 'Ahmed Khan',
    patientId: 5,
    doctorName: 'Dr. Lisa Anderson',
    admissionTime: '2024-03-17 22:45:00',
    priority: 'Critical',
    complaint: 'Acute kidney failure',
    vitalSigns: 'BP: 160/100, HR: 88, Creatinine: 8.5',
    status: 'Active'
  },
  {
    id: 4,
    patientName: 'Sarah Smith',
    patientId: 2,
    doctorName: 'Dr. Michael Davis',
    admissionTime: '2024-03-18 10:20:00',
    priority: 'Medium',
    complaint: 'Severe headache and fever',
    vitalSigns: 'BP: 130/85, HR: 88, Temp: 102°F',
    status: 'Active'
  },
  {
    id: 5,
    patientName: 'Priya Sharma',
    patientId: 4,
    doctorName: 'Dr. Robert Wilson',
    admissionTime: '2024-03-18 15:00:00',
    priority: 'High',
    complaint: 'Severe allergic reaction',
    vitalSigns: 'BP: 110/70, HR: 110, SpO2: 91%',
    status: 'Active'
  },
]

const priorityColors = {
  Critical: {
    bg: 'bg-red-50',
    border: 'border-red-600',
    text: 'text-red-900',
    badge: 'bg-red-600',
    icon: 'text-red-600'
  },
  High: {
    bg: 'bg-orange-50',
    border: 'border-orange-500',
    text: 'text-orange-900',
    badge: 'bg-orange-500',
    icon: 'text-orange-500'
  },
  Medium: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-500',
    text: 'text-yellow-900',
    badge: 'bg-yellow-500',
    icon: 'text-yellow-500'
  },
  Low: {
    bg: 'bg-green-50',
    border: 'border-green-500',
    text: 'text-green-900',
    badge: 'bg-green-500',
    icon: 'text-green-500'
  }
}

export default function EmergencyPage() {
  const [selectedPriority, setSelectedPriority] = useState<string>('All')

  const filteredCases = selectedPriority === 'All' 
    ? mockEmergencyCases 
    : mockEmergencyCases.filter(c => c.priority === selectedPriority)

  const activeCases = mockEmergencyCases.filter(c => c.status === 'Active')
  const criticalCount = activeCases.filter(c => c.priority === 'Critical').length
  const highCount = activeCases.filter(c => c.priority === 'High').length
  const mediumCount = activeCases.filter(c => c.priority === 'Medium').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Ambulance className="w-6 h-6 text-red-600" />
                <h1 className="text-2xl font-bold">Emergency Cases</h1>
              </div>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Emergency
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center justify-between">
                Total Active Cases
                <Activity className="w-5 h-5 text-blue-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-blue-600">{activeCases.length}</div>
              <p className="text-sm text-gray-600 mt-1">Currently being treated</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-900 flex items-center justify-between">
                Critical Priority
                <AlertCircle className="w-5 h-5 text-red-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-600">{criticalCount}</div>
              <p className="text-sm text-red-700 mt-1">Immediate attention required</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-orange-900 flex items-center justify-between">
                High Priority
                <Clock className="w-5 h-5 text-orange-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-orange-600">{highCount}</div>
              <p className="text-sm text-orange-700 mt-1">Urgent cases</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-900 flex items-center justify-between">
                Medium Priority
                <TrendingUp className="w-5 h-5 text-yellow-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-yellow-600">{mediumCount}</div>
              <p className="text-sm text-yellow-700 mt-1">Standard priority</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {['All', 'Critical', 'High', 'Medium', 'Low'].map((priority) => (
            <Button
              key={priority}
              variant={selectedPriority === priority ? 'default' : 'outline'}
              onClick={() => setSelectedPriority(priority)}
              className={selectedPriority === priority ? '' : 'hover:bg-gray-100'}
            >
              {priority}
            </Button>
          ))}
        </motion.div>

        {/* Emergency Cases List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ambulance className="w-5 h-5" />
                Emergency Cases ({filteredCases.length})
              </CardTitle>
              <CardDescription>Priority-based emergency management system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredCases.map((emergencyCase, index) => {
                  const colors = priorityColors[emergencyCase.priority as keyof typeof priorityColors]
                  return (
                    <motion.div
                      key={emergencyCase.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-6 rounded-lg border-l-4 ${colors.border} ${colors.bg}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${colors.badge} animate-pulse`}></div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${colors.badge}`}>
                                {emergencyCase.priority}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${emergencyCase.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                                {emergencyCase.status}
                              </span>
                            </div>
                            <h3 className={`text-xl font-bold ${colors.text}`}>
                              {emergencyCase.patientName}
                            </h3>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className={`p-3 bg-white rounded-lg`}>
                          <div className="flex items-center gap-2 mb-1">
                            <AlertCircle className={`w-4 h-4 ${colors.icon}`} />
                            <span className="text-sm font-medium text-gray-600">Chief Complaint</span>
                          </div>
                          <p className="text-gray-900 font-medium">{emergencyCase.complaint}</p>
                        </div>

                        <div className={`p-3 bg-white rounded-lg`}>
                          <div className="flex items-center gap-2 mb-1">
                            <Activity className={`w-4 h-4 ${colors.icon}`} />
                            <span className="text-sm font-medium text-gray-600">Vital Signs</span>
                          </div>
                          <p className="text-gray-900 font-medium">{emergencyCase.vitalSigns}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Assigned to: <strong>{emergencyCase.doctorName}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Admitted: <strong>{emergencyCase.admissionTime}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Patient ID: <strong>#{emergencyCase.patientId}</strong></span>
                        </div>
                      </div>

                      {emergencyCase.status === 'Active' && (
                        <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                          <Button size="sm" variant="outline">Update Status</Button>
                          <Button size="sm" variant="outline">Add Notes</Button>
                          <Button size="sm" variant="outline" className="text-green-600">
                            Discharge
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Emergency Protocol Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Emergency Priority Protocol
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-900 mb-2">Critical</h4>
                  <p className="text-sm text-gray-700">
                    Life-threatening conditions requiring immediate intervention
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-2">High</h4>
                  <p className="text-sm text-gray-700">
                    Urgent cases requiring prompt medical attention
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-900 mb-2">Medium</h4>
                  <p className="text-sm text-gray-700">
                    Stable conditions with scheduled treatment
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">Low</h4>
                  <p className="text-sm text-gray-700">
                    Non-urgent cases for regular consultation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
