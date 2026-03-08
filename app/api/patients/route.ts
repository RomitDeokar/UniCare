import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all patients
export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      orderBy: {
        registrationDate: 'desc'
      }
    })
    return NextResponse.json(patients)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    )
  }
}

// POST create new patient
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const patient = await prisma.patient.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        dateOfBirth: new Date(body.dateOfBirth),
        gender: body.gender,
        bloodGroup: body.bloodGroup,
        contactNumber: body.contactNumber,
        email: body.email,
        street: body.street,
        city: body.city,
        state: body.state,
        zipcode: body.zipcode,
        emergencyContactName: body.emergencyContactName,
        emergencyContactNumber: body.emergencyContactNumber,
      }
    })
    return NextResponse.json(patient, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create patient' },
      { status: 500 }
    )
  }
}
