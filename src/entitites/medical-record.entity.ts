import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';
import { Doctor } from './doctor.entity';

@Entity('medical_records')
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @ManyToOne(() => Patient, (patient) => patient.medicalRecords)
  @JoinColumn({ name: 'patientId' })
    patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.medicalRecords)
  @JoinColumn({ name: 'doctorId' })
    doctor: Doctor;

  @Column({ type: 'text', nullable: true })
    diagnosis: string;

}