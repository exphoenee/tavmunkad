import { Module } from '@nestjs/common';
import { ContactController } from './contact/contact.controller';

@Module({
  imports: [],
  controllers: [ContactController],
})
export class AppModule {}
