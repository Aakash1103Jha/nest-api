require('dotenv/config');

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const PORT: string | number = process.env.PORT || 4000;

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');
  app.disable('x-powered-by');
  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

bootstrap();
