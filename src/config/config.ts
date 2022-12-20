import dotenv from 'dotenv';
import { Options } from 'sequelize';

dotenv.config();

interface ConfigTs {
    development: Options;
}

const configDB: ConfigTs = {
    development: {
        host: "localhost",
        username: "root",
        password: "95325414",
        database: "restaurante",
        logging: false,
        dialect: "mysql",
        dialectOptions: {
            charset: "utf8"
        },
        define: {
            timestamps: false,
        }
    }
};

export default configDB;