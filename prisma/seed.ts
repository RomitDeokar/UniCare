import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@hospital.com' },
    update: {},
    create: {
      email: 'admin@hospital.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN'
    }
  })

  // Create doctor user
  const doctorPassword = await hash('doctor123', 10)
  const doctor = await prisma.user.upsert({
    where: { email: 'doctor@hospital.com' },
    update: {},
    create: {
      email: 'doctor@hospital.com',
      password: doctorPassword,
      name: 'Dr. Robert Wilson',
      role: 'DOCTOR'
    }
  })

  // Create patient user
  const patientPassword = await hash('patient123', 10)
  const patient = await prisma.user.upsert({
    where: { email: 'patient@hospital.com' },
    update: {},
    create: {
      email: 'patient@hospital.com',
      password: patientPassword,
      name: 'John Doe',
      role: 'PATIENT'
    }
  })

  console.log({ admin, doctor, patient })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })