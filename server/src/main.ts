import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
/*------------------------*/

const port = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log('Server running on localhost: ' + port, 'Bootstrap');
}
bootstrap();
