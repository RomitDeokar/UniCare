-- ============================================
-- HOSPITAL MANAGEMENT SYSTEM - DDL SCRIPT
-- Database Creation and Table Definitions
-- ============================================

-- Create Database
DROP DATABASE IF EXISTS Hospital_Management_System;
CREATE DATABASE Hospital_Management_System;
USE Hospital_Management_System;

-- ============================================
-- 1. PATIENT Table
-- ============================================
CREATE TABLE PATIENT (
    Patient_ID INT AUTO_INCREMENT PRIMARY KEY,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Date_of_Birth DATE NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL,
    Blood_Group VARCHAR(5) NOT NULL,
    Contact_Number VARCHAR(15) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Street VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    Zipcode VARCHAR(10),
    Emergency_Contact_Name VARCHAR(100),
    Emergency_Contact_Number VARCHAR(15),
    Registration_Date DATE DEFAULT (CURRENT_DATE),
    CONSTRAINT chk_blood_group CHECK (Blood_Group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'))
);

-- ============================================
-- 2. DEPARTMENT Table
-- ============================================
CREATE TABLE DEPARTMENT (
    Department_ID INT AUTO_INCREMENT PRIMARY KEY,
    Department_Name VARCHAR(100) NOT NULL UNIQUE,
    Head_Doctor_ID INT,
    Location VARCHAR(100),
    Contact_Extension VARCHAR(10)
);

-- ============================================
-- 3. DOCTOR Table
-- ============================================
CREATE TABLE DOCTOR (
    Doctor_ID INT AUTO_INCREMENT PRIMARY KEY,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Specialization VARCHAR(100) NOT NULL,
    Qualification VARCHAR(200) NOT NULL,
    Experience_Years INT CHECK (Experience_Years >= 0),
    Contact_Number VARCHAR(15) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    License_Number VARCHAR(50) UNIQUE NOT NULL,
    Department_ID INT,
    Consultation_Fee DECIMAL(10, 2) CHECK (Consultation_Fee > 0),
    FOREIGN KEY (Department_ID) REFERENCES DEPARTMENT(Department_ID) ON DELETE SET NULL
);

-- Add foreign key constraint for DEPARTMENT Head_Doctor_ID
ALTER TABLE DEPARTMENT
ADD FOREIGN KEY (Head_Doctor_ID) REFERENCES DOCTOR(Doctor_ID) ON DELETE SET NULL;

-- ============================================
-- 4. APPOINTMENT Table (Weak Entity)
-- ============================================
CREATE TABLE APPOINTMENT (
    Appointment_ID INT AUTO_INCREMENT PRIMARY KEY,
    Patient_ID INT NOT NULL,
    Doctor_ID INT NOT NULL,
    Appointment_Date DATE NOT NULL,
    Appointment_Time TIME NOT NULL,
    Status ENUM('Scheduled', 'Completed', 'Cancelled', 'No-Show') DEFAULT 'Scheduled',
    Reason VARCHAR(200),
    Notes TEXT,
    FOREIGN KEY (Patient_ID) REFERENCES PATIENT(Patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID) ON DELETE CASCADE,
    CONSTRAINT chk_appointment_future CHECK (Appointment_Date >= CURRENT_DATE)
);

-- ============================================
-- 5. EMERGENCY_CASE Table
-- ============================================
CREATE TABLE EMERGENCY_CASE (
    Emergency_ID INT AUTO_INCREMENT PRIMARY KEY,
    Patient_ID INT NOT NULL,
    Doctor_ID INT NOT NULL,
    Admission_DateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    Priority_Level ENUM('Critical', 'High', 'Medium', 'Low') NOT NULL DEFAULT 'Medium',
    Chief_Complaint TEXT NOT NULL,
    Vital_Signs TEXT,
    Status ENUM('Active', 'Discharged', 'Transferred', 'Deceased') DEFAULT 'Active',
    Discharge_DateTime DATETIME,
    FOREIGN KEY (Patient_ID) REFERENCES PATIENT(Patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID) ON DELETE CASCADE
);

-- ============================================
-- 6. SCHEDULE Table (Weak Entity)
-- ============================================
CREATE TABLE SCHEDULE (
    Schedule_ID INT AUTO_INCREMENT PRIMARY KEY,
    Doctor_ID INT NOT NULL,
    Day_of_Week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    Start_Time TIME NOT NULL,
    End_Time TIME NOT NULL,
    Shift_Type ENUM('Morning', 'Evening', 'Night') NOT NULL,
    Status ENUM('Available', 'On-Leave', 'Busy') DEFAULT 'Available',
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID) ON DELETE CASCADE,
    CONSTRAINT chk_time_range CHECK (End_Time > Start_Time)
);

-- ============================================
-- 7. DONOR Table
-- ============================================
CREATE TABLE DONOR (
    Donor_ID INT AUTO_INCREMENT PRIMARY KEY,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Date_of_Birth DATE NOT NULL,
    Blood_Group VARCHAR(5) NOT NULL,
    Contact_Number VARCHAR(15) UNIQUE NOT NULL,
    Donor_Type ENUM('Living', 'Deceased') NOT NULL,
    Registration_Date DATE DEFAULT (CURRENT_DATE),
    Medical_Clearance ENUM('Approved', 'Pending', 'Rejected') DEFAULT 'Pending',
    CONSTRAINT chk_donor_blood CHECK (Blood_Group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'))
);

-- ============================================
-- 8. ORGAN Table
-- ============================================
CREATE TABLE ORGAN (
    Organ_ID INT AUTO_INCREMENT PRIMARY KEY,
    Donor_ID INT NOT NULL,
    Organ_Type ENUM('Heart', 'Kidney', 'Liver', 'Lung', 'Pancreas', 'Cornea', 'Small Intestine') NOT NULL,
    Blood_Group VARCHAR(5) NOT NULL,
    Tissue_Type VARCHAR(50),
    Donation_Date DATE DEFAULT (CURRENT_DATE),
    Expiry_DateTime DATETIME NOT NULL,
    Status ENUM('Available', 'Allocated', 'Transplanted', 'Expired') DEFAULT 'Available',
    FOREIGN KEY (Donor_ID) REFERENCES DONOR(Donor_ID) ON DELETE CASCADE,
    CONSTRAINT chk_organ_blood CHECK (Blood_Group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'))
);

-- ============================================
-- 9. RECIPIENT Table
-- ============================================
CREATE TABLE RECIPIENT (
    Recipient_ID INT AUTO_INCREMENT PRIMARY KEY,
    Patient_ID INT NOT NULL UNIQUE,
    Required_Organ_Type ENUM('Heart', 'Kidney', 'Liver', 'Lung', 'Pancreas', 'Cornea', 'Small Intestine') NOT NULL,
    Blood_Group VARCHAR(5) NOT NULL,
    Tissue_Type VARCHAR(50),
    Severity_Score INT CHECK (Severity_Score BETWEEN 1 AND 100),
    Registration_Date DATE DEFAULT (CURRENT_DATE),
    Medical_Status TEXT,
    FOREIGN KEY (Patient_ID) REFERENCES PATIENT(Patient_ID) ON DELETE CASCADE,
    CONSTRAINT chk_recipient_blood CHECK (Blood_Group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'))
);

-- ============================================
-- 10. WAITING_LIST Table
-- ============================================
CREATE TABLE WAITING_LIST (
    Waiting_List_ID INT AUTO_INCREMENT PRIMARY KEY,
    Recipient_ID INT NOT NULL UNIQUE,
    Organ_ID INT,
    Position INT NOT NULL,
    Priority_Score DECIMAL(5, 2) CHECK (Priority_Score >= 0),
    Date_Added DATE DEFAULT (CURRENT_DATE),
    Status ENUM('Waiting', 'Matched', 'Transplanted', 'Removed') DEFAULT 'Waiting',
    FOREIGN KEY (Recipient_ID) REFERENCES RECIPIENT(Recipient_ID) ON DELETE CASCADE,
    FOREIGN KEY (Organ_ID) REFERENCES ORGAN(Organ_ID) ON DELETE SET NULL
);

-- ============================================
-- 11. MEDICAL_RECORD Table (Weak Entity)
-- ============================================
CREATE TABLE MEDICAL_RECORD (
    Record_ID INT AUTO_INCREMENT PRIMARY KEY,
    Patient_ID INT NOT NULL,
    Doctor_ID INT NOT NULL,
    Visit_Date DATE DEFAULT (CURRENT_DATE),
    Diagnosis TEXT,
    Symptoms TEXT,
    Prescription TEXT,
    Lab_Results TEXT,
    Notes TEXT,
    FOREIGN KEY (Patient_ID) REFERENCES PATIENT(Patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (Doctor_ID) REFERENCES DOCTOR(Doctor_ID) ON DELETE CASCADE
);

-- ============================================
-- 12. ROOM Table
-- ============================================
CREATE TABLE ROOM (
    Room_ID INT AUTO_INCREMENT PRIMARY KEY,
    Department_ID INT,
    Room_Number VARCHAR(10) UNIQUE NOT NULL,
    Room_Type ENUM('General', 'Private', 'ICU', 'Emergency') NOT NULL,
    Capacity INT CHECK (Capacity > 0),
    Status ENUM('Available', 'Occupied', 'Maintenance') DEFAULT 'Available',
    Floor_Number INT CHECK (Floor_Number > 0),
    FOREIGN KEY (Department_ID) REFERENCES DEPARTMENT(Department_ID) ON DELETE SET NULL
);

-- ============================================
-- 13. ROOM_ALLOCATION Table (Associative Entity)
-- ============================================
CREATE TABLE ROOM_ALLOCATION (
    Allocation_ID INT AUTO_INCREMENT PRIMARY KEY,
    Patient_ID INT NOT NULL,
    Room_ID INT NOT NULL,
    Admission_Date DATE DEFAULT (CURRENT_DATE),
    Discharge_Date DATE,
    Status ENUM('Active', 'Discharged') DEFAULT 'Active',
    FOREIGN KEY (Patient_ID) REFERENCES PATIENT(Patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (Room_ID) REFERENCES ROOM(Room_ID) ON DELETE CASCADE,
    CONSTRAINT chk_dates CHECK (Discharge_Date IS NULL OR Discharge_Date >= Admission_Date)
);

-- ============================================
-- 14. BILL Table
-- ============================================
CREATE TABLE BILL (
    Bill_ID INT AUTO_INCREMENT PRIMARY KEY,
    Patient_ID INT NOT NULL,
    Bill_Date DATE DEFAULT (CURRENT_DATE),
    Total_Amount DECIMAL(12, 2) NOT NULL CHECK (Total_Amount >= 0),
    Paid_Amount DECIMAL(12, 2) DEFAULT 0 CHECK (Paid_Amount >= 0),
    Balance DECIMAL(12, 2) GENERATED ALWAYS AS (Total_Amount - Paid_Amount) STORED,
    Payment_Status ENUM('Pending', 'Partial', 'Paid') DEFAULT 'Pending',
    Payment_Method VARCHAR(50),
    FOREIGN KEY (Patient_ID) REFERENCES PATIENT(Patient_ID) ON DELETE CASCADE
);

-- ============================================
-- Display Success Message
-- ============================================
SELECT 'Database and Tables Created Successfully!' AS Status;
