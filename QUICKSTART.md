# 🚀 Quick Start Guide - UniCare HMS

This guide will help you set up and run the UniCare Hospital Management System in just a few minutes!

## ⚡ Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18+** installed ([Download](https://nodejs.org/))
- ✅ **MySQL 8+** installed and running
- ✅ **Git** installed (optional, for cloning)
- ✅ A code editor (VS Code recommended)

## 📦 Step-by-Step Installation

### Step 1: Setup Project Files

Extract or clone the project to your desired location:

```bash
cd path/to/unicare-hms
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (Next.js, Prisma, Tailwind CSS, etc.)

### Step 3: Setup MySQL Database

1. **Start MySQL** (if not running):
   ```bash
   # Ubuntu/Debian
   sudo systemctl start mysql
   
   # macOS
   brew services start mysql
   
   # Windows - MySQL runs as a service
   ```

2. **Login to MySQL**:
   ```bash
   mysql -u root -p
   ```

3. **Execute the DDL script** (creates database and tables):
   ```sql
   source /path/to/hospital_ddl.sql;
   ```
   
   Or copy-paste the contents from `hospital_ddl.sql` into MySQL Workbench

4. **Execute the DML script** (inserts sample data):
   ```sql
   source /path/to/hospital_dml.sql;
   ```

5. **Verify database creation**:
   ```sql
   USE Hospital_Management_System;
   SHOW TABLES;
   SELECT * FROM PATIENT LIMIT 5;
   ```

### Step 4: Configure Environment Variables

1. **Copy the example env file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** and update:
   ```env
   DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/Hospital_Management_System"
   ```
   
   Replace `YOUR_PASSWORD` with your MySQL root password

3. **Generate authentication secret**:
   ```bash
   openssl rand -base64 32
   ```
   
   Copy the output and add to `.env`:
   ```env
   NEXTAUTH_SECRET="paste-generated-secret-here"
   ```

### Step 5: Generate Prisma Client

```bash
npx prisma generate
```

This generates the TypeScript types for your database.

### Step 6: Run Development Server

```bash
npm run dev
```

🎉 **Done!** Open your browser and visit:
- **Homepage**: [http://localhost:3000](http://localhost:3000)
- **Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## 🎨 Quick Tour

### Landing Page Features
- Beautiful hero section with stats
- Feature showcase with animations
- Emergency priority system explanation
- Organ donation module overview

### Dashboard Features
- **Patients**: View and manage patient records
- **Doctors**: Manage doctor profiles and schedules
- **Appointments**: Schedule appointments
- **Emergency Cases**: Priority-based emergency management
- **Organ Donation**: Donor and recipient management
- **Departments**: Hospital infrastructure
- **Medical Records**: Patient history
- **Billing**: Payment management

## 🔧 Useful Commands

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Build for production
npm run start              # Start production server

# Database
npx prisma studio          # Open Prisma Studio (GUI)
npx prisma db push         # Push schema changes
npx prisma generate        # Regenerate client

# Code Quality
npm run lint               # Check for errors
```

## 📱 Testing the Application

### 1. View Sample Patients
Navigate to: Dashboard → Patients
- You should see 5 sample patients from the DML script
- Try the search functionality
- Click "Add Patient" to test the form

### 2. Check Emergency Cases
Navigate to: Dashboard → Emergency Cases
- View cases by priority level (Critical, High, Medium, Low)
- See color-coded priority indicators
- Check vital signs and doctor assignments

### 3. Explore Other Modules
- **Doctors**: View the 5 sample doctors
- **Departments**: See the 6 hospital departments
- **Appointments**: View scheduled appointments

## 🐛 Common Issues & Solutions

### Issue: "Cannot connect to MySQL"
**Solution**: 
```bash
# Check if MySQL is running
sudo systemctl status mysql

# Start MySQL
sudo systemctl start mysql
```

### Issue: "Port 3000 already in use"
**Solution**:
```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Issue: "Prisma Client generation failed"
**Solution**:
```bash
# Clear and regenerate
rm -rf node_modules/.prisma
npx prisma generate
```

### Issue: ".env file not found"
**Solution**:
```bash
cp .env.example .env
# Then edit .env with your settings
```

## 📊 Database Structure Overview

The system uses 14 interconnected tables:

1. **PATIENT** - Patient information (5 sample records)
2. **DOCTOR** - Doctor profiles (5 sample records)
3. **DEPARTMENT** - Hospital departments (6 departments)
4. **APPOINTMENT** - Scheduled appointments (5 appointments)
5. **EMERGENCY_CASE** - Emergency admissions (3 active cases)
6. **SCHEDULE** - Doctor shifts (10 schedules)
7. **DONOR** - Organ donors (3 donors)
8. **ORGAN** - Available organs (4 organs)
9. **RECIPIENT** - Organ recipients (3 recipients)
10. **WAITING_LIST** - Transplant queue (3 entries)
11. **MEDICAL_RECORD** - Patient history (3 records)
12. **ROOM** - Hospital rooms (7 rooms)
13. **ROOM_ALLOCATION** - Room assignments (3 allocations)
14. **BILL** - Patient bills (4 bills)

## 🎯 Next Steps

1. **Explore the codebase**:
   - `app/` - Next.js pages and routes
   - `components/` - Reusable UI components
   - `prisma/schema.prisma` - Database schema
   - `lib/` - Utility functions

2. **Customize the application**:
   - Add new features/modules
   - Modify UI colors in `tailwind.config.ts`
   - Add your own data

3. **Learn the stack**:
   - [Next.js Documentation](https://nextjs.org/docs)
   - [Prisma Documentation](https://www.prisma.io/docs)
   - [Tailwind CSS](https://tailwindcss.com/docs)
   - [shadcn/ui](https://ui.shadcn.com/)

## 💡 Tips for Development

- **Hot Reload**: Changes auto-update in the browser
- **Prisma Studio**: Use `npx prisma studio` for a GUI to view/edit data
- **DevTools**: Use React DevTools and browser console for debugging
- **Database Changes**: After modifying `schema.prisma`, run `npx prisma generate`

## 🎓 For Your Project Presentation

Highlight these features:
1. ✨ **Modern UI** - Beautiful, responsive design with animations
2. 🚑 **Emergency Priority System** - Color-coded triage system
3. ❤️ **Organ Donation** - Compatibility matching and waiting list
4. 📅 **Doctor Scheduling** - Shift management with conflict prevention
5. 🔐 **Secure** - Role-based access control ready
6. 📊 **Analytics** - Dashboard with real-time statistics
7. 🗄️ **Normalized Database** - Proper ER design and relationships
8. 🛠️ **Modern Tech Stack** - Next.js 14, TypeScript, Prisma

## 🤝 Need Help?

- Check the main README.md for detailed documentation
- Review the code comments
- Check console for error messages
- Use Prisma Studio to verify database state

---

**Good luck with your project! 🚀**
