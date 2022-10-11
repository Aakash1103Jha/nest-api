import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import AuthController from './auth.controller';
import AuthRepository from './auth.repository';
import AuthService from './auth.service';

import { Auth, AuthSchema } from './auth.schema';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  imports: [MongooseModule.forFeature([{ schema: AuthSchema, name: 'auth' }])],
})
export class AuthModule {}
