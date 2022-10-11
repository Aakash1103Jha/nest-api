import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import AuthRepository from './auth.repository';
import { AuthDocument } from './auth.schema';

@Injectable()
class AuthService {
  constructor(
    public authRepo: AuthRepository,
    @InjectModel('auth') private authModel: Model<AuthDocument>,
  ) {}

  async loginService(email: string, password: string) {}

  async registerService(email: string, password: string) {
    const newUser = new this.authModel({ email, password });
    return await newUser.save();
  }

  async generateApiKeyService() {}
}

export default AuthService;
