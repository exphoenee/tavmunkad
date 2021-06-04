export const mySqlCongfig = {
  type: 'mysql2',
  host: process.env.MYSQLDATABASE_URL || 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  synchronize: true,
  autoLoadEntities: true,
};
export const pgConfig = {
  type: 'postgres',
  //      username: 'qcirldwy',
  //      password: 'BWzzVCT74U-neFFU1ZnV346i58z74yuQ',
  //      database: 'qcirldwy',
  host: process.env.PGDATABASE_URL,
  synchronize: true,
  autoLoadEntities: true,
};
