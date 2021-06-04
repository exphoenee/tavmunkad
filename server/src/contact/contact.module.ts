import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/*------------------------*/
import { ContactService } from './service/contact.service';
import { ContactController } from './controller/contact.controller';
import { ContactEntity } from './entity/contact.entity';
/*------------------------*/

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
