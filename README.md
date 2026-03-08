# UniCare HMS - Hospital Management System

A comprehensive Hospital Management System built with modern web technologies including Doctor Scheduling, Emergency Priority Handling, and Organ Donation Management.

## 🚀 Features

- **Patient Management**: Comprehensive digital health records and patient information
- **Doctor Scheduling**: Optimal shift allocation with conflict prevention
- **Emergency Priority System**: Triage-based priority classification (Critical, High, Medium, Low)
- **Organ Donation Management**: Donor tracking, compatibility matching, and waiting list
- **Appointment System**: Streamlined booking for outpatient consultations
- **Department Management**: Hospital infrastructure and hierarchy organization
- **Medical Records**: Secure storage of diagnosis, prescriptions, and lab results
- **Billing System**: Comprehensive billing and payment tracking
- **Real-time Analytics**: Dashboard with charts and statistics

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Beautiful UI components
- **Framer Motion** - Smooth animations
- **Recharts** - Charts and data visualization
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database ORM
- **MySQL** - Database

### Additional Libraries
- **TanStack Query** - Data fetching & caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **NextAuth.js** - Authentication

## 📋 Prerequisites

- Node.js 18+ 
- MySQL 8+
- npm or yarn

## 🔧 Installation

### 1. Clone the repository

```bash
cd unicare-hms
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up MySQL Database

Make sure MySQL is running on your system. If you haven't installed MySQL:

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install mysql-server
sudo systemctl start mysql
```

**macOS (with Homebrew):**
```bash
brew install mysql
brew services start mysql
```

**Windows:**
Download and install from [MySQL official website](https://dev.mysql.com/downloads/installer/)

### 4. Execute Database Scripts

Connect to MySQL and run the DDL and DML scripts:

```bash
mysql -u root -p
```

Then execute:
```sql
source /path/to/hospital_ddl.sql
source /path/to/hospital_dml.sql
```

Or copy the contents of `hospital_ddl.sql` and `hospital_dml.sql` and execute them in MySQL Workbench.

### 5. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials:

```env
DATABASE_URL="mysql://root:your_password@localhost:3306/Hospital_Management_System"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

To generate a secret key:
```bash
openssl rand -base64 32
```

### 6. Generate Prisma Client

```bash
npx prisma generate
```

### 7. Push Prisma Schema to Database (Optional)

If you want to use Prisma's schema instead of raw SQL:

```bash
npx prisma db push
```

### 8. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
unicare-hms/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── patients/         # Patient API endpoints
│   ├── dashboard/            # Dashboard pages
│   │   ├── patients/         # Patient management
│   │   ├── doctors/          # Doctor management
│   │   ├── appointments/     # Appointment management
│   │   ├── emergency/        # Emergency cases
│   │   └── organs/           # Organ donation
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   └── providers.tsx         # App providers
├── lib/                      # Utility libraries
│   ├── prisma.ts             # Prisma client
│   └── utils.ts              # Helper functions
├── prisma/                   # Prisma ORM
│   └── schema.prisma         # Database schema
├── public/                   # Static assets
├── .env                      # Environment variables
├── next.config.js            # Next.js config
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## 🗄️ Database Schema

The system uses 14 main tables:

1. **PATIENT** - Patient information and records
2. **DOCTOR** - Doctor profiles and credentials
3. **DEPARTMENT** - Hospital departments
4. **APPOINTMENT** - Appointment scheduling
5. **EMERGENCY_CASE** - Emergency admissions with priority
6. **SCHEDULE** - Doctor shift schedules
7. **DONOR** - Organ donors
8. **ORGAN** - Available organs
9. **RECIPIENT** - Organ recipients
10. **WAITING_LIST** - Transplant waiting list
11. **MEDICAL_RECORD** - Patient medical history
12. **ROOM** - Hospital rooms
13. **ROOM_ALLOCATION** - Room assignments
14. **BILL** - Billing and payments

## 🎨 Key Features Implementation

### Emergency Priority System
```typescript
enum PriorityLevel {
  Critical  // Immediate attention
  High      // Urgent cases
  Medium    // Standard priority
  Low       // Non-urgent
}
```

### Organ Matching Algorithm
- Blood group compatibility
- Tissue type matching
- Priority score calculation (severity + waiting time)
- Automatic organ expiry tracking

### Doctor Scheduling
- Shift type management (Morning, Evening, Night)
- Availability status (Available, On-Leave, Busy)
- Conflict prevention
- Department-wise allocation

## 🔐 Authentication

The system uses NextAuth.js for authentication with role-based access:

- **Admin**: Full system access
- **Doctor**: Patient records, appointments, medical records
- **Patient**: Personal records, appointments, bills

## 📊 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema to database
```

## 🌐 API Endpoints

### Patients
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Create new patient
- `GET /api/patients/[id]` - Get patient by ID
- `PUT /api/patients/[id]` - Update patient
- `DELETE /api/patients/[id]` - Delete patient

### Similar endpoints exist for:
- Doctors (`/api/doctors`)
- Appointments (`/api/appointments`)
- Emergency Cases (`/api/emergency`)
- Departments (`/api/departments`)
- Organs (`/api/organs`)

## 🎯 Usage

### Adding a New Patient
1. Navigate to Dashboard → Patients
2. Click "Add Patient"
3. Fill in patient information
4. Submit form

### Scheduling an Appointment
1. Navigate to Dashboard → Appointments
2. Click "New Appointment"
3. Select patient and doctor
4. Choose date and time
5. Add reason and notes

### Managing Emergency Cases
1. Navigate to Dashboard → Emergency Cases
2. View cases by priority level
3. Assign doctors to cases
4. Update patient status

### Organ Donation Workflow
1. Register donor (Dashboard → Organ Donation → Donors)
2. Add available organs with expiry date
3. Register recipient with required organ
4. System matches compatible organs
5. Waiting list prioritized by severity score

## 🎨 Customization

### Changing Theme Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "hsl(221.2 83.2% 53.3%)",  // Blue
  // Add your custom colors
}
```

### Adding New Modules
1. Create page in `app/dashboard/[module-name]/page.tsx`
2. Add API routes in `app/api/[module-name]/route.ts`
3. Update Prisma schema if needed
4. Generate Prisma client: `npx prisma generate`

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check MySQL is running
sudo systemctl status mysql

# Test connection
mysql -u root -p -e "SELECT 1"
```

### Prisma Issues
```bash
# Reset Prisma
npx prisma generate
npx prisma db push --force-reset
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

## 📝 License

This project is created for educational purposes as a Database Management System project.

## 🤝 Contributing

This is a student project. Feel free to fork and modify for your own learning purposes.

## 👥 Authors

- Your Name - Database Management System Project

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- shadcn for beautiful UI components
- Prisma for excellent ORM
- All open-source contributors

---

**Note**: This system is designed for educational purposes. For production use, ensure proper security measures, data validation, HIPAA compliance, and thorough testing.
