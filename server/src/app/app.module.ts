import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/*------------------------*/
import { ContactModule } from '../contact/contact.module';
import { configMySql, configSqlite } from '../ormconfig';
/*------------------------*/

@Module({
  imports: [ContactModule, TypeOrmModule.forRoot(configSqlite)],
})
export class AppModule {}
