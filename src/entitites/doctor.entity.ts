import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { MedicalRecord } from './medical-record.entity';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'varchar' })
    firstName: string;

  @Column({ type: 'varchar' })
    lastName: string;

  @Column({ type: 'varchar' })
    specialty: string;

  @OneToMany(() => MedicalRecord, (medicalRecord) => medicalRecord.doctor)
  @JoinColumn({ name: 'doctorId' })
    medicalRecords: MedicalRecord[];
}