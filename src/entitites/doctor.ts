import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}