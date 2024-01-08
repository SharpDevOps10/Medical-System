import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { MedicalRecord } from './MedicalRecord';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'varchar' })
    firstName: string;

  @Column({ type: 'varchar' })
    lastName: string;

  @Column({ type: 'date', nullable: true })
    dob: Date;

  @Column({ type: 'varchar', nullable: true })
    gender: string;

  @OneToMany(() => MedicalRecord, (medicalRecord) => medicalRecord.patient)
  @JoinColumn({ name: 'patientId' })
    medicalRecords: MedicalRecord[];
}