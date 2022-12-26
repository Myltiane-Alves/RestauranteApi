import 'dotenv/config';
import 'reflect-metadata';

import {  DataSource } from "typeorm";
import { Contact } from '../app/entities/Contact';
import { User } from '../app/entities/User';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: Number("3306"),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    migrations: ["src/database/migrations/*.ts"],
    database: "restaurante",
    entities: [User, Contact],
    synchronize: true,
    logging: true,
    logger: "file",
    
})

