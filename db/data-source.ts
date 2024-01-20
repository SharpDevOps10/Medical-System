import { DataSource, DataSourceOptions } from 'typeorm';
import * as process from 'process';
import { Doctor } from '../src/entitites/doctor.entity';
import { MedicalRecord } from '../src/entitites/medical-record.entity';
import { Patient } from '../src/entitites/patient.entity';
import { User } from '../src/entitites/user.entity';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Doctor, MedicalRecord, Patient, User],
  migrations: ['db/migrations/*.js'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;