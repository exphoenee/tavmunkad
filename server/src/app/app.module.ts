import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
/*------------------------*/
import { ContactModule } from '../contact/contact.module';
import { configMySql } from '../ormconfig';
/*------------------------*/

@Module({
  imports: [
    ContactModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configMySql),
  ],
})
export class AppModule {}
