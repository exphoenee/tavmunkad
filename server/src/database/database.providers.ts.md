import { createConnection } from 'typeorm';
import { Contact } from '../entity/contact';

export const databaseProviders = [
{
provide: 'DATABASE_CONNECTION',
useFactory: async () =>
await createConnection({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'test',
password: 'test',
database: 'test',
entities: [Contact],
synchronize: true,
}),
},
];
