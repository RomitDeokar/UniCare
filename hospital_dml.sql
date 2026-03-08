-- ============================================
-- HOSPITAL MANAGEMENT SYSTEM - DML SCRIPT
-- Sample Data Insertion
-- ============================================

USE Hospital_Management_System;

-- ============================================
-- 1. Insert Patients
-- ============================================
INSERT INTO PATIENT (First_Name, Last_Name, Date_of_Birth, Gender, Blood_Group, Contact_Number, Email, Street, City, State, Zipcode, Emergency_Contact_Name, Emergency_Contact_Number) VALUES
('John', 'Doe', '1985-03-15', 'Male', 'O+', '9876543210', 'john.doe@email.com', '123 Main St', 'Mumbai', 'Maharashtra', '400001', 'Jane Doe', '9876543211'),
('Sarah', 'Smith', '1990-07-22', 'Female', 'A+', '9876543212', 'sarah.smith@email.com', '456 Park Ave', 'Delhi', 'Delhi', '110001', 'Mike Smith', '9876543213'),
('Raj', 'Kumar', '1978-11-10', 'Male', 'B+', '9876543214', 'raj.kumar@email.com', '789 Lake Rd', 'Bangalore', 'Karnataka', '560001', 'Priya Kumar', '9876543215'),
('Priya', 'Sharma', '1995-05-18', 'Female', 'AB+', '9876543216', 'priya.sharma@email.com', '321 Hill St', 'Chennai', 'Tamil Nadu', '600001', 'Amit Sharma', '9876543217'),
('Ahmed', 'Khan', '1982-09-25', 'Male', 'O-', '9876543218', 'ahmed.khan@email.com', '654 Valley Rd', 'Hyderabad', 'Telangana', '500001', 'Fatima Khan', '9876543219');

-- ============================================
-- 2. Insert Departments
-- ============================================
INSERT INTO DEPARTMENT (Department_Name, Location, Contact_Extension) VALUES
('Cardiology', 'Building A, Floor 3', '301'),
('Neurology', 'Building B, Floor 2', '201'),
('Orthopedics', 'Building A, Floor 1', '101'),
('Emergency Medicine', 'Building C, Ground Floor', '001'),
('Nephrology', 'Building B, Floor 3', '302'),
('Gastroenterology', 'Building A, Floor 2', '201');

-- ============================================
-- 3. Insert Doctors
-- ============================================
INSERT INTO DOCTOR (First_Name, Last_Name, Specialization, Qualification, Experience_Years, Contact_Number, Email, License_Number, Department_ID, Consultation_Fee) VALUES
('Robert', 'Wilson', 'Cardiologist', 'MD, DM Cardiology', 15, '9988776655', 'dr.wilson@hospital.com', 'MED12345', 1, 1500.00),
('Emily', 'Brown', 'Neurologist', 'MD, DM Neurology', 12, '9988776656', 'dr.brown@hospital.com', 'MED12346', 2, 1800.00),
('Michael', 'Davis', 'Orthopedic Surgeon', 'MS Orthopedics', 10, '9988776657', 'dr.davis@hospital.com', 'MED12347', 3, 1200.00),
('Lisa', 'Anderson', 'Emergency Medicine', 'MD Emergency Medicine', 8, '9988776658', 'dr.anderson@hospital.com', 'MED12348', 4, 1000.00),
('David', 'Martinez', 'Nephrologist', 'MD, DM Nephrology', 14, '9988776659', 'dr.martinez@hospital.com', 'MED12349', 5, 1600.00);

-- ============================================
-- 4. Update Department Head Doctors
-- ============================================
UPDATE DEPARTMENT SET Head_Doctor_ID = 1 WHERE Department_ID = 1;
UPDATE DEPARTMENT SET Head_Doctor_ID = 2 WHERE Department_ID = 2;
UPDATE DEPARTMENT SET Head_Doctor_ID = 3 WHERE Department_ID = 3;
UPDATE DEPARTMENT SET Head_Doctor_ID = 4 WHERE Department_ID = 4;
UPDATE DEPARTMENT SET Head_Doctor_ID = 5 WHERE Department_ID = 5;

-- ============================================
-- 5. Insert Appointments
-- ============================================
INSERT INTO APPOINTMENT (Patient_ID, Doctor_ID, Appointment_Date, Appointment_Time, Status, Reason, Notes) VALUES
(1, 1, '2024-03-20', '10:00:00', 'Scheduled', 'Routine Checkup', 'Regular heart monitoring'),
(2, 2, '2024-03-21', '11:30:00', 'Scheduled', 'Headache and dizziness', 'Patient reports frequent migraines'),
(3, 3, '2024-03-22', '14:00:00', 'Completed', 'Knee pain', 'X-ray recommended'),
(4, 1, '2024-03-23', '09:00:00', 'Scheduled', 'Chest pain', 'ECG scheduled'),
(5, 5, '2024-03-24', '15:30:00', 'Scheduled', 'Kidney function test', 'Follow-up consultation');

-- ============================================
-- 6. Insert Emergency Cases
-- ============================================
INSERT INTO EMERGENCY_CASE (Patient_ID, Doctor_ID, Admission_DateTime, Priority_Level, Chief_Complaint, Vital_Signs, Status) VALUES
(1, 4, '2024-03-15 14:30:00', 'Critical', 'Severe chest pain, shortness of breath', 'BP: 180/110, HR: 120, SpO2: 88%', 'Active'),
(3, 4, '2024-03-16 08:15:00', 'High', 'Motor vehicle accident, multiple fractures', 'BP: 140/90, HR: 95, SpO2: 94%', 'Discharged'),
(5, 4, '2024-03-17 22:45:00', 'Critical', 'Acute kidney failure', 'BP: 160/100, HR: 88, Creatinine: 8.5', 'Active');

-- ============================================
-- 7. Insert Doctor Schedules
-- ============================================
INSERT INTO SCHEDULE (Doctor_ID, Day_of_Week, Start_Time, End_Time, Shift_Type, Status) VALUES
(1, 'Monday', '09:00:00', '17:00:00', 'Morning', 'Available'),
(1, 'Wednesday', '09:00:00', '17:00:00', 'Morning', 'Available'),
(1, 'Friday', '09:00:00', '17:00:00', 'Morning', 'Available'),
(2, 'Tuesday', '10:00:00', '18:00:00', 'Morning', 'Available'),
(2, 'Thursday', '10:00:00', '18:00:00', 'Morning', 'Available'),
(3, 'Monday', '14:00:00', '22:00:00', 'Evening', 'Available'),
(3, 'Wednesday', '14:00:00', '22:00:00', 'Evening', 'Available'),
(4, 'Monday', '00:00:00', '08:00:00', 'Night', 'Available'),
(4, 'Tuesday', '00:00:00', '08:00:00', 'Night', 'Available'),
(5, 'Monday', '09:00:00', '17:00:00', 'Morning', 'Available');

-- ============================================
-- 8. Insert Donors
-- ============================================
INSERT INTO DONOR (First_Name, Last_Name, Date_of_Birth, Blood_Group, Contact_Number, Donor_Type, Medical_Clearance) VALUES
('Mark', 'Johnson', '1980-04-12', 'O+', '9988112233', 'Deceased', 'Approved'),
('Jennifer', 'Lee', '1975-08-30', 'A+', '9988112234', 'Living', 'Approved'),
('Thomas', 'White', '1988-12-05', 'B+', '9988112235', 'Deceased', 'Approved');

-- ============================================
-- 9. Insert Organs
-- ============================================
INSERT INTO ORGAN (Donor_ID, Organ_Type, Blood_Group, Tissue_Type, Donation_Date, Expiry_DateTime, Status) VALUES
(1, 'Heart', 'O+', 'HLA-A2', '2024-03-10', '2024-03-10 18:00:00', 'Available'),
(1, 'Liver', 'O+', 'HLA-A2', '2024-03-10', '2024-03-11 12:00:00', 'Available'),
(2, 'Kidney', 'A+', 'HLA-B27', '2024-03-12', '2024-03-15 12:00:00', 'Available'),
(3, 'Lung', 'B+', 'HLA-DR4', '2024-03-13', '2024-03-13 20:00:00', 'Available');

-- ============================================
-- 10. Insert Recipients
-- ============================================
INSERT INTO RECIPIENT (Patient_ID, Required_Organ_Type, Blood_Group, Tissue_Type, Severity_Score, Medical_Status) VALUES
(1, 'Heart', 'O+', 'HLA-A2', 85, 'Critical - End stage heart failure'),
(5, 'Kidney', 'O-', 'HLA-Compatible', 75, 'Severe - Chronic kidney disease stage 5'),
(4, 'Liver', 'AB+', 'HLA-B7', 68, 'Moderate - Cirrhosis');

-- ============================================
-- 11. Insert Waiting List
-- ============================================
INSERT INTO WAITING_LIST (Recipient_ID, Organ_ID, Position, Priority_Score, Status) VALUES
(1, 1, 1, 92.50, 'Matched'),
(2, 3, 1, 78.25, 'Waiting'),
(3, NULL, 2, 65.80, 'Waiting');

-- ============================================
-- 12. Insert Medical Records
-- ============================================
INSERT INTO MEDICAL_RECORD (Patient_ID, Doctor_ID, Visit_Date, Diagnosis, Symptoms, Prescription, Lab_Results, Notes) VALUES
(1, 1, '2024-02-15', 'Coronary Artery Disease', 'Chest pain, fatigue', 'Aspirin 75mg, Atorvastatin 40mg', 'ECG: ST elevation, Troponin I: 2.5', 'Patient advised cardiac catheterization'),
(2, 2, '2024-02-20', 'Migraine', 'Severe headache, nausea, photophobia', 'Sumatriptan 50mg as needed', 'MRI: Normal', 'Avoid triggers, follow-up in 2 weeks'),
(3, 3, '2024-02-25', 'Osteoarthritis Knee', 'Knee pain, stiffness', 'Paracetamol 650mg, Physiotherapy', 'X-ray: Joint space narrowing', 'Consider knee replacement if pain persists');

-- ============================================
-- 13. Insert Rooms
-- ============================================
INSERT INTO ROOM (Department_ID, Room_Number, Room_Type, Capacity, Status, Floor_Number) VALUES
(1, '301', 'Private', 1, 'Occupied', 3),
(1, '302', 'Private', 1, 'Available', 3),
(4, 'ER-01', 'Emergency', 2, 'Occupied', 1),
(4, 'ER-02', 'Emergency', 2, 'Available', 1),
(3, 'ICU-01', 'ICU', 1, 'Occupied', 2),
(3, 'ICU-02', 'ICU', 1, 'Available', 2),
(2, '201', 'General', 4, 'Available', 2);

-- ============================================
-- 14. Insert Room Allocations
-- ============================================
INSERT INTO ROOM_ALLOCATION (Patient_ID, Room_ID, Admission_Date, Status) VALUES
(1, 1, '2024-03-15', 'Active'),
(3, 3, '2024-03-16', 'Active'),
(5, 5, '2024-03-17', 'Active');

-- ============================================
-- 15. Insert Bills
-- ============================================
INSERT INTO BILL (Patient_ID, Bill_Date, Total_Amount, Paid_Amount, Payment_Status, Payment_Method) VALUES
(1, '2024-03-15', 125000.00, 50000.00, 'Partial', 'Insurance + Cash'),
(2, '2024-02-20', 3500.00, 3500.00, 'Paid', 'Credit Card'),
(3, '2024-02-25', 15000.00, 0.00, 'Pending', NULL),
(5, '2024-03-17', 250000.00, 100000.00, 'Partial', 'Insurance');

-- ============================================
-- Display Success Message
-- ============================================
SELECT 'Sample Data Inserted Successfully!' AS Status;
SELECT 'Total Patients:', COUNT(*) FROM PATIENT;
SELECT 'Total Doctors:', COUNT(*) FROM DOCTOR;
SELECT 'Total Departments:', COUNT(*) FROM DEPARTMENT;
