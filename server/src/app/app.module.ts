import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
/*------------------------*/
import { ContactModule } from '../contact/contact.module';
/*------------------------*/

@Module({
  imports: [
    ContactModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLDATABASE_URL || 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      synchronize: true,
    }),
  ],
})
export class AppModule {}
