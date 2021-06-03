import { Module } from '@nestjs/common';
/*------------------------*/
import { ContactModule } from '../contact/contact.module';
/*------------------------*/
import 'reflect-metadata';

@Module({
  imports: [ContactModule],
})
export class AppModule {}
