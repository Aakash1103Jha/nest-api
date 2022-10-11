require('dotenv/config');

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

const PORT: string | number = process.env.PORT || 4000;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

bootstrap();
