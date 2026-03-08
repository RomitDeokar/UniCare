'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Users,
  Plus,
  Search,
  ArrowLeft,
  Edit,
  Trash2,
  Eye,
  Phone,
  Mail,
  Calendar,
  MapPin
} from 'lucide-react'

// Mock patient data
const mockPatients = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    bloodGroup: 'O+',
    contactNumber: '9876543210',
    email: 'john.doe@email.com',
    city: 'Mumbai',
    state: 'Maharashtra'
  },
  {
    id: 2,
    firstName: 'Sarah',
    lastName: 'Smith',
    dateOfBirth: '1990-07-22',
    gender: 'Female',
    bloodGroup: 'A+',
    contactNumber: '9876543212',
    email: 'sarah.smith@email.com',
    city: 'Delhi',
    state: 'Delhi'
  },
  {
    id: 3,
    firstName: 'Raj',
    lastName: 'Kumar',
    dateOfBirth: '1978-11-10',
    gender: 'Male',
    bloodGroup: 'B+',
    contactNumber: '9876543214',
    email: 'raj.kumar@email.com',
    city: 'Bangalore',
    state: 'Karnataka'
  },
  {
    id: 4,
    firstName: 'Priya',
    lastName: 'Sharma',
    dateOfBirth: '1995-05-18',
    gender: 'Female',
    bloodGroup: 'AB+',
    contactNumber: '9876543216',
    email: 'priya.sharma@email.com',
    city: 'Chennai',
    state: 'Tamil Nadu'
  },
  {
    id: 5,
    firstName: 'Ahmed',
    lastName: 'Khan',
    dateOfBirth: '1982-09-25',
    gender: 'Male',
    bloodGroup: 'O-',
    contactNumber: '9876543218',
    email: 'ahmed.khan@email.com',
    city: 'Hyderabad',
    state: 'Telangana'
  },
]

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  const filteredPatients = mockPatients.filter(patient =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.contactNumber.includes(searchTerm) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
                <Users className="w-6 h-6 text-blue-600" />
                <h1 className="text-2xl font-bold">Patient Management</h1>
              </div>
            </div>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Patient
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!showAddForm ? (
          <>
            {/* Search and Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search patients by name, phone, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Total Patients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1,245</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      New This Month
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">89</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Active Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">324</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Critical Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-red-600">12</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Patients List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>All Patients ({filteredPatients.length})</CardTitle>
                  <CardDescription>
                    Manage patient records and information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredPatients.map((patient, index) => (
                      <motion.div
                        key={patient.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 border rounded-lg hover:shadow-md transition-all hover:border-blue-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold">
                                  {patient.firstName} {patient.lastName}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                                    {patient.bloodGroup}
                                  </span>
                                  <span>{patient.gender}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span>{patient.contactNumber}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span>{patient.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{patient.city}, {patient.state}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>DOB: {patient.dateOfBirth}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        ) : (
          /* Add Patient Form */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-2 max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Add New Patient</CardTitle>
                    <CardDescription>Enter patient information</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input id="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <select id="gender" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group *</Label>
                      <select id="bloodGroup" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Number *</Label>
                      <Input id="contact" placeholder="9876543210" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="street">Street Address</Label>
                    <Input id="street" placeholder="123 Main St" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Mumbai" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="Maharashtra" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipcode">Zipcode</Label>
                      <Input id="zipcode" placeholder="400001" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName">Emergency Contact Name</Label>
                      <Input id="emergencyName" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                      <Input id="emergencyPhone" placeholder="9876543211" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Patient
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
