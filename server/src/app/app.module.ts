import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/*------------------------*/
import { ContactModule } from '../contact/contact.module';
import config from '../ormconfig';
/*------------------------*/

@Module({
  imports: [ContactModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
