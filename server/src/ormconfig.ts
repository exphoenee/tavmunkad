import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const configMySql: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: ['./src/entity/**/*.entity.ts', './dist/entity/**/*.entity.js'],
};

export const configSqlite: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['./src/entity/**/*.entity.ts', './dist/entity/**/*.entity.js'],
  synchronize: true,
};
