import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT) || 5000;
  app.setGlobalPrefix('api');
  await app.listen(port);
  Logger.log('Server running on localhost: ' + port, 'Bootstrap');
}
bootstrap();
