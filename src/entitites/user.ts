import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'varchar', unique: true })
    email: string;

  @Column({ type: 'varchar' })
    username: string;

  @Column({ type: 'varchar' })
    password: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
    createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
    updatedAt: Date;
}