require('dotenv/config');

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request } from 'express';

const PORT: string | number = process.env.PORT || 4000;

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');
  app.disable('x-powered-by');
  app.enableCors({
    origin: '*',
  });
  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

bootstrap();
