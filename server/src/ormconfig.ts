import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const configMySql: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQLDATABASE_URL || 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
};
