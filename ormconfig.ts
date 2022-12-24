import { DataSource } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';
import { User } from './src/app/entities/User';

export const connectionSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: Number("3306"),
  username: String(process.env.TYPEORM_USERNAME),
  password: String(process.env.TYPEORM_PASSWORD),
  migrations: ["src/database/migrations/*.ts"],
  database: "restaurante",
  entities: [User],
  synchronize: true,
  logging: true,
  logger: "file",
});
